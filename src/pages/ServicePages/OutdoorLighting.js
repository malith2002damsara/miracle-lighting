import React from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';

const OutdoorLighting = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Outdoor Lighting
      </Typography>
      <Typography variant="body1" paragraph>
        Our Outdoor Lighting solutions are perfect for illuminating your outdoor spaces. Whether it's for a garden, patio, or event, we provide creative lighting options to enhance the ambiance and ensure safety.
      </Typography>
      <Typography variant="body1" paragraph>
        Explore our gallery to find inspiration for your outdoor lighting setup. We offer various designs to match your needs and preferences.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            component="img"
            height="300"
            image="/images/outdoor-lighting-thumbnail.jpg" // Ensure this path matches your actual image file
            alt="Outdoor Lighting"
          />
          <CardContent>
            <Typography variant="h6">Outdoor Lighting Gallery</Typography>
            <Typography variant="body2" color="text.secondary">
              Browse our collection of outdoor lighting designs to inspire your next project. From garden lights to event illumination, we have solutions for every need.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default OutdoorLighting;
