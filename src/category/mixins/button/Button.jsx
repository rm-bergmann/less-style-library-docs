import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  buttonExample01,
  buttonExample02,
  buttonExample03,
  buttonExample04,
  buttonExample05,
  buttonExample06,
} from './buttonExamples';

// Crazy code! Need to componentize or something, trying to find an automatable pattern
// but there are some differences in the patterns
const Button = () => {
  const syntaxHighlight = atomDark;

  return (
    <div className="content content-button">
      <h1>Button Mixins</h1>
      <p>
        By default the background colour is set to the @color-01 variable which
        I set to @teal in this app. Target the element you want to style and
        call the mixin.
      </p>
      <p>By default, @color-01 is set to @blue.</p>
      <SyntaxHighlighter language="css" style={syntaxHighlight}>
        {buttonExample01}
      </SyntaxHighlighter>
      <button type="button" className="content-button--button-01">
        Button 01
      </button>
      <button
        type="button"
        className="content-buttons--button-01 content-button--button-01---green"
      >
        Button 01
      </button>
      <SyntaxHighlighter language="css" style={syntaxHighlight}>
        {buttonExample02}
      </SyntaxHighlighter>
      <button type="button" className="content-button--button-02">
        Button 02
      </button>
      <button
        type="button"
        className="content-buttons--button-02 content-button--button-02---red"
      >
        Button 02
      </button>
      <SyntaxHighlighter language="css" style={syntaxHighlight}>
        {buttonExample03}
      </SyntaxHighlighter>
      <button type="button" className="content-button--button-03">
        Button 03
      </button>
      <button
        type="button"
        className="content-buttons--button-03 content-button--button-03---purple"
      >
        Button 03
      </button>
      <h2>Parameter order & default values</h2>
      <SyntaxHighlighter language="css" style={syntaxHighlight}>
        {buttonExample04}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="css" style={syntaxHighlight}>
        {buttonExample05}
      </SyntaxHighlighter>
      <button type="button" className="content-button--button-04">
        Button 04
      </button>
      <button
        type="button"
        className="content-buttons--button-04 content-button--button-04---gray"
      >
        Button 04
      </button>
      <SyntaxHighlighter language="css" style={syntaxHighlight}>
        {buttonExample06}
      </SyntaxHighlighter>
      <a className="content-button--button-link" href="/">
        I am a link
      </a>
      <a
        className="content-buttons--button-link content-button--button-link---orange"
        href="/"
      >
        I am also a link
      </a>
    </div>
  );
};

export default Button;
