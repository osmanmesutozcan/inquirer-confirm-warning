'use strict';

var inquirer = require('inquirer');

inquirer.registerPrompt('warning', require('..'));

inquirer.prompt([{
  type: 'warning',
  name: 'example',
  message: 'Are you sure!',
  color: 'white'
}, {
  type: 'warning',
  name: 'example',
  message: 'Really!!',
  warning: 'We warn you!',
  warnif: true,
  color: 'red'
}, {
  type: 'warning',
  name: 'example',
  message: 'Last chance?',
  warning: 'Good. You changed your mind.',
  warnif: false,
  color: 'yellow'
}]);
