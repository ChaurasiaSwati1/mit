import React from 'react';
import ContactPage from '../../components/Contact/ContactPage';
import { Helmet } from 'react-helmet';
import BannerWithTitle from '../../components/Core/BannerWithTitle';
const Contact = () => {
    return (
        <>
            <Helmet>
                <meta property="og:type" content="Our Portfolio" />
                <meta property="og:url" content="https://mithilait.com/contact" />
                <meta
                    property="og:title"
                    content="Mithila IT | One-Stop IT Solution Company For All Your Digital Needs"
                />
                <meta
                    property="og:description"
                    content="Empowering your journey through the digital landscape - Mithila IT, 
                    your trusted navigator"
                />
                <meta property="og:image" content="/logo512.png" />
            </Helmet>
            <BannerWithTitle
                title="Contact Us"
                subTitle="Innovate. Integrate. Elevate. - Mithila IT, your pathway to success in the digital world"
                bgImg="/images/banner/contact.jpg"
                bgImgAlt="contact banner"
            />
            <ContactPage />
        </>
    );
};

export default Contact;
