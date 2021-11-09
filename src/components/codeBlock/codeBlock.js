import React from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark, a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ mixinName, children, number }) => {
  const renderDiv = number ?
    <div className={`${mixinName}-example-div ${mixinName}-example-div--${number}`} /> :
    null;

  return (
    <>
      {renderDiv}
      <div className={`code-wrapper`}>
        <SyntaxHighlighter
          language="css"
          style={atomDark}
          wrapLines
          wrapLongLines
          showLineNumbers
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </>
  );
}

CodeBlock.propTypes = {
  mixinName: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default CodeBlock;
