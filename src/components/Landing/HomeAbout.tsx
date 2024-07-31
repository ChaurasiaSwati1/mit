import { Box as MUIBox, Container, styled, Link as MUILink } from '@mui/material';
import React from 'react';
import DotTitleWithLine from '../Core/DotTitleWithLine';
import ReadMoreBtn from '../Core/ReadMoreBtn';
import DescText from '../Core/DescText';
import CircleIcon from '@mui/icons-material/Circle';

const Box = styled(MUIBox)({});
const Link = styled(MUILink)({
    textDecoration: 'none',
});
const BoxDesc = styled(MUIBox)({
    textAlign: 'center',
});
const Main = styled(MUIBox)({
    alignItems: 'center',
    background: '#01111f0f',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '50px 0',
    '@media (max-width: 1199.98px)': {
        padding: '40px 0',
    },
    '@media (max-width: 991.98px)': {
        padding: '35px 0',
    },
    '@media (max-width: 767.98px)': {
        padding: '30px 0',
    },
    '@media (max-width: 575.98px)': {
        padding: '25px 0',
    },
});
const HomeAbout = () => {
    return (
        <Main>
            <Box className="animation" data-aos="fade-up">
                <DotTitleWithLine title="About Us" subTitle={''} icon={<CircleIcon />} />
                <Container fixed>
                    <Box>
                        <BoxDesc>
                            <DescText
                                text={`At Mithila IT, we are more than just a technology company; 
                                we are your strategic partners in digital transformation. Our team 
                                comprises experienced developers, creative designers, strategic 
                                marketers, and insightful consultants who work collaboratively 
                                to bring your vision to life. With a passion for technology 
                                and a drive for excellence, we strive to provide solutions 
                                that not only meet but exceed your expectations.`}
                            />
                            <Link href="/about">
                                <ReadMoreBtn text="Know More" type="button" />
                            </Link>
                        </BoxDesc>
                    </Box>
                </Container>
            </Box>
        </Main>
    );
};

export default HomeAbout;
