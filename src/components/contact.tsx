import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <div className="w-full h-[400px] flex items-center bg-[#EBFEFF]" id="contact">
      <div className="w-[579px] h-[294px] ml-[360px] flex flex-col gap-4 ">
        <h1 className="sora font-[600] text-[28px] leading-[35.28px] text-justify text-[#457B9D]">Contacts</h1>
        <h2 className="sora font-[700] text-[48px] leading-[60.48px] text-justify">Get in touch</h2>
        <p className="sora font-[400] text-[20px] leading-[25.2px] -mt-1 text-justify">rizfanher@gmail.com</p>
        <div className="flex gap-4 -mt-2">
          
        <Image
            src="/LinkedIn.png"
            alt="linkedin-ac"
            width={40}
            height={36.56}
          />
              <Image
            src="/github.png"
            alt="github-ac"
            width={40}
            height={36.56}
          />
              <Image
            src="/instagram.png"
            alt="instagram-ac"
            width={40}
            height={36.56}
          />
        </div>
        <p className="sora font-[400] text-[20px] leading-[25.2px] mt-20 text-justify">Copyright © 2023. Develop & Designed by Rizfan Herlaya</p>
      </div>
    </div>
  );
}

export default Contact;