import { useSelector} from "react-redux";
import "./css/preview.css";
import A from "./templates/A"
let Preview = (props) => {
    useSelector((state) => state.details);

  let templateCode = useSelector((state) => state.template);
  return (
    <>
       {templateCode==="A"? <A />:""}
    </>
  );
};

export default Preview;
