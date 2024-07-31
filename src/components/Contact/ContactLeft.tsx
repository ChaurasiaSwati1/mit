import { Box as MUIBox, styled } from '@mui/material';
import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DescText from '../Core/DescText';
import LabelWithIcon from '../Core/LabelWithIcon';
import DotTitleWithLine from '../Core/DotTitleWithLine';
import CircleIcon from '@mui/icons-material/Circle';

const MailBox = styled(MUIBox)({
    margin: '0 0 40px',
    width: 'fit-content',
    '@media (max-width: 991.98px)': {
        margin: '0 auto 35px',
    },
    '@media (max-width: 768.98px)': {
        margin: '0 auto 30px',
    },
    '@media (max-width: 576.98px)': {
        margin: '0 auto 25px',
    },
});
const BoxDesc = styled(MUIBox)({
    '& .title': {
        '& .MuiContainer-root': {
            padding: '0',
            '& h2': {
                marginLeft: '0',
                paddingLeft: '0',
                '@media (max-width: 991.98px)': {
                    marginLeft: '0',
                },
            },
        },
    },
    '& p': {
        textAlign: 'left',
        '@media (max-width: 991.98px)': {
            textAlign: 'center',
        },
    },
});
const Box = styled(MUIBox)({});
const ContactLeft = () => {
    return (
        <Box>
            {/* <Container fixed> */}
            <Box>
                <BoxDesc className="animation" data-aos="fade-up">
                    <DotTitleWithLine
                        title="Get in touch with us!"
                        subTitle={''}
                        icon={<CircleIcon />}
                        classVal="animation"
                        dataAos="fade-up"
                    />
                    <DescText
                        classVal="animation"
                        dataAos="fade-up"
                        text={`Have questions, need assistance, or ready to start a project? Our team is here to 
                            help. Contact us today and let’s begin the conversation about how we can boost your online 
                            presence, design captivating websites, and elevate your marketing strategies. We look 
                            forward to hearing from you!”`}
                    />
                    <DescText
                        classVal="animation"
                        dataAos="fade-up"
                        text={`We are lead generation experts who are here to help your business connect with 
                            potential
                                customers`}
                    />
                    <MailBox>
                        <LabelWithIcon
                            icon={<MailOutlineIcon />}
                            label="info@mithilait.com"
                            href="mailto:info@mithilait.com"
                        />
                    </MailBox>
                </BoxDesc>
            </Box>
            {/* </Container> */}
        </Box>
    );
};

export default ContactLeft;
