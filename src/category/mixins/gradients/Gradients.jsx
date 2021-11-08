import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Gradients = () => {
  const syntaxHighlight = atomDark;

  const codeString01 = `
  #gradient.linear(); /* Default: @color-01, @color-02, to bottom */
  #gradient.linear(top);
  #gradient.linear(right, @blue-light, @blue);
  #gradient.linear(left, @orange, @orange-light);
  `;
  return (
    <div className="content gradient">
      <h1>Gradient styles:</h1>
      <SyntaxHighlighter language="css" style={syntaxHighlight}>
        {codeString01}
      </SyntaxHighlighter>
      <div className="gradient--container gradient--container---default">
        <p>Default Linear Gradient (Bottom)</p>
      </div>
      <div className="gradient--container gradient--container---top">
        <p>Default Linear Gradient (Top)</p>
      </div>
      <div className="gradient--container gradient--container---blue-right">
        <p>Default Blue to Right Gradient</p>
      </div>
      <div className="gradient--container gradient--container---orange-left">
        <p>Default Orange to Left Gradient</p>
      </div>
    </div>
  );
};

export default Gradients;
