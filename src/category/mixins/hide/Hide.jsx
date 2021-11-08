import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const hideExample01 = `#hide.text();
#hide.text(accessible);
`;

const hideExample02 = `#hide.element();`;

const Hide = () => {
  const syntaxHighlight = atomDark;
  return (
    <div className="content content-grid--header">
      <h1>Hide Mixins</h1>
      <p>Use the following mixins for image replacement or hiding text:</p>
      <p>The first mixin is for default image replacement</p>
      <SyntaxHighlighter language="css" style={syntaxHighlight}>
        {hideExample01}
      </SyntaxHighlighter>
      <p>The second mixin is more accessibilty friendly.</p>
      <SyntaxHighlighter language="css" style={syntaxHighlight}>
        {hideExample02}
      </SyntaxHighlighter>
    </div>
  );
};

export default Hide;
