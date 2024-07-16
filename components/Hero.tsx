import Image from "next/image";
import React from "react";
import Button from "./Button";
import { HERO_COURSE } from "@/constants";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* Placeholder for hero image or course illustration */}
      <div className="hero-course-image"/>
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/hero-course.svg"
          alt="Course"
          width={50}
          height={50}
          className="absolute left-1 top-[-50px] w-10 lg:w-[50px] rounded-xl"
        />
        <h1 className="bold-52 lg:bold-88">
          {HERO_COURSE.title}
        </h1>
        <p className="regular-16 mt-6 text-green-900 xl:max-w-[520px] md:max-w-[400px] sm:max-w-[400px]">
          {HERO_COURSE.description}
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          {/* Replace with star rating component */}
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  key={index}
                  src="/star.svg"
                  alt="Star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-700">
            18k
            <span className="text-xl ml-1">Excellent reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Enroll Now" variant="btn_green" />
          {/* Replace with a play icon for course introduction */}
          <Button
            type="button"
            title="Watch Introduction"
            variant="btn_white_text"
            icon="/play.svg"
          />
        </div>
      </div>

      {/* Placeholder for additional course information */}
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-white shadow-md px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-600">Course Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-gray-800">Online</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
