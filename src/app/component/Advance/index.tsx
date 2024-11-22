import Image from "next/image";
import Link from "next/link";
import Ai from "../../../assets/img/image26.jpg";
import Web3 from "../../../assets/img/image27.jpg";
import cnc from "../../../assets/img/image28.jpg";
import iot from "../../../assets/img/image29.jpg";
import gbs from "../../../assets/img/image30.jpg";
import npa from "../../../assets/img/image31.jpg";

const Advance = () => {
  return (
    <div
      className="xl:w-[1300px] lg:[w-90%] w-[95%] m-auto mt-10 mb-20
    "
    >
      <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-left  text-main font-extrabold mt-10">
        Advanced Courses
      </h1>
      <div className="grid xl-lg:grid-cols-4 grid-cols-1 sm:grid-cols-3 xl-lg:gap-10 gap-5 mt-10">
        <Link
          href={"/tracks/ai/4"}
          className="hover:scale-105 transition-all duration-200"
        >
          <div className="h-fit overflow-hidden shadow-custom rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold">
            <div>
              <Image
                src={Ai}
                alt="Artificial Intelligence (AI) and Deep Learning"
                className="object-cover w-full"
                height={"300"}
              />
            </div>
            <div className=" flex px-4 justify-center items-center h-[70px]">
              <text>Artificial Intelligence (AI) and Deep Learning</text>
            </div>
          </div>
        </Link>
        <Link
          href={"/tracks/wmd/4"}
          className="hover:scale-105 transition-all duration-200"
        >
          <div className="h-fit overflow-hidden shadow-custom rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold">
            <div>
              <Image
                src={Web3}
                alt="Web 3 and Metaverse"
                className="object-cover w-full"
                height={"300"}
              />
            </div>
            <div className=" flex px-4 justify-center items-center h-[70px]">
              <text>Web 3 and Metaverse</text>
            </div>
          </div>
        </Link>
        <Link
          href={"/tracks/cnc/4"}
          className="hover:scale-105 transition-all duration-200"
        >
          <div className="h-fit overflow-hidden shadow-custom rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold">
            <div>
              <Image
                src={cnc}
                alt="Cloud-Native Computing"
                className="object-cover w-full"
                height={"300"}
              />
            </div>
            <div className=" flex px-4 justify-center items-center h-[70px]">
              <text>Cloud-Native Computing</text>
            </div>
          </div>
        </Link>

        <Link
          href={"/tracks/iot/4"}
          className="hover:scale-105 transition-all duration-200"
        >
          <div className="h-fit overflow-hidden shadow-custom rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold">
            <div>
              <Image
                src={iot}
                alt="Ambient Computing and IoT"
                className="object-cover w-full"
                height={"300"}
              />
            </div>
            <div className=" flex px-4 justify-center items-center h-[70px]">
              <text>Ambient Computing and IoT</text>
            </div>
          </div>
        </Link>
        <Link
          href={"/tracks/gbs/4"}
          className="hover:scale-105 transition-all duration-200"
        >
          <div className="h-fit overflow-hidden shadow-custom rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold">
            <div>
              <Image
                src={gbs}
                alt="Genomics and Bioinformatics"
                className="object-cover w-full"
                height={"300"}
              />
            </div>
            <div className=" flex px-4 justify-center items-center h-[70px]">
              <text>Genomics and Bioinformatics</text>
            </div>
          </div>
        </Link>
        <Link
          href={"/tracks/npa/4"}
          className="hover:scale-105 transition-all duration-200"
        >
          <div className="h-fit overflow-hidden shadow-custom rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold">
            <div>
              <Image
                src={npa}
                alt="Network Programmability and Automation"
                className="object-cover w-full"
                height={"300"}
              />
            </div>
            <div className=" flex px-4 justify-center items-center h-[70px]">
              <text>Network Programmability and Automation</text>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Advance;
