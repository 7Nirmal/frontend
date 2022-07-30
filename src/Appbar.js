import{useState} from "react";
import {useNavigate} from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export function Header({mode,setMode}){
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const settings = ['Profile', 'Logout'];
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
  

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
            JobSeeker
          </Typography>
          <Button color="inherit" onClick = {()=>navigate("/home")}>Home</Button>
          <Button color="inherit" onClick = {()=>navigate("/apply")}>Apply for a job</Button>
          <Button color="inherit" onClick = {()=>navigate("/jobspage")}>Find jobs</Button>

          <Button  style={{marginLeft:"auto"}}
           color="inherit" onClick={()=>{setMode(mode === "dark"?"light":"dark")}}>
            <IconButton aria-label="delete"> 
            {mode==="dark" ? <LightModeIcon/>:<DarkModeIcon/>} 
</IconButton>
            {mode==="dark"?"light mode":"dark mode"}</Button>
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                    
               onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar   alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
     
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
         
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">profile</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">logout</Typography>
                </MenuItem>
              
            </Menu>
          </Box>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
        </>
    )
}