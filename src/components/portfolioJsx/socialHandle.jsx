import { useDispatch, useSelector } from "react-redux";
import "../portfolioCss/form.css";

import { socialCreator } from "../../redux/actions/socialHandleAction";

import { useHistory } from "react-router";
import { useState } from "react";
import SocialHandleUi from "./socialHandleUi"
import Portfolio2 from "./portfolio2";

let SocialHandle = () => {
  let history = useHistory();
  let dispatch = useDispatch();

  let social = useSelector((state) => state.social);
  let [handleName, setHandleName] = useState("");
  let [handleLink, setHandleLink] = useState("");

  let code=useSelector(state=>state.template);
  return (
    <>
      <div className="temp" style={{ display: "flex" }}>
        <div className="qual-container" style={{width:"30%",height: "calc(100vh - 56px)" , position:"fixed" ,left:"2.5%", top:"30%"}}>
          <div className="qual-form">
            <h2 className="m-4" style={{ color: "white", fontSize: "3rem" }}>
              Social Handle
            </h2>

            <div class="row m-3 ">
              <div class="col-10 m-2">
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
              <div class="col-10 m-2">
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
                className="btn col-10 btn-secondary m-2"
              >
                Save This Handle
              </button>
            </div>
            <div className="cen" style={{display:"flex", justifyContent:"space-evenly",alignItems:"center"}}>
            <button
              onClick={() => {
                history.push("/portfolioJsx/userImg");
              }}
              className="btn btn-primary"
            >
              BACK
            </button>
            <button
              onClick={() => {
                history.push("/portfolioJsx/personal");
              }}
              className="btn btn-primary "
            >
              NEXT
            </button>
            </div>
          </div>
        </div>
        {
          (code==="Portfolio-2")?<Portfolio2 />:<SocialHandleUi />
        }
      </div>
    </>
  );
};

export default SocialHandle;
