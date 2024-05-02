import React from "react";
import { Link } from "react-router-dom";
import { IoMdPaw } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
function Header() {
  return (
    <>
     <div className="bg-[#fffaf5] h-[90px] w-full">
       <div className="flex h-[60px] justify-between items-center text-[#000958]">
        <div className="font-bold ml-16">
         <ul className="flex gap-16">
           <IoMdPaw className="text-2xl"/>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="/Categories">Categories</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex text-2xl gap-3 mr-16 text-[#000958]">
           <BiSearch className=" cursor-pointer"/>
           <AiOutlineShoppingCart className=" cursor-pointer"/>
           <BiSolidUser className=" cursor-pointer"/>
        </div>
      </div>
      <hr className="border-[2px] border-[#000958] ml-16 mr-16"/>

     </div> 
     </>
  );
}

export default Header;
