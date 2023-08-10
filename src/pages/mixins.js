import { graphql } from 'gatsby';
import React from 'react';
import Menu from '../components/layoutComponents/menu/menu';
import '../less/imports.less';

export const query = graphql`
  query getMixinnData {
    allMdx {
      nodes {
        frontmatter {
          description
          slug
          title
          category
        }
        id
      }
    }
  }`;

const MixinsPage = ({ data }) => {
  const allMixins = data.allMdx.nodes;
  let mixinLinks = {};

  allMixins.map(mixin => {
    const { title, slug, category } = mixin.frontmatter;

    if (category === 'mixins') {
      mixinLinks[title] = {
        "linkText": title,
        "linkRoute": `/mixins/${slug}`,
      }
    }
    return mixinLinks;
  });

  return (
    <>
      <Menu menuType={`sub`} menuItems={mixinLinks} />
      <section className={`layout__description`}>
        <h1>Mixins</h1>
        <p>
          Mixins are designed to make it easy to write groups of CSS rules in 1 line of code.
          It is kind of like calling a function in any programming language. They work the same as
          they allow us to pass in parameters and return something based on what is passed in as a parameter.
          Paramters can also get messy, if there are too many declarations. As a general rule of thumb, no more
          than 2 parameters should be declared in a function. The same design principles should be applied to
          mixins.
        </p>
        <p>
          If you are an experienced developer, you probably have come across lots of repeatition,
          many messy functions doing similar things which are not named in the most self explanotory
          way.
        </p>
        <p>
          Namespaced mixins allow us to use Class-like architecture, where you can have multiple methods
          within a class. This helps us to group similar sets of mixins within a namespace which helps
          construct readable and memorable code.
        </p>
      </section>
      <aside className={`layout__side`}>

      </aside>
    </>
  );
}

export default MixinsPage;