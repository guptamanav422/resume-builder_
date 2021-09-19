import "../resume_css/resume1.css"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase";
let Resume1Ui = () => {

  
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
  <div class="wrapper" style={{width:"65%" , minHeight:"97vh",height:"100%",marginTop:"3%"}} >
  <div class="intro">
    <div class="profile">
      <div class="photo">
        <img src={img} alt="" />
      </div>
      <div class="bio">
        <h1 class="name">{fname}</h1>
        <p class="profession">{oneWord}</p>
      </div>
    </div>
    <div class="intro-section about">
      <h1 class="title">about me</h1>
      <p class="paragraph" style={{color:"black"}}>
        {description}
      </p>
    </div>
    <div class="intro-section contact">
      <h1 class="title">Contact</h1>
      <div class="info-section">
        <i class="fas fa-phone" style={{backgroundColor :"black"}}></i>
        &nbsp;
        &nbsp;
        <span>{phone}</span>
      </div>
      <div class="info-section">
        <i class="fas fa-map-marker-alt" style={{backgroundColor :"black"}}></i>
        &nbsp; &nbsp;
        <span>{city},{state}</span>
      </div>
      <div class="info-section">
        <i class="fas fa-paper-plane" style={{backgroundColor :"black"}}></i>
        &nbsp; &nbsp;
        <span>{email}</span>
      </div>
    </div>
    <div class="intro-section follow">
      <h1 class="title">Follow</h1>

      {Object.keys(social).map(function (keyName, keyIndex) {
          return (
            <div class="info-section link">
            <i class="fab fa-github" style={{backgroundColor :"black"}}></i>
            &nbsp; &nbsp;
            <a href={social[keyName]} rel="noreferrer"> <span>{keyName}</span></a>
          </div>
          )
      })}
    </div>
  </div>
  <div class="detail">
    <div class="detail-section edu">
      <div class="detail-title">
        <div class="title-icon">
          <i class="fas fa-user-graduate" style={{backgroundColor :"black"}}></i>
        </div>
        <span>Eduation</span>
      </div>
      <div class="detail-content">
        <div class="timeline-block">
        <h1>Class 10</h1>
          <h1>{schoolName10}</h1>
          <time>{schoolMarks10}</time>
        </div>
        <div class="timeline-block">
        <h1>Class 12</h1>
          <h1>{schoolName12}</h1>
          <time>{schoolMarks12}</time>
        </div>
        <div class="timeline-block">
          <h1>{CollegeName}</h1>
          <p>{degree}</p>
          <time>{collegeMarks}</time>
        </div>
      </div>
    </div>
    <div class="detail-section edu">
      <div class="detail-title">
        <div class="title-icon">
          <i class="fas fa-user-graduate"></i>
        </div>
        <span>Projects</span>
      </div>
      <div class="detail-content">
        <div class="timeline-block">
          <h1>{projects[0].name}</h1>
          <p>{projects[0].timePeriod}</p>
          <p><em>{projects[0].technology}</em></p>
          <ul>
            {
              projects[0].description.split(".").map((st) => {
                return <li> {st}</li>
              })
            }
          </ul>
        </div>
        <div class="timeline-block">
          <h1>{projects[1].name}</h1>
          <p>{projects[1].timePeriod}</p>
          <p><em>{projects[1].technology}</em></p>
          <ul>
            {
              projects[1].description.split(".").map((st) => {
                return <li> {st}</li>
              })
            }
          </ul>
        </div>
      </div>  
      </div>
        {
          (professionalExperience.position !== "") ?
          <>
          <div class="detail-section edu ml-3">
              <div class="detail-title">
            <div class="title-icon">
              <i class="fas fa-user-graduate"></i>
            </div>
            <span>Professional Experience</span>
          </div>
          <div class="detail-content">
          <div class="timeline-block">
            <h1> {professionalExperience.companyName}</h1>
            <p> {professionalExperience.position}</p>
            <p> {professionalExperience.timePeriod}</p>
            <p><em>{professionalExperience.technology}</em></p>
            <ul>
              {
                professionalExperience.description.split(".").map((st) => {
                  return <li> {st}</li>
                })
              }
            </ul>
          </div> 
          </div>
           </div>
            </>: ""
        }
   
    <div class="detail-section interests">
      <div class="detail-title">
        <div class="title-icon">
          <i class="fas fa-heart"></i>
        </div>
        <span>Skills/Interests</span>
      </div>
      <div class="detail-content">
        <div class="outer-frame">
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
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Resume1Ui;