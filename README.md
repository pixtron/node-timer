# @pxtrn/timer

Emits `tick` based on a cron expression.
See `[cron-parser](https://www.npmjs.com/package/cron-parser#supported-format)`
for supported formats.

## Installation

`npm install --save @pxtrn/timer`


## Usage

```js
const Timer = require('@pxtrn/timer');

const timer = new Timer('00 * * * * *', {delay: 200});
timer.on('tick', () => {
  console.log('Tick', new Date())
});
```

### Class: `Timer`

- `expression` {String} Cron expression. See `[cron-parser](https://www.npmjs.com/package/cron-parser#supported-format)`
- `options` {Object} Optional
  - `delay`: {Integer} Delay in milliseconds. Default 0
