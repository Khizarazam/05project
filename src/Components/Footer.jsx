import React from 'react'
import { IoMdPaw } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <div className='w-full h-[350px] bg-[#fde7cb]'>
        
        
        
        <div className='flex'>
        <IoMdPaw className="text-3xl text-[#000958] mt-[70px] ml-[100px]"/>
          <div className='text-[#000958] ml-[180px] mt-[70px]'>
            <h3 className=' font-semibold text-xl'>Company</h3>
            <p className='pt-[20px]'>About Us</p>
            <p className='pt-[13px]'>FAQ</p>
            <p className='pt-[13px]'>Contact</p>
          </div>

          <div className='text-[#000958] ml-[180px] mt-[70px]'>
            <h3 className=' font-semibold text-xl'>Legal</h3>
            <p className='pt-[20px]'>Privacy Policy</p>
            <p className='pt-[13px]'>Terms and Condition</p>
            <p className='pt-[13px]'>Cookie Policy</p>
          </div>

          <div className='text-[#000958] ml-[180px] mt-[70px]'>
            <h3 className=' font-semibold text-xl'>Help</h3>
            <p className='pt-[20px]'>Shipping and Delivery</p>
            <p className='pt-[13px]'>Return Policy</p>
            <p className='pt-[13px]'>Security and Payment</p>
          </div>

          <div className='text-[#000958] ml-[70px] mt-[150px]'>
            <h3 className=' font-semibold text-lg'>Social</h3>
            <div className='flex'>
              <IoLogoInstagram className='text-3xl mt-[10px]'/>
              <IoLogoTwitter className='text-3xl mt-[10px] ml-[10px]'/>
            </div>
          </div>

          
        </div>
        <hr className="border-[1px] border-[#000958] ml-16 mr-16 mt-[80px]"/>
        <div className='w-full text-center text-[#000958] pt-[10px]'>
          <p>Copyright@ Uizard Pet Shop 2024</p>
        </div>
      </div>
      
    </>
  )
}
