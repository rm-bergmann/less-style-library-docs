import React from 'react';
import PropTypes from 'prop-types';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ children }) => {
  return (
    <>
      <div className="code-block__example">
        <div className={`code-wrapper`}>
          <SyntaxHighlighter
            language={`css`}
            style={darcula}
            showLineNumbers
            className={`language-css`}
          >
            {children}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}

CodeBlock.propTypes = {};

export default CodeBlock;
