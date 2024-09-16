import React from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';

const EventLighting = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Event Lighting
      </Typography>
      <Typography variant="body1" paragraph>
        Our Event Lighting solutions are designed to elevate any gathering. From weddings to corporate events, our lighting setups will ensure your event is memorable and beautifully lit.
      </Typography>
      <Typography variant="body1" paragraph>
        Explore our gallery to see how we can transform your event with stunning lighting designs.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            component="img"
            height="300"
            image="/images/event-lighting-thumbnail.jpg" // Ensure this path matches your actual image file
            alt="Event Lighting"
          />
          <CardContent>
            <Typography variant="h6">Event Lighting Gallery</Typography>
            <Typography variant="body2" color="text.secondary">
              Browse our collection of event lighting setups and get inspired for your next gathering.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default EventLighting;
