import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const SinglePortfolio = ({ data, getData }) => {
  const { imgLink, imgLinkLg, title, subTitle, effect, duration, delay } = data;

  return (
    <div className="col-lg-4 col-md-6" data-aos={effect} data-aos-duration={duration} data-aos-delay={delay}>
      <div className="st-portfolio-single st-style1" onClick={() => getData(imgLinkLg, title, subTitle)}>
        <div className="st-portfolio-item" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div className="st-portfolio st-zoom" style={{ marginBottom: '15px' }}>
            <div className="st-portfolio-img st-zoom-in">
              <img src={imgLink} alt="portfolio" style={{ borderRadius: '8px' }} />
            </div>
            <div className="st-portfolio-item-hover">
              <Icon icon="mdi:plus-circle" />
            </div>
          </div>
          <div className="st-portfolio-info" style={{ padding: '0 10px 20px', textAlign: 'left' }}>
            <h5 style={{ fontSize: '20px', marginBottom: '8px', fontWeight: '600' }}>{title}</h5>
            <p style={{ color: '#a6b7c8', margin: '0' }}>{subTitle}</p>
          </div>
        </div>
      </div>
    </div >
  )
}

SinglePortfolio.propTypes = {
  data: PropTypes.object
}

export default SinglePortfolio
