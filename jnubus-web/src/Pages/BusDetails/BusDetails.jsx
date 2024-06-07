import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LoadingPage from "../LoadingPage";
import DriverDetails from "./DriverDetails";
import RoutesDetails from "./RoutesDetails";

const BusDetails = () => {
  const { id } = useParams();
  const [down, setDown] = useState(true);
  const [details, setdetails] = useState({});
  const [stoppages, setStoppage] = useState([]);
  const [loading, setloading] = useState(true);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get(`/bus/find/${id}`).then((res) => {
      setdetails(res.data);
      setStoppage(res.data.route.stoppage);
      setloading(false);
    });
  }, []);
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <section className="px-5 lg:py-20 gap-10 lg:flex justify-center  mx-auto lg:w-2/3">
      <div className="w-full lg:w-[40%]">
        <DriverDetails driver={details.driver} />
      </div>
      <div className="w-full flex-col gap-10">
        <button
          onClick={() => {
            setDown(!down);
          }}
          className={`py-3 my-3 w-full rounded-md text-white ${
            down ? "bg-green-600 " : "bg-red-600"
          }`}
        >
          {down ? (
            <p className="text-center">
              {stoppages[0].point.name} to{" "}
              {stoppages[stoppages.length - 1].point.name}
            </p>
          ) : (
            <p className="text-center">
              {stoppages[stoppages.length - 1].point.name} to{" "}
              {stoppages[0].point.name}
            </p>
          )}
        </button>
        {down ? (
          <RoutesDetails routes={[...stoppages]} />
        ) : (
          <RoutesDetails routes={[...stoppages].reverse()} />
        )}
      </div>
    </section>
  );
};

export default BusDetails;
