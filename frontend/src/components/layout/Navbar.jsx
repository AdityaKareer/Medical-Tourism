import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" sx={{ background: '#000' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MediTour
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => navigate('/hospitals')}>
            Hospitals
          </Button>
          <Button color="inherit" onClick={() => navigate('/doctors')}>
            Doctors
          </Button>
          <Button color="inherit" onClick={() => navigate('/treatments')}>
            Treatments
          </Button>
          <Button color="inherit" onClick={() => navigate('/login')}>
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;