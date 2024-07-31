import { Grid as MUIGrid, Box as MUIBox, styled, Button as MUIButton, Snackbar } from '@mui/material';
import InputWithLabel from '../Core/InputWithLabel';
import TextAreaWithLabel from '../Core/TextAreaWithLabel';
import DescText from '../Core/DescText';
import ReadMoreBtn from '../Core/ReadMoreBtn';
import axios from 'axios';
import React, { FormEvent, useState } from 'react';
import InputSelect from '../Core/InputSelect';
import Loader from '../Core/Loader';
import CloseIcon from '@mui/icons-material/Close';

const Box = styled(MUIBox)({
    // position: 'relative',
    '& .MuiSnackbar-root': {
        '& .MuiSnackbarContent-root': {
            background: '#048b5f',
            color: '#ffffff',
        },
    },
});
const Grid = styled(MUIGrid)({});
const ConditionGrid = styled(MUIGrid)({
    '& p': {
        fontSize: '10px',
    },
});
const FormGrid = styled(Grid)({
    '& p': {
        textAlign: 'left',
        '@media (max-width: 991.98px)': {
            textAlign: 'center',
        },
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
const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleSnackbarClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpen(false);
    };
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const target = event.target as HTMLFormElement;

        const formDataToSend = {
            first_name: (target.elements.namedItem('first_name') as HTMLInputElement).value.trim(),
            last_name: (target.elements.namedItem('last_name') as HTMLInputElement).value.trim(),
            email: (target.elements.namedItem('email') as HTMLInputElement).value.trim(),
            date: (target.elements.namedItem('date') as HTMLInputElement).value,
            service: (target.elements.namedItem('service') as HTMLSelectElement).value,
            mob_no: (target.elements.namedItem('mob_no') as HTMLInputElement).value.trim(),
            message: (target.elements.namedItem('message') as HTMLTextAreaElement).value.trim(),
        };
        // const clearFormData = ['first_name', 'last_name', 'email', 'date', 'service', 'mob_no', 'message'];

        try {
            const response = await axios.post('https://api.mithilait.com/api/demo', formDataToSend);
            console.log(response.data);
            setSnackbarOpen(true);
            setSnackbarMessage('Form submitted successfully!');
            (target.elements.namedItem('first_name') as HTMLInputElement).value = '';
            (target.elements.namedItem('last_name') as HTMLInputElement).value = '';
            (target.elements.namedItem('email') as HTMLInputElement).value = '';
            (target.elements.namedItem('date') as HTMLInputElement).value = '';
            (target.elements.namedItem('service') as HTMLSelectElement).value = '';
            (target.elements.namedItem('mob_no') as HTMLInputElement).value = '';
            (target.elements.namedItem('message') as HTMLTextAreaElement).value = '';
        } catch (error) {
            console.error(error);
            setSnackbarOpen(true);
            setSnackbarMessage('Error submitting form. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <Box className="animate fadeInUp">
            <form id="contactForm" onSubmit={handleSubmit} name="contactForm">
                <FormGrid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <InputWithLabel
                            label="First Name"
                            type="text"
                            placeholder="First Name"
                            required={true}
                            labelRequired={true}
                            name="first_name"
                            isHTML
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <InputWithLabel
                            label="Last Name"
                            type="text"
                            placeholder="Last Name"
                            name="last_name"
                            required={true}
                            labelRequired={true}
                            isHTML
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <InputWithLabel
                            label="Email"
                            type="email"
                            placeholder="Email"
                            name="email"
                            required={true}
                            labelRequired={true}
                            isHTML
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <InputWithLabel
                            label="Mobile No."
                            type="tel"
                            placeholder="Mobile No."
                            name="mob_no"
                            required={false}
                            labelRequired={false}
                            isHTML
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <InputSelect
                            label="Choose Service Type"
                            options={[
                                'Website Development',
                                'Graphic Design',
                                'Digital Marketing',
                                'Content Writing',
                                'Search Engine Optimization(SEO)',
                                'Graphic Designing',
                            ]}
                            placeholder="Select Service"
                            name="service"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <InputWithLabel
                            classes="datelabel"
                            placeholder="Preferred Date"
                            label="Preferred Date"
                            type="date"
                            required={true}
                            labelRequired={true}
                            name="date"
                            isHTML
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextAreaWithLabel
                            label="Comment"
                            name="message"
                            placeholder="Enter Some Message"
                            multiline={true}
                            labelRequired={true}
                            ariaLabel="Enter Some Message"
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <InputWithLabel
                            classes="formCheckbox"
                            label="I agree with the terms & conditions"
                            type="checkbox"
                            required={true}
                            name="terms"
                            placeholder=""
                            isHTML
                        />
                    </Grid>
                    <ConditionGrid item xs={12} sm={12}>
                        <DescText
                            text={`We are committed to your privacy. MIT uses the information you provide
                             to us to contact you about relevant content, products and service. You may 
                             unsubscribe from these communications at any time. For more information, check
                             our Privacy Policy.`}
                        />
                    </ConditionGrid>
                    <Grid item xs={12} sm={12}>
                        <ReadMoreBtn text="Submit" type="submit" />
                    </Grid>
                </FormGrid>
            </form>
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
        </Box>
    );
};

export default ContactForm;
