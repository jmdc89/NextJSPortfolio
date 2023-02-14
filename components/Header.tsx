import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { motion } from "framer-motion";

type Props = {}

export default function Header({}: Props) {

  // const [colorMode, setColorMode] = useState("light");

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };



  return (
    <header className="dark:bg-black sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-0 xl:items-center">
      
      <motion.div 
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-row items-center">

        {/* Social Icons */}
        <SocialIcon 
        url="https://www.linkedin.com/in/jos%C3%A9-manuel-dom%C3%ADnguez-425b1b113/"
        fgColor={ theme === "light" ? "black" : "gray" }
        bgColor="transparent"
        />

        <SocialIcon 
        url="https://github.com/jmdc89" 
        fgColor={ theme === "light" ? "black" : "gray" }
        bgColor="transparent"
        />

        <SocialIcon
        className="cursor-pointer"
        network="email"
        fgColor={ theme === "light" ? "black" : "gray" }
        bgColor="transparent"
        />

      </motion.div>

      <motion.div 
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-row items-center">

        <DarkModeSwitch
          // style={{}}
          checked={theme === "dark"}
          onChange={handleThemeSwitch}
          size={50}
          moonColor={"gray"}
          sunColor={'black'}
        />

      </motion.div>

    </header>
  )
}