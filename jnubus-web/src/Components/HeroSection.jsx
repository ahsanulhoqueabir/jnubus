import React from "react";
import dobledecker from "../assets/double-decker.json";
import Lottie from "lottie-react";
import bus from "../assets/travel.png";
import route from "../assets/bus-stop.png";
import drivers from "../assets/driver.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className=" relative py-10 ">
      <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
        <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
          A rolling nexus of{" "}
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 ">
            Academia.
          </span>
        </h1>
        <div className="lg:flex">
          <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto w-full">
            <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
              A mobile sanctuary of learning, shuttles students across campus,
              where conversations bloom, friendships form, and futures unfold
              with each journey.
            </p>
            <span className="block font-semibold text-gray-500 dark:text-gray-400">
              Check about its
            </span>
            <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
              <Link
                aria-label="Buses"
                to={"/buses"}
                className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
              >
                <div className="flex justify-center space-x-4">
                  <img
                    className="size-6"
                    src={bus}
                    alt="slack logo"
                    loading="lazy"
                    width="128"
                    height="128"
                  />
                  <span className="hidden font-medium md:block dark:text-white">
                    Buses
                  </span>
                </div>
              </Link>
              <Link
                aria-label="Routes"
                to={"/routes"}
                className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30"
              >
                <div className="flex justify-center space-x-4">
                  <img
                    className="w-6 h-6"
                    src={route}
                    alt="Route logo"
                    loading="lazy"
                    width="128"
                    height="128"
                  />
                  <span className="hidden font-medium md:block dark:text-white">
                    Routes{" "}
                  </span>
                </div>
              </Link>
              <Link
                aria-label="Drivers"
                to={"/drivers"}
                className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30"
              >
                <div className="flex justify-center space-x-4">
                  <img
                    className="w-6 h-6"
                    src={drivers}
                    alt="chat logo"
                    loading="lazy"
                    width="128"
                    height="128"
                  />
                  <span className="hidden font-medium md:block dark:text-white">
                    Drivers
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className=" w-full lg:-mt-36">
            <Lottie animationData={dobledecker} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
