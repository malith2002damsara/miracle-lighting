import React from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';
import weddingImage from '../assets/wedding.jpg'; // Replace with the path to your image

const Wedding = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Wedding Events
        </Typography>
        <Card sx={{ maxWidth: 800, margin: '0 auto' }}>
          <CardMedia
            component="img"
            height="400"
            image={weddingImage}
            alt="Wedding Lighting"
          />
          <CardContent>
            <Typography variant="body1" paragraph>
              Weddings are special moments that deserve the perfect ambiance. Our wedding lighting services create a magical atmosphere that complements your beautiful day. From elegant chandeliers to fairy lights, we offer a variety of options to make your wedding unforgettable.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Wedding;
