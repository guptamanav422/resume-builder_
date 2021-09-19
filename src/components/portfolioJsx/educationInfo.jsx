// import Preview from "./preview";
import "../portfolioCss/form.css";
import { useDispatch, useSelector } from "react-redux";
import { eduCreator } from "../../redux/actions/eduAction";
import { useHistory } from "react-router-dom";
import EducationUi from "./educationUi"
import Portfolio2 from "./portfolio2"
let EducationInfo = () => {
  let edudetails = useSelector((state) => state.education);

  let {schoolName10,schoolMarks10,schoolName12,schoolMarks12,CollegeName,degree,collegeMarks,skills,currCompany,courseWork} = edudetails;

  let history = useHistory();

  let dispatch = useDispatch();

  let code=useSelector(state=>state.template);
  return (
    <>
    <div className="temp" style={{display:"flex" , width:"100%", height:"100%"}}>
      <div className="personal-container" style={{width:"30%",height: "100%" , position:"fixed" ,left:"2.5%", top:"8%"}}>
        <div className="personal-form" style={{width:"100%"}}>
          <h2 style={{color:"white",fontSize:"3rem"}}>Education</h2>
          <div className="row m-1">
          <h4 style={{color:"white"}}>10th className Details</h4>
            <div className="col-12 mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="school Name of 10th class"
                value={schoolName10}
                onChange={(e) => {
                  dispatch(eduCreator({ schoolName10: e.currentTarget.value }));
                }}
              />
            </div>
            <div className="col-12 mt-1">
              <input
                value={schoolMarks10}
                onChange={(e) => {
                  dispatch(eduCreator({ schoolMarks10: e.currentTarget.value }));
                }}
                type="text"
                className="form-control"
                placeholder="school Marks of 10th className"
              />
            </div>
            <h3 className="mt-2" style={{color:"white"}}>12th className Details</h3>
            <div className="col-12 mt-1">
              <input
                type="text"
                className="form-control"
                placeholder="school Name of 12th className"
                value={schoolName12}
                onChange={(e) => {
                  dispatch(eduCreator({ schoolName12: e.currentTarget.value }));
                }}
              />
            </div>
            <div class="col-12 mt-1">
              <input
                value={schoolMarks12}
                onChange={(e) => {
                  dispatch(eduCreator({ schoolMarks12: e.currentTarget.value }));
                }}
                type="text"
                className="form-control"
                placeholder="school Marks of 12th class"
              />
            </div>
            <h4 classNameName="mt-2" style={{color:"white"}}>College Details</h4>
            <div className="col-12 mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="College Name"
                value={CollegeName}
                onChange={(e) => {
                  dispatch(eduCreator({ CollegeName: e.currentTarget.value }));
                }}
              />
            </div>
            <div className="col-12 mt-1">
              <input
                value={collegeMarks}
                onChange={(e) => {
                  dispatch(eduCreator({ collegeMarks: e.currentTarget.value }));
                }}
                type="text"
                className="form-control"
                placeholder="Enter College percentage/cgpa"
              />
            </div>
            
            <div className="col-12 mt-1">
              <input
                value={degree}
                onChange={(e) => {
                  dispatch(eduCreator({ degree: e.currentTarget.value }));
                }}
                type="text"
                className="form-control"
                placeholder="Degree"
              />
            </div>
            <h4 classNameName="mt-1" style={{color:"white"}}>Extra Details</h4>
            <div className="col-12 mt-2 ">
              <input
                value={skills}
                onChange={(e) => {
                  dispatch(eduCreator({ skills: e.currentTarget.value }));
                }}
                type="text"
                className="form-control"
                placeholder="Skills"
              />
            </div>

            <div className="col-12 mt-1">
              <input
                value={currCompany}
                onChange={(e) => {
                  dispatch(eduCreator({ currCompany: e.currentTarget.value }));
                }}
                type="text"
                className="form-control"
                placeholder="currCompay / Student"
              />
            </div>
            <div className="col-12 mt-1">
              <input
                value={courseWork}
                onChange={(e) => {
                  dispatch(eduCreator({ courseWork: e.currentTarget.value }));
                }}
                type="text"
                className="form-control"
                placeholder="enter the courseWork"
              />
            </div>
          </div>
          <div className="cen" style={{display:"flex" , justifyContent:"space-evenly", alignItems:"center"}}>
          <button
            onClick={() => {
              history.push(`/portfolioJsx/${(code==="Portfolio-1")?"resumePort":"skills"}`);
            }}
            className="btn btn-primary"
          >
            Next
          </button>
          <button
            onClick={() => {
              history.push("/portfolioJsx/personal");
            }}
            className="btn btn-primary"
          >
            BACK
          </button>
          </div>
        </div>
        </div>
        {
          (code==="Portfolio-2")?<Portfolio2 />:<EducationUi />
        }
      </div>
    </>
  );
};

export default EducationInfo;
