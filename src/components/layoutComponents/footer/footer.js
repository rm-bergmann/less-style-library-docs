import React from 'react';

const currentDate = new Date();

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          <a
            href="https://github.com/rm-bergmann/less-style-library"
            target="_blank"
            rel="noreferrer"
          >
            Github Project
          </a>
          {' | '}
          <a
            href="https://www.npmjs.com/package/less-style-library"
            target="_blank"
            rel="noreferrer"
          >
            NPM Package
          </a>
        </p>
        <div className={`footer-content-disclaimer`}>
          <small>
            &copy;
            {` Copyright ${currentDate.getFullYear()} rickbergmann.com`}
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
