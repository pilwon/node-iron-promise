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

var q = ironMQ.queue('test');

q.post(['Hello', 'World']).then(function (result) {
  console.log(result);
});
