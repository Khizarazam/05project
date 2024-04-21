import React from 'react'

export default function Midsection() {
  return (
    <>
    
     <div>
        <p className='bg-[#fffaf5] text-center text-2xl pb-4 font-sans text-[#000958] font-bold'>Catogaries</p>
        <hr className="border-[2px] border-[#000958] ml-16 mr-16 "/>
        <div className='bg-[#fffaf5] w-full h-[500px] flex justify-between items-center pl-[90px] pr-[90px]'>
           <div className='w-[220px] h-[200px]'><img src="images.jpg" alt="" className='mix-blend-multiply border-black border-2 rounded-xl w-full h-full object-fit object-center'/></div>
           <div className='w-[220px] h-[200px]'><img src="download.jpg" alt="" className='mix-blend-multiply border-black border-2 rounded-xl w-full h-full object-fit object-center'/></div>
           <div className='w-[220px] h-[200px]'><img src="download 1.jpg" alt="" className='mix-blend-multiply border-black border-2 rounded-xl w-full h-full object-fit object-center'/></div>
           <div className='w-[220px] h-[200px]'><img src="download 2.jpg" alt="" className=' mix-blend-multiply border-black border-2 rounded-xl w-full h-full object-fit object-center'/></div>
        </div>
      </div>
    </>
  )
}
