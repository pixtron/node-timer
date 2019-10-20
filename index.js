const {EventEmitter} = require('events');

const parser = require('cron-parser');

module.exports = class Timer extends EventEmitter {

  constructor(expression, options = {}) {
    super();

    this.interval = parser.parseExpression(expression, {utc: true});

    this.options = {
      delay: 0,
      ...options
    };

    this._scheduleNext();
  }

  _scheduleNext() {
    setTimeout(this._onTick.bind(this), this.interval.next().getTime() - Date.now() + this.options.delay);
  }

  _onTick() {
    this.emit('tick');
    this._scheduleNext();
  }
}
