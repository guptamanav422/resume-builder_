let details={


    schoolName10:"",
    schoolMarks10:"",
    schoolName12:"",
    schoolMarks12:"",
    CollegeName:"",
    Degree:"",
    collegeMarks:"",
    skills:"",
    currCompany:"",
    courseWork:"",
}

let eduReducer = (state = details, action) => {
    switch (action.type) {
        case "SET_EDU_DETAILS":
          return { ...state, ...action.payload };
    
        default:
          return state;
      }
  };
  
  export default eduReducer;
  