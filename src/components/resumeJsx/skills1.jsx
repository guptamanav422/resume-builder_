import { useDispatch, useSelector } from "react-redux";
import { eduCreator } from "../../redux/actions/eduAction";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { detailCreator } from "../../redux/actions/detailsActions";
import { saveResume } from "../../redux/actions/saveActions";
import Resume1 from "./resume1";
import Resume2 from "./resume2";
import Resume3 from "./resume3"


let Skills1 = () => {
  let {skills} = useSelector((state) => state.education);

  let [skill,setSkill]=useState("");
  let history = useHistory();

  let dispatch = useDispatch();

  let details = useSelector((state) => state.resume);

  let { isPublic } = useSelector((state) => state.details);

  let { id } = useSelector((state) => state.saveState);
  let detail = useSelector((state) => state.details);
  let code = useSelector((state) => state.template);
  
  let user = useSelector((state) => state.user);
  let uid="";
  if(user) uid=user.uid;
  let edudetails = useSelector((state) => state.education);
  let img = useSelector((state) => state.userImage);
  let social = useSelector((state) => state.social);

  let resumeDetail=details;

  return (
    <>
    <div className="temp" style={{display:"flex"}}>
      <div className="personal-container" style={{width:"35%",marginTop:"5rem"}}>
        <div className="personal-form" style={{width:"80%"}}>
          <h2 className="m-4"  style={{color:"white"}}>Skills</h2>
          <div class="row m-3">
            <div class="col-12 mt-2">
              <input
                type="text"
                class="form-control m-3"
                placeholder="Enter skill"
                value={skill}
                onChange={(e) => {
                  setSkill(e.currentTarget.value);
                }}

              />
               <button
              onClick={()=>{
                  if(skill==="") return;
                  skills.push(skill);
                  dispatch(eduCreator(skills));
                  setSkill("");
              }}
               type="button" class="btn btn-light m-3 col-12">ADD Skills</button>
            </div>
            <hr />
           
          <button
            onClick={() => {
              history.push("/resumeJsx/project1");
            }}
            className="btn btn-primary col-12 m-4"
          >
            BACK
          </button>
          <label class="form-check-label" for="flexCheckDefault" className="m-3">
          {/* style={{color:"white"}} */}
          <input
              class="form-check-input"
              type="checkbox"
              checked={isPublic}
              onClick={(e) => {
                dispatch(detailCreator({ isPublic: e.currentTarget.checked }));
              }}
              id="flexCheckDefault"
            />
            <span style={{color:"white"}}> Make public </span>
            </label>
            <button
              onClick={() => {
                alert(`https://resume-7258e.web.app/publicpreview/${id}`);
              }}
              className="btn col-12 btn-primary m-4"
            >
              Generate link
            </button>
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
              className="btn col-12 btn-primary m-4"
            >
              Save to Database
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

export default Skills1;
