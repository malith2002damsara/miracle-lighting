import React, { useState } from 'react';
import { Grid, Box, Typography, Card, CardContent, CardMedia, IconButton, Modal, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Gallery = () => {
  // Define categories and their respective images
  const categories = {
    wedding: ['/wedding1.jpg', '/wedding2.jpg', '/wedding3.jpg'],
    kathina: ['/kathina1.jpg', '/kathina2.jpg', '/kathina3.jpg'],
    birthday: ['/birthday1.jpg', '/birthday2.jpg', '/birthday3.jpg'],
    christmas: ['/christmas1.jpg', '/christmas2.jpg', '/christmas3.jpg']
  };

  // State to manage selected category and image
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedImage(null); // Reset selected image when category changes
  };

  // Function to handle image selection
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Function to handle reset to show all categories
  const handleReset = () => {
    setSelectedCategory(null);
    setSelectedImage(null);
  };

  // Function to handle closing the modal
  const handleClose = () => {
    setSelectedImage(null);
  };

  // Function to navigate images
  const handleNavigate = (direction) => {
    if (selectedCategory && categories[selectedCategory]) {
      const currentIndex = categories[selectedCategory].indexOf(selectedImage);
      const newIndex = (currentIndex + direction + categories[selectedCategory].length) % categories[selectedCategory].length;
      setSelectedImage(categories[selectedCategory][newIndex]);
    }
  };

  return (
    <Box sx={{ py: 8, px: 2, position: 'relative' }}>
      <Typography variant="h4" gutterBottom>Gallery</Typography>

      {/* Show category cards or images based on selectedCategory */}
      {!selectedCategory ? (
        <Grid container spacing={4} mb={4}>
          {/* Category Cards */}
          {Object.keys(categories).map((category) => (
            <Grid item key={category} xs={12} sm={6} md={3}>
              <Card
                onClick={() => handleCategoryChange(category)}
                sx={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  },
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <CardMedia
                  component="img"
                  height="340"
                  image={categories[category][0]} // Display first image for the category card
                  alt={`Category ${category}`}
                  sx={{
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                />
                <CardContent
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: '#fff',
                    textAlign: 'center',
                    padding: 2,
                    transition: 'opacity 0.3s',
                    opacity: 1,
                    '&:hover': {
                      opacity: 0,
                    },
                  }}
                >
                  <Typography variant="h6">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box
          sx={{
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: 1200, // Ensures the button is above other content
          }}
        >
          {/* Reset Button */}
          <IconButton
            onClick={handleReset}
            sx={{
              color: 'primary.main',
              backgroundColor: 'background.paper',
              '&:hover': {
                backgroundColor: 'primary.light',
              },
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        </Box>
      )}

      {/* Images for selected category */}
      {selectedCategory && (
        <Grid container spacing={4}>
          {categories[selectedCategory].map((image, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Box
                component="img"
                src={image}
                alt={`Gallery ${index}`}
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                  cursor: 'pointer',
                }}
                onClick={() => handleImageClick(image)}
              />
            </Grid>
          ))}
        </Grid>
      )}

      {/* Image Modal */}
      <Modal
        open={!!selectedImage}
        onClose={handleClose}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '80%',
            height: '80%',
            bgcolor: 'background.paper',
            borderRadius: 1,
            overflow: 'hidden',
          }}
        >
          <IconButton
            onClick={() => handleNavigate(-1)}
            sx={{
              position: 'absolute',
              top: '50%',
              left: 16,
              transform: 'translateY(-50%)',
              color: 'primary.main',
              backgroundColor: 'background.paper',
              '&:hover': {
                backgroundColor: 'primary.light',
              },
            }}
          >
            <NavigateBeforeIcon />
          </IconButton>
          <Box
            component="img"
            src={selectedImage}
            alt="Selected"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
          <IconButton
            onClick={() => handleNavigate(1)}
            sx={{
              position: 'absolute',
              top: '50%',
              right: 16,
              transform: 'translateY(-50%)',
              color: 'primary.main',
              backgroundColor: 'background.paper',
              '&:hover': {
                backgroundColor: 'primary.light',
              },
            }}
          >
            <NavigateNextIcon />
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
};

export default Gallery;
