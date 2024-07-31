import { Box as MUIBox, styled } from '@mui/material';
import React from 'react';
import ServicesPage from '../Services/ServicesPage';
import DotTitleWithLine from '../Core/DotTitleWithLine';
import CircleIcon from '@mui/icons-material/Circle';

const Box = styled(MUIBox)({
    padding: '60px 0',
    '@media (max-width: 1199.98px)': {
        padding: '50px 0',
    },
    '@media (max-width: 991.98px)': {
        padding: '45px 0',
    },
    '@media (max-width: 767.98px)': {
        padding: '40px 0',
    },
    '@media (max-width: 575.98px)': {
        padding: '35px 0',
    },
});
const HomeServices = () => {
    return (
        <>
            <Box>
                <DotTitleWithLine title="Our Services" subTitle="" icon={<CircleIcon />} dataAos="fade-up" />
                <ServicesPage />
            </Box>
        </>
    );
};

export default HomeServices;
