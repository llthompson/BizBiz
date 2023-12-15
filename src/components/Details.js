import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { apiKey } from '../api-key';

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

    return (
        <Card className='bizDetails'
            sx={{
                color: 'text.primary',
                minWidth: 275,
                bgcolor: 'common.white',
                mt: 4,
                mx: 'auto',
                width: 600,
            }}>
            <CardContent
                sx={{
                    color: 'text.primary',
                }}>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', m: 1 }}>
                    {business.name}
                </Typography>
                <Typography sx={{ fontWeight: 'bold', m: 1 }} color="text.primary">
                    {business.location}
                </Typography>
                <Typography sx={{ fontWeight: 'bold', m: 1 }} color="text.primary">
                    {business.hours}
                </Typography>
                <Typography sx={{ fontWeight: 'regular', m: 1 }} color="text.primary">
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
