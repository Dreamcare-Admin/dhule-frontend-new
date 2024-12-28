import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import Context from "../context/context";

const Groupselect = () => {
  const Ctx = useContext(Context);
  const { t } = useTranslation();
  const [records, setrecords] = useState([]);
  const [error, setError] = useState(false);

  const handleSelectChange = (event) => {
    const url = event.target.value;
    if (url) {
      const tempurl = `/police-station/${url}`;
      window.location.href = tempurl; // Navigate to the selected URL
    }
  };

  const fetchrecords = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-stations`,
        {
          method: "GET",
        }
      );

      const data = await response.json();

      if (data.stations) {
        setrecords(data.stations);
      } else {
        setError(true); // Set error if no stations are found
      }
    } catch (error) {
      setError(true); // Set error on fetch failure
    }
  };

  useEffect(() => {
    fetchrecords();
  }, []);

  return (
    <div className="bg-gray-50 shadow-lg rounded-lg p-6 w-full max-w-2xl mx-auto">
      {/* <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        {t("select_group")}
      </h3> */}
      {error ? (
        <p className="text-red-500 text-sm text-center">{t("error_fetching_stations")}</p>
      ) : (
        <div className="relative">
          <select
            id="group"
            name="location"
            title={t("select_police_station")}
            onChange={handleSelectChange}
            className="block w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="" className="text-gray-500" disabled selected>
              {t("select_group")}
            </option>

            {records.map((record) => (
              <option value={record._id} key={record._id}>
                {Ctx.lang === "en" && record.name}
                {Ctx.lang === "mr" && record.name_in_marathi}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Groupselect;
