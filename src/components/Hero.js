import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// Define images and corresponding text and button colors
const slides = [
  {
    image: '/wedding.jpg',
    textColor1: '#FFD700', // Snow color
    textColor2: '#FFD700', // White
    buttonColor: '#FFD700', // Gold
    buttonTextColor: '#000' // Black
  },
  {
    image: '/wedding1.jpg',
    textColor1: '#8B4513', // White Smoke
    textColor2: '#8B4513', // Black
    buttonColor: '#8B4513', // Saddle Brown
    buttonTextColor: '#FFF' // White
  },
  {
    image: '/wedding2.jpg',
    textColor1: '#FF6347', // Bisque
    textColor2: '#FF6347', // Black
    buttonColor: '#FF6347', // Tomato
    buttonTextColor: '#FFF' // White
  },
  {
    image: '/wedding3.jpg',
    textColor1: '#2E8B57', // Khaki
    textColor2: '#2E8B57', // Black
    buttonColor: '#2E8B57', // Sea Green
    buttonTextColor: '#FFF' // White
  },
  // Add more slides with colors as needed
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const { image, textColor1, textColor2, buttonColor, buttonTextColor } = slides[currentSlide];

  return (
    <Box
      sx={{
        height: '80vh',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 2,
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <Typography 
        variant="h2" 
        gutterBottom
        sx={{ color: textColor1, transition: 'color 1s ease-in-out' }}
      >
        Illuminate Your Special Day
      </Typography>
      <Typography 
        variant="h5" 
        gutterBottom
        sx={{ color: textColor2, transition: 'color 1s ease-in-out' }}
      >
        Stunning lighting designs for your dream wedding
      </Typography>
      <Button
        variant="contained"
        sx={{
          bgcolor: buttonColor,
          color: buttonTextColor,
          transition: 'background-color 1s ease-in-out, color 1s ease-in-out',
        }}
        component={Link}
        to="/services"
      >
        Explore Our Services
      </Button>
    </Box>
  );
};

export default Hero;
