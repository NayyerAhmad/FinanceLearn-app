import Image from "next/image";
import React from "react";

const Resources = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/hero-course.svg" alt="Financial Resources" width={50} height={50} className="rounded-xl"/>
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Financial Tips & Resources
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-52 xl:max-w-[390px]">
            Navigate Your Financial Journey
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Access our comprehensive collection of financial tips, guides, and resources. Learn how to budget effectively, save for the future, invest wisely, and achieve financial independence.
          </p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full">
        <Image
          src="/financial-tools.png"
          alt="Financial Tools"
          width={1440}
          height={580}
          className="w-full h-[40rem] object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[6%] lg:top-40">
          <Image
            src="/calendar.svg"
            alt="Calendar"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Updated</p>
                <p className="bold-16 text-green-50">Every Week</p>
              </div>
              <p className="bold-20 mt-2">New Tips & Guides</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Explore Topics</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Start Exploring Today
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
