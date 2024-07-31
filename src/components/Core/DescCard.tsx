import * as React from 'react';
import { Card as MUICard, styled } from '@mui/material';
import DescText from '../Core/DescText';
import SubTitle from '../Core/SubTitle';

const Card = styled(MUICard)({
    padding: '24px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 2px 8px #01111f1a',
    border: '1px solid #01111f1a',
    borderRadius: '8px',
    textAlign: 'center',
    background: '#ffffff',
    '& p': {
        color: '#000000',
    },
    '&:hover': {
        boxShadow: '0 4px 16px #01111f1a',
        border: '1px dashed #01111f',
        background: `linear-gradient(90deg, rgba(1,17,31,0.05646008403361347) 0%, 
        rgba(119,170,252,0.0760679271708683) 50%)`,
    },
});

interface IDescCardProps {
    titleText: string;
    desc: string;
}

const DescCard = ({ titleText, desc }: IDescCardProps) => {
    return (
        <>
            <Card className="animation" data-aos="fade-up">
                <SubTitle text={titleText} />
                <DescText text={desc} />
            </Card>
        </>
    );
};

export default DescCard;
