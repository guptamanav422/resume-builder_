export const resumeCreator = (img) => {
    return {
      type: "SET_RESUME_DETAILS",
      payload: img,
    };
  };
  
  export default resumeCreator;