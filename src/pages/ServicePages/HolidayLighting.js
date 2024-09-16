import React from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';

const HolidayLighting = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Holiday Lighting
      </Typography>
      <Typography variant="body1" paragraph>
        Bring the festive spirit to life with our holiday lighting solutions. From dazzling Christmas displays to warm and cozy winter decorations, we provide creative lighting designs that brighten up the holiday season and make your celebrations memorable.
      </Typography>
      <Typography variant="body1" paragraph>
        Our holiday lighting designs are customizable to fit any occasion, ensuring that your space is transformed into a festive wonderland.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            component="img"
            height="300"
            image="images/holiday-lighting-thumbnail.jpg" // Replace with your image path
            alt="Holiday Lighting"
          />
          <CardContent>
            <Typography variant="h6">Holiday Lighting Gallery</Typography>
            <Typography variant="body2" color="text.secondary">
              Browse our collection of holiday lighting setups and ideas to inspire your next festive decoration.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default HolidayLighting;
