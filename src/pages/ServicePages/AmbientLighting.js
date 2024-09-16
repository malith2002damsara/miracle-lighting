import React from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';

const AmbientLighting = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Ambient Lighting
      </Typography>
      <Typography variant="body1" paragraph>
        Our Ambient Lighting solutions create a cozy and inviting atmosphere for any setting. Perfect for home or event spaces, our lighting will provide the perfect ambiance for relaxation and enjoyment.
      </Typography>
      <Typography variant="body1" paragraph>
        Explore our gallery to see examples of our ambient lighting setups and get inspired for your next project.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            component="img"
            height="300"
            image="/images/ambient-lighting-thumbnail.jpg" // Ensure this path matches your actual image file
            alt="Ambient Lighting"
          />
          <CardContent>
            <Typography variant="h6">Ambient Lighting Gallery</Typography>
            <Typography variant="body2" color="text.secondary">
              Browse our collection of ambient lighting setups to find inspiration and ideas for creating a relaxing and welcoming environment.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default AmbientLighting;
