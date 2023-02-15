import '@/styles/globals.css'
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app'
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (document.body) {
      if (darkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
  }, [darkMode]);

  return (
        <Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
