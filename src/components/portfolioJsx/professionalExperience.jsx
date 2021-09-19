// import Preview from "./preview";
import "../portfolioCss/form.css";
import { useDispatch, useSelector } from "react-redux";
import { resumeCreator } from "../../redux/actions/resumeAction";
import { useHistory } from "react-router-dom";
import ResumeUi from "./resumeUi";
import { saveResume } from "../../redux/actions/saveActions";
import { detailCreator } from "../../redux/actions/detailsActions";
import Portfolio2 from "./portfolio2";
// import { useState } from "react";

let ProfessionalExperience = () => {
  let details = useSelector((state) => state.resume);

  let { professionalExperience } = details;
  let { isPublic } = useSelector((state) => state.details);
  let history = useHistory();

  let dispatch = useDispatch();
  let { id } = useSelector((state) => state.saveState);
  let detail = useSelector((state) => state.details);
  let code = useSelector((state) => state.template);
  let user = useSelector((state) => state.user);
  let uid;
  if (user) uid = user.uid;
  let edudetails = useSelector((state) => state.education);
  let img = useSelector((state) => state.userImage);
  let social = useSelector((state) => state.social);
  let resumeDetail = details;
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
          style={{ width: "35%", height: "100%" , position:"fixed", top:"15%"}}
        >
          <div className="personal-form" style={{ width: "100%" }} >
            <h3 className="m-3" style={{ color: "white" }}>
              Professional Experience (if any)
            </h3>
            <div class="col-10 m-2">
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
            <div class="col-10 m-2">
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
            <div class="col-10 m-2">
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
            <div class="col-10 m-2">
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
            <div className="cent" style={{display:"flex" ,flexDirection:"column", justifyContent:"center", alignItems:'center'}}>
            <label class="form-check-label" for="flexCheckDefault">
              <input
                class="form-check-input"
                type="checkbox"
                checked={isPublic}
                onClick={(e) => {
                  dispatch(
                    detailCreator({ isPublic: e.currentTarget.checked })
                  );
                }}
                id="flexCheckDefault"
              />
              <span style={{ color: "white" }}> Make public </span>
            </label>
            <br />
            <button
              onClick={() => {
                alert(`https://resume-7258e.web.app/publicpreview/${id}`);
              }}
              className="btn col-4 btn-primary mt-1"
            >
              Generate link
            </button>
            <br />
            <button
              onClick={() => {
                dispatch(
                  saveResume(
                    uid,
                    detail,
                    code,
                    edudetails,
                    img,
                    social,
                    resumeDetail
                  )
                );
                alert("Data is saved");
              }}
              className="btn col-4 btn-primary mt-1"
            >
              Save to Database
            </button>
            <br />
            <button
              onClick={() => {
                history.push("/portfolioJsx/resumePort");
              }}
              className="btn col-4 btn-primary mt-1"
            >
              BACK
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

export default ProfessionalExperience;
