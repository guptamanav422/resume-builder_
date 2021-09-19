// import Preview from "./preview";
// import "./css/form.css";
import { useDispatch, useSelector } from "react-redux";
import { eduCreator } from "../../redux/actions/eduAction";
import { useHistory } from "react-router-dom";
import Resume1 from "./resume1";
import Resume2  from "./resume2";
import Resume3 from "./resume3";

let EducationInfo1 = () => {
  let code=useSelector(state=>state.template);
  
  let edudetails = useSelector((state) => state.education);

  let {schoolName10,schoolMarks10,schoolName12,schoolMarks12,CollegeName,degree,collegeMarks} = edudetails;

  let history = useHistory();

  let dispatch = useDispatch();

  return (
    <>
    <div className="temp" style={{display:"flex"}}>
      <div className="personal-container" style={{width:"35%"}}>
        <div className="personal-form" style={{width:"100%"}}>
          <h2 className="m-4" style={{color:"white"}}>Education</h2>
          <div class="row m-3">
          <h4 className="mt-3" style={{color:"white"}}>10th Class Details</h4>
            <div class="col-12 mt-2">
              <input
                type="text"
                class="form-control"
                placeholder="school Name of 10th class"
                value={schoolName10}
                onChange={(e) => {
                  dispatch(eduCreator({ schoolName10: e.currentTarget.value }));
                }}
              />
            </div>
            <div class="col-12 mt-2">
              <input
                value={schoolMarks10}
                onChange={(e) => {
                  dispatch(eduCreator({ schoolMarks10: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="school Marks of 10th class"
              />
            </div>
            <h3 className="mt-3" style={{color:"white"}}>12th Class Details</h3>
            <div class="col-12 mt-2">
              <input
                type="text"
                class="form-control"
                placeholder="school Name of 12th class"
                value={schoolName12}
                onChange={(e) => {
                  dispatch(eduCreator({ schoolName12: e.currentTarget.value }));
                }}
              />
            </div>
            <div class="col-12 mt-2">
              <input
                value={schoolMarks12}
                onChange={(e) => {
                  dispatch(eduCreator({ schoolMarks12: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="school Marks of 12th class"
              />
            </div>
            <h4 className="mt-3" style={{color:"white"}}>College Details</h4>
            <div class="col-12 mt-2">
              <input
                type="text"
                class="form-control"
                placeholder="College Name"
                value={CollegeName}
                onChange={(e) => {
                  dispatch(eduCreator({ CollegeName: e.currentTarget.value }));
                }}
              />
            </div>
            <div class="col-12 mt-2">
              <input
                value={collegeMarks}
                onChange={(e) => {
                  dispatch(eduCreator({ collegeMarks: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="Enter College percentage/cgpa"
              />
            </div>
            
            <div class="col-12 mt-2">
              <input
                value={degree}
                onChange={(e) => {
                  dispatch(eduCreator({ degree: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="Degree"
              />
            </div>

          </div>
          <button
            onClick={() => {
              history.push("/resumeJsx/project1");
            }}
            className="btn btn-primary m-4"
          >
            Next
          </button>
          <button
            onClick={() => {
              history.push("/resumeJsx/personalData1");
            }}
            className="btn btn-primary m-4"
          >
            BACK
          </button>
        </div>
      </div>
      {
        code==="Resume-1"? <Resume1 />:(code==="Resume-2"?<Resume2 />:<Resume3/>)
      }
      </div>
    </>
  );
};

export default EducationInfo1;
