import React, { useEffect, useState } from "react";
import Head from "next/head";
import AdminN from "@/components/Admin-nav";
import AdminM from "@/components/Admin-menu";
import Link from "next/link";
import ProtectedAdminRoute from "@/components/ProtectedAdminRoute";
import Cookies from "js-cookie";

const dashboard = () => {
  return (
    <ProtectedAdminRoute>
      <>
        <Head>
          <title>Admin Dashboard</title>
        </Head>

        <main className="">
          <AdminN />

          <div className="flex flex-row">
            <AdminM />
            <div className="hidden lg:block w-1/5"></div>

            <div className="w-full lg:w-4/5 p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 gap-16">
                <Link
                  href={"/admin/dashboard/police-station"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Police Stations</div>
                  </div>
                </Link>

                <Link
                  href={"/admin/dashboard/officers"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">
                      Police Station Officers
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/sp-message"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">SP Message</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/dgp-message"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">DGP Message</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/igp-message"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">IGP Message</div>
                  </div>
                </Link>

                <Link
                  href={"/admin/dashboard/headline"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Headlines</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/useful-web"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Useful Website</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/imp-contact"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">
                      Important Contacts
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/recruitment"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Recruitment</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/good-work"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Good Work</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/rti"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">RTI</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/tender"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Tender</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/circular"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Circular</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/press"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Press Release</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/atrocity-cases"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Atrocity Cases</div>
                  </div>
                </Link>

                <Link
                  href={"/admin/dashboard/crime-statistics"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">
                      Crime Statistics
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/absconder-list"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Absconder List</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/bandifarari"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Bandifarari</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/drunk-and-drive"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">
                      Drunk and Drive Cases
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/externee"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Externee</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/ncrb"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">
                      NCRB Statistical Information
                    </div>
                  </div>
                </Link>

                <Link
                  href={"/admin/dashboard/mob-voilence"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Mob Voilence</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/download-forms"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Donwload Forms</div>
                  </div>
                </Link>

                <Link
                  href={"/admin/dashboard/info-for-police"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">
                      Information For Police Officers
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/nagrikanchi-sanad"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">
                      Nagrikanchi Sanad
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/prohibitary-order"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">
                      Prohibitory Order
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/rts"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">
                      Right to Service
                    </div>
                  </div>
                </Link>

                <Link
                  href={"/admin/dashboard/gallery"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Gallery</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/home-slider"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Home Slider</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/users"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Users</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/senior-officers"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Senior Officers</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/acp"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Divisional ACPs</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/citizen-alertwall"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">
                      Citizen Alertwall
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/cyber-alertwall"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Cyber Alertwall</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/safety-tips"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Safety Tips</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/special-unit"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Special Unit</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/special-unit-officers"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">
                      Special Unit Officers
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/division"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Division</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/zone"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Zone</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/year"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Year</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/dcp-visit"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">DCP Visit</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/wellfare-activities"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">
                      Wellfare Activities
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/initiatives"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Initiatives</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/accident-compensation"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">
                      Accident Compensation
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/media-coverage"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Media Coverage</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/online-complaint"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">
                      Online Complaint
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/feedback"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">
                      Feedback/Inform Us
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/lost-found"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Lost and Found</div>
                  </div>
                </Link>
                <Link
                  href={"/admin/dashboard/tenant-info"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">Tenant Info</div>
                  </div>
                </Link>
                {/* <Link
                  href={"/admin/dashboard/short-film-entry"}
                  className="hover:scale-105  transition ease-in-out duration-300"
                >
                  <div className=" border bg-yellow-100 hover:bg-yellow-200 p-5 rounded flex flex-col justify-center items-center space-y-1">
                    <div className="font-semibold text-lg">
                      Short Film Competition
                    </div>
                  </div>
                </Link> */}
              </div>
            </div>
          </div>
        </main>
      </>
    </ProtectedAdminRoute>
  );
};

export default dashboard;
