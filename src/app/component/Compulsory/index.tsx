import Image from "next/image";
import Link from "next/link";
import programmingFundamental from "../../../assets/img/image23.jpg";
import nextJs from "../../../assets/img/image24.jpg";
import youLearn from "../../../assets/img/image25.jpg";

const Compulsory = () => {
  return (
    <div
      className="xl:w-[1300px] lg:[w-90%] w-[95%] m-auto mt-10 mb-10
    "
    >
      <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left txet-center  text-main font-extrabold mt-10">
        Core Courses Sequence
      </h1>
      <div className="grid xl-lg:grid-cols-4 grid-cols-1 sm:grid-cols-3 xl-lg:gap-10 gap-5 mt-10">
        <Link
          href={"/compulsory/1"}
          className="hover:scale-105 transition-all duration-200"
        >
          <div className="h-fit overflow-hidden shadow-custom rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold">
            <div>
              <Image
                src={programmingFundamental}
                alt="Programming Fundamental"
                className="object-cover w-full"
                height={"300"}
              />
            </div>
            <div className=" flex px-4 justify-center items-center h-[70px]">
              <text>Programming Fundamentals</text>
            </div>
          </div>
        </Link>
        <Link
          href={"/compulsory/2"}
          className="hover:scale-105 transition-all duration-200"
        >
          <div className="h-fit overflow-hidden shadow-custom rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold">
            <div>
              <Image
                src={nextJs}
                alt="Web2 Using NextJS"
                className="object-cover w-full"
                height={"300"}
              />
            </div>
            <div className=" flex px-4 justify-center items-center h-[70px]">
              <text>Web2 Using NextJS</text>
            </div>
          </div>
        </Link>
        <Link
          href={"/compulsory/3"}
          className="hover:scale-105 transition-all duration-200"
        >
          <div className="h-fit overflow-hidden shadow-custom rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold">
            <div>
              <Image
                src={youLearn}
                alt="Programming Fundamental"
                className="object-cover w-full"
                height={"300"}
              />
            </div>
            <div className=" flex px-4 justify-center items-center h-[70px]">
              <text>Earn as You Learn</text>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Compulsory;
