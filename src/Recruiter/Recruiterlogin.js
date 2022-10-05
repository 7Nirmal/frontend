import {useState} from 'react';
import { useNavigate,Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {API} from "../App";
import swal from 'sweetalert';




export function Recruiterlogin(){
    const navigate= useNavigate();
    const[email,setEmail] =useState([]);
    const[password,setPassword] = useState([]);

    const handledemo = () =>{
		setEmail("admin123@gmail.com");
		setPassword("admin@123");
	}

    const LoginCheck = (email,password) => {
        const userdata = {
            email:email,
            password:password
        }
        console.log(userdata);  
        fetch(`${API}/recruiter/login`,{method:"POST",body:JSON.stringify(userdata),headers:{"content-type": "application/json"}},)    
        .then(data => data.json())
        .then((response) => {	swal("sucess!", "You have signed in!", "success");
            localStorage.setItem("auth-token",response.token);
        if(response.token){
            navigate("/createjob")
        }
    else{
        swal(response.message);
    }})
            
    }

    return (
    
        <div>
		<div className="center">
		<h1>Recruiter Login</h1>
		
			<div className="txt_field">
				<input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
				<span></span>
				<label>Enter your email</label>
			</div>
			<div className="txt_field">
				<input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
				<span></span>
				<label>Password</label>
			</div>
			{/* <div className="pass">Forget Password?</div> */}
			<button  className="login-btn" onClick={()=>LoginCheck(email,password)}> Submit</button>
			<div className="signup_link">
				Not a Member ? <Link to="/recruiter-logup">Signup</Link>
			</div>
			<button className="demo-btn" onClick={handledemo} style={{"position":"relative","left":"30%"}}>Demo Credentials</button>

	</div>
	</div>
      
    )
}