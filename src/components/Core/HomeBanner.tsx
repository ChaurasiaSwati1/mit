import React from 'react';
import { Container, Grid as MUIGrid, Box as MUIBox, Typography as MUITypography } from '@mui/material';
import { styled } from '@mui/material/styles';
import TypingEffect from './TypingEffect';
interface IHomeBannerProps {
    title: string;
    subTitle?: string;
    titleName?: string;
    bgImg?: string;
    bgImgAlt?: string;
}

const SubGrid = styled(MUIGrid)({
    maxWidth: '480px',
    margin: '0 auto',
    justifyContent: 'center',
    '@media (max-width: 599.98px)': {
        maxWidth: '260px',
    },
});
const Grid = styled(MUIGrid)({});
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
        fontSize: '20px',
        marginBottom: '.75rem',
    },
    '@media (max-width: 575.98px)': {
        fontSize: '16px',
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
        fontSize: '24px',
        marginBottom: '.75rem',
    },
    '@media (max-width: 575.98px)': {
        fontSize: '20px',
    },
});

const SubTitle = styled(MUITypography)({
    fontSize: '16px',
    marginTop: '0',
    marginBottom: '25px',
    textAlign: 'center',
    fontWeight: '500',
    color: '#ffffff',
    '@media (max-width: 575.98px)': {
        fontSize: '14px',
        lineHeight: '1.35',
        marginBottom: '10px',
    },
});

const Box = styled(MUIBox)({
    position: 'relative',
    minHeight: '70vh',
    maxHeight: '70vh',
    '& .bannerImg': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'bottom',
        minHeight: '70vh',
        maxHeight: '70vh',
    },
    '&:hover': {
        '& hr': {
            width: '100%',
        },
    },
    '@media (max-width: 1199.98px)': {
        minHeight: '65vh',
        maxHeight: '65vh',
        '& .bannerImg': {
            minHeight: '65vh',
            maxHeight: '65vh',
        },
    },
    '@media (max-width: 799.98px)': {
        minHeight: '400px',
        maxHeight: '400px',
        '& .bannerImg': {
            minHeight: '400px',
            maxHeight: '400px',
        },
    },
});

const TypingEffectBox = styled(MUIBox)({
    margin: '0 auto 20px',
    background: '#6809bf57',
    padding: '8px 16px',
    borderRadius: '8px',
    '& h4': {
        color: '#ffffff',
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
// const BoxItem = styled(MUIBox)({
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: '8px',
//     '& img': {
//         marginRight: '8px',
//         height: '22px',
//         width: '22px',
//         color: '#ffffff',
//     },
//     '& p': {
//         fontSize: '14px',
//         color: '#ffffff',
//         fontWeight: '500',
//     },
// });
const HomeBanner = ({ title, subTitle, bgImg, bgImgAlt, titleName }: IHomeBannerProps) => {
    // interface ServiceItem {
    //     col: {
    //         xs: number,
    //         sm: number,
    //         lg: number,
    //     };
    //     value: string;
    // }

    // const service: ServiceItem[] = [
    //     { value: 'Web Development', col: { xs: 12, sm: 5, lg: 5 } },
    //     { value: 'Lead Generation', col: { xs: 12, sm: 7, lg: 7 } },
    //     { value: 'Graphic Design', col: { xs: 12, sm: 5, lg: 5 } },
    //     { value: 'Search Engine Optimization (SEO)', col: { xs: 12, sm: 7, lg: 7 } },
    //     { value: 'Digital Marketing', col: { xs: 12, sm: 5, lg: 5 } },
    //     { value: 'Social Media Marketing', col: { xs: 12, sm: 7, lg: 7 } },
    // ];
    return (
        <Box className="banner-div">
            <img src={bgImg} alt={bgImgAlt} className="bannerImg" height={'100%'} width={'100%'} />
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
                            <SubGrid container className="animate fadeInUp">
                                <TypingEffectBox>
                                    <TypingEffect
                                        texts={[
                                            'Web Development',
                                            'Lead Generation',
                                            'Graphic Design',
                                            'Search Engine Optimization (SEO)',
                                            'Digital Marketing',
                                            'Social Media Marketing',
                                        ]}
                                        typingDelay={100}
                                        pauseDelay={1000}
                                    />
                                </TypingEffectBox>
                                {/* {service.map((item, index) => (
                                    <Grid item {...item.col} key={index}>
                                        <BoxItem>
                                            <img src="/images/check-icon.png" alt="check icon" height={20} width={20} />
                                            <Typography>{item.value}</Typography>
                                        </BoxItem>
                                    </Grid>
                                ))} */}
                            </SubGrid>
                        </Grid>
                    </Grid>
                </Container>
            </DescBox>
        </Box>
    );
};

export default HomeBanner;
