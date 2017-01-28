const _ = require('lodash');
const util = require('util');
const chalk = require('chalk');
const Base = require('inquirer/lib/prompts/base');
const observe = require('inquirer/lib/utils/events');

module.exports = Prompt;

function Prompt() {
  Base.apply(this, arguments);

  let rawDefault = true;

  _.extend(this.opt, {
    filter: function (input) {
      let value = rawDefault;
      if (input != null && input !== '') {
        value = /^y(es)?/i.test(input);
      }
      return value;
    }
  });

  if (_.isBoolean(this.opt.default)) {
    rawDefault = this.opt.default;
  }

  this.opt.default = rawDefault ? 'Y/n' : 'y/N';

  return this;
}
util.inherits(Prompt, Base);

Prompt.prototype._run = function (cb) {
  this.done = cb;
  const events = observe(this.rl);
  events.keypress.takeUntil(events.line).forEach(this.onKeypress.bind(this));
  events.line.take(1).forEach(this.onEnd.bind(this));
  this.render();

  return this;
};

Prompt.prototype.render = function (answer) {
  let message = this.getQuestion();
  if (typeof answer === 'boolean') {
    message += chalk.cyan(answer ? 'Yes' : 'No');
  } else {
    message += this.rl.line;
  }

  this.screen.render(message);
  return this;
};

Prompt.prototype.warn = function (output) {
  // Default values
  let warnif =
    this.opt.warnif === undefined
    ? true
    : this.opt.warnif

  let warning = this.opt.warning || "You may end up in trouble!";
  let color = this.opt.color || "yellow"
  if(warnif == output)
    console.log(chalk.yellow('!') + ' ' + chalk[color](warning));
}

Prompt.prototype.onEnd = function (input) {
  this.status = 'answered';
  let output = this.opt.filter(input);
  this.render(output);
  this.screen.done();
  this.done(output);
  this.warn(output);
};

Prompt.prototype.onKeypress = function () {
  this.render();
};
