import React from 'react';
// import BannerWithTitle from '../../components/Core/BannerWithTitle';
import { styled, Box as MUIBox, Card, Typography as MUITypography } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputWithLabel from '../../components/Core/InputWithLabel';
import { Link } from 'react-router-dom';
const CardText = styled(MUITypography)({
    fontSize: '14px',
    fontWeight: '400',
    marginBottom: '0px',
    color: '#000000',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '3',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});
const Typography = styled(MUITypography)({});
const Title = styled(MUITypography)({
    fontSize: '34px',
    fontWeight: 600,
    textAlign: 'center',
    paddingBottom: '.5rem',
    lineHeight: '1',
    background: '#01111f',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'flex',
    alignItems: 'baseline',
    textShadow: '0 0 1em #3600fa33,0 0 0.125em #3341ff4d,1em -0.125em 0.5em #ffbb3300,-1em 0.125em 0.5em #33bbff00',
    '@media (max-width: 1199.98px)': {
        fontSize: '30px',
    },
    '@media (max-width: 991.98px)': {
        fontSize: '24px',
    },
    '@media (max-width: 767.98px)': {
        fontSize: '20px',
    },
    '&.SubTitle': {
        fontSize: '26px',
        marginBottom: '20px',
        '@media (max-width: 991.98px)': {
            fontSize: '24px',
        },
        '@media (max-width: 767.98px)': {
            fontSize: '20px',
        },
    },
});
const InputBox = styled(MUIBox)({
    display: 'flex',
    marginBottom: '20px',
    '& .inputBox': {
        width: '-webkit-fill-available',
    },
    '& .MuiInputBase-root': {
        borderRadius: '4px',
        height: '44px',
    },
    '& .MuiBox-root': {
        width: '100%',
    },
    '& svg': {
        borderRadius: '4px',
        background: '#01111f',
        color: '#ffffff',
        padding: '10px',
        width: '44px',
        height: '44px',
        marginLeft: '2px',
    },
});
const SearchBox = styled(MUIBox)({
    padding: '20px',
    marginBottom: '20px',
    background: '#01111f17',
    borderRadius: '8px',
    '& .nolabel': {
        '& .MuiFormLabel-root': {
            marginBottom: '0',
        },
    },
});
const Box = styled(MUIBox)({
    display: 'flex',
    flexWrap: 'wrap',
});
const CardSection = styled(MUIBox)({
    '& .MuiCard-root': {
        marginBottom: '16px',
        '&:last-child': {
            marginBottom: '0',
        },
    },
});
const RecentCard = styled(Card)({
    padding: '8px',
    borderRadius: '6px',
    background: '#ffffff',
    height: '96px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'none',
    '& img': {
        height: '80px',
        width: '80px',
        objectFit: 'cover',
        borderRadius: '6px',
        marginRight: '12px',
    },
});

const CategoryCard = styled(Card)({
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    background: '#ffffff',
    boxShadow: '0 2px 8px #d5d5d5',
    borderRadius: '8px',
    marginBottom: '20px',
    '& .MuiTypography-body2': {
        fontSize: '14px',
        display: 'list-item',
        marginLeft: '16px',
        '&::marker': {
            color: '#000000',
        },
        '& a': {
            color: '#000000',
            textDecoration: 'none',
        },
    },
    '&:hover': {
        boxShadow: '0 4px 16px #d5d5d5',
    },
    '@media (max-width: 899.98px)': {
        padding: '20px',
    },
});
const TagsCard = styled(Card)({
    padding: '20px 20px 8px 20px',
    display: 'flex',
    flexDirection: 'column',
    background: '#ffffff',
    boxShadow: '0 2px 8px #d5d5d5',
    borderRadius: '8px',
    marginBottom: '20px',
    '& .MuiTypography-body2': {
        fontSize: '14px',
        borderRadius: '20px',
        padding: '4px 12px',
        background: '#01111f17',
        display: 'inline-block',
        marginRight: '12px',
        marginBottom: '12px',
        '& a': {
            color: '#000000',
            textDecoration: 'none',
        },
    },
    '&:hover': {
        boxShadow: '0 4px 16px #d5d5d5',
    },
    '@media (max-width: 899.98px)': {
        padding: '20px',
    },
});

const RecentPost = () => {
    const category = [
        {
            data: 'Construction',
            linkSrc: '/blog-details',
        },
        {
            data: 'Healthcare',
            linkSrc: '/blog-details',
        },
        {
            data: 'Agency',
            linkSrc: '/blog-details',
        },
        {
            data: 'Lifestyle',
            linkSrc: '/blog-details',
        },
        {
            data: 'E-Commerce',
            linkSrc: '/blog-details',
        },
    ];
    const tags = [
        {
            data: 'construction',
            linkSrc: '/blog-details',
        },
        {
            data: 'healthcare',
            linkSrc: '/blog-details',
        },
        {
            data: 'medical',
            linkSrc: '/blog-details',
        },
        {
            data: 'agency',
            linkSrc: '/blog-details',
        },
        {
            data: 'startup',
            linkSrc: '/blog-details',
        },
        {
            data: 'lifestyle',
            linkSrc: '/blog-details',
        },
        {
            data: 'life',
            linkSrc: '/blog-details',
        },
        {
            data: 'e-Commerce',
            linkSrc: '/blog-details',
        },
    ];
    return (
        <>
            <SearchBox>
                <InputBox>
                    <InputWithLabel classes="nolabel" placeholder="Search" type="text" required={false} />
                    <SearchOutlinedIcon />
                </InputBox>
                <Title className="SubTitle">Recent Post</Title>
                <CardSection>
                    <RecentCard>
                        <img src="/images/buildings.jpg" alt="Recent Img" height={'100%'} width={'100%'} />
                        <CardText variant="body2">
                            We have proudly served Rochdale and Greater Manchester, leaving an indelible mark on
                            residential and commercial landscapes alike.
                        </CardText>
                    </RecentCard>
                    <RecentCard>
                        <img src="/images/skyscrapers.jpg" alt="Recent Img" height={'100%'} width={'100%'} />
                        <CardText variant="body2">
                            Choosing the right flooring for your home can be both exciting and challenging. Each room
                            has unique requirements, and finding the perfect balance between aesthetics, functionality,
                            and durability is essential.
                        </CardText>
                    </RecentCard>
                </CardSection>
            </SearchBox>
            <CategoryCard className="animation" data-aos="fade-up">
                <Title className="SubTitle">Category</Title>
                {category.map((item, index) => (
                    <Typography variant="body2" key={index}>
                        <Link to={item.linkSrc}>{item.data}</Link>
                    </Typography>
                ))}
            </CategoryCard>
            <TagsCard className="animation" data-aos="fade-up">
                <Title className="SubTitle">Tags</Title>
                <Box>
                    {tags.map((item, index) => (
                        <Typography variant="body2" key={index}>
                            <Link to={item.linkSrc}>{item.data}</Link>
                        </Typography>
                    ))}
                </Box>
            </TagsCard>
        </>
    );
};

export default RecentPost;
