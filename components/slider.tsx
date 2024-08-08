"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { images } from "@/utils/constants";
import Description from "../components/Description";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const clickPrev = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <div className="flex w-full h-screen">
      <div className="w-3/4 h-full relative">
        {images.map((pic, idx) => (
          <div
            className={`${
              idx === activeImage ? "block" : "hidden"
            } w-full h-full`}
            key={idx}
          >
            <Image
              src={pic.src}
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-tl-3xl rounded-bl-3xl relative"
            />
            
          </div>
        ))}
      </div>
      <div className="w-1/4 h-full bg-[#e7dfd9] relative rounded-tr-3xl rounded-br-3xl p-4">
        <Description
          clickNext={clickNext}
          clickPrev={clickPrev}
          activeImgIndex={activeImage}
        />
      </div>
    </div>
  );
};

export default Slider;