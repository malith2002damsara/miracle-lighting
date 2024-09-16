import React from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';

const WeddingLighting = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Wedding Lighting
      </Typography>
      <Typography variant="body1" paragraph>
        Transform your wedding venue with our exquisite lighting designs. At Miracle Lighting, we specialize in creating enchanting atmospheres that make your special day even more memorable. From romantic candlelit settings to dazzling chandeliers, our lighting solutions are tailored to fit your wedding theme and vision.
      </Typography>
      <Typography variant="body1" paragraph>
        Our team will work closely with you to ensure that every detail is perfect, enhancing the beauty of your venue and making your celebration truly magical.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            component="img"
            height="300"
            image="images/wedding-lighting-thumbnail.jpg" // Replace with your image path
            alt="Wedding Lighting"
          />
          <CardContent>
            <Typography variant="h6">Wedding Lighting Gallery</Typography>
            <Typography variant="body2" color="text.secondary">
              Explore our gallery of wedding lighting setups and find inspiration for your own special day.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default WeddingLighting;
