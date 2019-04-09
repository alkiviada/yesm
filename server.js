/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var links = ['Адреса тра ла ла', 'Автономные системы', 'Мониторинг ресурсов клиента', 'Регистрация', 'Регистрация доменов', 'IP-консалтинг'];

var SideNav = function (_Component) {
  _inherits(SideNav, _Component);

  function SideNav() {
    _classCallCheck(this, SideNav);

    return _possibleConstructorReturn(this, (SideNav.__proto__ || Object.getPrototypeOf(SideNav)).apply(this, arguments));
  }

  _createClass(SideNav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'yesm-sidenav' },
        _react2.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', version: '1.1', className: 'svg-filters', width: '0', height: '0' },
          _react2.default.createElement(
            'defs',
            null,
            _react2.default.createElement(
              'filter',
              { id: 'brush' },
              _react2.default.createElement('feTurbulence', { type: 'fractalNoise', baseFrequency: '.001 0.3', numOctaves: '2', result: 'warp' }),
              _react2.default.createElement('feDisplacementMap', { xChannelSelector: 'R', yChannelSelector: 'G', scale: '11', 'in': 'SourceGraphic', in2: 'warp' })
            )
          )
        ),
        links.map(function (l, i) {
          return _react2.default.createElement(
            'div',
            { key: l.toString(), className: 'yesm-nav-link ' + (i % 3 ? i % 2 ? 'bg-blue' : 'bg-yellow' : 'bg-red') },
            l
          );
        })
      );
    }
  }]);

  return SideNav;
}(_react.Component);

exports.default = SideNav;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YesCube = function (_Component) {
  _inherits(YesCube, _Component);

  function YesCube() {
    _classCallCheck(this, YesCube);

    return _possibleConstructorReturn(this, (YesCube.__proto__ || Object.getPrototypeOf(YesCube)).apply(this, arguments));
  }

  _createClass(YesCube, [{
    key: 'render',
    value: function render() {
      var location = this.props.location;

      var className = location.pathname === '/' ? 'yesm-main-cube' : 'yesm-main-cube-logo';
      return _react2.default.createElement(
        'svg',
        { viewBox: '-14 -10 43 39', xmlns: 'http://www.w3.org/2000/svg', className: className },
        _react2.default.createElement(
          'g',
          { id: 'cube', className: 'cube' },
          _react2.default.createElement(
            'g',
            { id: 'top-layer-left-twist', className: 'top-layer-left-twist' },
            _react2.default.createElement(
              'g',
              { id: 'right-side-left-twist', className: 'right-side left-twist-right-side' },
              _react2.default.createElement('rect', { x: '0', y: '0', width: '10', height: '10' }),
              _react2.default.createElement('rect', { x: '10', y: '0', width: '10', height: '10' }),
              _react2.default.createElement('rect', { x: '20', y: '0', width: '10', height: '10' })
            ),
            _react2.default.createElement(
              'g',
              { id: 'left-side-left-twist', className: 'left-side left-twist-left-side' },
              _react2.default.createElement('rect', { x: '0', y: '0', width: '10', height: '10' }),
              _react2.default.createElement('rect', { x: '10', y: '0', width: '10', height: '10' }),
              _react2.default.createElement('rect', { x: '20', y: '0', width: '10', height: '10' })
            ),
            _react2.default.createElement(
              'g',
              { id: 'top-left-twist', className: 'top-left-twist' },
              _react2.default.createElement('path', { d: 'M 30 30 h -30 v -30 h 30 z' })
            )
          ),
          _react2.default.createElement(
            'g',
            { id: 'right-side-left-twist-bottom', className: 'right-side right-bottom' },
            _react2.default.createElement('rect', { x: '0', y: '0', width: '10', height: '10' }),
            _react2.default.createElement('rect', { x: '10', y: '0', width: '10', height: '10' }),
            _react2.default.createElement('rect', { x: '20', y: '0', width: '10', height: '10' })
          ),
          _react2.default.createElement(
            'g',
            { id: 'left-side-left-twist-bottom', className: 'left-side left-bottom' },
            _react2.default.createElement('rect', { x: '0', y: '0', width: '10', height: '10' }),
            _react2.default.createElement('rect', { x: '10', y: '0', width: '10', height: '10' }),
            _react2.default.createElement('rect', { x: '20', y: '0', width: '10', height: '10' })
          ),
          _react2.default.createElement(
            'g',
            { id: 'right-side-right-twist', className: 'right-side right-side-right-twist' },
            _react2.default.createElement('rect', { x: '0', y: '0', width: '10', height: '10' }),
            _react2.default.createElement('rect', { x: '10', y: '0', width: '10', height: '10' }),
            _react2.default.createElement('rect', { x: '20', y: '0', width: '10', height: '10' })
          ),
          _react2.default.createElement(
            'g',
            { id: 'left-side-right-twist', className: 'left-side left-side-right-twist' },
            _react2.default.createElement('rect', { x: '0', y: '0', width: '10', height: '10' }),
            _react2.default.createElement('rect', { x: '10', y: '0', width: '10', height: '10' }),
            _react2.default.createElement('rect', { x: '20', y: '0', width: '10', height: '10' })
          ),
          _react2.default.createElement(
            'g',
            { id: 'top-right-twist', className: 'top-right-twist top-right-twist-row1' },
            _react2.default.createElement('rect', { x: '0', y: '0', width: '10', height: '10' }),
            _react2.default.createElement('rect', { x: '10', y: '0', width: '10', height: '10' }),
            _react2.default.createElement('rect', { x: '20', y: '0', width: '10', height: '10' })
          ),
          _react2.default.createElement(
            'g',
            { id: 'top-right-twist', className: 'top-right-twist top-right-twist-row2' },
            _react2.default.createElement('rect', { x: '0', y: '0', width: '10', height: '10' }),
            _react2.default.createElement('rect', { x: '10', y: '0', width: '10', height: '10' }),
            _react2.default.createElement('rect', { x: '20', y: '0', width: '10', height: '10' })
          ),
          _react2.default.createElement(
            'g',
            { id: 'top-right-twist', className: 'top-right-twist top-right-twist-row3' },
            _react2.default.createElement('rect', { x: '0', y: '0', width: '10', height: '10' }),
            _react2.default.createElement('rect', { x: '10', y: '0', width: '10', height: '10' }),
            _react2.default.createElement('rect', { x: '20', y: '0', width: '10', height: '10' })
          )
        )
      );
    }
  }]);

  return YesCube;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(YesCube);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YesBrandName = function (_Component) {
  _inherits(YesBrandName, _Component);

  function YesBrandName() {
    _classCallCheck(this, YesBrandName);

    return _possibleConstructorReturn(this, (YesBrandName.__proto__ || Object.getPrototypeOf(YesBrandName)).apply(this, arguments));
  }

  _createClass(YesBrandName, [{
    key: 'render',
    value: function render() {
      var location = this.props.location;

      var className = location.pathname === '/' ? 'yesm-bname' : 'yesm-bname-logo';
      return _react2.default.createElement(
        'svg',
        { viewBox: '-5 -3 26 24.4', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', width: '100%', height: '100%', className: className },
        _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement('path', { id: 'bname-lower-path', d: 'M 0 3 L 5.4 3 M 5.5 3.5 L 8.3 3.5 M 8.1 4.5 L26 4.5', className: 'yesm-text-path' }),
          _react2.default.createElement('path', { id: 'bname-cap-path', d: 'M 3.6 3 L 5 3 M 8.8 4.5 L26 4.5', className: 'yesm-text-path-part' }),
          _react2.default.createElement('path', { id: 'bname-subhead1', d: 'M -3 7.7 L 13.5 7.7', className: 'yesm-subhead-path' }),
          _react2.default.createElement('path', { id: 'bname-subhead2', d: 'M -3 10.5 L 18 10.5', className: 'yesm-subhead-path' })
        ),
        _react2.default.createElement(
          'text',
          { className: 'yesm-bname-text' },
          _react2.default.createElement(
            'textPath',
            { xlinkHref: '#bname-lower-path', className: 'yesm-bname-text-path' },
            'YeSmart'
          ),
          _react2.default.createElement(
            'textPath',
            { xlinkHref: '#bname-subhead1', className: 'yesm-bname-subhead' },
            '\u0423\u041C\u041D\u042B\u0415 \u0420\u0415\u0428\u0415\u041D\u0418\u042F'
          ),
          _react2.default.createElement(
            'textPath',
            { xlinkHref: '#bname-subhead2', className: 'yesm-bname-subhead yesm-bname-subhead2' },
            '\u0414\u041B\u042F \u0412\u0410\u0428\u0415\u0413\u041E \u0411\u0418\u0417\u041D\u0415\u0421\u0410'
          )
        ),
        _react2.default.createElement(
          'g',
          null,
          _react2.default.createElement('circle', { cx: '4.8', cy: '1.8', r: '1.75', className: 'yesm-bname-part-cover' }),
          _react2.default.createElement('rect', { x: '9.6', y: '1', width: '14.5', height: '4.3', className: 'yesm-bname-part-cover' }),
          _react2.default.createElement(
            'text',
            { className: 'yesm-bname-part-text' },
            _react2.default.createElement(
              'textPath',
              { xlinkHref: '#bname-cap-path', className: 'yesm-bname-text-part' },
              'EMART'
            )
          )
        )
      );
    }
  }]);

  return YesBrandName;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(YesBrandName);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _YesCube = __webpack_require__(3);

var _YesCube2 = _interopRequireDefault(_YesCube);

var _YesBrandName = __webpack_require__(4);

var _YesBrandName2 = _interopRequireDefault(_YesBrandName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var location = this.props.location;

      return _react2.default.createElement(
        "div",
        { className: "yesm-header" },
        _react2.default.createElement(
          "div",
          { className: "yesm-header1" },
          location.pathname === '/' ? '' : _react2.default.createElement(
            "div",
            { className: "yesm-logo" },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/" },
              _react2.default.createElement(_YesBrandName2.default, null),
              _react2.default.createElement(_YesCube2.default, null)
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "yesm-about" },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/about", className: location.pathname === '/about' ? 'yesm-active-link' : '' },
              "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "yesm-header2" },
          "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F"
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Header);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var footerLinks = ['Privacy', 'FAQ', 'info@email', 'Terms and conditions', 'Help', '+38123456789', 'User agreement', 'YeStudio', 'Facebook'];

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'yesm-footer' },
        _react2.default.createElement(
          'div',
          { className: 'yesm-footer-links' },
          footerLinks.map(function (l) {
            return _react2.default.createElement(
              'div',
              { key: l.toString(), className: 'yesm-footer-link' },
              l
            );
          })
        ),
        _react2.default.createElement('div', { className: 'yesm-footer-ripe' })
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(8);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(9);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(10);

var _reactRouterDom = __webpack_require__(1);

var _App = __webpack_require__(11);

var _App2 = _interopRequireDefault(_App);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(_express2.default.static("public"));

app.get("*", function (req, res, next) {
  var context = {};
  var markup = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { context: context, location: req.url },
    _react2.default.createElement(_App2.default, null)
  ));

  res.send("\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>YeSmart</title>\n        <link href=\"//fonts.googleapis.com/css?family=PT+Sans:400,700,900|Montserrat:400,700,900|Yanone Kaffeesatz:400\" rel=\"stylesheet\" type=\"text/css\">\n        <link rel=\"stylesheet\" href=\"/main.css\">\n        <script src=\"/bundle.js\" defer></script>\n      </head>\n\n      <body>\n        <div id=\"app\">" + markup + "</div>\n      </body>\n    </html>\n  ");
});

app.listen(3000, function () {
  console.log("Server is listening on port: 3000");
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Home = __webpack_require__(12);

var _Home2 = _interopRequireDefault(_Home);

var _About = __webpack_require__(14);

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: "/", exact: true, component: _Home2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: "/about", exact: true, component: _About2.default })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SideNav = __webpack_require__(2);

var _SideNav2 = _interopRequireDefault(_SideNav);

var _Main = __webpack_require__(13);

var _Main2 = _interopRequireDefault(_Main);

var _Header = __webpack_require__(5);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(6);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "yesm-container" },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          "div",
          { className: "yesm-body" },
          _react2.default.createElement(_Main2.default, null),
          _react2.default.createElement(_SideNav2.default, null)
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _YesCube = __webpack_require__(3);

var _YesCube2 = _interopRequireDefault(_YesCube);

var _YesBrandName = __webpack_require__(4);

var _YesBrandName2 = _interopRequireDefault(_YesBrandName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "yesm-main" },
        _react2.default.createElement(_YesCube2.default, null),
        _react2.default.createElement(_YesBrandName2.default, null)
      );
    }
  }]);

  return Main;
}(_react.Component);

exports.default = Main;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBodyClassname = __webpack_require__(15);

var _reactBodyClassname2 = _interopRequireDefault(_reactBodyClassname);

var _SideNav = __webpack_require__(2);

var _SideNav2 = _interopRequireDefault(_SideNav);

var _Header = __webpack_require__(5);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(6);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBodyClassname2.default,
        { className: 'about' },
        _react2.default.createElement(
          'div',
          { className: 'yesm-container' },
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'yesm-body' },
            _react2.default.createElement(_SideNav2.default, null)
          ),
          _react2.default.createElement(_Footer2.default, null)
        )
      );
    }
  }]);

  return About;
}(_react.Component);

exports.default = About;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-body-classname");

/***/ })
/******/ ]);