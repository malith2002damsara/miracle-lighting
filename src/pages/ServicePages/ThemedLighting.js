import React from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';

const ThemedLighting = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Themed Lighting
      </Typography>
      <Typography variant="body1" paragraph>
        Our Themed Lighting solutions are perfect for events with a specific theme or style. From vintage to modern, our lighting designs will complement your theme and create a cohesive look.
      </Typography>
      <Typography variant="body1" paragraph>
        Explore our collection of themed lighting setups and ideas to inspire your next event. We offer tailored lighting solutions to fit any theme and create a memorable ambiance.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            component="img"
            height="300"
            image="/images/themed-lighting-thumbnail.jpg" // Updated image path
            alt="Themed Lighting"
          />
          <CardContent>
            <Typography variant="h6">Themed Lighting Gallery</Typography>
            <Typography variant="body2" color="text.secondary">
              Browse our gallery of themed lighting setups to find inspiration for your next event. Whether you're looking for a classic or contemporary theme, we have the perfect lighting solution for you.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default ThemedLighting;
