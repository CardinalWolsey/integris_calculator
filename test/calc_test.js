var chai = require('chai');
var chaihttp = require('chai-http')
chai.use(chaihttp);
var expect = chai.expect;

require(__dirname + '/../server');

describe('calculator routes', function() {

  //addition route
  it('the add route should add two numbers', function(done) {
    var numberData = {firstNumber: 3, secondNumber: 2};
    chai.request('localhost:3000')
      .post('/api/add')
      .send(numberData)
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.number).to.eql(5);
        done();
      });
  });
  it('should error when numbers are not provided', function(done) {
    var numberData = {firstNumber: 'b', secondNumber: 'a'};
    chai.request('localhost:3000')
      .post('/api/add')
      .send(numberData)
      .end(function(err, res) {
        expect(res.body.error).to.eql('please input a number');
        done();
      })
  })

  //subtraction routes
  it('the subract route should subract two numbers', function(done) {
    var numberData = {firstNumber: 5, secondNumber: 3};
    chai.request('localhost:3000')
      .post('/api/subtract')
      .send(numberData)
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.number).to.eql(2);
        done();
      });
  });
  it('should error when numbers are not provided', function(done) {
    var numberData = {firstNumber: 'a', secondNumber: 'b'};
    chai.request('localhost:3000')
      .post('/api/subtract')
      .send(numberData)
      .end(function(err, res) {
        expect(res.body.error).to.eql('please input a number');
        done();
      });
  });

  //multiplication routes
  it('the multiply route should multiply two numbers', function(done) {
    var numberData = {firstNumber: 5, secondNumber: 3};
    chai.request('localhost:3000')
      .post('/api/multiply')
      .send(numberData)
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.number).to.eql(15);
        done();
      });
  });
  it('should error when numbers are not provided', function(done) {
    var numberData = {firstNumber: 'a', secondNumber: 'b'};
    chai.request('localhost:3000')
      .post('/api/multiply')
      .send(numberData)
      .end(function(err, res) {
        expect(res.body.error).to.eql('please input a number');
        done();
      });
  });

  //division routes
  it('the divide route should divide two numbers', function(done) {
    var numberData = {firstNumber: 6, secondNumber: 3};
    chai.request('localhost:3000')
      .post('/api/divide')
      .send(numberData)
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.number).to.eql(2);
        done();
      });
  });
  it('should error when numbers are not provided', function(done) {
    var numberData = {firstNumber: 'a', secondNumber: 'b'};
    chai.request('localhost:3000')
      .post('/api/divide')
      .send(numberData)
      .end(function(err, res) {
        expect(res.body.error).to.eql('please input a number');
        done();
      });
  });
});
