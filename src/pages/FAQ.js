// src/pages/FAQ.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import faqImage from '../assets/faq.jpg'; // Replace with the path to your image

const FAQ = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h3" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <img src={faqImage} alt="FAQ" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        <Typography variant="h6" sx={{ mt: 2 }}>
          <strong>Q: What types of events do you cover?</strong>
        </Typography>
        <Typography variant="body1">
          A: We cover a wide range of events including weddings, corporate events, festivals, and private parties. Our lighting solutions are tailored to meet the specific needs of each event.
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          <strong>Q: How do I request a quote?</strong>
        </Typography>
        <Typography variant="body1">
          A: You can request a quote by contacting us through our website or calling our office. Provide us with details about your event, and we will get back to you with a customized quote.
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          <strong>Q: Do you offer on-site consultations?</strong>
        </Typography>
        <Typography variant="body1">
          A: Yes, we offer on-site consultations to understand your event's requirements and provide recommendations for the best lighting solutions.
        </Typography>
      </Box>
    </Container>
  );
};

export default FAQ;
