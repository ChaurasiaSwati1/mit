import React from 'react';
import {
    GridDirection,
    Grid as MUIGrid,
    Box as MUIBox,
    Card as MUICard,
    Container,
    Typography as MUITypography,
    styled,
} from '@mui/material';
import DescText from '../../components/Core/DescText';
import BannerWithTextN from '../../components/Core/BannerWithTextN';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import DotTitleWithLine from '../../components/Core/DotTitleWithLine';
import CircleIcon from '@mui/icons-material/Circle';
import AboutValue from '../../components/About/AboutValue';
import { Helmet } from 'react-helmet';
import WhyWe from '../../components/About/WhyWe';
const BoxMain = styled(MUIBox)({
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
const BoxAbout = styled(MUIBox)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    '& h2': {
        '& svg': {
            fontSize: '28px',
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
});
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
const Grid = styled(MUIGrid)({
    height: '100%',
});
const ServiceGrid = styled(MUIGrid)({
    alignItems: 'center',
    padding: '30px 0',
    '@media (max-width: 899.98px)': {
        padding: '0',
    },
    '&:last-child': {
        paddingBottom: '0',
    },
});
const AboutUs = () => {
    const card = [
        {
            imageUrl: '/images/lead-generation.png',
            imgClass: 'fade-right',
            textClass: 'fade-left',
            alt: 'about',
            dir: 'row',
            src: '/lead-generation',
            title: 'Who We Are',
            description: `At Mithila IT, we are more than just a technology company; 
            we are your strategic partners in digital transformation. Our team comprises 
            experienced developers, creative designers, strategic marketers, and insightful 
            consultants who work collaboratively to bring your vision to life. With a passion 
            for technology and a drive for excellence, we strive to provide solutions that not 
            only meet but exceed your expectations.`,
        },
        {
            imageUrl: '/images/web-devlopment.jpg',
            alt: 'Our Mission',
            dir: 'row-reverse',
            imgClass: 'fade-left',
            textClass: 'fade-right',
            src: '/website-development',
            title: 'Our Mission',
            description: `Our mission is to empower businesses by providing cutting-edge IT 
            solutions that enhance productivity, streamline operations, and foster innovation. 
            We aim to be the catalyst for your growth, helping you navigate the complex digital 
            landscape with ease and confidence.`,
        },
        {
            imageUrl: '/images/vision.png',
            imgClass: 'fade-right',
            textClass: 'fade-left',
            alt: 'Our Vision',
            dir: 'row',
            src: '/lead-generation',
            title: 'Our Vision',
            description: `We envision a world where businesses of all sizes can harness the power 
            of technology to achieve their full potential. By staying ahead of technological trends 
            and continuously improving our services, we aspire to be the leading IT solutions provider 
            recognized for our innovation, reliability, and customer-centric approach.`,
        },
    ];
    return (
        <>
            <Helmet>
                <meta property="og:type" content="About Us" />
                <meta property="og:url" content="https://mithilait.com/about" />
                <meta
                    property="og:title"
                    content="Mithila IT | One-Stop IT Solution Company For All Your Digital Needs"
                />
                <meta property="og:description" content="Your partner in navigating the digital landscape" />
                <meta property="og:image" content="/logo512.png" />
            </Helmet>
            <BannerWithTextN
                title="About Us"
                subTitle="Welcome to Mithila IT, where innovation meets excellence. 
                Founded with the vision to empower businesses through advanced technology 
                solutions, we are a team of dedicated professionals committed to delivering 
                top-notch IT services tailored to your unique needs."
                bgImg="/images/banner/about.jpg"
                bgImgAlt="about banner"
            />
            <BoxMain>
                <Container fixed>
                    <BoxAbout>
                        <DotTitleWithLine
                            title="Want To Know More About Us"
                            subTitle={''}
                            icon={<QuestionMarkIcon />}
                            dataAos="fade-up"
                        />
                    </BoxAbout>
                    <Grid container rowSpacing={{ xs: 2, md: 6, lg: 8 }}>
                        {card.map((item, index) => (
                            <Grid item xs={12} key={index}>
                                <ServiceGrid
                                    container
                                    direction={item.dir as GridDirection}
                                    columnSpacing={{ xs: 2, sm: 4, md: 6 }}
                                    rowSpacing={{ xs: 2, md: 6 }}
                                >
                                    <Grid item xs={12} md={6} lg={6}>
                                        <ImgBox>
                                            <img
                                                src={item.imageUrl}
                                                alt={item.alt}
                                                className={`animation`}
                                                data-aos={item.imgClass}
                                                height={'100%'}
                                                width={'100%'}
                                            />
                                        </ImgBox>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6} key={index}>
                                        <Card className={`animate`} data-aos={item.textClass}>
                                            <Title variant="h2" gutterBottom>
                                                {item.title} <CircleIcon />
                                            </Title>
                                            <DescText text={item.description} />
                                        </Card>
                                    </Grid>
                                </ServiceGrid>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </BoxMain>
            <AboutValue />
            <WhyWe />
        </>
    );
};

export default AboutUs;
