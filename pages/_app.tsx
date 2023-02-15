import '@/styles/globals.css'
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app'
import React, { useState, useEffect } from "react";



export default function App({ Component, pageProps }: AppProps) {

  return (
        <Component {...pageProps} />
  );
}
