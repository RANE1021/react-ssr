const renderPage = ({ html, styles, preloadedState }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>SSR</title>
      ${styles}
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="app.js"></script>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
      </script>
    </body>
  </html>
`;
};

export default renderPage;
