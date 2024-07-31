import { Container, Box as MUIBox, Link as MUIButton, styled } from '@mui/material';
import React from 'react';
import WhatWeDo from './WhatWeDo';
import DescText from '../Core/DescText';
import DotTitleWithLine from '../Core/DotTitleWithLine';
import CircleIcon from '@mui/icons-material/Circle';

const Box = styled(MUIBox)({
    padding: '50px 0',
    '@media (max-width: 1199.98px)': {
        padding: '40px 0',
    },
    '@media (max-width: 991.98px)': {
        padding: '35px 0',
    },
    '@media (max-width: 767.98px)': {
        padding: '30px 0',
    },
    '@media (max-width: 575.98px)': {
        padding: '25px 0',
    },
    '& h2': {
        paddingBottom: '2rem',
        '&:after': {
            bottom: '20px',
        },
    },
});
const Link = styled(MUIButton)({
    display: 'flex',
    fontSize: '16px',
    color: '#ffffff',
    padding: '8px 20px',
    borderRadius: '4px',
    width: 'fit-content',
    textDecoration: 'none',
    lineHeight: '1.75',
    boxShadow: '0px 0px 8px 0px rgba(0,0,0,.16)',
    background: '#012440',
    margin: '0 auto',
    marginTop: '2.25rem',
    '@media (max-width: 991.98px)': {
        marginTop: '2rem',
    },
    '@media (max-width: 767.98px)': {
        marginTop: '1.75rem',
    },

    '&:hover': {
        boxShadow: '0px 0px 16px 0px rgba(0,0,0,.16)',
        transform: 'translateY(-2px)',
        transitionDuration: '.4s',
        background: '#012440a8',
    },
    '@media (max-width: 899.98px)': {
        marginBottom: '30px !important',
        fontSize: '14px',
        padding: '6px 16px',
    },
});
const BoxDesc = styled(MUIBox)({
    textAlign: 'center',
    '& p': {
        marginBottom: '3rem',
        '@media (max-width: 991.98px)': {
            marginBottom: '2.5rem',
        },
        '@media (max-width: 767.98px)': {
            marginBottom: '2rem',
        },
    },
});
const WhatWeDoSection = () => {
    return (
        <Box>
            <Container fixed>
                <DotTitleWithLine title="What We Do" subTitle={''} icon={<CircleIcon />} dataAos="fade-up" />
                <BoxDesc className="animation" data-aos="fade-up">
                    <DescText text={`We make every project a success.`} />
                </BoxDesc>
            </Container>
            <WhatWeDo />
            <Link href="/portfolio" className="animation" data-aos="fade-up">
                Read More
            </Link>
        </Box>
    );
};

export default WhatWeDoSection;
