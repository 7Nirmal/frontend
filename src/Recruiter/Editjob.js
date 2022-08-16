import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState,useEffect} from "react";
import {API} from "../App";
import { useParams } from 'react-router-dom';
import {Header} from "./AppbarRecruiter"


export function Editjob(){

const{id}  = useParams();
const[jobdata,setJobdata] = useState(null);
const getjobdata = () => {
    fetch(`${API}/getjob/${id}`).then(data=>data.json()).then((result)=>setJobdata(result));
}
useEffect(()=>getjobdata(id),[])
    


return(
    <div>
        <Header/>
        {jobdata ? <Updatejob jobdata={jobdata}/> : "Loading..."}
        </div>
)
}


function Updatejob({jobdata}){


    const [position,setPosition] = useState("");
    const [company,setCompany] = useState("");
    const [location,setLocation] = useState("");
    const[ctcfrom,setCtcfrom] = useState([]);
    const [ctcto,setCtcto] = useState([]);
    const[expfrom,setExpfrom] = useState([]);   
    const [expto,setExpto] = useState([]);  
    const [skills,setSkills] = useState(jobdata.skills);
    
    useEffect(()=>{setPosition(jobdata.position);setCompany(jobdata.company);setLocation(jobdata.location);},[]);
    
    const editjob = (position,company,location,ctcfrom,ctcto,expfrom,expto,skills,id) =>{
        const data = {
         position,
         company,
          location,
         CTC: `${ctcfrom}-${ctcto}`,
         experience:`${expfrom} - ${expto}`,
         skills,
        }
        console.log(data);
        const token = localStorage.getItem("auth-token");
        fetch(`${API}/editjob/${id}`,{method:"POST",body:JSON.stringify(data),headers:{"Content-Type":"application/json","x-auth-token":token}})
        .then(data =>data.json()).then((response)=>alert(response.message));
    }

    return(
        <div className="createjob">
<TextField
label="position"
placeholder="position"
value={position}
onChange={(event)=>{setPosition(event.target.value)}}   
/>

<TextField
placeholder="company"
label="company"
value= {company}
onChange={(event)=>{setCompany(event.target.value)}}
/>


<TextField
placeholder="location"
label="Location"
value = {location}
onChange={(event)=>{setLocation(event.target.value)}}
/>

<TextField
placeholder="CTC from"
label="CTC from"
onChange={(event)=>{setCtcfrom(event.target.value)}}
/>


<TextField
placeholder="CTC to"
label="CTC to"
onChange={(event)=>{setCtcto(event.target.value)}}
/>

<TextField
placeholder="Experience from"
label="Experience from"
onChange={(event)=>{setExpfrom(event.target.value)}}
/>


<TextField
placeholder="Experience to"
label="Experience to"
onChange={(event)=>{setExpto(event.target.value)}}
/>

<TextField
placeholder="Skills"
label="Skills"
value={skills}
onChange={(event)=>{setSkills(event.target.value)}}
/>
<Button variant="contained" color="secondary" onClick = {()=> { editjob(position,company,location,ctcfrom,ctcto,expfrom,expto,skills,jobdata._id)}}>
    submit
  </Button>
        </div>

    )
}