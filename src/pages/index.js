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

        <h2>This is a useful tool if:</h2>

        <ul>
          <li>You like designing in the browser</li>
          <li>You like writing CSS in Less</li>
          <li>You like changing multiple values at once</li>
          <li>You like identifying where common style patterns are used in your code</li>
          <li>You like minimizing the number of lines of css rules in your files</li>
          <li>You like sharing mixins between projects</li>
        </ul>

        <h3>Why is Less the chosen CSS preprocesser for this library?</h3>

        <p>Less is a declaritive language which extends CSS. <br /><br />
          <a href="https://medium.com/@matthewdeaners/less-the-world-s-most-misunderstood-css-pre-processor-76273881cb03">This article</a> explains
          more about the details on how Less compares to other preprocessors such as Sass, however the main
          inspiration for writing this library is the way Mixins are declared in Less, which allows to
          declare namespaced mixins using simple CSS like syntax (eg, the <strong>#</strong> and <strong>.</strong> characters which represent ID and class)</p>

      </div>
      <aside className={`layout__side`}>

      </aside>
    </>
  );
}

export default IndexPage
