import React from 'react';
import { Link as MUILink, Box as MUIBox } from '@mui/material';
import { styled } from '@mui/material/styles';

const IconBox = styled(MUIBox)({
    display: 'flex',
    alignItems: 'center',
    mb: '2rem',
    '& svg': {
        color: '#023992',
        paddingRight: '.5rem',
        fontSize: '30px',
        '@media (max-width: 991.98px)': {
            fontSize: '26px',
        },
        '@media (max-width: 767.98px)': {
            fontSize: '22px',
        },
    },
});
const Link = styled(MUILink)({
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '2',
    '@media (max-width: 991.98px)': {
        fontSize: '14px',
    },
});

interface ILabelWithIconProps {
    label: string;
    icon: React.ReactElement;
    href: string;
}

const LabelWithIcon = ({ label, icon, href }: ILabelWithIconProps) => {
    return (
        <IconBox>
            {icon}
            <div>
                <Link href={href}>{label}</Link>
            </div>
        </IconBox>
    );
};

export default LabelWithIcon;
