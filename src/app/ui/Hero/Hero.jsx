'use client';
import './Hero.scss';
import SectionVideo from '../SectionVideo/SectionVideo';

// All existing personal content preserved. The code/chart panel (.cs-system) is removed;
// the video now fills that right-side visual role per the prompt.
const Hero = ({ data, socialData }) => (
  <section id="home" className="cs-hero">
    <SectionVideo
      src="/videos/backgrounds/hero-workstation.mp4"
      poster="/videos/backgrounds/hero-workstation.webp"
      overlayClass="sv-hero"
      objectPosition="60% center"
      priority
    />
    <div className="container cs-hero-content">
      <div className="cs-hero-copy">
        <p className="cs-eyebrow"><span /> COMPUTER SCIENCE × DATA ANALYTICS</p>
        <h1>Md Mujaheed<br />Shahariar <span>Riad.</span></h1>
        <p className="cs-hero-role">{data.designation}</p>
        <p className="cs-hero-description">Exploring the connection between<br className="cs-desktop-break" /> how systems work and what data tells us.</p>
        <p className="cs-hero-education">{data.tagline}</p>
        <div className="cs-actions">
          <a className="st-btn st-style1 st-color1" href={`#${data.primaryAction.target}`}>{data.primaryAction.label} <span aria-hidden="true">↗</span></a>
          <a className="cs-secondary-link" href={`#${data.secondaryAction.target}`}>Let’s connect <span aria-hidden="true">↗</span></a>
        </div>
        <div className="cs-socials">{socialData.map(s => <a key={s.title} href={s.link} target="_blank" rel="noopener noreferrer">{s.title} <span aria-hidden="true">↗</span></a>)}</div>
      </div>
      <div className="cs-context-strip">
        <div><span>01 / EDUCATION</span><strong>Computer Science <small>at LSBU</small></strong></div>
        <div><span>02 / NEXT CHAPTER</span><strong>Data Analyst <small>at MEAMO · Oct 2026</small></strong></div>
        <a href="#portfolio">EXPLORE SELECTED WORK <span aria-hidden="true">↓</span></a>
      </div>
    </div>
  </section>
);
export default Hero;
