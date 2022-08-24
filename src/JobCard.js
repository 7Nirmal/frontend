import PlaceIcon from '@mui/icons-material/Place';
import WorkIcon from '@mui/icons-material/Work';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddBoxIcon from '@mui/icons-material/AddBox';
import HideSourceIcon from '@mui/icons-material/HideSource';
import {useState,useEffect} from "react";
import {API} from "./App";
import swal from 'sweetalert';


export function JobCard({job}){
const [toggle,setToggle] = useState(true);
const[apply,setApply] = useState(true);


const Applyjob =  (job) =>{
  setApply(false);
  console.log(job);
//    await fetch(`${API}/jobdetails/${id}`)
//   .then(data => data.json()).then(result=> setJobfeed(result));
// console.log(jobfeed);  
const user = JSON.parse(localStorage.getItem("user"));
  // setJobfeed ({job,candidate:{}})
 fetch(`${API}/applyjob`,{method:"POST",body:JSON.stringify({job:job,user:user}),headers:{"content-type":"application/json"},})
   .then((data)=>data.json()).then(response=>swal(response.message));
   //setApply(!apply);

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
          <p>Apply<AddBoxIcon onClick={()=>{Applyjob(job)}} /></p>
          <p onClick={() => setToggle(!toggle)}>
            not intrested
            <HideSourceIcon />
          </p>
        </div>
      </div> :"" }
      
      </div>
    );
}
