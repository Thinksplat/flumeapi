'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$d = ".Stage_wrapper__1-MnH {\n  width: 100%;\n  height: 100%;\n  min-height: 100px;\n  background-color: rgb(26, 28, 29);\n  background-image: linear-gradient(\n      0deg,\n      transparent 24%,\n      rgba(255, 255, 255, 0.04) 25%,\n      rgba(255, 255, 255, 0.04) 26%,\n      transparent 27%,\n      transparent 74%,\n      rgba(255, 255, 255, 0.04) 75%,\n      rgba(255, 255, 255, 0.04) 76%,\n      transparent 77%,\n      transparent\n    ),\n    linear-gradient(\n      90deg,\n      transparent 24%,\n      rgba(255, 255, 255, 0.04) 25%,\n      rgba(255, 255, 255, 0.04) 26%,\n      transparent 27%,\n      transparent 74%,\n      rgba(255, 255, 255, 0.04) 75%,\n      rgba(255, 255, 255, 0.04) 76%,\n      transparent 77%,\n      transparent\n    );\n  color: #000;\n  background-size: 30px 30px;\n  position: relative;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  font-family: Helvetica, sans-serif;\n  text-align: left;\n  line-height: 1;\n  outline: none !important;\n}\n.Stage_wrapper__1-MnH * {\n  box-sizing: border-box;\n}\n.Stage_wrapper__1-MnH input,\ntextarea,\nselect {\n  font-family: Helvetica, sans-serif;\n}\n.Stage_transformWrapper__15k8U {\n  transform-origin: center center;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 0px;\n  height: 0px;\n}\n.Stage_scaleWrapper__Svldl {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 0px;\n  height: 0px;\n}\n";
var styles$d = {"wrapper":"Stage_wrapper__1-MnH","transformWrapper":"Stage_transformWrapper__15k8U","scaleWrapper":"Stage_scaleWrapper__Svldl"};
styleInject(css_248z$d);

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal$3 = function (_React$Component) {
  _inherits$2(Portal, _React$Component);

  function Portal() {
    _classCallCheck$2(this, Portal);

    return _possibleConstructorReturn$2(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass$2(Portal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!canUseDOM) {
        return null;
      }
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }
      return ReactDOM__default["default"].createPortal(this.props.children, this.props.node || this.defaultNode);
    }
  }]);

  return Portal;
}(React__default["default"].Component);

Portal$3.propTypes = {
  children: PropTypes__default["default"].node.isRequired,
  node: PropTypes__default["default"].any
};

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal$2 = function (_React$Component) {
  _inherits$1(Portal, _React$Component);

  function Portal() {
    _classCallCheck$1(this, Portal);

    return _possibleConstructorReturn$1(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass$1(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderPortal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(props) {
      this.renderPortal();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      ReactDOM__default["default"].unmountComponentAtNode(this.defaultNode || this.props.node);
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
      this.portal = null;
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal(props) {
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }

      var children = this.props.children;
      // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
      if (typeof this.props.children.type === 'function') {
        children = React__default["default"].cloneElement(this.props.children);
      }

      this.portal = ReactDOM__default["default"].unstable_renderSubtreeIntoContainer(this, children, this.props.node || this.defaultNode);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(React__default["default"].Component);


Portal$2.propTypes = {
  children: PropTypes__default["default"].node.isRequired,
  node: PropTypes__default["default"].any
};

var Portal = void 0;

if (ReactDOM__default["default"].createPortal) {
  Portal = Portal$3;
} else {
  Portal = Portal$2;
}

var Portal$1 = Portal;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KEYCODES = {
  ESCAPE: 27
};

var PortalWithState = function (_React$Component) {
  _inherits(PortalWithState, _React$Component);

  function PortalWithState(props) {
    _classCallCheck(this, PortalWithState);

    var _this = _possibleConstructorReturn(this, (PortalWithState.__proto__ || Object.getPrototypeOf(PortalWithState)).call(this, props));

    _this.portalNode = null;
    _this.state = { active: !!props.defaultOpen };
    _this.openPortal = _this.openPortal.bind(_this);
    _this.closePortal = _this.closePortal.bind(_this);
    _this.wrapWithPortal = _this.wrapWithPortal.bind(_this);
    _this.handleOutsideMouseClick = _this.handleOutsideMouseClick.bind(_this);
    _this.handleKeydown = _this.handleKeydown.bind(_this);
    return _this;
  }

  _createClass(PortalWithState, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.closeOnEsc) {
        document.addEventListener('keydown', this.handleKeydown);
      }
      if (this.props.closeOnOutsideClick) {
        document.addEventListener('click', this.handleOutsideMouseClick);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.closeOnEsc) {
        document.removeEventListener('keydown', this.handleKeydown);
      }
      if (this.props.closeOnOutsideClick) {
        document.removeEventListener('click', this.handleOutsideMouseClick);
      }
    }
  }, {
    key: 'openPortal',
    value: function openPortal(e) {
      if (this.state.active) {
        return;
      }
      if (e && e.nativeEvent) {
        e.nativeEvent.stopImmediatePropagation();
      }
      this.setState({ active: true }, this.props.onOpen);
    }
  }, {
    key: 'closePortal',
    value: function closePortal() {
      if (!this.state.active) {
        return;
      }
      this.setState({ active: false }, this.props.onClose);
    }
  }, {
    key: 'wrapWithPortal',
    value: function wrapWithPortal(children) {
      var _this2 = this;

      if (!this.state.active) {
        return null;
      }
      return React__default["default"].createElement(
        Portal$1,
        {
          node: this.props.node,
          key: 'react-portal',
          ref: function ref(portalNode) {
            return _this2.portalNode = portalNode;
          }
        },
        children
      );
    }
  }, {
    key: 'handleOutsideMouseClick',
    value: function handleOutsideMouseClick(e) {
      if (!this.state.active) {
        return;
      }
      var root = this.portalNode && (this.portalNode.props.node || this.portalNode.defaultNode);
      if (!root || root.contains(e.target) || e.button && e.button !== 0) {
        return;
      }
      this.closePortal();
    }
  }, {
    key: 'handleKeydown',
    value: function handleKeydown(e) {
      if (e.keyCode === KEYCODES.ESCAPE && this.state.active) {
        this.closePortal();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children({
        openPortal: this.openPortal,
        closePortal: this.closePortal,
        portal: this.wrapWithPortal,
        isOpen: this.state.active
      });
    }
  }]);

  return PortalWithState;
}(React__default["default"].Component);

PortalWithState.propTypes = {
  children: PropTypes__default["default"].func.isRequired,
  defaultOpen: PropTypes__default["default"].bool,
  node: PropTypes__default["default"].any,
  closeOnEsc: PropTypes__default["default"].bool,
  closeOnOutsideClick: PropTypes__default["default"].bool,
  onOpen: PropTypes__default["default"].func,
  onClose: PropTypes__default["default"].func
};

PortalWithState.defaultProps = {
  onOpen: function onOpen() {},
  onClose: function onClose() {}
};

var css_248z$c = ".ContextMenu_menuWrapper__Z9z6u{\n  position: fixed;\n  z-index: 9999;\n  background: rgba(29, 32, 34, 0.95);\n  border-radius: 5px;\n  box-shadow: 0px 6px 7px rgba(0,0,0,.3);\n  border: 1px solid rgba(0,0,0,.4);\n  font-size: 14px;\n  max-width: 300px;\n  min-width: 150px;\n  font-family: Helvetica, sans-serif;\n  line-height: 1.15;\n  outline: none;\n}\n@supports (backdrop-filter: blur(6px)){\n  .ContextMenu_menuWrapper__Z9z6u{\n    backdrop-filter: blur(6px);\n    background: rgba(29, 32, 34, 0.8);\n  }\n}\n.ContextMenu_menuHeader__YueK-{\n  padding: 5px;\n  border-bottom: 1px solid rgba(255,255,255,.1);\n  display: flex;\n  flex-direction: column;\n}\n.ContextMenu_menuLabel__s8v-E{\n  margin: 0px;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n}\n.ContextMenu_optionsWrapper__KHbqz{\n  max-height: 300px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n}\n.ContextMenu_menuFilter__mcwO6{\n  border: none;\n  background: none;\n  height: 24px;\n  flex: 1 1 auto;\n  width: 100%;\n  outline: none;\n  color: #fff;\n}\n.ContextMenu_menuFilter__mcwO6::placeholder{\n    font-style: italic;\n  }\n.ContextMenu_option__vWtA9{\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  padding: 5px;\n  border-bottom: 1px solid rgba(255,255,255,.1);\n  color: #ffffff;\n}\n.ContextMenu_option__vWtA9:last-child{\n    border-bottom: none;\n  }\n.ContextMenu_option__vWtA9:hover{\n    background: rgba(255,255,255,.05);\n  }\n.ContextMenu_option__vWtA9 label{\n    margin-bottom: 5px;\n    user-select: none;\n  }\n.ContextMenu_option__vWtA9 label:last-child{\n      margin-bottom: 0px;\n    }\n.ContextMenu_option__vWtA9 p{\n    margin: 0px;\n    font-style: italic;\n    font-size: 12px;\n    color: rgb(182, 186, 194);\n    user-select: none;\n  }\n.ContextMenu_option__vWtA9[data-selected=true]{\n    background: rgba(255,255,255,.05);\n  }\n.ContextMenu_emptyText__lDw6a{\n  color: #fff;\n  padding: 5px;\n}\n";
var styles$c = {"menuWrapper":"ContextMenu_menuWrapper__Z9z6u","menuHeader":"ContextMenu_menuHeader__YueK-","menuLabel":"ContextMenu_menuLabel__s8v-E","optionsWrapper":"ContextMenu_optionsWrapper__KHbqz","menuFilter":"ContextMenu_menuFilter__mcwO6","option":"ContextMenu_option__vWtA9","emptyText":"ContextMenu_emptyText__lDw6a"};
styleInject(css_248z$c);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */

function baseClamp$1(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

var _baseClamp = baseClamp$1;

/** Used to match a single whitespace character. */

var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex$1(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

var _trimmedEndIndex = trimmedEndIndex$1;

var trimmedEndIndex = _trimmedEndIndex;

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim$1(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

var _baseTrim = baseTrim$1;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject$4(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$4;

/** Detect free variable `global` from Node.js. */

var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$8 = freeGlobal || freeSelf || Function('return this')();

var _root = root$8;

var root$7 = _root;

/** Built-in value references. */
var Symbol$4 = root$7.Symbol;

var _Symbol = Symbol$4;

var Symbol$3 = _Symbol;

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$b.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$b.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$8.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag$1;

/** Used for built-in method references. */

var objectProto$a = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$a.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString$1;

var Symbol$2 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$5(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

var _baseGetTag = baseGetTag$5;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike$5(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$5;

var baseGetTag$4 = _baseGetTag,
    isObjectLike$4 = isObjectLike_1;

/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$5(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$4(value) && baseGetTag$4(value) == symbolTag$1);
}

var isSymbol_1 = isSymbol$5;

var baseTrim = _baseTrim,
    isObject$3 = isObject_1,
    isSymbol$4 = isSymbol_1;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol$4(value)) {
    return NAN;
  }
  if (isObject$3(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$3(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber$1;

var baseClamp = _baseClamp,
    toNumber = toNumber_1;

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */
function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }
  if (upper !== undefined) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== undefined) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber(number), lower, upper);
}

var clamp_1 = clamp;

let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63;
    if (byte < 36) {
      id += byte.toString(36);
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase();
    } else if (byte > 62) {
      id += '-';
    } else {
      id += '_';
    }
    return id
  }, '');

var _jsxFileName$e = "/workspaces/flumeapi/src/components/ContextMenu/ContextMenu.js";

const ContextMenu = ({
  x,
  y,
  options = [],
  onRequestClose,
  onOptionSelected,
  label,
  hideHeader,
  hideFilter,
  emptyText
}) => {
  const menuWrapper = React__default["default"].useRef();
  const menuOptionsWrapper = React__default["default"].useRef();
  const filterInput = React__default["default"].useRef();
  const [filter, setFilter] = React__default["default"].useState("");
  const [menuWidth, setMenuWidth] = React__default["default"].useState(0);
  const [selectedIndex, setSelectedIndex] = React__default["default"].useState(0);
  const menuId = React__default["default"].useRef(nanoid(10));

  const handleOptionSelected = option => {
    onOptionSelected(option);
    onRequestClose();
  };

  const testClickOutside = React__default["default"].useCallback(e => {
    if (menuWrapper.current && !menuWrapper.current.contains(e.target)) {
      onRequestClose();
      document.removeEventListener("click", testClickOutside, {
        capture: true
      });
      document.removeEventListener("contextmenu", testClickOutside, {
        capture: true
      });
    }
  }, [menuWrapper, onRequestClose]);
  const testEscape = React__default["default"].useCallback(e => {
    if (e.keyCode === 27) {
      onRequestClose();
      document.removeEventListener("keydown", testEscape, {
        capture: true
      });
    }
  }, [onRequestClose]);
  React__default["default"].useEffect(() => {
    if (filterInput.current) {
      filterInput.current.focus();
    }

    setMenuWidth(menuWrapper.current.getBoundingClientRect().width);
    document.addEventListener("keydown", testEscape, {
      capture: true
    });
    document.addEventListener("click", testClickOutside, {
      capture: true
    });
    document.addEventListener("contextmenu", testClickOutside, {
      capture: true
    });
    return () => {
      document.removeEventListener("click", testClickOutside, {
        capture: true
      });
      document.removeEventListener("contextmenu", testClickOutside, {
        capture: true
      });
      document.removeEventListener("keydown", testEscape, {
        capture: true
      });
    };
  }, [testClickOutside, testEscape]);
  const filteredOptions = React__default["default"].useMemo(() => {
    if (!filter) return options;
    const lowerFilter = filter.toLowerCase();
    return options.filter(opt => opt.label.toLowerCase().includes(lowerFilter));
  }, [filter, options]);

  const handleFilterChange = e => {
    const value = e.target.value;
    setFilter(value);
    setSelectedIndex(0);
  };

  const handleKeyDown = e => {
    // Up pressed
    if (e.which === 38) {
      e.preventDefault();

      if (selectedIndex === null) {
        setSelectedIndex(0);
      } else if (selectedIndex > 0) {
        setSelectedIndex(i => i - 1);
      }
    } // Down pressed


    if (e.which === 40) {
      e.preventDefault();

      if (selectedIndex === null) {
        setSelectedIndex(0);
      } else if (selectedIndex < filteredOptions.length - 1) {
        setSelectedIndex(i => i + 1);
      }
    } // Enter pressed


    if (e.which === 13 && selectedIndex !== null) {
      const option = filteredOptions[selectedIndex];

      if (option) {
        handleOptionSelected(option);
      }
    }
  };

  React__default["default"].useEffect(() => {
    if (hideFilter || hideHeader) {
      menuWrapper.current.focus();
    }
  }, [hideFilter, hideHeader]);
  React__default["default"].useEffect(() => {
    const menuOption = document.getElementById(`${menuId.current}-${selectedIndex}`);

    if (menuOption) {
      const menuRect = menuOptionsWrapper.current.getBoundingClientRect();
      const optionRect = menuOption.getBoundingClientRect();

      if (optionRect.y + optionRect.height > menuRect.y + menuRect.height || optionRect.y < menuRect.y) {
        menuOption.scrollIntoView({
          block: "nearest"
        });
      }
    }
  }, [selectedIndex]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    "data-flume-component": "ctx-menu",
    className: styles$c.menuWrapper,
    onMouseDown: e => e.stopPropagation(),
    onKeyDown: handleKeyDown,
    style: {
      left: x,
      top: y,
      width: filter ? menuWidth : "auto"
    },
    ref: menuWrapper,
    tabIndex: 0,
    role: "menu",
    "aria-activedescendant": `${menuId.current}-${selectedIndex}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$e,
      lineNumber: 129,
      columnNumber: 5
    }
  }, !hideHeader && (label ? true : !!options.length) ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$c.menuHeader,
    "data-flume-component": "ctx-menu-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName$e,
      lineNumber: 145,
      columnNumber: 9
    }
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    className: styles$c.menuLabel,
    "data-flume-component": "ctx-menu-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName$e,
      lineNumber: 146,
      columnNumber: 11
    }
  }, label), !hideFilter && options.length ? /*#__PURE__*/React__default["default"].createElement("input", {
    "data-flume-component": "ctx-menu-input",
    type: "text",
    placeholder: "Filter options",
    value: filter,
    onChange: handleFilterChange,
    className: styles$c.menuFilter,
    autoFocus: true,
    ref: filterInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$e,
      lineNumber: 148,
      columnNumber: 13
    }
  }) : null) : null, /*#__PURE__*/React__default["default"].createElement("div", {
    "data-flume-component": "ctx-menu-list",
    className: styles$c.optionsWrapper,
    role: "menu",
    ref: menuOptionsWrapper,
    style: {
      maxHeight: clamp_1(window.innerHeight - y - 70, 10, 300)
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName$e,
      lineNumber: 161,
      columnNumber: 7
    }
  }, filteredOptions.map((option, i) => /*#__PURE__*/React__default["default"].createElement(ContextOption, {
    menuId: menuId.current,
    selected: selectedIndex === i,
    onClick: () => handleOptionSelected(option),
    onMouseEnter: () => setSelectedIndex(null),
    index: i,
    key: option.value + i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$e,
      lineNumber: 169,
      columnNumber: 11
    }
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$e,
      lineNumber: 177,
      columnNumber: 13
    }
  }, option.label), option.description ? /*#__PURE__*/React__default["default"].createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$e,
      lineNumber: 178,
      columnNumber: 35
    }
  }, option.description) : null)), !options.length ? /*#__PURE__*/React__default["default"].createElement("span", {
    "data-flume-component": "ctx-menu-empty",
    className: styles$c.emptyText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$e,
      lineNumber: 182,
      columnNumber: 11
    }
  }, emptyText) : null));
};

const ContextOption = ({
  menuId,
  index,
  children,
  onClick,
  selected,
  onMouseEnter
}) => {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    "data-flume-component": "ctx-menu-option",
    className: styles$c.option,
    role: "menuitem",
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    "data-selected": selected,
    id: `${menuId}-${index}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$e,
      lineNumber: 198,
      columnNumber: 5
    }
  }, children);
};

const NodeTypesContext = /*#__PURE__*/React__default["default"].createContext();
const PortTypesContext = /*#__PURE__*/React__default["default"].createContext();
const NodeDispatchContext = /*#__PURE__*/React__default["default"].createContext();
const ConnectionRecalculateContext = /*#__PURE__*/React__default["default"].createContext();
const ContextContext = /*#__PURE__*/React__default["default"].createContext();
const StageContext = /*#__PURE__*/React__default["default"].createContext();
const CacheContext = /*#__PURE__*/React__default["default"].createContext();
const RecalculateStageRectContext = /*#__PURE__*/React__default["default"].createContext();
const EditorIdContext = /*#__PURE__*/React__default["default"].createContext();
const UIEventsContext = /*#__PURE__*/React__default["default"].createContext();

var _jsxFileName$d = "/workspaces/flumeapi/src/components/Draggable/Draggable.js";

const Draggable = ({
  children,
  stageState,
  stageRect,
  onDragDelayStart,
  onDragStart,
  onDrag,
  onDragEnd,
  onMouseDown,
  onTouchStart,
  disabled,
  delay = 6,
  innerRef,
  ...rest
}) => {
  const startCoordinates = React__default["default"].useRef(null);
  const offset = React__default["default"].useRef();
  const wrapper = React__default["default"].useRef();

  const byScale = value => 1 / stageState.scale * value;

  const getScaledCoordinates = e => {
    const x = byScale(e.clientX - (stageRect ? stageRect.current.left : 0) - offset.current.x - (stageRect ? stageRect.current.width : 0) / 2) + byScale(stageState.translate.x);
    const y = byScale(e.clientY - (stageRect ? stageRect.current.top : 0) - offset.current.y - (stageRect ? stageRect.current.height : 0) / 2) + byScale(stageState.translate.y);
    return {
      x,
      y
    };
  };

  const updateCoordinates = e => {
    const coordinates = getScaledCoordinates(e);

    if (onDrag) {
      onDrag(coordinates, e);
    }
  };

  const stopDrag = e => {
    const coordinates = getScaledCoordinates(e);

    if (onDragEnd) {
      onDragEnd(e, coordinates);
    }

    window.removeEventListener("mouseup", stopDrag);
    window.removeEventListener("mousemove", updateCoordinates);
  };

  const startDrag = e => {
    if (onDragStart) {
      onDragStart(e);
    }

    const nodeRect = wrapper.current.getBoundingClientRect();
    offset.current = {
      x: startCoordinates.current.x - nodeRect.left,
      y: startCoordinates.current.y - nodeRect.top
    };
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("mousemove", updateCoordinates);
  };

  const checkDragDelay = e => {
    let x;
    let y;

    if ("ontouchstart" in window && e.touches) {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    } else {
      e.preventDefault();
      x = e.clientX;
      y = e.clientY;
    }

    let a = Math.abs(startCoordinates.current.x - x);
    let b = Math.abs(startCoordinates.current.y - y);
    let distance = Math.round(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
    let dragDistance = delay;

    if (distance >= dragDistance) {
      startDrag(e);
      endDragDelay();
    }
  };

  const endDragDelay = () => {
    document.removeEventListener("mouseup", endDragDelay);
    document.removeEventListener("mousemove", checkDragDelay);
    startCoordinates.current = null;
  };

  const startDragDelay = e => {
    if (onDragDelayStart) {
      onDragDelayStart(e);
    }

    e.stopPropagation();
    let x;
    let y;

    if ("ontouchstart" in window && e.touches) {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    } else {
      e.preventDefault();
      x = e.clientX;
      y = e.clientY;
    }

    startCoordinates.current = {
      x,
      y
    };
    document.addEventListener("mouseup", endDragDelay);
    document.addEventListener("mousemove", checkDragDelay);
  };

  return /*#__PURE__*/React__default["default"].createElement("div", _extends({
    onMouseDown: e => {
      if (!disabled) {
        startDragDelay(e);
      }

      if (onMouseDown) {
        onMouseDown(e);
      }
    },
    onTouchStart: e => {
      if (!disabled) {
        startDragDelay(e);
      }

      if (onTouchStart) {
        onTouchStart(e);
      }
    },
    onDragStart: e => {
      e.preventDefault();
      e.stopPropagation();
    },
    ref: ref => {
      wrapper.current = ref;

      if (innerRef) {
        innerRef.current = ref;
      }
    }
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$d,
      lineNumber: 119,
      columnNumber: 5
    }
  }), children);
};

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */

function arrayMap$2(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap$2;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray$a = Array.isArray;

var isArray_1 = isArray$a;

var isArray$9 = isArray_1,
    isSymbol$3 = isSymbol_1;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey$3(value, object) {
  if (isArray$9(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol$3(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey$3;

var baseGetTag$3 = _baseGetTag,
    isObject$2 = isObject_1;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$2(value) {
  if (!isObject$2(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag$3(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$2;

var root$6 = _root;

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = root$6['__core-js_shared__'];

var _coreJsData = coreJsData$1;

var coreJsData = _coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked$1;

/** Used for built-in method references. */

var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource$2;

var isFunction$1 = isFunction_1,
    isMasked = _isMasked,
    isObject$1 = isObject_1,
    toSource$1 = _toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$9 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$7).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}

var _baseIsNative = baseIsNative$1;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue$1;

var baseIsNative = _baseIsNative,
    getValue = _getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$6(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

var _getNative = getNative$6;

var getNative$5 = _getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate$4 = getNative$5(Object, 'create');

var _nativeCreate = nativeCreate$4;

var nativeCreate$3 = _nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}

var _hashClear = hashClear$1;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete$1;

var nativeCreate$2 = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? undefined : result;
  }
  return hasOwnProperty$6.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet$1;

var nativeCreate$1 = _nativeCreate;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$5.call(data, key);
}

var _hashHas = hashHas$1;

var nativeCreate = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet$1;

var hashClear = _hashClear,
    hashDelete = _hashDelete,
    hashGet = _hashGet,
    hashHas = _hashHas,
    hashSet = _hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash$1.prototype.clear = hashClear;
Hash$1.prototype['delete'] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;

var _Hash = Hash$1;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */

function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear$1;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq$2(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq$2;

var eq$1 = eq_1;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf$4;

var assocIndexOf$3 = _assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete$1(key) {
  var data = this.__data__,
      index = assocIndexOf$3(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete$1;

var assocIndexOf$2 = _assocIndexOf;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet$1(key) {
  var data = this.__data__,
      index = assocIndexOf$2(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet$1;

var assocIndexOf$1 = _assocIndexOf;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas$1;

var assocIndexOf = _assocIndexOf;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet$1;

var listCacheClear = _listCacheClear,
    listCacheDelete = _listCacheDelete,
    listCacheGet = _listCacheGet,
    listCacheHas = _listCacheHas,
    listCacheSet = _listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache$4(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype['delete'] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;

var _ListCache = ListCache$4;

var getNative$4 = _getNative,
    root$5 = _root;

/* Built-in method references that are verified to be native. */
var Map$3 = getNative$4(root$5, 'Map');

var _Map = Map$3;

var Hash = _Hash,
    ListCache$3 = _ListCache,
    Map$2 = _Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$2 || ListCache$3),
    'string': new Hash
  };
}

var _mapCacheClear = mapCacheClear$1;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */

function isKeyable$1(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable$1;

var isKeyable = _isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData$4;

var getMapData$3 = _getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete$1;

var getMapData$2 = _getMapData;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}

var _mapCacheGet = mapCacheGet$1;

var getMapData$1 = _getMapData;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}

var _mapCacheHas = mapCacheHas$1;

var getMapData = _getMapData;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet$1;

var mapCacheClear = _mapCacheClear,
    mapCacheDelete = _mapCacheDelete,
    mapCacheGet = _mapCacheGet,
    mapCacheHas = _mapCacheHas,
    mapCacheSet = _mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache$3(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype['delete'] = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;

var _MapCache = MapCache$3;

var MapCache$2 = _MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize$1(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache$2);
  return memoized;
}

// Expose `MapCache`.
memoize$1.Cache = MapCache$2;

var memoize_1 = memoize$1;

var memoize = memoize_1;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped$1;

var memoizeCapped = _memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath$1;

var Symbol$1 = _Symbol,
    arrayMap$1 = _arrayMap,
    isArray$8 = isArray_1,
    isSymbol$2 = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString$1(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray$8(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap$1(value, baseToString$1) + '';
  }
  if (isSymbol$2(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _baseToString = baseToString$1;

var baseToString = _baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$1(value) {
  return value == null ? '' : baseToString(value);
}

var toString_1 = toString$1;

var isArray$7 = isArray_1,
    isKey$2 = _isKey,
    stringToPath = _stringToPath,
    toString = toString_1;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath$2(value, object) {
  if (isArray$7(value)) {
    return value;
  }
  return isKey$2(value, object) ? [value] : stringToPath(toString(value));
}

var _castPath = castPath$2;

var isSymbol$1 = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey$4(value) {
  if (typeof value == 'string' || isSymbol$1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _toKey = toKey$4;

var castPath$1 = _castPath,
    toKey$3 = _toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet$3(object, path) {
  path = castPath$1(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey$3(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet$3;

var ListCache$2 = _ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear$1() {
  this.__data__ = new ListCache$2;
  this.size = 0;
}

var _stackClear = stackClear$1;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function stackDelete$1(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete$1;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function stackGet$1(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet$1;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function stackHas$1(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas$1;

var ListCache$1 = _ListCache,
    Map$1 = _Map,
    MapCache$1 = _MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$1 || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$1(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet$1;

var ListCache = _ListCache,
    stackClear = _stackClear,
    stackDelete = _stackDelete,
    stackGet = _stackGet,
    stackHas = _stackHas,
    stackSet = _stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack$2(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack$2.prototype.clear = stackClear;
Stack$2.prototype['delete'] = stackDelete;
Stack$2.prototype.get = stackGet;
Stack$2.prototype.has = stackHas;
Stack$2.prototype.set = stackSet;

var _Stack = Stack$2;

/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

var _setCacheAdd = setCacheAdd$1;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */

function setCacheHas$1(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas$1;

var MapCache = _MapCache,
    setCacheAdd = _setCacheAdd,
    setCacheHas = _setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache$1(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;

var _SetCache = SetCache$1;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */

function arraySome$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome$1;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function cacheHas$1(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas$1;

var SetCache = _SetCache,
    arraySome = _arraySome,
    cacheHas = _cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG$3) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays$2;

var root$4 = _root;

/** Built-in value references. */
var Uint8Array$2 = root$4.Uint8Array;

var _Uint8Array = Uint8Array$2;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */

function mapToArray$1(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray$1;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */

function setToArray$1(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray$1;

var Symbol = _Symbol,
    Uint8Array$1 = _Uint8Array,
    eq = eq_1,
    equalArrays$1 = _equalArrays,
    mapToArray = _mapToArray,
    setToArray = _setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    mapTag$2 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$2 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$2:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$1:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;

    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag$1:
      return object.name == other.name && object.message == other.message;

    case regexpTag$1:
    case stringTag$1:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$2:
      var convert = mapToArray;

    case setTag$2:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag$1;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */

function arrayPush$1(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush$1;

var arrayPush = _arrayPush,
    isArray$6 = isArray_1;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$6(object) ? result : arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys$1;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */

function arrayFilter$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter$1;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */

function stubArray$1() {
  return [];
}

var stubArray_1 = stubArray$1;

var arrayFilter = _arrayFilter,
    stubArray = stubArray_1;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

var _getSymbols = getSymbols$1;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */

function baseTimes$1(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes$1;

var baseGetTag$2 = _baseGetTag,
    isObjectLike$3 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments$1(value) {
  return isObjectLike$3(value) && baseGetTag$2(value) == argsTag$2;
}

var _baseIsArguments = baseIsArguments$1;

var baseIsArguments = _baseIsArguments,
    isObjectLike$2 = isObjectLike_1;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments$2 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike$2(value) && hasOwnProperty$4.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments$2;

var isBuffer$2 = {exports: {}};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */

function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

(function (module, exports) {
	var root = _root,
	    stubFalse = stubFalse_1;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;
} (isBuffer$2, isBuffer$2.exports));

/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex$2(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex$2;

/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength$3(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength$3;

var baseGetTag$1 = _baseGetTag,
    isLength$2 = isLength_1,
    isObjectLike$1 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag$1 = '[object Map]',
    numberTag = '[object Number]',
    objectTag$2 = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag = '[object String]',
    weakMapTag$1 = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag$1] = typedArrayTags[numberTag] =
typedArrayTags[objectTag$2] = typedArrayTags[regexpTag] =
typedArrayTags[setTag$1] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag$1] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray$1(value) {
  return isObjectLike$1(value) &&
    isLength$2(value.length) && !!typedArrayTags[baseGetTag$1(value)];
}

var _baseIsTypedArray = baseIsTypedArray$1;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */

function baseUnary$2(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary$2;

var _nodeUtil = {exports: {}};

(function (module, exports) {
	var freeGlobal = _freeGlobal;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;
} (_nodeUtil, _nodeUtil.exports));

var baseIsTypedArray = _baseIsTypedArray,
    baseUnary$1 = _baseUnary,
    nodeUtil = _nodeUtil.exports;

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray$2 = nodeIsTypedArray ? baseUnary$1(nodeIsTypedArray) : baseIsTypedArray;

var isTypedArray_1 = isTypedArray$2;

var baseTimes = _baseTimes,
    isArguments$1 = isArguments_1,
    isArray$5 = isArray_1,
    isBuffer$1 = isBuffer$2.exports,
    isIndex$1 = _isIndex,
    isTypedArray$1 = isTypedArray_1;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray$5(value),
      isArg = !isArr && isArguments$1(value),
      isBuff = !isArr && !isArg && isBuffer$1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex$1(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys$1;

/** Used for built-in method references. */

var objectProto$3 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype$1(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$3;

  return value === proto;
}

var _isPrototype = isPrototype$1;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */

function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg$1;

var overArg = _overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys$1 = overArg(Object.keys, Object);

var _nativeKeys = nativeKeys$1;

var isPrototype = _isPrototype,
    nativeKeys = _nativeKeys;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys$1(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$2.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys$1;

var isFunction = isFunction_1,
    isLength$1 = isLength_1;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike$3(value) {
  return value != null && isLength$1(value.length) && !isFunction(value);
}

var isArrayLike_1 = isArrayLike$3;

var arrayLikeKeys = _arrayLikeKeys,
    baseKeys = _baseKeys,
    isArrayLike$2 = isArrayLike_1;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys$3(object) {
  return isArrayLike$2(object) ? arrayLikeKeys(object) : baseKeys(object);
}

var keys_1 = keys$3;

var baseGetAllKeys = _baseGetAllKeys,
    getSymbols = _getSymbols,
    keys$2 = keys_1;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys$1(object) {
  return baseGetAllKeys(object, keys$2, getSymbols);
}

var _getAllKeys = getAllKeys$1;

var getAllKeys = _getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects$1;

var getNative$3 = _getNative,
    root$3 = _root;

/* Built-in method references that are verified to be native. */
var DataView$1 = getNative$3(root$3, 'DataView');

var _DataView = DataView$1;

var getNative$2 = _getNative,
    root$2 = _root;

/* Built-in method references that are verified to be native. */
var Promise$2 = getNative$2(root$2, 'Promise');

var _Promise = Promise$2;

var getNative$1 = _getNative,
    root$1 = _root;

/* Built-in method references that are verified to be native. */
var Set$1 = getNative$1(root$1, 'Set');

var _Set = Set$1;

var getNative = _getNative,
    root = _root;

/* Built-in method references that are verified to be native. */
var WeakMap$1 = getNative(root, 'WeakMap');

var _WeakMap = WeakMap$1;

var DataView = _DataView,
    Map = _Map,
    Promise$1 = _Promise,
    Set = _Set,
    WeakMap = _WeakMap,
    baseGetTag = _baseGetTag,
    toSource = _toSource;

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag$1 = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag$1(new Map) != mapTag) ||
    (Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag) ||
    (Set && getTag$1(new Set) != setTag) ||
    (WeakMap && getTag$1(new WeakMap) != weakMapTag)) {
  getTag$1 = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

var _getTag = getTag$1;

var Stack$1 = _Stack,
    equalArrays = _equalArrays,
    equalByTag = _equalByTag,
    equalObjects = _equalObjects,
    getTag = _getTag,
    isArray$4 = isArray_1,
    isBuffer = isBuffer$2.exports,
    isTypedArray = isTypedArray_1;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$4(object),
      othIsArr = isArray$4(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$1);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack$1);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$1);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep$1;

var baseIsEqualDeep = _baseIsEqualDeep,
    isObjectLike = isObjectLike_1;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual$2(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$2, stack);
}

var _baseIsEqual = baseIsEqual$2;

var Stack = _Stack,
    baseIsEqual$1 = _baseIsEqual;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch$1(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch$1;

var isObject = isObject_1;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable$2(value) {
  return value === value && !isObject(value);
}

var _isStrictComparable = isStrictComparable$2;

var isStrictComparable$1 = _isStrictComparable,
    keys$1 = keys_1;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData$1(object) {
  var result = keys$1(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable$1(value)];
  }
  return result;
}

var _getMatchData = getMatchData$1;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */

function matchesStrictComparable$2(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable$2;

var baseIsMatch = _baseIsMatch,
    getMatchData = _getMatchData,
    matchesStrictComparable$1 = _matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches$1;

var baseGet$2 = _baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get$1(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet$2(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get$1;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */

function baseHasIn$1(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn$1;

var castPath = _castPath,
    isArguments = isArguments_1,
    isArray$3 = isArray_1,
    isIndex = _isIndex,
    isLength = isLength_1,
    toKey$2 = _toKey;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath$1(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey$2(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray$3(object) || isArguments(object));
}

var _hasPath = hasPath$1;

var baseHasIn = _baseHasIn,
    hasPath = _hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn$1(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

var hasIn_1 = hasIn$1;

var baseIsEqual = _baseIsEqual,
    get = get_1,
    hasIn = hasIn_1,
    isKey$1 = _isKey,
    isStrictComparable = _isStrictComparable,
    matchesStrictComparable = _matchesStrictComparable,
    toKey$1 = _toKey;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$1(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$1(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

var _baseMatchesProperty = baseMatchesProperty$1;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */

function identity$2(value) {
  return value;
}

var identity_1 = identity$2;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */

function baseProperty$1(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty$1;

var baseGet$1 = _baseGet;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep$1(path) {
  return function(object) {
    return baseGet$1(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep$1;

var baseProperty = _baseProperty,
    basePropertyDeep = _basePropertyDeep,
    isKey = _isKey,
    toKey = _toKey;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property$1(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

var property_1 = property$1;

var baseMatches = _baseMatches,
    baseMatchesProperty = _baseMatchesProperty,
    identity$1 = identity_1,
    isArray$2 = isArray_1,
    property = property_1;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee$1(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity$1;
  }
  if (typeof value == 'object') {
    return isArray$2(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

var _baseIteratee = baseIteratee$1;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */

function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor$1;

var createBaseFor = _createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor$1 = createBaseFor();

var _baseFor = baseFor$1;

var baseFor = _baseFor,
    keys = keys_1;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn$1(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

var _baseForOwn = baseForOwn$1;

var isArrayLike$1 = isArrayLike_1;

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach$1(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike$1(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach$1;

var baseForOwn = _baseForOwn,
    createBaseEach = _createBaseEach;

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach$1 = createBaseEach(baseForOwn);

var _baseEach = baseEach$1;

var baseEach = _baseEach,
    isArrayLike = isArrayLike_1;

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap$1(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

var _baseMap = baseMap$1;

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */

function baseSortBy$1(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

var _baseSortBy = baseSortBy$1;

var isSymbol = isSymbol_1;

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending$1(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

var _compareAscending = compareAscending$1;

var compareAscending = _compareAscending;

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple$1(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

var _compareMultiple = compareMultiple$1;

var arrayMap = _arrayMap,
    baseGet = _baseGet,
    baseIteratee = _baseIteratee,
    baseMap = _baseMap,
    baseSortBy = _baseSortBy,
    baseUnary = _baseUnary,
    compareMultiple = _compareMultiple,
    identity = identity_1,
    isArray$1 = isArray_1;

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy$1(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray$1(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

var _baseOrderBy = baseOrderBy$1;

var baseOrderBy = _baseOrderBy,
    isArray = isArray_1;

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy(collection, iteratees, orders);
}

var orderBy_1 = orderBy;

const STAGE_ID = '__node_editor_stage__';
const DRAG_CONNECTION_ID = '__node_editor_drag_connection__';
const CONNECTIONS_ID = '__node_editor_connections__';

var _jsxFileName$c = "/workspaces/flumeapi/src/components/Stage/Stage.js";

const Stage = ({
  scale,
  translate,
  editorId,
  dispatchStageState,
  children,
  outerStageChildren,
  numNodes,
  stageRef,
  spaceToPan,
  dispatchComments,
  disableComments,
  disablePan,
  disableZoom
}) => {
  const nodeTypes = React__default["default"].useContext(NodeTypesContext);
  const dispatchNodes = React__default["default"].useContext(NodeDispatchContext);
  const wrapper = React__default["default"].useRef();
  const translateWrapper = React__default["default"].useRef();
  const [menuOpen, setMenuOpen] = React__default["default"].useState(false);
  const [menuCoordinates, setMenuCoordinates] = React__default["default"].useState({
    x: 0,
    y: 0
  });
  const dragData = React__default["default"].useRef({
    x: 0,
    y: 0
  });
  const [spaceIsPressed, setSpaceIsPressed] = React__default["default"].useState(false);
  const uiEvents = React__default["default"].useContext(UIEventsContext);
  const setStageRect = React__default["default"].useCallback(() => {
    stageRef.current = wrapper.current.getBoundingClientRect();
  }, []);
  React__default["default"].useEffect(() => {
    stageRef.current = wrapper.current.getBoundingClientRect();
    window.addEventListener("resize", setStageRect);
    return () => {
      window.removeEventListener("resize", setStageRect);
    };
  }, [stageRef, setStageRect]);
  const handleWheel = React__default["default"].useCallback(e => {
    if (e.target.nodeName === "TEXTAREA" || e.target.dataset.comment) {
      if (e.target.clientHeight < e.target.scrollHeight) return;
    }

    e.preventDefault();
    if (numNodes === 0) return;
    dispatchStageState(({
      scale: currentScale,
      translate: currentTranslate
    }) => {
      const delta = e.deltaY;
      const newScale = clamp_1(currentScale - clamp_1(delta, -10, 10) * 0.005, 0.1, 7);

      const byOldScale = no => no * (1 / currentScale);

      const byNewScale = no => no * (1 / newScale);

      const wrapperRect = wrapper.current.getBoundingClientRect();
      const xOld = byOldScale(e.clientX - wrapperRect.x - wrapperRect.width / 2 + currentTranslate.x);
      const yOld = byOldScale(e.clientY - wrapperRect.y - wrapperRect.height / 2 + currentTranslate.y);
      const xNew = byNewScale(e.clientX - wrapperRect.x - wrapperRect.width / 2 + currentTranslate.x);
      const yNew = byNewScale(e.clientY - wrapperRect.y - wrapperRect.height / 2 + currentTranslate.y);
      const xDistance = xOld - xNew;
      const yDistance = yOld - yNew;
      return {
        type: "SET_TRANSLATE_SCALE",
        scale: newScale,
        translate: {
          x: currentTranslate.x + xDistance * newScale,
          y: currentTranslate.y + yDistance * newScale
        }
      };
    });
  }, [dispatchStageState, numNodes]);

  const handleDragDelayStart = e => {
    wrapper.current.focus();
  };

  const handleDragStart = e => {
    uiEvents.onStageClick && uiEvents.onStageClick(e);
    e.preventDefault();
    dragData.current = {
      x: e.clientX,
      y: e.clientY
    };
  };

  const handleMouseDrag = (coords, e) => {
    const xDistance = dragData.current.x - e.clientX;
    const yDistance = dragData.current.y - e.clientY;
    const xDelta = translate.x + xDistance;
    const yDelta = translate.y + yDistance;
    wrapper.current.style.backgroundPosition = `${-xDelta}px ${-yDelta}px`;
    translateWrapper.current.style.transform = `translate(${-(translate.x + xDistance)}px, ${-(translate.y + yDistance)}px)`;
  };

  const handleDragEnd = e => {
    const xDistance = dragData.current.x - e.clientX;
    const yDistance = dragData.current.y - e.clientY;
    dragData.current.x = e.clientX;
    dragData.current.y = e.clientY;
    dispatchStageState(({
      translate: tran
    }) => ({
      type: "SET_TRANSLATE",
      translate: {
        x: tran.x + xDistance,
        y: tran.y + yDistance
      }
    }));
  };

  const handleContextMenu = e => {
    e.preventDefault();
    setMenuCoordinates({
      x: e.clientX,
      y: e.clientY
    });
    setMenuOpen(true);
    return false;
  };

  const closeContextMenu = () => {
    setMenuOpen(false);
  };

  const byScale = value => 1 / scale * value;

  const addNode = ({
    node,
    internalType
  }) => {
    const wrapperRect = wrapper.current.getBoundingClientRect();
    const x = byScale(menuCoordinates.x - wrapperRect.x - wrapperRect.width / 2) + byScale(translate.x);
    const y = byScale(menuCoordinates.y - wrapperRect.y - wrapperRect.height / 2) + byScale(translate.y);

    if (internalType === "comment") {
      dispatchComments({
        type: "ADD_COMMENT",
        x,
        y
      });
    } else {
      if (uiEvents.addNodeRequest) {
        uiEvents.addNodeRequest(node.type, x, y);
      } else {
        dispatchNodes({
          type: "ADD_NODE",
          x,
          y,
          nodeType: node.type
        });
      }
    }
  };

  const handleDocumentKeyUp = e => {
    if (e.which === 32) {
      setSpaceIsPressed(false);
      document.removeEventListener("keyup", handleDocumentKeyUp);
    }
  };

  const handleKeyDown = e => {
    if (e.which === 32 && document.activeElement === wrapper.current) {
      e.preventDefault();
      e.stopPropagation();
      setSpaceIsPressed(true);
      document.addEventListener("keyup", handleDocumentKeyUp);
    }
  };

  const handleMouseEnter = () => {
    if (!wrapper.current.contains(document.activeElement)) {
      wrapper.current.focus();
    }
  };

  React__default["default"].useEffect(() => {
    if (!disableZoom) {
      let stageWrapper = wrapper.current;
      stageWrapper.addEventListener("wheel", handleWheel);
      return () => {
        stageWrapper.removeEventListener("wheel", handleWheel);
      };
    }
  }, [handleWheel, disableZoom]);
  const menuOptions = React__default["default"].useMemo(() => {
    const options = orderBy_1(Object.values(nodeTypes).filter(node => node.addable !== false).map(node => ({
      value: node.type,
      label: node.label,
      description: node.description,
      sortIndex: node.sortIndex,
      node
    })), ["sortIndex", "label"]);

    if (!disableComments) {
      options.push({
        value: "comment",
        label: "Comment",
        description: "A comment for documenting nodes",
        internalType: "comment"
      });
    }

    return options;
  }, [nodeTypes, disableComments]);
  return /*#__PURE__*/React__default["default"].createElement(Draggable, {
    "data-flume-component": "stage",
    "data-testid": "stage",
    id: `${STAGE_ID}${editorId}`,
    className: styles$d.wrapper,
    innerRef: wrapper,
    onContextMenu: handleContextMenu,
    onMouseEnter: handleMouseEnter,
    onDragDelayStart: handleDragDelayStart,
    onDragStart: handleDragStart,
    onDrag: handleMouseDrag,
    onDragEnd: handleDragEnd,
    onKeyDown: handleKeyDown,
    tabIndex: -1,
    stageState: {
      scale,
      translate
    },
    style: {
      cursor: spaceIsPressed && spaceToPan ? "grab" : ""
    },
    disabled: disablePan || spaceToPan && !spaceIsPressed,
    "data-flume-stage": true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$c,
      lineNumber: 222,
      columnNumber: 5
    }
  }, menuOpen ? /*#__PURE__*/React__default["default"].createElement(Portal$1, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$c,
      lineNumber: 242,
      columnNumber: 9
    }
  }, /*#__PURE__*/React__default["default"].createElement(ContextMenu, {
    x: menuCoordinates.x,
    y: menuCoordinates.y,
    options: menuOptions,
    onRequestClose: closeContextMenu,
    onOptionSelected: addNode,
    label: "Add Node",
    __self: undefined,
    __source: {
      fileName: _jsxFileName$c,
      lineNumber: 243,
      columnNumber: 11
    }
  })) : null, /*#__PURE__*/React__default["default"].createElement("div", {
    ref: translateWrapper,
    className: styles$d.transformWrapper,
    style: {
      transform: `translate(${-translate.x}px, ${-translate.y}px)`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName$c,
      lineNumber: 253,
      columnNumber: 7
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$d.scaleWrapper,
    style: {
      transform: `scale(${scale})`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName$c,
      lineNumber: 258,
      columnNumber: 9
    }
  }, children)), outerStageChildren);
};

var css_248z$b = ".Node_wrapper__S8Vij{\n  background: rgba(91, 96, 99, 0.9);\n  border-radius: 5px;\n  box-shadow: 0px 4px 8px rgba(0,0,0,.4);\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  user-select: none;\n  display: flex;\n  flex-direction: column;\n  z-index: 1;\n  cursor: default;\n}\n.Node_label__v7h4v{\n  font-size: 13px;\n  text-transform: uppercase;\n  padding: 5px;\n  background: #464b4e;\n  border-radius: 5px 5px 0px 0px;\n  margin: 0px;\n  margin-bottom: 3px;\n  border-bottom: 1px solid rgba(0,0,0,.15);\n}\n";
var styles$b = {"wrapper":"Node_wrapper__S8Vij","label":"Node_label__v7h4v"};
styleInject(css_248z$b);

var css_248z$a = ".Connection_svg__dY13y{\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  pointer-events: none;\n  z-index: 0;\n  overflow: visible !important;\n}\n";
var styles$a = {"svg":"Connection_svg__dY13y"};
styleInject(css_248z$a);

var pi = Math.PI,
    tau = 2 * pi,
    epsilon$1 = 1e-6,
    tauEpsilon = tau - epsilon$1;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon$1));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$1) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon$1) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon$1 || Math.abs(this._y1 - y0) > epsilon$1) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon$1) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

function constant(x) {
  return function constant() {
    return x;
  };
}

const epsilon = 1e-12;

function array(x) {
  return typeof x === "object" && "length" in x
    ? x // Array, TypedArray, NodeList, array-like
    : Array.from(x); // Map, Set, iterable, string, or anything else
}

function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // falls through
      default: this._context.lineTo(x, y); break;
    }
  }
};

function curveLinear(context) {
  return new Linear(context);
}

function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}

function line(x$1, y$1) {
  var defined = constant(true),
      context = null,
      curve = curveLinear,
      output = null;

  x$1 = typeof x$1 === "function" ? x$1 : (x$1 === undefined) ? x : constant(x$1);
  y$1 = typeof y$1 === "function" ? y$1 : (y$1 === undefined) ? y : constant(y$1);

  function line(data) {
    var i,
        n = (data = array(data)).length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x$1(d, i, data), +y$1(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant(+_), line) : x$1;
  };

  line.y = function(_) {
    return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant(+_), line) : y$1;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
}

function noop() {}

function point$3(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point$3(this, this._x1, this._y1); // falls through
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // falls through
      default: point$3(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function curveBasis(context) {
  return new Basis(context);
}

function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

((function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
}))(0.85);

function point$2(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point$2(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // falls through
      default: point$2(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

((function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
}))(0);

function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: point$2(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

((function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
}))(0);

function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // falls through
      default: point$2(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

((function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
}))(0);

function point$1(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > epsilon) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > epsilon) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // falls through
      default: point$1(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
}))(0.5);

function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: point$1(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
}))(0.5);

function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // falls through
      default: point$1(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
}))(0.5);

function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
};

(Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

const getPort = (nodeId, portName, transputType = "input") => document.querySelector(`[data-node-id="${nodeId}"] [data-port-name="${portName}"][data-port-transput-type="${transputType}"]`);

const getPortRect = (nodeId, portName, transputType = "input", cache) => {
  if (cache) {
    const portCacheName = nodeId + portName + transputType;
    const cachedPort = cache.current.ports[portCacheName];

    if (cachedPort) {
      return cachedPort.getBoundingClientRect();
    } else {
      const port = getPort(nodeId, portName, transputType);
      cache.current.ports[portCacheName] = port;
      return port && port.getBoundingClientRect();
    }
  } else {
    const port = getPort(nodeId, portName, transputType);
    return port && port.getBoundingClientRect();
  }
};
const calculateCurve = (from, to) => {
  const length = to.x - from.x;
  const thirdLength = length / 3;
  const curve = line().curve(curveBasis)([[from.x, from.y], [from.x + thirdLength, from.y], [from.x + thirdLength * 2, to.y], [to.x, to.y]]);
  return curve;
};
const deleteConnection = ({
  id
}) => {
  const line = document.querySelector(`[data-connection-id="${id}"]`);
  if (line) line.parentNode.remove();
};
const deleteConnectionsByNodeId = nodeId => {
  const lines = document.querySelectorAll(`[data-output-node-id="${nodeId}"], [data-input-node-id="${nodeId}"]`);

  for (const line of lines) {
    line.parentNode.remove();
  }
};
const updateConnection = ({
  line,
  from,
  to
}) => {
  line.setAttribute("d", calculateCurve(from, to));
};
const createSVG = ({
  from,
  to,
  stage,
  id,
  outputNodeId,
  outputPortName,
  inputNodeId,
  inputPortName
}) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", styles$a.svg);
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const curve = calculateCurve(from, to);
  path.setAttribute("d", curve);
  path.setAttribute("stroke", "rgb(185, 186, 189)");
  path.setAttribute("stroke-width", "3");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("fill", "none");
  path.setAttribute("data-connection-id", id);
  path.setAttribute("data-output-node-id", outputNodeId);
  path.setAttribute("data-output-port-name", outputPortName);
  path.setAttribute("data-input-node-id", inputNodeId);
  path.setAttribute("data-input-port-name", inputPortName);
  svg.appendChild(path);
  stage.appendChild(svg);
  return svg;
};
const getStageRef = editorId => document.getElementById(`${CONNECTIONS_ID}${editorId}`);
const createConnections = (nodes, {
  scale,
  stageId
}, editorId) => {
  const stageRef = getStageRef(editorId);

  if (stageRef) {
    const stage = stageRef.getBoundingClientRect();
    const stageHalfWidth = stage.width / 2;
    const stageHalfHeight = stage.height / 2;

    const byScale = value => 1 / scale * value;

    Object.values(nodes).forEach(node => {
      if (node.connections && node.connections.inputs) {
        Object.entries(node.connections.inputs).forEach(([inputName, outputs], k) => {
          outputs.forEach(output => {
            const fromPort = getPortRect(output.nodeId, output.portName, "output");
            const toPort = getPortRect(node.id, inputName, "input");
            const portHalf = fromPort ? fromPort.width / 2 : 0;

            if (fromPort && toPort) {
              const id = output.nodeId + output.portName + node.id + inputName;
              const existingLine = document.querySelector(`[data-connection-id="${id}"]`);

              if (existingLine) {
                updateConnection({
                  line: existingLine,
                  from: {
                    x: byScale(fromPort.x - stage.x + portHalf - stageHalfWidth),
                    y: byScale(fromPort.y - stage.y + portHalf - stageHalfHeight)
                  },
                  to: {
                    x: byScale(toPort.x - stage.x + portHalf - stageHalfWidth),
                    y: byScale(toPort.y - stage.y + portHalf - stageHalfHeight)
                  }
                });
              } else {
                createSVG({
                  id,
                  outputNodeId: output.nodeId,
                  outputPortName: output.portName,
                  inputNodeId: node.id,
                  inputPortName: inputName,
                  from: {
                    x: byScale(fromPort.x - stage.x + portHalf - stageHalfWidth),
                    y: byScale(fromPort.y - stage.y + portHalf - stageHalfHeight)
                  },
                  to: {
                    x: byScale(toPort.x - stage.x + portHalf - stageHalfWidth),
                    y: byScale(toPort.y - stage.y + portHalf - stageHalfHeight)
                  },
                  stage: stageRef
                });
              }
            }
          });
        });
      }
    });
  }
};

var css_248z$9 = ".IoPorts_wrapper__4jboF{\n  display: flex;\n  flex-direction: column;\n  margin-top: auto;\n  width: 100%;\n  padding: 5px;\n}\n.IoPorts_inputs__M7xAH{\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.IoPorts_inputs__M7xAH:last-child{\n    margin-bottom: 0px;\n  }\n.IoPorts_inputs__M7xAH .IoPorts_transput__5JT3i:first-child .IoPorts_portLabel__XY5gi, .IoPorts_inputs__M7xAH .IoPorts_transput__5JT3i:first-child .IoPorts_port__ZC6Mw{\n        margin-top: 5px;\n      }\n.IoPorts_inputs__M7xAH .IoPorts_transput__5JT3i:last-child .IoPorts_portLabel__XY5gi, .IoPorts_inputs__M7xAH .IoPorts_transput__5JT3i:last-child .IoPorts_port__ZC6Mw{\n        margin-bottom: 5px;\n      }\n.IoPorts_outputs__hqc88{\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  justify-content: flex-end;\n  align-items: flex-end;\n  width: 100%;\n}\n.IoPorts_outputs__hqc88 .IoPorts_transput__5JT3i:last-child .IoPorts_portLabel__XY5gi, .IoPorts_outputs__hqc88 .IoPorts_transput__5JT3i:last-child .IoPorts_port__ZC6Mw{\n        margin-bottom: 5px;\n      }\n.IoPorts_outputs__hqc88:first-child{\n    margin-top: 5px;\n  }\n.IoPorts_transput__5JT3i{\n  display: flex;\n  align-items: center;\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n.IoPorts_transput__5JT3i:first-child{\n    margin-top: 0px;\n  }\n.IoPorts_transput__5JT3i[data-controlless=\"true\"]{\n    margin-top: 6px;\n    margin-bottom: 6px;\n  }\n.IoPorts_transput__5JT3i[data-controlless=\"true\"]:first-child{\n      margin-top: 0px;\n    }\n.IoPorts_transput__5JT3i[data-controlless=\"false\"]{\n    margin-top: 2px;\n    margin-bottom: 2px;\n  }\n.IoPorts_controls__J4rPJ{\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.IoPorts_portLabel__XY5gi{\n  font-size: 13px;\n  font-weight: 400;\n}\n.IoPorts_port__ZC6Mw{\n  width: 12px;\n  height: 12px;\n  background: linear-gradient(to bottom, #acb1b4, #919699);\n  border-radius: 100%;\n  margin-right: 5px;\n  margin-left: -11px;\n  flex: 0 0 auto;\n  box-shadow: 0px 2px 1px 0px rgba(0,0,0,.6);\n}\n.IoPorts_port__ZC6Mw:last-child{\n    margin-right: -11px;\n    margin-left: 5px;\n  }\n.IoPorts_port__ZC6Mw[data-port-color=\"red\"]{\n    background: linear-gradient(to bottom, #fa4a6f, #c22e4d);\n  }\n.IoPorts_port__ZC6Mw[data-port-color=\"purple\"]{\n    background: linear-gradient(to bottom, #9e55fb, #6024b6);\n  }\n.IoPorts_port__ZC6Mw[data-port-color=\"blue\"]{\n    background: linear-gradient(to bottom, #4284f7, #2867d4);\n  }\n.IoPorts_port__ZC6Mw[data-port-color=\"green\"]{\n    background: linear-gradient(to bottom, #31dd9f, #11ad7a);\n  }\n.IoPorts_port__ZC6Mw[data-port-color=\"yellow\"]{\n    background: linear-gradient(to bottom, #d6bf47, #9d8923);\n  }\n.IoPorts_port__ZC6Mw[data-port-color=\"orange\"]{\n    background: linear-gradient(to bottom, #fa7841, #c94b23);\n  }\n.IoPorts_port__ZC6Mw[data-port-color=\"pink\"]{\n    background: linear-gradient(to bottom, #fe8aeb, #e046c3);\n  }\n";
var styles$9 = {"wrapper":"IoPorts_wrapper__4jboF","inputs":"IoPorts_inputs__M7xAH","transput":"IoPorts_transput__5JT3i","portLabel":"IoPorts_portLabel__XY5gi","port":"IoPorts_port__ZC6Mw","outputs":"IoPorts_outputs__hqc88","controls":"IoPorts_controls__J4rPJ"};
styleInject(css_248z$9);

var css_248z$8 = ".Control_wrapper__-SFsk {\n  width: 100%;\n  padding-right: 3px;\n  padding-top: 3px;\n  padding-bottom: 5px;\n}\n.Control_label__KZtDp {\n  font-size: 14px;\n}\n.Control_controlLabel__4z-U8 {\n  font-size: 13px;\n  display: inline-block;\n  margin-left: 2px;\n}\n";
var styles$8 = {"wrapper":"Control_wrapper__-SFsk","label":"Control_label__KZtDp","controlLabel":"Control_controlLabel__4z-U8"};
styleInject(css_248z$8);

var css_248z$7 = ".Checkbox_wrapper__KYSY7{\n  display: flex;\n  align-items: center;\n}\n.Checkbox_checkbox__-WxSv{\n  background: linear-gradient(to bottom, #5b5f62, #6f7477);\n  border: 1px solid #3c3e40;\n  border-radius: 4px;\n  margin-right: 8px;\n}\n.Checkbox_label__z44oI{\n  padding-top: 2px;\n  font-size: 13px;\n}\n";
var styles$7 = {"wrapper":"Checkbox_wrapper__KYSY7","checkbox":"Checkbox_checkbox__-WxSv","label":"Checkbox_label__z44oI"};
styleInject(css_248z$7);

var _jsxFileName$b = "/workspaces/flumeapi/src/components/Checkbox/Checkbox.js";

const Checkbox = ({
  label,
  data,
  onChange
}) => {
  const id = React__default["default"].useRef(nanoid(10));
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$7.wrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$b,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    "data-flume-component": "checkbox",
    className: styles$7.checkbox,
    type: "checkbox",
    id: id,
    value: data,
    checked: data,
    onChange: e => onChange(e.target.checked),
    __self: undefined,
    __source: {
      fileName: _jsxFileName$b,
      lineNumber: 10,
      columnNumber: 7
    }
  }), /*#__PURE__*/React__default["default"].createElement("label", {
    "data-flume-component": "checkbox-label",
    className: styles$7.label,
    htmlFor: id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$b,
      lineNumber: 19,
      columnNumber: 7
    }
  }, label));
};

var css_248z$6 = ".TextInput_wrapper__9lufS{\n  background: none;\n  border: none;\n}\n.TextInput_input__EPXF0{\n  background: linear-gradient(to bottom, #5b5f62, #6f7477);\n  width: 100%;\n  border: 1px solid #3c3e40;\n  border-radius: 4px;\n  font-size: 13px;\n  padding: 5px;\n  resize: vertical;\n  outline: none;\n}\n.TextInput_input__EPXF0::placeholder{\n    color: rgb(47, 49, 50);\n  }\n.TextInput_input__EPXF0:focus{\n    background: linear-gradient(to bottom, #676b6e, #75797c);\n  }\n";
var styles$6 = {"wrapper":"TextInput_wrapper__9lufS","input":"TextInput_input__EPXF0"};
styleInject(css_248z$6);

var _jsxFileName$a = "/workspaces/flumeapi/src/components/TextInput/TextInput.js";

const TextInput = ({
  placeholder,
  updateNodeConnections,
  onChange,
  data,
  step,
  type
}) => {
  const numberInput = React__default["default"].useRef();
  const recalculateStageRect = React__default["default"].useContext(RecalculateStageRectContext);

  const handleDragEnd = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleDragEnd);
  };

  const handleMouseMove = e => {
    e.stopPropagation();
    updateNodeConnections();
  };

  const handlePossibleResize = e => {
    e.stopPropagation();
    recalculateStageRect();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleDragEnd);
  };

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$6.wrapper,
    "data-flume-component": "text-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName$a,
      lineNumber: 34,
      columnNumber: 5
    }
  }, type === "number" ? /*#__PURE__*/React__default["default"].createElement("input", {
    "data-flume-component": "text-input-number",
    onKeyDown: e => {
      if (e.keyCode === 69) {
        e.preventDefault();
        return false;
      }
    },
    onChange: e => {
      const inputValue = e.target.value.replace(/e/g, "");

      if (!!inputValue) {
        const value = parseFloat(inputValue, 10);

        if (Number.isNaN(value)) {
          onChange(0);
        } else {
          onChange(value);
          numberInput.current.value = value;
        }
      }
    },
    onBlur: e => {
      if (!e.target.value) {
        onChange(0);
        numberInput.current.value = 0;
      }
    },
    step: step || "1",
    onMouseDown: handlePossibleResize,
    type: type || "text",
    placeholder: placeholder,
    className: styles$6.input,
    defaultValue: data,
    onDragStart: e => e.stopPropagation(),
    ref: numberInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$a,
      lineNumber: 36,
      columnNumber: 9
    }
  }) : /*#__PURE__*/React__default["default"].createElement("textarea", {
    "data-flume-component": "text-input-textarea",
    onChange: e => onChange(e.target.value),
    onMouseDown: handlePossibleResize,
    type: "text",
    placeholder: placeholder,
    className: styles$6.input,
    value: data,
    onDragStart: e => e.stopPropagation(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName$a,
      lineNumber: 72,
      columnNumber: 9
    }
  }));
};

var css_248z$5 = ".Select_wrapper__LU8xp{\n  font-size: 14px;\n  padding: 3px 6px;\n  border-radius: 4px;\n  background: linear-gradient(to top, #5b5f62, #6f7477);\n  width: 100%;\n  border: 1px solid #3c3e40;\n  padding-right: 15px;\n  position: relative;\n}\n  .Select_wrapper__LU8xp::after{\n    content: \"\";\n    position: absolute;\n    background: none;\n    right: 5px;\n    top: 8px;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 6px 5px 0 5px;\n    border-color: #191b1c transparent transparent transparent;\n  }\n  .Select_wrapper__LU8xp:hover{\n    background: linear-gradient(to top, #63676a, #777b7e);\n  }\n.Select_chipWrapper__zZu-R{\n  font-size: 14px;\n  padding: 3px 6px;\n  border-radius: 4px;\n  background: linear-gradient(to top, #5b5f62, #6f7477);\n  border: 1px solid #3c3e40;\n  margin: 2px;\n  position: relative;\n}\n.Select_chipWrapper__zZu-R:hover .Select_deleteButton__K7AfO{\n  opacity: 1;\n}\n.Select_chipsWrapper__3uo8O{\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 6px;\n}\n.Select_deleteButton__K7AfO{\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  height: 100%;\n  width: 22px;\n  padding: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(to top, #5b5f62, #6f7477);\n  border-radius: 3px;\n  border: none;\n  font-weight: bold;\n  opacity: 0;\n}\n.Select_deleteButton__K7AfO:focus{\n  opacity: 1;\n}\n.Select_deleteButton__K7AfO:hover{\n  background: linear-gradient(to top, #64696c, #797f82);\n}\n.Select_selectedWrapper__JsEFo{\n  display: flex;\n  flex-direction: column;\n  border-radius: 4px;\n  background: linear-gradient(to top, #5b5f62, #6f7477);\n  width: 100%;\n  border: 1px solid #3c3e40;\n  font-size: 14px;\n  padding: 3px 6px;\n  padding-right: 15px;\n  position: relative;\n}\n.Select_selectedWrapper__JsEFo::after{\n    content: \"\";\n    position: absolute;\n    background: none;\n    right: 5px;\n    top: calc(50% - 4px);\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 6px 5px 0 5px;\n    border-color: #191b1c transparent transparent transparent;\n  }\n.Select_selectedWrapper__JsEFo label{\n    margin: 0px;\n  }\n.Select_selectedWrapper__JsEFo p{\n    margin: 0px;\n    margin-top: 5px;\n    font-size: 12px;\n    font-style: italic;\n    color: rgb(50, 50, 50);\n  }\n";
var styles$5 = {"wrapper":"Select_wrapper__LU8xp","chipWrapper":"Select_chipWrapper__zZu-R","deleteButton":"Select_deleteButton__K7AfO","chipsWrapper":"Select_chipsWrapper__3uo8O","selectedWrapper":"Select_selectedWrapper__JsEFo"};
styleInject(css_248z$5);

var _jsxFileName$9 = "/workspaces/flumeapi/src/components/Select/Select.js";
const MAX_LABEL_LENGTH = 50;

const Select = ({
  options = [],
  placeholder = "[Select an option]",
  onChange,
  data,
  allowMultiple
}) => {
  const [drawerOpen, setDrawerOpen] = React__default["default"].useState(false);
  const [drawerCoordinates, setDrawerCoordinates] = React__default["default"].useState({
    x: 0,
    y: 0
  });
  const wrapper = React__default["default"].useRef();

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const openDrawer = () => {
    if (!drawerOpen) {
      const wrapperRect = wrapper.current.getBoundingClientRect();
      setDrawerCoordinates({
        x: wrapperRect.x,
        y: wrapperRect.y + wrapperRect.height
      });
      setDrawerOpen(true);
    }
  };

  const handleOptionSelected = option => {
    if (allowMultiple) {
      onChange([...data, option.value]);
    } else {
      onChange(option.value);
    }
  };

  const handleOptionDeleted = optionIndex => {
    onChange([...data.slice(0, optionIndex), ...data.slice(optionIndex + 1)]);
  };

  const getFilteredOptions = () => allowMultiple ? options.filter(opt => !data.includes(opt.value)) : options;

  const selectedOption = React__default["default"].useMemo(() => {
    const option = options.find(o => o.value === data);

    if (option) {
      return { ...option,
        label: option.label.length > MAX_LABEL_LENGTH ? option.label.slice(0, MAX_LABEL_LENGTH) + "..." : option.label
      };
    }
  }, [options, data]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$9,
      lineNumber: 70,
      columnNumber: 5
    }
  }, allowMultiple ? data.length ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$5.chipsWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$9,
      lineNumber: 73,
      columnNumber: 11
    }
  }, data.map((val, i) => {
    const optLabel = (options.find(opt => opt.value === val) || {}).label || "";
    return /*#__PURE__*/React__default["default"].createElement(OptionChip, {
      onRequestDelete: () => handleOptionDeleted(i),
      key: val,
      __self: undefined,
      __source: {
        fileName: _jsxFileName$9,
        lineNumber: 78,
        columnNumber: 17
      }
    }, optLabel);
  })) : null : data ? /*#__PURE__*/React__default["default"].createElement(SelectedOption, {
    wrapperRef: wrapper,
    option: selectedOption,
    onClick: openDrawer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$9,
      lineNumber: 89,
      columnNumber: 9
    }
  }) : null, (allowMultiple || !data) && /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$5.wrapper,
    ref: wrapper,
    onClick: openDrawer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$9,
      lineNumber: 97,
      columnNumber: 9
    }
  }, placeholder), drawerOpen && /*#__PURE__*/React__default["default"].createElement(Portal$1, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$9,
      lineNumber: 102,
      columnNumber: 9
    }
  }, /*#__PURE__*/React__default["default"].createElement(ContextMenu, {
    x: drawerCoordinates.x,
    y: drawerCoordinates.y,
    emptyText: "There are no options",
    options: getFilteredOptions(),
    onOptionSelected: handleOptionSelected,
    onRequestClose: closeDrawer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$9,
      lineNumber: 103,
      columnNumber: 11
    }
  })));
};

const SelectedOption = ({
  option: {
    label,
    description
  } = {},
  wrapperRef,
  onClick
}) => /*#__PURE__*/React__default["default"].createElement("div", {
  className: styles$5.selectedWrapper,
  onClick: onClick,
  ref: wrapperRef,
  "data-flume-component": "select",
  __self: undefined,
  __source: {
    fileName: _jsxFileName$9,
    lineNumber: 124,
    columnNumber: 3
  }
}, /*#__PURE__*/React__default["default"].createElement("label", {
  "data-flume-component": "select-label",
  __self: undefined,
  __source: {
    fileName: _jsxFileName$9,
    lineNumber: 125,
    columnNumber: 5
  }
}, label), description ? /*#__PURE__*/React__default["default"].createElement("p", {
  "data-flume-component": "select-desc",
  __self: undefined,
  __source: {
    fileName: _jsxFileName$9,
    lineNumber: 126,
    columnNumber: 20
  }
}, description) : null);

const OptionChip = ({
  children,
  onRequestDelete
}) => /*#__PURE__*/React__default["default"].createElement("div", {
  className: styles$5.chipWrapper,
  __self: undefined,
  __source: {
    fileName: _jsxFileName$9,
    lineNumber: 131,
    columnNumber: 3
  }
}, children, /*#__PURE__*/React__default["default"].createElement("button", {
  className: styles$5.deleteButton,
  onMouseDown: e => {
    e.stopPropagation();
  },
  onClick: onRequestDelete,
  __self: undefined,
  __source: {
    fileName: _jsxFileName$9,
    lineNumber: 133,
    columnNumber: 5
  }
}, "\u2715"));

var _jsxFileName$8 = "/workspaces/flumeapi/src/components/Control/Control.js";

const Control = ({
  type,
  name,
  nodeId,
  portName,
  label,
  inputLabel,
  data,
  allData,
  render,
  step,
  options = [],
  placeholder,
  inputData,
  triggerRecalculation,
  updateNodeConnections,
  getOptions,
  setValue,
  defaultValue,
  isMonoControl
}) => {
  const nodesDispatch = React__default["default"].useContext(NodeDispatchContext);
  const executionContext = React__default["default"].useContext(ContextContext);
  const calculatedLabel = isMonoControl ? inputLabel : label;

  const onChange = data => {
    nodesDispatch({
      type: "SET_PORT_DATA",
      data,
      nodeId,
      portName,
      controlName: name,
      setValue
    });
    triggerRecalculation();
  };

  const getControlByType = type => {
    const commonProps = {
      triggerRecalculation,
      updateNodeConnections,
      onChange,
      data
    };

    switch (type) {
      case "select":
        return /*#__PURE__*/React__default["default"].createElement(Select, _extends({}, commonProps, {
          options: getOptions ? getOptions(inputData, executionContext) : options,
          placeholder: placeholder,
          __self: undefined,
          __source: {
            fileName: _jsxFileName$8,
            lineNumber: 56,
            columnNumber: 11
          }
        }));

      case "text":
        return /*#__PURE__*/React__default["default"].createElement(TextInput, _extends({}, commonProps, {
          placeholder: placeholder,
          __self: undefined,
          __source: {
            fileName: _jsxFileName$8,
            lineNumber: 65,
            columnNumber: 16
          }
        }));

      case "number":
        return /*#__PURE__*/React__default["default"].createElement(TextInput, _extends({}, commonProps, {
          step: step,
          type: "number",
          placeholder: placeholder,
          __self: undefined,
          __source: {
            fileName: _jsxFileName$8,
            lineNumber: 68,
            columnNumber: 11
          }
        }));

      case "checkbox":
        return /*#__PURE__*/React__default["default"].createElement(Checkbox, _extends({}, commonProps, {
          label: calculatedLabel,
          __self: undefined,
          __source: {
            fileName: _jsxFileName$8,
            lineNumber: 71,
            columnNumber: 16
          }
        }));

      case "multiselect":
        return /*#__PURE__*/React__default["default"].createElement(Select, _extends({
          allowMultiple: true
        }, commonProps, {
          options: getOptions ? getOptions(inputData, executionContext) : options,
          placeholder: placeholder,
          label: label,
          __self: undefined,
          __source: {
            fileName: _jsxFileName$8,
            lineNumber: 74,
            columnNumber: 11
          }
        }));

      case "custom":
        return render(data, onChange, executionContext, triggerRecalculation, {
          label,
          name,
          portName,
          inputLabel,
          defaultValue
        }, allData);

      default:
        return /*#__PURE__*/React__default["default"].createElement("div", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName$8,
            lineNumber: 93,
            columnNumber: 16
          }
        }, "Control");
    }
  };

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$8.wrapper,
    "data-flume-component": "control",
    __self: undefined,
    __source: {
      fileName: _jsxFileName$8,
      lineNumber: 98,
      columnNumber: 5
    }
  }, calculatedLabel && type !== "checkbox" && type !== "custom" && /*#__PURE__*/React__default["default"].createElement("label", {
    "data-flume-component": "control-label",
    className: styles$8.controlLabel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$8,
      lineNumber: 100,
      columnNumber: 9
    }
  }, calculatedLabel), getControlByType(type));
};

var _jsxFileName$7 = "/workspaces/flumeapi/src/components/Connection/Connection.js";

const Connection = ({
  from,
  to,
  id,
  lineRef,
  outputNodeId,
  outputPortName,
  inputNodeId,
  inputPortName
}) => {
  const curve = calculateCurve(from, to);
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    className: styles$a.svg,
    "data-flume-component": "connection-svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName$7,
      lineNumber: 17,
      columnNumber: 5
    }
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    "data-connection-id": id,
    "data-output-node-id": outputNodeId,
    "data-output-port-name": outputPortName,
    "data-input-node-id": inputNodeId,
    "data-input-port-name": inputPortName,
    "data-flume-component": "connection-path",
    stroke: "rgb(185, 186, 189)",
    fill: "none",
    strokeWidth: 3,
    strokeLinecap: "round",
    d: curve,
    ref: lineRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$7,
      lineNumber: 18,
      columnNumber: 7
    }
  }));
};

const usePrevious = value => {
  const ref = React__default["default"].useRef();
  React__default["default"].useEffect(() => {
    ref.current = value;
  }, [ref.current]);
  return ref.current;
};

var _jsxFileName$6 = "/workspaces/flumeapi/src/components/IoPorts/IoPorts.js";

function useTransputs(transputsFn, transputType, nodeId, inputData, connections) {
  const nodesDispatch = React__default["default"].useContext(NodeDispatchContext);
  const executionContext = React__default["default"].useContext(ContextContext);
  const transputs = React__default["default"].useMemo(() => {
    if (Array.isArray(transputsFn)) return transputsFn;
    return transputsFn(inputData, connections, executionContext, nodeId);
  }, [transputsFn, inputData, connections, executionContext]);
  const prevTransputs = usePrevious(transputs);
  React__default["default"].useEffect(() => {
    if (!prevTransputs || Array.isArray(transputsFn)) return;

    for (const transput of prevTransputs) {
      const current = transputs.find(({
        name
      }) => transput.name === name);

      if (!current) {
        nodesDispatch({
          type: 'DESTROY_TRANSPUT',
          transputType,
          transput: {
            nodeId,
            portName: '' + transput.name
          }
        });
      }
    }
  }, [transputsFn, transputs, prevTransputs, nodesDispatch, nodeId, transputType]);
  return transputs;
}

const IoPorts = ({
  nodeId,
  inputs = [],
  outputs = [],
  connections,
  inputData,
  updateNodeConnections
}) => {
  const inputTypes = React__default["default"].useContext(PortTypesContext);
  const triggerRecalculation = React__default["default"].useContext(ConnectionRecalculateContext);
  const resolvedInputs = useTransputs(inputs, 'input', nodeId, inputData, connections);
  const resolvedOutputs = useTransputs(outputs, 'output', nodeId, inputData, connections);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$9.wrapper,
    "data-flume-component": "ports",
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 60,
      columnNumber: 5
    }
  }, resolvedInputs.length ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$9.inputs,
    "data-flume-component": "ports-inputs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 62,
      columnNumber: 9
    }
  }, resolvedInputs.map(input => /*#__PURE__*/React__default["default"].createElement(Input, _extends({}, input, {
    data: inputData[input.name] || {},
    isConnected: !!connections.inputs[input.name],
    triggerRecalculation: triggerRecalculation,
    updateNodeConnections: updateNodeConnections,
    inputTypes: inputTypes,
    nodeId: nodeId,
    inputData: inputData,
    key: input.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 64,
      columnNumber: 13
    }
  })))) : null, !!resolvedOutputs.length && /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$9.outputs,
    "data-flume-component": "ports-outputs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 79,
      columnNumber: 9
    }
  }, resolvedOutputs.map(output => /*#__PURE__*/React__default["default"].createElement(Output, _extends({}, output, {
    triggerRecalculation: triggerRecalculation,
    inputTypes: inputTypes,
    nodeId: nodeId,
    inputData: inputData,
    portOnRight: true,
    key: output.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 81,
      columnNumber: 13
    }
  })))));
};

const Input = ({
  type,
  label,
  name,
  nodeId,
  data,
  color,
  controls: localControls,
  inputTypes,
  noControls,
  triggerRecalculation,
  updateNodeConnections,
  isConnected,
  inputData,
  hidePort,
  extraProperties
}) => {
  const {
    label: defaultLabel,
    controls: defaultControls = []
  } = inputTypes[type] || {};
  const prevConnected = usePrevious(isConnected);
  const controls = localControls || defaultControls;
  React__default["default"].useEffect(() => {
    if (isConnected !== prevConnected) {
      triggerRecalculation();
    }
  }, [isConnected, prevConnected, triggerRecalculation]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    "data-flume-component": "port-input",
    className: styles$9.transput,
    "data-controlless": isConnected || noControls || !controls.length,
    onDragStart: e => {
      e.preventDefault();
      e.stopPropagation();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 129,
      columnNumber: 5
    }
  }, !hidePort ? /*#__PURE__*/React__default["default"].createElement(Port, {
    type: type,
    color: color,
    name: name,
    nodeId: nodeId,
    isInput: true,
    triggerRecalculation: triggerRecalculation,
    extraProperties: extraProperties,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 139,
      columnNumber: 9
    }
  }) : null, (!controls.length || noControls || isConnected) && /*#__PURE__*/React__default["default"].createElement("label", {
    "data-flume-component": "port-label",
    className: styles$9.portLabel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 150,
      columnNumber: 9
    }
  }, label || defaultLabel), !noControls && !isConnected ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$9.controls,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 154,
      columnNumber: 11
    }
  }, controls.map(control => /*#__PURE__*/React__default["default"].createElement(Control, _extends({}, control, {
    nodeId: nodeId,
    portName: name,
    triggerRecalculation: triggerRecalculation,
    updateNodeConnections: updateNodeConnections,
    inputLabel: label,
    data: data[control.name],
    allData: data,
    key: control.name,
    inputData: inputData,
    isMonoControl: controls.length === 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 157,
      columnNumber: 17
    }
  })))) : null);
};

const Output = ({
  label,
  name,
  color,
  nodeId,
  type,
  inputTypes,
  triggerRecalculation,
  extraProperties
}) => {
  const {
    label: defaultLabel
  } = inputTypes[type] || {};
  return /*#__PURE__*/React__default["default"].createElement("div", {
    "data-flume-component": "port-output",
    className: styles$9.transput,
    "data-controlless": true,
    onDragStart: e => {
      e.preventDefault();
      e.stopPropagation();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 192,
      columnNumber: 5
    }
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    "data-flume-component": "port-label",
    className: styles$9.portLabel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 201,
      columnNumber: 7
    }
  }, label || defaultLabel), /*#__PURE__*/React__default["default"].createElement(Port, {
    type: type,
    name: name,
    color: color,
    nodeId: nodeId,
    triggerRecalculation: triggerRecalculation,
    extraProperties: extraProperties,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 202,
      columnNumber: 7
    }
  }));
};

const Port = ({
  color = "grey",
  name = "",
  type,
  isInput,
  nodeId,
  triggerRecalculation,
  extraProperties
}) => {
  const nodesDispatch = React__default["default"].useContext(NodeDispatchContext);
  const stageState = React__default["default"].useContext(StageContext);
  const editorId = React__default["default"].useContext(EditorIdContext);
  const uiEvents = React__default["default"].useContext(UIEventsContext);
  const stageId = `${STAGE_ID}${editorId}`;
  const inputTypes = React__default["default"].useContext(PortTypesContext);
  const [isDragging, setIsDragging] = React__default["default"].useState(false);
  const [dragStartCoordinates, setDragStartCoordinates] = React__default["default"].useState({
    x: 0,
    y: 0
  });
  const dragStartCoordinatesCache = React__default["default"].useRef(dragStartCoordinates);
  const port = React__default["default"].useRef();
  const line = React__default["default"].useRef();
  const lineInToPort = React__default["default"].useRef();

  const byScale = value => 1 / stageState.scale * value;

  const handleDrag = e => {
    const stage = document.getElementById(stageId).getBoundingClientRect();

    if (isInput) {
      const to = {
        x: byScale(e.clientX - stage.x - stage.width / 2) + byScale(stageState.translate.x),
        y: byScale(e.clientY - stage.y - stage.height / 2) + byScale(stageState.translate.y)
      };
      lineInToPort.current.setAttribute("d", calculateCurve(dragStartCoordinatesCache.current, to));
    } else {
      const to = {
        x: byScale(e.clientX - stage.x - stage.width / 2) + byScale(stageState.translate.x),
        y: byScale(e.clientY - stage.y - stage.height / 2) + byScale(stageState.translate.y)
      };
      line.current.setAttribute("d", calculateCurve(dragStartCoordinatesCache.current, to));
    }
  };

  const handleDragEnd = e => {
    const droppedOnPort = !!e.target.dataset.portName;

    if (isInput) {
      const {
        inputNodeId,
        inputPortName,
        outputNodeId,
        outputPortName
      } = lineInToPort.current.dataset;

      if (uiEvents.portDisconnectRequest) {
        // Perform the disconnect through the uiEvents object
        uiEvents.portDisconnectRequest(outputNodeId, outputPortName, inputNodeId, inputPortName);
      } else {
        nodesDispatch({
          type: "REMOVE_CONNECTION",
          input: {
            nodeId: inputNodeId,
            portName: inputPortName
          },
          output: {
            nodeId: outputNodeId,
            portName: outputPortName
          }
        });
      }

      if (droppedOnPort) {
        const {
          portName: connectToPortName,
          nodeId: connectToNodeId,
          portType: connectToPortType,
          portTransputType: connectToTransputType
        } = e.target.dataset;
        const isNotSameNode = outputNodeId !== connectToNodeId;

        if (isNotSameNode && connectToTransputType !== "output") {
          if (uiEvents.portConnectRequest) {
            // Do the connection through the uiEvents callback
            uiEvents.portConnectRequest(outputNodeId, outputPortName, connectToNodeId, connectToPortName);
          } else {
            // Do the connection ourselves
            const inputWillAcceptConnection = inputTypes[connectToPortType].acceptTypes.includes(type);

            if (inputWillAcceptConnection) {
              nodesDispatch({
                type: "ADD_CONNECTION",
                input: {
                  nodeId: connectToNodeId,
                  portName: connectToPortName
                },
                output: {
                  nodeId: outputNodeId,
                  portName: outputPortName
                }
              });
            }
          }
        }
      }
    } else {
      if (droppedOnPort) {
        const {
          portName: inputPortName,
          nodeId: inputNodeId,
          portType: inputNodeType,
          portTransputType: inputTransputType
        } = e.target.dataset;
        const isNotSameNode = inputNodeId !== nodeId;

        if (isNotSameNode && inputTransputType !== "output") {
          if (uiEvents.portConnectRequest) {
            // Do the connection through the uiEvents callback
            uiEvents.portConnectRequest(nodeId, name, inputNodeId, inputPortName);
          } else {
            const inputWillAcceptConnection = inputTypes[inputNodeType].acceptTypes.includes(type);

            if (inputWillAcceptConnection) {
              nodesDispatch({
                type: "ADD_CONNECTION",
                output: {
                  nodeId,
                  portName: name
                },
                input: {
                  nodeId: inputNodeId,
                  portName: inputPortName
                }
              });
              triggerRecalculation();
            }
          }
        }
      }
    }

    setIsDragging(false);
    document.removeEventListener("mouseup", handleDragEnd);
    document.removeEventListener("mousemove", handleDrag);
  };

  const handleDragStart = e => {
    e.preventDefault();
    e.stopPropagation();
    const startPort = port.current.getBoundingClientRect();
    const stage = document.getElementById(stageId).getBoundingClientRect();
    uiEvents.portClicked && uiEvents.portClicked({
      name,
      nodeId,
      isInput
    });

    if (isInput) {
      lineInToPort.current = document.querySelector(`[data-input-node-id="${nodeId}"][data-input-port-name="${name}"]`);
      const portIsConnected = !!lineInToPort.current;

      if (portIsConnected) {
        lineInToPort.current.parentNode.style.zIndex = 9999;
        const outputPort = getPortRect(lineInToPort.current.dataset.outputNodeId, lineInToPort.current.dataset.outputPortName, "output");
        const coordinates = {
          x: byScale(outputPort.x - stage.x + outputPort.width / 2 - stage.width / 2) + byScale(stageState.translate.x),
          y: byScale(outputPort.y - stage.y + outputPort.width / 2 - stage.height / 2) + byScale(stageState.translate.y)
        };
        setDragStartCoordinates(coordinates);
        dragStartCoordinatesCache.current = coordinates;
        setIsDragging(true);
        document.addEventListener("mouseup", handleDragEnd);
        document.addEventListener("mousemove", handleDrag);
      }
    } else {
      const coordinates = {
        x: byScale(startPort.x - stage.x + startPort.width / 2 - stage.width / 2) + byScale(stageState.translate.x),
        y: byScale(startPort.y - stage.y + startPort.width / 2 - stage.height / 2) + byScale(stageState.translate.y)
      };
      setDragStartCoordinates(coordinates);
      dragStartCoordinatesCache.current = coordinates;
      setIsDragging(true);
      document.addEventListener("mouseup", handleDragEnd);
      document.addEventListener("mousemove", handleDrag);
    }
  };

  var extra = extraProperties ? extraProperties : {};
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 422,
      columnNumber: 5
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", _extends({
    style: {
      zIndex: 999
    },
    onMouseDown: handleDragStart,
    className: styles$9.port,
    "data-port-color": color,
    "data-port-name": name,
    "data-port-type": type,
    "data-port-transput-type": isInput ? "input" : "output",
    "data-node-id": nodeId,
    "data-flume-component": "port-handle",
    onDragStart: e => {
      e.preventDefault();
      e.stopPropagation();
    },
    ref: port
  }, extra, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 423,
      columnNumber: 7
    }
  })), isDragging && !isInput ? /*#__PURE__*/React__default["default"].createElement(Portal$1, {
    node: document.getElementById(`${DRAG_CONNECTION_ID}${editorId}`),
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 441,
      columnNumber: 9
    }
  }, /*#__PURE__*/React__default["default"].createElement(Connection, {
    from: dragStartCoordinates,
    to: dragStartCoordinates,
    lineRef: line,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 444,
      columnNumber: 11
    }
  })) : null);
};

var _jsxFileName$5 = "/workspaces/flumeapi/src/components/Node/Node.js";

const Node = ({
  id,
  width,
  x,
  y,
  stageRect,
  connections,
  type,
  inputData,
  onDragStart,
  renderNodeHeader,
  extraProperties = {}
}) => {
  const cache = React__default["default"].useContext(CacheContext);
  const nodeTypes = React__default["default"].useContext(NodeTypesContext);
  const nodesDispatch = React__default["default"].useContext(NodeDispatchContext);
  const stageState = React__default["default"].useContext(StageContext);
  const uiEvents = React__default["default"].useContext(UIEventsContext);
  const currentNodeType = typeof type === "string" ? nodeTypes[type] : type;
  const {
    label,
    deletable,
    inputs = [],
    outputs = []
  } = currentNodeType;
  const nodeWrapper = React__default["default"].useRef();
  const [menuOpen, setMenuOpen] = React__default["default"].useState(false);
  const [menuCoordinates, setMenuCoordinates] = React__default["default"].useState({
    x: 0,
    y: 0
  });

  const byScale = value => 1 / stageState.scale * value;

  const updateConnectionsByTransput = (transput = {}, isOutput) => {
    Object.entries(transput).forEach(([portName, outputs]) => {
      outputs.forEach(output => {
        const toRect = getPortRect(id, portName, isOutput ? "output" : "input", cache);
        const fromRect = getPortRect(output.nodeId, output.portName, isOutput ? "input" : "output", cache);
        const portHalf = fromRect.width / 2;
        let combined;

        if (isOutput) {
          combined = id + portName + output.nodeId + output.portName;
        } else {
          combined = output.nodeId + output.portName + id + portName;
        }

        let cnx;
        const cachedConnection = cache.current.connections[combined];

        if (cachedConnection) {
          cnx = cachedConnection;
        } else {
          cnx = document.querySelector(`[data-connection-id="${combined}"]`);
          cache.current.connections[combined] = cnx;
        }

        const from = {
          x: byScale(toRect.x - stageRect.current.x + portHalf - stageRect.current.width / 2) + byScale(stageState.translate.x),
          y: byScale(toRect.y - stageRect.current.y + portHalf - stageRect.current.height / 2) + byScale(stageState.translate.y)
        };
        const to = {
          x: byScale(fromRect.x - stageRect.current.x + portHalf - stageRect.current.width / 2) + byScale(stageState.translate.x),
          y: byScale(fromRect.y - stageRect.current.y + portHalf - stageRect.current.height / 2) + byScale(stageState.translate.y)
        };
        cnx.setAttribute("d", calculateCurve(from, to));
      });
    });
  };

  const updateNodeConnections = () => {
    if (connections) {
      updateConnectionsByTransput(connections.inputs);
      updateConnectionsByTransput(connections.outputs, true);
    }
  };

  const stopDrag = (e, coordinates) => {
    nodesDispatch({
      type: "SET_NODE_COORDINATES",
      ...coordinates,
      nodeId: id
    });
  };

  const handleDrag = ({
    x,
    y
  }) => {
    nodeWrapper.current.style.transform = `translate(${x}px,${y}px)`;
    updateNodeConnections();
  };

  const startDrag = e => {
    onDragStart();
  };

  const mouseDown = e => {
    uiEvents.nodeClicked && uiEvents.nodeClicked(id, e);
  };

  const handleContextMenu = e => {
    e.preventDefault();
    e.stopPropagation();
    setMenuCoordinates({
      x: e.clientX,
      y: e.clientY
    });
    setMenuOpen(true);
    return false;
  };

  const closeContextMenu = () => {
    setMenuOpen(false);
  };

  const deleteNode = () => {
    nodesDispatch({
      type: "REMOVE_NODE",
      nodeId: id
    });
  };

  const handleMenuOption = ({
    value
  }) => {
    switch (value) {
      case "deleteNode":
        deleteNode();
        break;

      default:
        return;
    }
  };

  return /*#__PURE__*/React__default["default"].createElement(Draggable, _extends({
    className: styles$b.wrapper,
    style: {
      width,
      transform: `translate(${x}px, ${y}px)`
    },
    "data-testid": "node",
    onMouseDown: mouseDown,
    onDragStart: startDrag,
    onDrag: handleDrag,
    onDragEnd: stopDrag,
    innerRef: nodeWrapper,
    "data-node-id": id,
    "data-flume-component": "node",
    onContextMenu: handleContextMenu,
    stageState: stageState,
    stageRect: stageRect
  }, extraProperties, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$5,
      lineNumber: 168,
      columnNumber: 5
    }
  }), renderNodeHeader ? renderNodeHeader(NodeHeader, currentNodeType, {
    openMenu: handleContextMenu,
    closeMenu: closeContextMenu,
    deleteNode
  }) : /*#__PURE__*/React__default["default"].createElement(NodeHeader, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$5,
      lineNumber: 194,
      columnNumber: 9
    }
  }, label), /*#__PURE__*/React__default["default"].createElement(IoPorts, {
    nodeId: id,
    inputs: inputs,
    outputs: outputs,
    connections: connections,
    updateNodeConnections: updateNodeConnections,
    inputData: inputData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$5,
      lineNumber: 196,
      columnNumber: 7
    }
  }), menuOpen ? /*#__PURE__*/React__default["default"].createElement(Portal$1, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$5,
      lineNumber: 205,
      columnNumber: 9
    }
  }, /*#__PURE__*/React__default["default"].createElement(ContextMenu, {
    x: menuCoordinates.x,
    y: menuCoordinates.y,
    options: [...(deletable !== false ? [{
      label: "Delete Node",
      value: "deleteNode",
      description: "Deletes a node and all of its connections."
    }] : [])],
    onRequestClose: closeContextMenu,
    onOptionSelected: handleMenuOption,
    hideFilter: true,
    label: "Node Options",
    emptyText: "This node has no options.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName$5,
      lineNumber: 206,
      columnNumber: 11
    }
  })) : null);
};

const NodeHeader = ({
  children,
  className = "",
  ...props
}) => /*#__PURE__*/React__default["default"].createElement("h2", _extends({}, props, {
  className: styles$b.label + (className ? ` ${className}` : ""),
  "data-flume-component": "node-header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName$5,
    lineNumber: 233,
    columnNumber: 3
  }
}), children);

var css_248z$4 = ".Comment_wrapper__2CG3I {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  padding: 5px;\n  background: rgba(147, 154, 158, 0.7);\n  border-radius: 5px;\n  border-bottom-right-radius: 2px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n  min-width: 80px;\n  font-size: 14px;\n  display: flex;\n  text-shadow: 0px 1px rgba(255,255,255,.1);\n  border: 1px solid rgba(168, 176, 181, 0.7);\n  user-select: none;\n}\n  .Comment_wrapper__2CG3I[data-color=\"red\"]{\n    background: rgba(213, 84, 103, 0.65);\n    border-color: rgba(227, 85, 119, 0.65);\n  }\n  .Comment_wrapper__2CG3I[data-color=\"purple\"]{\n    background: rgba(153, 83, 196, 0.65);\n    border-color: rgba(156, 85, 227, 0.65);\n  }\n  .Comment_wrapper__2CG3I[data-color=\"blue\"]{\n    background: rgba(76, 142, 203, 0.65);\n    border-color: rgba(85, 159, 227, 0.65);\n  }\n  .Comment_wrapper__2CG3I[data-color=\"green\"]{\n    background: rgba(70, 200, 130, 0.65);\n    border-color: rgba(85, 227, 150, 0.65);\n  }\n  .Comment_wrapper__2CG3I[data-color=\"yellow\"]{\n    background: rgba(200, 167, 63, 0.65);\n    border-color: rgba(227, 213, 85, 0.65);\n  }\n  .Comment_wrapper__2CG3I[data-color=\"orange\"]{\n    background: rgba(215, 123, 64, 0.65);\n    border-color: rgba(227, 149, 85, 0.65);\n  }\n  .Comment_wrapper__2CG3I[data-color=\"pink\"]{\n    background: rgba(255, 102, 208, 0.65);\n    border-color: rgba(242, 131, 228, 0.65);\n  }\n.Comment_text__wBsGB{\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  white-space: pre-wrap;\n  cursor: default;\n}\n.Comment_resizeThumb__e-57p {\n  width: 10px;\n  height: 10px;\n  border-radius: 4px 0px 4px 0px;\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n  overflow: hidden;\n  cursor: nwse-resize;\n}\n.Comment_resizeThumb__e-57p::before,\n  .Comment_resizeThumb__e-57p::after {\n    content: \"\";\n    position: absolute;\n    right: 0px;\n    top: 0px;\n    width: 250%;\n    height: 0px;\n    border-top: 1px solid rgba(0, 0, 0, 0.7);\n    border-bottom: 2px solid rgba(255, 255, 255, 0.7);\n    transform-origin: center right;\n    transform: rotate(-45deg) scale(0.5);\n  }\n.Comment_resizeThumb__e-57p::after {\n    transform: rotate(-45deg) translateY(3px) scale(0.5);\n  }\n.Comment_textarea__i7qnk {\n  resize: none;\n  width: calc(100% + 2px);\n  height: calc(100% + 2px);\n  border-radius: 3px;\n  background: rgba(255,255,255,.1);\n  border: none;\n  outline: none;\n  margin: -2px;\n  margin-top: -1px;\n  padding-top: 0px;\n  font-size: 14px;\n}\n.Comment_textarea__i7qnk::placeholder{\n    color: rgba(0,0,0,.5);\n  }\n";
var styles$4 = {"wrapper":"Comment_wrapper__2CG3I","text":"Comment_text__wBsGB","resizeThumb":"Comment_resizeThumb__e-57p","textarea":"Comment_textarea__i7qnk"};
styleInject(css_248z$4);

var css_248z$3 = ".ColorPicker_wrapper__MW540{\n  position: fixed;\n  z-index: 9999;\n  background: rgba(29, 32, 34, 0.95);\n  border-radius: 5px;\n  box-shadow: 0px 6px 7px rgba(0,0,0,.3);\n  border: 1px solid rgba(0,0,0,.4);\n  color: #fff;\n  display: flex;\n  width: 102px;\n  flex-wrap: wrap;\n  padding: 2px;\n}\n@supports (backdrop-filter: blur(6px)){\n  .ColorPicker_wrapper__MW540{\n    backdrop-filter: blur(6px);\n    background: rgba(29, 32, 34, 0.8);\n  }\n}\n.ColorPicker_colorButtonWrapper__Z123Z{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2px;\n}\n.ColorPicker_colorButton__A82sm{\n  border-radius: 3px;\n  border: none;\n  width: 20px;\n  height: 20px;\n  background: rgba(204, 204, 204, 1);\n}\n.ColorPicker_colorButton__A82sm[data-color=\"red\"]{\n    background: rgba(210, 101, 111, 1)\n  }\n.ColorPicker_colorButton__A82sm[data-color=\"purple\"]{\n    background: rgba(159, 101, 210, 1)\n  }\n.ColorPicker_colorButton__A82sm[data-color=\"blue\"]{\n    background: rgba(101, 151, 210, 1)\n  }\n.ColorPicker_colorButton__A82sm[data-color=\"green\"]{\n    background: rgba(101, 210, 168, 1)\n  }\n.ColorPicker_colorButton__A82sm[data-color=\"orange\"]{\n    background: rgba(210, 137, 101, 1)\n  }\n.ColorPicker_colorButton__A82sm[data-color=\"yellow\"]{\n    background: rgba(210, 196, 101, 1)\n  }\n.ColorPicker_colorButton__A82sm[data-color=\"pink\"]{\n    background: rgba(241, 124, 226, 1)\n  }\n.ColorPicker_colorButton__A82sm:hover{\n    opacity: .8;\n  }\n";
var styles$3 = {"wrapper":"ColorPicker_wrapper__MW540","colorButtonWrapper":"ColorPicker_colorButtonWrapper__Z123Z","colorButton":"ColorPicker_colorButton__A82sm"};
styleInject(css_248z$3);

const define = (value, defaultValue) => value !== undefined ? value : defaultValue;

const buildControlType = (defaultConfig, validate = () => {}, setup = () => ({})) => config => {
  validate(config);
  return {
    type: defaultConfig.type,
    label: define(config.label, defaultConfig.label || ""),
    name: define(config.name, defaultConfig.name || ""),
    defaultValue: define(config.defaultValue, defaultConfig.defaultValue),
    setValue: define(config.setValue, undefined),
    ...setup(config)
  };
};

const Controls = {
  text: buildControlType({
    type: "text",
    name: "text",
    defaultValue: ""
  }),
  select: buildControlType({
    type: "select",
    name: "select",
    options: [],
    defaultValue: ""
  }, () => {}, config => ({
    options: define(config.options, []),
    getOptions: define(config.getOptions, undefined),
    placeholder: define(config.placeholder, undefined)
  })),
  number: buildControlType({
    type: "number",
    name: "number",
    defaultValue: 0
  }, () => {}, config => ({
    step: define(config.step, undefined)
  })),
  checkbox: buildControlType({
    type: "checkbox",
    name: "checkbox",
    defaultValue: false
  }),
  multiselect: buildControlType({
    type: "multiselect",
    name: "multiselect",
    options: [],
    defaultValue: []
  }, () => {}, config => ({
    options: define(config.options, []),
    getOptions: define(config.getOptions, undefined),
    placeholder: define(config.placeholder, undefined)
  })),
  custom: buildControlType({
    type: "custom",
    name: "custom",
    render: () => {},
    defaultValue: undefined
  }, () => {}, config => ({
    render: define(config.render, () => {})
  }))
};
const Colors = {
  yellow: "yellow",
  orange: "orange",
  red: "red",
  pink: "pink",
  purple: "purple",
  blue: "blue",
  green: "green",
  grey: "grey"
};
const getPortBuilders = ports => Object.values(ports).reduce((obj, port) => {
  obj[port.type] = (config = {}) => {
    return {
      type: port.type,
      name: config.name || port.name,
      label: config.label || port.label,
      noControls: define(config.noControls, false),
      color: config.color || port.color,
      hidePort: define(config.hidePort, port.hidePort),
      controls: define(config.controls, port.controls)
    };
  };

  return obj;
}, {});
class FlumeConfig {
  constructor(config) {
    if (config) {
      this.nodeTypes = { ...config.nodeTypes
      };
      this.portTypes = { ...config.portTypes
      };
    } else {
      this.nodeTypes = {};
      this.portTypes = {};
    }
  }

  addRootNodeType(config) {
    this.addNodeType({ ...config,
      root: true,
      addable: false,
      deletable: false
    });
    return this;
  }

  addNodeType(config) {
    if (typeof config !== "object" && config !== null) {
      throw new Error("You must provide a configuration object when calling addNodeType.");
    }

    if (typeof config.type !== "string") {
      throw new Error(`Required key, "type" must be a string when calling addNodeType.`);
    }

    if (typeof config.initialWidth !== "undefined" && typeof config.initialWidth !== "number") {
      throw new Error(`Optional key, "initialWidth" must be a number when calling addNodeType.`);
    }

    if (this.nodeTypes[config.type] !== undefined) {
      throw new Error(`A node with type "${config.type}" has already been declared.`);
    }

    const node = {
      type: config.type,
      label: define(config.label, ""),
      description: define(config.description, ""),
      addable: define(config.addable, true),
      deletable: define(config.deletable, true)
    };

    if (config.initialWidth) {
      node.initialWidth = config.initialWidth;
    }

    if (config.sortIndex !== undefined) {
      node.sortIndex = config.sortIndex;
    }

    if (typeof config.inputs === "function") {
      const inputs = config.inputs(getPortBuilders(this.portTypes));

      if (!Array.isArray(inputs) && typeof config.inputs !== 'function') {
        throw new Error(`When providing a function to the "inputs" key, you must return either an array or a function.`);
      }

      node.inputs = inputs;
    } else if (config.inputs === undefined) {
      node.inputs = [];
    } else if (!Array.isArray(config.inputs)) {
      throw new Error(`Optional key, "inputs" must be an array.`);
    } else {
      node.inputs = config.inputs;
    }

    if (typeof config.outputs === "function") {
      const outputs = config.outputs(getPortBuilders(this.portTypes));

      if (!Array.isArray(outputs) && typeof config.outputs !== 'function') {
        throw new Error(`When providing a function to the "outputs" key, you must return either an array or a function.`);
      }

      node.outputs = outputs;
    } else if (config.outputs === undefined) {
      node.outputs = [];
    } else if (config.outputs !== undefined && !Array.isArray(config.outputs)) {
      throw new Error(`Optional key, "outputs" must be an array.`);
    } else {
      node.outputs = config.outputs;
    }

    if (config.root !== undefined) {
      if (typeof config.root !== "boolean") {
        throw new Error(`Optional key, "root" must be a boolean.`);
      } else {
        node.root = config.root;
      }
    }

    this.nodeTypes[config.type] = node;
    return this;
  }

  removeNodeType(type) {
    if (!this.nodeTypes[type]) {
      console.error(`Non-existent node type "${type}" cannot be removed.`);
    } else {
      const {
        [type]: deleted,
        ...nodeTypes
      } = this.nodeTypes;
      this.nodeTypes = nodeTypes;
    }

    return this;
  }

  addPortType(config) {
    if (typeof config !== "object" && config !== null) {
      throw new Error("You must provide a configuration object when calling addPortType");
    }

    if (typeof config.type !== "string") {
      throw new Error(`Required key, "type" must be a string when calling addPortType.`);
    }

    if (this.portTypes[config.type] !== undefined) {
      throw new Error(`A port with type "${config.type}" has already been declared.`);
    }

    if (typeof config.name !== "string") {
      throw new Error(`Required key, "name" must be a string when calling addPortType.`);
    }

    const port = {
      type: config.type,
      name: config.name,
      label: define(config.label, ""),
      color: define(config.color, Colors.grey),
      hidePort: define(config.hidePort, false)
    };

    if (config.acceptTypes === undefined) {
      port.acceptTypes = [config.type];
    } else if (!Array.isArray(config.acceptTypes)) {
      throw new Error(`Optional key, "acceptTypes" must be an array.`);
    } else {
      port.acceptTypes = config.acceptTypes;
    }

    if (config.controls === undefined) {
      port.controls = [];
    } else if (!Array.isArray(config.controls)) {
      throw new Error(`Optional key, "controls" must be an array.`);
    } else {
      port.controls = config.controls;
    }

    this.portTypes[config.type] = port;
    return this;
  }

  removePortType(type, {
    skipDynamicNodesCheck = false
  } = {}) {
    if (!this.portTypes[type]) {
      console.error(`Non-existent port type "${type}" cannot be removed.`);
    } else {
      if (!skipDynamicNodesCheck) {
        const dynamicNodes = Object.values(this.nodeTypes).filter(node => typeof node.inputs === 'function' || typeof node.outputs === 'function');

        if (dynamicNodes.length) {
          console.warn(`We've detected that one or more of your nodes is using dynamic inputs/outputs. This is a potentially dangerous operation as we are unable to detect if this portType is being used in one of those nodes. You can quiet this message by passing { skipDynamicNodesCheck: true } in as the second argument.`);
        }
      }

      const affectedNodes = Object.values(this.nodeTypes).filter(node => Array.isArray(node.inputs) && node.inputs.find(p => p.type === type) || Array.isArray(node.outputs) && node.outputs.find(p => p.type === type));

      if (affectedNodes.length) {
        throw new Error(`Cannot delete port type "${type}" without first deleting all node types using these ports: [${affectedNodes.map(n => `${n.type}`).join(", ")}]`);
      } else {
        const {
          [type]: deleted,
          ...portTypes
        } = this.portTypes;
        this.portTypes = portTypes;
      }
    }

    return this;
  }

}

var _jsxFileName$4 = "/workspaces/flumeapi/src/components/ColorPicker/ColorPicker.js";
var ColorPicker = (({
  x,
  y,
  onColorPicked,
  onRequestClose
}) => {
  const wrapper = React__default["default"].useRef();
  const testClickOutside = React__default["default"].useCallback(e => {
    if (wrapper.current && !wrapper.current.contains(e.target)) {
      onRequestClose();
      document.removeEventListener("click", testClickOutside);
      document.removeEventListener("contextmenu", testClickOutside);
    }
  }, [wrapper, onRequestClose]);
  const testEscape = React__default["default"].useCallback(e => {
    if (e.keyCode === 27) {
      onRequestClose();
      document.removeEventListener("keydown", testEscape);
    }
  }, [onRequestClose]);
  React__default["default"].useEffect(() => {
    document.addEventListener("keydown", testEscape);
    document.addEventListener("click", testClickOutside);
    document.addEventListener("contextmenu", testClickOutside);
    return () => {
      document.removeEventListener("click", testClickOutside);
      document.removeEventListener("contextmenu", testClickOutside);
      document.removeEventListener("keydown", testEscape);
    };
  }, [testClickOutside, testEscape]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    "data-flume-component": "color-picker",
    ref: wrapper,
    className: styles$3.wrapper,
    style: {
      left: x,
      top: y
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName$4,
      lineNumber: 41,
      columnNumber: 5
    }
  }, Object.values(Colors).map(color => /*#__PURE__*/React__default["default"].createElement(ColorButton, {
    onSelected: () => {
      onColorPicked(color);
      onRequestClose();
    },
    color: color,
    key: color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$4,
      lineNumber: 51,
      columnNumber: 9
    }
  })));
});

const ColorButton = ({
  color,
  onSelected
}) => /*#__PURE__*/React__default["default"].createElement("div", {
  className: styles$3.colorButtonWrapper,
  __self: undefined,
  __source: {
    fileName: _jsxFileName$4,
    lineNumber: 65,
    columnNumber: 3
  }
}, /*#__PURE__*/React__default["default"].createElement("button", {
  "data-flume-component": "color-button",
  className: styles$3.colorButton,
  onClick: onSelected,
  "data-color": color,
  "aria-label": color,
  __self: undefined,
  __source: {
    fileName: _jsxFileName$4,
    lineNumber: 66,
    columnNumber: 5
  }
}));

var _jsxFileName$3 = "/workspaces/flumeapi/src/components/Comment/Comment.js";
var Comment = (({
  dispatch,
  id,
  x,
  y,
  width,
  height,
  color,
  text,
  stageRect,
  onDragStart,
  isNew
}) => {
  const stageState = React__default["default"].useContext(StageContext);
  const wrapper = React__default["default"].useRef();
  const textarea = React__default["default"].useRef();
  const [isEditing, setIsEditing] = React__default["default"].useState(false);
  const [isPickingColor, setIsPickingColor] = React__default["default"].useState(false);
  const [menuOpen, setMenuOpen] = React__default["default"].useState(false);
  const [menuCoordinates, setMenuCoordinates] = React__default["default"].useState({
    x: 0,
    y: 0
  });
  const [colorPickerCoordinates, setColorPickerCoordinates] = React__default["default"].useState({
    x: 0,
    y: 0
  });

  const handleContextMenu = e => {
    e.preventDefault();
    e.stopPropagation();
    setMenuCoordinates({
      x: e.clientX,
      y: e.clientY
    });
    setMenuOpen(true);
    return false;
  };

  const closeContextMenu = () => setMenuOpen(false);

  const startDrag = e => {
    onDragStart();
  };

  const handleDrag = ({
    x,
    y
  }) => {
    wrapper.current.style.transform = `translate(${x}px,${y}px)`;
  };

  const handleDragEnd = (_, {
    x,
    y
  }) => {
    dispatch({
      type: "SET_COMMENT_COORDINATES",
      id,
      x,
      y
    });
  };

  const handleResize = coordinates => {
    const width = clamp_1(coordinates.x - x + 10, 80, 10000);
    const height = clamp_1(coordinates.y - y + 10, 30, 10000);
    wrapper.current.style.width = `${width}px`;
    wrapper.current.style.height = `${height}px`;
  };

  const handleResizeEnd = (_, coordinates) => {
    const width = clamp_1(coordinates.x - x + 10, 80, 10000);
    const height = clamp_1(coordinates.y - y + 10, 30, 10000);
    dispatch({
      type: "SET_COMMENT_DIMENSIONS",
      id,
      width,
      height
    });
  };

  const handleMenuOption = (option, e) => {
    switch (option.value) {
      case "edit":
        startTextEdit();
        break;

      case "color":
        setColorPickerCoordinates(menuCoordinates);
        setIsPickingColor(true);
        break;

      case "delete":
        dispatch({
          type: "DELETE_COMMENT",
          id
        });
        break;
    }
  };

  const startTextEdit = () => {
    setIsEditing(true);
  };

  const endTextEdit = () => {
    setIsEditing(false);
  };

  const handleTextChange = e => {
    dispatch({
      type: "SET_COMMENT_TEXT",
      id,
      text: e.target.value
    });
  };

  const handleColorPicked = color => {
    dispatch({
      type: "SET_COMMENT_COLOR",
      id,
      color
    });
  };

  React__default["default"].useEffect(() => {
    if (isNew) {
      setIsEditing(true);
      dispatch({
        type: "REMOVE_COMMENT_NEW",
        id
      });
    }
  }, [isNew, dispatch, id]);
  return /*#__PURE__*/React__default["default"].createElement(Draggable, {
    innerRef: wrapper,
    className: styles$4.wrapper,
    style: {
      transform: `translate(${x}px,${y}px)`,
      width,
      height,
      zIndex: isEditing ? 999 : ""
    },
    stageState: stageState,
    stageRect: stageRect,
    onDragStart: startDrag,
    onDrag: handleDrag,
    onDragEnd: handleDragEnd,
    onContextMenu: handleContextMenu,
    onDoubleClick: startTextEdit,
    onWheel: e => e.stopPropagation(),
    "data-color": color,
    "data-flume-component": "comment",
    __self: undefined,
    __source: {
      fileName: _jsxFileName$3,
      lineNumber: 134,
      columnNumber: 5
    }
  }, isEditing ? /*#__PURE__*/React__default["default"].createElement("textarea", {
    "data-flume-component": "comment-textarea",
    className: styles$4.textarea,
    onChange: handleTextChange,
    onMouseDown: e => e.stopPropagation(),
    onBlur: endTextEdit,
    placeholder: "Text of the comment...",
    autoFocus: true,
    value: text,
    ref: textarea,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$3,
      lineNumber: 155,
      columnNumber: 9
    }
  }) : /*#__PURE__*/React__default["default"].createElement("div", {
    "data-flume-component": "comment-text",
    "data-comment": true,
    className: styles$4.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$3,
      lineNumber: 167,
      columnNumber: 9
    }
  }, text), /*#__PURE__*/React__default["default"].createElement(Draggable, {
    className: styles$4.resizeThumb,
    stageState: stageState,
    stageRect: stageRect,
    onDrag: handleResize,
    onDragEnd: handleResizeEnd,
    "data-flume-component": "comment-resize-handle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName$3,
      lineNumber: 171,
      columnNumber: 7
    }
  }), menuOpen ? /*#__PURE__*/React__default["default"].createElement(Portal$1, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$3,
      lineNumber: 180,
      columnNumber: 9
    }
  }, /*#__PURE__*/React__default["default"].createElement(ContextMenu, {
    hideFilter: true,
    label: "Comment Options",
    x: menuCoordinates.x,
    y: menuCoordinates.y,
    options: [{
      value: "edit",
      label: "Edit Comment",
      description: "Edit the text of the comment"
    }, {
      value: "color",
      label: "Change Color",
      description: "Change the color of the comment"
    }, {
      value: "delete",
      label: "Delete Comment",
      description: "Delete the comment"
    }],
    onRequestClose: closeContextMenu,
    onOptionSelected: handleMenuOption,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$3,
      lineNumber: 181,
      columnNumber: 11
    }
  })) : null, isPickingColor ? /*#__PURE__*/React__default["default"].createElement(Portal$1, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName$3,
      lineNumber: 209,
      columnNumber: 9
    }
  }, /*#__PURE__*/React__default["default"].createElement(ColorPicker, {
    x: colorPickerCoordinates.x,
    y: colorPickerCoordinates.y,
    onRequestClose: () => setIsPickingColor(false),
    onColorPicked: handleColorPicked,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$3,
      lineNumber: 210,
      columnNumber: 11
    }
  })) : null);
});

var css_248z$2 = ".Toaster_toaster__E5R8O{\n  position: absolute;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 1px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 15px;\n  box-shadow: 0px 5px 10px -2px rgba(0,0,0,.3);\n  pointer-events: none;\n}\n.Toaster_toast__2wgPt{\n  position: absolute;\n  left: calc(50% - 200px);\n  top: 0px;\n  pointer-events: all;\n  width: 400px;\n  padding: 10px;\n  padding-top: 7px;\n  padding-right: 16px;\n  border-radius: 6px;\n  background: rgba(231, 231, 231, 1);\n  border: 1px solid;\n  margin-bottom: 5px;\n  transition: transform 300ms;\n  flex: 0 0 auto;\n  animation: Toaster_fade-in__y8znw 150ms;\n  user-select: none;\n  font-size: 14px;\n  display: flex;\n  flex-direction: column;\n  will-change: transform;\n}\n.Toaster_toast__2wgPt[data-type=\"danger\"]{\n    background: rgb(255, 116, 137);\n    border-color: rgb(254, 99, 136);\n    color: rgb(66, 6, 20);\n  }\n.Toaster_toast__2wgPt[data-type=\"info\"]{\n    background: rgb(76, 193, 250);\n    border-color: rgb(103, 182, 255);\n    color: rgb(5, 36, 64);\n  }\n.Toaster_toast__2wgPt[data-type=\"success\"]{\n    background: rgb(81, 230, 150);\n    border-color: rgb(85, 227, 150);\n    color: rgb(7, 57, 30);\n  }\n.Toaster_toast__2wgPt[data-type=\"warning\"]{\n    background: rgb(245, 208, 93);\n    border-color: rgb(247, 235, 125);\n    color: rgb(83, 75, 8);\n  }\n.Toaster_toast__2wgPt[data-exiting=true]{\n    animation: Toaster_fade-out__XANRE 150ms;\n    animation-fill-mode: forwards;\n  }\n.Toaster_toast__2wgPt p{\n  margin: 0px;\n}\n.Toaster_title__UqwtP{\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.Toaster_timer__P6Wpm{\n  position: absolute;\n  bottom: -1px;\n  left: -1px;\n  width: calc(100% + 2px);\n  height: 3px;\n  background: rgba(0,0,0,.4);\n  transform-origin: left center;\n  animation: Toaster_timer__P6Wpm 1000ms linear;\n  animation-fill-mode: forwards;\n  z-index: 9;\n}\n.Toaster_exitButton__8SpPt{\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  width: 20px;\n  height: 20px;\n  padding: 0px;\n  background: none;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  color: inherit;\n  opacity: .6;\n}\n.Toaster_exitButton__8SpPt:hover{\n  opacity: .9;\n}\n\n@keyframes Toaster_fade-in__y8znw {\n  from{\n    opacity: 0;\n  }\n  to{\n    opacity: 1;\n  }\n}\n\n@keyframes Toaster_fade-out__XANRE {\n  from{\n    opacity: 1;\n  }\n  to{\n    opacity: 0;\n  }\n}\n\n@keyframes Toaster_timer__P6Wpm {\n  from{\n    transform: scaleX(1);\n  }\n  to{\n    transform: scaleX(0);\n  }\n}\n";
var styles$2 = {"toaster":"Toaster_toaster__E5R8O","toast":"Toaster_toast__2wgPt","fade-in":"Toaster_fade-in__y8znw","fade-out":"Toaster_fade-out__XANRE","title":"Toaster_title__UqwtP","timer":"Toaster_timer__P6Wpm","exitButton":"Toaster_exitButton__8SpPt"};
styleInject(css_248z$2);

var _jsxFileName$2 = "/workspaces/flumeapi/src/components/Toaster/Toaster.js";
var Toaster = (({
  toasts = [],
  dispatchToasts
}) => {
  const setHeight = React__default["default"].useCallback((id, height) => {
    dispatchToasts({
      type: "SET_HEIGHT",
      id,
      height
    });
  }, [dispatchToasts]);
  const startExit = React__default["default"].useCallback(id => {
    dispatchToasts({
      type: "SET_EXITING",
      id
    });
  }, [dispatchToasts]);
  const removeToast = React__default["default"].useCallback(id => {
    dispatchToasts({
      type: "REMOVE_TOAST",
      id
    });
  }, [dispatchToasts]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$2.toaster,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$2,
      lineNumber: 37,
      columnNumber: 5
    }
  }, toasts.map((toast, i) => {
    return /*#__PURE__*/React__default["default"].createElement(Toast, _extends({}, toast, {
      onHeightReceived: setHeight,
      onExitRequested: startExit,
      onRemoveRequested: removeToast,
      y: toasts.slice(0, i + 1).reduce((y, t) => t.height + y + 5, 0),
      key: toast.id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName$2,
        lineNumber: 40,
        columnNumber: 11
      }
    }));
  }));
});

const Toast = ({
  id,
  title,
  message,
  duration,
  type,
  exiting,
  y,
  onHeightReceived,
  onExitRequested,
  onRemoveRequested
}) => {
  const [paused, setPaused] = React__default["default"].useState(false);
  const wrapper = React__default["default"].useRef();
  const timer = React__default["default"].useRef();
  const stopTimer = React__default["default"].useCallback(() => {
    setPaused(true);
    clearTimeout(timer.current);
  }, []);
  const resumeTimer = React__default["default"].useCallback(() => {
    setPaused(false);
    timer.current = setTimeout(() => onExitRequested(id), duration);
  }, [id, duration, onExitRequested]);
  React__default["default"].useLayoutEffect(() => {
    const {
      height
    } = wrapper.current.getBoundingClientRect();
    onHeightReceived(id, height);
  }, [onHeightReceived, id]);
  React__default["default"].useEffect(() => {
    resumeTimer();
    return stopTimer;
  }, [resumeTimer, stopTimer]);

  const handleAnimationEnd = () => {
    if (exiting) {
      onRemoveRequested(id);
    }
  };

  return /*#__PURE__*/React__default["default"].createElement("div", {
    "data-flume-component": "toast",
    ref: wrapper,
    className: styles$2.toast,
    "data-type": type,
    style: {
      transform: `translateY(-${y}px)`
    },
    "data-exiting": exiting,
    onAnimationEnd: handleAnimationEnd,
    onMouseEnter: stopTimer,
    onMouseLeave: resumeTimer,
    role: "alert",
    __self: undefined,
    __source: {
      fileName: _jsxFileName$2,
      lineNumber: 97,
      columnNumber: 5
    }
  }, title ? /*#__PURE__*/React__default["default"].createElement("span", {
    "data-flume-component": "toast-title",
    className: styles$2.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$2,
      lineNumber: 110,
      columnNumber: 17
    }
  }, title) : null, /*#__PURE__*/React__default["default"].createElement("p", {
    "data-flume-component": "toast-message",
    __self: undefined,
    __source: {
      fileName: _jsxFileName$2,
      lineNumber: 112,
      columnNumber: 7
    }
  }, message), !paused && /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$2.timer,
    style: {
      animationDuration: `${duration}ms`
    },
    onAnimationEnd: e => e.stopPropagation(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName$2,
      lineNumber: 114,
      columnNumber: 9
    }
  }), /*#__PURE__*/React__default["default"].createElement("button", {
    "data-flume-component": "toast-close",
    className: styles$2.exitButton,
    onClick: () => {
      stopTimer();
      onExitRequested(id);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName$2,
      lineNumber: 120,
      columnNumber: 7
    }
  }, "\u2715"));
};

var css_248z$1 = ".Connections_svgWrapper__6Rcg4{\n  position: absolute;\n  left: 0px;\n  height: 0px;\n}\n";
var styles$1 = {"svgWrapper":"Connections_svgWrapper__6Rcg4"};
styleInject(css_248z$1);

var _jsxFileName$1 = "/workspaces/flumeapi/src/components/Connections/Connections.js";

const Connections = ({
  nodes,
  editorId
}) => {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$1.svgWrapper,
    id: `${CONNECTIONS_ID}${editorId}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName$1,
      lineNumber: 8,
      columnNumber: 5
    }
  });
};

const checkForCircularNodes = (nodes, startNodeId) => {
  let isCircular = false;

  const walk = nodeId => {
    const outputs = Object.values(nodes[nodeId].connections.outputs);

    for (var i = 0; i < outputs.length; i++) {
      if (isCircular) {
        break;
      }

      const outputConnections = outputs[i];

      for (var k = 0; k < outputConnections.length; k++) {
        const connectedTo = outputConnections[k];

        if (connectedTo.nodeId === startNodeId) {
          isCircular = true;
          break;
        } else {
          walk(connectedTo.nodeId);
        }
      }
    }
  };

  walk(startNodeId);
  return isCircular;
};

const addConnection = (nodes, input, output, portTypes) => {
  const newNodes = { ...nodes,
    [input.nodeId]: { ...nodes[input.nodeId],
      connections: { ...nodes[input.nodeId].connections,
        inputs: { ...nodes[input.nodeId].connections.inputs,
          [input.portName]: [...(nodes[input.nodeId].connections.inputs[input.portName] || []), {
            nodeId: output.nodeId,
            portName: output.portName
          }]
        }
      }
    },
    [output.nodeId]: { ...nodes[output.nodeId],
      connections: { ...nodes[output.nodeId].connections,
        outputs: { ...nodes[output.nodeId].connections.outputs,
          [output.portName]: [...(nodes[output.nodeId].connections.outputs[output.portName] || []), {
            nodeId: input.nodeId,
            portName: input.portName
          }]
        }
      }
    }
  };
  return newNodes;
};

const removeConnection = (nodes, input, output) => {
  const inputNode = nodes[input.nodeId];
  const {
    [input.portName]: removedInputPort,
    ...newInputNodeConnectionsInputs
  } = inputNode.connections.inputs;
  const newInputNode = { ...inputNode,
    connections: { ...inputNode.connections,
      inputs: newInputNodeConnectionsInputs
    }
  };
  const outputNode = nodes[output.nodeId];
  const filteredOutputNodes = outputNode.connections.outputs[output.portName].filter(cnx => {
    return cnx.nodeId === input.nodeId ? cnx.portName !== input.portName : true;
  });
  const newOutputNode = { ...outputNode,
    connections: { ...outputNode.connections,
      outputs: { ...outputNode.connections.outputs,
        [output.portName]: filteredOutputNodes
      }
    }
  };
  return { ...nodes,
    [input.nodeId]: newInputNode,
    [output.nodeId]: newOutputNode
  };
};

const getFilteredTransputs = (transputs, nodeId) => Object.entries(transputs).reduce((obj, [portName, transput]) => {
  const newTransputs = transput.filter(t => t.nodeId !== nodeId);

  if (newTransputs.length) {
    obj[portName] = newTransputs;
  }

  return obj;
}, {});

const removeConnections = (connections, nodeId) => ({
  inputs: getFilteredTransputs(connections.inputs, nodeId),
  outputs: getFilteredTransputs(connections.outputs, nodeId)
});

const removeNode = (startNodes, nodeId) => {
  let {
    [nodeId]: deletedNode,
    ...nodes
  } = startNodes;
  nodes = Object.values(nodes).reduce((obj, node) => {
    obj[node.id] = { ...node,
      connections: removeConnections(node.connections, nodeId)
    };
    return obj;
  }, {});
  deleteConnectionsByNodeId(nodeId);
  return nodes;
};

const reconcileNodes = (initialNodes, nodeTypes, portTypes, context) => {
  let nodes = { ...initialNodes
  }; // Delete extraneous nodes

  let nodesToDelete = Object.values(nodes).map(node => !nodeTypes[node.type] ? node.id : undefined).filter(x => x);
  nodesToDelete.forEach(nodeId => {
    nodes = nodesReducer(nodes, {
      type: "REMOVE_NODE",
      nodeId
    }, {
      nodeTypes,
      portTypes,
      context
    });
  }); // Reconcile input data for each node

  let reconciledNodes = Object.values(nodes).reduce((nodesObj, node) => {
    const nodeType = nodeTypes[node.type];
    const defaultInputData = getDefaultData({
      node,
      nodeType,
      portTypes,
      context
    });
    const currentInputData = Object.entries(node.inputData).reduce((dataObj, [key, data]) => {
      if (defaultInputData[key] !== undefined) {
        dataObj[key] = data;
      }

      return dataObj;
    }, {});
    const newInputData = { ...defaultInputData,
      ...currentInputData
    };
    nodesObj[node.id] = { ...node,
      inputData: newInputData
    };
    return nodesObj;
  }, {}); // Reconcile node attributes for each node

  reconciledNodes = Object.values(reconciledNodes).reduce((nodesObj, node) => {
    let newNode = { ...node
    };
    const nodeType = nodeTypes[node.type];

    if (nodeType.root !== node.root) {
      if (nodeType.root && !node.root) {
        newNode.root = nodeType.root;
      } else if (!nodeType.root && node.root) {
        delete newNode.root;
      }
    }

    nodesObj[node.id] = newNode;
    return nodesObj;
  }, {});
  return reconciledNodes;
};

const getInitialNodes = (initialNodes = {}, defaultNodes = [], nodeTypes, portTypes, context) => {
  const reconciledNodes = reconcileNodes(initialNodes, nodeTypes, portTypes, context);
  return { ...reconciledNodes,
    ...defaultNodes.reduce((nodes, dNode, i) => {
      const nodeNotAdded = !Object.values(initialNodes).find(n => n.type === dNode.type);

      if (nodeNotAdded) {
        nodes = nodesReducer(nodes, {
          type: "ADD_NODE",
          id: `default-${i}`,
          defaultNode: true,
          x: dNode.x || 0,
          y: dNode.y || 0,
          nodeType: dNode.type
        }, {
          nodeTypes,
          portTypes,
          context
        });
      }

      return nodes;
    }, {})
  };
};

const getDefaultData = ({
  node,
  nodeType,
  portTypes,
  context
}) => {
  const inputs = Array.isArray(nodeType.inputs) ? nodeType.inputs : nodeType.inputs(node.inputData, node.connections, context);
  return inputs.reduce((obj, input) => {
    const inputType = portTypes[input.type];
    obj[input.name || inputType.name] = (input.controls || inputType.controls || []).reduce((obj2, control) => {
      obj2[control.name] = control.defaultValue;
      return obj2;
    }, {});
    return obj;
  }, {});
};

const nodesReducer = (nodes, action = {}, {
  nodeTypes,
  portTypes,
  cache,
  circularBehavior,
  context
}, dispatchToasts) => {
  switch (action.type) {
    case "ADD_CONNECTION":
      {
        const {
          input,
          output
        } = action;
        const inputIsNotConnected = !nodes[input.nodeId].connections.inputs[input.portName];

        if (inputIsNotConnected) {
          const allowCircular = circularBehavior === "warn" || circularBehavior === "allow";
          const newNodes = addConnection(nodes, input, output);
          const isCircular = checkForCircularNodes(newNodes, output.nodeId);

          if (isCircular && !allowCircular) {
            dispatchToasts({
              type: "ADD_TOAST",
              title: "Unable to connect",
              message: "Connecting these nodes would result in an infinite loop.",
              toastType: "warning",
              duration: 5000
            });
            return nodes;
          } else {
            if (isCircular && circularBehavior === "warn") {
              dispatchToasts({
                type: "ADD_TOAST",
                title: "Circular Connection Detected",
                message: "Connecting these nodes has created an infinite loop.",
                toastType: "warning",
                duration: 5000
              });
            }

            return newNodes;
          }
        } else return nodes;
      }

    case "REMOVE_CONNECTION":
      {
        const {
          input,
          output
        } = action;
        const id = output.nodeId + output.portName + input.nodeId + input.portName;
        delete cache.current.connections[id];
        deleteConnection({
          id
        });
        return removeConnection(nodes, input, output);
      }

    case "DESTROY_TRANSPUT":
      {
        const {
          transput,
          transputType
        } = action;
        const portId = transput.nodeId + transput.portName + transputType;
        delete cache.current.ports[portId];
        const cnxType = transputType === 'input' ? 'inputs' : 'outputs';
        const connections = nodes[transput.nodeId].connections[cnxType][transput.portName];
        if (!connections || !connections.length) return nodes;
        return connections.reduce((nodes, cnx) => {
          const [input, output] = transputType === 'input' ? [transput, cnx] : [cnx, transput];
          const id = output.nodeId + output.portName + input.nodeId + input.portName;
          delete cache.current.connections[id];
          deleteConnection({
            id
          });
          return removeConnection(nodes, input, output);
        }, nodes);
      }

    case "ADD_NODE":
      {
        const {
          x,
          y,
          nodeType,
          id,
          inputData,
          defaultNode,
          extraProperties
        } = action;
        const newNodeId = id || nanoid(10);
        const type = typeof nodeType !== 'string' ? nodeType : nodeTypes[nodeType];
        const newNode = {
          id: newNodeId,
          x,
          y,
          extraProperties: extraProperties,
          type: nodeType,
          width: type.initialWidth || 200,
          connections: {
            inputs: {},
            outputs: {}
          }
        };
        newNode.inputData = inputData || getDefaultData({
          node: newNode,
          nodeType: type,
          portTypes,
          context
        });

        if (defaultNode) {
          newNode.defaultNode = true;
        }

        if (type.root) {
          newNode.root = true;
        }

        return { ...nodes,
          [newNodeId]: newNode
        };
      }

    case "REMOVE_NODE":
      {
        const {
          nodeId
        } = action;
        return removeNode(nodes, nodeId);
      }

    case "HYDRATE_DEFAULT_NODES":
      {
        const newNodes = { ...nodes
        };

        for (const key in newNodes) {
          if (newNodes[key].defaultNode) {
            const newNodeId = nanoid(10);
            const {
              id,
              defaultNode,
              ...node
            } = newNodes[key];
            newNodes[newNodeId] = { ...node,
              id: newNodeId
            };
            delete newNodes[key];
          }
        }

        return newNodes;
      }

    case "SET_PORT_DATA":
      {
        const {
          nodeId,
          portName,
          controlName,
          data,
          setValue
        } = action;
        let newData = { ...nodes[nodeId].inputData,
          [portName]: { ...nodes[nodeId].inputData[portName],
            [controlName]: data
          }
        };

        if (setValue) {
          newData = setValue(newData, nodes[nodeId].inputData);
        }

        return { ...nodes,
          [nodeId]: { ...nodes[nodeId],
            inputData: newData
          }
        };
      }

    case "UPDATE_TYPE":
      {
        const {
          nodeId,
          newtype
        } = action;
        return { ...nodes,
          [nodeId]: { ...nodes[nodeId],
            type: newtype
          }
        };
      }

    case "UPDATE_PROPERTIES":
      {
        const {
          nodeId,
          properties
        } = action;
        return { ...nodes,
          [nodeId]: { ...nodes[nodeId],
            extraProperties: properties
          }
        };
      }

    case "SET_NODE_COORDINATES":
      {
        const {
          x,
          y,
          nodeId
        } = action;
        return { ...nodes,
          [nodeId]: { ...nodes[nodeId],
            x,
            y
          }
        };
      }

    default:
      return nodes;
  }
};

const connectNodesReducer = (reducer, environment, dispatchToasts) => (state, action) => reducer(state, action, environment, dispatchToasts);

const setComment = (comments, id, merge) => ({ ...comments,
  [id]: { ...comments[id],
    ...merge
  }
});

var commentsReducer = ((comments = {}, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      {
        const comment = {
          id: nanoid(10),
          text: "",
          x: action.x,
          y: action.y,
          width: 200,
          height: 30,
          color: "blue",
          isNew: true
        };
        return { ...comments,
          [comment.id]: comment
        };
      }

    case "REMOVE_COMMENT_NEW":
      const {
        isNew: toDelete,
        ...comment
      } = comments[action.id];
      return { ...comments,
        [action.id]: comment
      };

    case "SET_COMMENT_COORDINATES":
      {
        return setComment(comments, action.id, {
          x: action.x,
          y: action.y
        });
      }

    case "SET_COMMENT_DIMENSIONS":
      {
        return setComment(comments, action.id, {
          width: action.width,
          height: action.height
        });
      }

    case "SET_COMMENT_TEXT":
      {
        return setComment(comments, action.id, {
          text: action.text
        });
      }

    case "SET_COMMENT_COLOR":
      {
        return setComment(comments, action.id, {
          color: action.color
        });
      }

    case "DELETE_COMMENT":
      {
        const {
          [action.id]: toDelete,
          ...newComments
        } = comments;
        return newComments;
      }

    default:
      return comments;
  }
});

var toastsReducer = ((toasts = [], action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return [{
        id: nanoid(5),
        title: action.title,
        message: action.message,
        type: action.toastType || 'info',
        duration: action.duration || 10000,
        height: 0,
        exiting: false
      }, ...toasts];

    case "SET_HEIGHT":
      {
        const index = toasts.findIndex(t => t.id === action.id);
        return [...toasts.slice(0, index), { ...toasts[index],
          height: action.height
        }, ...toasts.slice(index + 1)];
      }

    case "SET_EXITING":
      {
        const index = toasts.findIndex(t => t.id === action.id);
        return [...toasts.slice(0, index), { ...toasts[index],
          exiting: true
        }, ...toasts.slice(index + 1)];
      }

    case "REMOVE_TOAST":
      {
        const index = toasts.findIndex(t => t.id === action.id);
        return [...toasts.slice(0, index), ...toasts.slice(index + 1)];
      }

    default:
      return toasts;
  }
});

var stageReducer = ((state, incomingAction) => {
  let action = typeof incomingAction === 'function' ? incomingAction(state) : incomingAction;

  switch (action.type) {
    case 'SET_SCALE':
      return { ...state,
        scale: action.scale
      };

    case 'SET_TRANSLATE':
      return { ...state,
        translate: action.translate
      };

    case 'SET_TRANSLATE_SCALE':
      return { ...state,
        translate: action.translate,
        scale: action.scale
      };

    default:
      return state;
  }
});

class Cache {
  constructor() {
    this.ports = {};
    this.connections = {};
  }

}

var css_248z = ".styles_dragWrapper__A5S3T{\n  z-index: 9999;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n.styles_debugWrapper__LEI-b{\n  display: flex;\n  position: absolute;\n  left: 10px;\n  bottom: 10px;\n  gap: 15px;\n}\n";
var styles = {"dragWrapper":"styles_dragWrapper__A5S3T","debugWrapper":"styles_debugWrapper__LEI-b"};
styleInject(css_248z);

function CreateAPI(dispatchNodes, dispatchToasts) {
  const api = {
    addNode: info => {
      dispatchNodes({
        "type": "ADD_NODE",
        ...info
      });
      return api;
    },
    removeNode: id => {
      dispatchNodes({
        "type": "REMOVE_NODE",
        "nodeId": id
      });
      return api;
    },
    updateType: (id, newtype) => {
      dispatchNodes({
        "type": "UPDATE_TYPE",
        "nodeId": id,
        "newtype": newtype
      });
      return api;
    },
    updateProperties: (id, properties) => {
      dispatchNodes({
        "type": "UPDATE_PROPERTIES",
        "nodeId": id,
        "properties": properties
      });
      return api;
    },
    addConnection: (fromId, fromPort, toId, toPort) => {
      dispatchNodes({
        "type": "ADD_CONNECTION",
        "output": {
          "nodeId": fromId,
          "portName": fromPort
        },
        "input": {
          "nodeId": toId,
          "portName": toPort
        }
      });
      return api;
    },
    removeConnection: (fromId, fromPort, toId, toPort) => {
      dispatchNodes({
        "type": "REMOVE_CONNECTION",
        "output": {
          "nodeId": fromId,
          "portName": fromPort
        },
        "input": {
          "nodeId": toId,
          "portName": toPort
        }
      });
      return api;
    },
    showToast: (title, message, type, duration) => {
      dispatchToasts({
        "type": "ADD_TOAST",
        "title": title,
        "message": message,
        "toastType": type,
        "duration": duration
      });
      return api;
    }
  };
  return api;
}

class LoopError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }

  static maxLoopsExceeded = 1;
}

class RootEngine {
  constructor(config, resolveInputControls, fireNodeFunction) {
    this.config = config;
    this.fireNodeFunction = fireNodeFunction;
    this.resolveInputControls = resolveInputControls;
    this.loops = 0;
    this.maxLoops = 1000;
  }

  resetLoops = maxLoops => {
    this.maxLoops = maxLoops !== undefined ? maxLoops : 1000;
    this.loops = 0;
  };
  checkLoops = () => {
    if (this.maxLoops >= 0 && this.loops > this.maxLoops) {
      throw new LoopError("Max loop count exceeded.", LoopError.maxLoopsExceeded);
    } else {
      this.loops++;
    }
  };
  getRootNode = nodes => {
    const roots = Object.values(nodes).filter(n => n.root);

    if (roots.length > 1) {
      throw new Error("The root engine must not be called with more than one root node.");
    }

    return roots[0];
  };
  reduceRootInputs = (inputs, callback) => Object.entries(inputs).reduce((obj, [inputName, connection]) => {
    const input = callback(inputName, connection);
    obj[input.name] = input.value;
    return obj;
  }, {});
  resolveInputValues = (node, nodeType, nodes, context) => {
    let inputs = nodeType.inputs;

    if (typeof inputs === 'function') {
      inputs = inputs(node.inputData, node.connections, context);
    }

    return inputs.reduce((obj, input) => {
      const inputConnections = node.connections.inputs[input.name] || [];

      if (inputConnections.length > 0) {
        obj[input.name] = this.getValueOfConnection(inputConnections[0], nodes, context);
      } else {
        obj[input.name] = this.resolveInputControls(input.type, node.inputData[input.name] || {}, context);
      }

      return obj;
    }, {});
  };
  getValueOfConnection = (connection, nodes, context) => {
    this.checkLoops();
    const outputNode = nodes[connection.nodeId];
    const outputNodeType = this.config.nodeTypes[outputNode.type];
    const inputValues = this.resolveInputValues(outputNode, outputNodeType, nodes, context);
    const outputResult = this.fireNodeFunction(outputNode, inputValues, outputNodeType, context)[connection.portName];
    return outputResult;
  };

  resolveRootNode(nodes, options = {}) {
    const rootNode = options.rootNodeId ? nodes[options.rootNodeId] : this.getRootNode(nodes);

    if (rootNode) {
      let inputs = this.config.nodeTypes[rootNode.type].inputs;

      if (typeof inputs === 'function') {
        inputs = inputs(rootNode.inputData, rootNode.connections, options.context);
      }

      const controlValues = inputs.reduce((obj, input) => {
        obj[input.name] = this.resolveInputControls(input.type, rootNode.inputData[input.name] || {}, options.context);
        return obj;
      }, {});
      const inputValues = this.reduceRootInputs(rootNode.connections.inputs, (inputName, connection) => {
        this.resetLoops(options.maxLoops);
        let value;

        try {
          value = this.getValueOfConnection(connection[0], nodes, options.context);
        } catch (e) {
          if (e.code === LoopError.maxLoopsExceeded) {
            console.error(`${e.message} Circular nodes detected in ${inputName} port.`);
          } else {
            console.error(e);
          }
        } finally {
          return {
            name: inputName,
            value
          };
        }
      });

      if (options.onlyResolveConnected) {
        return inputValues;
      } else {
        return { ...controlValues,
          ...inputValues
        };
      }
    } else {
      console.error("A root node was not found. The Root Engine requires that exactly one node be marked as the root node.");
      return {};
    }
  }

}

var _jsxFileName = "/workspaces/flumeapi/src/index.js";
const defaultContext = {};
window.Buffer = window.Buffer || require("buffer").Buffer;
exports.NodeEditor = ({
  comments: initialComments,
  nodes: initialNodes,
  nodeTypes = {},
  portTypes = {},
  defaultNodes = [],
  context = defaultContext,
  uiEvents = {},
  onChange,
  onCommentsChange,
  initialScale,
  spaceToPan = false,
  hideComments = false,
  disableComments = false,
  disableZoom = false,
  disablePan = false,
  circularBehavior,
  renderNodeHeader,
  debug,
  apiCallback
}, ref) => {
  const editorId = React__default["default"].useId();
  const cache = React__default["default"].useRef(new Cache());
  const stage = React__default["default"].useRef();
  const [sideEffectToasts, setSideEffectToasts] = React__default["default"].useState();
  const [toasts, dispatchToasts] = React__default["default"].useReducer(toastsReducer, []);
  const [nodes, dispatchNodes] = React__default["default"].useReducer(connectNodesReducer(nodesReducer, {
    nodeTypes,
    portTypes,
    cache,
    circularBehavior,
    context
  }, setSideEffectToasts), {}, () => getInitialNodes(initialNodes, defaultNodes, nodeTypes, portTypes, context));
  const [comments, dispatchComments] = React__default["default"].useReducer(commentsReducer, initialComments || {});
  React__default["default"].useEffect(() => {
    dispatchNodes({
      type: "HYDRATE_DEFAULT_NODES"
    });
  }, []);
  const [shouldRecalculateConnections, setShouldRecalculateConnections] = React__default["default"].useState(true);
  const [stageState, dispatchStageState] = React__default["default"].useReducer(stageReducer, {
    scale: typeof initialScale === "number" ? clamp_1(initialScale, 0.1, 7) : 1,
    translate: {
      x: 0,
      y: 0
    }
  });
  const recalculateConnections = React__default["default"].useCallback(() => {
    createConnections(nodes, stageState, editorId);
  }, [nodes, editorId, stageState]);

  const recalculateStageRect = () => {
    stage.current = document.getElementById(`${STAGE_ID}${editorId}`).getBoundingClientRect();
  };

  React__default["default"].useEffect(() => {
    if (apiCallback) {
      apiCallback(CreateAPI(dispatchNodes, dispatchToasts));
    }
  }, [apiCallback]);
  React__default["default"].useLayoutEffect(() => {
    if (shouldRecalculateConnections) {
      recalculateConnections();
      setShouldRecalculateConnections(false);
    }
  }, [shouldRecalculateConnections, recalculateConnections]);

  const triggerRecalculation = () => {
    setShouldRecalculateConnections(true);
  };

  React__default["default"].useImperativeHandle(ref, () => ({
    getNodes: () => {
      return nodes;
    },
    getComments: () => {
      return comments;
    }
  }));
  const previousNodes = usePrevious(nodes);
  React__default["default"].useEffect(() => {
    if (previousNodes && onChange && nodes !== previousNodes) {
      onChange(nodes);
    }
  }, [nodes, previousNodes, onChange]);
  const previousComments = usePrevious(comments);
  React__default["default"].useEffect(() => {
    if (previousComments && onCommentsChange && comments !== previousComments) {
      onCommentsChange(comments);
    }
  }, [comments, previousComments, onCommentsChange]);
  React__default["default"].useEffect(() => {
    if (sideEffectToasts) {
      dispatchToasts(sideEffectToasts);
      setSideEffectToasts(null);
    }
  }, [sideEffectToasts]);
  return /*#__PURE__*/React__default["default"].createElement(PortTypesContext.Provider, {
    value: portTypes,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 5
    }
  }, /*#__PURE__*/React__default["default"].createElement(NodeTypesContext.Provider, {
    value: nodeTypes,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, /*#__PURE__*/React__default["default"].createElement(NodeDispatchContext.Provider, {
    value: dispatchNodes,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, /*#__PURE__*/React__default["default"].createElement(ConnectionRecalculateContext.Provider, {
    value: triggerRecalculation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, /*#__PURE__*/React__default["default"].createElement(ContextContext.Provider, {
    value: context,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, /*#__PURE__*/React__default["default"].createElement(StageContext.Provider, {
    value: stageState,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }, /*#__PURE__*/React__default["default"].createElement(CacheContext.Provider, {
    value: cache,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, /*#__PURE__*/React__default["default"].createElement(EditorIdContext.Provider, {
    value: editorId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 19
    }
  }, /*#__PURE__*/React__default["default"].createElement(RecalculateStageRectContext.Provider, {
    value: recalculateStageRect,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }, /*#__PURE__*/React__default["default"].createElement(UIEventsContext.Provider, {
    value: uiEvents,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 23
    }
  }, /*#__PURE__*/React__default["default"].createElement(Stage, {
    editorId: editorId,
    scale: stageState.scale,
    translate: stageState.translate,
    spaceToPan: spaceToPan,
    disablePan: disablePan,
    disableZoom: disableZoom,
    dispatchStageState: dispatchStageState,
    dispatchComments: dispatchComments,
    disableComments: disableComments || hideComments,
    stageRef: stage,
    numNodes: Object.keys(nodes).length,
    outerStageChildren: /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 29
      }
    }, debug && /*#__PURE__*/React__default["default"].createElement("div", {
      className: styles.debugWrapper,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 33
      }
    }, /*#__PURE__*/React__default["default"].createElement("button", {
      className: styles.debugButton,
      onClick: () => console.log(nodes),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 35
      }
    }, "Log Nodes"), /*#__PURE__*/React__default["default"].createElement("button", {
      className: styles.debugButton,
      onClick: () => console.log(JSON.stringify(nodes)),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 35
      }
    }, "Export Nodes"), /*#__PURE__*/React__default["default"].createElement("button", {
      className: styles.debugButton,
      onClick: () => console.log(comments),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 35
      }
    }, "Log Comments")), /*#__PURE__*/React__default["default"].createElement(Toaster, {
      toasts: toasts,
      dispatchToasts: dispatchToasts,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 31
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 25
    }
  }, !hideComments && Object.values(comments).map(comment => /*#__PURE__*/React__default["default"].createElement(Comment, _extends({}, comment, {
    stageRect: stage,
    dispatch: dispatchComments,
    onDragStart: recalculateStageRect,
    key: comment.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 31
    }
  }))), Object.values(nodes).map(node => /*#__PURE__*/React__default["default"].createElement(Node, _extends({}, node, {
    stageRect: stage,
    onDragEnd: triggerRecalculation,
    onDragStart: recalculateStageRect,
    renderNodeHeader: renderNodeHeader,
    key: node.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 29
    }
  }))), /*#__PURE__*/React__default["default"].createElement(Connections, {
    nodes: nodes,
    editorId: editorId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 27
    }
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles.dragWrapper,
    id: `${DRAG_CONNECTION_ID}${editorId}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 27
    }
  }))))))))))));
};
exports.NodeEditor = /*#__PURE__*/React__default["default"].forwardRef(exports.NodeEditor);
const useRootEngine = (nodes, engine, context, options = {}) => Object.keys(nodes).length ? engine.resolveRootNode(nodes, { ...options,
  context
}) : {};

exports.Colors = Colors;
exports.Controls = Controls;
exports.FlumeConfig = FlumeConfig;
exports.RootEngine = RootEngine;
exports.useRootEngine = useRootEngine;
//# sourceMappingURL=index.js.map
