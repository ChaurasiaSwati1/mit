import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import LogoIndex from '../Navbar/LogoIndex';
import Container from '@mui/material/Container';
import NavToggle from '../Navbar/NavToggle';
import { Grid as MUIGrid, Box as MUIBox, styled } from '@mui/material';
const Box = styled(MUIBox)({
    background: '#ffffff',
    boxShadow: '0px 2px 8px #d5d5d5',
    '&.sticky': {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        zIndex: '89',
    },
});
const GridRow = styled(MUIGrid)({
    alignItems: 'center',
});
const Grid = styled(MUIGrid)({});
const BoxHeader = styled(MUIBox)({
    // padding: '16px 0',
    height: 'auto',
    '@media (max-width: 1199.98px)': {
        height: 'auto',
        padding: '10px 0',
    },
});
const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setIsMobile(window.innerWidth <= 1199);
            }
        };

        const delayedHandleResize = () => {
            setTimeout(handleResize, 0);
        };

        delayedHandleResize();
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', delayedHandleResize);
        }
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', delayedHandleResize);
            }
        };
    }, []);

    return (
        <>
            <Box className={`${isSticky ? 'sticky' : ''}`}>
                <Container fixed>
                    <BoxHeader>
                        <GridRow container spacing={{ sm: 2, md: 4 }}>
                            <Grid item xs={5} sm={3}>
                                <LogoIndex />
                            </Grid>
                            <Grid item xs={7} sm={9}>
                                {isMobile ? <NavToggle /> : <Navbar />}
                            </Grid>
                        </GridRow>
                    </BoxHeader>
                </Container>
            </Box>
        </>
    );
};

export default Header;
