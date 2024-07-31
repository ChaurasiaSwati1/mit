import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box } from '@mui/material';

const InsideLayout = () => {
    return (
        <main>
            <Header />
            <Box className="main-sec">
                <Outlet />
                <Footer />
            </Box>
        </main>
    );
};

export default InsideLayout;
