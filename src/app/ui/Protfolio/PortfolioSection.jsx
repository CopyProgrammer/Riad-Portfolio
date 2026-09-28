'use client';
import './Portfolio.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { useState, useEffect, useCallback, useRef } from 'react';

const PortfolioSection = ({ data }) => {
  const [modal, setModal] = useState(null);
  const dialogRef = useRef(null);

  const openModal = (item) => setModal(item);
  const closeModal = useCallback(() => setModal(null), []);

  // Escape key to close modal
  useEffect(() => {
    if (!modal) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialogRef.current?.querySelector('button')?.focus();
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'Tab') {
        const items = [...dialogRef.current.querySelectorAll('button, a[href]')];
        const first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [modal, closeModal]);

  const { portfolioItems } = data;

  return (
    <>
      <section id="portfolio">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <SectionHeading title="Projects" />
        <div className="container">
          <div className="row">
            {portfolioItems.map((item, index) => (
              <div
                className="col-lg-6 col-md-6"
                key={index}
                data-aos={item.effect}
                data-aos-duration={item.duration}
                data-aos-delay={item.delay}
              >
                <div
                  className="st-portfolio-single st-style1 st-project-card"
                  onClick={() => openModal(item)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(item); } }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${item.title}`}
                >
                  <div className="st-portfolio-item">
                    <div className="st-portfolio st-zoom">
                      <div className="st-portfolio-img st-zoom-in">
                        <img
                          src={item.imgLink}
                          alt={item.title}
                          loading="lazy"
                          width="600"
                          height="400"
                        />
                      </div>

                    </div>
                  </div>
                  <div className="cs-project-info">
                    <span className="cs-project-index">PROJECT / {String(index + 1).padStart(2, '0')} <span aria-hidden="true">↗</span></span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  {item.tags && (
                    <div className="st-project-tags">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="st-project-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="st-height-b30 st-height-lg-b30"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>

      {/* Project Detail Modal */}
      {modal && (
        <div
          className="st-project-modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={modal.title}
        >
          <div
            className="st-project-modal"
            ref={dialogRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="st-project-modal-close"
              onClick={closeModal}
              aria-label="Close project details"
            >
              ×
            </button>
            <div className="st-project-modal-img">
              <img src={modal.imgLink} alt={modal.title} />
            </div>
            <div className="st-project-modal-body">
              <h3>{modal.title}</h3>
              {modal.role && (
                <p className="st-project-role">{modal.role}</p>
              )}
              <p className="st-project-description">{modal.description}</p>
              {modal.tags && (
                <div className="st-project-tags">
                  {modal.tags.map((tag, i) => (
                    <span key={i} className="st-project-tag">{tag}</span>
                  ))}
                </div>
              )}
              <div className="st-project-modal-links">
                {modal.liveUrl && (
                  <a
                    href={modal.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="st-btn st-style1 st-color1"
                  >
                    {modal.liveUrl.endsWith('.pdf') ? 'View PDF' : 'View Live'}
                  </a>
                )}
                {modal.repoUrl && (
                  <a
                    href={modal.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="st-btn st-style1 st-color2"
                  >
                    View Repository
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioSection;
