# ember-awesome-icons

Ember.js addon to use SVG from free Font-Awesome icon packs


## Compatibility

* Ember.js v4.4 or above
* Ember CLI v4.4 or above
* Node.js v14 or above


## Installation

```
ember install ember-awesome-icons
```


## Usage

Use icon blueprint to generate an icon component:
```
ember generate  <name> <options...>

	name: icon name without a prefix (mandatory) 

	options:

		--style=[solid | regular | brands]
```

### Examples
```
ember g icon map	// output: app/components/icons/fas-map.hbs
ember g icon map --style=regular // output: app/components/icons/far-map.hbs
ember g icon 500px --style=brands // output: app/components/icons/fab-map.hbs
```


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
