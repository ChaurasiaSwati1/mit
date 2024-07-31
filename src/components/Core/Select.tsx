import { InputLabel as MUIInputLabel, MenuItem, Select as MUISelect, styled, Box } from '@mui/material';
import * as React from 'react';
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
const Select = styled(MUISelect)({
    width: '100%',
    height: '44px',
    padding: '0',
    borderRadius: '4px',
    border: '1px solid #023966',
    color: '#023966',
    fontSize: '16px',
    backgroundColor: '#ffffff',
    '& .MuiSelect-select': {
        width: '100%',
        height: '30px',
        padding: '6px 12px',
        borderRadius: '4px',
        border: '0',
        color: '#023966',
        fontSize: '16px',
        textAlign: 'left',
        backgroundColor: '#ffffff',
        '@media (max-width: 991.98px)': {
            fontSize: '14px',
        },
    },
    '& svg': {
        fill: '#023966',
    },
    '& .MuiPaper-root': {
        background: '#ffffff',
        padding: '8px',
    },
    '& fieldset': {
        '&:focus': {
            outline: 'none',
            borderColor: 'transparent',
        },
    },
    '@media (max-width: 991.98px)': {
        fontSize: '14px',
    },
});
export default function MultipleSelectPlaceholder() {
    return (
        <>
            {/* <Select defaultValue="select">
                <option value="select" disabled>
                    Please Select
                </option>
                <option value="graphic">Graphic Design</option>
                <option value="digital">Digital Marketing</option>
                <option value="content">Content Writing</option>
                <option value="website">Website Development</option>
                <option value="seo">Search Engine Optimization(SEO)</option>
                <option value="graphic">Graphic Designing</option>
            </Select> */}
            <Box>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select value="select" label="Age">
                    <MenuItem value="select" aria-selected>
                        Please Select
                    </MenuItem>
                    <MenuItem value="graphic">Graphic Design</MenuItem>
                    <MenuItem value="digital">Digital Marketing</MenuItem>
                    <MenuItem value="content">Content Writing</MenuItem>
                    <MenuItem value="website">Website Development</MenuItem>
                    <MenuItem value="seo">Search Engine Optimization(SEO)</MenuItem>
                    <MenuItem value="graphic">Graphic Designing</MenuItem>
                </Select>
            </Box>
        </>
    );
}
