// import Preview from "./preview";
import "./css/form.css";
import { useDispatch, useSelector } from "react-redux";
import { detailCreator } from "../redux/actions/detailsActions";
import { useHistory } from "react-router-dom";
import AboutUi from "./aboutUi"
let PersonalData = () => {
  let details = useSelector((state) => state.details);

  let { tech, email, phone, city, state, age,birthday,description } = details;

  let history = useHistory();

  let dispatch = useDispatch();

  return (
    <>
      <div className="personal-container">
        <div className="personal-form">
          <h2 className="m-4">Personal Details</h2>
          <div class="row m-3">
            <div class="col-10 mt-2">
              <input
                type="text"
                class="form-control"
                placeholder="Enter the technology you are working on"
                value={tech}
                onChange={(e) => {
                  dispatch(detailCreator({ tech: e.currentTarget.value }));
                }}
              />
            </div>
            <div class="col-10 mt-2">
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
            <div class="col-10 mt-2 ">
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

            <div class="col-5 mt-2">
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

            <div class="col-5 mt-2">
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
            <div class="col-5 mt-2">
              <input
                value={birthday}
                onChange={(e) => {
                  dispatch(detailCreator({ birthday: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="Birthday"
              />
            </div>

            <div class="col-5 mt-2">
              <input
                value={age}
                onChange={(e) => {
                  dispatch(detailCreator({ age: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="Age"
              />
            </div>
          </div>

          <textarea 
          rows="3"
          cols="50"
           placeholder={"Enter a brief description about you"} 
           value={description}
           onChange={(e) => {
                  dispatch(detailCreator({ description: e.currentTarget.value }));
            }}
           className="m-3" />
          <button
            onClick={() => {
              history.push("/educationInfo");
            }}
            className="btn btn-primary m-4"
          >
            NEXT
          </button>
          <button
            onClick={() => {
              history.push("/userImg");
            }}
            className="btn btn-primary m-4"
          >
            BACK
          </button>
        </div>
        <AboutUi />
      </div>
    </>
  );
};

export default PersonalData;
