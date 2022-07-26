import React from "react";
import { FullPage, Slide } from 'react-full-page';
import { ToastContainer, toast } from "react-toastify";
import './App.css';
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ServicesProducts from "./components/ServicesProducts"
import WorkWithUs from "./components/WorkWithUs"
import AboutUs from "./components/AboutUs"
import Partners from "./components/Partners"

const FullPageScroll = () => {


  const SectionStyle = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <>

      <FullPage duration={400} controls={Header}>
        <Slide style={{ ...SectionStyle }}>
          <HeroSection />
        </Slide>
        <Slide style={{ ...SectionStyle }}>
          <ServicesProducts />
        </Slide>
        <Slide style={{ ...SectionStyle }}>
          <AboutUs />
        </Slide>
        <Slide style={{ ...SectionStyle }}>
          {/* <ToastContainer /> */}
          <WorkWithUs />
        </Slide>
        <Slide style={{ ...SectionStyle }}>
          <Partners />
        </Slide>
        {/* <div>
          nsjkgsaj
        </div> */}
      </FullPage>

    </>
  )
}

export default FullPageScroll;