import { Grid as MUIGrid, Box as MUIBox, Container, styled } from '@mui/material';
import React from 'react';
import GetDemoModal from '../Core/GetDemoModal';
import DotTitleWithLine from '../Core/DotTitleWithLine';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ImgCard from '../Core/ImgCard';
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
    '& h5': {
        marginBottom: '3rem',
        '@media (max-width: 991.98px)': {
            marginBottom: '2.5rem',
        },
        '@media (max-width: 767.98px)': {
            marginBottom: '2rem',
        },
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
});
const SocialMediaMarketing = () => {
    const card = [
        {
            titleValue: 'Facebook',
            altValue: 'Facebook',
            imgSrc: '/images/facebook.png',
        },
        {
            titleValue: 'Instagram',
            altValue: 'Instagram',
            imgSrc: '/images/Instagram.png',
        },
        {
            titleValue: 'Youtube',
            altValue: 'Youtube',
            imgSrc: '/images/youtube.png',
        },
        {
            titleValue: 'Twitter',
            altValue: 'Twitter',
            imgSrc: '/images/twitter.png',
        },
        {
            titleValue: 'Snapchat',
            altValue: 'Snapchat',
            imgSrc: '/images/snapchat.png',
        },
        {
            titleValue: 'Pinterest',
            altValue: 'Pinterest',
            imgSrc: '/images/pinterest.png',
        },
        {
            titleValue: 'WhatsApp',
            altValue: 'WhatsApp',
            imgSrc: '/images/whatsapp.png',
        },
        {
            titleValue: 'LinkedIn',
            altValue: 'LinkedIn',
            imgSrc: '/images/linkedin.png',
        },
    ];
    return (
        <Box>
            <Container fixed>
                <Grid container>
                    <GridHead item xs={12} md={12}>
                        <DotTitleWithLine
                            title="The Social Media Ecosystem "
                            icon={<PeopleOutlinedIcon />}
                            subTitle={''}
                            dataAos="fade-up"
                        />
                    </GridHead>
                </Grid>
                <ServiceGrid container columnSpacing={{ xs: 2, sm: 4, md: 6 }} rowSpacing={{ xs: 4, md: 6 }}>
                    {card.map((item, index) => (
                        <Grid item xs={6} sm={4} md={4} lg={3} key={index}>
                            <ImgCard titleText={item.titleValue} srcPath={item.imgSrc} altVal={item.altValue} />
                        </Grid>
                    ))}
                    <Grid item xs={12} md={12}>
                        <GetDemoModal btnText="Get Demo" heading="Get Demo" />
                    </Grid>
                </ServiceGrid>
            </Container>
        </Box>
    );
};

export default SocialMediaMarketing;
