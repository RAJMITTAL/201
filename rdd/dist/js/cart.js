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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/cartPage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
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
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/components/cacheManager/cacheManager.js":
/*!*****************************************************!*\
  !*** ./src/components/cacheManager/cacheManager.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CacheManager = exports.CacheManager = function () {
    function CacheManager() {
        _classCallCheck(this, CacheManager);

        this.cacheStore = window.sessionStorage;
    }

    _createClass(CacheManager, [{
        key: "setItem",
        value: function setItem(key, value) {
            this.cacheStore.setItem(key, JSON.stringify(value));
        }
    }, {
        key: "getItem",
        value: function getItem(key) {
            return JSON.parse(this.cacheStore.getItem(key));
        }
    }, {
        key: "deleteItem",
        value: function deleteItem(key) {
            this.cacheStore.deleteItem(key);
        }
    }, {
        key: "clearAll",
        value: function clearAll() {
            this.cacheStore.clear();
        }
    }]);

    return CacheManager;
}();

/***/ }),

/***/ "./src/components/cart/cart.js":
/*!*************************************!*\
  !*** ./src/components/cart/cart.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CartItem = exports.Cart = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(/*! ./config */ "./src/components/cart/config.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cart = exports.Cart = function () {
    function Cart() {
        _classCallCheck(this, Cart);

        this.Items = [];
        this.cartTotal = 0;
        this.cartTax = 0;
        this.grandTotal = 0;
        this.currency = _config.currency;
        this.totalItemCount = 0;
    }

    _createClass(Cart, [{
        key: "update",
        value: function update(item) {
            var oldItem = this.Items.findIndex(function (cItem) {
                return cItem.id == item.id;
            });
            console.log(oldItem);
            if (oldItem != -1) {
                console.log("found");
                this.Items[oldItem].count = item.count;
                return;
            }
            console.log('in new');
            this.Items.push(item);
        }
    }, {
        key: "remove",
        value: function remove(item) {
            var index = this.Items.findIndex(function (cItem) {
                return cItem.id == item.id;
            });
            if (index != -1) {
                console.log("found");
                this.Items.splice(index, 1);
                return;
            }
            this.Items.push(item);
        }
    }, {
        key: "reconcile",
        value: function reconcile(data) {
            var _this = this;

            this.cartTotal = 0;
            this.cartTax = 0;
            this.grandTotal = 0;
            this.totalItemCount = 0;

            this.Items.forEach(function (item) {
                var index = data.findIndex(function (dataItem) {
                    return dataItem.id == item.id;
                });

                item.title = data[index].title;
                item.unitCost = data[index].price;
                item.image = data[index].photoSmall;
                item.totalCost = item.count * item.unitCost;
                item.tax = item.totalCost * (item.foodType === "f" ? _config.foodTax : _config.beverageTax);

                _this.totalItemCount += item.count;
                _this.cartTotal += item.totalCost;
                _this.cartTax += item.tax;
                _this.grandTotal = _this.cartTotal + _this.cartTax;
            });
        }
    }, {
        key: "restoreState",
        value: function restoreState(cartData) {
            this.Items = cartData.Items;
            this.cartTax = cartData.cartTax;
            this.cartTotal = cartData.cartTotal;
            this.grandTotal = cartData.grandTotal;
            this.totalItemCount = cartData.totalItemCount;
        }
    }]);

    return Cart;
}();

var CartItem = exports.CartItem = function CartItem(id, count) {
    _classCallCheck(this, CartItem);

    this.id = id;
    this.count = parseInt(count);

    this.image = "";
    this.unitCost = 0;
    this.totalCost = 0;
    this.title = "";
    this.tax = 0;
};

/***/ }),

/***/ "./src/components/cart/cartUI.js":
/*!***************************************!*\
  !*** ./src/components/cart/cartUI.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import { elements } from "./elements";
//import { Cart } from "./cart";

var CartUI = exports.CartUI = function () {
    function CartUI(cartData, parentElement) {
        _classCallCheck(this, CartUI);

        this.cartData = cartData;
        this.parentElement = parentElement;
    }

    _createClass(CartUI, [{
        key: "renderCart",
        value: function renderCart() {
            var _this = this;

            this.parentElement.innerHTML = "";
            this.cartData.Items.forEach(function (element) {
                _this.renderItem(element, _this.parentElement);
            });

            this.renderTotal(this.cartData, this.parentElement);
        }
    }, {
        key: "renderItem",
        value: function renderItem(item, parentElement) {
            console.log(item);
            var markup = "\n    <div class=\"cart-item\" data-itemid=" + item.id + ">\n    <div><img src=\"" + item.image + "\" alt=\"\" class=\"food\"></div>\n        <div class=\"\"> " + item.title + "</div>\n         <div>" + this.cartData.currency + item.unitCost + "</div>\n         <div class=\"product-quantity\">\n         <div class=\"product-quantity\">\n         <form id=\"myform\" method=\"POST\" action=\"#\">\n                 <div class=\"cart-plus-minus\">\n                 <button id=\"" + item.id + "\" class=\"dec-qty qty-btn\">-</button>\n                 <input class=\"cart-plus-minus-box\" type=\"text\" name=\"qtybutton\" readonly value=\"" + item.count + "\">\n                 <button id=" + item.id + " class=\"inc-qty qty-btn\">+</button>\n             </div>\n         </form>\n     </div>\n         </div>\n            <div><a href=\"#\" class=\"remove qty-btn\" id=\"" + item.id + "\">X</div>\n        \n    </div>\n    ";
            parentElement.insertAdjacentHTML('beforeend', markup);
        }
    }, {
        key: "renderTotal",
        value: function renderTotal(cartData, parentElement) {
            var markup = "\n   <div class=\"summary\">\n    <div class=\"summary__wrap\"> \n    <div class=\"summary__amount summary__item\"><span>Cart Total</span><span>" + cartData.currency + cartData.cartTotal + " </span></div>\n    <div class=\"summary__tax summary__item\"><span>Tax</span><span>" + cartData.currency + cartData.cartTax + "</span></div>\n    <div class=\"summary__total summary__item\"><span>Grand Total</span><span>" + cartData.currency + cartData.grandTotal + "</span></div>\n    <div><span></span><span><form id=\"payment\" method=\"get\" action=\"/payment.html\"><button class=\"food__btn\" type=\"submit\">Proceed to Payment</button></form></span></div>\n    </div>\n    </div>";
            var element = document.querySelector(".cart-total");
            element.innerHTML = "";
            element.insertAdjacentHTML('beforeend', markup);
        }
    }, {
        key: "renderSummary",
        value: function renderSummary() {
            var _this2 = this;

            var itemSummary = this.cartData.Items.reduce(function (itemMarkup, item) {
                itemMarkup += _this2.renderSummaryItem(item);
                return itemMarkup;
            }, "");
            console.log(itemSummary);
            var markup = "\n    <div class=\"order-wrapper\">\n    <h2 class=\"order-details-header\">Order Summary</h2>\n    <div class=\"order-details\">\n    <form action=\"#\">\n        <ul>\n            <li><p class=\"strong\">Product</p><p class=\"strong\">Total</p></li>\n             " + itemSummary + "\n            <li><p class=\"strong\">cart subtotal</p><p class=\"strong\">" + this.cartData.cartTotal + "</p></li>\n            <li><p class=\"strong\">Tax</p>\n                <p>" + this.cartData.cartTax + "</p>\n            </li>\n            <li><p class=\"strong\">Grand Subtotal</p><p class=\"grandTotal\">" + this.cartData.grandTotal + "</p></li>\n        </ul>\n    </form>\n</div>\n</div>\n    ";
            this.parentElement.insertAdjacentHTML('beforeend', markup);
        }
    }, {
        key: "renderSummaryItem",
        value: function renderSummaryItem(item) {

            var markup = "\n     <li><p>" + item.count + "x " + item.title + " </p><p>" + item.totalCost + "</p></li>\n     ";
            return markup;
        }
    }]);

    return CartUI;
}();

/***/ }),

/***/ "./src/components/cart/config.js":
/*!***************************************!*\
  !*** ./src/components/cart/config.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var beverageTax = exports.beverageTax = 0.12;
var foodTax = exports.foodTax = 0.05;
var currency = exports.currency = "₹";

/***/ }),

/***/ "./src/components/header/HeaderUI.js":
/*!*******************************************!*\
  !*** ./src/components/header/HeaderUI.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderUI = exports.HeaderUI = function () {
    function HeaderUI() {
        _classCallCheck(this, HeaderUI);
    }

    _createClass(HeaderUI, [{
        key: 'render',
        value: function render(parentElement) {
            var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var markup = '\n<header class="header">\n<a href="/" >\n        <img src ="/img/rddlogo.svg" alt="RDD logo" class="logo"/>\n</a>\n\n<div class="navigation">\n            <nav class="navigation__nav">\n                <ul class="navigation__list">\n                    <li class="navigation__item"><a href="/" class="navigation__link">Home</a></li>\n                    <li class="navigation__item"><a href="#footer" class="navigation__link">Contact us</a></li>\n                    </ul>\n            </nav>\n            </div>\n\n                                \n            <div class="shopping__cart">\n                <a class="shopping__cart__cart navigation__link" href="/cart.html">Cart</a>\n            </div>\n\n</header>\n';

            parentElement.insertAdjacentHTML('afterbegin', markup);
        }
    }, {
        key: 'renderNav',
        value: function renderNav(parentElement) {}
    }]);

    return HeaderUI;
}();

/***/ }),

/***/ "./src/components/helper/helper.js":
/*!*****************************************!*\
  !*** ./src/components/helper/helper.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Helper = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cart = __webpack_require__(/*! ../cart/cart */ "./src/components/cart/cart.js");

var _cacheManager = __webpack_require__(/*! ../cacheManager/cacheManager */ "./src/components/cacheManager/cacheManager.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helper = exports.Helper = function () {
    function Helper() {
        _classCallCheck(this, Helper);
    }

    _createClass(Helper, null, [{
        key: "productUpdate",
        value: function productUpdate(event) {

            console.log("target" + event.target);
            var eventTarget = event.target;
            if (eventTarget.matches(".qty-btn")) {

                event.preventDefault();
                event.stopPropagation();
                var cacheManager = new _cacheManager.CacheManager();
                var myCart = new _cart.Cart();
                myCart.restoreState(cacheManager.getItem("cart"));

                var menuDetails = cacheManager.getItem("menuItems");

                // alert(quantity);
                if (eventTarget.matches(".inc-qty")) {
                    var btn = eventTarget.parentElement.querySelector(".cart-plus-minus-box");
                    var quantity = parseInt(btn.value);
                    btn.value = quantity += 1;
                    var item = new _cart.CartItem(event.target.id, btn.value);
                    myCart.update(item);
                } else if (eventTarget.matches(".dec-qty")) {
                    var _btn = eventTarget.parentElement.querySelector(".cart-plus-minus-box");
                    var _quantity = parseInt(_btn.value);
                    if (_quantity > 0) {

                        _btn.value = _quantity -= 1;
                        console.log(_btn);
                        var item = new _cart.CartItem(event.target.id, _btn.value);
                        myCart.update(item);
                    }
                } else if (eventTarget.matches(".remove")) {
                    // alert('in remove');
                    var item = new _cart.CartItem(event.target.id, 0);

                    myCart.remove(item);
                }
                myCart.reconcile(menuDetails);
                cacheManager.setItem("cart", myCart);
                console.log("writing cache");
                console.log(cacheManager.getItem("cart"));
            }
        }
    }]);

    return Helper;
}();

/***/ }),

/***/ "./src/js/cartPage.js":
/*!****************************!*\
  !*** ./src/js/cartPage.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _cart = __webpack_require__(/*! ../components/cart/cart */ "./src/components/cart/cart.js");

var _cacheManager = __webpack_require__(/*! ../components/cacheManager/cacheManager */ "./src/components/cacheManager/cacheManager.js");

var _cartUI = __webpack_require__(/*! ../components/cart/cartUI */ "./src/components/cart/cartUI.js");

var _HeaderUI = __webpack_require__(/*! ../components/header/HeaderUI */ "./src/components/header/HeaderUI.js");

var _helper = __webpack_require__(/*! ../components/helper/helper */ "./src/components/helper/helper.js");

var _util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

var pageElements = {
  cartConainter: document.querySelector(".cart-container"),

  carItemConainter: document.querySelector(".cart-item-container"),
  cartSummary: document.querySelector(".cart-summary")

};

var header = new _HeaderUI.HeaderUI();
header.render(pageElements.cartConainter);

var cacheManager = new _cacheManager.CacheManager();
var cartData = cacheManager.getItem("cart"); // move key to constant
if (cartData.Items.length == 0) window.location.href = "/";
var cartUI = new _cartUI.CartUI(cartData, pageElements.carItemConainter);
cartUI.renderCart();

debugger;
pageElements.carItemConainter.addEventListener("click", _helper.Helper.productUpdate);
pageElements.carItemConainter.addEventListener("click", function () {
  var cartData = cacheManager.getItem("cart"); // move key to constant
  if (cartData.Items.length == 0) window.location.href = "/";
  var cartUI = new _cartUI.CartUI(cartData, pageElements.carItemConainter);
  cartUI.renderCart();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FjaGVNYW5hZ2VyL2NhY2hlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJ0L2NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FydC9jYXJ0VUkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FydC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlclVJLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlbHBlci9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NhcnRQYWdlLmpzIl0sIm5hbWVzIjpbIkNhY2hlTWFuYWdlciIsImNhY2hlU3RvcmUiLCJ3aW5kb3ciLCJzZXNzaW9uU3RvcmFnZSIsImtleSIsInZhbHVlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsImdldEl0ZW0iLCJkZWxldGVJdGVtIiwiY2xlYXIiLCJDYXJ0IiwiSXRlbXMiLCJjYXJ0VG90YWwiLCJjYXJ0VGF4IiwiZ3JhbmRUb3RhbCIsImN1cnJlbmN5IiwidG90YWxJdGVtQ291bnQiLCJpdGVtIiwib2xkSXRlbSIsImZpbmRJbmRleCIsImNJdGVtIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiY291bnQiLCJwdXNoIiwiaW5kZXgiLCJzcGxpY2UiLCJkYXRhIiwiZm9yRWFjaCIsImRhdGFJdGVtIiwidGl0bGUiLCJ1bml0Q29zdCIsInByaWNlIiwiaW1hZ2UiLCJwaG90b1NtYWxsIiwidG90YWxDb3N0IiwidGF4IiwiZm9vZFR5cGUiLCJmb29kVGF4IiwiYmV2ZXJhZ2VUYXgiLCJjYXJ0RGF0YSIsIkNhcnRJdGVtIiwicGFyc2VJbnQiLCJDYXJ0VUkiLCJwYXJlbnRFbGVtZW50IiwiaW5uZXJIVE1MIiwicmVuZGVySXRlbSIsImVsZW1lbnQiLCJyZW5kZXJUb3RhbCIsIm1hcmt1cCIsImluc2VydEFkamFjZW50SFRNTCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIml0ZW1TdW1tYXJ5IiwicmVkdWNlIiwiaXRlbU1hcmt1cCIsInJlbmRlclN1bW1hcnlJdGVtIiwiSGVhZGVyVUkiLCJIZWxwZXIiLCJldmVudCIsInRhcmdldCIsImV2ZW50VGFyZ2V0IiwibWF0Y2hlcyIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2FjaGVNYW5hZ2VyIiwibXlDYXJ0IiwicmVzdG9yZVN0YXRlIiwibWVudURldGFpbHMiLCJidG4iLCJxdWFudGl0eSIsInVwZGF0ZSIsInJlbW92ZSIsInJlY29uY2lsZSIsInBhZ2VFbGVtZW50cyIsImNhcnRDb25haW50ZXIiLCJjYXJJdGVtQ29uYWludGVyIiwiY2FydFN1bW1hcnkiLCJoZWFkZXIiLCJyZW5kZXIiLCJsZW5ndGgiLCJsb2NhdGlvbiIsImhyZWYiLCJjYXJ0VUkiLCJyZW5kZXJDYXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2R1Y3RVcGRhdGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTRDLEtBQUs7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3prQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ25CYUEsWSxXQUFBQSxZO0FBQ1QsNEJBQWM7QUFBQTs7QUFDWixhQUFLQyxVQUFMLEdBQWtCQyxPQUFPQyxjQUF6QjtBQUVEOzs7O2dDQUVPQyxHLEVBQUtDLEssRUFBTztBQUNsQixpQkFBS0osVUFBTCxDQUFnQkssT0FBaEIsQ0FBd0JGLEdBQXhCLEVBQTRCRyxLQUFLQyxTQUFMLENBQWVILEtBQWYsQ0FBNUI7QUFDRDs7O2dDQUVPRCxHLEVBQUs7QUFDVCxtQkFBT0csS0FBS0UsS0FBTCxDQUFXLEtBQUtSLFVBQUwsQ0FBZ0JTLE9BQWhCLENBQXdCTixHQUF4QixDQUFYLENBQVA7QUFDSDs7O21DQUVVQSxHLEVBQUs7QUFDWixpQkFBS0gsVUFBTCxDQUFnQlUsVUFBaEIsQ0FBMkJQLEdBQTNCO0FBQ0g7OzttQ0FFVTtBQUNQLGlCQUFLSCxVQUFMLENBQWdCVyxLQUFoQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJMOzs7O0lBQ2FDLEksV0FBQUEsSTtBQUVULG9CQUFjO0FBQUE7O0FBQ1YsYUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxhQUFLQyxTQUFMLEdBQWUsQ0FBZjtBQUNBLGFBQUtDLE9BQUwsR0FBYSxDQUFiO0FBQ0EsYUFBS0MsVUFBTCxHQUFnQixDQUFoQjtBQUNBLGFBQUtDLFFBQUwsR0FBZ0JBLGdCQUFoQjtBQUNBLGFBQUtDLGNBQUwsR0FBb0IsQ0FBcEI7QUFDSDs7OzsrQkFFTUMsSSxFQUFNO0FBQ1QsZ0JBQUlDLFVBQVUsS0FBS1AsS0FBTCxDQUFXUSxTQUFYLENBQXFCO0FBQUEsdUJBQVNDLE1BQU1DLEVBQU4sSUFBWUosS0FBS0ksRUFBMUI7QUFBQSxhQUFyQixDQUFkO0FBQ0FDLG9CQUFRQyxHQUFSLENBQVlMLE9BQVo7QUFDQSxnQkFBSUEsV0FBVyxDQUFDLENBQWhCLEVBQW1CO0FBQ2ZJLHdCQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBLHFCQUFLWixLQUFMLENBQVdPLE9BQVgsRUFBb0JNLEtBQXBCLEdBQTRCUCxLQUFLTyxLQUFqQztBQUNBO0FBQ0g7QUFDREYsb0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsaUJBQUtaLEtBQUwsQ0FBV2MsSUFBWCxDQUFnQlIsSUFBaEI7QUFDSDs7OytCQUNNQSxJLEVBQU07QUFDVCxnQkFBSVMsUUFBUSxLQUFLZixLQUFMLENBQVdRLFNBQVgsQ0FBcUI7QUFBQSx1QkFBU0MsTUFBTUMsRUFBTixJQUFZSixLQUFLSSxFQUExQjtBQUFBLGFBQXJCLENBQVo7QUFDTyxnQkFBSUssU0FBUyxDQUFDLENBQWQsRUFBaUI7QUFDcEJKLHdCQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBLHFCQUFLWixLQUFMLENBQVdnQixNQUFYLENBQWtCRCxLQUFsQixFQUF3QixDQUF4QjtBQUNBO0FBQ0g7QUFDRCxpQkFBS2YsS0FBTCxDQUFXYyxJQUFYLENBQWdCUixJQUFoQjtBQUNIOzs7a0NBQ1NXLEksRUFDVjtBQUFBOztBQUNJLGlCQUFLaEIsU0FBTCxHQUFlLENBQWY7QUFDSSxpQkFBS0MsT0FBTCxHQUFhLENBQWI7QUFDQSxpQkFBS0MsVUFBTCxHQUFrQixDQUFsQjtBQUNKLGlCQUFLRSxjQUFMLEdBQW9CLENBQXBCOztBQUVBLGlCQUFLTCxLQUFMLENBQVdrQixPQUFYLENBQW1CLGdCQUFRO0FBQ3hCLG9CQUFNSCxRQUFRRSxLQUFLVCxTQUFMLENBQWU7QUFBQSwyQkFBWVcsU0FBU1QsRUFBVCxJQUFlSixLQUFLSSxFQUFoQztBQUFBLGlCQUFmLENBQWQ7O0FBRUNKLHFCQUFLYyxLQUFMLEdBQWFILEtBQUtGLEtBQUwsRUFBWUssS0FBekI7QUFDQWQscUJBQUtlLFFBQUwsR0FBZ0JKLEtBQUtGLEtBQUwsRUFBWU8sS0FBNUI7QUFDQWhCLHFCQUFLaUIsS0FBTCxHQUFjTixLQUFLRixLQUFMLEVBQVlTLFVBQTFCO0FBQ0FsQixxQkFBS21CLFNBQUwsR0FBaUJuQixLQUFLTyxLQUFMLEdBQWFQLEtBQUtlLFFBQW5DO0FBQ0FmLHFCQUFLb0IsR0FBTCxHQUFXcEIsS0FBS21CLFNBQUwsSUFBa0JuQixLQUFLcUIsUUFBTCxLQUFpQixHQUFqQixHQUF1QkMsZUFBdkIsR0FBZ0NDLG1CQUFsRCxDQUFYOztBQUVKLHNCQUFLeEIsY0FBTCxJQUFxQkMsS0FBS08sS0FBMUI7QUFDSSxzQkFBS1osU0FBTCxJQUFnQkssS0FBS21CLFNBQXJCO0FBQ0Esc0JBQUt2QixPQUFMLElBQWVJLEtBQUtvQixHQUFwQjtBQUNBLHNCQUFLdkIsVUFBTCxHQUFrQixNQUFLRixTQUFMLEdBQWlCLE1BQUtDLE9BQXhDO0FBRUgsYUFkRDtBQWVIOzs7cUNBQ1k0QixRLEVBQ2I7QUFDSSxpQkFBSzlCLEtBQUwsR0FBYThCLFNBQVM5QixLQUF0QjtBQUNBLGlCQUFLRSxPQUFMLEdBQWU0QixTQUFTNUIsT0FBeEI7QUFDQSxpQkFBS0QsU0FBTCxHQUFpQjZCLFNBQVM3QixTQUExQjtBQUNBLGlCQUFLRSxVQUFMLEdBQWtCMkIsU0FBUzNCLFVBQTNCO0FBQ0EsaUJBQUtFLGNBQUwsR0FBb0J5QixTQUFTekIsY0FBN0I7QUFFSDs7Ozs7O0lBR1EwQixRLFdBQUFBLFEsR0FFVCxrQkFBWXJCLEVBQVosRUFBZ0JHLEtBQWhCLEVBQXVCO0FBQUE7O0FBQ25CLFNBQUtILEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtHLEtBQUwsR0FBYW1CLFNBQVNuQixLQUFULENBQWI7O0FBRUEsU0FBS1UsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLRixRQUFMLEdBQWMsQ0FBZDtBQUNBLFNBQUtJLFNBQUwsR0FBZSxDQUFmO0FBQ0EsU0FBS0wsS0FBTCxHQUFZLEVBQVo7QUFDQSxTQUFLTSxHQUFMLEdBQVMsQ0FBVDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUw7QUFDQTs7SUFFYU8sTSxXQUFBQSxNO0FBRVQsb0JBQVlILFFBQVosRUFBc0JJLGFBQXRCLEVBQ0E7QUFBQTs7QUFDSSxhQUFLSixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGFBQUtJLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0g7Ozs7cUNBR1E7QUFBQTs7QUFDVCxpQkFBS0EsYUFBTCxDQUFtQkMsU0FBbkIsR0FBOEIsRUFBOUI7QUFDSCxpQkFBS0wsUUFBTCxDQUFjOUIsS0FBZCxDQUFvQmtCLE9BQXBCLENBQTRCLG1CQUFXO0FBQ3hDLHNCQUFLa0IsVUFBTCxDQUFnQkMsT0FBaEIsRUFBd0IsTUFBS0gsYUFBN0I7QUFDRSxhQUZEOztBQUlELGlCQUFLSSxXQUFMLENBQWlCLEtBQUtSLFFBQXRCLEVBQWdDLEtBQUtJLGFBQXJDO0FBQ0M7OzttQ0FFVTVCLEksRUFBSzRCLGEsRUFBYztBQUMxQnZCLG9CQUFRQyxHQUFSLENBQVlOLElBQVo7QUFDQSxnQkFBTWlDLHlEQUMrQmpDLEtBQUtJLEVBRHBDLCtCQUVXSixLQUFLaUIsS0FGaEIsb0VBR2VqQixLQUFLYyxLQUhwQiw4QkFJTSxLQUFLVSxRQUFMLENBQWMxQixRQUpwQixHQUkrQkUsS0FBS2UsUUFKcEMsa1BBU3FCZixLQUFLSSxFQVQxQix5SkFVeUZKLEtBQUtPLEtBVjlGLHlDQVdvQlAsS0FBS0ksRUFYekIsaUxBZ0JnREosS0FBS0ksRUFoQnJELDJDQUFOO0FBb0JBd0IsMEJBQWNNLGtCQUFkLENBQWlDLFdBQWpDLEVBQThDRCxNQUE5QztBQUVIOzs7b0NBRVdULFEsRUFBU0ksYSxFQUFlO0FBQ2hDLGdCQUFNSyw4SkFHb0VULFNBQVMxQixRQUg3RSxHQUd3RjBCLFNBQVM3QixTQUhqRyw0RkFJMEQ2QixTQUFTMUIsUUFKbkUsR0FJOEUwQixTQUFTNUIsT0FKdkYscUdBS29FNEIsU0FBUzFCLFFBTDdFLEdBS3dGMEIsU0FBUzNCLFVBTGpHLGdPQUFOO0FBU0EsZ0JBQU1rQyxVQUFVSSxTQUFTQyxhQUFULENBQXVCLGFBQXZCLENBQWhCO0FBQ0FMLG9CQUFRRixTQUFSLEdBQWtCLEVBQWxCO0FBQ0FFLG9CQUFRRyxrQkFBUixDQUEyQixXQUEzQixFQUF3Q0QsTUFBeEM7QUFDSDs7O3dDQUVjO0FBQUE7O0FBQ1gsZ0JBQU1JLGNBQWMsS0FBS2IsUUFBTCxDQUFjOUIsS0FBZCxDQUFvQjRDLE1BQXBCLENBQTJCLFVBQUNDLFVBQUQsRUFBWXZDLElBQVosRUFDL0M7QUFDSXVDLDhCQUFhLE9BQUtDLGlCQUFMLENBQXVCeEMsSUFBdkIsQ0FBYjtBQUNBLHVCQUFPdUMsVUFBUDtBQUNILGFBSm1CLEVBSWxCLEVBSmtCLENBQXBCO0FBS0psQyxvQkFBUUMsR0FBUixDQUFZK0IsV0FBWjtBQUNJLGdCQUFNSix3UkFPS0ksV0FQTCxtRkFRNkQsS0FBS2IsUUFBTCxDQUFjN0IsU0FSM0UsbUZBVVcsS0FBSzZCLFFBQUwsQ0FBYzVCLE9BVnpCLCtHQVlrRSxLQUFLNEIsUUFBTCxDQUFjM0IsVUFaaEYsZ0VBQU47QUFrQkEsaUJBQUsrQixhQUFMLENBQW1CTSxrQkFBbkIsQ0FBc0MsV0FBdEMsRUFBbURELE1BQW5EO0FBRUg7OzswQ0FDaUJqQyxJLEVBQUs7O0FBRW5CLGdCQUFNaUMsNEJBQ0lqQyxLQUFLTyxLQURULFVBQ21CUCxLQUFLYyxLQUR4QixnQkFDd0NkLEtBQUttQixTQUQ3QyxxQkFBTjtBQUdBLG1CQUFPYyxNQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHTSxJQUFNVixvQ0FBYyxJQUFwQjtBQUNBLElBQU1ELDRCQUFVLElBQWhCO0FBQ0EsSUFBTXhCLDhCQUFXLEdBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNGTTJDLFEsV0FBQUEsUTs7Ozs7OzsrQkFHTmIsYSxFQUF1QjtBQUFBLGdCQUFUckIsS0FBUyx1RUFBSCxDQUFHOztBQUM5QixnQkFBTTBCLDB0QkFBTjs7QUF3QkFMLDBCQUFjTSxrQkFBZCxDQUFpQyxZQUFqQyxFQUErQ0QsTUFBL0M7QUFFQzs7O2tDQUVTTCxhLEVBQWMsQ0FHdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0Q7O0FBQ0E7Ozs7SUFDYWMsTSxXQUFBQSxNOzs7Ozs7O3NDQUlRQyxLLEVBQU87O0FBRXhCdEMsb0JBQVFDLEdBQVIsQ0FBWSxXQUFXcUMsTUFBTUMsTUFBN0I7QUFDQSxnQkFBTUMsY0FBY0YsTUFBTUMsTUFBMUI7QUFDSSxnQkFBSUMsWUFBWUMsT0FBWixDQUFvQixVQUFwQixDQUFKLEVBQXFDOztBQUVqQ0gsc0JBQU1JLGNBQU47QUFDQUosc0JBQU1LLGVBQU47QUFDQSxvQkFBTUMsZUFBZSxJQUFJckUsMEJBQUosRUFBckI7QUFDQSxvQkFBTXNFLFNBQVMsSUFBSXpELFVBQUosRUFBZjtBQUNBeUQsdUJBQU9DLFlBQVAsQ0FBb0JGLGFBQWEzRCxPQUFiLENBQXFCLE1BQXJCLENBQXBCOztBQUVBLG9CQUFNOEQsY0FBY0gsYUFBYTNELE9BQWIsQ0FBcUIsV0FBckIsQ0FBcEI7O0FBS0g7QUFDQSxvQkFBR3VELFlBQVlDLE9BQVosQ0FBb0IsVUFBcEIsQ0FBSCxFQUFtQztBQUNoQyx3QkFBTU8sTUFBTVIsWUFBWWpCLGFBQVosQ0FBMEJRLGFBQTFCLENBQXdDLHNCQUF4QyxDQUFaO0FBQ0Esd0JBQUlrQixXQUFXNUIsU0FBUzJCLElBQUlwRSxLQUFiLENBQWY7QUFDRm9FLHdCQUFJcEUsS0FBSixHQUFZcUUsWUFBWSxDQUF4QjtBQUNBLHdCQUFJdEQsT0FBTyxJQUFJeUIsY0FBSixDQUFha0IsTUFBTUMsTUFBTixDQUFheEMsRUFBMUIsRUFBOEJpRCxJQUFJcEUsS0FBbEMsQ0FBWDtBQUNBaUUsMkJBQU9LLE1BQVAsQ0FBY3ZELElBQWQ7QUFDQSxpQkFORCxNQU9LLElBQUc2QyxZQUFZQyxPQUFaLENBQW9CLFVBQXBCLENBQUgsRUFBbUM7QUFDckMsd0JBQU1PLE9BQU1SLFlBQVlqQixhQUFaLENBQTBCUSxhQUExQixDQUF3QyxzQkFBeEMsQ0FBWjtBQUNBLHdCQUFJa0IsWUFBVzVCLFNBQVMyQixLQUFJcEUsS0FBYixDQUFmO0FBQ0Ysd0JBQUdxRSxZQUFTLENBQVosRUFDQTs7QUFFQUQsNkJBQUlwRSxLQUFKLEdBQVlxRSxhQUFZLENBQXhCO0FBQ0FqRCxnQ0FBUUMsR0FBUixDQUFZK0MsSUFBWjtBQUNBLDRCQUFJckQsT0FBTyxJQUFJeUIsY0FBSixDQUFha0IsTUFBTUMsTUFBTixDQUFheEMsRUFBMUIsRUFBOEJpRCxLQUFJcEUsS0FBbEMsQ0FBWDtBQUNBaUUsK0JBQU9LLE1BQVAsQ0FBY3ZELElBQWQ7QUFDQztBQUNELGlCQVhJLE1BWUQsSUFBRzZDLFlBQVlDLE9BQVosQ0FBb0IsU0FBcEIsQ0FBSCxFQUNiO0FBQ0c7QUFDQyx3QkFBSTlDLE9BQU8sSUFBSXlCLGNBQUosQ0FBYWtCLE1BQU1DLE1BQU4sQ0FBYXhDLEVBQTFCLEVBQTZCLENBQTdCLENBQVg7O0FBRUE4QywyQkFBT00sTUFBUCxDQUFjeEQsSUFBZDtBQUNIO0FBQ1NrRCx1QkFBT08sU0FBUCxDQUFpQkwsV0FBakI7QUFDQUgsNkJBQWEvRCxPQUFiLENBQXFCLE1BQXJCLEVBQTZCZ0UsTUFBN0I7QUFDQTdDLHdCQUFRQyxHQUFSLENBQVksZUFBWjtBQUNBRCx3QkFBUUMsR0FBUixDQUFZMkMsYUFBYTNELE9BQWIsQ0FBcUIsTUFBckIsQ0FBWjtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEUDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNb0UsZUFBZTtBQUNuQkMsaUJBQWV4QixTQUFTQyxhQUFULENBQXVCLGlCQUF2QixDQURJOztBQUduQndCLG9CQUFrQnpCLFNBQVNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBSEM7QUFJbkJ5QixlQUFhMUIsU0FBU0MsYUFBVCxDQUF1QixlQUF2Qjs7QUFKTSxDQUFyQjs7QUFRQSxJQUFJMEIsU0FBUyxJQUFJckIsa0JBQUosRUFBYjtBQUNBcUIsT0FBT0MsTUFBUCxDQUFjTCxhQUFhQyxhQUEzQjs7QUFFQSxJQUFNVixlQUFlLElBQUlyRSwwQkFBSixFQUFyQjtBQUNBLElBQU00QyxXQUFXeUIsYUFBYTNELE9BQWIsQ0FBcUIsTUFBckIsQ0FBakIsQyxDQUErQztBQUMvQyxJQUFHa0MsU0FBUzlCLEtBQVQsQ0FBZXNFLE1BQWYsSUFBdUIsQ0FBMUIsRUFBNkJsRixPQUFPbUYsUUFBUCxDQUFnQkMsSUFBaEIsR0FBcUIsR0FBckI7QUFDN0IsSUFBTUMsU0FBUyxJQUFJeEMsY0FBSixDQUFXSCxRQUFYLEVBQW9Ca0MsYUFBYUUsZ0JBQWpDLENBQWY7QUFDQU8sT0FBT0MsVUFBUDs7QUFFQTtBQUNDVixhQUFhRSxnQkFBYixDQUE4QlMsZ0JBQTlCLENBQStDLE9BQS9DLEVBQXdEM0IsZUFBTzRCLGFBQS9EO0FBQ0FaLGFBQWFFLGdCQUFiLENBQThCUyxnQkFBOUIsQ0FBK0MsT0FBL0MsRUFBd0QsWUFBVTtBQUNqRSxNQUFNN0MsV0FBV3lCLGFBQWEzRCxPQUFiLENBQXFCLE1BQXJCLENBQWpCLENBRGlFLENBQ2xCO0FBQy9DLE1BQUdrQyxTQUFTOUIsS0FBVCxDQUFlc0UsTUFBZixJQUF1QixDQUExQixFQUE2QmxGLE9BQU9tRixRQUFQLENBQWdCQyxJQUFoQixHQUFxQixHQUFyQjtBQUM3QixNQUFNQyxTQUFTLElBQUl4QyxjQUFKLENBQVdILFFBQVgsRUFBb0JrQyxhQUFhRSxnQkFBakMsQ0FBZjtBQUNBTyxTQUFPQyxVQUFQO0FBQ0EsQ0FMRCxFIiwiZmlsZSI6ImpzL2NhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9jYXJ0UGFnZS5qc1wiKTtcbiIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn0iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gIH1cblxuICB2YXIgaSA9IDE7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgcmV0dXJuICclJztcbiAgICBpZiAoaSA+PSBsZW4pIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeCkge1xuICAgICAgY2FzZSAnJXMnOiByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclZCc6IHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgaWYgKGlzTnVsbCh4KSB8fCAhaXNPYmplY3QoeCkpIHtcbiAgICAgIHN0ciArPSAnICcgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgKz0gJyAnICsgaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLy8gTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbi8vIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4vLyBJZiAtLW5vLWRlcHJlY2F0aW9uIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbihmbiwgbXNnKSB7XG4gIC8vIEFsbG93IGZvciBkZXByZWNhdGluZyB0aGluZ3MgaW4gdGhlIHByb2Nlc3Mgb2Ygc3RhcnRpbmcgdXAuXG4gIGlmIChpc1VuZGVmaW5lZChnbG9iYWwucHJvY2VzcykpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5kZXByZWNhdGUoZm4sIG1zZykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKHByb2Nlc3Mubm9EZXByZWNhdGlvbiA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZGVwcmVjYXRlZCgpIHtcbiAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgaWYgKHByb2Nlc3MudGhyb3dEZXByZWNhdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy50cmFjZURlcHJlY2F0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUudHJhY2UobXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICAgIH1cbiAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGRlcHJlY2F0ZWQ7XG59O1xuXG5cbnZhciBkZWJ1Z3MgPSB7fTtcbnZhciBkZWJ1Z0Vudmlyb247XG5leHBvcnRzLmRlYnVnbG9nID0gZnVuY3Rpb24oc2V0KSB7XG4gIGlmIChpc1VuZGVmaW5lZChkZWJ1Z0Vudmlyb24pKVxuICAgIGRlYnVnRW52aXJvbiA9IHByb2Nlc3MuZW52Lk5PREVfREVCVUcgfHwgJyc7XG4gIHNldCA9IHNldC50b1VwcGVyQ2FzZSgpO1xuICBpZiAoIWRlYnVnc1tzZXRdKSB7XG4gICAgaWYgKG5ldyBSZWdFeHAoJ1xcXFxiJyArIHNldCArICdcXFxcYicsICdpJykudGVzdChkZWJ1Z0Vudmlyb24pKSB7XG4gICAgICB2YXIgcGlkID0gcHJvY2Vzcy5waWQ7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbXNnID0gZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignJXMgJWQ6ICVzJywgc2V0LCBwaWQsIG1zZyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge307XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJ1Z3Nbc2V0XTtcbn07XG5cblxuLyoqXG4gKiBFY2hvcyB0aGUgdmFsdWUgb2YgYSB2YWx1ZS4gVHJ5cyB0byBwcmludCB0aGUgdmFsdWUgb3V0XG4gKiBpbiB0aGUgYmVzdCB3YXkgcG9zc2libGUgZ2l2ZW4gdGhlIGRpZmZlcmVudCB0eXBlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcHJpbnQgb3V0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QgdGhhdCBhbHRlcnMgdGhlIG91dHB1dC5cbiAqL1xuLyogbGVnYWN5OiBvYmosIHNob3dIaWRkZW4sIGRlcHRoLCBjb2xvcnMqL1xuZnVuY3Rpb24gaW5zcGVjdChvYmosIG9wdHMpIHtcbiAgLy8gZGVmYXVsdCBvcHRpb25zXG4gIHZhciBjdHggPSB7XG4gICAgc2VlbjogW10sXG4gICAgc3R5bGl6ZTogc3R5bGl6ZU5vQ29sb3JcbiAgfTtcbiAgLy8gbGVnYWN5Li4uXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDMpIGN0eC5kZXB0aCA9IGFyZ3VtZW50c1syXTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gNCkgY3R4LmNvbG9ycyA9IGFyZ3VtZW50c1szXTtcbiAgaWYgKGlzQm9vbGVhbihvcHRzKSkge1xuICAgIC8vIGxlZ2FjeS4uLlxuICAgIGN0eC5zaG93SGlkZGVuID0gb3B0cztcbiAgfSBlbHNlIGlmIChvcHRzKSB7XG4gICAgLy8gZ290IGFuIFwib3B0aW9uc1wiIG9iamVjdFxuICAgIGV4cG9ydHMuX2V4dGVuZChjdHgsIG9wdHMpO1xuICB9XG4gIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5zaG93SGlkZGVuKSkgY3R4LnNob3dIaWRkZW4gPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5kZXB0aCkpIGN0eC5kZXB0aCA9IDI7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY29sb3JzKSkgY3R4LmNvbG9ycyA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmN1c3RvbUluc3BlY3QpKSBjdHguY3VzdG9tSW5zcGVjdCA9IHRydWU7XG4gIGlmIChjdHguY29sb3JzKSBjdHguc3R5bGl6ZSA9IHN0eWxpemVXaXRoQ29sb3I7XG4gIHJldHVybiBmb3JtYXRWYWx1ZShjdHgsIG9iaiwgY3R4LmRlcHRoKTtcbn1cbmV4cG9ydHMuaW5zcGVjdCA9IGluc3BlY3Q7XG5cblxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTlNJX2VzY2FwZV9jb2RlI2dyYXBoaWNzXG5pbnNwZWN0LmNvbG9ycyA9IHtcbiAgJ2JvbGQnIDogWzEsIDIyXSxcbiAgJ2l0YWxpYycgOiBbMywgMjNdLFxuICAndW5kZXJsaW5lJyA6IFs0LCAyNF0sXG4gICdpbnZlcnNlJyA6IFs3LCAyN10sXG4gICd3aGl0ZScgOiBbMzcsIDM5XSxcbiAgJ2dyZXknIDogWzkwLCAzOV0sXG4gICdibGFjaycgOiBbMzAsIDM5XSxcbiAgJ2JsdWUnIDogWzM0LCAzOV0sXG4gICdjeWFuJyA6IFszNiwgMzldLFxuICAnZ3JlZW4nIDogWzMyLCAzOV0sXG4gICdtYWdlbnRhJyA6IFszNSwgMzldLFxuICAncmVkJyA6IFszMSwgMzldLFxuICAneWVsbG93JyA6IFszMywgMzldXG59O1xuXG4vLyBEb24ndCB1c2UgJ2JsdWUnIG5vdCB2aXNpYmxlIG9uIGNtZC5leGVcbmluc3BlY3Quc3R5bGVzID0ge1xuICAnc3BlY2lhbCc6ICdjeWFuJyxcbiAgJ251bWJlcic6ICd5ZWxsb3cnLFxuICAnYm9vbGVhbic6ICd5ZWxsb3cnLFxuICAndW5kZWZpbmVkJzogJ2dyZXknLFxuICAnbnVsbCc6ICdib2xkJyxcbiAgJ3N0cmluZyc6ICdncmVlbicsXG4gICdkYXRlJzogJ21hZ2VudGEnLFxuICAvLyBcIm5hbWVcIjogaW50ZW50aW9uYWxseSBub3Qgc3R5bGluZ1xuICAncmVnZXhwJzogJ3JlZCdcbn07XG5cblxuZnVuY3Rpb24gc3R5bGl6ZVdpdGhDb2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICB2YXIgc3R5bGUgPSBpbnNwZWN0LnN0eWxlc1tzdHlsZVR5cGVdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHJldHVybiAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzBdICsgJ20nICsgc3RyICtcbiAgICAgICAgICAgJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVsxXSArICdtJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3R5bGl6ZU5vQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgcmV0dXJuIHN0cjtcbn1cblxuXG5mdW5jdGlvbiBhcnJheVRvSGFzaChhcnJheSkge1xuICB2YXIgaGFzaCA9IHt9O1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24odmFsLCBpZHgpIHtcbiAgICBoYXNoW3ZhbF0gPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gaGFzaDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMpIHtcbiAgLy8gUHJvdmlkZSBhIGhvb2sgZm9yIHVzZXItc3BlY2lmaWVkIGluc3BlY3QgZnVuY3Rpb25zLlxuICAvLyBDaGVjayB0aGF0IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIGFuIGluc3BlY3QgZnVuY3Rpb24gb24gaXRcbiAgaWYgKGN0eC5jdXN0b21JbnNwZWN0ICYmXG4gICAgICB2YWx1ZSAmJlxuICAgICAgaXNGdW5jdGlvbih2YWx1ZS5pbnNwZWN0KSAmJlxuICAgICAgLy8gRmlsdGVyIG91dCB0aGUgdXRpbCBtb2R1bGUsIGl0J3MgaW5zcGVjdCBmdW5jdGlvbiBpcyBzcGVjaWFsXG4gICAgICB2YWx1ZS5pbnNwZWN0ICE9PSBleHBvcnRzLmluc3BlY3QgJiZcbiAgICAgIC8vIEFsc28gZmlsdGVyIG91dCBhbnkgcHJvdG90eXBlIG9iamVjdHMgdXNpbmcgdGhlIGNpcmN1bGFyIGNoZWNrLlxuICAgICAgISh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlKSkge1xuICAgIHZhciByZXQgPSB2YWx1ZS5pbnNwZWN0KHJlY3Vyc2VUaW1lcywgY3R4KTtcbiAgICBpZiAoIWlzU3RyaW5nKHJldCkpIHtcbiAgICAgIHJldCA9IGZvcm1hdFZhbHVlKGN0eCwgcmV0LCByZWN1cnNlVGltZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gUHJpbWl0aXZlIHR5cGVzIGNhbm5vdCBoYXZlIHByb3BlcnRpZXNcbiAgdmFyIHByaW1pdGl2ZSA9IGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKTtcbiAgaWYgKHByaW1pdGl2ZSkge1xuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICAvLyBMb29rIHVwIHRoZSBrZXlzIG9mIHRoZSBvYmplY3QuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICB2YXIgdmlzaWJsZUtleXMgPSBhcnJheVRvSGFzaChrZXlzKTtcblxuICBpZiAoY3R4LnNob3dIaWRkZW4pIHtcbiAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWUpO1xuICB9XG5cbiAgLy8gSUUgZG9lc24ndCBtYWtlIGVycm9yIGZpZWxkcyBub24tZW51bWVyYWJsZVxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvZHd3NTJzYnQodj12cy45NCkuYXNweFxuICBpZiAoaXNFcnJvcih2YWx1ZSlcbiAgICAgICYmIChrZXlzLmluZGV4T2YoJ21lc3NhZ2UnKSA+PSAwIHx8IGtleXMuaW5kZXhPZignZGVzY3JpcHRpb24nKSA+PSAwKSkge1xuICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICAvLyBTb21lIHR5cGUgb2Ygb2JqZWN0IHdpdGhvdXQgcHJvcGVydGllcyBjYW4gYmUgc2hvcnRjdXR0ZWQuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgdmFyIG5hbWUgPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW0Z1bmN0aW9uJyArIG5hbWUgKyAnXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfVxuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdkYXRlJyk7XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYmFzZSA9ICcnLCBhcnJheSA9IGZhbHNlLCBicmFjZXMgPSBbJ3snLCAnfSddO1xuXG4gIC8vIE1ha2UgQXJyYXkgc2F5IHRoYXQgdGhleSBhcmUgQXJyYXlcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgYXJyYXkgPSB0cnVlO1xuICAgIGJyYWNlcyA9IFsnWycsICddJ107XG4gIH1cblxuICAvLyBNYWtlIGZ1bmN0aW9ucyBzYXkgdGhhdCB0aGV5IGFyZSBmdW5jdGlvbnNcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgdmFyIG4gPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICBiYXNlID0gJyBbRnVuY3Rpb24nICsgbiArICddJztcbiAgfVxuXG4gIC8vIE1ha2UgUmVnRXhwcyBzYXkgdGhhdCB0aGV5IGFyZSBSZWdFeHBzXG4gIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZGF0ZXMgd2l0aCBwcm9wZXJ0aWVzIGZpcnN0IHNheSB0aGUgZGF0ZVxuICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBEYXRlLnByb3RvdHlwZS50b1VUQ1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZXJyb3Igd2l0aCBtZXNzYWdlIGZpcnN0IHNheSB0aGUgZXJyb3JcbiAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCAmJiAoIWFycmF5IHx8IHZhbHVlLmxlbmd0aCA9PSAwKSkge1xuICAgIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgYnJhY2VzWzFdO1xuICB9XG5cbiAgaWYgKHJlY3Vyc2VUaW1lcyA8IDApIHtcbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tPYmplY3RdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cblxuICBjdHguc2Vlbi5wdXNoKHZhbHVlKTtcblxuICB2YXIgb3V0cHV0O1xuICBpZiAoYXJyYXkpIHtcbiAgICBvdXRwdXQgPSBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKTtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBrZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGN0eC5zZWVuLnBvcCgpO1xuXG4gIHJldHVybiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ3VuZGVmaW5lZCcsICd1bmRlZmluZWQnKTtcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhciBzaW1wbGUgPSAnXFwnJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKSArICdcXCcnO1xuICAgIHJldHVybiBjdHguc3R5bGl6ZShzaW1wbGUsICdzdHJpbmcnKTtcbiAgfVxuICBpZiAoaXNOdW1iZXIodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnbnVtYmVyJyk7XG4gIGlmIChpc0Jvb2xlYW4odmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnYm9vbGVhbicpO1xuICAvLyBGb3Igc29tZSByZWFzb24gdHlwZW9mIG51bGwgaXMgXCJvYmplY3RcIiwgc28gc3BlY2lhbCBjYXNlIGhlcmUuXG4gIGlmIChpc051bGwodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnbnVsbCcsICdudWxsJyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0RXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuICdbJyArIEVycm9yLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSArICddJztcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkodmFsdWUsIFN0cmluZyhpKSkpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAgU3RyaW5nKGkpLCB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5wdXNoKCcnKTtcbiAgICB9XG4gIH1cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmICgha2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBrZXksIHRydWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpIHtcbiAgdmFyIG5hbWUsIHN0ciwgZGVzYztcbiAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodmFsdWUsIGtleSkgfHwgeyB2YWx1ZTogdmFsdWVba2V5XSB9O1xuICBpZiAoZGVzYy5nZXQpIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyL1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmICghaGFzT3duUHJvcGVydHkodmlzaWJsZUtleXMsIGtleSkpIHtcbiAgICBuYW1lID0gJ1snICsga2V5ICsgJ10nO1xuICB9XG4gIGlmICghc3RyKSB7XG4gICAgaWYgKGN0eC5zZWVuLmluZGV4T2YoZGVzYy52YWx1ZSkgPCAwKSB7XG4gICAgICBpZiAoaXNOdWxsKHJlY3Vyc2VUaW1lcykpIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgcmVjdXJzZVRpbWVzIC0gMSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ1xcbicpID4gLTEpIHtcbiAgICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgICAgc3RyID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpLnN1YnN0cigyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHIgPSAnXFxuJyArIHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tDaXJjdWxhcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNVbmRlZmluZWQobmFtZSkpIHtcbiAgICBpZiAoYXJyYXkgJiYga2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgbmFtZSA9IEpTT04uc3RyaW5naWZ5KCcnICsga2V5KTtcbiAgICBpZiAobmFtZS5tYXRjaCgvXlwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXCIkLykpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigxLCBuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICduYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXlwifFwiJCkvZywgXCInXCIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICdzdHJpbmcnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZSArICc6ICcgKyBzdHI7XG59XG5cblxuZnVuY3Rpb24gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpIHtcbiAgdmFyIG51bUxpbmVzRXN0ID0gMDtcbiAgdmFyIGxlbmd0aCA9IG91dHB1dC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgbnVtTGluZXNFc3QrKztcbiAgICBpZiAoY3VyLmluZGV4T2YoJ1xcbicpID49IDApIG51bUxpbmVzRXN0Kys7XG4gICAgcmV0dXJuIHByZXYgKyBjdXIucmVwbGFjZSgvXFx1MDAxYlxcW1xcZFxcZD9tL2csICcnKS5sZW5ndGggKyAxO1xuICB9LCAwKTtcblxuICBpZiAobGVuZ3RoID4gNjApIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICtcbiAgICAgICAgICAgKGJhc2UgPT09ICcnID8gJycgOiBiYXNlICsgJ1xcbiAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIG91dHB1dC5qb2luKCcsXFxuICAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIGJyYWNlc1sxXTtcbiAgfVxuXG4gIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgJyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnICcgKyBicmFjZXNbMV07XG59XG5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cbmZ1bmN0aW9uIGlzQXJyYXkoYXIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXIpO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gaXNPYmplY3QocmUpICYmIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gaXNPYmplY3QoZCkgJiYgb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGUpICYmXG4gICAgICAob2JqZWN0VG9TdHJpbmcoZSkgPT09ICdbb2JqZWN0IEVycm9yXScgfHwgZSBpbnN0YW5jZW9mIEVycm9yKTtcbn1cbmV4cG9ydHMuaXNFcnJvciA9IGlzRXJyb3I7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNQcmltaXRpdmUoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGwgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3ltYm9sJyB8fCAgLy8gRVM2IHN5bWJvbFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5cbmV4cG9ydHMuaXNCdWZmZXIgPSByZXF1aXJlKCcuL3N1cHBvcnQvaXNCdWZmZXInKTtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuXG5cbmZ1bmN0aW9uIHBhZChuKSB7XG4gIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuLnRvU3RyaW5nKDEwKSA6IG4udG9TdHJpbmcoMTApO1xufVxuXG5cbnZhciBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJyxcbiAgICAgICAgICAgICAgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cbi8vIDI2IEZlYiAxNjoxOTozNFxuZnVuY3Rpb24gdGltZXN0YW1wKCkge1xuICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gIHZhciB0aW1lID0gW3BhZChkLmdldEhvdXJzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRNaW51dGVzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRTZWNvbmRzKCkpXS5qb2luKCc6Jyk7XG4gIHJldHVybiBbZC5nZXREYXRlKCksIG1vbnRoc1tkLmdldE1vbnRoKCldLCB0aW1lXS5qb2luKCcgJyk7XG59XG5cblxuLy8gbG9nIGlzIGp1c3QgYSB0aGluIHdyYXBwZXIgdG8gY29uc29sZS5sb2cgdGhhdCBwcmVwZW5kcyBhIHRpbWVzdGFtcFxuZXhwb3J0cy5sb2cgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJyVzIC0gJXMnLCB0aW1lc3RhbXAoKSwgZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKSk7XG59O1xuXG5cbi8qKlxuICogSW5oZXJpdCB0aGUgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBvbmUgY29uc3RydWN0b3IgaW50byBhbm90aGVyLlxuICpcbiAqIFRoZSBGdW5jdGlvbi5wcm90b3R5cGUuaW5oZXJpdHMgZnJvbSBsYW5nLmpzIHJld3JpdHRlbiBhcyBhIHN0YW5kYWxvbmVcbiAqIGZ1bmN0aW9uIChub3Qgb24gRnVuY3Rpb24ucHJvdG90eXBlKS4gTk9URTogSWYgdGhpcyBmaWxlIGlzIHRvIGJlIGxvYWRlZFxuICogZHVyaW5nIGJvb3RzdHJhcHBpbmcgdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZXdyaXR0ZW4gdXNpbmcgc29tZSBuYXRpdmVcbiAqIGZ1bmN0aW9ucyBhcyBwcm90b3R5cGUgc2V0dXAgdXNpbmcgbm9ybWFsIEphdmFTY3JpcHQgZG9lcyBub3Qgd29yayBhc1xuICogZXhwZWN0ZWQgZHVyaW5nIGJvb3RzdHJhcHBpbmcgKHNlZSBtaXJyb3IuanMgaW4gcjExNDkwMykuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB3aGljaCBuZWVkcyB0byBpbmhlcml0IHRoZVxuICogICAgIHByb3RvdHlwZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB0byBpbmhlcml0IHByb3RvdHlwZSBmcm9tLlxuICovXG5leHBvcnRzLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcblxuZXhwb3J0cy5fZXh0ZW5kID0gZnVuY3Rpb24ob3JpZ2luLCBhZGQpIHtcbiAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgYWRkIGlzbid0IGFuIG9iamVjdFxuICBpZiAoIWFkZCB8fCAhaXNPYmplY3QoYWRkKSkgcmV0dXJuIG9yaWdpbjtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFkZCk7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBvcmlnaW5ba2V5c1tpXV0gPSBhZGRba2V5c1tpXV07XG4gIH1cbiAgcmV0dXJuIG9yaWdpbjtcbn07XG5cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiZXhwb3J0IGNsYXNzIENhY2hlTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy5jYWNoZVN0b3JlID0gd2luZG93LnNlc3Npb25TdG9yYWdlO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgc2V0SXRlbShrZXkgLHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yZS5zZXRJdGVtKGtleSxKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbShrZXkpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmNhY2hlU3RvcmUuZ2V0SXRlbShrZXkpKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUl0ZW0oa2V5KSB7XHJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JlLmRlbGV0ZUl0ZW0oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckFsbCgpIHtcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmUuY2xlYXIoKTtcclxuICAgIH1cclxuICB9IiwiaW1wb3J0IHtiZXZlcmFnZVRheCwgZm9vZFRheCwgY3VycmVuY3l9IGZyb20gXCIuL2NvbmZpZ1wiXHJcbmV4cG9ydCBjbGFzcyBDYXJ0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLkl0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5jYXJ0VG90YWw9MDtcclxuICAgICAgICB0aGlzLmNhcnRUYXg9MDtcclxuICAgICAgICB0aGlzLmdyYW5kVG90YWw9MFxyXG4gICAgICAgIHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbUNvdW50PTA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGl0ZW0pIHtcclxuICAgICAgICB2YXIgb2xkSXRlbSA9IHRoaXMuSXRlbXMuZmluZEluZGV4KGNJdGVtID0+IGNJdGVtLmlkID09IGl0ZW0uaWQpXHJcbiAgICAgICAgY29uc29sZS5sb2cob2xkSXRlbSk7XHJcbiAgICAgICAgaWYgKG9sZEl0ZW0gIT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmb3VuZFwiKVxyXG4gICAgICAgICAgICB0aGlzLkl0ZW1zW29sZEl0ZW1dLmNvdW50ID0gaXRlbS5jb3VudDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygnaW4gbmV3JylcclxuICAgICAgICB0aGlzLkl0ZW1zLnB1c2goaXRlbSlcclxuICAgIH1cclxuICAgIHJlbW92ZShpdGVtKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5JdGVtcy5maW5kSW5kZXgoY0l0ZW0gPT4gY0l0ZW0uaWQgPT0gaXRlbS5pZClcclxuICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm91bmRcIilcclxuICAgICAgICAgICAgdGhpcy5JdGVtcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5JdGVtcy5wdXNoKGl0ZW0pXHJcbiAgICB9XHJcbiAgICByZWNvbmNpbGUoZGF0YSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNhcnRUb3RhbD0wO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnRUYXg9MDtcclxuICAgICAgICAgICAgdGhpcy5ncmFuZFRvdGFsID0gMDtcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbUNvdW50PTA7XHJcblxyXG4gICAgICAgIHRoaXMuSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICBjb25zdCBpbmRleCA9IGRhdGEuZmluZEluZGV4KGRhdGFJdGVtID0+IGRhdGFJdGVtLmlkID09IGl0ZW0uaWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpdGVtLnRpdGxlID0gZGF0YVtpbmRleF0udGl0bGU7XHJcbiAgICAgICAgICAgIGl0ZW0udW5pdENvc3QgPSBkYXRhW2luZGV4XS5wcmljZTtcclxuICAgICAgICAgICAgaXRlbS5pbWFnZSAgPSBkYXRhW2luZGV4XS5waG90b1NtYWxsXHJcbiAgICAgICAgICAgIGl0ZW0udG90YWxDb3N0ID0gaXRlbS5jb3VudCAqIGl0ZW0udW5pdENvc3Q7XHJcbiAgICAgICAgICAgIGl0ZW0udGF4ID0gaXRlbS50b3RhbENvc3QgKiAoaXRlbS5mb29kVHlwZSA9PT1cImZcIiA/IGZvb2RUYXg6IGJldmVyYWdlVGF4KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1Db3VudCs9aXRlbS5jb3VudDtcclxuICAgICAgICAgICAgdGhpcy5jYXJ0VG90YWwrPWl0ZW0udG90YWxDb3N0O1xyXG4gICAgICAgICAgICB0aGlzLmNhcnRUYXgrPSBpdGVtLnRheDtcclxuICAgICAgICAgICAgdGhpcy5ncmFuZFRvdGFsID0gdGhpcy5jYXJ0VG90YWwgKyB0aGlzLmNhcnRUYXg7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVzdG9yZVN0YXRlKGNhcnREYXRhKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuSXRlbXMgPSBjYXJ0RGF0YS5JdGVtcztcclxuICAgICAgICB0aGlzLmNhcnRUYXggPSBjYXJ0RGF0YS5jYXJ0VGF4O1xyXG4gICAgICAgIHRoaXMuY2FydFRvdGFsID0gY2FydERhdGEuY2FydFRvdGFsO1xyXG4gICAgICAgIHRoaXMuZ3JhbmRUb3RhbCA9IGNhcnREYXRhLmdyYW5kVG90YWw7XHJcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1Db3VudD1jYXJ0RGF0YS50b3RhbEl0ZW1Db3VudDtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBDYXJ0SXRlbSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQsIGNvdW50KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuY291bnQgPSBwYXJzZUludChjb3VudCk7XHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudW5pdENvc3Q9MDtcclxuICAgICAgICB0aGlzLnRvdGFsQ29zdD0wO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPVwiXCI7XHJcbiAgICAgICAgdGhpcy50YXg9MDtcclxuICAgIH1cclxuXHJcbn0iLCIvL2ltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcclxuLy9pbXBvcnQgeyBDYXJ0IH0gZnJvbSBcIi4vY2FydFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhcnRVSSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FydERhdGEsIHBhcmVudEVsZW1lbnQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jYXJ0RGF0YSA9IGNhcnREYXRhO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG5cclxucmVuZGVyQ2FydCgpIHtcclxuICAgIHRoaXMucGFyZW50RWxlbWVudC5pbm5lckhUTUwgPVwiXCI7XHJcbiB0aGlzLmNhcnREYXRhLkl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbnRoaXMucmVuZGVySXRlbShlbGVtZW50LHRoaXMucGFyZW50RWxlbWVudCk7ICBcclxuIH0pO1xyXG5cclxudGhpcy5yZW5kZXJUb3RhbCh0aGlzLmNhcnREYXRhLCB0aGlzLnBhcmVudEVsZW1lbnQpO1xyXG59XHJcblxyXG5yZW5kZXJJdGVtKGl0ZW0scGFyZW50RWxlbWVudCl7XHJcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgIGNvbnN0IG1hcmt1cCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW1cIiBkYXRhLWl0ZW1pZD0ke2l0ZW0uaWR9PlxyXG4gICAgPGRpdj48aW1nIHNyYz1cIiR7aXRlbS5pbWFnZX1cIiBhbHQ9XCJcIiBjbGFzcz1cImZvb2RcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+ICR7aXRlbS50aXRsZX08L2Rpdj5cclxuICAgICAgICAgPGRpdj4ke3RoaXMuY2FydERhdGEuY3VycmVuY3l9JHtpdGVtLnVuaXRDb3N0fTwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1xdWFudGl0eVwiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1xdWFudGl0eVwiPlxyXG4gICAgICAgICA8Zm9ybSBpZD1cIm15Zm9ybVwiIG1ldGhvZD1cIlBPU1RcIiBhY3Rpb249XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtcGx1cy1taW51c1wiPlxyXG4gICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCIke2l0ZW0uaWR9XCIgY2xhc3M9XCJkZWMtcXR5IHF0eS1idG5cIj4tPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiY2FydC1wbHVzLW1pbnVzLWJveFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInF0eWJ1dHRvblwiIHJlYWRvbmx5IHZhbHVlPVwiJHtpdGVtLmNvdW50fVwiPlxyXG4gICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9JHtpdGVtLmlkfSBjbGFzcz1cImluYy1xdHkgcXR5LWJ0blwiPis8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Zvcm0+XHJcbiAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJyZW1vdmUgcXR5LWJ0blwiIGlkPVwiJHtpdGVtLmlkfVwiPlg8L2Rpdj5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIHBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBtYXJrdXApO1xyXG4gIFxyXG59XHJcbiAgICBcclxucmVuZGVyVG90YWwoY2FydERhdGEscGFyZW50RWxlbWVudCkge1xyXG4gICAgY29uc3QgbWFya3VwID0gYFxyXG4gICA8ZGl2IGNsYXNzPVwic3VtbWFyeVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInN1bW1hcnlfX3dyYXBcIj4gXHJcbiAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeV9fYW1vdW50IHN1bW1hcnlfX2l0ZW1cIj48c3Bhbj5DYXJ0IFRvdGFsPC9zcGFuPjxzcGFuPiR7Y2FydERhdGEuY3VycmVuY3l9JHtjYXJ0RGF0YS5jYXJ0VG90YWx9IDwvc3Bhbj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJzdW1tYXJ5X190YXggc3VtbWFyeV9faXRlbVwiPjxzcGFuPlRheDwvc3Bhbj48c3Bhbj4ke2NhcnREYXRhLmN1cnJlbmN5fSR7Y2FydERhdGEuY2FydFRheH08L3NwYW4+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeV9fdG90YWwgc3VtbWFyeV9faXRlbVwiPjxzcGFuPkdyYW5kIFRvdGFsPC9zcGFuPjxzcGFuPiR7Y2FydERhdGEuY3VycmVuY3l9JHtjYXJ0RGF0YS5ncmFuZFRvdGFsfTwvc3Bhbj48L2Rpdj5cclxuICAgIDxkaXY+PHNwYW4+PC9zcGFuPjxzcGFuPjxmb3JtIGlkPVwicGF5bWVudFwiIG1ldGhvZD1cImdldFwiIGFjdGlvbj1cIi9wYXltZW50Lmh0bWxcIj48YnV0dG9uIGNsYXNzPVwiZm9vZF9fYnRuXCIgdHlwZT1cInN1Ym1pdFwiPlByb2NlZWQgdG8gUGF5bWVudDwvYnV0dG9uPjwvZm9ybT48L3NwYW4+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmA7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJ0LXRvdGFsXCIpO1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUw9XCJcIlxyXG4gICAgZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG1hcmt1cCk7XHJcbn1cclxuXHJcbnJlbmRlclN1bW1hcnkoKXtcclxuICAgIGNvbnN0IGl0ZW1TdW1tYXJ5ID0gdGhpcy5jYXJ0RGF0YS5JdGVtcy5yZWR1Y2UoKGl0ZW1NYXJrdXAsaXRlbSkgPT4gXHJcbiAgICB7XHJcbiAgICAgICAgaXRlbU1hcmt1cCs9IHRoaXMucmVuZGVyU3VtbWFyeUl0ZW0oaXRlbSk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1NYXJrdXA7XHJcbiAgICB9LFwiXCIpO1xyXG5jb25zb2xlLmxvZyhpdGVtU3VtbWFyeSk7XHJcbiAgICBjb25zdCBtYXJrdXAgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwib3JkZXItd3JhcHBlclwiPlxyXG4gICAgPGgyIGNsYXNzPVwib3JkZXItZGV0YWlscy1oZWFkZXJcIj5PcmRlciBTdW1tYXJ5PC9oMj5cclxuICAgIDxkaXYgY2xhc3M9XCJvcmRlci1kZXRhaWxzXCI+XHJcbiAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGk+PHAgY2xhc3M9XCJzdHJvbmdcIj5Qcm9kdWN0PC9wPjxwIGNsYXNzPVwic3Ryb25nXCI+VG90YWw8L3A+PC9saT5cclxuICAgICAgICAgICAgICR7aXRlbVN1bW1hcnl9XHJcbiAgICAgICAgICAgIDxsaT48cCBjbGFzcz1cInN0cm9uZ1wiPmNhcnQgc3VidG90YWw8L3A+PHAgY2xhc3M9XCJzdHJvbmdcIj4ke3RoaXMuY2FydERhdGEuY2FydFRvdGFsfTwvcD48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHAgY2xhc3M9XCJzdHJvbmdcIj5UYXg8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3RoaXMuY2FydERhdGEuY2FydFRheH08L3A+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48cCBjbGFzcz1cInN0cm9uZ1wiPkdyYW5kIFN1YnRvdGFsPC9wPjxwIGNsYXNzPVwiZ3JhbmRUb3RhbFwiPiR7dGhpcy5jYXJ0RGF0YS5ncmFuZFRvdGFsfTwvcD48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Zvcm0+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuICAgIGA7XHJcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBtYXJrdXApO1xyXG4gIFxyXG59XHJcbnJlbmRlclN1bW1hcnlJdGVtKGl0ZW0pe1xyXG4gICAgXHJcbiAgICBjb25zdCBtYXJrdXAgPWBcclxuICAgICA8bGk+PHA+JHtpdGVtLmNvdW50fXggJHtpdGVtLnRpdGxlfSA8L3A+PHA+JHtpdGVtLnRvdGFsQ29zdH08L3A+PC9saT5cclxuICAgICBgXHJcbiAgICByZXR1cm4gbWFya3VwO1xyXG59XHJcblxyXG5cclxufSIsImV4cG9ydCBjb25zdCBiZXZlcmFnZVRheCA9IDAuMTI7XHJcbmV4cG9ydCBjb25zdCBmb29kVGF4ID0gMC4wNTtcclxuZXhwb3J0IGNvbnN0IGN1cnJlbmN5ID0gXCLigrlcIjsiLCJleHBvcnQgY2xhc3MgSGVhZGVyVUkge1xyXG5cclxuXHJcbnJlbmRlcihwYXJlbnRFbGVtZW50LGNvdW50PTApIHtcclxuY29uc3QgbWFya3VwID0gYFxyXG48aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XHJcbjxhIGhyZWY9XCIvXCIgPlxyXG4gICAgICAgIDxpbWcgc3JjID1cIi9pbWcvcmRkbG9nby5zdmdcIiBhbHQ9XCJSREQgbG9nb1wiIGNsYXNzPVwibG9nb1wiLz5cclxuPC9hPlxyXG5cclxuPGRpdiBjbGFzcz1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdmlnYXRpb25fX25hdlwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2aWdhdGlvbl9fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdmlnYXRpb25fX2l0ZW1cIj48YSBocmVmPVwiL1wiIGNsYXNzPVwibmF2aWdhdGlvbl9fbGlua1wiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXZpZ2F0aW9uX19pdGVtXCI+PGEgaHJlZj1cIiNmb290ZXJcIiBjbGFzcz1cIm5hdmlnYXRpb25fX2xpbmtcIj5Db250YWN0IHVzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNob3BwaW5nX19jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInNob3BwaW5nX19jYXJ0X19jYXJ0IG5hdmlnYXRpb25fX2xpbmtcIiBocmVmPVwiL2NhcnQuaHRtbFwiPkNhcnQ8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuPC9oZWFkZXI+XHJcbmBcclxuXHJcblxyXG5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIG1hcmt1cCk7XHJcblxyXG59XHJcblxyXG5yZW5kZXJOYXYocGFyZW50RWxlbWVudCl7XHJcblxyXG5cclxufVxyXG5cclxufSIsImltcG9ydCB7IENhcnQsIENhcnRJdGVtIH0gZnJvbSBcIi4uL2NhcnQvY2FydFwiXHJcbmltcG9ydCB7IENhY2hlTWFuYWdlciB9IGZyb20gXCIuLi9jYWNoZU1hbmFnZXIvY2FjaGVNYW5hZ2VyXCI7XHJcbmV4cG9ydCBjbGFzcyBIZWxwZXIge1xyXG5cclxuXHJcbiAgICBcclxuc3RhdGljIHByb2R1Y3RVcGRhdGUoZXZlbnQpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInRhcmdldFwiICsgZXZlbnQudGFyZ2V0KTtcclxuICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGlmIChldmVudFRhcmdldC5tYXRjaGVzKFwiLnF0eS1idG5cIikpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlTWFuYWdlciA9IG5ldyBDYWNoZU1hbmFnZXIoKTtcclxuICAgICAgICAgICAgY29uc3QgbXlDYXJ0ID0gbmV3IENhcnQoKTtcclxuICAgICAgICAgICAgbXlDYXJ0LnJlc3RvcmVTdGF0ZShjYWNoZU1hbmFnZXIuZ2V0SXRlbShcImNhcnRcIikpOyBcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgbWVudURldGFpbHMgPSBjYWNoZU1hbmFnZXIuZ2V0SXRlbShcIm1lbnVJdGVtc1wiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgIC8vIGFsZXJ0KHF1YW50aXR5KTtcclxuICAgICAgICAgaWYoZXZlbnRUYXJnZXQubWF0Y2hlcyhcIi5pbmMtcXR5XCIpKXtcclxuICAgICAgICAgICAgY29uc3QgYnRuID0gZXZlbnRUYXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcnQtcGx1cy1taW51cy1ib3hcIik7XHJcbiAgICAgICAgICAgIGxldCBxdWFudGl0eSA9IHBhcnNlSW50KGJ0bi52YWx1ZSk7XHJcbiAgICAgICAgICBidG4udmFsdWUgPSBxdWFudGl0eSArPSAxO1xyXG4gICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgQ2FydEl0ZW0oZXZlbnQudGFyZ2V0LmlkLCBidG4udmFsdWUpO1xyXG4gICAgICAgICAgbXlDYXJ0LnVwZGF0ZShpdGVtKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmKGV2ZW50VGFyZ2V0Lm1hdGNoZXMoXCIuZGVjLXF0eVwiKSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGV2ZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJ0LXBsdXMtbWludXMtYm94XCIpO1xyXG4gICAgICAgICAgICBsZXQgcXVhbnRpdHkgPSBwYXJzZUludChidG4udmFsdWUpO1xyXG4gICAgICAgICAgaWYocXVhbnRpdHk+MClcclxuICAgICAgICAgIHtcclxuICAgICBcclxuICAgICAgICAgIGJ0bi52YWx1ZSA9IHF1YW50aXR5IC09IDE7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhidG4pO1xyXG4gICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgQ2FydEl0ZW0oZXZlbnQudGFyZ2V0LmlkLCBidG4udmFsdWUpO1xyXG4gICAgICAgICAgbXlDYXJ0LnVwZGF0ZShpdGVtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZXZlbnRUYXJnZXQubWF0Y2hlcyhcIi5yZW1vdmVcIikpXHJcbntcclxuICAgLy8gYWxlcnQoJ2luIHJlbW92ZScpO1xyXG4gICAgdmFyIGl0ZW0gPSBuZXcgQ2FydEl0ZW0oZXZlbnQudGFyZ2V0LmlkLDApO1xyXG5cclxuICAgIG15Q2FydC5yZW1vdmUoaXRlbSk7XHJcbn1cclxuICAgICAgICAgIG15Q2FydC5yZWNvbmNpbGUobWVudURldGFpbHMpO1xyXG4gICAgICAgICAgY2FjaGVNYW5hZ2VyLnNldEl0ZW0oXCJjYXJ0XCIsIG15Q2FydCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIndyaXRpbmcgY2FjaGVcIik7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhjYWNoZU1hbmFnZXIuZ2V0SXRlbShcImNhcnRcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG59IiwiaW1wb3J0IHsgQ2FydCwgQ2FydEl0ZW0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJ0L2NhcnRcIjtcclxuaW1wb3J0IHsgQ2FjaGVNYW5hZ2VyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FjaGVNYW5hZ2VyL2NhY2hlTWFuYWdlclwiO1xyXG5pbXBvcnQgIHtDYXJ0VUl9IGZyb20gXCIuLi9jb21wb25lbnRzL2NhcnQvY2FydFVJXCI7XHJcbmltcG9ydCB7SGVhZGVyVUl9IGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlci9IZWFkZXJVSVwiO1xyXG5pbXBvcnQge0hlbHBlcn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVscGVyL2hlbHBlclwiO1xyXG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gXCJ1dGlsXCI7XHJcblxyXG5jb25zdCBwYWdlRWxlbWVudHMgPSB7XHJcbiAgY2FydENvbmFpbnRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJ0LWNvbnRhaW5lclwiKSxcclxuICBcclxuICBjYXJJdGVtQ29uYWludGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcnQtaXRlbS1jb250YWluZXJcIiksXHJcbiAgY2FydFN1bW1hcnk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FydC1zdW1tYXJ5XCIpLFxyXG4gIFxyXG59O1xyXG5cclxudmFyIGhlYWRlciA9IG5ldyBIZWFkZXJVSSgpO1xyXG5oZWFkZXIucmVuZGVyKHBhZ2VFbGVtZW50cy5jYXJ0Q29uYWludGVyKTtcclxuXHJcbmNvbnN0IGNhY2hlTWFuYWdlciA9IG5ldyBDYWNoZU1hbmFnZXIoKTtcclxuY29uc3QgY2FydERhdGEgPSBjYWNoZU1hbmFnZXIuZ2V0SXRlbShcImNhcnRcIik7IC8vIG1vdmUga2V5IHRvIGNvbnN0YW50XHJcbmlmKGNhcnREYXRhLkl0ZW1zLmxlbmd0aD09MCkgd2luZG93LmxvY2F0aW9uLmhyZWY9XCIvXCI7XHJcbmNvbnN0IGNhcnRVSSA9IG5ldyBDYXJ0VUkoY2FydERhdGEscGFnZUVsZW1lbnRzLmNhckl0ZW1Db25haW50ZXIpO1xyXG5jYXJ0VUkucmVuZGVyQ2FydCgpO1xyXG5cclxuZGVidWdnZXI7XHJcbiBwYWdlRWxlbWVudHMuY2FySXRlbUNvbmFpbnRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgSGVscGVyLnByb2R1Y3RVcGRhdGUpO1xyXG4gcGFnZUVsZW1lbnRzLmNhckl0ZW1Db25haW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgY29uc3QgY2FydERhdGEgPSBjYWNoZU1hbmFnZXIuZ2V0SXRlbShcImNhcnRcIik7IC8vIG1vdmUga2V5IHRvIGNvbnN0YW50XHJcbiAgaWYoY2FydERhdGEuSXRlbXMubGVuZ3RoPT0wKSB3aW5kb3cubG9jYXRpb24uaHJlZj1cIi9cIjtcclxuICBjb25zdCBjYXJ0VUkgPSBuZXcgQ2FydFVJKGNhcnREYXRhLHBhZ2VFbGVtZW50cy5jYXJJdGVtQ29uYWludGVyKTtcclxuICBjYXJ0VUkucmVuZGVyQ2FydCgpO1xyXG4gfSk7Il0sInNvdXJjZVJvb3QiOiIifQ==