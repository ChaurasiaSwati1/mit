import * as React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled, Accordion as MUIAccordion } from '@mui/material';
interface IAccordionPageProps {
    title: string;
    ariaControls: string;
    id: string;
    desc: string;
    dataAos?: string;
    defaultExpanded: boolean;
}
const Accordion = styled(MUIAccordion)({
    '& .MuiAccordionSummary-content.Mui-expanded': {
        margin: '18px 0 16px !important',
    },
});
const AccordionPage = ({ ariaControls, id, title, desc, dataAos, defaultExpanded }: IAccordionPageProps) => {
    return (
        <div>
            <Accordion defaultExpanded={defaultExpanded} data-aos={dataAos} className="animation">
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={ariaControls} id={id}>
                    {title}
                </AccordionSummary>
                <AccordionDetails>{desc}</AccordionDetails>
            </Accordion>
        </div>
    );
};

export default AccordionPage;
