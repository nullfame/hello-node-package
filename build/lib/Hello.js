"use strict";

module.exports = function () {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "World";

  return "Hello, " + name;
};