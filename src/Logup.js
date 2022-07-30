import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {API} from "./App"
const formValidationSchema = yup.object({
    username:yup.string().required('enter username').min(8),
    password: yup.string().required('No password provided.').min(8) ,
confirmpassword: yup.string() .oneOf([yup.ref('password'), null], 'Passwords must match')
}
)
export function Logup(){
  const getuser = (values) =>{
fetch(`${API}/user/logup`,{method:"POST",body:JSON.stringify(values), headers:{"Content-Type": "application/json"},})
.then(data=>data.json()).then((response)=>{alert(response.message)})

  }
    const {handleSubmit,handleChange,touched,errors,handleBlur,values} = useFormik({
        initialValues:{
            username:"",
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
        <form onSubmit={handleSubmit} className="login-card">
            <TextField name="username" 
type="name"
 label="User Name" 
 variant="outlined" 
 value={values.firstname} 
 onChange={handleChange} 
 onBlur= {handleBlur}
 error={touched.username && errors.username}
 helperText = {touched.username && errors.username? errors.username :""}
 />
 <TextField
    name="password"
    type="password"
    placeholder="password"
    label="Password"
    variant="outlined" 
    value={values.password} 
    onChange={handleChange} 
    onBlur= {handleBlur}
    error={touched.password && errors.password}
    helperText = {touched.password && errors.password? errors.password :""}
  />
  <TextField
    name="confirmpassword"
    type="password"
    placeholder="password"
    label="Reenter-Password"
    variant="outlined" 
    value={values.confirmpassword} 
    onChange={handleChange} 
    onBlur= {handleBlur}
    error={touched.confirmpassword && errors.confirmpassword}
    helperText = {touched.confirmpassword && errors.confirmpassword? errors.confirmpassword :""}
  />
  <Button variant="outlined"  type="submit">
        submit
      </Button>
        </form>
    )
}




