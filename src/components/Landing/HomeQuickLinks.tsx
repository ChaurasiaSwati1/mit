import React from 'react';
import { Box as MUIBox, Container, Grid, Typography as MUITypography, styled } from '@mui/material';
import InfiniteHorizontalScroll from '../Core/InfiniteHorizontalScroll';

const Title = styled(MUITypography)({
    fontSize: '18px',
    fontWeight: '600',
    '@media (max-width: 1199.98px)': {
        fontSize: '16px',
    },
    '@media (max-width: 767.98px)': {
        textAlign: 'center',
        paddingTop: '25px',
    },
    '@media (max-width: 575.98px)': {
        paddingTop: '20px',
    },
});
const ClientContainer = styled(Grid)({
    alignItems: 'center',
});
const LinkCard = styled(MUIBox)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '150px',
    padding: '20px 0',
    '& img': {
        maxWidth: '100px',
        maxHeight: '100px',
        paddingBottom: '0px',
    },
    '& .filter-invert': {
        filter: 'invert(1)',
    },
});
const Box = styled(MUIBox)({});
const HomeQuickLinks = () => {
    const carouselItems = [
        {
            imageUrl: '/images/quicklinks/adlinx.png',
            alt: 'website development',
            class: '',
        },
        {
            imageUrl: '/images/quicklinks/gameforceuk.png',
            alt: 'tax claim',
            class: '',
        },
        {
            imageUrl: '/images/quicklinks/quickbrick.png',
            alt: 'bee',
            class: '',
        },
        {
            imageUrl: '/images/quicklinks/logobfm.png',
            alt: 'ob',
            class: '',
        },
        {
            imageUrl: '/images/quicklinks/gameforceuk.png',
            alt: 'tax claim',
            class: '',
        },
        {
            imageUrl: '/images/quicklinks/casaoleander.png',
            alt: 'skill development',
            class: '',
        },
        {
            imageUrl: '/images/quicklinks/claimsmith.png',
            alt: 'skill development',
            class: '',
        },
        {
            imageUrl: '/images/quicklinks/yoga-health.png',
            alt: 'skill development',
            class: '',
        },
        {
            imageUrl: '/images/quicklinks/yoga.png',
            alt: 'skill development',
            class: '',
        },
        {
            imageUrl: '/images/quicklinks/cropped-marie.webp',
            alt: 'skill development',
            class: '',
        },
        {
            imageUrl: '/images/quicklinks/dieselClaims.webp',
            alt: 'skill development',
            class: 'filter-invert',
        },
        {
            imageUrl: '/images/quicklinks/elegance.png',
            alt: 'skill development',
            class: '',
        },
        {
            imageUrl: '/images/quicklinks/e-Logo.png',
            alt: 'skill development',
            class: '',
        },
        {
            imageUrl: '/images/quicklinks/externalCleaningNW.jpeg',
            alt: 'skill development',
            class: '',
        },
        {
            imageUrl: '/images/quicklinks/farrell.webp',
            alt: 'skill development',
            class: '',
        },
        {
            imageUrl: '/images/quicklinks/gpaelectric.png',
            alt: 'skill development',
            class: '',
        },
        {
            imageUrl: '/images/quicklinks/jsc.png',
            alt: 'jsc',
            class: '',
        },
        {
            imageUrl: '/images/quicklinks/Lawlink-logo.png',
            alt: 'Lawlink-logo',
            class: '',
        },
        {
            imageUrl: '/images/quicklinks/logo-white.webp',
            alt: 'skill development',
            class: 'filter-invert',
        },
        {
            imageUrl: '/images/quicklinks/pcl.png',
            alt: 'skill development',
            class: '',
        },
        {
            imageUrl: '/images/quicklinks/SEN-Support-2.png',
            alt: 'SEN-Support-2',
            class: '',
        },
        {
            imageUrl: '/images/quicklinks/susan-Light.png',
            alt: 'susan-Light',
            class: '',
        },
        {
            imageUrl: '/images/quicklinks/zemefresh.png',
            alt: 'zemefresh',
            class: '',
        },
    ];
    return (
        <Box>
            <Container fixed>
                <ClientContainer container spacing={{ xs: 2, sm: 2, md: 4 }}>
                    <Grid item xs={12} sm={4} md={3} lg={2}>
                        <Box>
                            <Box>
                                <Title>Some of our Clients:</Title>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8} md={9} lg={10}>
                        <InfiniteHorizontalScroll duration={20000} speed={0.4}>
                            {carouselItems.map((item, index) => (
                                <LinkCard key={index}>
                                    <img
                                        src={item.imageUrl}
                                        alt={item.alt}
                                        className={item.class}
                                        height={'auto'}
                                        width={'auto'}
                                    />
                                </LinkCard>
                            ))}
                        </InfiniteHorizontalScroll>
                    </Grid>
                </ClientContainer>
            </Container>
        </Box>
    );
};

export default HomeQuickLinks;
