import { Box, Container, Grid, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
const DescBox = styled(Box)({
    '& button': {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '16px',
        color: '#ffffff',
        padding: '8px 20px',
        borderRadius: '4px',
        width: 'fit-content',
        textDecoration: 'none',
        boxShadow: '0px 0px 8px 0px rgba(0,0,0,.16)',
        background: '#012440',
        '&:hover': {
            boxShadow: '0px 0px 16px 0px rgba(0,0,0,.16)',
            transform: 'translateY(-2px)',
            background: '#012440a8',
            transitionDuration: '.4s',
        },
        '@media (max-width: 767.98px)': {
            fontSize: '14px',
            padding: '6px 16px',
        },
    },
});
const ImageBox = styled(Box)({
    width: '100%',
    margin: 'auto',
    border: '4px solid #012440',
    borderRadius: '6px',
    boxShadow: '0px 4px 16px 2px #d5d5d5',
    cursor: 'n-resize',
    position: 'relative',
    overflow: 'hidden',
    height: '280px',
    '& img': {
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'top',
        maxHeight: '280px',
        height: '100%',
        borderRadius: '4px',
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
interface ImageData {
    src: string;
    title: string;
    link: string;
    dataAos: string;
    limit?: number;
}
interface WhatWeDoProps {
    imageData: ImageData[];
    limit?: number;
}
const WhatWeDo: React.FC<WhatWeDoProps> = ({ imageData, limit = 4 }) => {
    const [displayedImages, setDisplayedImages] = React.useState(imageData.slice(0, limit));
    const [showLoadMore, setShowLoadMore] = React.useState(true);

    const handleLoadMore = () => {
        setDisplayedImages(imageData);
        setShowLoadMore(false);
    };

    const handleLoadLess = () => {
        setDisplayedImages(imageData.slice(0, limit));
        setShowLoadMore(true);
    };

    return (
        <DescBox>
            <Container fixed>
                <ImgGrid container rowSpacing={{ xs: 2, md: 4 }} columnSpacing={{ xs: 2, md: 4 }}>
                    {displayedImages.map((item: ImageData, index: number) => (
                        <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                            <ImageBox className="animation" data-aos={item.dataAos}>
                                <img src={item.src} alt="What We Do Tab" height={'100%'} width={'100%'} />
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
                {showLoadMore ? (
                    <Box textAlign="center" mt={4}>
                        <button onClick={handleLoadMore}>Load More</button>
                    </Box>
                ) : imageData.length > limit ? (
                    <Box textAlign="center" mt={4}>
                        <button onClick={handleLoadLess}>Load Less</button>
                    </Box>
                ) : null}
            </Container>
        </DescBox>
    );
};
export default WhatWeDo;
