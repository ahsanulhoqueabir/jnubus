import React from "react";
import busstop from "../../assets/busstop.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useNavigate } from "react-router-dom";
import {
  FaArrowAltCircleUp,
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";

const TimelineItem = ({ item, last }) => {
  const handleLoc = () => {
    window.location.href = `https://www.google.com/maps/search/?api=1&query=${item.point.location.lat},${item.point.location.lng}`;
  };
  return (
    <VerticalTimelineElement
      onTimelineElementClick={handleLoc}
      className="vertical-timeline-element--work "
      contentStyle={{
        background: "#CAF4FF",
        color: "black",
        padding: "0px 15px",
        margin: "0px 60px",
        // paddingLeft: "10px",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #4D869C" }}
      iconStyle={{ background: "cyan" }}
      icon={<img onClick={handleLoc} src={busstop} className="" alt="" />}
    >
      <h4 className="text-lg font-semibold pt-3">{item.point.name}</h4>
      <div className="flex justify-between ">
        <h4 className="flex items-center gap-1 ">
          <FaArrowCircleUp className="text-red-600" />
          Uptime: {item.upTime}
        </h4>
        <h4 className="flex items-center gap-1">
          <FaArrowCircleDown className="text-green-700" />
          Downtime: {item.downTime}
        </h4>
      </div>
      <h4>Last Stoppage: {last} </h4>
    </VerticalTimelineElement>
  );
};
const RoutesDetails = ({ routes }) => {
  const last = routes[routes.length - 1].point.name;
  return (
    <div>
      <VerticalTimeline layout="1-column-left">
        {routes.map((item) => (
          <TimelineItem key={item._id} item={item} last={last} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default RoutesDetails;
