import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {API} from "./App"



export function Recruiterlogin(){
    const navigate= useNavigate();
    const[username,setUsername] =useState([]);
    const[password,setPassword] = useState([]);
    const[token,setToken] = useState();
    const LoginCheck = (username,password) => {
        const userdata = {
            username:username,
            password:password
        }
        console.log(userdata);  
        fetch(`${API}/user/login`,{method:"POST",body:JSON.stringify(userdata),headers:{"content-type": "application/json"}},)    
        .then(data => data.json())
        .then((response) => {alert(response.message);setToken(response.token);})
    }

    return (
    
    <div className='login-card'>
        <p>Login</p>
<TextField name="username" 
label="Enter registered emailId" 
type="text"
onChange={(event)=>{setUsername(event.target.value)}}   />
<TextField
name="password"
type="password"
placeholder="password"
label="Password"
onChange={(event)=>{setPassword(event.target.value)}}
/>
<Button variant="contained" color="secondary" onClick = {()=> { LoginCheck(username,password)}}>
    submit
  </Button>
  <Button onClick={()=> navigate(`/recruiter-logup`)}>Not a user? click here to Sign Up!</Button>
        </div>
      
    )
}