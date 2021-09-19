import "../resume_css/resume1.css"
import { useSelector } from "react-redux";

let Resume1 = () => {

  
  let { fname,oneWord} =useSelector((state) => state.details);
  let img = useSelector(state => state.userImage);

  let { email, phone, city, state, description }  = useSelector((state) => state.details);

  let {schoolName10,schoolMarks10,schoolName12,schoolMarks12,CollegeName,degree,collegeMarks} =  useSelector((state) => state.education);

  let { projects, professionalExperience } = useSelector((state) => state.resume);
  let social = useSelector((state) => state.social);

  let {skills} = useSelector((state) => state.education);
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
      <p class="paragraph">
        {description}
      </p>
    </div>
    <div class="intro-section contact">
      <h1 class="title">Contact</h1>
      <div class="info-section">
        <i class="fas fa-phone"></i>
        <span>{phone}</span>
      </div>
      <div class="info-section">
        <i class="fas fa-map-marker-alt"></i>
        <span>{city},{state}</span>
      </div>
      <div class="info-section">
        <i class="fas fa-paper-plane"></i>
        <span>{email}</span>
      </div>
    </div>
    <div class="intro-section follow">
      <h1 class="title">Follow</h1>

      {Object.keys(social).map(function (keyName, keyIndex) {
          return (
            <div class="info-section link">
            <i class="fab fa-github"></i>
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
          <i class="fas fa-user-graduate"></i>
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

export default Resume1;