import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import "../resume_css/resume3.css";

let Resume3Ui = () => {
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
    <div className="cen" style={{display:"flex", justifyContent:"center"}}>
      <div id="doc2" className="yui-t7" style={{width:"65%"}}>
        <div id="inner">
          <div id="hd">
            <div className="yui-gc">
              <div className="yui-u first">
                <h1>{fname}</h1>
                <h2>{oneWord}</h2>
              </div>
              <div
                className="re"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    borderRadius: "50%",
                    height: "10rem",
                    width: "10rem",
                  }}
                  src={img}
                  alt=""
                />
              </div>
              <div className="yui-u">
                <div
                  className="contact-info"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <h3>
                    <a href="mailto:name@yourdomain.com">{email}</a>
                  </h3>
                  <h3>{phone}</h3>
                </div>
              </div>
            </div>
          </div>

          <div id="bd">
            <div id="yui-main">
              <div className="yui-b">
                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2>Profile</h2>
                  </div>
                  <div className="yui-u">
                    <p className="enlarge">
                      {description}
                      <br />
                     <strong>{city} ,{state} </strong> 
                    </p>
                  </div>
                </div>

                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2>Skills</h2>
                  </div>
                  <div className="yui-u">
                    <ul
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {skills.map((el) => {
                        return (
                            <button type="button" className="btn btn-dark m-2">
                              {el}
                            </button>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2>Projects</h2>
                  </div>

                  <div className="yui-u">
                    <div className="job">
                      <h2>{projects[0].name}</h2>
                      <h3>{projects[0].technology}</h3>
                      <h4>{projects[0].timePeriod}</h4>
                      <ul>
                        {projects[0].description.split(".").map((st) => {
                          return <li> {st}</li>;
                        })}
                      </ul>
                    </div>

                    <div className="job">
                      <h2>{projects[1].name}</h2>
                      <h3>{projects[1].technology}</h3>
                      <h4>{projects[1].timePeriod}</h4>
                      <ul>
                        {projects[1].description.split(".").map((st) => {
                          return <li> {st}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>

                {professionalExperience.position !== "" ? (
                  <>
                    <div className="yui-gf">
                      <div className="yui-u first">
                        <h2>Professional Experience</h2>
                      </div>
                      <p className="job">
                        <h2> {professionalExperience.companyName}</h2>
                        <h3>{professionalExperience.position}</h3>
                        <h4>
                          <em>{professionalExperience.technology}</em>{" "}
                          <span>{professionalExperience.timePeriod}</span>{" "}
                        </h4>
                        <ul>
                          {professionalExperience.description
                            .split(".")
                            .map((st) => {
                              return <li> {st}</li>;
                            })}
                        </ul>
                      </p>
                    </div>
                  </>
                ) : (
                  ""
                )}

                <div className="yui-gf last">
                  <div className="yui-u first">
                    <h2>Education</h2>
                  </div>
                  <div className="yui-u">
                    <h2>className 10</h2>
                    <h2>{schoolName10}</h2>
                    <h3>
                      &mdash; <strong>{schoolMarks10}</strong>{" "}
                    </h3>
                  </div>
                  <div className="yui-u">
                    <h2>className 12</h2>
                    <h2>{schoolName12}</h2>
                    <h3>
                      &mdash; <strong>{schoolMarks12}</strong>{" "}
                    </h3>
                  </div>
                  <div className="yui-u">
                    <h2>College</h2>
                    <h2>{CollegeName}</h2>
                    <h2>{degree}</h2>
                    <h3>
                      &mdash; <strong>{collegeMarks}</strong>{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="ft"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            classNameName="m-4"
          >
            {Object.keys(social).map(function (keyName, keyIndex) {
              return (
                <>
                  <div className="tem m-2">
                    <i className="fab fa-github"></i>
                    <a href={social[keyName]} rel="noreferrer">
                      {" "}
                      <span>{keyName}</span>
                    </a>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Resume3Ui;
