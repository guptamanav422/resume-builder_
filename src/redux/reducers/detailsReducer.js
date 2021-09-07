let initialState = {
  fname: "",
  tech: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  degree: "",
  college: "",
  cgpa: "",
  year: "",
  isPublic: false,
  age:"",
  description:"",
  birthday:"",
  oneWord:"",
};

let detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default detailsReducer;
