import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu/menu';

const mainLinks = {
  "about": {
    "linkText": "About",
    "linkRoute": "/",
    "partiallyActive": false,
  },
  "mixins": {
    "linkText": "Mixins",
    "linkRoute": "/mixins",
    "partiallyActive": true,
  },
  "variables": {
    "linkText": "Variables",
    "linkRoute": "/variables",
    "partiallyActive": true,
  }
};

const Header = (props) => {
  const { appName, version } = props;
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/" className="header__logo-title">
          {appName} <small>v{version}</small>
        </a>
        <em>Documentation</em>
      </div>
      <Menu menuType={`main`} menuItems={mainLinks} />
    </header>
  );
};

Header.propTypes = {
  appName: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
};

export default Header;
