import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
      <div>
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
    </header>
  )
}