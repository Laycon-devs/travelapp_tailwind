import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import {
  BsFacebook,
  BsInstagram,
  BsPerson,
  BsPinterest,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const onToggleNav = () => {
    setNav(!nav)
    setLogo(!logo)
  }
  return (
    <div className="absolute z-10 text-white w-full flex justify-between items-center px-2 h-20">
      <div>
        <h1 className={logo ? 'hidden' : 'block'}>COASTS.</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="mr-4" size={20} />
        <BsPerson size={20} />
      </div>
      {/* Mobile hamburger */}
      <div onClick={onToggleNav} className="flex md:hidden z-10 cursor-pointer">
        {nav ? (<AiOutlineClose className="text-black" size={20} />) : (<HiOutlineMenuAlt4 className="text-white" size={20} />)}
      </div>
      {/* Mobile menu */}
      <div onClick={onToggleNav} className={nav ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col" : "absolute left-[-100%]"}>
        <ul className="">
          <h1>COASTS</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destination</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
        </ul>
        <div className="flex flex-col">
          <button className="my-6">Search</button>
          <button>Account</button>
        </div>
        <div className="flex justify-between my-6">
          <BsFacebook className="icon" />
          <BsTwitter className="icon" />
          <BsYoutube className="icon" />
          <BsPinterest className="icon" />
          <BsInstagram className="icon" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
