import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import "../resume_css/resume2.css";

let Resume2Ui = () => {

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

  return (
    <>
      <div id="container">
        <div id="profile">
          <div id="image">
            <img
              id="profile-photo"
              src={img}
              alt="Profile-Imag"
            />
            <a href=".">
              <i class="fas fa-pen stroke-transparent"></i>
            </a>
          </div>
          <p id="name">
            {fname}
            <br />
            <span id="email">{oneWord}</span>
          </p>
            <div id="social-links">
            {Object.keys(social).map(function (keyName, keyIndex) {
            return (
                <>
                <i class="fab fa-github"></i>
                <a href={social[keyName]} rel="noreferrer"> <span>{keyName}</span></a>
            </>
            )})}
          </div>
          <hr width="100%" />
          <div id="about">
            <p style={{ display: "inline" }}>About</p>
            <a href=".">
              <i class="fas fa-pen stroke-transparent-blue"></i>
            </a>
          </div>
          <p id="year-graduation">
            Email
            <br />
            <strong>{email}</strong>
          </p>
          <p id="more-about">
            Address
            <br />
            <strong>{city} ,{state}</strong>
          </p>
          <p id="more-about">
            More about me
            <br />
            <strong>{description}</strong>
          </p>
          <p id="telephone">
            Telephone
            <br />
            <strong>{phone}</strong>
          </p>
        </div>
        <div id="info-cards">
          <div class="card">
            <p>
              <i class="fas fa-briefcase stroke-transparent"></i>
              &nbsp;&nbsp;&nbsp;Skills
            </p>
            <ul class="favor-list">
            {
                skills.map((el)=>{
                return <li>
                <button type="button" class="btn btn-dark m-2">{el}</button>
                    </li>
                })
            }
           </ul> 
          </div>
          <div class="card">
            <p>
              <i class="fas fa-briefcase stroke-transparent"></i>
              &nbsp;&nbsp;&nbsp;Projects
            </p>
            <ul>
              <li>
                <p class="tags">
                <h4>{projects[0].name}</h4>
                <p><em>{projects[0].technology}</em>  <span>{projects[0].timePeriod}</span> </p>
                <ul>
                    {
                    projects[0].description.split(".").map((st) => {
                        return <li> {st}</li>
                    })
                    }
                </ul>
                </p>
              </li>
              <li>
              <p class="tags">
                <h4>{projects[1].name}</h4>
                <p><em>{projects[1].technology}</em>  <span>{projects[1].timePeriod}</span> </p>
                <ul>
                    {
                    projects[1].description.split(".").map((st) => {
                        return <li> {st}</li>
                    })
                    }
                </ul>
                </p>
              </li>
            </ul>
          </div>
          {
          (professionalExperience.position !== "") ?
          <>
          <div class="card">
            <p>
              <i class="fas fa-briefcase stroke-transparent"></i>
              &nbsp;&nbsp;&nbsp;Professional Experience
            </p>
               <p class="tags">
                <h4> {professionalExperience.companyName}</h4>
                <p>{professionalExperience.position}</p>
                <p><em>{professionalExperience.technology}</em>  <span>{professionalExperience.timePeriod}</span> </p>
                <ul>
                    {
                        professionalExperience.description.split(".").map((st) => {
                        return <li> {st}</li>
                    })
                    }
                </ul>
             </p>
           </div>
            </>: ""
        }
          <div class="card">
            <p>
              <i class="fas fa-graduation-cap stroke-transparent"></i>
              &nbsp;&nbsp;&nbsp;Education
            </p>
            <ul>
              <li>
                <p class="tags">
                  CLASS 10
                  <br />
                  <span>
                    {schoolName10} <br />
                    <span>{schoolMarks10}</span>
                  </span>
                </p>
              </li>
              <li>
              <p class="tags">
                  CLASS 12
                  <br />
                  <span>
                    {schoolName12} <br />
                    <span>{schoolMarks12}</span>
                  </span>
                </p>
              </li>
              <li>
                <p class="tags">
                  {CollegeName}
                  <br />
                  <span>
                   {degree} <br />
                    <span>{collegeMarks}</span>
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume2Ui;
