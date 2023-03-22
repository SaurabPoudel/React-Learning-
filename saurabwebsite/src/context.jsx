// create a context (warehouse)✅
// provider
// consumer /useContext Hook

import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  name: "",
  image: "",
  portfolio: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Saurab Poudel",
        image: "./images/hero.svg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Saurab Poudel",
        image: "./images/about1.svg",
      },
    });
  };

  const getPortfolio = async () => {
    try {
      const res = await import("/data/data.json");
      console.log(res);
      const data = await res.default;
      dispatch({ type: "GET_PORTFOLIO", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPortfolio();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// global custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
