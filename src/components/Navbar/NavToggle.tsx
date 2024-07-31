import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import { Button, Container, Menu as MUIMenu, MenuItem, styled } from '@mui/material';

const Menu = styled(MUIMenu)({
    '& .MuiPaper-root': {
        backgroundColor: '#ffffff !important',
        padding: '4px !important',
        margin: '0 !important',
        marginTop: '12px !important',
        left: '0 !important',
        maxWidth: '100%',
        right: '0 !important',
        borderRadius: '0 !important',
        boxShadow: '0px 2px 8px -5px #011e36',
        '& ul': {
            padding: '0 !important',
            '& a': {
                marginBottom: '5px',
                textDecoration: 'none',
                '& li': {
                    color: '#000000',
                    borderRadius: '4px',
                    fontSize: '16px',
                    lineHeight: '1.5',
                    fontWeight: '500',
                    width: '100%',
                    '@media (max-width: 991.98px)': {
                        fontSize: '14px',
                        alignItems: 'center',
                        display: 'flex',
                    },
                    '&.active': {
                        background: '#012440',
                        color: '#ffffff',
                    },
                },
                '&:last-child': {
                    marginBottom: '0',
                },
                '&:hover': {
                    background: '#012440',
                    color: '#ffffff',
                },
            },
        },
    },
});

const DivBox = styled('div')({
    display: 'flex',
    justifyContent: 'end',
    width: '100%',
    '& button': {
        color: '#023992',
        backgroundColor: 'transparent',
        minWidth: 'auto',
        fontWeight: '600',
        padding: '4px',
        marginLeft: 'auto',
        '&:hover': {
            padding: '6px',
            color: '#ffffff',
            backgroundColor: '#023966',
            '& .MuiSvgIcon-root': {
                fontSize: '24px',
            },
        },
        '& .MuiSvgIcon-root': {
            fontSize: '32px',
        },
        '@media (max-width: 767.98px)': {
            '& .MuiSvgIcon-root': {
                fontSize: '28px',
            },
        },
    },
});
export default function NavToggle() {
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

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <DivBox>
            <Button
                id="toggle-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon />
            </Button>
            <Menu
                id="toggle-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Container>
                    <Link to="/">
                        <MenuItem onClick={handleClose} className={activeItem === '' ? 'active' : ''}>
                            Home
                        </MenuItem>
                    </Link>
                    <Link to="/about">
                        <MenuItem onClick={handleClose} className={activeItem === 'about' ? 'active' : ''}>
                            About Us
                        </MenuItem>
                    </Link>
                    {/* <Link to="/services">
                        <MenuItem onClick={handleClose} className={activeItem === 'services' ? 'active' : ''}>
                            Services
                        </MenuItem>
                    </Link> */}
                    <Link to="/website-development">
                        <MenuItem
                            onClick={handleClose}
                            className={activeItem === 'website-development' ? 'active' : ''}
                        >
                            Web Development
                        </MenuItem>
                    </Link>
                    <Link to="/lead-generation">
                        <MenuItem onClick={handleClose} className={activeItem === 'lead-generation' ? 'active' : ''}>
                            Lead Generation
                        </MenuItem>
                    </Link>
                    <Link to="/graphic-designing">
                        <MenuItem onClick={handleClose} className={activeItem === 'graphic-designing' ? 'active' : ''}>
                            Graphic Design
                        </MenuItem>
                    </Link>
                    <Link to="/seo">
                        <MenuItem onClick={handleClose} className={activeItem === 'seo' ? 'active' : ''}>
                            SEO
                        </MenuItem>
                    </Link>
                    <Link to="/speed-optimization">
                        <MenuItem onClick={handleClose} className={activeItem === 'speed-optimization' ? 'active' : ''}>
                            Page Speed Optimization
                        </MenuItem>
                    </Link>
                    <Link to="/digital-marketing">
                        <MenuItem onClick={handleClose} className={activeItem === 'digital-marketing' ? 'active' : ''}>
                            Digital Marketing
                        </MenuItem>
                    </Link>
                    <Link to="/social-media-marketing">
                        <MenuItem
                            onClick={handleClose}
                            className={activeItem === 'social-media-marketing' ? 'active' : ''}
                        >
                            Social Media Marketing
                        </MenuItem>
                    </Link>
                    <Link to="/portfolio">
                        <MenuItem onClick={handleClose} className={activeItem === 'portfolio' ? 'active' : ''}>
                            Portfolio
                        </MenuItem>
                    </Link>
                    {/* <Link to="/blog">
                        <MenuItem onClick={handleClose} className={activeItem === 'blog' ? 'active' : ''}>
                            Blog
                        </MenuItem>
                    </Link> */}
                    <Link to="/contact">
                        <MenuItem onClick={handleClose} className={activeItem === 'contact' ? 'active' : ''}>
                            Contact Us
                        </MenuItem>
                    </Link>
                </Container>
            </Menu>
        </DivBox>
    );
}
