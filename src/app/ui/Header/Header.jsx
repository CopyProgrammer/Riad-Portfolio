'use client'

import './Header.scss';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  const handleToggleMenu = () => {
    setMobileToggle(!mobileToggle);
  }

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setMobileToggle(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: 'home', label: 'Home' },
    { to: 'portfolio', label: 'Projects' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'resume', label: 'Experience' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`st-site-header st-sticky-header st-style1 ${isScrolled ? 'st-sticky-active' : ''}`}>
      <div className="st-main-header">
        <div className="container">
          <div className="st-main-header-in">
            <div className="st-main-header-left">
              <a
                className="st-site-branding"
                href="#home"
                
                
                
                
                style={{ cursor: 'pointer', textDecoration: 'none' }}
                tabIndex={0}
                role="link"
              >
                <span className="st-brand-text"><span className="cs-brand-symbol" aria-hidden="true">[r]</span> Md Riad<span className="cs-brand-dot">.</span></span>
              </a>
            </div>
            <div className="st-main-header-right">
              <nav className="st-nav" aria-label="Main navigation">
                <ul
                  className="st-nav-list st-onepage-nav"
                  style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  role="list"
                >
                  {navItems.map(({ to, label }) => (
                    <li key={to}>
                      <a
                        href={`#${to}`}
                        
                        
                        
                        
                        onClick={() => setMobileToggle(false)}
                        tabIndex={0}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
                <button
                  className={`st-munu-toggle ${mobileToggle ? 'st-toggle-active' : ''}`}
                  onClick={handleToggleMenu}
                  aria-label={mobileToggle ? 'Close navigation menu' : 'Open navigation menu'}
                  aria-expanded={mobileToggle}
                >
                  <span></span>
                </button>
                <a
                  href="mailto:md.riad.cs@gmail.com"
                  className="sp-phone"
                  aria-label="Email me"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <div className="sp-phone-no">md.riad.cs@gmail.com</div>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
