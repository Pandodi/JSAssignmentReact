import React, { useRef } from 'react'
import Header from './Header'
import Showcase from './Showcase'
import Brands from './Brands'
import Features from './Features'
import HowDoesItWork from './HowDoesItWork'
import HowDoesItWorkDesktop from './HowDoesItWorkDesktop'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import Subscribe from './Subscribe'
import Footer from './Footer'

const Home = () => {
    const featuresRef = useRef(null);
    const faqRef = useRef(null);

    const scrollToFeatures = () => {
        featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToFAQ = () => {
      faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
    <Header onFeaturesClick={scrollToFeatures}/>
        <main>
            <Showcase onFeaturesClick={scrollToFeatures}/>
            <Brands />
            <div ref={featuresRef}>
            <Features />
            </div>
            <HowDoesItWork />
            <HowDoesItWorkDesktop onFaqClick={scrollToFAQ}/>
            <Testimonials />
            <div ref={faqRef}>
              <FAQ />  
            </div>
            
            <Subscribe />
        </main>
    <Footer/>
    </>
  )
}

export default Home