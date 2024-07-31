import React from 'react';
import DotTitleWithLine from '../../components/Core/DotTitleWithLine';
import FlareIcon from '@mui/icons-material/Flare';
import { Container, Grid, List, ListItem, Box as MUIBox, styled } from '@mui/material';
import SubTitle from '../../components/Core/SubTitle';
import DescText from '../../components/Core/DescText';
import SubTitleSmall from '../../components/Core/SubTitleSmall';
import { Helmet } from 'react-helmet';
const BoxDesc = styled(MUIBox)({
    '& p': {
        marginBottom: '8px',
        '&:last-child': {
            marginBottom: '1.75rem',
            '@media (max-width: 899.98px)': {
                marginBottom: '1.5rem',
            },
            '@media (max-width: 767.98px)': {
                marginBottom: '1.25rem',
            },
        },
    },
    '& ul': {
        paddingLeft: '18px',
        '& li': {
            listStyle: 'disc',
            paddingLeft: '0',
            paddingTop: '4px',
            paddingBottom: '4px',
            display: 'list-item',
            '&:last-child': {
                marginBottom: '1.75rem',
                '@media (max-width: 899.98px)': {
                    marginBottom: '1.5rem',
                },
                '@media (max-width: 767.98px)': {
                    marginBottom: '1.25rem',
                },
            },
        },
    },
    '&:last-child': {
        '& p': {
            marginBottom: '0',
        },
    },
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
        '@media (max-width: 1199.98px)': {
            fontSize: '24px',
        },
        '@media (max-width: 991.98px)': {
            marginBottom: '1.5rem',
        },
        '@media (max-width: 767.98px)': {
            marginBottom: '1.25rem',
            fontSize: '20px',
        },
        '@media (max-width: 575.98px)': {
            fontSize: '18px',
        },
    },
    '& h2': {
        '& .MuiSvgIcon-root': {
            fontSize: '20px',
            '@media (max-width: 991.98px)': {
                fontSize: '18px',
            },
            '@media (max-width: 767.98px)': {
                fontSize: '16px',
            },
        },
    },
});
const TermsCondition = () => {
    return (
        <>
            <Helmet>
                <meta property="og:type" content="Digital Marketing" />
                <meta property="og:url" content="https://mithilait.com/termsCondition" />
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
            </Helmet>
            <BoxMain>
                <Container fixed>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={12} className="animation" data-aos="fade-up">
                            <DotTitleWithLine title="Terms And Conditions" icon={<FlareIcon />} subTitle={''} />
                            <SubTitle text="Terms And Conditions of Mithila IT" />
                            <BoxDesc>
                                <SubTitleSmall text="1. Introduction" />
                                <DescText text="1.1 These terms and conditions govern your use of the Mithila IT website (https://mithilait.com/), hereinafter referred to as “the Website.” By accessing the Website, you agree to be bound by these terms and conditions. If you do not agree with these terms, please refrain from using the Website." />
                            </BoxDesc>
                            <BoxDesc>
                                <SubTitleSmall text="2. Information About Us" />
                                <DescText
                                    text={`2.1 The Website is operated by Mithila IT,
                                 a website design and online marketing company.`}
                                />
                            </BoxDesc>
                            <BoxDesc>
                                <SubTitleSmall text="3. Use of the Website" />
                                <DescText
                                    text={`3.1 You must use the Website in compliance with all applicable
                                 laws and regulations.`}
                                />
                                <DescText
                                    text={`3.2 You agree not to use the Website for any unlawful purpose,
                                 including but not limited to:`}
                                />
                                <List>
                                    <ListItem>
                                        Transmitting or posting any content that is defamatory, obscene, or offensive.
                                    </ListItem>
                                    <ListItem>
                                        Using the Website to engage in fraudulent or deceptive activities.
                                    </ListItem>
                                    <ListItem>
                                        Transmitting or posting content that infringes on the intellectual property
                                        rights of others.
                                    </ListItem>
                                </List>
                            </BoxDesc>
                            <BoxDesc>
                                <SubTitleSmall text="4. Privacy Policy" />
                                <DescText
                                    text={`4.1 Your use of the Website is also governed by our Privacy Policy,
                                 which can be found here.`}
                                />
                            </BoxDesc>
                            <BoxDesc>
                                <SubTitleSmall text={`5. Intellectual Property Rights`} />
                                <DescText
                                    text={`5.1 All content on the Website, including text, graphics, logos, 
                                images, and software, is the property of Mithila IT or its content suppliers and is 
                                protected by applicable copyright and intellectual property laws.`}
                                />
                            </BoxDesc>
                            <BoxDesc>
                                <SubTitleSmall text={`6. Limitation of Liability`} />
                                <DescText
                                    text={`6.1 Mithila IT shall not be liable for any direct, indirect, 
                                incidental, or consequential damages arising from the use of the Website.`}
                                />
                            </BoxDesc>
                            <BoxDesc>
                                <SubTitleSmall text={`7. Amendments`} />
                                <DescText
                                    text={`7.1 We reserve the right to amend these terms and conditions at any 
                                time. Any changes will be posted on the Website, and it is your responsibility to 
                                review them.`}
                                />
                            </BoxDesc>
                            <BoxDesc>
                                <SubTitleSmall text={`8. Contact Information`} />
                                <DescText
                                    text={`8.1 For any questions or concerns regarding these terms and 
                                conditions, please contact us at info@mithilait.com`}
                                />
                            </BoxDesc>
                            <BoxDesc>
                                <SubTitleSmall text={`9. Governing Law`} />
                                <DescText
                                    text={`9.1 These terms and conditions shall be governed by and construed in
                                 accordance with the laws of England and Wales, and any disputes arising under or in 
                                 connection with these terms shall be subject to the exclusive jurisdiction of the 
                                 courts of England and Wales.`}
                                />
                            </BoxDesc>
                        </Grid>
                    </Grid>
                </Container>
            </BoxMain>
        </>
    );
};

export default TermsCondition;
