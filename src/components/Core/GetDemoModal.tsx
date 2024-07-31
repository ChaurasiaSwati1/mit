import * as React from 'react';
import { Modal as BaseModal } from '@mui/base/Modal';
import { Button as MUIButton, styled, Box as MUIBox, Grid as MUIGrid } from '@mui/material';
import DotTitleWithLine from './DotTitleWithLine';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CallBack from '../Form/CallBackForm';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const CloseButton = styled(MUIButton)({
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
const TriggerButton = styled(MUIButton)({
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: '16px',
    color: '#ffffff',
    padding: '8px 20px',
    borderRadius: '4px',
    width: 'fit-content',
    textDecoration: 'none',
    boxShadow: '0px 0px 8px 0px rgba(0,0,0,.16)',
    background: '#012440',
    '&:hover': {
        boxShadow: '0px 0px 16px 0px rgba(0,0,0,.16)',
        background: '#012440a8',
    },
    '@media (max-width: 767.98px)': {
        fontSize: '14px',
        padding: '6px 16px',
    },
});
const Box = styled(MUIBox)({});
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
    zIndex: '98',
    inset: '0',
    backgroundColor: 'rgb(0 0 0 / 0.65)',
});
const Grid = styled(MUIGrid)({
    // position: 'relative',
});
const DemoGrid = styled(MUIGrid)({
    '& img': {
        objectFit: 'cover',
        height: '100%',
        maxHeight: '450px',
        width: '100%',
        objectPosition: 'top',
        borderRadius: '8px',
        '@media (max-width: 899.98px)': {
            maxHeight: '300px',
        },
    },
    '@media (max-width: 899.98px)': {
        display: 'none',
    },
});
const SecDemoGrid = styled(MUIGrid)({
    alignItems: 'center',
});

interface IGetDemoModalProps {
    btnText: string;
    heading: string;
}

const GetDemoModal = ({ btnText, heading }: IGetDemoModalProps) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleModalContentClick = (event: { stopPropagation: () => void }) => {
        event.stopPropagation();
    };
    return (
        <Box>
            <TriggerButton onClick={handleOpen} className="animate modalBtn" data-aos="fade-up">
                {btnText}
            </TriggerButton>
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
                                    title={heading}
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
        </Box>
    );
};

export default GetDemoModal;
