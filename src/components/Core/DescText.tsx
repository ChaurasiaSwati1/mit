import React from 'react';
import { Typography as MUITypography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Typography = styled(MUITypography)({
    fontSize: '16px',
    fontWeight: 500,
    marginBottom: '1rem',
    '@media (max-width: 767.98px)': {
        fontSize: '14px',
    },
    '&.ellipsis': {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: '3',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
});

interface IDescTextProps {
    text: string;
    classVal?: string;
    dataAos?: string;
    isHTML?: boolean;
}

const DescText = ({ text, isHTML, classVal, dataAos }: IDescTextProps) => {
    return isHTML ? (
        <Typography
            variant="body1"
            data-aos={dataAos}
            dangerouslySetInnerHTML={{ __html: text }}
            className={classVal}
        ></Typography>
    ) : (
        <Typography variant="body1" data-aos={dataAos} className={classVal}>
            {text}
        </Typography>
    );
};

export default DescText;
