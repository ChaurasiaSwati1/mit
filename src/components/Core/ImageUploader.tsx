import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { InputLabel as MUIInputLabel, Box as MUIBox } from '@mui/material';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const InputLabel = styled(MUIInputLabel)({
    textAlign: 'start',
    color: '#023966',
    fontWeight: '500',
    fontSize: '16px',
    marginBottom: '8px',
    '@media (max-width: 991.98px)': {
        fontSize: '14px',
    },
});

const Box = styled(MUIBox)({
    '& .MuiButton-root': {
        backgroundColor: '#ffffff',
        color: '#023966',
        width: '100%',
        justifyContent: 'flex-start',
        boxShadow: 'none',
        border: '1px solid #023966',
        '&:hover': {
            backgroundColor: '#ffffff',
            color: '#023966',
            boxShadow: 'none',
        },
    },
});

const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', 'mp4', 'avi', 'ov', 'wmv'];

const ImageUploader: React.FC = () => {
    const [, setFile] = React.useState<File | null>(null);
    const [fileName, setFileName] = React.useState('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = event.target.files?.[0];
        if (uploadedFile) {
            const fileExtension = uploadedFile.name.split('.').pop()?.toLowerCase() ?? '';

            if (allowedExtensions.includes(fileExtension)) {
                setFile(uploadedFile);
                setFileName(uploadedFile.name);
            } else {
                console.error('Only images and videos are allowed');
            }
        }
    };

    return (
        <Box>
            <InputLabel required={false} className="label">
                Upload Image/Video
            </InputLabel>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
            >
                {fileName ? fileName : 'Upload file'}
                <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </Button>
        </Box>
    );
};

export default ImageUploader;
