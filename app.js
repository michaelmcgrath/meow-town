'use strict'

const koa = require('koa')
const koaBody = require('koa-better-body')
const app = koa()
const router = require('koa-router')()

module.exports = app

router.post('/cats', function *() {
  this.status = 400
} )
app.use(router.routes())
