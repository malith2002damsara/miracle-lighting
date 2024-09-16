import React from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';

const CustomDesigns = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Custom Designs
      </Typography>
      <Typography variant="body1" paragraph>
        We offer custom lighting designs tailored to your specific needs. Whether you have a unique concept or need assistance with creating a bespoke lighting solution, our team is here to bring your vision to life.
      </Typography>
      <Typography variant="body1" paragraph>
        Explore our gallery to see examples of our custom designs and get inspired for your next project.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            component="img"
            height="300"
            image="/images/custom-designs-thumbnail.jpg" // Ensure this path matches your actual image file
            alt="Custom Designs"
          />
          <CardContent>
            <Typography variant="h6">Custom Designs Gallery</Typography>
            <Typography variant="body2" color="text.secondary">
              Browse our collection of custom lighting designs to get ideas and inspiration for your unique projects.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default CustomDesigns;
