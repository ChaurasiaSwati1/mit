import React from 'react';
import ServiceBannerWithTextN from '../../components/Core/ServiceBannerWithTextN';
import AuditSection from '../../components/ServiceDetails/AuditSection';
import ClientSection from '../../components/ServiceDetails/ClientSection';
import LinkSection from '../../components/ServiceDetails/LinkSection';
import DotTitleWithLine from '../../components/Core/DotTitleWithLine';
import DeveloperBoardOutlinedIcon from '@mui/icons-material/DeveloperBoardOutlined';
import { Container as MUIContainer, Box as MUIBox, Typography, styled } from '@mui/material';
import MarketingSection from '../../components/ServiceDetails/MarketingSection';
import { Helmet } from 'react-helmet';
const Container = styled(MUIContainer)({
    paddingBottom: '50px',
    textAlign: 'center',
    '@media (max-width: 1199.98px)': {
        paddingBottom: '40px',
    },
    '@media (max-width: 991.98px)': {
        paddingBottom: '35px',
    },
    '@media (max-width: 767.98px)': {
        paddingBottom: '30px',
    },
    '@media (max-width: 575.98px)': {
        paddingBottom: '25px',
    },
    '& p': {
        paddingBottom: '50px',
        textAlign: 'center',
        '@media (max-width: 1199.98px)': {
            paddingBottom: '40px',
        },
        '@media (max-width: 991.98px)': {
            paddingBottom: '35px',
        },
        '@media (max-width: 767.98px)': {
            paddingBottom: '30px',
        },
        '@media (max-width: 575.98px)': {
            paddingBottom: '25px',
        },
    },
});
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
    '& .bg-light animation"': {
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
const DigitalMarketing = () => {
    return (
        <>
            <Helmet>
                <meta property="og:type" content="Digital Marketing" />
                <meta property="og:url" content="https://mithilait.com/digital-marketing" />
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
                title="A strategic approach to"
                socialText={[
                    'Digital Marketing',
                    'Seo Services',
                    'Google Ads',
                    'SMS Marketing',
                    'Social Media Marketing',
                    'Email Marketing',
                    'SEO Optimization',
                    'Content Writing',
                ]}
                subTitle={`Elevate your online presence with Mithila IT! Our digital marketing solutions encompass a 
                range of strategies to power your business’s success. Our tailored solutions are designed to amplify 
                your online presence, boost engagement, and drive results.`}
            />

            <TitleBox>
                <DotTitleWithLine
                    title="Why Digital Marketing Matters "
                    subTitle={''}
                    icon={<DeveloperBoardOutlinedIcon />}
                    classVal="animation"
                    dataAos="fade-up"
                />
                <Container fixed className="animation" data-aos="fade-up">
                    <Typography variant="body1">
                        In today’s hyper connected world, having a compelling digital presence is no longer a luxury but
                        a necessity. It’s not just about being online; it’s about making a meaningful impact. Here’s why
                        digital marketing is so crucial:
                    </Typography>
                </Container>
                <LinkSection
                    descriptionText={`The internet is a crowded space. Digital marketing ensures that your brand is 
                    visible to your target audience, helping you stand out amidst the competition.`}
                    titleText="Visibility                "
                    bgImg="/images/design-need.png"
                    bgImgAlt="Visibility"
                    dirText="row-reverse"
                    className="bg-light animation"
                    imgAnime="fade-right"
                    textAnime="fade-left"
                />
            </TitleBox>
            <LinkSection
                descriptionText={`It’s not enough to be seen; you need to engage your audience. Digital marketing 
                allows you to connect with potential customers on a personal level, fostering lasting relationships.`}
                titleText="Engagement"
                bgImg="/images/web-devlopment.png"
                bgImgAlt="Engagement "
                dirText="row"
                className="bg-white animation"
                imgAnime="fade-left"
                textAnime="fade-right"
            />
            <LinkSection
                descriptionText={`A well executed digital marketing strategy can fuel business growth by generating 
                leads, increasing conversions, and expanding your customer base.`}
                titleText="Growth"
                bgImg="/images/work.png"
                bgImgAlt="Growth"
                dirText="row-reverse"
                className="bg-light animation"
                imgAnime="fade-right"
                textAnime="fade-left"
            />
            <LinkSection
                descriptionText={`With digital marketing, you can harness the power of data to make informed decisions 
                and continually refine your approach for optimal results.`}
                titleText="Data Driven Insights​"
                bgImg="/images/work.png"
                bgImgAlt="Data Driven Insights​"
                dirText="row"
                className="bg-white animation"
                imgAnime="fade-left"
                textAnime="fade-right"
            />
            <MarketingSection />
            <ClientSection />
            <AuditSection />
            {/* <HomeAbout />
            <HomeDemo /> */}
        </>
    );
};

export default DigitalMarketing;
