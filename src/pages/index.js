import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import base64 from 'base-64';
import '../less/imports.less';

const IndexPage = () => {

  const [readmeDoc, setReadmeDoc] = useState(0)
  const github = `https://api.github.com`;
  const readmeDocUrl = `${github}/repos/rm-bergmann/less-style-library/contents/README.md`;

  useEffect(() => {
    fetch(readmeDocUrl)
      .then(response => response.json())
      .then(resultData => {
        setReadmeDoc(base64.decode(resultData.content))
      })
  }, [])

  return (
    <div className={`about-container`}>
      <ReactMarkdown children={readmeDoc} />
    </div>
  );
}

export default IndexPage
