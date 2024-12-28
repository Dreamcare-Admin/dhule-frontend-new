import React, { useEffect, useState } from "react";
import Head from "next/head";
import AdminN from "@/components/Admin-nav-user";
import AdminM from "@/components/Admin-menu-user";
import Link from "next/link";
import ProtectedAdminRoute from "@/components/ProtectedUserRoutes";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const dashboard = () => {
  const router = useRouter();
  const [psId, setPsId] = useState("");

  useEffect(() => {
    // Check if the user has a valid token
    const token = Cookies.get("psId");

    setPsId(token);

    if (!token) {
      router.push("/admin/login");
    }
  }, []);
  return (
    <ProtectedAdminRoute>
      <>
        <Head>
          <title>User Dashboard</title>
        </Head>

        <main className="">
          <AdminN />

          <div className="flex flex-row">
            <AdminM psId={psId} />
            <div className="w-1/5"></div>

            <div className="w-4/5 p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 gap-16">
                <Link
                  href={`/admin/police-station/police-station/${psId}`}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Police Station</div>
                  </div>
                </Link>

                <Link
                  href={`/admin/police-station/officers/${psId}`}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">
                      Police Station Officer
                    </div>
                  </div>
                </Link>

                <Link
                  href={`/admin/police-station/accident-compensation/${psId}`}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">
                      Accident Compensation
                    </div>
                  </div>
                </Link>
                <Link
                  href={`/admin/police-station/online-complaint/${psId}`}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">
                      Online Complaint
                    </div>
                  </div>
                </Link>
                <Link
                  href={`/admin/police-station/lost-found/${psId}`}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Lost and Found</div>
                  </div>
                </Link>
                <Link
                  href={`/admin/police-station/feedback/${psId}`}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">
                      Feedback / Confidential info
                    </div>
                  </div>
                </Link>
                <Link
                  href={`/admin/police-station/tenant-info/${psId}`}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Tenant Info</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </>
    </ProtectedAdminRoute>
  );
};

export default dashboard;
