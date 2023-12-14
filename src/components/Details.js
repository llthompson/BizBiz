import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
require('dotenv').config();

const Details = (props) => {
    const id = props.match.params.id;
    const business = props.businesses.find(b => b.id == id);

    const mapContainerStyle = {
        width: '100%',
        height: '300px',
    };

    const center = {
        lat: parseFloat(business.googleMaps.marker.position.split(',')[0]),
        lng: parseFloat(business.googleMaps.marker.position.split(',')[1]),
    };

    const apiKey = process.env.API_KEY;

    return (
        <Card className='bizDetails' variant="outlined"
            sx={{
                minWidth: 275,
                bgcolor: 'info.main',
                mt: 4,
                mx: 'auto',
                width: 600,
            }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {business.name}
                </Typography>
                <Typography color="text.secondary">
                    Address: {business.location}
                </Typography>
                <Typography color="text.secondary">
                    Description: {business.description}
                </Typography>
                <LoadScript
                    googleMapsApiKey={apiKey}
                >
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={business.googleMaps.map.zoom}
                    >
                        <Marker position={center} title={business.googleMaps.marker.title} />
                    </GoogleMap>
                </LoadScript>
            </CardContent>
        </Card>
    );
};

export default Details;
