import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

let Navbar = () => {
  let user = useSelector((state) => state.user);
  let uid="";
  if(user) uid=user.uid;
  let history= useHistory();
  return (
    <>
      <nav
        class="navbar navbar-dark bg-dark"
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          height: "7%",
          zIndex: "2",
        }}
      >
        <div class="container-fluid">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMx1itTXTXLB8p4ALTTL8mUPa9TFN_m9h5VQ&usqp=CAU"
            alt=".."
            style={{
              position: "fixed",
              top: "0",
              height: "4rem",
              left: "3%",
              width: "4rem",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            onClick={()=>{
              history.push(`/userProfile/${uid}`)
            }}
          />
          <Link
            class="navbar-brand"
            style={{ position: "fixed", fontSize: "2rem", left: "12%" }}
            to="/"
          >
            Resume Builder
          </Link>
        </div>
        <img
          src="https://image.shutterstock.com/image-vector/vector-linear-darkmode-black-switch-260nw-1557175196.jpg"
          style={{
            position: "fixed",
            right: "5%",
            borderRadius: "50%",
            width: "3rem",
            height: "3rem",
            top: "0",
          }}
          onClick={(e) => {
            let body = document.querySelector("body");
            if (
              e.currentTarget.src ===
              "https://image.shutterstock.com/image-vector/vector-linear-darkmode-black-switch-260nw-1557175196.jpg"
            ) {
              e.currentTarget.src =
                "https://res.cloudinary.com/dtpseup2f/image/upload/f_auto,q_auto/v1605458222/letsbuildui/2020-11-15-toggle/with-icons.jpg";
              body.style.backgroundColor = "#444";
            } else {
              e.currentTarget.src =
                "https://image.shutterstock.com/image-vector/vector-linear-darkmode-black-switch-260nw-1557175196.jpg";
              body.style.backgroundColor = "white";
            }
          }}
          alt=".."
        />
      </nav>
    </>
  );
};
export default Navbar;
