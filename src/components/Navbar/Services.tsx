import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Menu as MUIMenu, styled, Button as MUIButton } from '@mui/material';
import { Link } from 'react-router-dom';
const Button = styled(MUIButton)({
    position: 'relative',
    padding: '0',
    color: '#023966',
    backgroundColor: 'transparent',
    paddingRight: '18px',
    fontWeight: '600',
    '&::after': {
        content: '" "',
        height: '6px',
        width: '6px',
        position: 'absolute',
        zIndex: '4',
        borderLeft: '2px solid #023966',
        borderBottom: '2px solid #023966',
        right: '16px',
        bottom: '10px',
        transform: 'rotate(-45deg)',
    },
    '&:hover': {
        padding: '0 18px 0 0',
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
    '& .css-kc02vp-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
        background: '#ffffff',
        padding: '4px',
        marginTop: '12px',
        '& ul': {
            padding: '0',
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
                },
                '&:hover': {
                    background: '#01111f',
                    '& a': {
                        color: '#ffffff',
                    },
                },
            },
        },
    },
});
export default function Services() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
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
                onMouseOver={handleClick}
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
                <Link to="/services">
                    <MenuItem onClick={handleClose}>All Services</MenuItem>
                </Link>
                <Link to="/lead-generation">
                    <MenuItem onClick={handleClose}>Lead Generation</MenuItem>
                </Link>
                <Link to="/website-development">
                    <MenuItem onClick={handleClose}>Website Design</MenuItem>
                </Link>
                <Link to="/graphic-designing">
                    <MenuItem onClick={handleClose}>Graphic Design</MenuItem>
                </Link>
                <Link to="/seo">
                    <MenuItem onClick={handleClose}>SEO</MenuItem>
                </Link>
                <Link to="/speed-optimization">
                    <MenuItem onClick={handleClose}>Page Speed Optimization</MenuItem>
                </Link>
                <Link to="/digital-marketing">
                    <MenuItem onClick={handleClose}>Digital Marketing</MenuItem>
                </Link>
                <Link to="/social-media-marketing">
                    <MenuItem onClick={handleClose}>Social Media Marketing</MenuItem>
                </Link>
            </Menu>
        </div>
    );
}
