const renderPage = ({ html, styles }) => {
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
    </body>
  </html>
`;
};

export default renderPage;
