/*
 * examples/all.js
 */

'use strict';

var IronMQ = require('..');

var TOKEN = '<token>',
    PROJECT_ID = '<project-id>';

var ironMQ = new IronMQ({
  token: TOKEN,
  projectId: PROJECT_ID
});

var queueTest1 = ironMQ.queue('test-1'),
    queueTest2 = ironMQ.queue('test-2');

queueTest1
  .post(['Hello', 'Test 1'])
  .then(queueTest1.info.bind(queueTest1))
  .done(function (result) {
    console.log(result);
  });

queueTest1
  .post(['Hello', 'Test 2'])
  .then(queueTest2.info.bind(queueTest2))
  .done(function (result) {
    console.log(result);
  });
