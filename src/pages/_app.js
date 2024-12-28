import "@/styles/globals.css";
import "react-responsive-modal/styles.css";
import { appWithTranslation } from "next-i18next";
import i18n from "../next-i18next.config";
import { ContextProvider } from "../context/context";
import Cookies from "js-cookie";
import { useEffect, useContext } from "react";

function App({ Component, pageProps }) {
  //   useEffect(() => {
  //     // Check if the user has a valid token
  //     const token = Cookies.get("lang");

  //     if (token === "mr") {
  //       Ctx.changelang("mr");
  //       i18n.changeLanguage("mr");
  //       //   setGlobalLang("mr");
  //     } else {
  //       Ctx.changelang("en");
  //       i18n.changeLanguage("en");
  //       //   setGlobalLang("en");
  //     }
  //   }, []);
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default appWithTranslation(App);
