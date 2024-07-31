import { Grid as MUIGrid, Box as MUIBox, Container, styled } from '@mui/material';
import React from 'react';
import DescText from '../Core/DescText';
import TitleWithLine from '../Core/TitleWithLine';
import SubTitleSmall from '../Core/SubTitleSmall';
import GetDemoModal from '../Core/GetDemoModal';
import DescCard from '../Core/DescCard';
const Grid = styled(MUIGrid)({});
const GridHead = styled(MUIGrid)({
    textAlign: 'center',
    '& h5': {
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
const DeliveringHQDL = () => {
    const card = [
        {
            title: '1. Define Your Target Audience',
            description: `First we identify your ideal customer profile. We take the time to understand their 
            demographics, 
                needs, and habits. This forms the foundation for crafting compelling lead generation campaigns.`,
        },
        {
            title: '2. Create Engaging Content',
            description: `We develop content that speaks directly to your target audience. This can be in the form of 
            Social 
                ads, Google ads, blog posts, ebooks, landing pages, or other valuable resources.`,
        },
        {
            title: '3. Leverage Multiple Platforms',
            description: `We tailor our approach for each channel to maximise reach and engagement. We diversify your 
            lead 
                generation efforts across various channels, such as social media, email marketing, SEO, and paid 
                advertising.`,
        },
        {
            title: '4. Deliver High Quality Leads',
            description: `We then provide you with your pre-qualified leads ready for your sales team to engage. Our 
            commitment 
                is not just in generating leads but in delivering leads that have a higher likelihood of conversion, 
                saving your team time and resources.`,
        },
    ];
    return (
        <Box>
            <Container fixed>
                <Grid container>
                    <GridHead item xs={12} md={12}>
                        <TitleWithLine
                            title="Delivering High-Quality Digital Leads with No Risk"
                            subTitle={''}
                            dataAos="fade-up"
                        />
                        <DescText
                            text="Yes, zero risk. With our innovative revenue-sharing model, you can benefit 
                        from lead generation without any upfront costs. Experience top-tier, compliant leads sourced 
                        from platforms like Facebook ads, Google ads, LinkedIn, and many more. "
                            dataAos="fade-up"
                        />
                        <SubTitleSmall
                            dataAos="fade-up"
                            text="Discover Mithila IT four step lead generation plan for your business."
                        />
                    </GridHead>
                </Grid>
                <ServiceGrid container columnSpacing={{ xs: 2, sm: 4, md: 6 }} rowSpacing={{ xs: 4, md: 6 }}>
                    {card.map((item, index) => (
                        <Grid item xs={12} md={6} lg={6} key={index}>
                            <DescCard titleText={item.title} desc={item.description} />
                        </Grid>
                    ))}
                    <Grid item xs={12} md={12}>
                        <GetDemoModal btnText="Request Free Trail" heading="Book a Demo" />
                    </Grid>
                </ServiceGrid>
            </Container>
        </Box>
    );
};

export default DeliveringHQDL;
