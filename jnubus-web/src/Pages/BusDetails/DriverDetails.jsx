import React from "react";
import driverimg from "../../assets/busdriver.jpg";
const DriverDetails = ({ driver }) => {
  const { name, enrolment, phone, photo } = driver;
  return (
    <div className="capitalize">
      <img
        className="size-60 object-cover rounded-md"
        src={photo ? photo : driverimg}
        alt={name}
      />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p>
        {" "}
        Driver <span className="text-xs">({enrolment})</span>{" "}
      </p>
      <p></p>
      <a href={`tel:+${phone}`}>Phone: {phone}</a>
    </div>
  );
};

export default DriverDetails;
