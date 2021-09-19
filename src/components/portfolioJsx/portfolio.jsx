import { useDispatch,} from "react-redux";
import { useHistory } from "react-router-dom";
import { templateCreator } from "../../redux/actions/templateActions";
import "../resume_css/resume.css"
let PortfolioBase = () => {
  let history = useHistory();
    let dispatch = useDispatch();
    return(
        <>
        <h1 style={{ color: "white", fontSize: "2rem" ,marginTop:"2rem" }}>Portfolio Templates</h1>
      <div className="container" style={{width:"100%"}}>
        <div className="card">
          <div className="box" style={{backgroundImage:"url(https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_800/https://dessign.net/wp-content/uploads/iportfolio.jpg)"}}>
            <div className="content">
              {/* <h3>Card One</h3> */}
              <p className="view" style={{marginTop:"14rem"}} onClick={() => {
                dispatch(templateCreator("Portfolio-1"));
                history.push("/portfolioJsx/userImg");
            }}>Lets Build</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box" style={{backgroundImage:"url(https://assets.startbootstrap.com/img/screenshots/themes/resume.medium.webp)"}}>
            <div className="content">
              <p className="view" style={{marginTop:"14rem"}} onClick={() => {
                dispatch(templateCreator("Portfolio-2"));
                history.push("/portfolioJsx/userImg");
            }}>Lets Build</p>
            </div>
          </div>
        </div>
      </div>
        </>
    )
};

export default PortfolioBase;
