import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const services = [
  { title: 'Indoor Lighting', image: '/images/indoor-lighting-thumbnail.jpg', path: '/indoor-lighting' },
  { title: 'Outdoor Lighting', image: '/images/outdoor-lighting-thumbnail.jpg', path: '/outdoor-lighting' },
  { title: 'Custom Designs', image: '/images/custom-designs-thumbnail.jpg', path: '/custom-designs' },
  { title: 'Stage Lighting', image: '/images/stage-lighting-thumbnail.jpg', path: '/stage-lighting' },
  { title: 'Backdrop Lighting', image: '/images/backdrop-lighting-thumbnail.jpg', path: '/backdrop-lighting' },
  { title: 'Ambient Lighting', image: '/images/ambient-lighting-thumbnail.jpg', path: '/ambient-lighting' },
  { title: 'Event Lighting', image: '/images/event-lighting-thumbnail.jpg', path: '/event-lighting' },
  { title: 'Themed Lighting', image: '/images/themed-lighting-thumbnail.jpg', path: '/themed-lighting' },
  { title: 'Festival Lighting', image: '/images/festival-lighting-thumbnail.jpg', path: '/festival-lighting' },
  { title: 'Wedding Lighting', image: '/images/wedding-lighting-thumbnail.jpg', path: '/wedding-lighting' },
 // { title: 'Corporate Events Lighting', image: '/images/corporate-events-lighting-thumbnail.jpg', path: '/corporate-events-lighting' },
  { title: 'Holiday Lighting', image: '/images/holiday-lighting-thumbnail.jpg', path: '/holiday-lighting' },
  { title: 'Garden Lighting', image: '/images/garden-lighting-thumbnail.jpg', path: '/garden-lighting' },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1, py: 8, px: 2 }}>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.title}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {service.title}
                </Typography>
                <Button 
                  component={Link}
                  to={service.path}
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
