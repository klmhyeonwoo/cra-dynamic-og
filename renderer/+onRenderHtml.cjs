// +onRenderHtml.cjs
// Environment: server

import { escapeInject, dangerouslySkipEscape } from "vike/server";
import { renderToString } from "react-dom/server";
import { createElement } from "react";

export { onRenderHtml };

async function onRenderHtml(pageContext) {
  const { Page, data } = pageContext;
  const pageHtml = await renderToString(createElement(Page, data));

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>My SSR App</title>
      </head>
      <body>
        <div id="page-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can define pageContext values here
    },
  };
}
