import { useNavigate } from 'react-router-dom';
import "./home.css";


export function Home(){
    const navigate = useNavigate();
    localStorage.setItem("auth-token","");
    localStorage.setItem("email","");
    localStorage.setItem("user","");

    return (
      <section className="home-section">
        <div className="home-page">
          <div className="title-block">
            <h1 className="text">
              JOB <span>PORTAL SITE</span>
            </h1>
            <div class="typewriter">
              <h1>100+ Companies </h1>
              <h1> 100K+ Candidate</h1>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="button">
            <button type="button" onClick={() => navigate("/recruiter-login")}>
              {" "}
              <img
                height="75"
                width="100"
                src="https://icon-library.com/images/recruiter-icon/recruiter-icon-22.jpg"
                alt="admin"
              />
              <span>Recruiter</span>
            </button>
            <button type="button" onClick={() => navigate("/user-login")}>
              <img
                height="75"
                width="100"
                src="https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/find-job-icon.png"
                alt="candiate"
              />
              <span>candidate</span>
            </button>
          </div>
        </div>
      </section>
    );
}