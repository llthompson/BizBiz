//components/Details.js

import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { apiKey, geocodeApiKey } from '../api-key';

const Details = (props) => {
    const [center, setCenter] = useState(null);

    const id = props.match.params.id;
    const business = props.businesses.find(b => b.id == id);

    const mapContainerStyle = {
        width: '100%',
        height: '300px',
    };

    // const center = {
    //     lat: parseFloat(business.googleMaps.marker.position.split(',')[0]),
    //     lng: parseFloat(business.googleMaps.marker.position.split(',')[1]),
    // };
    useEffect(() => {
        async function getCenter() {
            let response = await fetch(`https://maps.google.com/maps/api/geocode/json?key=${geocodeApiKey}&address=${business.location}`)
            response = await response.json()
            console.log(response)
            setCenter(response.results[0].geometry.location)
        }
        getCenter()
        console.log('my coord', business.location)

        // setCenter({
        //     lat: parseFloat(business.googleMaps.marker.position.split(',')[0]),
        //     lng: parseFloat(business.googleMaps.marker.position.split(',')[1]),
        // })
    }, [])

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
                        zoom={13}
                    >
                        <Marker position={center}  />
                    </GoogleMap>
                </LoadScript>
            </CardContent>
        </Card>
    );
};

export default Details;
