import React, { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Menu as MUIMenu, styled, Button as MUIButton } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
const Button = styled(MUIButton)({
    position: 'relative',
    color: '#023966',
    backgroundColor: 'transparent',
    fontWeight: '600',
    width: 'auto',
    fontSize: '16px',
    lineHeight: '2',
    height: '48px',
    padding: '2px 34px 2px 18px',
    '@media (max-width: 991.98px)': {
        fontSize: '14px',
    },
    '&::after': {
        content: '" "',
        height: '6px',
        width: '6px',
        position: 'absolute',
        zIndex: '4',
        borderLeft: '2px solid #023966',
        borderBottom: '2px solid #023966',
        right: '18px',
        bottom: '22px',
        transform: 'rotate(-45deg)',
    },
    '&:hover': {
        padding: '2px 34px 2px 18px',
        color: '#023966',
        backgroundColor: 'transparent',
    },
    // '&:hover': {
    //     '& a': {
    //         '&::after': {
    //             bottom: '10px',
    //             transform: 'rotate(-180deg)',
    //         },
    //     },
    // },
});
const Menu = styled(MUIMenu)({
    '& .MuiPaper-root': {
        background: '#ffffff',
        padding: '8px',
        marginTop: '12px',
        marginLeft: '20px',
        '@media (max-width: 991.98px)': {
            marginLeft: '20px',
        },
        '& ul': {
            '& a': {
                color: '#023966',
                fontSize: '16px',
                textDecoration: 'none',
                '@media (max-width: 991.98px)': {
                    fontSize: '14px',
                },
                '& li': {
                    color: '#000000',
                    borderRadius: '4px',
                    fontWeight: '500',
                    marginBottom: '4px',
                    padding: '12px 16px',
                },
                '&:hover': {
                    '& li': {
                        background: '#01111f',
                        color: '#ffffff',
                    },
                },
                '&.active': {
                    '& li': {
                        background: '#01111f',
                        color: '#ffffff',
                    },
                },
            },
        },
    },
});
export default function Services() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const location = useLocation();
    const [activeItem, setActiveItem] = useState('');

    useEffect(() => {
        const path = location.pathname.split('/')[1]; // Assuming the path structure is like /about, /services, etc.
        setActiveItem(path);
    }, [location]);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Services
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {/* <Link to="/services">
                    <MenuItem onClick={handleClose}>All Services</MenuItem>
                </Link> */}
                <Link to="/website-development" className={activeItem === 'website-development' ? 'active' : ''}>
                    <MenuItem onClick={handleClose}>Web Development</MenuItem>
                </Link>
                <Link to="/lead-generation" className={activeItem === 'lead-generation' ? 'active' : ''}>
                    <MenuItem onClick={handleClose}>Lead Generation</MenuItem>
                </Link>
                <Link to="/graphic-designing" className={activeItem === 'graphic-designing' ? 'active' : ''}>
                    <MenuItem onClick={handleClose}>Graphic Design</MenuItem>
                </Link>
                <Link to="/seo" className={activeItem === 'seo' ? 'active' : ''}>
                    <MenuItem onClick={handleClose}>SEO</MenuItem>
                </Link>
                <Link to="/speed-optimization" className={activeItem === 'speed-optimization' ? 'active' : ''}>
                    <MenuItem onClick={handleClose}>Page Speed Optimization</MenuItem>
                </Link>
                <Link to="/digital-marketing" className={activeItem === 'digital-marketing' ? 'active' : ''}>
                    <MenuItem onClick={handleClose}>Digital Marketing</MenuItem>
                </Link>
                <Link to="/social-media-marketing" className={activeItem === 'social-media-marketing' ? 'active' : ''}>
                    <MenuItem onClick={handleClose}>Social Media Marketing</MenuItem>
                </Link>
            </Menu>
        </div>
    );
}
