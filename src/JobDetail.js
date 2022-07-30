import {useState,useEffect} from "react";
import { Navigate } from "react-router-dom";
import {API} from "./App";
import { JobCard } from "./JobCard";
import { useNavigate } from "react-router-dom";

export function Jobdetails({token}){
    const [search,setSearch] = useState([]);
    const dosearch = (data)=>{
        console.log(data);
    }
const navigate = useNavigate();
    const[data,setData] = useState([]);
    const jobdata = () =>{
        fetch(`${API}/jobdetails`,{headers:{"x-auth-token":token}})
        .then(data =>data.json()).then((result)=>setData(result))
    }
    useEffect(()=> {jobdata()},[]);
    const deletejob =(id) =>{
        fetch(`${API}/jobdetails/${id}`, {method:"DELETE",})
        .then((data) => data.json()).then(()=>jobdata())
     }
  
    return(
        <div>
        <input type="search" onChange={(event)=>setSearch(event.target.value)}></input>
        <button type="submit" onClick={()=>dosearch(search)}> search</button>
        <div className="job-container">
{data.map((job,index)=><JobCard job={job} key={index} deletejob={deletejob}/>)}
        </div>
        </div>
    )
}