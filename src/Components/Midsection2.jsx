import React from 'react'
import { IoMdPaw } from "react-icons/io";

export default function Midsection2() {
  return (
    <>
      <div className='w-[100%] h-[700px] bg-[#fffaf5] flex'>
          <div className=' w-[40%] h-full pt-[50px] pl-[150px]'>

            <div className='bg-white w-[230px] h-[40px] rounded-lg shadow-xl flex'><IoMdPaw className="text-3xl text-[#000958] pt-[5px] pl-[5px]"/><p className='font-bold text-xl text-[#000958] pt-[5px] pl-[15px]'>Special Offers</p></div>
            <div className='bg-[#a5d7eb] w-[230px] h-[260px] mt-[30px] rounded-lg shadow-xl'>
                <div className='pl-[60px] pt-3 w-full h-[70px] rounded-lg'>
                  <p className='text-[20px] font-bold text-[#000958]'>Cat Treats</p>
                  <p className='pl-[10px] text-[#000958] text-[15px]'>by Dr.dogg</p>
                </div>
                <div className='w-full h-[120px]  flex-none'>
                  <div className='rounded-full bg-[#ff5b2e] w-[50px] ml-[120px] h-[50px] text-center'>
                     <p className='font-bold text-white'>30%<br /><span>OFF</span></p>
                  </div>
                  <img src="pic1.png" alt="" className='ml-[70px] w-[80px] h-[60px]'/>
                  <button className='w-[80%] ml-[20px] h-[35px] bg-[#029fe3] mt-[25px] rounded-2xl text-white text-[15px] font-bold'>Shop Now</button>
                </div>
            </div>

            <div className='bg-[#f9e7fc] w-[230px] h-[260px] mt-[30px] rounded-lg shadow-xl'>
                <div className='pl-[40px] pt-3 w-full h-[70px] rounded-lg'>
                  <p className='text-[20px] font-bold text-[#000958]'>New Brand In!</p>
                  <p className='pl-[10px] text-[#000958] text-[15px]'>meet Mr.Wishkerr</p>
                </div>
                <div className='w-full h-[120px]  flex-none'>
                  <div className='rounded-full bg-[#ff5b2e] w-[50px] ml-[120px] h-[50px] text-center'>
                     <p className='font-bold text-white'>50%<br /><span>OFF</span></p>
                  </div>
                  <img src="pic3.png" alt="" className='ml-[70px] w-[100px] h-[70px]'/>
                  <button className='w-[80%] ml-[20px] h-[35px] bg-[#c353d6] mt-[25px] rounded-2xl text-white text-[15px] font-bold'>Shop Now</button>
                </div>
            </div>
          </div>
          <div className=' w-[60%] h-full'>
            <div className='bg-white w-[90%] h-[40px] rounded-lg shadow-xl flex mt-[50px] ml-[30px]'><IoMdPaw className="text-3xl text-[#000958] pt-[5px] pl-[5px]"/><p className='font-bold text-xl text-[#000958] pt-[5px] pl-[15px]'>Trending Products</p></div>
             <div className='flex w-full'>
                <div className='bg-[#f9e7fc] ml-[36px] w-[200px] h-[200px] mt-[30px] rounded-lg shadow-xl'></div>
                <div className='bg-[#8e2f3e] ml-[36px] w-[200px] h-[200px] mt-[30px] rounded-lg shadow-xl'></div>
                <div className='bg-[#94663e] ml-[36px] w-[200px] h-[200px] mt-[30px] rounded-lg shadow-xl'></div>
             </div>
             <div className='flex w-full'>
                <div className='bg-[#4a45b2] ml-[36px] w-[200px] h-[200px] mt-[30px] rounded-lg shadow-xl'></div>
                <div className='bg-[#b64fc8] ml-[36px] w-[200px] h-[200px] mt-[30px] rounded-lg shadow-xl'></div>
                <div className='bg-[#2c8b35] ml-[36px] w-[200px] h-[200px] mt-[30px] rounded-lg shadow-xl'></div>
             </div>
             
          </div>
      </div>
    </>
  )
}
