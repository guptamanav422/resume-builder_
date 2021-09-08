import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import userImageActions from "../redux/actions/userImageActions"
import Hero from "./hero"
import { detailCreator } from "../redux/actions/detailsActions";
import "./css/style.css"
let ImageUploading = () => {


 let history=useHistory();
//  let state= useSelector(state=>state.userImage);
//  console.log(state);
  let dispatch= useDispatch();
  let onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      dispatch(userImageActions(URL.createObjectURL(img)));
    }
  };

  let details = useSelector((state) => state.details);

  let { fname,oneWord} = details;
  return (
      <>
      <div className="user-image" style={{width:"50vw",height: "calc(100vh - 56px)"}}>
        <div style={{ width:"100%" , height:"100%",display:"flex" , alignItems:"center", justifyContent:"center", flexDirection:"column"}}>

        <div class="row  ml-auto">
            <div class="col-10 mt-3 ml-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Your Name"
                value={fname}
                onChange={(e) => {
                  dispatch(detailCreator({ fname: e.currentTarget.value }));
                }}
              />
            </div>
            <div class="col-10 mt-3 ml-3">
              <input
                value={oneWord}
                onChange={(e) => {
                  dispatch(detailCreator({ oneWord: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="one word :- student/web-developer"
              />
            </div>
          </div>
          <h1 className="bg-primary m-5">Select Your Image</h1>
          <input type="file" name="myImage" onChange={onImageChange} className="bg-dark" style={{textAlign:"center", color:"white"}} />
        <button
            onClick={() => {
              history.push("/socialHandle");
            }}
            className="btn btn-primary m-5"
          >
            Next
       </button>
       </div>
      </div>
      <Hero />
      </>
  );
}
export default ImageUploading;