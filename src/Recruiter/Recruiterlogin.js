import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {API} from "../App"



export function Recruiterlogin(){
    const navigate= useNavigate();
    const[email,setEmail] =useState([]);
    const[password,setPassword] = useState([]);
    const LoginCheck = (email,password) => {
        const userdata = {
            email:email,
            password:password
        }
        console.log(userdata);  
        fetch(`${API}/recruiter/login`,{method:"POST",body:JSON.stringify(userdata),headers:{"content-type": "application/json"}},)    
        .then(data => data.json())
        .then((response) => {alert(response.message);
            localStorage.setItem("auth-token",response.token)})
            .then(()=>navigate("/createjob"))
    }

    return (
    
    <div className='login-card'>
        <p>Login</p>
<TextField name="username" 
label="Enter registered email" 
type="email"
onChange={(event)=>{setEmail(event.target.value)}}   />
<TextField
name="password"
type="password"
placeholder="password"
label="Password"
onChange={(event)=>{setPassword(event.target.value)}}
/>
<Button variant="contained" color="secondary" onClick = {()=> { LoginCheck(email,password)}}>
    submit
  </Button>
  <Button onClick={()=> navigate(`/recruiter-logup`)}>Not a user? click here to Sign Up!</Button>
        </div>
      
    )
}