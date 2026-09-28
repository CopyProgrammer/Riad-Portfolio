import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="st-copyright-wrap text-center">
          <div className="st-copyright-text">
            © {currentYear} Md Mujaheed Shahariar Riad. Designed by{' '}
            <a href="https://themeforest.net/user/laralink" target="_blank" rel="noopener noreferrer">
              Laralink
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
