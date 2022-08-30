import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";
import {API} from "../App";
import {Header} from "./AppbarRecruiter";
import swal from 'sweetalert';
import "./createjob.css";


export function Createjob(){
const [position,setPosition] = useState([]);
const [company,setCompany] = useState([]);
const [location,setLocation] = useState([]);
const[ctcfrom,setCtcfrom] = useState([]);
const [ctcto,setCtcto] = useState([]);
const[expfrom,setExpfrom] = useState([]);   
const [expto,setExpto] = useState([]);  
const [skills,setSkills] = useState([]);


const Newjob = (position,company,location,ctcfrom,ctcto,expfrom,expto,skills) =>{
    const data = {
     position: position,
     company: company,
     location: location,
     CTC: `${ctcfrom}-${ctcto}`,
     experience:`${expfrom} - ${expto}`,
     skills:skills,
    }
    console.log(data);
    const token = localStorage.getItem("auth-token");
    console.log(token);
    fetch(`${API}/jobdetails`,{method:"POST",body:JSON.stringify(data),headers:{"Content-Type":"application/json","x-auth-token":token}})
    .then(data =>data.json()).then(()=>swal("sucess!","New job created successfully", "success"));
}
    return(
        <div>
        <Header/>
        <div className="job-container">
        <div className="create-job">
            <h1>Createjob</h1>
<TextField name="position" 
label="Enter job position" 
type="text"
placeholder="position"
onChange={(event)=>{setPosition(event.target.value)}}   />

<TextField
name="company"
type="text"
placeholder="company"
label="company"
onChange={(event)=>{setCompany(event.target.value)}}
/>


<TextField
name="location"
type="text"
placeholder="location"
label="Location"
onChange={(event)=>{setLocation(event.target.value)}}
/>

<TextField
name="ctcfrom"
type="text"
placeholder="CTC from"
label="CTC from"
onChange={(event)=>{setCtcfrom(event.target.value)}}
/>


<TextField
name="ctcto"
type="text"
placeholder="CTC to"
label="CTC to"
onChange={(event)=>{setCtcto(event.target.value)}}
/>

<TextField
name="expfrom"
type="text"
placeholder="Experience from"
label="Experience from"
onChange={(event)=>{setExpfrom(event.target.value)}}
/>


<TextField
name="expto"
type="text"
placeholder="Experience to"
label="Experience to"
onChange={(event)=>{setExpto(event.target.value)}}
/>

<TextField
name="skills"
type="text"
placeholder="Skills"
label="Skills"
onChange={(event)=>{setSkills(event.target.value)}}
/>
<Button variant="contained" color="secondary" onClick = {()=> { Newjob(position,company,location,ctcfrom,ctcto,expfrom,expto,skills)}}>
    submit
  </Button>
        </div>
        </div>
        </div>

    )
}