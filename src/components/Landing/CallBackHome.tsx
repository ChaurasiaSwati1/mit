import { Box as MUIBox, Grid, styled } from '@mui/material';
import React from 'react';
import CallBack from '../Form/CallBackForm';
import DotTitleWithLine from '../Core/DotTitleWithLine';
import CircleIcon from '@mui/icons-material/Circle';
const GridCall = styled(Grid)({
    marginLeft: 'auto',
    marginRight: 'auto',
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
const CallBackHome = () => {
    return (
        <Box>
            <DotTitleWithLine
                title="Get A Callback!"
                subTitle={''}
                icon={<CircleIcon />}
                dataAos="fade-up"
                classVal="animation"
            />
            <Grid container>
                <GridCall item xs={12} md={8} lg={6}>
                    <CallBack onSubmit={() => {}} />
                </GridCall>
            </Grid>
        </Box>
    );
};

export default CallBackHome;
