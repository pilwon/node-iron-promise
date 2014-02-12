/*
 * lib/index.js
 */

'use strict';

/* jshint sub: true */

var bluebird = require('bluebird'),
    ironMQ = require('iron_mq');

function _cb(dfd) {
  return function (err) {
    if (err) { return dfd.reject(err); }
    dfd.fulfill.apply(dfd, Array.prototype.slice.call(arguments, 1));
  };
}

function Client(config) {
  this._client = new ironMQ.Client({
    'token': config.token,
    'project_id': config.projectId,
    'queue_name': config.queue
  });

  this._config = config;
}

Client.prototype.queue = function (queueName) {
  return new Client({
    token: this._config.token,
    projectId: this._config.projectId,
    queue: queueName
  });
};

Client.prototype.queues = function (options) {
  var dfd = bluebird.pending();
  this._client['queues'](options || {}, _cb(dfd));
  return dfd.promise;
};

Client.prototype.info = function () {
  var dfd = bluebird.pending();
  this._client['info'](_cb(dfd));
  return dfd.promise;
};

Client.prototype.clear = function () {
  var dfd = bluebird.pending();
  this._client['clear'](_cb(dfd));
  return dfd.promise;
};

Client.prototype.update = function (options) {
  var dfd = bluebird.pending();
  this._client['update'](options || {}, _cb(dfd));
  return dfd.promise;
};

Client.prototype.addSubscribers = function (subscribers) {
  var dfd = bluebird.pending();
  this._client['add_subscribers'](subscribers, _cb(dfd));
  return dfd.promise;
};

Client.prototype.removeSubscribers = function (subscribers) {
  var dfd = bluebird.pending();
  this._client['rm_subscribers'](subscribers, _cb(dfd));
  return dfd.promise;
};

Client.prototype.deleteQueue = function () {
  var dfd = bluebird.pending();
  this._client['del_queue'](_cb(dfd));
  return dfd.promise;
};

Client.prototype.post = function (messages) {
  var dfd = bluebird.pending();
  this._client['post'](messages, _cb(dfd));
  return dfd.promise;
};

Client.prototype.get = function (options) {
  var dfd = bluebird.pending();
  this._client['get'](options || {}, _cb(dfd));
  return dfd.promise;
};

Client.prototype.peek = function (options) {
  var dfd = bluebird.pending();
  this._client['peek'](options || {}, _cb(dfd));
  return dfd.promise;
};

Client.prototype.delete = function (messageId) {
  var dfd = bluebird.pending();
  this._client['del'](messageId, _cb(dfd));
  return dfd.promise;
};

Client.prototype.getMessage = function (messageId) {
  var dfd = bluebird.pending();
  this._client['msg_get'](messageId, _cb(dfd));
  return dfd.promise;
};

Client.prototype.touchMessage = function (messageId) {
  var dfd = bluebird.pending();
  this._client['msg_touch'](messageId, _cb(dfd));
  return dfd.promise;
};

Client.prototype.releaseMessage = function (messageId, options) {
  var dfd = bluebird.pending();
  this._client['msg_release'](messageId, options || {}, _cb(dfd));
  return dfd.promise;
};

Client.prototype.getMessagePushStatus = function (messageId) {
  var dfd = bluebird.pending();
  this._client['msg_push_statuses'](messageId, _cb(dfd));
  return dfd.promise;
};

Client.prototype.deleteMessagePushStatus = function (messageId, subscriberId) {
  var dfd = bluebird.pending();
  this._client['del_msg_push_status'](messageId, subscriberId, _cb(dfd));
  return dfd.promise;
};

// Public API
exports = module.exports = Client;
