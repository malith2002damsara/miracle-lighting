import React from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';

const IndoorLighting = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Indoor Lighting
      </Typography>
      <Typography variant="body1" paragraph>
        Our Indoor Lighting solutions provide an elegant and warm ambiance for any event. With customizable options and creative designs, we ensure that your indoor spaces are beautifully lit to enhance the overall atmosphere.
      </Typography>
      <Typography variant="body1" paragraph>
        Explore our collection of indoor lighting setups and ideas to inspire your next event. We offer tailored lighting solutions to fit any style and create a memorable experience.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            component="img"
            height="300"
            image="/images/indoor-lighting-thumbnail.jpg" // Ensure this path matches your actual image file
            alt="Indoor Lighting"
          />
          <CardContent>
            <Typography variant="h6">Indoor Lighting Gallery</Typography>
            <Typography variant="body2" color="text.secondary">
              Browse our gallery of indoor lighting setups to find inspiration for your next event. From sophisticated to cozy, our lighting solutions will transform your indoor spaces.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default IndoorLighting;
