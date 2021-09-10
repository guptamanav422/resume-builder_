import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";
// import "./css/preview.css";
// import Preview from "./preview"

import A from "./A"
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
  }, []);

  return (
    <>
      {previewData && previewData.details.isPublic ? (
        <>
          {
            <A id={rid}/>
          }
        </>
      ) : (
        "Not available or not public"
      )}
    </>
  );
};

export default PublicPreview;