import React from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';

const CorporateEventsLighting = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Corporate Events Lighting
      </Typography>
      <Typography variant="body1" paragraph>
        At Miracle Lighting, we specialize in creating impactful lighting setups for corporate events. Whether it’s a conference, seminar, or a corporate gala, our lighting solutions are designed to enhance the atmosphere and create a professional yet engaging environment.
      </Typography>
      <Typography variant="body1" paragraph>
        Our team will work with you to understand the theme and requirements of your event, ensuring that the lighting complements your brand and creates a memorable experience for all attendees.
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Card sx={{ maxWidth: 600, mb: 4 }}>
          <CardMedia
            component="img"
            height="300"
            image="images/corporate-event-1.jpg" // Replace with your image path
            alt="Corporate Event Lighting Example 1"
          />
          <CardContent>
            <Typography variant="h6">Conference Lighting Setup</Typography>
            <Typography variant="body2" color="text.secondary">
              A beautifully lit conference room with ambient and focused lighting to enhance presentations and speeches.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 600, mb: 4 }}>
          <CardMedia
            component="img"
            height="300"
            image="images/corporate-event-2.jpg" // Replace with your image path
            alt="Corporate Event Lighting Example 2"
          />
          <CardContent>
            <Typography variant="h6">Gala Dinner Lighting</Typography>
            <Typography variant="body2" color="text.secondary">
              Elegant and sophisticated lighting setup for a corporate gala dinner, creating a luxurious atmosphere.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            component="img"
            height="300"
            image="images/corporate-event-3.jpg" // Replace with your image path
            alt="Corporate Event Lighting Example 3"
          />
          <CardContent>
            <Typography variant="h6">Seminar Lighting Design</Typography>
            <Typography variant="body2" color="text.secondary">
              A seminar lighting design that ensures clear visibility for all attendees while maintaining a professional ambiance.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default CorporateEventsLighting;
