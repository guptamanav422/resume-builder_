import {useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./css/home.css";

let Home = () => {
  let user = useSelector((state) => state.user);
  let history = useHistory();
  return (
    <>
      {user ? "" : <Redirect to="/login" />}

      <div className="body">
        <div class="container">
          <div class="card">
            <div class="face face1">
              <div class="content">
                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" alt="."/>
                <h3>Resume Template</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p style={{color:"brown"}}>
                  WE have large variety of resume. that gurranty a job . Come on  build your resume and grow together
                </p>
                <p className="view-btn" onClick={()=>{
                  history.push("/resumeJsx/resumebase")
                }}>VIEW TEMPLATES</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" alt=""/>
                <h3>Portfolio Design</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p style={{color:"brown"}}>
                WE have large variety of resume. that gurranty a job . Come on  build your Portfolio and add value to your CV . lets showcase your
                skills and grow together
                </p>
                <p className="view-btn" onClick={()=>{
                  history.push("/portfolioJsx/portfolioBase")
                }}>VIEW TEMPLATES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
      style={{position: "fixed" ,right: "3rem" ,bottom: "10rem", height: "6rem", width: "6rem", borderRadius: "50%"}}
        className="btn-primary home-logout-btn"
        onClick={() => {
          auth.signOut();
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Home;
