import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdFacebook } from "react-icons/md";

import dynamic from "next/dynamic";

import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebookRounded,
} from "react-icons/ai";
import Image from "next/image";
import Me from "../public/Me.png";
import Link from "next/link";

const ServiceCard = dynamic(() => import("../Components/ServiceCard"));

import web1 from "../public/web1.webp";
import web2 from "../public/web2.png";
import web3 from "../public/web3.webp";
import web4 from "../public/web4.png";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>HelloBlin</title>
        <meta
          name="description"
          content="Blin Kukaj, developer from Pristina, Kosovo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white dark:bg-[#050A30] dark:color-white px-10 md:px-20 lg:px-40">
        <section className="min-h-[90vh]">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-[#2980B9] text-3xl dark:text-white font-burtons">
              HelloBlin
            </h1>
            <ul className="flex items-center  ">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                  className="cursor-pointer text-xl dark:text-white"
                />
              </li>
              <li>
                <a className="bg-gradient-to-r from-[#2980B9] to-[#6DD5FA] text-white px-4 py-2 border-none rounded-lg ml-8">
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-7xl py-2 dark:text-[#fff] text-[#2980B9] font-bold">
              Blin Kukaj
            </h2>
            <h3 className="text-4xl py-2 md:text-3xl dark:text-white">
              Developer and Designer
            </h3>
            <p className="text-md py-3 leading-8 text-gray-800 dark:text-white md:text-xl max-w-xl mx-auto">
              5 years of serving for the companies around the world. Bringning
              joy and elegance to your website.
            </p>
          </div>
          <div className="text-5xl flex justify-center align-center gap-10 text-gray-500">
            <Link href="https://www.linkedin.com/in/blin-kukaj-103a11176/">
              <AiFillLinkedin className="dark:text-white cursor-pointer fill-[#2980B9]" />
            </Link>
            <Link href="https://github.com/hello-blin">
              <AiFillGithub className="dark:text-white cursor-pointer fill-[#000] dark:fill-white" />
            </Link>
            <Link href="https://www.facebook.com/blinib">
              <MdFacebook className="dark:text-white cursor-grab fill-blue-700" />
            </Link>
          </div>
          <div className="relative mx-auto bg-gradient-to-b  from-[#2980B9] to-[#6DD5FA] rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 border-r-blue-700 border-l-blue-700 border-[40px] border-t-[#6DD5FA] border-b-[#6DD5FA]">
            <Image
              src={Me}
              layout="fill"
              width={"80px"}
              height={"80px"}
              object-fit="cover"
              style={{ marginTop: "20px" }}
              blurDataURL="URL"
              placeholder="blur"
              alt={"Profile picture"}
              className="border-emerald-200"
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-5xl dark:text-white py-2 ">
              What is going on?
            </h3>
            <p className="text-2xl py-7 leading-10 text-gray-800 dark:text-white">
              I will be working using my favourite stack.
              <span className="text-[#2980b9] text-2xl cursor-pointer">
                React
              </span>
              ,
              <span className="text-[#2980b9] text-2xl cursor-pointer">
                {" "}
                Next
              </span>
              ,{" "}
              <span className="text-[#2980b9] text-2xl cursor-pointer">
                {" "}
                TailwindCSS{" "}
              </span>
              are my fav.
              <Link href={"https://www.google.com"}>
                <span className="text-[#2980b9] text-2xl cursor-pointer">
                  {" "}
                  JamStack{" "}
                </span>
              </Link>
              is now one of my specialities. I invite you to collaborate and
              work on a website using Next, Tailwind and Contentful.
            </p>
            <p className="text-2xl py-2 leading-8 text-gray-800 dark:text-white">
              <span className="text-[#2980b9]">Jamstack</span> is now one of my specialities. I invite you to collaborate and
              work on a website using Next, Tailwind and Contentful. Or at the
              end ... We can see and use about other stacks that you may prefer.
            </p>
          </div>
          <ServiceCard />
        </section>
        <section>
          <div>
            <h3 className="text-5xl dark:text-white py-2">Portfolio</h3>
            <p className="text-2xl dark:text-white py-2 leading-10 text-gray-800">
              Since the beginning of my journey I have worked as a freelance
              developer for different{" "}
              <span className="text-[#2980B9]"> agencies</span>.
            </p>
            <p className="text-2xl dark:text-white py-2 leading-10 text-gray-800">
              I offer a wide range of services. Starting from Design, Web
              Development, Deployment and Maintenance.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Link href="https://bliniofficial.com/">
                <Image
                  className="rounded-lg object-cover cursor-pointer"
                  width={"100%"}
                  height={"100%"}
                  layout={"responsive"}
                  src={web1}
                  blurDataURL="URL"
                  placeholder="blur"
                  alt={"Blini Official"}
                ></Image>
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
              <Link href="https://www.seotactica.com">
                <Image
                  className="rounded-lg object-cover cursor-pointer"
                  width={"100%"}
                  height={"100%"}
                  layout={"responsive"}
                  blurDataURL="URL"
                  placeholder="blur"
                  src={web2}
                  alt={"Seotactica.com"}
                ></Image>
              </Link>
            </div>
            <div className="basis-1/3 flex-1 ">
              <Link href="https://www.pappway.de">
                <Image
                  className="rounded-lg object-cover cursor-pointer"
                  width={"100%"}
                  height={"100%"}
                  layout={"responsive"}
                  src={web3}
                  blurDataURL="URL"
                  placeholder="blur"
                  alt={"Pappway.de"}
                ></Image>
              </Link>
            </div>
            <div className="basis-1/3 flex-1 ">
              <Link href="https://www.digital-line.co">
                <Image
                  className="rounded-lg object-cover cursor-pointer"
                  width={"100%"}
                  height={"100%"}
                  layout={"responsive"}
                  src={web4}
                  blurDataURL="URL"
                  placeholder="blur"
                  alt={"digital-line.co"}
                ></Image>
              </Link>
            </div>
          </div>
        </section>
        <footer>
          <div className="flex flex-row justify-center w-full border-t-[2px] py-[20px] border-t-black dark:border-t-white">
            <div className="flex flex-row justify-start align-start content-center w-[50%]">
              <h1 className="text-3xl dark:text-white font-burtons">
                HelloBlin
              </h1>
            </div>
            <div className="flex flex-row justify-end align-end content-center gap-10 w-[50%] md:gap-5">
              <Link href="https://www.linkedin.com/in/blin-kukaj-103a11176/">
                <AiFillLinkedin className="dark:text-white  cursor-pointer w-[45px] h-[25px]" />
              </Link>
              <Link href="https://github.com/hello-blin">
                <AiFillGithub className="dark:text-white cursor-pointer w-[45px] h-[25px] " />
              </Link>
              <Link href="https://www.facebook.com/blinib">
                <MdFacebook className="dark:text-white cursor-pointer w-[45px] h-[25px]" />
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
