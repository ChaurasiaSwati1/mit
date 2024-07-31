import * as React from 'react';
import WhatWeDo from './WhatWeDo';
import { styled, Tabs as MUITabs, Tab, Box as MUIBox, Container } from '@mui/material';
import DescText from '../Core/DescText';
import DotTitleWithLine from '../Core/DotTitleWithLine';
import CircleIcon from '@mui/icons-material/Circle';
// import { Link } from 'react-router-dom';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabsBox = styled(MUIBox)({
    paddingTop: '50px',
    '@media (max-width: 1199.98px)': {
        paddingTop: '40px',
    },
    '@media (max-width: 991.98px)': {
        paddingTop: '35px',
    },
    '@media (max-width: 767.98px)': {
        paddingTop: '30px',
    },
    '@media (max-width: 575.98px)': {
        paddingTop: '25px',
    },
});

const Tabs = styled(MUITabs)({
    margin: '0 auto 4px',
    width: 'max-content',
    background: '#012440',
    padding: '4px',
    borderRadius: '30px',
    minHeight: '38px',
    '& .MuiTabs-indicator': {
        display: 'none',
    },
    '& .MuiTab-root': {
        fontWeight: '600',
        padding: '8px 24px',
        borderRadius: '30px',
        '@media (max-width: 767.98px)': {
            padding: '6px 12px',
            fontSize: '12px',
            minHeight: '30px',
        },
    },
    '& .Mui-selected': {
        background: '#ffffff',
        color: '#012440 !important',
        borderRadius: '30px',
        padding: '8px 24px',
        minHeight: '38px',
        '@media (max-width: 767.98px)': {
            padding: '6px 12px',
            fontSize: '12px',
            minHeight: '30px',
        },
    },
});

const Box = styled(MUIBox)({});

const TabsContainer = styled(MUIBox)({
    width: '100%',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
        width: '4px',
        height: '4px',
        transition: 'all 1s ease',
    },
    '&::-webkit-scrollbar-track': {
        background: 'transparent',
        borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: 'transparent',
        borderRadius: '4px',
    },
    '&:hover': {
        '&::-webkit-scrollbar-track': {
            background: '#d5d5d5',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#d9d9d9',
        },
    },
});

// const Button = styled(Link)({
//     textDecoration: 'none',
// });
const BoxDesc = styled(MUIBox)({
    textAlign: 'center',
    '& p': {
        marginBottom: '3rem',
        '@media (max-width: 991.98px)': {
            marginBottom: '2.5rem',
        },
        '@media (max-width: 767.98px)': {
            marginBottom: '2rem',
        },
    },
});

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            className="tabPannel"
        >
            {value === index && <Box sx={{ py: 6 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function WhatWeDoTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    let imageData;
    switch (value) {
        case 0:
            imageData = [
                {
                    src: '/images/HomeSalon.png',
                    link: 'https://zemefresh.com/',
                    title: 'Ayurvedic Home Salon',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/toothlens.png',
                    link: 'https://toothlens.com/',
                    title: 'ToothLens',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/landing.png',
                    link: 'http://adlinx.co.uk',
                    title: 'Adlinx',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/fitura.png',
                    link: 'https://www.fitura.nl/',
                    title: 'Fitura',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/beefirstmedia.png',
                    link: 'http://beefirstmedia.co.uk',
                    title: 'Bee First Media',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/SpanishMortgageClaim.png',
                    link: 'http://spanishmortgageclaimexpert.com/',
                    title: 'Spanish Mortgage Claim',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/edudent.png',
                    link: 'https://edudent.co.uk/',
                    title: 'Home - EduDent',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/chrysanth.png',
                    link: 'https://chrysanth.london/',
                    title: 'Personalised Dental Care | Dentists East London | Chrysanth Dental',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/biocngindonesia.png',
                    link: 'https://biocngindonesia.com//',
                    title: 'BioCNG Indonesia - Circular Economy Of Palm Oil Effluents for Low Emission Transport',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/annahymas.png',
                    link: 'https://www.annahymas.com/',
                    title: 'Anna Hymas',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/alchemyengineering.png',
                    link: 'https://alchemyengineering.com.au/',
                    title: 'Alchemy Engineering Adelaide, SA | Mechanical & Architectural Engineers',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/farrelldevelopment.png',
                    link: 'http://farrelldevelopments.com',
                    title: 'Farrell Developments',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/longviewbank.png',
                    link: 'https://longviewbank.com/',
                    title: 'Longview Bank',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/fertility-psychologists.png',
                    link: 'http://thefertilitypsychologist.co.uk',
                    title: 'Fertility Psychologists',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/marlinjoinery.png',
                    link: 'http://marlinjoinery.co.uk',
                    title: 'Merlin Joinery',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/lawlinkltd.png',
                    link: 'http://lawlinkltd.com/',
                    title: 'Law Link ATE',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/eleganceexecutivetrave.png',
                    link: 'http://ecschauffeurs.com',
                    title: 'Elegance Executive Travel',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/ascension-yoga.png',
                    link: 'http://ascension-yoga.co.uk',
                    title: 'Ascension Yoga',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/dpeak-counselling-org.png',
                    link: 'http://dpeak-counselling.org/',
                    title: 'David Peak - Counselling & Psychotherapy',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/landregistrydeeds.png',
                    link: 'http://landregistrydeeds.org',
                    title: 'Land Registry Deeds',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/gpaelectrical.png',
                    link: 'http://gpaelectrical.co.uk',
                    title: 'GPA Electrical And Building Contractors',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/pcl.png',
                    link: 'http://pcl-rnd.co.uk',
                    title: 'PCL',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/casa-oleander.png',
                    link: 'http://casa-oleander.co.uk',
                    title: 'Private Family Villa Rental In Portugal',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/sen-support.png',
                    link: 'http://sen-support.uk',
                    title: 'Home - Sen Support',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/grimeforceuk.png',
                    link: 'http://grimeforceuk.co.uk',
                    title: 'Grimeforce UK Gutter Cleaning, Power Washing, Landscaping & Roof Cleaning',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/grandstand-develop.png',
                    link: 'http://grandstand-developments.com',
                    title: 'Grandstand Developments | Landscaping And Building Services',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/eanderecruitment-c.png',
                    link: 'http://eanderecruitment.co.uk',
                    title: 'E & E Recruitment',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/whatclinic.png',
                    link: 'https://www.whatclinic.com/',
                    title: 'What Clinic',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/enelgreenpower.png',
                    link: 'https://www.enelgreenpower.com/',
                    title: 'Enel Green Power',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/greenlodgingsolutions.png',
                    link: 'https://greenlodgingsolutions.com/',
                    title: 'Green Lodging ',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/joyinyoga.png',
                    link: 'http://joyinyoga.co.uk',
                    title: 'Joy In Yoga',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/suelight.png',
                    link: 'http://suelight.co.uk',
                    title: 'Susan Light - Counselling & Psychotherapy',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/janetstevenscounse.png',
                    link: 'http://janetstevenscounselling.co.uk',
                    title: 'Counselling in Wiltshire - Janet Stevens Counselling',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/quickbrickta.png',
                    link: 'https://quickbrickta.co.uk/',
                    title: 'Quickbrick',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/forwardfocuslondon.png',
                    link: 'http://forwardfocuslondon.com/',
                    title: 'Forward Focus London',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/wowltd.png',
                    link: 'https://wowltd.uk/',
                    title: 'WOW LTD. – Working Office Wonders',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/trishdugganart.png',
                    link: 'https://trishdugganart.com/',
                    title: 'Trish Duggan Art - Trish Duggan an American Accomplished Artist',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/kitchendoornapa.png',
                    link: 'https://www.kitchendoornapa.com/',
                    title: 'Kitchen Door Napa Restuarant',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/thedadspost.png',
                    link: 'https://www.thedadspost.com/',
                    title: `Home - The Dads' Post`,
                    dataAos: 'fade-up',
                },
                // {
                //     src: '/images/ataneconsulting.png',
                //     link: 'https://ataneconsulting.com/',
                //     title: `Home - Atane Consulting`,
                //     dataAos: 'fade-up',
                // },
                {
                    src: '/images/wehelpgroup.png',
                    link: 'https://wehelpgroup.org/',
                    title: `We Help Group `,
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/frontierphysicalme.png',
                    link: 'https://frontierphysicalme.com/',
                    title: 'Pain Management In Tampa. FL | Frontier Physical Medicine',
                    dataAos: 'fade-up',
                },
            ];
            break;
        case 1:
            imageData = [
                {
                    src: '/images/toothlens.png',
                    link: 'https://toothlens.com/',
                    title: 'ToothLens',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/fertility-psychologists.png',
                    link: 'http://thefertilitypsychologist.co.uk',
                    title: 'Fertility Psychologists',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/frontierphysicalme.png',
                    link: 'https://frontierphysicalme.com/',
                    title: 'Pain Management In Tampa. FL | Frontier Physical Medicine',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/whatclinic.png',
                    link: 'https://www.whatclinic.com/',
                    title: 'What Clinic',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/ascension-yoga.png',
                    link: 'http://ascension-yoga.co.uk',
                    title: 'Ascension Yoga',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/joyinyoga.png',
                    link: 'http://joyinyoga.co.uk',
                    title: 'Joy In Yoga',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/suelight.png',
                    link: 'http://suelight.co.uk',
                    title: 'Susan Light - Counselling & Psychotherapy',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/janetstevenscounse.png',
                    link: 'http://janetstevenscounselling.co.uk',
                    title: 'Counselling in Wiltshire - Janet Stevens Counselling',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/chrysanth.png',
                    link: 'https://chrysanth.london/',
                    title: 'Personalised Dental Care | Dentists East London | Chrysanth Dental',
                    dataAos: 'fade-up',
                },
            ];
            break;
        case 2:
            imageData = [
                {
                    src: '/images/landing.png',
                    link: 'http://adlinx.co.uk',
                    title: 'Adlinx',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/beefirstmedia.png',
                    link: 'http://beefirstmedia.co.uk',
                    title: 'Bee First Media',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/trishdugganart.png',
                    link: 'https://trishdugganart.com/',
                    title: 'Trish Duggan Art - Trish Duggan an American Accomplished Artist',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/annahymas.png',
                    link: 'https://www.annahymas.com/',
                    title: 'Anna Hymas',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/SpanishMortgageClaim.png',
                    link: 'http://spanishmortgageclaimexpert.com/',
                    title: 'Spanish Mortgage Claim',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/mortgagecommissions.png',
                    link: 'http://mortgagecommissions.co.uk',
                    title: 'Mortgage Commission',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/eleganceexecutivetrave.png',
                    link: 'http://ecschauffeurs.com',
                    title: 'Elegance Executive Travel',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/landregistrydeeds.png',
                    link: 'http://landregistrydeeds.org',
                    title: 'Land Registry Deeds',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/gpaelectrical.png',
                    link: 'http://gpaelectrical.co.uk',
                    title: 'GPA Electrical And Building Contractors',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/pcl.png',
                    link: 'http://pcl-rnd.co.uk',
                    title: 'PCL',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/eanderecruitment-c.png',
                    link: 'http://eanderecruitment.co.uk',
                    title: 'E & E Recruitment',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/quickbrickta.png',
                    link: 'https://quickbrickta.co.uk/',
                    title: 'Quickbrick',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/forwardfocuslondon.png',
                    link: 'http://forwardfocuslondon.com/',
                    title: 'Forward Focus London',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/wowltd.png',
                    link: 'https://wowltd.uk/',
                    title: 'WOW LTD. – Working Office Wonders',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/longviewbank.png',
                    link: 'https://longviewbank.com/',
                    title: 'Longview Bank',
                    dataAos: 'fade-up',
                },
            ];
            break;
        case 3:
            imageData = [
                {
                    src: '/images/HomeSalon.png',
                    link: 'https://zemefresh.com/',
                    title: 'Ayurvedic Home Salon',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/biocngindonesia.png',
                    link: 'https://biocngindonesia.com//',
                    title: 'BioCNG Indonesia - Circular Economy Of Palm Oil Effluents for Low Emission Transport',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/thedadspost.png',
                    link: 'https://www.thedadspost.com/',
                    title: `Home - The Dads' Post`,
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/farrelldevelopment.png',
                    link: 'http://farrelldevelopments.com',
                    title: 'Farrell Developments',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/fertility-psychologists.png',
                    link: 'http://thefertilitypsychologist.co.uk',
                    title: 'Fertility Psychologists',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/grimeforceuk.png',
                    link: 'http://grimeforceuk.co.uk',
                    title: 'Grimeforce UK Gutter Cleaning, Power Washing, Landscaping & Roof Cleaning',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/joyinyoga.png',
                    link: 'http://joyinyoga.co.uk',
                    title: 'Joy In Yoga',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/wehelpgroup.png',
                    link: 'https://wehelpgroup.org/',
                    title: `We Help Group `,
                    dataAos: 'fade-up',
                },
            ];
            break;
        case 4:
            imageData = [
                {
                    src: '/images/fitura.png',
                    link: 'https://www.fitura.nl/',
                    title: 'Fitura',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/farrelldevelopment.png',
                    link: 'http://farrelldevelopments.com',
                    title: 'Farrell Developments',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/alchemyengineering.png',
                    link: 'https://alchemyengineering.com.au/',
                    title: 'Alchemy Engineering Adelaide, SA | Mechanical & Architectural Engineers',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/marlinjoinery.png',
                    link: 'http://marlinjoinery.co.uk',
                    title: 'Merlin Joinery',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/grandstand-develop.png',
                    link: 'http://grandstand-developments.com',
                    title: 'Grandstand Developments | Landscaping And Building Services',
                    dataAos: 'fade-up',
                },
            ];
            break;
        default:
            imageData = [
                {
                    src: '/images/HomeSalon.png',
                    link: 'https://zemefresh.com/',
                    title: 'Ayurvedic Home Salon',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/enelgreenpower.png',
                    link: 'https://www.enelgreenpower.com/',
                    title: 'Enel Green Power',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/greenlodgingsolutions.png',
                    link: 'https://greenlodgingsolutions.com/',
                    title: 'Green Lodging ',
                    dataAos: 'fade-up',
                },
                {
                    src: '/images/kitchendoornapa.png',
                    link: 'https://www.kitchendoornapa.com/',
                    title: 'Kitchen Door Napa Restuarant',
                    dataAos: 'fade-up',
                },
                // {
                //     src: '/images/ataneconsulting.png',
                //     link: 'https://ataneconsulting.com/',
                //     title: `Home - Atane Consulting`,
                //     dataAos: 'fade-up',
                // },
            ];
            break;
    }

    return (
        <TabsBox>
            <Container fixed>
                <DotTitleWithLine title="All Portfolio" subTitle={''} icon={<CircleIcon />} />
                <BoxDesc>
                    <DescText
                        text={`Below are showcase of our latest work. You can view the full website by 
        clicking on any.`}
                    />
                </BoxDesc>
            </Container>
            <Container fixed>
                <TabsContainer>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="All" id={a11yProps(0).id} aria-controls={a11yProps(0)['aria-controls']} />
                        <Tab label="Healthcare" id={a11yProps(1).id} aria-controls={a11yProps(1)['aria-controls']} />
                        <Tab label="Agency" id={a11yProps(2).id} aria-controls={a11yProps(2)['aria-controls']} />
                        <Tab label="Lifestyle" id={a11yProps(3).id} aria-controls={a11yProps(3)['aria-controls']} />
                        <Tab label="Construction" id={a11yProps(4).id} aria-controls={a11yProps(4)['aria-controls']} />
                        <Tab label="E-commerce" id={a11yProps(5).id} aria-controls={a11yProps(5)['aria-controls']} />
                    </Tabs>
                </TabsContainer>
            </Container>
            <CustomTabPanel value={value} index={0}>
                <WhatWeDo imageData={imageData} limit={4} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <WhatWeDo imageData={imageData} limit={4} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <WhatWeDo imageData={imageData} limit={4} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <WhatWeDo imageData={imageData} limit={4} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <WhatWeDo imageData={imageData} limit={4} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
                <WhatWeDo imageData={imageData} limit={4} />
            </CustomTabPanel>
            {/* <Button to={''} id="viewMore">
                View More
            </Button> */}
        </TabsBox>
    );
}
