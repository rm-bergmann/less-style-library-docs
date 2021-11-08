import { graphql } from 'gatsby';
import React from 'react';
import Menu from '../components/menu/menu';

export const query = graphql`
  query getMixinnData {
    allMdx {
      nodes {
        frontmatter {
          description
          slug
          title
        }
        id
      }
    }
  }`;

const MixinsPage = ({ data }) => {
  const allMixins = data.allMdx.nodes;
  let mixinLinks = {};

  allMixins.map(mixin => {
    const { title, slug } = mixin.frontmatter;
    return (
      mixinLinks[title] = {
        "linkText": title,
        "linkRoute": `/mixins/${slug}`,
      }
    );
  });

  return (
    <div className={`content-wrapper`}>
      <Menu menuType={`mixins`} menuItems={mixinLinks} />
      <section className={`layout__description`}>
        <h1>Mixins</h1>
        <p>Mixins are designed to make it easy to write groups of CSS rules in 1 line of code.</p>
      </section>
    </div>
  );
}

export default MixinsPage;