import React, { useState, useEffect } from "react";
import { FullPage, Slide } from 'react-full-page';
// import { ToastContainer, toast } from "react-toastify";
import './App.css';
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ServicesProducts from "./components/ServicesProducts"
import WorkWithUs from "./components/WorkWithUs"
import AboutUs from "./components/AboutUs"
import Partners from "./components/Partners"
import Footer from "./components/Footer"
import Others from "./components/Others"
import ResponsiveHeader from './components/ResponsiveHeader'
import ResponsiveWorkWithUs from "./components/ResponsiveWorkWithUs"
import ResponsiveOthers from "./components/ResponsiveOthers"
import ResponsiveFooter from "./components/ResponsiveFooter"
import MyLottie from "./components/MyLottie"

const FullPageScroll = () => {

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, [width])


  const SectionStyle = {
    height: 'calc(100vh-100px)',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  if (width > 1400) {
    return (
      <>

        <FullPage duration={400} controls={Header}>
          <Slide style={{ ...SectionStyle, justifyContent: 'end' }}>
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
            <Partners width={width} />
          </Slide>
          {/* <div>
            nsjkgsaj
          </div> */}
          <Slide style={{ ...SectionStyle, backgroundColor: "#EBEEF3" }}>
            <Others />
          </Slide>
          <Slide style={{ ...SectionStyle }}>
            <Footer />
          </Slide>
        </FullPage>

      </>
    )
  }
  if (width <= 1400 && 800 < width ) {
    return (
      <div>
        <ResponsiveHeader />
        <HeroSection />
        <ServicesProducts />
        <AboutUs />
        <ResponsiveWorkWithUs style={{ ...SectionStyle }} />
        <Partners width={width} />
        <div className="back-footer">
          <Others />
          <ResponsiveFooter />
        </div>
        <div style={{ backgroundColor: '#294FCD', height: '30px', alignItems: 'center', textAlign: 'center', justifyContent: 'center', width: '100%', color: 'white', paddingTop: '8px', paddingButtom: '8px' }}>
          <p className="copy-right">طراحی و توسعه با &#10084;&#65039; در نیلوا</p>
        </div>
      </div>
    )
  }
  if ( width <= 800) {
    return (
      <div>
        <ResponsiveHeader />
        <HeroSection />
        <ServicesProducts />
        <AboutUs />
        <ResponsiveWorkWithUs style={{ ...SectionStyle }} />
        <Partners width={width} />
        {/* <MyLottie /> */}
        <div className="back-footer">
          <ResponsiveOthers />
          <ResponsiveFooter />
        </div>
        <div style={{ backgroundColor: '#294FCD', height: '30px', alignItems: 'center', textAlign: 'center', justifyContent: 'center', width: '100%', color: 'white', paddingTop: '8px', paddingButtom: '8px' }}>
          <p className="copy-right">طراحی و توسعه با &#10084;&#65039; در نیلوا</p>
        </div>
      </div>
    )
  }

}

export default FullPageScroll;