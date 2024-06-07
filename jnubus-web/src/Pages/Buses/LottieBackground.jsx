import Lottie from "lottie-react";
import React from "react";
import animationData from "../../assets/road.json";

const LottieBackground = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, // Replace with your animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className="h-full  w-screen -top-[10px] lg:-top-[250px]"
      style={{
        position: "fixed",
        left: 0,
        opacity: 0.4,
        zIndex: -1,
      }}
    >
      <Lottie animationData={animationData} />
    </div>
  );
};

export default LottieBackground;
