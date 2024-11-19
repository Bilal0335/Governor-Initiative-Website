"use client";

import { Component, ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Image1 from "@/assets/img/image10.jpg"; // Ensure this path is correct and valid.

export default class ImagesCarousel extends Component {
  render(): ReactNode {
    const data = [
      {
        img: Image1,
        title: "Student learning Web3 basics"
      },
      {
        img: Image1,
        title: "Another Image Example"
      }
    ];

    const settings = {
      dots: true,
      dotsClass: "slick-dots line-indicator",
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ],
      customPaging: (i: number) => (
        <div className="mt-2 text-xs opacity-0">{i}</div>
      )
    };

    return (
      <div className="mt-10 w-full">
        <Slider {...settings} className="w-full">
          {data.map((val, index) => (
            <div
              key={index}
              className="relative bg-slate-900 rounded-lg overflow-hidden cursor-pointer outline-none"
            >
              <div className="px-3 xl-lg:px-1 group mb-2 md:mb-5 relative"></div>
              <div className="relative bg-slate-900 rounded-lg overflow-hidden">
                <Image
                  src={val.img}
                  className="w-full h-[300px] md:h-[600px] object-cover"
                  alt={val.title}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
