const renderPage = (html) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>SSR</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
`
}

export default renderPage
