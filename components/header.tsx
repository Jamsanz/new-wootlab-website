import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import Button from './button';
import DropDownMenu from './dropdown';

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<any>();
  const [scroll, setScroll] = useState<boolean>(false);
    useEffect(() => {
      
      function handleClickOutside(event: MouseEvent) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [menuRef]);
    useEffect(() => {
      let lastScroll = window.scrollY;
      function scroll(e: any) {
        if (lastScroll < window.scrollY) {
          setScroll(false);
        }else{
          setScroll(true);
        }
        lastScroll = window.scrollY;
      }
      window.addEventListener('scroll',scroll);
      return () => {
        window.removeEventListener('scroll',scroll);
      }
    }, []);
  return (
    <header
      className={`
        p-4 flex h-24 
        items-center justify-between
        relative ${scroll && `sticky top-0 bg-white slide-bottom shadow-md`}
        `}
    >
      <img src="/images/logo.png" alt="" />
      <ul
        ref={menuRef}
        className={`
          slide-bottom
          absolute md:relative
          top-8 md:top-0
          left-0
          w-full md:w-auto
          h-auto md:h-auto
          bg-white
          shadow-2xl md:shadow-none
          p-5 md:p-0
          rounded-lg lg:rounded-none
          md:inline-flex 
          ${open ? `inline-flex` : `hidden`}
          flex-col md:flex-row
          md:space-x-5
          lg:space-x-10 list-none`}
      >
        <div className='md:hidden relative mb-3 z-50'>
          <i onClick={() => setOpen(false)} className="absolute -top-1 right-2 fa fa-times fa-2x"></i>
        </div>
        <li className=' my-2 mx-auto'><Link href=""><a className=''>Blog</a></Link></li>
        <li className=' my-2 mx-auto'>
          <DropDownMenu
            title='Foundation'
            options={[
              { name: 'Digital Kwara', href: '#' },
              { name: 'Digital State', href: '#' },
            ]}
          />
        </li>
        <li className=' my-2 mx-auto'><Link href=""><a className=''>Academy</a></Link></li>
        <li className=' my-2 mx-auto'><Link href=""><a className=''>Join Us</a></Link></li>
        <li className=' my-2 mx-auto'><Link href=""><a className=''>Contact Us</a></Link></li>
        <li className='md:hidden mx-auto my-3'><button className='btn-primary w-full'>Hire developers</button></li>

      </ul>
      <div onClick={()=> setOpen(true)} className='md:hidden bg-transparent inline-flex justify-center items-center'>
        <i className="fa fa-bars text-[#33468A] fa-2x"></i>
      </div>
      <div className='hidden md:inline-flex'>
      <Button> Hire developers</Button>
      </div>
    </header>
  )


}

export default Header;
