import Head from "next/head";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {MdFacebook} from "react-icons/md";
import {
    AiFillLinkedin,
    AiFillInstagram,
    AiFillFacebookRounded,
} from "react-icons/ai";
import Image from "next/image";
import Me from "../public/Me.png";
import Link from "next/link";
import ServiceCard from "../Components/ServiceCard";


export default function Home() {
    return (
        <div>
            <Head>
                <title>HelloBlin</title>
                <meta name="description" content="Blin Kukaj, developer from Pristina, Kosovo."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="bg-white px-10">
                <section className="min-h-[85vh]">
                    <nav className="py-10 mb-12 flex justify-between">
                        <h1 className="text-3xl font-burtons">HelloBlin</h1>
                        <ul className="flex items-center  ">
                            <li>
                                <BsFillMoonStarsFill className="cursor-pointer text-xl"/>
                            </li>
                            <li>
                                <a className="bg-gradient-to-r from-[#2980B9] to-[#6DD5FA] text-white px-4 py-2 border-none rounded-lg ml-8">
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="text-center p-10">
                        <h2 className="text-5xl py-2 text-[#2980B9] font-bold">
                            Blin Kukaj
                        </h2>
                        <h3 className="text-2xl py-2">Developer and Designer</h3>
                        <p className="text-md py-3 leading-8 text-gray-800">
                            5 years of serving for the companies around the world. Bringning
                            joy and elegance to your website.
                        </p>
                    </div>
                    <div className="text-5xl flex justify-center align-center gap-10 text-gray-500">
                        <AiFillLinkedin/>
                        <AiFillInstagram/>
                        <MdFacebook/>
                    </div>
                    <div
                        className="relative mx-auto bg-gradient-to-b from-[#2980B9] to-[#6DD5FA] rounded-full w-80 h-80 mt-20 overflow-hidden">
                        <Image
                            src={Me}
                            layout="fill"
                            width={"80px"}
                            height={"80px"}
                            object-fit="cover"
                            style={{marginTop: "20px"}}
                        />
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className="text-3xl py-2 ">What is going on?</h3>
                        <p className="text-2xl py-2 leading-8 text-gray-800">
                            I will be working using my favourite stack.{" "}
                            <span className="text-[#2980b9] text-2xl cursor-pointer">
                {" "}
                                React
              </span>
                            ,{" "}
                            <span className="text-[#2980b9] text-2xl cursor-pointer">
                {" "}
                                Next{" "}
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
                        <p className="text-2xl py-2 leading-8 text-gray-800">
                            is now one of my specialities. I invite you to collaborate and
                            work on a website using Next, Tailwind and Contentful. Or at the end ... We can see and use
                            about other stacks that you prefer.
                        </p>
                    </div>
                    <ServiceCard/>
                </section>
                <section>
                    <div>
                        <h3 className="text-3xl py-2">
                            Portfolio
                        </h3>
                    </div>
                </section>
            </main>
        </div>
    );
}
