import { Poppins } from "next/font/google";
import React from "react";
const popins = Poppins({
  weight: ["300", "400", "500", "800", "900"],
  subsets: ["latin"]
});

const Hero = () => {
  return (
    <div
      className={`relative z-0 w-full overflow-hidden bg-opacity-75 bg-[url('/governor-house.jpg')] bg-cover ${popins.className}`}
    >
      <div className="absolute inset-0 h-full w-full bg-zinc-100 -z-50 bg-opacity-80"></div>
      <div className="m-auto z-50 mt-6 w-[90%] flex justify-between items-center"></div>
    </div>
  );
};

export default Hero;
