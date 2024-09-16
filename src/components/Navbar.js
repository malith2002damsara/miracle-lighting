import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [aboutAnchorEl, setAboutAnchorEl] = useState(null);
  const [eventAnchorEl, setEventAnchorEl] = useState(null);
  const navigate = useNavigate();

  // Handle menu open on hover
  const handleServicesHover = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleAboutHover = (event) => {
    setAboutAnchorEl(event.currentTarget);
  };

  const handleEventHover = (event) => {
    setEventAnchorEl(event.currentTarget);
  };

  // Handle menu close
  const handleClose = () => {
    setServicesAnchorEl(null);
    setAboutAnchorEl(null);
    setEventAnchorEl(null);
  };

  // Handle "Services" button click
  const handleServicesClick = () => {
    navigate('/services');
  };

  // Handle "About Us" button click
  const handleAboutClick = () => {
    navigate('/about');
  };

  // Handle "Event" button click
  const handleEventClick = () => {
    navigate('/event');
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: '#FFF017',
        color: '#333333',
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img
            src={Logo}
            alt="Miracle Lighting Logo"
            style={{ height: 40, marginRight: 16 }}
          />
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontFamily: 'Cursive',
              fontWeight: 'bold',
            }}
          >
            Miracle Lighting
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateX(5px)',
              },
            }}
          >
            Home
          </Button>

          <Button
            color="inherit"
            aria-controls="about-menu"
            aria-haspopup="true"
            onMouseEnter={handleAboutHover}
            onClick={handleAboutClick}
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateX(5px)',
              },
            }}
          >
            About 
          </Button>
          <Menu
            id="about-menu"
            anchorEl={aboutAnchorEl}
            open={Boolean(aboutAnchorEl)}
            onClose={handleClose}
            MenuListProps={{
              onMouseLeave: handleClose,
            }}
            PaperProps={{
              elevation: 0,
              sx: {
                bgcolor: '#FFF8DC',
                color: '#333',
                mt: 1.5,
                '& .MuiMenuItem-root': {
                  padding: '10px 20px',
                },
                '& .MuiMenuItem-root:hover': {
                  bgcolor: '#FFD700',
                },
              },
            }}
          >
            <MenuItem component={Link} to="/about" onClick={handleClose}>About Us</MenuItem>
            <MenuItem component={Link} to="/faq" onClick={handleClose}>FAQ</MenuItem>
          </Menu>

          {/* Services Dropdown */}
          <Button
            color="inherit"
            aria-controls="services-menu"
            aria-haspopup="true"
            onMouseEnter={handleServicesHover}
            onClick={handleServicesClick}
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateX(5px)',
              },
            }}
          >
            Services
          </Button>
          <Menu
            id="services-menu"
            anchorEl={servicesAnchorEl}
            open={Boolean(servicesAnchorEl)}
            onClose={handleClose}
            MenuListProps={{
              onMouseLeave: handleClose,
            }}
            PaperProps={{
              elevation: 0,
              sx: {
                bgcolor: '#FFF8DC',
                color: '#333',
                mt: 1.5,
                '& .MuiMenuItem-root': {
                  padding: '10px 20px',
                },
                '& .MuiMenuItem-root:hover': {
                  bgcolor: '#FFD700',
                },
              },
            }}
          >
            <MenuItem component={Link} to="/indoor-lighting" onClick={handleClose}>Indoor Lighting</MenuItem>
            <MenuItem component={Link} to="/outdoor-lighting" onClick={handleClose}>Outdoor Lighting</MenuItem>
            <MenuItem component={Link} to="/custom-designs" onClick={handleClose}>Custom Designs</MenuItem>
            <MenuItem component={Link} to="/stage-lighting" onClick={handleClose}>Stage Lighting</MenuItem>
            <MenuItem component={Link} to="/backdrop-lighting" onClick={handleClose}>Backdrop Lighting</MenuItem>
            <MenuItem component={Link} to="/ambient-lighting" onClick={handleClose}>Ambient Lighting</MenuItem>
            <MenuItem component={Link} to="/event-lighting" onClick={handleClose}>Event Lighting</MenuItem>
            <MenuItem component={Link} to="/themed-lighting" onClick={handleClose}>Themed Lighting</MenuItem>
            <MenuItem component={Link} to="/festival-lighting" onClick={handleClose}>Festival Lighting</MenuItem>
            <MenuItem component={Link} to="/wedding-lighting" onClick={handleClose}>Wedding Lighting</MenuItem>
            <MenuItem component={Link} to="/holiday-lighting" onClick={handleClose}>Holiday Lighting</MenuItem>
            <MenuItem component={Link} to="/garden-lighting" onClick={handleClose}>Garden Lighting</MenuItem>
          </Menu>

          {/* Event Dropdown */}
          <Button
            color="inherit"
            aria-controls="event-menu"
            aria-haspopup="true"
            onMouseEnter={handleEventHover}
            onClick={handleEventClick}
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateX(5px)',
              },
            }}
          >
            Event
          </Button>
          <Menu
            id="event-menu"
            anchorEl={eventAnchorEl}
            open={Boolean(eventAnchorEl)}
            onClose={handleClose}
            MenuListProps={{
              onMouseLeave: handleClose,
            }}
            PaperProps={{
              elevation: 0,
              sx: {
                bgcolor: '#FFF8DC',
                color: '#333',
                mt: 1.5,
                '& .MuiMenuItem-root': {
                  padding: '10px 20px',
                },
                '& .MuiMenuItem-root:hover': {
                  bgcolor: '#FFD700',
                },
              },
            }}
          >
            <MenuItem component={Link} to="/wedding" onClick={handleClose}>Wedding</MenuItem>
            <MenuItem component={Link} to="/birthday-parties" onClick={handleClose}>Birthday Parties</MenuItem>
            <MenuItem component={Link} to="/christmas-parties" onClick={handleClose}>Christmas Parties</MenuItem>
            <MenuItem component={Link} to="/kathina-festival" onClick={handleClose}>Kathina Festival</MenuItem>
          </Menu>

          <Button
            color="inherit"
            component={Link}
            to="/gallery"
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateX(5px)',
              },
            }}
          >
            Gallery
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/venue"
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateX(5px)',
              },
            }}
          >
            Venue
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/contact"
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateX(5px)',
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
