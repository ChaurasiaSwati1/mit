import React, { useEffect, useState } from 'react';
import { Link as MUILink, useLocation } from 'react-router-dom';
import { List as MUIList, ListItem, styled } from '@mui/material';
import ReadMoreBtn from '../Core/ReadMoreBtn';
import Services from './ServicesMenu';
const List = styled(MUIList)({
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'end',
    padding: '0',
    '& li': {
        width: 'auto',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '1',
        padding: '0',
        '@media (max-width: 1199.98px)': {
            fontSize: '14px',
        },
        '&.active': {
            position: 'relative',
            '&::after': {
                content: '" "',
                height: '2px',
                width: '40px',
                margin: '0 auto',
                position: 'absolute',
                bottom: '16px',
                zIndex: '4',
                background: '#023966',
                left: '0',
                right: '0',
                borderRadius: '6px 6px 0 0',
            },
        },
        '& a': {
            color: '#023966',
            textDecoration: 'none',
            padding: '12px 18px',
            '@media (max-width: 1199.98px)': {
                fontSize: '14px',
            },
        },
    },
});
const Link = styled(MUILink)({});
const ListItemServices = styled(ListItem)({
    paddingLeft: '0 !important',
});
const ButtonLink = styled(MUILink)({
    '& button': {
        background: 'linear-gradient(to right, #01111f, #77aafc)',
        '@media (max-width: 991.98px)': {
            fontSize: '14px',
            paddingLeft: '12px',
            paddingRight: '12px',
        },
        '&:hover': {
            boxShadow: '0 2px 8px #02396630',
            background: 'linear-gradient(to right, #77aafc, #01111f)',
        },
    },
    '&:hover': {
        transform: 'translateY(-2px)',
        transitionDuration: '1.5s',
    },
});
const Navbar = () => {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState('home');

    useEffect(() => {
        const path = location.pathname.split('/')[1]; // Assuming the path structure is like /about, /services, etc.
        setActiveItem(path);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [location]);
    // const [isLoggedIn] = useState(false);
    return (
        <>
            <nav>
                <List>
                    <ListItem className={activeItem === '' ? 'active' : ''}>
                        <Link to="/">Home</Link>
                    </ListItem>
                    <ListItemServices className={activeItem === 'services' ? 'active' : ''}>
                        {/* <Link to="/services">Services</Link> */}
                        <Services />
                    </ListItemServices>
                    <ListItem className={activeItem === 'about' ? 'active' : ''}>
                        <Link to="/about">About Us</Link>
                    </ListItem>
                    <ListItem className={activeItem === 'portfolio' ? 'active' : ''}>
                        <Link to="/portfolio">Portfolio</Link>
                    </ListItem>
                    {/* <ListItem className={activeItem === 'blog' ? 'active' : ''}>
                        <Link to="/blog">Blog</Link>
                    </ListItem> */}
                    <ListItem className="pr-0">
                        {/* {isLoggedIn ? ( */}
                        <ButtonLink to="/contact">
                            <ReadMoreBtn text="Contact Us" type="button" />
                        </ButtonLink>
                        {/* ) : (
                            <Link to="/login">
                                <Button className="btn-primary text-white">Login</Button>
                            </Link>
                        )} */}
                    </ListItem>
                </List>
            </nav>
        </>
    );
};

export default Navbar;
