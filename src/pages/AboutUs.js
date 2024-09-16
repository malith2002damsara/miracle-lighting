// src/pages/About.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import aboutImage from '../assets/about.jpg'; // Replace with the path to your image

const AboutUs = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <img src={aboutImage} alt="About Us" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        <Typography variant="body1" sx={{ mt: 2 }}>
          Welcome to Miracle Lighting! We specialize in providing exceptional lighting solutions for various events and occasions. Our dedicated team works tirelessly to create stunning lighting designs that enhance the atmosphere of your event and make it memorable. With years of experience and a passion for excellence, we ensure that each project we undertake meets the highest standards of quality and creativity.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
