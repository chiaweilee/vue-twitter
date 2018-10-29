'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueScript = require('vue-script2');

var _vueScript2 = _interopRequireDefault(_vueScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  template: '<div v-if="installed"><slot name="loading" v-if="!ready"/><div v-show="ready"><slot/></div></div><div v-else><slot name="loading"/></div>',
  data: function data() {
    return {
      installed: !!window.twttr,
      ready: false
    };
  },
  mounted: function mounted() {
    this.install();
  },

  methods: {
    install: function install() {
      var _this = this;

      if (!this.installed) {
        // install
        _vueScript2.default.load('https://platform.twitter.com/widgets.js').then(function () {
          _this.installed = true;
          _this.$nextTick(function () {
            _this.init();
            _this.$emit('installed');
          });
        }).catch(function (err) {
          console.error(err);
          _this.$emit('err', err);
        });
      } else {
        this.init();
      }
    },
    init: function init() {
      var _this2 = this;

      this.$nextTick(function () {
        window.twttr.widgets.load().then(function () {
          _this2.ready = true;
          _this2.$emit('ready');
        }).catch(function (err) {
          console.error(err);
          _this2.$emit('err', err);
        });
      });
    }
  }
};