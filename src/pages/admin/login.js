import React, { useEffect, useState } from "react";
import Head from "next/head";
import AdminN from "@/components/Admin-login-nav";
import AdminM from "@/components/Admin-menu";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import ReCAPTCHA from "react-google-recaptcha";
import { Oval } from "react-loader-spinner";
import CryptoJS from "crypto-js";
import { FiRefreshCw } from "react-icons/fi";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [svg, setSvg] = useState(null);
  const [text, settext] = useState("");

  const [captchaInput, setcapchaInput] = useState("");

  const loginhandler = async () => {
    setIsLoading(true);
    const trimEmail = email.trim();
    const trimPassword = password.trim();
    const hashedPassword = CryptoJS.SHA256(trimPassword).toString(
      CryptoJS.enc.Hex
    );
    const requestBody = {
      email: trimEmail,
      password: hashedPassword,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login-user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Specify the content type as JSON
          },
          body: JSON.stringify(requestBody),
        }
      );

      setemail("");
      setpassword("");

      if (!response.ok) {
        // Check if the response status code indicates an error (e.g., 4xx or 5xx)
        notifyWarn();
        setIsLoading(false);
        return;
      }

      const data = await response.json();

      if (data.success === true) {
        Cookies.set("token", data.token, {
          expires: 30,
          path: "/admin",
          secure: true,
          sameSite: "Strict",
        });
        if (data.psId) {
          Cookies.set("psId", data.psId, {
            expires: 30,
            path: "/admin",
            secure: true,
            sameSite: "Strict",
          });
        }

        if (data.role === "user") {
          router.push("/admin/police-station");
        }
        if (data.role === "admin") {
          router.push("/admin/dashboard");
        }
      } else {
        notifyWarn();
        setIsLoading(false);
      }
    } catch (error) {
      //   console.log(error);
      //   notifyerr();
      setIsLoading(false);
    }
  };

  const buttonHandler = () => {
    if (!email || !password || !captchaInput) {
      notifyWarnfields();
      return;
    }
    if (captchaInput === text) {
      loginhandler();
    } else {
      notifycaptcha();
    }
  };

  const notifyWarn = () => {
    toast.warn("Email or Password is wrong!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const notifyWarnfields = () => {
    toast.warn("Please enter fields", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const notifycaptcha = () => {
    toast.error("wrong captcha !", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  const fetchCaptcha = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/captcha`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data.captcha) {
        setSvg(data.captcha.svg);
        settext(data.captcha.text);
      } else {
        //   notifyWarn();
      }
    } catch (error) {
      // notifyWarn();
    }
  };

  useEffect(() => {
    fetchCaptcha();
  }, []);

  const refreshCaptcha = () => {
    fetchCaptcha();
  };

  //   useEffect(() => {
  //     // Check if the user has a valid token
  //     const token = Cookies.get("token");
  //     if (token) {
  //       router.push("/admin/dashboard");
  //     }
  //   }, []);

  return (
    <>
      <Head>
        <title>login | Admin Dashboard </title>
      </Head>

      <main className="">
        <AdminN />
        <ToastContainer autoClose={2000} />

        <div className="mt-20">
          <div className="max-w-sm mx-auto mt-40">
            <div className="flex flex-col mx-3 my-1 space-y-1 mb-5">
              <label htmlFor="email" className="mb-1 text-base  text-gray-800">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="text-base  border-2 border-purple-300 px-3 py-2 rounded-md outline-none focus:border-purple-700"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  const inputText = e.target.value.slice(0, 50);
                  setemail(inputText);
                }}
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col mx-3 my-1 space-y-1 mb-5">
              <label htmlFor="pass" className="mb-1 text-base  text-gray-800 ">
                Password
              </label>
              <input
                type="password"
                id="pass"
                className="text-base  border-2 border-purple-300 px-3 py-2 rounded-md outline-none focus:border-purple-700"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  const inputText = e.target.value.slice(0, 50);
                  setpassword(inputText);
                }}
                autoComplete="off"
              />
            </div>

            <div className="mt-5 mx-3">
              <div className="flex flex-row items-center space-x-5">
                <div dangerouslySetInnerHTML={{ __html: svg }} />
                <div
                  className="w-8 h-8 text-center justify-center flex items-center border"
                  onClick={refreshCaptcha}
                >
                  <FiRefreshCw className="font-bold text-xl text-blue-600" />
                </div>
              </div>

              <input
                type="text"
                id=""
                required={true}
                value={captchaInput}
                onChange={(e) => setcapchaInput(e.target.value)}
                placeholder="Enter Capcha Code"
                className="text-base mt-2  border-2 border-purple-300 px-3 py-2 rounded-md outline-none focus:border-purple-700"
              />
            </div>

            <div className="flex flex-col mx-3 mt space-y-1 mt-5">
              <button
                onClick={buttonHandler}
                className="bg-blue-600 text-white text-lg px-3 py-2 rounded hover:bg-blue-700 flex justify-center items-center"
              >
                {!isLoading && <span>Login</span>}
                {isLoading && (
                  <Oval
                    height={30}
                    width={30}
                    color="#ffffff"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#ffffff"
                    strokeWidth={10}
                    strokeWidthSecondary={10}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
