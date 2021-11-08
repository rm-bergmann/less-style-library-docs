import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Color from './Color';
import colorsContent from './colors.md';

const colorExample01 = `@color-01: @blue; // primary color
@color-02: @blue-light; // secondary color
@color-03: @gray-light;
`;

class Colors extends Component {
  state = {
    markdown: colorsContent,
  };

  render() {
    const syntaxHighlight = atomDark;
    const { markdown } = this.state;

    return (
      <>
        <div className="content content-colors--header">
          {ReactHtmlParser(markdown)}

          <SyntaxHighlighter language="css" style={syntaxHighlight}>
            {colorExample01}
          </SyntaxHighlighter>
        </div>
        <div className="content content-colors">
          <Color />
        </div>
      </>
    );
  }
}

export default Colors;
