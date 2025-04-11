'use client';
import { useTranslations } from 'next-intl';

import Image from "next/image";
import Hero from "../sections/Hero";
import NavBar from "../sections/NavBar";
import Flag from "../components/Flag";
import UseCases from "../sections/UseCases";
import Ticker from "../sections/Ticker";
import Workflows from "../sections/Workflows";
import PriceSection from "../sections/Price";
import Testimonials from "../sections/Testimonials";
import Faq from "../sections/Faq";
import Footer from "../sections/Footer";
export default function Home() {
 
  return (
    <>
      <NavBar />
      <Hero />
      <UseCases />
      <Ticker />
      <Workflows />
      <PriceSection /> 
      <Testimonials />
      {/* <Faq /> */}
      <Footer />
    </>
  );
}
