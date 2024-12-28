import React from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const AdminN = () => {
  const router = useRouter();

  const logoutHandler = () => {
    Cookies.remove("token", { path: "/admin" });

    router.push("/admin/login");
  };

  return (
    <nav
      className="flex flex-row bg-gray-200 items-center justify-between py-1
	 px-5  fixed top-0 w-full z-50"
    >
      <div className=" text-lg flex items-center space-x-2">
        <img src="/logo-new.jpg" alt="" className="w-10" />
        <div>
          <Link href={"/admin/dashboard"}>Dhule Police</Link>
        </div>
      </div>

      <div className=" text-base flex items-center space-x-2">
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </nav>
  );
};

export default AdminN;
