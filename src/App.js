import './App.css';
import {Routes,Route} from "react-router-dom";
import{useState} from "react";
import {Home} from "./Home";
import {Recruiterlogin} from "./Recruiter/Recruiterlogin";
import {RecruiterLogup} from "./Recruiter/Recruiterlogup";

import {Userlogin} from "./Userlogin";
import { Logup } from './Logup';
import { Jobdetails } from './JobDetail';
import {Header} from "./Appbar";
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Signup } from './Signup';
export const API = "http://localhost:5000";

function App() {
  const[mode,setMode] = useState("dark");
    const theme = createTheme({
      palette: {
        mode: mode,
      },
    });
  
  return (
    <div className="container">
            <ThemeProvider theme={theme}>
        <Paper elevation={4}  style={{minHeight:"100vh",borderRadius:"0px"}}>
      <Header mode ={mode} setMode={setMode} />
 <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/home" element={<Home/>}/> 
      <Route path="/recruiter-login" element={<Recruiterlogin/>}/> 
      <Route path="/recruiter-logup" element={<RecruiterLogup/>}/> 
      <Route path="/user-login" element={<Userlogin/>}/> 
      <Route path="/signup" element={<Logup/>}/> 
      <Route path="/jobspage" element={<Jobdetails/>}/> 
      <Route path="/apply" element={<Signup/>}/> 

      </Routes>
      </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
