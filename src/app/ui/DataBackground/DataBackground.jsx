'use client';
import { useEffect, useState } from 'react';
import './DataBackground.scss';

// Deterministic, decorative circuitry. No external media or generation credits.
const routes = [
  'M-60 130H145L220 205H430L500 135H745L810 200H1040L1120 120H1500',
  'M-60 380H120L205 295H380L480 395H690L765 320H985L1070 405H1500',
  'M-60 670H180L260 590H480L565 675H790L880 585H1110L1210 685H1500',
  'M90 -50V125L170 205V465L100 535V950',
  'M1260 -50V230L1175 315V575L1270 670V950',
  'M-60 810H325L405 730H635L725 820H1010L1100 730H1500',
];
const nodes = [[145,130],[430,205],[745,135],[1040,200],[120,380],[380,295],[690,395],[985,320],[180,670],[480,590],[790,675],[1110,585],[90,125],[170,465],[1260,230],[1175,575],[325,810],[635,730],[1010,820]];

export default function DataBackground() {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReduced(preference.matches);
    const updateVisibility = () => setHidden(document.hidden);
    updateMotion(); updateVisibility();
    preference.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => { preference.removeEventListener('change', updateMotion); document.removeEventListener('visibilitychange', updateVisibility); };
  }, []);
  return <>
    <div className={`data-background ${paused || reduced || hidden ? 'is-paused' : ''}`} aria-hidden="true">
      <div className="data-background-glow" />
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" focusable="false">
        <defs><pattern id="data-grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M60 0H0V60" fill="none" stroke="currentColor" strokeWidth="0.5" /></pattern></defs>
        <rect width="1440" height="900" fill="url(#data-grid)" className="data-grid" />
        {routes.map((d,i) => <g key={d} className={`data-route data-route-${i}`}><path d={d} className="data-wire" /><path d={d} pathLength="100" className="data-packet" style={{animationDelay:`${-i * 3.5}s`,animationDuration:`${24 + i * 3}s`}} /></g>)}
        {nodes.map(([cx,cy],i) => <g key={i} className={`data-node ${i % 4 === 0 ? 'data-node-warm' : ''}`}><circle cx={cx} cy={cy} r="4" /><circle className="data-node-ring" cx={cx} cy={cy} r="9" /></g>)}
      </svg>
    </div>
    {!reduced && <button type="button" className="data-motion-toggle" onClick={() => setPaused(value => !value)} aria-pressed={paused} aria-label={paused ? 'Resume background animation' : 'Pause background animation'}><span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span><span>{paused ? 'Motion paused' : 'Pause motion'}</span></button>}
  </>;
}
