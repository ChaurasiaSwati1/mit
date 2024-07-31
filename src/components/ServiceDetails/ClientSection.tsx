import { Grid as MUIGrid, Box as MUIBox, Container, styled } from '@mui/material';
import React from 'react';
import DotTitleWithLine from '../Core/DotTitleWithLine';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import RatingCard from '../Core/RatingCard';
import Carousel from 'react-multi-carousel';
const GridTop = styled(MUIGrid)({
    marginBottom: '2.5rem',
    '@media (max-width: 991.98px)': {
        marginBottom: '2rem',
    },
    '@media (max-width: 767.98px)': {
        marginBottom: '1.75rem',
    },
    '@media (max-width: 575.98px)': {
        marginBottom: '1.5rem',
    },
});
const RatingBox = styled(MUIBox)({
    marginRight: '20px',
});
const TopRating = styled(MUIGrid)({
    margin: '0 auto',
});
const GridHead = styled(MUIGrid)({
    textAlign: 'center',
    '& h5': {
        marginBottom: '.5rem',
    },
});
const Box = styled(MUIBox)({
    padding: '50px 0',
    background: '#01111f0f',
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
    '& h2': {
        '& svg': {
            fontSize: '24px',
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
});
const CarouselBox = styled(MUIBox)({
    '& ul': {
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        paddingBottom: '40px',
    },
    '& .custom-dot-list-style': {
        position: 'absolute',
        paddingBottom: '0',
        '& button': {
            background: '#77aafc',
            border: 'none',
            width: '10px',
            height: '10px',
        },
    },
    '& .react-multi-carousel-dot--active': {
        '& button': {
            background: '#01111f',
            border: 'none',
        },
    },
});

const ClientSection = () => {
    const responsive = {
        // extraLarge: {
        //     breakpoint: { max: 1920, min: 1200 },
        //     items: 4,
        // },
        desktop: {
            breakpoint: { max: 1920, min: 1200 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1199.98, min: 600 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 599.98, min: 425 },
            items: 1,
        },
    };
    const card = [
        {
            reviewSite: 'Google Review',
            textR: 'Miriam Platt',
            description: `Mithila IT took my ideas and brought them to life online. It's like they reached into my 
            head and pulled out the perfect website. I'm stoked about the results and how it's helping my business 
            grow`,
        },
        {
            reviewSite: 'Google Review',
            textR: 'Raymond Leeming',
            description: `Mithila IT took my ideas and brought them to life online. It's like they reached into my 
            head and pulled out the perfect website. I'm stoked about the results and how it's helping my business 
            grow`,
        },
        {
            reviewSite: 'Google Review',
            textR: 'Shaun Coachman',
            description: `Mithila IT took my ideas and brought them to life online. It's like they reached into my 
            head and pulled out the perfect website. I'm stoked about the results and how it's helping my business 
            grow`,
        },
        {
            reviewSite: 'Google Review',
            textR: 'Reggie Hilton',
            description: `Mithila IT took my ideas and brought them to life online. It's like they reached into my 
            head and pulled out the perfect website. I'm stoked about the results and how it's helping my business 
            grow`,
        },
        {
            reviewSite: 'Google Review',
            textR: 'Miriam Hilton',
            description: `Mithila IT took my ideas and brought them to life online. It's like they reached into my 
            head and pulled out the perfect website. I'm stoked about the results and how it's helping my business 
            grow`,
        },
    ];
    return (
        <Box>
            <Container fixed>
                <GridTop container>
                    <GridHead item xs={12} md={12}>
                        <DotTitleWithLine
                            title="What Our Clients Say "
                            subTitle={''}
                            icon={<PeopleOutlinedIcon />}
                            dataAos="fade-up"
                        />
                    </GridHead>
                    <TopRating item xs={12} md={8} lg={6}>
                        <RatingCard
                            reviewSite="Google Review"
                            text="Ian Ashford"
                            desc="Mithila IT is a game-changer! Their web design is not only visually stunning but 
                            also highly functional. Their SEO and digital marketing services significantly boosted our 
                            online presence and lead generation. Mithila IT is a partner that truly understands and 
                            exceeds your expectations."
                        />
                    </TopRating>
                </GridTop>
                <CarouselBox>
                    <Carousel
                        responsive={responsive}
                        draggable={true}
                        showDots={true}
                        removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item"
                        autoPlay={true}
                        autoPlaySpeed={1000}
                        infinite={true}
                    >
                        {card.map((item, index) => (
                            <RatingBox key={index}>
                                <RatingCard reviewSite={item.reviewSite} text={item.textR} desc={item.description} />
                            </RatingBox>
                        ))}
                    </Carousel>
                </CarouselBox>
            </Container>
        </Box>
    );
};

export default ClientSection;
