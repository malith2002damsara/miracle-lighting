import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, image, link }) => {
  return (
    <Card sx={{ maxWidth: 345, bgcolor: '#FFF8DC', color: '#333', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Button size="small" sx={{ color: '#FFD700' }} component={Link} to={link}>
        Learn More
      </Button>
    </Card>
  );
};

export default ServiceCard;
