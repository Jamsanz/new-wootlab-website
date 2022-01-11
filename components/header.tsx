import Link from 'next/link';
import React, { Fragment, useState } from 'react'
import Button from './button';
import DropDownMenu from './dropdown';

const Header = () => {
  return (
    <div className='flex justify-between items-center pt-6 pb-3'>
      <img src="/images/logo.png" alt="" />
      <ul className="md:inline-flex hidden lg:space-x-10 space-x-5 list-none ">
        <li><Link href=""><a className=''>Blog</a></Link></li>
        <li>
          <DropDownMenu
            title='Foundation'
            options={[
              { name: 'Digital Kwara', href: '#' },
              { name: 'Digital State', href: '#' },
            ]}
          />
        </li>
        <li><Link href=""><a className=''>Academy</a></Link></li>
        <li><Link href=""><a className=''>Join Us</a></Link></li>
        <li><Link href=""><a className=''>Contact Us</a></Link></li>

      </ul>
      <Button> Hire developers</Button>
    </div>
  )


}

export default Header;
