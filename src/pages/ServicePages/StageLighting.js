import React from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';

const StageLighting = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Stage Lighting
      </Typography>
      <Typography variant="body1" paragraph>
        Our Stage Lighting solutions are designed to enhance performances and events. With a range of lighting options, we ensure that every stage is perfectly lit to create a memorable experience for the audience.
      </Typography>
      <Typography variant="body1" paragraph>
        Explore our gallery to see how we can transform your stage into a visually stunning experience.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            component="img"
            height="300"
            image="/images/stage-lighting-thumbnail.jpg" // Ensure this path matches your actual image file
            alt="Stage Lighting"
          />
          <CardContent>
            <Typography variant="h6">Stage Lighting Gallery</Typography>
            <Typography variant="body2" color="text.secondary">
              Browse our collection of stage lighting setups and get inspired for your next performance or event.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default StageLighting;
