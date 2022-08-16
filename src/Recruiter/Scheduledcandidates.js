import {Header} from "./AppbarRecruiter";
import {useState,useEffect} from "react";
import {API} from "../App";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export function ScheduledCandidate(){

    const[data,Setdata] = useState([]);

    const getdata = () =>{
        fetch(`${API}/scheduledcandidates`).then((data)=>data.json()).then(result => Setdata(result));
    }

    useEffect(()=>{getdata()},[])
    return (
        <div>
            <Header/>
            {data.map((entry,index)=><Selectedcard entry={entry} key={index} index={index}/>)}
        </div>

    )
}


function Selectedcard({entry,index}){


    return(
        <div>
              <Card>
                 <Card.Header>#<b>{index+1}</b></Card.Header>
                 <Card.Body>
                   {entry.appliedcandidates.map((job,index)=><div key={index}>
                                       <Card.Title>{job.firstname} {job.lastname}</Card.Title>
                                        <Card.Title>Applied for: {entry.position} </Card.Title>
                                        <Card.Title>  {entry.company} </Card.Title>
                                        <Card.Title>  {job.on} </Card.Title>

                                       </div>
                   )}
                 </Card.Body>
               </Card> 

        </div>
    )
}