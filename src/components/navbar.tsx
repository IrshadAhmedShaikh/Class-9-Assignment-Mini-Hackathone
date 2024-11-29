import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='w-full h-[100px] bg-[#EBFEFF] flex justify-around items-center border-2 border-solid-black leading-[37.8px]  sticky top-0'>
        <div className='sora font-bold text-[30px] text-black'>Rizfan</div>
        <div className='flex gap-[50px] text-[28px] leading-[35.28px]'>
            <Link href="/">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#skill">Skill</Link>
            <Link href="#projects">Project</Link>
            <Link href="#contact"> Contact</Link>
        </div>


    </div>
  )
}

export default Navbar