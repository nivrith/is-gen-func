# is-gen-func

[![CircleCI](https://circleci.com/gh/nivrith/is-gen-func/tree/master.svg?style=svg)](https://circleci.com/gh/nivrith/is-gen-func/tree/master)
[![NPM Downloads](https://img.shields.io/npm/dw/is-gen-func.svg)](https://www.npmjs.com/package/is-gen-func)
[![node](https://img.shields.io/node/v/is-gen-func.svg)](https://www.npmjs.com/package/is-gen-func)
[![License MIT](https://img.shields.io/github/license/nivrith/is-gen-func.svg)](https://github.com/nivrith/is-gen-func/blob/master/LICENSE)

Check if value is a generator function or an async generator function

## Highlights

- Written in Typescript

- Supports async and sync generator functions

## Installation

npm:

```shell
$ npm install is-gen-func
```

yarn:

```shell
$ yarn add is-gen-func
```

## Usage

> Check if value is a generator function

```js

  const { isGenFunc } = require('is-gen-func');

  isGenFunc(function *() {
    return 'hello world';
  });
  //=> true

  isGenFunc(function () {
    return 'hello world';
  });
  //=> false

  isGenFunc(async function *() {
    return 'hello world';
  });
  //=> true

  isGenFunc(async function () {
    return 'hello world';
  });
  //=> false

```

## License

MIT © [Nivrith](https://github.com/nivrith)
