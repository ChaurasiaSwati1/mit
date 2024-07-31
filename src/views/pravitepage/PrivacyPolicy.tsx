import React from 'react';
import DotTitleWithLine from '../../components/Core/DotTitleWithLine';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Container, Grid, Box as MUIBox, styled } from '@mui/material';
import SubTitle from '../../components/Core/SubTitle';
import DescText from '../../components/Core/DescText';
import { Helmet } from 'react-helmet';
const BoxDescB = styled(MUIBox)({
    '& p': {
        marginBottom: '8px',
        fontWeight: 'bold',
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
});
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
const PrivacyPolicy = () => {
    return (
        <>
            <Helmet>
                <meta property="og:type" content="Digital Marketing" />
                <meta property="og:url" content="https://mithilait.com/privacyPolicy" />
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
                            <DotTitleWithLine title="Privacy Policy " icon={<LockOutlinedIcon />} subTitle={''} />
                            <BoxDescB>
                                <SubTitle text="Who we are" />
                                <DescText
                                    text="Our website address is: <a href='https://mithilait.com/'>https://mithilait.com/</a>"
                                    isHTML
                                />
                            </BoxDescB>
                            <BoxDesc>
                                <SubTitle text="Comments" />
                                <DescText
                                    text="When visitors leave comments on the site we collect the data shown in 
                                the comments form, and also the visitor’s IP address and browser user agent string to 
                                help spam detection."
                                />
                                <DescText
                                    text={`An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.`}
                                />
                            </BoxDesc>
                            <BoxDesc>
                                <SubTitle text="Media" />
                                <DescText
                                    text=" If you upload images to the website, you should avoid uploading 
                                images with embedded location data (EXIF GPS) included. Visitors to the website can 
                                download and extract any location data from images on the website."
                                />
                            </BoxDesc>
                            <BoxDesc>
                                <SubTitle text="Cookies" />
                                <DescText
                                    text=" If you leave a comment on our site you may opt-in to saving your 
                                name, email address and website in cookies. These are for your convenience so that you 
                                do not have to fill in your details again when you leave another comment. These 
                                cookies will last for one year."
                                />

                                <DescText
                                    text="If you visit our login page, we will set a temporary cookie to 
                                determine if your browser accepts cookies. This cookie contains no personal data and 
                                is discarded when you close your browser."
                                />
                                <DescText
                                    text="When you log in, we will also set up several cookies to save your 
                                login information and your screen display choices. Login cookies last for two days, 
                                and screen options cookies last for a year. If you select “Remember Me”, your login 
                                will persist for two weeks. If you log out of your account, the login cookies will be 
                                removed."
                                />
                                <DescText
                                    text="If you edit or publish an article, an additional cookie will be saved 
                                in your browser. This cookie includes no personal data and simply indicates the post 
                                ID of the article you just edited. It expires after 1 day."
                                />
                            </BoxDesc>
                            <BoxDesc>
                                <SubTitle text="Embedded content from other websites" />
                                <DescText
                                    text="Articles on this site may include embedded content (e.g. videos, 
                                    images, articles, etc.). Embedded content from other websites behaves in the exact 
                                    same way as if the visitor has visited the other website."
                                />
                                <DescText
                                    text="These websites may collect data about you, use cookies, embed 
                                additional third-party tracking, and monitor your interaction with that embedded 
                                content, including tracking your interaction with the embedded content if you have an 
                                account and are logged in to that website."
                                />
                            </BoxDesc>
                            <BoxDesc>
                                <SubTitle text="Who we share your data with" />
                                <DescText
                                    text="If you request a password reset, your IP address will be included in 
                                the reset email."
                                />
                            </BoxDesc>
                            <BoxDesc>
                                <SubTitle text="How long we retain your data" />
                                <DescText
                                    text="If you leave a comment, the comment and its metadata are retained 
                                indefinitely. This is so we can recognize and approve any follow-up comments 
                                automatically instead of holding them in a moderation queue."
                                />
                                <DescText
                                    text="For users that register on our website (if any), we also store the 
                                personal information they provide in their user profile. All users can see, edit, or 
                                delete their personal information at any time (except they cannot change their 
                                username). Website administrators can also see and edit that information."
                                />
                            </BoxDesc>
                            <BoxDesc>
                                <SubTitle text="What rights you have over your data" />
                                <DescText
                                    text=" If you have an account on this site, or have left comments, you can 
                                request to receive an exported file of the personal data we hold about you, including 
                                any data you have provided to us. You can also request that we erase any personal data 
                                we hold about you. This does not include any data we are obliged to keep for 
                                administrative, legal, or security purposes."
                                />
                            </BoxDesc>
                            <BoxDesc>
                                <SubTitle text="Where we send your data" />
                                <DescText
                                    text="Visitor comments may be checked through an automated spam detection 
                                service."
                                />
                            </BoxDesc>
                        </Grid>
                    </Grid>
                </Container>
            </BoxMain>
        </>
    );
};

export default PrivacyPolicy;
