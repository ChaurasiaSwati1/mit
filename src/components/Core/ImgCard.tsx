import * as React from 'react';
import { Card as MUICard, styled } from '@mui/material';
import SubTitleSmall from './SubTitleSmall';

const Card = styled(MUICard)({
    padding: '18px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 2px 8px #4c4c4c',
    borderRadius: '4px',
    textAlign: 'center',
    background: '#ffffff',
    '& img': {
        objectFit: 'contain',
        height: '100%',
        maxHeight: '100px',
        minHeight: '100px',
        '@media (max-width: 767.98px)': {
            maxHeight: '60px',
            minHeight: '60px',
        },
    },
    '&:hover': {
        boxShadow: '0 4px 16px #4c4c4c',
        background: '#d5d5d5',
        '& img': {
            '&:hover': {
                filter: 'drop-shadow(0 0 4px #4c4c4c)',
            },
        },
    },
    '& h5': {
        marginTop: '.5rem',
        marginBottom: '0',
    },
});

interface IImgCardProps {
    titleText: string;
    srcPath: string;
    altVal: string;
}

const ImgCard = ({ titleText, srcPath, altVal }: IImgCardProps) => {
    return (
        <>
            <Card className="animation" data-aos="fade-up">
                <img src={srcPath} alt={altVal} height={'100%'} width={'100%'} />
                <SubTitleSmall text={titleText} />
            </Card>
        </>
    );
};

export default ImgCard;
