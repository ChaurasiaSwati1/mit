import React from 'react';
import { Typography as MUITypography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Typography = styled(MUITypography)({
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '.875rem',
    color: '#023992',
    '@media (max-width: 767.98px)': {
        fontSize: '14px',
    },
});

interface ISubTitleTextProps {
    text: string;
    classVal?: string;
}

const SubTitleText = ({ text, classVal }: ISubTitleTextProps) => {
    return (
        <Typography variant="body1" className={classVal}>
            {text}
        </Typography>
    );
};

export default SubTitleText;
