
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {API} from "./App"
const formValidationSchema = yup.object({
    firstname: yup.string().required().min(5),
    lastname: yup.string().required(),
    age: yup.number().required().positive().integer(),
    number: yup.number().required("enter within ten"),
    email: yup.string().email(),
    qualification:yup.string().required(),
    degree: yup.string().required(),
    department: yup.string().required(),   
    university: yup.string().required(),    
    batch:yup.number().required().positive().integer(),
    type: yup.string().required(),
    role: yup.string().required(),
    CTC:  yup.number().required()
})
export function Signup(){
    const navigate= useNavigate();

    const Addcandidate = (values) =>{
      fetch(`${API}/candidate`,
      {method:"POST",body:JSON.stringify(values),
      headers:{"Content-Type": "application/json"},}).then(data => data.json()).then((response)=>{alert(response.acknowledged)})
    }
    
    const {handleSubmit,handleChange,touched,errors,handleBlur,values} = useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            age:"",
            number:"",
            email:"",
            qualification:"",
            degree:"",
            department:"",
            university:"",
            batch:"",
            type:"",
            role:"",
            CTC:"",        
        },
        validationSchema: formValidationSchema,
        onSubmit:(values) => {
          console.log("onSubmit ",values);
          Addcandidate(values);
        } 
      });

    return (
        <form onSubmit={handleSubmit} className='login-card'>
            <p>Personal Details</p>
<TextField name="firstname" 
type="name"
 label="First Name" 
 variant="outlined" 
 value={values.firstname} 
 onChange={handleChange} 
 onBlur= {handleBlur}
 error={touched.firstname && errors.firstname}
 helperText = {touched.firstname && errors.firstname? errors.firstname :""}
 />
 <TextField name="lastname" 
type="text"
 label="Last name"
 variant="outlined" 
 value={values.lastname} 
 onChange={handleChange} 
 onBlur= {handleBlur}
 error={touched.lastname && errors.lastname}
 helperText = {touched.lastname && errors.lastname? errors.lastname :""}
  />
  <TextField name="age" 
type="age"
 label="Age"
 variant="outlined" 
 value={values.age} 
 onChange={handleChange} 
 onBlur= {handleBlur}
 error={touched.age && errors.age}
 helperText = {touched.age && errors.age? errors.age :""} />
 <TextField name="number" 
type="number"
 label="contact number" 
 variant="outlined" 
 value={values.number} 
 onChange={handleChange} 
 onBlur= {handleBlur}
 error={touched.number && errors.number}
 helperText = {touched.number && errors.number? errors.number :""}/>
<TextField name="email" 
type="email"
 label="email"
 variant="outlined" 
 value={values.email} 
 onChange={handleChange} 
 onBlur= {handleBlur}
 error={touched.email && errors.email}
 helperText = {touched.email && errors.email? errors.email :""} />

   <p>Education Details</p>
  <div className='education'>
    <TextField name="qualification" 
type="text"
 label="Qualification" 
 variant="outlined" 
 value={values.qualification} 
 onChange={handleChange} 
 onBlur= {handleBlur}
 error={touched.qualification && errors.qualification}
 helperText = {touched.qualification && errors.qualification? errors.qualification :""}/>
    <TextField name="degree" 
type="text"
 label="Degree"
 variant="outlined" 
 value={values.degree} 
 onChange={handleChange} 
 onBlur= {handleBlur}
 error={touched.degree && errors.degree}
 helperText = {touched.degree && errors.degree? errors.degree :""} />
     <TextField name="department" 
type="text"
 label="Department" 
 variant="outlined" 
 value={values.department} 
 onChange={handleChange} 
 onBlur= {handleBlur}
 error={touched.department && errors.department}
 helperText = {touched.department && errors.department? errors.department :""}/>
     <TextField name="university" 
type="text"
 label="University" 
 variant="outlined" 
 value={values.university} 
 onChange={handleChange} 
 onBlur= {handleBlur}
 error={touched.university && errors.university}
 helperText = {touched.university && errors.university? errors.university :""}/>
    <TextField name="batch" 
type="year"
 label="Passedout Year" 
 variant="outlined" 
 value={values.batch} 
 onChange={handleChange} 
 onBlur= {handleBlur}
 error={touched.batch && errors.batch}
 helperText = {touched.batch && errors.batch? errors.batch :""}/>
  </div>
  <p>Job Details</p>
  <div className="job">
  <TextField name="type" 
type="text"
 label="type"
 variant="outlined" 
 value={values.type} 
 onChange={handleChange} 
 onBlur= {handleBlur}
 error={touched.type && errors.type}
 helperText = {touched.type && errors.type? errors.type :""} />
   <TextField name="role" 
type="text"
 label="role"
 variant="outlined" 
 value={values.role} 
 onChange={handleChange} 
 onBlur= {handleBlur}
 error={touched.role && errors.role}
 helperText = {touched.role && errors.role? errors.role :""} />
  <TextField name="CTC" 
type="text"
 label="Expected CTC" 
 variant="outlined" 
 value={values.CTC} 
 onChange={handleChange} 
 onBlur= {handleBlur}
 error={touched.CTC && errors.CTC}
 helperText = {touched.CTC && errors.CTC? errors.CTC :""}/>
  </div>

 
<Button variant="outlined"  type="submit">
        submit
      </Button>

            </form>
            
    )
}