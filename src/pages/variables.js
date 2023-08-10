import { graphql } from 'gatsby';
import React from 'react';
import Menu from '../components/layoutComponents/menu/menu';
import '../less/imports.less';

export const query = graphql`
  query getVariableData {
    allMdx {
      nodes {
        frontmatter {
          category
          description
          slug
          title
        }
        id
      }
    }
  }`;

const VariablesPage = ({ data }) => {
  const allVariables = data.allMdx.nodes;
  let variablesLinks = {};

  allVariables.map(variables => {
    const { title, slug, category } = variables.frontmatter;
    if (category === 'variables') {
      variablesLinks[title] = {
        "linkText": title,
        "linkRoute": `/variables/${slug}`,
      }
    }
    return variablesLinks;
  });

  return (
    <>
      <Menu menuType={`sub`} menuItems={variablesLinks} />
      <section className={`layout__description`}>
        <h1>Variables</h1>
        <p>This library includes variables ready to use for color names and
          breakpoints for Media queries. In Less, variables are declared with the
          @ symbol. Less also supports grouping of variables in an object-like
          structure which this library makes use of in the settings and color
          settings variables.
        </p>
      </section>
      <aside className={`layout__side`} />
    </>
  );
}

export default VariablesPage;