import { Button as MUIButton, Grid, styled, Snackbar } from '@mui/material';
import axios from 'axios';
import React, { FormEvent, useState } from 'react';
import InputWithLabel from '../Core/InputWithLabel';
import TextAreaWithLabel from '../Core/TextAreaWithLabel';
import InputSelect from '../Core/InputSelect';
import Loader from '../Core/Loader';
import CloseIcon from '@mui/icons-material/Close';

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
const Button = styled(MUIButton)({
    width: '100%',
    background: '#012440',
    padding: '8px 16px',
    outline: 'none',
    border: 'none',
    borderRadius: '4px',
    textDecoration: 'none',
    color: '#ffffff',
    boxShadow: '0 2px 4px #02396630',
    fontSize: '16px',
    '@media (max-width: 991.98px)': {
        fontSize: '14px',
    },
    '&:hover': {
        background: '#77aafc',
        boxShadow: '0 2px 16px #02396630',
    },
});
const CallBack: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
    const [loading, setLoading] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleSnackbarClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpen(false);
    };

    const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
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
            onSubmit();
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
        <>
            <form id="demoForm" onSubmit={submitHandler} name="demoForm">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <InputWithLabel
                            classes="nolabel"
                            placeholder="First Name"
                            label="First Name"
                            type="text"
                            required={true}
                            labelRequired={true}
                            name="first_name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <InputWithLabel
                            classes="nolabel"
                            placeholder="Last Name"
                            label="Last Name"
                            type="text"
                            required={true}
                            labelRequired={true}
                            name="last_name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <InputWithLabel
                            classes="nolabel"
                            placeholder="Email"
                            label="Email"
                            type="email"
                            required={true}
                            labelRequired={true}
                            name="email"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <InputWithLabel
                            classes="nolabel"
                            placeholder="Mob No."
                            type="tel"
                            label="Mobile No."
                            required={true}
                            labelRequired={true}
                            name="mob_no"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <InputSelect
                            classes="nolabel"
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
                            classes="datelabel nolabel"
                            placeholder="Preferred Date"
                            label="Preferred Date"
                            type="date"
                            required={true}
                            labelRequired={true}
                            name="date"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextAreaWithLabel
                            placeholder="Enter Some Message"
                            multiline={true}
                            ariaLabel="Enter Some Message"
                            type="text"
                            name="message"
                            label="Message"
                            classes="nolabel"
                            required={true}
                            labelRequired={true}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Button type="submit">Submit</Button>
                    </Grid>
                </Grid>
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
        </>
    );
};

export default CallBack;
