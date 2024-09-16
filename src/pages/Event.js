import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const Event = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Event Lighting Solutions
      </Typography>

      <Typography variant="body1" paragraph>
        At Miracle Lighting, we specialize in creating stunning lighting designs for a wide range of events. Whether you're planning a wedding, a corporate event, or a themed party, our team is dedicated to delivering the perfect ambiance to make your event memorable.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Weddings
            </Typography>
            <Typography variant="body1">
              Transform your wedding with our elegant and romantic lighting solutions. From intimate ceremonies to grand receptions, we tailor our designs to match your vision and enhance your special day.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Corporate Events
            </Typography>
            <Typography variant="body1">
              Make a lasting impression at your corporate event with our sophisticated and professional lighting setups. Whether it's a conference, seminar, or product launch, our lighting will complement your event's tone and style.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Themed Parties
            </Typography>
            <Typography variant="body1">
              Create a captivating atmosphere with our themed lighting designs. From vibrant and colorful setups to subtle and sophisticated arrangements, we bring your party theme to life.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Festivals
            </Typography>
            <Typography variant="body1">
              Illuminate your festival with our dynamic and exciting lighting displays. Our solutions are designed to enhance the energy and atmosphere of any outdoor or indoor festival.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Event;
