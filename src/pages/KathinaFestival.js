// src/pages/KathinaFestival.js
import React from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';
import kathinaImage from '../assets/kathina.jpg'; // Replace with the path to your image

const KathinaFestival = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Kathina Festival
        </Typography>
        <Card sx={{ maxWidth: 800, margin: '0 auto' }}>
          <CardMedia
            component="img"
            height="400"
            image={kathinaImage}
            alt="Kathina Festival"
          />
          <CardContent>
            <Typography variant="body1" paragraph>
              Celebrate the Kathina Festival with our traditional and vibrant lighting solutions. We provide beautiful setups that enhance the festive ambiance of this special occasion.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default KathinaFestival;
