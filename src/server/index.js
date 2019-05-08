import express from "express"
import cors from "cors"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import App from '../shared/App'
import store from "../shared/store";
import React from 'react'

const app = express()

app.use(cors())

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(express.static("public"))

app.get("*", (req, res, next) => {
  const context = { };
  console.log(store.getState())

  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter context={ context } location={ req.url }>
        <App />
      </StaticRouter>
    </Provider>
  )

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>YeSmart</title>
        <link href="//fonts.googleapis.com/css?family=Open+Sans:300,400,700,900|Montserrat:400,700,900|Yanone+Kaffeesatz:400|Architects+Daughter:400" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="/main.css">
        <script src="/bundle.js" defer></script>
      </head>

      <body>
        <div id="app" class="yesm-container">${markup}</div>
      </body>
    </html>
  `)
})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})
