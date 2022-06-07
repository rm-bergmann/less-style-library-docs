import React from 'react';
import NpmIcon from '../../svgIcons/npmIcon';
import GithubIcon from '../../svgIcons/githubIcon';
import YarnIcon from '../../svgIcons/yarnIcon';

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
            <GithubIcon />
          </a>
          <a
            href="https://www.npmjs.com/package/less-style-library"
            target="_blank"
            rel="noreferrer"
          >
            <NpmIcon />
          </a>
          <a
            href="https://yarnpkg.com/package/less-style-library"
            target="_blank"
            rel="noreferrer"
          >
            <YarnIcon />
          </a>
        </p>
        <div className={`footer-content-disclaimer`}>
          <small>
            Less Style Library is open source and released under the MIT licence <br />
            &copy;
            {` Copyright ${currentDate.getFullYear()} rickbergmann.com`}
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
