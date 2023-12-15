// components/AddBusiness.js

import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const AddBusiness = ({ addBusiness }) => {
    console.log('here is my addibizzi')
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate and submit the form
    const newBusiness = {
      name,
      description,
      hours,
      location,
    };

    // Call the addBusiness function passed as a prop
    addBusiness(newBusiness);

    // Clear the form fields
    setName('');
    setDescription('');
    setHours('');
    setLocation('');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Add a New Business
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Description"
          fullWidth
          multiline
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Hours"
          fullWidth
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Location"
          fullWidth
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Business
        </Button>
      </form>
    </Container>
  );
};

export default AddBusiness;
