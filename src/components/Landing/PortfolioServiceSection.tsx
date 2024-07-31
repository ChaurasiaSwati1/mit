import { Box as MUIBox, styled } from '@mui/material';
import React from 'react';
import DotTitleWithLine from '../Core/DotTitleWithLine';
import CircleIcon from '@mui/icons-material/Circle';
import PortfolioService from './PortfolioService';
import DescText from '../Core/DescText';

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
    '& p': {
        fontWeight: '500',
        fontSize: '16px',
        textAlign: 'center',
        '@media (max-width: 575.98px)': {
            fontSize: '14px',
        },
        '&.descHeading': {
            padding: '0 20px',
        },
    },
    '& h2': {
        paddingBottom: '1.5rem',
        '&::after': {
            bottom: '18px',
        },
    },
});
const PortfolioServiceSection = () => {
    return (
        <Box>
            <DotTitleWithLine
                title="Services Handcrafted For You"
                subTitle=""
                icon={<CircleIcon />}
                dataAos="fade-up"
                classVal="animation"
            />
            <DescText
                classVal="descHeading"
                dataAos="fade-up"
                text={'Let Your Business Rule Over the Digital World with Our Exclusive IT Services'}
            />
            <PortfolioService />
        </Box>
    );
};

export default PortfolioServiceSection;
