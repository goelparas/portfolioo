'use client';

import About from '@/components/about';
import CommonHand from '@/components/common/commonhand';
import Contact from '@/components/contact';
import MyProjects from '@/components/projects/MyProjects';
import Testimonials from '@/components/testimonials';
import Image from 'next/image';
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { ScreenSize } from '@/lib/types';
import { useEffect, useState } from 'react';
import Header from '@/components/header';
import WordRotate from '@/components/magicui/word-rotate';
import Lottie from 'react-lottie-player/dist/LottiePlayerLight';
import alienLottie from '@/components/animation/alien.json';
import Footer from '@/components/footer';
import Experience from '@/components/experience';

export const words = [
  'React',
  'Next.js',
  'Tailwind CSS',
  'TypeScript',
  'HTML/CSS',
  'Firebase',
  'React Query',
  'Redux',
  'Framer Motion',
];

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
