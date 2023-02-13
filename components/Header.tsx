import React from 'react';
import { SocialIcon } from 'react-social-icons';
import useColorMode from "../hooks/useColorMode";

type Props = {}

export default function Header({}: Props) {

  const [colorMode, setColorMode] = useColorMode();

  return (
    <header className="sticky top-0 flex items-start justify-between">
      <div className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon 
        url="https://www.linkedin.com/in/jos%C3%A9-manuel-dom%C3%ADnguez-425b1b113/"
        fgColor={ colorMode === "dark" ? "gray" : "black" }
        bgColor="transparent"
        />
        <SocialIcon 
        url="https://github.com/jmdc89" 
        fgColor={ colorMode === "dark" ? "gray" : "black" }
        bgColor="transparent"
        />
      </div>

      <div className='flex'>
        <SocialIcon
        className="cursor-pointer"
        network="email"
        fgColor={ colorMode === "dark" ? "gray" : "black" }
        bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in Touch</p>
        
        <div className="flex bg-white dark:bg-black">
        <button
          className="dark:text-white text-black bg-white dark:bg-black"
          onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        >
          Tog
        </button>
         </div>

    </div>
    
    </header>
  )
}