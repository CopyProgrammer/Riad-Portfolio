'use client'
import data from '../Data.json';
import React from 'react'
import Hero from '../ui/Hero/Hero'
import About from '../ui/About/About';
import SkillsGrouped from '../ui/Skill/SkillsGrouped';
import Resume from '../ui/Resume/ResumeSection';
import PortfolioSection from '../ui/Protfolio/PortfolioSection';
import Contact from '../ui/Contact/Contact';


export default function page() {
  const { heroData, aboutData, skillData, portfolioData, resumeData, contactData, socialData } = data;
  return (
    <main id="main-content">
      <div className="st-height-b80 st-height-lg-b80"></div>
      <Hero data={heroData.homeOneHero} socialData={socialData} />
      <PortfolioSection data={portfolioData} />
      <About data={aboutData} />
      <SkillsGrouped data={skillData} />
      <Resume data={resumeData} />
      <Contact data={contactData} socialData={socialData} />
    </main>
  )
}
