import React from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';

const GardenLighting = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Garden Lighting
      </Typography>
      <Typography variant="body1" paragraph>
        Enhance the beauty of your garden with our elegant lighting solutions. Our garden lighting designs create a serene and inviting atmosphere, perfect for outdoor gatherings and relaxation. 
      </Typography>
      <Typography variant="body1" paragraph>
        From pathway lights to ambient fixtures, we offer a variety of options to highlight the natural beauty of your garden and extend your living space outdoors.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            component="img"
            height="300"
            image="images/garden-lighting-thumbnail.jpg" // Replace with your image path
            alt="Garden Lighting"
          />
          <CardContent>
            <Typography variant="h6">Garden Lighting Gallery</Typography>
            <Typography variant="body2" color="text.secondary">
              Discover our range of garden lighting options and see how they can transform your outdoor spaces.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default GardenLighting;
