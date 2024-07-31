import * as React from 'react';
import { Box as MUIBox, styled } from '@mui/material';

const Box = styled(MUIBox)({
    padding: '18px',
    height: '100%',
    position: 'fixed',
    width: '100%',
    left: '0',
    zIndex: '88',
    top: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: '4px',
    textAlign: 'center',
    background: 'rgba(256, 256, 256, .5)',
    '& img': {
        objectFit: 'contain',
        height: '100%',
        maxHeight: '100px',
        minHeight: '100px',
        '@media (max-width: 767.98px)': {
            maxHeight: '80px',
            minHeight: '80px',
        },
    },
});

const Loader = () => {
    return (
        <>
            <Box className="animation" data-aos="fade-up">
                <img src="/images/loader.gif" alt="loader" height={'100%'} width={'100%'} />
            </Box>
        </>
    );
};

export default Loader;
