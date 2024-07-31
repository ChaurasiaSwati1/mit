import { InputLabel as MUIInputLabel, styled, Box as MUIBox } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';

const SelectBox = styled(MUIBox)({
    '& select': {
        width: '100%',
        height: '40px',
        padding: '4px 12px',
        borderRadius: '4px',
        border: '1px solid #023966',
        fontSize: '16px',
        backgroundColor: '#ffffff',
        webkitAppearance: 'none',
        mozAppearance: 'none',
        appearance: 'none',
        outline: 'none',
        background: 'url(/images/down-arrow.png) 18px/18px no-repeat #ffffff',
        backgroundPositionX: 'calc(100% - 12px)',
        '@media (max-width: 991.98px)': {
            fontSize: '14px',
        },
        '&.error': {
            border: '1px solid red',
        },
    },
    '& p': {
        fontSize: '12px',
        color: 'red',
        marginBottom: '0',
        marginTop: '4px',
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
    '&.nolabel': {
        '& .MuiFormLabel-root.label': {
            fontSize: '12px',
        },
    },
});

const InputLabel = styled(MUIInputLabel)({
    textAlign: 'start',
    color: '#023966',
    marginBottom: '8px',
    fontWeight: '500',
    fontSize: '16px',
    '@media (max-width: 991.98px)': {
        fontSize: '14px',
    },
});
interface IInputSelectProps {
    label?: string;
    classes?: string;
    placeholder?: string;
    name?: string;
    labelRequired?: boolean;
    // errorMsg?: string;
    options: string[];
}
const InputSelect = ({ label, options, classes, placeholder, name, labelRequired = true }: IInputSelectProps) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value;
        setValue(newValue);

        if (name === 'services') {
            if (newValue === placeholder) {
                setError(true);
                setErrorMessage('Please select any option');
            } else {
                setError(false);
                setErrorMessage('');
            }
        }
    };

    return (
        <>
            <SelectBox className={classes}>
                <InputLabel required={labelRequired} className="label">
                    {label}
                </InputLabel>
                <select
                    value={value}
                    name={name}
                    onChange={handleChange}
                    className={error ? 'formControl error' : 'formControl'}
                >
                    <option value={placeholder} disabled>
                        {placeholder}
                    </option>
                    {options.map((option, index) => (
                        <option value={option} key={index}>
                            {option}
                        </option>
                    ))}
                </select>
                {error && <p>{errorMessage}</p>}
            </SelectBox>
        </>
    );
};
export default InputSelect;
