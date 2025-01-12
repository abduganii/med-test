'use client'
import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Layout({ children }) {
  useEffect(() => {
    AOS.init({
      delay:0,
      duration: 1000, 
      easing: 'ease-in',
      // once: true, 
    });
  }, []);
  return (
    <>
        <Header/>
          {children}
          <Footer/>
    </>
  )
}
