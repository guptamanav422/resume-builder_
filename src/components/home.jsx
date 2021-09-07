import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { templateCreator } from "../redux/actions/templateActions";
import "./css/home.css";

let Home = () => {
  let user = useSelector((state) => state.user);
  let history = useHistory();
  let dispatch = useDispatch();
  return (
    <>
      {user ? "" : <Redirect to="/login" />}

      <div className="template-container">
        <div
          onClick={() => {
            dispatch(templateCreator("A"));
            history.push("/userImg");
          }}
          className="template"
        >
          <img src="https://cdn.dribbble.com/users/639879/screenshots/6791978/dribbble-devresume.png" alt="" />
        </div>
        <div
          onClick={() => {
            dispatch(templateCreator("B"));
            history.push("/userImg");
          }}
          className="template"
        >
          <img src="http://localhost:3000/skin2.svg" alt=""/>
        </div>
      </div>

      <button
        className="btn-primary home-logout-btn"
        onClick={() => {
          auth.signOut();
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Home;
