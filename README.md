# btoa-lite [![Travis CI Build Status](https://img.shields.io/travis/com/node-fetch/btoa-lite/master.svg?style=for-the-badge)](https://travis-ci.com/node-fetch/btoa-lite)

Simplest btoa implementation.

Based on [btoa-lite](https://github.com/hughsk/btoa-lite) and implements [hughsk/btoa-lite#3](https://github.com/hughsk/btoa-lite/pull/3).

## Install

```sh
npm install @node-fetch/btoa-lite
```

## Usage

```js
const btoa = require("@node-fetch/btoa-lite");

btoa("Hello World");
//=> "SGVsbG8gV29ybGQ="
```

## API

### btoa(data)

See https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa
