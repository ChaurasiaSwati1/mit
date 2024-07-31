import React from 'react';
import { styled, Pagination } from '@mui/material';
const PaginationBox = styled(Pagination)({
    '& .MuiPagination-ul': {
        justifyContent: 'center',
    },
    '& .MuiPaginationItem-root': {
        color: '#01111f',
        borderColor: '#01111f',
        marginBottom: '4px',
        '&:hover': {
            color: '#ffffff',
            background: '#01111f',
        },
        '&.Mui-selected': {
            color: '#ffffff',
            background: '#01111f',
            borderColor: '#01111f',
        },
        '@media (max-width: 599.98px)': {
            minHeight: '26px',
            minWidth: '26px',
        },
    },
});
const PaginationComp = () => {
    return (
        <>
            <PaginationBox count={10} variant="outlined" shape="rounded" />
        </>
    );
};

export default PaginationComp;
