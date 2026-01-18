import React, { useState, useEffect } from 'react';
import Main from './Main';
import pattern from '../../assets/home/pattern.png';
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
import Loader from '../../components/Loader';
import Head from 'next/head';

export const metadata = {
  title: 'SavingSathi: Connect, Share, Save & Explore Deals Together',
  description: 'Join SavingSathi to connect with people, share moments, discover offers, save together, get gym membership deals and find travel buddies. Grab your offer now.',
  keywords: 'social saving, group discounts, gym deals, travel buddies, save money, offers, deals, social network, savings app',
  openGraph: {
    title: 'SavingSathi: Connect, Share, Save & Explore Deals Together',
    description: 'Join SavingSathi to connect with people, share moments, discover offers, save together, get gym membership deals and find travel buddies. Grab your offer now.',
    url: 'https://savingsathi.com',
    siteName: 'SavingSathi',
    images: [
      {
        url: 'https://savingsathi.com/_next/static/media/logo.52f634c5.png',
        width: 1200,
        height: 630,
        alt: 'SavingSathi Social Saving Platform',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@savingsathi',
    title: 'SavingSathi: Connect, Share, Save & Explore Deals Together',
    description: 'Join SavingSathi to connect with people, share moments, discover offers, save together, get gym membership deals and find travel buddies.',
    images: ['https://savingsathi.com/_next/static/media/logo.52f634c5.png'],
  },
  alternates: {
    canonical: 'https://savingsathi.com',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for all components (adjust as needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200); // 3 seconds, or replace with actual loading logic

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Loader variant="pulse" size="md" text="Save More" />

    );
  }

  return ( <>
    <Head>
      <link rel="canonical" href="https://savingsathi.com" />
    </Head>
    
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
  </>);
};

export default Index;
