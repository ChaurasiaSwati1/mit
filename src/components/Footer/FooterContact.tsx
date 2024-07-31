import { Box as MUIBox, Button as MUIButton, Card as MUICard, Container, styled, InputBase } from '@mui/material';
import React from 'react';
const DescBox = styled(MUIBox)({
    paddingTop: '50px',
    background: '#01111f0f',
    '@media (max-width: 1199.98px)': {
        paddingTop: '40px',
    },
    '@media (max-width: 991.98px)': {
        paddingTop: '35px',
    },
    '@media (max-width: 767.98px)': {
        paddingTop: '30px',
    },
    '@media (max-width: 575.98px)': {
        paddingTop: '25px',
    },
});
const SubscribeButton = styled(MUIButton)({
    background: '#77aafc',
    borderRadius: '4px',
    color: '#ffffff',
    fontWeight: '600',
    boxShadow: '0px 1px 4px #77aafc',
    marginLeft: '12px',
});
const FormBox = styled(MUIBox)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
});
const Card = styled(MUICard)({
    background: '#012440',
    width: 'fit-content',
    padding: '30px 30px 10px',
    borderRadius: '8px 8px 0 0',
    margin: '0 auto',
    boxShadow: 'none',
    '@media (max-width: 767.98px)': {
        padding: '16px 16px 8px',
    },
});
const Box = styled(MUIBox)({});
const FooterContact = () => {
    return (
        <DescBox>
            <Container fixed>
                <Box>
                    <Card>
                        <FormBox component="form">
                            <InputBase
                                placeholder="Enter Your Email"
                                type="email"
                                sx={{
                                    width: '400px',
                                    p: '4px 12px',
                                    borderRadius: '2px',
                                    color: '#ffffff',
                                    fontSize: '12px',
                                    border: '1px solid #ffffff',
                                    '@media (max-width: 1199.98px)': {
                                        width: '360px',
                                    },
                                    '@media (max-width: 991.98px)': {
                                        width: '300px',
                                    },
                                    '@media (max-width: 768.98px)': {
                                        width: '260px',
                                    },
                                    '@media (max-width: 575.98px)': {
                                        width: 'fit-content',
                                    },
                                }}
                            />
                            <SubscribeButton>Subscribe</SubscribeButton>
                        </FormBox>
                    </Card>
                </Box>
            </Container>
        </DescBox>
    );
};

export default FooterContact;
