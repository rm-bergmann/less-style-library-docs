import React from 'react';
import Menu from '../components/menu/menu';

const VariablesPage = () => {
  return (
    <div className={`content-wrapper`}>
      <Menu menuType={`sub`} />
      <section className={`layout__description`}>
        <h1>Variables</h1>
        <p>This library ships with preset colour variables and media query variables</p>
      </section>
    </div>
  );
}

export default VariablesPage;