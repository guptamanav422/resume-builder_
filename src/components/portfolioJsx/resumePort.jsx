// import Preview from "./preview";
import "../portfolioCss/form.css";
import { useDispatch, useSelector } from "react-redux";
import { resumeCreator } from "../../redux/actions/resumeAction";
import { useHistory } from "react-router-dom";
import ResumeUi from "./resumeUi";
import Portfolio2 from "./portfolio2";
let ResumePort = () => {

  let details = useSelector((state) => state.resume);

  let { projects } = details;
  let history = useHistory();

  let dispatch = useDispatch();

  let code=useSelector(state=>state.template);
  return (
    <>
      <div
        className="temp"
        style={{
          display: "flex",
          width: "100%",
          minHeight: "93vh",
          height: "100%",
        }}
      >
        <div
          className="personal-container"
          style={{ width: "35%", height: "100%" ,position: "fixed" ,top: "13%"}}
        >
          <div className="personal-form" style={{ width: "100%" }}>
            <h2  style={{ color: "white", fontSize: "2rem"}} className="m-3">
              Resume
            </h2>
            <div class="row m-3">
              <h3 className="m-2" style={{ color: "white" }}>
                Project1
              </h3>
              <div class="col-10 mt-1">
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
              <div class="col-10 mt-1">
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
              <div class="col-10 mt-1">
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
                style={{ width: "80%",color:"black" }}
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
                className="m-1"
              />

              <h3 className="m-2" style={{ color: "white" }}>
                Project2
              </h3>
              <div class="col-10 mt-1">
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
              <div class="col-10 mt-1">
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
              <div class="col-10 mt-1">
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
                style={{ width: "80%" ,color:"black"}}
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
                className="m-2"
              />
              <button
                onClick={() => {
                  history.push( `/portfolioJsx/${(code==="Portfolio-1")?"educationInfo":"skills"}`);
                }}
                className="btn col-4 btn-primary m-4"
              >
                BACK
              </button>
              <button
                onClick={() => {
                  history.push("/portfolioJsx/professionalExperience");
                }}
                className="btn col-4 btn-primary m-4"
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
        {
          (code==="Portfolio-2")?<Portfolio2 />:<ResumeUi />
        }
      </div>
    </>
  );
};

export default ResumePort;
