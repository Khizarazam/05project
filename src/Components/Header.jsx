import React from "react";
import { Link } from "react-router-dom";
import { IoMdPaw } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
function Header() {
  return (
    <>
     <div className="bg-[#fffaf5] h-screen w-full">
       <div className="flex h-[60px] justify-between items-center text-[#000958]">
        <div className="font-bold ml-16">
         <ul className="flex gap-16">
           <IoMdPaw className="text-2xl"/>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Catogaries</Link>
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

      <div className="flex  text-[#000958] ml-20 ">
        <div className=" w-[50%] h-[529px] mt-[170px]">
         <h1 className="text-3xl font-sans  font-bold">
          The best place to buy top quality<br />products for your pets
         </h1>
         <p>
          Shop by pet,brand or product sale!
         </p>
         <input placeholder="What are you looking for?" type="text" className="text-[15px] pl-2 mt-[50px] shadow-xl border-2 border-black rounded-full h-[40px] w-[250px]" />
         <button className="ml-2 rounded-full mt-[50px]  tracking-[0.1em] bg-[#ff5b2e] hover:bg-[#90432e] py-2 px-4 font-bold text-white text-center text-[16px] shadow-xl">Search</button>
        </div>
        <div className=" w-[50%] h-[529px]">
          <img src="pic2.png" className="w-[350px] h-[450px] pt-[40px] pl-[100px] drop-shadow-xl" alt="" />
        </div>
      </div>
     </div> 
     </>
  );
}

export default Header;
