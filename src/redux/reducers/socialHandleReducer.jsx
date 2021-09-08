let details={
}

let socialReducer = (state = details, action) => {
    switch (action.type) {
        case "SET_SOCIAL_HANDLE":
          return {...action.payload };
    
        default:
          return state;
      }
  };
  
  export default socialReducer;
  