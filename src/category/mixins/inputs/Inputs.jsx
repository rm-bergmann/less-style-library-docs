import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Inputs = () => {
  const syntaxHighlight = atomDark;

  const codeExampleDefault = `
  /* Styles */
  label {
    #label.default();
  }
  input {
    #input.default();
  }
  `;

  const codeExampleCustom = `
  /* Styles */
  label {
    #label.default(bold, 18px);
  }
  input {
    #input.custom(black, white, 10px, 18px, @gray-dark, 90%, 40px);
  }
  `;

  const codeExampleOutput = `
    background-color: black;
    color: white;
    padding: 10px;
    border-color: @gray-dark;
    width: 90%;
    height: 40px;
    font-size: 18px;
  `;

  const codeExampleRound = `
    #input.default(rounded);
    #input.default(dark);
    #input.default(dark-rounded);
  `;
  return (
    <div className="content form-examples">
      <div className="form-examples--container">
        <h1>Form Labels & Text Input styles:</h1>
        <SyntaxHighlighter language="css" style={syntaxHighlight}>
          {codeExampleDefault}
        </SyntaxHighlighter>
        <label className="form-examples--label" htmlFor="text-input">
          Form Label
          <input
            className="form-examples--input form-examples--input---01"
            id="text-input"
            placeholder="Enter Text"
          />
        </label>
        <p>
          You can pass in bold for a bold label, and customize the font-size:
        </p>
        <SyntaxHighlighter language="css" style={syntaxHighlight}>
          {codeExampleCustom}
        </SyntaxHighlighter>
        <p>You can customize the input with the following values:</p>
        <p>
          You dont need to pass in all the parameters, you can add the ones you
          need but it has to be in the order shown below unless you redefine the
          variables.
        </p>
        <SyntaxHighlighter language="css" style={syntaxHighlight}>
          {codeExampleOutput}
        </SyntaxHighlighter>
        <label className="form-examples--label---bold" htmlFor="text-input-02">
          Form Label Bold
          <input
            className="form-examples--input form-examples--input---02"
            id="text-input-02"
            placeholder="Enter Text"
          />
        </label>
        <SyntaxHighlighter language="css" style={syntaxHighlight}>
          {codeExampleRound}
        </SyntaxHighlighter>
        <input
          className="form-examples--input form-examples--input---03"
          placeholder="Enter Text"
        />
        <input
          className="form-examples--input form-examples--input---04"
          placeholder="Enter Text"
        />
        <input
          className="form-examples--input form-examples--input---05"
          placeholder="Enter Text"
        />
      </div>
    </div>
  );
};

export default Inputs;
