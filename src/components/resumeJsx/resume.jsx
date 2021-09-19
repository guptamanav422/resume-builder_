import { useDispatch,} from "react-redux";
import { useHistory } from "react-router-dom";
import { templateCreator } from "../../redux/actions/templateActions";
import "../resume_css/resume.css"

let ResumeBase=()=>{
    let history = useHistory();
    let dispatch = useDispatch();
    return(
        <>
        <h1 style={{ color: "white", fontSize: "2rem", marginTop:"3rem" }}>Resume Templates</h1>
      <div class="container" style={{width:"100%"}}>
        <div class="card">
          <div class="box" style={{backgroundImage:"url(https://bestof.nyc3.digitaloceanspaces.com/devsnap.me/codepen-KKpXLqR.png)", backgroundRepeat:"no-repeat repeat", backgroundSize:"contain", backgroundPosition:"center"}}>
            <div class="content">
              <p className="view" style={{marginTop:"18rem"}} onClick={() => {
                dispatch(templateCreator("Resume-1"));
                history.push("/resumeJsx/imageUploading1");
            }}>Lets Build</p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="box" style={{backgroundImage:"url(http://www.kaifa99.com/upload/aimg/2020/10/20/194337_Responsive-Resume-Template.png)"}}>
            <div class="content">
              <p className="view" style={{marginTop:"18rem"}}  onClick={() => {
                dispatch(templateCreator("Resume-2"));
                history.push("/resumeJsx/imageUploading1");
            }}>Lets Build</p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="box" style={{backgroundImage:"url(https://cdn.goskills.com/blobs/blogs/294/2.png)", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            <div class="content">
              <p className="view" style={{marginTop:"18rem"}}  onClick={() => {
                dispatch(templateCreator("Resume-3"));
                history.push("/resumeJsx/imageUploading1");
            }}>Read More</p>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default ResumeBase;