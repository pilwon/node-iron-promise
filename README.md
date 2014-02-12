# iron-promise


[![NPM](https://nodei.co/npm/iron-promise.png?downloads=false&stars=false)](https://npmjs.org/package/iron-promise) [![NPM](https://nodei.co/npm-dl/iron-promise.png?months=6)](https://npmjs.org/package/iron-promise)

`iron-promise` is a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)-style wrapper of [iron_mq_node](https://github.com/iron-io/iron_mq_node), the official API client library of [IronMQ](http://www.iron.io/mq) for [Node.js](http://nodejs.org/).

This wrapper library made the following changes:

* Supports Promise style (instead of callback)
* Renamed `underscore_case` to `camelCase` for function and variable names
* Cleaned up API by converting ugly pythonic names to explicit JS-friendly names (ex: `del_msg_push_status` to `deleteMessagePushStatus`)


## Installation

    $ npm install iron-promise


## Usage

```js
var ironMQ = new (require('iron-promise'))({
  token: '<token>',
  projectId: '<project-id>',
  // queue: 'default'
});

ironMQ.post(['Hello', 'World']).then(function (result) {
  console.log(result);
});
```

* [See more comprehensive examples here.](https://github.com/pilwon/node-iron-promise/tree/master/examples)


## API

* Please refer to the documentation of [iron_mq_node](https://github.com/iron-io/iron_mq_node). (all API functions are 1-to-1 mapped)

```text
.queue(queueName)
.queues(options)
.info()
.clear()
.update(options)
.addSubscribers(subscribers)
.removeSubscribers(subscribers)
.deleteQueue()
.post(messages)
.get(options)
.peek(options)
.delete(messageId)
.getMessage(messageId)
.touchMessage(messageId)
.releaseMessage(messageId, options)
.getMessagePushStatus(messageId)
.deleteMessagePushStatus(messageId, subscriberId)
```


## Credits

  See the [contributors](https://github.com/pilwon/node-iron-promise/graphs/contributors).


## License

<pre>
The MIT License (MIT)

Copyright (c) 2014 Pilwon Huh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
</pre>


[![Analytics](https://ga-beacon.appspot.com/UA-47034562-20/node-iron-promise/readme?pixel)](https://github.com/pilwon/node-iron-promise)
