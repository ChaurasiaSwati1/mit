import React, { FormEvent, useState } from 'react';
// import axios from 'axios';
// import BannerWithTitle from '../../components/Core/BannerWithTitle';
import {
    styled,
    Box,
    Container,
    Typography as MUITypography,
    Grid,
    Button as MUIButton,
    Snackbar,
    Card as MUICard,
} from '@mui/material';
import { Helmet } from 'react-helmet';
import Loader from '../components/Core/Loader';
import CloseIcon from '@mui/icons-material/Close';
import InputWithLabel from '../components/Core/InputWithLabel';
// import TextAreaWithLabel from '../components/Core/TextAreaWithLabel';
import ImageUploader from '../components/Core/ImageUploader';
import TextEditor from '../components/Core/TextEditor';
const Title = styled(MUITypography)({
    fontSize: '34px',
    fontWeight: 600,
    textAlign: 'center',
    paddingBottom: '.5rem',
    marginBottom: '1.5rem',
    lineHeight: '1',
    background: '#01111f',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'flex',
    alignItems: 'baseline',
    textShadow: '0 0 1em #3600fa33,0 0 0.125em #3341ff4d,1em -0.125em 0.5em #ffbb3300,-1em 0.125em 0.5em #33bbff00',
    '@media (max-width: 1199.98px)': {
        fontSize: '30px',
    },
    '@media (max-width: 991.98px)': {
        fontSize: '24px',
    },
    '@media (max-width: 767.98px)': {
        fontSize: '20px',
    },
    '&.SubTitle': {
        fontSize: '26px',
        marginBottom: '20px',
        '@media (max-width: 991.98px)': {
            fontSize: '24px',
        },
        '@media (max-width: 767.98px)': {
            fontSize: '20px',
        },
    },
});
const BannerBox = styled(Box)({
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
const SnackbarBox = styled(Snackbar)({
    '& .MuiSnackbarContent-root': {
        background: '#048b5f',
        color: '#ffffff',
    },
});
const IconButton = styled(MUIButton)({
    background: 'none',
    padding: '0',
    minWidth: 'auto',
    '& :hover': {
        background: 'none',
    },
});
const Card = styled(MUICard)({
    padding: '20px',
    height: '100%',
    background: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0px 0px 8px 0px rgba(0,0,0,.16)',
    // '&:hover': {
    //     boxShadow: '0px 0px 30px 0px rgba(0,0,0,.16)',
    // },
});
const Button = styled(MUIButton)({
    width: 'auto',
    background: '#012440',
    padding: '8px 24px',
    outline: 'none',
    border: 'none',
    borderRadius: '4px',
    textDecoration: 'none',
    color: '#ffffff',
    boxShadow: '0 2px 4px #02396630',
    fontSize: '16px',
    display: 'flex',
    marginLeft: 'auto',
    marginTop: '30px',
    '@media (max-width: 991.98px)': {
        fontSize: '14px',
    },
    '&:hover': {
        background: '#77aafc',
        boxShadow: '0 2px 16px #02396630',
    },
});
const AddBlog = () => {
    const [loading, setLoading] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    // const [defaultValues, setDefaultValues] = useState({ date: '', time: '' });

    // useEffect(() => {
    //     const currentTime = new Date();
    //     const formattedDate = currentTime.toISOString().split('T')[0];
    //     const hours = currentTime.getHours();
    //     const minutes = currentTime.getMinutes();
    //     const formattedHours = hours.toString().padStart(2, '0');
    //     const formattedMinutes = minutes.toString().padStart(2, '0');
    //     const formattedTime = `${formattedHours}:${formattedMinutes}`;
    //     setDefaultValues({ date: formattedDate, time: formattedTime });
    // }, []);

    const handleSnackbarClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpen(false);
    };

    const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(false);
        setSnackbarMessage('Error submitting form. Please try again.');
        // const target = event.target as HTMLFormElement;
        // const formDataToSend = {
        //     first_name: (target.elements.namedItem('first_name') as HTMLInputElement).value.trim(),
        //     last_name: (target.elements.namedItem('last_name') as HTMLInputElement).value.trim(),
        //     email: (target.elements.namedItem('email') as HTMLInputElement).value.trim(),
        //     date: (target.elements.namedItem('date') as HTMLInputElement).value,
        //     service: (target.elements.namedItem('service') as HTMLSelectElement).value,
        //     mob_no: (target.elements.namedItem('mob_no') as HTMLInputElement).value.trim(),
        //     message: (target.elements.namedItem('message') as HTMLTextAreaElement).value.trim(),
        // };
        // // const clearFormData = ['first_name', 'last_name', 'email', 'date', 'service', 'mob_no', 'message'];

        // try {
        //     const response = await axios.post('https://api.mithilait.com/api/demo', formDataToSend);
        //     console.log(response.data);
        //     setSnackbarOpen(true);
        //     setSnackbarMessage('Form submitted successfully!');
        //     (target.elements.namedItem('first_name') as HTMLInputElement).value = '';
        //     (target.elements.namedItem('last_name') as HTMLInputElement).value = '';
        //     (target.elements.namedItem('email') as HTMLInputElement).value = '';
        //     (target.elements.namedItem('date') as HTMLInputElement).value = '';
        //     (target.elements.namedItem('service') as HTMLSelectElement).value = '';
        //     (target.elements.namedItem('mob_no') as HTMLInputElement).value = '';
        //     (target.elements.namedItem('message') as HTMLTextAreaElement).value = '';
        // } catch (error) {
        //     console.error(error);
        //     setSnackbarOpen(true);
        //     setSnackbarMessage('Error submitting form. Please try again.');
        // } finally {
        //     setLoading(false);
        // }
    };
    return (
        <>
            <Helmet>
                <meta property="og:type" content="Portfolio Details" />
                <meta property="og:url" content="https://mithilait.com/portfolio" />
                <meta
                    property="og:title"
                    content="Mithila IT | One-Stop IT Solution Company For All Your Digital Needs"
                />
                <meta
                    property="og:description"
                    content="Unlock the power of technology with Mithila IT, where every solution is 
                    tailored to your unique needs"
                />
                <meta property="og:image" content="/logo512.png" />
            </Helmet>
            {/* <BannerBox>
                <BannerWithTitle title="Portfolio Details" />
                <BoxImage>
                    <Container fixed>
                        <img src="/images/buildings.jpg" alt="buildings" />
                    </Container>
                </BoxImage>
            </BannerBox> */}
            <BannerBox>
                <Container fixed>
                    <Title>Add New Blog</Title>
                    <Card>
                        <form id="demoForm" onSubmit={submitHandler} name="demoForm">
                            {/* <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={6} mb={3}>
                                </Grid>
                            </Grid> */}
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={6} lg={4}>
                                    <InputWithLabel
                                        placeholder="Title"
                                        label="Title"
                                        type="text"
                                        required={true}
                                        labelRequired={true}
                                        name="first_name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={4}>
                                    <InputWithLabel
                                        placeholder="Sub Title"
                                        label="Sub Title"
                                        type="text"
                                        required={false}
                                        labelRequired={false}
                                        name="last_name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={4}>
                                    <InputWithLabel
                                        placeholder="Author Name"
                                        label="Author Name"
                                        type="text"
                                        required={true}
                                        labelRequired={true}
                                        name="last_name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={4}>
                                    <InputWithLabel
                                        placeholder="Tag"
                                        label="Tag"
                                        type="text"
                                        required={false}
                                        labelRequired={false}
                                        name="email"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={4}>
                                    <InputWithLabel
                                        placeholder="Category Type"
                                        label="Category Type"
                                        type="text"
                                        required={false}
                                        labelRequired={false}
                                        name="categoryType"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={4}>
                                    <InputWithLabel
                                        classes="datelabel"
                                        placeholder="Date & Time"
                                        label="Date"
                                        type="text"
                                        readonly={true}
                                        required={false}
                                        labelRequired={false}
                                        name="blogdate"
                                        // value={defaultValues.date}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    {/* <TextAreaWithLabel
                                        placeholder="Enter Some Message"
                                        multiline={true}
                                        ariaLabel="Enter Some Message"
                                        type="text"
                                        name="message"
                                        label="Description"
                                        required={true}
                                        labelRequired={true}
                                    /> */}
                                    <TextEditor />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <ImageUploader />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <Button type="submit">Update</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Card>
                    {loading && <Loader />}

                    <SnackbarBox
                        open={snackbarOpen}
                        autoHideDuration={6000}
                        onClose={handleSnackbarClose}
                        message={snackbarMessage}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        action={
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackbarClose}>
                                <CloseIcon />
                            </IconButton>
                        }
                    />
                </Container>
            </BannerBox>
        </>
    );
};

export default AddBlog;
