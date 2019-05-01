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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
exports.langs = exports.footerNav = exports.headerNav = exports.sideNav = undefined;

var _YesmLink = __webpack_require__(3);

var _YesmLink2 = _interopRequireDefault(_YesmLink);

var _TelLink = __webpack_require__(21);

var _TelLink2 = _interopRequireDefault(_TelLink);

var _EmailLink = __webpack_require__(22);

var _EmailLink2 = _interopRequireDefault(_EmailLink);

var _ExternalLink = __webpack_require__(23);

var _ExternalLink2 = _interopRequireDefault(_ExternalLink);

var _YesmStudio = __webpack_require__(24);

var _YesmStudio2 = _interopRequireDefault(_YesmStudio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var text = 'Tis a consummation devoutly to be wished. Nymph, in your orisons, you might say I am a dreamer.';
var text_ru = 'Федор Михайлович Достоевский переворачивается. Играет бас, играет соло. Она поет как она брови наколола';
var text_ua = 'Товарищ, верь! Остров Крым. В тясяча девятьсот шестидесятом году. Именно эту дату вы прочитали на каменной лавке';

var sideNav = exports.sideNav = {
  'address': {
    'title': { 'en': 'Address is ',
      'ru': 'Адреса тра ла ла',
      'ua': 'Adresa UA' },
    'color': 'red',
    'text': { 'en': text, 'ru': text_ru, 'ua': text_ua },
    'pageClass': 'address' },
  'as': {
    'title': { 'ru': 'Автономные системы', 'en': 'Autonomous Systems', 'ua': 'UA Atonomy' },
    'color': 'blue',
    'text': { 'en': text, 'ru': text_ru, 'ua': text_ua },
    'pageClass': 'as' },
  'monitor': {
    'title': { 'ru': 'Мониторинг ресурсов клиента', 'en': 'Monitoring of resources', 'ua': 'Мониторинг ресурсов клиента UA' },
    'color': 'yellow',
    'text': { 'en': text, 'ru': text_ru, 'ua': text_ua },
    'pageClass': 'monitor' },
  'lir': {
    'title': { 'ru': 'Регистрация LIR', 'en': 'Registration LIR', 'ua': 'Регiстрацiя' },
    'color': 'blue',
    'text': { 'en': text, 'ru': text_ru, 'ua': text_ua },
    'pageClass': 'lir' },
  'domain': {
    'title': { 'ru': 'Регистрация доменов', 'en': 'DOmain registration', 'ua': 'UA DOmain' },
    'color': 'red',
    'text': { 'en': text, 'ru': text_ru, 'ua': text_ua },
    'pageClass': 'domain' },
  'cons': {
    'title': { 'ru': 'IP-консалтинг', 'ua': 'UA Consulting', 'en': 'IP-consulting' },
    'color': 'yellow',
    'text': { 'en': text, 'ru': text_ru, 'ua': text_ua },
    'pageClass': 'cons' }
};

var headerNav = exports.headerNav = {
  'about': {
    'title': { 'ru': 'Компания', 'en': 'About', 'ua': 'ABout UA' },
    'text': { 'en': text, 'ru': text_ru, 'ua': text_ua },
    'pageClass': 'about' },
  'contact': {
    'title': { 'ru': 'Связаться', 'en': 'Contact', 'ua': 'Contact UA' },
    'text': { 'en': text, 'ru': text_ru, 'ua': text_ua },
    'pageClass': 'contact' }
};

var footerNav = exports.footerNav = {
  'privacy': { 'title': 'Privacy', 'text': text, 'pageClass': 'privacy', 'component': _YesmLink2.default },
  'user': { 'title': 'User agreement', 'text': text, 'pageClass': 'privacy', 'component': _YesmLink2.default },
  'terms': { 'title': 'Terms and conditions', 'text': text, 'pageClass': 'privacy', 'component': _YesmLink2.default },
  'help': { 'title': 'Help', 'text': text, 'pageClass': 'help', 'component': _YesmLink2.default },
  'faq': { 'title': 'FAQ', 'text': text, 'pageClass': 'help', 'component': _YesmLink2.default },
  'email': { 'title': 'info@yesm.com', 'component': _EmailLink2.default },
  'tel': { 'title': '123456789', 'component': _TelLink2.default },
  'fb': { 'title': 'Facebook', 'component': _ExternalLink2.default, 'to': 'http://myfb/yesm' },
  'copyright': { 'component': _YesmStudio2.default }
};

var langs = exports.langs = ['ru', 'en', 'ua'];

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

var YesmLink = function (_Component) {
  _inherits(YesmLink, _Component);

  function YesmLink() {
    _classCallCheck(this, YesmLink);

    return _possibleConstructorReturn(this, (YesmLink.__proto__ || Object.getPrototypeOf(YesmLink)).apply(this, arguments));
  }

  _createClass(YesmLink, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          what = _props.what,
          how = _props.how,
          location = _props.location,
          lang = _props.lang;

      var where = '/' + what + '/' + lang;
      var className = how.className || '';
      return _react2.default.createElement(
        _reactRouterDom.Link,
        { to: where, className: location.pathname === '/' + what || location.pathname === where ? className + (className ? ' ' : '') + 'active' : className, onClick: function onClick(e) {
            return _this2.props.onClickFn(e, where);
          } },
        how.title
      );
    }
  }]);

  return YesmLink;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(YesmLink);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

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

var _constants = __webpack_require__(2);

var _YesmLink = __webpack_require__(3);

var _YesmLink2 = _interopRequireDefault(_YesmLink);

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
      var _this2 = this;

      var _props = this.props,
          page = _props.page,
          lang = _props.lang;

      return _react2.default.createElement(
        'nav',
        { className: 'yesm-sidenav', role: 'navigation', 'area-label': 'Yesmart List of Services' },
        _react2.default.createElement(
          'ul',
          { className: 'yesm-nav-ul' },
          Object.keys(_constants.sideNav).map(function (sn, i) {
            return _react2.default.createElement(
              'li',
              { key: sn.toString(), className: 'yesm-nav-link bg-' + _constants.sideNav[sn].color },
              _react2.default.createElement(_YesmLink2.default, { what: sn, how: { 'title': _constants.sideNav[sn].title[lang] }, lang: lang, onClickFn: _this2.props.onClickFn })
            );
          })
        )
      );
    }
  }]);

  return SideNav;
}(_react.Component);

exports.default = SideNav;

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

var _YesCube = __webpack_require__(7);

var _YesCube2 = _interopRequireDefault(_YesCube);

var _YesBrandName = __webpack_require__(8);

var _YesBrandName2 = _interopRequireDefault(_YesBrandName);

var _MainContent = __webpack_require__(25);

var _MainContent2 = _interopRequireDefault(_MainContent);

var _constants = __webpack_require__(2);

var _reactRedux = __webpack_require__(4);

var _mainActions = __webpack_require__(10);

var _reactBodyClassname = __webpack_require__(26);

var _reactBodyClassname2 = _interopRequireDefault(_reactBodyClassname);

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
      var _props = this.props,
          page = _props.page,
          lang = _props.lang,
          offMain = _props.offMain,
          onMain = _props.onMain;

      var mainCubeClass = 'yesm-main-cube';

      if (!page) {
        if (offMain) mainCubeClass += ' yesm-main-cube-animate';else if (!onMain) {
          this.props.setOnMain();
        }

        return _react2.default.createElement(
          _reactBodyClassname2.default,
          { className: lang },
          _react2.default.createElement(
            "main",
            { role: "main", className: "yesm-main" },
            _react2.default.createElement("img", { src: "/cube-main.png", alt: "rubik cube", title: "YeSmart Main Page", className: mainCubeClass, id: "yesm-main-cube" }),
            _react2.default.createElement(_YesBrandName2.default, { page: page })
          )
        );
      } else this.props.clearOffMain();
      return _constants.sideNav[page] || _constants.headerNav[page] || _constants.footerNav[page] ? _react2.default.createElement(_MainContent2.default, { page: page, lang: lang }) : '';
    }
  }]);

  return Main;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    offMain: state.main.offMain,
    onMain: state.main.onMain
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { setOnMain: _mainActions.setOnMain, clearOffMain: _mainActions.clearOffMain })(Main);

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
/* 8 */
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

var YesBrandName = function (_Component) {
  _inherits(YesBrandName, _Component);

  function YesBrandName() {
    _classCallCheck(this, YesBrandName);

    return _possibleConstructorReturn(this, (YesBrandName.__proto__ || Object.getPrototypeOf(YesBrandName)).apply(this, arguments));
  }

  _createClass(YesBrandName, [{
    key: 'render',
    value: function render() {
      var page = this.props.page;

      var className = !page ? 'yesm-bname' : 'yesm-bname-logo';
      return _react2.default.createElement(
        'svg',
        { viewBox: '-5 -3 26 24.4', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', width: '100%', height: '100%', className: className },
        _react2.default.createElement(
          'title',
          null,
          'YeSmart'
        ),
        _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement('path', { id: 'bname-lower-path', d: 'M 0 3 L 5.8 3 M 6 3.5 L 10 3.5 M 10 4.5 L26 4.5', className: 'yesm-text-path' }),
          _react2.default.createElement('path', { id: 'bname-cap-path', d: 'M 3.9 3 L 5.3 3 M 9.2 4.5 L26 4.5', className: 'yesm-text-path-part' }),
          _react2.default.createElement('path', { id: 'bname-subhead1', d: 'M -1 8.1 L 16.5 8.1', className: 'yesm-subhead-path' }),
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

exports.default = YesBrandName;

/***/ }),
/* 9 */
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

var RipeMemberSVG = function (_Component) {
	_inherits(RipeMemberSVG, _Component);

	function RipeMemberSVG() {
		_classCallCheck(this, RipeMemberSVG);

		return _possibleConstructorReturn(this, (RipeMemberSVG.__proto__ || Object.getPrototypeOf(RipeMemberSVG)).apply(this, arguments));
	}

	_createClass(RipeMemberSVG, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"svg",
				{ version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px",
					viewBox: "0 0 841.9 595.3", xmlSpace: "preserve", className: "yesm-ripe-member", width: "100%", height: "100%" },
				_react2.default.createElement("style", { type: "text/css" }),
				_react2.default.createElement(
					"text",
					{ x: "272", y: "180", className: "yesm-is-ripe-member" },
					"YESMART"
				),
				_react2.default.createElement(
					"g",
					null,
					_react2.default.createElement("path", { className: "st0", d: "M323.3,297.9l-17-30.4h-9.8v30.4h-21.6v-86.1h37.7c8.6,0,15.2,1.8,20.6,5.8c6.6,4.8,10.1,12.8,10.1,21.4 c0,10.5-5.1,20.8-16.3,25.4l19.8,33.6H323.3z M309.7,228.7h-13.4v22.8h13.4c7.7,0,12.6-4.5,12.6-11.5 C322.3,232.1,317,228.7,309.7,228.7z" }),
					_react2.default.createElement("path", { className: "st0", d: "M356.6,297.9v-86.1h21.6v86.1H356.6z" }),
					_react2.default.createElement("path", { className: "st0", d: "M432.3,268.1h-17.9v29.8h-21.5v-86.1h38.9c19.1,0,30.2,11.7,30.2,27.7C462,253.6,453.3,268.1,432.3,268.1z M428.3,228.7h-13.9v22.8h13.9c7.4,0,12.6-3.9,12.6-11.6C440.8,232.5,436,228.7,428.3,228.7z" }),
					_react2.default.createElement("path", { className: "st0", d: "M472.8,297.9v-86.1h63.4v17.5h-41.9v16.4h35.3v17.4h-35.3v17.1h42.1v17.6H472.8z" }),
					_react2.default.createElement("path", { className: "st0", d: "M633.9,297.9l-33.7-50.6H600v50.6H580v-86.1h20.9l32.7,48.7h0.2v-48.7h20v86.1H633.9z" }),
					_react2.default.createElement("path", { className: "st0", d: "M703.1,299.4c-19,0-36.7-9.5-36.7-31v-26.2c0-21.1,17.1-31.8,36.1-31.8c16.8,0,35,8.5,35,28.4v4.1h-20.3v-2.1 c0-8.9-7.6-12.8-14.2-12.8c-7.6,0-15,4-15,13.8v26.1c0,8.8,6.4,13.9,15.2,13.9c6.6,0,14-3.7,14-12.8v-2.1h20.3v4.2 C737.5,290.9,719.7,299.4,703.1,299.4z" }),
					_react2.default.createElement("path", { className: "st0", d: "M784.1,299.4c-19,0-36.7-9.5-36.7-31v-26.2c0-21.1,17.1-31.8,36.1-31.8c16.8,0,35,8.5,35,28.4v4.1h-20.3v-2.1 c0-8.9-7.6-12.8-14.2-12.8c-7.6,0-15,4-15,13.8v26.1c0,8.8,6.4,13.9,15.2,13.9c6.6,0,14-3.7,14-12.8v-2.1h20.3v4.2 C818.5,290.9,800.7,299.4,784.1,299.4z" })
				),
				_react2.default.createElement(
					"linearGradient",
					{ id: "SVGID_1_", gradientUnits: "userSpaceOnUse", x1: "50.2333", y1: "394.3012", x2: "208.0133", y2: "236.5212" },
					_react2.default.createElement("stop", { offset: "0", style: { 'stopColor': "#25316A" } }),
					_react2.default.createElement("stop", { offset: "6.051821e-02", style: { 'stopColor': "#293269" } }),
					_react2.default.createElement("stop", { offset: "0.1216", style: { 'stopColor': "#343468" } }),
					_react2.default.createElement("stop", { offset: "0.183", style: { "stopColor": "#453764" } }),
					_react2.default.createElement("stop", { offset: "0.2446", style: { "stopColor": "#5B3C60" } }),
					_react2.default.createElement("stop", { offset: "0.3064", style: { "stopColor": "#764459" } }),
					_react2.default.createElement("stop", { offset: "0.3684", style: { "stopColor": "#964D4F" } }),
					_react2.default.createElement("stop", { offset: "0.4293", style: { "stopColor": "#BF5A3D" } }),
					_react2.default.createElement("stop", { offset: "0.4872", style: { "stopColor": "#F36C21" } }),
					_react2.default.createElement("stop", { offset: "1", style: { "stopColor": "#9C9C9C" } })
				),
				_react2.default.createElement("path", { className: "st1", d: "M184.5,272.6L184.5,272.6l0-59.6l-55.3-32l-55.3,32l0,59.5l0,0.1l-51.6,29.8l0,63.9l55.3,32l51.6-29.8 l51.6,29.8l55.3-32l0-63.9L184.5,272.6z M129.1,300.1l-44-25.4l44-25.4l44,25.4L129.1,300.1z M81.3,281.3l44,25.4l0,50.8l-44-25.4 L81.3,281.3z M132.9,306.7l44-25.4l0,50.8l-44,25.4L132.9,306.7z M81.3,217.3l47.8-27.6l47.8,27.6l0,50.8l-47.8-27.6l-47.8,27.6 L81.3,217.3z M29.8,361.9l0-55.2l44-25.4l0,55.1l47.9,27.6l-44.1,25.4L29.8,361.9z M228.5,361.9l-47.8,27.6l-44.1-25.4l47.9-27.6 l0-55.1l44,25.4L228.5,361.9z" }),
				_react2.default.createElement(
					"g",
					null,
					_react2.default.createElement("path", { className: "st2", d: "M294.5,364.9L280,327.1h-0.2c0.3,3,0.4,6.6,0.4,10.7v27.1h-4.6v-42.6h7.5l13.5,35.2h0.2l13.6-35.2h7.4v42.6h-5 v-27.5c0-3.1,0.1-6.6,0.4-10.3h-0.2l-14.6,37.7H294.5z" }),
					_react2.default.createElement("path", { className: "st2", d: "M342.3,365.5c-4.7,0-8.5-1.4-11.2-4.3c-2.7-2.9-4.1-6.9-4.1-12c0-5.2,1.3-9.2,3.8-12.3s5.9-4.5,10.2-4.5 c4,0,7.2,1.3,9.5,4c2.3,2.6,3.5,6.1,3.5,10.4v3.1h-22c0.1,3.8,1,6.6,2.8,8.5s4.3,2.9,7.6,2.9c3.4,0,6.8-0.7,10.2-2.2v4.3 c-1.7,0.7-3.3,1.3-4.9,1.6C346.3,365.3,344.5,365.5,342.3,365.5z M341,336.4c-2.6,0-4.6,0.8-6.1,2.5c-1.5,1.7-2.4,4-2.7,6.9h16.7 c0-3.1-0.7-5.4-2-7C345.5,337.2,343.5,336.4,341,336.4z" }),
					_react2.default.createElement("path", { className: "st2", d: "M403,364.9v-20.8c0-2.5-0.5-4.5-1.6-5.7c-1.1-1.3-2.8-1.9-5.1-1.9c-3,0-5.2,0.9-6.7,2.6 c-1.4,1.7-2.2,4.4-2.2,8v17.8h-4.8v-20.8c0-2.5-0.5-4.5-1.6-5.7c-1.1-1.3-2.8-1.9-5.1-1.9c-3,0-5.3,0.9-6.7,2.7 c-1.4,1.8-2.1,4.8-2.1,8.9v16.8h-4.8v-32h3.9l0.8,4.4h0.2c0.9-1.6,2.2-2.8,3.9-3.6c1.7-0.9,3.5-1.3,5.6-1.3c5,0,8.3,1.8,9.8,5.4 h0.2c1-1.7,2.3-3,4.1-4s3.9-1.5,6.2-1.5c3.6,0,6.3,0.9,8.1,2.8c1.8,1.9,2.7,4.8,2.7,8.9v20.8H403z" }),
					_react2.default.createElement("path", { className: "st2", d: "M432.7,332.4c4.2,0,7.5,1.4,9.8,4.3c2.3,2.9,3.5,6.9,3.5,12.2s-1.2,9.3-3.5,12.2c-2.3,2.9-5.6,4.4-9.8,4.4 c-2.1,0-4-0.4-5.7-1.2c-1.7-0.8-3.2-1.9-4.3-3.5h-0.3l-1,4.1h-3.5v-45.4h4.8v11c0,2.5-0.1,4.7-0.2,6.6h0.2 C424.9,334,428.3,332.4,432.7,332.4z M432,336.5c-3.3,0-5.7,0.9-7.1,2.8c-1.5,1.9-2.2,5.1-2.2,9.6c0,4.5,0.7,7.7,2.2,9.6 c1.5,1.9,3.9,2.9,7.2,2.9c3,0,5.2-1.1,6.6-3.3c1.5-2.2,2.2-5.3,2.2-9.3c0-4.2-0.7-7.3-2.2-9.3C437.3,337.5,435.1,336.5,432,336.5z"
					}),
					_react2.default.createElement("path", { className: "st2", d: "M467.9,365.5c-4.7,0-8.5-1.4-11.2-4.3c-2.7-2.9-4.1-6.9-4.1-12c0-5.2,1.3-9.2,3.8-12.3c2.5-3,5.9-4.5,10.2-4.5 c4,0,7.2,1.3,9.5,4c2.3,2.6,3.5,6.1,3.5,10.4v3.1h-22c0.1,3.8,1,6.6,2.8,8.5s4.3,2.9,7.6,2.9c3.4,0,6.8-0.7,10.2-2.2v4.3 c-1.7,0.7-3.3,1.3-4.9,1.6C471.9,365.3,470.1,365.5,467.9,365.5z M466.6,336.4c-2.6,0-4.6,0.8-6.1,2.5c-1.5,1.7-2.4,4-2.7,6.9h16.7 c0-3.1-0.7-5.4-2-7C471.1,337.2,469.1,336.4,466.6,336.4z" }),
					_react2.default.createElement("path", { className: "st2", d: "M502.5,332.4c1.4,0,2.7,0.1,3.8,0.3l-0.7,4.5c-1.3-0.3-2.5-0.4-3.5-0.4c-2.6,0-4.8,1-6.6,3.1 c-1.8,2.1-2.8,4.7-2.8,7.8v17.1h-4.8v-32h4l0.6,5.9h0.2c1.2-2.1,2.6-3.7,4.3-4.8C498.7,332.9,500.5,332.4,502.5,332.4z" })
				)
			);
		}
	}]);

	return RipeMemberSVG;
}(_react.Component);

exports.default = RipeMemberSVG;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setOnMain = exports.clearOffMain = exports.moveOffMain = undefined;

var _types = __webpack_require__(11);

var moveOffMain = exports.moveOffMain = function moveOffMain() {
  return function (dispatch) {
    dispatch({
      type: _types.OFF_MAIN
    });
  };
};

var clearOffMain = exports.clearOffMain = function clearOffMain() {
  return function (dispatch) {
    dispatch({
      type: _types.CLEAR_OFF_MAIN
    });
  };
};

var setOnMain = exports.setOnMain = function setOnMain() {
  return function (dispatch) {
    dispatch({
      type: _types.ON_MAIN
    });
  };
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var OFF_MAIN = exports.OFF_MAIN = 'OFF_MAIN';
var ON_MAIN = exports.ON_MAIN = 'ON_MAIN';
var CLEAR_OFF_MAIN = exports.CLEAR_OFF_MAIN = 'CLEAR_OFF_MAIN';

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

var _reactRouterDom = __webpack_require__(1);

var _YesCube = __webpack_require__(7);

var _YesCube2 = _interopRequireDefault(_YesCube);

var _YesmLink = __webpack_require__(3);

var _YesmLink2 = _interopRequireDefault(_YesmLink);

var _YesBrandName = __webpack_require__(8);

var _YesBrandName2 = _interopRequireDefault(_YesBrandName);

var _constants = __webpack_require__(2);

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
      var _this2 = this;

      var _props = this.props,
          lang = _props.lang,
          page = _props.page;

      return _react2.default.createElement(
        "header",
        { className: "yesm-header", role: "banner" },
        _react2.default.createElement(
          "div",
          { className: "yesm-header1" },
          !page ? '' : _react2.default.createElement(
            "h1",
            { className: "yesm-logo" },
            _react2.default.createElement(
              "a",
              { href: '/' + lang, onClick: function onClick(e) {
                  return _this2.props.onClickFn(e, '/' + lang);
                } },
              _react2.default.createElement(_YesBrandName2.default, { page: page, lang: lang }),
              _react2.default.createElement("img", { src: "/cube-logo.png", alt: "small rubic cube", title: "YeSmart Main Page", className: "yesm-main-cube-logo" })
            )
          ),
          _react2.default.createElement(
            "h2",
            { className: "yesm-about" },
            _react2.default.createElement(_YesmLink2.default, { what: "about", how: { 'title': _constants.headerNav['about'].title[lang] }, lang: lang, onClickFn: this.props.onClickFn })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "yesm-header2" },
          _react2.default.createElement(
            "h2",
            { className: "yesm-contact" },
            _react2.default.createElement(_YesmLink2.default, { what: "contact", how: { 'title': _constants.headerNav['contact'].title[lang] }, lang: lang, onClickFn: this.props.onClickFn })
          ),
          _react2.default.createElement(
            "div",
            { className: "yesm-localize" },
            _constants.langs.filter(function (l) {
              return l != lang;
            }).map(function (l) {
              return _react2.default.createElement(
                _reactRouterDom.Link,
                { key: l.toString(), to: page ? '/' + page + '/' + l : '/' + l, className: "yesm-localize-link" },
                l
              );
            })
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

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

var _constants = __webpack_require__(2);

var _RipeMemberSVG = __webpack_require__(9);

var _RipeMemberSVG2 = _interopRequireDefault(_RipeMemberSVG);

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
      var _props = this.props,
          lang = _props.lang,
          onClickFn = _props.onClickFn;

      return _react2.default.createElement(
        'footer',
        { className: 'yesm-footer', role: 'contentinfo' },
        _react2.default.createElement(
          'div',
          { className: 'yesm-footer-links' },
          footerArr.map(function (l) {
            var FooterComponent = _constants.footerNav[l].component;
            return _react2.default.createElement(
              'div',
              { key: l.toString(), className: 'yesm-footer-link' },
              _react2.default.createElement(FooterComponent, { what: l, how: _constants.footerNav[l], lang: lang, onClickFn: onClickFn })
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'yesm-footer-ripe' },
          _react2.default.createElement(_RipeMemberSVG2.default, null)
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(16);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(17);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(18);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(4);

var _App = __webpack_require__(19);

var _App2 = _interopRequireDefault(_App);

var _store = __webpack_require__(29);

var _store2 = _interopRequireDefault(_store);

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
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { context: context, location: req.url },
      _react2.default.createElement(_App2.default, null)
    )
  ));

  res.send("\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>YeSmart</title>\n        <link href=\"//fonts.googleapis.com/css?family=Open+Sans:300,400,700,900|Montserrat:400,700,900|Yanone+Kaffeesatz:400|Architects+Daughter:400\" rel=\"stylesheet\" type=\"text/css\">\n        <link rel=\"stylesheet\" href=\"/main.css\">\n        <script src=\"/bundle.js\" defer></script>\n      </head>\n\n      <body>\n        <div id=\"app\" class=\"yesm-container\">" + markup + "</div>\n      </body>\n    </html>\n  ");
});

app.listen(3000, function () {
  console.log("Server is listening on port: 3000");
});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

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

var _Home = __webpack_require__(20);

var _Home2 = _interopRequireDefault(_Home);

var _YesmPage = __webpack_require__(27);

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
        _react2.default.createElement(_reactRouterDom.Route, { path: "/:lang?", component: _YesmPage2.default })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

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

var _SideNav = __webpack_require__(5);

var _SideNav2 = _interopRequireDefault(_SideNav);

var _YesmLink = __webpack_require__(3);

var _YesmLink2 = _interopRequireDefault(_YesmLink);

var _Main = __webpack_require__(6);

var _Main2 = _interopRequireDefault(_Main);

var _Header = __webpack_require__(12);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(13);

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
        _react2.default.createElement(_YesmLink2.default, { what: "login", how: { 'title': 'Login', 'className': 'yesm-login' } }),
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
/* 21 */
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
      var _props = this.props,
          what = _props.what,
          how = _props.how;

      return _react2.default.createElement(
        'a',
        { href: 'tel:' + how.title },
        how.title
      );
    }
  }]);

  return TelLink;
}(_react.Component);

exports.default = TelLink;

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
      var _props = this.props,
          what = _props.what,
          how = _props.how;

      return _react2.default.createElement(
        'a',
        { href: 'mailto:' + how.title },
        how.title
      );
    }
  }]);

  return EmailLink;
}(_react.Component);

exports.default = EmailLink;

/***/ }),
/* 23 */
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
      var _props = this.props,
          what = _props.what,
          how = _props.how;

      return _react2.default.createElement(
        'a',
        { href: how.to, target: '_blank' },
        how.title
      );
    }
  }]);

  return ExternalLink;
}(_react.Component);

exports.default = ExternalLink;

/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBodyClassname = __webpack_require__(26);

var _reactBodyClassname2 = _interopRequireDefault(_reactBodyClassname);

var _constants = __webpack_require__(2);

var _RipeMemberSVG = __webpack_require__(9);

var _RipeMemberSVG2 = _interopRequireDefault(_RipeMemberSVG);

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
      var _props = this.props,
          page = _props.page,
          lang = _props.lang;

      var linkMap = [_constants.sideNav, _constants.footerNav, _constants.headerNav].find(function (m) {
        return m[page];
      });
      var pageClass = linkMap[page].pageClass + ' ' + lang;
      var text = linkMap[page].text[lang];

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
          ),
          page == 'about' ? _react2.default.createElement(_RipeMemberSVG2.default, null) : ''
        )
      );
    }
  }]);

  return MainContent;
}(_react.Component);

exports.default = MainContent;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-body-classname");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Main = __webpack_require__(6);

var _Main2 = _interopRequireDefault(_Main);

var _YesmLink = __webpack_require__(3);

var _YesmLink2 = _interopRequireDefault(_YesmLink);

var _mainActions = __webpack_require__(10);

var _YesmSVGFilters = __webpack_require__(28);

var _YesmSVGFilters2 = _interopRequireDefault(_YesmSVGFilters);

var _SideNav = __webpack_require__(5);

var _SideNav2 = _interopRequireDefault(_SideNav);

var _Header = __webpack_require__(12);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(13);

var _Footer2 = _interopRequireDefault(_Footer);

var _reactRedux = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YesmPage = function (_Component) {
  _inherits(YesmPage, _Component);

  function YesmPage(props) {
    _classCallCheck(this, YesmPage);

    var _this = _possibleConstructorReturn(this, (YesmPage.__proto__ || Object.getPrototypeOf(YesmPage)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(YesmPage, [{
    key: "onClick",
    value: function onClick(e, to) {
      var _this2 = this;

      e.preventDefault();
      var onMain = this.props.onMain;

      if (onMain) {
        this.props.moveOffMain();
        this.timeout = setTimeout(function () {
          _this2.props.history.push(to);
        }, 500);
      } else this.props.history.push(to);
    }
  }, {
    key: "render",
    value: function render() {
      var page = void 0,
          lang = '';

      var location = this.props.location;

      var stringLocation = location.pathname.substr(1);
      var params = stringLocation.split('/');

      if (stringLocation) {
        // we are on some page - not ROOT page
        if (!params[0].match('^(en|ru|ua)$')) {
          // we are on a NOT home page
          page = params[0];
          if (params[1]) {
            lang = params[1];
          } else lang = 'en';
        } else {
          // we are on HOME page
          // the language was supplied in the url
          lang = params[0];
        }
      } else {
        // let us default to 'english' language
        // the page must be a HOME page
        lang = 'en';
      }

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_YesmSVGFilters2.default, null),
        _react2.default.createElement(_Header2.default, { page: page, lang: lang, onClickFn: this.onClick }),
        _react2.default.createElement(_YesmLink2.default, { what: "login", how: { 'title': 'Login', 'className': 'yesm-login' }, lang: lang }),
        _react2.default.createElement(
          "section",
          { className: "yesm-body" },
          _react2.default.createElement(_Main2.default, { page: page, lang: lang }),
          _react2.default.createElement(_SideNav2.default, { page: page, lang: lang, onClickFn: this.onClick })
        ),
        _react2.default.createElement(_Footer2.default, { lang: lang, onClickFn: this.onClick })
      );
    }
  }]);

  return YesmPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    onMain: state.main.onMain,
    offMain: state.main.offMain
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, { moveOffMain: _mainActions.moveOffMain })(YesmPage));

/***/ }),
/* 28 */
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

var YesmSVGFilters = function (_Component) {
  _inherits(YesmSVGFilters, _Component);

  function YesmSVGFilters() {
    _classCallCheck(this, YesmSVGFilters);

    return _possibleConstructorReturn(this, (YesmSVGFilters.__proto__ || Object.getPrototypeOf(YesmSVGFilters)).apply(this, arguments));
  }

  _createClass(YesmSVGFilters, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", version: "1.1", className: "svg-filters", width: "0", height: "0" },
        _react2.default.createElement(
          "defs",
          null,
          _react2.default.createElement(
            "filter",
            { id: "colorMeBlueMatrix" },
            _react2.default.createElement("feColorMatrix", { "in": "SourceGraphic", colorInterpolationFilters: "sRGB",
              type: "matrix",
              values: "1 0 0 0 -.57 0 1 0 0 .42 0 0 1 0 .404 0 0 0 .6 0" })
          ),
          _react2.default.createElement(
            "filter",
            { id: "colorMeYellowMatrix" },
            _react2.default.createElement("feColorMatrix", { "in": "SourceGraphic", colorInterpolationFilters: "sRGB",
              type: "matrix",
              values: "1 0 0 0 -.0157 0 1 0 0 .462 0 0 1 0 -.13 0 0 0 1 0" })
          ),
          _react2.default.createElement(
            "filter",
            { id: "colorMeFleshMatrix" },
            _react2.default.createElement("feColorMatrix", { "in": "SourceGraphic", colorInterpolationFilters: "sRGB",
              type: "matrix",
              values: "1 0 0 0 .2275 0 1 0 0 .8745 0 0 1 0 .7373 0 0 0 1.9 0" })
          )
        )
      );
    }
  }]);

  return YesmSVGFilters;
}(_react.Component);

exports.default = YesmSVGFilters;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(14);

var _reduxThunk = __webpack_require__(30);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(31);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = [_reduxThunk2.default];

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware)));

exports.default = store;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(14);

var _mainReducers = __webpack_require__(32);

var _mainReducers2 = _interopRequireDefault(_mainReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  main: _mainReducers2.default
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types.ON_MAIN:
      return _extends({}, state, {
        onMain: 1, offMain: 0 });
    case _types.OFF_MAIN:
      return _extends({}, state, {
        offMain: 1,
        onMain: 0 });
    case _types.CLEAR_OFF_MAIN:
      return _extends({}, state, {
        offMain: 0,
        onMain: 0 });
    default:
      return state;
  }
};

var _types = __webpack_require__(11);

var initialState = {
  onMain: 0,
  offMain: 0
};

/***/ })
/******/ ]);