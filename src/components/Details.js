import React from 'react';
import Box from '@mui/material/Box';


const Details = (props) => {
    const id = props.match.params.id
    const business = props.businesses.find(b => b.id == id)
    return (
        <Box>
            <p>{business.name}</p>
        </Box>
    )
}

export default Details;