// src/pages/BirthdayParties.js
import React from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';
import birthdayImage from '../assets/birthday.jpg'; // Replace with the path to your image

const BirthdayParties = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Birthday Parties
        </Typography>
        <Card sx={{ maxWidth: 800, margin: '0 auto' }}>
          <CardMedia
            component="img"
            height="400"
            image={birthdayImage}
            alt="Birthday Party"
          />
          <CardContent>
            <Typography variant="body1" paragraph>
              Celebrate your birthday with our vibrant and festive lighting options. Whether you're hosting a small gathering or a grand celebration, we have the perfect lighting to make your party shine.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default BirthdayParties;
