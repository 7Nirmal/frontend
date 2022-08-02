import './App.css';
import {Routes,Route} from "react-router-dom";
import {Home} from "./Home";
import {Recruiterlogin} from "./Recruiter/Recruiterlogin";
import {RecruiterLogup} from "./Recruiter/Recruiterlogup";
import {Createjob}  from "./Recruiter/Createjob";
import {Userlogin} from "./Userlogin";
import { Logup } from './Logup';
import { Jobdetails } from './JobDetail';
import { Signup } from './Signup';
import {Header} from './AppbarUser';
export const API = "http://localhost:5000";

function App() {
  
  return (
    <div className="container">
      <Header/> 
 <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/home" element={<Home/>}/>        
    <Route path="/user-login" element={<Userlogin/>}/> 
      <Route path="/jobspage" element={<Jobdetails/>}/> 
      <Route path="/apply" element={<Signup/>}/> 
    <Route path="/recruiter-login" element={<Recruiterlogin/>}/> 
      <Route path="/recruiter-logup" element={<RecruiterLogup/>}/> 
      <Route path="/createjob" element={<Createjob/>}/> 
      </Routes>
      
    </div>
  );
}

export default App;
