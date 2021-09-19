import "../portfolioCss/portfolio2.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase";
let Portfolio2Ui = () => {
   

    let { rid } = useParams();
  let [previewData, setPreviewData] = useState(null);
  useEffect(() => {
    firestore
      .collection("resume")
      .doc(rid)
      .get()
      .then((doc) => {
        let data = doc.data();
        setPreviewData(data);
      });
  }, []) 

  // console.log(previewData);
  // let detail = useSelector((state) => state.details);
  if(previewData){
    
  }
  let { fname, oneWord } = previewData?previewData.details:{fname:"", oneWord:""};
  // let img = useSelector((state) => state.userImage);
  // let social = useSelector((state) => state.social);

  let img=previewData?previewData.img:"";
  let social=previewData?previewData.social:"";
  let { email, phone, city, state, description } = previewData?previewData.details:{tech:"", email:"",phone:"", city:"", state:"", age:"", birthday:"", description:"" };
    // useSelector((state) => state.details);

  // let edudetails = useSelector((state) => state.education);
  let {
    schoolName10,
    schoolMarks10,
    schoolName12,
    schoolMarks12,
    CollegeName,
    degree,
    collegeMarks,
    skills,
  } = previewData?previewData.edudetails:{schoolName10:"", schoolMarks10:"", schoolName12:"", schoolMarks12:"",CollegeName:"",degree:"",collegeMarks:"",skills:[],currCompany:"",courseWork:""};

  let { projects, professionalExperience } =previewData?previewData.resumeDetail:{ projects:[
    {
        name:"",
        timePeriod:"",
        technology:"",
        description:""
    },
    {
        name:"",
        timePeriod:"",
        technology:"",
        description:""
    }
],
professionalExperience:{
    position:"",
    timePeriod:"",
    companyName:"",
    technology:"",
    description:""
},};


  window.addEventListener("DOMContentLoaded", (event) => {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector("#sideNav");
    if (sideNav) {
      // eslint-disable-next-line no-undef
      new bootstrap.ScrollSpy(document.body, {
        target: "#sideNav",
        offset: 74,
      });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map((responsiveNavItem) => {
      responsiveNavItem.addEventListener("click", () => {
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click();
        }
      });
      return 1;
    });
  });
  return (
    <div >
      <div id="page-top">
        {/* <!-- Navigation--> */}
        <nav
          class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
        >
          <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <span class="d-block d-lg-none" style={{color:"white"}}>{fname}</span>
            <span class="d-none d-lg-block">
              <img
                class="img-fluid img-profile rounded-circle mx-auto mb-2"
                src={img}
                alt="..."
              />
            </span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav">
            
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#about" >
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#education">
                  Education
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#skills">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#experience">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- Page Content--> */}
        <div class="container-fluid p-0">
          {/* <!-- About--> */}
          <section class="resume-section" id="about" style={{display:"flex" ,justifyContent:"center", alignItems:"center"}}>
            <div class="resume-section-content">
              <h1 class="mb-0">
                <span class="text-primary" style={{color:"white", fontSize:"4rem"}} >{fname}</span>
                <p style={{color:"white" , fontSize:"1rem"}}  >{oneWord}</p>
              </h1>
              <div class="subheading mb-5" style={{color:"white" , fontSize:"1rem"}} >
               {`${city}  . ${state}   ${phone} .`}
                <a href="mailto:name@email.com" style={{color:"white"}}>{email}</a>
              </div>
              <p class="lead mb-5" style={{color:"white"}}>
                {description}
              </p>

              <div class="social-icons">
              {Object.keys(social).map(function (keyName, keyIndex) {
                return (
                  <a
                    href={social[keyName]}
                    rel="noreferrer"
                    target="_blank"
                    class="twitter"
                  >
                    {" "}
                    {keyName}
                  </a>
                );
              })}
              </div>
            </div>
          </section>
          <hr class="m-0" />
          {/* <!-- Experience--> */}
          <hr class="m-0" />
          {/* <!-- Education--> */}
          <section class="resume-section" id="education">
            <div class="resume-section-content">
              <h2 class="mb-5" style={{color:"white"}} >Education</h2>
              <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="flex-grow-1">
                  <h3 class="mb-0" style={{color:"white"}} >Class 10</h3>
                  <div class="subheading mb-3" style={{color:"white"}} >{schoolName10} <span  style={{color:"white"}}> &nbsp; &nbsp; &nbsp; &nbsp; {schoolMarks10}</span></div>
                </div>
              </div>
              <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="flex-grow-1">
                  <h3 class="mb-0" style={{color:"white"}}>Class 12</h3>
                  <div class="subheading mb-3" style={{color:"white"}} >{schoolName12} <span  style={{color:"white"}}> &nbsp; &nbsp; &nbsp; &nbsp; {schoolMarks12}</span></div>
                </div>
              </div>
              <div class="d-flex flex-column flex-md-row justify-content-between">
                <div class="flex-grow-1">
                  <h3 class="mb-0" style={{color:"white"}}>College</h3>
                  <div class="subheading mb-3" style={{color:"white"}}>{CollegeName}</div>
                  <div class="subheading mb-3" style={{color:"white"}}>{degree}</div>
                  <p style={{color:"white"}}>{collegeMarks}</p>
                </div>
              </div>
            </div>
          </section>
          <section class="resume-section" id="experience" style={{color:"white"}}>
            <div class="resume-section-content">
              <h2 class="mb-5" style={{color:"white"}}>Projects</h2>
              <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="flex-grow-1">
                  <h3 class="mb-0">{projects[0].name}</h3>
                  <div class="subheading mb-3">{projects[0].technology}</div>
                  <p>
                  <ul>
                    {projects[0].description.split(".").map((st) => {
                      return <li> {st}</li>;
                    })}
                  </ul>
                  </p>
                </div>
                <div class="flex-shrink-0">
                  <span class="text-primary">{projects[0].timePeriod}</span>
                </div>
              </div>
              <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="flex-grow-1">
                  <h3 class="mb-0">{projects[1].name}</h3>
                  <div class="subheading mb-3">{projects[1].technology}</div>
                  <p>
                  <ul>
                    {projects[1].description.split(".").map((st) => {
                      return <li> {st}</li>;
                    })}
                  </ul>
                  </p>
                </div>
                <div class="flex-shrink-0">
                  <span class="text-primary">{projects[1].timePeriod}</span>
                </div>
              </div>
            </div>
            {professionalExperience.position !== "" ? (
                <div class="resume-section-content" style={{color:"white"}}>
              <h2 class="mb-5">Professional Experience</h2>
              <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="flex-grow-1">
                  <h3 class="mb-0">{professionalExperience.position}</h3>
                  <div class="subheading mb-3">{professionalExperience.companyName}</div>
                  <div class="subheading mb-3">{professionalExperience.technology}</div>
                  <p>
                  <ul>
                    {professionalExperience.description.split(".").map((st) => {
                      return <li> {st}</li>;
                    })}
                  </ul>
                  </p>
                </div>
                <div class="flex-shrink-0">
                  <span class="text-primary">{professionalExperience.timePeriod}</span>
                </div>
              </div>
                  </div>
                ) : (
                  ""
                )}
          </section>
          <hr class="m-0" />
          {/* <!-- Skills--> */}
          <section class="resume-section" id="skills">
            <div class="resume-section-content">
              <h2 class="mb-5" style={{color:"white"}}>Skills</h2>
              <ul class="list-inline dev-icons">
                {
                    skills.map((el)=>{
                    return <li>
                    <button type="button" class="btn btn-dark m-2">{el}</button>
                        </li>
                    })
                }
              </ul>
            </div>
          </section>


          <hr class="m-0" />
          <hr class="m-0" />
          {/* <!-- Contact--> */}
          <section id="contact" class="contact">
          <div class="container">
            <div class="section-title">
              <h2 style={{color:"white"}}>Contact</h2>
              <p style={{color:"white"}}>{description}</p>
            </div>

            <div class="row" data-aos="fade-in" style={{width:"100%"}}>
              <div class="col-lg-5 d-flex align-items-stretch" style={{width:"100%"}}>
                <div class="info">
                  <div class="address">
                    <i class="bi bi-geo-alt">
                      {" "}
                      <span class="material-icons-outlined" style={{color:"black"}}>
                        location_on
                      </span>{" "}
                    </i>
                    <h4 style={{color:"black"}}>Location:</h4>
                    <p style={{color:"black"}}>
                      {city},{state}
                    </p>
                  </div>

                  <div class="email">
                    <i class="bi bi-envelope">
                      {" "}
                      <span class="material-icons-outlined" style={{color:"black"}}>email</span>
                    </i>
                    <h4 style={{color:"black"}}>Email:</h4>
                    <p style={{color:"black"}}>{email}</p>
                  </div>

                  <div class="phone">
                    <i class="bi bi-phone">
                      {" "}
                      <span class="material-icons-outlined" style={{color:"black"}}>
                        phone_android
                      </span>{" "}
                    </i>
                    <h4 style={{color:"black"}}>Call:</h4>
                    <p style={{color:"black"}}>{phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </div>
    </div >
  );
};

export default Portfolio2Ui;
