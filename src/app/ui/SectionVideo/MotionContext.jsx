'use client';
import { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';
import '../Layout/MotionControl.scss';

const MotionContext = createContext(null);
export const useVideoMotion = () => useContext(MotionContext);

export function VideoMotionProvider({ children }) {
  const entries = useRef(new Map());
  const [active, setActive] = useState(null);
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);
  const [restricted, setRestricted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [failures, setFailures] = useState({});
  const [attempt, setAttempt] = useState(0);

  const selectVisible = useCallback(() => {
    let best = null, bestScore = 0;
    entries.current.forEach((element, id) => {
      const rect = element.getBoundingClientRect();
      const visible = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 80));
      const score = visible / Math.min(rect.height || 1, window.innerHeight - 80);
      if (score > bestScore && visible > 60) { bestScore = score; best = id; }
    });
    setActive(best);
  }, []);

  const register = useCallback((id, element) => {
    entries.current.set(id, element);
    selectVisible();
    return () => { entries.current.delete(id); };
  }, [selectVisible]);
  const report = useCallback((id, failed) => setFailures(previous => previous[id] === failed ? previous : { ...previous, [id]: failed }), []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = navigator.connection;
    const preferences = () => setRestricted(mq.matches || Boolean(connection?.saveData));
    const visibility = () => { setHidden(document.hidden); selectVisible(); };
    preferences(); visibility();
    try { setPaused(sessionStorage.getItem('portfolio-motion-paused') === 'true'); } catch { /* Storage can be disabled. */ }
    setReady(true);
    let frame;
    const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(selectVisible); };
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    document.addEventListener('visibilitychange', visibility);
    mq.addEventListener('change', preferences);
    connection?.addEventListener?.('change', preferences);
    return () => {
      cancelAnimationFrame(frame); observer.disconnect();
      window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule);
      document.removeEventListener('visibilitychange', visibility);
      mq.removeEventListener('change', preferences); connection?.removeEventListener?.('change', preferences);
    };
  }, [selectVisible]);

  const failed = Boolean(failures[active]);
  const toggle = () => {
    const next = failed ? false : !paused;
    setPaused(next);
    try { sessionStorage.setItem('portfolio-motion-paused', String(next)); } catch { /* Optional persistence. */ }
    if (!next) {
      setAttempt(value => value + 1);
      // Run a retry synchronously within the click gesture for restrictive browsers.
      entries.current.get(active)?.dispatchEvent(new Event('portfolio:retry'));
    }
  };
  const label = failed ? 'Play background animation' : paused ? 'Resume background animation' : 'Pause background animation';
  return <MotionContext.Provider value={{ active, enabled: ready && !paused && !restricted && !hidden, register, report, attempt }}>
    {children}
    {ready && !restricted && active && <button type="button" className="portfolio-motion-toggle" onClick={toggle} aria-pressed={paused} aria-label={label}>
      <span aria-hidden="true">{paused || failed ? '▷' : 'Ⅱ'}</span><span>{failed ? 'Play animation' : paused ? 'Motion paused' : 'Pause motion'}</span>
    </button>}
  </MotionContext.Provider>;
}
