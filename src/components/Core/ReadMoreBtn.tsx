import React from 'react';
import { Button as MUIButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const Button = styled(MUIButton)({
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: '16px',
    color: '#ffffff',
    padding: '8px 20px',
    borderRadius: '4px',
    width: 'fit-content',
    textDecoration: 'none',
    boxShadow: '0px 0px 8px 0px rgba(0,0,0,.16)',
    background: '#012440',
    '&:hover': {
        boxShadow: '0px 0px 16px 0px rgba(0,0,0,.16)',
        transform: 'translateY(-2px)',
        background: '#012440a8',
        transitionDuration: '.4s',
    },
    '@media (max-width: 767.98px)': {
        fontSize: '14px',
        padding: '6px 16px',
    },
});

interface IReadMoreBtnProps {
    text: string;
    type: 'button' | 'submit';
}

const ReadMoreBtn = ({ text, type }: IReadMoreBtnProps) => {
    return (
        <Button variant="contained" type={type}>
            {text}
        </Button>
    );
};

export default ReadMoreBtn;
