'use client';

import About from '@/components/about';
import Contact from '@/components/contact';
import MyProjects from '@/components/projects/MyProjects';
import Testimonials from '@/components/testimonials';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Experience from '@/components/experience';
export default function Home() {

  return (
    <main className='flex flex-col items-center px-4 overflow-x-hidden relative'>
      <Header />
      <About />
      <Experience />
      <MyProjects />
      <Testimonials />
      <Contact />
      <Footer /> 
    </main>
  );
}
