import React from 'react';
import { Container, Grid, Box as MUIBox, Typography as MUITypography } from '@mui/material';
import { styled } from '@mui/material/styles';
interface IBannerWithTitleProps {
    title: string;
    subTitle?: string;
    titleName?: string;
    bgImg?: string;
    bgImgAlt?: string;
}

const Title = styled(MUITypography)({
    fontSize: '30px',
    lineHeight: '1.5',
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#ffffff',
    '@media (max-width: 1199.98px)': {
        fontSize: '28px',
        lineHeight: '1.35',
    },
    '@media (max-width: 991.98px)': {
        fontSize: '26px',
    },
    '@media (max-width: 767.98px)': {
        fontSize: '24px',
    },
    '@media (max-width: 575.98px)': {
        fontSize: '22px',
    },
});
const TitleName = styled(MUITypography)({
    fontSize: '34px',
    lineHeight: '1.5',
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#ffffff',
    textTransform: 'uppercase',
    '@media (max-width: 1199.98px)': {
        fontSize: '30px',
        lineHeight: '1.35',
    },
    '@media (max-width: 991.98px)': {
        fontSize: '28px',
    },
    '@media (max-width: 767.98px)': {
        fontSize: '26px',
    },
    '@media (max-width: 575.98px)': {
        fontSize: '24px',
    },
});

const SubTitle = styled(MUITypography)({
    fontSize: '16px',
    marginTop: '0',
    textAlign: 'center',
    fontWeight: '500',
    color: '#ffffff',
    '@media (max-width: 575.98px)': {
        fontSize: '14px',
        lineHeight: '1.35',
    },
});

const Box = styled(MUIBox)({
    position: 'relative',
    minHeight: '60vh',
    maxHeight: '60vh',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'bottom',
        minHeight: '60vh',
        maxHeight: '60vh',
    },
    '&:hover': {
        '& hr': {
            width: '100%',
        },
    },
    '@media (max-width: 1199.98px)': {
        minHeight: '400px',
        maxHeight: '400px',
        '& img': {
            minHeight: '400px',
            maxHeight: '400px',
        },
    },
    '@media (max-width: 991.98px)': {
        minHeight: '350px',
        maxHeight: '350px',
        '& img': {
            minHeight: '350px',
            maxHeight: '350px',
        },
    },
    '@media (max-width: 767.98px)': {
        minHeight: '300',
        maxHeight: '300',
        '& img': {
            minHeight: '300',
            maxHeight: '300',
        },
    },
});

const DescBox = styled(MUIBox)({
    height: '100%',
    width: '100%',
    margin: '0 auto',
    right: 0,
    top: 0,
    alignItems: 'center',
    background: 'rgb(0 0 0 / 50%)',
    color: '#011e36',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 2,
});

const BannerWithTitle = ({ title, subTitle, bgImg, bgImgAlt, titleName }: IBannerWithTitleProps) => {
    return (
        <Box className="banner-div">
            <img src={bgImg} alt={bgImgAlt} height={'100%'} width={'100%'} />
            <DescBox className="descBox">
                <Container fixed>
                    <Grid container className="animate fadeInUp ">
                        <Grid item xs={12} md={12} lg={10} sx={{ margin: '0 auto' }}>
                            <Title variant="h1" gutterBottom>
                                {title}
                            </Title>
                            <TitleName variant="h2" gutterBottom>
                                {titleName}
                            </TitleName>
                            <SubTitle>{subTitle}</SubTitle>
                        </Grid>
                    </Grid>
                </Container>
            </DescBox>
        </Box>
    );
};

export default BannerWithTitle;
