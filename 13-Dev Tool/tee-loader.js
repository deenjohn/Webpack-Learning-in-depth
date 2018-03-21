const loaderUtils = require('loader-utils');

module.exports = function (source) {
	console.log("\n");
  const options = loaderUtils.getOptions(this) || {label: ''};

  console.groupCollapsed(`[tee-loader-${options.label}]: ${this.resource}`);
  console.log(source);
  console.groupEnd();

  return source;
};