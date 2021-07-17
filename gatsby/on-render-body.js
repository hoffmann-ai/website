'use strict';

const React = require('react');
const siteConfig = require('../config.js');

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
const katexStylesheet = require('!css-loader!../static/css/katex/katex.min.css');

const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  const { useKatex } = siteConfig;

  if (useKatex) {
    setHeadComponents([
      React.createElement("style", {
        key: "katex-inline-stylesheet",
        dangerouslySetInnerHTML: { __html: katexStylesheet.toString() },
      }),
    ]);
  }

  setPostBodyComponents([
    <script
      key="axeptio"
      dangerouslySetInnerHTML={{
        __html: `
          window.axeptioSettings = {
            clientId: "60f291c2afa9d02a7f02768e",
            cookiesVersion: "hoffmann.ai-base",
          };
          (function(d, s) {
            var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
            e.async = true; e.src = "//static.axept.io/sdk-slim.js";
            t.parentNode.insertBefore(e, t);
          })(document, "script");
      `,
      }}
    />,
  ])
};

module.exports = onRenderBody;
