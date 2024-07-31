import { Grid as MUIGrid, Box as MUIBox, Container, styled } from '@mui/material';
import React from 'react';
import GetDemoModal from '../Core/GetDemoModal';
import DotTitleWithLine from '../Core/DotTitleWithLine';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import DescText from '../Core/DescText';
import SubTitleSmall from '../Core/SubTitleSmall';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
const Grid = styled(MUIGrid)({});
const GridHead = styled(MUIGrid)({
    textAlign: 'center',
    color: '#ffffff',
    '& h2': {
        WebkitTextFillColor: '#ffffff',
        '&:after': {
            background: '#ffffff',
        },
        '& svg': {
            color: '#ffffff',
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
    '& h5, p': {
        marginBottom: '3rem',
        '@media (max-width: 991.98px)': {
            marginBottom: '2.5rem',
        },
        '@media (max-width: 767.98px)': {
            marginBottom: '2rem',
        },
    },
});
const IconBox = styled(MUIBox)({
    width: '100%',
    marginBottom: '1rem',
    textAlign: 'center',
    '& svg': {
        fontSize: '60px',
        color: '#ffffff',
    },
});
const Box = styled(MUIBox)({
    padding: '50px 0',
    background: 'url(/images/wave-bg-3.jpg)',
    backgroundSize: 'cover',
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
const ServiceGrid = styled(Grid)({
    marginBottom: '48px',
    '&:last-child': {
        marginBottom: '0',
    },
    '@media (max-width: 1199.98px)': {
        marginBottom: '32px',
    },
    '@media (max-width: 991.98px)': {
        marginBottom: '24px',
    },
    '@media (max-width: 767.98px)': {
        marginBottom: '20px',
    },
    '& h5, p': {
        color: '#ffffff',
        textAlign: 'center',
    },
    '& h5': {
        marginBottom: '1rem',
        '@media (max-width: 991.98px)': {
            marginBottom: '.75rem',
        },
    },
});
const AboutValue = () => {
    const card = [
        {
            altValue: `Integrity`,
            imgSrc: `/images/digital-market.png`,
            title: `Integrity`,
            icon: <LanguageOutlinedIcon />,
            desc: `We uphold the highest standards of integrity in all our actions.`,
        },
        {
            altValue: `Excellence`,
            imgSrc: `/images/digital-market.png`,
            title: `Excellence`,
            icon: <SentimentSatisfiedAltOutlinedIcon />,
            desc: `We are committed to delivering exceptional service and solutions.`,
        },
        {
            altValue: `Colaboration`,
            imgSrc: `/images/digital-market.png`,
            title: `Colaboration`,
            icon: <GroupsOutlinedIcon />,
            desc: `We believe in the power of teamwork and foster a collaborative environment.`,
        },
        {
            altValue: 'Innovation',
            imgSrc: '/images/digital-market.png',
            title: 'Innovation',
            icon: <InsightsOutlinedIcon />,
            desc: `We embrace change and encourage creativity to drive progress.`,
        },
    ];
    return (
        <Box>
            <Container fixed>
                <Grid container className="animation" data-aos="fade-up">
                    <GridHead item xs={12} md={12}>
                        <DotTitleWithLine
                            title="Our Values"
                            icon={<PeopleOutlinedIcon />}
                            subTitle={''}
                            classVal="animation"
                            dataAos="fade-up"
                        />
                        <DescText
                            text={`Thank you for considering Mithila IT as your trusted technology partner. 
                            We look forward to collaborating with you and contributing to your business success.`}
                            isHTML
                            classVal="animation"
                            dataAos="fade-up"
                        />
                    </GridHead>
                </Grid>
                <ServiceGrid container columnSpacing={{ xs: 4, lg: 6 }} rowSpacing={{ xs: 4, lg: 6 }}>
                    {card.map((item, index) => (
                        <Grid item xs={12} sm={6} md={6} key={index} className="animation" data-aos="fade-up">
                            <IconBox>{item.icon}</IconBox>
                            <SubTitleSmall text={item.title} />
                            <DescText text={item.desc} />
                        </Grid>
                    ))}
                    <Grid item xs={12} md={12} className="animation" data-aos="fade-up">
                        <GetDemoModal btnText="Enquire Us" heading="Enquire Us" />
                    </Grid>
                </ServiceGrid>
            </Container>
        </Box>
    );
};

export default AboutValue;
