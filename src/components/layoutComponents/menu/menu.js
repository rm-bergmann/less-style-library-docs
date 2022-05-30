import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './menuItem';

const Menu = ({ menuType, menuItems }) => {
  return (
    <nav className={`menu menu--${menuType}`}>
      <ul className="menu__list">
        <MenuItem menuType={menuType} menuItems={menuItems} />
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  menuType: PropTypes.string.isRequired,
  menuItems: PropTypes.object.isRequired,
};

export default Menu;
