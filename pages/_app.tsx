import '@/styles/globals.css'
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app'
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";


export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
    </ThemeProvider>
  );
}
