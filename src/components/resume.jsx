// import Preview from "./preview";
import "./css/form.css";
import { useDispatch, useSelector } from "react-redux";
import { resumeCreator } from "../redux/actions/resumeAction";
import { useHistory } from "react-router-dom";
import ResumeUi from "./resumeUi";
import { saveResume } from "../redux/actions/saveActions";
import { detailCreator } from "../redux/actions/detailsActions";

let Resume = () => {
  let details = useSelector((state) => state.resume);

  let { projects, professionalExperience } = details;
  let { isPublic } = useSelector((state) => state.details);
  let history = useHistory();

  let dispatch = useDispatch();
  let { id } = useSelector((state) => state.saveState);
  let detail = useSelector((state) => state.details);
  let code = useSelector((state) => state.template);
  let { uid } = useSelector((state) => state.user);
  let edudetails = useSelector((state) => state.education);
  let img = useSelector((state) => state.userImage);
  let social = useSelector((state) => state.social);

  let resumeDetail=details;
  return (
    <>
      <div
        className="personal-container"
        style={{ display: "flex", height: "100%", width: "100%" }}
      >
        <div className="personal-form" style={{ height: "100%", width: "50%" }}>
          <h2 className="m-4">Resume</h2>
          <div class="row m-3">
            <h3 className="m-3">Project1</h3>
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

            <h3 className="m-3">Project2</h3>
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

            <h3 className="m-3">Professional Experience (if any)</h3>
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
            <label class="form-check-label" for="flexCheckDefault">
            <input
              class="form-check-input"
              type="checkbox"
              checked={isPublic}
              onClick={(e) => {
                dispatch(detailCreator({ isPublic: e.currentTarget.checked }));
              }}
              id="flexCheckDefault"
            />
              {`   Make public`}
            </label>
            <button
              onClick={() => {
                alert(`https://resume-7258e.web.app/publicpreview/${id}`);
              }}
              className="btn col-4 btn-primary m-4"
            >
              Generate link
            </button>
            <button
              onClick={() => {
                dispatch(saveResume(uid, detail, code ,edudetails,img,social ,resumeDetail));
              }}
              className="btn col-4 btn-primary m-4"
            >
              Save to Database
            </button>
            <button
              onClick={() => {
                history.push("/educationInfo");
              }}
              className="btn col-4 btn-primary m-4"
            >
              BACK
            </button>
          </div>
        </div>
        <ResumeUi />
      </div>
    </>
  );
};

export default Resume;
