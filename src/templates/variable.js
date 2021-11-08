import React from 'react';
import Menu from '../components/menu/menu';

export default function variable({ pageContext: { variable } }) {
  const { name, description, component } = variable;

  return (
    <div className={`content-wrapper`}>
      <Menu menuType={`mixins`} />
      <section className={`layout__description ${name}`}>
        <h1>{name} Mixins</h1>
        <p>{description}</p>
        {component}
      </section>
    </div>
  )
}