import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";
// import "./css/preview.css";
// import Preview from "./preview"
import Loading from "./loading";
import MakePublic from "./makePublic";

import Portfolio1 from "./portfolioJsx/portfolio1";
import Portfolio2Ui from "./portfolioJsx/portfolio2Ui"

import Resume1Ui from "./resumeJsx/resume1Ui";
import Resume2Ui from "./resumeJsx/resume2Ui";
import Resume3Ui from "./resumeJsx/resume3Ui";



let PublicPreview = () => {
  let { rid } = useParams();
  let [previewData, setPreviewData] = useState(null);

  useEffect(() => {
    firestore
      .collection("resume")
      .doc(rid)
      .get()
      .then((doc) => {
        let data = doc.data();
        setPreviewData(data);
      });
  }, [])
  let code;
  if(previewData) code=previewData.code;
  
  return (
    <>
      {previewData ? (
        <>
          {
            previewData.details.isPublic ?(
              ((()=>{
                if(code==="Portfolio-1"){
                  return <Portfolio1 />}
                else if(code==='Portfolio-2'){
                return <Portfolio2Ui />}
                else if(code==="Resume-1") return <Resume1Ui />
                else if(code==="Resume-2") return <Resume2Ui />
                else if(code==="Resume-3") return <Resume3Ui />
              })())
            ): <MakePublic />
          }
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default PublicPreview;