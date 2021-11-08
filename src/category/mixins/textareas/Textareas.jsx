import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Texareas = () => {
  const syntaxHighlight = atomDark;

  const codeString01 = `
  /* Styles */
  textarea {
    #textarea.default();
  }
  `;
  return (
    <div className="content form-examples">
      <div className="form-examples--container">
        <h1>Textarea styles:</h1>
        <SyntaxHighlighter language="css" style={syntaxHighlight}>
          {codeString01}
        </SyntaxHighlighter>
        <div className="form-examples--container">
          <textarea className="form-examples--textarea" id="textarea" />
        </div>
      </div>
    </div>
  );
};

export default Texareas;
