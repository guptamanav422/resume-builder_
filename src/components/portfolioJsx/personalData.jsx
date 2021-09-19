// import Preview from "./preview";
import "../portfolioCss/form.css";
import { useDispatch, useSelector } from "react-redux";
import { detailCreator } from "../../redux/actions/detailsActions";
import { useHistory } from "react-router-dom";
import AboutUi from "./aboutUi";
import Portfolio2 from "./portfolio2";

let PersonalData = () => {
  let details = useSelector((state) => state.details);

  let { tech, email, phone, city, state, age,birthday,description } = details;

  let history = useHistory();

  let dispatch = useDispatch();

  let code=useSelector(state=>state.template);
  return (
    <>
    <div className="temp" style={{display:"flex" , width:"100%"}}>
      <div className="personal-container" style={{width:"30%",height: "calc(100vh - 56px)" , position:"fixed" ,left:"2.5%", top:"15%"}}>
        <div className="personal-form" style={{width:"100%"}}>
          <h2 className="m-4" style={{color:"#bd5d38",fontSize:"3rem" }}>Personal Details</h2>
          <div className="row m-3">
            <div className="col-10 mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter the technology you are working on"
                value={tech}
                onChange={(e) => {
                  dispatch(detailCreator({ tech: e.currentTarget.value }));
                }}
              />
            </div>
            <div className="col-10 mt-2">
              <input
                value={email}
                onChange={(e) => {
                  dispatch(detailCreator({ email: e.currentTarget.value }));
                }}
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="col-10 mt-2 ">
              <input
                value={phone}
                onChange={(e) => {
                  dispatch(detailCreator({ phone: e.currentTarget.value }));
                }}
                type="number"
                className="form-control"
                placeholder="Phone"
              />
            </div>

            <div className="col-5 mt-2">
              <input
                value={city}
                onChange={(e) => {
                  dispatch(detailCreator({ city: e.currentTarget.value }));
                }}
                type="text"
                className="form-control"
                placeholder="City"
              />
            </div>

            <div className="col-5 mt-2">
              <input
                value={state}
                onChange={(e) => {
                  dispatch(detailCreator({ state: e.currentTarget.value }));
                }}
                type="text"
                className="form-control"
                placeholder="State"
              />
            </div>
            <div className="col-5 mt-2">
              <input
                value={birthday}
                onChange={(e) => {
                  dispatch(detailCreator({ birthday: e.currentTarget.value }));
                }}
                type="text"
                className="form-control"
                placeholder="Birthday"
              />
            </div>

            <div className="col-5 mt-2">
              <input
                value={age}
                onChange={(e) => {
                  dispatch(detailCreator({ age: e.currentTarget.value }));
                }}
                type="text"
                className="form-control"
                placeholder="Age"
              />
            </div>
          </div>

          <textarea 
          style={{width:"80%",color:'black'}}
           rows="3"
           placeholder={"Enter a brief description about you"} 
           value={description}
           onChange={(e) => {
                  dispatch(detailCreator({ description: e.currentTarget.value }));
            }}
           className="m-3" />
           <div className="cen" style={{display:"flex", alignItems:"center",justifyContent:"space-evenly"}}>
          <button
            onClick={() => {
              history.push("/portfolioJsx/educationInfo");
            }}
            className="btn btn-primary m-4"
          >
            NEXT
          </button>
          <button
            onClick={() => {
              history.push("/portfolioJsx/socialHandle");
            }}
            className="btn btn-primary m-4"
          >
            BACK
          </button>
          </div>
        </div>
        </div>
        {
          (code==="Portfolio-2")?<Portfolio2 />:<AboutUi />
        }
      </div>
    </>
  );
};

export default PersonalData;
