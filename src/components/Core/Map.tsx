import React from 'react';
import { GoogleMap, LoadScript as MUILoadScript } from '@react-google-maps/api';
import { styled } from '@mui/material';

const containerStyle = {
    width: '100%',
    height: '400px',
};
const LoadScript = styled(MUILoadScript)({
    backgroundColor: '#ffffff',
});
const center = {
    lat: 40.712776,
    lng: -74.005974,
};

const Map = () => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyB5MFj2grNntFSFZGI0GirlJjwzuNP0T70">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                {/* Add your markers or other components here */}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
