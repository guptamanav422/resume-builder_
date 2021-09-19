import { useSelector } from "react-redux";
import "../resume_css/resume3.css";

let Resume3 = () => {
  let { fname, oneWord } = useSelector((state) => state.details);
  let img = useSelector((state) => state.userImage);

  let { email, phone, city, state, description } = useSelector(
    (state) => state.details
  );

  let {
    schoolName10,
    schoolMarks10,
    schoolName12,
    schoolMarks12,
    CollegeName,
    degree,
    collegeMarks,
  } = useSelector((state) => state.education);

  let { projects, professionalExperience } = useSelector(
    (state) => state.resume
  );
  let social = useSelector((state) => state.social);

  let { skills } = useSelector((state) => state.education);

  return (
    <>
      <div id="doc2" class="yui-t7" style={{ width: "65%", height: "100%" }}>
        <div id="inner">
          <div id="hd">
            <div class="yui-gc">
              <div class="yui-u first">
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
              <div class="yui-u">
                <div
                  class="contact-info"
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
              <div class="yui-b">
                <div class="yui-gf">
                  <div class="yui-u first">
                    <h2>Profile</h2>
                  </div>
                  <div class="yui-u">
                    <p class="enlarge">
                      {description}
                      <br />
                     <strong>{city} ,{state} </strong> 
                    </p>
                  </div>
                </div>

                <div class="yui-gf">
                  <div class="yui-u first">
                    <h2>Skills</h2>
                  </div>
                  <div class="yui-u">
                    <ul
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {skills.map((el) => {
                        return (
                            <button type="button" class="btn btn-dark m-2">
                              {el}
                            </button>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div class="yui-gf">
                  <div class="yui-u first">
                    <h2>Projects</h2>
                  </div>

                  <div class="yui-u">
                    <div class="job">
                      <h2>{projects[0].name}</h2>
                      <h3>{projects[0].technology}</h3>
                      <h4>{projects[0].timePeriod}</h4>
                      <ul>
                        {projects[0].description.split(".").map((st) => {
                          return <li> {st}</li>;
                        })}
                      </ul>
                    </div>

                    <div class="job">
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
                    <div class="yui-gf">
                      <div class="yui-u first">
                        <h2>Professional Experience</h2>
                      </div>
                      <p class="job">
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

                <div class="yui-gf last">
                  <div class="yui-u first">
                    <h2>Education</h2>
                  </div>
                  <div class="yui-u">
                    <h2>Class 10</h2>
                    <h2>{schoolName10}</h2>
                    <h3>
                      &mdash; <strong>{schoolMarks10}</strong>{" "}
                    </h3>
                  </div>
                  <div class="yui-u">
                    <h2>Class 12</h2>
                    <h2>{schoolName12}</h2>
                    <h3>
                      &mdash; <strong>{schoolMarks12}</strong>{" "}
                    </h3>
                  </div>
                  <div class="yui-u">
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
            className="m-4"
          >
            {Object.keys(social).map(function (keyName, keyIndex) {
              return (
                <>
                  <div className="tem m-2">
                    <i class="fab fa-github"></i>
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
    </>
  );
};

export default Resume3;
