import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  const [domLoaded, setDOMLoaded] = useState(false);

  useEffect(() => {
    setDOMLoaded(true);
  }, []);

  if (domLoaded) {
    {return ReactDOM.createPortal(
      <div
        className="fixed top-0 left-0 w-[100%] h-screen bg-slate-800 opacity-80 z-20"
        onClick={props.onClick}
      ></div>,
      document.getElementById("backdrop-hook")
    );}
  } else {
    return null;
  }
};

export default Backdrop;
