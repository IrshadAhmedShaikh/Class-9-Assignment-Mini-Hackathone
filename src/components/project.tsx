import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Project = () => {
  return (
    <div className='w-full h-[2096] flex justify-center items-center' id='project' >

        <div className='w-[1440px] h-screen justify-center bg-[#FFFFFF]'>
        <h1 className='w-[138px] h-[40px] mt-[73px] ml-[651px] sora font-[600] text-[32px] leading-[40.32px] text-justify text-[#457B9D]'>Projects</h1>
        <h1 className='w-[462px] h-[60px] mt-[141] ml-[489px] sora font-[700] text-[48px] leading-[60.48px] text-justify'>What I have made?</h1>
        <div className='w-[1149px] h-[310px] flex justify-center ml-[145px] mt-10 items-center gap-[30px]'>
            <div className='w-[362px] h-[310px]  rounded-[10px] [box-shadow:0px_4px_4px_0px_#00000040]'>
                <Image
                src="/image 1.png"
                alt='logo'
                width={363} 
                height={198}
                className='rounded-tl[10px] rounded-tr[10px] border-b-[1px]'

                />
                <h1 className="w-[258px] h-[25px] mt-3 ml-[18px] sora font-[600] text-[20px] leading-[25.2px] text-justify">
              Portfolio Website Design
            </h1>
            <p className="w-[302px] h-[18px] mt-3 ml-[18px] sora font-[400] text-[14px] leading-[17.64px] text-justify">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="w-[44px] h-[18px] mt-1 ml-[18px] sora font-[400] text-[14px] leading-[17.64px] text-justify text-[#457B9D]">
              <Link href="/">Figma</Link>
            </div>

            </div>

            <div  className="w-[362px] h-[310px] rounded-[10px] [box-shadow:0px_4px_4px_0px_#00000040]">
                <Image
                src='/image  (2).png'
                alt='logo'
                width={363}
                height={198}
                className='rounded-tl[10px] rounded-tr[10px] border-b-[1px]'/>
                  <h1 className="w-[258px] h-[25px] mt-3 ml-[18px] sora font-[600] text-[20px] leading-[25.2px] text-justify">
              Portfolio Website Design
            </h1>
            <p className="w-[302px] h-[18px] mt-3 ml-[18px] sora font-[400] text-[14px] leading-[17.64px] text-justify">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="h-[18px] mt-1 ml-[18px] sora font-[400] text-[14px] leading-[17.64px] text-justify text-[#457B9D] flex gap-5">
              <Link href="/">Live View</Link>
              <Link href="/">Github</Link>
              <Link href="/">Figma</Link>
            </div>

            </div>
            <div className='w-[362px] h-[310px] rounded-[10px] bg-[#FFFFFF] [box-shadow:0px_4px_4px_0px_#00000040]'>
                <Image
                src='/image (3).png'
                alt='logo'
                width={363}
                height={198}
                className='rounded-tl[10px] rounded-tr[10px] border-b-[1px]'/>
                  <h1 className="w-[258px] h-[25px] mt-3 ml-[18px] sora font-[600] text-[20px] leading-[25.2px] text-justify">
              Edubix
            </h1>
            <p className="w-[302px] h-[18px] mt-3 ml-[18px] sora font-[400] text-[14px] leading-[17.64px] text-justify">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="h-[18px] mt-1 ml-[18px] sora font-[400] text-[14px] leading-[17.64px] text-justify text-[#457B9D] flex gap-5">
              <Link href="/">Live View</Link>
              <Link href="/">Github</Link>
            </div>
            </div>
        </div>
         <div className='w-[1149px] h-[310px] mt-1 ml-[145px] flex justify-center items-center gap-[30px]'>

      <div className='w-[363] h-[310]  tl-[10px] tr-[10px] border-b-solid-[1px] border-[#000000] rounded-[10px] [box-shadow:0px_4px_4px_0px_#00000040] '>
        <Image
        src='/image 1 (4).png'
        alt='image'
        width={363}
        height={198}
        />
        <h1 className='w-[282px] h-[25px] sora text-[20px] ml-[15px] mt-2 font-[600] text-[#000000] leading-[25.2px] text-justify'>PPDB SMK Telesandi Bekasi</h1>
        <p className='w-[302] h-[18px] mt-[3px] ml-[15px] sora font-[400] text-[14px] text-[#000000B2] text-justify leading-[17.64px]'>
        Lorem ipsum dolor sit amet consectetur.</p>
        <div className='w-[64px] h-[18px] mt-1 ml-[15px] sora font-[400] text-[14px] text-[#457B9D] '>
        <Link href="/">Live View</Link>
        </div>

      </div>

      
      <div className='w-[363] h-[310]  tl-[10px] tr-[10px] border-b-solid-[1px] border-[#000000] rounded-[10px] [box-shadow:0px_4px_4px_0px_#00000040] '>
        <Image
        src='/image 1 (4).png'
        alt='image'
        width={363}
        height={198}
        />
        <h1 className='w-[282px] h-[25px] sora text-[20px] ml-[15px] mt-2 font-[600] text-[#000000] leading-[25.2px] text-justify'>PPDB SMK Telesandi Bekasi</h1>
        <p className='w-[302] h-[18px] mt-[3px] ml-[15px] sora font-[400] text-[14px] text-[#000000B2] text-justify leading-[17.64px]'>
        Lorem ipsum dolor sit amet consectetur.</p>
        <div className='w-[64px] h-[18px] mt-1 ml-[15px] sora font-[400] text-[14px] text-[#457B9D] '>
        <Link href="/">Live View</Link>
        </div>

      </div>

      
      <div className='w-[363] h-[310]  tl-[10px] tr-[10px] border-b-solid-[1px] border-[#000000] rounded-[10px] [box-shadow:0px_4px_4px_0px_#00000040] '>
        <Image
        src='/image 1 (4).png'
        alt='image'
        width={363}
        height={198}
        />
        <h1 className='w-[282px] h-[25px] sora text-[20px] ml-[15px] mt-2 font-[600] text-[#000000] leading-[25.2px] text-justify'>PPDB SMK Telesandi Bekasi</h1>
        <p className='w-[302] h-[18px] mt-[3px] ml-[15px] sora font-[400] text-[14px] text-[#000000B2] text-justify leading-[17.64px]'>
        Lorem ipsum dolor sit amet consectetur.</p>
        <div className='w-[64px] h-[18px] mt-1 ml-[15px] sora font-[400] text-[14px] text-[#457B9D] '>
        <Link href="/">Live View</Link>
        </div>

      </div>
      
    </div>
      
    </div>

    </div>
    
    
    

    
   
    
    
  )

}

export default Project