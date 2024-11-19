"use client";

import { Component, ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Image1 from "@/assets/img/image10.jpg"; // Assuming this is a valid static import

export default class ImagesCarousel extends Component {
  render(): ReactNode {
    const data = [
      {
        img: Image1,
        title: "Student learning Web3 basics",
      },
      {
        img: Image1,
        title: "Another Image Example",
      },
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
            dots: true,
          },
        },
      ],
    };

    return (
      <div>
        <h2>Image Carousel</h2>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index}>
              <Image src={item.img} alt={item.title} width={500} height={300} />
              <p>{item.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
