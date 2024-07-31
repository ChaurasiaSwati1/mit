import React, { useState } from 'react';
import { Input as MUIInput, InputLabel as MUIInputLabel, Box as MUIBox } from '@mui/material';
import { styled } from '@mui/material/styles';

const InputBox = styled(MUIBox)({
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
    '&.nolabel': {
        '& .label': {
            fontSize: '12px',
        },
    },
    '& p': {
        fontSize: '12px',
        color: 'red',
        marginBottom: '0',
        marginTop: '4px',
    },
});
const InputLabel = styled(MUIInputLabel)({
    textAlign: 'start',
    color: '#023966',
    fontWeight: '500',
    fontSize: '16px',
    '@media (max-width: 991.98px)': {
        fontSize: '14px',
    },
});
const Input = styled(MUIInput)({
    width: '100%',
    padding: '8px 12px',
    borderRadius: '4px',
    border: '1px solid #023966',
    color: '#023966',
    fontSize: '16px',
    backgroundColor: '#ffffff',
    '&:hover': {
        '&::after': {
            display: 'none',
        },
        '&::before': {
            display: 'none',
        },
    },
    '&::after': {
        borderBottom: '0',
        display: 'none',
    },
    '&::before': {
        borderBottom: '0',
        display: 'none',
    },
    '@media (max-width: 991.98px)': {
        fontSize: '14px',
    },
    '&.error': {
        border: '1px solid red',
    },
});

interface ITextAreaWithLabelProps {
    label?: string;
    placeholder: string;
    type: string;
    ariaLabel: string;
    classes?: string;
    name?: string;
    row?: number;
    // errorMsg?: string;
    multiline: boolean;
    labelRequired?: boolean;
    required?: boolean;
}

const TextAreaWithLabel = ({
    label,
    placeholder,
    multiline,
    labelRequired,
    ariaLabel,
    type,
    name,
    row = 3,
    classes,
    required,
}: ITextAreaWithLabelProps) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);

        if (name === 'message') {
            if (!/^[A-Za-z0-9\s]+$/.test(newValue)) {
                setError(true);
                setErrorMessage('Message is required');
            } else if (newValue.length < 5) {
                setError(true);
                setErrorMessage('Message should be minimum 5 characters');
            } else if (newValue.length > 999) {
                setError(true);
                setErrorMessage('Message should be maximum 255 characters');
            } else {
                setError(false);
                setErrorMessage('');
            }
        }
    };
    return (
        <InputBox className={classes}>
            <InputLabel required={labelRequired} className="label">
                {label}
            </InputLabel>
            <Input
                aria-label={ariaLabel}
                name={name}
                multiline={multiline}
                placeholder={placeholder}
                type={type}
                onChange={handleChange}
                value={value}
                required={required}
                rows={row}
                className={error ? 'formControl error' : 'formControl'}
            />
            {error && <p>{errorMessage}</p>}
        </InputBox>
    );
};

export default TextAreaWithLabel;
