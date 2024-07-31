import React from 'react';
import { Typography as MUITypography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Typography = styled(MUITypography)({
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#023992',
    '@media (max-width: 899.98px)': {
        fontSize: '20px',
        marginBottom: '.75rem',
    },
    '@media (max-width: 767.98px)': {
        fontSize: '16px',
    },
});

interface ISubTitleProps {
    text: string;
    classVal?: string;
}

const SubTitle = ({ text, classVal }: ISubTitleProps) => {
    return (
        <Typography variant="h4" className={classVal}>
            {text}
        </Typography>
    );
};

export default SubTitle;
