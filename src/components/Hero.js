import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Box
      sx={{
        height: '60vh',
        backgroundImage: 'url(/wedding1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: 2,
      }}
    >
      <Typography variant="h2" gutterBottom>Illuminate Your Special Day</Typography>
      <Typography variant="h5" gutterBottom>Stunning lighting designs for your dream wedding</Typography>
      <Button variant="contained" sx={{ bgcolor: '#FFD700', color: '#000' }} component={Link} to="/services">
        Explore Our Services
      </Button>
    </Box>
  );
};

export default Hero;
