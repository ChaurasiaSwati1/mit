import React from 'react';
import {
    GridDirection,
    Grid as MUIGrid,
    Box as MUIBox,
    Card as MUICard,
    Container,
    Typography as MUITypography,
    styled,
    Typography,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
const BoxMain = styled(MUIBox)({
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
const ImgBox = styled(MUIBox)({
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    '& img': {
        objectFit: 'contain',
        height: '100%',
        maxHeight: '300px',
        borderRadius: '8px',
        // boxShadow: '0px 0px 8px 0px rgba(0,0,0,.16)',
        '&:hover': {
            boxShadow: '0px 0px 30px 0px rgba(0,0,0,.16)',
        },
        '@media (max-width: 1199.98px)': {
            maxHeight: '250px',
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
    '& a': {
        '@media (max-width: 899.98px)': {
            margin: '0 auto',
        },
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
const Grid = styled(MUIGrid)({
    height: '100%',
});
const ServiceGrid = styled(MUIGrid)({
    alignItems: 'center',
    padding: '30px 0',
    '@media (max-width: 899.98px)': {
        padding: '0',
    },
    '&:last-child': {
        paddingBottom: '0',
    },
});
const ListBox = styled(MUIBox)({
    marginBottom: '40px',
    '& p': {
        fontSize: '16px',
        marginBottom: '12px',
        '@media (max-width: 899.98px)': {
            fontSize: '16px',
        },
        '@media (max-width: 699.98px)': {
            fontSize: '14px',
        },
    },
    '&:last-child': {
        marginBottom: '0',
    },
    '@media (max-width: 699.98px)': {
        marginBottom: '20px',
    },
});
const BoxItem = styled(MUIBox)({
    display: 'flex',
    '& img': {
        marginRight: '8px',
    },
});
const WhyWe = () => {
    const card = [
        {
            imageUrl: '/images/whatwedo.png',
            imgClass: 'fade-right',
            textClass: 'fade-left',
            alt: 'What We Do',
            dir: 'row',
            title: 'What We Do',
            list: [
                {
                    id: 'item1',
                    heading: 'Software Development:',
                    value: `We design and develop custom software solutions that cater to your 
                    specific business needs, ensuring seamless integration and optimal performance.`,
                },
                {
                    id: 'item2',
                    heading: 'Digital Marketing:',
                    value: `Our digital marketing services are designed to enhance your online presence, drive
                    traffic, and convert visitors into loyal customers through targeted strategies and 
                    innovative campaigns.`,
                },
                {
                    id: 'item3',
                    heading: 'IT Consulting:',
                    value: `Our expert consultants provide insightful advice and strategic guidance to help you 
                    make informed decisions, optimize your IT infrastructure, and achieve your business objectives.`,
                },
                {
                    id: 'item4',
                    heading: 'Technical Support:',
                    value: `We offer comprehensive technical support to ensure your IT systems run smoothly,
                    minimizing downtime and maximizing productivity.`,
                },
            ],
        },
        {
            imageUrl: '/images/mission.png',
            alt: 'Our Mission',
            dir: 'row-reverse',
            imgClass: 'fade-left',
            textClass: 'fade-right',
            title: 'Our Mission',
            list: [
                {
                    id: 'item1',
                    heading: 'Customer-Centric Approach:',
                    value: `Your success is our priority. We listen to your needs, understand your goals, and 
                    tailor our solutions to align with your business objectives.`,
                },
                {
                    id: 'item2',
                    heading: 'Innovation:',
                    value: `We leverage the latest technologies and industry best practices to deliver 
                    innovative solutions that keep you ahead of the competition.`,
                },
                {
                    id: 'item3',
                    heading: 'Reliability:',
                    value: `With a strong commitment to quality and consistency, we ensure that our solutions 
                    are reliable and deliver long-term value.`,
                },
                {
                    id: 'item4',
                    heading: 'Expertise:',
                    value: `Our team of seasoned professionals brings a wealth of knowledge and experience to 
                    every project, ensuring high standards of excellence.`,
                },
            ],
        },
    ];
    return (
        <>
            <BoxMain>
                <Container fixed>
                    <Grid container rowSpacing={{ xs: 2, md: 6, lg: 8 }}>
                        {card.map((item, index) => (
                            <Grid item xs={12} key={index}>
                                <ServiceGrid
                                    container
                                    direction={item.dir as GridDirection}
                                    columnSpacing={{ xs: 2, sm: 4, md: 6 }}
                                    rowSpacing={{ xs: 2, md: 6 }}
                                >
                                    <Grid item xs={12} md={6} lg={6}>
                                        <ImgBox>
                                            <img
                                                src={item.imageUrl}
                                                alt={item.alt}
                                                className={`animation`}
                                                data-aos={item.imgClass}
                                                height={'100%'}
                                                width={'100%'}
                                            />
                                        </ImgBox>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6} key={index}>
                                        <Card className={`animation`} data-aos={item.textClass}>
                                            <Title variant="h2" gutterBottom>
                                                {item.title} <CircleIcon />
                                            </Title>
                                            <ListBox>
                                                {item.list.map((listItem) => (
                                                    <BoxItem key={listItem.id}>
                                                        <span>
                                                            <img
                                                                src="/images/check-icon.png"
                                                                alt="check icon"
                                                                height={20}
                                                                width={20}
                                                            />
                                                        </span>
                                                        <Typography>
                                                            <b>{listItem.heading} </b>
                                                            {listItem.value}
                                                        </Typography>
                                                    </BoxItem>
                                                ))}
                                            </ListBox>
                                        </Card>
                                    </Grid>
                                </ServiceGrid>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </BoxMain>
        </>
    );
};

export default WhyWe;
