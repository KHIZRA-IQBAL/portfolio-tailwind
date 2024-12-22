import React from 'react';
import Image from 'next/image';

function Testimonials() {
  return (
   <>
     <section id="testimonials" className="bg-[#002333] py-40 px-4 md:px-8">
      <div className="text-white text-center">
        <h4 className="text-white text-4xl lg:text-5xl font-[Caveat] ">
          <span>
            <span className="text-[#B4BEC9]">W</span>hat{' '}
            <span className="text-[#B4BEC9]">O</span>ther{' '}
            <span className="text-[#B4BEC9]">P</span>eople{' '}
            <span className="text-[#B4BEC9]">S</span>ay
          </span>
        </h4>


        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: '/myImage/test6.jpg', alt: 'easton kai', title: 'easton kai', role: 'javascript developer',paragraph:"Khizra's ability to create dynamic, user-focused web applications is remarkable. Her clean coding practices and attention to detail ensure every project she touches exceeds expectations." },
              { src: '/myImage/test5.jpg', alt: 'elijah liam', title: 'elijah liam', role: 'android developer',paragraph:"Collaborating with Khizra has been a pleasure. Her expertise in TypeScript and passion for elegant design truly set her apart in the development community." },
              { src: '/myImage/test4.jpg', alt: 'james owen', title: 'james owen', role: 'IOS developer',paragraph:"Khizra consistently delivers projects that are not only functional but also visually stunning. Her dedication to learning and improving is truly inspiring." },
             
            ].map((person, index) => (
              <div
                key={index}
                className="mx-auto py-8 px-2 md:px-4 border-t-[3px] border-solid border-light-beige rounded-2xl select-none bg-[#1a1a1a] cursor-grab flex flex-col justify-center items-center"
              >
                <div className="w-[8rem] border-[3px] border-solid border-text-[#a9927d] rounded-full p-1">
                  <Image
                    src={person.src}
                    alt={person.alt}
                    width={128}
                    height={128}
                    className="w-full h-full rounded-full"
                  />
                </div>
                <p className="mt-4">{person.title}</p>
                <p className="my-4 text-[#B4BEC9]">{person.role}</p>
                <p className="w-[95%] md:w-[97%] mx-auto mb-6 leading-7 text-center">
                  {person.paragraph}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
   </>
  );
}

export default Testimonials;
