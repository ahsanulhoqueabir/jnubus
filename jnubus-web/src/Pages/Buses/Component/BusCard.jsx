import React from "react";
import single from "../../../assets/single-decker.json";
import double from "../../../assets/double-decker.json";
import { FaClockRotateLeft } from "react-icons/fa6";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const BusCard = ({ bus }) => {
  const { _id, name, bnName, driver, decktype, DOWN, UP, route } = bus;
  const last = route.stoppage[route.stoppage.length - 1].point.name;
  return (
    <Link
      to={`/busdetails/${_id}`}
      className="bg-teal-100  rounded-md shadow-md p-5 text-sm lg:text-md"
    >
      <div className="flex justify-between">
        <div className="w-[80%]">
          <h1 className="text-lg">
            {name} ({bnName})
          </h1>
          <div className="flex items-center py-1">
            <div className="w-8">
              <FaClockRotateLeft />
            </div>
            <div className="flex justify-between w-[90%]">
              <h1>
                <span className="font-bold text-green-800">Up:</span> {UP}
              </h1>
              <h1>
                <span className="font-bold text-red-500">Down:</span> {DOWN}
              </h1>
            </div>
          </div>
          <h1>
            <span className="font-bold">Last Stoppage:</span> {last}
          </h1>
        </div>

        <div className="flex">
          {decktype === "single" ? (
            <Lottie className="w-24 h-16" animationData={single} />
          ) : (
            <Lottie className="w-24 h-16" animationData={double} />
          )}
        </div>
      </div>
    </Link>
  );
};

export default BusCard;
