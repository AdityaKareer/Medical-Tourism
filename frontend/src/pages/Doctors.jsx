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
  Avatar,
  Button,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    specialization: 'all',
    hospital: 'all',
    experience: 'all'
  });

  useEffect(() => {
    // TODO: Replace with actual API call
    setDoctors(mockDoctors);
  }, []);

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" sx={{ mb: 4 }}>
          Our Doctors
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              name="search"
              value={filters.search}
              onChange={handleFilterChange}
              placeholder="Search doctors..."
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
                <InputLabel>Hospital</InputLabel>
                <Select
                  name="hospital"
                  value={filters.hospital}
                  onChange={handleFilterChange}
                  label="Hospital"
                >
                  <MenuItem value="all">All Hospitals</MenuItem>
                  <MenuItem value="apollo">Apollo Hospitals</MenuItem>
                  <MenuItem value="fortis">Fortis Healthcare</MenuItem>
                  <MenuItem value="max">Max Healthcare</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Experience</InputLabel>
                <Select
                  name="experience"
                  value={filters.experience}
                  onChange={handleFilterChange}
                  label="Experience"
                >
                  <MenuItem value="all">All Experience</MenuItem>
                  <MenuItem value="15">15+ Years</MenuItem>
                  <MenuItem value="10">10+ Years</MenuItem>
                  <MenuItem value="5">5+ Years</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          {doctors.map((doctor) => (
            <Grid item xs={12} md={6} lg={4} key={doctor.id}>
              <Card sx={{ height: '100%' }}>
                <Box sx={{ p: 3, textAlign: 'center' }}>
                  <Avatar
                    src={doctor.image}
                    alt={doctor.name}
                    sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
                  />
                  <Typography variant="h5" gutterBottom>
                    Dr. {doctor.name}
                  </Typography>
                  <Typography color="text.secondary" gutterBottom>
                    {doctor.specialization}
                  </Typography>
                </Box>
                <CardContent>
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <LocalHospitalIcon color="primary" />
                      <Typography>{doctor.hospital}</Typography>
                    </Stack>
                    
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Rating value={doctor.rating} readOnly precision={0.5} />
                      <Typography>({doctor.reviewCount})</Typography>
                    </Stack>

                    <Typography variant="body2" color="text.secondary">
                      {doctor.experience} years of experience
                    </Typography>

                    <Stack direction="row" spacing={1}>
                      {doctor.languages.map((lang, index) => (
                        <Chip key={index} label={lang} size="small" />
                      ))}
                    </Stack>

                    <Button
                      variant="contained"
                      startIcon={<EventAvailableIcon />}
                      fullWidth
                    >
                      Book Appointment
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

const mockDoctors = [
  {
    id: 1,
    name: 'John Smith',
    specialization: 'Cardiology',
    hospital: 'Apollo Hospitals',
    experience: 15,
    rating: 4.8,
    reviewCount: 320,
    languages: ['English', 'Hindi'],
    image: 'https://example.com/doctor1.jpg'
  },
  // Add more mock data as needed
];

export default Doctors;