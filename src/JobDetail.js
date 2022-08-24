import {useState,useEffect} from "react";
import {API} from "./App";
import { JobCard } from "./JobCard";
import{AppBarUser} from "./AppbarUser";
import "./Jobdetail.css";

export function Jobdetails(){

    const [search,setSearch] = useState([]);

    const dosearch = (position)=>{
const result = data.filter(job => job.position==position);
console.log(result);
setData(result);
    }
    const[data,setData] = useState([]);
    const jobdata = async () =>{
        let token = localStorage.getItem("auth-token");
       await fetch(`${API}/jobdetails`,{headers:{"x-auth-token":token}})
        .then(data =>data.json()).then((result)=>setData(result))
     console.log(data);
    }

    const user = localStorage.getItem('user');
    useEffect(()=> {jobdata()},[]);

    
// const checkapplied = (id) => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const[applied] = user.appliedjobs;
//     console.log(applied);
     
//     if(applied.jobid ===id){
//       setApply(false);
//     }
//   }
 
//   useEffect(()=>{checkapplied(data._id)},[data.length])

console.log(data);

    return(
         <div>
            <AppBarUser/>
            {user ? <h1 style={{fontFamily:"AT.Allowe"}}>Apply Now!</h1> : <h1  style={{fontFamily:"AT.Allowe"}}>complete your profile!!</h1>}
            <input type="search"  className="input" onChange={(event)=>setSearch(event.target.value)}></input>
            <button type="submit" onClick={()=>dosearch(search)} className="search-button" > search</button>
            <div className="job-container">
     {data.map((job,index)=><JobCard job={job} key={index} />)}
            </div>
            </div> 
    )
}
