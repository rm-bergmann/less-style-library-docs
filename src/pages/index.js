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

  const allAboutLinks = data.allMdx.nodes;
  let aboutLinks = {};

  allAboutLinks.map(documentationLink => {
    const { title, slug, category } = documentationLink.frontmatter;

    if (category === 'about') {
      aboutLinks[title] = {
        "linkText": title,
        "linkRoute": `/about/${slug}`,
      }
    }
    return aboutLinks;
  });

  return (
    <>
      <Menu menuType={`sub`} menuItems={aboutLinks} />
      <div className={`about-container`}>
        <Index />
      </div>
      <aside className={`layout__side`} />
    </>
  );
}

export default IndexPage
