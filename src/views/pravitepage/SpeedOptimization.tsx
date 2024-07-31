import React from 'react';
import ServiceBannerWithTextN from '../../components/Core/ServiceBannerWithTextN';
import AuditSection from '../../components/ServiceDetails/AuditSection';
import ClientSection from '../../components/ServiceDetails/ClientSection';
import LoadingSection from '../../components/ServiceDetails/LoadingSection';
import DotTitleWithLine from '../../components/Core/DotTitleWithLine';
import DeveloperBoardOutlinedIcon from '@mui/icons-material/DeveloperBoardOutlined';
import { Box as MUIBox, styled } from '@mui/material';
import { Helmet } from 'react-helmet';
const TitleBox = styled(MUIBox)({
    paddingTop: '50px',
    '@media (max-width: 1199.98px)': {
        paddingTop: '40px',
    },
    '@media (max-width: 991.98px)': {
        paddingTop: '35px',
    },
    '@media (max-width: 767.98px)': {
        paddingTop: '30px',
    },
    '@media (max-width: 575.98px)': {
        paddingTop: '25px',
    },
    '& .bg-white animation': {
        paddingTop: '0',
    },
    '& .title': {
        '& h2': {
            '& svg': {
                fontSize: '24px',
                '@media (max-width: 1199.98px)': {
                    fontSize: '22px',
                },
                '@media (max-width: 991.98px)': {
                    fontSize: '18px',
                },
                '@media (max-width: 767.98px)': {
                    fontSize: '16px',
                },
            },
        },
    },
});
const SpeedOptimization = () => {
    return (
        <>
            <Helmet>
                <meta property="og:type" content="Speed Optimization" />
                <meta property="og:url" content="https://mithilait.com/Page Speed" />
                <meta
                    property="og:title"
                    content="Mithila IT | One-Stop IT Solution Company For All Your Digital Needs"
                />
                <meta
                    property="og:description"
                    content="Optimized page speed by minimizing HTTP requests, compressing images, and using a CDN"
                />
                <meta property="og:image" content="/logo512.png" />
            </Helmet>
            <ServiceBannerWithTextN
                socialText={[
                    'Keyword Research',
                    'Optimize Content',
                    'Page Speed',
                    'Title Tags & Meta Description',
                    'Head Tag',
                    'Image Optimization',
                    'Robots.txt',
                    'Site Speed',
                    'Technical Page Speed',
                ]}
                title="Unlock Your Full Potential with Page Speed Optimisation"
                subTitle={`In today’s digital age, the ability to be found online is a game changer for businesses. 
                Whether you’re based in the dynamic heart of  Manchester or across the UK, Mithila IT is here to 
                supercharge your online visibility with our specialised page speed optimization services.`}
            />
            <TitleBox>
                <DotTitleWithLine
                    title="Page Speed Optimisation For Every Business "
                    subTitle={''}
                    icon={<DeveloperBoardOutlinedIcon />}
                    dataAos="fade-up"
                />
                <LoadingSection
                    descriptionText={`Page Speed Optimisation is the art and science of making your website more 
                        appealing to page speed and in turn, to your potential customers. By enhancing your 
                        website’s content, structure, and backlinks, you can achieve higher rankings on page 
                        speed results pages, ultimately driving more organic traffic.`}
                    titleText="What is Page Speed Optimisation?"
                    bgImg="/images/page-speed.jpg"
                    bgImgAlt="What is Page Speed Optimisation?"
                    dirText="row"
                    className="bg-white animation"
                    imgAnime="fade-left"
                    textAnime="fade-right"
                />
            </TitleBox>
            <LoadingSection
                descriptionText={`Businesses across the UK can benefit from page speed as 
                    it ensures visibility within their 
                local audience, with a focus on region-specific keywords that bridge the gap between you and potential 
                customers.
                
                With the right page speed tactics, your brand’s visibility experiences a significant boost.
                 As your website 
                climbs the Page Speed rankings, you evolve into a trusted and recognised name within your industry.`}
                titleText="Why Page Speed Matters for All"
                bgImg="/images/page-speed-2.jpg"
                bgImgAlt="Why page speed Matters for All"
                dirText="row-reverse"
                className="bg-light animation"
                imgAnime="fade-right"
                textAnime="fade-left"
            />
            <LoadingSection
                descriptionText={`Our intimate knowledge of Manchester’s dynamics extends to the wider UK market. We 
                understand the nuances of the SEO landscape, ensuring your strategies are perfectly aligned with the 
                UK audience.
                
                Beyond keywords, our Page Speed optimisation covers every aspect. From technical 
                Page Speed to on-page and off-page 
                optimisation, we ensure every facet of your website is finely tuned.
                
                We constantly analyse and refine your Page Speed strategy based on performance data, ensuring you’re 
                consistently on the right path.
                
                Open dialogue is our ethos. We keep you informed at every stage, providing insights, answering 
                queries, and discussing the strategies in play.`}
                titleText="Why Choose Mithila IT for Page Speed Optimisation?"
                bgImg="/images/page-speed-1.jpg"
                bgImgAlt="Why Choose Mithila IT for Page Speed Optimisation?"
                dirText="row"
                className="bg-white animation"
                imgAnime="fade-left"
                textAnime="fade-right"
            />
            <ClientSection />
            <AuditSection />
            {/* <HomeAbout />
            <HomeDemo /> */}
        </>
    );
};

export default SpeedOptimization;
