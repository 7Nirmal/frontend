import PlaceIcon from '@mui/icons-material/Place';
import WorkIcon from '@mui/icons-material/Work';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddBoxIcon from '@mui/icons-material/AddBox';
import HideSourceIcon from '@mui/icons-material/HideSource';
import {useState} from "react";
import {API} from "./App"
export function JobCard({job,deletejob}){
const [toggle,setToggle] = useState(true);
const [jobfeed,setJobfeed] =useState([]);


const Applyjob =  (id) =>{
  console.log(id);
   fetch(`${API}/jobdetails/${id}`)
  .then(data => data.json()).then(result=> setJobfeed(result));
console.log(jobfeed);
  fetch(`${API}/applied`,{method:"POST",body:JSON.stringify(jobfeed),headers:{"content-type":"application/json"},})
  .then((data)=>data.json()).then(response=>console.log(response));
}



    return (
        <div>
            {toggle ? <div className="jobcard">
        <h2>
          <b>{job.position}</b>
        </h2>
        <p>{job.company}</p>
        <p>
          <PlaceIcon />
          {job.location}
        </p>
        <p>
          <WorkIcon />
          {job.experience}
        </p>
        {job.CTC ? (
          <p>
            <CurrencyRupeeIcon />
            {job.CTC}
          </p>
        ) : (
          ""
        )}
        <p>{job.skills}</p>
        <div className="icons">
           <p>Apply<AddBoxIcon onClick={()=>{Applyjob(job._id)}} /></p> 
         
          <p onClick={() => setToggle(!toggle)}>
            not intrested
            <HideSourceIcon />
          </p>
        </div>
      </div> :"" }
      
      </div>
    );
}
