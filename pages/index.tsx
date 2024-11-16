import BestSelling from "@/components/BestSelling";
import Contact from "@/components/Contact";
import FeaturedProduct from "@/components/FeaturedProduct";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import News from "@/components/News";
import TopProduct from "@/components/TopProduct";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {

  useEffect(()=>{
    AOS.init({
      duration:1000,
      easing:"ease",
      once:true,
      anchorPlacement:"top-bottom"
    })
  },[])

  return (
    <div>
      <Nav />
      <Hero />
      <FeaturedProduct />
      <TopProduct />
      <BestSelling />
      <News />
      <Contact />
      <Footer/>
    </div>
  );
};

export default HomePage;
