// import Preview from "./preview";
import { useDispatch, useSelector } from "react-redux";
import { resumeCreator } from "../../redux/actions/resumeAction";
import { useHistory } from "react-router-dom";
import Resume1 from "./resume1";
import Resume2 from "./resume2";
import Resume3 from "./resume3"

let Project1 = () => {

  let code=useSelector(state=>state.template);
  
  let details = useSelector((state) => state.resume);

  let { projects, professionalExperience } = details;
  let history = useHistory();
  let dispatch = useDispatch();
  return (
    <>
    <div className="temp" style={{display:"flex"}}>
      <div className="personal-container" style={{height:"100%" , width:"35%"}}>
        <div className="personal-form" style={{ height: "100%", width: "100%" }}>
          <h2 className="m-4" style={{color:"white"}}>Resume</h2>
          <div class="row m-3">
            <h3 className="m-3" style={{color:"white"}}>Project1</h3>
            <div class="col-10 mt-2">
              <input
                type="text"
                class="form-control"
                placeholder="Project heading"
                value={projects[0].name}
                onChange={(e) => {
                  dispatch(
                    resumeCreator({
                      projects: [
                        { ...projects[0], name: e.currentTarget.value },
                        projects[1],
                      ],
                    })
                  );
                }}
              />
            </div>
            <div class="col-10 mt-2">
              <input
                type="text"
                class="form-control"
                placeholder="Project Time period"
                value={projects[0].timePeriod}
                onChange={(e) => {
                  dispatch(
                    resumeCreator({
                      projects: [
                        { ...projects[0], timePeriod: e.currentTarget.value },
                        projects[1],
                      ],
                    })
                  );
                }}
              />
            </div>
            <div class="col-10 mt-2">
              <input
                type="text"
                class="form-control"
                placeholder="technology used"
                value={projects[0].technology}
                onChange={(e) => {
                  dispatch(
                    resumeCreator({
                      projects: [
                        { ...projects[0], technology: e.currentTarget.value },
                        projects[1],
                      ],
                    })
                  );
                }}
              />
            </div>
            <textarea
              style={{ width: "80%" }}
              rows="3"
              cols="30"
              placeholder={"Enter a brief description of project"}
              value={projects[0].description}
              onChange={(e) => {
                dispatch(
                  resumeCreator({
                    projects: [
                      { ...projects[0], description: e.currentTarget.value },
                      projects[1],
                    ],
                  })
                );
              }}
              className="m-3"
            />

            <h3 className="m-3" style={{color:"white"}}>Project2</h3>
            <div class="col-10 mt-2">
              <input
                type="text"
                class="form-control"
                placeholder="Project heading"
                value={projects[1].name}
                onChange={(e) => {
                  dispatch(
                    resumeCreator({
                      projects: [
                        projects[0],
                        { ...projects[1], name: e.currentTarget.value },
                      ],
                    })
                  );
                }}
              />
            </div>
            <div class="col-10 mt-2">
              <input
                type="text"
                class="form-control"
                placeholder="Project Time period"
                value={projects[1].timePeriod}
                onChange={(e) => {
                  dispatch(
                    resumeCreator({
                      projects: [
                        projects[0],
                        { ...projects[1], timePeriod: e.currentTarget.value },
                      ],
                    })
                  );
                }}
              />
            </div>
            <div class="col-10 mt-2">
              <input
                type="text"
                class="form-control"
                placeholder="technology used"
                value={projects[1].technology}
                onChange={(e) => {
                  dispatch(
                    resumeCreator({
                      projects: [
                        projects[0],
                        { ...projects[1], technology: e.currentTarget.value },
                      ],
                    })
                  );
                }}
              />
            </div>
            <textarea
              style={{ width: "80%" }}
              rows="3"
              cols="30"
              placeholder={"Enter a brief description of project"}
              value={projects[1].description || ""}
              onChange={(e) => {
                dispatch(
                  resumeCreator({
                    projects: [
                      projects[0],
                      { ...projects[1], description: e.currentTarget.value },
                    ],
                  })
                );
              }}
              className="m-3"
            />

            <h3 className="m-3" style={{color:"white"}}>Professional Experience (if any)</h3>
            <div class="col-10 mt-2">
              <input
                type="text"
                class="form-control"
                placeholder="Project heading"
                value={professionalExperience.position}
                onChange={(e) => {
                  dispatch(
                    resumeCreator({
                      professionalExperience: {
                        ...professionalExperience,
                        position: e.currentTarget.value,
                      },
                    })
                  );
                }}
              />
            </div>
            <div class="col-10 mt-2">
              <input
                type="text"
                class="form-control"
                placeholder="Project Time period"
                value={professionalExperience.timePeriod}
                onChange={(e) => {
                  dispatch(
                    resumeCreator({
                      professionalExperience: {
                        ...professionalExperience,
                        timePeriod: e.currentTarget.value,
                      },
                    })
                  );
                }}
              />
            </div>
            <div class="col-10 mt-2">
              <input
                type="text"
                class="form-control"
                placeholder="Technology used"
                value={professionalExperience.technology}
                onChange={(e) => {
                  dispatch(
                    resumeCreator({
                      professionalExperience: {
                        ...professionalExperience,
                        technology: e.currentTarget.value,
                      },
                    })
                  );
                }}
              />
            </div>
            <div class="col-10 mt-2">
              <input
                type="text"
                class="form-control"
                placeholder="Company/Organisation name"
                value={professionalExperience.companyName}
                onChange={(e) => {
                  dispatch(
                    resumeCreator({
                      professionalExperience: {
                        ...professionalExperience,
                        companyName: e.currentTarget.value,
                      },
                    })
                  );
                }}
              />
            </div>

            <textarea
              style={{ width: "80%" }}
              rows="3"
              cols="30"
              placeholder={"Enter a brief description of your project"}
              value={professionalExperience.description}
              onChange={(e) => {
                dispatch(
                  resumeCreator({
                    professionalExperience: {
                      ...professionalExperience,
                      description: e.currentTarget.value,
                    },
                  })
                );
              }}
              className="m-3"
            />
            <button
              onClick={() => {
                history.push("/resumeJsx/educationInfo1");
              }}
              className="btn col-4 btn-primary m-4"
            >
              BACK
            </button>
            <button
              onClick={() => {
                history.push("/resumeJsx/skills1");
              }}
              className="btn col-4 btn-primary m-4"
            >
              NEXT
            </button>
          </div>
        </div>
        
      </div>
      {
        code==="Resume-1"? <Resume1 />:(code==="Resume-2"?<Resume2 />:<Resume3/>)
      }
      </div>
    </>
  );
};

export default Project1;
