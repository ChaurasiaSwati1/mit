import React from 'react';
import ServiceBannerWithTextN from '../../components/Core/ServiceBannerWithTextN';
import AuditSection from '../../components/ServiceDetails/AuditSection';
import ClientSection from '../../components/ServiceDetails/ClientSection';
import LinkSection from '../../components/ServiceDetails/LinkSection';
import DotTitleWithLine from '../../components/Core/DotTitleWithLine';
import DeveloperBoardOutlinedIcon from '@mui/icons-material/DeveloperBoardOutlined';
import { Box as MUIBox, styled } from '@mui/material';
import SocialMediaMarketing from '../../components/ServiceDetails/SocialMediaMarketing';
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
const SocialMediaMarketingPage = () => {
    return (
        <>
            <Helmet>
                <meta property="og:type" content="Digital Marketing" />
                <meta property="og:url" content="https://mithilait.com/social-media-marketing" />
                <meta
                    property="og:title"
                    content="Mithila IT | One-Stop IT Solution Company For All Your Digital Needs"
                />
                <meta
                    property="og:description"
                    content="Transforming businesses through the power of digital innovation, Mithila IT
                    leads the way in revolutionizing the digital marketing landscape"
                />
                <meta property="og:image" content="/logo512.png" />
            </Helmet>
            <ServiceBannerWithTextN
                title="Unlock Your Potential"
                socialText={['FACEBOOK', 'INSTAGRAM', 'LINKEDIN', 'SNAPCHAT', 'Youtube', 'Tiktok', 'Twitter']}
                subTitle={`In today’s fast-changing digital world, using the magic of social media is a
                must for any successful marketing strategy. Mithila IT is here to be your go to partner 
                in this ever changing playground. We’re the experts in social media marketing, and we’ve 
                got the UK’s businesses covered.`}
            />

            <TitleBox>
                <DotTitleWithLine
                    title="Diverse Platforms for Varied Audiences"
                    subTitle={''}
                    icon={<DeveloperBoardOutlinedIcon />}
                    dataAos="fade-up"
                />
                <LinkSection
                    descriptionText={`In today’s fast paced digital landscape, a robust social media presence is no
                     longer an option; it’s a necessity. Social media marketing is your ticket to reaching and 
                     engaging with your target audience effectively. Whether you’re a local business or aiming for a 
                     national presence, our tailored social media marketing services can elevate your brand’s 
                     visibility, foster customer relationships, and drive results. Don’t miss out on the immense 
                     potential of social media`}
                    titleText="Why You Need Social Media Marketing"
                    bgImg="/images/design-need.png"
                    bgImgAlt="Visibility"
                    dirText="row-reverse"
                    className="bg-white animation"
                    imgAnime="fade-right"
                    textAnime="fade-left"
                />
            </TitleBox>
            <LinkSection
                descriptionText={`Facebook: With its vast user base, Facebook remains a cornerstone of social media 
                marketing. We create engaging content, targeted ads, and facilitate community building to connect your 
                brand with a broad audience.
                Twitter: Short and snappy, Twitter is perfect for real time engagement. Mithila IT can help you craft 
                compelling tweets, run ad campaigns, and enhance customer interactions.
                Instagram: Visual storytelling thrives on Instagram. We’ll design stunning visual content and leverage 
                Instagram’s shopping features for businesses with products to showcase.
                LinkedIn: LinkedIn is the professional network. Mithila IT can enhance your brand’s presence by 
                optimising your company page, publishing insightful content, and connecting with industry peers.`}
                titleText="Non-Negotiable Platforms: Your Business's Digital Cornerstones"
                bgImg="/images/web-devlopment.png"
                bgImgAlt="Engagement "
                dirText="row"
                className="bg-light animation"
                imgAnime="fade-left"
                textAnime="fade-right"
            />
            <LinkSection
                descriptionText={`Whether you’re a local business in Greater Manchester looking to thrive in the 
                region, or a national enterprise aiming to connect with a diverse audience, our Social Media Marketing 
                services are your compass in the digital landscape.`}
                titleText="Looking To Expand Your Audience?"
                bgImg="/images/work.png"
                bgImgAlt="Growth"
                dirText="row-reverse"
                className="bg-white animation"
                imgAnime="fade-right"
                textAnime="fade-left"
            />
            <SocialMediaMarketing />
            <TitleBox>
                <DotTitleWithLine
                    title="Why Mithila IT for Social Marketing"
                    subTitle={''}
                    icon={<DeveloperBoardOutlinedIcon />}
                    dataAos="fade-up"
                />
                <LinkSection
                    descriptionText={`Whether you’re a local business in Greater Manchester looking to thrive in the 
                    region, or a national enterprise aiming to connect with a diverse UK audience, our social media 
                    marketing services are your compass in the digital landscape.`}
                    titleText="Connect with Mithila IT Today ​"
                    bgImg="/images/work.png"
                    bgImgAlt="Connect with Mithila IT Today ​"
                    dirText="row"
                    className="bg-white animation"
                    imgAnime="fade-left"
                    textAnime="fade-right"
                />
            </TitleBox>
            <ClientSection />
            <AuditSection />
            {/* <HomeAbout />
            <HomeDemo /> */}
        </>
    );
};

export default SocialMediaMarketingPage;
