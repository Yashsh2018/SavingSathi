import React from 'react'
import Main from './Main';
import pattern from '@/assets/home/pattern.png';
import HowGenhapWorks from './HowGenhapWorks';
import GenhapHelps from './GenhapHelps';
import SaveEarnSection from './SaveEarnSection';
import AwesomeFeatures from './AwesomeFeatures';
import Principles from './Principles';
import Carousel from './Carousel';
import ReviewCarousel from './ReviewCaraousel';
import VisionMissionSection from './VisionMissionSection';
import TeamSection from './TeamSection';
import SupportBanner from './SupportBanner';
import ContactForm from './ContactForm';

const Index = () => {
  return (
    <div 
      className='w-full h-full z-3'
      style={{
        backgroundImage: `url(${pattern.src})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}
    >
      {/* Add ID to each section */}
      <section id="home">
        <Main />
      </section>
      
      <section id="how-it-works">
        <HowGenhapWorks />
      </section>
      
      <div className='relative'>
        <section id="benefits">
          <GenhapHelps />
        </section>
        
        <section id="save-earn">
          <SaveEarnSection />
        </section>
      </div>
      
      <section id="features">
        <AwesomeFeatures />
      </section>

      <Principles />
      
      <section id="screenshots">
        <Carousel />
      </section>

      <ReviewCarousel />
      <VisionMissionSection />

      {/* <section id="team">
        <TeamSection />
      </section> */}
      
      <SupportBanner />

      <section id="contact">
        <ContactForm />
      </section>
    </div>
  )
}

export default Index