import * as React from 'react';
import { Box as MUIBox, Card as MUICard, styled, Typography as MUITypography } from '@mui/material';
import DescText from '../Core/DescText';
import StarBorder from '@mui/icons-material/StarBorderOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
const RatingSec = styled(MUIBox)({
    '& h2': {
        marginBottom: '2px',
        fontSize: '18px',
        color: '#023992',
        '@media (max-width: 899.98px)': {
            fontSize: '16px',
        },
    },
});
const StarBox = styled(MUIBox)({
    display: 'flex',
    margin: '0 auto 2px',
    width: 'fit-content',
    '& svg': {
        fontSize: '18px',
        lineHeight: '18px',
        color: 'orange',
        marginRight: '4px',
        '&:last-child': {
            marginRight: '0',
        },
    },
});
const IconBox = styled(MUIBox)({
    width: '50px',
    height: '50px',
    margin: '0 auto',
    borderRadius: '50%',
    background: '#7cf0ea',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
    '& h2': {
        fontSize: '20px',
        color: '#014441',
        fontWeight: '600',
    },
});
const ReviewText = styled(MUITypography)({
    marginBottom: '.75rem',
    fontWeight: '500',
    color: '#697882',
});
const Typography = styled(MUITypography)({});

const Card = styled(MUICard)({
    padding: '24px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: '#ffffff',
    boxShadow: '0 2px 8px #d5d5d5',
    borderRadius: '8px',
    textAlign: 'center',
    '& .MuiTypography-body1': {
        color: '#000000',
        fontSize: '14px',
        marginBottom: '0',
    },
    '&:hover': {
        boxShadow: '0 4px 16px #d5d5d5',
    },
    '@media (max-width: 899.98px)': {
        padding: '20px',
    },
});

interface IRatingCardProps {
    text: string;
    desc: string;
    reviewSite: string;
}

const RatingCard = ({ text, desc, reviewSite }: IRatingCardProps) => {
    const firstLetter = text.charAt(0);

    return (
        <Card className="animation" data-aos="fade-up">
            <IconBox>
                <Typography variant="h2">{firstLetter}</Typography>
            </IconBox>
            <RatingSec>
                {/* <SubTitle text={text} /> */}
                <Typography variant="h2">{text}</Typography>
                <StarBox>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                    <StarBorder />
                </StarBox>
                <ReviewText variant="body2">{reviewSite}</ReviewText>
                <DescText text={desc} />
            </RatingSec>
        </Card>
    );
};

export default RatingCard;
