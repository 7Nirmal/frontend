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
import {AppBarUser} from './AppbarUser';
import{Viewcandidates} from './Recruiter/Viewcandidates';
import {Updateprofile} from './Updateprofile';
import { Appliedjob } from './Appliedjobsuser';
import { JobsDashboard } from './Recruiter/JobsDashboard';
import { Editjob } from './Recruiter/Editjob';
import {ScheduledCandidate} from "./Recruiter/Scheduledcandidates";
import { useSelector } from 'react-redux';
export const API = "https://jobssekerbackend.herokuapp.com";

function App() {
  return (
    <div className="container">
 <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/home" element={<Home/>}/>        
    <Route path="/user-login" element={<Userlogin/>}/> 
    <Route path="/user-logup" element={<Logup/>}/> 
    <Route path="/appliedjobs" element={<Appliedjob/>}/> 

      <Route path="/jobspage" element={<Jobdetails/>}/> 
      <Route path="/apply" element={<Signup/>}/> 
      <Route path="/update-profile/:id" element={<Updateprofile/>}/> 
      <Route path="/editjob/:id" element={<Editjob/>}/> 
      <Route path ="/viewcandidates/:id" element={<Viewcandidates/>}/> 
      <Route path="/scheduledcandidates" element={<ScheduledCandidate/>}/> 


    <Route path="/recruiter-login" element={<Recruiterlogin/>}/> 
      <Route path="/recruiter-logup" element={<RecruiterLogup/>}/> 
      <Route path="/createjob" element={<Createjob/>}/> 
      <Route path="/jobsdashboard" element={<JobsDashboard/>}/> 

      </Routes>
      
    </div>
  );
}

export default App;
