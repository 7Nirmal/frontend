import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {API} from "./App"
import { Jobdetails } from './JobDetail';
import {useFormik} from 'formik';
import * as yup from 'yup';
import "./Userlogin.css";

//yup validation
const formValidationSchema = yup.object({
    email:yup.string().email().required('enter email').min(8),
    password: yup.string().required('No password provided.').min(8) ,
confirmpassword: yup.string() .oneOf([yup.ref('password'), null], 'Passwords must match')
}
)


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
        .then((response) => {alert(response.message); 
			localStorage.setItem("auth-token",response.token);})
		
    }
    const getuser = (values) =>{
        fetch(`${API}/user/logup`,{method:"POST",body:JSON.stringify(values), headers:{"Content-Type": "application/json"},})
        .then(data=>data.json()).then((response)=>{alert(response.message)})
        
          }
            const {handleSubmit,handleChange,touched,errors,handleBlur,values} = useFormik({
                initialValues:{
                email:"",
                password:"",
                confirmpassword:""
                },
                validationSchema: formValidationSchema,
                onSubmit:(values) => {
                    console.log("onSubmit ",values);
                    getuser(values);
                  } 
            })





    return (
<div className="section">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center py-5">
					<div className="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
			          	<input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label htmlFor="reg-log"></label>
						<div className="card-3d-wrap mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Log In</h4>
											<div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" 
                                                onChange={(e)=> setEmail(e.target.value)}/>
												<i className="input-icon uil uil-at"></i>
											</div>
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass"
                                                onChange={(e)=> setPassword(e.target.value)} />
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<button onClick={()=>LoginCheck(email,password)} className="btn mt-4">submit</button>
                            				<p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
				      					</div>
			      					</div>
			      				</div>
                              
								<div className="card-back">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Sign Up</h4>
											<div className="form-group">

												<i className="input-icon uil uil-user"></i>
											</div>
											<div className="form-group mt-2">
												<input type="email" name="email" className="form-style" placeholder="Your Email" id="logemail"
                                                  onChange= {handleChange }  onBlur= {handleBlur}
                                                  error={touched.email && errors.email}/>
                                                  <p className="error-message">{touched.email && errors.email? errors.email :""}</p>
												<i className="input-icon uil uil-at"></i>
											</div>
											<div className="form-group mt-2">
												<input type="password" name="password" className="form-style" placeholder="Your Password" id="logpass" 
                                                      onChange= {handleChange }  onBlur= {handleBlur}
                                                      error={touched.password && errors.password}
                                                />
                                                 <p className="error-message">{touched.password && errors.password? errors.password :""}</p>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
                                            <div className="form-group mt-2">
												<input type="password" name="confirmpassword" className="form-style" placeholder="Your Password" id="logpass" 
                                                      onChange= {handleChange }  onBlur= {handleBlur}
                                                      error={touched.confirmpassword && errors.confirmpassword}
                                                />
                                                 <p className="error-message">{touched.confirmpassword && errors.confirmpassword? errors.confirmpassword :""}</p>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<button type="submit"  onClick={handleSubmit}className="btn mt-4">submit</button>
				      					</div>
			      					</div>
			      				</div>
            
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>


    )
}