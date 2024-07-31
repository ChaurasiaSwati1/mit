import React, { useState } from 'react';
import {
    Typography as MUITypography,
    styled,
    Box as MUIBox,
    Grid as MUIGrid,
    List as MUIList,
    ListItem,
    Container,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import PlaceIcon from '@mui/icons-material/Place';
// import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescText from '../Core/DescText';
import LogoIndex from '../Navbar/LogoIndex';
import LabelWithIcon from '../Core/LabelWithIcon';
import { Link } from 'react-router-dom';
const FooterMain = styled(MUIGrid)({
    '& p': {
        color: '#ffffff',
        '@media (max-width: 768.98px)': {
            textAlign: 'center',
        },
    },
});
const FooterTitle = styled(MUITypography)({
    fontSize: '20px',
    color: '#ffffff',
    fontWeight: '600',
    marginBottom: '1rem',
    '@media (max-width: 991.98px)': {
        fontSize: '20px',
    },
    '@media (max-width: 768.98px)': {
        fontSize: '18px',
        textAlign: 'center',
    },
});
const FootList = styled(MUIList)({
    listStyle: 'none',
    padding: '0',
    '& li': {
        padding: '0 0 8px',
        '& a': {
            textDecoration: 'none',
            color: '#ffffff',
            fontSize: '16px',
            '@media (max-width: 768.98px)': {
                fontSize: '14px',
                margin: '0 auto',
            },
            '&:hover': {
                color: '#77aafc',
            },
        },
    },
});
const FooterBox = styled(MUIBox)({
    backgroundColor: '#012440',
    paddingTop: '50px',
    paddingBottom: '50px',
});
const MailBox = styled(MUIBox)({
    marginBottom: '12px',
    '@media (max-width: 768.98px)': {
        margin: '0 auto 16px',
        display: 'flex',
        justifyContent: 'center',
    },
    '& a': {
        color: '#ffffff',
    },
    '& .MuiSvgIcon-root': {
        color: '#ffffff',
    },
    '&:hover': {
        '& a': {
            color: '#77aafc',
        },
        '& .MuiSvgIcon-root': {
            color: '#77aafc',
        },
    },
});
const SocialBox = styled(MUIBox)({
    display: 'flex',
    paddingTop: '2px',
    '@media (max-width: 768.98px)': {
        justifyContent: 'center',
    },
    '& a': {
        color: '#ffffff',
        textDecoration: 'none',
        marginRight: '12px',
        '& .MuiSvgIcon-root': {
            color: '#ffffff',
        },
        '&:hover': {
            '& .MuiSvgIcon-root': {
                color: '#77aafc',
            },
        },
    },
});
const Grid = styled(MUIGrid)({});
const LogoGrid = styled(MUIGrid)({
    marginBottom: '2rem',
    '@media (max-width: 991.98px)': {
        marginBottom: '1.5rem',
    },
    '@media (max-width: 768.98px)': {
        marginBottom: '1rem',
        textAlign: 'center',
    },
    '& a': {
        color: '#ffffff',
    },
});
const FooterTop = () => {
    const [activeItem, setActiveItem] = useState('home');
    const setActive = (itemName: string) => {
        setActiveItem(itemName);
    };
    return (
        <>
            <FooterBox>
                <Container fixed>
                    <Grid container spacing={2}>
                        <LogoGrid item xs={12} md={6}>
                            <LogoIndex />
                        </LogoGrid>
                        {/* <Grid item xs={12} md={6}>
                            <div className="flex items-center content-end mb-4">
                                <Link className="text-white font-24">
                                    <FacebookIcon />
                                </Link>
                            </div>
                        </Grid> */}
                    </Grid>
                    <FooterMain container columnSpacing={{ xs: 2, sm: 4 }} rowSpacing={{ xs: 2, md: 4 }}>
                        <Grid item xs={12} md={12} lg={5}>
                            <FooterTitle>About Us</FooterTitle>
                            <DescText
                                text={` Mithila IT, your destination for web design, social media management, lead 
                                generation,
                                SEO, and marketing solutions. With over three decades of industry expertise, we’ve
                                
                                established ourselves as the go-to choice for businesses of all sizes across the 
                                world. `}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <FooterTitle>Sitemap</FooterTitle>
                            <FootList>
                                <ListItem
                                    className={activeItem === 'about' ? 'active' : ''}
                                    onClick={() => setActive('about')}
                                >
                                    <Link to="/about"> About Us </Link>
                                </ListItem>
                                <ListItem
                                    className={activeItem === 'services' ? 'active' : ''}
                                    onClick={() => setActive('services')}
                                >
                                    <Link to="/services"> Services </Link>
                                </ListItem>
                                <ListItem
                                    className={activeItem === 'privacyPolicy' ? 'active' : ''}
                                    onClick={() => setActive('privacyPolicy')}
                                >
                                    <Link to="/privacyPolicy"> Privacy Policy </Link>
                                </ListItem>
                                <ListItem
                                    className={activeItem === 'termsCondition' ? 'active' : ''}
                                    onClick={() => setActive('termsCondition')}
                                >
                                    <Link to="/termsCondition"> Terms & Condition </Link>
                                </ListItem>
                                <ListItem
                                    className={activeItem === 'faq' ? 'active' : ''}
                                    onClick={() => setActive('faq')}
                                >
                                    <Link to="/faq"> FAQ </Link>
                                </ListItem>
                            </FootList>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <FooterTitle>Contact Us</FooterTitle>
                            {/* <div className="flex">
                                <PlaceIcon className="font-34 text-white pr-2" />
                                <div>
                                    <FooterSubTitle">
                                        Office
                                    </FooterSubTitle>
                                    <FooterSubTitle  className="foot-para font-14 text-white fw-500 mt-0">
                                        Worsley Golf Club Business Centre, Stableford Ave, Eccles,
                                        Manchester M30 8AP
                                    </FooterSubTitle>
                                </div>
                            </div> */}
                            <MailBox>
                                <LabelWithIcon
                                    label="info@mithilait.com"
                                    href="mailto:info@mithilait.com"
                                    icon={<MailOutlineIcon />}
                                />
                            </MailBox>
                            <MailBox>
                                <LabelWithIcon
                                    label="https://github.com/gowithnk"
                                    href="https://github.com/gowithnk"
                                    icon={<GitHubIcon />}
                                />
                            </MailBox>
                            <SocialBox>
                                <Link target="_blank" to="https://m.facebook.com/mithilait.fb" aria-label="facebook">
                                    <FacebookIcon />
                                </Link>
                                <Link
                                    target="_blank"
                                    to="https://in.linkedin.com/in/niranjan-chourasia"
                                    aria-label="linkedin"
                                >
                                    <LinkedInIcon />
                                </Link>
                            </SocialBox>
                        </Grid>
                    </FooterMain>
                </Container>
            </FooterBox>
        </>
    );
};

export default FooterTop;
