import React from 'react';
import BannerWithTitle from '../../components/Core/BannerWithTitle';
import ClientSection from '../../components/ServiceDetails/ClientSection';
import { styled, Box } from '@mui/material';
import AuditSection from '../../components/ServiceDetails/AuditSection';
import WhatWeDoTabs from '../../components/Portfolio/WhatWeDoTabs';
import { Helmet } from 'react-helmet';
import HomeServices from '../../components/Portfolio/HomeServices';
const BannerBox = styled(Box)({
    '& .descBox': {
        paddingBottom: '0',
    },
    '& .banner-div': {
        minHeight: '320px',
        maxHeight: '320px',
        '& img': {
            minHeight: '320px',
            maxHeight: '320px',
            objectPosition: 'left',
        },
    },
});
const Portfolio = () => {
    return (
        <>
            <Helmet>
                <meta property="og:type" content="Our Portfolio" />
                <meta property="og:url" content="https://mithilait.com/portfolio" />
                <meta
                    property="og:title"
                    content="Mithila IT | One-Stop IT Solution Company For All Your Digital Needs"
                />
                <meta
                    property="og:description"
                    content="Unlock the power of technology with Mithila IT, where every solution is 
                    tailored to your unique needs"
                />
                <meta property="og:image" content="/logo512.png" />
            </Helmet>
            <BannerBox>
                <BannerWithTitle
                    title="Welcome to our portfolio"
                    bgImg="/images/portfolio-banner.jpg"
                    bgImgAlt="Portfolio Banner"
                    subTitle={`Transforming challenges into opportunities, Mithila IT pioneers 
                    the future of technology`}
                />
            </BannerBox>
            <WhatWeDoTabs />
            <HomeServices />
            <ClientSection />
            <AuditSection />
        </>
    );
};

export default Portfolio;
