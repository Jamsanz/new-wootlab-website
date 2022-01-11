import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer bg-[#444444] flex flex-col justify-around lg:h-[28.5rem] bottom-0 relative'>
      <div></div>
      <div className="flex justify-around text-[#FFFEFE] items-center w-full">
      <div className='inline-flex flex-col max-w-sm space-y-2 text-[#FFFEFE]'>
        <img src="/images/logo 2.png" className='h-[46.54px] w-[212px]' alt="" />
        <p className='pr-5 py-3'>
          We are a team of competent developers
          from around the world that give life to
          great ideas and help leading companies
          build the world's best engineering teams
        </p>
      </div>
        <ul className="flex-col space-y-6 list-none">
          <li><Link href=""><a>Hire developers</a></Link></li>
          <li><Link href=""><a>Blog</a></Link></li>
          <li><Link href=""><a>Join Wootlab</a></Link></li>
          <li><Link href=""><a>Foundation</a></Link></li>
        </ul>
        <ul className="flex-col space-y-6 -mt-10 list-none">
          <li><Link href=""><a>DevCamp</a></Link></li>
          <li><Link href=""><a>Kidscypher</a></Link></li>
          <li><Link href=""><a>Internship</a></Link></li>
        </ul>
        <ul className="flex-col space-y-6 list-none">
          <li><Link href=""><a>SME Enterprises</a></Link></li>
          <li><Link href=""><a>Digital Kwara</a></Link></li>
          <li><Link href=""><a>Careers</a></Link></li>
          <li><Link href=""><a>Contact Us</a></Link></li>
        </ul>
      </div>
        <div className='inline-flex justify-center  space-x-4'>
        <div className="rounded-full w-16 h-16 text-center bg-[#313131] ">
            <i className="text-[#A8A8A8] mt-3 fab fa-instagram fa-2x"></i>
          </div>
        <div className="rounded-full w-16 h-16 text-center bg-[#313131] ">
            <i className="text-[#A8A8A8] mt-3 fab fa-linkedin-in fa-2x"></i>
          </div>
        <div className="rounded-full w-16 h-16 text-center bg-[#313131] ">
            <i className="text-[#A8A8A8] mt-3 fab fa-facebook-f fa-2x"></i>
          </div>
        <div className="rounded-full w-16 h-16 text-center bg-[#313131] ">
            <i className="text-[#A8A8A8] mt-3 fab fa-twitter fa-2x"></i>
          </div>
        </div>
    </footer>
  )
}

export default Footer;
