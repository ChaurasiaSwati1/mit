import * as React from 'react';
import { Box as MUIBox, Card as MUICard, styled, Typography } from '@mui/material';
import SubTitle from '../../components/Core/SubTitle';
import DescText from '../../components/Core/DescText';
import { Link } from 'react-router-dom';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
const RatingSec = styled(MUIBox)({
    padding: '18px',
    '& h4': {
        marginBottom: '2px',
        fontSize: '18px',
        textAlign: 'left',
        '@media (max-width: 899.98px)': {
            fontSize: '16px',
        },
    },
});
const ImageBox = styled(MUIBox)({
    width: '100%',
    height: '180px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px 0 0 8px',
    justifyContent: 'center',
    '& img': {
        width: '100%',
        height: '180px',
        objectFit: 'cover',
    },
    '& a': {
        width: '100%',
        height: '180px',
    },
    '& h4': {
        fontSize: '20px',
        color: '#014441',
        fontWeight: '600',
    },
});
const SearchCard = styled(MUICard)({
    padding: '0',
    // height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: '#ffffff',
    boxShadow: '0 2px 8px #d5d5d5',
    borderRadius: '8px',
    // marginBottom: '20px',
    '& .MuiTypography-body1': {
        color: '#000000',
        fontSize: '14px',
        marginBottom: '0',
    },
    '& a': {
        color: '#012440',
        fontSize: '14px',
        fontWeight: 600,
        marginTop: '12px',
        marginBottom: '12px',
        textDecoration: 'none',
        display: 'block',
    },
    '&:hover': {
        boxShadow: '0 4px 16px #d5d5d5',
    },
});
const DateText = styled(Typography)({
    color: '#01111f75',
    fontSize: '14px',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    margin: '0',
    '& span': {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0 6px',
        '&:first-of-type': {
            paddingLeft: '0',
        },
        '& svg': {
            fontSize: '16px',
            marginRight: '6px',
        },
    },
    '@media (max-width: 699.98px)': {
        fontSize: '12px',
    },
});
interface IBlogCardProps {
    subtitle: string;
    desc: string;
    imgAlt: string;
    imgSrc: string;
}

const BlogCard = ({ subtitle, desc, imgAlt, imgSrc }: IBlogCardProps) => {
    return (
        <>
            <SearchCard className="animation" data-aos="fade-up">
                <ImageBox>
                    <Link to={'/blog-details'}>
                        <img src={imgSrc} alt={imgAlt} height={'100%'} width={'100%'} />
                    </Link>
                </ImageBox>
                <RatingSec>
                    <SubTitle text={subtitle} />
                    <DescText text={desc} classVal={'ellipsis'} />
                    <Link to={'/blog-details'}>Read More</Link>
                    <DateText variant="body1">
                        <span>
                            <InsertCommentOutlinedIcon />
                            No Comments
                        </span>{' '}
                        |
                        <span>
                            {' '}
                            <CalendarMonthOutlinedIcon /> 10 May 2023
                        </span>{' '}
                    </DateText>
                </RatingSec>
            </SearchCard>
        </>
    );
};

export default BlogCard;
