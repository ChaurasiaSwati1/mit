import React from 'react';
import ServiceBannerWithTextN from '../../components/Core/ServiceBannerWithTextN';
import AuditSection from '../../components/ServiceDetails/AuditSection';
import ClientSection from '../../components/ServiceDetails/ClientSection';
import LinkSection from '../../components/ServiceDetails/LinkSection';
import DotTitleWithLine from '../../components/Core/DotTitleWithLine';
import DeveloperBoardOutlinedIcon from '@mui/icons-material/DeveloperBoardOutlined';
import { Box as MUIBox, styled } from '@mui/material';
import { Helmet } from 'react-helmet';
const TitleBox = styled(MUIBox)({
    background: '#01111f0f',
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
    '& .bg-transparent': {
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
const GraphicDesign = () => {
    return (
        <>
            <Helmet>
                <meta property="og:type" content="Digital Marketing" />
                <meta property="og:url" content="https://mithilait.com/graphic-designing" />
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
                    'Graphic Design',
                    'Logo Design',
                    'Flyer Design',
                    'Business Card',
                    'Brochure Design',
                    'UI & UX Design',
                ]}
                title="A creative approach to"
                subTitle={`From eye-catching logos and striking branding materials to captivating illustrations and 
                infographics, our portfolio showcases a world of creativity. Let’s turn your concepts into compelling 
                visual stories. Discover the power of design with us`}
            />
            <LinkSection
                descriptionText={`It’s everywhere you look these days. Design is one of the coolest and easiest ways 
                to get your message across. Plus, these images can really catch people’s eye and leave a lasting 
                impression.

                
                Some people call it Communication Design too, and that’s because these graphics are like visual 
                conversations. Graphic Designers? They’re like the middlemen of the visual world. It’s the go to tool 
                for businesses and organisations to connect with potential customers or clients. Think of it as a 
                blend of art, words, and more – it’s versatile and powerful.`}
                titleText="Every Company Needs Graphic Design"
                bgImg="/images/web-developer.jpg"
                bgImgAlt="graphic design"
                dirText="row"
                className="bg-white animation"
                imgAnime="fade-left"
                textAnime="fade-right"
            />
            <TitleBox>
                <DotTitleWithLine
                    title="We Offer Graphic Design Services "
                    subTitle={''}
                    icon={<DeveloperBoardOutlinedIcon />}
                />
                <LinkSection
                    descriptionText={`The talented team of graphic designers is here to assist you so that we can 
                    bring your vision to life. The correct logo attracts attention, creates a strong first impression, 
                    which is the basis of your brand identity,


                    Get your logo designed by Mithila IT at reasonable rates and do not worry about anything else. We 
                    promise to create a stunning brand identity for you to reflect your brand’s statement at an 
                    affordable price. `}
                    titleText="Logo Design"
                    bgImg="/images/design-need.png"
                    bgImgAlt="Logo Design"
                    dirText="row-reverse"
                    className="bg-transparent animation"
                    imgAnime="fade-right"
                    textAnime="fade-left"
                />
            </TitleBox>
            <LinkSection
                descriptionText={`We create stunning and relevant postcards and flyer designs for your brand so that 
                they can get information about your business. Flyers are one of the most effective and efficient 
                marketing tools, especially for event development. When done well, they can immediately send messages 
                and entice customers to purchase a product or service.`}
                titleText="Flyer Design"
                bgImg="/images/web-devlopment.png"
                bgImgAlt="Flyer Design "
                dirText="row"
                className="bg-white animation"
                imgAnime="fade-left"
                textAnime="fade-right"
            />
            <LinkSection
                descriptionText={`Concerned about brochure design or custom business cards? Don’t worry, we’ve got 
                your back. We specialise in creating captivating and visually appealing Graphic Designs for all your 
                needs. Let us turn your imaginative ideas into stunning realities.`}
                titleText="Business Card & Brochure Design"
                bgImg="/images/work.png"
                bgImgAlt="Brochure Design"
                dirText="row-reverse"
                className="bg-light"
                imgAnime="fade-right"
                textAnime="fade-left"
            />
            <LinkSection
                descriptionText={`Our skilled designers promise to provide you with the best and most amazing UI & UX 
                design to reach a larger audience. We help you extend your audience by bringing relevant and 
                responsive information to them and developing a bond between your brand and your clients. UI & UX 
                design is the process of displaying visual content. It is one of the most engaging ways to communicate 
                today. The design you use can have a significant impact on your business.`}
                titleText="UI & UX Design​"
                bgImg="/images/work.png"
                bgImgAlt="UI & UX Design​"
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

export default GraphicDesign;
