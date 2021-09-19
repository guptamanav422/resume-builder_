import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import userImageActions from "../../redux/actions/userImageActions";
import Hero from "./hero";
import Portfolio2 from "./portfolio2";
import { detailCreator } from "../../redux/actions/detailsActions";
import "../portfolioCss/style.css";
import "../portfolioCss/portfolio2.css"
import { r } from "../../firebase";
let ImageUploading = () => {
  let history = useHistory();
  //  let state= useSelector(state=>state.userImage);
  //  console.log(state+" "+"hey");
  let dispatch = useDispatch();
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

  let code=useSelector(state=>state.template);
  let details = useSelector((state) => state.details);

  let { fname, oneWord } = details;
  return (
    <>
      <div className="temp" style={{display:"flex"}}>
      <div className="user-image" style={{width:"30%",height: "calc(100vh - 56px)" , position:"fixed" ,left:"2.5%", top:"10%"}}>
        <div style={{ width:"100%" , height:"100%",display:"flex" , alignItems:"center", justifyContent:"center", flexDirection:"column"}}>

        <div className="row  ml-auto">
            <div className="col-10 mt-3 ml-3" style={{margin:"auto"}}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                value={fname}
                onChange={(e) => {
                  dispatch(detailCreator({ fname: e.currentTarget.value }));
                }}
              />
            </div>
            <div className="col-10 mt-3 ml-3" style={{margin:"auto"}}>
              <input
                value={oneWord}
                onChange={(e) => {
                  dispatch(detailCreator({ oneWord: e.currentTarget.value }));
                }}
                type="text"
                className="form-control"
                placeholder="one word :- student/web-developer"
              />
            </div>
            <h1 style={{width:"80%", textAlign:"center" ,color:"white", margin:"1rem 0"}} className="bg-primary m-5">Select Your Image</h1>
          </div>
          <input type="file" name="myImage" onChange={onImageChange} className="bg-dark" style={{textAlign:"center", color:"white"}} />
            <button
              onClick={() => {
                history.push("/portfolioJsx/socialHandle");
              }}
              className="btn btn-primary m-5"
            >
              Next
            </button>
          </div>
        </div>
        {
          (code==="Portfolio-2")?<Portfolio2 />:<Hero />
        }
      </div>
    </>
  );
};
export default ImageUploading;
