import PropTypes from 'prop-types';
import React from 'react';
import './Hero.scss';
import perser from 'html-react-parser';
import SocialLinks2 from '../SocialLinks/SocialLinks2';
import Image from 'next/image';
import imgAuthor from '../../../../public/images/section/hero-img.jpg'

const Hero3 = ({ data, socialData }) => {
  const { title, text, bgImgLink } = data;
  return (
    <div id="home" className="st-hero st-style2 st-bg st-dynamic-bg st-ripple-version" style={{ backgroundImage: `url(${bgImgLink})` }}>
      <div className="container">
        <div className="st-hero-text">
          <div className="st-author" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <Image src={imgAuthor} alt="Author Image" placeholder='blur' />
          </div>
          <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">{perser(title)}</h1>
          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">{perser(text)}</p>
          <SocialLinks2 data={socialData} />
        </div>
      </div>
    </div>
  )
}

Hero3.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
};


export default Hero3;
