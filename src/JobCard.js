import PlaceIcon from '@mui/icons-material/Place';
import WorkIcon from '@mui/icons-material/Work';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddBoxIcon from '@mui/icons-material/AddBox';
import HideSourceIcon from '@mui/icons-material/HideSource';
export function JobCard({job,deletejob}){

    return(
        <div className="jobcard">
            <h2><b>{job.position}</b></h2>
            <p>{job.company}</p>
            <p><PlaceIcon/>{job.location}</p>
            <p><WorkIcon/>{job.experience}</p>
          {job.CTC?<p><CurrencyRupeeIcon/>{job.CTC}</p>:""}  
            <p>{job.skills}</p>
            <div className="icons">
            <p>Apply<AddBoxIcon/></p>
            <p onClick={()=>deletejob(job._id)}>not intrested<HideSourceIcon/></p>
         </div>
        </div>
    )
}
