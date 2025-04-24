import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Lazy load components
const Home = React.lazy(() => import('./pages/Home'));
const Hospitals = React.lazy(() => import('./pages/Hospitals'));
const Doctors = React.lazy(() => import('./pages/Doctors'));
const Treatments = React.lazy(() => import('./pages/Treatments'));
const Login = React.lazy(() => import('./pages/auth/Login'));
const Register = React.lazy(() => import('./pages/auth/Register'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          minHeight: '100vh'
        }}>
          <Navbar />
          <Box sx={{ 
            flexGrow: 1, 
            pt: { xs: 8, sm: 9 },
            px: { xs: 2, sm: 3 }
          }}>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hospitals" element={<Hospitals />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/treatments" element={<Treatments />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </React.Suspense>
          </Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
