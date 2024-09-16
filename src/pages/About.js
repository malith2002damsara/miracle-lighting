import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ py: 8, px: 2, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>About</Typography>
      <Typography variant="body1" paragraph>
        At Miracle Lighting, we specialize in creating magical lighting experiences for your wedding day. With a passion for design and a commitment to excellence, our team provides bespoke lighting solutions that enhance the beauty of your event.
      </Typography>
      <Typography variant="body1" paragraph>
        Our journey began with a simple idea: to illuminate weddings with elegance and creativity. Over the years, we have transformed countless venues into stunning, radiant spaces, leaving lasting impressions on couples and their guests.
      </Typography>
      <Typography variant="body1" paragraph>
        We believe that every wedding is unique, and our goal is to tailor our lighting designs to fit your vision. From intimate ceremonies to grand celebrations, Miracle Lighting is dedicated to making your special day shine.
      </Typography>
    </Box>
  );
};

export default About;
