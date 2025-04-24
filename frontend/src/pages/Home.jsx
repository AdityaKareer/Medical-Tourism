import React from 'react';
import { Box, Container, Typography, Grid, Button, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ 
        height: '90vh', 
        background: 'linear-gradient(45deg, #000 30%, #333 90%)',
        color: 'white',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Container>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, mb: 3 }}>
            World-Class Healthcare
            <br />
            In India
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.8 }}>
            Connect with top hospitals and doctors for your medical needs
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              bgcolor: 'white', 
              color: 'black',
              '&:hover': { bgcolor: '#f5f5f5' }
            }}
            onClick={() => navigate('/hospitals')}
          >
            Explore Hospitals
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
          Why Choose Us
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', bgcolor: '#f8f8f8' }}>
                <CardContent>
                  {feature.icon}
                  <Typography variant="h5" sx={{ mb: 2, mt: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Statistics Section */}
      <Box sx={{ bgcolor: '#000', color: 'white', py: 8 }}>
        <Container>
          <Grid container spacing={4} textAlign="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Typography variant="h3" sx={{ mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.8 }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

const features = [
  {
    icon: '🏥',
    title: 'Top Hospitals',
    description: 'Access to India\'s leading healthcare facilities with international accreditation.'
  },
  {
    icon: '👨‍⚕️',
    title: 'Expert Doctors',
    description: 'Consult with experienced specialists across various medical fields.'
  },
  {
    icon: '✈️',
    title: 'Travel Support',
    description: 'Complete assistance with medical visa, travel, and accommodation arrangements.'
  }
];

const stats = [
  { value: '100+', label: 'Partner Hospitals' },
  { value: '1000+', label: 'Doctors' },
  { value: '50,000+', label: 'Patients Served' },
  { value: '95%', label: 'Success Rate' }
];

export default Home;