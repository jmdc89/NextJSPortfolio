import React from 'react';
import { Cursor, useTypewriter} from 'react-simple-typewriter'


type Props = {}

export default function Hero({}: Props) {

    const [text, count] = useTypewriter({

        words: [
            "Hi, The name' s Jose",
            "Computational Designer",
            "<AI Lover />",
        ],
        loop: true,
        delaySpeed: 2000,
    })

  return (
    <div>
        <h1 >
            <span>{text}</span>
            <Cursor cursorColor="black" />
        </h1>
    </div>
  )
}