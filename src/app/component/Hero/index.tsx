import { Poppins } from "next/font/google";
import React from "react";
const popins = Poppins({
  weight: ["300", "400", "500", "800", "900"],
  subsets: ["latin"]
});

const Hero = () => {
  return (
    <div
      className={`relative z-0 w-full overflow-hidden bg-opacity-75 bg-[url('../governor-house.jpg')] bg-cover ${popins.className}`}
    >
      <div className="absolute inset-0 h-full w-full bg-zinc-100 -z-50 bg-opacity-80"></div>
      <div className="m-auto z-50 mt-6 w-[95%] block justify-between items-center md:flex-row lg:w-[90%] xl:w-[1300px]">
        <div className="h-fit w-full md:w-1/2 md:py-10 mt-10">
          <h1 className="whitespace-nowrap text-[2rem] font-extrabold text-main leading-10 tracking-wider sm:text-5xl sm:leading-none md:text-left lg:text-6xl capitalize">
            governor sindh
          </h1>
          <h1 className="whitespace-nowrap text-[1.5rem] font-normal tracking-wider  leading-[2rem] text-main sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem] capitalize">
            kamran tessori
          </h1>
          <h1 className="whitespace-nowrap text-center mt-5 font-semibold leading-[2rem] text-[5rem] tracking-wider text-sub sm:text-4xl sm:leading-[3rem] sm:text-left lg:text-[2.5rem]">
            Certified Cloud <br />
            Applied Generative AI <br />
            Engineer (GenEng)
          </h1>
          <p className="text-main whitespace-nowrap text-center tex-[2.5rem] font-extrabold sm:2xl md:text-left">
            Earn up to $5,000 / month
            <br />
            Now admissions are open in Hyderabad
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
