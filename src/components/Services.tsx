import React from "react";
import { FaBullhorn, FaPaintBrush, FaCode, FaSearch } from "react-icons/fa"; // Import icons from react-icons

function Services() {
  return (
    <>
      <section id="services" className="py-40 px-2 md:px-8 bg-[#1a1a1a]">
        <div className="text-center">
          <h4 className="text-white text-4xl lg:text-5xl font-[Caveat]">
            <span className="">
              <span className="text-light-beige capitalize text-[#B4BEC9]">w</span>hat{" "}
              <span className="text-light-beige capitalize text-[#B4BEC9]">I</span>{" "}
              <span className="text-light-beige capitalize text-[#B4BEC9]">d</span>o{" "}
              <span className="text-light-beige capitalize text-[#B4BEC9]">f</span>or{" "}
              <span className="text-light-beige capitalize text-[#B4BEC9]">c</span>lients
            </span>
          </h4>
          <p className="w-[90%] lg:w-[80%] mt-6 mx-auto text-white text-sm lg:text-lg leading-6">
          I specialize in crafting dynamic, user-friendly websites and applications tailored to your needs. From clean designs to seamless functionality, I ensure every project delivers an exceptional user experience while meeting your business goals.
          </p>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 text-start">
            
            <div className="rounded-xl py-6 px-4 bg-[#222] flex flex-col justify-between items-center cursor-pointer transition-all duration-[1.2s] hover:bg-[#444]">
              <div className="w-full mx-0 text-start flex justify-center">
                <FaBullhorn className="text-white text-6xl" /> {/* Branding Icon */}
              </div>
              <div className="w-full mt-12 text-white">
                <h4 className="text-2xl capitalize mb-4">branding</h4>
                <p>
                I craft engaging and functional websites that bring brands to life through innovative design and seamless user experiences.
                </p>
              </div>
            </div>

            <div className="rounded-xl py-6 px-4 bg-[#222] flex flex-col justify-between items-center cursor-pointer transition-all duration-[1.2s] hover:bg-[#444]">
              <div className="w-full mx-0 text-start flex justify-center">
                <FaPaintBrush className="text-white text-6xl" /> {/* Design Icon */}
              </div>
              <div className="w-full mt-12 text-white">
                <h4 className="text-2xl capitalize mb-4">design</h4>
                <p>
                I use Figma to create interactive and visually stunning prototypes, ensuring seamless collaboration and delivering user-centric designs that align with brand goals.
                </p>
              </div>
            </div>

            <div className="rounded-xl py-6 px-4 bg-[#222] flex flex-col justify-between items-center cursor-pointer transition-all duration-[1.2s] hover:bg-[#444]">
              <div className="w-full mx-0 text-start flex justify-center">
                <FaCode className="text-white text-6xl" /> {/* Development Icon */}
              </div>
              <div className="w-full mt-12 text-white">
                <h4 className="text-2xl capitalize mb-4">development</h4>
                <p>
                I develop responsive, high-performance websites using clean code and the latest technologies, ensuring seamless functionality and an excellent user experience across all devices.
                </p>
              </div>
            </div>

            <div className="rounded-xl py-6 px-4 bg-[#222] flex flex-col justify-between items-center cursor-pointer transition-all duration-[1.2s] hover:bg-[#444]">
              <div className="w-full mx-0 text-start flex justify-center">
                <FaSearch className="text-white text-6xl" /> {/* SEO Icon */}
              </div>
              <div className="w-full mt-12 text-white">
                <h4 className="text-2xl capitalize mb-4">SEO</h4>
                <p>
                I optimize websites for search engines using best SEO practices, ensuring higher visibility, better ranking, and a seamless user experience to drive organic traffic.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
