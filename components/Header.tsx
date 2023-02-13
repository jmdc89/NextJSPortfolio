import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

type Props = {}

export default function Header({}: Props) {

  const [colorMode, setColorMode] = useState("light");

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
          // style={{}}
          checked={colorMode === "light"}
          onChange={() => setColorMode(colorMode === "light" ? "dark" : "light")}
          size={50}
          moonColor={"gray"}
          sunColor={'black'}
        />

      </div>

    </header>
  )
}