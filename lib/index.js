'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.twitter = undefined;

var _twttr = require('./twttr.vue');

var _twttr2 = _interopRequireDefault(_twttr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  install: function install(Vue) {
    Vue.component('twitter', _twttr2.default);
  }
};
exports.twitter = _twttr2.default;