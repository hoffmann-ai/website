'use strict';

const React = require('react');

const onRenderBody = ({ setPostBodyComponents }) => {
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
            e.async = true;
            e.src = "//static.axept.io/sdk-slim.js";
            t.parentNode.insertBefore(e, t);
          })(document, "script");
      `,
      }}
    />
  ]);
};

module.exports = onRenderBody;
