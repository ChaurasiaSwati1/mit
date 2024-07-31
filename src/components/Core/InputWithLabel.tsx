import React, { useState } from 'react';
import { InputBase as MUIInputBase, InputLabel as MUIInputLabel, Box as MUIBox } from '@mui/material';
import { styled } from '@mui/material/styles';

const InputLabel = styled(MUIInputLabel)({
    textAlign: 'start',
    color: '#023966',
    fontWeight: '500',
    fontSize: '16px',
    '@media (max-width: 991.98px)': {
        fontSize: '14px',
    },
});
const Box = styled(MUIBox)({
    '& p.error': {
        fontSize: '12px',
        color: 'red',
        marginBottom: '0',
        marginTop: '4px',
    },
});
const InputBox = styled(MUIBox)({
    '&.formCheckbox': {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
        '& .MuiInputBase-root': {
            width: 'auto',
            height: 'auto',
            padding: '0',
            borderRadius: '0',
            border: 'none',
            accentColor: '#023966',
            marginRight: '8px',
        },
        '& .MuiFormLabel-root': {
            marginBottom: '0px',
        },
    },
    '& .MuiFormLabel-root': {
        marginBottom: '8px',
        '&.Mui-required': {
            '& span': {
                display: 'none',
            },
            '&::after': {
                content: '"*"',
                color: 'red',
                position: 'relative',
                top: '-2px',
                fontSize: '14px',
                marginLeft: '4px',
                width: 'auto',
                background: 'transparent',
            },
        },
    },
    '& span': {
        display: 'none',
    },
    '&.datelabel': {
        position: 'relative',
        '& span': {
            display: 'block',
            position: 'absolute',
            zIndex: '9',
            background: '#ffffff',
            top: 'initial',
            bottom: '2px',
            lineHeight: '36px',
            left: '12px',
            color: '#bbcad6',
            width: '140px',
        },
        '&.nopholder': {
            '& span': {
                display: 'none',
            },
        },
    },
    '&.nolabel': {
        '& .MuiFormLabel-root.label': {
            fontSize: '12px',
        },
    },
});
const InputBase = styled(MUIInputBase)({
    width: '100%',
    height: '40px',
    padding: '4px 12px',
    borderRadius: '4px',
    border: '1px solid #023966',
    color: '#023966',
    fontSize: '16px',
    backgroundColor: '#ffffff',
    '@media (max-width: 991.98px)': {
        fontSize: '14px',
    },
    '&.error': {
        border: '1px solid red',
    },
});
interface IInputWithLabelProps {
    label?: string;
    placeholder?: string;
    type: string;
    name?: string;
    classes?: string;
    value?: string;
    isHTML?: boolean;
    readonly?: boolean;
    required?: boolean;
    labelRequired?: boolean;
}

const InputWithLabel = ({
    label,
    placeholder,
    type,
    // isHTML,
    required,
    labelRequired,
    name,
    readonly,
    classes,
}: IInputWithLabelProps) => {
    const [value, setValue] = useState(() => {
        if (name === 'blogdate') {
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().split('T')[0];
            const hours = currentDate.getHours();
            const minutes = currentDate.getMinutes();
            const formattedHours = hours % 12 || 12; // Convert to 12-hour format, ensuring 12 is used instead of 0
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Pad minutes with zero if needed
            return `${formattedDate} ${formattedHours}:${formattedMinutes} ${ampm}`; // Format date and time
        } else {
            return ''; // default value for other fields
        }
    });

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [minDate, setMinDate] = useState(() => {
        const currentDate = new Date();
        return currentDate.toISOString().split('T')[0];
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);

        if (required && newValue.trim() === '') {
            setErrorMessage('This field is required');
            setError(true);
        } else {
            setError(false);
            setErrorMessage('');
        }

        if (name === 'first_name' || name === 'last_name') {
            if (newValue.length < 3) {
                setErrorMessage('Name must be at least 3 characters');
                setError(true);
            } else if (newValue.length > 20) {
                setErrorMessage('Name should be maximum of 20 characters');
                setError(true);
            } else {
                setError(false);
                setErrorMessage('');
            }
        }

        if (name === 'email') {
            const pattern = /^[a-zA-Z0-9]+@[a-zA-Z.-]+\.(com|co)$/;
            if (!pattern.test(newValue)) {
                setErrorMessage('Please enter valid email');
                setError(true);
            } else {
                setError(false);
                setErrorMessage('');
            }
        }
        if (name === 'mob_no') {
            if (!/^[0-9]+$/.test(newValue)) {
                setError(true);
                setErrorMessage('Only numbers are allowed');
            } else if (newValue.length < 10) {
                setError(true);
                setErrorMessage('Number must contain 10 digits');
            } else if (newValue.length > 10) {
                setError(true);
                setErrorMessage('Number must contain 10 digits');
            } else {
                setError(false);
                setErrorMessage('');
            }
        }
        if (name === 'date') {
            const currentDate = new Date();
            // const selectedDate = new Date(newValue);

            // Check if the selected date is in the past
            if (newValue.length === 10 && !/^\d{4}-\d{2}-\d{2}$/.test(newValue)) {
                setErrorMessage('Invalid date format. Please enter YYYY-MM-DD');
                setError(true);
            } else {
                setError(false);
                setErrorMessage('');
                setMinDate(currentDate.toISOString().split('T')[0]); // Update min date to the current date
            }
        }
        if (name === 'terms') {
            if (!event.target.checked) {
                setError(true);
                setErrorMessage('Please select terms & condition to agree');
            } else {
                setError(false);
                setErrorMessage('');
            }
        }
    };
    return (
        <Box>
            <InputBox className={classes}>
                <InputLabel required={labelRequired} className="label">
                    {label}
                </InputLabel>
                {/* <span>{placeholder}</span> */}
                <InputBase
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    required={required}
                    value={value}
                    onChange={handleChange}
                    readOnly={readonly}
                    className={error ? 'formControl error' : 'formControl'}
                    inputProps={name === 'date' ? { min: minDate } : {}}
                />
            </InputBox>
            {error && <p className="error">{errorMessage}</p>}
        </Box>
    );
};

export default InputWithLabel;
