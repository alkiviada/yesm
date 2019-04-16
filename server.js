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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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
exports.footerNav = exports.headerNav = exports.sideNav = undefined;

var _YesmLink = __webpack_require__(15);

var _YesmLink2 = _interopRequireDefault(_YesmLink);

var _TelLink = __webpack_require__(16);

var _TelLink2 = _interopRequireDefault(_TelLink);

var _EmailLink = __webpack_require__(17);

var _EmailLink2 = _interopRequireDefault(_EmailLink);

var _ExternalLink = __webpack_require__(18);

var _ExternalLink2 = _interopRequireDefault(_ExternalLink);

var _YesmStudio = __webpack_require__(19);

var _YesmStudio2 = _interopRequireDefault(_YesmStudio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var text = 'Igraet bas. Igraet solo. Ona poet kak ona brovi nakolola. В тясяча девятьсот шестидесятом году. Именно эту дату вы прочитали на каменной лавке';

var sideNav = exports.sideNav = {
  'address': { 'title': 'Адреса тра ла ла', 'color': 'red', 'pageLink': 'address', 'text': text, 'pageClass': 'address' },
  'as': { 'title': 'Автономные системы', 'color': 'blue', 'pageLink': 'as', 'text': text, 'pageClass': 'as' },
  'monitor': { 'title': 'Мониторинг ресурсов клиента', 'color': 'yellow', 'pageLink': 'monitor', 'text': text, 'pageClass': 'monitor' },
  'lir': { 'title': 'Регистрация LIR', 'color': 'blue', 'pageLink': 'lir', 'text': text, 'pageClass': 'lir' },
  'domain': { 'title': 'Регистрация доменов', 'color': 'red', 'pageLink': 'domain', 'text': text, 'pageClass': 'domain' },
  'cons': { 'title': 'IP-консалтинг', 'color': 'yellow', 'pageLink': 'cons', 'text': text, 'pageClass': 'cons' }
};

var headerNav = exports.headerNav = {
  'about': { 'text': text, 'pageClass': 'about' },
  'contact': { 'title': 'Автономные системы', 'color': 'blue', 'pageLink': 'as', 'text': text, 'pageClass': 'as' }
};

var footerNav = exports.footerNav = {
  'privacy': { 'title': 'Privacy', 'text': text, 'pageClass': 'privacy', 'component': _YesmLink2.default },
  'user': { 'title': 'User agreement', 'text': text, 'pageClass': 'privacy', 'component': _YesmLink2.default },
  'terms': { 'title': 'Terms and conditions', 'text': text, 'pageClass': 'privacy', 'component': _YesmLink2.default },
  'help': { 'title': 'Help', 'text': text, 'pageClass': 'help', 'component': _YesmLink2.default },
  'faq': { 'title': 'FAQ', 'text': text, 'pageClass': 'help', 'component': _YesmLink2.default },
  'email': { 'title': 'info@yesm.com', 'component': _EmailLink2.default },
  'tel': { 'title': '123456789', 'component': _TelLink2.default },
  'fb': { 'title': 'Facebook', 'component': _ExternalLink2.default },
  'copyright': { 'component': _YesmStudio2.default }
};

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

var _constants = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideNav = function (_Component) {
  _inherits(SideNav, _Component);

  function SideNav() {
    _classCallCheck(this, SideNav);

    return _possibleConstructorReturn(this, (SideNav.__proto__ || Object.getPrototypeOf(SideNav)).apply(this, arguments));
  }

  _createClass(SideNav, [{
    key: 'render',
    value: function render() {
      var location = this.props.location;

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
              { id: 'colorMeBlueMatrix' },
              _react2.default.createElement('feColorMatrix', { 'in': 'SourceGraphic',
                type: 'matrix',
                values: '1 0 0 0 -1 0 1 0 0 .4 0 0 1 0 .6 0 0 0 .6 0' })
            ),
            _react2.default.createElement(
              'filter',
              { id: 'colorMeYellowMatrix' },
              _react2.default.createElement('feColorMatrix', { 'in': 'SourceGraphic',
                type: 'matrix',
                values: '1 0 0 0 .39 0 1 0 0 .6 0 0 1 0 -.14 0 0 0 .7 0' })
            ),
            _react2.default.createElement(
              'filter',
              { id: 'colorMeFleshMatrix' },
              _react2.default.createElement('feColorMatrix', { 'in': 'SourceGraphic',
                type: 'matrix',
                values: '1 0 0 0 .33 0 1 0 0 .6 0 0 1 0 .4 0 0 0 1.9 0' })
            )
          )
        ),
        Object.keys(_constants.sideNav).map(function (sn, i) {
          return _react2.default.createElement(
            'div',
            { key: sn.toString(), className: 'yesm-nav-link bg-' + _constants.sideNav[sn].color },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/' + _constants.sideNav[sn].pageLink, className: location.pathname === '/' + _constants.sideNav[sn].pageLink ? 'active' : '' },
              _constants.sideNav[sn].title
            )
          );
        })
      );
    }
  }]);

  return SideNav;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(SideNav);

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

var _YesCube = __webpack_require__(5);

var _YesCube2 = _interopRequireDefault(_YesCube);

var _YesBrandName = __webpack_require__(6);

var _YesBrandName2 = _interopRequireDefault(_YesBrandName);

var _MainContent = __webpack_require__(20);

var _MainContent2 = _interopRequireDefault(_MainContent);

var _constants = __webpack_require__(2);

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
      var location = this.props.location;

      var page = location.pathname.substr(1);
      console.log(page);
      console.log(location.pathname);

      return location.pathname === '/' ? _react2.default.createElement(
        "div",
        { className: "yesm-main" },
        _react2.default.createElement("img", { src: "/cube-main.png", alt: "", className: "yesm-main-cube" }),
        _react2.default.createElement(_YesBrandName2.default, null)
      ) : _constants.sideNav[page] || _constants.headerNav[page] || _constants.footerNav[page] ? _react2.default.createElement(_MainContent2.default, { page: page }) : '';
    }
  }]);

  return Main;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Main);

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
/* 6 */
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
          _react2.default.createElement('path', { id: 'bname-lower-path', d: 'M 0 3 L 5.8 3 M 6 3.5 L 10 3.5 M 10 4.5 L26 4.5', className: 'yesm-text-path' }),
          _react2.default.createElement('path', { id: 'bname-cap-path', d: 'M 3.9 3 L 5.3 3 M 9.2 4.5 L26 4.5', className: 'yesm-text-path-part' }),
          _react2.default.createElement('path', { id: 'bname-subhead1', d: 'M -1 8.1 L 13.5 8.1', className: 'yesm-subhead-path' }),
          _react2.default.createElement('path', { id: 'bname-subhead2', d: 'M -1 11.2 L 18 11.2', className: 'yesm-subhead-path' })
        ),
        _react2.default.createElement(
          'text',
          { className: 'yesm-bname-text', textLength: '27' },
          _react2.default.createElement(
            'textPath',
            { xlinkHref: '#bname-lower-path', className: 'yesm-bname-text-path' },
            'YeSmart'
          )
        ),
        _react2.default.createElement(
          'text',
          { className: 'yesm-bname-subhead-text', textLength: '14' },
          _react2.default.createElement(
            'textPath',
            { xlinkHref: '#bname-subhead1', className: 'yesm-bname-subhead' },
            '\u0423\u041C\u041D\u042B\u0415 \u0420\u0415\u0428\u0415\u041D\u0418\u042F'
          )
        ),
        _react2.default.createElement(
          'text',
          { className: 'yesm-bname-subhead-text', textLength: '19' },
          _react2.default.createElement(
            'textPath',
            { xlinkHref: '#bname-subhead2', className: 'yesm-bname-subhead yesm-bname-subhead2' },
            '\u0414\u041B\u042F \u0412\u0410\u0428\u0415\u0413\u041E \u0411\u0418\u0417\u041D\u0415\u0421\u0410'
          )
        )
      );
    }
  }]);

  return YesBrandName;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(YesBrandName);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _YesCube = __webpack_require__(5);

var _YesCube2 = _interopRequireDefault(_YesCube);

var _YesBrandName = __webpack_require__(6);

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
              _react2.default.createElement("img", { src: "/cube.png", alt: "rubik cube", className: "yesm-main-cube-logo" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "yesm-about" },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/about", className: location.pathname === '/about' ? 'active' : '' },
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var footerArr = ['privacy', 'faq', 'email', 'terms', 'help', 'tel', 'user', 'copyright', 'fb'];

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
          footerArr.map(function (l) {
            var FooterComponent = _constants.footerNav[l].component;
            return _react2.default.createElement(
              'div',
              { key: l.toString(), className: 'yesm-footer-link' },
              _react2.default.createElement(FooterComponent, { what: l, how: _constants.footerNav[l] })
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(11);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(12);

var _reactRouterDom = __webpack_require__(1);

var _App = __webpack_require__(13);

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

  res.send("\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>YeSmart</title>\n        <link href=\"//fonts.googleapis.com/css?family=Open+Sans:400,700,900|Montserrat:400,700,900|Yanone+Kaffeesatz:400|Architects+Daughter:400\" rel=\"stylesheet\" type=\"text/css\">\n        <link rel=\"stylesheet\" href=\"/main.css\">\n        <script src=\"/bundle.js\" defer></script>\n      </head>\n\n      <body>\n        <div id=\"app\">" + markup + "</div>\n      </body>\n    </html>\n  ");
});

app.listen(3000, function () {
  console.log("Server is listening on port: 3000");
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

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

var _reactRouterDom = __webpack_require__(1);

var _Home = __webpack_require__(14);

var _Home2 = _interopRequireDefault(_Home);

var _YesmPage = __webpack_require__(22);

var _YesmPage2 = _interopRequireDefault(_YesmPage);

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
        _react2.default.createElement(_reactRouterDom.Route, { component: _YesmPage2.default })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

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

var _SideNav = __webpack_require__(3);

var _SideNav2 = _interopRequireDefault(_SideNav);

var _Main = __webpack_require__(4);

var _Main2 = _interopRequireDefault(_Main);

var _Header = __webpack_require__(7);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(8);

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
/* 15 */
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

var YesmLink = function (_Component) {
  _inherits(YesmLink, _Component);

  function YesmLink() {
    _classCallCheck(this, YesmLink);

    return _possibleConstructorReturn(this, (YesmLink.__proto__ || Object.getPrototypeOf(YesmLink)).apply(this, arguments));
  }

  _createClass(YesmLink, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          what = _props.what,
          how = _props.how,
          location = _props.location;

      console.log(what);
      return _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/' + what, className: location.pathname === '/' + what ? 'active' : '' },
        how.title
      );
    }
  }]);

  return YesmLink;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(YesmLink);

/***/ }),
/* 16 */
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

var TelLink = function (_Component) {
  _inherits(TelLink, _Component);

  function TelLink() {
    _classCallCheck(this, TelLink);

    return _possibleConstructorReturn(this, (TelLink.__proto__ || Object.getPrototypeOf(TelLink)).apply(this, arguments));
  }

  _createClass(TelLink, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactRouterDom.Link, { to: '/' });
    }
  }]);

  return TelLink;
}(_react.Component);

exports.default = TelLink;

/***/ }),
/* 17 */
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

var EmailLink = function (_Component) {
  _inherits(EmailLink, _Component);

  function EmailLink() {
    _classCallCheck(this, EmailLink);

    return _possibleConstructorReturn(this, (EmailLink.__proto__ || Object.getPrototypeOf(EmailLink)).apply(this, arguments));
  }

  _createClass(EmailLink, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactRouterDom.Link, { to: '/' });
    }
  }]);

  return EmailLink;
}(_react.Component);

exports.default = EmailLink;

/***/ }),
/* 18 */
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

var ExternalLink = function (_Component) {
  _inherits(ExternalLink, _Component);

  function ExternalLink() {
    _classCallCheck(this, ExternalLink);

    return _possibleConstructorReturn(this, (ExternalLink.__proto__ || Object.getPrototypeOf(ExternalLink)).apply(this, arguments));
  }

  _createClass(ExternalLink, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactRouterDom.Link, { to: '/' });
    }
  }]);

  return ExternalLink;
}(_react.Component);

exports.default = ExternalLink;

/***/ }),
/* 19 */
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

var YesmStudio = function (_Component) {
  _inherits(YesmStudio, _Component);

  function YesmStudio() {
    _classCallCheck(this, YesmStudio);

    return _possibleConstructorReturn(this, (YesmStudio.__proto__ || Object.getPrototypeOf(YesmStudio)).apply(this, arguments));
  }

  _createClass(YesmStudio, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          "span",
          { className: "yesm-copyright" },
          "\xA9 2019"
        ),
        _react2.default.createElement(
          "svg",
          { viewBox: "0 0 50 5", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: "100%", height: "100%", className: "yesm-studio" },
          _react2.default.createElement(
            "defs",
            null,
            _react2.default.createElement("path", { id: "yesm-studio-path", d: "M 0 3 L 16 3 M 16 5 L 42 5", className: "yesm-studio-path" })
          ),
          _react2.default.createElement(
            "text",
            { className: "yesm-studio-text", textLength: "40" },
            _react2.default.createElement(
              "textPath",
              { xlinkHref: "#yesm-studio-path", className: "yesm-studio-text-path" },
              "YeStudio"
            )
          )
        )
      );
    }
  }]);

  return YesmStudio;
}(_react.Component);

exports.default = YesmStudio;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBodyClassname = __webpack_require__(21);

var _reactBodyClassname2 = _interopRequireDefault(_reactBodyClassname);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainContent = function (_Component) {
  _inherits(MainContent, _Component);

  function MainContent() {
    _classCallCheck(this, MainContent);

    return _possibleConstructorReturn(this, (MainContent.__proto__ || Object.getPrototypeOf(MainContent)).apply(this, arguments));
  }

  _createClass(MainContent, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log('i ma main content');
      var linkMap = [_constants.sideNav, _constants.footerNav, _constants.headerNav].find(function (m) {
        return m[_this2.props.page];
      });
      var pageClass = linkMap[this.props.page].pageClass;
      var text = linkMap[this.props.page].text;
      console.log(text);
      console.log(pageClass);
      return _react2.default.createElement(
        _reactBodyClassname2.default,
        { className: pageClass },
        _react2.default.createElement(
          'div',
          { className: 'yesm-main-content' },
          _react2.default.createElement(
            'div',
            { className: 'yesm-main-text' },
            text
          )
        )
      );
    }
  }]);

  return MainContent;
}(_react.Component);

exports.default = MainContent;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-body-classname");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Main = __webpack_require__(4);

var _Main2 = _interopRequireDefault(_Main);

var _SideNav = __webpack_require__(3);

var _SideNav2 = _interopRequireDefault(_SideNav);

var _Header = __webpack_require__(7);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(8);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YesmPage = function (_Component) {
  _inherits(YesmPage, _Component);

  function YesmPage() {
    _classCallCheck(this, YesmPage);

    return _possibleConstructorReturn(this, (YesmPage.__proto__ || Object.getPrototypeOf(YesmPage)).apply(this, arguments));
  }

  _createClass(YesmPage, [{
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

  return YesmPage;
}(_react.Component);

exports.default = YesmPage;

/***/ })
/******/ ]);