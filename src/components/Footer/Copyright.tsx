import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Modal as BaseModal } from '@mui/base/Modal';
import { Box as MUIBox, Typography as MUITypography, styled, Button, Grid as MUIGrid } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CallBack from '../Form/CallBackForm';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import DotTitleWithLine from '../Core/DotTitleWithLine';
import { useLocation } from 'react-router-dom';
// import buildInfo from '../../buildInfo.json';
const ModalBody = styled(MUIBox)({
    zIndex: '99',
    background: '#ffffff',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '80%',
    position: 'relative',
    outline: 'none',
    '@media (max-width: 1199.98px)': {
        maxWidth: '85%',
    },
    '@media (max-width: 899.98px)': {
        maxWidth: '90%',
    },
    '@media (max-width: 599.98px)': {
        maxWidth: '100%',
        // top: '160px',
    },
    '& h2': {
        '& svg': {
            fontSize: '28px',
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
        '@media (max-width: 599.98px)': {
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
});
const Box = styled(MUIBox)({
    background: '#01111f',
});
const Typography = styled(MUITypography)({
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    margin: '0 auto',
    fontWeight: '500',
    paddingBottom: '12px',
    textAlign: 'center',
    '& .MuiSvgIcon-root': {
        fontSize: '20px',
        paddingRight: '.5rem',
    },
});
const CloseButton = styled(Button)({
    position: 'absolute',
    background: '#ffffff',
    color: '#012440',
    minWidth: '30px',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    right: '-10px',
    top: '-13px',
    zIndex: '10',
    padding: '8px',
    boxShadow: '0 1px 4px #4d4d4d',
    fontWeight: '600',
    '&:hover': {
        background: '#012440',
        color: '#ffffff',
    },
    '& .MuiSvgIcon-root': {
        fontSize: '16px',
        fontWeight: '700',
    },
});
const ModalContent = styled(MUIBox)({
    position: 'absolute',
    zIndex: '98',
    padding: '20px',
    overflowY: 'auto',
    overflowX: 'hidden',
    cursor: 'pointer',
    height: '100%',
    width: '100%',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 599.98px)': {
        display: 'block',
        paddingTop: '40px',
    },
});
const Modal = styled(BaseModal)({
    position: 'fixed',
    zIndex: '97',
    inset: '0',
    backgroundColor: 'rgb(0 0 0 / 0.65)',
});
const Grid = styled(MUIGrid)({
    position: 'relative',
});
const DemoGrid = styled(MUIGrid)({
    '& img': {
        objectFit: 'cover',
        height: '100%',
        maxHeight: '450px',
        width: '100%',
        objectPosition: 'top',
        borderRadius: '8px',
    },
    '@media (max-width: 899.98px)': {
        display: 'none',
    },
});
const SecDemoGrid = styled(MUIGrid)({
    alignItems: 'center',
});
const CopyRight = () => {
    const [open, setOpen] = React.useState(false);
    const location = useLocation();
    const [lastClosed, setLastClosed] = useState<Date | null>(null);

    const handleClose = () => {
        setOpen(false);
        setLastClosed(new Date());
    };
    const handleModalContentClick = (event: { stopPropagation: () => void }) => {
        event.stopPropagation();
    };

    useEffect(() => {
        const handleScroll = () => {
            if (
                location.pathname === '/' &&
                window.scrollY > 800 &&
                (!lastClosed || new Date().getTime() - lastClosed.getTime() > 24 * 60 * 60 * 1000) &&
                !open
            ) {
                setOpen(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname, lastClosed, open]);

    return (
        <>
            <Box>
                <Container fixed>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Typography>
                                <CopyrightIcon /> 2024 Mithila IT | All rights reserved.
                                {/* {buildInfo && buildInfo.version ? ` Version: ${buildInfo.version}` : ''} */}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        closeAfterTransition
                    >
                        <ModalContent>
                            <ModalBody onClick={handleModalContentClick}>
                                <CloseButton onClick={handleClose}>
                                    <CloseOutlinedIcon />
                                </CloseButton>
                                <SecDemoGrid container spacing={2}>
                                    <DemoGrid item xs={12} md={6}>
                                        <img src="/images/demo-man.jpg" alt="demo-man" height={100} width={100} />
                                    </DemoGrid>
                                    <Grid item xs={12} md={6}>
                                        <DotTitleWithLine
                                            title="Get Demo"
                                            subTitle={''}
                                            icon={<QuestionMarkIcon />}
                                            classVal="animation"
                                            dataAos="fade"
                                        />

                                        <CallBack onSubmit={handleClose} />
                                    </Grid>
                                </SecDemoGrid>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </Container>
            </Box>
        </>
    );
};

export default CopyRight;
