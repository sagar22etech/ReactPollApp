const storageHelper = token => {
    if (token) {
        localStorage.setItem("token", token);
    }
    else {
      return localStorage.getItem("token");
    }
    
  };
  export default storageHelper;