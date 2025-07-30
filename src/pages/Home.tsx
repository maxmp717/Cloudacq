import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Award, Clock, Globe, Code, Smartphone, Palette, Database, 
  BarChart, Bot, Zap, Shield, Lightbulb, Target, TrendingUp, 
  ChevronDown, HelpCircle, MessageCircle, Search
} from 'lucide-react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import ProjectsShowcase from '../components/home/ProjectsShowcase';
import Testimonials from '../components/home/Testimonials';
import WhyChooseUsPage from '../components/home/WhyChooseUsPage';
import AgenticHeroSection from '../components/home/AgenticHeroSection';
import FAQPage from '../components/home/FAQPage';
import Partners from '../components/home/Partners';
import BlogPreview from '../components/home/BlogPreview';
import ContactCTA from '../components/home/ContactCTA';
import ScrollToTop from '../components/ui/ScrollToTop';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';

// Stats Component
const Stats = () => {
  const stats = [
    {
      id: 1,
      number: '150+',
      label: 'Projects Completed',
      description: 'Successful projects delivered worldwide',
      icon: Award,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 2,
      number: '98%',
      label: 'Client Satisfaction',
      description: 'Happy clients who recommend our services',
      icon: Users,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 3,
      number: '5+',
      label: 'Years Experience',
      description: 'Building digital solutions since 2020',
      icon: Clock,
      color: 'from-purple-500 to-violet-600'
    },
    {
      id: 4,
      number: '25+',
      label: 'Countries Served',
      description: 'Global reach with local expertise',
      icon: Globe,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const CountUpAnimation = ({ number }: { number: string }) => {
    const numericValue = parseInt(number.replace(/\D/g, ''));
    const suffix = number.replace(/\d/g, '');
    
    return (
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-white"
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {numericValue}
        </motion.span>
        {suffix}
      </motion.span>
    );
  };

  return (
    <Section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Worldwide</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped businesses of all sizes achieve their digital goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="group"
              >
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={28} className="text-white" />
                    </div>
                    
                    <CountUpAnimation number={stat.number} />
                    
                    <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                      {stat.label}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                  
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            Ready to join our growing list of satisfied clients?
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project Today
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </Section>
  );
};

// // TechStack Component
// const TechStack = () => {
//   const technologies = [
//     {
//       category: 'Frontend',
//       color: 'from-blue-500 to-cyan-500',
//       techs: [
//         { name: 'React', icon: '⚛️', description: 'Modern UI library' },
//         { name: 'Next.js', icon: '🔲', description: 'Full-stack framework' },
//         { name: 'Vue.js', icon: '💚', description: 'Progressive framework' },
//         { name: 'TypeScript', icon: '🟦', description: 'Type-safe JavaScript' },
//         { name: 'Tailwind CSS', icon: '🎨', description: 'Utility-first CSS' },
//         { name: 'SASS/SCSS', icon: '💄', description: 'CSS preprocessor' }
//       ]
//     },
//     {
//       category: 'Backend',
//       color: 'from-green-500 to-emerald-500',
//       techs: [
//         { name: 'Node.js', icon: '🟢', description: 'JavaScript runtime' },
//         { name: 'Python', icon: '🐍', description: 'Versatile language' },
//         { name: 'PHP', icon: '🐘', description: 'Web development' },
//         { name: 'Laravel', icon: '🔴', description: 'PHP framework' },
//         { name: 'Express.js', icon: '🚂', description: 'Web framework' },
//         { name: 'GraphQL', icon: '📊', description: 'Query language' }
//       ]
//     },
//     {
//       category: 'Database',
//       color: 'from-purple-500 to-violet-500',
//       techs: [
//         { name: 'MongoDB', icon: '🍃', description: 'NoSQL database' },
//         { name: 'PostgreSQL', icon: '🐘', description: 'Relational database' },
//         { name: 'MySQL', icon: '🐬', description: 'Popular database' },
//         { name: 'Redis', icon: '🔴', description: 'In-memory store' },
//         { name: 'Firebase', icon: '🔥', description: 'BaaS platform' },
//         { name: 'Supabase', icon: '⚡', description: 'Open source BaaS' }
//       ]
//     },
//     {
//       category: 'Cloud & DevOps',
//       color: 'from-orange-500 to-red-500',
//       techs: [
//         { name: 'AWS', icon: '☁️', description: 'Cloud platform' },
//         { name: 'Azure', icon: '🔷', description: 'Microsoft cloud' },
//         { name: 'Docker', icon: '🐳', description: 'Containerization' },
//         { name: 'Kubernetes', icon: '⚙️', description: 'Orchestration' },
//         { name: 'Vercel', icon: '🔺', description: 'Deployment platform' },
//         { name: 'Netlify', icon: '🌐', description: 'Web platform' }
//       ]
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const categoryVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const techVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <Section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <SectionHeading
//           title="Technologies We Use"
//           subtitle="We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions"
//           centered
//         />

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8"
//         >
//           {technologies.map((category, categoryIndex) => (
//             <motion.div
//               key={category.category}
//               variants={categoryVariants}
//               className="group"
//             >
//               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full border border-gray-100 dark:border-gray-700 group-hover:border-gray-200 dark:group-hover:border-gray-600">
//                 <div className="flex items-center mb-6">
//                   <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
//                   <h3 className="text-xl font-bold text-gray-900 dark:text-white">
//                     {category.category}
//                   </h3>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   {category.techs.map((tech, techIndex) => (
//                     <motion.div
//                       key={tech.name}
//                       variants={techVariants}
//                       whileHover={{ scale: 1.05, y: -2 }}
//                       className="group/tech"
//                     >
//                       <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-200 dark:hover:border-gray-500">
//                         <div className="flex items-center mb-2">
//                           <span className="text-2xl mr-2 group-hover/tech:scale-110 transition-transform duration-200">
//                             {tech.icon}
//                           </span>
//                           <span className="font-semibold text-gray-900 dark:text-white text-sm">
//                             {tech.name}
//                           </span>
//                         </div>
                        
//                         <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
//                           {tech.description}
//                         </p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${category.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </Section>
//   );
// };

// Main Home Component
const Home: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const businessInfo = {
    name: "Cloudacq",
    description: "Professional web development, mobile app development, UI/UX design, and digital marketing agency delivering cutting-edge technology solutions worldwide.",
    url: "https://cloudacq.com",
    logo: "https://cloudacq.com/logo.png",
    email: "cloudacq@gmail.com",
    phone: "+15551234567",
    address: {
      streetAddress: "Race course",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94107",
      addressCountry: "US"
    },
    foundingDate: "2020",
    numberOfEmployees: "10-50",
    priceRange: "$"
  };

  const servicesOffered = [
    "Web Development",
    "Mobile App Development", 
    "UI/UX Design",
    "E-commerce Development",
    "SEO Services",
    "Digital Marketing",
    "Cloud Solutions",
    "Progressive Web Apps",
    "CMS Development",
    "API Integration",
    "Performance Optimization",
    "Security Audits",
    "Branding & Graphic Design",
    "Technology Consulting"
  ];

  const faqs = [
    {
      question: "What web development services does Cloudacq offer?",
      answer: "Cloudacq offers comprehensive web development services including custom website development, e-commerce solutions, CMS development, progressive web apps, API integration, and performance optimization using modern technologies like React, Node.js, and cloud platforms."
    },
    {
      question: "How long does it take to develop a custom website?",
      answer: "Website development timelines vary based on complexity. A simple business website typically takes 2-4 weeks, while complex e-commerce or custom web applications can take 6-12 weeks. We provide detailed project timelines during our initial consultation."
    },
    {
      question: "Do you provide mobile app development services?",
      answer: "Yes, we develop native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter. Our mobile apps include features like push notifications, offline functionality, and seamless API integration."
    },
    {
      question: "What is included in your SEO services?",
      answer: "Our SEO services include technical SEO audits, keyword research, on-page optimization, content strategy, link building, local SEO, competitor analysis, and monthly performance reporting to improve your search engine rankings."
    },
    {
      question: "Do you offer ongoing website maintenance and support?",
      answer: "Yes, we provide comprehensive maintenance packages including security updates, performance monitoring, content updates, backup management, and 24/7 technical support to keep your website running smoothly."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${businessInfo.url}/#organization`,
        "name": businessInfo.name,
        "url": businessInfo.url,
        "logo": {
          "@type": "ImageObject",
          "url": businessInfo.logo,
          "width": 250,
          "height": 60
        },
        "description": businessInfo.description,
        "foundingDate": businessInfo.foundingDate,
        "numberOfEmployees": businessInfo.numberOfEmployees,
        "priceRange": businessInfo.priceRange,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": businessInfo.address.streetAddress,
          "addressLocality": businessInfo.address.addressLocality,
          "addressRegion": businessInfo.address.addressRegion,
          "postalCode": businessInfo.address.postalCode,
          "addressCountry": businessInfo.address.addressCountry
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": businessInfo.phone,
            "email": businessInfo.email,
            "contactType": "customer service",
            "availableLanguage": ["English"],
            "areaServed": "Worldwide"
          }
        ],
        "sameAs": [
          "https://linkedin.com/company/cloudacq",
          "https://twitter.com/cloudacq",
          "https://facebook.com/cloudacq",
          "https://instagram.com/cloudacq"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Services",
          "itemListElement": servicesOffered.map((service, index) => ({
            "@type": "Offer",
            "position": index + 1,
            "itemOffered": {
              "@type": "Service",
              "name": service,
              "provider": {
                "@id": `${businessInfo.url}/#organization`
              }
            }
          }))
        }
      },
      {
        "@type": "WebSite",
        "@id": `${businessInfo.url}/#website`,
        "url": businessInfo.url,
        "name": businessInfo.name,
        "description": businessInfo.description,
        "publisher": {
          "@id": `${businessInfo.url}/#organization`
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${businessInfo.url}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": `${businessInfo.url}/#webpage`,
        "url": businessInfo.url,
        "name": `${businessInfo.name} - Professional Web Development & Digital Marketing Agency`,
        "isPartOf": {
          "@id": `${businessInfo.url}/#website`
        },
        "about": {
          "@id": `${businessInfo.url}/#organization`
        },
        "description": "Transform your business with professional web development, mobile apps, UI/UX design, SEO, and digital marketing services. Get a free consultation today.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": businessInfo.url
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "ProfessionalService",
        "name": businessInfo.name,
        "image": businessInfo.logo,
        "description": businessInfo.description,
        "provider": {
          "@id": `${businessInfo.url}/#organization`
        },
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services",
          "itemListElement": servicesOffered.map((service, index) => ({
            "@type": "Offer",
            "position": index + 1,
            "itemOffered": {
              "@type": "Service",
              "name": service,
              "serviceType": "Digital Service"
            }
          }))
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Cloudacq - Professional Web Development & Digital Marketing Agency 2025</title>
        
        <meta 
          name="description" 
          content="Transform your business with Cloudacq's expert web development, mobile app development, UI/UX design, SEO, and digital marketing services. Get custom websites, e-commerce solutions, and cutting-edge technology. Free consultation available." 
        />
        
        <meta 
          name="keywords" 
          content="web development agency, mobile app development, UI UX design, SEO services, digital marketing, custom website development, e-commerce development, React development, Node.js, progressive web apps, responsive web design, San Francisco web agency, technology consulting, cloud solutions, performance optimization" 
        />
        
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Cloudacq" />
        <meta name="publisher" content="Cloudacq" />
        <meta name="language" content="en-US" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="San Francisco" />
        
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Cloudacq" />
        <meta property="og:title" content="Cloudacq - Professional Web Development & Digital Marketing Agency" />
        <meta property="og:description" content="Transform your business with expert web development, mobile apps, UI/UX design, SEO, and digital marketing services. Free consultation available." />
        <meta property="og:url" content="https://cloudacq.com/" />
        <meta property="og:image" content="https://cloudacq.com/images/og-image-home.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Cloudacq - Web Development and Digital Marketing Agency" />
        <meta property="og:locale" content="en_US" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@cloudacq" />
        <meta name="twitter:creator" content="@cloudacq" />
        <meta name="twitter:title" content="Cloudacq - Professional Web Development & Digital Marketing Agency" />
        <meta name="twitter:description" content="Transform your business with expert web development, mobile apps, UI/UX design, SEO, and digital marketing services." />
        <meta name="twitter:image" content="https://cloudacq.com/images/twitter-card-home.jpg" />
        <meta name="twitter:image:alt" content="Cloudacq Web Development Agency" />
        
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        
        <link rel="canonical" href="https://cloudacq.com/" />
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://analytics.google.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="alternate" hrefLang="en" href="https://cloudacq.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://cloudacq.com/" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": businessInfo.name,
            "image": businessInfo.logo,
            "description": businessInfo.description,
            "url": businessInfo.url,
            "telephone": businessInfo.phone,
            "email": businessInfo.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": businessInfo.address.streetAddress,
              "addressLocality": businessInfo.address.addressLocality,
              "addressRegion": businessInfo.address.addressRegion,
              "postalCode": businessInfo.address.postalCode,
              "addressCountry": businessInfo.address.addressCountry
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.7749",
              "longitude": "-122.4194"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "priceRange": businessInfo.priceRange,
            "currenciesAccepted": "USD",
            "paymentAccepted": "Cash, Credit Card, PayPal, Bank Transfer"
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://cloudacq.com/"
              }
            ]
          })}
        </script>
      </Helmet>

      <main>
        <Hero />
        <AgenticHeroSection />
        <Services />
        {/* <Stats /> */}
        <About />
        {/* <TechStack /> */}
        <ProjectsShowcase />
        <Testimonials />
        <Partners />
        <WhyChooseUsPage />
        <FAQPage />
        <BlogPreview />
        <ContactCTA />
        <ScrollToTop />
      </main>
    </>
  );
};

export default Home;