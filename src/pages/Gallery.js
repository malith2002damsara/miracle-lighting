import React from 'react';
import { Grid, Box } from '@mui/material';

const Gallery = () => {
  const images = [
    '/wedding1.jpg',
    '/wedding2.jpg',
    '/wedding3.jpg',
    // Add more image paths
  ];

  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Grid container spacing={4}>
        {images.map((image, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Box component="img" src={image} alt={`Gallery ${index}`} sx={{ width: '100%', borderRadius: 2 }} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
