import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import InsideLayout from './layout/InsideLayout';
import Landing from './views/pravitepage/Landing';
import AboutUs from './views/publicpage/AboutUs';
import Services from './views/pravitepage/Services';
import Contact from './views/pravitepage/Contact';
import LeadGeneration from './views/pravitepage/LeadGeneration';
import PrivacyPolicy from './views/pravitepage/PrivacyPolicy';
import TermsCondition from './views/pravitepage/TermsCondition';
import FAQ from './views/pravitepage/FAQ';
import WebDev from './views/pravitepage/WebDev';
import GraphicDesign from './views/pravitepage/GraphicDesign';
import SEO from './views/pravitepage/SEO';
import DigitalMarketing from './views/pravitepage/DigitalMarketing';
import SocialMediaMarketingPage from './views/pravitepage/SocialMediaMarketingPage';
import Portfolio from './views/pravitepage/Portfolio';
import AOS from 'aos';
import Blog from './blog/Blog';
import BlogDetails from './blog/BlogDetails';
import AddBlog from './blog/AddBlog';
import SpeedOptimization from './views/pravitepage/SpeedOptimization';
const App: React.FC = () => {
    useEffect(() => {
        AOS.init({
            offset: 0,
            duration: 600,
            easing: 'ease-in',
            delay: 100,
        });
    }, []);
    return (
        <Routes>
            <Route path="/*" element={<InsideLayout />}>
                <Route path="" element={<Landing />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contact />} />
                <Route path="lead-generation" element={<LeadGeneration />} />
                <Route path="website-development" element={<WebDev />} />
                <Route path="seo" element={<SEO />} />
                <Route path="speed-optimization" element={<SpeedOptimization />} />
                <Route path="graphic-designing" element={<GraphicDesign />} />
                <Route path="digital-marketing" element={<DigitalMarketing />} />
                <Route path="social-media-marketing" element={<SocialMediaMarketingPage />} />
                <Route path="privacyPolicy" element={<PrivacyPolicy />} />
                <Route path="termsCondition" element={<TermsCondition />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog-details" element={<BlogDetails />} />
                <Route path="add-blog" element={<AddBlog />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="/*" element={<Navigate to="/users" replace />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default App;
