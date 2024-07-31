import React from 'react';
import { Box as MUIBox, Link, styled } from '@mui/material';
const Box = styled(MUIBox)({
    '& a': {
        fontSize: '20px',
        fontWeight: '600',
        color: '#01111f',
        '@media (max-width: 991.98px)': {
            fontSize: '18px',
        },
    },
});
const LogoIndex = () => {
    return (
        <>
            <Box>
                <Link href="/" underline="none">
                    Mithila IT
                </Link>
            </Box>
        </>
    );
};

export default LogoIndex;
