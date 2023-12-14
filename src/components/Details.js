import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Details = (props) => {
    const id = props.match.params.id
    const business = props.businesses.find(b => b.id == id)
    return (
        <Card className='bizDetails' variant="outlined" sx={{ minWidth: 275 }}>
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
                {/* Add more details as needed */}
            </CardContent>
        </Card>
    )
}

export default Details;