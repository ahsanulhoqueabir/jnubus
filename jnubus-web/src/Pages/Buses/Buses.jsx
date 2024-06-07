import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LoadingPage from "../LoadingPage";
import animationData from "../../assets/road.json";

// import routemap from "../../assets/map.jpg";
import routemap from "../../assets/busroute.jpg";
import BusCard from "./Component/BusCard";
import LottieBackground from "./LottieBackground";
import Lottie from "lottie-react";

const Buses = () => {
  const axiosPublic = useAxiosPublic();
  const [buses, setbuses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosPublic.get("/bus/all").then((res) => {
      // console.log(res.data);
      setbuses(res.data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div
      className="lg:px-5"
      // style={{
      //   backgroundImage: `url(${routemap})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   // backgroundPosition: "center",
      //   backgroundColor: "rgba(255, 255, 255, 0.1)",
      // }}
    >
      <LottieBackground />
      {/* <div
        style={{
          position: "fixed",
          top: "-250px",
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <Lottie animationData={animationData} />
      </div> */}
      <section className="py-10 px-2">
        <div className="grid grid-cols-1 gap-2 lg:w-1/2 mx-auto">
          {buses.map((bus) => (
            <BusCard bus={bus} key={bus._id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Buses;
