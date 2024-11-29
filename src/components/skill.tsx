import React from 'react'
import Image from 'next/image'

const Skill = () => {
  return (
    <div className='w-full h-[462px] flex justify-center item center bg-[#EBFEFF]'id="skill">
        <div className='w-[873px] h-[281px]'>
            <h1 className='sora text-[32px] font-[600] text-center text-[#457B9D] leading-[40.32px] pt-10'>Skills</h1>
            <h1 className='sora font-[700] text-[48px] text-center text-[#000000] leading-[60.48px]'>What I am capable of?

            </h1>
            <div className='w-[852px] h-[129px] flex justify-center items-center gap-[30px] mt-8'>
                <Image 
                src="/logo_html 1.png"
                alt="htmllogo"
                width={102}
                height={107}/>

                <Image
                src="/CSS-Logo 1.png"
                alt="css.logo"
                width={91}
                height={101}/>

                <Image
                src="/bootstrap-logo 1.png"
                alt="botlogo"
                width={101}
                height={101}/>

                <Image src="/tailwindcss-logo 1.png"
                alt="tail.logo"
                width={134}
                height={89}/>

                <Image src="/php_PNG31 1.png"
                alt="logo"
                width={166}
                height={97}/>


                <Image src="/laravel-logo 1.png"alt="logo"
                width={108}
                height={129}/>





            </div>

        </div>
        
    </div>
  )
}

export default Skill