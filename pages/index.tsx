import Header from "../components/Header";
import type {NextPage} from "next";
import Head from 'next/head'
import Hero from "../components/Hero";


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jmdc portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact me */}

    </div>

  )
}

export default Home;