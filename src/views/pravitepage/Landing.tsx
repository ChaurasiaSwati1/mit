import React from 'react';
import HomeQuickLinks from '../../components/Landing/HomeQuickLinks';
// import HomeAbout from '../../components/Landing/HomeAbout';
import HomeDemo from '../../components/Landing/HomeDemo';
import ClientSection from '../../components/ServiceDetails/ClientSection';
import WhatWeDoSection from '../../components/Landing/WhatWeDoSection';
import { Helmet } from 'react-helmet';
import PortfolioServiceSection from '../../components/Landing/PortfolioServiceSection';
import HomeBanner from '../../components/Core/HomeBanner';
const Landing = () => {
    return (
        <>
            <Helmet>
                <meta
                    property="og:type"
                    content="Mithila IT | One-Stop IT Solution Company For All Your Digital Needs"
                />
                <meta property="og:url" content="https://mithilait.com/" />
                <meta property="og:title" content="Rich IT Solutions From The Land Of Rich Cultures" />
                <meta
                    property="og:description"
                    content="Mithila IT offers a rich IT solution for all your digital needs. 
                    Transform your business digitally and let it lead into the digital arena with our services. "
                />
                <meta property="og:image" content="https://mithilait.com/logo512.png" />
            </Helmet>
            <HomeBanner
                title="Rich IT Solutions From The Land Of Rich Cultures"
                titleName="Mithila It"
                bgImg="/images/banner/home.jpg"
                bgImgAlt="home banner"
                subTitle={`A One-stop IT Solution Company For All Your Digital Needs.
                    Let Your Business Lead Into The Digital Arena With Our Services`}
            />
            {/* <HomeAbout /> */}
            <PortfolioServiceSection />
            <HomeDemo />
            <HomeQuickLinks />
            <ClientSection />
            <WhatWeDoSection />
        </>
    );
};

export default Landing;
