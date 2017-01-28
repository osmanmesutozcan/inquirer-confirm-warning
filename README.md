<p align="center">
	<b>Custom confirm prompt for <a href="https://github.com/SBoudrias/Inquirer.js">inquirer</a> that warns if the conditions are met.</b>
	<br><br>
	<img src="http://i.giphy.com/26gsiiMS8jcLUDVlu.gif">
</p>

### Installation
```
npm install inquirer-confirm-warning
```

```
inquirer.registerPrompt('warning', require('inquirer-confirm-warning'));
```
If using with [plop](https://github.com/amwmedia/plop) then in your plop config:

```
plop.addPrompt('warning', require('inquirer-confirm-warning'));
```

### Examples

You can see it in action.

Get to the examples folder and run:

```
node example/simple_example.js
```

### Usage

Take `type`, `name`, `message`, `[default: Bool, warnif: Bool, warning: String]` properties.

Takes [chalk](https://github.com/chalk/chalk) color names (e.g `white`, `yellow`, `red`).



```
inquirer.prompt({
  type: 'warning',
  message: message
  warning: 'Some sort of warning!',
  color: 'yellow',
  warnif: true
});
```
