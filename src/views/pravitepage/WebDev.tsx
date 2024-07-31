import React from 'react';
import ServiceBannerWithTextN from '../../components/Core/ServiceBannerWithTextN';
import AuditSection from '../../components/ServiceDetails/AuditSection';
import ClientSection from '../../components/ServiceDetails/ClientSection';
import LoadingSection from '../../components/ServiceDetails/LoadingSection';
import LinkSection from '../../components/ServiceDetails/LinkSection';
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
const WebDev = () => {
    return (
        <>
            <Helmet>
                <meta property="og:type" content="Digital Marketing" />
                <meta property="og:url" content="https://mithilait.com/website-development" />
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
                title="Website Development"
                socialText={[
                    'Landing Pages',
                    'Portfolio',
                    'Portal',
                    'Company Profile',
                    'Ecommerce Website',
                    'redesign',
                ]}
                subTitle={`With our expert team of designers and developers, we transform your ideas into reality,
                ensuring your site not only looks fantastic but functions flawlessly. Whether you need a brand new 
                website or a refresh for your existing one, we’ve got the skills and creativity to make it happen.`}
            />
            <TitleBox>
                <DotTitleWithLine
                    title="We Offer Website Development "
                    subTitle={''}
                    icon={<DeveloperBoardOutlinedIcon />}
                    dataAos="fade-up"
                />
                <LinkSection
                    descriptionText={`Mithila IT provides expert website development services for all your business 
                    needs. We listen carefully to how you envision your websites and our team of developers works to 
                    provide you with the most amazing results. Want to rank higher on Google? Our websites are built 
                    with SEO in mind. Our professional SEO experts will help amplify your online presence and drive 
                    more traffic to your website. Get started today with a free website audit by reaching out!`}
                    titleText="Every Company Needs Web Developer"
                    bgImg="/images/web-developer.jpg"
                    bgImgAlt="web development"
                    dirText="row"
                    className="bg-white animation"
                    imgAnime="fade-left"
                    textAnime="fade-right"
                />
            </TitleBox>
            <LoadingSection
                descriptionText={`Whether it’s a full feature online shop, a small business website showcasing your 
                services, or something completely unique, our goal at Mithila IT is to focus on typography, layout and 
                content that perfectly conveys the message that you want to send to your visitors.`}
                titleText="A design to suit your needs"
                bgImg="/images/design-need.png"
                bgImgAlt="A design to suit your needs"
                dirText="row-reverse"
                className="bg-light animation"
                imgAnime="fade-right"
                textAnime="fade-left"
            />
            <LoadingSection
                descriptionText={`We’re developers, so we know how to create websites that look stunning on every 
                device, using the latest web development technologies available. We’ve also been optimising sites for 
                search engines since 2013, so we have a proven track record that everything we create also ranks 
                highly on Google`}
                titleText="Website Development"
                bgImg="/images/web-devlopment.png"
                bgImgAlt="Website Development            "
                dirText="row"
                className="bg-white animation"
                imgAnime="fade-left"
                textAnime="fade-right"
            />
            <LinkSection
                descriptionText={`Mithila IT provides expert website development services for all your business needs.
                We listen carefully to how you envision your websites and our team of developers works to provide you 
                with the most amazing results. Want to rank higher on Google? Our websites are built with SEO in mind. 
                Our professional SEO experts will help amplify your online presence and drive more traffic to your 
                website. Get started today with a free website audit by reaching out!`}
                titleText="How we work"
                bgImg="/images/work.png"
                bgImgAlt="Lead Generation"
                dirText="row-reverse"
                className="bg-light animation"
                imgAnime="fade-right"
                textAnime="fade-left"
            />
            <LoadingSection
                descriptionText={`It’s reported that 53% of visitors will abandon your website if it takes more than 3 
                seconds to load. We ensure that your website is performing to the highest of standards to ensure 
                maximum conversions.pr`}
                titleText="Fast loading time"
                bgImg="/images/gt-matrix.png"
                bgImgAlt="Loading SEO"
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

export default WebDev;
