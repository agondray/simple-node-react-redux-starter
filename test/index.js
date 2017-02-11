// import Express from 'express';
import http from 'http';
import assert from 'assert';
import '../server.js';

describe('Sample Node Server', () => {
  it('should return 200', done => {
    http.get('http://127.0.0.1:1337', res => {
      assert.equal(200, res.statusCode);
      done();
    })
  })
})
