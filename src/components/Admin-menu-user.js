import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const AdminM = (props) => {
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
    <div className="w-1/5 bg-gray-300 hidden lg:flex flex-col space-y-5 h-screen fixed py-20 pl-5 overflow-y-scroll">
      <div>
        <Link
          href={`/admin/police-station/police-station/${psId}`}
          className="hover:text-yellow-500"
        >
          Police Station
        </Link>
      </div>
      <div>
        <Link
          href={`/admin/police-station/officers/${psId}`}
          className="hover:text-yellow-500"
        >
          Police Station Officer
        </Link>
      </div>
      <div>
        <Link
          href={`/admin/police-station/accident-compensation/${psId}`}
          className="hover:text-yellow-500"
        >
          Accident Compensation
        </Link>
      </div>
      <div>
        <Link
          href={`/admin/police-station/online-complaint/${psId}`}
          className="hover:text-yellow-500"
        >
          Online Complaint
        </Link>
      </div>
      <div>
        <Link
          href={`/admin/police-station/lost-found/${psId}`}
          className="hover:text-yellow-500"
        >
          Lost and Found
        </Link>
      </div>
      <div>
        <Link
          href={`/admin/police-station/feedback/${psId}`}
          className="hover:text-yellow-500"
        >
          Feedback / Confidential info
        </Link>
      </div>
      <div>
        <Link
          href={`/admin/police-station/tenant-info/${psId}`}
          className="hover:text-yellow-500"
        >
          Tenant Info
        </Link>
      </div>
    </div>
  );
};

export default AdminM;
