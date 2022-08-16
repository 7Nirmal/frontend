import{useState} from "react";
import {useNavigate} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';

export function AppBarUser(){
  
    const navigate = useNavigate();

    return(
        <>
        
     
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Job Seeker
          </Typography>
          <Button color="inherit" onClick = {()=>navigate("/home")}>Home</Button>
          <Button color="inherit" onClick = {()=>navigate("/apply")}>Apply for a job</Button>
          <Button color="inherit" onClick = {()=>navigate("/jobspage")}>Find jobs</Button>
          <Button color="inherit" onClick = {()=>navigate("/appliedjobs")}>Applied jobs</Button>
          <Button color="inherit" onClick = {()=>navigate("/")}>Logout</Button>

        </Toolbar>
        </Container>
      </AppBar>
    </Box>
        </>
    )
}