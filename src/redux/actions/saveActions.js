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
    console.log(uid);
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
        dispatch(saveCompletedCreator(doc.id));
          firestore
          .collection("users")
          .doc(uid)
          .get()
          .then((doc1) => {
            let {arr,email} = doc1.data();
            return {arr,email};
          })
          .then(({arr,email})=>{
            arr.push(doc.id);
            return {arr,email};
          })
          .then( async ({arr,email})=>{
            let docRef = await firestore.collection("users").doc(uid);
              docRef.set({
                arr,
                email
              });
          })
      })
      .catch((err) => {
        dispatch(saveErrCreator(err));
      });
};
}