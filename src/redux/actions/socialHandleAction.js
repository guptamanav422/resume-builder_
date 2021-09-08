export const socialCreator = (data) => {
    return {
      type: "SET_SOCIAL_HANDLE",
      payload:data,
    };
  };
  
  export default socialCreator;