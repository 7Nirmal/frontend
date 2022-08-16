// import "./Logup.css";
import {useFormik} from 'formik';
import{useNavigate} from "react-router-dom";
import * as yup from 'yup';
import {API} from "./App"
import swal from 'sweetalert';
const formValidationSchema = yup.object({
  email:yup.string().email().required('enter email'),
  password: yup.string().required('No password provided.').min(8) ,
confirmpassword: yup.string() .oneOf([yup.ref('password'), null], 'Passwords must match')
}
)
export function Logup(){
  const navigate = useNavigate();
  const getuser = (values) =>{
fetch(`${API}/user/logup`,{method:"POST",body:JSON.stringify(values), headers:{"Content-Type": "application/json"},})
.then(data=>data.json()).then((response)=>{
  if(response.message){
    swal(response.message);
  }
  else{
    swal({
      title: "Sucess",
      text: "You have registered successfully",
      icon: "success",
      button: "ok",
    });
navigate("/user-login");
  }
})

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

    return(
      <div className="center">
      <h1>Logup</h1>
      <form onSubmit={handleSubmit}>
          <div className="txt_field">
              <input type="email" name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && errors.email}
              />
              <span></span>
              <label>Enter email</label>
              <p>{ touched.email && errors.email ? errors.email: ""}</p>

          </div>
          <div className="txt_field">
              <input type="password" name="password"
               onChange={handleChange}
               onBlur={handleBlur}
               error={touched.password && errors.password}/>
              <span></span>
              <label>Password</label>
              <p>{ touched.password && errors.password? errors.password: ""}</p>
          </div>
          <div className="txt_field">
              <input type="password" name="confirmpassword"
               onChange={handleChange}
               onBlur={handleBlur}
               error={touched.confirmpassword && errors.confirmpassword}/>
              <span></span>
              <label>Confirm Password</label>
              <p>{ touched.confirmpassword && errors.confirmpassword ? errors.confirmpassword: ""}</p>

          </div>
          <button type="Submit" className="login-btn"> Submit</button>
          <div className="signup_link">
          </div>
      </form>
  </div>
    )
}




