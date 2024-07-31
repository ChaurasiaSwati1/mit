import React from 'react';
import { Container, Grid as MUIGrid, Box as MUIBox, Typography as MUITypography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CallBack from '../Form/CallBackForm';
import DotTitleWithLine from './DotTitleWithLine';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import TypingEffect from './TypingEffect';
interface IServiceBannerWithTextNProps {
    title: string;
    subTitle: string;
    socialText: string[];
}
const TypingEffectBox = styled(MUIBox)({
    margin: '0 auto 20px',
});
const Grid = styled(MUIGrid)({});
const GridRow = styled(MUIGrid)({
    alignItems: 'center',
});
const Title = styled(MUITypography)({
    fontSize: '30px',
    lineHeight: '1.5',
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#012440',
    '& span': {
        fontSize: '30px',
        position: 'relative',
        color: '#012440',
        animation: '2s blink ease infinite',
        '@keyframes blink': {
            'from, to': {
                opacity: 0,
            },
            '50%': {
                opacity: 1,
            },
        },
    },
    '@media (max-width: 1199.98px)': {
        fontSize: '24px',
        lineHeight: '1.25',
    },
    '@media (max-width: 991.98px)': {
        fontSize: '22px',
    },
});
const SubTitle = styled(MUITypography)({
    fontSize: '16px',
    margin: '14px 0',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: '1.35',
    '@media (max-width: 799.98px)': {
        fontSize: '14px',
    },
});
const FormBox = styled(MUIBox)({
    background: 'rgb(1 17 31 / 60%)',
    padding: '20px',
    borderRadius: '8px',
    '& h2': {
        WebkitTextFillColor: '#ffffff',
        '&:after': {
            background: '#ffffff',
        },
        '& svg': {
            fontSize: '28px',
            color: '#ffffff',
            '@media (max-width: 1199.98px)': {
                fontSize: '22px',
            },
            '@media (max-width: 991.98px)': {
                fontSize: '18px',
            },
            '@media (max-width: 767.98px)': {
                fontSize: '16px',
            },
        },
    },
    '& .MuiFormLabel-root': {
        color: '#ffffff',
    },
});
const Box = styled(MUIBox)({
    background: 'url(/images/demo-bg-home.jpg)',
    backgroundSize: 'cover',
    '&:hover': {
        '& hr': {
            width: '100%',
        },
    },
    '@media (max-width: 1199.98px)': {
        maxHeight: 'fit-content',
    },
});
const DescBox = styled(MUIBox)({
    height: '100%',
    width: '100%',
    margin: '0 auto',
    padding: '50px 0',
    color: '#011e36',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media (max-width: 1199.98px)': {
        padding: '40px 0',
    },
    '@media (max-width: 991.98px)': {
        padding: '30px 0',
    },
    '@media (max-width: 767.98px)': {
        padding: '20px 0',
    },
});

const ServiceBannerWithTextN = ({ title, subTitle, socialText }: IServiceBannerWithTextNProps) => {
    return (
        <Box>
            <DescBox>
                <Container fixed>
                    <GridRow container spacing={{ sm: 2, md: 4 }}>
                        <Grid item xs={12} md={5} lg={6}>
                            <Title variant="h2" gutterBottom>
                                {title} <span>:</span>
                            </Title>
                            <TypingEffectBox>
                                <TypingEffect texts={socialText} typingDelay={100} pauseDelay={1000} />
                            </TypingEffectBox>
                            <SubTitle>{subTitle}</SubTitle>
                        </Grid>
                        <Grid item xs={12} md={7} lg={6}>
                            <FormBox>
                                <DotTitleWithLine title="Get a free Demo" subTitle={''} icon={<QuestionMarkIcon />} />
                                <CallBack onSubmit={() => {}} />
                            </FormBox>
                        </Grid>
                    </GridRow>
                </Container>
            </DescBox>
        </Box>
    );
};

export default ServiceBannerWithTextN;
