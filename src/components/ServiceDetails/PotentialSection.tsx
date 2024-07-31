import { Grid as MUIGrid, Box as MUIBox, Container, styled } from '@mui/material';
import React from 'react';
import DescText from '../Core/DescText';
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
const PotentialSection = () => {
    const card = [
        {
            titleValue: 'Technical Seo',
            altValue: 'Technical Seo',
            imgSrc: '/images/tech-seo.png',
        },
        {
            titleValue: 'Organic Search',
            altValue: 'Organic Search',
            imgSrc: '/images/tech-seo.png',
        },
        {
            titleValue: 'Web Analytics',
            altValue: 'Web Analytics',
            imgSrc: '/images/tech-seo.png',
        },
        {
            titleValue: 'ON/OFF Page Seo',
            altValue: 'ON/OFF Page Seo',
            imgSrc: '/images/tech-seo.png',
        },
        {
            titleValue: 'Competitor Analysis',
            altValue: 'Competitor Analysis',
            imgSrc: '/images/tech-seo.png',
        },
        {
            titleValue: 'Keyword Ranking',
            altValue: 'Keyword Ranking',
            imgSrc: '/images/tech-seo.png',
        },
        {
            titleValue: 'Content Analysis',
            altValue: 'Content Analysis',
            imgSrc: '/images/tech-seo.png',
        },
        {
            titleValue: 'Website Audit',
            altValue: 'Website Audit',
            imgSrc: '/images/tech-seo.png',
        },
    ];
    return (
        <Box>
            <Container fixed>
                <Grid container>
                    <GridHead item xs={12} md={12}>
                        <DotTitleWithLine
                            title="Unlocking your SEO Potential with Mithila IT "
                            icon={<PeopleOutlinedIcon />}
                            subTitle={''}
                            dataAos="fade-up"
                        />
                        <DescText
                            dataAos="fade-up"
                            text={`Each of these packages is a step towards SEO success, tailored to suit your brand’s 
                            unique goals and requirements. Whether you’re just starting your SEO journey or seeking a 
                            comprehensive SEO overhaul, Mithila IT has the perfect package to fuel your digital growth`}
                        />
                    </GridHead>
                </Grid>
                <ServiceGrid container columnSpacing={{ xs: 2, sm: 4, md: 6 }} rowSpacing={{ xs: 4, md: 6 }}>
                    {card.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <ImgCard titleText={item.titleValue} srcPath={item.imgSrc} altVal={item.altValue} />
                        </Grid>
                    ))}
                    <Grid item xs={12} md={12}>
                        <GetDemoModal btnText="Get A Quote" heading="Get A Quote" />
                    </Grid>
                </ServiceGrid>
            </Container>
        </Box>
    );
};

export default PotentialSection;
