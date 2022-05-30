import React from 'react';
import { graphql } from 'gatsby';
import Menu from '../components/layoutComponents/menu/menu';
import Index from '../content/index.md';
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
        <Index />
      </div>
      <aside className={`layout__side`} />
    </>
  );
}

export default IndexPage
