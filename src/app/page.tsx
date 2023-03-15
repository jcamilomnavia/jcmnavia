'use client';
import localFont from 'next/font/local';
import classNames from 'classnames';
import Header from './sections/header';
import Navbar from './sections/navbar';
import Work from './sections/work';
import Skills from './sections/skills';
import Education from './sections/education';
import AboutMe from './sections/about-me';
import Footer from './sections/footer';

const rooberFont = localFont({
  src: './assets/fonts/RoobertVF.woff2',
  weight: '100 900',
});

const Home = () => {
  return (
    <main
      className={classNames(rooberFont.className)}
      style={{backgroundColor: 'black'}}
    >
      <Header />
      <Navbar />
      <Work />
      <Skills />
      <Education />
      <AboutMe />
      <Footer />
    </main>
  );
};

export default Home;
