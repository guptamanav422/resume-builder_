// import Preview from "./preview";
// import "./css/form.css";
import { useDispatch, useSelector } from "react-redux";
import { detailCreator } from "../../redux/actions/detailsActions";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { socialCreator } from "../../redux/actions/socialHandleAction";
import Resume1 from "./resume1";
import Resume2  from "./resume2";
import Resume3 from "./resume3"

let PersonalData1 = () => {

  let code=useSelector(state=>state.template);
  let details = useSelector((state) => state.details);

  let { email, phone, city, state, description } = details;

  let history = useHistory();

  let dispatch = useDispatch();

  let social = useSelector((state) => state.social);
  let [handleName, setHandleName] = useState("");
  let [handleLink, setHandleLink] = useState("");

  return (
    <>
    <div className="temp" style={{display:"flex"}}>
      <div className="personal-container" style={{width:"35%" , height:"auto" }}>
        <div className="personal-form" style={{width:"90%"}}>
          <h2 className="m-4" style={{color:"white"}}>ABOUT ME</h2>
          <textarea
            rows="3"
            cols="50"
            placeholder={"Enter a brief description about you"}
            value={description}
            style={{color:"grey"}}
            onChange={(e) => {
              dispatch(detailCreator({ description: e.currentTarget.value }));
            }}
            className="m-3"
          />
          <h2 className="m-4" style={{color:"white"}}>CONTACT</h2>
          <div class="row m-3">
            <div class="col-12 mt-2">
              <input
                value={email}
                onChange={(e) => {
                  dispatch(detailCreator({ email: e.currentTarget.value }));
                }}
                type="email"
                class="form-control"
                placeholder="Email"
              />
            </div>
            <div class="col-12 mt-2 ">
              <input
                value={phone}
                onChange={(e) => {
                  dispatch(detailCreator({ phone: e.currentTarget.value }));
                }}
                type="number"
                class="form-control"
                placeholder="Phone"
              />
            </div>

            <div class="col-12 mt-2">
              <input
                value={city}
                onChange={(e) => {
                  dispatch(detailCreator({ city: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="City"
              />
            </div>

            <div class="col-12 mt-2">
              <input
                value={state}
                onChange={(e) => {
                  dispatch(detailCreator({ state: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="State"
              />
            </div>
          </div>
          <div className="qual-container" style={{width:"100%" ,height:"auto"}}>
            <div className="qual-form" style={{width:"100%" ,height:"auto"}}>
              <h2 className="m-4" style={{color:"white"}}>Social Handle</h2>

              <div class="row m-3 ">
                <div class="col-12 m-2">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Name of social Handle"
                    value={handleName}
                    onChange={(e) => {
                      setHandleName(e.currentTarget.value);
                    }}
                  />
                </div>
                <div class="col-12 m-2">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Link of social Handle"
                    value={handleLink}
                    onChange={(e) => {
                      setHandleLink(e.currentTarget.value);
                    }}
                  />
                </div>
                <button
                  onClick={(e) => {
                    // console.log(handleName);
                    social[`${handleName}`] = handleLink;
                    dispatch(socialCreator(social));
                    setHandleName("");
                    setHandleLink("");
                  }}
                  className="btn col-11 btn-secondary m-4"
                >
                  Save This Handle
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              history.push("/resumeJsx/educationInfo1");
            }}
            className="btn btn-primary m-4"
          >
            NEXT
          </button>
          <button
            onClick={() => {
              history.push("/resumeJsx/imageUploading1");
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

export default PersonalData1;
