import React from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';

const BackdropLighting = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Backdrop Lighting
      </Typography>
      <Typography variant="body1" paragraph>
        Our Backdrop Lighting solutions add a touch of elegance to your events. Ideal for photo sessions and decorative backdrops, our lighting setups will make your event stand out.
      </Typography>
      <Typography variant="body1" paragraph>
        Explore our gallery to see examples of our backdrop lighting setups and get inspired for your next event.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            component="img"
            height="300"
            image="/images/backdrop-lighting-thumbnail.jpg" // Ensure this path matches your actual image file
            alt="Backdrop Lighting"
          />
          <CardContent>
            <Typography variant="h6">Backdrop Lighting Gallery</Typography>
            <Typography variant="body2" color="text.secondary">
              Browse our collection of backdrop lighting setups to find inspiration and ideas for making your event stand out.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default BackdropLighting;
