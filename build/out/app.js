(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('tty'), require('util'), require('os'), require('path'), require('buffer'), require('fs'), require('stream'), require('assert'), require('events'), require('crypto'), require('http'), require('url'), require('net'), require('querystring')) :
    typeof define === 'function' && define.amd ? define(['tty', 'util', 'os', 'path', 'buffer', 'fs', 'stream', 'assert', 'events', 'crypto', 'http', 'url', 'net', 'querystring'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tty, global.util, global.os, global.require$$0$1, global.buffer, global.fs, global.Stream, global.assert$1, global.require$$0$2, global.crypto, global.http, global.url, global.net, global.qs));
})(this, (function (tty, util, os, require$$0$1, buffer, fs, Stream, assert$1, require$$0$2, crypto, http, url, net, qs) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var tty__default = /*#__PURE__*/_interopDefaultLegacy(tty);
    var util__default = /*#__PURE__*/_interopDefaultLegacy(util);
    var os__default = /*#__PURE__*/_interopDefaultLegacy(os);
    var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
    var buffer__default = /*#__PURE__*/_interopDefaultLegacy(buffer);
    var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
    var Stream__default = /*#__PURE__*/_interopDefaultLegacy(Stream);
    var assert__default = /*#__PURE__*/_interopDefaultLegacy(assert$1);
    var require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$2);
    var crypto__default = /*#__PURE__*/_interopDefaultLegacy(crypto);
    var http__default = /*#__PURE__*/_interopDefaultLegacy(http);
    var url__default = /*#__PURE__*/_interopDefaultLegacy(url);
    var net__default = /*#__PURE__*/_interopDefaultLegacy(net);
    var qs__default = /*#__PURE__*/_interopDefaultLegacy(qs);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /* eslint complexity: [2, 18], max-statements: [2, 33] */
    var shams$1 = function hasSymbols() {
    	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
    	if (typeof Symbol.iterator === 'symbol') { return true; }

    	var obj = {};
    	var sym = Symbol('test');
    	var symObj = Object(sym);
    	if (typeof sym === 'string') { return false; }

    	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
    	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

    	// temp disabled per https://github.com/ljharb/object.assign/issues/17
    	// if (sym instanceof Symbol) { return false; }
    	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    	// if (!(symObj instanceof Symbol)) { return false; }

    	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
    	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

    	var symVal = 42;
    	obj[sym] = symVal;
    	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

    	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

    	var syms = Object.getOwnPropertySymbols(obj);
    	if (syms.length !== 1 || syms[0] !== sym) { return false; }

    	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

    	if (typeof Object.getOwnPropertyDescriptor === 'function') {
    		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
    		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
    	}

    	return true;
    };

    var shams = function hasToStringTagShams() {
    	return shams$1() && !!Symbol.toStringTag;
    };

    var toStr = Object.prototype.toString;
    var fnToStr = Function.prototype.toString;
    var isFnRegex = /^\s*(?:function)?\*/;
    var hasToStringTag = shams();
    var getProto = Object.getPrototypeOf;
    var getGeneratorFunc = function () { // eslint-disable-line consistent-return
    	if (!hasToStringTag) {
    		return false;
    	}
    	try {
    		return Function('return function*() {}')();
    	} catch (e) {
    	}
    };
    var GeneratorFunction;

    var isGeneratorFunction$1 = function isGeneratorFunction(fn) {
    	if (typeof fn !== 'function') {
    		return false;
    	}
    	if (isFnRegex.test(fnToStr.call(fn))) {
    		return true;
    	}
    	if (!hasToStringTag) {
    		var str = toStr.call(fn);
    		return str === '[object GeneratorFunction]';
    	}
    	if (!getProto) {
    		return false;
    	}
    	if (typeof GeneratorFunction === 'undefined') {
    		var generatorFunc = getGeneratorFunc();
    		GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
    	}
    	return getProto(fn) === GeneratorFunction;
    };

    function getAugmentedNamespace(n) {
    	if (n.__esModule) return n;
    	var a = Object.defineProperty({}, '__esModule', {value: true});
    	Object.keys(n).forEach(function (k) {
    		var d = Object.getOwnPropertyDescriptor(n, k);
    		Object.defineProperty(a, k, d.get ? d : {
    			enumerable: true,
    			get: function () {
    				return n[k];
    			}
    		});
    	});
    	return a;
    }

    function createCommonjsModule(fn) {
      var module = { exports: {} };
    	return fn(module, module.exports), module.exports;
    }

    /**
     * Helpers.
     */
    var s = 1000;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;

    /**
     * Parse or format the given `val`.
     *
     * Options:
     *
     *  - `long` verbose formatting [false]
     *
     * @param {String|Number} val
     * @param {Object} [options]
     * @throws {Error} throw an error if val is not a non-empty string or a number
     * @return {String|Number}
     * @api public
     */

    var ms = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === 'string' && val.length > 0) {
        return parse$8(val);
      } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        'val is not a non-empty string or a valid number. val=' +
          JSON.stringify(val)
      );
    };

    /**
     * Parse the given `str` and return milliseconds.
     *
     * @param {String} str
     * @return {Number}
     * @api private
     */

    function parse$8(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || 'ms').toLowerCase();
      switch (type) {
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
          return n * y;
        case 'weeks':
        case 'week':
        case 'w':
          return n * w;
        case 'days':
        case 'day':
        case 'd':
          return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
          return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
          return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
          return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
          return n;
        default:
          return undefined;
      }
    }

    /**
     * Short format for `ms`.
     *
     * @param {Number} ms
     * @return {String}
     * @api private
     */

    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + 's';
      }
      return ms + 'ms';
    }

    /**
     * Long format for `ms`.
     *
     * @param {Number} ms
     * @return {String}
     * @api private
     */

    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
      }
      return ms + ' ms';
    }

    /**
     * Pluralization helper.
     */

    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
    }

    /**
     * This is the common logic for both the Node.js and web browser
     * implementations of `debug()`.
     */

    function setup$1(env) {
    	createDebug.debug = createDebug;
    	createDebug.default = createDebug;
    	createDebug.coerce = coerce;
    	createDebug.disable = disable;
    	createDebug.enable = enable;
    	createDebug.enabled = enabled;
    	createDebug.humanize = ms;
    	createDebug.destroy = destroy;

    	Object.keys(env).forEach(key => {
    		createDebug[key] = env[key];
    	});

    	/**
    	* The currently active debug mode names, and names to skip.
    	*/

    	createDebug.names = [];
    	createDebug.skips = [];

    	/**
    	* Map of special "%n" handling functions, for the debug "format" argument.
    	*
    	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
    	*/
    	createDebug.formatters = {};

    	/**
    	* Selects a color for a debug namespace
    	* @param {String} namespace The namespace string for the debug instance to be colored
    	* @return {Number|String} An ANSI color code for the given namespace
    	* @api private
    	*/
    	function selectColor(namespace) {
    		let hash = 0;

    		for (let i = 0; i < namespace.length; i++) {
    			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
    			hash |= 0; // Convert to 32bit integer
    		}

    		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    	}
    	createDebug.selectColor = selectColor;

    	/**
    	* Create a debugger with the given `namespace`.
    	*
    	* @param {String} namespace
    	* @return {Function}
    	* @api public
    	*/
    	function createDebug(namespace) {
    		let prevTime;
    		let enableOverride = null;
    		let namespacesCache;
    		let enabledCache;

    		function debug(...args) {
    			// Disabled?
    			if (!debug.enabled) {
    				return;
    			}

    			const self = debug;

    			// Set `diff` timestamp
    			const curr = Number(new Date());
    			const ms = curr - (prevTime || curr);
    			self.diff = ms;
    			self.prev = prevTime;
    			self.curr = curr;
    			prevTime = curr;

    			args[0] = createDebug.coerce(args[0]);

    			if (typeof args[0] !== 'string') {
    				// Anything else let's inspect with %O
    				args.unshift('%O');
    			}

    			// Apply any `formatters` transformations
    			let index = 0;
    			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
    				// If we encounter an escaped % then don't increase the array index
    				if (match === '%%') {
    					return '%';
    				}
    				index++;
    				const formatter = createDebug.formatters[format];
    				if (typeof formatter === 'function') {
    					const val = args[index];
    					match = formatter.call(self, val);

    					// Now we need to remove `args[index]` since it's inlined in the `format`
    					args.splice(index, 1);
    					index--;
    				}
    				return match;
    			});

    			// Apply env-specific formatting (colors, etc.)
    			createDebug.formatArgs.call(self, args);

    			const logFn = self.log || createDebug.log;
    			logFn.apply(self, args);
    		}

    		debug.namespace = namespace;
    		debug.useColors = createDebug.useColors();
    		debug.color = createDebug.selectColor(namespace);
    		debug.extend = extend;
    		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

    		Object.defineProperty(debug, 'enabled', {
    			enumerable: true,
    			configurable: false,
    			get: () => {
    				if (enableOverride !== null) {
    					return enableOverride;
    				}
    				if (namespacesCache !== createDebug.namespaces) {
    					namespacesCache = createDebug.namespaces;
    					enabledCache = createDebug.enabled(namespace);
    				}

    				return enabledCache;
    			},
    			set: v => {
    				enableOverride = v;
    			}
    		});

    		// Env-specific initialization logic for debug instances
    		if (typeof createDebug.init === 'function') {
    			createDebug.init(debug);
    		}

    		return debug;
    	}

    	function extend(namespace, delimiter) {
    		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    		newDebug.log = this.log;
    		return newDebug;
    	}

    	/**
    	* Enables a debug mode by namespaces. This can include modes
    	* separated by a colon and wildcards.
    	*
    	* @param {String} namespaces
    	* @api public
    	*/
    	function enable(namespaces) {
    		createDebug.save(namespaces);
    		createDebug.namespaces = namespaces;

    		createDebug.names = [];
    		createDebug.skips = [];

    		let i;
    		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    		const len = split.length;

    		for (i = 0; i < len; i++) {
    			if (!split[i]) {
    				// ignore empty strings
    				continue;
    			}

    			namespaces = split[i].replace(/\*/g, '.*?');

    			if (namespaces[0] === '-') {
    				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    			} else {
    				createDebug.names.push(new RegExp('^' + namespaces + '$'));
    			}
    		}
    	}

    	/**
    	* Disable debug output.
    	*
    	* @return {String} namespaces
    	* @api public
    	*/
    	function disable() {
    		const namespaces = [
    			...createDebug.names.map(toNamespace),
    			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
    		].join(',');
    		createDebug.enable('');
    		return namespaces;
    	}

    	/**
    	* Returns true if the given mode name is enabled, false otherwise.
    	*
    	* @param {String} name
    	* @return {Boolean}
    	* @api public
    	*/
    	function enabled(name) {
    		if (name[name.length - 1] === '*') {
    			return true;
    		}

    		let i;
    		let len;

    		for (i = 0, len = createDebug.skips.length; i < len; i++) {
    			if (createDebug.skips[i].test(name)) {
    				return false;
    			}
    		}

    		for (i = 0, len = createDebug.names.length; i < len; i++) {
    			if (createDebug.names[i].test(name)) {
    				return true;
    			}
    		}

    		return false;
    	}

    	/**
    	* Convert regexp to namespace
    	*
    	* @param {RegExp} regxep
    	* @return {String} namespace
    	* @api private
    	*/
    	function toNamespace(regexp) {
    		return regexp.toString()
    			.substring(2, regexp.toString().length - 2)
    			.replace(/\.\*\?$/, '*');
    	}

    	/**
    	* Coerce `val`.
    	*
    	* @param {Mixed} val
    	* @return {Mixed}
    	* @api private
    	*/
    	function coerce(val) {
    		if (val instanceof Error) {
    			return val.stack || val.message;
    		}
    		return val;
    	}

    	/**
    	* XXX DO NOT USE. This is a temporary stub function.
    	* XXX It WILL be removed in the next major release.
    	*/
    	function destroy() {
    		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    	}

    	createDebug.enable(createDebug.load());

    	return createDebug;
    }

    var common$1 = setup$1;

    /* eslint-env browser */

    var browser$1 = createCommonjsModule(function (module, exports) {
    /**
     * This is the web browser implementation of `debug()`.
     */

    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = (() => {
    	let warned = false;

    	return () => {
    		if (!warned) {
    			warned = true;
    			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    		}
    	};
    })();

    /**
     * Colors.
     */

    exports.colors = [
    	'#0000CC',
    	'#0000FF',
    	'#0033CC',
    	'#0033FF',
    	'#0066CC',
    	'#0066FF',
    	'#0099CC',
    	'#0099FF',
    	'#00CC00',
    	'#00CC33',
    	'#00CC66',
    	'#00CC99',
    	'#00CCCC',
    	'#00CCFF',
    	'#3300CC',
    	'#3300FF',
    	'#3333CC',
    	'#3333FF',
    	'#3366CC',
    	'#3366FF',
    	'#3399CC',
    	'#3399FF',
    	'#33CC00',
    	'#33CC33',
    	'#33CC66',
    	'#33CC99',
    	'#33CCCC',
    	'#33CCFF',
    	'#6600CC',
    	'#6600FF',
    	'#6633CC',
    	'#6633FF',
    	'#66CC00',
    	'#66CC33',
    	'#9900CC',
    	'#9900FF',
    	'#9933CC',
    	'#9933FF',
    	'#99CC00',
    	'#99CC33',
    	'#CC0000',
    	'#CC0033',
    	'#CC0066',
    	'#CC0099',
    	'#CC00CC',
    	'#CC00FF',
    	'#CC3300',
    	'#CC3333',
    	'#CC3366',
    	'#CC3399',
    	'#CC33CC',
    	'#CC33FF',
    	'#CC6600',
    	'#CC6633',
    	'#CC9900',
    	'#CC9933',
    	'#CCCC00',
    	'#CCCC33',
    	'#FF0000',
    	'#FF0033',
    	'#FF0066',
    	'#FF0099',
    	'#FF00CC',
    	'#FF00FF',
    	'#FF3300',
    	'#FF3333',
    	'#FF3366',
    	'#FF3399',
    	'#FF33CC',
    	'#FF33FF',
    	'#FF6600',
    	'#FF6633',
    	'#FF9900',
    	'#FF9933',
    	'#FFCC00',
    	'#FFCC33'
    ];

    /**
     * Currently only WebKit-based Web Inspectors, Firefox >= v31,
     * and the Firebug extension (any Firefox version) are known
     * to support "%c" CSS customizations.
     *
     * TODO: add a `localStorage` variable to explicitly enable/disable colors
     */

    // eslint-disable-next-line complexity
    function useColors() {
    	// NB: In an Electron preload script, document will be defined but not fully
    	// initialized. Since we know we're in Chrome, we'll just detect this case
    	// explicitly
    	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    		return true;
    	}

    	// Internet Explorer and Edge do not support colors.
    	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    		return false;
    	}

    	// Is webkit? http://stackoverflow.com/a/16459606/376773
    	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    		// Is firebug? http://stackoverflow.com/a/398120/376773
    		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    		// Is firefox >= v31?
    		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    		// Double check webkit in userAgent just in case we are in a worker
    		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }

    /**
     * Colorize log arguments if enabled.
     *
     * @api public
     */

    function formatArgs(args) {
    	args[0] = (this.useColors ? '%c' : '') +
    		this.namespace +
    		(this.useColors ? ' %c' : ' ') +
    		args[0] +
    		(this.useColors ? '%c ' : ' ') +
    		'+' + module.exports.humanize(this.diff);

    	if (!this.useColors) {
    		return;
    	}

    	const c = 'color: ' + this.color;
    	args.splice(1, 0, c, 'color: inherit');

    	// The final "%c" is somewhat tricky, because there could be other
    	// arguments passed either before or after the %c, so we need to
    	// figure out the correct index to insert the CSS into
    	let index = 0;
    	let lastC = 0;
    	args[0].replace(/%[a-zA-Z%]/g, match => {
    		if (match === '%%') {
    			return;
    		}
    		index++;
    		if (match === '%c') {
    			// We only are interested in the *last* %c
    			// (the user may have provided their own)
    			lastC = index;
    		}
    	});

    	args.splice(lastC, 0, c);
    }

    /**
     * Invokes `console.debug()` when available.
     * No-op when `console.debug` is not a "function".
     * If `console.debug` is not available, falls back
     * to `console.log`.
     *
     * @api public
     */
    exports.log = console.debug || console.log || (() => {});

    /**
     * Save `namespaces`.
     *
     * @param {String} namespaces
     * @api private
     */
    function save(namespaces) {
    	try {
    		if (namespaces) {
    			exports.storage.setItem('debug', namespaces);
    		} else {
    			exports.storage.removeItem('debug');
    		}
    	} catch (error) {
    		// Swallow
    		// XXX (@Qix-) should we be logging these?
    	}
    }

    /**
     * Load `namespaces`.
     *
     * @return {String} returns the previously persisted debug modes
     * @api private
     */
    function load() {
    	let r;
    	try {
    		r = exports.storage.getItem('debug');
    	} catch (error) {
    		// Swallow
    		// XXX (@Qix-) should we be logging these?
    	}

    	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    	if (!r && typeof process !== 'undefined' && 'env' in process) {
    		r = process.env.DEBUG;
    	}

    	return r;
    }

    /**
     * Localstorage attempts to return the localstorage.
     *
     * This is necessary because safari throws
     * when a user disables cookies/localstorage
     * and you attempt to access it.
     *
     * @return {LocalStorage}
     * @api private
     */

    function localstorage() {
    	try {
    		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    		// The Browser also has localStorage in the global context.
    		return localStorage;
    	} catch (error) {
    		// Swallow
    		// XXX (@Qix-) should we be logging these?
    	}
    }

    module.exports = common$1(exports);

    const {formatters} = module.exports;

    /**
     * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
     */

    formatters.j = function (v) {
    	try {
    		return JSON.stringify(v);
    	} catch (error) {
    		return '[UnexpectedJSONParseError]: ' + error.message;
    	}
    };
    });

    var hasFlag = (flag, argv) => {
    	argv = argv || process.argv;
    	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
    	const pos = argv.indexOf(prefix + flag);
    	const terminatorPos = argv.indexOf('--');
    	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
    };

    const env = process.env;

    let forceColor;
    if (hasFlag('no-color') ||
    	hasFlag('no-colors') ||
    	hasFlag('color=false')) {
    	forceColor = false;
    } else if (hasFlag('color') ||
    	hasFlag('colors') ||
    	hasFlag('color=true') ||
    	hasFlag('color=always')) {
    	forceColor = true;
    }
    if ('FORCE_COLOR' in env) {
    	forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
    }

    function translateLevel(level) {
    	if (level === 0) {
    		return false;
    	}

    	return {
    		level,
    		hasBasic: true,
    		has256: level >= 2,
    		has16m: level >= 3
    	};
    }

    function supportsColor(stream) {
    	if (forceColor === false) {
    		return 0;
    	}

    	if (hasFlag('color=16m') ||
    		hasFlag('color=full') ||
    		hasFlag('color=truecolor')) {
    		return 3;
    	}

    	if (hasFlag('color=256')) {
    		return 2;
    	}

    	if (stream && !stream.isTTY && forceColor !== true) {
    		return 0;
    	}

    	const min = forceColor ? 1 : 0;

    	if (process.platform === 'win32') {
    		// Node.js 7.5.0 is the first version of Node.js to include a patch to
    		// libuv that enables 256 color output on Windows. Anything earlier and it
    		// won't work. However, here we target Node.js 8 at minimum as it is an LTS
    		// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
    		// release that supports 256 colors. Windows 10 build 14931 is the first release
    		// that supports 16m/TrueColor.
    		const osRelease = os__default["default"].release().split('.');
    		if (
    			Number(process.versions.node.split('.')[0]) >= 8 &&
    			Number(osRelease[0]) >= 10 &&
    			Number(osRelease[2]) >= 10586
    		) {
    			return Number(osRelease[2]) >= 14931 ? 3 : 2;
    		}

    		return 1;
    	}

    	if ('CI' in env) {
    		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
    			return 1;
    		}

    		return min;
    	}

    	if ('TEAMCITY_VERSION' in env) {
    		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    	}

    	if (env.COLORTERM === 'truecolor') {
    		return 3;
    	}

    	if ('TERM_PROGRAM' in env) {
    		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

    		switch (env.TERM_PROGRAM) {
    			case 'iTerm.app':
    				return version >= 3 ? 3 : 2;
    			case 'Apple_Terminal':
    				return 2;
    			// No default
    		}
    	}

    	if (/-256(color)?$/i.test(env.TERM)) {
    		return 2;
    	}

    	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    		return 1;
    	}

    	if ('COLORTERM' in env) {
    		return 1;
    	}

    	if (env.TERM === 'dumb') {
    		return min;
    	}

    	return min;
    }

    function getSupportLevel(stream) {
    	const level = supportsColor(stream);
    	return translateLevel(level);
    }

    var supportsColor_1 = {
    	supportsColor: getSupportLevel,
    	stdout: getSupportLevel(process.stdout),
    	stderr: getSupportLevel(process.stderr)
    };

    /**
     * Module dependencies.
     */

    var node$1 = createCommonjsModule(function (module, exports) {
    /**
     * This is the Node.js implementation of `debug()`.
     */

    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.destroy = util__default["default"].deprecate(
    	() => {},
    	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
    );

    /**
     * Colors.
     */

    exports.colors = [6, 2, 3, 4, 5, 1];

    try {
    	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    	// eslint-disable-next-line import/no-extraneous-dependencies
    	const supportsColor = supportsColor_1;

    	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
    		exports.colors = [
    			20,
    			21,
    			26,
    			27,
    			32,
    			33,
    			38,
    			39,
    			40,
    			41,
    			42,
    			43,
    			44,
    			45,
    			56,
    			57,
    			62,
    			63,
    			68,
    			69,
    			74,
    			75,
    			76,
    			77,
    			78,
    			79,
    			80,
    			81,
    			92,
    			93,
    			98,
    			99,
    			112,
    			113,
    			128,
    			129,
    			134,
    			135,
    			148,
    			149,
    			160,
    			161,
    			162,
    			163,
    			164,
    			165,
    			166,
    			167,
    			168,
    			169,
    			170,
    			171,
    			172,
    			173,
    			178,
    			179,
    			184,
    			185,
    			196,
    			197,
    			198,
    			199,
    			200,
    			201,
    			202,
    			203,
    			204,
    			205,
    			206,
    			207,
    			208,
    			209,
    			214,
    			215,
    			220,
    			221
    		];
    	}
    } catch (error) {
    	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
    }

    /**
     * Build up the default `inspectOpts` object from the environment variables.
     *
     *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
     */

    exports.inspectOpts = Object.keys(process.env).filter(key => {
    	return /^debug_/i.test(key);
    }).reduce((obj, key) => {
    	// Camel-case
    	const prop = key
    		.substring(6)
    		.toLowerCase()
    		.replace(/_([a-z])/g, (_, k) => {
    			return k.toUpperCase();
    		});

    	// Coerce string value into JS value
    	let val = process.env[key];
    	if (/^(yes|on|true|enabled)$/i.test(val)) {
    		val = true;
    	} else if (/^(no|off|false|disabled)$/i.test(val)) {
    		val = false;
    	} else if (val === 'null') {
    		val = null;
    	} else {
    		val = Number(val);
    	}

    	obj[prop] = val;
    	return obj;
    }, {});

    /**
     * Is stdout a TTY? Colored output is enabled when `true`.
     */

    function useColors() {
    	return 'colors' in exports.inspectOpts ?
    		Boolean(exports.inspectOpts.colors) :
    		tty__default["default"].isatty(process.stderr.fd);
    }

    /**
     * Adds ANSI color escape codes if enabled.
     *
     * @api public
     */

    function formatArgs(args) {
    	const {namespace: name, useColors} = this;

    	if (useColors) {
    		const c = this.color;
    		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
    		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

    		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
    	} else {
    		args[0] = getDate() + name + ' ' + args[0];
    	}
    }

    function getDate() {
    	if (exports.inspectOpts.hideDate) {
    		return '';
    	}
    	return new Date().toISOString() + ' ';
    }

    /**
     * Invokes `util.format()` with the specified arguments and writes to stderr.
     */

    function log(...args) {
    	return process.stderr.write(util__default["default"].format(...args) + '\n');
    }

    /**
     * Save `namespaces`.
     *
     * @param {String} namespaces
     * @api private
     */
    function save(namespaces) {
    	if (namespaces) {
    		process.env.DEBUG = namespaces;
    	} else {
    		// If you set a process.env field to null or undefined, it gets cast to the
    		// string 'null' or 'undefined'. Just delete instead.
    		delete process.env.DEBUG;
    	}
    }

    /**
     * Load `namespaces`.
     *
     * @return {String} returns the previously persisted debug modes
     * @api private
     */

    function load() {
    	return process.env.DEBUG;
    }

    /**
     * Init logic for `debug` instances.
     *
     * Create a new `inspectOpts` object in case `useColors` is set
     * differently for a particular `debug` instance.
     */

    function init(debug) {
    	debug.inspectOpts = {};

    	const keys = Object.keys(exports.inspectOpts);
    	for (let i = 0; i < keys.length; i++) {
    		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    	}
    }

    module.exports = common$1(exports);

    const {formatters} = module.exports;

    /**
     * Map %o to `util.inspect()`, all on a single line.
     */

    formatters.o = function (v) {
    	this.inspectOpts.colors = this.useColors;
    	return util__default["default"].inspect(v, this.inspectOpts)
    		.split('\n')
    		.map(str => str.trim())
    		.join(' ');
    };

    /**
     * Map %O to `util.inspect()`, allowing multiple lines if needed.
     */

    formatters.O = function (v) {
    	this.inspectOpts.colors = this.useColors;
    	return util__default["default"].inspect(v, this.inspectOpts);
    };
    });

    /**
     * Detect Electron renderer / nwjs process, which is node, but we should
     * treat as a browser.
     */

    var src$1 = createCommonjsModule(function (module) {
    if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
    	module.exports = browser$1;
    } else {
    	module.exports = node$1;
    }
    });

    /*!
     * ee-first
     * Copyright(c) 2014 Jonathan Ong
     * MIT Licensed
     */

    /**
     * Module exports.
     * @public
     */

    var eeFirst = first;

    /**
     * Get the first event in a set of event emitters and event pairs.
     *
     * @param {array} stuff
     * @param {function} done
     * @public
     */

    function first(stuff, done) {
      if (!Array.isArray(stuff))
        throw new TypeError('arg must be an array of [ee, events...] arrays')

      var cleanups = [];

      for (var i = 0; i < stuff.length; i++) {
        var arr = stuff[i];

        if (!Array.isArray(arr) || arr.length < 2)
          throw new TypeError('each array member must be [ee, events...]')

        var ee = arr[0];

        for (var j = 1; j < arr.length; j++) {
          var event = arr[j];
          var fn = listener(event, callback);

          // listen to the event
          ee.on(event, fn);
          // push this listener to the list of cleanups
          cleanups.push({
            ee: ee,
            event: event,
            fn: fn,
          });
        }
      }

      function callback() {
        cleanup();
        done.apply(null, arguments);
      }

      function cleanup() {
        var x;
        for (var i = 0; i < cleanups.length; i++) {
          x = cleanups[i];
          x.ee.removeListener(x.event, x.fn);
        }
      }

      function thunk(fn) {
        done = fn;
      }

      thunk.cancel = cleanup;

      return thunk
    }

    /**
     * Create the event listener.
     * @private
     */

    function listener(event, done) {
      return function onevent(arg1) {
        var args = new Array(arguments.length);
        var ee = this;
        var err = event === 'error'
          ? arg1
          : null;

        // copy args to prevent arguments escaping scope
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }

        done(err, ee, event, args);
      }
    }

    /*!
     * on-finished
     * Copyright(c) 2013 Jonathan Ong
     * Copyright(c) 2014 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module exports.
     * @public
     */

    var onFinished_1 = onFinished;
    var isFinished_1 = isFinished;

    /**
     * Module dependencies.
     * @private
     */



    /**
     * Variables.
     * @private
     */

    /* istanbul ignore next */
    var defer = typeof setImmediate === 'function'
      ? setImmediate
      : function(fn){ process.nextTick(fn.bind.apply(fn, arguments)); };

    /**
     * Invoke callback when the response has finished, useful for
     * cleaning up resources afterwards.
     *
     * @param {object} msg
     * @param {function} listener
     * @return {object}
     * @public
     */

    function onFinished(msg, listener) {
      if (isFinished(msg) !== false) {
        defer(listener, null, msg);
        return msg
      }

      // attach the listener to the message
      attachListener(msg, listener);

      return msg
    }

    /**
     * Determine if message is already finished.
     *
     * @param {object} msg
     * @return {boolean}
     * @public
     */

    function isFinished(msg) {
      var socket = msg.socket;

      if (typeof msg.finished === 'boolean') {
        // OutgoingMessage
        return Boolean(msg.finished || (socket && !socket.writable))
      }

      if (typeof msg.complete === 'boolean') {
        // IncomingMessage
        return Boolean(msg.upgrade || !socket || !socket.readable || (msg.complete && !msg.readable))
      }

      // don't know
      return undefined
    }

    /**
     * Attach a finished listener to the message.
     *
     * @param {object} msg
     * @param {function} callback
     * @private
     */

    function attachFinishedListener(msg, callback) {
      var eeMsg;
      var eeSocket;
      var finished = false;

      function onFinish(error) {
        eeMsg.cancel();
        eeSocket.cancel();

        finished = true;
        callback(error);
      }

      // finished on first message event
      eeMsg = eeSocket = eeFirst([[msg, 'end', 'finish']], onFinish);

      function onSocket(socket) {
        // remove listener
        msg.removeListener('socket', onSocket);

        if (finished) return
        if (eeMsg !== eeSocket) return

        // finished on first socket event
        eeSocket = eeFirst([[socket, 'error', 'close']], onFinish);
      }

      if (msg.socket) {
        // socket already assigned
        onSocket(msg.socket);
        return
      }

      // wait for socket to be assigned
      msg.on('socket', onSocket);

      if (msg.socket === undefined) {
        // node.js 0.8 patch
        patchAssignSocket(msg, onSocket);
      }
    }

    /**
     * Attach the listener to the message.
     *
     * @param {object} msg
     * @return {function}
     * @private
     */

    function attachListener(msg, listener) {
      var attached = msg.__onFinished;

      // create a private single listener with queue
      if (!attached || !attached.queue) {
        attached = msg.__onFinished = createListener(msg);
        attachFinishedListener(msg, attached);
      }

      attached.queue.push(listener);
    }

    /**
     * Create listener on message.
     *
     * @param {object} msg
     * @return {function}
     * @private
     */

    function createListener(msg) {
      function listener(err) {
        if (msg.__onFinished === listener) msg.__onFinished = null;
        if (!listener.queue) return

        var queue = listener.queue;
        listener.queue = null;

        for (var i = 0; i < queue.length; i++) {
          queue[i](err, msg);
        }
      }

      listener.queue = [];

      return listener
    }

    /**
     * Patch ServerResponse.prototype.assignSocket for node.js 0.8.
     *
     * @param {ServerResponse} res
     * @param {function} callback
     * @private
     */

    function patchAssignSocket(res, callback) {
      var assignSocket = res.assignSocket;

      if (typeof assignSocket !== 'function') return

      // res.on('socket', callback) is broken in 0.8
      res.assignSocket = function _assignSocket(socket) {
        assignSocket.call(this, socket);
        callback(socket);
      };
    }
    onFinished_1.isFinished = isFinished_1;

    /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

    var safeBuffer = createCommonjsModule(function (module, exports) {
    /* eslint-disable node/no-deprecated-api */

    var Buffer = buffer__default["default"].Buffer;

    // alternative to using Object.keys for old browsers
    function copyProps (src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
      module.exports = buffer__default["default"];
    } else {
      // Copy properties from require('buffer')
      copyProps(buffer__default["default"], exports);
      exports.Buffer = SafeBuffer;
    }

    function SafeBuffer (arg, encodingOrOffset, length) {
      return Buffer(arg, encodingOrOffset, length)
    }

    SafeBuffer.prototype = Object.create(Buffer.prototype);

    // Copy static methods from Buffer
    copyProps(Buffer, SafeBuffer);

    SafeBuffer.from = function (arg, encodingOrOffset, length) {
      if (typeof arg === 'number') {
        throw new TypeError('Argument must not be a number')
      }
      return Buffer(arg, encodingOrOffset, length)
    };

    SafeBuffer.alloc = function (size, fill, encoding) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number')
      }
      var buf = Buffer(size);
      if (fill !== undefined) {
        if (typeof encoding === 'string') {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf
    };

    SafeBuffer.allocUnsafe = function (size) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number')
      }
      return Buffer(size)
    };

    SafeBuffer.allocUnsafeSlow = function (size) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number')
      }
      return buffer__default["default"].SlowBuffer(size)
    };
    });

    /*!
     * content-disposition
     * Copyright(c) 2014-2017 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module exports.
     * @public
     */

    var contentDisposition_1 = contentDisposition;
    var parse_1$2 = parse$7;

    /**
     * Module dependencies.
     * @private
     */

    var basename$1 = require$$0__default["default"].basename;
    var Buffer$1 = safeBuffer.Buffer;

    /**
     * RegExp to match non attr-char, *after* encodeURIComponent (i.e. not including "%")
     * @private
     */

    var ENCODE_URL_ATTR_CHAR_REGEXP = /[\x00-\x20"'()*,/:;<=>?@[\\\]{}\x7f]/g; // eslint-disable-line no-control-regex

    /**
     * RegExp to match percent encoding escape.
     * @private
     */

    var HEX_ESCAPE_REGEXP = /%[0-9A-Fa-f]{2}/;
    var HEX_ESCAPE_REPLACE_REGEXP = /%([0-9A-Fa-f]{2})/g;

    /**
     * RegExp to match non-latin1 characters.
     * @private
     */

    var NON_LATIN1_REGEXP = /[^\x20-\x7e\xa0-\xff]/g;

    /**
     * RegExp to match quoted-pair in RFC 2616
     *
     * quoted-pair = "\" CHAR
     * CHAR        = <any US-ASCII character (octets 0 - 127)>
     * @private
     */

    var QESC_REGEXP$1 = /\\([\u0000-\u007f])/g; // eslint-disable-line no-control-regex

    /**
     * RegExp to match chars that must be quoted-pair in RFC 2616
     * @private
     */

    var QUOTE_REGEXP$1 = /([\\"])/g;

    /**
     * RegExp for various RFC 2616 grammar
     *
     * parameter     = token "=" ( token | quoted-string )
     * token         = 1*<any CHAR except CTLs or separators>
     * separators    = "(" | ")" | "<" | ">" | "@"
     *               | "," | ";" | ":" | "\" | <">
     *               | "/" | "[" | "]" | "?" | "="
     *               | "{" | "}" | SP | HT
     * quoted-string = ( <"> *(qdtext | quoted-pair ) <"> )
     * qdtext        = <any TEXT except <">>
     * quoted-pair   = "\" CHAR
     * CHAR          = <any US-ASCII character (octets 0 - 127)>
     * TEXT          = <any OCTET except CTLs, but including LWS>
     * LWS           = [CRLF] 1*( SP | HT )
     * CRLF          = CR LF
     * CR            = <US-ASCII CR, carriage return (13)>
     * LF            = <US-ASCII LF, linefeed (10)>
     * SP            = <US-ASCII SP, space (32)>
     * HT            = <US-ASCII HT, horizontal-tab (9)>
     * CTL           = <any US-ASCII control character (octets 0 - 31) and DEL (127)>
     * OCTET         = <any 8-bit sequence of data>
     * @private
     */

    var PARAM_REGEXP$1 = /;[\x09\x20]*([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*=[\x09\x20]*("(?:[\x20!\x23-\x5b\x5d-\x7e\x80-\xff]|\\[\x20-\x7e])*"|[!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*/g; // eslint-disable-line no-control-regex
    var TEXT_REGEXP$1 = /^[\x20-\x7e\x80-\xff]+$/;
    var TOKEN_REGEXP$1 = /^[!#$%&'*+.0-9A-Z^_`a-z|~-]+$/;

    /**
     * RegExp for various RFC 5987 grammar
     *
     * ext-value     = charset  "'" [ language ] "'" value-chars
     * charset       = "UTF-8" / "ISO-8859-1" / mime-charset
     * mime-charset  = 1*mime-charsetc
     * mime-charsetc = ALPHA / DIGIT
     *               / "!" / "#" / "$" / "%" / "&"
     *               / "+" / "-" / "^" / "_" / "`"
     *               / "{" / "}" / "~"
     * language      = ( 2*3ALPHA [ extlang ] )
     *               / 4ALPHA
     *               / 5*8ALPHA
     * extlang       = *3( "-" 3ALPHA )
     * value-chars   = *( pct-encoded / attr-char )
     * pct-encoded   = "%" HEXDIG HEXDIG
     * attr-char     = ALPHA / DIGIT
     *               / "!" / "#" / "$" / "&" / "+" / "-" / "."
     *               / "^" / "_" / "`" / "|" / "~"
     * @private
     */

    var EXT_VALUE_REGEXP = /^([A-Za-z0-9!#$%&+\-^_`{}~]+)'(?:[A-Za-z]{2,3}(?:-[A-Za-z]{3}){0,3}|[A-Za-z]{4,8}|)'((?:%[0-9A-Fa-f]{2}|[A-Za-z0-9!#$&+.^_`|~-])+)$/;

    /**
     * RegExp for various RFC 6266 grammar
     *
     * disposition-type = "inline" | "attachment" | disp-ext-type
     * disp-ext-type    = token
     * disposition-parm = filename-parm | disp-ext-parm
     * filename-parm    = "filename" "=" value
     *                  | "filename*" "=" ext-value
     * disp-ext-parm    = token "=" value
     *                  | ext-token "=" ext-value
     * ext-token        = <the characters in token, followed by "*">
     * @private
     */

    var DISPOSITION_TYPE_REGEXP = /^([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*(?:$|;)/; // eslint-disable-line no-control-regex

    /**
     * Create an attachment Content-Disposition header.
     *
     * @param {string} [filename]
     * @param {object} [options]
     * @param {string} [options.type=attachment]
     * @param {string|boolean} [options.fallback=true]
     * @return {string}
     * @public
     */

    function contentDisposition (filename, options) {
      var opts = options || {};

      // get type
      var type = opts.type || 'attachment';

      // get parameters
      var params = createparams(filename, opts.fallback);

      // format into string
      return format$2(new ContentDisposition(type, params))
    }

    /**
     * Create parameters object from filename and fallback.
     *
     * @param {string} [filename]
     * @param {string|boolean} [fallback=true]
     * @return {object}
     * @private
     */

    function createparams (filename, fallback) {
      if (filename === undefined) {
        return
      }

      var params = {};

      if (typeof filename !== 'string') {
        throw new TypeError('filename must be a string')
      }

      // fallback defaults to true
      if (fallback === undefined) {
        fallback = true;
      }

      if (typeof fallback !== 'string' && typeof fallback !== 'boolean') {
        throw new TypeError('fallback must be a string or boolean')
      }

      if (typeof fallback === 'string' && NON_LATIN1_REGEXP.test(fallback)) {
        throw new TypeError('fallback must be ISO-8859-1 string')
      }

      // restrict to file base name
      var name = basename$1(filename);

      // determine if name is suitable for quoted string
      var isQuotedString = TEXT_REGEXP$1.test(name);

      // generate fallback name
      var fallbackName = typeof fallback !== 'string'
        ? fallback && getlatin1(name)
        : basename$1(fallback);
      var hasFallback = typeof fallbackName === 'string' && fallbackName !== name;

      // set extended filename parameter
      if (hasFallback || !isQuotedString || HEX_ESCAPE_REGEXP.test(name)) {
        params['filename*'] = name;
      }

      // set filename parameter
      if (isQuotedString || hasFallback) {
        params.filename = hasFallback
          ? fallbackName
          : name;
      }

      return params
    }

    /**
     * Format object to Content-Disposition header.
     *
     * @param {object} obj
     * @param {string} obj.type
     * @param {object} [obj.parameters]
     * @return {string}
     * @private
     */

    function format$2 (obj) {
      var parameters = obj.parameters;
      var type = obj.type;

      if (!type || typeof type !== 'string' || !TOKEN_REGEXP$1.test(type)) {
        throw new TypeError('invalid type')
      }

      // start with normalized type
      var string = String(type).toLowerCase();

      // append parameters
      if (parameters && typeof parameters === 'object') {
        var param;
        var params = Object.keys(parameters).sort();

        for (var i = 0; i < params.length; i++) {
          param = params[i];

          var val = param.substr(-1) === '*'
            ? ustring(parameters[param])
            : qstring$2(parameters[param]);

          string += '; ' + param + '=' + val;
        }
      }

      return string
    }

    /**
     * Decode a RFC 5987 field value (gracefully).
     *
     * @param {string} str
     * @return {string}
     * @private
     */

    function decodefield (str) {
      var match = EXT_VALUE_REGEXP.exec(str);

      if (!match) {
        throw new TypeError('invalid extended field value')
      }

      var charset = match[1].toLowerCase();
      var encoded = match[2];
      var value;

      // to binary string
      var binary = encoded.replace(HEX_ESCAPE_REPLACE_REGEXP, pdecode);

      switch (charset) {
        case 'iso-8859-1':
          value = getlatin1(binary);
          break
        case 'utf-8':
          value = Buffer$1.from(binary, 'binary').toString('utf8');
          break
        default:
          throw new TypeError('unsupported charset in extended field')
      }

      return value
    }

    /**
     * Get ISO-8859-1 version of string.
     *
     * @param {string} val
     * @return {string}
     * @private
     */

    function getlatin1 (val) {
      // simple Unicode -> ISO-8859-1 transformation
      return String(val).replace(NON_LATIN1_REGEXP, '?')
    }

    /**
     * Parse Content-Disposition header string.
     *
     * @param {string} string
     * @return {object}
     * @public
     */

    function parse$7 (string) {
      if (!string || typeof string !== 'string') {
        throw new TypeError('argument string is required')
      }

      var match = DISPOSITION_TYPE_REGEXP.exec(string);

      if (!match) {
        throw new TypeError('invalid type format')
      }

      // normalize type
      var index = match[0].length;
      var type = match[1].toLowerCase();

      var key;
      var names = [];
      var params = {};
      var value;

      // calculate index to start at
      index = PARAM_REGEXP$1.lastIndex = match[0].substr(-1) === ';'
        ? index - 1
        : index;

      // match parameters
      while ((match = PARAM_REGEXP$1.exec(string))) {
        if (match.index !== index) {
          throw new TypeError('invalid parameter format')
        }

        index += match[0].length;
        key = match[1].toLowerCase();
        value = match[2];

        if (names.indexOf(key) !== -1) {
          throw new TypeError('invalid duplicate parameter')
        }

        names.push(key);

        if (key.indexOf('*') + 1 === key.length) {
          // decode extended value
          key = key.slice(0, -1);
          value = decodefield(value);

          // overwrite existing value
          params[key] = value;
          continue
        }

        if (typeof params[key] === 'string') {
          continue
        }

        if (value[0] === '"') {
          // remove quotes and escapes
          value = value
            .substr(1, value.length - 2)
            .replace(QESC_REGEXP$1, '$1');
        }

        params[key] = value;
      }

      if (index !== -1 && index !== string.length) {
        throw new TypeError('invalid parameter format')
      }

      return new ContentDisposition(type, params)
    }

    /**
     * Percent decode a single character.
     *
     * @param {string} str
     * @param {string} hex
     * @return {string}
     * @private
     */

    function pdecode (str, hex) {
      return String.fromCharCode(parseInt(hex, 16))
    }

    /**
     * Percent encode a single character.
     *
     * @param {string} char
     * @return {string}
     * @private
     */

    function pencode (char) {
      return '%' + String(char)
        .charCodeAt(0)
        .toString(16)
        .toUpperCase()
    }

    /**
     * Quote a string for HTTP.
     *
     * @param {string} val
     * @return {string}
     * @private
     */

    function qstring$2 (val) {
      var str = String(val);

      return '"' + str.replace(QUOTE_REGEXP$1, '\\$1') + '"'
    }

    /**
     * Encode a Unicode string for HTTP (RFC 5987).
     *
     * @param {string} val
     * @return {string}
     * @private
     */

    function ustring (val) {
      var str = String(val);

      // percent encode as UTF-8
      var encoded = encodeURIComponent(str)
        .replace(ENCODE_URL_ATTR_CHAR_REGEXP, pencode);

      return 'UTF-8\'\'' + encoded
    }

    /**
     * Class for parsed Content-Disposition header for v8 optimization
     *
     * @public
     * @param {string} type
     * @param {object} parameters
     * @constructor
     */

    function ContentDisposition (type, parameters) {
      this.type = type;
      this.parameters = parameters;
    }
    contentDisposition_1.parse = parse_1$2;

    var require$$0 = {
    	"application/1d-interleaved-parityfec": {
    	source: "iana"
    },
    	"application/3gpdash-qoe-report+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/3gpp-ims+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/3gpphal+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/3gpphalforms+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/a2l": {
    	source: "iana"
    },
    	"application/ace+cbor": {
    	source: "iana"
    },
    	"application/activemessage": {
    	source: "iana"
    },
    	"application/activity+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-costmap+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-costmapfilter+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-directory+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-endpointcost+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-endpointcostparams+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-endpointprop+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-endpointpropparams+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-error+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-networkmap+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-networkmapfilter+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-updatestreamcontrol+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/alto-updatestreamparams+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/aml": {
    	source: "iana"
    },
    	"application/andrew-inset": {
    	source: "iana",
    	extensions: [
    		"ez"
    	]
    },
    	"application/applefile": {
    	source: "iana"
    },
    	"application/applixware": {
    	source: "apache",
    	extensions: [
    		"aw"
    	]
    },
    	"application/at+jwt": {
    	source: "iana"
    },
    	"application/atf": {
    	source: "iana"
    },
    	"application/atfx": {
    	source: "iana"
    },
    	"application/atom+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"atom"
    	]
    },
    	"application/atomcat+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"atomcat"
    	]
    },
    	"application/atomdeleted+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"atomdeleted"
    	]
    },
    	"application/atomicmail": {
    	source: "iana"
    },
    	"application/atomsvc+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"atomsvc"
    	]
    },
    	"application/atsc-dwd+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"dwd"
    	]
    },
    	"application/atsc-dynamic-event-message": {
    	source: "iana"
    },
    	"application/atsc-held+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"held"
    	]
    },
    	"application/atsc-rdt+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/atsc-rsat+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rsat"
    	]
    },
    	"application/atxml": {
    	source: "iana"
    },
    	"application/auth-policy+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/bacnet-xdd+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/batch-smtp": {
    	source: "iana"
    },
    	"application/bdoc": {
    	compressible: false,
    	extensions: [
    		"bdoc"
    	]
    },
    	"application/beep+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/calendar+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/calendar+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xcs"
    	]
    },
    	"application/call-completion": {
    	source: "iana"
    },
    	"application/cals-1840": {
    	source: "iana"
    },
    	"application/captive+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/cbor": {
    	source: "iana"
    },
    	"application/cbor-seq": {
    	source: "iana"
    },
    	"application/cccex": {
    	source: "iana"
    },
    	"application/ccmp+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/ccxml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"ccxml"
    	]
    },
    	"application/cdfx+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"cdfx"
    	]
    },
    	"application/cdmi-capability": {
    	source: "iana",
    	extensions: [
    		"cdmia"
    	]
    },
    	"application/cdmi-container": {
    	source: "iana",
    	extensions: [
    		"cdmic"
    	]
    },
    	"application/cdmi-domain": {
    	source: "iana",
    	extensions: [
    		"cdmid"
    	]
    },
    	"application/cdmi-object": {
    	source: "iana",
    	extensions: [
    		"cdmio"
    	]
    },
    	"application/cdmi-queue": {
    	source: "iana",
    	extensions: [
    		"cdmiq"
    	]
    },
    	"application/cdni": {
    	source: "iana"
    },
    	"application/cea": {
    	source: "iana"
    },
    	"application/cea-2018+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/cellml+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/cfw": {
    	source: "iana"
    },
    	"application/clr": {
    	source: "iana"
    },
    	"application/clue+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/clue_info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/cms": {
    	source: "iana"
    },
    	"application/cnrp+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/coap-group+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/coap-payload": {
    	source: "iana"
    },
    	"application/commonground": {
    	source: "iana"
    },
    	"application/conference-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/cose": {
    	source: "iana"
    },
    	"application/cose-key": {
    	source: "iana"
    },
    	"application/cose-key-set": {
    	source: "iana"
    },
    	"application/cpl+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/csrattrs": {
    	source: "iana"
    },
    	"application/csta+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/cstadata+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/csvm+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/cu-seeme": {
    	source: "apache",
    	extensions: [
    		"cu"
    	]
    },
    	"application/cwt": {
    	source: "iana"
    },
    	"application/cybercash": {
    	source: "iana"
    },
    	"application/dart": {
    	compressible: true
    },
    	"application/dash+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"mpd"
    	]
    },
    	"application/dashdelta": {
    	source: "iana"
    },
    	"application/davmount+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"davmount"
    	]
    },
    	"application/dca-rft": {
    	source: "iana"
    },
    	"application/dcd": {
    	source: "iana"
    },
    	"application/dec-dx": {
    	source: "iana"
    },
    	"application/dialog-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/dicom": {
    	source: "iana"
    },
    	"application/dicom+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/dicom+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/dii": {
    	source: "iana"
    },
    	"application/dit": {
    	source: "iana"
    },
    	"application/dns": {
    	source: "iana"
    },
    	"application/dns+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/dns-message": {
    	source: "iana"
    },
    	"application/docbook+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"dbk"
    	]
    },
    	"application/dots+cbor": {
    	source: "iana"
    },
    	"application/dskpp+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/dssc+der": {
    	source: "iana",
    	extensions: [
    		"dssc"
    	]
    },
    	"application/dssc+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xdssc"
    	]
    },
    	"application/dvcs": {
    	source: "iana"
    },
    	"application/ecmascript": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"es",
    		"ecma"
    	]
    },
    	"application/edi-consent": {
    	source: "iana"
    },
    	"application/edi-x12": {
    	source: "iana",
    	compressible: false
    },
    	"application/edifact": {
    	source: "iana",
    	compressible: false
    },
    	"application/efi": {
    	source: "iana"
    },
    	"application/elm+json": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/elm+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/emergencycalldata.cap+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/emergencycalldata.comment+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/emergencycalldata.control+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/emergencycalldata.deviceinfo+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/emergencycalldata.ecall.msd": {
    	source: "iana"
    },
    	"application/emergencycalldata.providerinfo+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/emergencycalldata.serviceinfo+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/emergencycalldata.subscriberinfo+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/emergencycalldata.veds+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/emma+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"emma"
    	]
    },
    	"application/emotionml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"emotionml"
    	]
    },
    	"application/encaprtp": {
    	source: "iana"
    },
    	"application/epp+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/epub+zip": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"epub"
    	]
    },
    	"application/eshop": {
    	source: "iana"
    },
    	"application/exi": {
    	source: "iana",
    	extensions: [
    		"exi"
    	]
    },
    	"application/expect-ct-report+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/express": {
    	source: "iana",
    	extensions: [
    		"exp"
    	]
    },
    	"application/fastinfoset": {
    	source: "iana"
    },
    	"application/fastsoap": {
    	source: "iana"
    },
    	"application/fdt+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"fdt"
    	]
    },
    	"application/fhir+json": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/fhir+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/fido.trusted-apps+json": {
    	compressible: true
    },
    	"application/fits": {
    	source: "iana"
    },
    	"application/flexfec": {
    	source: "iana"
    },
    	"application/font-sfnt": {
    	source: "iana"
    },
    	"application/font-tdpfr": {
    	source: "iana",
    	extensions: [
    		"pfr"
    	]
    },
    	"application/font-woff": {
    	source: "iana",
    	compressible: false
    },
    	"application/framework-attributes+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/geo+json": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"geojson"
    	]
    },
    	"application/geo+json-seq": {
    	source: "iana"
    },
    	"application/geopackage+sqlite3": {
    	source: "iana"
    },
    	"application/geoxacml+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/gltf-buffer": {
    	source: "iana"
    },
    	"application/gml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"gml"
    	]
    },
    	"application/gpx+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"gpx"
    	]
    },
    	"application/gxf": {
    	source: "apache",
    	extensions: [
    		"gxf"
    	]
    },
    	"application/gzip": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"gz"
    	]
    },
    	"application/h224": {
    	source: "iana"
    },
    	"application/held+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/hjson": {
    	extensions: [
    		"hjson"
    	]
    },
    	"application/http": {
    	source: "iana"
    },
    	"application/hyperstudio": {
    	source: "iana",
    	extensions: [
    		"stk"
    	]
    },
    	"application/ibe-key-request+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/ibe-pkg-reply+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/ibe-pp-data": {
    	source: "iana"
    },
    	"application/iges": {
    	source: "iana"
    },
    	"application/im-iscomposing+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/index": {
    	source: "iana"
    },
    	"application/index.cmd": {
    	source: "iana"
    },
    	"application/index.obj": {
    	source: "iana"
    },
    	"application/index.response": {
    	source: "iana"
    },
    	"application/index.vnd": {
    	source: "iana"
    },
    	"application/inkml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"ink",
    		"inkml"
    	]
    },
    	"application/iotp": {
    	source: "iana"
    },
    	"application/ipfix": {
    	source: "iana",
    	extensions: [
    		"ipfix"
    	]
    },
    	"application/ipp": {
    	source: "iana"
    },
    	"application/isup": {
    	source: "iana"
    },
    	"application/its+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"its"
    	]
    },
    	"application/java-archive": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"jar",
    		"war",
    		"ear"
    	]
    },
    	"application/java-serialized-object": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"ser"
    	]
    },
    	"application/java-vm": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"class"
    	]
    },
    	"application/javascript": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true,
    	extensions: [
    		"js",
    		"mjs"
    	]
    },
    	"application/jf2feed+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/jose": {
    	source: "iana"
    },
    	"application/jose+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/jrd+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/jscalendar+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/json": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true,
    	extensions: [
    		"json",
    		"map"
    	]
    },
    	"application/json-patch+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/json-seq": {
    	source: "iana"
    },
    	"application/json5": {
    	extensions: [
    		"json5"
    	]
    },
    	"application/jsonml+json": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"jsonml"
    	]
    },
    	"application/jwk+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/jwk-set+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/jwt": {
    	source: "iana"
    },
    	"application/kpml-request+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/kpml-response+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/ld+json": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"jsonld"
    	]
    },
    	"application/lgr+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"lgr"
    	]
    },
    	"application/link-format": {
    	source: "iana"
    },
    	"application/load-control+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/lost+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"lostxml"
    	]
    },
    	"application/lostsync+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/lpf+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/lxf": {
    	source: "iana"
    },
    	"application/mac-binhex40": {
    	source: "iana",
    	extensions: [
    		"hqx"
    	]
    },
    	"application/mac-compactpro": {
    	source: "apache",
    	extensions: [
    		"cpt"
    	]
    },
    	"application/macwriteii": {
    	source: "iana"
    },
    	"application/mads+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"mads"
    	]
    },
    	"application/manifest+json": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true,
    	extensions: [
    		"webmanifest"
    	]
    },
    	"application/marc": {
    	source: "iana",
    	extensions: [
    		"mrc"
    	]
    },
    	"application/marcxml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"mrcx"
    	]
    },
    	"application/mathematica": {
    	source: "iana",
    	extensions: [
    		"ma",
    		"nb",
    		"mb"
    	]
    },
    	"application/mathml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"mathml"
    	]
    },
    	"application/mathml-content+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mathml-presentation+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-associated-procedure-description+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-deregister+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-envelope+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-msk+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-msk-response+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-protection-description+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-reception-report+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-register+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-register-response+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-schedule+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbms-user-service-description+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mbox": {
    	source: "iana",
    	extensions: [
    		"mbox"
    	]
    },
    	"application/media-policy-dataset+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/media_control+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mediaservercontrol+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"mscml"
    	]
    },
    	"application/merge-patch+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/metalink+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"metalink"
    	]
    },
    	"application/metalink4+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"meta4"
    	]
    },
    	"application/mets+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"mets"
    	]
    },
    	"application/mf4": {
    	source: "iana"
    },
    	"application/mikey": {
    	source: "iana"
    },
    	"application/mipc": {
    	source: "iana"
    },
    	"application/missing-blocks+cbor-seq": {
    	source: "iana"
    },
    	"application/mmt-aei+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"maei"
    	]
    },
    	"application/mmt-usd+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"musd"
    	]
    },
    	"application/mods+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"mods"
    	]
    },
    	"application/moss-keys": {
    	source: "iana"
    },
    	"application/moss-signature": {
    	source: "iana"
    },
    	"application/mosskey-data": {
    	source: "iana"
    },
    	"application/mosskey-request": {
    	source: "iana"
    },
    	"application/mp21": {
    	source: "iana",
    	extensions: [
    		"m21",
    		"mp21"
    	]
    },
    	"application/mp4": {
    	source: "iana",
    	extensions: [
    		"mp4s",
    		"m4p"
    	]
    },
    	"application/mpeg4-generic": {
    	source: "iana"
    },
    	"application/mpeg4-iod": {
    	source: "iana"
    },
    	"application/mpeg4-iod-xmt": {
    	source: "iana"
    },
    	"application/mrb-consumer+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/mrb-publish+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/msc-ivr+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/msc-mixer+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/msword": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"doc",
    		"dot"
    	]
    },
    	"application/mud+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/multipart-core": {
    	source: "iana"
    },
    	"application/mxf": {
    	source: "iana",
    	extensions: [
    		"mxf"
    	]
    },
    	"application/n-quads": {
    	source: "iana",
    	extensions: [
    		"nq"
    	]
    },
    	"application/n-triples": {
    	source: "iana",
    	extensions: [
    		"nt"
    	]
    },
    	"application/nasdata": {
    	source: "iana"
    },
    	"application/news-checkgroups": {
    	source: "iana",
    	charset: "US-ASCII"
    },
    	"application/news-groupinfo": {
    	source: "iana",
    	charset: "US-ASCII"
    },
    	"application/news-transmission": {
    	source: "iana"
    },
    	"application/nlsml+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/node": {
    	source: "iana",
    	extensions: [
    		"cjs"
    	]
    },
    	"application/nss": {
    	source: "iana"
    },
    	"application/oauth-authz-req+jwt": {
    	source: "iana"
    },
    	"application/ocsp-request": {
    	source: "iana"
    },
    	"application/ocsp-response": {
    	source: "iana"
    },
    	"application/octet-stream": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"bin",
    		"dms",
    		"lrf",
    		"mar",
    		"so",
    		"dist",
    		"distz",
    		"pkg",
    		"bpk",
    		"dump",
    		"elc",
    		"deploy",
    		"exe",
    		"dll",
    		"deb",
    		"dmg",
    		"iso",
    		"img",
    		"msi",
    		"msp",
    		"msm",
    		"buffer"
    	]
    },
    	"application/oda": {
    	source: "iana",
    	extensions: [
    		"oda"
    	]
    },
    	"application/odm+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/odx": {
    	source: "iana"
    },
    	"application/oebps-package+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"opf"
    	]
    },
    	"application/ogg": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"ogx"
    	]
    },
    	"application/omdoc+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"omdoc"
    	]
    },
    	"application/onenote": {
    	source: "apache",
    	extensions: [
    		"onetoc",
    		"onetoc2",
    		"onetmp",
    		"onepkg"
    	]
    },
    	"application/opc-nodeset+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/oscore": {
    	source: "iana"
    },
    	"application/oxps": {
    	source: "iana",
    	extensions: [
    		"oxps"
    	]
    },
    	"application/p21": {
    	source: "iana"
    },
    	"application/p21+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/p2p-overlay+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"relo"
    	]
    },
    	"application/parityfec": {
    	source: "iana"
    },
    	"application/passport": {
    	source: "iana"
    },
    	"application/patch-ops-error+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xer"
    	]
    },
    	"application/pdf": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"pdf"
    	]
    },
    	"application/pdx": {
    	source: "iana"
    },
    	"application/pem-certificate-chain": {
    	source: "iana"
    },
    	"application/pgp-encrypted": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"pgp"
    	]
    },
    	"application/pgp-keys": {
    	source: "iana"
    },
    	"application/pgp-signature": {
    	source: "iana",
    	extensions: [
    		"asc",
    		"sig"
    	]
    },
    	"application/pics-rules": {
    	source: "apache",
    	extensions: [
    		"prf"
    	]
    },
    	"application/pidf+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/pidf-diff+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/pkcs10": {
    	source: "iana",
    	extensions: [
    		"p10"
    	]
    },
    	"application/pkcs12": {
    	source: "iana"
    },
    	"application/pkcs7-mime": {
    	source: "iana",
    	extensions: [
    		"p7m",
    		"p7c"
    	]
    },
    	"application/pkcs7-signature": {
    	source: "iana",
    	extensions: [
    		"p7s"
    	]
    },
    	"application/pkcs8": {
    	source: "iana",
    	extensions: [
    		"p8"
    	]
    },
    	"application/pkcs8-encrypted": {
    	source: "iana"
    },
    	"application/pkix-attr-cert": {
    	source: "iana",
    	extensions: [
    		"ac"
    	]
    },
    	"application/pkix-cert": {
    	source: "iana",
    	extensions: [
    		"cer"
    	]
    },
    	"application/pkix-crl": {
    	source: "iana",
    	extensions: [
    		"crl"
    	]
    },
    	"application/pkix-pkipath": {
    	source: "iana",
    	extensions: [
    		"pkipath"
    	]
    },
    	"application/pkixcmp": {
    	source: "iana",
    	extensions: [
    		"pki"
    	]
    },
    	"application/pls+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"pls"
    	]
    },
    	"application/poc-settings+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/postscript": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"ai",
    		"eps",
    		"ps"
    	]
    },
    	"application/ppsp-tracker+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/problem+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/problem+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/provenance+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"provx"
    	]
    },
    	"application/prs.alvestrand.titrax-sheet": {
    	source: "iana"
    },
    	"application/prs.cww": {
    	source: "iana",
    	extensions: [
    		"cww"
    	]
    },
    	"application/prs.cyn": {
    	source: "iana",
    	charset: "7-BIT"
    },
    	"application/prs.hpub+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/prs.nprend": {
    	source: "iana"
    },
    	"application/prs.plucker": {
    	source: "iana"
    },
    	"application/prs.rdf-xml-crypt": {
    	source: "iana"
    },
    	"application/prs.xsf+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/pskc+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"pskcxml"
    	]
    },
    	"application/pvd+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/qsig": {
    	source: "iana"
    },
    	"application/raml+yaml": {
    	compressible: true,
    	extensions: [
    		"raml"
    	]
    },
    	"application/raptorfec": {
    	source: "iana"
    },
    	"application/rdap+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/rdf+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rdf",
    		"owl"
    	]
    },
    	"application/reginfo+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rif"
    	]
    },
    	"application/relax-ng-compact-syntax": {
    	source: "iana",
    	extensions: [
    		"rnc"
    	]
    },
    	"application/remote-printing": {
    	source: "iana"
    },
    	"application/reputon+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/resource-lists+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rl"
    	]
    },
    	"application/resource-lists-diff+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rld"
    	]
    },
    	"application/rfc+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/riscos": {
    	source: "iana"
    },
    	"application/rlmi+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/rls-services+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rs"
    	]
    },
    	"application/route-apd+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rapd"
    	]
    },
    	"application/route-s-tsid+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"sls"
    	]
    },
    	"application/route-usd+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rusd"
    	]
    },
    	"application/rpki-ghostbusters": {
    	source: "iana",
    	extensions: [
    		"gbr"
    	]
    },
    	"application/rpki-manifest": {
    	source: "iana",
    	extensions: [
    		"mft"
    	]
    },
    	"application/rpki-publication": {
    	source: "iana"
    },
    	"application/rpki-roa": {
    	source: "iana",
    	extensions: [
    		"roa"
    	]
    },
    	"application/rpki-updown": {
    	source: "iana"
    },
    	"application/rsd+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"rsd"
    	]
    },
    	"application/rss+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"rss"
    	]
    },
    	"application/rtf": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rtf"
    	]
    },
    	"application/rtploopback": {
    	source: "iana"
    },
    	"application/rtx": {
    	source: "iana"
    },
    	"application/samlassertion+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/samlmetadata+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/sarif+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/sarif-external-properties+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/sbe": {
    	source: "iana"
    },
    	"application/sbml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"sbml"
    	]
    },
    	"application/scaip+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/scim+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/scvp-cv-request": {
    	source: "iana",
    	extensions: [
    		"scq"
    	]
    },
    	"application/scvp-cv-response": {
    	source: "iana",
    	extensions: [
    		"scs"
    	]
    },
    	"application/scvp-vp-request": {
    	source: "iana",
    	extensions: [
    		"spq"
    	]
    },
    	"application/scvp-vp-response": {
    	source: "iana",
    	extensions: [
    		"spp"
    	]
    },
    	"application/sdp": {
    	source: "iana",
    	extensions: [
    		"sdp"
    	]
    },
    	"application/secevent+jwt": {
    	source: "iana"
    },
    	"application/senml+cbor": {
    	source: "iana"
    },
    	"application/senml+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/senml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"senmlx"
    	]
    },
    	"application/senml-etch+cbor": {
    	source: "iana"
    },
    	"application/senml-etch+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/senml-exi": {
    	source: "iana"
    },
    	"application/sensml+cbor": {
    	source: "iana"
    },
    	"application/sensml+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/sensml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"sensmlx"
    	]
    },
    	"application/sensml-exi": {
    	source: "iana"
    },
    	"application/sep+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/sep-exi": {
    	source: "iana"
    },
    	"application/session-info": {
    	source: "iana"
    },
    	"application/set-payment": {
    	source: "iana"
    },
    	"application/set-payment-initiation": {
    	source: "iana",
    	extensions: [
    		"setpay"
    	]
    },
    	"application/set-registration": {
    	source: "iana"
    },
    	"application/set-registration-initiation": {
    	source: "iana",
    	extensions: [
    		"setreg"
    	]
    },
    	"application/sgml": {
    	source: "iana"
    },
    	"application/sgml-open-catalog": {
    	source: "iana"
    },
    	"application/shf+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"shf"
    	]
    },
    	"application/sieve": {
    	source: "iana",
    	extensions: [
    		"siv",
    		"sieve"
    	]
    },
    	"application/simple-filter+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/simple-message-summary": {
    	source: "iana"
    },
    	"application/simplesymbolcontainer": {
    	source: "iana"
    },
    	"application/sipc": {
    	source: "iana"
    },
    	"application/slate": {
    	source: "iana"
    },
    	"application/smil": {
    	source: "iana"
    },
    	"application/smil+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"smi",
    		"smil"
    	]
    },
    	"application/smpte336m": {
    	source: "iana"
    },
    	"application/soap+fastinfoset": {
    	source: "iana"
    },
    	"application/soap+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/sparql-query": {
    	source: "iana",
    	extensions: [
    		"rq"
    	]
    },
    	"application/sparql-results+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"srx"
    	]
    },
    	"application/spdx+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/spirits-event+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/sql": {
    	source: "iana"
    },
    	"application/srgs": {
    	source: "iana",
    	extensions: [
    		"gram"
    	]
    },
    	"application/srgs+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"grxml"
    	]
    },
    	"application/sru+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"sru"
    	]
    },
    	"application/ssdl+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"ssdl"
    	]
    },
    	"application/ssml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"ssml"
    	]
    },
    	"application/stix+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/swid+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"swidtag"
    	]
    },
    	"application/tamp-apex-update": {
    	source: "iana"
    },
    	"application/tamp-apex-update-confirm": {
    	source: "iana"
    },
    	"application/tamp-community-update": {
    	source: "iana"
    },
    	"application/tamp-community-update-confirm": {
    	source: "iana"
    },
    	"application/tamp-error": {
    	source: "iana"
    },
    	"application/tamp-sequence-adjust": {
    	source: "iana"
    },
    	"application/tamp-sequence-adjust-confirm": {
    	source: "iana"
    },
    	"application/tamp-status-query": {
    	source: "iana"
    },
    	"application/tamp-status-response": {
    	source: "iana"
    },
    	"application/tamp-update": {
    	source: "iana"
    },
    	"application/tamp-update-confirm": {
    	source: "iana"
    },
    	"application/tar": {
    	compressible: true
    },
    	"application/taxii+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/td+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/tei+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"tei",
    		"teicorpus"
    	]
    },
    	"application/tetra_isi": {
    	source: "iana"
    },
    	"application/thraud+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"tfi"
    	]
    },
    	"application/timestamp-query": {
    	source: "iana"
    },
    	"application/timestamp-reply": {
    	source: "iana"
    },
    	"application/timestamped-data": {
    	source: "iana",
    	extensions: [
    		"tsd"
    	]
    },
    	"application/tlsrpt+gzip": {
    	source: "iana"
    },
    	"application/tlsrpt+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/tnauthlist": {
    	source: "iana"
    },
    	"application/token-introspection+jwt": {
    	source: "iana"
    },
    	"application/toml": {
    	compressible: true,
    	extensions: [
    		"toml"
    	]
    },
    	"application/trickle-ice-sdpfrag": {
    	source: "iana"
    },
    	"application/trig": {
    	source: "iana",
    	extensions: [
    		"trig"
    	]
    },
    	"application/ttml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"ttml"
    	]
    },
    	"application/tve-trigger": {
    	source: "iana"
    },
    	"application/tzif": {
    	source: "iana"
    },
    	"application/tzif-leap": {
    	source: "iana"
    },
    	"application/ubjson": {
    	compressible: false,
    	extensions: [
    		"ubj"
    	]
    },
    	"application/ulpfec": {
    	source: "iana"
    },
    	"application/urc-grpsheet+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/urc-ressheet+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rsheet"
    	]
    },
    	"application/urc-targetdesc+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"td"
    	]
    },
    	"application/urc-uisocketdesc+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vcard+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vcard+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vemmi": {
    	source: "iana"
    },
    	"application/vividence.scriptfile": {
    	source: "apache"
    },
    	"application/vnd.1000minds.decision-model+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"1km"
    	]
    },
    	"application/vnd.3gpp-prose+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp-prose-pc3ch+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp-v2x-local-service-information": {
    	source: "iana"
    },
    	"application/vnd.3gpp.5gnas": {
    	source: "iana"
    },
    	"application/vnd.3gpp.access-transfer-events+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.bsf+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.gmop+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.gtpc": {
    	source: "iana"
    },
    	"application/vnd.3gpp.interworking-data": {
    	source: "iana"
    },
    	"application/vnd.3gpp.lpp": {
    	source: "iana"
    },
    	"application/vnd.3gpp.mc-signalling-ear": {
    	source: "iana"
    },
    	"application/vnd.3gpp.mcdata-affiliation-command+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcdata-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcdata-payload": {
    	source: "iana"
    },
    	"application/vnd.3gpp.mcdata-service-config+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcdata-signalling": {
    	source: "iana"
    },
    	"application/vnd.3gpp.mcdata-ue-config+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcdata-user-profile+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcptt-affiliation-command+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcptt-floor-request+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcptt-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcptt-location-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcptt-service-config+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcptt-signed+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcptt-ue-config+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcptt-ue-init-config+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcptt-user-profile+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcvideo-affiliation-command+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcvideo-affiliation-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcvideo-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcvideo-location-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcvideo-service-config+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcvideo-transmission-request+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcvideo-ue-config+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mcvideo-user-profile+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.mid-call+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.ngap": {
    	source: "iana"
    },
    	"application/vnd.3gpp.pfcp": {
    	source: "iana"
    },
    	"application/vnd.3gpp.pic-bw-large": {
    	source: "iana",
    	extensions: [
    		"plb"
    	]
    },
    	"application/vnd.3gpp.pic-bw-small": {
    	source: "iana",
    	extensions: [
    		"psb"
    	]
    },
    	"application/vnd.3gpp.pic-bw-var": {
    	source: "iana",
    	extensions: [
    		"pvb"
    	]
    },
    	"application/vnd.3gpp.s1ap": {
    	source: "iana"
    },
    	"application/vnd.3gpp.sms": {
    	source: "iana"
    },
    	"application/vnd.3gpp.sms+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.srvcc-ext+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.srvcc-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.state-and-event-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp.ussd+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp2.bcmcsinfo+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.3gpp2.sms": {
    	source: "iana"
    },
    	"application/vnd.3gpp2.tcap": {
    	source: "iana",
    	extensions: [
    		"tcap"
    	]
    },
    	"application/vnd.3lightssoftware.imagescal": {
    	source: "iana"
    },
    	"application/vnd.3m.post-it-notes": {
    	source: "iana",
    	extensions: [
    		"pwn"
    	]
    },
    	"application/vnd.accpac.simply.aso": {
    	source: "iana",
    	extensions: [
    		"aso"
    	]
    },
    	"application/vnd.accpac.simply.imp": {
    	source: "iana",
    	extensions: [
    		"imp"
    	]
    },
    	"application/vnd.acucobol": {
    	source: "iana",
    	extensions: [
    		"acu"
    	]
    },
    	"application/vnd.acucorp": {
    	source: "iana",
    	extensions: [
    		"atc",
    		"acutc"
    	]
    },
    	"application/vnd.adobe.air-application-installer-package+zip": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"air"
    	]
    },
    	"application/vnd.adobe.flash.movie": {
    	source: "iana"
    },
    	"application/vnd.adobe.formscentral.fcdt": {
    	source: "iana",
    	extensions: [
    		"fcdt"
    	]
    },
    	"application/vnd.adobe.fxp": {
    	source: "iana",
    	extensions: [
    		"fxp",
    		"fxpl"
    	]
    },
    	"application/vnd.adobe.partial-upload": {
    	source: "iana"
    },
    	"application/vnd.adobe.xdp+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xdp"
    	]
    },
    	"application/vnd.adobe.xfdf": {
    	source: "iana",
    	extensions: [
    		"xfdf"
    	]
    },
    	"application/vnd.aether.imp": {
    	source: "iana"
    },
    	"application/vnd.afpc.afplinedata": {
    	source: "iana"
    },
    	"application/vnd.afpc.afplinedata-pagedef": {
    	source: "iana"
    },
    	"application/vnd.afpc.cmoca-cmresource": {
    	source: "iana"
    },
    	"application/vnd.afpc.foca-charset": {
    	source: "iana"
    },
    	"application/vnd.afpc.foca-codedfont": {
    	source: "iana"
    },
    	"application/vnd.afpc.foca-codepage": {
    	source: "iana"
    },
    	"application/vnd.afpc.modca": {
    	source: "iana"
    },
    	"application/vnd.afpc.modca-cmtable": {
    	source: "iana"
    },
    	"application/vnd.afpc.modca-formdef": {
    	source: "iana"
    },
    	"application/vnd.afpc.modca-mediummap": {
    	source: "iana"
    },
    	"application/vnd.afpc.modca-objectcontainer": {
    	source: "iana"
    },
    	"application/vnd.afpc.modca-overlay": {
    	source: "iana"
    },
    	"application/vnd.afpc.modca-pagesegment": {
    	source: "iana"
    },
    	"application/vnd.age": {
    	source: "iana",
    	extensions: [
    		"age"
    	]
    },
    	"application/vnd.ah-barcode": {
    	source: "iana"
    },
    	"application/vnd.ahead.space": {
    	source: "iana",
    	extensions: [
    		"ahead"
    	]
    },
    	"application/vnd.airzip.filesecure.azf": {
    	source: "iana",
    	extensions: [
    		"azf"
    	]
    },
    	"application/vnd.airzip.filesecure.azs": {
    	source: "iana",
    	extensions: [
    		"azs"
    	]
    },
    	"application/vnd.amadeus+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.amazon.ebook": {
    	source: "apache",
    	extensions: [
    		"azw"
    	]
    },
    	"application/vnd.amazon.mobi8-ebook": {
    	source: "iana"
    },
    	"application/vnd.americandynamics.acc": {
    	source: "iana",
    	extensions: [
    		"acc"
    	]
    },
    	"application/vnd.amiga.ami": {
    	source: "iana",
    	extensions: [
    		"ami"
    	]
    },
    	"application/vnd.amundsen.maze+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.android.ota": {
    	source: "iana"
    },
    	"application/vnd.android.package-archive": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"apk"
    	]
    },
    	"application/vnd.anki": {
    	source: "iana"
    },
    	"application/vnd.anser-web-certificate-issue-initiation": {
    	source: "iana",
    	extensions: [
    		"cii"
    	]
    },
    	"application/vnd.anser-web-funds-transfer-initiation": {
    	source: "apache",
    	extensions: [
    		"fti"
    	]
    },
    	"application/vnd.antix.game-component": {
    	source: "iana",
    	extensions: [
    		"atx"
    	]
    },
    	"application/vnd.apache.arrow.file": {
    	source: "iana"
    },
    	"application/vnd.apache.arrow.stream": {
    	source: "iana"
    },
    	"application/vnd.apache.thrift.binary": {
    	source: "iana"
    },
    	"application/vnd.apache.thrift.compact": {
    	source: "iana"
    },
    	"application/vnd.apache.thrift.json": {
    	source: "iana"
    },
    	"application/vnd.api+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.aplextor.warrp+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.apothekende.reservation+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.apple.installer+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"mpkg"
    	]
    },
    	"application/vnd.apple.keynote": {
    	source: "iana",
    	extensions: [
    		"key"
    	]
    },
    	"application/vnd.apple.mpegurl": {
    	source: "iana",
    	extensions: [
    		"m3u8"
    	]
    },
    	"application/vnd.apple.numbers": {
    	source: "iana",
    	extensions: [
    		"numbers"
    	]
    },
    	"application/vnd.apple.pages": {
    	source: "iana",
    	extensions: [
    		"pages"
    	]
    },
    	"application/vnd.apple.pkpass": {
    	compressible: false,
    	extensions: [
    		"pkpass"
    	]
    },
    	"application/vnd.arastra.swi": {
    	source: "iana"
    },
    	"application/vnd.aristanetworks.swi": {
    	source: "iana",
    	extensions: [
    		"swi"
    	]
    },
    	"application/vnd.artisan+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.artsquare": {
    	source: "iana"
    },
    	"application/vnd.astraea-software.iota": {
    	source: "iana",
    	extensions: [
    		"iota"
    	]
    },
    	"application/vnd.audiograph": {
    	source: "iana",
    	extensions: [
    		"aep"
    	]
    },
    	"application/vnd.autopackage": {
    	source: "iana"
    },
    	"application/vnd.avalon+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.avistar+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.balsamiq.bmml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"bmml"
    	]
    },
    	"application/vnd.balsamiq.bmpr": {
    	source: "iana"
    },
    	"application/vnd.banana-accounting": {
    	source: "iana"
    },
    	"application/vnd.bbf.usp.error": {
    	source: "iana"
    },
    	"application/vnd.bbf.usp.msg": {
    	source: "iana"
    },
    	"application/vnd.bbf.usp.msg+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.bekitzur-stech+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.bint.med-content": {
    	source: "iana"
    },
    	"application/vnd.biopax.rdf+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.blink-idb-value-wrapper": {
    	source: "iana"
    },
    	"application/vnd.blueice.multipass": {
    	source: "iana",
    	extensions: [
    		"mpm"
    	]
    },
    	"application/vnd.bluetooth.ep.oob": {
    	source: "iana"
    },
    	"application/vnd.bluetooth.le.oob": {
    	source: "iana"
    },
    	"application/vnd.bmi": {
    	source: "iana",
    	extensions: [
    		"bmi"
    	]
    },
    	"application/vnd.bpf": {
    	source: "iana"
    },
    	"application/vnd.bpf3": {
    	source: "iana"
    },
    	"application/vnd.businessobjects": {
    	source: "iana",
    	extensions: [
    		"rep"
    	]
    },
    	"application/vnd.byu.uapi+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.cab-jscript": {
    	source: "iana"
    },
    	"application/vnd.canon-cpdl": {
    	source: "iana"
    },
    	"application/vnd.canon-lips": {
    	source: "iana"
    },
    	"application/vnd.capasystems-pg+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.cendio.thinlinc.clientconf": {
    	source: "iana"
    },
    	"application/vnd.century-systems.tcp_stream": {
    	source: "iana"
    },
    	"application/vnd.chemdraw+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"cdxml"
    	]
    },
    	"application/vnd.chess-pgn": {
    	source: "iana"
    },
    	"application/vnd.chipnuts.karaoke-mmd": {
    	source: "iana",
    	extensions: [
    		"mmd"
    	]
    },
    	"application/vnd.ciedi": {
    	source: "iana"
    },
    	"application/vnd.cinderella": {
    	source: "iana",
    	extensions: [
    		"cdy"
    	]
    },
    	"application/vnd.cirpack.isdn-ext": {
    	source: "iana"
    },
    	"application/vnd.citationstyles.style+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"csl"
    	]
    },
    	"application/vnd.claymore": {
    	source: "iana",
    	extensions: [
    		"cla"
    	]
    },
    	"application/vnd.cloanto.rp9": {
    	source: "iana",
    	extensions: [
    		"rp9"
    	]
    },
    	"application/vnd.clonk.c4group": {
    	source: "iana",
    	extensions: [
    		"c4g",
    		"c4d",
    		"c4f",
    		"c4p",
    		"c4u"
    	]
    },
    	"application/vnd.cluetrust.cartomobile-config": {
    	source: "iana",
    	extensions: [
    		"c11amc"
    	]
    },
    	"application/vnd.cluetrust.cartomobile-config-pkg": {
    	source: "iana",
    	extensions: [
    		"c11amz"
    	]
    },
    	"application/vnd.coffeescript": {
    	source: "iana"
    },
    	"application/vnd.collabio.xodocuments.document": {
    	source: "iana"
    },
    	"application/vnd.collabio.xodocuments.document-template": {
    	source: "iana"
    },
    	"application/vnd.collabio.xodocuments.presentation": {
    	source: "iana"
    },
    	"application/vnd.collabio.xodocuments.presentation-template": {
    	source: "iana"
    },
    	"application/vnd.collabio.xodocuments.spreadsheet": {
    	source: "iana"
    },
    	"application/vnd.collabio.xodocuments.spreadsheet-template": {
    	source: "iana"
    },
    	"application/vnd.collection+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.collection.doc+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.collection.next+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.comicbook+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.comicbook-rar": {
    	source: "iana"
    },
    	"application/vnd.commerce-battelle": {
    	source: "iana"
    },
    	"application/vnd.commonspace": {
    	source: "iana",
    	extensions: [
    		"csp"
    	]
    },
    	"application/vnd.contact.cmsg": {
    	source: "iana",
    	extensions: [
    		"cdbcmsg"
    	]
    },
    	"application/vnd.coreos.ignition+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.cosmocaller": {
    	source: "iana",
    	extensions: [
    		"cmc"
    	]
    },
    	"application/vnd.crick.clicker": {
    	source: "iana",
    	extensions: [
    		"clkx"
    	]
    },
    	"application/vnd.crick.clicker.keyboard": {
    	source: "iana",
    	extensions: [
    		"clkk"
    	]
    },
    	"application/vnd.crick.clicker.palette": {
    	source: "iana",
    	extensions: [
    		"clkp"
    	]
    },
    	"application/vnd.crick.clicker.template": {
    	source: "iana",
    	extensions: [
    		"clkt"
    	]
    },
    	"application/vnd.crick.clicker.wordbank": {
    	source: "iana",
    	extensions: [
    		"clkw"
    	]
    },
    	"application/vnd.criticaltools.wbs+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"wbs"
    	]
    },
    	"application/vnd.cryptii.pipe+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.crypto-shade-file": {
    	source: "iana"
    },
    	"application/vnd.cryptomator.encrypted": {
    	source: "iana"
    },
    	"application/vnd.cryptomator.vault": {
    	source: "iana"
    },
    	"application/vnd.ctc-posml": {
    	source: "iana",
    	extensions: [
    		"pml"
    	]
    },
    	"application/vnd.ctct.ws+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.cups-pdf": {
    	source: "iana"
    },
    	"application/vnd.cups-postscript": {
    	source: "iana"
    },
    	"application/vnd.cups-ppd": {
    	source: "iana",
    	extensions: [
    		"ppd"
    	]
    },
    	"application/vnd.cups-raster": {
    	source: "iana"
    },
    	"application/vnd.cups-raw": {
    	source: "iana"
    },
    	"application/vnd.curl": {
    	source: "iana"
    },
    	"application/vnd.curl.car": {
    	source: "apache",
    	extensions: [
    		"car"
    	]
    },
    	"application/vnd.curl.pcurl": {
    	source: "apache",
    	extensions: [
    		"pcurl"
    	]
    },
    	"application/vnd.cyan.dean.root+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.cybank": {
    	source: "iana"
    },
    	"application/vnd.cyclonedx+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.cyclonedx+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.d2l.coursepackage1p0+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.d3m-dataset": {
    	source: "iana"
    },
    	"application/vnd.d3m-problem": {
    	source: "iana"
    },
    	"application/vnd.dart": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"dart"
    	]
    },
    	"application/vnd.data-vision.rdz": {
    	source: "iana",
    	extensions: [
    		"rdz"
    	]
    },
    	"application/vnd.datapackage+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dataresource+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dbf": {
    	source: "iana",
    	extensions: [
    		"dbf"
    	]
    },
    	"application/vnd.debian.binary-package": {
    	source: "iana"
    },
    	"application/vnd.dece.data": {
    	source: "iana",
    	extensions: [
    		"uvf",
    		"uvvf",
    		"uvd",
    		"uvvd"
    	]
    },
    	"application/vnd.dece.ttml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"uvt",
    		"uvvt"
    	]
    },
    	"application/vnd.dece.unspecified": {
    	source: "iana",
    	extensions: [
    		"uvx",
    		"uvvx"
    	]
    },
    	"application/vnd.dece.zip": {
    	source: "iana",
    	extensions: [
    		"uvz",
    		"uvvz"
    	]
    },
    	"application/vnd.denovo.fcselayout-link": {
    	source: "iana",
    	extensions: [
    		"fe_launch"
    	]
    },
    	"application/vnd.desmume.movie": {
    	source: "iana"
    },
    	"application/vnd.dir-bi.plate-dl-nosuffix": {
    	source: "iana"
    },
    	"application/vnd.dm.delegation+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dna": {
    	source: "iana",
    	extensions: [
    		"dna"
    	]
    },
    	"application/vnd.document+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dolby.mlp": {
    	source: "apache",
    	extensions: [
    		"mlp"
    	]
    },
    	"application/vnd.dolby.mobile.1": {
    	source: "iana"
    },
    	"application/vnd.dolby.mobile.2": {
    	source: "iana"
    },
    	"application/vnd.doremir.scorecloud-binary-document": {
    	source: "iana"
    },
    	"application/vnd.dpgraph": {
    	source: "iana",
    	extensions: [
    		"dpg"
    	]
    },
    	"application/vnd.dreamfactory": {
    	source: "iana",
    	extensions: [
    		"dfac"
    	]
    },
    	"application/vnd.drive+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ds-keypoint": {
    	source: "apache",
    	extensions: [
    		"kpxx"
    	]
    },
    	"application/vnd.dtg.local": {
    	source: "iana"
    },
    	"application/vnd.dtg.local.flash": {
    	source: "iana"
    },
    	"application/vnd.dtg.local.html": {
    	source: "iana"
    },
    	"application/vnd.dvb.ait": {
    	source: "iana",
    	extensions: [
    		"ait"
    	]
    },
    	"application/vnd.dvb.dvbisl+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dvb.dvbj": {
    	source: "iana"
    },
    	"application/vnd.dvb.esgcontainer": {
    	source: "iana"
    },
    	"application/vnd.dvb.ipdcdftnotifaccess": {
    	source: "iana"
    },
    	"application/vnd.dvb.ipdcesgaccess": {
    	source: "iana"
    },
    	"application/vnd.dvb.ipdcesgaccess2": {
    	source: "iana"
    },
    	"application/vnd.dvb.ipdcesgpdd": {
    	source: "iana"
    },
    	"application/vnd.dvb.ipdcroaming": {
    	source: "iana"
    },
    	"application/vnd.dvb.iptv.alfec-base": {
    	source: "iana"
    },
    	"application/vnd.dvb.iptv.alfec-enhancement": {
    	source: "iana"
    },
    	"application/vnd.dvb.notif-aggregate-root+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dvb.notif-container+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dvb.notif-generic+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dvb.notif-ia-msglist+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dvb.notif-ia-registration-request+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dvb.notif-ia-registration-response+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dvb.notif-init+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.dvb.pfr": {
    	source: "iana"
    },
    	"application/vnd.dvb.service": {
    	source: "iana",
    	extensions: [
    		"svc"
    	]
    },
    	"application/vnd.dxr": {
    	source: "iana"
    },
    	"application/vnd.dynageo": {
    	source: "iana",
    	extensions: [
    		"geo"
    	]
    },
    	"application/vnd.dzr": {
    	source: "iana"
    },
    	"application/vnd.easykaraoke.cdgdownload": {
    	source: "iana"
    },
    	"application/vnd.ecdis-update": {
    	source: "iana"
    },
    	"application/vnd.ecip.rlp": {
    	source: "iana"
    },
    	"application/vnd.ecowin.chart": {
    	source: "iana",
    	extensions: [
    		"mag"
    	]
    },
    	"application/vnd.ecowin.filerequest": {
    	source: "iana"
    },
    	"application/vnd.ecowin.fileupdate": {
    	source: "iana"
    },
    	"application/vnd.ecowin.series": {
    	source: "iana"
    },
    	"application/vnd.ecowin.seriesrequest": {
    	source: "iana"
    },
    	"application/vnd.ecowin.seriesupdate": {
    	source: "iana"
    },
    	"application/vnd.efi.img": {
    	source: "iana"
    },
    	"application/vnd.efi.iso": {
    	source: "iana"
    },
    	"application/vnd.emclient.accessrequest+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.enliven": {
    	source: "iana",
    	extensions: [
    		"nml"
    	]
    },
    	"application/vnd.enphase.envoy": {
    	source: "iana"
    },
    	"application/vnd.eprints.data+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.epson.esf": {
    	source: "iana",
    	extensions: [
    		"esf"
    	]
    },
    	"application/vnd.epson.msf": {
    	source: "iana",
    	extensions: [
    		"msf"
    	]
    },
    	"application/vnd.epson.quickanime": {
    	source: "iana",
    	extensions: [
    		"qam"
    	]
    },
    	"application/vnd.epson.salt": {
    	source: "iana",
    	extensions: [
    		"slt"
    	]
    },
    	"application/vnd.epson.ssf": {
    	source: "iana",
    	extensions: [
    		"ssf"
    	]
    },
    	"application/vnd.ericsson.quickcall": {
    	source: "iana"
    },
    	"application/vnd.espass-espass+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.eszigno3+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"es3",
    		"et3"
    	]
    },
    	"application/vnd.etsi.aoc+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.asic-e+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.etsi.asic-s+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.etsi.cug+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.iptvcommand+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.iptvdiscovery+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.iptvprofile+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.iptvsad-bc+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.iptvsad-cod+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.iptvsad-npvr+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.iptvservice+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.iptvsync+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.iptvueprofile+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.mcid+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.mheg5": {
    	source: "iana"
    },
    	"application/vnd.etsi.overload-control-policy-dataset+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.pstn+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.sci+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.simservs+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.timestamp-token": {
    	source: "iana"
    },
    	"application/vnd.etsi.tsl+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.etsi.tsl.der": {
    	source: "iana"
    },
    	"application/vnd.eudora.data": {
    	source: "iana"
    },
    	"application/vnd.evolv.ecig.profile": {
    	source: "iana"
    },
    	"application/vnd.evolv.ecig.settings": {
    	source: "iana"
    },
    	"application/vnd.evolv.ecig.theme": {
    	source: "iana"
    },
    	"application/vnd.exstream-empower+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.exstream-package": {
    	source: "iana"
    },
    	"application/vnd.ezpix-album": {
    	source: "iana",
    	extensions: [
    		"ez2"
    	]
    },
    	"application/vnd.ezpix-package": {
    	source: "iana",
    	extensions: [
    		"ez3"
    	]
    },
    	"application/vnd.f-secure.mobile": {
    	source: "iana"
    },
    	"application/vnd.fastcopy-disk-image": {
    	source: "iana"
    },
    	"application/vnd.fdf": {
    	source: "iana",
    	extensions: [
    		"fdf"
    	]
    },
    	"application/vnd.fdsn.mseed": {
    	source: "iana",
    	extensions: [
    		"mseed"
    	]
    },
    	"application/vnd.fdsn.seed": {
    	source: "iana",
    	extensions: [
    		"seed",
    		"dataless"
    	]
    },
    	"application/vnd.ffsns": {
    	source: "iana"
    },
    	"application/vnd.ficlab.flb+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.filmit.zfc": {
    	source: "iana"
    },
    	"application/vnd.fints": {
    	source: "iana"
    },
    	"application/vnd.firemonkeys.cloudcell": {
    	source: "iana"
    },
    	"application/vnd.flographit": {
    	source: "iana",
    	extensions: [
    		"gph"
    	]
    },
    	"application/vnd.fluxtime.clip": {
    	source: "iana",
    	extensions: [
    		"ftc"
    	]
    },
    	"application/vnd.font-fontforge-sfd": {
    	source: "iana"
    },
    	"application/vnd.framemaker": {
    	source: "iana",
    	extensions: [
    		"fm",
    		"frame",
    		"maker",
    		"book"
    	]
    },
    	"application/vnd.frogans.fnc": {
    	source: "iana",
    	extensions: [
    		"fnc"
    	]
    },
    	"application/vnd.frogans.ltf": {
    	source: "iana",
    	extensions: [
    		"ltf"
    	]
    },
    	"application/vnd.fsc.weblaunch": {
    	source: "iana",
    	extensions: [
    		"fsc"
    	]
    },
    	"application/vnd.fujifilm.fb.docuworks": {
    	source: "iana"
    },
    	"application/vnd.fujifilm.fb.docuworks.binder": {
    	source: "iana"
    },
    	"application/vnd.fujifilm.fb.docuworks.container": {
    	source: "iana"
    },
    	"application/vnd.fujifilm.fb.jfi+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.fujitsu.oasys": {
    	source: "iana",
    	extensions: [
    		"oas"
    	]
    },
    	"application/vnd.fujitsu.oasys2": {
    	source: "iana",
    	extensions: [
    		"oa2"
    	]
    },
    	"application/vnd.fujitsu.oasys3": {
    	source: "iana",
    	extensions: [
    		"oa3"
    	]
    },
    	"application/vnd.fujitsu.oasysgp": {
    	source: "iana",
    	extensions: [
    		"fg5"
    	]
    },
    	"application/vnd.fujitsu.oasysprs": {
    	source: "iana",
    	extensions: [
    		"bh2"
    	]
    },
    	"application/vnd.fujixerox.art-ex": {
    	source: "iana"
    },
    	"application/vnd.fujixerox.art4": {
    	source: "iana"
    },
    	"application/vnd.fujixerox.ddd": {
    	source: "iana",
    	extensions: [
    		"ddd"
    	]
    },
    	"application/vnd.fujixerox.docuworks": {
    	source: "iana",
    	extensions: [
    		"xdw"
    	]
    },
    	"application/vnd.fujixerox.docuworks.binder": {
    	source: "iana",
    	extensions: [
    		"xbd"
    	]
    },
    	"application/vnd.fujixerox.docuworks.container": {
    	source: "iana"
    },
    	"application/vnd.fujixerox.hbpl": {
    	source: "iana"
    },
    	"application/vnd.fut-misnet": {
    	source: "iana"
    },
    	"application/vnd.futoin+cbor": {
    	source: "iana"
    },
    	"application/vnd.futoin+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.fuzzysheet": {
    	source: "iana",
    	extensions: [
    		"fzs"
    	]
    },
    	"application/vnd.genomatix.tuxedo": {
    	source: "iana",
    	extensions: [
    		"txd"
    	]
    },
    	"application/vnd.gentics.grd+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.geo+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.geocube+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.geogebra.file": {
    	source: "iana",
    	extensions: [
    		"ggb"
    	]
    },
    	"application/vnd.geogebra.slides": {
    	source: "iana"
    },
    	"application/vnd.geogebra.tool": {
    	source: "iana",
    	extensions: [
    		"ggt"
    	]
    },
    	"application/vnd.geometry-explorer": {
    	source: "iana",
    	extensions: [
    		"gex",
    		"gre"
    	]
    },
    	"application/vnd.geonext": {
    	source: "iana",
    	extensions: [
    		"gxt"
    	]
    },
    	"application/vnd.geoplan": {
    	source: "iana",
    	extensions: [
    		"g2w"
    	]
    },
    	"application/vnd.geospace": {
    	source: "iana",
    	extensions: [
    		"g3w"
    	]
    },
    	"application/vnd.gerber": {
    	source: "iana"
    },
    	"application/vnd.globalplatform.card-content-mgt": {
    	source: "iana"
    },
    	"application/vnd.globalplatform.card-content-mgt-response": {
    	source: "iana"
    },
    	"application/vnd.gmx": {
    	source: "iana",
    	extensions: [
    		"gmx"
    	]
    },
    	"application/vnd.google-apps.document": {
    	compressible: false,
    	extensions: [
    		"gdoc"
    	]
    },
    	"application/vnd.google-apps.presentation": {
    	compressible: false,
    	extensions: [
    		"gslides"
    	]
    },
    	"application/vnd.google-apps.spreadsheet": {
    	compressible: false,
    	extensions: [
    		"gsheet"
    	]
    },
    	"application/vnd.google-earth.kml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"kml"
    	]
    },
    	"application/vnd.google-earth.kmz": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"kmz"
    	]
    },
    	"application/vnd.gov.sk.e-form+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.gov.sk.e-form+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.gov.sk.xmldatacontainer+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.grafeq": {
    	source: "iana",
    	extensions: [
    		"gqf",
    		"gqs"
    	]
    },
    	"application/vnd.gridmp": {
    	source: "iana"
    },
    	"application/vnd.groove-account": {
    	source: "iana",
    	extensions: [
    		"gac"
    	]
    },
    	"application/vnd.groove-help": {
    	source: "iana",
    	extensions: [
    		"ghf"
    	]
    },
    	"application/vnd.groove-identity-message": {
    	source: "iana",
    	extensions: [
    		"gim"
    	]
    },
    	"application/vnd.groove-injector": {
    	source: "iana",
    	extensions: [
    		"grv"
    	]
    },
    	"application/vnd.groove-tool-message": {
    	source: "iana",
    	extensions: [
    		"gtm"
    	]
    },
    	"application/vnd.groove-tool-template": {
    	source: "iana",
    	extensions: [
    		"tpl"
    	]
    },
    	"application/vnd.groove-vcard": {
    	source: "iana",
    	extensions: [
    		"vcg"
    	]
    },
    	"application/vnd.hal+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.hal+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"hal"
    	]
    },
    	"application/vnd.handheld-entertainment+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"zmm"
    	]
    },
    	"application/vnd.hbci": {
    	source: "iana",
    	extensions: [
    		"hbci"
    	]
    },
    	"application/vnd.hc+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.hcl-bireports": {
    	source: "iana"
    },
    	"application/vnd.hdt": {
    	source: "iana"
    },
    	"application/vnd.heroku+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.hhe.lesson-player": {
    	source: "iana",
    	extensions: [
    		"les"
    	]
    },
    	"application/vnd.hp-hpgl": {
    	source: "iana",
    	extensions: [
    		"hpgl"
    	]
    },
    	"application/vnd.hp-hpid": {
    	source: "iana",
    	extensions: [
    		"hpid"
    	]
    },
    	"application/vnd.hp-hps": {
    	source: "iana",
    	extensions: [
    		"hps"
    	]
    },
    	"application/vnd.hp-jlyt": {
    	source: "iana",
    	extensions: [
    		"jlt"
    	]
    },
    	"application/vnd.hp-pcl": {
    	source: "iana",
    	extensions: [
    		"pcl"
    	]
    },
    	"application/vnd.hp-pclxl": {
    	source: "iana",
    	extensions: [
    		"pclxl"
    	]
    },
    	"application/vnd.httphone": {
    	source: "iana"
    },
    	"application/vnd.hydrostatix.sof-data": {
    	source: "iana",
    	extensions: [
    		"sfd-hdstx"
    	]
    },
    	"application/vnd.hyper+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.hyper-item+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.hyperdrive+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.hzn-3d-crossword": {
    	source: "iana"
    },
    	"application/vnd.ibm.afplinedata": {
    	source: "iana"
    },
    	"application/vnd.ibm.electronic-media": {
    	source: "iana"
    },
    	"application/vnd.ibm.minipay": {
    	source: "iana",
    	extensions: [
    		"mpy"
    	]
    },
    	"application/vnd.ibm.modcap": {
    	source: "iana",
    	extensions: [
    		"afp",
    		"listafp",
    		"list3820"
    	]
    },
    	"application/vnd.ibm.rights-management": {
    	source: "iana",
    	extensions: [
    		"irm"
    	]
    },
    	"application/vnd.ibm.secure-container": {
    	source: "iana",
    	extensions: [
    		"sc"
    	]
    },
    	"application/vnd.iccprofile": {
    	source: "iana",
    	extensions: [
    		"icc",
    		"icm"
    	]
    },
    	"application/vnd.ieee.1905": {
    	source: "iana"
    },
    	"application/vnd.igloader": {
    	source: "iana",
    	extensions: [
    		"igl"
    	]
    },
    	"application/vnd.imagemeter.folder+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.imagemeter.image+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.immervision-ivp": {
    	source: "iana",
    	extensions: [
    		"ivp"
    	]
    },
    	"application/vnd.immervision-ivu": {
    	source: "iana",
    	extensions: [
    		"ivu"
    	]
    },
    	"application/vnd.ims.imsccv1p1": {
    	source: "iana"
    },
    	"application/vnd.ims.imsccv1p2": {
    	source: "iana"
    },
    	"application/vnd.ims.imsccv1p3": {
    	source: "iana"
    },
    	"application/vnd.ims.lis.v2.result+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ims.lti.v2.toolconsumerprofile+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ims.lti.v2.toolproxy+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ims.lti.v2.toolproxy.id+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ims.lti.v2.toolsettings+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ims.lti.v2.toolsettings.simple+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.informedcontrol.rms+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.informix-visionary": {
    	source: "iana"
    },
    	"application/vnd.infotech.project": {
    	source: "iana"
    },
    	"application/vnd.infotech.project+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.innopath.wamp.notification": {
    	source: "iana"
    },
    	"application/vnd.insors.igm": {
    	source: "iana",
    	extensions: [
    		"igm"
    	]
    },
    	"application/vnd.intercon.formnet": {
    	source: "iana",
    	extensions: [
    		"xpw",
    		"xpx"
    	]
    },
    	"application/vnd.intergeo": {
    	source: "iana",
    	extensions: [
    		"i2g"
    	]
    },
    	"application/vnd.intertrust.digibox": {
    	source: "iana"
    },
    	"application/vnd.intertrust.nncp": {
    	source: "iana"
    },
    	"application/vnd.intu.qbo": {
    	source: "iana",
    	extensions: [
    		"qbo"
    	]
    },
    	"application/vnd.intu.qfx": {
    	source: "iana",
    	extensions: [
    		"qfx"
    	]
    },
    	"application/vnd.iptc.g2.catalogitem+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.iptc.g2.conceptitem+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.iptc.g2.knowledgeitem+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.iptc.g2.newsitem+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.iptc.g2.newsmessage+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.iptc.g2.packageitem+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.iptc.g2.planningitem+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ipunplugged.rcprofile": {
    	source: "iana",
    	extensions: [
    		"rcprofile"
    	]
    },
    	"application/vnd.irepository.package+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"irp"
    	]
    },
    	"application/vnd.is-xpr": {
    	source: "iana",
    	extensions: [
    		"xpr"
    	]
    },
    	"application/vnd.isac.fcs": {
    	source: "iana",
    	extensions: [
    		"fcs"
    	]
    },
    	"application/vnd.iso11783-10+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.jam": {
    	source: "iana",
    	extensions: [
    		"jam"
    	]
    },
    	"application/vnd.japannet-directory-service": {
    	source: "iana"
    },
    	"application/vnd.japannet-jpnstore-wakeup": {
    	source: "iana"
    },
    	"application/vnd.japannet-payment-wakeup": {
    	source: "iana"
    },
    	"application/vnd.japannet-registration": {
    	source: "iana"
    },
    	"application/vnd.japannet-registration-wakeup": {
    	source: "iana"
    },
    	"application/vnd.japannet-setstore-wakeup": {
    	source: "iana"
    },
    	"application/vnd.japannet-verification": {
    	source: "iana"
    },
    	"application/vnd.japannet-verification-wakeup": {
    	source: "iana"
    },
    	"application/vnd.jcp.javame.midlet-rms": {
    	source: "iana",
    	extensions: [
    		"rms"
    	]
    },
    	"application/vnd.jisp": {
    	source: "iana",
    	extensions: [
    		"jisp"
    	]
    },
    	"application/vnd.joost.joda-archive": {
    	source: "iana",
    	extensions: [
    		"joda"
    	]
    },
    	"application/vnd.jsk.isdn-ngn": {
    	source: "iana"
    },
    	"application/vnd.kahootz": {
    	source: "iana",
    	extensions: [
    		"ktz",
    		"ktr"
    	]
    },
    	"application/vnd.kde.karbon": {
    	source: "iana",
    	extensions: [
    		"karbon"
    	]
    },
    	"application/vnd.kde.kchart": {
    	source: "iana",
    	extensions: [
    		"chrt"
    	]
    },
    	"application/vnd.kde.kformula": {
    	source: "iana",
    	extensions: [
    		"kfo"
    	]
    },
    	"application/vnd.kde.kivio": {
    	source: "iana",
    	extensions: [
    		"flw"
    	]
    },
    	"application/vnd.kde.kontour": {
    	source: "iana",
    	extensions: [
    		"kon"
    	]
    },
    	"application/vnd.kde.kpresenter": {
    	source: "iana",
    	extensions: [
    		"kpr",
    		"kpt"
    	]
    },
    	"application/vnd.kde.kspread": {
    	source: "iana",
    	extensions: [
    		"ksp"
    	]
    },
    	"application/vnd.kde.kword": {
    	source: "iana",
    	extensions: [
    		"kwd",
    		"kwt"
    	]
    },
    	"application/vnd.kenameaapp": {
    	source: "iana",
    	extensions: [
    		"htke"
    	]
    },
    	"application/vnd.kidspiration": {
    	source: "iana",
    	extensions: [
    		"kia"
    	]
    },
    	"application/vnd.kinar": {
    	source: "iana",
    	extensions: [
    		"kne",
    		"knp"
    	]
    },
    	"application/vnd.koan": {
    	source: "iana",
    	extensions: [
    		"skp",
    		"skd",
    		"skt",
    		"skm"
    	]
    },
    	"application/vnd.kodak-descriptor": {
    	source: "iana",
    	extensions: [
    		"sse"
    	]
    },
    	"application/vnd.las": {
    	source: "iana"
    },
    	"application/vnd.las.las+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.las.las+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"lasxml"
    	]
    },
    	"application/vnd.laszip": {
    	source: "iana"
    },
    	"application/vnd.leap+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.liberty-request+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.llamagraphics.life-balance.desktop": {
    	source: "iana",
    	extensions: [
    		"lbd"
    	]
    },
    	"application/vnd.llamagraphics.life-balance.exchange+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"lbe"
    	]
    },
    	"application/vnd.logipipe.circuit+zip": {
    	source: "iana",
    	compressible: false
    },
    	"application/vnd.loom": {
    	source: "iana"
    },
    	"application/vnd.lotus-1-2-3": {
    	source: "iana",
    	extensions: [
    		"123"
    	]
    },
    	"application/vnd.lotus-approach": {
    	source: "iana",
    	extensions: [
    		"apr"
    	]
    },
    	"application/vnd.lotus-freelance": {
    	source: "iana",
    	extensions: [
    		"pre"
    	]
    },
    	"application/vnd.lotus-notes": {
    	source: "iana",
    	extensions: [
    		"nsf"
    	]
    },
    	"application/vnd.lotus-organizer": {
    	source: "iana",
    	extensions: [
    		"org"
    	]
    },
    	"application/vnd.lotus-screencam": {
    	source: "iana",
    	extensions: [
    		"scm"
    	]
    },
    	"application/vnd.lotus-wordpro": {
    	source: "iana",
    	extensions: [
    		"lwp"
    	]
    },
    	"application/vnd.macports.portpkg": {
    	source: "iana",
    	extensions: [
    		"portpkg"
    	]
    },
    	"application/vnd.mapbox-vector-tile": {
    	source: "iana",
    	extensions: [
    		"mvt"
    	]
    },
    	"application/vnd.marlin.drm.actiontoken+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.marlin.drm.conftoken+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.marlin.drm.license+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.marlin.drm.mdcf": {
    	source: "iana"
    },
    	"application/vnd.mason+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.maxmind.maxmind-db": {
    	source: "iana"
    },
    	"application/vnd.mcd": {
    	source: "iana",
    	extensions: [
    		"mcd"
    	]
    },
    	"application/vnd.medcalcdata": {
    	source: "iana",
    	extensions: [
    		"mc1"
    	]
    },
    	"application/vnd.mediastation.cdkey": {
    	source: "iana",
    	extensions: [
    		"cdkey"
    	]
    },
    	"application/vnd.meridian-slingshot": {
    	source: "iana"
    },
    	"application/vnd.mfer": {
    	source: "iana",
    	extensions: [
    		"mwf"
    	]
    },
    	"application/vnd.mfmp": {
    	source: "iana",
    	extensions: [
    		"mfm"
    	]
    },
    	"application/vnd.micro+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.micrografx.flo": {
    	source: "iana",
    	extensions: [
    		"flo"
    	]
    },
    	"application/vnd.micrografx.igx": {
    	source: "iana",
    	extensions: [
    		"igx"
    	]
    },
    	"application/vnd.microsoft.portable-executable": {
    	source: "iana"
    },
    	"application/vnd.microsoft.windows.thumbnail-cache": {
    	source: "iana"
    },
    	"application/vnd.miele+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.mif": {
    	source: "iana",
    	extensions: [
    		"mif"
    	]
    },
    	"application/vnd.minisoft-hp3000-save": {
    	source: "iana"
    },
    	"application/vnd.mitsubishi.misty-guard.trustweb": {
    	source: "iana"
    },
    	"application/vnd.mobius.daf": {
    	source: "iana",
    	extensions: [
    		"daf"
    	]
    },
    	"application/vnd.mobius.dis": {
    	source: "iana",
    	extensions: [
    		"dis"
    	]
    },
    	"application/vnd.mobius.mbk": {
    	source: "iana",
    	extensions: [
    		"mbk"
    	]
    },
    	"application/vnd.mobius.mqy": {
    	source: "iana",
    	extensions: [
    		"mqy"
    	]
    },
    	"application/vnd.mobius.msl": {
    	source: "iana",
    	extensions: [
    		"msl"
    	]
    },
    	"application/vnd.mobius.plc": {
    	source: "iana",
    	extensions: [
    		"plc"
    	]
    },
    	"application/vnd.mobius.txf": {
    	source: "iana",
    	extensions: [
    		"txf"
    	]
    },
    	"application/vnd.mophun.application": {
    	source: "iana",
    	extensions: [
    		"mpn"
    	]
    },
    	"application/vnd.mophun.certificate": {
    	source: "iana",
    	extensions: [
    		"mpc"
    	]
    },
    	"application/vnd.motorola.flexsuite": {
    	source: "iana"
    },
    	"application/vnd.motorola.flexsuite.adsi": {
    	source: "iana"
    },
    	"application/vnd.motorola.flexsuite.fis": {
    	source: "iana"
    },
    	"application/vnd.motorola.flexsuite.gotap": {
    	source: "iana"
    },
    	"application/vnd.motorola.flexsuite.kmr": {
    	source: "iana"
    },
    	"application/vnd.motorola.flexsuite.ttc": {
    	source: "iana"
    },
    	"application/vnd.motorola.flexsuite.wem": {
    	source: "iana"
    },
    	"application/vnd.motorola.iprm": {
    	source: "iana"
    },
    	"application/vnd.mozilla.xul+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xul"
    	]
    },
    	"application/vnd.ms-3mfdocument": {
    	source: "iana"
    },
    	"application/vnd.ms-artgalry": {
    	source: "iana",
    	extensions: [
    		"cil"
    	]
    },
    	"application/vnd.ms-asf": {
    	source: "iana"
    },
    	"application/vnd.ms-cab-compressed": {
    	source: "iana",
    	extensions: [
    		"cab"
    	]
    },
    	"application/vnd.ms-color.iccprofile": {
    	source: "apache"
    },
    	"application/vnd.ms-excel": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"xls",
    		"xlm",
    		"xla",
    		"xlc",
    		"xlt",
    		"xlw"
    	]
    },
    	"application/vnd.ms-excel.addin.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"xlam"
    	]
    },
    	"application/vnd.ms-excel.sheet.binary.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"xlsb"
    	]
    },
    	"application/vnd.ms-excel.sheet.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"xlsm"
    	]
    },
    	"application/vnd.ms-excel.template.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"xltm"
    	]
    },
    	"application/vnd.ms-fontobject": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"eot"
    	]
    },
    	"application/vnd.ms-htmlhelp": {
    	source: "iana",
    	extensions: [
    		"chm"
    	]
    },
    	"application/vnd.ms-ims": {
    	source: "iana",
    	extensions: [
    		"ims"
    	]
    },
    	"application/vnd.ms-lrm": {
    	source: "iana",
    	extensions: [
    		"lrm"
    	]
    },
    	"application/vnd.ms-office.activex+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ms-officetheme": {
    	source: "iana",
    	extensions: [
    		"thmx"
    	]
    },
    	"application/vnd.ms-opentype": {
    	source: "apache",
    	compressible: true
    },
    	"application/vnd.ms-outlook": {
    	compressible: false,
    	extensions: [
    		"msg"
    	]
    },
    	"application/vnd.ms-package.obfuscated-opentype": {
    	source: "apache"
    },
    	"application/vnd.ms-pki.seccat": {
    	source: "apache",
    	extensions: [
    		"cat"
    	]
    },
    	"application/vnd.ms-pki.stl": {
    	source: "apache",
    	extensions: [
    		"stl"
    	]
    },
    	"application/vnd.ms-playready.initiator+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ms-powerpoint": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"ppt",
    		"pps",
    		"pot"
    	]
    },
    	"application/vnd.ms-powerpoint.addin.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"ppam"
    	]
    },
    	"application/vnd.ms-powerpoint.presentation.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"pptm"
    	]
    },
    	"application/vnd.ms-powerpoint.slide.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"sldm"
    	]
    },
    	"application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"ppsm"
    	]
    },
    	"application/vnd.ms-powerpoint.template.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"potm"
    	]
    },
    	"application/vnd.ms-printdevicecapabilities+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ms-printing.printticket+xml": {
    	source: "apache",
    	compressible: true
    },
    	"application/vnd.ms-printschematicket+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ms-project": {
    	source: "iana",
    	extensions: [
    		"mpp",
    		"mpt"
    	]
    },
    	"application/vnd.ms-tnef": {
    	source: "iana"
    },
    	"application/vnd.ms-windows.devicepairing": {
    	source: "iana"
    },
    	"application/vnd.ms-windows.nwprinting.oob": {
    	source: "iana"
    },
    	"application/vnd.ms-windows.printerpairing": {
    	source: "iana"
    },
    	"application/vnd.ms-windows.wsd.oob": {
    	source: "iana"
    },
    	"application/vnd.ms-wmdrm.lic-chlg-req": {
    	source: "iana"
    },
    	"application/vnd.ms-wmdrm.lic-resp": {
    	source: "iana"
    },
    	"application/vnd.ms-wmdrm.meter-chlg-req": {
    	source: "iana"
    },
    	"application/vnd.ms-wmdrm.meter-resp": {
    	source: "iana"
    },
    	"application/vnd.ms-word.document.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"docm"
    	]
    },
    	"application/vnd.ms-word.template.macroenabled.12": {
    	source: "iana",
    	extensions: [
    		"dotm"
    	]
    },
    	"application/vnd.ms-works": {
    	source: "iana",
    	extensions: [
    		"wps",
    		"wks",
    		"wcm",
    		"wdb"
    	]
    },
    	"application/vnd.ms-wpl": {
    	source: "iana",
    	extensions: [
    		"wpl"
    	]
    },
    	"application/vnd.ms-xpsdocument": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"xps"
    	]
    },
    	"application/vnd.msa-disk-image": {
    	source: "iana"
    },
    	"application/vnd.mseq": {
    	source: "iana",
    	extensions: [
    		"mseq"
    	]
    },
    	"application/vnd.msign": {
    	source: "iana"
    },
    	"application/vnd.multiad.creator": {
    	source: "iana"
    },
    	"application/vnd.multiad.creator.cif": {
    	source: "iana"
    },
    	"application/vnd.music-niff": {
    	source: "iana"
    },
    	"application/vnd.musician": {
    	source: "iana",
    	extensions: [
    		"mus"
    	]
    },
    	"application/vnd.muvee.style": {
    	source: "iana",
    	extensions: [
    		"msty"
    	]
    },
    	"application/vnd.mynfc": {
    	source: "iana",
    	extensions: [
    		"taglet"
    	]
    },
    	"application/vnd.nacamar.ybrid+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.ncd.control": {
    	source: "iana"
    },
    	"application/vnd.ncd.reference": {
    	source: "iana"
    },
    	"application/vnd.nearst.inv+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.nebumind.line": {
    	source: "iana"
    },
    	"application/vnd.nervana": {
    	source: "iana"
    },
    	"application/vnd.netfpx": {
    	source: "iana"
    },
    	"application/vnd.neurolanguage.nlu": {
    	source: "iana",
    	extensions: [
    		"nlu"
    	]
    },
    	"application/vnd.nimn": {
    	source: "iana"
    },
    	"application/vnd.nintendo.nitro.rom": {
    	source: "iana"
    },
    	"application/vnd.nintendo.snes.rom": {
    	source: "iana"
    },
    	"application/vnd.nitf": {
    	source: "iana",
    	extensions: [
    		"ntf",
    		"nitf"
    	]
    },
    	"application/vnd.noblenet-directory": {
    	source: "iana",
    	extensions: [
    		"nnd"
    	]
    },
    	"application/vnd.noblenet-sealer": {
    	source: "iana",
    	extensions: [
    		"nns"
    	]
    },
    	"application/vnd.noblenet-web": {
    	source: "iana",
    	extensions: [
    		"nnw"
    	]
    },
    	"application/vnd.nokia.catalogs": {
    	source: "iana"
    },
    	"application/vnd.nokia.conml+wbxml": {
    	source: "iana"
    },
    	"application/vnd.nokia.conml+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.nokia.iptv.config+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.nokia.isds-radio-presets": {
    	source: "iana"
    },
    	"application/vnd.nokia.landmark+wbxml": {
    	source: "iana"
    },
    	"application/vnd.nokia.landmark+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.nokia.landmarkcollection+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.nokia.n-gage.ac+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"ac"
    	]
    },
    	"application/vnd.nokia.n-gage.data": {
    	source: "iana",
    	extensions: [
    		"ngdat"
    	]
    },
    	"application/vnd.nokia.n-gage.symbian.install": {
    	source: "iana",
    	extensions: [
    		"n-gage"
    	]
    },
    	"application/vnd.nokia.ncd": {
    	source: "iana"
    },
    	"application/vnd.nokia.pcd+wbxml": {
    	source: "iana"
    },
    	"application/vnd.nokia.pcd+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.nokia.radio-preset": {
    	source: "iana",
    	extensions: [
    		"rpst"
    	]
    },
    	"application/vnd.nokia.radio-presets": {
    	source: "iana",
    	extensions: [
    		"rpss"
    	]
    },
    	"application/vnd.novadigm.edm": {
    	source: "iana",
    	extensions: [
    		"edm"
    	]
    },
    	"application/vnd.novadigm.edx": {
    	source: "iana",
    	extensions: [
    		"edx"
    	]
    },
    	"application/vnd.novadigm.ext": {
    	source: "iana",
    	extensions: [
    		"ext"
    	]
    },
    	"application/vnd.ntt-local.content-share": {
    	source: "iana"
    },
    	"application/vnd.ntt-local.file-transfer": {
    	source: "iana"
    },
    	"application/vnd.ntt-local.ogw_remote-access": {
    	source: "iana"
    },
    	"application/vnd.ntt-local.sip-ta_remote": {
    	source: "iana"
    },
    	"application/vnd.ntt-local.sip-ta_tcp_stream": {
    	source: "iana"
    },
    	"application/vnd.oasis.opendocument.chart": {
    	source: "iana",
    	extensions: [
    		"odc"
    	]
    },
    	"application/vnd.oasis.opendocument.chart-template": {
    	source: "iana",
    	extensions: [
    		"otc"
    	]
    },
    	"application/vnd.oasis.opendocument.database": {
    	source: "iana",
    	extensions: [
    		"odb"
    	]
    },
    	"application/vnd.oasis.opendocument.formula": {
    	source: "iana",
    	extensions: [
    		"odf"
    	]
    },
    	"application/vnd.oasis.opendocument.formula-template": {
    	source: "iana",
    	extensions: [
    		"odft"
    	]
    },
    	"application/vnd.oasis.opendocument.graphics": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"odg"
    	]
    },
    	"application/vnd.oasis.opendocument.graphics-template": {
    	source: "iana",
    	extensions: [
    		"otg"
    	]
    },
    	"application/vnd.oasis.opendocument.image": {
    	source: "iana",
    	extensions: [
    		"odi"
    	]
    },
    	"application/vnd.oasis.opendocument.image-template": {
    	source: "iana",
    	extensions: [
    		"oti"
    	]
    },
    	"application/vnd.oasis.opendocument.presentation": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"odp"
    	]
    },
    	"application/vnd.oasis.opendocument.presentation-template": {
    	source: "iana",
    	extensions: [
    		"otp"
    	]
    },
    	"application/vnd.oasis.opendocument.spreadsheet": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"ods"
    	]
    },
    	"application/vnd.oasis.opendocument.spreadsheet-template": {
    	source: "iana",
    	extensions: [
    		"ots"
    	]
    },
    	"application/vnd.oasis.opendocument.text": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"odt"
    	]
    },
    	"application/vnd.oasis.opendocument.text-master": {
    	source: "iana",
    	extensions: [
    		"odm"
    	]
    },
    	"application/vnd.oasis.opendocument.text-template": {
    	source: "iana",
    	extensions: [
    		"ott"
    	]
    },
    	"application/vnd.oasis.opendocument.text-web": {
    	source: "iana",
    	extensions: [
    		"oth"
    	]
    },
    	"application/vnd.obn": {
    	source: "iana"
    },
    	"application/vnd.ocf+cbor": {
    	source: "iana"
    },
    	"application/vnd.oci.image.manifest.v1+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oftn.l10n+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oipf.contentaccessdownload+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oipf.contentaccessstreaming+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oipf.cspg-hexbinary": {
    	source: "iana"
    },
    	"application/vnd.oipf.dae.svg+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oipf.dae.xhtml+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oipf.mippvcontrolmessage+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oipf.pae.gem": {
    	source: "iana"
    },
    	"application/vnd.oipf.spdiscovery+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oipf.spdlist+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oipf.ueprofile+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oipf.userprofile+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.olpc-sugar": {
    	source: "iana",
    	extensions: [
    		"xo"
    	]
    },
    	"application/vnd.oma-scws-config": {
    	source: "iana"
    },
    	"application/vnd.oma-scws-http-request": {
    	source: "iana"
    },
    	"application/vnd.oma-scws-http-response": {
    	source: "iana"
    },
    	"application/vnd.oma.bcast.associated-procedure-parameter+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.bcast.drm-trigger+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.bcast.imd+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.bcast.ltkm": {
    	source: "iana"
    },
    	"application/vnd.oma.bcast.notification+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.bcast.provisioningtrigger": {
    	source: "iana"
    },
    	"application/vnd.oma.bcast.sgboot": {
    	source: "iana"
    },
    	"application/vnd.oma.bcast.sgdd+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.bcast.sgdu": {
    	source: "iana"
    },
    	"application/vnd.oma.bcast.simple-symbol-container": {
    	source: "iana"
    },
    	"application/vnd.oma.bcast.smartcard-trigger+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.bcast.sprov+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.bcast.stkm": {
    	source: "iana"
    },
    	"application/vnd.oma.cab-address-book+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.cab-feature-handler+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.cab-pcc+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.cab-subs-invite+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.cab-user-prefs+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.dcd": {
    	source: "iana"
    },
    	"application/vnd.oma.dcdc": {
    	source: "iana"
    },
    	"application/vnd.oma.dd2+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"dd2"
    	]
    },
    	"application/vnd.oma.drm.risd+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.group-usage-list+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.lwm2m+cbor": {
    	source: "iana"
    },
    	"application/vnd.oma.lwm2m+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.lwm2m+tlv": {
    	source: "iana"
    },
    	"application/vnd.oma.pal+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.poc.detailed-progress-report+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.poc.final-report+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.poc.groups+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.poc.invocation-descriptor+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.poc.optimized-progress-report+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.push": {
    	source: "iana"
    },
    	"application/vnd.oma.scidm.messages+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oma.xcap-directory+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.omads-email+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/vnd.omads-file+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/vnd.omads-folder+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/vnd.omaloc-supl-init": {
    	source: "iana"
    },
    	"application/vnd.onepager": {
    	source: "iana"
    },
    	"application/vnd.onepagertamp": {
    	source: "iana"
    },
    	"application/vnd.onepagertamx": {
    	source: "iana"
    },
    	"application/vnd.onepagertat": {
    	source: "iana"
    },
    	"application/vnd.onepagertatp": {
    	source: "iana"
    },
    	"application/vnd.onepagertatx": {
    	source: "iana"
    },
    	"application/vnd.openblox.game+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"obgx"
    	]
    },
    	"application/vnd.openblox.game-binary": {
    	source: "iana"
    },
    	"application/vnd.openeye.oeb": {
    	source: "iana"
    },
    	"application/vnd.openofficeorg.extension": {
    	source: "apache",
    	extensions: [
    		"oxt"
    	]
    },
    	"application/vnd.openstreetmap.data+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"osm"
    	]
    },
    	"application/vnd.opentimestamps.ots": {
    	source: "iana"
    },
    	"application/vnd.openxmlformats-officedocument.custom-properties+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.drawing+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.extended-properties+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.presentation": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"pptx"
    	]
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.slide": {
    	source: "iana",
    	extensions: [
    		"sldx"
    	]
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
    	source: "iana",
    	extensions: [
    		"ppsx"
    	]
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.template": {
    	source: "iana",
    	extensions: [
    		"potx"
    	]
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"xlsx"
    	]
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
    	source: "iana",
    	extensions: [
    		"xltx"
    	]
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.theme+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.themeoverride+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.vmldrawing": {
    	source: "iana"
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"docx"
    	]
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
    	source: "iana",
    	extensions: [
    		"dotx"
    	]
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-package.core-properties+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.openxmlformats-package.relationships+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oracle.resource+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.orange.indata": {
    	source: "iana"
    },
    	"application/vnd.osa.netdeploy": {
    	source: "iana"
    },
    	"application/vnd.osgeo.mapguide.package": {
    	source: "iana",
    	extensions: [
    		"mgp"
    	]
    },
    	"application/vnd.osgi.bundle": {
    	source: "iana"
    },
    	"application/vnd.osgi.dp": {
    	source: "iana",
    	extensions: [
    		"dp"
    	]
    },
    	"application/vnd.osgi.subsystem": {
    	source: "iana",
    	extensions: [
    		"esa"
    	]
    },
    	"application/vnd.otps.ct-kip+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.oxli.countgraph": {
    	source: "iana"
    },
    	"application/vnd.pagerduty+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.palm": {
    	source: "iana",
    	extensions: [
    		"pdb",
    		"pqa",
    		"oprc"
    	]
    },
    	"application/vnd.panoply": {
    	source: "iana"
    },
    	"application/vnd.paos.xml": {
    	source: "iana"
    },
    	"application/vnd.patentdive": {
    	source: "iana"
    },
    	"application/vnd.patientecommsdoc": {
    	source: "iana"
    },
    	"application/vnd.pawaafile": {
    	source: "iana",
    	extensions: [
    		"paw"
    	]
    },
    	"application/vnd.pcos": {
    	source: "iana"
    },
    	"application/vnd.pg.format": {
    	source: "iana",
    	extensions: [
    		"str"
    	]
    },
    	"application/vnd.pg.osasli": {
    	source: "iana",
    	extensions: [
    		"ei6"
    	]
    },
    	"application/vnd.piaccess.application-licence": {
    	source: "iana"
    },
    	"application/vnd.picsel": {
    	source: "iana",
    	extensions: [
    		"efif"
    	]
    },
    	"application/vnd.pmi.widget": {
    	source: "iana",
    	extensions: [
    		"wg"
    	]
    },
    	"application/vnd.poc.group-advertisement+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.pocketlearn": {
    	source: "iana",
    	extensions: [
    		"plf"
    	]
    },
    	"application/vnd.powerbuilder6": {
    	source: "iana",
    	extensions: [
    		"pbd"
    	]
    },
    	"application/vnd.powerbuilder6-s": {
    	source: "iana"
    },
    	"application/vnd.powerbuilder7": {
    	source: "iana"
    },
    	"application/vnd.powerbuilder7-s": {
    	source: "iana"
    },
    	"application/vnd.powerbuilder75": {
    	source: "iana"
    },
    	"application/vnd.powerbuilder75-s": {
    	source: "iana"
    },
    	"application/vnd.preminet": {
    	source: "iana"
    },
    	"application/vnd.previewsystems.box": {
    	source: "iana",
    	extensions: [
    		"box"
    	]
    },
    	"application/vnd.proteus.magazine": {
    	source: "iana",
    	extensions: [
    		"mgz"
    	]
    },
    	"application/vnd.psfs": {
    	source: "iana"
    },
    	"application/vnd.publishare-delta-tree": {
    	source: "iana",
    	extensions: [
    		"qps"
    	]
    },
    	"application/vnd.pvi.ptid1": {
    	source: "iana",
    	extensions: [
    		"ptid"
    	]
    },
    	"application/vnd.pwg-multiplexed": {
    	source: "iana"
    },
    	"application/vnd.pwg-xhtml-print+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.qualcomm.brew-app-res": {
    	source: "iana"
    },
    	"application/vnd.quarantainenet": {
    	source: "iana"
    },
    	"application/vnd.quark.quarkxpress": {
    	source: "iana",
    	extensions: [
    		"qxd",
    		"qxt",
    		"qwd",
    		"qwt",
    		"qxl",
    		"qxb"
    	]
    },
    	"application/vnd.quobject-quoxdocument": {
    	source: "iana"
    },
    	"application/vnd.radisys.moml+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-audit+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-audit-conf+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-audit-conn+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-audit-dialog+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-audit-stream+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-conf+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-dialog+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-dialog-base+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-dialog-fax-detect+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-dialog-group+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-dialog-speech+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.radisys.msml-dialog-transform+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.rainstor.data": {
    	source: "iana"
    },
    	"application/vnd.rapid": {
    	source: "iana"
    },
    	"application/vnd.rar": {
    	source: "iana",
    	extensions: [
    		"rar"
    	]
    },
    	"application/vnd.realvnc.bed": {
    	source: "iana",
    	extensions: [
    		"bed"
    	]
    },
    	"application/vnd.recordare.musicxml": {
    	source: "iana",
    	extensions: [
    		"mxl"
    	]
    },
    	"application/vnd.recordare.musicxml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"musicxml"
    	]
    },
    	"application/vnd.renlearn.rlprint": {
    	source: "iana"
    },
    	"application/vnd.resilient.logic": {
    	source: "iana"
    },
    	"application/vnd.restful+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.rig.cryptonote": {
    	source: "iana",
    	extensions: [
    		"cryptonote"
    	]
    },
    	"application/vnd.rim.cod": {
    	source: "apache",
    	extensions: [
    		"cod"
    	]
    },
    	"application/vnd.rn-realmedia": {
    	source: "apache",
    	extensions: [
    		"rm"
    	]
    },
    	"application/vnd.rn-realmedia-vbr": {
    	source: "apache",
    	extensions: [
    		"rmvb"
    	]
    },
    	"application/vnd.route66.link66+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"link66"
    	]
    },
    	"application/vnd.rs-274x": {
    	source: "iana"
    },
    	"application/vnd.ruckus.download": {
    	source: "iana"
    },
    	"application/vnd.s3sms": {
    	source: "iana"
    },
    	"application/vnd.sailingtracker.track": {
    	source: "iana",
    	extensions: [
    		"st"
    	]
    },
    	"application/vnd.sar": {
    	source: "iana"
    },
    	"application/vnd.sbm.cid": {
    	source: "iana"
    },
    	"application/vnd.sbm.mid2": {
    	source: "iana"
    },
    	"application/vnd.scribus": {
    	source: "iana"
    },
    	"application/vnd.sealed.3df": {
    	source: "iana"
    },
    	"application/vnd.sealed.csf": {
    	source: "iana"
    },
    	"application/vnd.sealed.doc": {
    	source: "iana"
    },
    	"application/vnd.sealed.eml": {
    	source: "iana"
    },
    	"application/vnd.sealed.mht": {
    	source: "iana"
    },
    	"application/vnd.sealed.net": {
    	source: "iana"
    },
    	"application/vnd.sealed.ppt": {
    	source: "iana"
    },
    	"application/vnd.sealed.tiff": {
    	source: "iana"
    },
    	"application/vnd.sealed.xls": {
    	source: "iana"
    },
    	"application/vnd.sealedmedia.softseal.html": {
    	source: "iana"
    },
    	"application/vnd.sealedmedia.softseal.pdf": {
    	source: "iana"
    },
    	"application/vnd.seemail": {
    	source: "iana",
    	extensions: [
    		"see"
    	]
    },
    	"application/vnd.seis+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.sema": {
    	source: "iana",
    	extensions: [
    		"sema"
    	]
    },
    	"application/vnd.semd": {
    	source: "iana",
    	extensions: [
    		"semd"
    	]
    },
    	"application/vnd.semf": {
    	source: "iana",
    	extensions: [
    		"semf"
    	]
    },
    	"application/vnd.shade-save-file": {
    	source: "iana"
    },
    	"application/vnd.shana.informed.formdata": {
    	source: "iana",
    	extensions: [
    		"ifm"
    	]
    },
    	"application/vnd.shana.informed.formtemplate": {
    	source: "iana",
    	extensions: [
    		"itp"
    	]
    },
    	"application/vnd.shana.informed.interchange": {
    	source: "iana",
    	extensions: [
    		"iif"
    	]
    },
    	"application/vnd.shana.informed.package": {
    	source: "iana",
    	extensions: [
    		"ipk"
    	]
    },
    	"application/vnd.shootproof+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.shopkick+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.shp": {
    	source: "iana"
    },
    	"application/vnd.shx": {
    	source: "iana"
    },
    	"application/vnd.sigrok.session": {
    	source: "iana"
    },
    	"application/vnd.simtech-mindmapper": {
    	source: "iana",
    	extensions: [
    		"twd",
    		"twds"
    	]
    },
    	"application/vnd.siren+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.smaf": {
    	source: "iana",
    	extensions: [
    		"mmf"
    	]
    },
    	"application/vnd.smart.notebook": {
    	source: "iana"
    },
    	"application/vnd.smart.teacher": {
    	source: "iana",
    	extensions: [
    		"teacher"
    	]
    },
    	"application/vnd.snesdev-page-table": {
    	source: "iana"
    },
    	"application/vnd.software602.filler.form+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"fo"
    	]
    },
    	"application/vnd.software602.filler.form-xml-zip": {
    	source: "iana"
    },
    	"application/vnd.solent.sdkm+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"sdkm",
    		"sdkd"
    	]
    },
    	"application/vnd.spotfire.dxp": {
    	source: "iana",
    	extensions: [
    		"dxp"
    	]
    },
    	"application/vnd.spotfire.sfs": {
    	source: "iana",
    	extensions: [
    		"sfs"
    	]
    },
    	"application/vnd.sqlite3": {
    	source: "iana"
    },
    	"application/vnd.sss-cod": {
    	source: "iana"
    },
    	"application/vnd.sss-dtf": {
    	source: "iana"
    },
    	"application/vnd.sss-ntf": {
    	source: "iana"
    },
    	"application/vnd.stardivision.calc": {
    	source: "apache",
    	extensions: [
    		"sdc"
    	]
    },
    	"application/vnd.stardivision.draw": {
    	source: "apache",
    	extensions: [
    		"sda"
    	]
    },
    	"application/vnd.stardivision.impress": {
    	source: "apache",
    	extensions: [
    		"sdd"
    	]
    },
    	"application/vnd.stardivision.math": {
    	source: "apache",
    	extensions: [
    		"smf"
    	]
    },
    	"application/vnd.stardivision.writer": {
    	source: "apache",
    	extensions: [
    		"sdw",
    		"vor"
    	]
    },
    	"application/vnd.stardivision.writer-global": {
    	source: "apache",
    	extensions: [
    		"sgl"
    	]
    },
    	"application/vnd.stepmania.package": {
    	source: "iana",
    	extensions: [
    		"smzip"
    	]
    },
    	"application/vnd.stepmania.stepchart": {
    	source: "iana",
    	extensions: [
    		"sm"
    	]
    },
    	"application/vnd.street-stream": {
    	source: "iana"
    },
    	"application/vnd.sun.wadl+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"wadl"
    	]
    },
    	"application/vnd.sun.xml.calc": {
    	source: "apache",
    	extensions: [
    		"sxc"
    	]
    },
    	"application/vnd.sun.xml.calc.template": {
    	source: "apache",
    	extensions: [
    		"stc"
    	]
    },
    	"application/vnd.sun.xml.draw": {
    	source: "apache",
    	extensions: [
    		"sxd"
    	]
    },
    	"application/vnd.sun.xml.draw.template": {
    	source: "apache",
    	extensions: [
    		"std"
    	]
    },
    	"application/vnd.sun.xml.impress": {
    	source: "apache",
    	extensions: [
    		"sxi"
    	]
    },
    	"application/vnd.sun.xml.impress.template": {
    	source: "apache",
    	extensions: [
    		"sti"
    	]
    },
    	"application/vnd.sun.xml.math": {
    	source: "apache",
    	extensions: [
    		"sxm"
    	]
    },
    	"application/vnd.sun.xml.writer": {
    	source: "apache",
    	extensions: [
    		"sxw"
    	]
    },
    	"application/vnd.sun.xml.writer.global": {
    	source: "apache",
    	extensions: [
    		"sxg"
    	]
    },
    	"application/vnd.sun.xml.writer.template": {
    	source: "apache",
    	extensions: [
    		"stw"
    	]
    },
    	"application/vnd.sus-calendar": {
    	source: "iana",
    	extensions: [
    		"sus",
    		"susp"
    	]
    },
    	"application/vnd.svd": {
    	source: "iana",
    	extensions: [
    		"svd"
    	]
    },
    	"application/vnd.swiftview-ics": {
    	source: "iana"
    },
    	"application/vnd.sycle+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.symbian.install": {
    	source: "apache",
    	extensions: [
    		"sis",
    		"sisx"
    	]
    },
    	"application/vnd.syncml+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true,
    	extensions: [
    		"xsm"
    	]
    },
    	"application/vnd.syncml.dm+wbxml": {
    	source: "iana",
    	charset: "UTF-8",
    	extensions: [
    		"bdm"
    	]
    },
    	"application/vnd.syncml.dm+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true,
    	extensions: [
    		"xdm"
    	]
    },
    	"application/vnd.syncml.dm.notification": {
    	source: "iana"
    },
    	"application/vnd.syncml.dmddf+wbxml": {
    	source: "iana"
    },
    	"application/vnd.syncml.dmddf+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true,
    	extensions: [
    		"ddf"
    	]
    },
    	"application/vnd.syncml.dmtnds+wbxml": {
    	source: "iana"
    },
    	"application/vnd.syncml.dmtnds+xml": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true
    },
    	"application/vnd.syncml.ds.notification": {
    	source: "iana"
    },
    	"application/vnd.tableschema+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.tao.intent-module-archive": {
    	source: "iana",
    	extensions: [
    		"tao"
    	]
    },
    	"application/vnd.tcpdump.pcap": {
    	source: "iana",
    	extensions: [
    		"pcap",
    		"cap",
    		"dmp"
    	]
    },
    	"application/vnd.think-cell.ppttc+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.tmd.mediaflex.api+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.tml": {
    	source: "iana"
    },
    	"application/vnd.tmobile-livetv": {
    	source: "iana",
    	extensions: [
    		"tmo"
    	]
    },
    	"application/vnd.tri.onesource": {
    	source: "iana"
    },
    	"application/vnd.trid.tpt": {
    	source: "iana",
    	extensions: [
    		"tpt"
    	]
    },
    	"application/vnd.triscape.mxs": {
    	source: "iana",
    	extensions: [
    		"mxs"
    	]
    },
    	"application/vnd.trueapp": {
    	source: "iana",
    	extensions: [
    		"tra"
    	]
    },
    	"application/vnd.truedoc": {
    	source: "iana"
    },
    	"application/vnd.ubisoft.webplayer": {
    	source: "iana"
    },
    	"application/vnd.ufdl": {
    	source: "iana",
    	extensions: [
    		"ufd",
    		"ufdl"
    	]
    },
    	"application/vnd.uiq.theme": {
    	source: "iana",
    	extensions: [
    		"utz"
    	]
    },
    	"application/vnd.umajin": {
    	source: "iana",
    	extensions: [
    		"umj"
    	]
    },
    	"application/vnd.unity": {
    	source: "iana",
    	extensions: [
    		"unityweb"
    	]
    },
    	"application/vnd.uoml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"uoml"
    	]
    },
    	"application/vnd.uplanet.alert": {
    	source: "iana"
    },
    	"application/vnd.uplanet.alert-wbxml": {
    	source: "iana"
    },
    	"application/vnd.uplanet.bearer-choice": {
    	source: "iana"
    },
    	"application/vnd.uplanet.bearer-choice-wbxml": {
    	source: "iana"
    },
    	"application/vnd.uplanet.cacheop": {
    	source: "iana"
    },
    	"application/vnd.uplanet.cacheop-wbxml": {
    	source: "iana"
    },
    	"application/vnd.uplanet.channel": {
    	source: "iana"
    },
    	"application/vnd.uplanet.channel-wbxml": {
    	source: "iana"
    },
    	"application/vnd.uplanet.list": {
    	source: "iana"
    },
    	"application/vnd.uplanet.list-wbxml": {
    	source: "iana"
    },
    	"application/vnd.uplanet.listcmd": {
    	source: "iana"
    },
    	"application/vnd.uplanet.listcmd-wbxml": {
    	source: "iana"
    },
    	"application/vnd.uplanet.signal": {
    	source: "iana"
    },
    	"application/vnd.uri-map": {
    	source: "iana"
    },
    	"application/vnd.valve.source.material": {
    	source: "iana"
    },
    	"application/vnd.vcx": {
    	source: "iana",
    	extensions: [
    		"vcx"
    	]
    },
    	"application/vnd.vd-study": {
    	source: "iana"
    },
    	"application/vnd.vectorworks": {
    	source: "iana"
    },
    	"application/vnd.vel+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.verimatrix.vcas": {
    	source: "iana"
    },
    	"application/vnd.veritone.aion+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.veryant.thin": {
    	source: "iana"
    },
    	"application/vnd.ves.encrypted": {
    	source: "iana"
    },
    	"application/vnd.vidsoft.vidconference": {
    	source: "iana"
    },
    	"application/vnd.visio": {
    	source: "iana",
    	extensions: [
    		"vsd",
    		"vst",
    		"vss",
    		"vsw"
    	]
    },
    	"application/vnd.visionary": {
    	source: "iana",
    	extensions: [
    		"vis"
    	]
    },
    	"application/vnd.vividence.scriptfile": {
    	source: "iana"
    },
    	"application/vnd.vsf": {
    	source: "iana",
    	extensions: [
    		"vsf"
    	]
    },
    	"application/vnd.wap.sic": {
    	source: "iana"
    },
    	"application/vnd.wap.slc": {
    	source: "iana"
    },
    	"application/vnd.wap.wbxml": {
    	source: "iana",
    	charset: "UTF-8",
    	extensions: [
    		"wbxml"
    	]
    },
    	"application/vnd.wap.wmlc": {
    	source: "iana",
    	extensions: [
    		"wmlc"
    	]
    },
    	"application/vnd.wap.wmlscriptc": {
    	source: "iana",
    	extensions: [
    		"wmlsc"
    	]
    },
    	"application/vnd.webturbo": {
    	source: "iana",
    	extensions: [
    		"wtb"
    	]
    },
    	"application/vnd.wfa.dpp": {
    	source: "iana"
    },
    	"application/vnd.wfa.p2p": {
    	source: "iana"
    },
    	"application/vnd.wfa.wsc": {
    	source: "iana"
    },
    	"application/vnd.windows.devicepairing": {
    	source: "iana"
    },
    	"application/vnd.wmc": {
    	source: "iana"
    },
    	"application/vnd.wmf.bootstrap": {
    	source: "iana"
    },
    	"application/vnd.wolfram.mathematica": {
    	source: "iana"
    },
    	"application/vnd.wolfram.mathematica.package": {
    	source: "iana"
    },
    	"application/vnd.wolfram.player": {
    	source: "iana",
    	extensions: [
    		"nbp"
    	]
    },
    	"application/vnd.wordperfect": {
    	source: "iana",
    	extensions: [
    		"wpd"
    	]
    },
    	"application/vnd.wqd": {
    	source: "iana",
    	extensions: [
    		"wqd"
    	]
    },
    	"application/vnd.wrq-hp3000-labelled": {
    	source: "iana"
    },
    	"application/vnd.wt.stf": {
    	source: "iana",
    	extensions: [
    		"stf"
    	]
    },
    	"application/vnd.wv.csp+wbxml": {
    	source: "iana"
    },
    	"application/vnd.wv.csp+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.wv.ssp+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.xacml+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.xara": {
    	source: "iana",
    	extensions: [
    		"xar"
    	]
    },
    	"application/vnd.xfdl": {
    	source: "iana",
    	extensions: [
    		"xfdl"
    	]
    },
    	"application/vnd.xfdl.webform": {
    	source: "iana"
    },
    	"application/vnd.xmi+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/vnd.xmpie.cpkg": {
    	source: "iana"
    },
    	"application/vnd.xmpie.dpkg": {
    	source: "iana"
    },
    	"application/vnd.xmpie.plan": {
    	source: "iana"
    },
    	"application/vnd.xmpie.ppkg": {
    	source: "iana"
    },
    	"application/vnd.xmpie.xlim": {
    	source: "iana"
    },
    	"application/vnd.yamaha.hv-dic": {
    	source: "iana",
    	extensions: [
    		"hvd"
    	]
    },
    	"application/vnd.yamaha.hv-script": {
    	source: "iana",
    	extensions: [
    		"hvs"
    	]
    },
    	"application/vnd.yamaha.hv-voice": {
    	source: "iana",
    	extensions: [
    		"hvp"
    	]
    },
    	"application/vnd.yamaha.openscoreformat": {
    	source: "iana",
    	extensions: [
    		"osf"
    	]
    },
    	"application/vnd.yamaha.openscoreformat.osfpvg+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"osfpvg"
    	]
    },
    	"application/vnd.yamaha.remote-setup": {
    	source: "iana"
    },
    	"application/vnd.yamaha.smaf-audio": {
    	source: "iana",
    	extensions: [
    		"saf"
    	]
    },
    	"application/vnd.yamaha.smaf-phrase": {
    	source: "iana",
    	extensions: [
    		"spf"
    	]
    },
    	"application/vnd.yamaha.through-ngn": {
    	source: "iana"
    },
    	"application/vnd.yamaha.tunnel-udpencap": {
    	source: "iana"
    },
    	"application/vnd.yaoweme": {
    	source: "iana"
    },
    	"application/vnd.yellowriver-custom-menu": {
    	source: "iana",
    	extensions: [
    		"cmp"
    	]
    },
    	"application/vnd.youtube.yt": {
    	source: "iana"
    },
    	"application/vnd.zul": {
    	source: "iana",
    	extensions: [
    		"zir",
    		"zirz"
    	]
    },
    	"application/vnd.zzazz.deck+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"zaz"
    	]
    },
    	"application/voicexml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"vxml"
    	]
    },
    	"application/voucher-cms+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/vq-rtcpxr": {
    	source: "iana"
    },
    	"application/wasm": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"wasm"
    	]
    },
    	"application/watcherinfo+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/webpush-options+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/whoispp-query": {
    	source: "iana"
    },
    	"application/whoispp-response": {
    	source: "iana"
    },
    	"application/widget": {
    	source: "iana",
    	extensions: [
    		"wgt"
    	]
    },
    	"application/winhlp": {
    	source: "apache",
    	extensions: [
    		"hlp"
    	]
    },
    	"application/wita": {
    	source: "iana"
    },
    	"application/wordperfect5.1": {
    	source: "iana"
    },
    	"application/wsdl+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"wsdl"
    	]
    },
    	"application/wspolicy+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"wspolicy"
    	]
    },
    	"application/x-7z-compressed": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"7z"
    	]
    },
    	"application/x-abiword": {
    	source: "apache",
    	extensions: [
    		"abw"
    	]
    },
    	"application/x-ace-compressed": {
    	source: "apache",
    	extensions: [
    		"ace"
    	]
    },
    	"application/x-amf": {
    	source: "apache"
    },
    	"application/x-apple-diskimage": {
    	source: "apache",
    	extensions: [
    		"dmg"
    	]
    },
    	"application/x-arj": {
    	compressible: false,
    	extensions: [
    		"arj"
    	]
    },
    	"application/x-authorware-bin": {
    	source: "apache",
    	extensions: [
    		"aab",
    		"x32",
    		"u32",
    		"vox"
    	]
    },
    	"application/x-authorware-map": {
    	source: "apache",
    	extensions: [
    		"aam"
    	]
    },
    	"application/x-authorware-seg": {
    	source: "apache",
    	extensions: [
    		"aas"
    	]
    },
    	"application/x-bcpio": {
    	source: "apache",
    	extensions: [
    		"bcpio"
    	]
    },
    	"application/x-bdoc": {
    	compressible: false,
    	extensions: [
    		"bdoc"
    	]
    },
    	"application/x-bittorrent": {
    	source: "apache",
    	extensions: [
    		"torrent"
    	]
    },
    	"application/x-blorb": {
    	source: "apache",
    	extensions: [
    		"blb",
    		"blorb"
    	]
    },
    	"application/x-bzip": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"bz"
    	]
    },
    	"application/x-bzip2": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"bz2",
    		"boz"
    	]
    },
    	"application/x-cbr": {
    	source: "apache",
    	extensions: [
    		"cbr",
    		"cba",
    		"cbt",
    		"cbz",
    		"cb7"
    	]
    },
    	"application/x-cdlink": {
    	source: "apache",
    	extensions: [
    		"vcd"
    	]
    },
    	"application/x-cfs-compressed": {
    	source: "apache",
    	extensions: [
    		"cfs"
    	]
    },
    	"application/x-chat": {
    	source: "apache",
    	extensions: [
    		"chat"
    	]
    },
    	"application/x-chess-pgn": {
    	source: "apache",
    	extensions: [
    		"pgn"
    	]
    },
    	"application/x-chrome-extension": {
    	extensions: [
    		"crx"
    	]
    },
    	"application/x-cocoa": {
    	source: "nginx",
    	extensions: [
    		"cco"
    	]
    },
    	"application/x-compress": {
    	source: "apache"
    },
    	"application/x-conference": {
    	source: "apache",
    	extensions: [
    		"nsc"
    	]
    },
    	"application/x-cpio": {
    	source: "apache",
    	extensions: [
    		"cpio"
    	]
    },
    	"application/x-csh": {
    	source: "apache",
    	extensions: [
    		"csh"
    	]
    },
    	"application/x-deb": {
    	compressible: false
    },
    	"application/x-debian-package": {
    	source: "apache",
    	extensions: [
    		"deb",
    		"udeb"
    	]
    },
    	"application/x-dgc-compressed": {
    	source: "apache",
    	extensions: [
    		"dgc"
    	]
    },
    	"application/x-director": {
    	source: "apache",
    	extensions: [
    		"dir",
    		"dcr",
    		"dxr",
    		"cst",
    		"cct",
    		"cxt",
    		"w3d",
    		"fgd",
    		"swa"
    	]
    },
    	"application/x-doom": {
    	source: "apache",
    	extensions: [
    		"wad"
    	]
    },
    	"application/x-dtbncx+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"ncx"
    	]
    },
    	"application/x-dtbook+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"dtb"
    	]
    },
    	"application/x-dtbresource+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"res"
    	]
    },
    	"application/x-dvi": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"dvi"
    	]
    },
    	"application/x-envoy": {
    	source: "apache",
    	extensions: [
    		"evy"
    	]
    },
    	"application/x-eva": {
    	source: "apache",
    	extensions: [
    		"eva"
    	]
    },
    	"application/x-font-bdf": {
    	source: "apache",
    	extensions: [
    		"bdf"
    	]
    },
    	"application/x-font-dos": {
    	source: "apache"
    },
    	"application/x-font-framemaker": {
    	source: "apache"
    },
    	"application/x-font-ghostscript": {
    	source: "apache",
    	extensions: [
    		"gsf"
    	]
    },
    	"application/x-font-libgrx": {
    	source: "apache"
    },
    	"application/x-font-linux-psf": {
    	source: "apache",
    	extensions: [
    		"psf"
    	]
    },
    	"application/x-font-pcf": {
    	source: "apache",
    	extensions: [
    		"pcf"
    	]
    },
    	"application/x-font-snf": {
    	source: "apache",
    	extensions: [
    		"snf"
    	]
    },
    	"application/x-font-speedo": {
    	source: "apache"
    },
    	"application/x-font-sunos-news": {
    	source: "apache"
    },
    	"application/x-font-type1": {
    	source: "apache",
    	extensions: [
    		"pfa",
    		"pfb",
    		"pfm",
    		"afm"
    	]
    },
    	"application/x-font-vfont": {
    	source: "apache"
    },
    	"application/x-freearc": {
    	source: "apache",
    	extensions: [
    		"arc"
    	]
    },
    	"application/x-futuresplash": {
    	source: "apache",
    	extensions: [
    		"spl"
    	]
    },
    	"application/x-gca-compressed": {
    	source: "apache",
    	extensions: [
    		"gca"
    	]
    },
    	"application/x-glulx": {
    	source: "apache",
    	extensions: [
    		"ulx"
    	]
    },
    	"application/x-gnumeric": {
    	source: "apache",
    	extensions: [
    		"gnumeric"
    	]
    },
    	"application/x-gramps-xml": {
    	source: "apache",
    	extensions: [
    		"gramps"
    	]
    },
    	"application/x-gtar": {
    	source: "apache",
    	extensions: [
    		"gtar"
    	]
    },
    	"application/x-gzip": {
    	source: "apache"
    },
    	"application/x-hdf": {
    	source: "apache",
    	extensions: [
    		"hdf"
    	]
    },
    	"application/x-httpd-php": {
    	compressible: true,
    	extensions: [
    		"php"
    	]
    },
    	"application/x-install-instructions": {
    	source: "apache",
    	extensions: [
    		"install"
    	]
    },
    	"application/x-iso9660-image": {
    	source: "apache",
    	extensions: [
    		"iso"
    	]
    },
    	"application/x-iwork-keynote-sffkey": {
    	extensions: [
    		"key"
    	]
    },
    	"application/x-iwork-numbers-sffnumbers": {
    	extensions: [
    		"numbers"
    	]
    },
    	"application/x-iwork-pages-sffpages": {
    	extensions: [
    		"pages"
    	]
    },
    	"application/x-java-archive-diff": {
    	source: "nginx",
    	extensions: [
    		"jardiff"
    	]
    },
    	"application/x-java-jnlp-file": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"jnlp"
    	]
    },
    	"application/x-javascript": {
    	compressible: true
    },
    	"application/x-keepass2": {
    	extensions: [
    		"kdbx"
    	]
    },
    	"application/x-latex": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"latex"
    	]
    },
    	"application/x-lua-bytecode": {
    	extensions: [
    		"luac"
    	]
    },
    	"application/x-lzh-compressed": {
    	source: "apache",
    	extensions: [
    		"lzh",
    		"lha"
    	]
    },
    	"application/x-makeself": {
    	source: "nginx",
    	extensions: [
    		"run"
    	]
    },
    	"application/x-mie": {
    	source: "apache",
    	extensions: [
    		"mie"
    	]
    },
    	"application/x-mobipocket-ebook": {
    	source: "apache",
    	extensions: [
    		"prc",
    		"mobi"
    	]
    },
    	"application/x-mpegurl": {
    	compressible: false
    },
    	"application/x-ms-application": {
    	source: "apache",
    	extensions: [
    		"application"
    	]
    },
    	"application/x-ms-shortcut": {
    	source: "apache",
    	extensions: [
    		"lnk"
    	]
    },
    	"application/x-ms-wmd": {
    	source: "apache",
    	extensions: [
    		"wmd"
    	]
    },
    	"application/x-ms-wmz": {
    	source: "apache",
    	extensions: [
    		"wmz"
    	]
    },
    	"application/x-ms-xbap": {
    	source: "apache",
    	extensions: [
    		"xbap"
    	]
    },
    	"application/x-msaccess": {
    	source: "apache",
    	extensions: [
    		"mdb"
    	]
    },
    	"application/x-msbinder": {
    	source: "apache",
    	extensions: [
    		"obd"
    	]
    },
    	"application/x-mscardfile": {
    	source: "apache",
    	extensions: [
    		"crd"
    	]
    },
    	"application/x-msclip": {
    	source: "apache",
    	extensions: [
    		"clp"
    	]
    },
    	"application/x-msdos-program": {
    	extensions: [
    		"exe"
    	]
    },
    	"application/x-msdownload": {
    	source: "apache",
    	extensions: [
    		"exe",
    		"dll",
    		"com",
    		"bat",
    		"msi"
    	]
    },
    	"application/x-msmediaview": {
    	source: "apache",
    	extensions: [
    		"mvb",
    		"m13",
    		"m14"
    	]
    },
    	"application/x-msmetafile": {
    	source: "apache",
    	extensions: [
    		"wmf",
    		"wmz",
    		"emf",
    		"emz"
    	]
    },
    	"application/x-msmoney": {
    	source: "apache",
    	extensions: [
    		"mny"
    	]
    },
    	"application/x-mspublisher": {
    	source: "apache",
    	extensions: [
    		"pub"
    	]
    },
    	"application/x-msschedule": {
    	source: "apache",
    	extensions: [
    		"scd"
    	]
    },
    	"application/x-msterminal": {
    	source: "apache",
    	extensions: [
    		"trm"
    	]
    },
    	"application/x-mswrite": {
    	source: "apache",
    	extensions: [
    		"wri"
    	]
    },
    	"application/x-netcdf": {
    	source: "apache",
    	extensions: [
    		"nc",
    		"cdf"
    	]
    },
    	"application/x-ns-proxy-autoconfig": {
    	compressible: true,
    	extensions: [
    		"pac"
    	]
    },
    	"application/x-nzb": {
    	source: "apache",
    	extensions: [
    		"nzb"
    	]
    },
    	"application/x-perl": {
    	source: "nginx",
    	extensions: [
    		"pl",
    		"pm"
    	]
    },
    	"application/x-pilot": {
    	source: "nginx",
    	extensions: [
    		"prc",
    		"pdb"
    	]
    },
    	"application/x-pkcs12": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"p12",
    		"pfx"
    	]
    },
    	"application/x-pkcs7-certificates": {
    	source: "apache",
    	extensions: [
    		"p7b",
    		"spc"
    	]
    },
    	"application/x-pkcs7-certreqresp": {
    	source: "apache",
    	extensions: [
    		"p7r"
    	]
    },
    	"application/x-pki-message": {
    	source: "iana"
    },
    	"application/x-rar-compressed": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"rar"
    	]
    },
    	"application/x-redhat-package-manager": {
    	source: "nginx",
    	extensions: [
    		"rpm"
    	]
    },
    	"application/x-research-info-systems": {
    	source: "apache",
    	extensions: [
    		"ris"
    	]
    },
    	"application/x-sea": {
    	source: "nginx",
    	extensions: [
    		"sea"
    	]
    },
    	"application/x-sh": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"sh"
    	]
    },
    	"application/x-shar": {
    	source: "apache",
    	extensions: [
    		"shar"
    	]
    },
    	"application/x-shockwave-flash": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"swf"
    	]
    },
    	"application/x-silverlight-app": {
    	source: "apache",
    	extensions: [
    		"xap"
    	]
    },
    	"application/x-sql": {
    	source: "apache",
    	extensions: [
    		"sql"
    	]
    },
    	"application/x-stuffit": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"sit"
    	]
    },
    	"application/x-stuffitx": {
    	source: "apache",
    	extensions: [
    		"sitx"
    	]
    },
    	"application/x-subrip": {
    	source: "apache",
    	extensions: [
    		"srt"
    	]
    },
    	"application/x-sv4cpio": {
    	source: "apache",
    	extensions: [
    		"sv4cpio"
    	]
    },
    	"application/x-sv4crc": {
    	source: "apache",
    	extensions: [
    		"sv4crc"
    	]
    },
    	"application/x-t3vm-image": {
    	source: "apache",
    	extensions: [
    		"t3"
    	]
    },
    	"application/x-tads": {
    	source: "apache",
    	extensions: [
    		"gam"
    	]
    },
    	"application/x-tar": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"tar"
    	]
    },
    	"application/x-tcl": {
    	source: "apache",
    	extensions: [
    		"tcl",
    		"tk"
    	]
    },
    	"application/x-tex": {
    	source: "apache",
    	extensions: [
    		"tex"
    	]
    },
    	"application/x-tex-tfm": {
    	source: "apache",
    	extensions: [
    		"tfm"
    	]
    },
    	"application/x-texinfo": {
    	source: "apache",
    	extensions: [
    		"texinfo",
    		"texi"
    	]
    },
    	"application/x-tgif": {
    	source: "apache",
    	extensions: [
    		"obj"
    	]
    },
    	"application/x-ustar": {
    	source: "apache",
    	extensions: [
    		"ustar"
    	]
    },
    	"application/x-virtualbox-hdd": {
    	compressible: true,
    	extensions: [
    		"hdd"
    	]
    },
    	"application/x-virtualbox-ova": {
    	compressible: true,
    	extensions: [
    		"ova"
    	]
    },
    	"application/x-virtualbox-ovf": {
    	compressible: true,
    	extensions: [
    		"ovf"
    	]
    },
    	"application/x-virtualbox-vbox": {
    	compressible: true,
    	extensions: [
    		"vbox"
    	]
    },
    	"application/x-virtualbox-vbox-extpack": {
    	compressible: false,
    	extensions: [
    		"vbox-extpack"
    	]
    },
    	"application/x-virtualbox-vdi": {
    	compressible: true,
    	extensions: [
    		"vdi"
    	]
    },
    	"application/x-virtualbox-vhd": {
    	compressible: true,
    	extensions: [
    		"vhd"
    	]
    },
    	"application/x-virtualbox-vmdk": {
    	compressible: true,
    	extensions: [
    		"vmdk"
    	]
    },
    	"application/x-wais-source": {
    	source: "apache",
    	extensions: [
    		"src"
    	]
    },
    	"application/x-web-app-manifest+json": {
    	compressible: true,
    	extensions: [
    		"webapp"
    	]
    },
    	"application/x-www-form-urlencoded": {
    	source: "iana",
    	compressible: true
    },
    	"application/x-x509-ca-cert": {
    	source: "iana",
    	extensions: [
    		"der",
    		"crt",
    		"pem"
    	]
    },
    	"application/x-x509-ca-ra-cert": {
    	source: "iana"
    },
    	"application/x-x509-next-ca-cert": {
    	source: "iana"
    },
    	"application/x-xfig": {
    	source: "apache",
    	extensions: [
    		"fig"
    	]
    },
    	"application/x-xliff+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"xlf"
    	]
    },
    	"application/x-xpinstall": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"xpi"
    	]
    },
    	"application/x-xz": {
    	source: "apache",
    	extensions: [
    		"xz"
    	]
    },
    	"application/x-zmachine": {
    	source: "apache",
    	extensions: [
    		"z1",
    		"z2",
    		"z3",
    		"z4",
    		"z5",
    		"z6",
    		"z7",
    		"z8"
    	]
    },
    	"application/x400-bp": {
    	source: "iana"
    },
    	"application/xacml+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/xaml+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"xaml"
    	]
    },
    	"application/xcap-att+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xav"
    	]
    },
    	"application/xcap-caps+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xca"
    	]
    },
    	"application/xcap-diff+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xdf"
    	]
    },
    	"application/xcap-el+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xel"
    	]
    },
    	"application/xcap-error+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/xcap-ns+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xns"
    	]
    },
    	"application/xcon-conference-info+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/xcon-conference-info-diff+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/xenc+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xenc"
    	]
    },
    	"application/xhtml+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xhtml",
    		"xht"
    	]
    },
    	"application/xhtml-voice+xml": {
    	source: "apache",
    	compressible: true
    },
    	"application/xliff+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xlf"
    	]
    },
    	"application/xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xml",
    		"xsl",
    		"xsd",
    		"rng"
    	]
    },
    	"application/xml-dtd": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"dtd"
    	]
    },
    	"application/xml-external-parsed-entity": {
    	source: "iana"
    },
    	"application/xml-patch+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/xmpp+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/xop+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xop"
    	]
    },
    	"application/xproc+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"xpl"
    	]
    },
    	"application/xslt+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xsl",
    		"xslt"
    	]
    },
    	"application/xspf+xml": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"xspf"
    	]
    },
    	"application/xv+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"mxml",
    		"xhvml",
    		"xvml",
    		"xvm"
    	]
    },
    	"application/yang": {
    	source: "iana",
    	extensions: [
    		"yang"
    	]
    },
    	"application/yang-data+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/yang-data+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/yang-patch+json": {
    	source: "iana",
    	compressible: true
    },
    	"application/yang-patch+xml": {
    	source: "iana",
    	compressible: true
    },
    	"application/yin+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"yin"
    	]
    },
    	"application/zip": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"zip"
    	]
    },
    	"application/zlib": {
    	source: "iana"
    },
    	"application/zstd": {
    	source: "iana"
    },
    	"audio/1d-interleaved-parityfec": {
    	source: "iana"
    },
    	"audio/32kadpcm": {
    	source: "iana"
    },
    	"audio/3gpp": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"3gpp"
    	]
    },
    	"audio/3gpp2": {
    	source: "iana"
    },
    	"audio/aac": {
    	source: "iana"
    },
    	"audio/ac3": {
    	source: "iana"
    },
    	"audio/adpcm": {
    	source: "apache",
    	extensions: [
    		"adp"
    	]
    },
    	"audio/amr": {
    	source: "iana",
    	extensions: [
    		"amr"
    	]
    },
    	"audio/amr-wb": {
    	source: "iana"
    },
    	"audio/amr-wb+": {
    	source: "iana"
    },
    	"audio/aptx": {
    	source: "iana"
    },
    	"audio/asc": {
    	source: "iana"
    },
    	"audio/atrac-advanced-lossless": {
    	source: "iana"
    },
    	"audio/atrac-x": {
    	source: "iana"
    },
    	"audio/atrac3": {
    	source: "iana"
    },
    	"audio/basic": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"au",
    		"snd"
    	]
    },
    	"audio/bv16": {
    	source: "iana"
    },
    	"audio/bv32": {
    	source: "iana"
    },
    	"audio/clearmode": {
    	source: "iana"
    },
    	"audio/cn": {
    	source: "iana"
    },
    	"audio/dat12": {
    	source: "iana"
    },
    	"audio/dls": {
    	source: "iana"
    },
    	"audio/dsr-es201108": {
    	source: "iana"
    },
    	"audio/dsr-es202050": {
    	source: "iana"
    },
    	"audio/dsr-es202211": {
    	source: "iana"
    },
    	"audio/dsr-es202212": {
    	source: "iana"
    },
    	"audio/dv": {
    	source: "iana"
    },
    	"audio/dvi4": {
    	source: "iana"
    },
    	"audio/eac3": {
    	source: "iana"
    },
    	"audio/encaprtp": {
    	source: "iana"
    },
    	"audio/evrc": {
    	source: "iana"
    },
    	"audio/evrc-qcp": {
    	source: "iana"
    },
    	"audio/evrc0": {
    	source: "iana"
    },
    	"audio/evrc1": {
    	source: "iana"
    },
    	"audio/evrcb": {
    	source: "iana"
    },
    	"audio/evrcb0": {
    	source: "iana"
    },
    	"audio/evrcb1": {
    	source: "iana"
    },
    	"audio/evrcnw": {
    	source: "iana"
    },
    	"audio/evrcnw0": {
    	source: "iana"
    },
    	"audio/evrcnw1": {
    	source: "iana"
    },
    	"audio/evrcwb": {
    	source: "iana"
    },
    	"audio/evrcwb0": {
    	source: "iana"
    },
    	"audio/evrcwb1": {
    	source: "iana"
    },
    	"audio/evs": {
    	source: "iana"
    },
    	"audio/flexfec": {
    	source: "iana"
    },
    	"audio/fwdred": {
    	source: "iana"
    },
    	"audio/g711-0": {
    	source: "iana"
    },
    	"audio/g719": {
    	source: "iana"
    },
    	"audio/g722": {
    	source: "iana"
    },
    	"audio/g7221": {
    	source: "iana"
    },
    	"audio/g723": {
    	source: "iana"
    },
    	"audio/g726-16": {
    	source: "iana"
    },
    	"audio/g726-24": {
    	source: "iana"
    },
    	"audio/g726-32": {
    	source: "iana"
    },
    	"audio/g726-40": {
    	source: "iana"
    },
    	"audio/g728": {
    	source: "iana"
    },
    	"audio/g729": {
    	source: "iana"
    },
    	"audio/g7291": {
    	source: "iana"
    },
    	"audio/g729d": {
    	source: "iana"
    },
    	"audio/g729e": {
    	source: "iana"
    },
    	"audio/gsm": {
    	source: "iana"
    },
    	"audio/gsm-efr": {
    	source: "iana"
    },
    	"audio/gsm-hr-08": {
    	source: "iana"
    },
    	"audio/ilbc": {
    	source: "iana"
    },
    	"audio/ip-mr_v2.5": {
    	source: "iana"
    },
    	"audio/isac": {
    	source: "apache"
    },
    	"audio/l16": {
    	source: "iana"
    },
    	"audio/l20": {
    	source: "iana"
    },
    	"audio/l24": {
    	source: "iana",
    	compressible: false
    },
    	"audio/l8": {
    	source: "iana"
    },
    	"audio/lpc": {
    	source: "iana"
    },
    	"audio/melp": {
    	source: "iana"
    },
    	"audio/melp1200": {
    	source: "iana"
    },
    	"audio/melp2400": {
    	source: "iana"
    },
    	"audio/melp600": {
    	source: "iana"
    },
    	"audio/mhas": {
    	source: "iana"
    },
    	"audio/midi": {
    	source: "apache",
    	extensions: [
    		"mid",
    		"midi",
    		"kar",
    		"rmi"
    	]
    },
    	"audio/mobile-xmf": {
    	source: "iana",
    	extensions: [
    		"mxmf"
    	]
    },
    	"audio/mp3": {
    	compressible: false,
    	extensions: [
    		"mp3"
    	]
    },
    	"audio/mp4": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"m4a",
    		"mp4a"
    	]
    },
    	"audio/mp4a-latm": {
    	source: "iana"
    },
    	"audio/mpa": {
    	source: "iana"
    },
    	"audio/mpa-robust": {
    	source: "iana"
    },
    	"audio/mpeg": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"mpga",
    		"mp2",
    		"mp2a",
    		"mp3",
    		"m2a",
    		"m3a"
    	]
    },
    	"audio/mpeg4-generic": {
    	source: "iana"
    },
    	"audio/musepack": {
    	source: "apache"
    },
    	"audio/ogg": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"oga",
    		"ogg",
    		"spx",
    		"opus"
    	]
    },
    	"audio/opus": {
    	source: "iana"
    },
    	"audio/parityfec": {
    	source: "iana"
    },
    	"audio/pcma": {
    	source: "iana"
    },
    	"audio/pcma-wb": {
    	source: "iana"
    },
    	"audio/pcmu": {
    	source: "iana"
    },
    	"audio/pcmu-wb": {
    	source: "iana"
    },
    	"audio/prs.sid": {
    	source: "iana"
    },
    	"audio/qcelp": {
    	source: "iana"
    },
    	"audio/raptorfec": {
    	source: "iana"
    },
    	"audio/red": {
    	source: "iana"
    },
    	"audio/rtp-enc-aescm128": {
    	source: "iana"
    },
    	"audio/rtp-midi": {
    	source: "iana"
    },
    	"audio/rtploopback": {
    	source: "iana"
    },
    	"audio/rtx": {
    	source: "iana"
    },
    	"audio/s3m": {
    	source: "apache",
    	extensions: [
    		"s3m"
    	]
    },
    	"audio/scip": {
    	source: "iana"
    },
    	"audio/silk": {
    	source: "apache",
    	extensions: [
    		"sil"
    	]
    },
    	"audio/smv": {
    	source: "iana"
    },
    	"audio/smv-qcp": {
    	source: "iana"
    },
    	"audio/smv0": {
    	source: "iana"
    },
    	"audio/sofa": {
    	source: "iana"
    },
    	"audio/sp-midi": {
    	source: "iana"
    },
    	"audio/speex": {
    	source: "iana"
    },
    	"audio/t140c": {
    	source: "iana"
    },
    	"audio/t38": {
    	source: "iana"
    },
    	"audio/telephone-event": {
    	source: "iana"
    },
    	"audio/tetra_acelp": {
    	source: "iana"
    },
    	"audio/tetra_acelp_bb": {
    	source: "iana"
    },
    	"audio/tone": {
    	source: "iana"
    },
    	"audio/tsvcis": {
    	source: "iana"
    },
    	"audio/uemclip": {
    	source: "iana"
    },
    	"audio/ulpfec": {
    	source: "iana"
    },
    	"audio/usac": {
    	source: "iana"
    },
    	"audio/vdvi": {
    	source: "iana"
    },
    	"audio/vmr-wb": {
    	source: "iana"
    },
    	"audio/vnd.3gpp.iufp": {
    	source: "iana"
    },
    	"audio/vnd.4sb": {
    	source: "iana"
    },
    	"audio/vnd.audiokoz": {
    	source: "iana"
    },
    	"audio/vnd.celp": {
    	source: "iana"
    },
    	"audio/vnd.cisco.nse": {
    	source: "iana"
    },
    	"audio/vnd.cmles.radio-events": {
    	source: "iana"
    },
    	"audio/vnd.cns.anp1": {
    	source: "iana"
    },
    	"audio/vnd.cns.inf1": {
    	source: "iana"
    },
    	"audio/vnd.dece.audio": {
    	source: "iana",
    	extensions: [
    		"uva",
    		"uvva"
    	]
    },
    	"audio/vnd.digital-winds": {
    	source: "iana",
    	extensions: [
    		"eol"
    	]
    },
    	"audio/vnd.dlna.adts": {
    	source: "iana"
    },
    	"audio/vnd.dolby.heaac.1": {
    	source: "iana"
    },
    	"audio/vnd.dolby.heaac.2": {
    	source: "iana"
    },
    	"audio/vnd.dolby.mlp": {
    	source: "iana"
    },
    	"audio/vnd.dolby.mps": {
    	source: "iana"
    },
    	"audio/vnd.dolby.pl2": {
    	source: "iana"
    },
    	"audio/vnd.dolby.pl2x": {
    	source: "iana"
    },
    	"audio/vnd.dolby.pl2z": {
    	source: "iana"
    },
    	"audio/vnd.dolby.pulse.1": {
    	source: "iana"
    },
    	"audio/vnd.dra": {
    	source: "iana",
    	extensions: [
    		"dra"
    	]
    },
    	"audio/vnd.dts": {
    	source: "iana",
    	extensions: [
    		"dts"
    	]
    },
    	"audio/vnd.dts.hd": {
    	source: "iana",
    	extensions: [
    		"dtshd"
    	]
    },
    	"audio/vnd.dts.uhd": {
    	source: "iana"
    },
    	"audio/vnd.dvb.file": {
    	source: "iana"
    },
    	"audio/vnd.everad.plj": {
    	source: "iana"
    },
    	"audio/vnd.hns.audio": {
    	source: "iana"
    },
    	"audio/vnd.lucent.voice": {
    	source: "iana",
    	extensions: [
    		"lvp"
    	]
    },
    	"audio/vnd.ms-playready.media.pya": {
    	source: "iana",
    	extensions: [
    		"pya"
    	]
    },
    	"audio/vnd.nokia.mobile-xmf": {
    	source: "iana"
    },
    	"audio/vnd.nortel.vbk": {
    	source: "iana"
    },
    	"audio/vnd.nuera.ecelp4800": {
    	source: "iana",
    	extensions: [
    		"ecelp4800"
    	]
    },
    	"audio/vnd.nuera.ecelp7470": {
    	source: "iana",
    	extensions: [
    		"ecelp7470"
    	]
    },
    	"audio/vnd.nuera.ecelp9600": {
    	source: "iana",
    	extensions: [
    		"ecelp9600"
    	]
    },
    	"audio/vnd.octel.sbc": {
    	source: "iana"
    },
    	"audio/vnd.presonus.multitrack": {
    	source: "iana"
    },
    	"audio/vnd.qcelp": {
    	source: "iana"
    },
    	"audio/vnd.rhetorex.32kadpcm": {
    	source: "iana"
    },
    	"audio/vnd.rip": {
    	source: "iana",
    	extensions: [
    		"rip"
    	]
    },
    	"audio/vnd.rn-realaudio": {
    	compressible: false
    },
    	"audio/vnd.sealedmedia.softseal.mpeg": {
    	source: "iana"
    },
    	"audio/vnd.vmx.cvsd": {
    	source: "iana"
    },
    	"audio/vnd.wave": {
    	compressible: false
    },
    	"audio/vorbis": {
    	source: "iana",
    	compressible: false
    },
    	"audio/vorbis-config": {
    	source: "iana"
    },
    	"audio/wav": {
    	compressible: false,
    	extensions: [
    		"wav"
    	]
    },
    	"audio/wave": {
    	compressible: false,
    	extensions: [
    		"wav"
    	]
    },
    	"audio/webm": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"weba"
    	]
    },
    	"audio/x-aac": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"aac"
    	]
    },
    	"audio/x-aiff": {
    	source: "apache",
    	extensions: [
    		"aif",
    		"aiff",
    		"aifc"
    	]
    },
    	"audio/x-caf": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"caf"
    	]
    },
    	"audio/x-flac": {
    	source: "apache",
    	extensions: [
    		"flac"
    	]
    },
    	"audio/x-m4a": {
    	source: "nginx",
    	extensions: [
    		"m4a"
    	]
    },
    	"audio/x-matroska": {
    	source: "apache",
    	extensions: [
    		"mka"
    	]
    },
    	"audio/x-mpegurl": {
    	source: "apache",
    	extensions: [
    		"m3u"
    	]
    },
    	"audio/x-ms-wax": {
    	source: "apache",
    	extensions: [
    		"wax"
    	]
    },
    	"audio/x-ms-wma": {
    	source: "apache",
    	extensions: [
    		"wma"
    	]
    },
    	"audio/x-pn-realaudio": {
    	source: "apache",
    	extensions: [
    		"ram",
    		"ra"
    	]
    },
    	"audio/x-pn-realaudio-plugin": {
    	source: "apache",
    	extensions: [
    		"rmp"
    	]
    },
    	"audio/x-realaudio": {
    	source: "nginx",
    	extensions: [
    		"ra"
    	]
    },
    	"audio/x-tta": {
    	source: "apache"
    },
    	"audio/x-wav": {
    	source: "apache",
    	extensions: [
    		"wav"
    	]
    },
    	"audio/xm": {
    	source: "apache",
    	extensions: [
    		"xm"
    	]
    },
    	"chemical/x-cdx": {
    	source: "apache",
    	extensions: [
    		"cdx"
    	]
    },
    	"chemical/x-cif": {
    	source: "apache",
    	extensions: [
    		"cif"
    	]
    },
    	"chemical/x-cmdf": {
    	source: "apache",
    	extensions: [
    		"cmdf"
    	]
    },
    	"chemical/x-cml": {
    	source: "apache",
    	extensions: [
    		"cml"
    	]
    },
    	"chemical/x-csml": {
    	source: "apache",
    	extensions: [
    		"csml"
    	]
    },
    	"chemical/x-pdb": {
    	source: "apache"
    },
    	"chemical/x-xyz": {
    	source: "apache",
    	extensions: [
    		"xyz"
    	]
    },
    	"font/collection": {
    	source: "iana",
    	extensions: [
    		"ttc"
    	]
    },
    	"font/otf": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"otf"
    	]
    },
    	"font/sfnt": {
    	source: "iana"
    },
    	"font/ttf": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"ttf"
    	]
    },
    	"font/woff": {
    	source: "iana",
    	extensions: [
    		"woff"
    	]
    },
    	"font/woff2": {
    	source: "iana",
    	extensions: [
    		"woff2"
    	]
    },
    	"image/aces": {
    	source: "iana",
    	extensions: [
    		"exr"
    	]
    },
    	"image/apng": {
    	compressible: false,
    	extensions: [
    		"apng"
    	]
    },
    	"image/avci": {
    	source: "iana"
    },
    	"image/avcs": {
    	source: "iana"
    },
    	"image/avif": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"avif"
    	]
    },
    	"image/bmp": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"bmp"
    	]
    },
    	"image/cgm": {
    	source: "iana",
    	extensions: [
    		"cgm"
    	]
    },
    	"image/dicom-rle": {
    	source: "iana",
    	extensions: [
    		"drle"
    	]
    },
    	"image/emf": {
    	source: "iana",
    	extensions: [
    		"emf"
    	]
    },
    	"image/fits": {
    	source: "iana",
    	extensions: [
    		"fits"
    	]
    },
    	"image/g3fax": {
    	source: "iana",
    	extensions: [
    		"g3"
    	]
    },
    	"image/gif": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"gif"
    	]
    },
    	"image/heic": {
    	source: "iana",
    	extensions: [
    		"heic"
    	]
    },
    	"image/heic-sequence": {
    	source: "iana",
    	extensions: [
    		"heics"
    	]
    },
    	"image/heif": {
    	source: "iana",
    	extensions: [
    		"heif"
    	]
    },
    	"image/heif-sequence": {
    	source: "iana",
    	extensions: [
    		"heifs"
    	]
    },
    	"image/hej2k": {
    	source: "iana",
    	extensions: [
    		"hej2"
    	]
    },
    	"image/hsj2": {
    	source: "iana",
    	extensions: [
    		"hsj2"
    	]
    },
    	"image/ief": {
    	source: "iana",
    	extensions: [
    		"ief"
    	]
    },
    	"image/jls": {
    	source: "iana",
    	extensions: [
    		"jls"
    	]
    },
    	"image/jp2": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"jp2",
    		"jpg2"
    	]
    },
    	"image/jpeg": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"jpeg",
    		"jpg",
    		"jpe"
    	]
    },
    	"image/jph": {
    	source: "iana",
    	extensions: [
    		"jph"
    	]
    },
    	"image/jphc": {
    	source: "iana",
    	extensions: [
    		"jhc"
    	]
    },
    	"image/jpm": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"jpm"
    	]
    },
    	"image/jpx": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"jpx",
    		"jpf"
    	]
    },
    	"image/jxr": {
    	source: "iana",
    	extensions: [
    		"jxr"
    	]
    },
    	"image/jxra": {
    	source: "iana",
    	extensions: [
    		"jxra"
    	]
    },
    	"image/jxrs": {
    	source: "iana",
    	extensions: [
    		"jxrs"
    	]
    },
    	"image/jxs": {
    	source: "iana",
    	extensions: [
    		"jxs"
    	]
    },
    	"image/jxsc": {
    	source: "iana",
    	extensions: [
    		"jxsc"
    	]
    },
    	"image/jxsi": {
    	source: "iana",
    	extensions: [
    		"jxsi"
    	]
    },
    	"image/jxss": {
    	source: "iana",
    	extensions: [
    		"jxss"
    	]
    },
    	"image/ktx": {
    	source: "iana",
    	extensions: [
    		"ktx"
    	]
    },
    	"image/ktx2": {
    	source: "iana",
    	extensions: [
    		"ktx2"
    	]
    },
    	"image/naplps": {
    	source: "iana"
    },
    	"image/pjpeg": {
    	compressible: false
    },
    	"image/png": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"png"
    	]
    },
    	"image/prs.btif": {
    	source: "iana",
    	extensions: [
    		"btif"
    	]
    },
    	"image/prs.pti": {
    	source: "iana",
    	extensions: [
    		"pti"
    	]
    },
    	"image/pwg-raster": {
    	source: "iana"
    },
    	"image/sgi": {
    	source: "apache",
    	extensions: [
    		"sgi"
    	]
    },
    	"image/svg+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"svg",
    		"svgz"
    	]
    },
    	"image/t38": {
    	source: "iana",
    	extensions: [
    		"t38"
    	]
    },
    	"image/tiff": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"tif",
    		"tiff"
    	]
    },
    	"image/tiff-fx": {
    	source: "iana",
    	extensions: [
    		"tfx"
    	]
    },
    	"image/vnd.adobe.photoshop": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"psd"
    	]
    },
    	"image/vnd.airzip.accelerator.azv": {
    	source: "iana",
    	extensions: [
    		"azv"
    	]
    },
    	"image/vnd.cns.inf2": {
    	source: "iana"
    },
    	"image/vnd.dece.graphic": {
    	source: "iana",
    	extensions: [
    		"uvi",
    		"uvvi",
    		"uvg",
    		"uvvg"
    	]
    },
    	"image/vnd.djvu": {
    	source: "iana",
    	extensions: [
    		"djvu",
    		"djv"
    	]
    },
    	"image/vnd.dvb.subtitle": {
    	source: "iana",
    	extensions: [
    		"sub"
    	]
    },
    	"image/vnd.dwg": {
    	source: "iana",
    	extensions: [
    		"dwg"
    	]
    },
    	"image/vnd.dxf": {
    	source: "iana",
    	extensions: [
    		"dxf"
    	]
    },
    	"image/vnd.fastbidsheet": {
    	source: "iana",
    	extensions: [
    		"fbs"
    	]
    },
    	"image/vnd.fpx": {
    	source: "iana",
    	extensions: [
    		"fpx"
    	]
    },
    	"image/vnd.fst": {
    	source: "iana",
    	extensions: [
    		"fst"
    	]
    },
    	"image/vnd.fujixerox.edmics-mmr": {
    	source: "iana",
    	extensions: [
    		"mmr"
    	]
    },
    	"image/vnd.fujixerox.edmics-rlc": {
    	source: "iana",
    	extensions: [
    		"rlc"
    	]
    },
    	"image/vnd.globalgraphics.pgb": {
    	source: "iana"
    },
    	"image/vnd.microsoft.icon": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"ico"
    	]
    },
    	"image/vnd.mix": {
    	source: "iana"
    },
    	"image/vnd.mozilla.apng": {
    	source: "iana"
    },
    	"image/vnd.ms-dds": {
    	compressible: true,
    	extensions: [
    		"dds"
    	]
    },
    	"image/vnd.ms-modi": {
    	source: "iana",
    	extensions: [
    		"mdi"
    	]
    },
    	"image/vnd.ms-photo": {
    	source: "apache",
    	extensions: [
    		"wdp"
    	]
    },
    	"image/vnd.net-fpx": {
    	source: "iana",
    	extensions: [
    		"npx"
    	]
    },
    	"image/vnd.pco.b16": {
    	source: "iana",
    	extensions: [
    		"b16"
    	]
    },
    	"image/vnd.radiance": {
    	source: "iana"
    },
    	"image/vnd.sealed.png": {
    	source: "iana"
    },
    	"image/vnd.sealedmedia.softseal.gif": {
    	source: "iana"
    },
    	"image/vnd.sealedmedia.softseal.jpg": {
    	source: "iana"
    },
    	"image/vnd.svf": {
    	source: "iana"
    },
    	"image/vnd.tencent.tap": {
    	source: "iana",
    	extensions: [
    		"tap"
    	]
    },
    	"image/vnd.valve.source.texture": {
    	source: "iana",
    	extensions: [
    		"vtf"
    	]
    },
    	"image/vnd.wap.wbmp": {
    	source: "iana",
    	extensions: [
    		"wbmp"
    	]
    },
    	"image/vnd.xiff": {
    	source: "iana",
    	extensions: [
    		"xif"
    	]
    },
    	"image/vnd.zbrush.pcx": {
    	source: "iana",
    	extensions: [
    		"pcx"
    	]
    },
    	"image/webp": {
    	source: "apache",
    	extensions: [
    		"webp"
    	]
    },
    	"image/wmf": {
    	source: "iana",
    	extensions: [
    		"wmf"
    	]
    },
    	"image/x-3ds": {
    	source: "apache",
    	extensions: [
    		"3ds"
    	]
    },
    	"image/x-cmu-raster": {
    	source: "apache",
    	extensions: [
    		"ras"
    	]
    },
    	"image/x-cmx": {
    	source: "apache",
    	extensions: [
    		"cmx"
    	]
    },
    	"image/x-freehand": {
    	source: "apache",
    	extensions: [
    		"fh",
    		"fhc",
    		"fh4",
    		"fh5",
    		"fh7"
    	]
    },
    	"image/x-icon": {
    	source: "apache",
    	compressible: true,
    	extensions: [
    		"ico"
    	]
    },
    	"image/x-jng": {
    	source: "nginx",
    	extensions: [
    		"jng"
    	]
    },
    	"image/x-mrsid-image": {
    	source: "apache",
    	extensions: [
    		"sid"
    	]
    },
    	"image/x-ms-bmp": {
    	source: "nginx",
    	compressible: true,
    	extensions: [
    		"bmp"
    	]
    },
    	"image/x-pcx": {
    	source: "apache",
    	extensions: [
    		"pcx"
    	]
    },
    	"image/x-pict": {
    	source: "apache",
    	extensions: [
    		"pic",
    		"pct"
    	]
    },
    	"image/x-portable-anymap": {
    	source: "apache",
    	extensions: [
    		"pnm"
    	]
    },
    	"image/x-portable-bitmap": {
    	source: "apache",
    	extensions: [
    		"pbm"
    	]
    },
    	"image/x-portable-graymap": {
    	source: "apache",
    	extensions: [
    		"pgm"
    	]
    },
    	"image/x-portable-pixmap": {
    	source: "apache",
    	extensions: [
    		"ppm"
    	]
    },
    	"image/x-rgb": {
    	source: "apache",
    	extensions: [
    		"rgb"
    	]
    },
    	"image/x-tga": {
    	source: "apache",
    	extensions: [
    		"tga"
    	]
    },
    	"image/x-xbitmap": {
    	source: "apache",
    	extensions: [
    		"xbm"
    	]
    },
    	"image/x-xcf": {
    	compressible: false
    },
    	"image/x-xpixmap": {
    	source: "apache",
    	extensions: [
    		"xpm"
    	]
    },
    	"image/x-xwindowdump": {
    	source: "apache",
    	extensions: [
    		"xwd"
    	]
    },
    	"message/cpim": {
    	source: "iana"
    },
    	"message/delivery-status": {
    	source: "iana"
    },
    	"message/disposition-notification": {
    	source: "iana",
    	extensions: [
    		"disposition-notification"
    	]
    },
    	"message/external-body": {
    	source: "iana"
    },
    	"message/feedback-report": {
    	source: "iana"
    },
    	"message/global": {
    	source: "iana",
    	extensions: [
    		"u8msg"
    	]
    },
    	"message/global-delivery-status": {
    	source: "iana",
    	extensions: [
    		"u8dsn"
    	]
    },
    	"message/global-disposition-notification": {
    	source: "iana",
    	extensions: [
    		"u8mdn"
    	]
    },
    	"message/global-headers": {
    	source: "iana",
    	extensions: [
    		"u8hdr"
    	]
    },
    	"message/http": {
    	source: "iana",
    	compressible: false
    },
    	"message/imdn+xml": {
    	source: "iana",
    	compressible: true
    },
    	"message/news": {
    	source: "iana"
    },
    	"message/partial": {
    	source: "iana",
    	compressible: false
    },
    	"message/rfc822": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"eml",
    		"mime"
    	]
    },
    	"message/s-http": {
    	source: "iana"
    },
    	"message/sip": {
    	source: "iana"
    },
    	"message/sipfrag": {
    	source: "iana"
    },
    	"message/tracking-status": {
    	source: "iana"
    },
    	"message/vnd.si.simp": {
    	source: "iana"
    },
    	"message/vnd.wfa.wsc": {
    	source: "iana",
    	extensions: [
    		"wsc"
    	]
    },
    	"model/3mf": {
    	source: "iana",
    	extensions: [
    		"3mf"
    	]
    },
    	"model/e57": {
    	source: "iana"
    },
    	"model/gltf+json": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"gltf"
    	]
    },
    	"model/gltf-binary": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"glb"
    	]
    },
    	"model/iges": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"igs",
    		"iges"
    	]
    },
    	"model/mesh": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"msh",
    		"mesh",
    		"silo"
    	]
    },
    	"model/mtl": {
    	source: "iana",
    	extensions: [
    		"mtl"
    	]
    },
    	"model/obj": {
    	source: "iana",
    	extensions: [
    		"obj"
    	]
    },
    	"model/step": {
    	source: "iana"
    },
    	"model/step+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"stpx"
    	]
    },
    	"model/step+zip": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"stpz"
    	]
    },
    	"model/step-xml+zip": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"stpxz"
    	]
    },
    	"model/stl": {
    	source: "iana",
    	extensions: [
    		"stl"
    	]
    },
    	"model/vnd.collada+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"dae"
    	]
    },
    	"model/vnd.dwf": {
    	source: "iana",
    	extensions: [
    		"dwf"
    	]
    },
    	"model/vnd.flatland.3dml": {
    	source: "iana"
    },
    	"model/vnd.gdl": {
    	source: "iana",
    	extensions: [
    		"gdl"
    	]
    },
    	"model/vnd.gs-gdl": {
    	source: "apache"
    },
    	"model/vnd.gs.gdl": {
    	source: "iana"
    },
    	"model/vnd.gtw": {
    	source: "iana",
    	extensions: [
    		"gtw"
    	]
    },
    	"model/vnd.moml+xml": {
    	source: "iana",
    	compressible: true
    },
    	"model/vnd.mts": {
    	source: "iana",
    	extensions: [
    		"mts"
    	]
    },
    	"model/vnd.opengex": {
    	source: "iana",
    	extensions: [
    		"ogex"
    	]
    },
    	"model/vnd.parasolid.transmit.binary": {
    	source: "iana",
    	extensions: [
    		"x_b"
    	]
    },
    	"model/vnd.parasolid.transmit.text": {
    	source: "iana",
    	extensions: [
    		"x_t"
    	]
    },
    	"model/vnd.pytha.pyox": {
    	source: "iana"
    },
    	"model/vnd.rosette.annotated-data-model": {
    	source: "iana"
    },
    	"model/vnd.sap.vds": {
    	source: "iana",
    	extensions: [
    		"vds"
    	]
    },
    	"model/vnd.usdz+zip": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"usdz"
    	]
    },
    	"model/vnd.valve.source.compiled-map": {
    	source: "iana",
    	extensions: [
    		"bsp"
    	]
    },
    	"model/vnd.vtu": {
    	source: "iana",
    	extensions: [
    		"vtu"
    	]
    },
    	"model/vrml": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"wrl",
    		"vrml"
    	]
    },
    	"model/x3d+binary": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"x3db",
    		"x3dbz"
    	]
    },
    	"model/x3d+fastinfoset": {
    	source: "iana",
    	extensions: [
    		"x3db"
    	]
    },
    	"model/x3d+vrml": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"x3dv",
    		"x3dvz"
    	]
    },
    	"model/x3d+xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"x3d",
    		"x3dz"
    	]
    },
    	"model/x3d-vrml": {
    	source: "iana",
    	extensions: [
    		"x3dv"
    	]
    },
    	"multipart/alternative": {
    	source: "iana",
    	compressible: false
    },
    	"multipart/appledouble": {
    	source: "iana"
    },
    	"multipart/byteranges": {
    	source: "iana"
    },
    	"multipart/digest": {
    	source: "iana"
    },
    	"multipart/encrypted": {
    	source: "iana",
    	compressible: false
    },
    	"multipart/form-data": {
    	source: "iana",
    	compressible: false
    },
    	"multipart/header-set": {
    	source: "iana"
    },
    	"multipart/mixed": {
    	source: "iana"
    },
    	"multipart/multilingual": {
    	source: "iana"
    },
    	"multipart/parallel": {
    	source: "iana"
    },
    	"multipart/related": {
    	source: "iana",
    	compressible: false
    },
    	"multipart/report": {
    	source: "iana"
    },
    	"multipart/signed": {
    	source: "iana",
    	compressible: false
    },
    	"multipart/vnd.bint.med-plus": {
    	source: "iana"
    },
    	"multipart/voice-message": {
    	source: "iana"
    },
    	"multipart/x-mixed-replace": {
    	source: "iana"
    },
    	"text/1d-interleaved-parityfec": {
    	source: "iana"
    },
    	"text/cache-manifest": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"appcache",
    		"manifest"
    	]
    },
    	"text/calendar": {
    	source: "iana",
    	extensions: [
    		"ics",
    		"ifb"
    	]
    },
    	"text/calender": {
    	compressible: true
    },
    	"text/cmd": {
    	compressible: true
    },
    	"text/coffeescript": {
    	extensions: [
    		"coffee",
    		"litcoffee"
    	]
    },
    	"text/cql": {
    	source: "iana"
    },
    	"text/cql-expression": {
    	source: "iana"
    },
    	"text/cql-identifier": {
    	source: "iana"
    },
    	"text/css": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true,
    	extensions: [
    		"css"
    	]
    },
    	"text/csv": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"csv"
    	]
    },
    	"text/csv-schema": {
    	source: "iana"
    },
    	"text/directory": {
    	source: "iana"
    },
    	"text/dns": {
    	source: "iana"
    },
    	"text/ecmascript": {
    	source: "iana"
    },
    	"text/encaprtp": {
    	source: "iana"
    },
    	"text/enriched": {
    	source: "iana"
    },
    	"text/fhirpath": {
    	source: "iana"
    },
    	"text/flexfec": {
    	source: "iana"
    },
    	"text/fwdred": {
    	source: "iana"
    },
    	"text/gff3": {
    	source: "iana"
    },
    	"text/grammar-ref-list": {
    	source: "iana"
    },
    	"text/html": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"html",
    		"htm",
    		"shtml"
    	]
    },
    	"text/jade": {
    	extensions: [
    		"jade"
    	]
    },
    	"text/javascript": {
    	source: "iana",
    	compressible: true
    },
    	"text/jcr-cnd": {
    	source: "iana"
    },
    	"text/jsx": {
    	compressible: true,
    	extensions: [
    		"jsx"
    	]
    },
    	"text/less": {
    	compressible: true,
    	extensions: [
    		"less"
    	]
    },
    	"text/markdown": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"markdown",
    		"md"
    	]
    },
    	"text/mathml": {
    	source: "nginx",
    	extensions: [
    		"mml"
    	]
    },
    	"text/mdx": {
    	compressible: true,
    	extensions: [
    		"mdx"
    	]
    },
    	"text/mizar": {
    	source: "iana"
    },
    	"text/n3": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true,
    	extensions: [
    		"n3"
    	]
    },
    	"text/parameters": {
    	source: "iana",
    	charset: "UTF-8"
    },
    	"text/parityfec": {
    	source: "iana"
    },
    	"text/plain": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"txt",
    		"text",
    		"conf",
    		"def",
    		"list",
    		"log",
    		"in",
    		"ini"
    	]
    },
    	"text/provenance-notation": {
    	source: "iana",
    	charset: "UTF-8"
    },
    	"text/prs.fallenstein.rst": {
    	source: "iana"
    },
    	"text/prs.lines.tag": {
    	source: "iana",
    	extensions: [
    		"dsc"
    	]
    },
    	"text/prs.prop.logic": {
    	source: "iana"
    },
    	"text/raptorfec": {
    	source: "iana"
    },
    	"text/red": {
    	source: "iana"
    },
    	"text/rfc822-headers": {
    	source: "iana"
    },
    	"text/richtext": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rtx"
    	]
    },
    	"text/rtf": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"rtf"
    	]
    },
    	"text/rtp-enc-aescm128": {
    	source: "iana"
    },
    	"text/rtploopback": {
    	source: "iana"
    },
    	"text/rtx": {
    	source: "iana"
    },
    	"text/sgml": {
    	source: "iana",
    	extensions: [
    		"sgml",
    		"sgm"
    	]
    },
    	"text/shaclc": {
    	source: "iana"
    },
    	"text/shex": {
    	source: "iana",
    	extensions: [
    		"shex"
    	]
    },
    	"text/slim": {
    	extensions: [
    		"slim",
    		"slm"
    	]
    },
    	"text/spdx": {
    	source: "iana",
    	extensions: [
    		"spdx"
    	]
    },
    	"text/strings": {
    	source: "iana"
    },
    	"text/stylus": {
    	extensions: [
    		"stylus",
    		"styl"
    	]
    },
    	"text/t140": {
    	source: "iana"
    },
    	"text/tab-separated-values": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"tsv"
    	]
    },
    	"text/troff": {
    	source: "iana",
    	extensions: [
    		"t",
    		"tr",
    		"roff",
    		"man",
    		"me",
    		"ms"
    	]
    },
    	"text/turtle": {
    	source: "iana",
    	charset: "UTF-8",
    	extensions: [
    		"ttl"
    	]
    },
    	"text/ulpfec": {
    	source: "iana"
    },
    	"text/uri-list": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"uri",
    		"uris",
    		"urls"
    	]
    },
    	"text/vcard": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"vcard"
    	]
    },
    	"text/vnd.a": {
    	source: "iana"
    },
    	"text/vnd.abc": {
    	source: "iana"
    },
    	"text/vnd.ascii-art": {
    	source: "iana"
    },
    	"text/vnd.curl": {
    	source: "iana",
    	extensions: [
    		"curl"
    	]
    },
    	"text/vnd.curl.dcurl": {
    	source: "apache",
    	extensions: [
    		"dcurl"
    	]
    },
    	"text/vnd.curl.mcurl": {
    	source: "apache",
    	extensions: [
    		"mcurl"
    	]
    },
    	"text/vnd.curl.scurl": {
    	source: "apache",
    	extensions: [
    		"scurl"
    	]
    },
    	"text/vnd.debian.copyright": {
    	source: "iana",
    	charset: "UTF-8"
    },
    	"text/vnd.dmclientscript": {
    	source: "iana"
    },
    	"text/vnd.dvb.subtitle": {
    	source: "iana",
    	extensions: [
    		"sub"
    	]
    },
    	"text/vnd.esmertec.theme-descriptor": {
    	source: "iana",
    	charset: "UTF-8"
    },
    	"text/vnd.familysearch.gedcom": {
    	source: "iana",
    	extensions: [
    		"ged"
    	]
    },
    	"text/vnd.ficlab.flt": {
    	source: "iana"
    },
    	"text/vnd.fly": {
    	source: "iana",
    	extensions: [
    		"fly"
    	]
    },
    	"text/vnd.fmi.flexstor": {
    	source: "iana",
    	extensions: [
    		"flx"
    	]
    },
    	"text/vnd.gml": {
    	source: "iana"
    },
    	"text/vnd.graphviz": {
    	source: "iana",
    	extensions: [
    		"gv"
    	]
    },
    	"text/vnd.hans": {
    	source: "iana"
    },
    	"text/vnd.hgl": {
    	source: "iana"
    },
    	"text/vnd.in3d.3dml": {
    	source: "iana",
    	extensions: [
    		"3dml"
    	]
    },
    	"text/vnd.in3d.spot": {
    	source: "iana",
    	extensions: [
    		"spot"
    	]
    },
    	"text/vnd.iptc.newsml": {
    	source: "iana"
    },
    	"text/vnd.iptc.nitf": {
    	source: "iana"
    },
    	"text/vnd.latex-z": {
    	source: "iana"
    },
    	"text/vnd.motorola.reflex": {
    	source: "iana"
    },
    	"text/vnd.ms-mediapackage": {
    	source: "iana"
    },
    	"text/vnd.net2phone.commcenter.command": {
    	source: "iana"
    },
    	"text/vnd.radisys.msml-basic-layout": {
    	source: "iana"
    },
    	"text/vnd.senx.warpscript": {
    	source: "iana"
    },
    	"text/vnd.si.uricatalogue": {
    	source: "iana"
    },
    	"text/vnd.sosi": {
    	source: "iana"
    },
    	"text/vnd.sun.j2me.app-descriptor": {
    	source: "iana",
    	charset: "UTF-8",
    	extensions: [
    		"jad"
    	]
    },
    	"text/vnd.trolltech.linguist": {
    	source: "iana",
    	charset: "UTF-8"
    },
    	"text/vnd.wap.si": {
    	source: "iana"
    },
    	"text/vnd.wap.sl": {
    	source: "iana"
    },
    	"text/vnd.wap.wml": {
    	source: "iana",
    	extensions: [
    		"wml"
    	]
    },
    	"text/vnd.wap.wmlscript": {
    	source: "iana",
    	extensions: [
    		"wmls"
    	]
    },
    	"text/vtt": {
    	source: "iana",
    	charset: "UTF-8",
    	compressible: true,
    	extensions: [
    		"vtt"
    	]
    },
    	"text/x-asm": {
    	source: "apache",
    	extensions: [
    		"s",
    		"asm"
    	]
    },
    	"text/x-c": {
    	source: "apache",
    	extensions: [
    		"c",
    		"cc",
    		"cxx",
    		"cpp",
    		"h",
    		"hh",
    		"dic"
    	]
    },
    	"text/x-component": {
    	source: "nginx",
    	extensions: [
    		"htc"
    	]
    },
    	"text/x-fortran": {
    	source: "apache",
    	extensions: [
    		"f",
    		"for",
    		"f77",
    		"f90"
    	]
    },
    	"text/x-gwt-rpc": {
    	compressible: true
    },
    	"text/x-handlebars-template": {
    	extensions: [
    		"hbs"
    	]
    },
    	"text/x-java-source": {
    	source: "apache",
    	extensions: [
    		"java"
    	]
    },
    	"text/x-jquery-tmpl": {
    	compressible: true
    },
    	"text/x-lua": {
    	extensions: [
    		"lua"
    	]
    },
    	"text/x-markdown": {
    	compressible: true,
    	extensions: [
    		"mkd"
    	]
    },
    	"text/x-nfo": {
    	source: "apache",
    	extensions: [
    		"nfo"
    	]
    },
    	"text/x-opml": {
    	source: "apache",
    	extensions: [
    		"opml"
    	]
    },
    	"text/x-org": {
    	compressible: true,
    	extensions: [
    		"org"
    	]
    },
    	"text/x-pascal": {
    	source: "apache",
    	extensions: [
    		"p",
    		"pas"
    	]
    },
    	"text/x-processing": {
    	compressible: true,
    	extensions: [
    		"pde"
    	]
    },
    	"text/x-sass": {
    	extensions: [
    		"sass"
    	]
    },
    	"text/x-scss": {
    	extensions: [
    		"scss"
    	]
    },
    	"text/x-setext": {
    	source: "apache",
    	extensions: [
    		"etx"
    	]
    },
    	"text/x-sfv": {
    	source: "apache",
    	extensions: [
    		"sfv"
    	]
    },
    	"text/x-suse-ymp": {
    	compressible: true,
    	extensions: [
    		"ymp"
    	]
    },
    	"text/x-uuencode": {
    	source: "apache",
    	extensions: [
    		"uu"
    	]
    },
    	"text/x-vcalendar": {
    	source: "apache",
    	extensions: [
    		"vcs"
    	]
    },
    	"text/x-vcard": {
    	source: "apache",
    	extensions: [
    		"vcf"
    	]
    },
    	"text/xml": {
    	source: "iana",
    	compressible: true,
    	extensions: [
    		"xml"
    	]
    },
    	"text/xml-external-parsed-entity": {
    	source: "iana"
    },
    	"text/yaml": {
    	compressible: true,
    	extensions: [
    		"yaml",
    		"yml"
    	]
    },
    	"video/1d-interleaved-parityfec": {
    	source: "iana"
    },
    	"video/3gpp": {
    	source: "iana",
    	extensions: [
    		"3gp",
    		"3gpp"
    	]
    },
    	"video/3gpp-tt": {
    	source: "iana"
    },
    	"video/3gpp2": {
    	source: "iana",
    	extensions: [
    		"3g2"
    	]
    },
    	"video/av1": {
    	source: "iana"
    },
    	"video/bmpeg": {
    	source: "iana"
    },
    	"video/bt656": {
    	source: "iana"
    },
    	"video/celb": {
    	source: "iana"
    },
    	"video/dv": {
    	source: "iana"
    },
    	"video/encaprtp": {
    	source: "iana"
    },
    	"video/ffv1": {
    	source: "iana"
    },
    	"video/flexfec": {
    	source: "iana"
    },
    	"video/h261": {
    	source: "iana",
    	extensions: [
    		"h261"
    	]
    },
    	"video/h263": {
    	source: "iana",
    	extensions: [
    		"h263"
    	]
    },
    	"video/h263-1998": {
    	source: "iana"
    },
    	"video/h263-2000": {
    	source: "iana"
    },
    	"video/h264": {
    	source: "iana",
    	extensions: [
    		"h264"
    	]
    },
    	"video/h264-rcdo": {
    	source: "iana"
    },
    	"video/h264-svc": {
    	source: "iana"
    },
    	"video/h265": {
    	source: "iana"
    },
    	"video/iso.segment": {
    	source: "iana",
    	extensions: [
    		"m4s"
    	]
    },
    	"video/jpeg": {
    	source: "iana",
    	extensions: [
    		"jpgv"
    	]
    },
    	"video/jpeg2000": {
    	source: "iana"
    },
    	"video/jpm": {
    	source: "apache",
    	extensions: [
    		"jpm",
    		"jpgm"
    	]
    },
    	"video/jxsv": {
    	source: "iana"
    },
    	"video/mj2": {
    	source: "iana",
    	extensions: [
    		"mj2",
    		"mjp2"
    	]
    },
    	"video/mp1s": {
    	source: "iana"
    },
    	"video/mp2p": {
    	source: "iana"
    },
    	"video/mp2t": {
    	source: "iana",
    	extensions: [
    		"ts"
    	]
    },
    	"video/mp4": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"mp4",
    		"mp4v",
    		"mpg4"
    	]
    },
    	"video/mp4v-es": {
    	source: "iana"
    },
    	"video/mpeg": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"mpeg",
    		"mpg",
    		"mpe",
    		"m1v",
    		"m2v"
    	]
    },
    	"video/mpeg4-generic": {
    	source: "iana"
    },
    	"video/mpv": {
    	source: "iana"
    },
    	"video/nv": {
    	source: "iana"
    },
    	"video/ogg": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"ogv"
    	]
    },
    	"video/parityfec": {
    	source: "iana"
    },
    	"video/pointer": {
    	source: "iana"
    },
    	"video/quicktime": {
    	source: "iana",
    	compressible: false,
    	extensions: [
    		"qt",
    		"mov"
    	]
    },
    	"video/raptorfec": {
    	source: "iana"
    },
    	"video/raw": {
    	source: "iana"
    },
    	"video/rtp-enc-aescm128": {
    	source: "iana"
    },
    	"video/rtploopback": {
    	source: "iana"
    },
    	"video/rtx": {
    	source: "iana"
    },
    	"video/scip": {
    	source: "iana"
    },
    	"video/smpte291": {
    	source: "iana"
    },
    	"video/smpte292m": {
    	source: "iana"
    },
    	"video/ulpfec": {
    	source: "iana"
    },
    	"video/vc1": {
    	source: "iana"
    },
    	"video/vc2": {
    	source: "iana"
    },
    	"video/vnd.cctv": {
    	source: "iana"
    },
    	"video/vnd.dece.hd": {
    	source: "iana",
    	extensions: [
    		"uvh",
    		"uvvh"
    	]
    },
    	"video/vnd.dece.mobile": {
    	source: "iana",
    	extensions: [
    		"uvm",
    		"uvvm"
    	]
    },
    	"video/vnd.dece.mp4": {
    	source: "iana"
    },
    	"video/vnd.dece.pd": {
    	source: "iana",
    	extensions: [
    		"uvp",
    		"uvvp"
    	]
    },
    	"video/vnd.dece.sd": {
    	source: "iana",
    	extensions: [
    		"uvs",
    		"uvvs"
    	]
    },
    	"video/vnd.dece.video": {
    	source: "iana",
    	extensions: [
    		"uvv",
    		"uvvv"
    	]
    },
    	"video/vnd.directv.mpeg": {
    	source: "iana"
    },
    	"video/vnd.directv.mpeg-tts": {
    	source: "iana"
    },
    	"video/vnd.dlna.mpeg-tts": {
    	source: "iana"
    },
    	"video/vnd.dvb.file": {
    	source: "iana",
    	extensions: [
    		"dvb"
    	]
    },
    	"video/vnd.fvt": {
    	source: "iana",
    	extensions: [
    		"fvt"
    	]
    },
    	"video/vnd.hns.video": {
    	source: "iana"
    },
    	"video/vnd.iptvforum.1dparityfec-1010": {
    	source: "iana"
    },
    	"video/vnd.iptvforum.1dparityfec-2005": {
    	source: "iana"
    },
    	"video/vnd.iptvforum.2dparityfec-1010": {
    	source: "iana"
    },
    	"video/vnd.iptvforum.2dparityfec-2005": {
    	source: "iana"
    },
    	"video/vnd.iptvforum.ttsavc": {
    	source: "iana"
    },
    	"video/vnd.iptvforum.ttsmpeg2": {
    	source: "iana"
    },
    	"video/vnd.motorola.video": {
    	source: "iana"
    },
    	"video/vnd.motorola.videop": {
    	source: "iana"
    },
    	"video/vnd.mpegurl": {
    	source: "iana",
    	extensions: [
    		"mxu",
    		"m4u"
    	]
    },
    	"video/vnd.ms-playready.media.pyv": {
    	source: "iana",
    	extensions: [
    		"pyv"
    	]
    },
    	"video/vnd.nokia.interleaved-multimedia": {
    	source: "iana"
    },
    	"video/vnd.nokia.mp4vr": {
    	source: "iana"
    },
    	"video/vnd.nokia.videovoip": {
    	source: "iana"
    },
    	"video/vnd.objectvideo": {
    	source: "iana"
    },
    	"video/vnd.radgamettools.bink": {
    	source: "iana"
    },
    	"video/vnd.radgamettools.smacker": {
    	source: "iana"
    },
    	"video/vnd.sealed.mpeg1": {
    	source: "iana"
    },
    	"video/vnd.sealed.mpeg4": {
    	source: "iana"
    },
    	"video/vnd.sealed.swf": {
    	source: "iana"
    },
    	"video/vnd.sealedmedia.softseal.mov": {
    	source: "iana"
    },
    	"video/vnd.uvvu.mp4": {
    	source: "iana",
    	extensions: [
    		"uvu",
    		"uvvu"
    	]
    },
    	"video/vnd.vivo": {
    	source: "iana",
    	extensions: [
    		"viv"
    	]
    },
    	"video/vnd.youtube.yt": {
    	source: "iana"
    },
    	"video/vp8": {
    	source: "iana"
    },
    	"video/vp9": {
    	source: "iana"
    },
    	"video/webm": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"webm"
    	]
    },
    	"video/x-f4v": {
    	source: "apache",
    	extensions: [
    		"f4v"
    	]
    },
    	"video/x-fli": {
    	source: "apache",
    	extensions: [
    		"fli"
    	]
    },
    	"video/x-flv": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"flv"
    	]
    },
    	"video/x-m4v": {
    	source: "apache",
    	extensions: [
    		"m4v"
    	]
    },
    	"video/x-matroska": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"mkv",
    		"mk3d",
    		"mks"
    	]
    },
    	"video/x-mng": {
    	source: "apache",
    	extensions: [
    		"mng"
    	]
    },
    	"video/x-ms-asf": {
    	source: "apache",
    	extensions: [
    		"asf",
    		"asx"
    	]
    },
    	"video/x-ms-vob": {
    	source: "apache",
    	extensions: [
    		"vob"
    	]
    },
    	"video/x-ms-wm": {
    	source: "apache",
    	extensions: [
    		"wm"
    	]
    },
    	"video/x-ms-wmv": {
    	source: "apache",
    	compressible: false,
    	extensions: [
    		"wmv"
    	]
    },
    	"video/x-ms-wmx": {
    	source: "apache",
    	extensions: [
    		"wmx"
    	]
    },
    	"video/x-ms-wvx": {
    	source: "apache",
    	extensions: [
    		"wvx"
    	]
    },
    	"video/x-msvideo": {
    	source: "apache",
    	extensions: [
    		"avi"
    	]
    },
    	"video/x-sgi-movie": {
    	source: "apache",
    	extensions: [
    		"movie"
    	]
    },
    	"video/x-smv": {
    	source: "apache",
    	extensions: [
    		"smv"
    	]
    },
    	"x-conference/x-cooltalk": {
    	source: "apache",
    	extensions: [
    		"ice"
    	]
    },
    	"x-shader/x-fragment": {
    	compressible: true
    },
    	"x-shader/x-vertex": {
    	compressible: true
    }
    };

    /*!
     * mime-db
     * Copyright(c) 2014 Jonathan Ong
     * MIT Licensed
     */

    /**
     * Module exports.
     */

    var mimeDb = require$$0;

    /*!
     * mime-types
     * Copyright(c) 2014 Jonathan Ong
     * Copyright(c) 2015 Douglas Christopher Wilson
     * MIT Licensed
     */

    var mimeTypes = createCommonjsModule(function (module, exports) {

    /**
     * Module dependencies.
     * @private
     */


    var extname = require$$0__default["default"].extname;

    /**
     * Module variables.
     * @private
     */

    var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
    var TEXT_TYPE_REGEXP = /^text\//i;

    /**
     * Module exports.
     * @public
     */

    exports.charset = charset;
    exports.charsets = { lookup: charset };
    exports.contentType = contentType;
    exports.extension = extension;
    exports.extensions = Object.create(null);
    exports.lookup = lookup;
    exports.types = Object.create(null);

    // Populate the extensions/types maps
    populateMaps(exports.extensions, exports.types);

    /**
     * Get the default charset for a MIME type.
     *
     * @param {string} type
     * @return {boolean|string}
     */

    function charset (type) {
      if (!type || typeof type !== 'string') {
        return false
      }

      // TODO: use media-typer
      var match = EXTRACT_TYPE_REGEXP.exec(type);
      var mime = match && mimeDb[match[1].toLowerCase()];

      if (mime && mime.charset) {
        return mime.charset
      }

      // default text/* to utf-8
      if (match && TEXT_TYPE_REGEXP.test(match[1])) {
        return 'UTF-8'
      }

      return false
    }

    /**
     * Create a full Content-Type header given a MIME type or extension.
     *
     * @param {string} str
     * @return {boolean|string}
     */

    function contentType (str) {
      // TODO: should this even be in this module?
      if (!str || typeof str !== 'string') {
        return false
      }

      var mime = str.indexOf('/') === -1
        ? exports.lookup(str)
        : str;

      if (!mime) {
        return false
      }

      // TODO: use content-type or other module
      if (mime.indexOf('charset') === -1) {
        var charset = exports.charset(mime);
        if (charset) mime += '; charset=' + charset.toLowerCase();
      }

      return mime
    }

    /**
     * Get the default extension for a MIME type.
     *
     * @param {string} type
     * @return {boolean|string}
     */

    function extension (type) {
      if (!type || typeof type !== 'string') {
        return false
      }

      // TODO: use media-typer
      var match = EXTRACT_TYPE_REGEXP.exec(type);

      // get extensions
      var exts = match && exports.extensions[match[1].toLowerCase()];

      if (!exts || !exts.length) {
        return false
      }

      return exts[0]
    }

    /**
     * Lookup the MIME type for a file path/extension.
     *
     * @param {string} path
     * @return {boolean|string}
     */

    function lookup (path) {
      if (!path || typeof path !== 'string') {
        return false
      }

      // get the extension ("ext" or ".ext" or full path)
      var extension = extname('x.' + path)
        .toLowerCase()
        .substr(1);

      if (!extension) {
        return false
      }

      return exports.types[extension] || false
    }

    /**
     * Populate the extensions and types maps.
     * @private
     */

    function populateMaps (extensions, types) {
      // source preference (least -> most)
      var preference = ['nginx', 'apache', undefined, 'iana'];

      Object.keys(mimeDb).forEach(function forEachMimeType (type) {
        var mime = mimeDb[type];
        var exts = mime.extensions;

        if (!exts || !exts.length) {
          return
        }

        // mime -> extensions
        extensions[type] = exts;

        // extension -> mime
        for (var i = 0; i < exts.length; i++) {
          var extension = exts[i];

          if (types[extension]) {
            var from = preference.indexOf(mimeDb[types[extension]].source);
            var to = preference.indexOf(mime.source);

            if (types[extension] !== 'application/octet-stream' &&
              (from > to || (from === to && types[extension].substr(0, 12) === 'application/'))) {
              // skip the remapping
              continue
            }
          }

          // set the extension -> mime
          types[extension] = type;
        }
      });
    }
    });

    class LRU {
      constructor(max) {
        this.max = max;
        this.size = 0;
        this.cache = new Map();
        this._cache = new Map();
      }

      get(key, options) {
        let item = this.cache.get(key);
        const maxAge = options && options.maxAge;
        // only call Date.now() when necessary
        let now;
        function getNow() {
          now = now || Date.now();
          return now;
        }
        if (item) {
          // check expired
          if (item.expired && getNow() > item.expired) {
            item.expired = 0;
            item.value = undefined;
          } else {
            // update expired in get
            if (maxAge !== undefined) {
              const expired = maxAge ? getNow() + maxAge : 0;
              item.expired = expired;
            }
          }
          return item.value;
        }

        // try to read from _cache
        item = this._cache.get(key);
        if (item) {
          // check expired
          if (item.expired && getNow() > item.expired) {
            item.expired = 0;
            item.value = undefined;
          } else {
            // not expired, save to cache
            this._update(key, item);
            // update expired in get
            if (maxAge !== undefined) {
              const expired = maxAge ? getNow() + maxAge : 0;
              item.expired = expired;
            }
          }
          return item.value;
        }
      }

      set(key, value, options) {
        const maxAge = options && options.maxAge;
        const expired = maxAge ? Date.now() + maxAge : 0;
        let item = this.cache.get(key);
        if (item) {
          item.expired = expired;
          item.value = value;
        } else {
          item = {
            value,
            expired,
          };
          this._update(key, item);
        }
      }

      keys() {
        const cacheKeys = new Set();
        const now = Date.now();

        for (const entry of this.cache.entries()) {
          checkEntry(entry);
        }

        for (const entry of this._cache.entries()) {
          checkEntry(entry);
        }

        function checkEntry(entry) {
          const key = entry[0];
          const item = entry[1];
          if (entry[1].value && (!entry[1].expired) || item.expired >= now) {
            cacheKeys.add(key);
          }
        }

        return Array.from(cacheKeys.keys());
      }

      _update(key, item) {
        this.cache.set(key, item);
        this.size++;
        if (this.size >= this.max) {
          this.size = 0;
          this._cache = this.cache;
          this.cache = new Map();
        }
      }
    }

    var ylru = LRU;

    const typeLRUCache = new ylru(100);

    var cacheContentType = type => {
      let mimeType = typeLRUCache.get(type);
      if (!mimeType) {
        mimeType = mimeTypes.contentType(type);
        typeLRUCache.set(type, mimeType);
      }
      return mimeType;
    };

    /*!
     * escape-html
     * Copyright(c) 2012-2013 TJ Holowaychuk
     * Copyright(c) 2015 Andreas Lubbe
     * Copyright(c) 2015 Tiancheng "Timothy" Gu
     * MIT Licensed
     */

    /**
     * Module variables.
     * @private
     */

    var matchHtmlRegExp = /["'&<>]/;

    /**
     * Module exports.
     * @public
     */

    var escapeHtml_1 = escapeHtml;

    /**
     * Escape special characters in the given string of html.
     *
     * @param  {string} string The string to escape for inserting into HTML
     * @return {string}
     * @public
     */

    function escapeHtml(string) {
      var str = '' + string;
      var match = matchHtmlRegExp.exec(str);

      if (!match) {
        return str;
      }

      var escape;
      var html = '';
      var index = 0;
      var lastIndex = 0;

      for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
          case 34: // "
            escape = '&quot;';
            break;
          case 38: // &
            escape = '&amp;';
            break;
          case 39: // '
            escape = '&#39;';
            break;
          case 60: // <
            escape = '&lt;';
            break;
          case 62: // >
            escape = '&gt;';
            break;
          default:
            continue;
        }

        if (lastIndex !== index) {
          html += str.substring(lastIndex, index);
        }

        lastIndex = index + 1;
        html += escape;
      }

      return lastIndex !== index
        ? html + str.substring(lastIndex, index)
        : html;
    }

    /*!
     * media-typer
     * Copyright(c) 2014 Douglas Christopher Wilson
     * MIT Licensed
     */
    /**
     * RegExp to match *( ";" parameter ) in RFC 2616 sec 3.7
     *
     * parameter     = token "=" ( token | quoted-string )
     * token         = 1*<any CHAR except CTLs or separators>
     * separators    = "(" | ")" | "<" | ">" | "@"
     *               | "," | ";" | ":" | "\" | <">
     *               | "/" | "[" | "]" | "?" | "="
     *               | "{" | "}" | SP | HT
     * quoted-string = ( <"> *(qdtext | quoted-pair ) <"> )
     * qdtext        = <any TEXT except <">>
     * quoted-pair   = "\" CHAR
     * CHAR          = <any US-ASCII character (octets 0 - 127)>
     * TEXT          = <any OCTET except CTLs, but including LWS>
     * LWS           = [CRLF] 1*( SP | HT )
     * CRLF          = CR LF
     * CR            = <US-ASCII CR, carriage return (13)>
     * LF            = <US-ASCII LF, linefeed (10)>
     * SP            = <US-ASCII SP, space (32)>
     * SHT           = <US-ASCII HT, horizontal-tab (9)>
     * CTL           = <any US-ASCII control character (octets 0 - 31) and DEL (127)>
     * OCTET         = <any 8-bit sequence of data>
     */
    var paramRegExp = /; *([!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) *= *("(?:[ !\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u0020-\u007e])*"|[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) */g;
    var textRegExp = /^[\u0020-\u007e\u0080-\u00ff]+$/;
    var tokenRegExp = /^[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+$/;

    /**
     * RegExp to match quoted-pair in RFC 2616
     *
     * quoted-pair = "\" CHAR
     * CHAR        = <any US-ASCII character (octets 0 - 127)>
     */
    var qescRegExp = /\\([\u0000-\u007f])/g;

    /**
     * RegExp to match chars that must be quoted-pair in RFC 2616
     */
    var quoteRegExp = /([\\"])/g;

    /**
     * RegExp to match type in RFC 6838
     *
     * type-name = restricted-name
     * subtype-name = restricted-name
     * restricted-name = restricted-name-first *126restricted-name-chars
     * restricted-name-first  = ALPHA / DIGIT
     * restricted-name-chars  = ALPHA / DIGIT / "!" / "#" /
     *                          "$" / "&" / "-" / "^" / "_"
     * restricted-name-chars =/ "." ; Characters before first dot always
     *                              ; specify a facet name
     * restricted-name-chars =/ "+" ; Characters after last plus always
     *                              ; specify a structured syntax suffix
     * ALPHA =  %x41-5A / %x61-7A   ; A-Z / a-z
     * DIGIT =  %x30-39             ; 0-9
     */
    var subtypeNameRegExp = /^[A-Za-z0-9][A-Za-z0-9!#$&^_.-]{0,126}$/;
    var typeNameRegExp = /^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}$/;
    var typeRegExp = /^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;

    /**
     * Module exports.
     */

    var format_1$1 = format$1;
    var parse_1$1 = parse$6;

    /**
     * Format object to media type.
     *
     * @param {object} obj
     * @return {string}
     * @api public
     */

    function format$1(obj) {
      if (!obj || typeof obj !== 'object') {
        throw new TypeError('argument obj is required')
      }

      var parameters = obj.parameters;
      var subtype = obj.subtype;
      var suffix = obj.suffix;
      var type = obj.type;

      if (!type || !typeNameRegExp.test(type)) {
        throw new TypeError('invalid type')
      }

      if (!subtype || !subtypeNameRegExp.test(subtype)) {
        throw new TypeError('invalid subtype')
      }

      // format as type/subtype
      var string = type + '/' + subtype;

      // append +suffix
      if (suffix) {
        if (!typeNameRegExp.test(suffix)) {
          throw new TypeError('invalid suffix')
        }

        string += '+' + suffix;
      }

      // append parameters
      if (parameters && typeof parameters === 'object') {
        var param;
        var params = Object.keys(parameters).sort();

        for (var i = 0; i < params.length; i++) {
          param = params[i];

          if (!tokenRegExp.test(param)) {
            throw new TypeError('invalid parameter name')
          }

          string += '; ' + param + '=' + qstring$1(parameters[param]);
        }
      }

      return string
    }

    /**
     * Parse media type to object.
     *
     * @param {string|object} string
     * @return {Object}
     * @api public
     */

    function parse$6(string) {
      if (!string) {
        throw new TypeError('argument string is required')
      }

      // support req/res-like objects as argument
      if (typeof string === 'object') {
        string = getcontenttype$1(string);
      }

      if (typeof string !== 'string') {
        throw new TypeError('argument string is required to be a string')
      }

      var index = string.indexOf(';');
      var type = index !== -1
        ? string.substr(0, index)
        : string;

      var key;
      var match;
      var obj = splitType(type);
      var params = {};
      var value;

      paramRegExp.lastIndex = index;

      while (match = paramRegExp.exec(string)) {
        if (match.index !== index) {
          throw new TypeError('invalid parameter format')
        }

        index += match[0].length;
        key = match[1].toLowerCase();
        value = match[2];

        if (value[0] === '"') {
          // remove quotes and escapes
          value = value
            .substr(1, value.length - 2)
            .replace(qescRegExp, '$1');
        }

        params[key] = value;
      }

      if (index !== -1 && index !== string.length) {
        throw new TypeError('invalid parameter format')
      }

      obj.parameters = params;

      return obj
    }

    /**
     * Get content-type from req/res objects.
     *
     * @param {object}
     * @return {Object}
     * @api private
     */

    function getcontenttype$1(obj) {
      if (typeof obj.getHeader === 'function') {
        // res-like
        return obj.getHeader('content-type')
      }

      if (typeof obj.headers === 'object') {
        // req-like
        return obj.headers && obj.headers['content-type']
      }
    }

    /**
     * Quote a string if necessary.
     *
     * @param {string} val
     * @return {string}
     * @api private
     */

    function qstring$1(val) {
      var str = String(val);

      // no need to quote tokens
      if (tokenRegExp.test(str)) {
        return str
      }

      if (str.length > 0 && !textRegExp.test(str)) {
        throw new TypeError('invalid parameter value')
      }

      return '"' + str.replace(quoteRegExp, '\\$1') + '"'
    }

    /**
     * Simply "type/subtype+siffx" into parts.
     *
     * @param {string} string
     * @return {Object}
     * @api private
     */

    function splitType(string) {
      var match = typeRegExp.exec(string.toLowerCase());

      if (!match) {
        throw new TypeError('invalid media type')
      }

      var type = match[1];
      var subtype = match[2];
      var suffix;

      // suffix after last +
      var index = subtype.lastIndexOf('+');
      if (index !== -1) {
        suffix = subtype.substr(index + 1);
        subtype = subtype.substr(0, index);
      }

      var obj = {
        type: type,
        subtype: subtype,
        suffix: suffix
      };

      return obj
    }

    var mediaTyper = {
    	format: format_1$1,
    	parse: parse_1$1
    };

    /*!
     * type-is
     * Copyright(c) 2014 Jonathan Ong
     * Copyright(c) 2014-2015 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module dependencies.
     * @private
     */




    /**
     * Module exports.
     * @public
     */

    var typeIs = typeofrequest;
    var is = typeis;
    var hasBody = hasbody;
    var normalize_1 = normalize$2;
    var match$1 = mimeMatch;

    /**
     * Compare a `value` content-type with `types`.
     * Each `type` can be an extension like `html`,
     * a special shortcut like `multipart` or `urlencoded`,
     * or a mime type.
     *
     * If no types match, `false` is returned.
     * Otherwise, the first `type` that matches is returned.
     *
     * @param {String} value
     * @param {Array} types
     * @public
     */

    function typeis (value, types_) {
      var i;
      var types = types_;

      // remove parameters and normalize
      var val = tryNormalizeType(value);

      // no type or invalid
      if (!val) {
        return false
      }

      // support flattened arguments
      if (types && !Array.isArray(types)) {
        types = new Array(arguments.length - 1);
        for (i = 0; i < types.length; i++) {
          types[i] = arguments[i + 1];
        }
      }

      // no types, return the content type
      if (!types || !types.length) {
        return val
      }

      var type;
      for (i = 0; i < types.length; i++) {
        if (mimeMatch(normalize$2(type = types[i]), val)) {
          return type[0] === '+' || type.indexOf('*') !== -1
            ? val
            : type
        }
      }

      // no matches
      return false
    }

    /**
     * Check if a request has a request body.
     * A request with a body __must__ either have `transfer-encoding`
     * or `content-length` headers set.
     * http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.3
     *
     * @param {Object} request
     * @return {Boolean}
     * @public
     */

    function hasbody (req) {
      return req.headers['transfer-encoding'] !== undefined ||
        !isNaN(req.headers['content-length'])
    }

    /**
     * Check if the incoming request contains the "Content-Type"
     * header field, and it contains any of the give mime `type`s.
     * If there is no request body, `null` is returned.
     * If there is no content type, `false` is returned.
     * Otherwise, it returns the first `type` that matches.
     *
     * Examples:
     *
     *     // With Content-Type: text/html; charset=utf-8
     *     this.is('html'); // => 'html'
     *     this.is('text/html'); // => 'text/html'
     *     this.is('text/*', 'application/json'); // => 'text/html'
     *
     *     // When Content-Type is application/json
     *     this.is('json', 'urlencoded'); // => 'json'
     *     this.is('application/json'); // => 'application/json'
     *     this.is('html', 'application/*'); // => 'application/json'
     *
     *     this.is('html'); // => false
     *
     * @param {String|Array} types...
     * @return {String|false|null}
     * @public
     */

    function typeofrequest (req, types_) {
      var types = types_;

      // no body
      if (!hasbody(req)) {
        return null
      }

      // support flattened arguments
      if (arguments.length > 2) {
        types = new Array(arguments.length - 1);
        for (var i = 0; i < types.length; i++) {
          types[i] = arguments[i + 1];
        }
      }

      // request content type
      var value = req.headers['content-type'];

      return typeis(value, types)
    }

    /**
     * Normalize a mime type.
     * If it's a shorthand, expand it to a valid mime type.
     *
     * In general, you probably want:
     *
     *   var type = is(req, ['urlencoded', 'json', 'multipart']);
     *
     * Then use the appropriate body parsers.
     * These three are the most common request body types
     * and are thus ensured to work.
     *
     * @param {String} type
     * @private
     */

    function normalize$2 (type) {
      if (typeof type !== 'string') {
        // invalid type
        return false
      }

      switch (type) {
        case 'urlencoded':
          return 'application/x-www-form-urlencoded'
        case 'multipart':
          return 'multipart/*'
      }

      if (type[0] === '+') {
        // "+json" -> "*/*+json" expando
        return '*/*' + type
      }

      return type.indexOf('/') === -1
        ? mimeTypes.lookup(type)
        : type
    }

    /**
     * Check if `expected` mime type
     * matches `actual` mime type with
     * wildcard and +suffix support.
     *
     * @param {String} expected
     * @param {String} actual
     * @return {Boolean}
     * @private
     */

    function mimeMatch (expected, actual) {
      // invalid type
      if (expected === false) {
        return false
      }

      // split types
      var actualParts = actual.split('/');
      var expectedParts = expected.split('/');

      // invalid format
      if (actualParts.length !== 2 || expectedParts.length !== 2) {
        return false
      }

      // validate type
      if (expectedParts[0] !== '*' && expectedParts[0] !== actualParts[0]) {
        return false
      }

      // validate suffix wildcard
      if (expectedParts[1].substr(0, 2) === '*+') {
        return expectedParts[1].length <= actualParts[1].length + 1 &&
          expectedParts[1].substr(1) === actualParts[1].substr(1 - expectedParts[1].length)
      }

      // validate subtype
      if (expectedParts[1] !== '*' && expectedParts[1] !== actualParts[1]) {
        return false
      }

      return true
    }

    /**
     * Normalize a type and remove parameters.
     *
     * @param {string} value
     * @return {string}
     * @private
     */

    function normalizeType (value) {
      // parse the type
      var type = mediaTyper.parse(value);

      // remove the parameters
      type.parameters = undefined;

      // reformat it
      return mediaTyper.format(type)
    }

    /**
     * Try to normalize a type and remove parameters.
     *
     * @param {string} value
     * @return {string}
     * @private
     */

    function tryNormalizeType (value) {
      if (!value) {
        return null
      }

      try {
        return normalizeType(value)
      } catch (err) {
        return null
      }
    }
    typeIs.is = is;
    typeIs.hasBody = hasBody;
    typeIs.normalize = normalize_1;
    typeIs.match = match$1;

    var codes = {
    	"100": "Continue",
    	"101": "Switching Protocols",
    	"102": "Processing",
    	"103": "Early Hints",
    	"200": "OK",
    	"201": "Created",
    	"202": "Accepted",
    	"203": "Non-Authoritative Information",
    	"204": "No Content",
    	"205": "Reset Content",
    	"206": "Partial Content",
    	"207": "Multi-Status",
    	"208": "Already Reported",
    	"226": "IM Used",
    	"300": "Multiple Choices",
    	"301": "Moved Permanently",
    	"302": "Found",
    	"303": "See Other",
    	"304": "Not Modified",
    	"305": "Use Proxy",
    	"306": "(Unused)",
    	"307": "Temporary Redirect",
    	"308": "Permanent Redirect",
    	"400": "Bad Request",
    	"401": "Unauthorized",
    	"402": "Payment Required",
    	"403": "Forbidden",
    	"404": "Not Found",
    	"405": "Method Not Allowed",
    	"406": "Not Acceptable",
    	"407": "Proxy Authentication Required",
    	"408": "Request Timeout",
    	"409": "Conflict",
    	"410": "Gone",
    	"411": "Length Required",
    	"412": "Precondition Failed",
    	"413": "Payload Too Large",
    	"414": "URI Too Long",
    	"415": "Unsupported Media Type",
    	"416": "Range Not Satisfiable",
    	"417": "Expectation Failed",
    	"418": "I'm a teapot",
    	"421": "Misdirected Request",
    	"422": "Unprocessable Entity",
    	"423": "Locked",
    	"424": "Failed Dependency",
    	"425": "Unordered Collection",
    	"426": "Upgrade Required",
    	"428": "Precondition Required",
    	"429": "Too Many Requests",
    	"431": "Request Header Fields Too Large",
    	"451": "Unavailable For Legal Reasons",
    	"500": "Internal Server Error",
    	"501": "Not Implemented",
    	"502": "Bad Gateway",
    	"503": "Service Unavailable",
    	"504": "Gateway Timeout",
    	"505": "HTTP Version Not Supported",
    	"506": "Variant Also Negotiates",
    	"507": "Insufficient Storage",
    	"508": "Loop Detected",
    	"509": "Bandwidth Limit Exceeded",
    	"510": "Not Extended",
    	"511": "Network Authentication Required"
    };

    /*!
     * statuses
     * Copyright(c) 2014 Jonathan Ong
     * Copyright(c) 2016 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module dependencies.
     * @private
     */



    /**
     * Module exports.
     * @public
     */

    var statuses = status;

    // status code to message map
    status.STATUS_CODES = codes;

    // array of status codes
    status.codes = populateStatusesMap(status, codes);

    // status codes for redirects
    status.redirect = {
      300: true,
      301: true,
      302: true,
      303: true,
      305: true,
      307: true,
      308: true
    };

    // status codes for empty bodies
    status.empty = {
      204: true,
      205: true,
      304: true
    };

    // status codes for when you should retry the request
    status.retry = {
      502: true,
      503: true,
      504: true
    };

    /**
     * Populate the statuses map for given codes.
     * @private
     */

    function populateStatusesMap (statuses, codes) {
      var arr = [];

      Object.keys(codes).forEach(function forEachCode (code) {
        var message = codes[code];
        var status = Number(code);

        // Populate properties
        statuses[status] = message;
        statuses[message] = status;
        statuses[message.toLowerCase()] = status;

        // Add to array
        arr.push(status);
      });

      return arr
    }

    /**
     * Get the status code.
     *
     * Given a number, this will throw if it is not a known status
     * code, otherwise the code will be returned. Given a string,
     * the string will be parsed for a number and return the code
     * if valid, otherwise will lookup the code assuming this is
     * the status message.
     *
     * @param {string|number} code
     * @returns {number}
     * @public
     */

    function status (code) {
      if (typeof code === 'number') {
        if (!status[code]) throw new Error('invalid status code: ' + code)
        return code
      }

      if (typeof code !== 'string') {
        throw new TypeError('code must be a number or string')
      }

      // '403'
      var n = parseInt(code, 10);
      if (!isNaN(n)) {
        if (!status[n]) throw new Error('invalid status code: ' + n)
        return n
      }

      n = status[code.toLowerCase()];
      if (!n) throw new Error('invalid status message: "' + code + '"')
      return n
    }

    /*!
     * destroy
     * Copyright(c) 2014 Jonathan Ong
     * MIT Licensed
     */

    /**
     * Module dependencies.
     * @private
     */

    var ReadStream = fs__default["default"].ReadStream;


    /**
     * Module exports.
     * @public
     */

    var destroy_1 = destroy;

    /**
     * Destroy a stream.
     *
     * @param {object} stream
     * @public
     */

    function destroy(stream) {
      if (stream instanceof ReadStream) {
        return destroyReadStream(stream)
      }

      if (!(stream instanceof Stream__default["default"])) {
        return stream
      }

      if (typeof stream.destroy === 'function') {
        stream.destroy();
      }

      return stream
    }

    /**
     * Destroy a ReadStream.
     *
     * @param {object} stream
     * @private
     */

    function destroyReadStream(stream) {
      stream.destroy();

      if (typeof stream.close === 'function') {
        // node.js core bug work-around
        stream.on('open', onOpenClose);
      }

      return stream
    }

    /**
     * On open handler to close stream.
     * @private
     */

    function onOpenClose() {
      if (typeof this.fd === 'number') {
        // actually close down the fd
        this.close();
      }
    }

    /*!
     * vary
     * Copyright(c) 2014-2017 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module exports.
     */

    var vary_1 = vary;
    var append_1 = append;

    /**
     * RegExp to match field-name in RFC 7230 sec 3.2
     *
     * field-name    = token
     * token         = 1*tchar
     * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
     *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
     *               / DIGIT / ALPHA
     *               ; any VCHAR, except delimiters
     */

    var FIELD_NAME_REGEXP = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;

    /**
     * Append a field to a vary header.
     *
     * @param {String} header
     * @param {String|Array} field
     * @return {String}
     * @public
     */

    function append (header, field) {
      if (typeof header !== 'string') {
        throw new TypeError('header argument is required')
      }

      if (!field) {
        throw new TypeError('field argument is required')
      }

      // get fields array
      var fields = !Array.isArray(field)
        ? parse$5(String(field))
        : field;

      // assert on invalid field names
      for (var j = 0; j < fields.length; j++) {
        if (!FIELD_NAME_REGEXP.test(fields[j])) {
          throw new TypeError('field argument contains an invalid header name')
        }
      }

      // existing, unspecified vary
      if (header === '*') {
        return header
      }

      // enumerate current values
      var val = header;
      var vals = parse$5(header.toLowerCase());

      // unspecified vary
      if (fields.indexOf('*') !== -1 || vals.indexOf('*') !== -1) {
        return '*'
      }

      for (var i = 0; i < fields.length; i++) {
        var fld = fields[i].toLowerCase();

        // append value (case-preserving)
        if (vals.indexOf(fld) === -1) {
          vals.push(fld);
          val = val
            ? val + ', ' + fields[i]
            : fields[i];
        }
      }

      return val
    }

    /**
     * Parse a vary header into an array.
     *
     * @param {String} header
     * @return {Array}
     * @private
     */

    function parse$5 (header) {
      var end = 0;
      var list = [];
      var start = 0;

      // gather tokens
      for (var i = 0, len = header.length; i < len; i++) {
        switch (header.charCodeAt(i)) {
          case 0x20: /*   */
            if (start === end) {
              start = end = i + 1;
            }
            break
          case 0x2c: /* , */
            list.push(header.substring(start, end));
            start = end = i + 1;
            break
          default:
            end = i + 1;
            break
        }
      }

      // final token
      list.push(header.substring(start, end));

      return list
    }

    /**
     * Mark that a request is varied on a header field.
     *
     * @param {Object} res
     * @param {String|Array} field
     * @public
     */

    function vary (res, field) {
      if (!res || !res.getHeader || !res.setHeader) {
        // quack quack
        throw new TypeError('res argument is required')
      }

      // get existing header
      var val = res.getHeader('Vary') || '';
      var header = Array.isArray(val)
        ? val.join(', ')
        : String(val);

      // set new header
      if ((val = append(header, field))) {
        res.setHeader('Vary', val);
      }
    }
    vary_1.append = append_1;

    var only = function(obj, keys){
      obj = obj || {};
      if ('string' == typeof keys) keys = keys.split(/ +/);
      return keys.reduce(function(ret, key){
        if (null == obj[key]) return ret;
        ret[key] = obj[key];
        return ret;
      }, {});
    };

    /*!
     * encodeurl
     * Copyright(c) 2016 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module exports.
     * @public
     */

    var encodeurl = encodeUrl;

    /**
     * RegExp to match non-URL code points, *after* encoding (i.e. not including "%")
     * and including invalid escape sequences.
     * @private
     */

    var ENCODE_CHARS_REGEXP = /(?:[^\x21\x25\x26-\x3B\x3D\x3F-\x5B\x5D\x5F\x61-\x7A\x7E]|%(?:[^0-9A-Fa-f]|[0-9A-Fa-f][^0-9A-Fa-f]|$))+/g;

    /**
     * RegExp to match unmatched surrogate pair.
     * @private
     */

    var UNMATCHED_SURROGATE_PAIR_REGEXP = /(^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]|[\uD800-\uDBFF]([^\uDC00-\uDFFF]|$)/g;

    /**
     * String to replace unmatched surrogate pair with.
     * @private
     */

    var UNMATCHED_SURROGATE_PAIR_REPLACE = '$1\uFFFD$2';

    /**
     * Encode a URL to a percent-encoded form, excluding already-encoded sequences.
     *
     * This function will take an already-encoded URL and encode all the non-URL
     * code points. This function will not encode the "%" character unless it is
     * not part of a valid sequence (`%20` will be left as-is, but `%foo` will
     * be encoded as `%25foo`).
     *
     * This encode is meant to be "safe" and does not throw errors. It will try as
     * hard as it can to properly encode the given URL, including replacing any raw,
     * unpaired surrogate pairs with the Unicode replacement character prior to
     * encoding.
     *
     * @param {string} url
     * @return {string}
     * @public
     */

    function encodeUrl (url) {
      return String(url)
        .replace(UNMATCHED_SURROGATE_PAIR_REGEXP, UNMATCHED_SURROGATE_PAIR_REPLACE)
        .replace(ENCODE_CHARS_REGEXP, encodeURI)
    }

    var response = createCommonjsModule(function (module) {

    /**
     * Module dependencies.
     */





    const typeis = typeIs.is;



    const extname = require$$0__default["default"].extname;






    /**
     * Prototype.
     */

    module.exports = {

      /**
       * Return the request socket.
       *
       * @return {Connection}
       * @api public
       */

      get socket() {
        return this.res.socket;
      },

      /**
       * Return response header.
       *
       * @return {Object}
       * @api public
       */

      get header() {
        const { res } = this;
        return typeof res.getHeaders === 'function'
          ? res.getHeaders()
          : res._headers || {}; // Node < 7.7
      },

      /**
       * Return response header, alias as response.header
       *
       * @return {Object}
       * @api public
       */

      get headers() {
        return this.header;
      },

      /**
       * Get response status code.
       *
       * @return {Number}
       * @api public
       */

      get status() {
        return this.res.statusCode;
      },

      /**
       * Set response status code.
       *
       * @param {Number} code
       * @api public
       */

      set status(code) {
        if (this.headerSent) return;

        assert__default["default"](Number.isInteger(code), 'status code must be a number');
        assert__default["default"](code >= 100 && code <= 999, `invalid status code: ${code}`);
        this._explicitStatus = true;
        this.res.statusCode = code;
        if (this.req.httpVersionMajor < 2) this.res.statusMessage = statuses[code];
        if (this.body && statuses.empty[code]) this.body = null;
      },

      /**
       * Get response status message
       *
       * @return {String}
       * @api public
       */

      get message() {
        return this.res.statusMessage || statuses[this.status];
      },

      /**
       * Set response status message
       *
       * @param {String} msg
       * @api public
       */

      set message(msg) {
        this.res.statusMessage = msg;
      },

      /**
       * Get response body.
       *
       * @return {Mixed}
       * @api public
       */

      get body() {
        return this._body;
      },

      /**
       * Set response body.
       *
       * @param {String|Buffer|Object|Stream} val
       * @api public
       */

      set body(val) {
        const original = this._body;
        this._body = val;

        // no content
        if (null == val) {
          if (!statuses.empty[this.status]) this.status = 204;
          if (val === null) this._explicitNullBody = true;
          this.remove('Content-Type');
          this.remove('Content-Length');
          this.remove('Transfer-Encoding');
          return;
        }

        // set the status
        if (!this._explicitStatus) this.status = 200;

        // set the content-type only if not yet set
        const setType = !this.has('Content-Type');

        // string
        if ('string' === typeof val) {
          if (setType) this.type = /^\s*</.test(val) ? 'html' : 'text';
          this.length = Buffer.byteLength(val);
          return;
        }

        // buffer
        if (Buffer.isBuffer(val)) {
          if (setType) this.type = 'bin';
          this.length = val.length;
          return;
        }

        // stream
        if (val instanceof Stream__default["default"]) {
          onFinished_1(this.res, destroy_1.bind(null, val));
          if (original != val) {
            val.once('error', err => this.ctx.onerror(err));
            // overwriting
            if (null != original) this.remove('Content-Length');
          }

          if (setType) this.type = 'bin';
          return;
        }

        // json
        this.remove('Content-Length');
        this.type = 'json';
      },

      /**
       * Set Content-Length field to `n`.
       *
       * @param {Number} n
       * @api public
       */

      set length(n) {
        if (!this.has('Transfer-Encoding')) {
          this.set('Content-Length', n);
        }
      },

      /**
       * Return parsed response Content-Length when present.
       *
       * @return {Number}
       * @api public
       */

      get length() {
        if (this.has('Content-Length')) {
          return parseInt(this.get('Content-Length'), 10) || 0;
        }

        const { body } = this;
        if (!body || body instanceof Stream__default["default"]) return undefined;
        if ('string' === typeof body) return Buffer.byteLength(body);
        if (Buffer.isBuffer(body)) return body.length;
        return Buffer.byteLength(JSON.stringify(body));
      },

      /**
       * Check if a header has been written to the socket.
       *
       * @return {Boolean}
       * @api public
       */

      get headerSent() {
        return this.res.headersSent;
      },

      /**
       * Vary on `field`.
       *
       * @param {String} field
       * @api public
       */

      vary(field) {
        if (this.headerSent) return;

        vary_1(this.res, field);
      },

      /**
       * Perform a 302 redirect to `url`.
       *
       * The string "back" is special-cased
       * to provide Referrer support, when Referrer
       * is not present `alt` or "/" is used.
       *
       * Examples:
       *
       *    this.redirect('back');
       *    this.redirect('back', '/index.html');
       *    this.redirect('/login');
       *    this.redirect('http://google.com');
       *
       * @param {String} url
       * @param {String} [alt]
       * @api public
       */

      redirect(url, alt) {
        // location
        if ('back' === url) url = this.ctx.get('Referrer') || alt || '/';
        this.set('Location', encodeurl(url));

        // status
        if (!statuses.redirect[this.status]) this.status = 302;

        // html
        if (this.ctx.accepts('html')) {
          url = escapeHtml_1(url);
          this.type = 'text/html; charset=utf-8';
          this.body = `Redirecting to <a href="${url}">${url}</a>.`;
          return;
        }

        // text
        this.type = 'text/plain; charset=utf-8';
        this.body = `Redirecting to ${url}.`;
      },

      /**
       * Set Content-Disposition header to "attachment" with optional `filename`.
       *
       * @param {String} filename
       * @api public
       */

      attachment(filename, options) {
        if (filename) this.type = extname(filename);
        this.set('Content-Disposition', contentDisposition_1(filename, options));
      },

      /**
       * Set Content-Type response header with `type` through `mime.lookup()`
       * when it does not contain a charset.
       *
       * Examples:
       *
       *     this.type = '.html';
       *     this.type = 'html';
       *     this.type = 'json';
       *     this.type = 'application/json';
       *     this.type = 'png';
       *
       * @param {String} type
       * @api public
       */

      set type(type) {
        type = cacheContentType(type);
        if (type) {
          this.set('Content-Type', type);
        } else {
          this.remove('Content-Type');
        }
      },

      /**
       * Set the Last-Modified date using a string or a Date.
       *
       *     this.response.lastModified = new Date();
       *     this.response.lastModified = '2013-09-13';
       *
       * @param {String|Date} type
       * @api public
       */

      set lastModified(val) {
        if ('string' === typeof val) val = new Date(val);
        this.set('Last-Modified', val.toUTCString());
      },

      /**
       * Get the Last-Modified date in Date form, if it exists.
       *
       * @return {Date}
       * @api public
       */

      get lastModified() {
        const date = this.get('last-modified');
        if (date) return new Date(date);
      },

      /**
       * Set the ETag of a response.
       * This will normalize the quotes if necessary.
       *
       *     this.response.etag = 'md5hashsum';
       *     this.response.etag = '"md5hashsum"';
       *     this.response.etag = 'W/"123456789"';
       *
       * @param {String} etag
       * @api public
       */

      set etag(val) {
        if (!/^(W\/)?"/.test(val)) val = `"${val}"`;
        this.set('ETag', val);
      },

      /**
       * Get the ETag of a response.
       *
       * @return {String}
       * @api public
       */

      get etag() {
        return this.get('ETag');
      },

      /**
       * Return the response mime type void of
       * parameters such as "charset".
       *
       * @return {String}
       * @api public
       */

      get type() {
        const type = this.get('Content-Type');
        if (!type) return '';
        return type.split(';', 1)[0];
      },

      /**
       * Check whether the response is one of the listed types.
       * Pretty much the same as `this.request.is()`.
       *
       * @param {String|String[]} [type]
       * @param {String[]} [types]
       * @return {String|false}
       * @api public
       */

      is(type, ...types) {
        return typeis(this.type, type, ...types);
      },

      /**
       * Return response header.
       *
       * Examples:
       *
       *     this.get('Content-Type');
       *     // => "text/plain"
       *
       *     this.get('content-type');
       *     // => "text/plain"
       *
       * @param {String} field
       * @return {String}
       * @api public
       */

      get(field) {
        return this.header[field.toLowerCase()] || '';
      },

      /**
       * Returns true if the header identified by name is currently set in the outgoing headers.
       * The header name matching is case-insensitive.
       *
       * Examples:
       *
       *     this.has('Content-Type');
       *     // => true
       *
       *     this.get('content-type');
       *     // => true
       *
       * @param {String} field
       * @return {boolean}
       * @api public
       */

      has(field) {
        return typeof this.res.hasHeader === 'function'
          ? this.res.hasHeader(field)
          // Node < 7.7
          : field.toLowerCase() in this.headers;
      },

      /**
       * Set header `field` to `val` or pass
       * an object of header fields.
       *
       * Examples:
       *
       *    this.set('Foo', ['bar', 'baz']);
       *    this.set('Accept', 'application/json');
       *    this.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });
       *
       * @param {String|Object|Array} field
       * @param {String} val
       * @api public
       */

      set(field, val) {
        if (this.headerSent) return;

        if (2 === arguments.length) {
          if (Array.isArray(val)) val = val.map(v => typeof v === 'string' ? v : String(v));
          else if (typeof val !== 'string') val = String(val);
          this.res.setHeader(field, val);
        } else {
          for (const key in field) {
            this.set(key, field[key]);
          }
        }
      },

      /**
       * Append additional header `field` with value `val`.
       *
       * Examples:
       *
       * ```
       * this.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
       * this.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
       * this.append('Warning', '199 Miscellaneous warning');
       * ```
       *
       * @param {String} field
       * @param {String|Array} val
       * @api public
       */

      append(field, val) {
        const prev = this.get(field);

        if (prev) {
          val = Array.isArray(prev)
            ? prev.concat(val)
            : [prev].concat(val);
        }

        return this.set(field, val);
      },

      /**
       * Remove header `field`.
       *
       * @param {String} name
       * @api public
       */

      remove(field) {
        if (this.headerSent) return;

        this.res.removeHeader(field);
      },

      /**
       * Checks if the request is writable.
       * Tests for the existence of the socket
       * as node sometimes does not set it.
       *
       * @return {Boolean}
       * @api private
       */

      get writable() {
        // can't write any more after response finished
        // response.writableEnded is available since Node > 12.9
        // https://nodejs.org/api/http.html#http_response_writableended
        // response.finished is undocumented feature of previous Node versions
        // https://stackoverflow.com/questions/16254385/undocumented-response-finished-in-node-js
        if (this.res.writableEnded || this.res.finished) return false;

        const socket = this.res.socket;
        // There are already pending outgoing res, but still writable
        // https://github.com/nodejs/node/blob/v4.4.7/lib/_http_server.js#L486
        if (!socket) return true;
        return socket.writable;
      },

      /**
       * Inspect implementation.
       *
       * @return {Object}
       * @api public
       */

      inspect() {
        if (!this.res) return;
        const o = this.toJSON();
        o.body = this.body;
        return o;
      },

      /**
       * Return JSON representation.
       *
       * @return {Object}
       * @api public
       */

      toJSON() {
        return only(this, [
          'status',
          'message',
          'header'
        ]);
      },

      /**
       * Flush any set headers and begin the body
       */

      flushHeaders() {
        this.res.flushHeaders();
      }
    };

    /**
     * Custom inspection implementation for node 6+.
     *
     * @return {Object}
     * @api public
     */

    /* istanbul ignore else */
    if (util__default["default"].inspect.custom) {
      module.exports[util__default["default"].inspect.custom] = module.exports.inspect;
    }
    });

    /**
     * Expose compositor.
     */

    var koaCompose = compose;

    /**
     * Compose `middleware` returning
     * a fully valid middleware comprised
     * of all those which are passed.
     *
     * @param {Array} middleware
     * @return {Function}
     * @api public
     */

    function compose (middleware) {
      if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!')
      for (const fn of middleware) {
        if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')
      }

      /**
       * @param {Object} context
       * @return {Promise}
       * @api public
       */

      return function (context, next) {
        // last called middleware #
        let index = -1;
        return dispatch(0)
        function dispatch (i) {
          if (i <= index) return Promise.reject(new Error('next() called multiple times'))
          index = i;
          let fn = middleware[i];
          if (i === middleware.length) fn = next;
          if (!fn) return Promise.resolve()
          try {
            return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
          } catch (err) {
            return Promise.reject(err)
          }
        }
      }
    }

    /*!
     * depd
     * Copyright(c) 2014 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module exports.
     */

    var callsiteTostring$1 = callSiteToString$3;

    /**
     * Format a CallSite file location to a string.
     */

    function callSiteFileLocation$1 (callSite) {
      var fileName;
      var fileLocation = '';

      if (callSite.isNative()) {
        fileLocation = 'native';
      } else if (callSite.isEval()) {
        fileName = callSite.getScriptNameOrSourceURL();
        if (!fileName) {
          fileLocation = callSite.getEvalOrigin();
        }
      } else {
        fileName = callSite.getFileName();
      }

      if (fileName) {
        fileLocation += fileName;

        var lineNumber = callSite.getLineNumber();
        if (lineNumber != null) {
          fileLocation += ':' + lineNumber;

          var columnNumber = callSite.getColumnNumber();
          if (columnNumber) {
            fileLocation += ':' + columnNumber;
          }
        }
      }

      return fileLocation || 'unknown source'
    }

    /**
     * Format a CallSite to a string.
     */

    function callSiteToString$3 (callSite) {
      var addSuffix = true;
      var fileLocation = callSiteFileLocation$1(callSite);
      var functionName = callSite.getFunctionName();
      var isConstructor = callSite.isConstructor();
      var isMethodCall = !(callSite.isToplevel() || isConstructor);
      var line = '';

      if (isMethodCall) {
        var methodName = callSite.getMethodName();
        var typeName = getConstructorName$1(callSite);

        if (functionName) {
          if (typeName && functionName.indexOf(typeName) !== 0) {
            line += typeName + '.';
          }

          line += functionName;

          if (methodName && functionName.lastIndexOf('.' + methodName) !== functionName.length - methodName.length - 1) {
            line += ' [as ' + methodName + ']';
          }
        } else {
          line += typeName + '.' + (methodName || '<anonymous>');
        }
      } else if (isConstructor) {
        line += 'new ' + (functionName || '<anonymous>');
      } else if (functionName) {
        line += functionName;
      } else {
        addSuffix = false;
        line += fileLocation;
      }

      if (addSuffix) {
        line += ' (' + fileLocation + ')';
      }

      return line
    }

    /**
     * Get constructor name of reviver.
     */

    function getConstructorName$1 (obj) {
      var receiver = obj.receiver;
      return (receiver.constructor && receiver.constructor.name) || null
    }

    /*!
     * depd
     * Copyright(c) 2015 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module exports.
     * @public
     */

    var eventListenerCount_1$1 = eventListenerCount$3;

    /**
     * Get the count of listeners on an event emitter of a specific type.
     */

    function eventListenerCount$3 (emitter, type) {
      return emitter.listeners(type).length
    }

    /*!
     * depd
     * Copyright(c) 2014-2015 Douglas Christopher Wilson
     * MIT Licensed
     */

    var compat$1 = createCommonjsModule(function (module) {

    /**
     * Module dependencies.
     * @private
     */

    var EventEmitter = require$$0__default$1["default"].EventEmitter;

    /**
     * Module exports.
     * @public
     */

    lazyProperty(module.exports, 'callSiteToString', function callSiteToString () {
      var limit = Error.stackTraceLimit;
      var obj = {};
      var prep = Error.prepareStackTrace;

      function prepareObjectStackTrace (obj, stack) {
        return stack
      }

      Error.prepareStackTrace = prepareObjectStackTrace;
      Error.stackTraceLimit = 2;

      // capture the stack
      Error.captureStackTrace(obj);

      // slice the stack
      var stack = obj.stack.slice();

      Error.prepareStackTrace = prep;
      Error.stackTraceLimit = limit;

      return stack[0].toString ? toString : callsiteTostring$1
    });

    lazyProperty(module.exports, 'eventListenerCount', function eventListenerCount () {
      return EventEmitter.listenerCount || eventListenerCount_1$1
    });

    /**
     * Define a lazy property.
     */

    function lazyProperty (obj, prop, getter) {
      function get () {
        var val = getter();

        Object.defineProperty(obj, prop, {
          configurable: true,
          enumerable: true,
          value: val
        });

        return val
      }

      Object.defineProperty(obj, prop, {
        configurable: true,
        enumerable: true,
        get: get
      });
    }

    /**
     * Call toString() on the obj
     */

    function toString (obj) {
      return obj.toString()
    }
    });

    /*!
     * depd
     * Copyright(c) 2014-2017 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module dependencies.
     */

    var callSiteToString$2 = compat$1.callSiteToString;
    var eventListenerCount$2 = compat$1.eventListenerCount;
    var relative$2 = require$$0__default["default"].relative;

    /**
     * Module exports.
     */

    var depd_1$2 = depd$2;

    /**
     * Get the path to base files on.
     */

    var basePath$2 = process.cwd();

    /**
     * Determine if namespace is contained in the string.
     */

    function containsNamespace$2 (str, namespace) {
      var vals = str.split(/[ ,]+/);
      var ns = String(namespace).toLowerCase();

      for (var i = 0; i < vals.length; i++) {
        var val = vals[i];

        // namespace contained
        if (val && (val === '*' || val.toLowerCase() === ns)) {
          return true
        }
      }

      return false
    }

    /**
     * Convert a data descriptor to accessor descriptor.
     */

    function convertDataDescriptorToAccessor$2 (obj, prop, message) {
      var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
      var value = descriptor.value;

      descriptor.get = function getter () { return value };

      if (descriptor.writable) {
        descriptor.set = function setter (val) { return (value = val) };
      }

      delete descriptor.value;
      delete descriptor.writable;

      Object.defineProperty(obj, prop, descriptor);

      return descriptor
    }

    /**
     * Create arguments string to keep arity.
     */

    function createArgumentsString$2 (arity) {
      var str = '';

      for (var i = 0; i < arity; i++) {
        str += ', arg' + i;
      }

      return str.substr(2)
    }

    /**
     * Create stack string from stack.
     */

    function createStackString$2 (stack) {
      var str = this.name + ': ' + this.namespace;

      if (this.message) {
        str += ' deprecated ' + this.message;
      }

      for (var i = 0; i < stack.length; i++) {
        str += '\n    at ' + callSiteToString$2(stack[i]);
      }

      return str
    }

    /**
     * Create deprecate for namespace in caller.
     */

    function depd$2 (namespace) {
      if (!namespace) {
        throw new TypeError('argument namespace is required')
      }

      var stack = getStack$2();
      var site = callSiteLocation$2(stack[1]);
      var file = site[0];

      function deprecate (message) {
        // call to self as log
        log$2.call(deprecate, message);
      }

      deprecate._file = file;
      deprecate._ignored = isignored$2(namespace);
      deprecate._namespace = namespace;
      deprecate._traced = istraced$2(namespace);
      deprecate._warned = Object.create(null);

      deprecate.function = wrapfunction$2;
      deprecate.property = wrapproperty$2;

      return deprecate
    }

    /**
     * Determine if namespace is ignored.
     */

    function isignored$2 (namespace) {
      /* istanbul ignore next: tested in a child processs */
      if (process.noDeprecation) {
        // --no-deprecation support
        return true
      }

      var str = process.env.NO_DEPRECATION || '';

      // namespace ignored
      return containsNamespace$2(str, namespace)
    }

    /**
     * Determine if namespace is traced.
     */

    function istraced$2 (namespace) {
      /* istanbul ignore next: tested in a child processs */
      if (process.traceDeprecation) {
        // --trace-deprecation support
        return true
      }

      var str = process.env.TRACE_DEPRECATION || '';

      // namespace traced
      return containsNamespace$2(str, namespace)
    }

    /**
     * Display deprecation message.
     */

    function log$2 (message, site) {
      var haslisteners = eventListenerCount$2(process, 'deprecation') !== 0;

      // abort early if no destination
      if (!haslisteners && this._ignored) {
        return
      }

      var caller;
      var callFile;
      var callSite;
      var depSite;
      var i = 0;
      var seen = false;
      var stack = getStack$2();
      var file = this._file;

      if (site) {
        // provided site
        depSite = site;
        callSite = callSiteLocation$2(stack[1]);
        callSite.name = depSite.name;
        file = callSite[0];
      } else {
        // get call site
        i = 2;
        depSite = callSiteLocation$2(stack[i]);
        callSite = depSite;
      }

      // get caller of deprecated thing in relation to file
      for (; i < stack.length; i++) {
        caller = callSiteLocation$2(stack[i]);
        callFile = caller[0];

        if (callFile === file) {
          seen = true;
        } else if (callFile === this._file) {
          file = this._file;
        } else if (seen) {
          break
        }
      }

      var key = caller
        ? depSite.join(':') + '__' + caller.join(':')
        : undefined;

      if (key !== undefined && key in this._warned) {
        // already warned
        return
      }

      this._warned[key] = true;

      // generate automatic message from call site
      var msg = message;
      if (!msg) {
        msg = callSite === depSite || !callSite.name
          ? defaultMessage$2(depSite)
          : defaultMessage$2(callSite);
      }

      // emit deprecation if listeners exist
      if (haslisteners) {
        var err = DeprecationError$2(this._namespace, msg, stack.slice(i));
        process.emit('deprecation', err);
        return
      }

      // format and write message
      var format = process.stderr.isTTY
        ? formatColor$2
        : formatPlain$2;
      var output = format.call(this, msg, caller, stack.slice(i));
      process.stderr.write(output + '\n', 'utf8');
    }

    /**
     * Get call site location as array.
     */

    function callSiteLocation$2 (callSite) {
      var file = callSite.getFileName() || '<anonymous>';
      var line = callSite.getLineNumber();
      var colm = callSite.getColumnNumber();

      if (callSite.isEval()) {
        file = callSite.getEvalOrigin() + ', ' + file;
      }

      var site = [file, line, colm];

      site.callSite = callSite;
      site.name = callSite.getFunctionName();

      return site
    }

    /**
     * Generate a default message from the site.
     */

    function defaultMessage$2 (site) {
      var callSite = site.callSite;
      var funcName = site.name;

      // make useful anonymous name
      if (!funcName) {
        funcName = '<anonymous@' + formatLocation$2(site) + '>';
      }

      var context = callSite.getThis();
      var typeName = context && callSite.getTypeName();

      // ignore useless type name
      if (typeName === 'Object') {
        typeName = undefined;
      }

      // make useful type name
      if (typeName === 'Function') {
        typeName = context.name || typeName;
      }

      return typeName && callSite.getMethodName()
        ? typeName + '.' + funcName
        : funcName
    }

    /**
     * Format deprecation message without color.
     */

    function formatPlain$2 (msg, caller, stack) {
      var timestamp = new Date().toUTCString();

      var formatted = timestamp +
        ' ' + this._namespace +
        ' deprecated ' + msg;

      // add stack trace
      if (this._traced) {
        for (var i = 0; i < stack.length; i++) {
          formatted += '\n    at ' + callSiteToString$2(stack[i]);
        }

        return formatted
      }

      if (caller) {
        formatted += ' at ' + formatLocation$2(caller);
      }

      return formatted
    }

    /**
     * Format deprecation message with color.
     */

    function formatColor$2 (msg, caller, stack) {
      var formatted = '\x1b[36;1m' + this._namespace + '\x1b[22;39m' + // bold cyan
        ' \x1b[33;1mdeprecated\x1b[22;39m' + // bold yellow
        ' \x1b[0m' + msg + '\x1b[39m'; // reset

      // add stack trace
      if (this._traced) {
        for (var i = 0; i < stack.length; i++) {
          formatted += '\n    \x1b[36mat ' + callSiteToString$2(stack[i]) + '\x1b[39m'; // cyan
        }

        return formatted
      }

      if (caller) {
        formatted += ' \x1b[36m' + formatLocation$2(caller) + '\x1b[39m'; // cyan
      }

      return formatted
    }

    /**
     * Format call site location.
     */

    function formatLocation$2 (callSite) {
      return relative$2(basePath$2, callSite[0]) +
        ':' + callSite[1] +
        ':' + callSite[2]
    }

    /**
     * Get the stack as array of call sites.
     */

    function getStack$2 () {
      var limit = Error.stackTraceLimit;
      var obj = {};
      var prep = Error.prepareStackTrace;

      Error.prepareStackTrace = prepareObjectStackTrace$2;
      Error.stackTraceLimit = Math.max(10, limit);

      // capture the stack
      Error.captureStackTrace(obj);

      // slice this function off the top
      var stack = obj.stack.slice(1);

      Error.prepareStackTrace = prep;
      Error.stackTraceLimit = limit;

      return stack
    }

    /**
     * Capture call site stack from v8.
     */

    function prepareObjectStackTrace$2 (obj, stack) {
      return stack
    }

    /**
     * Return a wrapped function in a deprecation message.
     */

    function wrapfunction$2 (fn, message) {
      if (typeof fn !== 'function') {
        throw new TypeError('argument fn must be a function')
      }

      var args = createArgumentsString$2(fn.length);
      var stack = getStack$2();
      var site = callSiteLocation$2(stack[1]);

      site.name = fn.name;

       // eslint-disable-next-line no-eval
      var deprecatedfn = eval('(function (' + args + ') {\n' +
        '"use strict"\n' +
        'log.call(deprecate, message, site)\n' +
        'return fn.apply(this, arguments)\n' +
        '})');

      return deprecatedfn
    }

    /**
     * Wrap property in a deprecation message.
     */

    function wrapproperty$2 (obj, prop, message) {
      if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
        throw new TypeError('argument obj must be object')
      }

      var descriptor = Object.getOwnPropertyDescriptor(obj, prop);

      if (!descriptor) {
        throw new TypeError('must call property on owner object')
      }

      if (!descriptor.configurable) {
        throw new TypeError('property must be configurable')
      }

      var deprecate = this;
      var stack = getStack$2();
      var site = callSiteLocation$2(stack[1]);

      // set site name
      site.name = prop;

      // convert data descriptor
      if ('value' in descriptor) {
        descriptor = convertDataDescriptorToAccessor$2(obj, prop);
      }

      var get = descriptor.get;
      var set = descriptor.set;

      // wrap getter
      if (typeof get === 'function') {
        descriptor.get = function getter () {
          log$2.call(deprecate, message, site);
          return get.apply(this, arguments)
        };
      }

      // wrap setter
      if (typeof set === 'function') {
        descriptor.set = function setter () {
          log$2.call(deprecate, message, site);
          return set.apply(this, arguments)
        };
      }

      Object.defineProperty(obj, prop, descriptor);
    }

    /**
     * Create DeprecationError for deprecation
     */

    function DeprecationError$2 (namespace, message, stack) {
      var error = new Error();
      var stackString;

      Object.defineProperty(error, 'constructor', {
        value: DeprecationError$2
      });

      Object.defineProperty(error, 'message', {
        configurable: true,
        enumerable: false,
        value: message,
        writable: true
      });

      Object.defineProperty(error, 'name', {
        enumerable: false,
        configurable: true,
        value: 'DeprecationError',
        writable: true
      });

      Object.defineProperty(error, 'namespace', {
        configurable: true,
        enumerable: false,
        value: namespace,
        writable: true
      });

      Object.defineProperty(error, 'stack', {
        configurable: true,
        enumerable: false,
        get: function () {
          if (stackString !== undefined) {
            return stackString
          }

          // prepare stack trace
          return (stackString = createStackString$2.call(this, stack))
        },
        set: function setter (val) {
          stackString = val;
        }
      });

      return error
    }

    /* eslint no-proto: 0 */
    var setprototypeof$1 = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf$1 : mixinProperties$1);

    function setProtoOf$1 (obj, proto) {
      obj.__proto__ = proto;
      return obj
    }

    function mixinProperties$1 (obj, proto) {
      for (var prop in proto) {
        if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
          obj[prop] = proto[prop];
        }
      }
      return obj
    }

    var inherits_browser$1 = createCommonjsModule(function (module) {
    if (typeof Object.create === 'function') {
      // implementation from standard node.js 'util' module
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      // old school shim for old browsers
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function () {};
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
    });

    var inherits$1 = createCommonjsModule(function (module) {
    try {
      var util = util__default["default"];
      /* istanbul ignore next */
      if (typeof util.inherits !== 'function') throw '';
      module.exports = util.inherits;
    } catch (e) {
      /* istanbul ignore next */
      module.exports = inherits_browser$1;
    }
    });

    /*!
     * toidentifier
     * Copyright(c) 2016 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module exports.
     * @public
     */

    var toidentifier = toIdentifier;

    /**
     * Trasform the given string into a JavaScript identifier
     *
     * @param {string} str
     * @returns {string}
     * @public
     */

    function toIdentifier (str) {
      return str
        .split(' ')
        .map(function (token) {
          return token.slice(0, 1).toUpperCase() + token.slice(1)
        })
        .join('')
        .replace(/[^ _0-9a-z]/gi, '')
    }

    /*!
     * http-errors
     * Copyright(c) 2014 Jonathan Ong
     * Copyright(c) 2016 Douglas Christopher Wilson
     * MIT Licensed
     */

    var httpErrors$1 = createCommonjsModule(function (module) {

    /**
     * Module dependencies.
     * @private
     */

    var deprecate = depd_1$2('http-errors');





    /**
     * Module exports.
     * @public
     */

    module.exports = createError;
    module.exports.HttpError = createHttpErrorConstructor();
    module.exports.isHttpError = createIsHttpErrorFunction(module.exports.HttpError);

    // Populate exports for all constructors
    populateConstructorExports(module.exports, statuses.codes, module.exports.HttpError);

    /**
     * Get the code class of a status code.
     * @private
     */

    function codeClass (status) {
      return Number(String(status).charAt(0) + '00')
    }

    /**
     * Create a new HTTP Error.
     *
     * @returns {Error}
     * @public
     */

    function createError () {
      // so much arity going on ~_~
      var err;
      var msg;
      var status = 500;
      var props = {};
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg instanceof Error) {
          err = arg;
          status = err.status || err.statusCode || status;
          continue
        }
        switch (typeof arg) {
          case 'string':
            msg = arg;
            break
          case 'number':
            status = arg;
            if (i !== 0) {
              deprecate('non-first-argument status code; replace with createError(' + arg + ', ...)');
            }
            break
          case 'object':
            props = arg;
            break
        }
      }

      if (typeof status === 'number' && (status < 400 || status >= 600)) {
        deprecate('non-error status code; use only 4xx or 5xx status codes');
      }

      if (typeof status !== 'number' ||
        (!statuses[status] && (status < 400 || status >= 600))) {
        status = 500;
      }

      // constructor
      var HttpError = createError[status] || createError[codeClass(status)];

      if (!err) {
        // create error
        err = HttpError
          ? new HttpError(msg)
          : new Error(msg || statuses[status]);
        Error.captureStackTrace(err, createError);
      }

      if (!HttpError || !(err instanceof HttpError) || err.status !== status) {
        // add properties to generic error
        err.expose = status < 500;
        err.status = err.statusCode = status;
      }

      for (var key in props) {
        if (key !== 'status' && key !== 'statusCode') {
          err[key] = props[key];
        }
      }

      return err
    }

    /**
     * Create HTTP error abstract base class.
     * @private
     */

    function createHttpErrorConstructor () {
      function HttpError () {
        throw new TypeError('cannot construct abstract class')
      }

      inherits$1(HttpError, Error);

      return HttpError
    }

    /**
     * Create a constructor for a client error.
     * @private
     */

    function createClientErrorConstructor (HttpError, name, code) {
      var className = toClassName(name);

      function ClientError (message) {
        // create the error object
        var msg = message != null ? message : statuses[code];
        var err = new Error(msg);

        // capture a stack trace to the construction point
        Error.captureStackTrace(err, ClientError);

        // adjust the [[Prototype]]
        setprototypeof$1(err, ClientError.prototype);

        // redefine the error message
        Object.defineProperty(err, 'message', {
          enumerable: true,
          configurable: true,
          value: msg,
          writable: true
        });

        // redefine the error name
        Object.defineProperty(err, 'name', {
          enumerable: false,
          configurable: true,
          value: className,
          writable: true
        });

        return err
      }

      inherits$1(ClientError, HttpError);
      nameFunc(ClientError, className);

      ClientError.prototype.status = code;
      ClientError.prototype.statusCode = code;
      ClientError.prototype.expose = true;

      return ClientError
    }

    /**
     * Create function to test is a value is a HttpError.
     * @private
     */

    function createIsHttpErrorFunction (HttpError) {
      return function isHttpError (val) {
        if (!val || typeof val !== 'object') {
          return false
        }

        if (val instanceof HttpError) {
          return true
        }

        return val instanceof Error &&
          typeof val.expose === 'boolean' &&
          typeof val.statusCode === 'number' && val.status === val.statusCode
      }
    }

    /**
     * Create a constructor for a server error.
     * @private
     */

    function createServerErrorConstructor (HttpError, name, code) {
      var className = toClassName(name);

      function ServerError (message) {
        // create the error object
        var msg = message != null ? message : statuses[code];
        var err = new Error(msg);

        // capture a stack trace to the construction point
        Error.captureStackTrace(err, ServerError);

        // adjust the [[Prototype]]
        setprototypeof$1(err, ServerError.prototype);

        // redefine the error message
        Object.defineProperty(err, 'message', {
          enumerable: true,
          configurable: true,
          value: msg,
          writable: true
        });

        // redefine the error name
        Object.defineProperty(err, 'name', {
          enumerable: false,
          configurable: true,
          value: className,
          writable: true
        });

        return err
      }

      inherits$1(ServerError, HttpError);
      nameFunc(ServerError, className);

      ServerError.prototype.status = code;
      ServerError.prototype.statusCode = code;
      ServerError.prototype.expose = false;

      return ServerError
    }

    /**
     * Set the name of a function, if possible.
     * @private
     */

    function nameFunc (func, name) {
      var desc = Object.getOwnPropertyDescriptor(func, 'name');

      if (desc && desc.configurable) {
        desc.value = name;
        Object.defineProperty(func, 'name', desc);
      }
    }

    /**
     * Populate the exports object with constructors for every error class.
     * @private
     */

    function populateConstructorExports (exports, codes, HttpError) {
      codes.forEach(function forEachCode (code) {
        var CodeError;
        var name = toidentifier(statuses[code]);

        switch (codeClass(code)) {
          case 400:
            CodeError = createClientErrorConstructor(HttpError, name, code);
            break
          case 500:
            CodeError = createServerErrorConstructor(HttpError, name, code);
            break
        }

        if (CodeError) {
          // export the constructor
          exports[code] = CodeError;
          exports[name] = CodeError;
        }
      });

      // backwards-compatibility
      exports["I'mateapot"] = deprecate.function(exports.ImATeapot,
        '"I\'mateapot"; use "ImATeapot" instead');
    }

    /**
     * Get a class name from a name identifier.
     * @private
     */

    function toClassName (name) {
      return name.substr(-5) !== 'Error'
        ? name + 'Error'
        : name
    }
    });

    var keys = createCommonjsModule(function (module, exports) {
    exports = module.exports = typeof Object.keys === 'function'
      ? Object.keys : shim;

    exports.shim = shim;
    function shim (obj) {
      var keys = [];
      for (var key in obj) keys.push(key);
      return keys;
    }
    });

    var is_arguments = createCommonjsModule(function (module, exports) {
    var supportsArgumentsClass = (function(){
      return Object.prototype.toString.call(arguments)
    })() == '[object Arguments]';

    exports = module.exports = supportsArgumentsClass ? supported : unsupported;

    exports.supported = supported;
    function supported(object) {
      return Object.prototype.toString.call(object) == '[object Arguments]';
    }
    exports.unsupported = unsupported;
    function unsupported(object){
      return object &&
        typeof object == 'object' &&
        typeof object.length == 'number' &&
        Object.prototype.hasOwnProperty.call(object, 'callee') &&
        !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
        false;
    }});

    var deepEqual_1 = createCommonjsModule(function (module) {
    var pSlice = Array.prototype.slice;



    var deepEqual = module.exports = function (actual, expected, opts) {
      if (!opts) opts = {};
      // 7.1. All identical values are equivalent, as determined by ===.
      if (actual === expected) {
        return true;

      } else if (actual instanceof Date && expected instanceof Date) {
        return actual.getTime() === expected.getTime();

      // 7.3. Other pairs that do not both pass typeof value == 'object',
      // equivalence is determined by ==.
      } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
        return opts.strict ? actual === expected : actual == expected;

      // 7.4. For all other Object pairs, including Array objects, equivalence is
      // determined by having the same number of owned properties (as verified
      // with Object.prototype.hasOwnProperty.call), the same set of keys
      // (although not necessarily the same order), equivalent values for every
      // corresponding key, and an identical 'prototype' property. Note: this
      // accounts for both named and indexed properties on Arrays.
      } else {
        return objEquiv(actual, expected, opts);
      }
    };

    function isUndefinedOrNull(value) {
      return value === null || value === undefined;
    }

    function isBuffer (x) {
      if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
      if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
        return false;
      }
      if (x.length > 0 && typeof x[0] !== 'number') return false;
      return true;
    }

    function objEquiv(a, b, opts) {
      var i, key;
      if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
        return false;
      // an identical 'prototype' property.
      if (a.prototype !== b.prototype) return false;
      //~~~I've managed to break Object.keys through screwy arguments passing.
      //   Converting to array solves the problem.
      if (is_arguments(a)) {
        if (!is_arguments(b)) {
          return false;
        }
        a = pSlice.call(a);
        b = pSlice.call(b);
        return deepEqual(a, b, opts);
      }
      if (isBuffer(a)) {
        if (!isBuffer(b)) {
          return false;
        }
        if (a.length !== b.length) return false;
        for (i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) return false;
        }
        return true;
      }
      try {
        var ka = keys(a),
            kb = keys(b);
      } catch (e) {//happens when one is a string literal and the other isn't
        return false;
      }
      // having the same number of owned properties (keys incorporates
      // hasOwnProperty)
      if (ka.length != kb.length)
        return false;
      //the same set of keys (although not necessarily the same order),
      ka.sort();
      kb.sort();
      //~~~cheap key test
      for (i = ka.length - 1; i >= 0; i--) {
        if (ka[i] != kb[i])
          return false;
      }
      //equivalent values for every corresponding key, and
      //~~~possibly expensive deep test
      for (i = ka.length - 1; i >= 0; i--) {
        key = ka[i];
        if (!deepEqual(a[key], b[key], opts)) return false;
      }
      return typeof a === typeof b;
    }
    });

    var httpAssert = assert;

    function assert (value, status, msg, opts) {
      if (value) return
      throw httpErrors$1(status, msg, opts)
    }

    assert.fail = function (status, msg, opts) {
      assert(false, status, msg, opts);
    };

    assert.equal = function (a, b, status, msg, opts) {
      assert(a == b, status, msg, opts); // eslint-disable-line eqeqeq
    };

    assert.notEqual = function (a, b, status, msg, opts) {
      assert(a != b, status, msg, opts); // eslint-disable-line eqeqeq
    };

    assert.ok = function (value, status, msg, opts) {
      assert(value, status, msg, opts);
    };

    assert.strictEqual = function (a, b, status, msg, opts) {
      assert(a === b, status, msg, opts);
    };

    assert.notStrictEqual = function (a, b, status, msg, opts) {
      assert(a !== b, status, msg, opts);
    };

    assert.deepEqual = function (a, b, status, msg, opts) {
      assert(deepEqual_1(a, b), status, msg, opts);
    };

    assert.notDeepEqual = function (a, b, status, msg, opts) {
      assert(!deepEqual_1(a, b), status, msg, opts);
    };

    /**
     * Expose `Delegator`.
     */

    var delegates = Delegator;

    /**
     * Initialize a delegator.
     *
     * @param {Object} proto
     * @param {String} target
     * @api public
     */

    function Delegator(proto, target) {
      if (!(this instanceof Delegator)) return new Delegator(proto, target);
      this.proto = proto;
      this.target = target;
      this.methods = [];
      this.getters = [];
      this.setters = [];
      this.fluents = [];
    }

    /**
     * Delegate method `name`.
     *
     * @param {String} name
     * @return {Delegator} self
     * @api public
     */

    Delegator.prototype.method = function(name){
      var proto = this.proto;
      var target = this.target;
      this.methods.push(name);

      proto[name] = function(){
        return this[target][name].apply(this[target], arguments);
      };

      return this;
    };

    /**
     * Delegator accessor `name`.
     *
     * @param {String} name
     * @return {Delegator} self
     * @api public
     */

    Delegator.prototype.access = function(name){
      return this.getter(name).setter(name);
    };

    /**
     * Delegator getter `name`.
     *
     * @param {String} name
     * @return {Delegator} self
     * @api public
     */

    Delegator.prototype.getter = function(name){
      var proto = this.proto;
      var target = this.target;
      this.getters.push(name);

      proto.__defineGetter__(name, function(){
        return this[target][name];
      });

      return this;
    };

    /**
     * Delegator setter `name`.
     *
     * @param {String} name
     * @return {Delegator} self
     * @api public
     */

    Delegator.prototype.setter = function(name){
      var proto = this.proto;
      var target = this.target;
      this.setters.push(name);

      proto.__defineSetter__(name, function(val){
        return this[target][name] = val;
      });

      return this;
    };

    /**
     * Delegator fluent accessor
     *
     * @param {String} name
     * @return {Delegator} self
     * @api public
     */

    Delegator.prototype.fluent = function (name) {
      var proto = this.proto;
      var target = this.target;
      this.fluents.push(name);

      proto[name] = function(val){
        if ('undefined' != typeof val) {
          this[target][name] = val;
          return this;
        } else {
          return this[target][name];
        }
      };

      return this;
    };

    /*!
     * depd
     * Copyright(c) 2014-2018 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module dependencies.
     */

    var relative$1 = require$$0__default["default"].relative;

    /**
     * Module exports.
     */

    var depd_1$1 = depd$1;

    /**
     * Get the path to base files on.
     */

    var basePath$1 = process.cwd();

    /**
     * Determine if namespace is contained in the string.
     */

    function containsNamespace$1 (str, namespace) {
      var vals = str.split(/[ ,]+/);
      var ns = String(namespace).toLowerCase();

      for (var i = 0; i < vals.length; i++) {
        var val = vals[i];

        // namespace contained
        if (val && (val === '*' || val.toLowerCase() === ns)) {
          return true
        }
      }

      return false
    }

    /**
     * Convert a data descriptor to accessor descriptor.
     */

    function convertDataDescriptorToAccessor$1 (obj, prop, message) {
      var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
      var value = descriptor.value;

      descriptor.get = function getter () { return value };

      if (descriptor.writable) {
        descriptor.set = function setter (val) { return (value = val) };
      }

      delete descriptor.value;
      delete descriptor.writable;

      Object.defineProperty(obj, prop, descriptor);

      return descriptor
    }

    /**
     * Create arguments string to keep arity.
     */

    function createArgumentsString$1 (arity) {
      var str = '';

      for (var i = 0; i < arity; i++) {
        str += ', arg' + i;
      }

      return str.substr(2)
    }

    /**
     * Create stack string from stack.
     */

    function createStackString$1 (stack) {
      var str = this.name + ': ' + this.namespace;

      if (this.message) {
        str += ' deprecated ' + this.message;
      }

      for (var i = 0; i < stack.length; i++) {
        str += '\n    at ' + stack[i].toString();
      }

      return str
    }

    /**
     * Create deprecate for namespace in caller.
     */

    function depd$1 (namespace) {
      if (!namespace) {
        throw new TypeError('argument namespace is required')
      }

      var stack = getStack$1();
      var site = callSiteLocation$1(stack[1]);
      var file = site[0];

      function deprecate (message) {
        // call to self as log
        log$1.call(deprecate, message);
      }

      deprecate._file = file;
      deprecate._ignored = isignored$1(namespace);
      deprecate._namespace = namespace;
      deprecate._traced = istraced$1(namespace);
      deprecate._warned = Object.create(null);

      deprecate.function = wrapfunction$1;
      deprecate.property = wrapproperty$1;

      return deprecate
    }

    /**
     * Determine if event emitter has listeners of a given type.
     *
     * The way to do this check is done three different ways in Node.js >= 0.8
     * so this consolidates them into a minimal set using instance methods.
     *
     * @param {EventEmitter} emitter
     * @param {string} type
     * @returns {boolean}
     * @private
     */

    function eehaslisteners (emitter, type) {
      var count = typeof emitter.listenerCount !== 'function'
        ? emitter.listeners(type).length
        : emitter.listenerCount(type);

      return count > 0
    }

    /**
     * Determine if namespace is ignored.
     */

    function isignored$1 (namespace) {
      if (process.noDeprecation) {
        // --no-deprecation support
        return true
      }

      var str = process.env.NO_DEPRECATION || '';

      // namespace ignored
      return containsNamespace$1(str, namespace)
    }

    /**
     * Determine if namespace is traced.
     */

    function istraced$1 (namespace) {
      if (process.traceDeprecation) {
        // --trace-deprecation support
        return true
      }

      var str = process.env.TRACE_DEPRECATION || '';

      // namespace traced
      return containsNamespace$1(str, namespace)
    }

    /**
     * Display deprecation message.
     */

    function log$1 (message, site) {
      var haslisteners = eehaslisteners(process, 'deprecation');

      // abort early if no destination
      if (!haslisteners && this._ignored) {
        return
      }

      var caller;
      var callFile;
      var callSite;
      var depSite;
      var i = 0;
      var seen = false;
      var stack = getStack$1();
      var file = this._file;

      if (site) {
        // provided site
        depSite = site;
        callSite = callSiteLocation$1(stack[1]);
        callSite.name = depSite.name;
        file = callSite[0];
      } else {
        // get call site
        i = 2;
        depSite = callSiteLocation$1(stack[i]);
        callSite = depSite;
      }

      // get caller of deprecated thing in relation to file
      for (; i < stack.length; i++) {
        caller = callSiteLocation$1(stack[i]);
        callFile = caller[0];

        if (callFile === file) {
          seen = true;
        } else if (callFile === this._file) {
          file = this._file;
        } else if (seen) {
          break
        }
      }

      var key = caller
        ? depSite.join(':') + '__' + caller.join(':')
        : undefined;

      if (key !== undefined && key in this._warned) {
        // already warned
        return
      }

      this._warned[key] = true;

      // generate automatic message from call site
      var msg = message;
      if (!msg) {
        msg = callSite === depSite || !callSite.name
          ? defaultMessage$1(depSite)
          : defaultMessage$1(callSite);
      }

      // emit deprecation if listeners exist
      if (haslisteners) {
        var err = DeprecationError$1(this._namespace, msg, stack.slice(i));
        process.emit('deprecation', err);
        return
      }

      // format and write message
      var format = process.stderr.isTTY
        ? formatColor$1
        : formatPlain$1;
      var output = format.call(this, msg, caller, stack.slice(i));
      process.stderr.write(output + '\n', 'utf8');
    }

    /**
     * Get call site location as array.
     */

    function callSiteLocation$1 (callSite) {
      var file = callSite.getFileName() || '<anonymous>';
      var line = callSite.getLineNumber();
      var colm = callSite.getColumnNumber();

      if (callSite.isEval()) {
        file = callSite.getEvalOrigin() + ', ' + file;
      }

      var site = [file, line, colm];

      site.callSite = callSite;
      site.name = callSite.getFunctionName();

      return site
    }

    /**
     * Generate a default message from the site.
     */

    function defaultMessage$1 (site) {
      var callSite = site.callSite;
      var funcName = site.name;

      // make useful anonymous name
      if (!funcName) {
        funcName = '<anonymous@' + formatLocation$1(site) + '>';
      }

      var context = callSite.getThis();
      var typeName = context && callSite.getTypeName();

      // ignore useless type name
      if (typeName === 'Object') {
        typeName = undefined;
      }

      // make useful type name
      if (typeName === 'Function') {
        typeName = context.name || typeName;
      }

      return typeName && callSite.getMethodName()
        ? typeName + '.' + funcName
        : funcName
    }

    /**
     * Format deprecation message without color.
     */

    function formatPlain$1 (msg, caller, stack) {
      var timestamp = new Date().toUTCString();

      var formatted = timestamp +
        ' ' + this._namespace +
        ' deprecated ' + msg;

      // add stack trace
      if (this._traced) {
        for (var i = 0; i < stack.length; i++) {
          formatted += '\n    at ' + stack[i].toString();
        }

        return formatted
      }

      if (caller) {
        formatted += ' at ' + formatLocation$1(caller);
      }

      return formatted
    }

    /**
     * Format deprecation message with color.
     */

    function formatColor$1 (msg, caller, stack) {
      var formatted = '\x1b[36;1m' + this._namespace + '\x1b[22;39m' + // bold cyan
        ' \x1b[33;1mdeprecated\x1b[22;39m' + // bold yellow
        ' \x1b[0m' + msg + '\x1b[39m'; // reset

      // add stack trace
      if (this._traced) {
        for (var i = 0; i < stack.length; i++) {
          formatted += '\n    \x1b[36mat ' + stack[i].toString() + '\x1b[39m'; // cyan
        }

        return formatted
      }

      if (caller) {
        formatted += ' \x1b[36m' + formatLocation$1(caller) + '\x1b[39m'; // cyan
      }

      return formatted
    }

    /**
     * Format call site location.
     */

    function formatLocation$1 (callSite) {
      return relative$1(basePath$1, callSite[0]) +
        ':' + callSite[1] +
        ':' + callSite[2]
    }

    /**
     * Get the stack as array of call sites.
     */

    function getStack$1 () {
      var limit = Error.stackTraceLimit;
      var obj = {};
      var prep = Error.prepareStackTrace;

      Error.prepareStackTrace = prepareObjectStackTrace$1;
      Error.stackTraceLimit = Math.max(10, limit);

      // capture the stack
      Error.captureStackTrace(obj);

      // slice this function off the top
      var stack = obj.stack.slice(1);

      Error.prepareStackTrace = prep;
      Error.stackTraceLimit = limit;

      return stack
    }

    /**
     * Capture call site stack from v8.
     */

    function prepareObjectStackTrace$1 (obj, stack) {
      return stack
    }

    /**
     * Return a wrapped function in a deprecation message.
     */

    function wrapfunction$1 (fn, message) {
      if (typeof fn !== 'function') {
        throw new TypeError('argument fn must be a function')
      }

      var args = createArgumentsString$1(fn.length);
      var stack = getStack$1();
      var site = callSiteLocation$1(stack[1]);

      site.name = fn.name;

      // eslint-disable-next-line no-new-func
      var deprecatedfn = new Function('fn', 'log', 'deprecate', 'message', 'site',
        '"use strict"\n' +
        'return function (' + args + ') {' +
        'log.call(deprecate, message, site)\n' +
        'return fn.apply(this, arguments)\n' +
        '}')(fn, log$1, this, message, site);

      return deprecatedfn
    }

    /**
     * Wrap property in a deprecation message.
     */

    function wrapproperty$1 (obj, prop, message) {
      if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
        throw new TypeError('argument obj must be object')
      }

      var descriptor = Object.getOwnPropertyDescriptor(obj, prop);

      if (!descriptor) {
        throw new TypeError('must call property on owner object')
      }

      if (!descriptor.configurable) {
        throw new TypeError('property must be configurable')
      }

      var deprecate = this;
      var stack = getStack$1();
      var site = callSiteLocation$1(stack[1]);

      // set site name
      site.name = prop;

      // convert data descriptor
      if ('value' in descriptor) {
        descriptor = convertDataDescriptorToAccessor$1(obj, prop);
      }

      var get = descriptor.get;
      var set = descriptor.set;

      // wrap getter
      if (typeof get === 'function') {
        descriptor.get = function getter () {
          log$1.call(deprecate, message, site);
          return get.apply(this, arguments)
        };
      }

      // wrap setter
      if (typeof set === 'function') {
        descriptor.set = function setter () {
          log$1.call(deprecate, message, site);
          return set.apply(this, arguments)
        };
      }

      Object.defineProperty(obj, prop, descriptor);
    }

    /**
     * Create DeprecationError for deprecation
     */

    function DeprecationError$1 (namespace, message, stack) {
      var error = new Error();
      var stackString;

      Object.defineProperty(error, 'constructor', {
        value: DeprecationError$1
      });

      Object.defineProperty(error, 'message', {
        configurable: true,
        enumerable: false,
        value: message,
        writable: true
      });

      Object.defineProperty(error, 'name', {
        enumerable: false,
        configurable: true,
        value: 'DeprecationError',
        writable: true
      });

      Object.defineProperty(error, 'namespace', {
        configurable: true,
        enumerable: false,
        value: namespace,
        writable: true
      });

      Object.defineProperty(error, 'stack', {
        configurable: true,
        enumerable: false,
        get: function () {
          if (stackString !== undefined) {
            return stackString
          }

          // prepare stack trace
          return (stackString = createStackString$1.call(this, stack))
        },
        set: function setter (val) {
          stackString = val;
        }
      });

      return error
    }

    // Implements Brad Hill's Double HMAC pattern from
    // https://www.nccgroup.trust/us/about-us/newsroom-and-events/blog/2011/february/double-hmac-verification/.
    // The approach is similar to the node's native implementation of timing safe buffer comparison that will be available on v6+.
    // https://github.com/nodejs/node/issues/3043
    // https://github.com/nodejs/node/pull/3073



    function bufferEqual(a, b) {
      if (a.length !== b.length) {
        return false;
      }
      // `crypto.timingSafeEqual` was introduced in Node v6.6.0
      // <https://github.com/jshttp/basic-auth/issues/39>
      if (crypto__default["default"].timingSafeEqual) {
        return crypto__default["default"].timingSafeEqual(a, b);
      }
      for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    }

    function timeSafeCompare(a, b) {
      var sa = String(a);
      var sb = String(b);
      var key = crypto__default["default"].pseudoRandomBytes(32);
      var ah = crypto__default["default"].createHmac('sha256', key).update(sa).digest();
      var bh = crypto__default["default"].createHmac('sha256', key).update(sb).digest();

      return bufferEqual(ah, bh) && a === b;
    }

    var lib = timeSafeCompare;

    /*!
     * keygrip
     * Copyright(c) 2011-2014 Jed Schmidt
     * MIT Licensed
     */



      
    function Keygrip(keys, algorithm, encoding) {
      if (!algorithm) algorithm = "sha1";
      if (!encoding) encoding = "base64";
      if (!(this instanceof Keygrip)) return new Keygrip(keys, algorithm, encoding)

      if (!keys || !(0 in keys)) {
        throw new Error("Keys must be provided.")
      }

      function sign(data, key) {
        return crypto__default["default"]
          .createHmac(algorithm, key)
          .update(data).digest(encoding)
          .replace(/\/|\+|=/g, function(x) {
            return ({ "/": "_", "+": "-", "=": "" })[x]
          })
      }

      this.sign = function(data){ return sign(data, keys[0]) };

      this.verify = function(data, digest) {
        return this.index(data, digest) > -1
      };

      this.index = function(data, digest) {
        for (var i = 0, l = keys.length; i < l; i++) {
          if (lib(digest, sign(data, keys[i]))) {
            return i
          }
        }

        return -1
      };
    }

    Keygrip.sign = Keygrip.verify = Keygrip.index = function() {
      throw new Error("Usage: require('keygrip')(<array-of-keys>)")
    };

    var keygrip = Keygrip;

    /*!
     * cookies
     * Copyright(c) 2014 Jed Schmidt, http://jed.is/
     * Copyright(c) 2015-2016 Douglas Christopher Wilson
     * MIT Licensed
     */

    var deprecate$1 = depd_1$1('cookies');


    var cache = {};

    /**
     * RegExp to match field-content in RFC 7230 sec 3.2
     *
     * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
     * field-vchar   = VCHAR / obs-text
     * obs-text      = %x80-FF
     */

    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

    /**
     * RegExp to match Same-Site cookie attribute value.
     */

    var SAME_SITE_REGEXP = /^(?:lax|none|strict)$/i;

    function Cookies(request, response, options) {
      if (!(this instanceof Cookies)) return new Cookies(request, response, options)

      this.secure = undefined;
      this.request = request;
      this.response = response;

      if (options) {
        if (Array.isArray(options)) {
          // array of key strings
          deprecate$1('"keys" argument; provide using options {"keys": [...]}');
          this.keys = new keygrip(options);
        } else if (options.constructor && options.constructor.name === 'Keygrip') {
          // any keygrip constructor to allow different versions
          deprecate$1('"keys" argument; provide using options {"keys": keygrip}');
          this.keys = options;
        } else {
          this.keys = Array.isArray(options.keys) ? new keygrip(options.keys) : options.keys;
          this.secure = options.secure;
        }
      }
    }

    Cookies.prototype.get = function(name, opts) {
      var sigName = name + ".sig"
        , header, match, value, remote, data, index
        , signed = opts && opts.signed !== undefined ? opts.signed : !!this.keys;

      header = this.request.headers["cookie"];
      if (!header) return

      match = header.match(getPattern(name));
      if (!match) return

      value = match[1];
      if (!opts || !signed) return value

      remote = this.get(sigName);
      if (!remote) return

      data = name + "=" + value;
      if (!this.keys) throw new Error('.keys required for signed cookies');
      index = this.keys.index(data, remote);

      if (index < 0) {
        this.set(sigName, null, {path: "/", signed: false });
      } else {
        index && this.set(sigName, this.keys.sign(data), { signed: false });
        return value
      }
    };

    Cookies.prototype.set = function(name, value, opts) {
      var res = this.response
        , req = this.request
        , headers = res.getHeader("Set-Cookie") || []
        , secure = this.secure !== undefined ? !!this.secure : req.protocol === 'https' || req.connection.encrypted
        , cookie = new Cookie(name, value, opts)
        , signed = opts && opts.signed !== undefined ? opts.signed : !!this.keys;

      if (typeof headers == "string") headers = [headers];

      if (!secure && opts && opts.secure) {
        throw new Error('Cannot send secure cookie over unencrypted connection')
      }

      cookie.secure = opts && opts.secure !== undefined
        ? opts.secure
        : secure;

      if (opts && "secureProxy" in opts) {
        deprecate$1('"secureProxy" option; use "secure" option, provide "secure" to constructor if needed');
        cookie.secure = opts.secureProxy;
      }

      pushCookie(headers, cookie);

      if (opts && signed) {
        if (!this.keys) throw new Error('.keys required for signed cookies');
        cookie.value = this.keys.sign(cookie.toString());
        cookie.name += ".sig";
        pushCookie(headers, cookie);
      }

      var setHeader = res.set ? http__default["default"].OutgoingMessage.prototype.setHeader : res.setHeader;
      setHeader.call(res, 'Set-Cookie', headers);
      return this
    };

    function Cookie(name, value, attrs) {
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError('argument name is invalid');
      }

      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError('argument value is invalid');
      }

      this.name = name;
      this.value = value || "";

      for (var name in attrs) {
        this[name] = attrs[name];
      }

      if (!this.value) {
        this.expires = new Date(0);
        this.maxAge = null;
      }

      if (this.path && !fieldContentRegExp.test(this.path)) {
        throw new TypeError('option path is invalid');
      }

      if (this.domain && !fieldContentRegExp.test(this.domain)) {
        throw new TypeError('option domain is invalid');
      }

      if (this.sameSite && this.sameSite !== true && !SAME_SITE_REGEXP.test(this.sameSite)) {
        throw new TypeError('option sameSite is invalid')
      }
    }

    Cookie.prototype.path = "/";
    Cookie.prototype.expires = undefined;
    Cookie.prototype.domain = undefined;
    Cookie.prototype.httpOnly = true;
    Cookie.prototype.sameSite = false;
    Cookie.prototype.secure = false;
    Cookie.prototype.overwrite = false;

    Cookie.prototype.toString = function() {
      return this.name + "=" + this.value
    };

    Cookie.prototype.toHeader = function() {
      var header = this.toString();

      if (this.maxAge) this.expires = new Date(Date.now() + this.maxAge);

      if (this.path     ) header += "; path=" + this.path;
      if (this.expires  ) header += "; expires=" + this.expires.toUTCString();
      if (this.domain   ) header += "; domain=" + this.domain;
      if (this.sameSite ) header += "; samesite=" + (this.sameSite === true ? 'strict' : this.sameSite.toLowerCase());
      if (this.secure   ) header += "; secure";
      if (this.httpOnly ) header += "; httponly";

      return header
    };

    // back-compat so maxage mirrors maxAge
    Object.defineProperty(Cookie.prototype, 'maxage', {
      configurable: true,
      enumerable: true,
      get: function () { return this.maxAge },
      set: function (val) { return this.maxAge = val }
    });
    deprecate$1.property(Cookie.prototype, 'maxage', '"maxage"; use "maxAge" instead');

    function getPattern(name) {
      if (cache[name]) return cache[name]

      return cache[name] = new RegExp(
        "(?:^|;) *" +
        name.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") +
        "=([^;]*)"
      )
    }

    function pushCookie(headers, cookie) {
      if (cookie.overwrite) {
        for (var i = headers.length - 1; i >= 0; i--) {
          if (headers[i].indexOf(cookie.name + '=') === 0) {
            headers.splice(i, 1);
          }
        }
      }

      headers.push(cookie.toHeader());
    }

    Cookies.connect = Cookies.express = function(keys) {
      return function(req, res, next) {
        req.cookies = res.cookies = new Cookies(req, res, {
          keys: keys
        });

        next();
      }
    };

    Cookies.Cookie = Cookie;

    var cookies = Cookies;

    var context = createCommonjsModule(function (module) {

    /**
     * Module dependencies.
     */








    const COOKIES = Symbol('context#cookies');

    /**
     * Context prototype.
     */

    const proto = module.exports = {

      /**
       * util.inspect() implementation, which
       * just returns the JSON output.
       *
       * @return {Object}
       * @api public
       */

      inspect() {
        if (this === proto) return this;
        return this.toJSON();
      },

      /**
       * Return JSON representation.
       *
       * Here we explicitly invoke .toJSON() on each
       * object, as iteration will otherwise fail due
       * to the getters and cause utilities such as
       * clone() to fail.
       *
       * @return {Object}
       * @api public
       */

      toJSON() {
        return {
          request: this.request.toJSON(),
          response: this.response.toJSON(),
          app: this.app.toJSON(),
          originalUrl: this.originalUrl,
          req: '<original node req>',
          res: '<original node res>',
          socket: '<original node socket>'
        };
      },

      /**
       * Similar to .throw(), adds assertion.
       *
       *    this.assert(this.user, 401, 'Please login!');
       *
       * See: https://github.com/jshttp/http-assert
       *
       * @param {Mixed} test
       * @param {Number} status
       * @param {String} message
       * @api public
       */

      assert: httpAssert,

      /**
       * Throw an error with `status` (default 500) and
       * `msg`. Note that these are user-level
       * errors, and the message may be exposed to the client.
       *
       *    this.throw(403)
       *    this.throw(400, 'name required')
       *    this.throw('something exploded')
       *    this.throw(new Error('invalid'))
       *    this.throw(400, new Error('invalid'))
       *
       * See: https://github.com/jshttp/http-errors
       *
       * Note: `status` should only be passed as the first parameter.
       *
       * @param {String|Number|Error} err, msg or status
       * @param {String|Number|Error} [err, msg or status]
       * @param {Object} [props]
       * @api public
       */

      throw(...args) {
        throw httpErrors$1(...args);
      },

      /**
       * Default error handling.
       *
       * @param {Error} err
       * @api private
       */

      onerror(err) {
        // don't do anything if there is no error.
        // this allows you to pass `this.onerror`
        // to node-style callbacks.
        if (null == err) return;

        // When dealing with cross-globals a normal `instanceof` check doesn't work properly.
        // See https://github.com/koajs/koa/issues/1466
        // We can probably remove it once jest fixes https://github.com/facebook/jest/issues/2549.
        const isNativeError =
          Object.prototype.toString.call(err) === '[object Error]' ||
          err instanceof Error;
        if (!isNativeError) err = new Error(util__default["default"].format('non-error thrown: %j', err));

        let headerSent = false;
        if (this.headerSent || !this.writable) {
          headerSent = err.headerSent = true;
        }

        // delegate
        this.app.emit('error', err, this);

        // nothing we can do here other
        // than delegate to the app-level
        // handler and log.
        if (headerSent) {
          return;
        }

        const { res } = this;

        // first unset all headers
        /* istanbul ignore else */
        if (typeof res.getHeaderNames === 'function') {
          res.getHeaderNames().forEach(name => res.removeHeader(name));
        } else {
          res._headers = {}; // Node < 7.7
        }

        // then set those specified
        this.set(err.headers);

        // force text/plain
        this.type = 'text';

        let statusCode = err.status || err.statusCode;

        // ENOENT support
        if ('ENOENT' === err.code) statusCode = 404;

        // default to 500
        if ('number' !== typeof statusCode || !statuses[statusCode]) statusCode = 500;

        // respond
        const code = statuses[statusCode];
        const msg = err.expose ? err.message : code;
        this.status = err.status = statusCode;
        this.length = Buffer.byteLength(msg);
        res.end(msg);
      },

      get cookies() {
        if (!this[COOKIES]) {
          this[COOKIES] = new cookies(this.req, this.res, {
            keys: this.app.keys,
            secure: this.request.secure
          });
        }
        return this[COOKIES];
      },

      set cookies(_cookies) {
        this[COOKIES] = _cookies;
      }
    };

    /**
     * Custom inspection implementation for newer Node.js versions.
     *
     * @return {Object}
     * @api public
     */

    /* istanbul ignore else */
    if (util__default["default"].inspect.custom) {
      module.exports[util__default["default"].inspect.custom] = module.exports.inspect;
    }

    /**
     * Response delegation.
     */

    delegates(proto, 'response')
      .method('attachment')
      .method('redirect')
      .method('remove')
      .method('vary')
      .method('has')
      .method('set')
      .method('append')
      .method('flushHeaders')
      .access('status')
      .access('message')
      .access('body')
      .access('length')
      .access('type')
      .access('lastModified')
      .access('etag')
      .getter('headerSent')
      .getter('writable');

    /**
     * Request delegation.
     */

    delegates(proto, 'request')
      .method('acceptsLanguages')
      .method('acceptsEncodings')
      .method('acceptsCharsets')
      .method('accepts')
      .method('get')
      .method('is')
      .access('querystring')
      .access('idempotent')
      .access('socket')
      .access('search')
      .access('method')
      .access('query')
      .access('path')
      .access('url')
      .access('accept')
      .getter('origin')
      .getter('href')
      .getter('subdomains')
      .getter('protocol')
      .getter('host')
      .getter('hostname')
      .getter('URL')
      .getter('header')
      .getter('headers')
      .getter('secure')
      .getter('stale')
      .getter('fresh')
      .getter('ips')
      .getter('ip');
    });

    /**
     * negotiator
     * Copyright(c) 2012 Isaac Z. Schlueter
     * Copyright(c) 2014 Federico Romero
     * Copyright(c) 2014-2015 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module exports.
     * @public
     */

    var charset = preferredCharsets;
    var preferredCharsets_1 = preferredCharsets;

    /**
     * Module variables.
     * @private
     */

    var simpleCharsetRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;

    /**
     * Parse the Accept-Charset header.
     * @private
     */

    function parseAcceptCharset(accept) {
      var accepts = accept.split(',');

      for (var i = 0, j = 0; i < accepts.length; i++) {
        var charset = parseCharset(accepts[i].trim(), i);

        if (charset) {
          accepts[j++] = charset;
        }
      }

      // trim accepts
      accepts.length = j;

      return accepts;
    }

    /**
     * Parse a charset from the Accept-Charset header.
     * @private
     */

    function parseCharset(str, i) {
      var match = simpleCharsetRegExp.exec(str);
      if (!match) return null;

      var charset = match[1];
      var q = 1;
      if (match[2]) {
        var params = match[2].split(';');
        for (var j = 0; j < params.length; j++) {
          var p = params[j].trim().split('=');
          if (p[0] === 'q') {
            q = parseFloat(p[1]);
            break;
          }
        }
      }

      return {
        charset: charset,
        q: q,
        i: i
      };
    }

    /**
     * Get the priority of a charset.
     * @private
     */

    function getCharsetPriority(charset, accepted, index) {
      var priority = {o: -1, q: 0, s: 0};

      for (var i = 0; i < accepted.length; i++) {
        var spec = specify$3(charset, accepted[i], index);

        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
          priority = spec;
        }
      }

      return priority;
    }

    /**
     * Get the specificity of the charset.
     * @private
     */

    function specify$3(charset, spec, index) {
      var s = 0;
      if(spec.charset.toLowerCase() === charset.toLowerCase()){
        s |= 1;
      } else if (spec.charset !== '*' ) {
        return null
      }

      return {
        i: index,
        o: spec.i,
        q: spec.q,
        s: s
      }
    }

    /**
     * Get the preferred charsets from an Accept-Charset header.
     * @public
     */

    function preferredCharsets(accept, provided) {
      // RFC 2616 sec 14.2: no header = *
      var accepts = parseAcceptCharset(accept === undefined ? '*' : accept || '');

      if (!provided) {
        // sorted list of all charsets
        return accepts
          .filter(isQuality$3)
          .sort(compareSpecs$3)
          .map(getFullCharset);
      }

      var priorities = provided.map(function getPriority(type, index) {
        return getCharsetPriority(type, accepts, index);
      });

      // sorted list of accepted charsets
      return priorities.filter(isQuality$3).sort(compareSpecs$3).map(function getCharset(priority) {
        return provided[priorities.indexOf(priority)];
      });
    }

    /**
     * Compare two specs.
     * @private
     */

    function compareSpecs$3(a, b) {
      return (b.q - a.q) || (b.s - a.s) || (a.o - b.o) || (a.i - b.i) || 0;
    }

    /**
     * Get full charset string.
     * @private
     */

    function getFullCharset(spec) {
      return spec.charset;
    }

    /**
     * Check if a spec has any quality.
     * @private
     */

    function isQuality$3(spec) {
      return spec.q > 0;
    }
    charset.preferredCharsets = preferredCharsets_1;

    /**
     * negotiator
     * Copyright(c) 2012 Isaac Z. Schlueter
     * Copyright(c) 2014 Federico Romero
     * Copyright(c) 2014-2015 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module exports.
     * @public
     */

    var encoding = preferredEncodings;
    var preferredEncodings_1 = preferredEncodings;

    /**
     * Module variables.
     * @private
     */

    var simpleEncodingRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;

    /**
     * Parse the Accept-Encoding header.
     * @private
     */

    function parseAcceptEncoding(accept) {
      var accepts = accept.split(',');
      var hasIdentity = false;
      var minQuality = 1;

      for (var i = 0, j = 0; i < accepts.length; i++) {
        var encoding = parseEncoding(accepts[i].trim(), i);

        if (encoding) {
          accepts[j++] = encoding;
          hasIdentity = hasIdentity || specify$2('identity', encoding);
          minQuality = Math.min(minQuality, encoding.q || 1);
        }
      }

      if (!hasIdentity) {
        /*
         * If identity doesn't explicitly appear in the accept-encoding header,
         * it's added to the list of acceptable encoding with the lowest q
         */
        accepts[j++] = {
          encoding: 'identity',
          q: minQuality,
          i: i
        };
      }

      // trim accepts
      accepts.length = j;

      return accepts;
    }

    /**
     * Parse an encoding from the Accept-Encoding header.
     * @private
     */

    function parseEncoding(str, i) {
      var match = simpleEncodingRegExp.exec(str);
      if (!match) return null;

      var encoding = match[1];
      var q = 1;
      if (match[2]) {
        var params = match[2].split(';');
        for (var j = 0; j < params.length; j++) {
          var p = params[j].trim().split('=');
          if (p[0] === 'q') {
            q = parseFloat(p[1]);
            break;
          }
        }
      }

      return {
        encoding: encoding,
        q: q,
        i: i
      };
    }

    /**
     * Get the priority of an encoding.
     * @private
     */

    function getEncodingPriority(encoding, accepted, index) {
      var priority = {o: -1, q: 0, s: 0};

      for (var i = 0; i < accepted.length; i++) {
        var spec = specify$2(encoding, accepted[i], index);

        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
          priority = spec;
        }
      }

      return priority;
    }

    /**
     * Get the specificity of the encoding.
     * @private
     */

    function specify$2(encoding, spec, index) {
      var s = 0;
      if(spec.encoding.toLowerCase() === encoding.toLowerCase()){
        s |= 1;
      } else if (spec.encoding !== '*' ) {
        return null
      }

      return {
        i: index,
        o: spec.i,
        q: spec.q,
        s: s
      }
    }
    /**
     * Get the preferred encodings from an Accept-Encoding header.
     * @public
     */

    function preferredEncodings(accept, provided) {
      var accepts = parseAcceptEncoding(accept || '');

      if (!provided) {
        // sorted list of all encodings
        return accepts
          .filter(isQuality$2)
          .sort(compareSpecs$2)
          .map(getFullEncoding);
      }

      var priorities = provided.map(function getPriority(type, index) {
        return getEncodingPriority(type, accepts, index);
      });

      // sorted list of accepted encodings
      return priorities.filter(isQuality$2).sort(compareSpecs$2).map(function getEncoding(priority) {
        return provided[priorities.indexOf(priority)];
      });
    }

    /**
     * Compare two specs.
     * @private
     */

    function compareSpecs$2(a, b) {
      return (b.q - a.q) || (b.s - a.s) || (a.o - b.o) || (a.i - b.i) || 0;
    }

    /**
     * Get full encoding string.
     * @private
     */

    function getFullEncoding(spec) {
      return spec.encoding;
    }

    /**
     * Check if a spec has any quality.
     * @private
     */

    function isQuality$2(spec) {
      return spec.q > 0;
    }
    encoding.preferredEncodings = preferredEncodings_1;

    /**
     * negotiator
     * Copyright(c) 2012 Isaac Z. Schlueter
     * Copyright(c) 2014 Federico Romero
     * Copyright(c) 2014-2015 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module exports.
     * @public
     */

    var language = preferredLanguages;
    var preferredLanguages_1 = preferredLanguages;

    /**
     * Module variables.
     * @private
     */

    var simpleLanguageRegExp = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;

    /**
     * Parse the Accept-Language header.
     * @private
     */

    function parseAcceptLanguage(accept) {
      var accepts = accept.split(',');

      for (var i = 0, j = 0; i < accepts.length; i++) {
        var language = parseLanguage(accepts[i].trim(), i);

        if (language) {
          accepts[j++] = language;
        }
      }

      // trim accepts
      accepts.length = j;

      return accepts;
    }

    /**
     * Parse a language from the Accept-Language header.
     * @private
     */

    function parseLanguage(str, i) {
      var match = simpleLanguageRegExp.exec(str);
      if (!match) return null;

      var prefix = match[1],
        suffix = match[2],
        full = prefix;

      if (suffix) full += "-" + suffix;

      var q = 1;
      if (match[3]) {
        var params = match[3].split(';');
        for (var j = 0; j < params.length; j++) {
          var p = params[j].split('=');
          if (p[0] === 'q') q = parseFloat(p[1]);
        }
      }

      return {
        prefix: prefix,
        suffix: suffix,
        q: q,
        i: i,
        full: full
      };
    }

    /**
     * Get the priority of a language.
     * @private
     */

    function getLanguagePriority(language, accepted, index) {
      var priority = {o: -1, q: 0, s: 0};

      for (var i = 0; i < accepted.length; i++) {
        var spec = specify$1(language, accepted[i], index);

        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
          priority = spec;
        }
      }

      return priority;
    }

    /**
     * Get the specificity of the language.
     * @private
     */

    function specify$1(language, spec, index) {
      var p = parseLanguage(language);
      if (!p) return null;
      var s = 0;
      if(spec.full.toLowerCase() === p.full.toLowerCase()){
        s |= 4;
      } else if (spec.prefix.toLowerCase() === p.full.toLowerCase()) {
        s |= 2;
      } else if (spec.full.toLowerCase() === p.prefix.toLowerCase()) {
        s |= 1;
      } else if (spec.full !== '*' ) {
        return null
      }

      return {
        i: index,
        o: spec.i,
        q: spec.q,
        s: s
      }
    }
    /**
     * Get the preferred languages from an Accept-Language header.
     * @public
     */

    function preferredLanguages(accept, provided) {
      // RFC 2616 sec 14.4: no header = *
      var accepts = parseAcceptLanguage(accept === undefined ? '*' : accept || '');

      if (!provided) {
        // sorted list of all languages
        return accepts
          .filter(isQuality$1)
          .sort(compareSpecs$1)
          .map(getFullLanguage);
      }

      var priorities = provided.map(function getPriority(type, index) {
        return getLanguagePriority(type, accepts, index);
      });

      // sorted list of accepted languages
      return priorities.filter(isQuality$1).sort(compareSpecs$1).map(function getLanguage(priority) {
        return provided[priorities.indexOf(priority)];
      });
    }

    /**
     * Compare two specs.
     * @private
     */

    function compareSpecs$1(a, b) {
      return (b.q - a.q) || (b.s - a.s) || (a.o - b.o) || (a.i - b.i) || 0;
    }

    /**
     * Get full language string.
     * @private
     */

    function getFullLanguage(spec) {
      return spec.full;
    }

    /**
     * Check if a spec has any quality.
     * @private
     */

    function isQuality$1(spec) {
      return spec.q > 0;
    }
    language.preferredLanguages = preferredLanguages_1;

    /**
     * negotiator
     * Copyright(c) 2012 Isaac Z. Schlueter
     * Copyright(c) 2014 Federico Romero
     * Copyright(c) 2014-2015 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module exports.
     * @public
     */

    var mediaType = preferredMediaTypes;
    var preferredMediaTypes_1 = preferredMediaTypes;

    /**
     * Module variables.
     * @private
     */

    var simpleMediaTypeRegExp = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;

    /**
     * Parse the Accept header.
     * @private
     */

    function parseAccept(accept) {
      var accepts = splitMediaTypes(accept);

      for (var i = 0, j = 0; i < accepts.length; i++) {
        var mediaType = parseMediaType(accepts[i].trim(), i);

        if (mediaType) {
          accepts[j++] = mediaType;
        }
      }

      // trim accepts
      accepts.length = j;

      return accepts;
    }

    /**
     * Parse a media type from the Accept header.
     * @private
     */

    function parseMediaType(str, i) {
      var match = simpleMediaTypeRegExp.exec(str);
      if (!match) return null;

      var params = Object.create(null);
      var q = 1;
      var subtype = match[2];
      var type = match[1];

      if (match[3]) {
        var kvps = splitParameters(match[3]).map(splitKeyValuePair);

        for (var j = 0; j < kvps.length; j++) {
          var pair = kvps[j];
          var key = pair[0].toLowerCase();
          var val = pair[1];

          // get the value, unwrapping quotes
          var value = val && val[0] === '"' && val[val.length - 1] === '"'
            ? val.substr(1, val.length - 2)
            : val;

          if (key === 'q') {
            q = parseFloat(value);
            break;
          }

          // store parameter
          params[key] = value;
        }
      }

      return {
        type: type,
        subtype: subtype,
        params: params,
        q: q,
        i: i
      };
    }

    /**
     * Get the priority of a media type.
     * @private
     */

    function getMediaTypePriority(type, accepted, index) {
      var priority = {o: -1, q: 0, s: 0};

      for (var i = 0; i < accepted.length; i++) {
        var spec = specify(type, accepted[i], index);

        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
          priority = spec;
        }
      }

      return priority;
    }

    /**
     * Get the specificity of the media type.
     * @private
     */

    function specify(type, spec, index) {
      var p = parseMediaType(type);
      var s = 0;

      if (!p) {
        return null;
      }

      if(spec.type.toLowerCase() == p.type.toLowerCase()) {
        s |= 4;
      } else if(spec.type != '*') {
        return null;
      }

      if(spec.subtype.toLowerCase() == p.subtype.toLowerCase()) {
        s |= 2;
      } else if(spec.subtype != '*') {
        return null;
      }

      var keys = Object.keys(spec.params);
      if (keys.length > 0) {
        if (keys.every(function (k) {
          return spec.params[k] == '*' || (spec.params[k] || '').toLowerCase() == (p.params[k] || '').toLowerCase();
        })) {
          s |= 1;
        } else {
          return null
        }
      }

      return {
        i: index,
        o: spec.i,
        q: spec.q,
        s: s,
      }
    }

    /**
     * Get the preferred media types from an Accept header.
     * @public
     */

    function preferredMediaTypes(accept, provided) {
      // RFC 2616 sec 14.2: no header = */*
      var accepts = parseAccept(accept === undefined ? '*/*' : accept || '');

      if (!provided) {
        // sorted list of all types
        return accepts
          .filter(isQuality)
          .sort(compareSpecs)
          .map(getFullType);
      }

      var priorities = provided.map(function getPriority(type, index) {
        return getMediaTypePriority(type, accepts, index);
      });

      // sorted list of accepted types
      return priorities.filter(isQuality).sort(compareSpecs).map(function getType(priority) {
        return provided[priorities.indexOf(priority)];
      });
    }

    /**
     * Compare two specs.
     * @private
     */

    function compareSpecs(a, b) {
      return (b.q - a.q) || (b.s - a.s) || (a.o - b.o) || (a.i - b.i) || 0;
    }

    /**
     * Get full type string.
     * @private
     */

    function getFullType(spec) {
      return spec.type + '/' + spec.subtype;
    }

    /**
     * Check if a spec has any quality.
     * @private
     */

    function isQuality(spec) {
      return spec.q > 0;
    }

    /**
     * Count the number of quotes in a string.
     * @private
     */

    function quoteCount(string) {
      var count = 0;
      var index = 0;

      while ((index = string.indexOf('"', index)) !== -1) {
        count++;
        index++;
      }

      return count;
    }

    /**
     * Split a key value pair.
     * @private
     */

    function splitKeyValuePair(str) {
      var index = str.indexOf('=');
      var key;
      var val;

      if (index === -1) {
        key = str;
      } else {
        key = str.substr(0, index);
        val = str.substr(index + 1);
      }

      return [key, val];
    }

    /**
     * Split an Accept header into media types.
     * @private
     */

    function splitMediaTypes(accept) {
      var accepts = accept.split(',');

      for (var i = 1, j = 0; i < accepts.length; i++) {
        if (quoteCount(accepts[j]) % 2 == 0) {
          accepts[++j] = accepts[i];
        } else {
          accepts[j] += ',' + accepts[i];
        }
      }

      // trim accepts
      accepts.length = j + 1;

      return accepts;
    }

    /**
     * Split a string of parameters.
     * @private
     */

    function splitParameters(str) {
      var parameters = str.split(';');

      for (var i = 1, j = 0; i < parameters.length; i++) {
        if (quoteCount(parameters[j]) % 2 == 0) {
          parameters[++j] = parameters[i];
        } else {
          parameters[j] += ';' + parameters[i];
        }
      }

      // trim parameters
      parameters.length = j + 1;

      for (var i = 0; i < parameters.length; i++) {
        parameters[i] = parameters[i].trim();
      }

      return parameters;
    }
    mediaType.preferredMediaTypes = preferredMediaTypes_1;

    /*!
     * negotiator
     * Copyright(c) 2012 Federico Romero
     * Copyright(c) 2012-2014 Isaac Z. Schlueter
     * Copyright(c) 2015 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Cached loaded submodules.
     * @private
     */

    var modules = Object.create(null);

    /**
     * Module exports.
     * @public
     */

    var negotiator = Negotiator;
    var Negotiator_1 = Negotiator;

    /**
     * Create a Negotiator instance from a request.
     * @param {object} request
     * @public
     */

    function Negotiator(request) {
      if (!(this instanceof Negotiator)) {
        return new Negotiator(request);
      }

      this.request = request;
    }

    Negotiator.prototype.charset = function charset(available) {
      var set = this.charsets(available);
      return set && set[0];
    };

    Negotiator.prototype.charsets = function charsets(available) {
      var preferredCharsets = loadModule('charset').preferredCharsets;
      return preferredCharsets(this.request.headers['accept-charset'], available);
    };

    Negotiator.prototype.encoding = function encoding(available) {
      var set = this.encodings(available);
      return set && set[0];
    };

    Negotiator.prototype.encodings = function encodings(available) {
      var preferredEncodings = loadModule('encoding').preferredEncodings;
      return preferredEncodings(this.request.headers['accept-encoding'], available);
    };

    Negotiator.prototype.language = function language(available) {
      var set = this.languages(available);
      return set && set[0];
    };

    Negotiator.prototype.languages = function languages(available) {
      var preferredLanguages = loadModule('language').preferredLanguages;
      return preferredLanguages(this.request.headers['accept-language'], available);
    };

    Negotiator.prototype.mediaType = function mediaType(available) {
      var set = this.mediaTypes(available);
      return set && set[0];
    };

    Negotiator.prototype.mediaTypes = function mediaTypes(available) {
      var preferredMediaTypes = loadModule('mediaType').preferredMediaTypes;
      return preferredMediaTypes(this.request.headers.accept, available);
    };

    // Backwards compatibility
    Negotiator.prototype.preferredCharset = Negotiator.prototype.charset;
    Negotiator.prototype.preferredCharsets = Negotiator.prototype.charsets;
    Negotiator.prototype.preferredEncoding = Negotiator.prototype.encoding;
    Negotiator.prototype.preferredEncodings = Negotiator.prototype.encodings;
    Negotiator.prototype.preferredLanguage = Negotiator.prototype.language;
    Negotiator.prototype.preferredLanguages = Negotiator.prototype.languages;
    Negotiator.prototype.preferredMediaType = Negotiator.prototype.mediaType;
    Negotiator.prototype.preferredMediaTypes = Negotiator.prototype.mediaTypes;

    /**
     * Load the given module.
     * @private
     */

    function loadModule(moduleName) {
      var module = modules[moduleName];

      if (module !== undefined) {
        return module;
      }

      // This uses a switch for static require analysis
      switch (moduleName) {
        case 'charset':
          module = charset;
          break;
        case 'encoding':
          module = encoding;
          break;
        case 'language':
          module = language;
          break;
        case 'mediaType':
          module = mediaType;
          break;
        default:
          throw new Error('Cannot find module \'' + moduleName + '\'');
      }

      // Store to prevent invoking require()
      modules[moduleName] = module;

      return module;
    }
    negotiator.Negotiator = Negotiator_1;

    /*!
     * accepts
     * Copyright(c) 2014 Jonathan Ong
     * Copyright(c) 2015 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module dependencies.
     * @private
     */




    /**
     * Module exports.
     * @public
     */

    var accepts = Accepts;

    /**
     * Create a new Accepts object for the given req.
     *
     * @param {object} req
     * @public
     */

    function Accepts (req) {
      if (!(this instanceof Accepts)) {
        return new Accepts(req)
      }

      this.headers = req.headers;
      this.negotiator = new negotiator(req);
    }

    /**
     * Check if the given `type(s)` is acceptable, returning
     * the best match when true, otherwise `undefined`, in which
     * case you should respond with 406 "Not Acceptable".
     *
     * The `type` value may be a single mime type string
     * such as "application/json", the extension name
     * such as "json" or an array `["json", "html", "text/plain"]`. When a list
     * or array is given the _best_ match, if any is returned.
     *
     * Examples:
     *
     *     // Accept: text/html
     *     this.types('html');
     *     // => "html"
     *
     *     // Accept: text/*, application/json
     *     this.types('html');
     *     // => "html"
     *     this.types('text/html');
     *     // => "text/html"
     *     this.types('json', 'text');
     *     // => "json"
     *     this.types('application/json');
     *     // => "application/json"
     *
     *     // Accept: text/*, application/json
     *     this.types('image/png');
     *     this.types('png');
     *     // => undefined
     *
     *     // Accept: text/*;q=.5, application/json
     *     this.types(['html', 'json']);
     *     this.types('html', 'json');
     *     // => "json"
     *
     * @param {String|Array} types...
     * @return {String|Array|Boolean}
     * @public
     */

    Accepts.prototype.type =
    Accepts.prototype.types = function (types_) {
      var types = types_;

      // support flattened arguments
      if (types && !Array.isArray(types)) {
        types = new Array(arguments.length);
        for (var i = 0; i < types.length; i++) {
          types[i] = arguments[i];
        }
      }

      // no types, return all requested types
      if (!types || types.length === 0) {
        return this.negotiator.mediaTypes()
      }

      // no accept header, return first given type
      if (!this.headers.accept) {
        return types[0]
      }

      var mimes = types.map(extToMime);
      var accepts = this.negotiator.mediaTypes(mimes.filter(validMime));
      var first = accepts[0];

      return first
        ? types[mimes.indexOf(first)]
        : false
    };

    /**
     * Return accepted encodings or best fit based on `encodings`.
     *
     * Given `Accept-Encoding: gzip, deflate`
     * an array sorted by quality is returned:
     *
     *     ['gzip', 'deflate']
     *
     * @param {String|Array} encodings...
     * @return {String|Array}
     * @public
     */

    Accepts.prototype.encoding =
    Accepts.prototype.encodings = function (encodings_) {
      var encodings = encodings_;

      // support flattened arguments
      if (encodings && !Array.isArray(encodings)) {
        encodings = new Array(arguments.length);
        for (var i = 0; i < encodings.length; i++) {
          encodings[i] = arguments[i];
        }
      }

      // no encodings, return all requested encodings
      if (!encodings || encodings.length === 0) {
        return this.negotiator.encodings()
      }

      return this.negotiator.encodings(encodings)[0] || false
    };

    /**
     * Return accepted charsets or best fit based on `charsets`.
     *
     * Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
     * an array sorted by quality is returned:
     *
     *     ['utf-8', 'utf-7', 'iso-8859-1']
     *
     * @param {String|Array} charsets...
     * @return {String|Array}
     * @public
     */

    Accepts.prototype.charset =
    Accepts.prototype.charsets = function (charsets_) {
      var charsets = charsets_;

      // support flattened arguments
      if (charsets && !Array.isArray(charsets)) {
        charsets = new Array(arguments.length);
        for (var i = 0; i < charsets.length; i++) {
          charsets[i] = arguments[i];
        }
      }

      // no charsets, return all requested charsets
      if (!charsets || charsets.length === 0) {
        return this.negotiator.charsets()
      }

      return this.negotiator.charsets(charsets)[0] || false
    };

    /**
     * Return accepted languages or best fit based on `langs`.
     *
     * Given `Accept-Language: en;q=0.8, es, pt`
     * an array sorted by quality is returned:
     *
     *     ['es', 'pt', 'en']
     *
     * @param {String|Array} langs...
     * @return {Array|String}
     * @public
     */

    Accepts.prototype.lang =
    Accepts.prototype.langs =
    Accepts.prototype.language =
    Accepts.prototype.languages = function (languages_) {
      var languages = languages_;

      // support flattened arguments
      if (languages && !Array.isArray(languages)) {
        languages = new Array(arguments.length);
        for (var i = 0; i < languages.length; i++) {
          languages[i] = arguments[i];
        }
      }

      // no languages, return all requested languages
      if (!languages || languages.length === 0) {
        return this.negotiator.languages()
      }

      return this.negotiator.languages(languages)[0] || false
    };

    /**
     * Convert extnames to mime.
     *
     * @param {String} type
     * @return {String}
     * @private
     */

    function extToMime (type) {
      return type.indexOf('/') === -1
        ? mimeTypes.lookup(type)
        : type
    }

    /**
     * Check if mime is valid.
     *
     * @param {String} type
     * @return {String}
     * @private
     */

    function validMime (type) {
      return typeof type === 'string'
    }

    /*!
     * content-type
     * Copyright(c) 2015 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * RegExp to match *( ";" parameter ) in RFC 7231 sec 3.1.1.1
     *
     * parameter     = token "=" ( token / quoted-string )
     * token         = 1*tchar
     * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
     *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
     *               / DIGIT / ALPHA
     *               ; any VCHAR, except delimiters
     * quoted-string = DQUOTE *( qdtext / quoted-pair ) DQUOTE
     * qdtext        = HTAB / SP / %x21 / %x23-5B / %x5D-7E / obs-text
     * obs-text      = %x80-FF
     * quoted-pair   = "\" ( HTAB / SP / VCHAR / obs-text )
     */
    var PARAM_REGEXP = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g;
    var TEXT_REGEXP = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/;
    var TOKEN_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;

    /**
     * RegExp to match quoted-pair in RFC 7230 sec 3.2.6
     *
     * quoted-pair = "\" ( HTAB / SP / VCHAR / obs-text )
     * obs-text    = %x80-FF
     */
    var QESC_REGEXP = /\\([\u000b\u0020-\u00ff])/g;

    /**
     * RegExp to match chars that must be quoted-pair in RFC 7230 sec 3.2.6
     */
    var QUOTE_REGEXP = /([\\"])/g;

    /**
     * RegExp to match type in RFC 7231 sec 3.1.1.1
     *
     * media-type = type "/" subtype
     * type       = token
     * subtype    = token
     */
    var TYPE_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;

    /**
     * Module exports.
     * @public
     */

    var format_1 = format;
    var parse_1 = parse$4;

    /**
     * Format object to media type.
     *
     * @param {object} obj
     * @return {string}
     * @public
     */

    function format (obj) {
      if (!obj || typeof obj !== 'object') {
        throw new TypeError('argument obj is required')
      }

      var parameters = obj.parameters;
      var type = obj.type;

      if (!type || !TYPE_REGEXP.test(type)) {
        throw new TypeError('invalid type')
      }

      var string = type;

      // append parameters
      if (parameters && typeof parameters === 'object') {
        var param;
        var params = Object.keys(parameters).sort();

        for (var i = 0; i < params.length; i++) {
          param = params[i];

          if (!TOKEN_REGEXP.test(param)) {
            throw new TypeError('invalid parameter name')
          }

          string += '; ' + param + '=' + qstring(parameters[param]);
        }
      }

      return string
    }

    /**
     * Parse media type to object.
     *
     * @param {string|object} string
     * @return {Object}
     * @public
     */

    function parse$4 (string) {
      if (!string) {
        throw new TypeError('argument string is required')
      }

      // support req/res-like objects as argument
      var header = typeof string === 'object'
        ? getcontenttype(string)
        : string;

      if (typeof header !== 'string') {
        throw new TypeError('argument string is required to be a string')
      }

      var index = header.indexOf(';');
      var type = index !== -1
        ? header.substr(0, index).trim()
        : header.trim();

      if (!TYPE_REGEXP.test(type)) {
        throw new TypeError('invalid media type')
      }

      var obj = new ContentType(type.toLowerCase());

      // parse parameters
      if (index !== -1) {
        var key;
        var match;
        var value;

        PARAM_REGEXP.lastIndex = index;

        while ((match = PARAM_REGEXP.exec(header))) {
          if (match.index !== index) {
            throw new TypeError('invalid parameter format')
          }

          index += match[0].length;
          key = match[1].toLowerCase();
          value = match[2];

          if (value[0] === '"') {
            // remove quotes and escapes
            value = value
              .substr(1, value.length - 2)
              .replace(QESC_REGEXP, '$1');
          }

          obj.parameters[key] = value;
        }

        if (index !== header.length) {
          throw new TypeError('invalid parameter format')
        }
      }

      return obj
    }

    /**
     * Get content-type from req/res objects.
     *
     * @param {object}
     * @return {Object}
     * @private
     */

    function getcontenttype (obj) {
      var header;

      if (typeof obj.getHeader === 'function') {
        // res-like
        header = obj.getHeader('content-type');
      } else if (typeof obj.headers === 'object') {
        // req-like
        header = obj.headers && obj.headers['content-type'];
      }

      if (typeof header !== 'string') {
        throw new TypeError('content-type header is missing from object')
      }

      return header
    }

    /**
     * Quote a string if necessary.
     *
     * @param {string} val
     * @return {string}
     * @private
     */

    function qstring (val) {
      var str = String(val);

      // no need to quote tokens
      if (TOKEN_REGEXP.test(str)) {
        return str
      }

      if (str.length > 0 && !TEXT_REGEXP.test(str)) {
        throw new TypeError('invalid parameter value')
      }

      return '"' + str.replace(QUOTE_REGEXP, '\\$1') + '"'
    }

    /**
     * Class to represent a content type.
     * @private
     */
    function ContentType (type) {
      this.parameters = Object.create(null);
      this.type = type;
    }

    var contentType = {
    	format: format_1,
    	parse: parse_1
    };

    /*!
     * parseurl
     * Copyright(c) 2014 Jonathan Ong
     * Copyright(c) 2014-2017 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module dependencies.
     * @private
     */


    var parse$3 = url__default["default"].parse;
    var Url = url__default["default"].Url;

    /**
     * Module exports.
     * @public
     */

    var parseurl_1 = parseurl;
    var original = originalurl;

    /**
     * Parse the `req` url with memoization.
     *
     * @param {ServerRequest} req
     * @return {Object}
     * @public
     */

    function parseurl (req) {
      var url = req.url;

      if (url === undefined) {
        // URL is undefined
        return undefined
      }

      var parsed = req._parsedUrl;

      if (fresh$1(url, parsed)) {
        // Return cached URL parse
        return parsed
      }

      // Parse the URL
      parsed = fastparse(url);
      parsed._raw = url;

      return (req._parsedUrl = parsed)
    }
    /**
     * Parse the `req` original url with fallback and memoization.
     *
     * @param {ServerRequest} req
     * @return {Object}
     * @public
     */

    function originalurl (req) {
      var url = req.originalUrl;

      if (typeof url !== 'string') {
        // Fallback
        return parseurl(req)
      }

      var parsed = req._parsedOriginalUrl;

      if (fresh$1(url, parsed)) {
        // Return cached URL parse
        return parsed
      }

      // Parse the URL
      parsed = fastparse(url);
      parsed._raw = url;

      return (req._parsedOriginalUrl = parsed)
    }
    /**
     * Parse the `str` url with fast-path short-cut.
     *
     * @param {string} str
     * @return {Object}
     * @private
     */

    function fastparse (str) {
      if (typeof str !== 'string' || str.charCodeAt(0) !== 0x2f /* / */) {
        return parse$3(str)
      }

      var pathname = str;
      var query = null;
      var search = null;

      // This takes the regexp from https://github.com/joyent/node/pull/7878
      // Which is /^(\/[^?#\s]*)(\?[^#\s]*)?$/
      // And unrolls it into a for loop
      for (var i = 1; i < str.length; i++) {
        switch (str.charCodeAt(i)) {
          case 0x3f: /* ?  */
            if (search === null) {
              pathname = str.substring(0, i);
              query = str.substring(i + 1);
              search = str.substring(i);
            }
            break
          case 0x09: /* \t */
          case 0x0a: /* \n */
          case 0x0c: /* \f */
          case 0x0d: /* \r */
          case 0x20: /*    */
          case 0x23: /* #  */
          case 0xa0:
          case 0xfeff:
            return parse$3(str)
        }
      }

      var url = Url !== undefined
        ? new Url()
        : {};

      url.path = str;
      url.href = str;
      url.pathname = pathname;

      if (search !== null) {
        url.query = query;
        url.search = search;
      }

      return url
    }

    /**
     * Determine if parsed is still fresh for url.
     *
     * @param {string} url
     * @param {object} parsedUrl
     * @return {boolean}
     * @private
     */

    function fresh$1 (url, parsedUrl) {
      return typeof parsedUrl === 'object' &&
        parsedUrl !== null &&
        (Url === undefined || parsedUrl instanceof Url) &&
        parsedUrl._raw === url
    }
    parseurl_1.original = original;

    /*!
     * fresh
     * Copyright(c) 2012 TJ Holowaychuk
     * Copyright(c) 2016-2017 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * RegExp to check for no-cache token in Cache-Control.
     * @private
     */

    var CACHE_CONTROL_NO_CACHE_REGEXP = /(?:^|,)\s*?no-cache\s*?(?:,|$)/;

    /**
     * Module exports.
     * @public
     */

    var fresh_1 = fresh;

    /**
     * Check freshness of the response using request and response headers.
     *
     * @param {Object} reqHeaders
     * @param {Object} resHeaders
     * @return {Boolean}
     * @public
     */

    function fresh (reqHeaders, resHeaders) {
      // fields
      var modifiedSince = reqHeaders['if-modified-since'];
      var noneMatch = reqHeaders['if-none-match'];

      // unconditional request
      if (!modifiedSince && !noneMatch) {
        return false
      }

      // Always return stale when Cache-Control: no-cache
      // to support end-to-end reload requests
      // https://tools.ietf.org/html/rfc2616#section-14.9.4
      var cacheControl = reqHeaders['cache-control'];
      if (cacheControl && CACHE_CONTROL_NO_CACHE_REGEXP.test(cacheControl)) {
        return false
      }

      // if-none-match
      if (noneMatch && noneMatch !== '*') {
        var etag = resHeaders['etag'];

        if (!etag) {
          return false
        }

        var etagStale = true;
        var matches = parseTokenList(noneMatch);
        for (var i = 0; i < matches.length; i++) {
          var match = matches[i];
          if (match === etag || match === 'W/' + etag || 'W/' + match === etag) {
            etagStale = false;
            break
          }
        }

        if (etagStale) {
          return false
        }
      }

      // if-modified-since
      if (modifiedSince) {
        var lastModified = resHeaders['last-modified'];
        var modifiedStale = !lastModified || !(parseHttpDate(lastModified) <= parseHttpDate(modifiedSince));

        if (modifiedStale) {
          return false
        }
      }

      return true
    }

    /**
     * Parse an HTTP Date into a number.
     *
     * @param {string} date
     * @private
     */

    function parseHttpDate (date) {
      var timestamp = date && Date.parse(date);

      // istanbul ignore next: guard against date.js Date.parse patching
      return typeof timestamp === 'number'
        ? timestamp
        : NaN
    }

    /**
     * Parse a HTTP token list.
     *
     * @param {string} str
     * @private
     */

    function parseTokenList (str) {
      var end = 0;
      var list = [];
      var start = 0;

      // gather tokens
      for (var i = 0, len = str.length; i < len; i++) {
        switch (str.charCodeAt(i)) {
          case 0x20: /*   */
            if (start === end) {
              start = end = i + 1;
            }
            break
          case 0x2c: /* , */
            list.push(str.substring(start, end));
            start = end = i + 1;
            break
          default:
            end = i + 1;
            break
        }
      }

      // final token
      list.push(str.substring(start, end));

      return list
    }

    var request = createCommonjsModule(function (module) {

    /**
     * Module dependencies.
     */

    const URL = url__default["default"].URL;



    const stringify = url__default["default"].format;







    const IP = Symbol('context#ip');

    /**
     * Prototype.
     */

    module.exports = {

      /**
       * Return request header.
       *
       * @return {Object}
       * @api public
       */

      get header() {
        return this.req.headers;
      },

      /**
       * Set request header.
       *
       * @api public
       */

      set header(val) {
        this.req.headers = val;
      },

      /**
       * Return request header, alias as request.header
       *
       * @return {Object}
       * @api public
       */

      get headers() {
        return this.req.headers;
      },

      /**
       * Set request header, alias as request.header
       *
       * @api public
       */

      set headers(val) {
        this.req.headers = val;
      },

      /**
       * Get request URL.
       *
       * @return {String}
       * @api public
       */

      get url() {
        return this.req.url;
      },

      /**
       * Set request URL.
       *
       * @api public
       */

      set url(val) {
        this.req.url = val;
      },

      /**
       * Get origin of URL.
       *
       * @return {String}
       * @api public
       */

      get origin() {
        return `${this.protocol}://${this.host}`;
      },

      /**
       * Get full request URL.
       *
       * @return {String}
       * @api public
       */

      get href() {
        // support: `GET http://example.com/foo`
        if (/^https?:\/\//i.test(this.originalUrl)) return this.originalUrl;
        return this.origin + this.originalUrl;
      },

      /**
       * Get request method.
       *
       * @return {String}
       * @api public
       */

      get method() {
        return this.req.method;
      },

      /**
       * Set request method.
       *
       * @param {String} val
       * @api public
       */

      set method(val) {
        this.req.method = val;
      },

      /**
       * Get request pathname.
       *
       * @return {String}
       * @api public
       */

      get path() {
        return parseurl_1(this.req).pathname;
      },

      /**
       * Set pathname, retaining the query string when present.
       *
       * @param {String} path
       * @api public
       */

      set path(path) {
        const url = parseurl_1(this.req);
        if (url.pathname === path) return;

        url.pathname = path;
        url.path = null;

        this.url = stringify(url);
      },

      /**
       * Get parsed query string.
       *
       * @return {Object}
       * @api public
       */

      get query() {
        const str = this.querystring;
        const c = this._querycache = this._querycache || {};
        return c[str] || (c[str] = qs__default["default"].parse(str));
      },

      /**
       * Set query string as an object.
       *
       * @param {Object} obj
       * @api public
       */

      set query(obj) {
        this.querystring = qs__default["default"].stringify(obj);
      },

      /**
       * Get query string.
       *
       * @return {String}
       * @api public
       */

      get querystring() {
        if (!this.req) return '';
        return parseurl_1(this.req).query || '';
      },

      /**
       * Set query string.
       *
       * @param {String} str
       * @api public
       */

      set querystring(str) {
        const url = parseurl_1(this.req);
        if (url.search === `?${str}`) return;

        url.search = str;
        url.path = null;

        this.url = stringify(url);
      },

      /**
       * Get the search string. Same as the query string
       * except it includes the leading ?.
       *
       * @return {String}
       * @api public
       */

      get search() {
        if (!this.querystring) return '';
        return `?${this.querystring}`;
      },

      /**
       * Set the search string. Same as
       * request.querystring= but included for ubiquity.
       *
       * @param {String} str
       * @api public
       */

      set search(str) {
        this.querystring = str;
      },

      /**
       * Parse the "Host" header field host
       * and support X-Forwarded-Host when a
       * proxy is enabled.
       *
       * @return {String} hostname:port
       * @api public
       */

      get host() {
        const proxy = this.app.proxy;
        let host = proxy && this.get('X-Forwarded-Host');
        if (!host) {
          if (this.req.httpVersionMajor >= 2) host = this.get(':authority');
          if (!host) host = this.get('Host');
        }
        if (!host) return '';
        return host.split(/\s*,\s*/, 1)[0];
      },

      /**
       * Parse the "Host" header field hostname
       * and support X-Forwarded-Host when a
       * proxy is enabled.
       *
       * @return {String} hostname
       * @api public
       */

      get hostname() {
        const host = this.host;
        if (!host) return '';
        if ('[' === host[0]) return this.URL.hostname || ''; // IPv6
        return host.split(':', 1)[0];
      },

      /**
       * Get WHATWG parsed URL.
       * Lazily memoized.
       *
       * @return {URL|Object}
       * @api public
       */

      get URL() {
        /* istanbul ignore else */
        if (!this.memoizedURL) {
          const originalUrl = this.originalUrl || ''; // avoid undefined in template string
          try {
            this.memoizedURL = new URL(`${this.origin}${originalUrl}`);
          } catch (err) {
            this.memoizedURL = Object.create(null);
          }
        }
        return this.memoizedURL;
      },

      /**
       * Check if the request is fresh, aka
       * Last-Modified and/or the ETag
       * still match.
       *
       * @return {Boolean}
       * @api public
       */

      get fresh() {
        const method = this.method;
        const s = this.ctx.status;

        // GET or HEAD for weak freshness validation only
        if ('GET' !== method && 'HEAD' !== method) return false;

        // 2xx or 304 as per rfc2616 14.26
        if ((s >= 200 && s < 300) || 304 === s) {
          return fresh_1(this.header, this.response.header);
        }

        return false;
      },

      /**
       * Check if the request is stale, aka
       * "Last-Modified" and / or the "ETag" for the
       * resource has changed.
       *
       * @return {Boolean}
       * @api public
       */

      get stale() {
        return !this.fresh;
      },

      /**
       * Check if the request is idempotent.
       *
       * @return {Boolean}
       * @api public
       */

      get idempotent() {
        const methods = ['GET', 'HEAD', 'PUT', 'DELETE', 'OPTIONS', 'TRACE'];
        return !!~methods.indexOf(this.method);
      },

      /**
       * Return the request socket.
       *
       * @return {Connection}
       * @api public
       */

      get socket() {
        return this.req.socket;
      },

      /**
       * Get the charset when present or undefined.
       *
       * @return {String}
       * @api public
       */

      get charset() {
        try {
          const { parameters } = contentType.parse(this.req);
          return parameters.charset || '';
        } catch (e) {
          return '';
        }
      },

      /**
       * Return parsed Content-Length when present.
       *
       * @return {Number}
       * @api public
       */

      get length() {
        const len = this.get('Content-Length');
        if (len === '') return;
        return ~~len;
      },

      /**
       * Return the protocol string "http" or "https"
       * when requested with TLS. When the proxy setting
       * is enabled the "X-Forwarded-Proto" header
       * field will be trusted. If you're running behind
       * a reverse proxy that supplies https for you this
       * may be enabled.
       *
       * @return {String}
       * @api public
       */

      get protocol() {
        if (this.socket.encrypted) return 'https';
        if (!this.app.proxy) return 'http';
        const proto = this.get('X-Forwarded-Proto');
        return proto ? proto.split(/\s*,\s*/, 1)[0] : 'http';
      },

      /**
       * Shorthand for:
       *
       *    this.protocol == 'https'
       *
       * @return {Boolean}
       * @api public
       */

      get secure() {
        return 'https' === this.protocol;
      },

      /**
       * When `app.proxy` is `true`, parse
       * the "X-Forwarded-For" ip address list.
       *
       * For example if the value was "client, proxy1, proxy2"
       * you would receive the array `["client", "proxy1", "proxy2"]`
       * where "proxy2" is the furthest down-stream.
       *
       * @return {Array}
       * @api public
       */

      get ips() {
        const proxy = this.app.proxy;
        const val = this.get(this.app.proxyIpHeader);
        let ips = proxy && val
          ? val.split(/\s*,\s*/)
          : [];
        if (this.app.maxIpsCount > 0) {
          ips = ips.slice(-this.app.maxIpsCount);
        }
        return ips;
      },

      /**
       * Return request's remote address
       * When `app.proxy` is `true`, parse
       * the "X-Forwarded-For" ip address list and return the first one
       *
       * @return {String}
       * @api public
       */

      get ip() {
        if (!this[IP]) {
          this[IP] = this.ips[0] || this.socket.remoteAddress || '';
        }
        return this[IP];
      },

      set ip(_ip) {
        this[IP] = _ip;
      },

      /**
       * Return subdomains as an array.
       *
       * Subdomains are the dot-separated parts of the host before the main domain
       * of the app. By default, the domain of the app is assumed to be the last two
       * parts of the host. This can be changed by setting `app.subdomainOffset`.
       *
       * For example, if the domain is "tobi.ferrets.example.com":
       * If `app.subdomainOffset` is not set, this.subdomains is
       * `["ferrets", "tobi"]`.
       * If `app.subdomainOffset` is 3, this.subdomains is `["tobi"]`.
       *
       * @return {Array}
       * @api public
       */

      get subdomains() {
        const offset = this.app.subdomainOffset;
        const hostname = this.hostname;
        if (net__default["default"].isIP(hostname)) return [];
        return hostname
          .split('.')
          .reverse()
          .slice(offset);
      },

      /**
       * Get accept object.
       * Lazily memoized.
       *
       * @return {Object}
       * @api private
       */

      get accept() {
        return this._accept || (this._accept = accepts(this.req));
      },

      /**
       * Set accept object.
       *
       * @param {Object}
       * @api private
       */

      set accept(obj) {
        this._accept = obj;
      },

      /**
       * Check if the given `type(s)` is acceptable, returning
       * the best match when true, otherwise `false`, in which
       * case you should respond with 406 "Not Acceptable".
       *
       * The `type` value may be a single mime type string
       * such as "application/json", the extension name
       * such as "json" or an array `["json", "html", "text/plain"]`. When a list
       * or array is given the _best_ match, if any is returned.
       *
       * Examples:
       *
       *     // Accept: text/html
       *     this.accepts('html');
       *     // => "html"
       *
       *     // Accept: text/*, application/json
       *     this.accepts('html');
       *     // => "html"
       *     this.accepts('text/html');
       *     // => "text/html"
       *     this.accepts('json', 'text');
       *     // => "json"
       *     this.accepts('application/json');
       *     // => "application/json"
       *
       *     // Accept: text/*, application/json
       *     this.accepts('image/png');
       *     this.accepts('png');
       *     // => false
       *
       *     // Accept: text/*;q=.5, application/json
       *     this.accepts(['html', 'json']);
       *     this.accepts('html', 'json');
       *     // => "json"
       *
       * @param {String|Array} type(s)...
       * @return {String|Array|false}
       * @api public
       */

      accepts(...args) {
        return this.accept.types(...args);
      },

      /**
       * Return accepted encodings or best fit based on `encodings`.
       *
       * Given `Accept-Encoding: gzip, deflate`
       * an array sorted by quality is returned:
       *
       *     ['gzip', 'deflate']
       *
       * @param {String|Array} encoding(s)...
       * @return {String|Array}
       * @api public
       */

      acceptsEncodings(...args) {
        return this.accept.encodings(...args);
      },

      /**
       * Return accepted charsets or best fit based on `charsets`.
       *
       * Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
       * an array sorted by quality is returned:
       *
       *     ['utf-8', 'utf-7', 'iso-8859-1']
       *
       * @param {String|Array} charset(s)...
       * @return {String|Array}
       * @api public
       */

      acceptsCharsets(...args) {
        return this.accept.charsets(...args);
      },

      /**
       * Return accepted languages or best fit based on `langs`.
       *
       * Given `Accept-Language: en;q=0.8, es, pt`
       * an array sorted by quality is returned:
       *
       *     ['es', 'pt', 'en']
       *
       * @param {String|Array} lang(s)...
       * @return {Array|String}
       * @api public
       */

      acceptsLanguages(...args) {
        return this.accept.languages(...args);
      },

      /**
       * Check if the incoming request contains the "Content-Type"
       * header field and if it contains any of the given mime `type`s.
       * If there is no request body, `null` is returned.
       * If there is no content type, `false` is returned.
       * Otherwise, it returns the first `type` that matches.
       *
       * Examples:
       *
       *     // With Content-Type: text/html; charset=utf-8
       *     this.is('html'); // => 'html'
       *     this.is('text/html'); // => 'text/html'
       *     this.is('text/*', 'application/json'); // => 'text/html'
       *
       *     // When Content-Type is application/json
       *     this.is('json', 'urlencoded'); // => 'json'
       *     this.is('application/json'); // => 'application/json'
       *     this.is('html', 'application/*'); // => 'application/json'
       *
       *     this.is('html'); // => false
       *
       * @param {String|String[]} [type]
       * @param {String[]} [types]
       * @return {String|false|null}
       * @api public
       */

      is(type, ...types) {
        return typeIs(this.req, type, ...types);
      },

      /**
       * Return the request mime type void of
       * parameters such as "charset".
       *
       * @return {String}
       * @api public
       */

      get type() {
        const type = this.get('Content-Type');
        if (!type) return '';
        return type.split(';')[0];
      },

      /**
       * Return request header.
       *
       * The `Referrer` header field is special-cased,
       * both `Referrer` and `Referer` are interchangeable.
       *
       * Examples:
       *
       *     this.get('Content-Type');
       *     // => "text/plain"
       *
       *     this.get('content-type');
       *     // => "text/plain"
       *
       *     this.get('Something');
       *     // => ''
       *
       * @param {String} field
       * @return {String}
       * @api public
       */

      get(field) {
        const req = this.req;
        switch (field = field.toLowerCase()) {
          case 'referer':
          case 'referrer':
            return req.headers.referrer || req.headers.referer || '';
          default:
            return req.headers[field] || '';
        }
      },

      /**
       * Inspect implementation.
       *
       * @return {Object}
       * @api public
       */

      inspect() {
        if (!this.req) return;
        return this.toJSON();
      },

      /**
       * Return JSON representation.
       *
       * @return {Object}
       * @api public
       */

      toJSON() {
        return only(this, [
          'method',
          'url',
          'header'
        ]);
      }
    };

    /**
     * Custom inspection implementation for newer Node.js versions.
     *
     * @return {Object}
     * @api public
     */

    /* istanbul ignore else */
    if (util__default["default"].inspect.custom) {
      module.exports[util__default["default"].inspect.custom] = module.exports.inspect;
    }
    });

    /**
     * slice() reference.
     */

    var slice = Array.prototype.slice;

    /**
     * Expose `co`.
     */

    var co_1 = co['default'] = co.co = co;

    /**
     * Wrap the given generator `fn` into a
     * function that returns a promise.
     * This is a separate function so that
     * every `co()` call doesn't create a new,
     * unnecessary closure.
     *
     * @param {GeneratorFunction} fn
     * @return {Function}
     * @api public
     */

    co.wrap = function (fn) {
      createPromise.__generatorFunction__ = fn;
      return createPromise;
      function createPromise() {
        return co.call(this, fn.apply(this, arguments));
      }
    };

    /**
     * Execute the generator function or a generator
     * and return a promise.
     *
     * @param {Function} fn
     * @return {Promise}
     * @api public
     */

    function co(gen) {
      var ctx = this;
      var args = slice.call(arguments, 1);

      // we wrap everything in a promise to avoid promise chaining,
      // which leads to memory leak errors.
      // see https://github.com/tj/co/issues/180
      return new Promise(function(resolve, reject) {
        if (typeof gen === 'function') gen = gen.apply(ctx, args);
        if (!gen || typeof gen.next !== 'function') return resolve(gen);

        onFulfilled();

        /**
         * @param {Mixed} res
         * @return {Promise}
         * @api private
         */

        function onFulfilled(res) {
          var ret;
          try {
            ret = gen.next(res);
          } catch (e) {
            return reject(e);
          }
          next(ret);
        }

        /**
         * @param {Error} err
         * @return {Promise}
         * @api private
         */

        function onRejected(err) {
          var ret;
          try {
            ret = gen.throw(err);
          } catch (e) {
            return reject(e);
          }
          next(ret);
        }

        /**
         * Get the next value in the generator,
         * return a promise.
         *
         * @param {Object} ret
         * @return {Promise}
         * @api private
         */

        function next(ret) {
          if (ret.done) return resolve(ret.value);
          var value = toPromise.call(ctx, ret.value);
          if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
          return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, '
            + 'but the following object was passed: "' + String(ret.value) + '"'));
        }
      });
    }

    /**
     * Convert a `yield`ed value into a promise.
     *
     * @param {Mixed} obj
     * @return {Promise}
     * @api private
     */

    function toPromise(obj) {
      if (!obj) return obj;
      if (isPromise(obj)) return obj;
      if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj);
      if ('function' == typeof obj) return thunkToPromise.call(this, obj);
      if (Array.isArray(obj)) return arrayToPromise.call(this, obj);
      if (isObject(obj)) return objectToPromise.call(this, obj);
      return obj;
    }

    /**
     * Convert a thunk to a promise.
     *
     * @param {Function}
     * @return {Promise}
     * @api private
     */

    function thunkToPromise(fn) {
      var ctx = this;
      return new Promise(function (resolve, reject) {
        fn.call(ctx, function (err, res) {
          if (err) return reject(err);
          if (arguments.length > 2) res = slice.call(arguments, 1);
          resolve(res);
        });
      });
    }

    /**
     * Convert an array of "yieldables" to a promise.
     * Uses `Promise.all()` internally.
     *
     * @param {Array} obj
     * @return {Promise}
     * @api private
     */

    function arrayToPromise(obj) {
      return Promise.all(obj.map(toPromise, this));
    }

    /**
     * Convert an object of "yieldables" to a promise.
     * Uses `Promise.all()` internally.
     *
     * @param {Object} obj
     * @return {Promise}
     * @api private
     */

    function objectToPromise(obj){
      var results = new obj.constructor();
      var keys = Object.keys(obj);
      var promises = [];
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var promise = toPromise.call(this, obj[key]);
        if (promise && isPromise(promise)) defer(promise, key);
        else results[key] = obj[key];
      }
      return Promise.all(promises).then(function () {
        return results;
      });

      function defer(promise, key) {
        // predefine the key in the result
        results[key] = undefined;
        promises.push(promise.then(function (res) {
          results[key] = res;
        }));
      }
    }

    /**
     * Check if `obj` is a promise.
     *
     * @param {Object} obj
     * @return {Boolean}
     * @api private
     */

    function isPromise(obj) {
      return 'function' == typeof obj.then;
    }

    /**
     * Check if `obj` is a generator.
     *
     * @param {Mixed} obj
     * @return {Boolean}
     * @api private
     */

    function isGenerator(obj) {
      return 'function' == typeof obj.next && 'function' == typeof obj.throw;
    }

    /**
     * Check if `obj` is a generator function.
     *
     * @param {Mixed} obj
     * @return {Boolean}
     * @api private
     */
    function isGeneratorFunction(obj) {
      var constructor = obj.constructor;
      if (!constructor) return false;
      if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) return true;
      return isGenerator(constructor.prototype);
    }

    /**
     * Check for plain object.
     *
     * @param {Mixed} val
     * @return {Boolean}
     * @api private
     */

    function isObject(val) {
      return Object == val.constructor;
    }

    /**
     * Module dependencies.
     */




    /**
     * Expose `convert()`.
     */

    var koaConvert = convert;

    /**
     * Convert Koa legacy generator-based middleware
     * to modern promise-based middleware.
     *
     *
     * @api public
     * */

    function convert (mw) {
      if (typeof mw !== 'function') {
        throw new TypeError('middleware must be a function')
      }

      // assume it's Promise-based middleware
      if (
        mw.constructor.name !== 'GeneratorFunction' &&
        mw.constructor.name !== 'AsyncGeneratorFunction'
      ) {
        return mw
      }

      const converted = function (ctx, next) {
        return co_1.call(
          ctx,
          mw.call(
            ctx,
            (function * (next) { return yield next() })(next)
          ))
      };

      converted._name = mw._name || mw.name;
      return converted
    }

    /**
     * Convert and compose multiple middleware
     * (could mix legacy and modern ones)
     * and return modern promise middleware.
     *
     *
     * @api public
     * */

    // convert.compose(mw, mw, mw)
    // convert.compose([mw, mw, mw])
    convert.compose = function (arr) {
      if (!Array.isArray(arr)) {
        arr = Array.from(arguments);
      }

      return koaCompose(arr.map(convert))
    };

    /**
     * Convert Koa modern promise-based middleware
     * to legacy generator-based middleware.
     *
     *
     * @api public
     * */

    convert.back = function (mw) {
      if (typeof mw !== 'function') {
        throw new TypeError('middleware must be a function')
      }

      // assume it's generator middleware
      if (mw.constructor.name === 'GeneratorFunction' || mw.constructor.name === 'AsyncGeneratorFunction') {
        return mw
      }

      const converted = function * (next) {
        const ctx = this;
        let called = false;

        yield mw(ctx, function () {
          if (called) {
            // guard against multiple next() calls
            // https://github.com/koajs/compose/blob/4e3e96baf58b817d71bd44a8c0d78bb42623aa95/index.js#L36
            throw new Error('next() called multiple times')
          }

          called = true;
          return co_1.call(ctx, next)
        });
      };

      converted._name = mw._name || mw.name;
      return converted
    };

    /**
     * Module dependencies.
     */


    const debug$3 = src$1('koa:application');












    const deprecate = depd_1$1('koa');
    const { HttpError } = httpErrors$1;

    /**
     * Expose `Application` class.
     * Inherits from `Emitter.prototype`.
     */

    var application = class Application extends require$$0__default$1["default"] {
      /**
       * Initialize a new `Application`.
       *
       * @api public
       */

      /**
        *
        * @param {object} [options] Application options
        * @param {string} [options.env='development'] Environment
        * @param {string[]} [options.keys] Signed cookie keys
        * @param {boolean} [options.proxy] Trust proxy headers
        * @param {number} [options.subdomainOffset] Subdomain offset
        * @param {string} [options.proxyIpHeader] Proxy IP header, defaults to X-Forwarded-For
        * @param {number} [options.maxIpsCount] Max IPs read from proxy IP header, default to 0 (means infinity)
        *
        */

      constructor(options) {
        super();
        options = options || {};
        this.proxy = options.proxy || false;
        this.subdomainOffset = options.subdomainOffset || 2;
        this.proxyIpHeader = options.proxyIpHeader || 'X-Forwarded-For';
        this.maxIpsCount = options.maxIpsCount || 0;
        this.env = options.env || process.env.NODE_ENV || 'development';
        if (options.keys) this.keys = options.keys;
        this.middleware = [];
        this.context = Object.create(context);
        this.request = Object.create(request);
        this.response = Object.create(response);
        // util.inspect.custom support for node 6+
        /* istanbul ignore else */
        if (util__default["default"].inspect.custom) {
          this[util__default["default"].inspect.custom] = this.inspect;
        }
      }

      /**
       * Shorthand for:
       *
       *    http.createServer(app.callback()).listen(...)
       *
       * @param {Mixed} ...
       * @return {Server}
       * @api public
       */

      listen(...args) {
        debug$3('listen');
        const server = http__default["default"].createServer(this.callback());
        return server.listen(...args);
      }

      /**
       * Return JSON representation.
       * We only bother showing settings.
       *
       * @return {Object}
       * @api public
       */

      toJSON() {
        return only(this, [
          'subdomainOffset',
          'proxy',
          'env'
        ]);
      }

      /**
       * Inspect implementation.
       *
       * @return {Object}
       * @api public
       */

      inspect() {
        return this.toJSON();
      }

      /**
       * Use the given middleware `fn`.
       *
       * Old-style middleware will be converted.
       *
       * @param {Function} fn
       * @return {Application} self
       * @api public
       */

      use(fn) {
        if (typeof fn !== 'function') throw new TypeError('middleware must be a function!');
        if (isGeneratorFunction$1(fn)) {
          deprecate('Support for generators will be removed in v3. ' +
                    'See the documentation for examples of how to convert old middleware ' +
                    'https://github.com/koajs/koa/blob/master/docs/migration.md');
          fn = koaConvert(fn);
        }
        debug$3('use %s', fn._name || fn.name || '-');
        this.middleware.push(fn);
        return this;
      }

      /**
       * Return a request handler callback
       * for node's native http server.
       *
       * @return {Function}
       * @api public
       */

      callback() {
        const fn = koaCompose(this.middleware);

        if (!this.listenerCount('error')) this.on('error', this.onerror);

        const handleRequest = (req, res) => {
          const ctx = this.createContext(req, res);
          return this.handleRequest(ctx, fn);
        };

        return handleRequest;
      }

      /**
       * Handle request in callback.
       *
       * @api private
       */

      handleRequest(ctx, fnMiddleware) {
        const res = ctx.res;
        res.statusCode = 404;
        const onerror = err => ctx.onerror(err);
        const handleResponse = () => respond(ctx);
        onFinished_1(res, onerror);
        return fnMiddleware(ctx).then(handleResponse).catch(onerror);
      }

      /**
       * Initialize a new context.
       *
       * @api private
       */

      createContext(req, res) {
        const context = Object.create(this.context);
        const request = context.request = Object.create(this.request);
        const response = context.response = Object.create(this.response);
        context.app = request.app = response.app = this;
        context.req = request.req = response.req = req;
        context.res = request.res = response.res = res;
        request.ctx = response.ctx = context;
        request.response = response;
        response.request = request;
        context.originalUrl = request.originalUrl = req.url;
        context.state = {};
        return context;
      }

      /**
       * Default error handler.
       *
       * @param {Error} err
       * @api private
       */

      onerror(err) {
        // When dealing with cross-globals a normal `instanceof` check doesn't work properly.
        // See https://github.com/koajs/koa/issues/1466
        // We can probably remove it once jest fixes https://github.com/facebook/jest/issues/2549.
        const isNativeError =
          Object.prototype.toString.call(err) === '[object Error]' ||
          err instanceof Error;
        if (!isNativeError) throw new TypeError(util__default["default"].format('non-error thrown: %j', err));

        if (404 === err.status || err.expose) return;
        if (this.silent) return;

        const msg = err.stack || err.toString();
        console.error(`\n${msg.replace(/^/gm, '  ')}\n`);
      }

      /**
       * Help TS users comply to CommonJS, ESM, bundler mismatch.
       * @see https://github.com/koajs/koa/issues/1513
       */

      static get default() {
        return Application;
      }
    };

    /**
     * Response helper.
     */

    function respond(ctx) {
      // allow bypassing koa
      if (false === ctx.respond) return;

      if (!ctx.writable) return;

      const res = ctx.res;
      let body = ctx.body;
      const code = ctx.status;

      // ignore body
      if (statuses.empty[code]) {
        // strip headers
        ctx.body = null;
        return res.end();
      }

      if ('HEAD' === ctx.method) {
        if (!res.headersSent && !ctx.response.has('Content-Length')) {
          const { length } = ctx.response;
          if (Number.isInteger(length)) ctx.length = length;
        }
        return res.end();
      }

      // status body
      if (null == body) {
        if (ctx.response._explicitNullBody) {
          ctx.response.remove('Content-Type');
          ctx.response.remove('Transfer-Encoding');
          return res.end();
        }
        if (ctx.req.httpVersionMajor >= 2) {
          body = String(code);
        } else {
          body = ctx.message || String(code);
        }
        if (!res.headersSent) {
          ctx.type = 'text';
          ctx.length = Buffer.byteLength(body);
        }
        return res.end(body);
      }

      // responses
      if (Buffer.isBuffer(body)) return res.end(body);
      if ('string' === typeof body) return res.end(body);
      if (body instanceof Stream__default["default"]) return body.pipe(res);

      // body: json
      body = JSON.stringify(body);
      if (!res.headersSent) {
        ctx.length = Buffer.byteLength(body);
      }
      res.end(body);
    }

    /**
     * Make HttpError available to consumers of the library so that consumers don't
     * have a direct dependency upon `http-errors`
     */

    var HttpError_1 = HttpError;
    application.HttpError = HttpError_1;

    application.HttpError;

    /*!
     * methods
     * Copyright(c) 2013-2014 TJ Holowaychuk
     * Copyright(c) 2015-2016 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module dependencies.
     * @private
     */



    /**
     * Module exports.
     * @public
     */

    var methods = getCurrentNodeMethods() || getBasicNodeMethods();

    /**
     * Get the current Node.js methods.
     * @private
     */

    function getCurrentNodeMethods() {
      return http__default["default"].METHODS && http__default["default"].METHODS.map(function lowerCaseMethod(method) {
        return method.toLowerCase();
      });
    }

    /**
     * Get the "basic" Node.js methods, a snapshot from Node.js 0.10.
     * @private
     */

    function getBasicNodeMethods() {
      return [
        'get',
        'post',
        'put',
        'head',
        'delete',
        'options',
        'trace',
        'copy',
        'lock',
        'mkcol',
        'move',
        'purge',
        'propfind',
        'proppatch',
        'unlock',
        'report',
        'mkactivity',
        'checkout',
        'merge',
        'm-search',
        'notify',
        'subscribe',
        'unsubscribe',
        'patch',
        'search',
        'connect'
      ];
    }

    /**
     * Tokenize input string.
     */
    function lexer(str) {
        var tokens = [];
        var i = 0;
        while (i < str.length) {
            var char = str[i];
            if (char === "*" || char === "+" || char === "?") {
                tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
                continue;
            }
            if (char === "\\") {
                tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
                continue;
            }
            if (char === "{") {
                tokens.push({ type: "OPEN", index: i, value: str[i++] });
                continue;
            }
            if (char === "}") {
                tokens.push({ type: "CLOSE", index: i, value: str[i++] });
                continue;
            }
            if (char === ":") {
                var name = "";
                var j = i + 1;
                while (j < str.length) {
                    var code = str.charCodeAt(j);
                    if (
                    // `0-9`
                    (code >= 48 && code <= 57) ||
                        // `A-Z`
                        (code >= 65 && code <= 90) ||
                        // `a-z`
                        (code >= 97 && code <= 122) ||
                        // `_`
                        code === 95) {
                        name += str[j++];
                        continue;
                    }
                    break;
                }
                if (!name)
                    throw new TypeError("Missing parameter name at " + i);
                tokens.push({ type: "NAME", index: i, value: name });
                i = j;
                continue;
            }
            if (char === "(") {
                var count = 1;
                var pattern = "";
                var j = i + 1;
                if (str[j] === "?") {
                    throw new TypeError("Pattern cannot start with \"?\" at " + j);
                }
                while (j < str.length) {
                    if (str[j] === "\\") {
                        pattern += str[j++] + str[j++];
                        continue;
                    }
                    if (str[j] === ")") {
                        count--;
                        if (count === 0) {
                            j++;
                            break;
                        }
                    }
                    else if (str[j] === "(") {
                        count++;
                        if (str[j + 1] !== "?") {
                            throw new TypeError("Capturing groups are not allowed at " + j);
                        }
                    }
                    pattern += str[j++];
                }
                if (count)
                    throw new TypeError("Unbalanced pattern at " + i);
                if (!pattern)
                    throw new TypeError("Missing pattern at " + i);
                tokens.push({ type: "PATTERN", index: i, value: pattern });
                i = j;
                continue;
            }
            tokens.push({ type: "CHAR", index: i, value: str[i++] });
        }
        tokens.push({ type: "END", index: i, value: "" });
        return tokens;
    }
    /**
     * Parse a string for the raw tokens.
     */
    function parse$2(str, options) {
        if (options === void 0) { options = {}; }
        var tokens = lexer(str);
        var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
        var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
        var result = [];
        var key = 0;
        var i = 0;
        var path = "";
        var tryConsume = function (type) {
            if (i < tokens.length && tokens[i].type === type)
                return tokens[i++].value;
        };
        var mustConsume = function (type) {
            var value = tryConsume(type);
            if (value !== undefined)
                return value;
            var _a = tokens[i], nextType = _a.type, index = _a.index;
            throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
        };
        var consumeText = function () {
            var result = "";
            var value;
            // tslint:disable-next-line
            while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
                result += value;
            }
            return result;
        };
        while (i < tokens.length) {
            var char = tryConsume("CHAR");
            var name = tryConsume("NAME");
            var pattern = tryConsume("PATTERN");
            if (name || pattern) {
                var prefix = char || "";
                if (prefixes.indexOf(prefix) === -1) {
                    path += prefix;
                    prefix = "";
                }
                if (path) {
                    result.push(path);
                    path = "";
                }
                result.push({
                    name: name || key++,
                    prefix: prefix,
                    suffix: "",
                    pattern: pattern || defaultPattern,
                    modifier: tryConsume("MODIFIER") || ""
                });
                continue;
            }
            var value = char || tryConsume("ESCAPED_CHAR");
            if (value) {
                path += value;
                continue;
            }
            if (path) {
                result.push(path);
                path = "";
            }
            var open = tryConsume("OPEN");
            if (open) {
                var prefix = consumeText();
                var name_1 = tryConsume("NAME") || "";
                var pattern_1 = tryConsume("PATTERN") || "";
                var suffix = consumeText();
                mustConsume("CLOSE");
                result.push({
                    name: name_1 || (pattern_1 ? key++ : ""),
                    pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                    prefix: prefix,
                    suffix: suffix,
                    modifier: tryConsume("MODIFIER") || ""
                });
                continue;
            }
            mustConsume("END");
        }
        return result;
    }
    /**
     * Compile a string to a template function for the path.
     */
    function compile$1(str, options) {
        return tokensToFunction(parse$2(str, options), options);
    }
    /**
     * Expose a method for transforming tokens into the path function.
     */
    function tokensToFunction(tokens, options) {
        if (options === void 0) { options = {}; }
        var reFlags = flags(options);
        var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
        // Compile all the tokens into regexps.
        var matches = tokens.map(function (token) {
            if (typeof token === "object") {
                return new RegExp("^(?:" + token.pattern + ")$", reFlags);
            }
        });
        return function (data) {
            var path = "";
            for (var i = 0; i < tokens.length; i++) {
                var token = tokens[i];
                if (typeof token === "string") {
                    path += token;
                    continue;
                }
                var value = data ? data[token.name] : undefined;
                var optional = token.modifier === "?" || token.modifier === "*";
                var repeat = token.modifier === "*" || token.modifier === "+";
                if (Array.isArray(value)) {
                    if (!repeat) {
                        throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                    }
                    if (value.length === 0) {
                        if (optional)
                            continue;
                        throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                    }
                    for (var j = 0; j < value.length; j++) {
                        var segment = encode(value[j], token);
                        if (validate && !matches[i].test(segment)) {
                            throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                        }
                        path += token.prefix + segment + token.suffix;
                    }
                    continue;
                }
                if (typeof value === "string" || typeof value === "number") {
                    var segment = encode(String(value), token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                    continue;
                }
                if (optional)
                    continue;
                var typeOfMessage = repeat ? "an array" : "a string";
                throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
            }
            return path;
        };
    }
    /**
     * Create path match function from `path-to-regexp` spec.
     */
    function match(str, options) {
        var keys = [];
        var re = pathToRegexp$2(str, keys, options);
        return regexpToFunction(re, keys, options);
    }
    /**
     * Create a path match function from `path-to-regexp` output.
     */
    function regexpToFunction(re, keys, options) {
        if (options === void 0) { options = {}; }
        var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
        return function (pathname) {
            var m = re.exec(pathname);
            if (!m)
                return false;
            var path = m[0], index = m.index;
            var params = Object.create(null);
            var _loop_1 = function (i) {
                // tslint:disable-next-line
                if (m[i] === undefined)
                    return "continue";
                var key = keys[i - 1];
                if (key.modifier === "*" || key.modifier === "+") {
                    params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                        return decode(value, key);
                    });
                }
                else {
                    params[key.name] = decode(m[i], key);
                }
            };
            for (var i = 1; i < m.length; i++) {
                _loop_1(i);
            }
            return { path: path, index: index, params: params };
        };
    }
    /**
     * Escape a regular expression string.
     */
    function escapeString(str) {
        return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    /**
     * Get the flags for a regexp from the options.
     */
    function flags(options) {
        return options && options.sensitive ? "" : "i";
    }
    /**
     * Pull out keys from a regexp.
     */
    function regexpToRegexp(path, keys) {
        if (!keys)
            return path;
        var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
        var index = 0;
        var execResult = groupsRegex.exec(path.source);
        while (execResult) {
            keys.push({
                // Use parenthesized substring match if available, index otherwise
                name: execResult[1] || index++,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
            execResult = groupsRegex.exec(path.source);
        }
        return path;
    }
    /**
     * Transform an array into a regexp.
     */
    function arrayToRegexp(paths, keys, options) {
        var parts = paths.map(function (path) { return pathToRegexp$2(path, keys, options).source; });
        return new RegExp("(?:" + parts.join("|") + ")", flags(options));
    }
    /**
     * Create a path regexp from string input.
     */
    function stringToRegexp(path, keys, options) {
        return tokensToRegexp(parse$2(path, options), keys, options);
    }
    /**
     * Expose a function for taking tokens and returning a RegExp.
     */
    function tokensToRegexp(tokens, keys, options) {
        if (options === void 0) { options = {}; }
        var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
        var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
        var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
        var route = start ? "^" : "";
        // Iterate over the tokens and create our regexp string.
        for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
            var token = tokens_1[_i];
            if (typeof token === "string") {
                route += escapeString(encode(token));
            }
            else {
                var prefix = escapeString(encode(token.prefix));
                var suffix = escapeString(encode(token.suffix));
                if (token.pattern) {
                    if (keys)
                        keys.push(token);
                    if (prefix || suffix) {
                        if (token.modifier === "+" || token.modifier === "*") {
                            var mod = token.modifier === "*" ? "?" : "";
                            route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                        }
                        else {
                            route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                        }
                    }
                    else {
                        route += "(" + token.pattern + ")" + token.modifier;
                    }
                }
                else {
                    route += "(?:" + prefix + suffix + ")" + token.modifier;
                }
            }
        }
        if (end) {
            if (!strict)
                route += delimiter + "?";
            route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
        }
        else {
            var endToken = tokens[tokens.length - 1];
            var isEndDelimited = typeof endToken === "string"
                ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
                : // tslint:disable-next-line
                    endToken === undefined;
            if (!strict) {
                route += "(?:" + delimiter + "(?=" + endsWith + "))?";
            }
            if (!isEndDelimited) {
                route += "(?=" + delimiter + "|" + endsWith + ")";
            }
        }
        return new RegExp(route, flags(options));
    }
    /**
     * Normalize the given path string, returning a regular expression.
     *
     * An empty array can be passed in for the keys, which will hold the
     * placeholder key descriptions. For example, using `/user/:id`, `keys` will
     * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
     */
    function pathToRegexp$2(path, keys, options) {
        if (path instanceof RegExp)
            return regexpToRegexp(path, keys);
        if (Array.isArray(path))
            return arrayToRegexp(path, keys, options);
        return stringToRegexp(path, keys, options);
    }

    var dist_es2015 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        parse: parse$2,
        compile: compile$1,
        tokensToFunction: tokensToFunction,
        match: match,
        regexpToFunction: regexpToFunction,
        tokensToRegexp: tokensToRegexp,
        pathToRegexp: pathToRegexp$2
    });

    var require$$1 = /*@__PURE__*/getAugmentedNamespace(dist_es2015);

    const { pathToRegexp: pathToRegexp$1, compile, parse: parse$1 } = require$$1;
    const { parse: parseUrl, format: formatUrl } = url__default["default"];

    var layer = Layer;

    /**
     * Initialize a new routing Layer with given `method`, `path`, and `middleware`.
     *
     * @param {String|RegExp} path Path string or regular expression.
     * @param {Array} methods Array of HTTP verbs.
     * @param {Array} middleware Layer callback/middleware or series of.
     * @param {Object=} opts
     * @param {String=} opts.name route name
     * @param {String=} opts.sensitive case sensitive (default: false)
     * @param {String=} opts.strict require the trailing slash (default: false)
     * @returns {Layer}
     * @private
     */

    function Layer(path, methods, middleware, opts) {
      this.opts = opts || {};
      this.name = this.opts.name || null;
      this.methods = [];
      this.paramNames = [];
      this.stack = Array.isArray(middleware) ? middleware : [middleware];

      for (let i = 0; i < methods.length; i++) {
        const l = this.methods.push(methods[i].toUpperCase());
        if (this.methods[l - 1] === 'GET') this.methods.unshift('HEAD');
      }

      // ensure middleware is a function
      for (let i = 0; i < this.stack.length; i++) {
        const fn = this.stack[i];
        const type = (typeof fn);
        if (type !== 'function')
          throw new Error(
            `${methods.toString()} \`${this.opts.name || path}\`: \`middleware\` must be a function, not \`${type}\``
          );
      }

      this.path = path;
      this.regexp = pathToRegexp$1(path, this.paramNames, this.opts);
    }
    /**
     * Returns whether request `path` matches route.
     *
     * @param {String} path
     * @returns {Boolean}
     * @private
     */

    Layer.prototype.match = function (path) {
      return this.regexp.test(path);
    };

    /**
     * Returns map of URL parameters for given `path` and `paramNames`.
     *
     * @param {String} path
     * @param {Array.<String>} captures
     * @param {Object=} existingParams
     * @returns {Object}
     * @private
     */

    Layer.prototype.params = function (path, captures, existingParams) {
      const params = existingParams || {};

      for (let len = captures.length, i = 0; i < len; i++) {
        if (this.paramNames[i]) {
          const c = captures[i];
          if (c && c.length !== 0) params[this.paramNames[i].name] = c ? safeDecodeURIComponent(c) : c;
        }
      }

      return params;
    };

    /**
     * Returns array of regexp url path captures.
     *
     * @param {String} path
     * @returns {Array.<String>}
     * @private
     */

    Layer.prototype.captures = function (path) {
      return this.opts.ignoreCaptures ? [] : path.match(this.regexp).slice(1);
    };

    /**
     * Generate URL for route using given `params`.
     *
     * @example
     *
     * ```javascript
     * const route = new Layer('/users/:id', ['GET'], fn);
     *
     * route.url({ id: 123 }); // => "/users/123"
     * ```
     *
     * @param {Object} params url parameters
     * @returns {String}
     * @private
     */

    Layer.prototype.url = function (params, options) {
      let args = params;
      const url = this.path.replace(/\(\.\*\)/g, '');

      if (typeof params != 'object') {
        args = Array.prototype.slice.call(arguments);
        if (typeof args[args.length - 1] == 'object') {
          options = args[args.length - 1];
          args = args.slice(0, args.length - 1);
        }
      }

      const toPath = compile(url, options);
      let replaced;

      const tokens = parse$1(url);
      let replace = {};

      if (args instanceof Array) {
        for (let len = tokens.length, i = 0, j = 0; i < len; i++) {
          if (tokens[i].name) replace[tokens[i].name] = args[j++];
        }
      } else if (tokens.some(token => token.name)) {
        replace = params;
      } else if (!options) {
        options = params;
      }

      replaced = toPath(replace);

      if (options && options.query) {
        replaced = parseUrl(replaced);
        if (typeof options.query === 'string') {
          replaced.search = options.query;
        } else {
          replaced.search = undefined;
          replaced.query = options.query;
        }
        return formatUrl(replaced);
      }

      return replaced;
    };

    /**
     * Run validations on route named parameters.
     *
     * @example
     *
     * ```javascript
     * router
     *   .param('user', function (id, ctx, next) {
     *     ctx.user = users[id];
     *     if (!user) return ctx.status = 404;
     *     next();
     *   })
     *   .get('/users/:user', function (ctx, next) {
     *     ctx.body = ctx.user;
     *   });
     * ```
     *
     * @param {String} param
     * @param {Function} middleware
     * @returns {Layer}
     * @private
     */

    Layer.prototype.param = function (param, fn) {
      const stack = this.stack;
      const params = this.paramNames;
      const middleware = function (ctx, next) {
        return fn.call(this, ctx.params[param], ctx, next);
      };
      middleware.param = param;

      const names = params.map(function (p) {
        return p.name;
      });

      const x = names.indexOf(param);
      if (x > -1) {
        // iterate through the stack, to figure out where to place the handler fn
        stack.some(function (fn, i) {
          // param handlers are always first, so when we find an fn w/o a param property, stop here
          // if the param handler at this part of the stack comes after the one we are adding, stop here
          if (!fn.param || names.indexOf(fn.param) > x) {
            // inject this param handler right before the current item
            stack.splice(i, 0, middleware);
            return true; // then break the loop
          }
        });
      }

      return this;
    };

    /**
     * Prefix route path.
     *
     * @param {String} prefix
     * @returns {Layer}
     * @private
     */

    Layer.prototype.setPrefix = function (prefix) {
      if (this.path) {
        this.path = (this.path !== '/' || this.opts.strict === true) ? `${prefix}${this.path}` : prefix;
        this.paramNames = [];
        this.regexp = pathToRegexp$1(this.path, this.paramNames, this.opts);
      }

      return this;
    };

    /**
     * Safe decodeURIComponent, won't throw any error.
     * If `decodeURIComponent` error happen, just return the original value.
     *
     * @param {String} text
     * @returns {String} URL decode original string.
     * @private
     */

    function safeDecodeURIComponent(text) {
      try {
        return decodeURIComponent(text);
      } catch (e) {
        return text;
      }
    }

    /**
     * RESTful resource routing middleware for koa.
     *
     * @author Alex Mingoia <talk@alexmingoia.com>
     * @link https://github.com/alexmingoia/koa-router
     */

    const debug$2 = src$1('koa-router');




    const { pathToRegexp } = require$$1;

    /**
     * @module koa-router
     */

    var router$1 = Router;

    /**
     * Create a new router.
     *
     * @example
     *
     * Basic usage:
     *
     * ```javascript
     * const Koa = require('koa');
     * const Router = require('@koa/router');
     *
     * const app = new Koa();
     * const router = new Router();
     *
     * router.get('/', (ctx, next) => {
     *   // ctx.router available
     * });
     *
     * app
     *   .use(router.routes())
     *   .use(router.allowedMethods());
     * ```
     *
     * @alias module:koa-router
     * @param {Object=} opts
     * @param {String=} opts.prefix prefix router paths
     * @constructor
     */

    function Router(opts) {
      if (!(this instanceof Router)) return new Router(opts);

      this.opts = opts || {};
      this.methods = this.opts.methods || [
        'HEAD',
        'OPTIONS',
        'GET',
        'PUT',
        'PATCH',
        'POST',
        'DELETE'
      ];

      this.params = {};
      this.stack = [];
    }
    /**
     * Create `router.verb()` methods, where *verb* is one of the HTTP verbs such
     * as `router.get()` or `router.post()`.
     *
     * Match URL patterns to callback functions or controller actions using `router.verb()`,
     * where **verb** is one of the HTTP verbs such as `router.get()` or `router.post()`.
     *
     * Additionaly, `router.all()` can be used to match against all methods.
     *
     * ```javascript
     * router
     *   .get('/', (ctx, next) => {
     *     ctx.body = 'Hello World!';
     *   })
     *   .post('/users', (ctx, next) => {
     *     // ...
     *   })
     *   .put('/users/:id', (ctx, next) => {
     *     // ...
     *   })
     *   .del('/users/:id', (ctx, next) => {
     *     // ...
     *   })
     *   .all('/users/:id', (ctx, next) => {
     *     // ...
     *   });
     * ```
     *
     * When a route is matched, its path is available at `ctx._matchedRoute` and if named,
     * the name is available at `ctx._matchedRouteName`
     *
     * Route paths will be translated to regular expressions using
     * [path-to-regexp](https://github.com/pillarjs/path-to-regexp).
     *
     * Query strings will not be considered when matching requests.
     *
     * #### Named routes
     *
     * Routes can optionally have names. This allows generation of URLs and easy
     * renaming of URLs during development.
     *
     * ```javascript
     * router.get('user', '/users/:id', (ctx, next) => {
     *  // ...
     * });
     *
     * router.url('user', 3);
     * // => "/users/3"
     * ```
     *
     * #### Multiple middleware
     *
     * Multiple middleware may be given:
     *
     * ```javascript
     * router.get(
     *   '/users/:id',
     *   (ctx, next) => {
     *     return User.findOne(ctx.params.id).then(function(user) {
     *       ctx.user = user;
     *       next();
     *     });
     *   },
     *   ctx => {
     *     console.log(ctx.user);
     *     // => { id: 17, name: "Alex" }
     *   }
     * );
     * ```
     *
     * ### Nested routers
     *
     * Nesting routers is supported:
     *
     * ```javascript
     * const forums = new Router();
     * const posts = new Router();
     *
     * posts.get('/', (ctx, next) => {...});
     * posts.get('/:pid', (ctx, next) => {...});
     * forums.use('/forums/:fid/posts', posts.routes(), posts.allowedMethods());
     *
     * // responds to "/forums/123/posts" and "/forums/123/posts/123"
     * app.use(forums.routes());
     * ```
     *
     * #### Router prefixes
     *
     * Route paths can be prefixed at the router level:
     *
     * ```javascript
     * const router = new Router({
     *   prefix: '/users'
     * });
     *
     * router.get('/', ...); // responds to "/users"
     * router.get('/:id', ...); // responds to "/users/:id"
     * ```
     *
     * #### URL parameters
     *
     * Named route parameters are captured and added to `ctx.params`.
     *
     * ```javascript
     * router.get('/:category/:title', (ctx, next) => {
     *   console.log(ctx.params);
     *   // => { category: 'programming', title: 'how-to-node' }
     * });
     * ```
     *
     * The [path-to-regexp](https://github.com/pillarjs/path-to-regexp) module is
     * used to convert paths to regular expressions.
     *
     * @name get|put|post|patch|delete|del
     * @memberof module:koa-router.prototype
     * @param {String} path
     * @param {Function=} middleware route middleware(s)
     * @param {Function} callback route callback
     * @returns {Router}
     */

    for (let i = 0; i < methods.length; i++) {
      function setMethodVerb(method) {
        Router.prototype[method] = function(name, path, middleware) {
          if (typeof path === "string" || path instanceof RegExp) {
            middleware = Array.prototype.slice.call(arguments, 2);
          } else {
            middleware = Array.prototype.slice.call(arguments, 1);
            path = name;
            name = null;
          }

          this.register(path, [method], middleware, {
            name: name
          });

          return this;
        };
      }
      setMethodVerb(methods[i]);
    }

    // Alias for `router.delete()` because delete is a reserved word
    Router.prototype.del = Router.prototype['delete'];

    /**
     * Use given middleware.
     *
     * Middleware run in the order they are defined by `.use()`. They are invoked
     * sequentially, requests start at the first middleware and work their way
     * "down" the middleware stack.
     *
     * @example
     *
     * ```javascript
     * // session middleware will run before authorize
     * router
     *   .use(session())
     *   .use(authorize());
     *
     * // use middleware only with given path
     * router.use('/users', userAuth());
     *
     * // or with an array of paths
     * router.use(['/users', '/admin'], userAuth());
     *
     * app.use(router.routes());
     * ```
     *
     * @param {String=} path
     * @param {Function} middleware
     * @param {Function=} ...
     * @returns {Router}
     */

    Router.prototype.use = function () {
      const router = this;
      const middleware = Array.prototype.slice.call(arguments);
      let path;

      // support array of paths
      if (Array.isArray(middleware[0]) && typeof middleware[0][0] === 'string') {
        let arrPaths = middleware[0];
        for (let i = 0; i < arrPaths.length; i++) {
          const p = arrPaths[i];
          router.use.apply(router, [p].concat(middleware.slice(1)));
        }

        return this;
      }

      const hasPath = typeof middleware[0] === 'string';
      if (hasPath) path = middleware.shift();

      for (let i = 0; i < middleware.length; i++) {
        const m = middleware[i];
        if (m.router) {
          const cloneRouter = Object.assign(Object.create(Router.prototype), m.router, {
            stack: m.router.stack.slice(0)
          });

          for (let j = 0; j < cloneRouter.stack.length; j++) {
            const nestedLayer = cloneRouter.stack[j];
            const cloneLayer = Object.assign(
              Object.create(layer.prototype),
              nestedLayer
            );

            if (path) cloneLayer.setPrefix(path);
            if (router.opts.prefix) cloneLayer.setPrefix(router.opts.prefix);
            router.stack.push(cloneLayer);
            cloneRouter.stack[j] = cloneLayer;
          }

          if (router.params) {
            function setRouterParams(paramArr) {
              const routerParams = paramArr;
              for (let j = 0; j < routerParams.length; j++) {
                const key = routerParams[j];
                cloneRouter.param(key, router.params[key]);
              }
            }
            setRouterParams(Object.keys(router.params));
          }
        } else {
          const keys = [];
          pathToRegexp(router.opts.prefix || '', keys);
          const routerPrefixHasParam = router.opts.prefix && keys.length;
          router.register(path || '([^\/]*)', [], m, { end: false, ignoreCaptures: !hasPath && !routerPrefixHasParam });
        }
      }

      return this;
    };

    /**
     * Set the path prefix for a Router instance that was already initialized.
     *
     * @example
     *
     * ```javascript
     * router.prefix('/things/:thing_id')
     * ```
     *
     * @param {String} prefix
     * @returns {Router}
     */

    Router.prototype.prefix = function (prefix) {
      prefix = prefix.replace(/\/$/, '');

      this.opts.prefix = prefix;

      for (let i = 0; i < this.stack.length; i++) {
        const route = this.stack[i];
        route.setPrefix(prefix);
      }

      return this;
    };

    /**
     * Returns router middleware which dispatches a route matching the request.
     *
     * @returns {Function}
     */

    Router.prototype.routes = Router.prototype.middleware = function () {
      const router = this;

      let dispatch = function dispatch(ctx, next) {
        debug$2('%s %s', ctx.method, ctx.path);

        const path = router.opts.routerPath || ctx.routerPath || ctx.path;
        const matched = router.match(path, ctx.method);
        let layerChain;

        if (ctx.matched) {
          ctx.matched.push.apply(ctx.matched, matched.path);
        } else {
          ctx.matched = matched.path;
        }

        ctx.router = router;

        if (!matched.route) return next();

        const matchedLayers = matched.pathAndMethod;
        const mostSpecificLayer = matchedLayers[matchedLayers.length - 1];
        ctx._matchedRoute = mostSpecificLayer.path;
        if (mostSpecificLayer.name) {
          ctx._matchedRouteName = mostSpecificLayer.name;
        }

        layerChain = matchedLayers.reduce(function(memo, layer) {
          memo.push(function(ctx, next) {
            ctx.captures = layer.captures(path, ctx.captures);
            ctx.params = ctx.request.params = layer.params(path, ctx.captures, ctx.params);
            ctx.routerPath = layer.path;
            ctx.routerName = layer.name;
            ctx._matchedRoute = layer.path;
            if (layer.name) {
              ctx._matchedRouteName = layer.name;
            }
            return next();
          });
          return memo.concat(layer.stack);
        }, []);

        return koaCompose(layerChain)(ctx, next);
      };

      dispatch.router = this;

      return dispatch;
    };

    /**
     * Returns separate middleware for responding to `OPTIONS` requests with
     * an `Allow` header containing the allowed methods, as well as responding
     * with `405 Method Not Allowed` and `501 Not Implemented` as appropriate.
     *
     * @example
     *
     * ```javascript
     * const Koa = require('koa');
     * const Router = require('@koa/router');
     *
     * const app = new Koa();
     * const router = new Router();
     *
     * app.use(router.routes());
     * app.use(router.allowedMethods());
     * ```
     *
     * **Example with [Boom](https://github.com/hapijs/boom)**
     *
     * ```javascript
     * const Koa = require('koa');
     * const Router = require('@koa/router');
     * const Boom = require('boom');
     *
     * const app = new Koa();
     * const router = new Router();
     *
     * app.use(router.routes());
     * app.use(router.allowedMethods({
     *   throw: true,
     *   notImplemented: () => new Boom.notImplemented(),
     *   methodNotAllowed: () => new Boom.methodNotAllowed()
     * }));
     * ```
     *
     * @param {Object=} options
     * @param {Boolean=} options.throw throw error instead of setting status and header
     * @param {Function=} options.notImplemented throw the returned value in place of the default NotImplemented error
     * @param {Function=} options.methodNotAllowed throw the returned value in place of the default MethodNotAllowed error
     * @returns {Function}
     */

    Router.prototype.allowedMethods = function (options) {
      options = options || {};
      const implemented = this.methods;

      return function allowedMethods(ctx, next) {
        return next().then(function() {
          const allowed = {};

          if (!ctx.status || ctx.status === 404) {
            for (let i = 0; i < ctx.matched.length; i++) {
              const route = ctx.matched[i];
              for (let j = 0; j < route.methods.length; j++) {
                const method = route.methods[j];
                allowed[method] = method;
              }
            }

            const allowedArr = Object.keys(allowed);

            if (!~implemented.indexOf(ctx.method)) {
              if (options.throw) {
                let notImplementedThrowable = (typeof options.notImplemented === 'function')
                ? options.notImplemented()  // set whatever the user returns from their function
                : new httpErrors$1.NotImplemented();

                throw notImplementedThrowable;
              } else {
                ctx.status = 501;
                ctx.set('Allow', allowedArr.join(', '));
              }
            } else if (allowedArr.length) {
              if (ctx.method === 'OPTIONS') {
                ctx.status = 200;
                ctx.body = '';
                ctx.set('Allow', allowedArr.join(', '));
              } else if (!allowed[ctx.method]) {
                if (options.throw) {
                  let notAllowedThrowable = (typeof options.methodNotAllowed === 'function')
                  ? options.methodNotAllowed() // set whatever the user returns from their function
                  : new httpErrors$1.MethodNotAllowed();

                  throw notAllowedThrowable;
                } else {
                  ctx.status = 405;
                  ctx.set('Allow', allowedArr.join(', '));
                }
              }
            }
          }
        });
      };
    };

    /**
     * Register route with all methods.
     *
     * @param {String} name Optional.
     * @param {String} path
     * @param {Function=} middleware You may also pass multiple middleware.
     * @param {Function} callback
     * @returns {Router}
     * @private
     */

    Router.prototype.all = function (name, path, middleware) {
      if (typeof path === 'string') {
        middleware = Array.prototype.slice.call(arguments, 2);
      } else {
        middleware = Array.prototype.slice.call(arguments, 1);
        path = name;
        name = null;
      }

      this.register(path, methods, middleware, { name });

      return this;
    };

    /**
     * Redirect `source` to `destination` URL with optional 30x status `code`.
     *
     * Both `source` and `destination` can be route names.
     *
     * ```javascript
     * router.redirect('/login', 'sign-in');
     * ```
     *
     * This is equivalent to:
     *
     * ```javascript
     * router.all('/login', ctx => {
     *   ctx.redirect('/sign-in');
     *   ctx.status = 301;
     * });
     * ```
     *
     * @param {String} source URL or route name.
     * @param {String} destination URL or route name.
     * @param {Number=} code HTTP status code (default: 301).
     * @returns {Router}
     */

    Router.prototype.redirect = function (source, destination, code) {
      // lookup source route by name
      if (source[0] !== '/') source = this.url(source);

      // lookup destination route by name
      if (destination[0] !== '/' && !destination.includes('://')) destination = this.url(destination);

      return this.all(source, ctx => {
        ctx.redirect(destination);
        ctx.status = code || 301;
      });
    };

    /**
     * Create and register a route.
     *
     * @param {String} path Path string.
     * @param {Array.<String>} methods Array of HTTP verbs.
     * @param {Function} middleware Multiple middleware also accepted.
     * @returns {Layer}
     * @private
     */

    Router.prototype.register = function (path, methods, middleware, opts) {
      opts = opts || {};

      const router = this;
      const stack = this.stack;

      // support array of paths
      if (Array.isArray(path)) {
        for (let i = 0; i < path.length; i++) {
          const curPath = path[i];
          router.register.call(router, curPath, methods, middleware, opts);
        }

        return this;
      }

      // create route
      const route = new layer(path, methods, middleware, {
        end: opts.end === false ? opts.end : true,
        name: opts.name,
        sensitive: opts.sensitive || this.opts.sensitive || false,
        strict: opts.strict || this.opts.strict || false,
        prefix: opts.prefix || this.opts.prefix || "",
        ignoreCaptures: opts.ignoreCaptures
      });

      if (this.opts.prefix) {
        route.setPrefix(this.opts.prefix);
      }

      // add parameter middleware
      for (let i = 0; i < Object.keys(this.params).length; i++) {
        const param = Object.keys(this.params)[i];
        route.param(param, this.params[param]);
      }

      stack.push(route);

      debug$2('defined route %s %s', route.methods, route.path);

      return route;
    };

    /**
     * Lookup route with given `name`.
     *
     * @param {String} name
     * @returns {Layer|false}
     */

    Router.prototype.route = function (name) {
      const routes = this.stack;

      for (let len = routes.length, i=0; i<len; i++) {
        if (routes[i].name && routes[i].name === name) return routes[i];
      }

      return false;
    };

    /**
     * Generate URL for route. Takes a route name and map of named `params`.
     *
     * @example
     *
     * ```javascript
     * router.get('user', '/users/:id', (ctx, next) => {
     *   // ...
     * });
     *
     * router.url('user', 3);
     * // => "/users/3"
     *
     * router.url('user', { id: 3 });
     * // => "/users/3"
     *
     * router.use((ctx, next) => {
     *   // redirect to named route
     *   ctx.redirect(ctx.router.url('sign-in'));
     * })
     *
     * router.url('user', { id: 3 }, { query: { limit: 1 } });
     * // => "/users/3?limit=1"
     *
     * router.url('user', { id: 3 }, { query: "limit=1" });
     * // => "/users/3?limit=1"
     * ```
     *
     * @param {String} name route name
     * @param {Object} params url parameters
     * @param {Object} [options] options parameter
     * @param {Object|String} [options.query] query options
     * @returns {String|Error}
     */

    Router.prototype.url = function (name, params) {
      const route = this.route(name);

      if (route) {
        const args = Array.prototype.slice.call(arguments, 1);
        return route.url.apply(route, args);
      }

      return new Error(`No route found for name: ${name}`);
    };

    /**
     * Match given `path` and return corresponding routes.
     *
     * @param {String} path
     * @param {String} method
     * @returns {Object.<path, pathAndMethod>} returns layers that matched path and
     * path and method.
     * @private
     */

    Router.prototype.match = function (path, method) {
      const layers = this.stack;
      let layer;
      const matched = {
        path: [],
        pathAndMethod: [],
        route: false
      };

      for (let len = layers.length, i = 0; i < len; i++) {
        layer = layers[i];

        debug$2('test %s %s', layer.path, layer.regexp);

        if (layer.match(path)) {
          matched.path.push(layer);

          if (layer.methods.length === 0 || ~layer.methods.indexOf(method)) {
            matched.pathAndMethod.push(layer);
            if (layer.methods.length) matched.route = true;
          }
        }
      }

      return matched;
    };

    /**
     * Run middleware for named route parameters. Useful for auto-loading or
     * validation.
     *
     * @example
     *
     * ```javascript
     * router
     *   .param('user', (id, ctx, next) => {
     *     ctx.user = users[id];
     *     if (!ctx.user) return ctx.status = 404;
     *     return next();
     *   })
     *   .get('/users/:user', ctx => {
     *     ctx.body = ctx.user;
     *   })
     *   .get('/users/:user/friends', ctx => {
     *     return ctx.user.getFriends().then(function(friends) {
     *       ctx.body = friends;
     *     });
     *   })
     *   // /users/3 => {"id": 3, "name": "Alex"}
     *   // /users/3/friends => [{"id": 4, "name": "TJ"}]
     * ```
     *
     * @param {String} param
     * @param {Function} middleware
     * @returns {Router}
     */

    Router.prototype.param = function(param, middleware) {
      this.params[param] = middleware;
      for (let i = 0; i < this.stack.length; i++) {
        const route = this.stack[i];
        route.param(param, middleware);
      }

      return this;
    };

    /**
     * Generate URL from url pattern and given `params`.
     *
     * @example
     *
     * ```javascript
     * const url = Router.url('/users/:id', {id: 1});
     * // => "/users/1"
     * ```
     *
     * @param {String} path url pattern
     * @param {Object} params url parameters
     * @returns {String}
     */
    Router.url = function (path) {
      const args = Array.prototype.slice.call(arguments, 1);
      return layer.prototype.url.apply({ path }, args);
    };

    /**
     * CORS middleware for koa2
     *
     * @param {Object} [options]
     *  - {String|Function(ctx)} origin `Access-Control-Allow-Origin`, default is request Origin header
     *  - {Array} exposeHeaders `Access-Control-Expose-Headers`
     *  - {String|Number} maxAge `Access-Control-Max-Age` in seconds
     *  - {Boolean} credentials `Access-Control-Allow-Credentials`
     *  - {Array} allowMethods `Access-Control-Allow-Methods`,
     *    default is ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS']
     *  - {Array} allowHeaders `Access-Control-Allow-Headers`
     * @return {Function}
     * @api public
     */
    var dist = function crossOrigin(options = {}) {
      const defaultOptions = {
        allowMethods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS']
      };

      // set defaultOptions to options
      options = Object.assign({}, defaultOptions, options); // eslint-disable-line no-param-reassign

      // eslint-disable-next-line consistent-return
      return async function cors(ctx, next) {
        // always set vary Origin Header
        // https://github.com/rs/cors/issues/10
        ctx.vary('Origin');

        let origin;
        if (typeof options.origin === 'function') {
          origin = options.origin(ctx);
        } else {
          origin = options.origin || ctx.get('Origin') || '*';
        }
        if (!origin) {
          return await next();
        }

        // Access-Control-Allow-Origin
        ctx.set('Access-Control-Allow-Origin', origin);

        if (ctx.method === 'OPTIONS') {
          // Preflight Request
          if (!ctx.get('Access-Control-Request-Method')) {
            return await next();
          }

          // Access-Control-Max-Age
          if (options.maxAge) {
            ctx.set('Access-Control-Max-Age', String(options.maxAge));
          }

          // Access-Control-Allow-Credentials
          if (options.credentials === true) {
            // When used as part of a response to a preflight request,
            // this indicates whether or not the actual request can be made using credentials.
            ctx.set('Access-Control-Allow-Credentials', 'true');
          }

          // Access-Control-Allow-Methods
          if (options.allowMethods) {
            ctx.set('Access-Control-Allow-Methods', options.allowMethods.join(','));
          }

          // Access-Control-Allow-Headers
          if (options.allowHeaders) {
            ctx.set('Access-Control-Allow-Headers', options.allowHeaders.join(','));
          } else {
            ctx.set('Access-Control-Allow-Headers', ctx.get('Access-Control-Request-Headers'));
          }

          ctx.status = 204; // No Content
        } else {
          // Request
          // Access-Control-Allow-Credentials
          if (options.credentials === true) {
            if (origin === '*') {
              // `credentials` can't be true when the `origin` is set to `*`
              ctx.remove('Access-Control-Allow-Credentials');
            } else {
              ctx.set('Access-Control-Allow-Credentials', 'true');
            }
          }

          // Access-Control-Expose-Headers
          if (options.exposeHeaders) {
            ctx.set('Access-Control-Expose-Headers', options.exposeHeaders.join(','));
          }

          try {
            await next();
          } catch (err) {
            throw err;
          }
        }
      };
    };

    /**
     * This is the common logic for both the Node.js and web browser
     * implementations of `debug()`.
     */
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = ms;
      Object.keys(env).forEach(function (key) {
        createDebug[key] = env[key];
      });
      /**
      * Active `debug` instances.
      */

      createDebug.instances = [];
      /**
      * The currently active debug mode names, and names to skip.
      */

      createDebug.names = [];
      createDebug.skips = [];
      /**
      * Map of special "%n" handling functions, for the debug "format" argument.
      *
      * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
      */

      createDebug.formatters = {};
      /**
      * Selects a color for a debug namespace
      * @param {String} namespace The namespace string for the for the debug instance to be colored
      * @return {Number|String} An ANSI color code for the given namespace
      * @api private
      */

      function selectColor(namespace) {
        var hash = 0;

        for (var i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0; // Convert to 32bit integer
        }

        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }

      createDebug.selectColor = selectColor;
      /**
      * Create a debugger with the given `namespace`.
      *
      * @param {String} namespace
      * @return {Function}
      * @api public
      */

      function createDebug(namespace) {
        var prevTime;

        function debug() {
          // Disabled?
          if (!debug.enabled) {
            return;
          }

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var self = debug; // Set `diff` timestamp

          var curr = Number(new Date());
          var ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);

          if (typeof args[0] !== 'string') {
            // Anything else let's inspect with %O
            args.unshift('%O');
          } // Apply any `formatters` transformations


          var index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
            // If we encounter an escaped % then don't increase the array index
            if (match === '%%') {
              return match;
            }

            index++;
            var formatter = createDebug.formatters[format];

            if (typeof formatter === 'function') {
              var val = args[index];
              match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

              args.splice(index, 1);
              index--;
            }

            return match;
          }); // Apply env-specific formatting (colors, etc.)

          createDebug.formatArgs.call(self, args);
          var logFn = self.log || createDebug.log;
          logFn.apply(self, args);
        }

        debug.namespace = namespace;
        debug.enabled = createDebug.enabled(namespace);
        debug.useColors = createDebug.useColors();
        debug.color = selectColor(namespace);
        debug.destroy = destroy;
        debug.extend = extend; // Debug.formatArgs = formatArgs;
        // debug.rawLog = rawLog;
        // env-specific initialization logic for debug instances

        if (typeof createDebug.init === 'function') {
          createDebug.init(debug);
        }

        createDebug.instances.push(debug);
        return debug;
      }

      function destroy() {
        var index = createDebug.instances.indexOf(this);

        if (index !== -1) {
          createDebug.instances.splice(index, 1);
          return true;
        }

        return false;
      }

      function extend(namespace, delimiter) {
        return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
      }
      /**
      * Enables a debug mode by namespaces. This can include modes
      * separated by a colon and wildcards.
      *
      * @param {String} namespaces
      * @api public
      */


      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.names = [];
        createDebug.skips = [];
        var i;
        var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
        var len = split.length;

        for (i = 0; i < len; i++) {
          if (!split[i]) {
            // ignore empty strings
            continue;
          }

          namespaces = split[i].replace(/\*/g, '.*?');

          if (namespaces[0] === '-') {
            createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
          } else {
            createDebug.names.push(new RegExp('^' + namespaces + '$'));
          }
        }

        for (i = 0; i < createDebug.instances.length; i++) {
          var instance = createDebug.instances[i];
          instance.enabled = createDebug.enabled(instance.namespace);
        }
      }
      /**
      * Disable debug output.
      *
      * @api public
      */


      function disable() {
        createDebug.enable('');
      }
      /**
      * Returns true if the given mode name is enabled, false otherwise.
      *
      * @param {String} name
      * @return {Boolean}
      * @api public
      */


      function enabled(name) {
        if (name[name.length - 1] === '*') {
          return true;
        }

        var i;
        var len;

        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }

        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }

        return false;
      }
      /**
      * Coerce `val`.
      *
      * @param {Mixed} val
      * @return {Mixed}
      * @api private
      */


      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }

        return val;
      }

      createDebug.enable(createDebug.load());
      return createDebug;
    }

    var common = setup;

    var browser = createCommonjsModule(function (module, exports) {

    function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

    /* eslint-env browser */

    /**
     * This is the web browser implementation of `debug()`.
     */
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    /**
     * Colors.
     */

    exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
    /**
     * Currently only WebKit-based Web Inspectors, Firefox >= v31,
     * and the Firebug extension (any Firefox version) are known
     * to support "%c" CSS customizations.
     *
     * TODO: add a `localStorage` variable to explicitly enable/disable colors
     */
    // eslint-disable-next-line complexity

    function useColors() {
      // NB: In an Electron preload script, document will be defined but not fully
      // initialized. Since we know we're in Chrome, we'll just detect this case
      // explicitly
      if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
        return true;
      } // Internet Explorer and Edge do not support colors.


      if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      } // Is webkit? http://stackoverflow.com/a/16459606/376773
      // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


      return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    /**
     * Colorize log arguments if enabled.
     *
     * @api public
     */


    function formatArgs(args) {
      args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

      if (!this.useColors) {
        return;
      }

      var c = 'color: ' + this.color;
      args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
      // arguments passed either before or after the %c, so we need to
      // figure out the correct index to insert the CSS into

      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function (match) {
        if (match === '%%') {
          return;
        }

        index++;

        if (match === '%c') {
          // We only are interested in the *last* %c
          // (the user may have provided their own)
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    /**
     * Invokes `console.log()` when available.
     * No-op when `console.log` is not a "function".
     *
     * @api public
     */


    function log() {
      var _console;

      // This hackery is required for IE8/9, where
      // the `console.log` function doesn't have 'apply'
      return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
    }
    /**
     * Save `namespaces`.
     *
     * @param {String} namespaces
     * @api private
     */


    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem('debug', namespaces);
        } else {
          exports.storage.removeItem('debug');
        }
      } catch (error) {// Swallow
        // XXX (@Qix-) should we be logging these?
      }
    }
    /**
     * Load `namespaces`.
     *
     * @return {String} returns the previously persisted debug modes
     * @api private
     */


    function load() {
      var r;

      try {
        r = exports.storage.getItem('debug');
      } catch (error) {} // Swallow
      // XXX (@Qix-) should we be logging these?
      // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


      if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
      }

      return r;
    }
    /**
     * Localstorage attempts to return the localstorage.
     *
     * This is necessary because safari throws
     * when a user disables cookies/localstorage
     * and you attempt to access it.
     *
     * @return {LocalStorage}
     * @api private
     */


    function localstorage() {
      try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
      } catch (error) {// Swallow
        // XXX (@Qix-) should we be logging these?
      }
    }

    module.exports = common(exports);
    var formatters = module.exports.formatters;
    /**
     * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
     */

    formatters.j = function (v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
      }
    };
    });

    var node = createCommonjsModule(function (module, exports) {

    /**
     * Module dependencies.
     */



    /**
     * This is the Node.js implementation of `debug()`.
     */


    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    /**
     * Colors.
     */

    exports.colors = [6, 2, 3, 4, 5, 1];

    try {
      // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
      // eslint-disable-next-line import/no-extraneous-dependencies
      var supportsColor = supportsColor_1;

      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221];
      }
    } catch (error) {} // Swallow - we only care if `supports-color` is available; it doesn't have to be.

    /**
     * Build up the default `inspectOpts` object from the environment variables.
     *
     *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
     */


    exports.inspectOpts = Object.keys(process.env).filter(function (key) {
      return /^debug_/i.test(key);
    }).reduce(function (obj, key) {
      // Camel-case
      var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function (_, k) {
        return k.toUpperCase();
      }); // Coerce string value into JS value

      var val = process.env[key];

      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === 'null') {
        val = null;
      } else {
        val = Number(val);
      }

      obj[prop] = val;
      return obj;
    }, {});
    /**
     * Is stdout a TTY? Colored output is enabled when `true`.
     */

    function useColors() {
      return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty__default["default"].isatty(process.stderr.fd);
    }
    /**
     * Adds ANSI color escape codes if enabled.
     *
     * @api public
     */


    function formatArgs(args) {
      var name = this.namespace,
          useColors = this.useColors;

      if (useColors) {
        var c = this.color;
        var colorCode = "\x1B[3" + (c < 8 ? c : '8;5;' + c);
        var prefix = "  ".concat(colorCode, ";1m").concat(name, " \x1B[0m");
        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + ' ' + args[0];
      }
    }

    function getDate() {
      if (exports.inspectOpts.hideDate) {
        return '';
      }

      return new Date().toISOString() + ' ';
    }
    /**
     * Invokes `util.format()` with the specified arguments and writes to stderr.
     */


    function log() {
      return process.stderr.write(util__default["default"].format.apply(util__default["default"], arguments) + '\n');
    }
    /**
     * Save `namespaces`.
     *
     * @param {String} namespaces
     * @api private
     */


    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
      }
    }
    /**
     * Load `namespaces`.
     *
     * @return {String} returns the previously persisted debug modes
     * @api private
     */


    function load() {
      return process.env.DEBUG;
    }
    /**
     * Init logic for `debug` instances.
     *
     * Create a new `inspectOpts` object in case `useColors` is set
     * differently for a particular `debug` instance.
     */


    function init(debug) {
      debug.inspectOpts = {};
      var keys = Object.keys(exports.inspectOpts);

      for (var i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }

    module.exports = common(exports);
    var formatters = module.exports.formatters;
    /**
     * Map %o to `util.inspect()`, all on a single line.
     */

    formatters.o = function (v) {
      this.inspectOpts.colors = this.useColors;
      return util__default["default"].inspect(v, this.inspectOpts)
        .split('\n')
        .map(function (str) { return str.trim(); })
        .join(' ');
    };
    /**
     * Map %O to `util.inspect()`, allowing multiple lines if needed.
     */


    formatters.O = function (v) {
      this.inspectOpts.colors = this.useColors;
      return util__default["default"].inspect(v, this.inspectOpts);
    };
    });

    var src = createCommonjsModule(function (module) {

    /**
     * Detect Electron renderer / nwjs process, which is node, but we should
     * treat as a browser.
     */
    if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
      module.exports = browser;
    } else {
      module.exports = node;
    }
    });

    /*!
     * depd
     * Copyright(c) 2014 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module exports.
     */

    var callsiteTostring = callSiteToString$1;

    /**
     * Format a CallSite file location to a string.
     */

    function callSiteFileLocation (callSite) {
      var fileName;
      var fileLocation = '';

      if (callSite.isNative()) {
        fileLocation = 'native';
      } else if (callSite.isEval()) {
        fileName = callSite.getScriptNameOrSourceURL();
        if (!fileName) {
          fileLocation = callSite.getEvalOrigin();
        }
      } else {
        fileName = callSite.getFileName();
      }

      if (fileName) {
        fileLocation += fileName;

        var lineNumber = callSite.getLineNumber();
        if (lineNumber != null) {
          fileLocation += ':' + lineNumber;

          var columnNumber = callSite.getColumnNumber();
          if (columnNumber) {
            fileLocation += ':' + columnNumber;
          }
        }
      }

      return fileLocation || 'unknown source'
    }

    /**
     * Format a CallSite to a string.
     */

    function callSiteToString$1 (callSite) {
      var addSuffix = true;
      var fileLocation = callSiteFileLocation(callSite);
      var functionName = callSite.getFunctionName();
      var isConstructor = callSite.isConstructor();
      var isMethodCall = !(callSite.isToplevel() || isConstructor);
      var line = '';

      if (isMethodCall) {
        var methodName = callSite.getMethodName();
        var typeName = getConstructorName(callSite);

        if (functionName) {
          if (typeName && functionName.indexOf(typeName) !== 0) {
            line += typeName + '.';
          }

          line += functionName;

          if (methodName && functionName.lastIndexOf('.' + methodName) !== functionName.length - methodName.length - 1) {
            line += ' [as ' + methodName + ']';
          }
        } else {
          line += typeName + '.' + (methodName || '<anonymous>');
        }
      } else if (isConstructor) {
        line += 'new ' + (functionName || '<anonymous>');
      } else if (functionName) {
        line += functionName;
      } else {
        addSuffix = false;
        line += fileLocation;
      }

      if (addSuffix) {
        line += ' (' + fileLocation + ')';
      }

      return line
    }

    /**
     * Get constructor name of reviver.
     */

    function getConstructorName (obj) {
      var receiver = obj.receiver;
      return (receiver.constructor && receiver.constructor.name) || null
    }

    /*!
     * depd
     * Copyright(c) 2015 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module exports.
     * @public
     */

    var eventListenerCount_1 = eventListenerCount$1;

    /**
     * Get the count of listeners on an event emitter of a specific type.
     */

    function eventListenerCount$1 (emitter, type) {
      return emitter.listeners(type).length
    }

    /*!
     * depd
     * Copyright(c) 2014-2015 Douglas Christopher Wilson
     * MIT Licensed
     */

    var compat = createCommonjsModule(function (module) {

    /**
     * Module dependencies.
     * @private
     */

    var EventEmitter = require$$0__default$1["default"].EventEmitter;

    /**
     * Module exports.
     * @public
     */

    lazyProperty(module.exports, 'callSiteToString', function callSiteToString () {
      var limit = Error.stackTraceLimit;
      var obj = {};
      var prep = Error.prepareStackTrace;

      function prepareObjectStackTrace (obj, stack) {
        return stack
      }

      Error.prepareStackTrace = prepareObjectStackTrace;
      Error.stackTraceLimit = 2;

      // capture the stack
      Error.captureStackTrace(obj);

      // slice the stack
      var stack = obj.stack.slice();

      Error.prepareStackTrace = prep;
      Error.stackTraceLimit = limit;

      return stack[0].toString ? toString : callsiteTostring
    });

    lazyProperty(module.exports, 'eventListenerCount', function eventListenerCount () {
      return EventEmitter.listenerCount || eventListenerCount_1
    });

    /**
     * Define a lazy property.
     */

    function lazyProperty (obj, prop, getter) {
      function get () {
        var val = getter();

        Object.defineProperty(obj, prop, {
          configurable: true,
          enumerable: true,
          value: val
        });

        return val
      }

      Object.defineProperty(obj, prop, {
        configurable: true,
        enumerable: true,
        get: get
      });
    }

    /**
     * Call toString() on the obj
     */

    function toString (obj) {
      return obj.toString()
    }
    });

    /*!
     * depd
     * Copyright(c) 2014-2017 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module dependencies.
     */

    var callSiteToString = compat.callSiteToString;
    var eventListenerCount = compat.eventListenerCount;
    var relative = require$$0__default["default"].relative;

    /**
     * Module exports.
     */

    var depd_1 = depd;

    /**
     * Get the path to base files on.
     */

    var basePath = process.cwd();

    /**
     * Determine if namespace is contained in the string.
     */

    function containsNamespace (str, namespace) {
      var vals = str.split(/[ ,]+/);
      var ns = String(namespace).toLowerCase();

      for (var i = 0; i < vals.length; i++) {
        var val = vals[i];

        // namespace contained
        if (val && (val === '*' || val.toLowerCase() === ns)) {
          return true
        }
      }

      return false
    }

    /**
     * Convert a data descriptor to accessor descriptor.
     */

    function convertDataDescriptorToAccessor (obj, prop, message) {
      var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
      var value = descriptor.value;

      descriptor.get = function getter () { return value };

      if (descriptor.writable) {
        descriptor.set = function setter (val) { return (value = val) };
      }

      delete descriptor.value;
      delete descriptor.writable;

      Object.defineProperty(obj, prop, descriptor);

      return descriptor
    }

    /**
     * Create arguments string to keep arity.
     */

    function createArgumentsString (arity) {
      var str = '';

      for (var i = 0; i < arity; i++) {
        str += ', arg' + i;
      }

      return str.substr(2)
    }

    /**
     * Create stack string from stack.
     */

    function createStackString (stack) {
      var str = this.name + ': ' + this.namespace;

      if (this.message) {
        str += ' deprecated ' + this.message;
      }

      for (var i = 0; i < stack.length; i++) {
        str += '\n    at ' + callSiteToString(stack[i]);
      }

      return str
    }

    /**
     * Create deprecate for namespace in caller.
     */

    function depd (namespace) {
      if (!namespace) {
        throw new TypeError('argument namespace is required')
      }

      var stack = getStack();
      var site = callSiteLocation(stack[1]);
      var file = site[0];

      function deprecate (message) {
        // call to self as log
        log.call(deprecate, message);
      }

      deprecate._file = file;
      deprecate._ignored = isignored(namespace);
      deprecate._namespace = namespace;
      deprecate._traced = istraced(namespace);
      deprecate._warned = Object.create(null);

      deprecate.function = wrapfunction;
      deprecate.property = wrapproperty;

      return deprecate
    }

    /**
     * Determine if namespace is ignored.
     */

    function isignored (namespace) {
      /* istanbul ignore next: tested in a child processs */
      if (process.noDeprecation) {
        // --no-deprecation support
        return true
      }

      var str = process.env.NO_DEPRECATION || '';

      // namespace ignored
      return containsNamespace(str, namespace)
    }

    /**
     * Determine if namespace is traced.
     */

    function istraced (namespace) {
      /* istanbul ignore next: tested in a child processs */
      if (process.traceDeprecation) {
        // --trace-deprecation support
        return true
      }

      var str = process.env.TRACE_DEPRECATION || '';

      // namespace traced
      return containsNamespace(str, namespace)
    }

    /**
     * Display deprecation message.
     */

    function log (message, site) {
      var haslisteners = eventListenerCount(process, 'deprecation') !== 0;

      // abort early if no destination
      if (!haslisteners && this._ignored) {
        return
      }

      var caller;
      var callFile;
      var callSite;
      var depSite;
      var i = 0;
      var seen = false;
      var stack = getStack();
      var file = this._file;

      if (site) {
        // provided site
        depSite = site;
        callSite = callSiteLocation(stack[1]);
        callSite.name = depSite.name;
        file = callSite[0];
      } else {
        // get call site
        i = 2;
        depSite = callSiteLocation(stack[i]);
        callSite = depSite;
      }

      // get caller of deprecated thing in relation to file
      for (; i < stack.length; i++) {
        caller = callSiteLocation(stack[i]);
        callFile = caller[0];

        if (callFile === file) {
          seen = true;
        } else if (callFile === this._file) {
          file = this._file;
        } else if (seen) {
          break
        }
      }

      var key = caller
        ? depSite.join(':') + '__' + caller.join(':')
        : undefined;

      if (key !== undefined && key in this._warned) {
        // already warned
        return
      }

      this._warned[key] = true;

      // generate automatic message from call site
      var msg = message;
      if (!msg) {
        msg = callSite === depSite || !callSite.name
          ? defaultMessage(depSite)
          : defaultMessage(callSite);
      }

      // emit deprecation if listeners exist
      if (haslisteners) {
        var err = DeprecationError(this._namespace, msg, stack.slice(i));
        process.emit('deprecation', err);
        return
      }

      // format and write message
      var format = process.stderr.isTTY
        ? formatColor
        : formatPlain;
      var output = format.call(this, msg, caller, stack.slice(i));
      process.stderr.write(output + '\n', 'utf8');
    }

    /**
     * Get call site location as array.
     */

    function callSiteLocation (callSite) {
      var file = callSite.getFileName() || '<anonymous>';
      var line = callSite.getLineNumber();
      var colm = callSite.getColumnNumber();

      if (callSite.isEval()) {
        file = callSite.getEvalOrigin() + ', ' + file;
      }

      var site = [file, line, colm];

      site.callSite = callSite;
      site.name = callSite.getFunctionName();

      return site
    }

    /**
     * Generate a default message from the site.
     */

    function defaultMessage (site) {
      var callSite = site.callSite;
      var funcName = site.name;

      // make useful anonymous name
      if (!funcName) {
        funcName = '<anonymous@' + formatLocation(site) + '>';
      }

      var context = callSite.getThis();
      var typeName = context && callSite.getTypeName();

      // ignore useless type name
      if (typeName === 'Object') {
        typeName = undefined;
      }

      // make useful type name
      if (typeName === 'Function') {
        typeName = context.name || typeName;
      }

      return typeName && callSite.getMethodName()
        ? typeName + '.' + funcName
        : funcName
    }

    /**
     * Format deprecation message without color.
     */

    function formatPlain (msg, caller, stack) {
      var timestamp = new Date().toUTCString();

      var formatted = timestamp +
        ' ' + this._namespace +
        ' deprecated ' + msg;

      // add stack trace
      if (this._traced) {
        for (var i = 0; i < stack.length; i++) {
          formatted += '\n    at ' + callSiteToString(stack[i]);
        }

        return formatted
      }

      if (caller) {
        formatted += ' at ' + formatLocation(caller);
      }

      return formatted
    }

    /**
     * Format deprecation message with color.
     */

    function formatColor (msg, caller, stack) {
      var formatted = '\x1b[36;1m' + this._namespace + '\x1b[22;39m' + // bold cyan
        ' \x1b[33;1mdeprecated\x1b[22;39m' + // bold yellow
        ' \x1b[0m' + msg + '\x1b[39m'; // reset

      // add stack trace
      if (this._traced) {
        for (var i = 0; i < stack.length; i++) {
          formatted += '\n    \x1b[36mat ' + callSiteToString(stack[i]) + '\x1b[39m'; // cyan
        }

        return formatted
      }

      if (caller) {
        formatted += ' \x1b[36m' + formatLocation(caller) + '\x1b[39m'; // cyan
      }

      return formatted
    }

    /**
     * Format call site location.
     */

    function formatLocation (callSite) {
      return relative(basePath, callSite[0]) +
        ':' + callSite[1] +
        ':' + callSite[2]
    }

    /**
     * Get the stack as array of call sites.
     */

    function getStack () {
      var limit = Error.stackTraceLimit;
      var obj = {};
      var prep = Error.prepareStackTrace;

      Error.prepareStackTrace = prepareObjectStackTrace;
      Error.stackTraceLimit = Math.max(10, limit);

      // capture the stack
      Error.captureStackTrace(obj);

      // slice this function off the top
      var stack = obj.stack.slice(1);

      Error.prepareStackTrace = prep;
      Error.stackTraceLimit = limit;

      return stack
    }

    /**
     * Capture call site stack from v8.
     */

    function prepareObjectStackTrace (obj, stack) {
      return stack
    }

    /**
     * Return a wrapped function in a deprecation message.
     */

    function wrapfunction (fn, message) {
      if (typeof fn !== 'function') {
        throw new TypeError('argument fn must be a function')
      }

      var args = createArgumentsString(fn.length);
      var stack = getStack();
      var site = callSiteLocation(stack[1]);

      site.name = fn.name;

       // eslint-disable-next-line no-eval
      var deprecatedfn = eval('(function (' + args + ') {\n' +
        '"use strict"\n' +
        'log.call(deprecate, message, site)\n' +
        'return fn.apply(this, arguments)\n' +
        '})');

      return deprecatedfn
    }

    /**
     * Wrap property in a deprecation message.
     */

    function wrapproperty (obj, prop, message) {
      if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
        throw new TypeError('argument obj must be object')
      }

      var descriptor = Object.getOwnPropertyDescriptor(obj, prop);

      if (!descriptor) {
        throw new TypeError('must call property on owner object')
      }

      if (!descriptor.configurable) {
        throw new TypeError('property must be configurable')
      }

      var deprecate = this;
      var stack = getStack();
      var site = callSiteLocation(stack[1]);

      // set site name
      site.name = prop;

      // convert data descriptor
      if ('value' in descriptor) {
        descriptor = convertDataDescriptorToAccessor(obj, prop);
      }

      var get = descriptor.get;
      var set = descriptor.set;

      // wrap getter
      if (typeof get === 'function') {
        descriptor.get = function getter () {
          log.call(deprecate, message, site);
          return get.apply(this, arguments)
        };
      }

      // wrap setter
      if (typeof set === 'function') {
        descriptor.set = function setter () {
          log.call(deprecate, message, site);
          return set.apply(this, arguments)
        };
      }

      Object.defineProperty(obj, prop, descriptor);
    }

    /**
     * Create DeprecationError for deprecation
     */

    function DeprecationError (namespace, message, stack) {
      var error = new Error();
      var stackString;

      Object.defineProperty(error, 'constructor', {
        value: DeprecationError
      });

      Object.defineProperty(error, 'message', {
        configurable: true,
        enumerable: false,
        value: message,
        writable: true
      });

      Object.defineProperty(error, 'name', {
        enumerable: false,
        configurable: true,
        value: 'DeprecationError',
        writable: true
      });

      Object.defineProperty(error, 'namespace', {
        configurable: true,
        enumerable: false,
        value: namespace,
        writable: true
      });

      Object.defineProperty(error, 'stack', {
        configurable: true,
        enumerable: false,
        get: function () {
          if (stackString !== undefined) {
            return stackString
          }

          // prepare stack trace
          return (stackString = createStackString.call(this, stack))
        },
        set: function setter (val) {
          stackString = val;
        }
      });

      return error
    }

    var setprototypeof = Object.setPrototypeOf || ({__proto__:[]} instanceof Array ? setProtoOf : mixinProperties);

    function setProtoOf(obj, proto) {
    	obj.__proto__ = proto;
    	return obj;
    }

    function mixinProperties(obj, proto) {
    	for (var prop in proto) {
    		if (!obj.hasOwnProperty(prop)) {
    			obj[prop] = proto[prop];
    		}
    	}
    	return obj;
    }

    var inherits_browser = createCommonjsModule(function (module) {
    if (typeof Object.create === 'function') {
      // implementation from standard node.js 'util' module
      module.exports = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      };
    } else {
      // old school shim for old browsers
      module.exports = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function () {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      };
    }
    });

    var inherits = createCommonjsModule(function (module) {
    try {
      var util = util__default["default"];
      if (typeof util.inherits !== 'function') throw '';
      module.exports = util.inherits;
    } catch (e) {
      module.exports = inherits_browser;
    }
    });

    /*!
     * http-errors
     * Copyright(c) 2014 Jonathan Ong
     * Copyright(c) 2016 Douglas Christopher Wilson
     * MIT Licensed
     */

    var httpErrors = createCommonjsModule(function (module) {

    /**
     * Module dependencies.
     * @private
     */

    var deprecate = depd_1('http-errors');




    /**
     * Module exports.
     * @public
     */

    module.exports = createError;
    module.exports.HttpError = createHttpErrorConstructor();

    // Populate exports for all constructors
    populateConstructorExports(module.exports, statuses.codes, module.exports.HttpError);

    /**
     * Get the code class of a status code.
     * @private
     */

    function codeClass (status) {
      return Number(String(status).charAt(0) + '00')
    }

    /**
     * Create a new HTTP Error.
     *
     * @returns {Error}
     * @public
     */

    function createError () {
      // so much arity going on ~_~
      var err;
      var msg;
      var status = 500;
      var props = {};
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg instanceof Error) {
          err = arg;
          status = err.status || err.statusCode || status;
          continue
        }
        switch (typeof arg) {
          case 'string':
            msg = arg;
            break
          case 'number':
            status = arg;
            if (i !== 0) {
              deprecate('non-first-argument status code; replace with createError(' + arg + ', ...)');
            }
            break
          case 'object':
            props = arg;
            break
        }
      }

      if (typeof status === 'number' && (status < 400 || status >= 600)) {
        deprecate('non-error status code; use only 4xx or 5xx status codes');
      }

      if (typeof status !== 'number' ||
        (!statuses[status] && (status < 400 || status >= 600))) {
        status = 500;
      }

      // constructor
      var HttpError = createError[status] || createError[codeClass(status)];

      if (!err) {
        // create error
        err = HttpError
          ? new HttpError(msg)
          : new Error(msg || statuses[status]);
        Error.captureStackTrace(err, createError);
      }

      if (!HttpError || !(err instanceof HttpError) || err.status !== status) {
        // add properties to generic error
        err.expose = status < 500;
        err.status = err.statusCode = status;
      }

      for (var key in props) {
        if (key !== 'status' && key !== 'statusCode') {
          err[key] = props[key];
        }
      }

      return err
    }

    /**
     * Create HTTP error abstract base class.
     * @private
     */

    function createHttpErrorConstructor () {
      function HttpError () {
        throw new TypeError('cannot construct abstract class')
      }

      inherits(HttpError, Error);

      return HttpError
    }

    /**
     * Create a constructor for a client error.
     * @private
     */

    function createClientErrorConstructor (HttpError, name, code) {
      var className = name.match(/Error$/) ? name : name + 'Error';

      function ClientError (message) {
        // create the error object
        var msg = message != null ? message : statuses[code];
        var err = new Error(msg);

        // capture a stack trace to the construction point
        Error.captureStackTrace(err, ClientError);

        // adjust the [[Prototype]]
        setprototypeof(err, ClientError.prototype);

        // redefine the error message
        Object.defineProperty(err, 'message', {
          enumerable: true,
          configurable: true,
          value: msg,
          writable: true
        });

        // redefine the error name
        Object.defineProperty(err, 'name', {
          enumerable: false,
          configurable: true,
          value: className,
          writable: true
        });

        return err
      }

      inherits(ClientError, HttpError);

      ClientError.prototype.status = code;
      ClientError.prototype.statusCode = code;
      ClientError.prototype.expose = true;

      return ClientError
    }

    /**
     * Create a constructor for a server error.
     * @private
     */

    function createServerErrorConstructor (HttpError, name, code) {
      var className = name.match(/Error$/) ? name : name + 'Error';

      function ServerError (message) {
        // create the error object
        var msg = message != null ? message : statuses[code];
        var err = new Error(msg);

        // capture a stack trace to the construction point
        Error.captureStackTrace(err, ServerError);

        // adjust the [[Prototype]]
        setprototypeof(err, ServerError.prototype);

        // redefine the error message
        Object.defineProperty(err, 'message', {
          enumerable: true,
          configurable: true,
          value: msg,
          writable: true
        });

        // redefine the error name
        Object.defineProperty(err, 'name', {
          enumerable: false,
          configurable: true,
          value: className,
          writable: true
        });

        return err
      }

      inherits(ServerError, HttpError);

      ServerError.prototype.status = code;
      ServerError.prototype.statusCode = code;
      ServerError.prototype.expose = false;

      return ServerError
    }

    /**
     * Populate the exports object with constructors for every error class.
     * @private
     */

    function populateConstructorExports (exports, codes, HttpError) {
      codes.forEach(function forEachCode (code) {
        var CodeError;
        var name = toIdentifier(statuses[code]);

        switch (codeClass(code)) {
          case 400:
            CodeError = createClientErrorConstructor(HttpError, name, code);
            break
          case 500:
            CodeError = createServerErrorConstructor(HttpError, name, code);
            break
        }

        if (CodeError) {
          // export the constructor
          exports[code] = CodeError;
          exports[name] = CodeError;
        }
      });

      // backwards-compatibility
      exports["I'mateapot"] = deprecate.function(exports.ImATeapot,
        '"I\'mateapot"; use "ImATeapot" instead');
    }

    /**
     * Convert a string of words to a JavaScript identifier.
     * @private
     */

    function toIdentifier (str) {
      return str.split(' ').map(function (token) {
        return token.slice(0, 1).toUpperCase() + token.slice(1)
      }).join('').replace(/[^ _0-9a-z]/gi, '')
    }
    });

    function posix(path) {
    	return path.charAt(0) === '/';
    }

    function win32(path) {
    	// https://github.com/nodejs/node/blob/b3fcc245fb25539909ef1d5eaa01dbf92e168633/lib/path.js#L56
    	var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
    	var result = splitDeviceRe.exec(path);
    	var device = result[1] || '';
    	var isUnc = Boolean(device && device.charAt(1) !== ':');

    	// UNC paths are always absolute
    	return Boolean(result[2] || isUnc);
    }

    var pathIsAbsolute = process.platform === 'win32' ? win32 : posix;
    var posix_1 = posix;
    var win32_1 = win32;
    pathIsAbsolute.posix = posix_1;
    pathIsAbsolute.win32 = win32_1;

    /*!
     * resolve-path
     * Copyright(c) 2014 Jonathan Ong
     * Copyright(c) 2015-2018 Douglas Christopher Wilson
     * MIT Licensed
     */

    /**
     * Module dependencies.
     * @private
     */


    var join = require$$0__default["default"].join;
    var normalize$1 = require$$0__default["default"].normalize;

    var resolve$2 = require$$0__default["default"].resolve;
    var sep$1 = require$$0__default["default"].sep;

    /**
     * Module exports.
     * @public
     */

    var resolvePath_1 = resolvePath;

    /**
     * Module variables.
     * @private
     */

    var UP_PATH_REGEXP = /(?:^|[\\/])\.\.(?:[\\/]|$)/;

    /**
     * Resolve relative path against a root path
     *
     * @param {string} rootPath
     * @param {string} relativePath
     * @return {string}
     * @public
     */

    function resolvePath (rootPath, relativePath) {
      var path = relativePath;
      var root = rootPath;

      // root is optional, similar to root.resolve
      if (arguments.length === 1) {
        path = rootPath;
        root = process.cwd();
      }

      if (root == null) {
        throw new TypeError('argument rootPath is required')
      }

      if (typeof root !== 'string') {
        throw new TypeError('argument rootPath must be a string')
      }

      if (path == null) {
        throw new TypeError('argument relativePath is required')
      }

      if (typeof path !== 'string') {
        throw new TypeError('argument relativePath must be a string')
      }

      // containing NULL bytes is malicious
      if (path.indexOf('\0') !== -1) {
        throw httpErrors(400, 'Malicious Path')
      }

      // path should never be absolute
      if (pathIsAbsolute.posix(path) || pathIsAbsolute.win32(path)) {
        throw httpErrors(400, 'Malicious Path')
      }

      // path outside root
      if (UP_PATH_REGEXP.test(normalize$1('.' + sep$1 + path))) {
        throw httpErrors(403)
      }

      // join the relative path
      return normalize$1(join(resolve$2(root), path))
    }

    /**
     * Module dependencies.
     */

    const debug$1 = src$1('koa-send');




    const stat = util__default["default"].promisify(fs__default["default"].stat);
    const access = util__default["default"].promisify(fs__default["default"].access);

    async function exists (path) {
      try {
        await access(path);
        return true
      } catch (e) {
        return false
      }
    }

    const {
      normalize,
      basename,
      extname,
      resolve: resolve$1,
      parse,
      sep
    } = require$$0__default["default"];

    /**
     * Expose `send()`.
     */

    var koaSend = send;

    /**
     * Send file at `path` with the
     * given `options` to the koa `ctx`.
     *
     * @param {Context} ctx
     * @param {String} path
     * @param {Object} [opts]
     * @return {Promise}
     * @api public
     */

    async function send (ctx, path, opts = {}) {
      assert__default["default"](ctx, 'koa context required');
      assert__default["default"](path, 'pathname required');

      // options
      debug$1('send "%s" %j', path, opts);
      const root = opts.root ? normalize(resolve$1(opts.root)) : '';
      const trailingSlash = path[path.length - 1] === '/';
      path = path.substr(parse(path).root.length);
      const index = opts.index;
      const maxage = opts.maxage || opts.maxAge || 0;
      const immutable = opts.immutable || false;
      const hidden = opts.hidden || false;
      const format = opts.format !== false;
      const extensions = Array.isArray(opts.extensions) ? opts.extensions : false;
      const brotli = opts.brotli !== false;
      const gzip = opts.gzip !== false;
      const setHeaders = opts.setHeaders;

      if (setHeaders && typeof setHeaders !== 'function') {
        throw new TypeError('option setHeaders must be function')
      }

      // normalize path
      path = decode(path);

      if (path === -1) return ctx.throw(400, 'failed to decode')

      // index file support
      if (index && trailingSlash) path += index;

      path = resolvePath_1(root, path);

      // hidden file support, ignore
      if (!hidden && isHidden(root, path)) return

      let encodingExt = '';
      // serve brotli file when possible otherwise gzipped file when possible
      if (ctx.acceptsEncodings('br', 'identity') === 'br' && brotli && (await exists(path + '.br'))) {
        path = path + '.br';
        ctx.set('Content-Encoding', 'br');
        ctx.res.removeHeader('Content-Length');
        encodingExt = '.br';
      } else if (ctx.acceptsEncodings('gzip', 'identity') === 'gzip' && gzip && (await exists(path + '.gz'))) {
        path = path + '.gz';
        ctx.set('Content-Encoding', 'gzip');
        ctx.res.removeHeader('Content-Length');
        encodingExt = '.gz';
      }

      if (extensions && !/\./.exec(basename(path))) {
        const list = [].concat(extensions);
        for (let i = 0; i < list.length; i++) {
          let ext = list[i];
          if (typeof ext !== 'string') {
            throw new TypeError('option extensions must be array of strings or false')
          }
          if (!/^\./.exec(ext)) ext = `.${ext}`;
          if (await exists(`${path}${ext}`)) {
            path = `${path}${ext}`;
            break
          }
        }
      }

      // stat
      let stats;
      try {
        stats = await stat(path);

        // Format the path to serve static file servers
        // and not require a trailing slash for directories,
        // so that you can do both `/directory` and `/directory/`
        if (stats.isDirectory()) {
          if (format && index) {
            path += `/${index}`;
            stats = await stat(path);
          } else {
            return
          }
        }
      } catch (err) {
        const notfound = ['ENOENT', 'ENAMETOOLONG', 'ENOTDIR'];
        if (notfound.includes(err.code)) {
          throw httpErrors$1(404, err)
        }
        err.status = 500;
        throw err
      }

      if (setHeaders) setHeaders(ctx.res, path, stats);

      // stream
      ctx.set('Content-Length', stats.size);
      if (!ctx.response.get('Last-Modified')) ctx.set('Last-Modified', stats.mtime.toUTCString());
      if (!ctx.response.get('Cache-Control')) {
        const directives = [`max-age=${(maxage / 1000 | 0)}`];
        if (immutable) {
          directives.push('immutable');
        }
        ctx.set('Cache-Control', directives.join(','));
      }
      if (!ctx.type) ctx.type = type(path, encodingExt);
      ctx.body = fs__default["default"].createReadStream(path);

      return path
    }

    /**
     * Check if it's hidden.
     */

    function isHidden (root, path) {
      path = path.substr(root.length).split(sep);
      for (let i = 0; i < path.length; i++) {
        if (path[i][0] === '.') return true
      }
      return false
    }

    /**
     * File type.
     */

    function type (file, ext) {
      return ext !== '' ? extname(basename(file, ext)) : extname(file)
    }

    /**
     * Decode `path`.
     */

    function decode (path) {
      try {
        return decodeURIComponent(path)
      } catch (err) {
        return -1
      }
    }

    /**
     * Module dependencies.
     */

    const debug = src('koa-static');
    const { resolve } = require$$0__default["default"];



    /**
     * Expose `serve()`.
     */

    var koaStatic = serve;

    /**
     * Serve static files from `root`.
     *
     * @param {String} root
     * @param {Object} [opts]
     * @return {Function}
     * @api public
     */

    function serve (root, opts) {
      opts = Object.assign({}, opts);

      assert__default["default"](root, 'root directory is required to serve files');

      // options
      debug('static "%s" %j', root, opts);
      opts.root = resolve(root);
      if (opts.index !== false) opts.index = opts.index || 'index.html';

      if (!opts.defer) {
        return async function serve (ctx, next) {
          let done = false;

          if (ctx.method === 'HEAD' || ctx.method === 'GET') {
            try {
              done = await koaSend(ctx, ctx.path, opts);
            } catch (err) {
              if (err.status !== 404) {
                throw err
              }
            }
          }

          if (!done) {
            await next();
          }
        }
      }

      return async function serve (ctx, next) {
        await next();

        if (ctx.method !== 'HEAD' && ctx.method !== 'GET') return
        // response is already handled
        if (ctx.body != null || ctx.status !== 404) return // eslint-disable-line

        try {
          await koaSend(ctx, ctx.path, opts);
        } catch (err) {
          if (err.status !== 404) {
            throw err
          }
        }
      }
    }

    var PORT = 3300;
    var router = new router$1();
    var app = new application();
    var oneDay = 1000 * 60 * 60 * 24;
    /**
     * 获取当天零时的时间戳
     * @param date
     */
    function getLocaleDateTime(date) {
        return new Date(new Date(date || new Date()).toLocaleDateString()).getTime();
    }
    var separator = '__js_hunter__';
    var storagePath = require$$0__default["default"].join(__dirname, 'storage');
    // 数据上报
    // TODO 同步写入是否有隐患
    router.get('/request', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
        var request, event_1, decodeEvent, content, logName, filePath;
        return __generator(this, function (_a) {
            request = ctx.request;
            if (request && request.query) {
                try {
                    event_1 = request.query.event;
                    if (event_1 && typeof event_1 === 'string') {
                        decodeEvent = decodeURIComponent(event_1);
                        if (!fs__default["default"].existsSync(storagePath)) {
                            // 判断日志存储文件夹是否存在, 不存在则创建
                            fs__default["default"].mkdirSync(storagePath);
                        }
                        content = "".concat(JSON.stringify(decodeEvent)).concat(separator);
                        logName = getLocaleDateTime();
                        filePath = require$$0__default["default"].join(storagePath, "".concat(logName, ".log"));
                        fs__default["default"].writeFileSync(filePath, content, { flag: 'a+' });
                    }
                    ctx.body = 'success';
                }
                catch (e) {
                    ctx.body = 'fail';
                }
            }
            return [2 /*return*/];
        });
    }); });
    // 获取数据
    router.get('/datas', function (ctx, next) { return __awaiter(void 0, void 0, void 0, function () {
        var request, _a, endDate, startDate, end_1, start_1, endTime, startTime, logs_1, logFiles;
        return __generator(this, function (_b) {
            request = ctx.request;
            if (request && request.query) {
                try {
                    if (request.query) {
                        _a = request.query, endDate = _a.endDate, startDate = _a.startDate;
                        end_1 = getLocaleDateTime();
                        start_1 = end_1 - oneDay;
                        if (endDate) {
                            endTime = getLocaleDateTime(endDate);
                            if (!isNaN(endTime)) {
                                end_1 = endTime;
                            }
                        }
                        if (startDate) {
                            startTime = getLocaleDateTime(startDate);
                            if (!isNaN(startTime)) {
                                start_1 = startTime;
                            }
                        }
                        logs_1 = [];
                        logFiles = fs__default["default"].readdirSync(storagePath);
                        logFiles.forEach(function (file) {
                            var name = +file.split('.')[0];
                            if (name >= start_1 || name <= end_1) {
                                var data = fs__default["default"].readFileSync(require$$0__default["default"].join(storagePath, file), 'utf8');
                                logs_1.push(data);
                            }
                        });
                        ctx.body = logs_1;
                    }
                }
                catch (e) {
                    ctx.body = 'fail';
                }
            }
            return [2 /*return*/];
        });
    }); });
    app.use(dist()); // 允许跨域
    app.use(koaStatic(require$$0__default["default"].join(__dirname, 'static'), { extensions: ['html', 'js'] })); // 渲染静态文件
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.listen(PORT);
    console.log("Server is now listening on port ".concat(PORT));

}));
