import { Box, Container, Grid } from '@mui/material';
import React from 'react';

import DemoForm from '../Form/DemoForm';
import DemoLeft from './DemoLeft';
const DemoPage = () => {
    return (
        <Box className="bg-light py-50">
            <Container fixed>
                <Grid container>
                    <Grid item xs={12} md={8} lg={6} className="mx-auto">
                        <DemoLeft />
                    </Grid>
                    <Grid item xs={12} md={8} lg={6} className="mx-auto">
                        <DemoForm />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default DemoPage;
