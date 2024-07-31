import React from 'react';
import { Container, Box as MUIBox, Typography as MUITypography } from '@mui/material';
import { styled } from '@mui/material/styles';
interface ITitleWithLineProps {
    title: string;
    subTitle: string;
    classVal?: string;
    dataAos?: string;
}

const Title = styled(MUITypography)({
    fontSize: '34px',
    fontWeight: 600,
    textAlign: 'center',
    paddingBottom: '3rem',
    color: '#012440',
    display: 'flex',
    alignItems: 'baseline',
    '& svg': {
        fontSize: '10px',
        position: 'relative',
        color: '#012440',
        animation: '2s blink ease infinite',
        paddingLeft: '4px',
        '@media (max-width: 767.98px)': {
            display: 'none',
        },
        '@keyframes blink': {
            'from, to': {
                opacity: 0,
            },
            '50%': {
                opacity: 1,
            },
        },
    },
    position: 'relative',
    margin: '0 auto',
    width: 'fit-content',
    '&:after': {
        position: 'absolute',
        content: '""',
        width: '40%',
        maxWidth: '100px',
        height: '4px',
        borderRadius: '4px',
        backgroundColor: '#012440',
        left: '0',
        right: '0',
        bottom: '38px',
        margin: '0 auto',
        transition: 'width 2s',
    },
    '@media (max-width: 1199.98px)': {
        fontSize: '30px',
    },
    '@media (max-width: 991.98px)': {
        fontSize: '24px',
    },
    '@media (max-width: 767.98px)': {
        fontSize: '20px',
    },
});
const Box = styled(MUIBox)({
    position: 'relative',
    height: 'auto',
    width: '100%',
    '&:hover': {
        '& h2': {
            '&:after': {
                width: '100%',
                maxWidth: '100%',
            },
        },
    },
});
const DescBox = styled(MUIBox)({
    height: '100%',
    width: '100%',
    right: 0,
    top: 0,
    alignItems: 'center',
    color: '#054d79',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    zIndex: 2,
});

const TitleWithLine = ({ title, classVal, dataAos }: ITitleWithLineProps) => {
    return (
        <Box>
            <Container fixed>
                <DescBox>
                    <Title variant="h2" gutterBottom className={classVal} data-aos={dataAos}>
                        {title}
                    </Title>
                </DescBox>
            </Container>
        </Box>
    );
};

export default TitleWithLine;
