import { Box, Typography } from '@mui/material';
import React from 'react';

const BannerDemo = () => {
    return (
        <Box className="banner common-head-bg">
            <Box className="banner-card">
                <img src="/images/demo.jpg" alt="about banner" className="card-img" height={'100%'} width={'100%'} />
                <Box className="card-desc">
                    <Typography variant="h2" gutterBottom className="common-head border-white mb-5 font-42">
                        Free Demo
                    </Typography>
                    <Typography className="font-16 text-center">Want a free demo? Contact Us!</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default BannerDemo;
