import React from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';

const FestivalLighting = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Festival Lighting
      </Typography>
      <Typography variant="body1" paragraph>
        Our Festival Lighting solutions bring vibrant and dynamic lighting to any festival or large outdoor event. With a range of colors and effects, we create an energetic atmosphere that captures the spirit of celebration.
      </Typography>
      <Typography variant="body1" paragraph>
        Explore our gallery to see how we can enhance your festival with spectacular lighting designs.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            component="img"
            height="300"
            image="/images/festival-lighting-thumbnail.jpg" // Ensure this path matches your actual image file
            alt="Festival Lighting"
          />
          <CardContent>
            <Typography variant="h6">Festival Lighting Gallery</Typography>
            <Typography variant="body2" color="text.secondary">
              Browse our collection of festival lighting setups and get inspired for your next celebration.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default FestivalLighting;
