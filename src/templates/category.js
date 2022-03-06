import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Menu from '../components/menu/menu';

export default function mixin({ pageContext: { node, mixinLinks, variablesLinks } }) {
  const { frontmatter, body } = node;
  const { title, description, category } = frontmatter;

  const renderLinks = category === 'mixins' ? mixinLinks : variablesLinks;

  return (
    <>
      <Menu menuType={`sub`} menuItems={renderLinks} />
      <section className={`layout__description ${title}`}>
        <div class="layout__description-header">
          <h1>{title} {category}</h1>
          <p><em>{description}</em></p>
        </div>
        <MDXRenderer>{body}</MDXRenderer>
      </section>
      <aside className={`layout__side`}>

      </aside>
    </>
  )
}
