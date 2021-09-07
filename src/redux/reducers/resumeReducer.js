let initialState = {
    summary:"",
    projects:[
        {
            name:"",
            timePeriod:"",
            technology:"",
            description:""
        },
        {
            name:"",
            timePeriod:"",
            technology:"",
            description:""
        }
    ],
    professionalExperience:{
        position:"",
        timePeriod:"",
        companyName:"",
        technology:"",
        description:""
    },
  };
  
  let resumeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_RESUME_DETAILS":
        return { ...state, ...action.payload };
  
      default:
        return state;
    }
  };
  
  export default resumeReducer;
  