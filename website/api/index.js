const port = process.env.PORT || 3000
const express = require('express')
const AbortController = require('abort-controller')
const { Resolver } = require('dns').promises
const resolver = new Resolver()
var app = express()
app.use(express.json())
// const cors = require("cors");
// app.use(
//   cors({
//     allowedHeaders: ["sessionId", "Content-Type"],
//     exposedHeaders: ["sessionId"],
//     origin: "*",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     preflightContinue: false
//   })
// );

app.get('/api', function (req, res) {
  res.json({
    hello: 'world'
  })
})

resolver.setServers(['159.69.198.101', '108.61.201.119'])

app.get('/api/:domainName', function (req, res) {
  let controller = new AbortController()
  let signal = controller.signal
  let timeout = 3000

  function myTimer () {
    timeout = setTimeout(() => {
      controller.abort()
      res.json({
        status: 'timeout'
      })
    }, timeout)
  }
  myTimer()
  resolver
    .resolve(`${req.params.domainName}`)
    .then(addresses => {
      // console.log(addresses)
      clearTimeout(timeout)

      let ip = addresses[0].toString()
      if ((ip == '0.0.0.0' && ip != null) || undefined) {
        res.json({
          status: 'failed'
        })
      } else {
        res.json({
          status: 'ok'
        })
      }
    })
    .catch(error => {
      if (
        error.code === 'NOTFOUND' ||
        error.code === 'SERVFAIL' ||
        error.code === 'REFUSED'
      ) {
        clearTimeout(timeout)
        res.json({
          status: 'failed'
        })
      } else if (error.code === 'TIMEOUT') {
        clearTimeout(timeout)
        res.json({
          status: 'timeout'
        })
      } else if (
        error.code === 'ENOTFOUND' ||
        error.code === 'NXDOMAIN' ||
        error.code === 'NOTIMP'
      ) {
        clearTimeout(timeout)
        res.json({
          status: 'failed'
        })
      }
    })
})
app.listen(port, err => {
  if (err) throw err
  console.log(`Server ready on port ${port}`)
})
