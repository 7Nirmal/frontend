import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';


export function Home(){
    const navigate = useNavigate();
    localStorage.setItem("auth-token","");
    return (
        <div className='home-page'>
  <h1>JOB PORTAL SITE</h1>
            <p>For all Your job Needs</p>
            <div className="button">
            <button type="button" onClick = {()=>navigate("/recruiter-login")}> <img height ="75" width="100"  src="https://icon-library.com/images/recruiter-icon/recruiter-icon-22.jpg" alt="admin"/>
            <div>Recruiter</div>
            </button>  
            <button type="button"  onClick = {()=>navigate("/user-login")}><img height ="75" width="100"  src="https://thumbs.dreamstime.com/b/applicant-business-find-search-candidate-icon-vector-illustration-applicant-business-find-search-candidate-icon-flat-style-175249378.jpg" alt="candiate"/>
            <div>candidate</div>
            </button>  
            </div>
            <div className="carousel">
            <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F444195%2Fdreamjobgi.jpeg&w=700&op=resize"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.pridestafffinancial.com/wp-content/uploads/sites/2/2019/04/Most20Attractive20Employee20Benefits20Beyond20Salary.jpg"
          alt="First slide"
        />
    
      </Carousel.Item>
      </Carousel>
      </div>
        </div>
    )
}