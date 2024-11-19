"use client";

import { Component, ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image7 from "@/assets/img/image7.jpg";
import Image16 from "@/assets/img/image16.jpg";
import Image17 from "@/assets/img/image17.jpg";
import Image10 from "@/assets/img/image10.jpg";
import Image11 from "@/assets/img/image11.jpg";
import Image12 from "@/assets/img/image12.jpg";
import Image13 from "@/assets/img/image13.jpg";
import Image6 from "@/assets/img/image6.jpg";

import Image from "next/image";

export default class ImagesCarousel extends Component {
  render(): ReactNode {
    const data = [
      { img: Image7, title: "Student learning Web3 basics" },
      { img: Image16, title: "Student learning Web3 basics" },
      { img: Image17, title: "Student learning Web3 basics" },
      { img: Image10, title: "Student learning Web3 basics" },
      { img: Image11, title: "Student learning Web3 basics" },
      { img: Image12, title: "Student learning Web3 basics" },
      { img: Image13, title: "Student learning Web3 basics" },
      { img: Image6, title: "Student learning Web3 basics" }
    ];

    const settings = {
      dots: true,
      arrows: true,
      dotsClass: "slick-dots line-indicator",
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
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
              className="relative rounded-lg overflow-hidden cursor-pointer outline-none"
              key={index}
            >
              <div className="px-3 xl-lg:px-1 group mb-2 md:mb-5 relative">
                <div className="relative rounded-lg overflow-hidden flex gap-3">
                  <Image
                    src={val.img}
                    className="w-full h-[300px] md:h-[600px] object-cover"
                    alt={val.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
