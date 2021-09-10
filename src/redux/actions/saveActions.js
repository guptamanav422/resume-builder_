import { firestore } from "../../firebase";

export const saveResumeCreator = () => {
  return {
    type: "SAVE_RESUME",
  };
};

export const saveErrCreator = (err) => {
  return {
    type: "SAVE_ERR",
    payload: err,
  };
};

export const saveCompletedCreator = (id) => {
  return {
    type: "SAVE_COMPLETED",
    payload: id,
  };
};

export const saveResume = (uid, details, code,edudetails,img,social,resumeDetail) => {
  return (dispatch) => {
    dispatch(saveResumeCreator());

    firestore
      .collection("resume")
      .add({
        uid,
        details,
        code,
        edudetails,
        img,
        social,
        resumeDetail,
      })
      .then((docRef) => {
        return docRef.get();
      })
      .then((doc) => {
        // console.log(doc.id);
        dispatch(saveCompletedCreator(doc.id));
      })
      .catch((err) => {
        dispatch(saveErrCreator(err));
      });
  };
};
