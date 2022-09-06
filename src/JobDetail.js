import {useState,useEffect} from "react";
import {API} from "./App";
import { JobCard } from "./JobCard";
import{AppBarUser} from "./AppbarUser";
import "./Jobdetail.css";
import Pagination from 'react-bootstrap/Pagination';
import { DayPicker } from "@mui/x-date-pickers/internals";

export function Jobdetails(){


    const [search,setSearch] = useState("");
    const [page,setPage] = useState(1);
    const[buttons,setButtons] = useState([]);
    const limit = 5;


    const[data,setData] = useState([]);


    const jobdata = async () =>{
        let token = localStorage.getItem("auth-token");
       await fetch(`${API}/jobdetails?page=${page}&limit=${limit}`,{headers:{"x-auth-token":token}})
        .then(data =>data.json()).then((result)=>{setData(result.data);setButtons(result.buttons)})
    }

    const user = localStorage.getItem('user');
    useEffect(()=> {jobdata()},[page]);

console.log(data);

        // const checkapplied = (id) => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const[applied] = user.appliedjobs;
//     console.log(applied);
     
//     if(applied.jobid ===id){
//       setApply(false);
//     }
//   }
 
//   useEffect(()=>{checkapplied(data._id)},[data.length])


    return(
         <div className="job-page">
            <AppBarUser/>
            {user ? <h1 style={{fontFamily:"AT.Allowe"}}>Apply Now!</h1> : <h1  style={{fontFamily:"AT.Allowe"}}>complete your profile!!</h1>}
            <input type="search"  className="input" placeholder="job position or location"   onChange={(event)=>setSearch(event.target.value)}></input>
            <div className="pagination">
                {buttons.map((num)=>
                <Pagination key={num} >
                <Pagination.Item  onClick={()=>setPage(num)}>{num}</Pagination.Item>
                </Pagination>
             )}
           
            </div>
            <div className="job-container">
     {data.filter((val)=>{
        if(search ===""){
        return val;
        }
     else if (val.location.toLowerCase().includes(search.toLowerCase())|| val.position.toLowerCase().includes(search.toLowerCase())){
        return val;
     }
    })
     .map((job,index)=><JobCard job={job} key={index} />)}
            </div>
          
            </div> 
    )
}
