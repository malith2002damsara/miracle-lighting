// src/pages/ChristmasParties.js
import React from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';
import christmasImage from '../assets/christmas.jpg'; // Replace with the path to your image

const ChristmasParties = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Christmas Parties
        </Typography>
        <Card sx={{ maxWidth: 800, margin: '0 auto' }}>
          <CardMedia
            component="img"
            height="400"
            image={christmasImage}
            alt="Christmas Party"
          />
          <CardContent>
            <Typography variant="body1" paragraph>
              Our Christmas lighting setups bring the festive spirit to life. Enjoy a magical experience with our range of holiday-themed lighting options.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default ChristmasParties;
