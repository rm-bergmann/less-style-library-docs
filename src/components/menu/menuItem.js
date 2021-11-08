import React from 'react';
import { Link } from 'gatsby';

const MenuItem = ({ menuItems }) => {

  const itemClassName = 'menu__list-item';
  const linkClassName = `${itemClassName}-link`;
  const activeClassName = `${linkClassName}--active`;

  const renderLinks = Object.values(menuItems).map(menuItem => {
    const { linkText, linkRoute } = menuItem;
    return (
      <li key={linkText} className={itemClassName}>
        <Link
          key={linkText}
          className={linkClassName}
          activeClassName={activeClassName}
          to={linkRoute}
        >
          {linkText}
        </Link>
      </li>
    );
  });

  return (
    renderLinks
  );
}

export default MenuItem;
