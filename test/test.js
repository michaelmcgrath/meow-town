'use strict'

const app = require('../app')
const request = require('co-supertest').agent(app.listen())
const expect = require('chai').expect
require('co-mocha')


describe('API endpoints', () => {
  describe('POST /cats', () => {
    context('with valid data', () =>{
      it('creates a new cat')
      it('returns 201')
    })
    context('with invalid data', () =>{
      it('does not create a cat')
      it('returns 400', function *(){
        yield request.post('/cats').expect(400).end()
      })
    })

  })
  describe('GET /cats', () => {

  })
  describe('PATCH /cats/:id', () =>{

  })

})


