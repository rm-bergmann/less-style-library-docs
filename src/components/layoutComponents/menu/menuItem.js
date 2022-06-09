import React from 'react';
import { Link } from 'gatsby';

const MenuItem = ({ menuItems }) => {

  const itemClassName = 'menu__list-item';
  const linkClassName = `${itemClassName}-link`;
  const activeClassName = `${linkClassName}--active`;
  const menuItemValues = Object.values(menuItems);

  
  // const partiallyActive = className => ({ isPartiallyCurrent }) => ({
  //   className: className + (isPartiallyCurrent ? activeClassName : ``),
  // })


  const renderLinks = menuItemValues.map(menuItem => {
    const { linkText, linkRoute, partiallyActive } = menuItem;

    // if (linkText === 'About' && (window.location.pathname.indexOf('mixins') === 1)) {
    //   partiallyActive = false;
    // }


    // let partiallyActive = ({ partiallyCurrent }) => linkRoute === '/' ? false : true;

    return (
      <li key={linkText} className={itemClassName}>
        <Link
          key={linkText}
          className={linkClassName}
          activeClassName={activeClassName}
          partiallyActive={partiallyActive}
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
