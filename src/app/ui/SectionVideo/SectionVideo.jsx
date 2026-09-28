'use client';
import { useEffect, useRef, useState } from 'react';
import { useVideoMotion } from './MotionContext';
import './SectionVideo.scss';

export default function SectionVideo({ src, poster, overlayClass = '', objectPosition = 'center center' }) {
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);
  const [hasFrame, setHasFrame] = useState(false);
  const { active, enabled, register, report, attempt } = useVideoMotion();
  const shouldPlay = active === src && enabled;

  useEffect(() => register(src, wrapperRef.current), [src, register]);

  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    let disposed = false;
    const start = () => {
      video.muted = true;
      video.defaultMuted = true;
      if (video.getAttribute('src') !== src) { video.src = src; video.load(); }
      const result = video.play();
      result?.catch(error => {
        if (!disposed && error.name !== 'AbortError') { setHasFrame(false); report(src, true); }
      });
    };
    const onPlaying = () => { setHasFrame(true); report(src, false); };
    const onError = () => { setHasFrame(false); report(src, true); };
    const retry = () => {
      // The provider sends this only for the active section from an explicit gesture.
      if (video.error) video.load();
      start();
    };
    video.addEventListener('playing', onPlaying);
    video.addEventListener('error', onError);
    wrapper.addEventListener('portfolio:retry', retry);
    if (shouldPlay) start();
    else video.pause(); // Also cancels an in-flight play request.
    return () => {
      disposed = true; video.pause();
      video.removeEventListener('playing', onPlaying); video.removeEventListener('error', onError);
      wrapper.removeEventListener('portfolio:retry', retry);
    };
  }, [src, shouldPlay, attempt, report]);

  return <div ref={wrapperRef} className={`sv-bg ${overlayClass}`} aria-hidden="true" style={{ backgroundImage: `url("${poster}")`, backgroundSize: 'cover', backgroundPosition: objectPosition }}>
    <video ref={videoRef} className="sv-video" poster={poster} muted loop playsInline preload="none" tabIndex={-1} style={{ objectPosition, opacity: hasFrame ? 1 : 0 }} />
    <div className="sv-overlay" />
  </div>;
}
