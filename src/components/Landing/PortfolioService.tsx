import {
    Grid as MUIGrid,
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
import { Link as MUIButton } from 'react-router-dom';
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
        position: 'inherit',
        '@media (max-width: 1199.98px)': {
            maxHeight: '200px',
        },
        '@media (max-width: 899.98px)': {
            marginBottom: '24px',
            maxHeight: '180px',
        },
    },
});
const Card = styled(MUICard)({
    padding: '25px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: '#ffffff',
    color: '#000000',
    borderRadius: '8px',
    position: 'inherit',
    boxShadow: '0px 0px 16px 0px rgba(0,0,0,.16)',
    '&:hover': {
        boxShadow: '0px 0px 30px 0px rgba(0,0,0,.16)',
    },
    '@media (max-width: 899.98px)': {
        textAlign: 'center',
        margin: '0 auto',
        padding: '20px',
    },
    '& a': {
        '@media (max-width: 899.98px)': {
            margin: '0 auto',
        },
    },
    '& p': {
        textAlign: 'left',
    },
});
const CBox = styled(MUIBox)({});
const Box = styled(MUIBox)({
    padding: '80px 0',
    '&:last-child': {
        paddingBottom: '0',
    },
    '@media (max-width: 899.98px)': {
        padding: '50px 0',
    },
    '@media (max-width: 699.98px)': {
        padding: '30px 0',
    },
    '&.bgImage': {
        // backgroundImage: `linear-gradient(169deg, rgba(1,17,31,0.2553396358543417) 0%,
        // rgba(119,170,252,0.33657212885154064) 63%)`,
        backgroundImage: `linear-gradient(90deg, rgb(19 6 170 / 5%) 500px, rgb(19 7 168 / 10%))`,
        position: 'relative',
        '& .topDivider': {
            transform: 'scale(-1)',
            width: '100%',
            position: 'absolute',
            top: '-1px',
        },
        '& .bottomDivider': {
            width: '100%',
            position: 'absolute',
            bottom: '-1px',
            transform: 'scaleX(-1)',
        },
    },
    '&.bgNoImage': {
        '& .topDivider, .bottomDivider': {
            display: 'none',
        },
    },
});
const Typography = styled(MUITypography)({});
const Title = styled(MUITypography)({
    fontSize: '32px',
    fontWeight: '600',
    color: '#054d79',
    marginBottom: '0',
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
        fontSize: '28px',
    },
    '@media (max-width: 991.98px)': {
        fontSize: '24px',
    },
    '@media (max-width: 767.98px)': {
        fontSize: '20px',
        marginBottom: '14px',
    },
    '@media (max-width: 575.98px)': {
        fontSize: '18px',
    },
});
const Link = styled(MUIButton)({
    display: 'flex',
    fontSize: '16px',
    color: '#ffffff',
    padding: '8px 20px',
    borderRadius: '4px',
    width: 'fit-content',
    textDecoration: 'none',
    lineHeight: '1.75',
    boxShadow: '0px 0px 8px 0px rgba(0,0,0,.16)',
    background: '#012440',
    '&:hover': {
        boxShadow: '0px 0px 16px 0px rgba(0,0,0,.16)',
        transform: 'translateY(-2px)',
        transitionDuration: '.4s',
        background: '#012440a8',
    },
    '@media (max-width: 899.98px)': {
        fontSize: '14px',
        padding: '6px 16px',
    },
});
const Grid = styled(MUIGrid)({
    height: '100%',
});
const ListBox = styled(MUIBox)({
    marginBottom: '40px',
    '& p': {
        fontSize: '18px',
        '@media (max-width: 899.98px)': {
            fontSize: '16px',
        },
        '@media (max-width: 699.98px)': {
            fontSize: '14px',
        },
    },
    '@media (max-width: 699.98px)': {
        marginBottom: '20px',
    },
});
const BoxItem = styled(MUIBox)({
    display: 'flex',
    alignItems: 'center',
    '& img': {
        marginRight: '8px',
    },
});
const ServiceGrid = styled(MUIGrid)({
    alignItems: 'center',
});
const PortfolioService = () => {
    const card = [
        {
            imageUrl: '/images/lead-generation.png',
            imgAnimation: 'fade-right',
            class: 'animation',
            cardAnimation: 'fade-left',
            alt: 'web development',
            bgI: 'bgImage',
            dir: 'row',
            src: '/website-development',
            title: 'Web Design And Development',
            description: `Website design tailored to your business needs.`,
            list: [
                { id: 'item1', value: 'White Label Solution' },
                { id: 'item2', value: 'Corporate Website' },
                { id: 'item3', value: 'E-commerce Store' },
                { id: 'item4', value: 'Photography Website' },
                { id: 'item5', value: 'Landing Page' },
                { id: 'item6', value: 'Real State' },
            ],
        },
        {
            imageUrl: '/images/web-devlopment.jpg',
            alt: 'website development',
            bgI: 'bgNoImage',
            imgAnimation: 'fade-left',
            class: 'animation',
            dir: 'row-reverse',
            cardAnimation: 'fade-right',
            src: '/website-development',
            title: 'Website Maintenance',
            description: `Creating and launching websites is not 
            enough to do business. We assign a dedicated account manager to manage your website.`,
            list: [
                { id: 'item1', value: 'Core Vitals Checks' },
                { id: 'item2', value: 'Regular Site Backups' },
                { id: 'item3', value: 'Customized Services' },
                { id: 'item4', value: 'Regular Security Scans' },
                { id: 'item5', value: '24/7 Support' },
                { id: 'item6', value: 'CMS Version Updates' },
            ],
        },
        {
            imageUrl: '/images/web-speed-optimization.webp',
            alt: 'graphic design',
            bgI: 'bgImage',
            imgAnimation: 'fade-right',
            class: 'animation',
            dir: 'row',
            cardAnimation: 'fade-left',
            src: '/speed-optimization',
            title: 'Website Speed Optimization',
            description: `It's reported that 53% of visitors will abandon your website if 
            it takes more than 3 seconds to load.`,
            list: [
                { id: 'item1', value: 'Score A on Gtmetrix' },
                { id: 'item2', value: 'Core Vital Checks' },
                { id: 'item3', value: 'Score A on Pingdom' },
                { id: 'item4', value: 'AMP Pages' },
                { id: 'item5', value: 'Score A on Lighthouse' },
                { id: 'item6', value: 'Low Page Sizes' },
            ],
        },
        {
            imageUrl: '/images/seo.png',
            alt: 'seo',
            bgI: 'bgNoImage',
            imgAnimation: 'fade-left',
            class: 'animation',
            dir: 'row-reverse',
            cardAnimation: 'fade-right',
            src: '/seo',
            title: 'Search Engine Optimisation(SEO)',
            description: `Organic strategies that drives the right kind of traffic to your website.`,
            list: [
                { id: 'item1', value: 'Higer Ranking' },
                { id: 'item2', value: 'Organic Search' },
                { id: 'item3', value: 'Monthly Reports' },
                { id: 'item4', value: 'On-site and Off-site' },
                { id: 'item5', value: 'Google Analytics' },
                { id: 'item6', value: 'Google Webmasters' },
            ],
        },
        {
            imageUrl: '/images/ads.webp',
            alt: 'digital marketing',
            bgI: 'bgImage',
            imgAnimation: 'fade-right',
            class: 'animation',
            dir: 'row',
            cardAnimation: 'fade-left',
            src: '/digital-marketing',
            title: 'Digital Marketing/Google Ads',
            description: `PPC campaigns to help you convert more customers.`,
            list: [
                { id: 'item1', value: 'Lowest CPC' },
                { id: 'item2', value: 'Value for Money' },
                { id: 'item3', value: 'Higher Sales' },
                { id: 'item4', value: 'Keyword Management' },
                { id: 'item5', value: 'Google Analytics' },
                { id: 'item6', value: 'Definite ROI' },
            ],
        },
        {
            imageUrl: '/images/social-media-marketing.jpg',
            alt: 'social media marketing',
            bgI: 'bgNoImage',
            imgAnimation: 'fade-left',
            class: 'animation',
            dir: 'row-reverse',
            cardAnimation: 'fade-right',
            src: '/social-media-marketing',
            title: 'Social Media Marketing',
            description: `Paid social media services by us include a set of Facebook Ads, 
            Twitter Ads, YouTube Ads, Instagram Ads, LinkedIn Ads, and much more.`,
            list: [
                { id: 'item1', value: 'Facebook' },
                { id: 'item2', value: 'Optimized CPC' },
                { id: 'item3', value: 'Instagram' },
                { id: 'item4', value: 'Weekly Reports' },
                { id: 'item5', value: 'Ad banners' },
                { id: 'item6', value: 'Social Media Strategy' },
            ],
        },
    ];
    return (
        <>
            {card.map((item, index) => (
                <Box key={index} className={item.bgI}>
                    <img
                        src="/images/top-divider.svg"
                        alt="top divider"
                        className="topDivider"
                        height={'180'}
                        width={'100'}
                    />
                    <img
                        src="/images/bottom-divider.svg"
                        alt="bottom divider"
                        className="bottomDivider"
                        height={'180'}
                        width={'100'}
                    />
                    <Container fixed>
                        <ServiceGrid
                            container
                            columnSpacing={{ xs: 2, sm: 4, md: 6 }}
                            rowSpacing={{ xs: 2, md: 6 }}
                            direction={item.dir as GridDirection}
                        >
                            <Grid item xs={12} md={5} lg={6}>
                                <ImgBox>
                                    <img
                                        src={item.imageUrl}
                                        alt={item.alt}
                                        className={item.class}
                                        data-aos={item.imgAnimation}
                                        data-aos-once="false"
                                        height={'100%'}
                                        width={'100%'}
                                    />
                                </ImgBox>
                            </Grid>
                            <Grid item xs={12} md={7} lg={6} key={index}>
                                <CBox>
                                    <Card className={item.class} data-aos={item.cardAnimation} data-aos-once="false">
                                        <Title variant="h2" gutterBottom>
                                            {item.title} <CircleIcon />
                                        </Title>
                                        <DescText text={item.description} />
                                        <ListBox>
                                            <Grid container columnSpacing={{ xs: 2, md: 4 }} rowSpacing={{ xs: 2 }}>
                                                {item.list.map((listItem) => (
                                                    <Grid item xs={6} sm={6} lg={6} key={listItem.id}>
                                                        <BoxItem>
                                                            <img
                                                                src="/images/check-icon.png"
                                                                alt="check icon"
                                                                height={20}
                                                                width={20}
                                                            />
                                                            <Typography>{listItem.value}</Typography>
                                                        </BoxItem>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </ListBox>
                                        <Link to={item.src}>Explore More</Link>
                                    </Card>
                                </CBox>
                            </Grid>
                        </ServiceGrid>
                    </Container>
                </Box>
            ))}
        </>
    );
};

export default PortfolioService;
