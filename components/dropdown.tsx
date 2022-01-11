import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState, MouseEvent } from "react";
import IDropdown from "../interfaces/IDropdown";

export default function DropDown({title, options}: IDropdown) {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const handleClick = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    setDropdown(!dropdown);
  }
  return <Link href=""><a onClick={handleClick} className='relative dropdown pb-2'>
    {title}
    {dropdown ? <ChevronUpIcon
      className='mr-1 ml-2 h-5 w-5" text-blue-800 inline active:outline-none focus:outline-none'
      aria-hidden="true"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex={-1} />
      : <ChevronDownIcon
        className='className="-mr-1 ml-2 h-5 w-5" text-blue-800 inline active:outline-none focus:outline-none'
        aria-hidden="true"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1} />}
    <ul className={`dropdown-content ${!dropdown && `hidden`} last:pb-2 space-y-2 divide-y divide-gray-200 list-none origin-top-right mt-2 absolute flex-col w-48 rounded-md shadow-lg bg-white `}>
      {options.map((option, index)=>(
        <li key={index} className="hover:bg-blue-100 px-3 pt-2 border-b-black"><Link href={option.href}><a>{option.name}</a></Link></li>
      ))}
      
    </ul>
  </a></Link>;
}