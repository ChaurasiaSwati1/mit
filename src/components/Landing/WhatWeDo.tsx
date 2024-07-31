import { Box, Container, Grid, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
const DescBox = styled(Box)({});
const ImageBox = styled(Box)({
    width: '100%',
    margin: 'auto',
    border: '4px solid #012440',
    borderRadius: '6px',
    boxShadow: '0px 4px 16px 2px #d5d5d5',
    cursor: 'n-resize',
    position: 'relative',
    overflow: 'hidden',
    '& img': {
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'top',
        maxHeight: '270px',
        height: '100%',
        borderRadius: '6px',
        transition: '5s all ease',
        '&:hover': {
            objectPosition: 'bottom',
        },
    },
    '& .descSection': {
        color: '#ffffff',
        position: 'absolute',
        width: '100%',
        background: '#01111fe8',
        left: '0',
        bottom: '-100%',
        fontSize: '14px',
        padding: '12px',
        textAlign: 'center',
        opacity: '0',
        transition: 'transform 0.8s ease',
        transform: 'translateY(100%)',
        '& p': {
            paddingBottom: '4px',
        },
        '& a': {
            textDecoration: 'none',
            color: '#77aafc',
        },
        '@media (max-width: 699.98px)': {
            opacity: '1',
            bottom: '0%',
            transform: 'translateY(0)',
        },
    },
    '&:hover': {
        '& .descSection': {
            opacity: '1',
            bottom: '0',
            transform: 'translateY(0)',
            overflow: 'hidden',
        },
    },
});
const ImgGrid = styled(Grid)({});
const WhatWeDo = () => {
    const img = [
        {
            src: '/images/HomeSalon.png',
            link: 'https://zemefresh.com/',
            title: 'Ayurvedic Home Salon',
            alt: 'Ayurvedic Home Salon',
            h: 270,
            w: 250,
        },
        {
            src: '/images/toothlens.png',
            link: 'https://toothlens.com/',
            title: 'ToothLens',
            alt: 'ToothLens',
            h: 270,
            w: 250,
        },
        {
            src: '/images/landing.png',
            link: 'http://adlinx.co.uk',
            title: 'Adlinx',
            alt: 'Adlinx',
            h: 270,
            w: 250,
        },
        {
            src: '/images/fitura.png',
            link: 'https://www.fitura.nl/',
            title: 'Fitura',
            dataAos: 'fade-up',
        },
    ];
    return (
        <DescBox>
            <Container fixed>
                <ImgGrid container rowSpacing={{ xs: 2, md: 4 }} columnSpacing={{ xs: 2, md: 4 }}>
                    {img.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <ImageBox className="animation" data-aos="fade-up">
                                <img src={item.src} alt={item.alt} height={item.h} width={item.w} />
                                <Box className="descSection">
                                    <Typography variant="body2">{item.title}</Typography>
                                    <Link to={item.link} target="_blank">
                                        Live View
                                    </Link>
                                </Box>
                            </ImageBox>
                        </Grid>
                    ))}
                </ImgGrid>
            </Container>
        </DescBox>
    );
};

export default WhatWeDo;
