import React from 'react';
import ServiceBannerWithTextN from '../../components/Core/ServiceBannerWithTextN';
import AuditSection from '../../components/ServiceDetails/AuditSection';
import ClientSection from '../../components/ServiceDetails/ClientSection';
import LoadingSection from '../../components/ServiceDetails/LoadingSection';
import DotTitleWithLine from '../../components/Core/DotTitleWithLine';
import DeveloperBoardOutlinedIcon from '@mui/icons-material/DeveloperBoardOutlined';
import { Box as MUIBox, styled } from '@mui/material';
import PotentialSection from '../../components/ServiceDetails/PotentialSection';
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
const SEO = () => {
    return (
        <>
            <Helmet>
                <meta property="og:type" content="Digital Marketing" />
                <meta property="og:url" content="https://mithilait.com/seo" />
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
                socialText={[
                    'Keyword Research',
                    'On Page SEO',
                    'Optimize Content',
                    'Page Speed',
                    'Title Tags & Meta Description',
                    'Head Tag',
                    'Image Optimization',
                    'Robots.txt',
                    'Off Page SEO',
                    'Site Speed',
                    'Technical SEO',
                ]}
                title="Unlock Your Full Potential with Search Engine Optimisation"
                subTitle={`In today’s digital age, the ability to be found online is a game changer for businesses. 
                Whether you’re based in the dynamic heart of  Manchester or across the UK, Mithila IT is here to 
                supercharge your online visibility with our specialised SEO services.`}
            />
            <TitleBox>
                <DotTitleWithLine
                    title="Search Engine Optimisation For Every Business "
                    subTitle={''}
                    icon={<DeveloperBoardOutlinedIcon />}
                    dataAos="fade-up"
                />
                <LoadingSection
                    descriptionText={`Search Engine Optimisation (SEO) is the art and science of making your website 
                    more appealing to search engines and in turn, to your potential customers. By enhancing your 
                    website’s content, structure, and backlinks, you can achieve higher rankings on search engine 
                    results pages, ultimately driving more organic traffic. SEO combines elements of art and science. 
                    Its primary objective is to make your website highly appealing to search engines, which, in turn, 
                    enhances its visibility to potential customers. SEO is like a digital alchemy, transforming your 
                    online presence into a magnet for organic traffic and improved search engine rankings. `}
                    titleText="What is Search Engine Optimisation?"
                    bgImg="/images/design-need.png"
                    bgImgAlt="What is Search Engine Optimisation?"
                    dirText="row"
                    className="bg-white animation"
                    imgAnime="fade-left"
                    textAnime="fade-right"
                />
            </TitleBox>
            <LoadingSection
                descriptionText={`Businesses across the UK can benefit from SEO as it ensures visibility within their 
                local audience, with a focus on region-specific keywords that bridge the gap between you and potential 
                customers.
                
                With the right SEO tactics, your brand’s visibility experiences a significant boost. As your website 
                climbs the search engine rankings, you evolve into a trusted and recognised name within your industry.`}
                titleText="Why SEO Matters for All"
                bgImg="/images/web-developer.jpg"
                bgImgAlt="Why SEO Matters for All"
                dirText="row-reverse"
                className="bg-light animation"
                imgAnime="fade-right"
                textAnime="fade-left"
            />
            <LoadingSection
                descriptionText={`Whether you’re looking for a comprehensive overhaul, content focused strategies, or 
                a creative campaign boost, we’ve got you covered.
                
                For businesses seeking to enhance their online presence through the power of compelling content, our 
                Content-Only Package is the perfect choice.
                
                When you’re ready to elevate your online visibility to new heights, our discovery Package offers an 
                all encompassing SEO transformation.
                
                For those businesses ready to embark on innovative SEO endeavours, our Creative Campaign Package is 
                the way to go`}
                titleText="Our SEO Packages"
                bgImg="/images/web-devlopment.png"
                bgImgAlt="Our SEO Packages "
                dirText="row"
                className="bg-white animation"
                imgAnime="fade-left"
                textAnime="fade-right"
            />
            <LoadingSection
                descriptionText={`Our intimate knowledge of Manchester’s dynamics extends to the wider UK market. We 
                understand the nuances of the SEO landscape, ensuring your strategies are perfectly aligned with the 
                UK audience.
                
                Beyond keywords, our SEO optimisation covers every aspect. From technical SEO to on-page and off-page 
                optimisation, we ensure every facet of your website is finely tuned.
                
                We constantly analyse and refine your SEO strategy based on performance data, ensuring you’re 
                consistently on the right path.
                
                Open dialogue is our ethos. We keep you informed at every stage, providing insights, answering 
                queries, and discussing the strategies in play.`}
                titleText="Why Choose Mithila IT for Search Engine Optimisation?"
                bgImg="/images/seo_1.png"
                bgImgAlt="Why Choose Mithila IT for Search Engine Optimisation?"
                dirText="row-reverse"
                className="bg-light animation"
                imgAnime="fade-right"
                textAnime="fade-left"
            />
            <PotentialSection />
            <LoadingSection
                descriptionText={`Each of these packages is a step towards SEO success, tailored to suit your brand’s 
                unique goals and requirements. Whether you’re just starting your SEO journey or seeking a 
                comprehensive SEO overhaul, Mithila IT has the perfect package to fuel your digital growth.`}
                titleText="Unlocking your SEO Potential with Mithila IT​"
                bgImg="/images/gt-matrix.png"
                bgImgAlt="Unlocking your SEO Potential with Mithila IT​"
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

export default SEO;
