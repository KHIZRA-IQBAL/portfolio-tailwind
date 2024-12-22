import React from "react";
import { caveat } from "@/font";
import Link from "next/link";
import { portfolio } from "@/constant/portfolio";
import Image from "next/image";


interface Data
  {
    id:number,
    src:string;
    title:string;
    href:string;
  }

function Portfolio() {
  return (
    <>
      <section id="portfolio" className="w-full py-36 px-8 text-center bg-[#002333]">
        <h4 className={`${caveat.className} text-white text-4xl lg:text-5xl`}>
          <span className="text-[#B4BEC9]">M</span>y{" "}
          <span className="text-[#B4BEC9]">L</span>ast{" "}
          <span className="text-[#B4BEC9]">W</span>ork
        </h4>

        <p className="w-[90%] lg:w-[80%] mt-6 mx-auto text-sm lg:text-lg leading-6">
        Here are some of the projects I&apos;ve worked on, showcasing my skills and passion for web development.Each project reflects my dedication to creating functional, dynamic, and visually appealing applications. Explore my work below!
        </p>

        <div className="w-full mt-24 grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-28">
            {portfolio.map((item, index) => (
            <Link href={item.href}  key={index}>
              <div className="flex flex-col">
                <div className="w-full rounded-3xl overflow-hidden transition-all duration-[0.9s]">
                  <Image
                    src={item.src}
                    alt="Laptop, Phone and Camera"
                    width={500}
                    height={500}
                    className="w-full rounded-3xl transition-all duration-[0.9s] hover:scale-110 hover:-rotate-[5deg]"
                  ></Image>
                </div>

                <p className="mt-6 text-xl">{item.title}</p>
            </div>
            </Link>
            ))}
          </div>
      </section> 
    </>
  );
}

export default Portfolio;
