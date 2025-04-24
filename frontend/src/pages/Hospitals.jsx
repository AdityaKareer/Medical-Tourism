import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Rating,
  Chip,
  Stack,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    city: 'all',
    specialization: 'all',
    rating: 'all'
  });

  useEffect(() => {
    // TODO: Replace with actual API call
    setHospitals(mockHospitals);
  }, []);

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Container maxWidth="xl">
      {/* Search and Filters */}
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" sx={{ mb: 4 }}>
          Find Hospitals
        </Typography>
        
        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              name="search"
              value={filters.search}
              onChange={handleFilterChange}
              placeholder="Search hospitals..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <FormControl fullWidth>
                <InputLabel>City</InputLabel>
                <Select
                  name="city"
                  value={filters.city}
                  onChange={handleFilterChange}
                  label="City"
                >
                  <MenuItem value="all">All Cities</MenuItem>
                  <MenuItem value="delhi">Delhi</MenuItem>
                  <MenuItem value="mumbai">Mumbai</MenuItem>
                  <MenuItem value="bangalore">Bangalore</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Specialization</InputLabel>
                <Select
                  name="specialization"
                  value={filters.specialization}
                  onChange={handleFilterChange}
                  label="Specialization"
                >
                  <MenuItem value="all">All Specializations</MenuItem>
                  <MenuItem value="cardiology">Cardiology</MenuItem>
                  <MenuItem value="orthopedics">Orthopedics</MenuItem>
                  <MenuItem value="oncology">Oncology</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Rating</InputLabel>
                <Select
                  name="rating"
                  value={filters.rating}
                  onChange={handleFilterChange}
                  label="Rating"
                >
                  <MenuItem value="all">All Ratings</MenuItem>
                  <MenuItem value="4">4+ Stars</MenuItem>
                  <MenuItem value="3">3+ Stars</MenuItem>
                  <MenuItem value="2">2+ Stars</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
        </Grid>

        {/* Hospital Cards */}
        <Grid container spacing={4}>
          {hospitals.map((hospital) => (
            <Grid item xs={12} md={6} lg={4} key={hospital.id}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={hospital.image}
                  alt={hospital.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {hospital.name}
                  </Typography>
                  
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <LocationOnIcon sx={{ color: 'text.secondary' }} />
                    <Typography color="text.secondary">
                      {hospital.location}
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <Rating value={hospital.rating} readOnly precision={0.5} />
                    <Typography>({hospital.reviewCount})</Typography>
                  </Stack>

                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    {hospital.specializations.map((spec, index) => (
                      <Chip key={index} label={spec} size="small" />
                    ))}
                  </Stack>

                  <Typography variant="body2" color="text.secondary">
                    {hospital.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

const mockHospitals = [
  {
    id: 1,
    name: 'Apollo Hospitals',
    location: 'Delhi',
    rating: 4.5,
    reviewCount: 1250,
    specializations: ['Cardiology', 'Neurology'],
    description: 'Leading multi-specialty hospital with state-of-the-art facilities.',
    image: 'https://example.com/apollo.jpg'
  },
  // Add more mock data as needed
];

export default Hospitals;