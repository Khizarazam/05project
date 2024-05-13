import React from 'react'
import { IoMdPaw } from "react-icons/io";
export default function Home() {
  return (
    <>
     <div className='w-full h-[550px] bg-[#fffaf5]'>
     <div className="flex text-[#000958] ml-20 ">
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
   
    
                   {/* Catogary */}

      <div>
        <p className='bg-[#fffaf5] text-center text-2xl font-sans text-[#000958] font-bold'>Categories</p>
        
        <div className='bg-[#fffaf5] w-full h-[470px] flex justify-between items-center pl-[90px] pr-[90px]'>
           <div className='w-[220px] h-[200px] bg-[#fff0e1] rounded-xl hover:bg-[#ebd1b8] cursor-pointer'>
              <p className='font-bold pt-3 text-center'>Fish</p>
              <div><img src="download.jpg" alt="" className='mt-8 mix-blend-multiply w-[80%] h-[80%] ml-3'/></div>
           </div>
           <div className='w-[220px] h-[200px] bg-[#fff0e1] rounded-xl hover:bg-[#ebd1b8] cursor-pointer'>
              <p className='font-bold pt-3 text-center'>Cats</p>
              <div><img src="pic1.png" alt="" className='mt-10 mix-blend-multiply w-[80%] h-[80%] ml-5'/></div>
           </div>
           <div className='w-[220px] h-[200px] bg-[#fff0e1] rounded-xl hover:bg-[#ebd1b8] cursor-pointer'>
              <p className='font-bold pt-3 text-center'>Birds</p>
              <div><img src="pic3.png" alt="" className='mt-12 mix-blend-multiply w-[80%] h-[80%] ml-3'/></div>
           </div>
           <div className='w-[220px] h-[200px] bg-[#fff0e1] rounded-xl hover:bg-[#ebd1b8] cursor-pointer'>
              <p className='font-bold pt-3 text-center'>Ducks</p>
              <div><img src="pic4.png" alt="" className='mt-7 mix-blend-multiply w-[70%] h-[70%] ml-6'/></div>
           </div>
        </div>
      </div>

      <div className='w-[100%] h-[950px] bg-[#fffaf5] flex'>
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
            <div className='bg-[#000958]  w-[230px] h-[150px] mt-[30px] rounded-lg shadow-xl'><p className='text-xl font-semibold text-[#ffc817] ml-[55px] pt-[30px]'>FLASH SALE</p><p className='text-[#ffffff] ml-[84px]'>Ends in</p></div>
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
             <div className='bg-white w-[90%] h-[40px] rounded-lg shadow-xl flex mt-[50px] ml-[30px]'><IoMdPaw className="text-3xl text-[#000958] pt-[5px] pl-[5px]"/><p className='font-bold text-xl text-[#000958] pt-[5px] pl-[15px]'>Trending Products</p></div>
             <div className='w-full flex'>
                <div className='bg-[#b64fc8] ml-[36px] w-[320px] h-[200px] mt-[30px] rounded-lg shadow-xl'></div>
                <div className='bg-[#2c8b35] ml-[36px] w-[320px] h-[200px] mt-[30px] rounded-lg shadow-xl'></div>
             </div>
          </div>
      </div>

    </>
  )
}
