# ember-awesome-icons

Ember.js addon to use SVG from free Font-Awesome icon packs

## Idea

This package gives you the blueprint to generate components with the desired SVG content during development.

Unlike other solutions, there is no need to have all set of awesome icons in your bundle and generate SVG content at runtime. Just the icons you need, fast as HTML and highly customizable with CSS, and SVG powers. Zero-configuration.

[![Node.js Package](https://github.com/alexeipanov/ember-awesome-icons/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/alexeipanov/ember-awesome-icons/actions/workflows/npm-publish.yml)

## Compatibility

* Node.js v18 or above
* Ember.js v4.4 or above


## Installation

```
ember install ember-awesome-icons
```


## Usage

1. Use icon blueprint to generate an icon component:
```
ember generate  <name> <options...>

- name: icon name without a prefix (mandatory) 

- options:
  --style=[solid | regular | brands]
  default: solid
```
2. Use generated component in your templates and components

### Examples
```
ember g icon map	// output: app/components/icons/fas-map.hbs
ember g icon map --style=regular // output: app/components/icons/far-map.hbs
ember g icon 500px --style=brands // output: app/components/icons/fab-500px.hbs
```
```
<Icons::FasMap class="h-20 w-20 fill-sky-500" />
<Icons::FarMap class="h-20 w-20 fill-sky-500" />
<Icons::Fab-500px class="h-20 w-20 fill-sky-500" />
```
![Awesome Icons](tests/dummy/public/awesome-icons.png)

## Alternatives

[ember-fontawesome](https://www.npmjs.com/package/@fortawesome/ember-fontawesome)

[ember-font-awesome](https://www.npmjs.com/package/ember-font-awesome)

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
