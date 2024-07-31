import {
    Grid as MUIGrid,
    Box as MUIBox,
    Card as MUICard,
    Container,
    Typography as MUITypography,
    styled,
    GridDirection,
} from '@mui/material';
import React from 'react';
import SubTitleText from '../Core/SubTitleText';
import DescText from '../Core/DescText';
import CircleIcon from '@mui/icons-material/Circle';
import { Link as MUIButton } from 'react-router-dom';
import GetDemoModal from '../Core/GetDemoModal';
const ImgBox = styled(MUIBox)({
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    '& img': {
        objectFit: 'contain',
        height: '100%',
        maxHeight: '300px',
        borderRadius: '8px',
        // boxShadow: '0px 0px 8px 0px rgba(0,0,0,.16)',
        '&:hover': {
            boxShadow: '0px 0px 30px 0px rgba(0,0,0,.16)',
        },
        '@media (max-width: 1199.98px)': {
            maxHeight: '250px',
        },
        '@media (max-width: 899.98px)': {
            marginBottom: '24px',
            maxHeight: '220px',
        },
        '@media (max-width: 600.98px)': {
            maxHeight: '180px',
        },
    },
});
const Card = styled(MUICard)({
    padding: '0',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: 'transparent',
    boxShadow: 'none',
    color: '#000000',
    '@media (max-width: 899.98px)': {
        textAlign: 'center',
        margin: '0 auto',
    },
    '& a': {
        '@media (max-width: 899.98px)': {
            margin: '0 auto',
        },
    },
    '& .modalBtn': {
        marginLeft: '0',
        '@media (max-width: 899.98px)': {
            margin: '0 auto',
        },
    },
});
const Title = styled(MUITypography)({
    fontSize: '24px',
    fontWeight: '700',
    color: '#054d79',
    marginBottom: '16px',
    '& svg': {
        fontSize: '10px',
        position: 'relative',
        color: '#054d79',
        animation: '2s blink ease infinite',
        '@keyframes blink': {
            'from, to': {
                opacity: 0,
            },
            '50%': {
                opacity: 1,
            },
        },
    },
    '@media (max-width: 1199.98px)': {
        fontSize: '22px',
    },
    '@media (max-width: 991.98px)': {
        fontSize: '20px',
    },
    '@media (max-width: 767.98px)': {
        fontSize: '18px',
        marginBottom: '14px',
    },
    '@media (max-width: 575.98px)': {
        fontSize: '16px',
    },
});
const Link = styled(MUIButton)({
    display: 'flex',
    fontSize: '16px',
    color: '#ffffff',
    padding: '8px 20px',
    borderRadius: '4px',
    width: 'fit-content',
    textDecoration: 'none',
    lineHeight: '1.75',
    boxShadow: '0px 0px 8px 0px rgba(0,0,0,.16)',
    background: '#012440',
    '&:hover': {
        boxShadow: '0px 0px 16px 0px rgba(0,0,0,.16)',
        transform: 'translateY(-2px)',
        transitionDuration: '.4s',
        background: '#012440a8',
    },
    '@media (max-width: 899.98px)': {
        marginBottom: '30px !important',
        fontSize: '14px',
        padding: '6px 16px',
    },
});
const Grid = styled(MUIGrid)({
    height: '100%',
    '&.bg-light': {
        background: '#01111f0f',
    },
    '&.bg-white': {
        background: '#ffffff',
    },
});
const ServiceGrid = styled(MUIGrid)({
    alignItems: 'center',
    padding: '50px 0',
    '@media (max-width: 1199.98px)': {
        padding: '40px 0',
    },
    '@media (max-width: 991.98px)': {
        padding: '35px 0',
    },
    '@media (max-width: 767.98px)': {
        padding: '30px 0',
    },
    '@media (max-width: 575.98px)': {
        padding: '25px 0',
    },
});
const ServicesPage = () => {
    const card = [
        {
            imageUrl: '/images/web-devlopment.jpg',
            alt: 'website development',
            dir: 'row',
            imgClass: 'fade-right',
            divClass: 'bg-light',
            h: 300,
            w: 351,
            textClass: 'fade-left',
            link: <Link to="/website-development">Know More</Link>,
            title: 'Web Development',
            hTitle: 'Get a world class website',
            description: `Whether you’re looking for a stunning website, a user-friendly web application, 
                or a complete online branding overhaul, we’ve got you covered. Explore our portfolio, 
                discover our design process, and see how we turn ideas into captivating online experiences`,
        },
        {
            imageUrl: '/images/lead-generation.png',
            alt: 'lead generation',
            dir: 'row-reverse',
            imgClass: 'fade-left',
            divClass: 'bg-white',
            h: 300,
            w: 450,
            textClass: 'fade-right',
            link: <Link to="/lead-generation">Know More</Link>,
            title: 'Lead Generation',
            hTitle: 'Target your audience and increase your conversions',
            description: `We are lead generation experts who are here to help your business connect with potential 
            customers. From strategic campaigns to compelling landing pages and data-driven tactics, we’re your 
            partner in building a strong lead pipeline. `,
        },
        {
            imageUrl: '/images/graphic-design.jpg',
            alt: 'graphic design',
            dir: 'row',
            imgClass: 'fade-right',
            divClass: 'bg-light',
            h: 300,
            w: 450,
            textClass: 'fade-left',
            link: <Link to="/graphic-designing">Know More</Link>,
            title: 'Graphic Design',
            hTitle: `Designing tomorrow's vision today with Mithila IT: where creativity meets innovation`,
            description: `From eye-catching logos and striking branding materials to captivating illustrations and 
                infographics, our portfolio showcases a world of creativity. Let’s turn your concepts into 
                compelling visual stories. Discover the power of design with Mithila IT.`,
        },
        {
            imageUrl: '/images/seo_1.png',
            alt: 'seo',
            dir: 'row-reverse',
            imgClass: 'fade-left',
            divClass: 'bg-white',
            h: 300,
            w: 450,
            textClass: 'fade-right',
            link: <Link to="/seo">Know More</Link>,
            title: 'Search Engine Optimisation(SEO)',
            hTitle: 'Trouble taking steps in order to help your website rank higher on Google?',
            description: `Here at Mithila IT, we optimise your site effortlessly for the search engine that you 
                want to rank for, so as to provide you with hassle-free, effective and productive results 
                You can count on us to provide you with the best of the best.`,
        },
        {
            imageUrl: '/images/digital-marketing.png',
            alt: 'digital marketing',
            dir: 'row',
            imgClass: 'fade-right',
            divClass: 'bg-light',
            h: 281,
            w: 450,
            textClass: 'fade-left',
            link: <Link to="/digital-marketing">Know More</Link>,
            title: 'Digital Marketing',
            hTitle: 'Unlocking success in the digital world with Mithila IT: your link to digital marketing excellence',
            description: `From PPC and social media strategies to engaging content and data-driven campaigns. 
            Explore our success stories, discover our approach, and let’s boost your brand’s visibility and 
            engagement online. Unleash the full potential of your digital journey`,
        },
        {
            imageUrl: '/images/social-media-marketing.jpg',
            alt: 'social media marketing',
            dir: 'row-reverse',
            imgClass: 'fade-left',
            divClass: 'bg-white',
            h: 300,
            w: 450,
            textClass: 'fade-right',
            link: <Link to="/social-media-marketing">Know More</Link>,
            title: 'Social Media Marketing',
            hTitle: `Elevate your brand's presence with Mithila IT: crafting connections in the social sphere`,
            description: `Our dedicated team specialises in social media marketing across all major platforms, 
            including Facebook, Twitter, Instagram, LinkedIn, and more. From tailored campaigns and engaging 
            content to community growth and in-depth analytics, we’re your go-to partner for social media success.`,
        },
        {
            imageUrl: '/images/consultant.png',
            alt: 'IT Consulting',
            dir: 'row',
            imgClass: 'fade-right',
            divClass: 'bg-light',
            h: 300,
            w: 450,
            textClass: 'fade-left',
            link: <GetDemoModal btnText="Get Demo" heading="Get Demo" />,
            title: 'IT Consulting',
            hTitle: `Elevate your brand's presence with Mithila IT: crafting connections in the social sphere`,
            description: `Navigate the complexities of the digital landscape with expert guidance from Mithila IT's 
            consulting services. Our seasoned consultants provide strategic advice and actionable insights to help 
            you optimize your IT infrastructure, improve operational efficiency, and achieve your business 
            objectives. Whether you need help with digital transformation, IT strategy, or technology 
            implementation, we are here to support your journey towards success.`,
        },
        {
            imageUrl: '/images/support.png',
            alt: 'Technical Support',
            dir: 'row-reverse',
            imgClass: 'fade-left',
            divClass: 'bg-white',
            h: 300,
            w: 450,
            textClass: 'fade-right',
            link: <GetDemoModal btnText="Get Demo" heading="Get Demo" />,
            title: 'Technical Support',
            hTitle: `Elevate your brand's presence with Mithila IT: crafting connections in the social sphere`,
            description: `Ensure your IT systems run smoothly with our reliable technical support services. Our 
            dedicated support team is available to resolve any technical issues promptly, minimizing downtime 
            and maintaining productivity. We offer ongoing maintenance, troubleshooting, and support to keep your 
            IT environment secure and efficient, allowing you to focus on your core business activities.`,
        },
        {
            imageUrl: '/images/cloud.webp',
            alt: 'Cloud Solutions',
            dir: 'row',
            imgClass: 'fade-right',
            divClass: 'bg-light',
            h: 300,
            w: 450,
            textClass: 'fade-left',
            link: <GetDemoModal btnText="Get Demo" heading="Get Demo" />,
            title: 'Cloud Solutions',
            hTitle: `Elevate your brand's presence with Mithila IT: crafting connections in the social sphere`,
            description: `Leverage the power of the cloud with our comprehensive cloud solutions. We offer cloud 
            consulting, migration, and management services to help you transition to and optimize cloud 
            environments. Our expertise in various cloud platforms ensures that your data is secure, accessible, 
            and scalable, enabling you to benefit from increased flexibility and reduced IT costs.`,
        },
        {
            imageUrl: '/images/cyber.png',
            alt: 'Cybersecurity',
            dir: 'row-reverse',
            imgClass: 'fade-left',
            divClass: 'bg-white',
            h: 300,
            w: 450,
            textClass: 'fade-right',
            link: <GetDemoModal btnText="Get Demo" heading="Get Demo" />,
            title: 'Cybersecurity',
            hTitle: `Elevate your brand's presence with Mithila IT: crafting connections in the social sphere`,
            description: `Protect your business from digital threats with our robust cybersecurity services. 
            Mithila IT provides a range of security solutions including risk assessments, threat detection, and 
            incident response to safeguard your sensitive information. Our proactive approach to cybersecurity 
            ensures that your systems and data are protected against the latest threats, giving you peace of mind 
            in an increasingly connected world.`,
        },
    ];
    return (
        <>
            <Grid container>
                {card.map((item, index) => (
                    <Grid item xs={12} key={index} className={item.divClass}>
                        <Container fixed>
                            <ServiceGrid
                                container
                                direction={item.dir as GridDirection}
                                columnSpacing={{ xs: 2, sm: 4, md: 6 }}
                                rowSpacing={{ xs: 2, sm: 6, md: 8 }}
                            >
                                <Grid item xs={12} md={6} lg={6}>
                                    <ImgBox>
                                        <img
                                            src={item.imageUrl}
                                            alt={item.alt}
                                            className="animation"
                                            data-aos={item.imgClass}
                                            height={item.h}
                                            width={item.w}
                                        />
                                    </ImgBox>
                                </Grid>
                                <Grid item xs={12} md={6} lg={6} key={index}>
                                    <Card className="animation" data-aos={item.textClass}>
                                        <Title variant="h2" gutterBottom>
                                            {item.title} <CircleIcon />
                                        </Title>
                                        <SubTitleText text={item.hTitle} />
                                        <DescText text={item.description} />
                                        {item.link}
                                    </Card>
                                </Grid>
                            </ServiceGrid>
                        </Container>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default ServicesPage;
