import React from 'react';

const Page = () => {
  return (
    <main className="mb-20 flex flex-col items-center justify-center">
      <div className="z-10 mx-4 my-10 flex w-full max-w-2xl flex-col items-center justify-center gap-5 rounded bg-opacity-30 px-4 py-8 text-black shadow-lg backdrop-blur-3xl md:mx-14 md:p-16">
        <h2
          className="text-center text-xl text-[#044E83] xs:text-3xl"
          style={{ fontFamily: "'Poppins', sans-serif", fontStyle: "normal" }}
        >
          Before continuing to the application please subscribe on these social media platforms.
        </h2>
        <div className="mt-5 flex gap-3 md:text-sm">
          <div className="flex h-8 w-8 cursor-pointer items-center justify-center bg-[#4267B2] rounded-full text-white">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 320 512"
              className="h-5 w-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
            </svg>
          </div>
        </div>
        <div className="group w-full xs:w-52">
          <div className="popover rounded-lg bg-white px-4 py-2 text-center text-sm text-red-500 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
            <p>Click the icon above first.</p>
          </div>
          <button
            disabled
            className="w-full bg-[#044E83] py-4 text-center font-semibold tracking-widest text-white transition-all hover:translate-y-1 disabled:opacity-60 disabled:hover:cursor-not-allowed xs:w-52"
            style={{ fontFamily: "'Poppins', sans-serif", fontStyle: "normal" }}
          >
            CONTINUE
          </button>
        </div>
        <p className="text-center">
          Already applied?{' '}
          <a className="text-blue-400 underline" href="/admit-card">
            Get Admit Card
          </a>
        </p>
      </div>

      <div
        aria-label="Progress"
        data-orientation="horizontal"
        className="chakra-stepper w-[90%] lg:w-[800px] !justify-center mx-auto !flex-wrap"
      >
        <div
          data-status="active"
          data-orientation="horizontal"
          className="chakra-step"
        >
          <div data-status="active" className="chakra-step__indicator">
            <div data-status="active" className="chakra-step__number">
              1
            </div>
          </div>
          <div className="chakra-step__title">
            <h3 data-status="active" className="capitalize">
              facebook
            </h3>
          </div>
          <div role="separator" data-orientation="horizontal" data-status="active" className="chakra-step__separator"></div>
        </div>

        <div
          data-status="incomplete"
          data-orientation="horizontal"
          className="chakra-step"
        >
          <div data-status="incomplete" className="chakra-step__indicator">
            <div data-status="incomplete" className="chakra-step__number">
              2
            </div>
          </div>
          <div className="chakra-step__title">
            <h3 data-status="incomplete" className="capitalize">
              youtube
            </h3>
          </div>
          <div role="separator" data-orientation="horizontal" data-status="incomplete" className="chakra-step__separator"></div>
        </div>

        <div
          data-status="incomplete"
          data-orientation="horizontal"
          className="chakra-step"
        >
          <div data-status="incomplete" className="chakra-step__indicator">
            <div data-status="incomplete" className="chakra-step__number">
              3
            </div>
          </div>
          <div className="chakra-step__title">
            <h3 data-status="incomplete" className="capitalize">
              twitter
            </h3>
          </div>
          <div role="separator" data-orientation="horizontal" data-status="incomplete" className="chakra-step__separator"></div>
        </div>

        <div
          data-status="incomplete"
          data-orientation="horizontal"
          className="chakra-step"
        >
          <div data-status="incomplete" className="chakra-step__indicator">
            <div data-status="incomplete" className="chakra-step__number">
              4
            </div>
          </div>
          <div className="chakra-step__title">
            <h3 data-status="incomplete" className="capitalize">
              instagram
            </h3>
          </div>
          <div role="separator" data-orientation="horizontal" data-status="incomplete" className="chakra-step__separator"></div>
        </div>

        <div
          data-status="incomplete"
          data-orientation="horizontal"
          className="chakra-step"
        >
          <div data-status="incomplete" className="chakra-step__indicator">
            <div data-status="incomplete" className="chakra-step__number">
              5
            </div>
          </div>
          <div className="chakra-step__title">
            <h3 data-status="incomplete" className="capitalize">
              Apply
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
