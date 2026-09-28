import './Contact.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Icon } from '@iconify/react';
import SocialLinks from '../SocialLinks/SocialLinks';
import SectionVideo from '../SectionVideo/SectionVideo';

const Contact = ({ data, socialData }) => {
  const { title, text, subTitle } = data;
  return (
    <section id="contact" className="st-dark-bg" style={{ position: 'relative', overflow: 'hidden' }}>
      <SectionVideo
        src="/videos/backgrounds/contact-network.mp4"
        poster="/videos/backgrounds/contact-network.webp"
        overlayClass="sv-contact"
        objectPosition="center center"
      />
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Contact" />
      <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <div className="st-contact-center">
              <h3 className="st-contact-title">Get in Touch</h3>
              <div className="st-contact-text">
                {text}
              </div>
              <div className="st-height-b30 st-height-lg-b20"></div>
              <div className="st-contact-info-wrap">
                <div className="st-single-contact-info">
                  <div className="st-icon-wrap">
                    <Icon icon="fa-regular:envelope" />
                  </div>
                  <div className="st-single-info-details">
                    <h4>Email</h4>
                    <a href="mailto:md.riad.cs@gmail.com">md.riad.cs@gmail.com</a>
                  </div>
                </div>
                <div className="st-single-contact-info">
                  <div className="st-icon-wrap">
                    <Icon icon="fa6-brands:linkedin-in" />
                  </div>
                  <div className="st-single-info-details">
                    <h4>LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/enthusiastsrd/" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/enthusiastsrd
                    </a>
                  </div>
                </div>
                <div className="st-single-contact-info">
                  <div className="st-icon-wrap">
                    <Icon icon="fa6-brands:github" />
                  </div>
                  <div className="st-single-info-details">
                    <h4>GitHub</h4>
                    <a href="https://github.com/CopyProgrammer" target="_blank" rel="noopener noreferrer">
                      github.com/CopyProgrammer
                    </a>
                  </div>
                </div>
                <div className="st-height-b30 st-height-lg-b20"></div>
                <div className="st-contact-cta">
                  <a
                    href="mailto:md.riad.cs@gmail.com"
                    className="st-btn st-style1 st-color1"
                  >
                    Send an Email
                  </a>
                </div>
                <div className="st-height-b30 st-height-lg-b20"></div>
                <div className="st-social-info">
                  <div className="st-social-text">{subTitle}</div>
                  <SocialLinks data={socialData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  )
}

export default Contact;
