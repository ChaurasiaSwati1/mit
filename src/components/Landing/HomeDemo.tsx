import { Box, Container, Typography, styled } from '@mui/material';
import React from 'react';
import DescText from '../Core/DescText';
import GetDemoModal from '../Core/GetDemoModal';
import DotTitleWithLine from '../Core/DotTitleWithLine';
import CircleIcon from '@mui/icons-material/Circle';
const BoxDesc = styled(Box)({
    textAlign: 'center',
});
const BoxBtn = styled(Box)({
    marginTop: '20px',
});
const DescBox = styled(Box)({
    backgroundImage: 'url(/images/demo-bg-home.jpg)',
    backgroundSize: 'cover',
    padding: '50px 0',
    backgroundRepeat: 'no-repeat',
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
const SubTitle = styled(Typography)({
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '1.5rem',
    textAlign: 'center',
    '@media (max-width: 1199.98px)': {
        fontSize: '18px',
    },
    '@media (max-width: 991.98px)': {
        fontSize: '16px',
    },
    '@media (max-width: 767.98px)': {
        fontSize: '14px',
    },
});
const HomeDemo = () => {
    return (
        <DescBox>
            <Container fixed>
                <DotTitleWithLine
                    title="Get a Free Demo with Us"
                    subTitle={''}
                    icon={<CircleIcon />}
                    dataAos="fade-up"
                />
                <Box>
                    <BoxDesc className="animation" data-aos="fade-up">
                        <SubTitle>Take a Trail!</SubTitle>
                        <DescText
                            text={`Recognize the true potential of your business through the personalized 
                                demo with us and discover how our innovative software, strategic digital 
                                marketing, and expert IT consulting services transform your business 
                                operations and drive growth.  `}
                        />
                        <DescText
                            text={`Our interactive demo session will give you a firsthand experience of how 
                                our unique IT solutions can be customized according to your needs. Take the 
                                first step towards achieving your business goal in partnership with Mithila IT. `}
                        />
                        <BoxBtn>
                            <GetDemoModal heading="Book Your Demo Now" btnText="Book Your Demo Now" />
                        </BoxBtn>
                    </BoxDesc>
                </Box>
            </Container>
        </DescBox>
    );
};

export default HomeDemo;
