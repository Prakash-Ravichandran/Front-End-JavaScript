/**
 * A tiny server that can be used to stub backend calls.
 */

 const express = require('express')
 const cors = require('cors')
 const bodyParser = require('body-parser')
 const app = express()
 const port = 1993
 
 
 app.use(bodyParser.json())
 app.use(cors())
 app.get('/', (request, response) => {
   console.log(`The email address was: ${request.query.email}`)
   let status = 0
   switch (request.query.email) {
     case 'test@test.com':
       status = 1
       break
     case 'test2@test.com':
       status = 2
       break
     case 'bad@request.com':
       status = 'Bad Request'
       break
     default:
       status = 0
       break
   }
 
   //response.json({ status: status })
   response.status(500).send('Something broke!')
 })
 
 app.get('/abncheck', (request, response) => {
   console.log(`ABN is: ${request.query.abn}`)
   let status = 0
   let companyname = '2TEST PTY LTD'
   switch (request.query.abn) {
     case '11111111111':
       status = 0
       break
     case '22222222222':
       status = 2
       break
     default:
       status = 0
       break
   }
 
   response.json({ status: status, companyname: companyname })
   // response.status(500).send('Something broke!')
 })
 
 app.get('/token', (request, response) => {
   console.log(`token is: ${request.headers.access_token}`)
   let status = 0
   switch (request.headers.access_token) {
     case '1234567890AB':
       status = 0
       break
     case '22222222222':
       status = 2
       break
     default:
       status = 0
       break
   }
 
   //response.json({ status: status, url:'https://www.google.com' })
   response.status(500).send('Something broke!')
 })
 
 
 
 
 app.listen(port, err => {
   if (err) {
     return console.log('something bad happened', err)
   }
   console.log(`server is listening on ${port}`)
 })

//  app.post('/generateCode', (request, response) => {
//     var status = 4;
//     let serverStatus = 200;
//     switch (request.body.email) {
//       case 'status1@test.com':
//         status = 1
//         break
//       case 'status2@test.com':
//         status = 2
//         break
//       case 'bad@request.com':
//         status = 'Bad Request'
//         serverStatus = 400
//         break
//       default:
//         status = 3
//         break
//     }
//     console.log(`status: ${serverStatus} code: ${status === 1? emailCode: 'no code'}`);
//     response.status(serverStatus).json({ status: status })
//   })
  