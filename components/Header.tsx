import React from 'react';
import { SocialIcon } from 'react-social-icons';
import useColorMode from "../hooks/useColorMode";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

type Props = {}

export default function Header({}: Props) {

  const [colorMode, setColorMode] = useColorMode();

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-0 xl:items-center">
      <div className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon 
        url="https://www.linkedin.com/in/jos%C3%A9-manuel-dom%C3%ADnguez-425b1b113/"
        fgColor={ colorMode === "dark" ? "black" : "gray" }
        bgColor="transparent"
        />
        <SocialIcon 
        url="https://github.com/jmdc89" 
        fgColor={ colorMode === "dark" ? "black" : "gray" }
        bgColor="transparent"
        />

        <SocialIcon
        className="cursor-pointer"
        network="email"
        fgColor={ colorMode === "dark" ? "black" : "gray" }
        bgColor="transparent"
        />
      </div>

      <div className="flex flex-row items-center">
               
        <DarkModeSwitch
          style={{zIndex:99}}
          checked={colorMode === "light"}
          onChange={() => setColorMode(colorMode === "light" ? "dark" : "light")}
          size={50}
          moonColor={"gray"}
          sunColor={'black'}
        />

        {/* <div className="flex bg-white dark:bg-black">
          <button
            className="dark:text-white text-black bg-white dark:bg-black"
            onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
          >
            Tog
          </button>
         </div> */}

      </div>
    
    </header>
  )
}