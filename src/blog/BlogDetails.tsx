import React from 'react';
// import BannerWithTitle from '../../components/Core/BannerWithTitle';
import ClientSection from '../components/ServiceDetails/ClientSection';
import { styled, Box, Container, Typography as MUITypography, Grid, Link, Card as MUICard } from '@mui/material';
import AuditSection from '../components/ServiceDetails/AuditSection';
import { Helmet } from 'react-helmet';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Map from '../components/Core/Map';
import RecentPost from './BlogComponents/RecentPost';
import ReadMoreBtn from '../components/Core/ReadMoreBtn';
import CommentForm from '../components/Form/CommentForm';
const BoxImage = styled(Box)({
    height: '300px',
    width: '100%',
    bottom: '0',
    marginBottom: '50px',
    '@media (max-width: 1199.98px)': {
        marginBottom: '40px',
    },
    '@media (max-width: 991.98px)': {
        marginBottom: '35px',
    },
    '@media (max-width: 767.98px)': {
        marginBottom: '30px',
        height: '200px',
    },
    '@media (max-width: 575.98px)': {
        marginBottom: '25px',
    },
    '& img': {
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        objectFit: 'cover',
    },
});
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
});
const SubText = styled(MUITypography)({
    fontSize: '16px',
    fontWeight: 400,
    marginBottom: '20px',
    '@media (max-width: 767.98px)': {
        fontSize: '14px',
    },
    '& a': {
        color: '#77aafc',
        textDecoration: 'none',
        fontWeight: 500,
        '&:hover': {
            color: '#01111f75',
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
const BGrid = styled(Grid)({
    '& .MuiButtonBase-root': {
        width: '100%',
        color: '#012440',
        background: '#ffffff',
        border: '1px solid #012440',
        '&:hover': {
            color: '#ffffff',
            background: '#012440',
        },
    },
});
const Card = styled(MUICard)({
    padding: '20px',
    boxShadow: '0 4px 8px #d5d5d5',
    background: '#ffffff',
    // border: '1px solid #d5d5d5',
});
const BtnBox = styled(Box)({
    paddingTop: '20px',
});
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
const BlogDetails = () => {
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
            {/* <BannerBox>
                <BannerWithTitle title="Portfolio Details" />
                <BoxImage>
                    <Container fixed>
                        <img src="/images/buildings.jpg" alt="buildings" />
                    </Container>
                </BoxImage>
            </BannerBox> */}
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
                    <Grid container columnSpacing={{ xs: 2, sm: 4, md: 6 }} rowSpacing={{ xs: 4, md: 6 }}>
                        <BGrid item xs={12} md={12} lg={8}>
                            <BoxImage>
                                <img src="/images/buildings.jpg" alt="buildings" height={'100%'} width={'100%'} />
                            </BoxImage>
                            <Title className="SubTitle">Who We Are</Title>
                            <SubText variant="body1">
                                Welcome to <Link href="https://farrelldevelopments.com/">Farrell Developments</Link>,
                                your trusted partner in crafting spaces that transcend expectations. With over a decade
                                of expertise, we have proudly served Rochdale and Greater Manchester, leaving an
                                indelible mark on residential and commercial landscapes alike.
                            </SubText>
                            <SubText variant="body1">
                                Farrell Developments offers a diverse range of services, ranging from top-tier
                                electrical solutions to roofing expertise, precision joinery, seamless flooring, and
                                artful plastering. Whether it’s a residential rewiring project or a comprehensive
                                commercial build, our seasoned team is equipped to handle projects of any scale.
                            </SubText>
                            <Title className="SubTitle">Our Journey</Title>
                            <SubText variant="body1">
                                Established with a vision to redefine construction, Farrell Developments has evolved
                                into a beacon of innovation. Our journey began in Rochdale, where we planted our roots
                                and honed our craft. Over the years, we’ve not only mastered the art of construction but
                                have consistently exceeded the expectations of our clients.
                            </SubText>
                            <SubText variant="body1">
                                <i>
                                    Contact us today to explore how Farrell Developments can elevate your next project.
                                </i>
                            </SubText>
                            <BtnBox>
                                <Grid container columnSpacing={{ xs: 2, md: 4 }} rowSpacing={{ xs: 4, md: 4 }}>
                                    <Grid item xs={6} md={6} lg={6}>
                                        <ReadMoreBtn text={'Prev'} type={'button'} />
                                    </Grid>
                                    <Grid item xs={6} md={6} lg={6}>
                                        <ReadMoreBtn text={'Next'} type={'button'} />
                                    </Grid>
                                </Grid>
                            </BtnBox>
                        </BGrid>
                        <Grid item xs={12} md={12} lg={4}>
                            <RecentPost />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <Card>
                                <CommentForm />
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </ContentSection>
            <Map />
            <ClientSection />
            <AuditSection />
        </>
    );
};

export default BlogDetails;
