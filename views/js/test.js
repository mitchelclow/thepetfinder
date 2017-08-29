//This is real code, run me with 'npm test'!
//Blog: http://blog.xebia.com/testing-es2015-promises-with-mocha/ ‎

import chai, { expect, should } from 'chai';
should();
import chaiAsPromised from "chai-as-promised";
import 'babel-polyfill';
chai.use(chaiAsPromised);

const resolvingPromise = new Promise((resolve) =>
  resolve('promise resolved')
);
const rejectingPromise = new Promise((resolve, reject) =>
  reject(new Error('promise rejected'))
);

/*
When you assert on the result of a promise,
there are several failure modes you want to test for.
This is what can go wrong:
 - Your assertion on the result of the promise can fail.
 - The promise you test can reject unexpectedly.
*/

describe('testing promises', () => {

  describe('with "done" callback', () => {

    //Output: ✓ assertion success
    it('assertion success', (done) => {
      resolvingPromise.then( (result) => {
        expect(result).to.equal('promise resolved');
        done();
      });
    });

    //Output: Error: timeout of 2000ms exceeded. Ensure done() is being called.
    it('failing assertion', (done) => { // Don't forget 'done' here...
      resolvingPromise.then( (result) => {
        expect(result).to.equal('i fail');
        done();
      });
    });

    //Output: Error: timeout of 2000ms exceeded. Ensure done() is being called.
    it('promise rejects', (done) => { // Don't forget 'done' here...
      rejectingPromise.then( (result) => {
        expect(result).to.equal('promise resolved');
        done();
      });
    });

    /*
    There are two problems with this style:
     - You won't see the cause of your test test failures
     - there is nothing holding you back from writing an evergreen test. Try
       removing 'done' on line 38 and 46 and be amazed if you run 'npm test'
    */
  });

  describe('"done" callback with .then(done,done)', () => {

    //Output: ✓ assertion success
    it('assertion success', (done) => {
      resolvingPromise.then( (result) => {
        expect(result).to.equal('promise resolved');
      }).then(done,done);
    });

    //Output: AssertionError: expected 'promise resolved' to equal 'i fail'
    it('failing assertion', (done) => {
      resolvingPromise.then( (result) => {
        expect(result).to.equal('i fail');
      }).then(done,done);
    });

    //Output: Error: promise rejected
    it('promise rejects', (done) => {
      rejectingPromise.then( (result) => {
        expect(result).to.equal('promise resolved');
      }).then(done,done);
    });

    /*
    If you want to use the 'done' callback, this is the best way.
     - Your test failures are caught and displayed
     - When you forget to supply 'done' as argument, you will get
       'done is not defined'
     - If you forget to end your test with '.then(done,done)</code>',
       mocha warns you about a missing 'done'.
    */

  });

  describe('return a promise', () => {

    //Output: ✓ assertion success
    it('assertion success', () => {
      return resolvingPromise.then( (result) => {
        expect(result).to.equal('promise resolved');
      });
    });

    //Output: AssertionError: expected 'promise resolved' to equal 'i fail'
    it('failing assertion', () => {
      return resolvingPromise.then( (result) => {
        expect(result).to.equal('i fail');
      });
    });

    //Output: Error: promise rejected
    it('promise rejects', () => {
      return rejectingPromise.then( (result) => {
        expect(result).to.equal('promise resolved');
      });
    });

    //More readable with chai-as-promised
    it('succes with chai as promised', () => {
       return resolvingPromise.should.eventually.equal("promise resolved");
    });

    /*
     Meh. When you forget to type 'return', your test is evergreen and
     there is no safeguard to warn you about the missing return.
     */

  });

  describe('async await', () => {

    //Output: ✓ assertion success
    it('assertion success', async () => {
      const result = await resolvingPromise;
      expect(result).to.equal('promise resolved');
    });

    //Output: AssertionError: expected 'promise resolved' to equal 'i fail'
    it('failing assertion', async () => {
      const result = await resolvingPromise;
      expect(result).to.equal('i fail');
    });

    //Output: Error: promise rejected
    it('promise rejects', async () => {
      const result = await rejectingPromise;
      expect(result).to.equal('promise resolved');
    });

    /*
    This style is just as safe as the '.then(done,done)' style,
    but it's much easier to read since there is no chaining and nesting
    of then callbacks.
    */

  });


});
