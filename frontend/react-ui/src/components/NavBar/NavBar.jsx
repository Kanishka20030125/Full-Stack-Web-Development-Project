import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

function NavBar() {
  return (
    <AppBar position="static" color="primary" elevation={3} sx={{ mb: 3 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
              EMS
            </Typography>
          </Box>

          <Box>
            <Button color="inherit" href="/employees">Employees</Button>
            <Button color="inherit" href="/departments">Departments</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;