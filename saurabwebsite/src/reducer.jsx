const reducer = (state, action) => {
  if (action.type === "HOME_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
    };
  }

  if (action.type === "ABOUT_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
    };
  }

  if (action.type === "GET_PORTFOLIO") {
    return {
      ...state,
      portfolio: action.payload,
    };
  }

  return state;
};

export default reducer;
