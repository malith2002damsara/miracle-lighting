import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Facebook, Instagram, WhatsApp, Mail } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#FFD700', color: '#000', py: 4, textAlign: 'center' }}>
      <Typography variant="body1" gutterBottom>
        © 2024 Miracle Lighting. All Rights Reserved.
      </Typography>
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          justifyContent: 'center',
          gap: 4, // Increase gap between icons
        }}
      >
        <Link href="mailto:miraclelighting9@gmail.com" color="inherit">
          <Mail sx={{ fontSize: 40 }} /> {/* Larger icon */}
        </Link>
        <Link href="https://wa.me/0776270882" color="inherit">
          <WhatsApp sx={{ fontSize: 40 }} /> {/* Larger icon */}
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100093008904723" color="inherit">
          <Facebook sx={{ fontSize: 40 }} /> {/* Larger icon */}
        </Link>
        <Link href="https://www.instagram.com/_miracle_lighting?igsh=amF0NGc3eGl5aWw1" color="inherit">
          <Instagram sx={{ fontSize: 40 }} /> {/* Larger icon */}
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
