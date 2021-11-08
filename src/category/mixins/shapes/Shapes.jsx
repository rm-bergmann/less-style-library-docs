import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Shapes = () => {
  const syntaxHighlight = atomDark;

  const codeString01 = `
  #shape.arrow(left, 50px, @color-01);
  #shape.arrow(up, 50px, @cyan);
  #shape.arrow(right, 50px, @red);
  #shape.arrow(down, 50, @purple);
  `;

  const codeString02 = `
  #shape.round();
  #shape.round(1em, 100px, @blue);
  `;

  const codeString03 = `
  #shape.square();
  `;

  return (
    <div className="content shape">
      <h1>Shape styles:</h1>
      <ul>
        <li>For custom shapes there is a mixin for arrow styles.</li>
        <li>Pass in the direction (up, down, left or right), size and color</li>
      </ul>
      <SyntaxHighlighter language="css" style={syntaxHighlight}>
        {codeString01}
      </SyntaxHighlighter>
      <div className="shape--container">
        <div className="shape--arrow---left" />
        <div className="shape--arrow---up-cyan" />
        <div className="shape--arrow---right-red" />
        <div className="shape--arrow---down-purple" />
      </div>
      <ul>
        <li>You can add a round shape with the following mixin:</li>
        <li>
          You can pass in padding, width and height (as the same value) and
          background-color.
        </li>
      </ul>
      <SyntaxHighlighter language="css" style={syntaxHighlight}>
        {codeString02}
      </SyntaxHighlighter>
      <div className="shape--container">
        <div className="shape--round" />
        <div className="shape--round---blue" />
      </div>
      <SyntaxHighlighter language="css" style={syntaxHighlight}>
        {codeString03}
      </SyntaxHighlighter>
      <div className="shape--container">
        <div className="shape--square" />
      </div>
    </div>
  );
};

export default Shapes;
