import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";
const popins = Poppins({
  weight: ["300", "400", "500", "800", "900"],
  subsets: ["latin"]
});

const Hero = () => {
  return (
    <div
      className={`relative z-0 w-full overflow-hidden bg-opacity-75 bg-[url('/assets/img/governor-house.jpg')] bg-cover ${popins.className}`}
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
          <p className="my-5 text-main whitespace-nowrap text-center tex-[1.25rem] font-extrabold sm:text-2xl md:text-left">
            Earn up to $5,000 / month
          </p>
          <p className="my-5 text-main w-full text-center tex-[1.25rem] font-bold tracking-wider md:w-[80%] sm:text-2xl md:text-left">
            Now admissions are open in Hyderabad
          </p>
          <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-col sm:gap-5 md:mb-0">
            <Link href={"/apply"} className="w-full md:w-auto">
              <button className=" w-full rounded-md:text-main text-center text-sm py-3 font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
