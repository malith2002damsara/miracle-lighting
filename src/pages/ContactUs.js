import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/contact', {
        name,
        email,
        message,
      });
      alert('Message Sent!');

      // Clear the input fields after submission
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      alert('Failed to send message');
    }
  };

  return (
    <Box sx={{ py: 8, px: 2, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2, bgcolor: '#FFD700', color: '#000' }}>
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default ContactUs;
