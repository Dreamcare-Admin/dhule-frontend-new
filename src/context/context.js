import React, { useState } from "react";

const Context = React.createContext({
  lang: "",
  changelang: (lang) => {},
});

export const ContextProvider = (props) => {
  const [lang, SetLang] = useState("en");

  const Langhandler = (lang) => {
    SetLang(lang);
  };

  const contextValue = {
    lang: lang,
    changelang: Langhandler,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default Context;
