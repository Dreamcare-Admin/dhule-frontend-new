// components/ProtectedAdminRoute.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { Oval } from "react-loader-spinner";

const ProtectedAdminRoute = ({ children }) => {
  const [isloading, setisloading] = useState(true);
  const router = useRouter();

  const submitenquiry = async (token) => {
    const body = {
      token: token,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/verify-token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();

      if (data.verified === false || data.role !== "admin") {
        router.push("/admin/login");
      } else {
        //   notifyWarn();
        setisloading(false);
      }
    } catch (error) {
      // notifyWarn();
      router.push("/admin/login");
    }
  };

  useEffect(() => {
    // Check if the user has a valid token
    const token = Cookies.get("token");

    if (!token) {
      router.push("/admin/login");
    }
    if (token) {
      submitenquiry(token);
    }
  }, []);

  return (
    <>
      {isloading ? (
        <div className="flex justify-center items-center h-screen">
          <Oval
            color="#CA8A04"
            secondaryColor="#CA8A04"
            height={50}
            width={50}
          />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default ProtectedAdminRoute;
