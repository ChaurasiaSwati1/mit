import {
    Grid,
    Box as MUIBox,
    Card as MUICard,
    Container,
    Typography as MUITypography,
    styled,
    GridDirection,
} from '@mui/material';
import React from 'react';
import DescText from '../Core/DescText';
import CircleIcon from '@mui/icons-material/Circle';
const ImgBox = styled(MUIBox)({
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    '& img': {
        objectFit: 'contain',
        height: '100%',
        maxHeight: '260px',
        borderRadius: '8px',
        // boxShadow: '0px 0px 8px 0px rgba(0,0,0,.16)',
        '&:hover': {
            boxShadow: '0px 0px 30px 0px rgba(0,0,0,.16)',
        },
        '@media (max-width: 1199.98px)': {
            maxHeight: '240px',
        },
        '@media (max-width: 899.98px)': {
            marginBottom: '24px',
            maxHeight: '220px',
        },
        '@media (max-width: 600.98px)': {
            maxHeight: '180px',
        },
    },
});
const Card = styled(MUICard)({
    padding: '0',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: 'transparent',
    boxShadow: 'none',
    color: '#000000',
    '@media (max-width: 899.98px)': {
        textAlign: 'center',
        margin: '0 auto',
    },
    '& button': {
        margin: '0',
        '@media (max-width: 899.98px)': {
            margin: '0 auto',
        },
    },
});
const Box = styled(MUIBox)({
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
    '&.bg-light': {
        background: '#01111f0f',
    },
    '&.bg-white': {
        background: '#ffffff',
    },
});
const Title = styled(MUITypography)({
    fontSize: '24px',
    fontWeight: '700',
    color: '#054d79',
    marginBottom: '16px',
    '& svg': {
        fontSize: '10px',
        position: 'relative',
        color: '#054d79',
        animation: '2s blink ease infinite',
        '@media (max-width: 767.98px)': {
            display: 'none',
        },
        '@keyframes blink': {
            'from, to': {
                opacity: 0,
            },
            '50%': {
                opacity: 1,
            },
        },
    },
    '@media (max-width: 1199.98px)': {
        fontSize: '22px',
    },
    '@media (max-width: 991.98px)': {
        fontSize: '20px',
    },
    '@media (max-width: 767.98px)': {
        fontSize: '18px',
        marginBottom: '14px',
    },
    '@media (max-width: 575.98px)': {
        fontSize: '16px',
    },
});
const ServiceGrid = styled(Grid)({
    alignItems: 'center',
    '&:last-child': {
        paddingBottom: '0',
    },
});
interface ILoadingSectionProps {
    titleText: string;
    descriptionText: string;
    bgImg: string;
    dirText: string;
    bgImgAlt?: string;
    buttonText?: string;
    height?: string;
    width?: string;
    className: string;
    imgAnime: string;
    textAnime: string;
}
const LoadingSection = ({
    titleText,
    descriptionText,
    bgImg,
    height,
    width,
    bgImgAlt,
    buttonText,
    dirText,
    className,
    imgAnime,
    textAnime,
}: ILoadingSectionProps) => {
    const card = [
        {
            imageUrl: bgImg,
            alt: bgImgAlt,
            dir: dirText,
            title: titleText,
            h: height,
            w: width,
            description: descriptionText,
            btn: buttonText,
            imgClass: imgAnime,
            textClass: textAnime,
        },
    ];
    return (
        <Box className={className}>
            <Container fixed>
                <Grid container columnSpacing={{ xs: 2, sm: 4, md: 6 }} rowSpacing={{ xs: 4, md: 6 }}>
                    {card.map((item, index) => (
                        <Grid item xs={12} key={index}>
                            <ServiceGrid
                                container
                                direction={item.dir as GridDirection}
                                columnSpacing={{ xs: 2, sm: 4, md: 6 }}
                                key={index}
                            >
                                <Grid item xs={12} md={6} lg={7} key={index}>
                                    <Card className={`animation`} data-aos={item.textClass}>
                                        <Title variant="h2" gutterBottom>
                                            {item.title} <CircleIcon />
                                        </Title>
                                        <DescText text={item.description} />
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={6} lg={5}>
                                    <ImgBox className={`animation`} data-aos={item.imgClass}>
                                        <img src={item.imageUrl} alt={item.alt} height={item.h} width={item.w} />
                                    </ImgBox>
                                </Grid>
                            </ServiceGrid>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default LoadingSection;
