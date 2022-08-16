import "./viewcandidate.css";
import {API} from "../App";
import{useParams,useNavigate} from 'react-router-dom';
import{useState,useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DateTimePicker from 'react-datetime-picker';
import swal from 'sweetalert';



export function Viewcandidates(){
const {id} = useParams();
//console.log(id);
const[applied,setApplied] = useState([]);
const appliedcandidate =  () =>{
    fetch(`${API}/getjob/${id}`).then(data=>data.json())
   .then((result)=>{setApplied(result.appliedcandidates)});
 
}
 useEffect(()=>{appliedcandidate()},[]);



    return(
        <div className="candidate-container">
         {applied.map((data,index)=><Candidatecard key={index} data={data} index={index} id={id}/>)}
         
        </div>
    )
}


function Candidatecard({data,index,id}){
    const[box,setBox] = useState(false);
    const[time,setTime] = useState(new Date());
    
    const navigate = useNavigate();
    
const remove = (index,id,email) =>{
   // console.log(index,id);
    fetch(`${API}/reject/${id}/${index}`,{method:"POST",body:JSON.stringify({email:email}),headers:{"content-type":"application/json"}})
    .then(data=>data.json()).then(()=>{swal("candidate rejected");navigate("/jobsdashboard")})

}

 const scheduleinterview = (id,index,time,email) =>{
    fetch(`${API}/schedule/${id}/${index}`,{method:"POST",body:JSON.stringify({time:time,email:email}),headers:{"content-type":"application/json"}})
     .then(data=>data.json()).then(()=>{swal("candidate scheduled for interview");navigate("/jobsdashboard")})

 }

    return(
        <div className="candidatecard">
            {data.show ?  
            <Card>
                 <Card.Header>#<b>{index+1}</b></Card.Header>
                 <Card.Body>
                   <Card.Title>{data.firstname} {data.lastname} </Card.Title>
                   <Card.Text>
                       <p><b>Education:</b>{data.degree} &nbsp; {data.department} &nbsp;{data.university}</p>
                      <p><b>passed Out:</b> {data.batch}</p> 
                      <p><b>Contact:</b>{data.contact}</p>
                      <p><b>Email:</b>{data.email}</p>
                      <p><b>Role:</b>{data.role}</p>
                      <p><b>Applied on:</b>{data.appliedDate}</p>
           
           
           
           
                   </Card.Text>
                   <Button variant="danger" onClick={()=>{remove(index,id,data.email)}}>Reject</Button>
                   <Button variant="primary"  onClick={()=> setBox(!box)}>Schedule Interview</Button>  
{box?
<div className="datebox"><DateTimePicker onChange={(e)=>{setTime(e)}} value={time} format="dd-MM-y h:mm:ss a" />
<Button variant="primary"  onClick={()=> scheduleinterview(id,index,time,data.email)}>Set</Button>  
</div> 
    :""}
                 </Card.Body>
               </Card> :""}

     
        </div>
    )
}


