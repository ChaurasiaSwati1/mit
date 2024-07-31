import React from 'react';
import { Typography as MUITypography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Typography = styled(MUITypography)({
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#023992',
    '@media (max-width: 899.98px)': {
        fontSize: '18px',
        marginBottom: '.75rem',
    },
    '@media (max-width: 767.98px)': {
        fontSize: '16px',
    },
});

interface ISubTitleSmallProps {
    text: string;
    classVal?: string;
    dataAos?: string;
}

const SubTitleSmall = ({ text, classVal, dataAos }: ISubTitleSmallProps) => {
    return (
        <Typography variant="h5" className={classVal} data-aos={dataAos}>
            {text}
        </Typography>
    );
};

export default SubTitleSmall;
