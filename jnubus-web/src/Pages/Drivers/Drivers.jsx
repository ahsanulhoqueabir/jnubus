import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LoadingPage from "../LoadingPage";
import profile from "../../assets/profile.jpeg";

const EmployeRow = ({ data }) => {
  const { photo, name, enrolment, phone, role } = data;
  return (
    <div className="grid items-center h-24 grid-flow-col p-2 border-[1px] border-teal-200 text-left shadow-md shadow-teal-200">
      <div className="col-span-1">
        <img
          className="size-16 rounded-sm"
          src={photo || profile}
          alt="employe"
        />
      </div>
      <div className=" col-span-5">
        <p>{name}</p>
        <small className="capitalize">{role}</small>
        <p>
          <strong>Phone: </strong>
          <a href={`tel:+${phone}`}> {phone}</a>
        </p>
      </div>
      {/* <div className="col-span-5"></div> */}
    </div>
  );
};

const Drivers = () => {
  const axiosPublic = useAxiosPublic();
  const [employes, setemployes] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axiosPublic.get("/employe/all").then((res) => {
      setemployes(res.data);
      setloading(false);
    });
  }, []);
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div className="py-10">
      <div className="lg:w-2/3 mx-auto px-3">
        <div className="py-2  grid lg:grid-cols-2 gap-5">
          {employes.map((employe) => (
            <EmployeRow data={employe} key={employe._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drivers;
