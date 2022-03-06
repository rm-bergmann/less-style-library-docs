import React from 'react';
import CodeBlock from '../components/codeBlock/codeBlock';
import '../less/imports.less';

const IndexPage = () => {

  return (
    <>
      <div />
      <div className={`about-container`}>

        <p>Less Style Library is a library of namespaced mixins to help write css styles faster.</p>
        <p>This is a useful tool if:</p>

        <ul>
          <li>You like designing in the browser</li>
          <li>You like writing CSS in Less</li>
          <li>You like changing multiple values at once</li>
          <li>You like identifying where styles are in your code easily</li>
        </ul>

        <h2>Installation</h2>
        <p>Install into your project using yarn or npm</p>

        <CodeBlock>
          $ npm install less-style-library --save-dev
        </CodeBlock>

        <CodeBlock>
          $ yarn add less-style-library
        </CodeBlock>

        <p>
          Import the library using a less / css import statement. This should be imported
          before all other less files in your project so that you can override any predefined
          variables and settings if needed.
        </p>

        <CodeBlock>
          @import './node_modules/less-style-library/imports.less';
        </CodeBlock>

      </div>
      <aside className={`layout__side`}>

      </aside>
    </>
  );
}

export default IndexPage
