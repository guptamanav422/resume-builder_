import { useDispatch, useSelector } from "react-redux";
import { eduCreator } from "../../redux/actions/eduAction";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Portfolio2 from "./portfolio2"

let Skill = () => {
  let {skills} = useSelector((state) => state.education);

  let [skill,setSkill]=useState("");
  let history = useHistory();

  let dispatch = useDispatch();

  return (
    <>
    <div className="temp" style={{display:"flex"}}>
      <div className="personal-container" style={{width:"30%",height: "calc(100vh - 56px)" , position:"fixed" ,left:"2.5%", top:"30%"}}>
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
              history.push("/portfolioJsx/educationInfo");
            }}
            className="btn btn-primary col-12 m-4"
          >
            BACK
          </button>
          <button
            onClick={() => {
              history.push("/portfolioJsx/resumePort");
            }}
            className="btn btn-primary col-12 m-4"
          >
            NEXT
          </button>
        </div>
        </div>
      </div>
      <Portfolio2 />
      </div>
    </>
  );
};

export default Skill;
