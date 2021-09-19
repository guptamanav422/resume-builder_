import { useSelector} from "react-redux";
import "./css/preview.css";
import Portfolio1 from "./portfolioJsx/portfolio1"
let Preview = (props) => {
    useSelector((state) => state.details);

  // let templateCode = useSelector((state) => state.template);
  return (
    <>
       <Portfolio1 />
    </>
  );
};

export default Preview;
