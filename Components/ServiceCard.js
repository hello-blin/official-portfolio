import React from "react";
import Image from "next/image";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import code from "../public/code.png";

export default function ServiceCard() {
  return (
    <section>
      <div className="pt-[100px]">
        <h3 className="text-5xl py-7 dark:text-white">Services I offer</h3>
        <p className="text-2xl py-2 leading-10 text-gray-800 dark:text-white">
          Since the beginning of my journey as a freelance designer and
          developer, I&aposve done remote work for
          <span className="text-[#2980B9]"> agencies </span>
          consulted for <span className="text-[#2980B9]">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
        <p className="text-2xl py-2 leading-10 text-gray-800 dark:text-white">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className="flex flex-col py-10 lg:flex-row lg:flex-wrap w-full gap-10">
        <div className="basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-transparent  dark:border-[2px] dark:border-[#fff]">
          <Image
            src={design}
            width={100}
            height={100}
            blurDataURL="URL"
            placeholder="blur"
            alt={"Design"}
          />
          <h3 className="text-2xl  dark:text-white font-medium pt-8 pb-2 ">
            Beautiful Designs
          </h3>
          <p className="py-2 dark:text-white">
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
          <h4 className="py-4 text-teal-500">Design Tools I Use</h4>
          <p className="text-gray-800 dark:text-white py-1">Photoshop</p>
          <p className="text-gray-800 dark:text-white py-1">Illustrator</p>
          <p className="text-gray-800 dark:text-white py-1">Figma</p>
          <p className="text-gray-800 dark:text-white py-1">Indesign</p>
        </div>
        <div className="basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-transparent dark:border-[2px] dark:border-[#fff]">
          <Image
            src={code}
            width={100}
            height={100}
            blurDataURL="URL"
            placeholder="blur"
            alt={"Coding"}
          />
          <h3 className="text-2xl dark:text-white font-medium pt-8 pb-2 ">
            Code your dream project
          </h3>
          <p className="py-2 dark:text-white">
            Do you have an idea for your next great website? Let&aposs make it a
            reality. Check the stack I use down below.
          </p>
          <h4 className="py-4 text-teal-500">Technologies I Use</h4>
          <p className="text-gray-800 dark:text-white py-1">Wordpress</p>
          <p className="text-gray-800 dark:text-white py-1">Next</p>
          <p className="text-gray-800 dark:text-white py-1">Tailwind</p>
          <p className="text-gray-800 dark:text-white py-1">Contentful</p>
        </div>
        <div className="basis-1/3 flex-1 text-center shadow-lg p-10 mb-[100px] rounded-xl my-10 dark:bg-transparent dark:border-[2px] dark:border-[#fff]">
          <Image
            src={consulting}
            width={100}
            height={100}
            blurDataURL="URL"
            placeholder="blur"
            alt={"consulting"}
          />
          <h3 className="text-2xl dark:text-white font-medium pt-8 pb-2 ">
            Consulting
          </h3>
          <p className="py-2 dark:text-white">
            Are you interested in feedback for your current project? I can give
            you tips and tricks to level it up.
          </p>
          <h4 className="py-4 text-teal-500 ">We can work using</h4>
          <p className="text-gray-800 dark:text-white py-1">Slack</p>
          <p className="text-gray-800 dark:text-white py-1">Notion</p>
          <p className="text-gray-800 dark:text-white py-1">Google Calendar</p>
          <p className="text-gray-800 dark:text-white py-1">Markup.io</p>
        </div>
      </div>
    </section>
  );
}
