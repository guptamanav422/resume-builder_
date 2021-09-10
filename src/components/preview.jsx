import { useSelector} from "react-redux";
import "./css/preview.css";
import A from "./A"
let Preview = (props) => {
    useSelector((state) => state.details);

  // let templateCode = useSelector((state) => state.template);
  return (
    <>
       <A />
    </>
  );
};

export default Preview;
