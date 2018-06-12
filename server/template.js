export default ({ body, title, initialState }) => `
<!DOCTYPE html>
  <html>
    <head>
      <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
      <title>${title}</title>
      <link href="/assets/index.css" rel="stylesheet"/>
    </head>
    <body>
      <div id="root">${body}</div>
    </body>
    <script src="/assets/bundle.js"></script>
  </html>
`;
