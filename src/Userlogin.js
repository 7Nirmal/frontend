import {useState} from 'react';
import { useNavigate,Link } from 'react-router-dom';
import {API} from "./App"
import "./Userlogin.css";
import swal from 'sweetalert';

//yup validation



export function Userlogin(){
    const navigate= useNavigate();
    const[email,setEmail] =useState([]);
    const[password,setPassword] = useState([]);


    const LoginCheck = (email,password) => {
        const userdata = {
            email:email,
            password:password
        }
        console.log(userdata);  
        fetch(`${API}/user/login`,{method:"POST",body:JSON.stringify(userdata),headers:{"content-type": "application/json"}},)    
        .then(data => data.json())
        .then((response) => {console.log(response); 
			localStorage.setItem("auth-token",response.token);
			localStorage.setItem("email",response.email);

			if(response.token){
				swal("sucess!", "You have signed in!", "success");
				navigate("/apply")
			}
			else{
				swal(response.message);
			}
		})
		
    }
   
    return (
		<div>
		<div className="center">
		<h1>Login</h1>
		
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
				Not a Member ? <Link to="/user-logup">Signup</Link>
			</div>
	
	</div>
	</div>
	)
    
}