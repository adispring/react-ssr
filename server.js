module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _connectedReactRouter = __webpack_require__(/*! connected-react-router */ \"connected-react-router\");\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nvar _ramda = __webpack_require__(/*! ramda */ \"ramda\");\n\nvar R = _interopRequireWildcard(_ramda);\n\nvar _App = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _routes = __webpack_require__(/*! ../shared/routes */ \"./src/shared/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _store = __webpack_require__(/*! ../shared/store */ \"./src/shared/store.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar PORT = process.env.PORT || 8080;\nvar server = (0, _express2.default)();\nvar matchPathC = R.curryN(2, _reactRouterDom.matchPath);\n\nserver.use(_express2.default.static('public'));\n\nserver.get('*', function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n    var activeRoute, _configureStore, store, history, promise;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log('New request, url: ' + req.url);\n\n            activeRoute = _routes2.default.find(matchPathC(req.url)) || {};\n\n            console.log('activeRoute: ' + activeRoute);\n\n            _configureStore = (0, _store2.default)({}, req.url, 'fromServer'), store = _configureStore.store, history = _configureStore.history;\n\n\n            console.log('req.originalUrl: ' + req.originalUrl);\n\n            promise = activeRoute.component.fetchInitialData ? store.dispatch(activeRoute.component.fetchInitialData(req.path)) : Promise.resolve();\n\n\n            promise.then(function (data) {\n              var preloadedState = store.getState();\n              console.log(preloadedState);\n              var markup = (0, _server.renderToString)(_react2.default.createElement(\n                _reactRedux.Provider,\n                { store: store },\n                _react2.default.createElement(\n                  _connectedReactRouter.ConnectedRouter,\n                  { history: history },\n                  _react2.default.createElement(_App2.default, null)\n                )\n              ));\n              res.send('\\n      <!DOCTYPE html>\\n      <html>\\n        <head>\\n          <title>SSR with RR</title>\\n          <script src=\"/bundle.js\" defer></script>\\n          <script>window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(preloadedState) + '</script>\\n          <link rel = \"stylesheet\" type = \"text/css\" href = \"/main.css\" />\\n        </head>\\n        <body>\\n          <div id=\"app\">' + markup + '</div>\\n        </body>\\n      </html>\\n    ');\n            });\n\n          case 7:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function (_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\nserver.listen(PORT, function () {\n  console.log('Server is listening on PORT: ' + PORT);\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _routes = __webpack_require__(/*! ./routes */ \"./src/shared/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _Navbar = __webpack_require__(/*! ./Navbar */ \"./src/shared/Navbar.js\");\n\nvar _Navbar2 = _interopRequireDefault(_Navbar);\n\nvar _NoMatch = __webpack_require__(/*! ./NoMatch */ \"./src/shared/NoMatch.js\");\n\nvar _NoMatch2 = _interopRequireDefault(_NoMatch);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar App = function App() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_Navbar2.default, null),\n    _react2.default.createElement(\n      _reactRouterDom.Switch,\n      null,\n      _routes2.default.map(function (_ref) {\n        var path = _ref.path,\n            exact = _ref.exact,\n            Comp = _ref.component,\n            rest = _objectWithoutProperties(_ref, ['path', 'exact', 'component']);\n\n        return _react2.default.createElement(_reactRouterDom.Route, {\n          key: path,\n          path: path,\n          exact: exact,\n          render: function render(props) {\n            return _react2.default.createElement(Comp, _extends({}, props, rest));\n          }\n        });\n      }),\n      _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {\n          return _react2.default.createElement(_NoMatch2.default, props);\n        } })\n    )\n  );\n};\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/shared/App.js?");

/***/ }),

/***/ "./src/shared/Grid.js":
/*!****************************!*\
  !*** ./src/shared/Grid.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _ramda = __webpack_require__(/*! ramda */ \"ramda\");\n\nvar R = _interopRequireWildcard(_ramda);\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/shared/actions.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Grid = function (_Component) {\n  _inherits(Grid, _Component);\n\n  function Grid() {\n    _classCallCheck(this, Grid);\n\n    return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));\n  }\n\n  _createClass(Grid, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      if (R.isEmpty(this.props.repos)) {\n        this.props.fetchPopularRepos(this.props.match.params.id);\n      }\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate(prevProps) {\n      if (prevProps.match.params.id !== this.props.match.params.id) {\n        this.props.fetchPopularRepos(this.props.match.params.id);\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          repos = _props.repos,\n          loading = _props.loading;\n\n      console.log(R.omit(['repos'], this.props));\n      if (loading === true) {\n        return _react2.default.createElement(\n          'p',\n          null,\n          'LOADING'\n        );\n      }\n      /* eslint camelcase: 0 */\n      return _react2.default.createElement(\n        'ul',\n        { style: { display: 'flex', flexWrap: 'wrap' } },\n        repos.map(function (_ref) {\n          var name = _ref.name,\n              owner = _ref.owner,\n              stargazers_count = _ref.stargazers_count,\n              html_url = _ref.html_url;\n          return _react2.default.createElement(\n            'li',\n            { key: name, style: { margin: 30 } },\n            _react2.default.createElement(\n              'ul',\n              null,\n              _react2.default.createElement(\n                'li',\n                null,\n                _react2.default.createElement(\n                  'a',\n                  { href: html_url },\n                  name\n                )\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                '@',\n                owner.login\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                stargazers_count,\n                ' stars'\n              )\n            )\n          );\n        })\n      );\n    }\n  }]);\n\n  return Grid;\n}(_react.Component);\n\nGrid.fetchInitialData = _actions.fetchPopularRepos;\n\nGrid.propTypes = {\n  repos: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,\n  loading: _propTypes2.default.bool.isRequired,\n  fetchPopularRepos: _propTypes2.default.func.isRequired,\n  match: _propTypes2.default.object.isRequired\n};\n\nvar mapStateToProps = R.path(['grid']);\nvar mapDispatchToProps = {\n  fetchPopularRepos: _actions.fetchPopularRepos\n};\n\nexports.default = R.compose(_reactRouterDom.withRouter, (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(Grid);\n\n//# sourceURL=webpack:///./src/shared/Grid.js?");

/***/ }),

/***/ "./src/shared/Home.js":
/*!****************************!*\
  !*** ./src/shared/Home.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_React$Component) {\n  _inherits(Home, _React$Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: 'render',\n    value: function render() {\n      console.log(this.props);\n      return _react2.default.createElement(\n        'div',\n        null,\n        'Select a Language'\n      );\n    }\n  }]);\n\n  return Home;\n}(_react2.default.Component);\n\nexports.default = Home;\n\n//# sourceURL=webpack:///./src/shared/Home.js?");

/***/ }),

/***/ "./src/shared/Navbar.js":
/*!******************************!*\
  !*** ./src/shared/Navbar.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = Navbar;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Navbar() {\n  var languages = [{\n    name: 'All',\n    param: 'all'\n  }, {\n    name: 'JavaScript',\n    param: 'javascript'\n  }, {\n    name: 'Ruby',\n    param: 'ruby'\n  }, {\n    name: 'Python',\n    param: 'python'\n  }, {\n    name: 'Java',\n    param: 'java'\n  }];\n\n  return _react2.default.createElement(\n    'ul',\n    null,\n    languages.map(function (_ref) {\n      var name = _ref.name,\n          param = _ref.param;\n      return _react2.default.createElement(\n        'li',\n        { key: param },\n        _react2.default.createElement(\n          _reactRouterDom.NavLink,\n          {\n            activeStyle: { fontWeight: 'bold' },\n            to: '/popular/' + param\n          },\n          name\n        )\n      );\n    })\n  );\n}\n\n//# sourceURL=webpack:///./src/shared/Navbar.js?");

/***/ }),

/***/ "./src/shared/NoMatch.js":
/*!*******************************!*\
  !*** ./src/shared/NoMatch.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = NoMatch;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction NoMatch() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    'Four Oh Four'\n  );\n}\n\n//# sourceURL=webpack:///./src/shared/NoMatch.js?");

/***/ }),

/***/ "./src/shared/actions.js":
/*!*******************************!*\
  !*** ./src/shared/actions.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchPopularRepos = exports.ActionTypes = undefined;\n\nvar _isomorphicFetch = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _ramda = __webpack_require__(/*! ramda */ \"ramda\");\n\nvar R = _interopRequireWildcard(_ramda);\n\nvar _keymirror = __webpack_require__(/*! keymirror */ \"keymirror\");\n\nvar _keymirror2 = _interopRequireDefault(_keymirror);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ActionTypes = exports.ActionTypes = (0, _keymirror2.default)({\n  FetchPopularRepos: null,\n  ToggleLoading: null\n});\n\nvar toggleLoad = function toggleLoad(loading) {\n  return {\n    type: ActionTypes.ToggleLoading,\n    payload: { loading: loading }\n  };\n};\n\nvar fetchPopularRepos = exports.fetchPopularRepos = function fetchPopularRepos() {\n  var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';\n  return function (dispatch) {\n    var encodedURI = encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');\n\n    dispatch(toggleLoad(true));\n    return (0, _isomorphicFetch2.default)(encodedURI).then(function (data) {\n      return data.json();\n    }).then(R.prop('items')).then(function (data) {\n      return dispatch({\n        type: ActionTypes.FetchPopularRepos,\n        payload: { repos: data, loading: false }\n      });\n    }).catch(function (error) {\n      console.warn(error);\n      return null;\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/shared/actions.js?");

/***/ }),

/***/ "./src/shared/reducers/gridReducer.js":
/*!********************************************!*\
  !*** ./src/shared/reducers/gridReducer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/shared/actions.js\");\n\nvar _redux = __webpack_require__(/*! ../util/redux */ \"./src/shared/util/redux.js\");\n\nvar initialState = {\n  repos: [],\n  loading: false\n};\n\nexports.default = (0, _redux.reducerCreator)(_actions.ActionTypes, initialState);\n\n//# sourceURL=webpack:///./src/shared/reducers/gridReducer.js?");

/***/ }),

/***/ "./src/shared/reducers/index.js":
/*!**************************************!*\
  !*** ./src/shared/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _gridReducer = __webpack_require__(/*! ./gridReducer */ \"./src/shared/reducers/gridReducer.js\");\n\nvar _gridReducer2 = _interopRequireDefault(_gridReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n  grid: _gridReducer2.default\n});\n\n//# sourceURL=webpack:///./src/shared/reducers/index.js?");

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Home = __webpack_require__(/*! ./Home */ \"./src/shared/Home.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Grid = __webpack_require__(/*! ./Grid */ \"./src/shared/Grid.js\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar routes = [{\n  path: '/',\n  exact: true,\n  component: _Home2.default\n}, {\n  path: '/popular/:id',\n  component: _Grid2.default\n}];\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/shared/routes.js?");

/***/ }),

/***/ "./src/shared/store.js":
/*!*****************************!*\
  !*** ./src/shared/store.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = configureStore;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _connectedReactRouter = __webpack_require__(/*! connected-react-router */ \"connected-react-router\");\n\nvar _history = __webpack_require__(/*! history */ \"history\");\n\nvar _reduxDevtoolsExtension = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reducers = __webpack_require__(/*! ./reducers */ \"./src/shared/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction configureStore() {\n  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';\n  var fromServer = arguments[2];\n\n  // initialState will always be Object{} on the server...\n  // this will pass to the client so that it will be able to\n  // initialize with what the server originally rendered\n\n  var history = fromServer ? (0, _history.createMemoryHistory)({\n    initialEntries: [url]\n  }) : (0, _history.createBrowserHistory)();\n\n  // once we init the routerMiddleware with this `history`,\n  // compose with devtools (dev) or just apply it (prod)\n  var initializedRouterMW = (0, _connectedReactRouter.routerMiddleware)(history);\n  // const middleware = process.env.NODE_ENV === 'development' ?\n  //   composeWithDevTools(applyMiddleware(initializedRouterMW, thunk)) :\n  //   applyMiddleware(initializedRouterMW, thunk);\n  var composedEnhancers = (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(initializedRouterMW, _reduxThunk2.default));\n\n  var store = (0, _redux.createStore)((0, _connectedReactRouter.connectRouter)(history)(_reducers2.default), initialState, composedEnhancers);\n\n  return { history: history, store: store };\n}\n\n//# sourceURL=webpack:///./src/shared/store.js?");

/***/ }),

/***/ "./src/shared/util/redux.js":
/*!**********************************!*\
  !*** ./src/shared/util/redux.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.reducerCreator = exports.objAction = undefined;\n\nvar _ramda = __webpack_require__(/*! ramda */ \"ramda\");\n\nvar R = _interopRequireWildcard(_ramda);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar objAction = exports.objAction = R.curry(function (type, payload) {\n  return { type: type, payload: payload };\n});\n\nvar checkType = function checkType(actionType, type) {\n  return R.cond([[R.is(String), R.equals(type)], [R.is(Array), R.contains(type)], [R.is(Object), R.compose(R.contains(type), R.values)], [R.T, function () {\n    throw new Error('Current type of actionType is ' + R.type(actionType) + ', correct type: String or Array.');\n  }]])(actionType);\n};\n\nvar reducerCreator = exports.reducerCreator = function reducerCreator(actionType, initialState) {\n  return function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n    var _ref = arguments[1];\n    var type = _ref.type,\n        payload = _ref.payload;\n    return payload && checkType(actionType, type) ? R.mergeDeepRight(state, payload) : state;\n  };\n};\n\n//# sourceURL=webpack:///./src/shared/util/redux.js?");

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi babel-polyfill ./src/server/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! /Users/adi/zengdi/JavaScript/playground/react-ssr/src/server/index.js */\"./src/server/index.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./src/server/index.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "connected-react-router":
/*!*****************************************!*\
  !*** external "connected-react-router" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connected-react-router\");\n\n//# sourceURL=webpack:///external_%22connected-react-router%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"history\");\n\n//# sourceURL=webpack:///external_%22history%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "keymirror":
/*!****************************!*\
  !*** external "keymirror" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"keymirror\");\n\n//# sourceURL=webpack:///external_%22keymirror%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ramda\");\n\n//# sourceURL=webpack:///external_%22ramda%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });