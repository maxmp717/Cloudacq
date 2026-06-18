const { spawn, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Routes to prerender
const routes = ['/', '/services', '/about', '/projects', '/blog', '/contact', '/privacy-policy'];

async function run() {
  try {
    console.log('Building site...');
    execSync('npm run build', { stdio: 'inherit' });

    console.log('Starting preview server...');
    const preview = spawn('npx', ['vite', 'preview', '--port', '5173'], { stdio: ['ignore', 'pipe', 'pipe'] });

    await waitForPreview(preview);

    const { chromium } = require('playwright');
    const browser = await chromium.launch();
    const page = await browser.newPage();

    const outDir = path.resolve(__dirname, '..', 'dist', 'prerender');
    fs.mkdirSync(outDir, { recursive: true });

    for (const route of routes) {
      const url = `http://localhost:5173${route === '/' ? '/' : route}`;
      console.log('Rendering', url);
      await page.goto(url, { waitUntil: 'networkidle' });
      const html = await page.content();
      const fileName = route === '/' ? 'index.html' : `${route.replace(/\//g, '')}.html`;
      fs.writeFileSync(path.join(outDir, fileName), html, 'utf8');
    }

    await browser.close();
    preview.kill();
    console.log('Prerender complete. Files in dist/prerender');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

function waitForPreview(preview) {
  return new Promise((resolve, reject) => {
    let resolved = false;
    const timeout = setTimeout(() => {
      if (!resolved) {
        reject(new Error('Preview server did not start in time'));
      }
    }, 20000);

    preview.stdout.on('data', (data) => {
      const text = data.toString();
      process.stdout.write(text);
      if (text.includes('Local:')) {
        resolved = true;
        clearTimeout(timeout);
        resolve();
      }
    });

    preview.stderr.on('data', (data) => {
      process.stderr.write(data.toString());
    });

    preview.on('exit', (code) => {
      if (!resolved) reject(new Error('Preview server exited prematurely: ' + code));
    });
  });
}

run();
