// src/pages/Venue.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import venueImage from '../assets/venue.jpg'; // Replace with the path to your image

const Venue = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h3" gutterBottom>
          Our Venues
        </Typography>
        <img src={venueImage} alt="Venue" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        <Typography variant="body1" sx={{ mt: 2 }}>
          We partner with some of the most exquisite venues to bring your event vision to life. Whether you're hosting an intimate gathering or a grand celebration, our venue partners offer a range of beautiful locations to suit your needs. From elegant ballrooms to scenic outdoor spaces, each venue provides a unique backdrop for your event. Contact us to learn more about our venue options and find the perfect setting for your special occasion.
        </Typography>
      </Box>
    </Container>
  );
};

export default Venue;
