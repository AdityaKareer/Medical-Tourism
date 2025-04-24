import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Tabs,
  Tab,
  Button,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Treatments = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" sx={{ mb: 4 }}>
          Medical Treatments
        </Typography>

        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ mb: 4 }}
        >
          {categories.map((category, index) => (
            <Tab key={index} label={category} />
          ))}
        </Tabs>

        <Grid container spacing={4}>
          {treatments[categories[currentTab]].map((treatment, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={treatment.image}
                  alt={treatment.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {treatment.name}
                  </Typography>

                  <Typography color="text.secondary" sx={{ mb: 2 }}>
                    {treatment.description}
                  </Typography>

                  <Stack spacing={2}>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Package Includes:
                      </Typography>
                      <List dense>
                        {treatment.includes.map((item, idx) => (
                          <ListItem key={idx}>
                            <ListItemIcon>
                              <CheckCircleIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>

                    <Divider />

                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AttachMoneyIcon />
                        <Typography variant="h6">
                          Starting from ${treatment.startingPrice}
                        </Typography>
                      </Stack>
                      <Button
                        variant="contained"
                        startIcon={<LocalHospitalIcon />}
                      >
                        Enquire Now
                      </Button>
                    </Stack>
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

const categories = [
  'Cardiology',
  'Orthopedics',
  'Oncology',
  'Neurology',
  'Dental'
];

const treatments = {
  Cardiology: [
    {
      name: 'Heart Bypass Surgery',
      description: 'Advanced cardiac bypass surgery with comprehensive care package',
      includes: [
        'Pre-surgery consultation',
        'Advanced surgical procedure',
        'ICU care',
        'Post-operative care',
        'Rehabilitation program'
      ],
      startingPrice: 15000,
      image: 'https://example.com/cardiac.jpg'
    },
    // Add more treatments
  ],
  Orthopedics: [
    {
      name: 'Total Knee Replacement',
      description: 'Complete knee replacement surgery with rehabilitation',
      includes: [
        'Pre-surgery assessment',
        'Surgery',
        'Hospital stay',
        'Physiotherapy',
        'Follow-up care'
      ],
      startingPrice: 12000,
      image: 'https://example.com/knee.jpg'
    },
    // Add more treatments
  ],
  // Add more categories
};

export default Treatments;