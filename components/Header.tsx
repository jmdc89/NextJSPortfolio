import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
      <div className="flex flex-row items-center">
      {/* Social Icons */}
        <SocialIcon 
        url="https://www.linkedin.com/in/jos%C3%A9-manuel-dom%C3%ADnguez-425b1b113/"
        fgColor="gray"
        bgColor="transparent"
        />
        <SocialIcon 
        url="https://github.com/jmdc89" 
        fgColor="gray"
        bgColor="transparent"
        />
      </div>

      <div>
        <SocialIcon
        className="cursor-pointer"
        network="email"
        fgColor="gray"
        bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in Touch</p>
      </div>
    </header>
  )
}