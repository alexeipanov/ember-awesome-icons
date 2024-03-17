'use strict';

const { EOL } = require('os');
// eslint-disable-next-line n/no-unpublished-require
const { camelize } = require('ember-cli-string-utils');

const faPackages = [
  { name: '@fortawesome/free-solid-svg-icons', style: 'solid' },
  { name: '@fortawesome/free-regular-svg-icons', style: 'regular' },
  { name: '@fortawesome/free-brands-svg-icons', style: 'brands' },
];

module.exports = {
  description: 'Generate SVG icon component by FontAwesome icon name',

  availableOptions: [
    { name: 'style', type: ['solid', 'regular', 'brands'], default: 'solid' },
  ],

  async beforeInstall() {
    let iconsPack = faPackages.find((iconsPack) => {
      return iconsPack.style === this.options.style;
    });

    if (!iconsPack) {
      return Promise.reject(
        "Unknown style! Available style values are 'solid', 'regular', 'brands'",
      );
    }

    let icons = await import(iconsPack.name);
    let icon = this.findIcon(icons, camelize(this.options.entity.name));

    if (!icon) {
      return Promise.reject(`Icon is not present in ${iconsPack.name} package`);
    }
  },

  async afterInstall(options) {
    let iconsPack = faPackages.find(
      (iconsPack) => iconsPack.style === options.style,
    );

    let entries = await import(iconsPack.name);
    let entry = this.findIcon(entries, camelize(this.options.entity.name));
    let { prefix, iconName, icon } = entry;
    // eslint-disable-next-line no-unused-vars
    let [width, height, aliases, unicode, svgPathData] = icon;

    this.insertIntoFile(
      `app/components/icons/${prefix}-${options.entity.name}.hbs`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" class="${iconName}" fill="currentColor" ...attributes>${EOL}\t<path d="${svgPathData}" />${EOL}</svg>`,
    );
  },

  findIcon(icons, name) {
    let icon = Object.entries(icons)
      .map(([key, value]) => [key.toLowerCase(), value])
      .find(([key]) => key === `fa${name.toLowerCase()}`);

    return icon && icon[1];
  },
};
