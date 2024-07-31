import React from 'react';
// import BannerWithTitle from '../../components/Core/BannerWithTitle';
import ClientSection from '../components/ServiceDetails/ClientSection';
import { styled, Box, Container, Typography as MUITypography, Grid } from '@mui/material';
import AuditSection from '../components/ServiceDetails/AuditSection';
import { Helmet } from 'react-helmet';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import BannerWithTitle from '../components/Core/BannerWithTitle';
import BlogCard from './BlogComponents/BlogCard';
import PaginationComp from './BlogComponents/Pagination';
import RecentPost from './BlogComponents/RecentPost';
const Typography = styled(MUITypography)({
    color: '#01111f75',
    fontSize: '14px',
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    '& span': {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0 6px',
        flexWrap: 'no-wrap',
        '&:first-of-type': {
            paddingLeft: '0',
        },
        '& svg': {
            fontSize: '16px',
            marginRight: '6px',
        },
    },
    '@media (max-width: 699.98px)': {
        fontSize: '12px',
        '& span': {
            '& svg': {
                fontSize: '14px',
            },
        },
    },
});
const Title = styled(MUITypography)({
    fontSize: '34px',
    fontWeight: 600,
    textAlign: 'center',
    paddingBottom: '.5rem',
    lineHeight: '1',
    background: '#01111f',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'flex',
    alignItems: 'baseline',
    textShadow: '0 0 1em #3600fa33,0 0 0.125em #3341ff4d,1em -0.125em 0.5em #ffbb3300,-1em 0.125em 0.5em #33bbff00',
    '@media (max-width: 1199.98px)': {
        fontSize: '30px',
    },
    '@media (max-width: 991.98px)': {
        fontSize: '24px',
    },
    '@media (max-width: 767.98px)': {
        fontSize: '20px',
    },
    '&.SubTitle': {
        fontSize: '26px',
        marginBottom: '20px',
        '@media (max-width: 991.98px)': {
            fontSize: '24px',
        },
        '@media (max-width: 767.98px)': {
            fontSize: '20px',
        },
    },
});
const ContentSection = styled(Box)({
    paddingBottom: '50px',
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
});
const MainGrid = styled(Grid)({
    marginBottom: '28px',
    '@media (max-width: 1199.98px)': {
        marginBottom: '24px',
    },
    '@media (max-width: 991.98px)': {
        marginBottom: '20px',
    },
});
const Grids = styled(Grid)({});
const BannerBox = styled(Box)({
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
const Blog = () => {
    const card = [
        {
            subtitle: 'Google Review',
            imgAlt: 'Miriam Platt',
            imgSrc: '/images/buildings.jpg',
            description: `Mithila IT took my ideas and brought them to life online. It's like they reached into my 
            head and pulled out the perfect website. I'm stoked about the results and how it's helping my business 
            grow`,
        },
        {
            subtitle: 'Google Review',
            imgAlt: 'Raymond Leeming',
            imgSrc: '/images/buildings.jpg',
            description: `Mithila IT took my ideas and brought them to life online. It's like they reached into my 
            head and pulled out the perfect website. I'm stoked about the results and how it's helping my business 
            grow`,
        },
        {
            subtitle: 'Google Review',
            imgAlt: 'Shaun Coachman',
            imgSrc: '/images/buildings.jpg',
            description: `Mithila IT took my ideas and brought them to life online. It's like they reached into my 
            head and pulled out the perfect website. I'm stoked about the results and how it's helping my business 
            grow`,
        },
        {
            subtitle: 'Google Review',
            imgAlt: 'Reggie Hilton',
            imgSrc: '/images/buildings.jpg',
            description: `Mithila IT took my ideas and brought them to life online. It's like they reached into my 
            head and pulled out the perfect website. I'm stoked about the results and how it's helping my business 
            grow`,
        },
        {
            subtitle: 'Google Review',
            imgAlt: 'Miriam Hilton',
            imgSrc: '/images/buildings.jpg',
            description: `Mithila IT took my ideas and brought them to life online. It's like they reached into my 
            head and pulled out the perfect website. I'm stoked about the results and how it's helping my business 
            grow`,
        },
    ];
    return (
        <>
            <Helmet>
                <meta property="og:type" content="Portfolio Details" />
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
            <BannerWithTitle title="Blog" bgImg="/images/banner/home.jpg" bgImgAlt="home banner" />
            <BannerBox>
                <Container fixed>
                    <Title>Farrell Developments: An Innovative Construction Leader</Title>
                    <Typography variant="body1">
                        <span>
                            <AccountCircleOutlinedIcon />
                            Construction Website
                        </span>{' '}
                        |
                        <span>
                            {' '}
                            <CalendarMonthOutlinedIcon /> 10 May 2023
                        </span>{' '}
                        |
                        <span>
                            <AccessTimeOutlinedIcon /> 10:50 am
                        </span>
                    </Typography>
                </Container>
            </BannerBox>
            <ContentSection>
                <Container fixed>
                    <Grids container columnSpacing={{ xs: 2, md: 4 }} rowSpacing={{ xs: 4, md: 4 }}>
                        <Grids item xs={12} md={12} lg={8}>
                            <MainGrid container columnSpacing={{ xs: 2, md: 4 }} rowSpacing={{ xs: 2, md: 4 }}>
                                {card.map((item, index) => (
                                    <Grids item xs={12} md={6} lg={6} key={index}>
                                        <BlogCard
                                            subtitle={item.subtitle}
                                            desc={item.description}
                                            imgAlt={item.imgAlt}
                                            imgSrc={item.imgSrc}
                                        />
                                    </Grids>
                                ))}
                            </MainGrid>
                            <PaginationComp />
                        </Grids>
                        <Grids item xs={12} md={12} lg={4}>
                            <RecentPost />
                        </Grids>
                    </Grids>
                </Container>
            </ContentSection>
            <ClientSection />
            <AuditSection />
        </>
    );
};

export default Blog;
