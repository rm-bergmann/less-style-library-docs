import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Menu from '../components/menu/menu';

export default function mixin({ pageContext: { mixin, mixinLinks } }) {
  const { frontmatter, body } = mixin;
  const { title, description } = frontmatter;

  return (
    <div className={`content-wrapper`}>
      <Menu menuType={`mixins`} menuItems={mixinLinks} />
      <section className={`layout__description ${title}`}>
        <div class="layout__description-header">
          <h1>{title} Mixins</h1>
          <p><em>{description}</em></p>
        </div>
        <MDXRenderer>{body}</MDXRenderer>
      </section>
      <aside>

      </aside>
    </div>
  )
}
