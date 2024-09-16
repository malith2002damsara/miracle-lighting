import React from 'react';
import Hero from '../components/Hero';
import { Typography, Box, Grid } from '@mui/material';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: 'Indoor Lighting',
    description: 'Elegant lighting solutions for indoor events.',
    image: '/wedding2.jpg',
    link: '/indoor-lighting',
  },
  {
    title: 'Outdoor Lighting',
    description: 'Beautiful outdoor lighting setups for any occasion.',
    image: '/wedding3.jpg',
    link: '/outdoor-lighting',
  },
  {
    title: 'Custom Designs',
    description: 'Unique, custom lighting designs tailored to your needs.',
    image: '/wedding1.jpg',
    link: '/custom-designs',
  },
  {
    title: 'Stage Lighting',
    description: 'Dazzling stage lighting for performances and events.',
    image: '/wedding4.jpg',
    link: '/stage-lighting',
  },
  {
    title: 'Backdrop Lighting',
    description: 'Enchanting backdrop lighting for photo sessions.',
    image: '/wedding5.jpg',
    link: '/backdrop-lighting',
  },
  {
    title: 'Ambient Lighting',
    description: 'Ambient lighting solutions for a cozy atmosphere.',
    image: '/wedding6.jpg',
    link: '/ambient-lighting',
  },

];

const Home = () => {
  return (
    <>
      <Hero />
      <Box sx={{ py: 8, px: 2, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Our Services</Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ServiceCard {...service} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
