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
        <p>Powered by Gatsby</p>
        <small>
          &copy;
          {` Copyright ${currentDate.getFullYear()} rickbergmann.com`}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
