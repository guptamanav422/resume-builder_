// import Preview from "./preview";
import "./css/form.css";
import { useDispatch, useSelector } from "react-redux";
import { eduCreator } from "../redux/actions/eduAction";
import { useHistory } from "react-router-dom";
import EducationUi from "./educationUi"
let EducationInfo = () => {
  let edudetails = useSelector((state) => state.education);

  let {schoolName10,schoolMarks10,schoolName12,schoolMarks12,CollegeName,degree,collegeMarks,skills,currCompany,courseWork} = edudetails;

  let history = useHistory();

  let dispatch = useDispatch();

  return (
    <>
      <div className="personal-container">
        <div className="personal-form">
          <h2 className="m-4">Education Background</h2>
          <div class="row m-3">
          <h4 className="mt-3">10th Class Details</h4>
            <div class="col-5 mt-2">
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
            <div class="col-5 mt-2">
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
            <h3 className="mt-3">12th Class Details</h3>
            <div class="col-5 mt-2">
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
            <div class="col-5 mt-2">
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
            <h4 className="mt-3">College Details</h4>
            <div class="col-5 mt-2">
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
            <div class="col-5 mt-2">
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
            
            <div class="col-5 mt-2">
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
            <h4 className="mt-3">Extra Details</h4>
            <div class="col-5 mt-2 ">
              <input
                value={skills}
                onChange={(e) => {
                  dispatch(eduCreator({ skills: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="Skills"
              />
            </div>

            <div class="col-5 mt-2">
              <input
                value={currCompany}
                onChange={(e) => {
                  dispatch(eduCreator({ currCompany: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="currCompay / Student"
              />
            </div>
            <div class="col-5 mt-2">
              <input
                value={courseWork}
                onChange={(e) => {
                  dispatch(eduCreator({ courseWork: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="enter the courseWork"
              />
            </div>
          </div>
          <button
            onClick={() => {
              history.push("/resume");
            }}
            className="btn btn-primary m-4"
          >
            Next
          </button>
          <button
            onClick={() => {
              history.push("/personal");
            }}
            className="btn btn-primary m-4"
          >
            BACK
          </button>
        </div>
        <EducationUi />
      </div>
    </>
  );
};

export default EducationInfo;
