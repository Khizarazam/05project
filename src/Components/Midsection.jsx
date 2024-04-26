import React from 'react'

export default function Midsection() {
  return (
    <>
     <div>
        <p className='bg-[#fffaf5] text-center text-2xl cd 05project
         font-sans text-[#000958] font-bold'>Catogaries</p>
        
        <div className='bg-[#fffaf5] w-full h-[550px] flex justify-between items-center pl-[90px] pr-[90px]'>
           <div className='w-[220px] h-[200px] bg-[#fff0e1] rounded-xl'>
           <p className='font-bold pt-3 text-center'>Fish</p>
            <div><img src="download.jpg" alt="" className='mt-8 mix-blend-multiply w-[80%] h-[80%] ml-3'/></div>
           </div>
           <div className='w-[220px] h-[200px] bg-[#fff0e1] rounded-xl'>
           <p className='font-bold pt-3 text-center'>Cats</p>
            <div><img src="pic1.png" alt="" className='mt-10 mix-blend-multiply w-[80%] h-[80%] ml-5'/></div>
           </div>
           <div className='w-[220px] h-[200px] bg-[#fff0e1] rounded-xl'>
           <p className='font-bold pt-3 text-center'>Birds</p>
            <div><img src="pic3.png" alt="" className='mt-12 mix-blend-multiply w-[80%] h-[80%] ml-3'/></div>
           </div>
           <div className='w-[220px] h-[200px] bg-[#fff0e1] rounded-xl'>
           <p className='font-bold pt-3 text-center'>Ducks</p>
           <div><img src="pic4.png" alt="" className='mt-7 mix-blend-multiply w-[70%] h-[70%] ml-6'/></div>
           </div>
        </div>
      </div>
    </>
  )
} 
