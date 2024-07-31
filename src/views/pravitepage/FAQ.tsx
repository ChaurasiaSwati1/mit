import React from 'react';
import DotTitleWithLine from '../../components/Core/DotTitleWithLine';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Container, Grid, Box as MUIBox, styled } from '@mui/material';
import AccordionPage from '../../components/Core/Accordion';
import { Helmet } from 'react-helmet';

const BoxDesc = styled(MUIBox)({
    marginBottom: '20px',
    color: '#000000',
    borderRadius: '6px',
    '& .MuiAccordion-root': {
        backgroundColor: '#ffffff',
        color: '#000000',
        boxShadow: '0 2px 12px #d5d5d5',
        borderRadius: '6px',
        '& svg': {
            color: '#000000',
        },
    },
    '& .MuiAccordion-root.Mui-expanded': {
        boxShadow: '0 2px 16px #d9d9d9',
        '& .MuiButtonBase-root': {
            backgroundColor: '#77aafc',
            color: '#ffffff',
            minHeight: 'auto',
            borderRadius: '6px 6px 0 0',
            '& svg': {
                color: '#ffffff',
            },
            '& .css-eqpfi5-MuiAccordionSummary-content.Mui-expanded': {
                margin: '16px 0',
            },
        },
        '& .css-15v22id-MuiAccordionDetails-root': {
            padding: '16px ',
        },
    },
    '&:last-child': {
        marginBottom: '10px',
    },
});

const Box = styled(MUIBox)({
    marginBottom: '10px',
});

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
    '& h4': {
        textAlign: 'center',
        fontSize: '30px',
        marginBottom: '1.75rem',
        '@media (max-width: 899.98px)': {
            marginBottom: '1.5rem',
        },
        '@media (max-width: 767.98px)': {
            marginBottom: '1.25rem',
        },
    },
    '& h2': {
        '& .MuiSvgIcon-root': {
            fontSize: '24px',
            '@media (max-width: 991.98px)': {
                fontSize: '18px',
            },
            '@media (max-width: 767.98px)': {
                fontSize: '16px',
            },
        },
    },
});

const FAQ = () => {
    const accordianValue = [
        {
            ariaControls: 'website-cost',
            id: 'website-header',
            expanded: true,
            btnVal: 'How much does a website cost?',
            descVal: `The cost of website design varies depending on the complexity and features you require. We offer 
            customised pricing based on your specific needs. Contact us for a quote.`,
        },
        {
            ariaControls: 'web-redesign',
            id: 'redesign-header',
            expanded: false,
            btnVal: 'Can you redesign an existing website?',
            descVal: `Yes, we can redesign and revamp your existing website to improve its functionality, aesthetics, 
            and user experience.`,
        },
        {
            ariaControls: 'web-seo',
            id: 'seo-header',
            expanded: false,
            btnVal: 'What is SEO, and why is it important for my website?',
            descVal: `SEO stands for Search Engine Optimisation. It's crucial for improving your website's visibility 
            on search engines like Google, which helps attract more organic traffic and potential customers.`,
        },
        {
            ariaControls: 'web-seo-effort',
            id: 'seo-effort-header',
            expanded: false,
            btnVal: 'How long does it take to see results from SEO efforts?',
            descVal: `SEO results vary depending on several factors, but you can expect to see noticeable improvements 
            in search rankings and traffic within a few months of consistent efforts.`,
        },
        {
            ariaControls: 'social-media-marketing',
            id: 'social-header',
            expanded: false,
            btnVal: 'Do you handle social media marketing for businesses?',
            descVal: `Yes, we offer social media marketing services, including content creation, ad campaigns, and 
            community management, to help businesses establish a strong online presence.`,
        },
        {
            ariaControls: 'platform-use',
            id: 'platform-header',
            expanded: false,
            btnVal: 'What platforms do you use for website development?',
            descVal: `We work with a variety of platforms, including WordPress, Shopify, and custom solutions, 
            depending on your project's requirements and goals.`,
        },
        {
            ariaControls: 'web-maintenance',
            id: 'maintenance-header',
            expanded: false,
            btnVal: 'Do you provide website maintenance services?',
            descVal: `Yes, we offer ongoing website maintenance and support to ensure your site remains secure, up to 
            date, and fully functional.`,
        },
        {
            ariaControls: 'connection',
            id: 'connection-header',
            expanded: false,
            btnVal: 'How do I get started with your services?',
            descVal: `You can get started by contacting us through our website, phone, or email. We'll discuss your 
            specific needs and goals and provide a customised plan and quote.`,
        },
    ];

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: accordianValue.map((item) => ({
            '@type': 'Question',
            name: item.btnVal,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.descVal,
            },
        })),
    };
    return (
        <>
            <Helmet>
                <meta property="og:type" content="Digital Marketing" />
                <meta property="og:url" content="https://mithilait.com/faq" />
                <meta
                    property="og:title"
                    content="Mithila IT | One-Stop IT Solution Company For All Your Digital Needs"
                />
                <meta
                    property="og:description"
                    content="Transforming businesses through the power of digital innovation, Mithila IT
            leads the way in revolutionizing the digital marketing landscape"
                />
                <meta property="og:image" content="/logo512.png" />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>
            <BoxMain>
                <Container fixed>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={12}>
                            <Box className="animation" data-aos="fade-up">
                                <DotTitleWithLine
                                    title="Frequently Asked Questions"
                                    icon={<HelpOutlineOutlinedIcon />}
                                    subTitle={''}
                                />
                            </Box>
                            {accordianValue.map((item, index) => (
                                <BoxDesc key={index} className="animation" data-aos="fade-up">
                                    <AccordionPage
                                        defaultExpanded={item.expanded}
                                        title={item.btnVal}
                                        ariaControls={item.ariaControls}
                                        id={item.id}
                                        desc={item.descVal}
                                    />
                                </BoxDesc>
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            </BoxMain>
        </>
    );
};

export default FAQ;
