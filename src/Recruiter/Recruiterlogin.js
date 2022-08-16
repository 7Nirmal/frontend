import {useState} from 'react';
import { useNavigate,Link } from 'react-router-dom';
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
            localStorage.setItem("auth-token",response.token);
        if(response.token){
            navigate("/createjob")
        }})
            
    }

    return (
    
        <div>
		<div className="center">
		<h1>Recruiter Login</h1>
		
			<div className="txt_field">
				<input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
				<span></span>
				<label>Enter your email</label>
			</div>
			<div className="txt_field">
				<input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
				<span></span>
				<label>Password</label>
			</div>
			<div className="pass">Forget Password?</div>
			<button  className="login-btn" onClick={()=>LoginCheck(email,password)}> Submit</button>
			<div className="signup_link">
				Not a Member ? <Link to="/recruiter-logup">Signup</Link>
			</div>
	
	</div>
	</div>
      
    )
}