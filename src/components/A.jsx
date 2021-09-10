import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router";
import "./css/a.css";
import { firestore } from "../firebase";

let A = (props) => {

  // console.log(props.rid);
  let rid=props.id;

  let [previewData, setPreviewData] = useState(null);
  console.log(rid);
  useEffect(() => {
    firestore
      .collection("resume")
      .doc(rid)
      .get()
      .then((doc) => {
        let data = doc.data();
        setPreviewData(data);
        console.log(previewData);
      });
  }, []);

  // console.log(previewData);
  // let detail = useSelector((state) => state.details);
  if(previewData){
    
  }
  let { fname, oneWord } = previewData?previewData.details:{fname:"", oneWord:""};
  // let img = useSelector((state) => state.userImage);
  // let social = useSelector((state) => state.social);

  let img=previewData?previewData.img:"";
  let social=previewData?previewData.social:"";
  let { tech, email, phone, city, state, age, birthday, description } = previewData?previewData.details:{tech:"", email:"",phone:"", city:"", state:"", age:"", birthday:"", description:"" };
    // useSelector((state) => state.details);

  // let edudetails = useSelector((state) => state.education);
  let {
    schoolName10,
    schoolMarks10,
    schoolName12,
    schoolMarks12,
    CollegeName,
    Degree,
    collegeMarks,
    skills,
    currCompany,
    courseWork,
  } = previewData?previewData.edudetails:{schoolName10:"", schoolMarks10:"", schoolName12:"", schoolMarks12:"",CollegeName:"",Degree:"",collegeMarks:"",skills:"",currCompany:"",courseWork:""};

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

  // console.log(edudetails);
  // let { id } = useSelector((state) => state.saveState);
  // let details = useSelector((state) => state.details);
  // let code = useSelector((state) => state.template);
  // let { uid } = useSelector((state) => state.user);

  window.addEventListener("scroll", function () {
    if(this.window.innerWidth>=1055){
      let ele = this.document.querySelector(".mobile-nav-toggle");
    let header = document.querySelector("header");
    if (!ele.classList.contains("bi-list")) {
      ele.classList.remove("bi-x");
      ele.classList.add("bi-list");
      header.classList.add("mobile-nav-active");
      header.style.left = "-300px";
    }
    }
  });

  return (
    <>
      <i
        class="bi bi-list mobile-nav-toggle d-xl-none"
        onClick={(e) => {
          let ele = e.currentTarget;
          let header = document.querySelector("header");
          if (ele.classList.contains("bi-list")) {
            ele.classList.remove("bi-list");
            ele.classList.add("bi-x");
            header.classList.remove("mobile-nav-active");
            header.style.left = "0px";
          } else {
            ele.classList.remove("bi-x");
            ele.classList.add("bi-list");
            header.classList.add("mobile-nav-active");
            header.style.left = "-300px";
          }
        }}
      >
        {" "}
        <span class="material-icons-outlined">indeterminate_check_box</span>
      </i>
      {/* <!-- ======= Header ======= --> */}
      <header id="header">
        <div class="d-flex flex-column">
          <div class="profile">
            <img src={img} alt="." class="img-fluid rounded-circle" />
            <h1 class="text-light">
              <a href="index.html">{fname}</a>
            </h1>
            <div class="social-links mt-3 text-center">
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
              {/* <a href="#" class ="twitter"><i class ="bx bxl-twitter"></i></a>
                        <a href="#" class ="facebook"><i class ="bx bxl-facebook"></i></a>
                        <a href="#" class ="instagram"><i class ="bx bxl-instagram"></i></a>
                        <a href="#" class ="google-plus"><i class ="bx bxl-skype"></i></a>
                        <a href="#" class ="linkedin"><i class ="bx bxl-linkedin"></i></a> */}
            </div>
          </div>

          {/* <!-- .nav-menu --> */}
          <nav id="navbar" class="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" class="nav-link scrollto active">
                  <i class="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" class="nav-link scrollto">
                  <i class="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#skills" class="nav-link scrollto">
                  <i class="bx bx-book-content"></i> <span>Education </span>
                </a>
              </li>
              <li>
                <a href="#resume" class="nav-link scrollto">
                  <i class="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#contact" class="nav-link scrollto">
                  <i class="bx bx-envelope"></i> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* <!-- End Header --> */}

      {/* <!-- ======= Hero Section ======= --> */}
      <section
        id="hero"
        class="d-flex flex-column justify-content-center align-items-center"
        style={{ background: `url(${img}) top center`, height: "91vh" }}
      >
        <div class="hero-container" data-aos="fade-in">
          <h1>{fname}</h1>
          <p>I'm {oneWord}</p>
        </div>
      </section>
      {/* <!-- End Hero --> */}
      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" class="about" style={{ margin: "2rem" }}>
          <div class="container">
            <div class="section-title">
              <h2>Personal Details</h2>
              <h2>{fname}</h2>
              <p>{description}</p>
            </div>

            <div class="row">
              <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>&amp; {tech}</h3>
                <p class="fst-italic">{description}</p>
                <div class="row">
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Birthday:</strong> <span>{birthday}</span>
                      </li>
                      {/* <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li> */}
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Phone:</strong> <span>{phone}</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>City:</strong>{" "}
                        <span>
                          {city},{state}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Age:</strong> <span>{age}</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Degree:</strong> <span>{Degree}</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>PhEmailone:</strong> <span>{email}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* education section  */}
        <section id="skills" class="about">
          <div class="container">
            <div class="section-title">
              <h2>Education Section</h2>
            </div>

            <div class="row">
              <div class="col-lg-4">
                <img src={img} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>&amp; {tech}</h3>
                <p class="fst-italic">{description}</p>
                <div class="row">
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>SchoolName Class-10:</strong>{" "}
                        <span>{schoolName10}</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>schoolMarks class-10</strong>{" "}
                        <span>{schoolMarks10}</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>SchoolName Class-12:</strong>{" "}
                        <span>{schoolName12}</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>schoolMarks class-12:</strong>{" "}
                        <span>{schoolMarks12}</span>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>CollegeName:</strong> <span>{CollegeName}</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Degree:</strong> <span>{Degree}</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>College-Marks:</strong>{" "}
                        <span>{collegeMarks}</span>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Skills:</strong> <span>{skills}</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>currCompany/student:</strong>{" "}
                        <span>{currCompany}</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>CourseWork:</strong> <span>{courseWork}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= Resume Section ======= --> */}
        <section id="resume" class="resume" style={{ marginTop: "2rem" }}>
          <div class="container">
            <div class="section-title">
              <h2>Resume</h2>
            </div>

            <div class="row">
              <div class="col-lg-6" data-aos="fade-up">
                <h3 class="resume-title">Sumary</h3>
                <div class="resume-item pb-0">
                  <h4>{fname}</h4>
                  <p>
                    <em>{description}</em>
                  </p>
                  <ul>
                    <li>
                      {city},{state}
                    </li>
                    <li>{phone}</li>
                    <li>{email}</li>
                  </ul>
                </div>

                <h3 class="resume-title">Education</h3>
                <div class="resume-item">
                  <h4>{projects[0].name}</h4>
                  <h5>{projects[0].timePeriod}</h5>
                  <p>
                    <em>{projects[0].technology}</em>
                  </p>
                  <ul>
                    {projects[0].description.split(".").map((st) => {
                      return <li> {st}</li>;
                    })}
                  </ul>
                </div>
                <div class="resume-item">
                  <h4>{projects[1].name}</h4>
                  <h5>{projects[1].timePeriod}</h5>
                  <p>
                    <em>{projects[1].technology}</em>
                  </p>
                  {/* <p>{projects[1].description}</p> */}
                  <ul>
                    {projects[1].description.split(".").map((st) => {
                      return <li> {st}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                {professionalExperience.position !== "" ? (
                  <div>
                    {" "}
                    <h3 class="resume-title"> Professional Experience</h3>
                    <div class="resume-item">
                      <h4> {professionalExperience.position}</h4>
                      <h5> {professionalExperience.timePeriod}</h5>
                      <h5> {professionalExperience.companyName}</h5>
                      <p>
                        <em>{professionalExperience.technology}</em>
                      </p>
                      <ul>
                        {professionalExperience.description
                          .split(".")
                          .map((st) => {
                            return <li> {st}</li>;
                          })}
                      </ul>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </section>

        {/* <!-- End Resume Section --> */}

        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" class="contact">
          <div class="container">
            <div class="section-title">
              <h2>Contact</h2>
              <p>{description}</p>
            </div>

            <div class="row" data-aos="fade-in">
              <div class="col-lg-5 d-flex align-items-stretch">
                <div class="info">
                  <div class="address">
                    <i class="bi bi-geo-alt">
                      {" "}
                      <span class="material-icons-outlined">
                        location_on
                      </span>{" "}
                    </i>
                    <h4>Location:</h4>
                    <p>
                      {city},{state}
                    </p>
                  </div>

                  <div class="email">
                    <i class="bi bi-envelope">
                      {" "}
                      <span class="material-icons-outlined">email</span>
                    </i>
                    <h4>Email:</h4>
                    <p>{email}</p>
                  </div>

                  <div class="phone">
                    <i class="bi bi-phone">
                      {" "}
                      <span class="material-icons-outlined">
                        phone_android
                      </span>{" "}
                    </i>
                    <h4>Call:</h4>
                    <p>{phone}</p>
                  </div>

                  {/* <iframe title="unique" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style={{"border:0; width: 100%; height: 290px"}} allowfullscreen></iframe> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Contact Section --> */}
      </main>
      {/* <!-- End #main --> */}

      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div class="container">
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>@ Manav Gupta</span>
            </strong>
          </div>
        </div>
      </footer>
      {/* <!-- End  Footer --> */}
      <a
        href="."
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>{" "}
      </a>
    </>
  );
};

export default A;
