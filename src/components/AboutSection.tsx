import React from 'react'
import {caveat} from '@/font'
import Button from './Button'
import Image from 'next/image'
import Link from 'next/link'

function AboutSection() {
  return (
    <>
      <section id='about' className='w-full py-[160px] px-10 bg-[#002333] flex flex-col md:flex-row justify-center'>
        
        <div className='mx-auto w-[50%] px-[16px] flex flex-col items-start text-left'>
          <p className={`${caveat.className} text-[48px]`}>khizra iqbal</p>
          
          <p className={`${caveat.className} text-[30px] mt-2 mb-6 text-light-beige text-center lg:text-start text-3xl text-[#B4BEC9]`}>Freelance Web Developer</p>
          
          <p className='text-[18px] mb-8'>Hi, I&apos;m Khizra, a passionate web developer with a knack for creating dynamic and user-friendly web applications. My expertise lies in **HTML**, **CSS**, and **TypeScript**, where I focus on crafting clean, responsive designs and interactive functionality. I enjoy turning ideas into reality, whether it&apos;s building a **Dynamic Resume Builder**, or a **core website** with seamless user experiences. I also work with **Next.js** and **Tailwind CSS**, constantly learning and improving my skills to develop production-ready applications. With an eye for detail and a love for simplicity, I aim to create projects that not only work efficiently but also look aesthetically pleasing. Let&apos;s build something amazing together!</p>
        
          <Link href='#contact'><Button textName={"Contact Me"}/> </Link>
        </div>

        <div className='w-[50%] sm:w-[55%] lg:w-[60%] mx-auto md:-mt-[100px] md:-mr-[40px] rounded-full flex justify-center items-center'>
          <Image src={"/myImage/profile.jpeg"} alt='picture' width={350} height={350} className='rounded-full'></Image>
        </div>
      </section>
      
      <section className="w-full py-5 px-5 mx-auto flex justify-center items-center gap-16 bg-[#1a1a1a] overflow-hidden">
        <Image src={"/myImage/html.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myImage/css.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myImage/typescript.png"} alt='picture' width={70} height={70}></Image>
        <Image src={"/myImage/git.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myImage/figma.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myImage/react.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myImage/node.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myImage/next.png"} alt='picture' width={96} height={96}></Image>
      </section>
    </>
  )
}

export default AboutSection