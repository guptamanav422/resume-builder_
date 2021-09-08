import { useDispatch, useSelector } from "react-redux";
import "./css/form.css";

import { socialCreator } from "../redux/actions/socialHandleAction";

import { useHistory } from "react-router";
import { useState } from "react";
import SocialHandleUi from "./socialHandleUi"
let SocialHandle = () => {
    let history = useHistory();
    let dispatch = useDispatch();

    let social = useSelector(
        (state) => state.social
    );
    let [handleName, setHandleName] = useState("");
    let [handleLink, setHandleLink] = useState("");
    return (
        <>
            <div className="qual-container">
                <div className="qual-form">
                    <h2 className="m-4">Social Handle</h2>

                     <div class="row m-3 " >
                        <div class="col-6 m-2">
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
                        <div class="col-6 m-2">
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
                                social[`${handleName}`]=handleLink;
                                dispatch(socialCreator(social));
                                setHandleName("");
                                setHandleLink("");
                            }}
                            className="btn col-6 btn-secondary m-4">
                            Save This Handle
                        </button>
                    </div>

                    <button
                        onClick={() => {
                            history.push("/userImg");
                        }}
                        className="btn btn-primary m-4"
                    >
                        BACK
                    </button>
                    <button
                        onClick={() => {
                            history.push("/personal");
                        }}
                        className="btn btn-primary m-4"
                    >
                        NEXT
                    </button>
                </div>
                <SocialHandleUi />
            </div>
            {/* <button
                onClick={() => {

                }}
                className="btn btn-primary qual-gen"
            >
                Generate link
            </button> */}
        </>
    );
};

export default SocialHandle;
