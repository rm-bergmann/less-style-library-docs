import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { mediaExample01, mediaExample02 } from './mediaExamples';

// import ReactHtmlParser from 'react-html-parser';
// import mediaContent from './media.md';

const Media = () => {
  const syntaxHighlight = atomDark;
  return (
    <div className="content content-button">
      <h1>Media Queries</h1>
      <p>
        Common device screen sizes are set up as variables to make it easier and
        faster to write media queries. The variables follow a specific pattern
        to make the variables easy to remember.
      </p>
      <SyntaxHighlighter language="css" style={syntaxHighlight}>
        {mediaExample01}
      </SyntaxHighlighter>
      <div className="flex-container">
        <div className="flex-item">
          <h2>Device Options:</h2>
          <ul>
            <li>mobile</li>
            <li>tablet</li>
            <li>laptop</li>
            <li>desktop</li>
          </ul>
        </div>
        <div className="flex-item">
          <h2>Size Options:</h2>
          <ul>
            <li>small</li>
            <li>large</li>
          </ul>
        </div>
      </div>
      <p>
        To target mobile devices with a screensize less than 320px wide you can
        write the following:
      </p>
      <SyntaxHighlighter language="css" style={syntaxHighlight}>
        {mediaExample02}
      </SyntaxHighlighter>
      <h2>Complete list of defined media query variables:</h2>
      <div className="flex-container">
        <table>
          <thead>
            <tr>
              <th>Max Width Variable</th>
              <th>Screen Width PX</th>
              <th>Min Width Variable</th>
              <th>Screen Width PX</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>@mobile-small-max</td>
              <td>319px</td>
              <td>@mobile-small-min</td>
              <td>320px</td>
            </tr>
            <tr>
              <td>@mobile-large-max</td>
              <td>479px</td>
              <td>@mobile-large-min</td>
              <td>480px</td>
            </tr>
            <tr>
              <td>@tablet-small-max</td>
              <td>599px</td>
              <td>@tablet-small-min</td>
              <td>600px</td>
            </tr>
            <tr>
              <td>@tablet-large-max</td>
              <td>767px</td>
              <td>@tablet-large-min</td>
              <td>768px</td>
            </tr>
            <tr>
              <td>@laptop-small-max</td>
              <td>991px</td>
              <td>@laptop-small-min</td>
              <td>992px</td>
            </tr>
            <tr>
              <td>@laptop-large-max</td>
              <td>1279px</td>
              <td>@laptop-large-min</td>
              <td>1280px</td>
            </tr>
            <tr>
              <td>@desktop-small-max</td>
              <td>1599px</td>
              <td>@desktop-small-min</td>
              <td>1600px</td>
            </tr>
            <tr>
              <td>@desktop-large-max</td>
              <td>1919px</td>
              <td>@desktop-large-min</td>
              <td>1920px</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Media;
