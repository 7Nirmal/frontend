import "./Admindashboard.css";
import Table from 'react-bootstrap/Table';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useState,useEffect} from "react";
import{API} from "../App";
import {Header} from "./AppbarRecruiter";
import swal from 'sweetalert';
import { useNavigate,Link } from "react-router-dom";


export function JobsDashboard(){
const nav = useNavigate();
    const[jobdata,setJobdata] = useState([]);
    const getjobdata = () =>{
        let token = localStorage.getItem("auth-token");
        //console.log(token);
        fetch(`${API}/jobdetails/recruiter`,{headers:{"x-auth-token":token}})
        .then(data =>data.json()).then((result)=>setJobdata(result))
    }

    useEffect(()=>{getjobdata()},[]);

    const Deletejob = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this job!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
              fetch(`${API}/jobdetails/${id}`, {method:"DELETE",})
              .then((data) => data.json()).then(()=>getjobdata())
            } else {
              swal("your file will not be deleted");
            }
          });

      
    }

return(
    <div>
<Header/>
<div className='admin-dashboard'>
<Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>company</th>
                  <th>position</th>
                  <th>Candidate</th>
                  <th>do</th>
                </tr>
              </thead>
    {jobdata.map((job,index)=><tbody>
                <tr>
                  <td>{index+1}</td>
                  <td>{job.company}</td>
                  <td>{job.position}</td>
                  <td><Link to={`/viewcandidates/${job._id}`}>View candidates</Link></td>
                  <td><EditIcon onClick = {()=>nav(`/editjob/${job._id}`)} /> <DeleteIcon onClick={()=>{Deletejob(job._id)}}/></td>
                </tr>
              </tbody>)}

              </Table>
    

    </div>
</div>
)
    
}


