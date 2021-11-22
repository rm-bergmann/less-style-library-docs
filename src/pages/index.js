import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import base64 from 'base-64';
import '../less/imports.less';

const IndexPage = () => {

  // const [readmeDoc, setReadmeDoc] = useState(0)
  // const github = `https://api.github.com`;
  // const readmeDocUrl = `${github}/repos/rm-bergmann/less-style-library/contents/README.md`;

  // useEffect(() => {
  //   fetch(readmeDocUrl)
  //     .then(response => response.json())
  //     .then(resultData => {
  //       setReadmeDoc(base64.decode(resultData.content))
  //     })
  // }, [])

  return (
    <div className={`about-container`}>
      {/* <ReactMarkdown children={readmeDoc} /> */}

      <p>Less Style Library is a library of namespaced mixins to help write css styles faster.</p>
      <p>This is a useful tool if:</p>

      <ul>
        <li>You like designing in the browser</li>
        <li>You like writing CSS in Less</li>
        <li>You like changing multiple values at once</li>
        <li>You like identifying where styles are in your code easily</li>
      </ul>

      <h2>Installation</h2>
    </div>
  );
}

export default IndexPage
