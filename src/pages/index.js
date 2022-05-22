import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Menu from '../components/menu/menu';
import '../less/imports.less';

export const query = graphql`
  query getDefaultLinkData {
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

const IndexPage = ({ data }) => {

  const allDocumentationLinks = data.allMdx.nodes;
  let documentationLinks = {};

  allDocumentationLinks.map(documentationLink => {
    const { title, slug, category } = documentationLink.frontmatter;

    if (category === 'documentation') {
      documentationLinks[title] = {
        "linkText": title,
        "linkRoute": `/documentation/${slug}`,
      }
    }
    return documentationLinks;
  });

  return (
    <>
      <Menu menuType={`sub`} menuItems={documentationLinks} />
      <div className={`about-container`}>
        {/* <MDXRenderer>{body}</MDXRenderer> */}

        <h1>About Less Style Library</h1>

        <p>Less Style Library is a library of namespaced mixins to help write css styles faster.</p>

        <p>This library also includes variables for colour names and media queries</p>

        <h3>This is a useful tool if:</h3>

        <ul>
          <li>You like designing in the browser</li>
          <li>You like writing CSS in Less</li>
          <li>You like changing multiple values at once</li>
          <li>You like identifying where common style patterns are used in your code</li>
          <li>You like minimizing the number of lines of css rules in your files</li>
          <li>You like sharing mixins between projects</li>
        </ul>

        <h3>Why is Less the chosen CSS preprocesser for this library?</h3>

      </div>
      <aside className={`layout__side`}>

      </aside>
    </>
  );
}

export default IndexPage
