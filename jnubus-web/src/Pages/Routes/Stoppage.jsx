import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LoadingPage from "../LoadingPage";
const MapEmbed = ({ latitude, longitude, name }) => {
  return (
    <div style={{ width: "600px", height: "400px" }}>
      <iframe
        title={`Embeded map of ${name}`}
        width="100%"
        height="100%"
        allowFullScreen
        style={{ border: "2px", borderColor: "teal" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A${latitude}%3A${longitude}!2s${name.split(
          " "
        )}!5e0!3m2!1sen!2sus!4v1623056761395!5m2!1sen!2sus`}
      ></iframe>
    </div>
  );
};
const Stoppage = () => {
  const axiosPublic = useAxiosPublic();
  const [stoppage, setstoppage] = useState({});
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axiosPublic
      .get(`/stoppage/find/${id}`)
      .then((res) => {
        setstoppage(res.data);
        console.log(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const { id } = useParams();
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div className="py-10 px-5 lg:px-20">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold">
          Stoppage Details : {stoppage.name}{" "}
        </h1>
      </div>
      <section className="py-10 lg:flex gap-5">
        <div>
          <MapEmbed
            latitude={stoppage.location.lat}
            name={stoppage.name}
            longitude={stoppage.location.lng}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold flex justify-center mx-auto">
            Bus Passes by this Stoppage ({stoppage.buses.length})
          </h1>
          <div>
            <ul className="py-5 divide-y-2 divide-teal-700">
              {stoppage.buses.map((bus) => (
                <li key={bus._id} className="py-2">
                  <h1 className="text-lg font-bold">Name: {bus.name}</h1>
                  <p>Driver: {bus.driver.name}</p>
                  <p>
                    Contact:{" "}
                    <a href={`tel:${bus.driver.phone}`}>{bus.driver.phone}</a>
                  </p>
                  <p>
                    Last Stoppage:{" "}
                    {
                      bus.route.stoppage[bus.route.stoppage.length - 1].point
                        .name
                    }
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stoppage;
