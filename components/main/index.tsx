"use client";
import { useEffect, useRef } from "react";
import SmoothScroll from "smooth-scroll";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Main() {
  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800,
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress}= useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress,[0,1],[0.8,1])
  const scaleOpacity = useTransform(scrollYProgress,[0,1],[0.6,1])
  return (
    <motion.div style={
        {
            scale:scaleProgress,
            opacity:scaleOpacity
        }
    } ref={ref} className="bg-[#FFFFFF] w-full">
      <div
        id="home"
        className="mx-auto  flex md:flex-row flex-col max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="w-full">
          <h3 className="uppercase text-black">welcome to my world</h3>
          <h1 className="uppercase font-bold text-black">hey there</h1>
          <h1 className="capitalize text-black text-3xl font-bold">
            {"I'm"} badol hossain{" "}
          </h1>
          <div className="flex text-black mt-3 gap-2 font-bold">
            <span
              className="md:text-[1.5rem] text-xl"
              style={{ display: "inline-block" }}
            >
              A
            </span>
            <TypeAnimation
              className="md:text-[1.5rem] text-xl"
              sequence={[
                " Front End Developer",
                1000,
                "Full Stack Developer",
                2000,
                "Mern stack Developer",
                2000,
                "React developer",
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block" }}
            />
          </div>
          <p className=" text-black mt-4">
            Working with{" "}
            <span className="text-red-600 cursor-pointer"> React,</span>
            <span className="text-blue-600 cursor-pointer"> NextJs,</span>
            <span className="text-blue-600 cursor-pointer"> Redux,</span>
            <span className="text-blue-600 cursor-pointer"> NodeJS,</span>{" "}
            <span className="text-blue-600 cursor-pointer"> ExpressJs,</span>
            <span className="text-blue-600 cursor-pointer"> MongoDB.</span>{" "}
            {"I'm"}
            will be responsible for building and maintaining MERN STACK web
            applications and will play a key role in the development of our
            projects . MERN Stack Developer
          </p>
        </div>
        <div className="w-full md:mt-0 mt-10 flex md:justify-end justify-center">
          <Image
            src="/photo_6134384463711418744_y.jpg"
            alt=""
            width={200}
            height={200}
          />
        </div>
      </div>
    </motion.div>
  );
}
