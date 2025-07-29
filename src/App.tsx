import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
// import TermsOfService from './pages/TermsOfService';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              {/* <Route path="/terms-of-service" element={<TermsOfService />} /> */}
              {/* Catch all route for 404 */}
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center bg-gray-900">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                    <p className="text-gray-400">The page you're looking for doesn't exist.</p>
                  </div>
                </div>
              } />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;