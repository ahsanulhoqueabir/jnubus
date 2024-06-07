import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LoadingPage from "../LoadingPage";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import LottieBackground from "../Buses/LottieBackground";

const BusRoutes = () => {
  const navigate = useNavigate();
  const [stoppages, sestoppages] = useState([]);
  const [allStoppages, setALLStoppages] = useState([]);
  // const [currentItems, setCurrentItems] = useState([]);
  const [loading, setloading] = useState(true);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get("/stoppage/all")
      .then((res) => {
        // console.log(res.data);
        sestoppages(res.data);
        setALLStoppages(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    const place = e.target.place.value;
    const results = [];

    stoppages.map((item) => {
      const av = item.name.toLowerCase().includes(place.toLowerCase());
      if (av) {
        results.push(item);
      }
    });
    console.log(results);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [ItemPerPage, setItemPerPage] = useState(30);
  const indexOfLastItem = currentPage * ItemPerPage;
  const indexOfFirstItem = indexOfLastItem - ItemPerPage;
  let currentItems = stoppages.slice(indexOfFirstItem, indexOfLastItem);
  // useEffect(() => {
  //   setloading(true);
  //   setCurrentItems(allStoppages.slice(indexOfFirstItem, indexOfLastItem));
  //   setloading(false);
  // }, []);

  const pageCount = Math.ceil(stoppages.length / ItemPerPage);
  const numbers = [...Array(pageCount + 1).keys()].slice(1);
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < pageCount) setCurrentPage(currentPage + 1);
  };
  const paginate = (number) => {
    setCurrentPage(number);
    currentItems = stoppages.slice(number * ItemPerPage, number * ItemPerPage);
  };
  const OnchangeSearch = (e) => {
    const place = e.target.value;
    const results = [];
    allStoppages.map((item) => {
      const av = item.name.toLowerCase().includes(place.toLowerCase());
      if (av) {
        results.push(item);
      }
    });
    sestoppages(results);
  };
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div className="py-10">
      <LottieBackground />
      <div className="w-1/3 mx-auto">
        <form
          onChange={OnchangeSearch}
          onSubmit={handleSearch}
          className="flex items-center"
        >
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <FaMagnifyingGlass />
            </div>
            <input
              // onChange={handleSearch}
              name="place"
              type="text"
              className="bg-gray-50 border border-teal-100 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-teal-500 block w-full pl-10 p-2.5  "
              placeholder="Search by Stoppage Name..."
              required
            />
          </div>
          <button
            type="submit"
            className="flex gap-1 items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-teal-400 rounded-lg border  hover:bg-teal-600  focus:outline-none"
          >
            <FaMagnifyingGlass className="" />
            <span>Search</span>
          </button>
        </form>
      </div>
      <div className="px-1 lg:w-2/3 mx-auto py-10 table">
        {currentItems.length ? (
          <table className="w-full table-auto overflow-x-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">S.N</th>
                <th className="px-4 py-2">Stoppage Name</th>
                <th className="px-4 py-2">Buses</th>
                <th className="px-4 py-2">Details</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((stoppage, index) => (
                <tr
                  className={`text-black ${
                    index % 2 == 0 ? "bg-teal-200" : "bg-teal-300"
                  }`}
                  key={stoppage._id}
                >
                  <td className="border px-4 py-2">
                    {indexOfFirstItem + index + 1}
                  </td>
                  <td className="border px-4 py-2">{stoppage.name}</td>
                  <td className="border px-4 py-2">
                    {stoppage.buses.map((bus) => bus.name).join(", ")}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      onClick={() => {
                        navigate(`/stoppage/${stoppage._id}`);
                      }}
                    >
                      Details{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center">No Stoppages found with this name</p>
        )}
      </div>
      {/* -------------------- pagination part ---------------- */}
      {pageCount && (
        <div className="join gap-1 flex justify-center py-10">
          <button
            onClick={prevPage}
            className="join-item bg-blue-100 hover:bg-blue-200 btn"
          >
            «
          </button>
          {numbers.map((number) => (
            <button
              onClick={() => paginate(number)}
              key={number}
              className={`bg-blue-100 hover:bg-blue-200 join-item btn ${
                number === currentPage ? "active" : ""
              }`}
            >
              {number}
            </button>
          ))}
          <button
            onClick={nextPage}
            className="bg-blue-100 hover:bg-blue-200 join-item btn"
          >
            »
          </button>
        </div>
      )}
    </div>
  );
};

export default BusRoutes;
