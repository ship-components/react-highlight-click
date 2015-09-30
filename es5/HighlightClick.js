/*!
 *                               __            .__    .__       .__    .__  .__       .__     __                   .__  .__        __    
 * _______   ____ _____    _____/  |_          |  |__ |__| ____ |  |__ |  | |__| ____ |  |___/  |_            ____ |  | |__| ____ |  | __
 * \_  __ \_/ __ \\__  \ _/ ___\   __\  ______ |  |  \|  |/ ___\|  |  \|  | |  |/ ___\|  |  \   __\  ______ _/ ___\|  | |  |/ ___\|  |/ /
 *  |  | \/\  ___/ / __ \\  \___|  |   /_____/ |   Y  \  / /_/  >   Y  \  |_|  / /_/  >   Y  \  |   /_____/ \  \___|  |_|  \  \___|    < 
 *  |__|    \___  >____  /\___  >__|           |___|  /__\___  /|___|  /____/__\___  /|___|  /__|            \___  >____/__|\___  >__|_ \
 *              \/     \/     \/                    \/  /_____/      \/       /_____/      \/                    \/             \/     \/
 * react-highlight-click 0.1.0
 * Description: Generates temporary click highlights
 * Author: Isaac Suttell
 * Homepage: https://github.com/ship-components/react-highlight-click/issues#readme
 * Bugs: https://github.com/ship-components/react-highlight-click/issues
 * License: MIT
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** ****************************************************************************
	 * HighlightClick
	 *
	 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
	 * @file         Show expanding circles where the user clicks
	 ******************************************************************************/

	// Modules
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var HighlightClick = (function (_React$Component) {
	  _inherits(HighlightClick, _React$Component);

	  /**
	   * Wrapper component that generates click highlights when the user clicks inside it
	   * @param  {Object} props
	   */

	  function HighlightClick(props) {
	    _classCallCheck(this, HighlightClick);

	    _get(Object.getPrototypeOf(HighlightClick.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      clicks: []
	    };
	  }

	  /**
	   * Based on jQuery. Get the elements offset to the top/left of page
	   * @param    {Node}    el    [description]
	   * @static
	   */

	  /**
	   * Figure out the relative position in the element where the user clicked
	   * @param  {React}   el
	   * @param  {Event}   event
	   * @return {Object}
	   */

	  _createClass(HighlightClick, [{
	    key: 'getRelativeClickPosition',
	    value: function getRelativeClickPosition(el, event) {
	      el = el || _reactDom2['default'].findDOMNode(this);
	      var elOffset = HighlightClick.getElementOffset(el);
	      return {
	        top: event.pageY - elOffset.top,
	        left: event.pageX - elOffset.left
	      };
	    }

	    /**
	     * The bread and butter. Creates a highglight
	     * @param  {Event} event
	     * @return {[type]}       [description]
	     */
	  }, {
	    key: 'handleClick',
	    value: function handleClick(event) {
	      var el = _reactDom2['default'].findDOMNode(this);

	      // Figure out where the click is
	      var click = this.getRelativeClickPosition(el, event);

	      // Ensure we have a unqiue id we can keep track of
	      click.id = Date.now();

	      // Clone to prevent accidently changes
	      var clicks = this.state.clicks.slice(0);

	      // Add the new click
	      clicks.push(click);

	      // Save
	      this.setState({
	        clicks: clicks
	      });

	      // Clean it up after it's gone
	      setTimeout(this.removeClick.bind(this, click), this.props.timeout);

	      if (typeof this.props.onClick === 'function') {
	        this.props.onClick(event);
	      }
	    }

	    /**
	     * Remove the click from the state since we don't need it anymore
	     * @param  {Object} click
	     */
	  }, {
	    key: 'removeClick',
	    value: function removeClick(click) {
	      // Clone
	      var clicks = this.state.clicks.slice(0);

	      // Find it
	      var index = clicks.findIndex(function (item) {
	        return item.id === click.id;
	      });

	      if (index > -1) {

	        // Remove it
	        clicks.splice(index, 1);

	        // Update
	        this.setState({
	          clicks: clicks
	        });
	      }
	    }

	    /**
	     * Render any active highlights
	     * @return {React}
	     */
	  }, {
	    key: 'renderHighlights',
	    value: function renderHighlights() {
	      var _this = this;

	      if (!this.state.clicks.length) {
	        return null;
	      }

	      return this.state.clicks.map(function (click) {
	        var styles = {};

	        // Size
	        styles.width = _this.props.size;
	        styles.height = _this.props.size;

	        // Center
	        styles.left = click.left - _this.props.size / 2;
	        styles.top = click.top - _this.props.size / 2;

	        return _react2['default'].createElement('div', {
	          key: click.id,
	          style: styles,
	          className: 'highlight-click--click'
	        });
	      });
	    }

	    /**
	     * This component is mostly a wrapper.
	     * @return {React}
	     */
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        this.props.tag,
	        {
	          className: 'highligh-click ' + (this.props.className ? this.props.className : ' '),
	          onClick: this.handleClick.bind(this) },
	        this.renderHighlights(),
	        this.props.children
	      );
	    }
	  }]);

	  return HighlightClick;
	})(_react2['default'].Component);

	exports['default'] = HighlightClick;
	HighlightClick.getElementOffset = function getElementOffset(el) {
	  var doc = el && el.ownerDocument;

	  if (!doc) {
	    return;
	  }

	  var box = el.getBoundingClientRect();

	  var docElem = doc.documentElement;

	  return {
	    top: box.top + (window.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
	    left: box.left + (window.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
	  };
	};

	/**
	 * Expected Types
	 * @type {Object}
	 * @static
	 */
	HighlightClick.propTypes = {
	  onClick: _react2['default'].PropTypes.func,
	  className: _react2['default'].PropTypes.string,
	  tag: _react2['default'].PropTypes.string,
	  size: _react2['default'].PropTypes.number,
	  timeout: _react2['default'].PropTypes.number
	};

	/**
	 * Defaults
	 * @type {Object}
	 * @static
	 */
	HighlightClick.defaultProps = {
	  className: '',
	  tag: 'div',
	  size: 100,
	  timeout: 500
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ }
/******/ ]);