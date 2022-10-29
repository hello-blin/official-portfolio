import React from "react";
import Image from "next/image";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import code from "../public/code.png";

export default function ServiceCard() {
  return (
    <section>
      <div>
        <h3 className="text-5xl py-7 dark:text-white ">Services I offer</h3>
        <p className="text-2xl py-2 leading-10 text-gray-800 dark:text-white">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for
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
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <Image src={design} width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2  ">Beautiful Designs</h3>
          <p className="py-2">
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
          <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Illustrator</p>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Indesign</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <Image src={code} width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2 ">
            Code your dream project
          </h3>
          <p className="py-2">
            Do you have an idea for your next great website? Let's make it a
            reality. Check the stack I use down below.
          </p>
          <h4 className="py-4 text-teal-600">Technologies I Use</h4>
          <p className="text-gray-800 py-1">Wordpress</p>
          <p className="text-gray-800 py-1">Next</p>
          <p className="text-gray-800 py-1">Tailwind</p>
          <p className="text-gray-800 py-1">Contentful</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <Image src={consulting} width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
          <p className="py-2">
            Are you interested in feedback for your current project? I can give
            you tips and tricks to level it up.
          </p>
          <h4 className="py-4 text-teal-600">We can work using</h4>
          <p className="text-gray-800 py-1">Slack</p>
          <p className="text-gray-800 py-1">Notion</p>
          <p className="text-gray-800 py-1">Google Calendar</p>
          <p className="text-gray-800 py-1">Markup.io</p>
        </div>
      </div>
    </section>
  );
}
