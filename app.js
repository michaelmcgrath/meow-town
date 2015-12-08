'use strict'

const koa = require('koa')
const koaBody = require('koa-better-body')
const app = koa()
const router = require('koa-router')()

app.use(koaBody({
  extendTypes: {
    // will parse application/x-javascript type body as a JSON string
    json: ['application/x-javascript'],
    multipart: ['multipart/mixed']
  }
}))

router.post('/cats', function *() {
  if (this.request.body.fields){
    this.status = 201
  } else {
    this.status = 400
  }
})
app.use(router.routes())

module.exports = app
