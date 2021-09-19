import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import userImageActions from "../../redux/actions/userImageActions"
import Resume1 from "./resume1";
import Resume2  from "./resume2";
import Resume3 from "./resume3";
import { detailCreator } from "../../redux/actions/detailsActions";
import { r } from "../../firebase";

let ImageUploading1 = () => {

  let code=useSelector(state=>state.template);
 let history=useHistory();
  let dispatch= useDispatch();
  let onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      const name=new Date() + '-' +img.name;

      const metadata={
        contentType:img.type
      }
      r.child(name).put(img,metadata)
      .then((snapshot)=>{
        return snapshot.ref.getDownloadURL();
      })
      .then((url)=>{
        alert("Image uploaded");
        dispatch(userImageActions(url));
      })
      // dispatch(userImageActions(URL.createObjectURL(img)));
    }
  };

  let details = useSelector((state) => state.details);

  let { fname,oneWord} = details;
  return (
      <>
      <div className="temp" style={{display:"flex"}}>
      <div className="user-image" style={{width:"35%",height: "calc(100vh - 56px)"}}>
        <div style={{ width:"100%" , height:"100%",display:"flex" , alignItems:"center", justifyContent:"center", flexDirection:"column"}}>

        <div class="row  ml-auto">
            <div class="col-10 mt-3 ml-3" style={{margin:"auto"}}>
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
            <div class="col-10 mt-3 ml-3" style={{margin:"auto"}}>
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
            <h1 style={{width:"80%", textAlign:"center" ,color:"white", margin:"1rem 0"}} className="bg-primary m-5">Select Your Image</h1>
          </div>
          <input type="file" name="myImage" onChange={onImageChange} className="bg-dark" style={{textAlign:"center", color:"white"}} />
        <button
            onClick={() => {
              history.push("/resumeJsx/personalData1");
            }}
            className="btn btn-primary mt-3 mr-2"
          >
            Next
       </button>
       </div>
      </div>
      {
        code==="Resume-1"? <Resume1 />:(code==="Resume-2"?<Resume2 />:<Resume3/>)
      }
      </div>
      </>
  );
}
export default ImageUploading1;