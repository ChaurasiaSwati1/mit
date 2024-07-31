import { Box as MUIBox, styled } from '@mui/material';
import ServicesPage from '../../components/Services/ServicesPage';
import { Helmet } from 'react-helmet';
import BannerWithTitle from '../../components/Core/BannerWithTitle';
const Box = styled(MUIBox)({
    padding: '50px 0',
    '@media (max-width: 1199.98px)': {
        padding: '40px 0',
    },
    '@media (max-width: 991.98px)': {
        padding: '35px 0',
    },
    '@media (max-width: 767.98px)': {
        padding: '30px 0',
    },
    '@media (max-width: 575.98px)': {
        padding: '25px 0',
    },
});
const Services = () => {
    return (
        <>
            <Helmet>
                <meta property="og:type" content="Our Services" />
                <meta property="og:url" content="https://mithilait.com/services" />
                <meta
                    property="og:title"
                    content="Mithila IT | One-Stop IT Solution Company For All Your Digital Needs"
                />
                <meta
                    property="og:description"
                    content="Empowering businesses through the lens of technology. Let's shape the future together"
                />
                <meta property="og:image" content="/logo512.png" />
            </Helmet>
            <BannerWithTitle
                title="Our Services"
                subTitle="Transforming challenges into opportunities through innovative solutions"
                bgImg="/images/banner/services.jpg"
                bgImgAlt="Service Banner"
            />
            <Box>
                <ServicesPage />
            </Box>
        </>
    );
};

export default Services;
