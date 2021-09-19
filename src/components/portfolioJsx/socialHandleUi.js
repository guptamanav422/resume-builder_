import { useSelector } from "react-redux";

let SocialHandleUi = () => {
  let social = useSelector((state) => state.social);

  let details = useSelector((state) => state.details);
  let { fname } = details;
  let img = useSelector((state) => state.userImage);
  return (
    <>
      <div
        class="profile"
        style={{
          backgroundColor: "#5aacb7",
          width: "63%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height:"97%",
          position:'fixed',
          right:"0",
          top:"0",
        }}
      >
        <img
          src={img}
          alt=""
          class="img-fluid rounded-circle"
          style={{ maxWidth: "60%" }}
        />
        <h1 class="text-light">
          <a href="index.html">{fname}</a>
        </h1>
        <div class="social-links mt-3 text-center">
          {Object.keys(social).map(function (keyName, keyIndex) {
            return (
              <a
                href={social[keyName]}
                rel="noreferrer"
                style={{
                  fontSize: "2rem",
                  color: "blue",
                  display: "block",
                  cursor: "pointer",
                }}
                target="_blank"
                class="twitter"
              >
                {" "}
                {keyName}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SocialHandleUi;
