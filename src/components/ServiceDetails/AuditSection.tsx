import { Grid as MUIGrid, Box as MUIBox, Container, styled } from '@mui/material';
import React from 'react';
import DescText from '../Core/DescText';
import SubTitleSmall from '../Core/SubTitleSmall';
import GetDemoModal from '../Core/GetDemoModal';
import DotTitleWithLine from '../Core/DotTitleWithLine';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
const Grid = styled(MUIGrid)({});
const GridHead = styled(MUIGrid)({
    textAlign: 'center',
    '& h5': {
        marginBottom: '.5rem',
    },
});
const Box = styled(MUIBox)({
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
    '& h2': {
        '& svg': {
            fontSize: '24px',
            '@media (max-width: 1199.98px)': {
                fontSize: '22px',
            },
            '@media (max-width: 991.98px)': {
                fontSize: '18px',
            },
            '@media (max-width: 767.98px)': {
                fontSize: '16px',
            },
        },
    },
    // background: '#01111f0f',
    // backgroundSize: 'cover',
});
const ModalBox = styled(MUIBox)({
    paddingTop: '16px',
    '& button': {
        '&:hover': {
            transform: 'translateY(-2px)',
            transitionDuration: '.4s',
        },
    },
});
const AuditSection = () => {
    return (
        <Box>
            <Container fixed>
                <Grid container>
                    <GridHead item xs={12} md={12}>
                        <DotTitleWithLine
                            title="Free Digital Lead Generation Strategy & Audit "
                            subTitle={''}
                            icon={<AddToPhotosOutlinedIcon />}
                            classVal="animation"
                            dataAos="fade-up"
                        />
                        <SubTitleSmall text="SEE IT TO BELIEVE IT!" classVal="animation" dataAos="fade-up" />
                        <DescText
                            dataAos="fade-up"
                            text={`Unlock your path to success! Request a free strategy consultation and highly
                            effective audit of your current campaigns. Let us take your business to the next level
                            with our expert insights and tailored strategies.`}
                            classVal="animation fadeInUp"
                        />
                    </GridHead>
                    <Grid item xs={12} md={12}>
                        <ModalBox className="animation" data-aos="fade-up">
                            <GetDemoModal btnText="Get Your Free Audit" heading="Book a Demo" />
                        </ModalBox>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AuditSection;
