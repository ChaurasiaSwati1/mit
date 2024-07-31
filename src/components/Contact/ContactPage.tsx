import { Box as MUIBox, Container, Grid as MUIGrid, styled } from '@mui/material';
import React from 'react';
import ContactForm from '../Form/ContactForm';
import ContactLeft from './ContactLeft';
const GridCol = styled(MUIGrid)({
    margin: '0 auto',
});
const Grid = styled(MUIGrid)({
    alignItems: 'center',
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
});
const ContactPage = () => {
    return (
        <Box>
            <Container fixed>
                <Grid container spacing={{ lg: 6, md: 4 }}>
                    <GridCol item xs={12} md={8} lg={6}>
                        <ContactLeft />
                    </GridCol>
                    <GridCol item xs={12} md={8} lg={6}>
                        <ContactForm />
                    </GridCol>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactPage;
