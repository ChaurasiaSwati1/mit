import { Box, Container, Link, Typography } from '@mui/material';
import React from 'react';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
const DemoLeft = () => {
    return (
        <Box className="common-head-bg bg-light">
            <Container fixed>
                <Box className="about-card">
                    <Box className="about-desc">
                        <Typography variant="h2" gutterBottom className="font-28 fw-500 text-primary mb-4 mt-0">
                            Want to try out the{' '}
                            <Link href="/" className="text-primary decoration-none fw-600">
                                Mithila IT
                            </Link>{' '}
                            experience for yourself?
                        </Typography>
                        <Typography className="font-14  fw-500 mt-0 mb-5">
                            Sign on and try our solution for yourself, to see how it works and how it could be of help
                            to you!
                        </Typography>
                        <div className="demoImg overflow-hidden mb-5">
                            <img src="/images/demo-man.jpg" className="object-cover" alt="demo man" />
                        </div>
                        <Typography className="font-14  fw-500 mt-0 mb-4">
                            Build an inclusive and integrated community through a digitally transformative solution that
                            helps you manage your community’s day-to-day activities.
                        </Typography>
                        <Link
                            href="mailto:info@mithilait.com"
                            className="w-fit decoration-none btn-primary text-white fw-600 flex items-center mb-4"
                        >
                            <MailOutlineIcon className="text-white pr-2 font-26" />
                            Contact Us
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default DemoLeft;
