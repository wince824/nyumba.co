import React from 'react';
import { images } from "@/utils/constants";
import left from "../public/left-chevron-svgrepo-com.svg";
import right from "../public/right-arrow-svgrepo-com.svg";
import Image from 'next/image';
import { motion } from "framer-motion";

type Props = {
    clickNext: any,
    clickPrev: any,
    activeImgIndex: any
};

const Description = ({ clickNext, clickPrev, activeImgIndex }: Props) => {
    return (
        <div className="h-full flex flex-col justify-between">
            <div className="uppercase text-sm absolute right-4 top-2 underline-offset-4 underline">
                Laundry
            </div>
            {images.map((elem, idx) => (
                <div className={idx === activeImgIndex ? 
                    `block w-full h-full transition-all duration-500 ease-in-out` :
                    "hidden"
                } key={idx}>
                    <motion.div
                        initial={{
                            opacity: idx === activeImgIndex ? 0 : 0.5,
                            scale: idx === activeImgIndex ? 0.5 : 0.3,
                        }}
                        animate={{
                            opacity: idx === activeImgIndex ? 1 : 0.5,
                            scale: idx === activeImgIndex ? 1 : 0.3,
                        }}
                        transition={{
                            ease: "linear",
                            duration: 2,
                        }}
                        className="w-full h-full flex flex-col justify-center items-start p-4"
                    >
                        <div className="py-4 text-3xl font-bold">{elem.title}</div>
                        <div className="leading-relaxed font-medium text-base tracking-wide h-40 italic text-gray-600">
                            {elem.desc}
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <div className="flex justify-start">
                                <div onClick={clickPrev} className="cursor-pointer mx-2">
                                    <Image src={left} alt="" width={30} height={30} />
                                </div>
                            </div>
                            <button className="bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md">
                                Book now
                            </button>
                            <div className="flex justify-end">
                                <div onClick={clickNext} className="cursor-pointer mx-2">
                                    <Image src={right} alt="" width={30} height={30} />
                                </div>
                            </div>
                        </div>
                        
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

export default Description;