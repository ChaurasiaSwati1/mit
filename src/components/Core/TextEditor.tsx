import React, { useRef } from 'react';
import SunEditor from 'suneditor-react';
import SunEditorCore from 'suneditor/src/lib/core';
import { InputLabel as MUIInputLabel, Box as MUIBox } from '@mui/material';
import { styled } from '@mui/material/styles';
const InputLabel = styled(MUIInputLabel)({
    textAlign: 'start',
    color: '#023966',
    fontWeight: '500',
    fontSize: '16px',
    '@media (max-width: 991.98px)': {
        fontSize: '14px',
    },
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
});
const Box = styled(MUIBox)({
    '& .sun-editor': {
        '& .se-container': {
            zIndex: '0 !important',
            '& .se-wrapper': {
                '& .se-wrapper-inner': {
                    minHeight: '115px',
                },
            },
            '& .se-btn': {
                width: '26px',
                height: '26px',
                '&.se-btn-select': {
                    width: 'auto !important',
                },
            },
            '& .se-btn-select': {
                '& .txt': {
                    lineHeight: '1.5',
                    marginRight: '8px',
                },
            },
            '& .se-btn-module-enter': {
                display: 'none',
            },
            '& button': {
                '& .se-svg': {
                    width: '12px',
                    height: '12px',
                },
                '& svg': {
                    width: '12px',
                    height: '12px',
                },
            },
        },
    },
});
const TextEditor = () => {
    const editor = useRef<SunEditorCore>();

    // The sunEditor parameter will be set to the core suneditor instance when this function is called
    const getSunEditorInstance = (sunEditor: SunEditorCore) => {
        editor.current = sunEditor;
    };
    return (
        <Box>
            <InputLabel required={true} className="label">
                Description
            </InputLabel>
            <SunEditor
                getSunEditorInstance={getSunEditorInstance}
                setOptions={{
                    buttonList: [
                        // Default buttons
                        ['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
                        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                        ['fontColor', 'hiliteColor', 'textStyle'],
                        ['removeFormat'],
                        '/', // Line break
                        ['outdent', 'indent'],
                        ['align', 'horizontalRule', 'list', 'lineHeight'],
                        ['table', 'link', 'image', 'video', 'audio'], // Add image, video, audio buttons
                        ['fullScreen', 'showBlocks', 'codeView'],
                        ['preview', 'print'],
                    ],
                }}
            />
        </Box>
    );
};
export default TextEditor;
