import {API} from "./App";
import { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';
import{AppBarUser} from "./AppbarUser";




export function Appliedjob(){
const user = JSON.parse(localStorage.getItem('user'));
const id = user._id
const[job,setJob] = useState([]);
const getuserjob = (id) => {
    fetch(`${API}/userjobs/${id}`).then((data)=>data.json().then((result)=>{setJob(result)}));
}
    useEffect(()=>getuserjob(id),[])
    return(
        <div>
            <AppBarUser/>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>company</th>
                  <th>position</th>
                  <th>Location</th>
                  <th>Status</th>
                </tr>
              </thead>
    { job.map((data,index)=><tbody>
                <tr>
                  <td>{index+1}</td>
                  <td>{data.company}</td>
                  <td>{data.position}</td>
                  <td>{data.location}</td>
                  <td>{data.status}</td>

                </tr>
              </tbody>)} 

              </Table>
        </div>
    )
}