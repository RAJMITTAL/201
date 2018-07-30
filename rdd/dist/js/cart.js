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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/cartPage.js");
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

/***/ "./src/cartPage.js":
/*!*************************!*\
  !*** ./src/cartPage.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./style.scss */ "./src/style.scss");

var _cart = __webpack_require__(/*! ./components/cart/cart */ "./src/components/cart/cart.js");

var _cacheManager = __webpack_require__(/*! ./components/cacheManager/cacheManager */ "./src/components/cacheManager/cacheManager.js");

var _cartUI = __webpack_require__(/*! ./components/cart/cartUI */ "./src/components/cart/cartUI.js");

var _HeaderUI = __webpack_require__(/*! ./components/header/HeaderUI */ "./src/components/header/HeaderUI.js");

var _helper = __webpack_require__(/*! ./components/helper/helper */ "./src/components/helper/helper.js");

var _util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

//import MenuData from "./components/list/dataModel";
//import * as menuView from "./components/list/itemgrid";
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
            var markup = "\n    <div class=\"cart-item\" data-itemid=" + item.id + ">\n    <div><img src=\"" + item.photosmall + "\" alt=\"\" class=\"food\"></div>\n        <div class=\"\"> " + item.title + "</div>\n         <div>" + this.cartData.currency + item.unitCost + "</div>\n         <div class=\"product-quantity\">\n         <div class=\"product-quantity\">\n         <form id=\"myform\" method=\"POST\" action=\"#\">\n                 <div class=\"cart-plus-minus\">\n                 <button id=\"" + item.id + "\" class=\"dec-qty qty-btn\">-</button>\n                 <input class=\"cart-plus-minus-box\" type=\"text\" name=\"qtybutton\" readonly value=\"" + item.count + "\">\n                 <button id=" + item.id + " class=\"inc-qty qty-btn\">+</button>\n             </div>\n         </form>\n     </div>\n         </div>\n            <div><a href=\"#\" class=\"remove qty-btn\" id=\"" + item.id + "\">X</div>\n        \n    </div>\n    ";
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

            var markup = '\n<header class="header">\n<a href="/" >\n        <img src ="/img/rddlogo.svg" alt="RDD logo" class="logo"/>\n</a>\n\n<div class="navigation">\n            <nav class="navigation__nav">\n                <ul class="navigation__list">\n                    <li class="navigation__item"><a href="/" class="navigation__link">Home</a></li>\n                    <li class="navigation__item"><a href="#footer" class="navigation__link">Contact us</a></li>\n                    </ul>\n            </nav>\n            </div>\n\n                                \n            <div class="shopping__cart">\n                <a class="shopping__cart__cart navigation__link" href="/cart.html">Cart</a>\n                <div class="shop__qun">\n                    <span class="cart-count">' + count + '</span>\n                </div>\n            </div>\n\n</header>\n';

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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhcnRQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhY2hlTWFuYWdlci9jYWNoZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FydC9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcnQvY2FydFVJLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcnQvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXJVSS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWxwZXIvaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzPzg5ZDUiXSwibmFtZXMiOlsicGFnZUVsZW1lbnRzIiwiY2FydENvbmFpbnRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNhckl0ZW1Db25haW50ZXIiLCJjYXJ0U3VtbWFyeSIsImhlYWRlciIsIkhlYWRlclVJIiwicmVuZGVyIiwiY2FjaGVNYW5hZ2VyIiwiQ2FjaGVNYW5hZ2VyIiwiY2FydERhdGEiLCJnZXRJdGVtIiwiSXRlbXMiLCJsZW5ndGgiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjYXJ0VUkiLCJDYXJ0VUkiLCJyZW5kZXJDYXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkhlbHBlciIsInByb2R1Y3RVcGRhdGUiLCJjYWNoZVN0b3JlIiwic2Vzc2lvblN0b3JhZ2UiLCJrZXkiLCJ2YWx1ZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJkZWxldGVJdGVtIiwiY2xlYXIiLCJDYXJ0IiwiY2FydFRvdGFsIiwiY2FydFRheCIsImdyYW5kVG90YWwiLCJjdXJyZW5jeSIsInRvdGFsSXRlbUNvdW50IiwiaXRlbSIsIm9sZEl0ZW0iLCJmaW5kSW5kZXgiLCJjSXRlbSIsImlkIiwiY29uc29sZSIsImxvZyIsImNvdW50IiwicHVzaCIsImluZGV4Iiwic3BsaWNlIiwiZGF0YSIsImZvckVhY2giLCJkYXRhSXRlbSIsInRpdGxlIiwidW5pdENvc3QiLCJwcmljZSIsImltYWdlIiwicGhvdG9TbWFsbCIsInRvdGFsQ29zdCIsInRheCIsImZvb2RUeXBlIiwiZm9vZFRheCIsImJldmVyYWdlVGF4IiwiQ2FydEl0ZW0iLCJwYXJzZUludCIsInBhcmVudEVsZW1lbnQiLCJpbm5lckhUTUwiLCJyZW5kZXJJdGVtIiwiZWxlbWVudCIsInJlbmRlclRvdGFsIiwibWFya3VwIiwicGhvdG9zbWFsbCIsImluc2VydEFkamFjZW50SFRNTCIsIml0ZW1TdW1tYXJ5IiwicmVkdWNlIiwiaXRlbU1hcmt1cCIsInJlbmRlclN1bW1hcnlJdGVtIiwiZXZlbnQiLCJ0YXJnZXQiLCJldmVudFRhcmdldCIsIm1hdGNoZXMiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm15Q2FydCIsInJlc3RvcmVTdGF0ZSIsIm1lbnVEZXRhaWxzIiwiYnRuIiwicXVhbnRpdHkiLCJ1cGRhdGUiLCJyZW1vdmUiLCJyZWNvbmNpbGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTRDLEtBQUs7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3prQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7O0FBR0E7O0FBQ0E7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QUExQixFQUE4QjJDLEtBQUk1RCxLQUFsQyxDQUFYO0FBQ0F5RCwrQkFBT0ssTUFBUCxDQUFjakQsSUFBZDtBQUNDO0FBQ0QsaUJBWEksTUFZRCxJQUFHd0MsWUFBWUMsT0FBWixDQUFvQixTQUFwQixDQUFILEVBQ2I7QUFDRztBQUNDLHdCQUFJekMsT0FBTyxJQUFJd0IsY0FBSixDQUFhYyxNQUFNQyxNQUFOLENBQWFuQyxFQUExQixFQUE2QixDQUE3QixDQUFYOztBQUVBd0MsMkJBQU9NLE1BQVAsQ0FBY2xELElBQWQ7QUFDSDtBQUNTNEMsdUJBQU9PLFNBQVAsQ0FBaUJMLFdBQWpCO0FBQ0E3RSw2QkFBYW1CLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJ3RCxNQUE3QjtBQUNBdkMsd0JBQVFDLEdBQVIsQ0FBWSxlQUFaO0FBQ0FELHdCQUFRQyxHQUFSLENBQVlyQyxhQUFhRyxPQUFiLENBQXFCLE1BQXJCLENBQVo7QUFDRDtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7QUN2RFAsdUMiLCJmaWxlIjoianMvY2FydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NhcnRQYWdlLmpzXCIpO1xuIiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKGlzVW5kZWZpbmVkKGdsb2JhbC5wcm9jZXNzKSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52aXJvbjtcbmV4cG9ydHMuZGVidWdsb2cgPSBmdW5jdGlvbihzZXQpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKGRlYnVnRW52aXJvbikpXG4gICAgZGVidWdFbnZpcm9uID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJztcbiAgc2V0ID0gc2V0LnRvVXBwZXJDYXNlKCk7XG4gIGlmICghZGVidWdzW3NldF0pIHtcbiAgICBpZiAobmV3IFJlZ0V4cCgnXFxcXGInICsgc2V0ICsgJ1xcXFxiJywgJ2knKS50ZXN0KGRlYnVnRW52aXJvbikpIHtcbiAgICAgIHZhciBwaWQgPSBwcm9jZXNzLnBpZDtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCclcyAlZDogJXMnLCBzZXQsIHBpZCwgbXNnKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7fTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYnVnc1tzZXRdO1xufTtcblxuXG4vKipcbiAqIEVjaG9zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlLiBUcnlzIHRvIHByaW50IHRoZSB2YWx1ZSBvdXRcbiAqIGluIHRoZSBiZXN0IHdheSBwb3NzaWJsZSBnaXZlbiB0aGUgZGlmZmVyZW50IHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBwcmludCBvdXQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25hbCBvcHRpb25zIG9iamVjdCB0aGF0IGFsdGVycyB0aGUgb3V0cHV0LlxuICovXG4vKiBsZWdhY3k6IG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycyovXG5mdW5jdGlvbiBpbnNwZWN0KG9iaiwgb3B0cykge1xuICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgdmFyIGN0eCA9IHtcbiAgICBzZWVuOiBbXSxcbiAgICBzdHlsaXplOiBzdHlsaXplTm9Db2xvclxuICB9O1xuICAvLyBsZWdhY3kuLi5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykgY3R4LmRlcHRoID0gYXJndW1lbnRzWzJdO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA0KSBjdHguY29sb3JzID0gYXJndW1lbnRzWzNdO1xuICBpZiAoaXNCb29sZWFuKG9wdHMpKSB7XG4gICAgLy8gbGVnYWN5Li4uXG4gICAgY3R4LnNob3dIaWRkZW4gPSBvcHRzO1xuICB9IGVsc2UgaWYgKG9wdHMpIHtcbiAgICAvLyBnb3QgYW4gXCJvcHRpb25zXCIgb2JqZWN0XG4gICAgZXhwb3J0cy5fZXh0ZW5kKGN0eCwgb3B0cyk7XG4gIH1cbiAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LnNob3dIaWRkZW4pKSBjdHguc2hvd0hpZGRlbiA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmRlcHRoKSkgY3R4LmRlcHRoID0gMjtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jb2xvcnMpKSBjdHguY29sb3JzID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY3VzdG9tSW5zcGVjdCkpIGN0eC5jdXN0b21JbnNwZWN0ID0gdHJ1ZTtcbiAgaWYgKGN0eC5jb2xvcnMpIGN0eC5zdHlsaXplID0gc3R5bGl6ZVdpdGhDb2xvcjtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKGN0eCwgb2JqLCBjdHguZGVwdGgpO1xufVxuZXhwb3J0cy5pbnNwZWN0ID0gaW5zcGVjdDtcblxuXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUjZ3JhcGhpY3Ncbmluc3BlY3QuY29sb3JzID0ge1xuICAnYm9sZCcgOiBbMSwgMjJdLFxuICAnaXRhbGljJyA6IFszLCAyM10sXG4gICd1bmRlcmxpbmUnIDogWzQsIDI0XSxcbiAgJ2ludmVyc2UnIDogWzcsIDI3XSxcbiAgJ3doaXRlJyA6IFszNywgMzldLFxuICAnZ3JleScgOiBbOTAsIDM5XSxcbiAgJ2JsYWNrJyA6IFszMCwgMzldLFxuICAnYmx1ZScgOiBbMzQsIDM5XSxcbiAgJ2N5YW4nIDogWzM2LCAzOV0sXG4gICdncmVlbicgOiBbMzIsIDM5XSxcbiAgJ21hZ2VudGEnIDogWzM1LCAzOV0sXG4gICdyZWQnIDogWzMxLCAzOV0sXG4gICd5ZWxsb3cnIDogWzMzLCAzOV1cbn07XG5cbi8vIERvbid0IHVzZSAnYmx1ZScgbm90IHZpc2libGUgb24gY21kLmV4ZVxuaW5zcGVjdC5zdHlsZXMgPSB7XG4gICdzcGVjaWFsJzogJ2N5YW4nLFxuICAnbnVtYmVyJzogJ3llbGxvdycsXG4gICdib29sZWFuJzogJ3llbGxvdycsXG4gICd1bmRlZmluZWQnOiAnZ3JleScsXG4gICdudWxsJzogJ2JvbGQnLFxuICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgJ2RhdGUnOiAnbWFnZW50YScsXG4gIC8vIFwibmFtZVwiOiBpbnRlbnRpb25hbGx5IG5vdCBzdHlsaW5nXG4gICdyZWdleHAnOiAncmVkJ1xufTtcblxuXG5mdW5jdGlvbiBzdHlsaXplV2l0aENvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHZhciBzdHlsZSA9IGluc3BlY3Quc3R5bGVzW3N0eWxlVHlwZV07XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgICAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzFdICsgJ20nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzdHlsaXplTm9Db2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICByZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFycmF5VG9IYXNoKGFycmF5KSB7XG4gIHZhciBoYXNoID0ge307XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbih2YWwsIGlkeCkge1xuICAgIGhhc2hbdmFsXSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiBoYXNoO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcykge1xuICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICBpZiAoY3R4LmN1c3RvbUluc3BlY3QgJiZcbiAgICAgIHZhbHVlICYmXG4gICAgICBpc0Z1bmN0aW9uKHZhbHVlLmluc3BlY3QpICYmXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgIHZhbHVlLmluc3BlY3QgIT09IGV4cG9ydHMuaW5zcGVjdCAmJlxuICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAhKHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWUpKSB7XG4gICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzLCBjdHgpO1xuICAgIGlmICghaXNTdHJpbmcocmV0KSkge1xuICAgICAgcmV0ID0gZm9ybWF0VmFsdWUoY3R4LCByZXQsIHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICB2YXIgcHJpbWl0aXZlID0gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpO1xuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIHZhciB2aXNpYmxlS2V5cyA9IGFycmF5VG9IYXNoKGtleXMpO1xuXG4gIGlmIChjdHguc2hvd0hpZGRlbikge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSk7XG4gIH1cblxuICAvLyBJRSBkb2Vzbid0IG1ha2UgZXJyb3IgZmllbGRzIG5vbi1lbnVtZXJhYmxlXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9kd3c1MnNidCh2PXZzLjk0KS5hc3B4XG4gIGlmIChpc0Vycm9yKHZhbHVlKVxuICAgICAgJiYgKGtleXMuaW5kZXhPZignbWVzc2FnZScpID49IDAgfHwga2V5cy5pbmRleE9mKCdkZXNjcmlwdGlvbicpID49IDApKSB7XG4gICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFNvbWUgdHlwZSBvZiBvYmplY3Qgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZSArICddJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ2RhdGUnKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gJycsIGFycmF5ID0gZmFsc2UsIGJyYWNlcyA9IFsneycsICd9J107XG5cbiAgLy8gTWFrZSBBcnJheSBzYXkgdGhhdCB0aGV5IGFyZSBBcnJheVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBhcnJheSA9IHRydWU7XG4gICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgfVxuXG4gIC8vIE1ha2UgZnVuY3Rpb25zIHNheSB0aGF0IHRoZXkgYXJlIGZ1bmN0aW9uc1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICB2YXIgbiA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICB9XG5cbiAgLy8gTWFrZSBSZWdFeHBzIHNheSB0aGF0IHRoZXkgYXJlIFJlZ0V4cHNcbiAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBlcnJvciB3aXRoIG1lc3NhZ2UgZmlyc3Qgc2F5IHRoZSBlcnJvclxuICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwICYmICghYXJyYXkgfHwgdmFsdWUubGVuZ3RoID09IDApKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gIH1cblxuICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW09iamVjdF0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuXG4gIHZhciBvdXRwdXQ7XG4gIGlmIChhcnJheSkge1xuICAgIG91dHB1dCA9IGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3R4LnNlZW4ucG9wKCk7XG5cbiAgcmV0dXJuIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSkge1xuICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFyIHNpbXBsZSA9ICdcXCcnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL15cInxcIiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKHNpbXBsZSwgJ3N0cmluZycpO1xuICB9XG4gIGlmIChpc051bWJlcih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdudW1iZXInKTtcbiAgaWYgKGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgaWYgKGlzTnVsbCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCdudWxsJywgJ251bGwnKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gJ1snICsgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICsgJ10nO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgU3RyaW5nKGkpKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBTdHJpbmcoaSksIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goJycpO1xuICAgIH1cbiAgfVxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKCFrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIGtleSwgdHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSkge1xuICB2YXIgbmFtZSwgc3RyLCBkZXNjO1xuICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwga2V5KSB8fCB7IHZhbHVlOiB2YWx1ZVtrZXldIH07XG4gIGlmIChkZXNjLmdldCkge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2aXNpYmxlS2V5cywga2V5KSkge1xuICAgIG5hbWUgPSAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgaWYgKCFzdHIpIHtcbiAgICBpZiAoY3R4LnNlZW4uaW5kZXhPZihkZXNjLnZhbHVlKSA8IDApIHtcbiAgICAgIGlmIChpc051bGwocmVjdXJzZVRpbWVzKSkge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmIChpc1VuZGVmaW5lZChuYW1lKSkge1xuICAgIGlmIChhcnJheSAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEsIG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ25hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ3N0cmluZycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbn1cblxuXG5mdW5jdGlvbiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcykge1xuICB2YXIgbnVtTGluZXNFc3QgPSAwO1xuICB2YXIgbGVuZ3RoID0gb3V0cHV0LnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICBudW1MaW5lc0VzdCsrO1xuICAgIGlmIChjdXIuaW5kZXhPZignXFxuJykgPj0gMCkgbnVtTGluZXNFc3QrKztcbiAgICByZXR1cm4gcHJldiArIGN1ci5yZXBsYWNlKC9cXHUwMDFiXFxbXFxkXFxkP20vZywgJycpLmxlbmd0aCArIDE7XG4gIH0sIDApO1xuXG4gIGlmIChsZW5ndGggPiA2MCkge1xuICAgIHJldHVybiBicmFjZXNbMF0gK1xuICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgb3V0cHV0LmpvaW4oJyxcXG4gICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgYnJhY2VzWzFdO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbn1cblxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gaXNPYmplY3QoZSkgJiZcbiAgICAgIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcclxuLy9pbXBvcnQgTWVudURhdGEgZnJvbSBcIi4vY29tcG9uZW50cy9saXN0L2RhdGFNb2RlbFwiO1xyXG4vL2ltcG9ydCAqIGFzIG1lbnVWaWV3IGZyb20gXCIuL2NvbXBvbmVudHMvbGlzdC9pdGVtZ3JpZFwiO1xyXG5pbXBvcnQgeyBDYXJ0LCBDYXJ0SXRlbSB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FydC9jYXJ0XCI7XHJcbmltcG9ydCB7IENhY2hlTWFuYWdlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FjaGVNYW5hZ2VyL2NhY2hlTWFuYWdlclwiO1xyXG5pbXBvcnQgIHtDYXJ0VUl9IGZyb20gXCIuL2NvbXBvbmVudHMvY2FydC9jYXJ0VUlcIjtcclxuaW1wb3J0IHtIZWFkZXJVSX0gZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyVUlcIjtcclxuaW1wb3J0IHtIZWxwZXJ9IGZyb20gXCIuL2NvbXBvbmVudHMvaGVscGVyL2hlbHBlclwiO1xyXG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gXCJ1dGlsXCI7XHJcblxyXG5jb25zdCBwYWdlRWxlbWVudHMgPSB7XHJcbiAgY2FydENvbmFpbnRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJ0LWNvbnRhaW5lclwiKSxcclxuICBcclxuICBjYXJJdGVtQ29uYWludGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcnQtaXRlbS1jb250YWluZXJcIiksXHJcbiAgY2FydFN1bW1hcnk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FydC1zdW1tYXJ5XCIpLFxyXG4gIFxyXG59O1xyXG5cclxudmFyIGhlYWRlciA9IG5ldyBIZWFkZXJVSSgpO1xyXG5oZWFkZXIucmVuZGVyKHBhZ2VFbGVtZW50cy5jYXJ0Q29uYWludGVyKTtcclxuXHJcbmNvbnN0IGNhY2hlTWFuYWdlciA9IG5ldyBDYWNoZU1hbmFnZXIoKTtcclxuY29uc3QgY2FydERhdGEgPSBjYWNoZU1hbmFnZXIuZ2V0SXRlbShcImNhcnRcIik7IC8vIG1vdmUga2V5IHRvIGNvbnN0YW50XHJcbmlmKGNhcnREYXRhLkl0ZW1zLmxlbmd0aD09MCkgd2luZG93LmxvY2F0aW9uLmhyZWY9XCIvXCI7XHJcbmNvbnN0IGNhcnRVSSA9IG5ldyBDYXJ0VUkoY2FydERhdGEscGFnZUVsZW1lbnRzLmNhckl0ZW1Db25haW50ZXIpO1xyXG5jYXJ0VUkucmVuZGVyQ2FydCgpO1xyXG5cclxuZGVidWdnZXI7XHJcbiBwYWdlRWxlbWVudHMuY2FySXRlbUNvbmFpbnRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgSGVscGVyLnByb2R1Y3RVcGRhdGUpO1xyXG4gcGFnZUVsZW1lbnRzLmNhckl0ZW1Db25haW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgY29uc3QgY2FydERhdGEgPSBjYWNoZU1hbmFnZXIuZ2V0SXRlbShcImNhcnRcIik7IC8vIG1vdmUga2V5IHRvIGNvbnN0YW50XHJcbiAgaWYoY2FydERhdGEuSXRlbXMubGVuZ3RoPT0wKSB3aW5kb3cubG9jYXRpb24uaHJlZj1cIi9cIjtcclxuICBjb25zdCBjYXJ0VUkgPSBuZXcgQ2FydFVJKGNhcnREYXRhLHBhZ2VFbGVtZW50cy5jYXJJdGVtQ29uYWludGVyKTtcclxuICBjYXJ0VUkucmVuZGVyQ2FydCgpO1xyXG4gfSk7IiwiZXhwb3J0IGNsYXNzIENhY2hlTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy5jYWNoZVN0b3JlID0gd2luZG93LnNlc3Npb25TdG9yYWdlO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgc2V0SXRlbShrZXkgLHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yZS5zZXRJdGVtKGtleSxKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbShrZXkpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmNhY2hlU3RvcmUuZ2V0SXRlbShrZXkpKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUl0ZW0oa2V5KSB7XHJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JlLmRlbGV0ZUl0ZW0oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckFsbCgpIHtcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmUuY2xlYXIoKTtcclxuICAgIH1cclxuICB9IiwiaW1wb3J0IHtiZXZlcmFnZVRheCwgZm9vZFRheCwgY3VycmVuY3l9IGZyb20gXCIuL2NvbmZpZ1wiXHJcbmV4cG9ydCBjbGFzcyBDYXJ0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLkl0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5jYXJ0VG90YWw9MDtcclxuICAgICAgICB0aGlzLmNhcnRUYXg9MDtcclxuICAgICAgICB0aGlzLmdyYW5kVG90YWw9MFxyXG4gICAgICAgIHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbUNvdW50PTA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGl0ZW0pIHtcclxuICAgICAgICB2YXIgb2xkSXRlbSA9IHRoaXMuSXRlbXMuZmluZEluZGV4KGNJdGVtID0+IGNJdGVtLmlkID09IGl0ZW0uaWQpXHJcbiAgICAgICAgY29uc29sZS5sb2cob2xkSXRlbSk7XHJcbiAgICAgICAgaWYgKG9sZEl0ZW0gIT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmb3VuZFwiKVxyXG4gICAgICAgICAgICB0aGlzLkl0ZW1zW29sZEl0ZW1dLmNvdW50ID0gaXRlbS5jb3VudDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygnaW4gbmV3JylcclxuICAgICAgICB0aGlzLkl0ZW1zLnB1c2goaXRlbSlcclxuICAgIH1cclxuICAgIHJlbW92ZShpdGVtKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5JdGVtcy5maW5kSW5kZXgoY0l0ZW0gPT4gY0l0ZW0uaWQgPT0gaXRlbS5pZClcclxuICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm91bmRcIilcclxuICAgICAgICAgICAgdGhpcy5JdGVtcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5JdGVtcy5wdXNoKGl0ZW0pXHJcbiAgICB9XHJcbiAgICByZWNvbmNpbGUoZGF0YSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNhcnRUb3RhbD0wO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnRUYXg9MDtcclxuICAgICAgICAgICAgdGhpcy5ncmFuZFRvdGFsID0gMDtcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbUNvdW50PTA7XHJcblxyXG4gICAgICAgIHRoaXMuSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICBjb25zdCBpbmRleCA9IGRhdGEuZmluZEluZGV4KGRhdGFJdGVtID0+IGRhdGFJdGVtLmlkID09IGl0ZW0uaWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpdGVtLnRpdGxlID0gZGF0YVtpbmRleF0udGl0bGU7XHJcbiAgICAgICAgICAgIGl0ZW0udW5pdENvc3QgPSBkYXRhW2luZGV4XS5wcmljZTtcclxuICAgICAgICAgICAgaXRlbS5pbWFnZSAgPSBkYXRhW2luZGV4XS5waG90b1NtYWxsXHJcbiAgICAgICAgICAgIGl0ZW0udG90YWxDb3N0ID0gaXRlbS5jb3VudCAqIGl0ZW0udW5pdENvc3Q7XHJcbiAgICAgICAgICAgIGl0ZW0udGF4ID0gaXRlbS50b3RhbENvc3QgKiAoaXRlbS5mb29kVHlwZSA9PT1cImZcIiA/IGZvb2RUYXg6IGJldmVyYWdlVGF4KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1Db3VudCs9aXRlbS5jb3VudDtcclxuICAgICAgICAgICAgdGhpcy5jYXJ0VG90YWwrPWl0ZW0udG90YWxDb3N0O1xyXG4gICAgICAgICAgICB0aGlzLmNhcnRUYXgrPSBpdGVtLnRheDtcclxuICAgICAgICAgICAgdGhpcy5ncmFuZFRvdGFsID0gdGhpcy5jYXJ0VG90YWwgKyB0aGlzLmNhcnRUYXg7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVzdG9yZVN0YXRlKGNhcnREYXRhKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuSXRlbXMgPSBjYXJ0RGF0YS5JdGVtcztcclxuICAgICAgICB0aGlzLmNhcnRUYXggPSBjYXJ0RGF0YS5jYXJ0VGF4O1xyXG4gICAgICAgIHRoaXMuY2FydFRvdGFsID0gY2FydERhdGEuY2FydFRvdGFsO1xyXG4gICAgICAgIHRoaXMuZ3JhbmRUb3RhbCA9IGNhcnREYXRhLmdyYW5kVG90YWw7XHJcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1Db3VudD1jYXJ0RGF0YS50b3RhbEl0ZW1Db3VudDtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBDYXJ0SXRlbSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQsIGNvdW50KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuY291bnQgPSBwYXJzZUludChjb3VudCk7XHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudW5pdENvc3Q9MDtcclxuICAgICAgICB0aGlzLnRvdGFsQ29zdD0wO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPVwiXCI7XHJcbiAgICAgICAgdGhpcy50YXg9MDtcclxuICAgIH1cclxuXHJcbn0iLCIvL2ltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcclxuLy9pbXBvcnQgeyBDYXJ0IH0gZnJvbSBcIi4vY2FydFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhcnRVSSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FydERhdGEsIHBhcmVudEVsZW1lbnQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jYXJ0RGF0YSA9IGNhcnREYXRhO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG5cclxucmVuZGVyQ2FydCgpIHtcclxuICAgIHRoaXMucGFyZW50RWxlbWVudC5pbm5lckhUTUwgPVwiXCI7XHJcbiB0aGlzLmNhcnREYXRhLkl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbnRoaXMucmVuZGVySXRlbShlbGVtZW50LHRoaXMucGFyZW50RWxlbWVudCk7ICBcclxuIH0pO1xyXG5cclxudGhpcy5yZW5kZXJUb3RhbCh0aGlzLmNhcnREYXRhLCB0aGlzLnBhcmVudEVsZW1lbnQpO1xyXG59XHJcblxyXG5yZW5kZXJJdGVtKGl0ZW0scGFyZW50RWxlbWVudCl7XHJcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgIGNvbnN0IG1hcmt1cCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW1cIiBkYXRhLWl0ZW1pZD0ke2l0ZW0uaWR9PlxyXG4gICAgPGRpdj48aW1nIHNyYz1cIiR7aXRlbS5waG90b3NtYWxsfVwiIGFsdD1cIlwiIGNsYXNzPVwiZm9vZFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJcIj4gJHtpdGVtLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICA8ZGl2PiR7dGhpcy5jYXJ0RGF0YS5jdXJyZW5jeX0ke2l0ZW0udW5pdENvc3R9PC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LXF1YW50aXR5XCI+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LXF1YW50aXR5XCI+XHJcbiAgICAgICAgIDxmb3JtIGlkPVwibXlmb3JtXCIgbWV0aG9kPVwiUE9TVFwiIGFjdGlvbj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1wbHVzLW1pbnVzXCI+XHJcbiAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIiR7aXRlbS5pZH1cIiBjbGFzcz1cImRlYy1xdHkgcXR5LWJ0blwiPi08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJjYXJ0LXBsdXMtbWludXMtYm94XCIgdHlwZT1cInRleHRcIiBuYW1lPVwicXR5YnV0dG9uXCIgcmVhZG9ubHkgdmFsdWU9XCIke2l0ZW0uY291bnR9XCI+XHJcbiAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0ke2l0ZW0uaWR9IGNsYXNzPVwiaW5jLXF0eSBxdHktYnRuXCI+KzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZm9ybT5cclxuICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInJlbW92ZSBxdHktYnRuXCIgaWQ9XCIke2l0ZW0uaWR9XCI+WDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgcGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG1hcmt1cCk7XHJcbiAgXHJcbn1cclxuICAgIFxyXG5yZW5kZXJUb3RhbChjYXJ0RGF0YSxwYXJlbnRFbGVtZW50KSB7XHJcbiAgICBjb25zdCBtYXJrdXAgPSBgXHJcbiAgIDxkaXYgY2xhc3M9XCJzdW1tYXJ5XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeV9fd3JhcFwiPiBcclxuICAgIDxkaXYgY2xhc3M9XCJzdW1tYXJ5X19hbW91bnQgc3VtbWFyeV9faXRlbVwiPjxzcGFuPkNhcnQgVG90YWw8L3NwYW4+PHNwYW4+JHtjYXJ0RGF0YS5jdXJyZW5jeX0ke2NhcnREYXRhLmNhcnRUb3RhbH0gPC9zcGFuPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInN1bW1hcnlfX3RheCBzdW1tYXJ5X19pdGVtXCI+PHNwYW4+VGF4PC9zcGFuPjxzcGFuPiR7Y2FydERhdGEuY3VycmVuY3l9JHtjYXJ0RGF0YS5jYXJ0VGF4fTwvc3Bhbj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJzdW1tYXJ5X190b3RhbCBzdW1tYXJ5X19pdGVtXCI+PHNwYW4+R3JhbmQgVG90YWw8L3NwYW4+PHNwYW4+JHtjYXJ0RGF0YS5jdXJyZW5jeX0ke2NhcnREYXRhLmdyYW5kVG90YWx9PC9zcGFuPjwvZGl2PlxyXG4gICAgPGRpdj48c3Bhbj48L3NwYW4+PHNwYW4+PGZvcm0gaWQ9XCJwYXltZW50XCIgbWV0aG9kPVwiZ2V0XCIgYWN0aW9uPVwiL3BheW1lbnQuaHRtbFwiPjxidXR0b24gY2xhc3M9XCJmb29kX19idG5cIiB0eXBlPVwic3VibWl0XCI+UHJvY2VlZCB0byBQYXltZW50PC9idXR0b24+PC9mb3JtPjwvc3Bhbj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcnQtdG90YWxcIik7XHJcbiAgICBlbGVtZW50LmlubmVySFRNTD1cIlwiXHJcbiAgICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbWFya3VwKTtcclxufVxyXG5cclxucmVuZGVyU3VtbWFyeSgpe1xyXG4gICAgY29uc3QgaXRlbVN1bW1hcnkgPSB0aGlzLmNhcnREYXRhLkl0ZW1zLnJlZHVjZSgoaXRlbU1hcmt1cCxpdGVtKSA9PiBcclxuICAgIHtcclxuICAgICAgICBpdGVtTWFya3VwKz0gdGhpcy5yZW5kZXJTdW1tYXJ5SXRlbShpdGVtKTtcclxuICAgICAgICByZXR1cm4gaXRlbU1hcmt1cDtcclxuICAgIH0sXCJcIik7XHJcbmNvbnNvbGUubG9nKGl0ZW1TdW1tYXJ5KTtcclxuICAgIGNvbnN0IG1hcmt1cCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJvcmRlci13cmFwcGVyXCI+XHJcbiAgICA8aDIgY2xhc3M9XCJvcmRlci1kZXRhaWxzLWhlYWRlclwiPk9yZGVyIFN1bW1hcnk8L2gyPlxyXG4gICAgPGRpdiBjbGFzcz1cIm9yZGVyLWRldGFpbHNcIj5cclxuICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT48cCBjbGFzcz1cInN0cm9uZ1wiPlByb2R1Y3Q8L3A+PHAgY2xhc3M9XCJzdHJvbmdcIj5Ub3RhbDwvcD48L2xpPlxyXG4gICAgICAgICAgICAgJHtpdGVtU3VtbWFyeX1cclxuICAgICAgICAgICAgPGxpPjxwIGNsYXNzPVwic3Ryb25nXCI+Y2FydCBzdWJ0b3RhbDwvcD48cCBjbGFzcz1cInN0cm9uZ1wiPiR7dGhpcy5jYXJ0RGF0YS5jYXJ0VG90YWx9PC9wPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48cCBjbGFzcz1cInN0cm9uZ1wiPlRheDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiR7dGhpcy5jYXJ0RGF0YS5jYXJ0VGF4fTwvcD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPjxwIGNsYXNzPVwic3Ryb25nXCI+R3JhbmQgU3VidG90YWw8L3A+PHAgY2xhc3M9XCJncmFuZFRvdGFsXCI+JHt0aGlzLmNhcnREYXRhLmdyYW5kVG90YWx9PC9wPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZm9ybT5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG4gICAgYDtcclxuICAgIHRoaXMucGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG1hcmt1cCk7XHJcbiAgXHJcbn1cclxucmVuZGVyU3VtbWFyeUl0ZW0oaXRlbSl7XHJcbiAgICBcclxuICAgIGNvbnN0IG1hcmt1cCA9YFxyXG4gICAgIDxsaT48cD4ke2l0ZW0uY291bnR9eCAke2l0ZW0udGl0bGV9IDwvcD48cD4ke2l0ZW0udG90YWxDb3N0fTwvcD48L2xpPlxyXG4gICAgIGBcclxuICAgIHJldHVybiBtYXJrdXA7XHJcbn1cclxuXHJcblxyXG59IiwiZXhwb3J0IGNvbnN0IGJldmVyYWdlVGF4ID0gMC4xMjtcclxuZXhwb3J0IGNvbnN0IGZvb2RUYXggPSAwLjA1O1xyXG5leHBvcnQgY29uc3QgY3VycmVuY3kgPSBcIuKCuVwiOyIsImV4cG9ydCBjbGFzcyBIZWFkZXJVSSB7XHJcblxyXG5cclxucmVuZGVyKHBhcmVudEVsZW1lbnQsY291bnQ9MCkge1xyXG5jb25zdCBtYXJrdXAgPSBgXHJcbjxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cclxuPGEgaHJlZj1cIi9cIiA+XHJcbiAgICAgICAgPGltZyBzcmMgPVwiL2ltZy9yZGRsb2dvLnN2Z1wiIGFsdD1cIlJERCBsb2dvXCIgY2xhc3M9XCJsb2dvXCIvPlxyXG48L2E+XHJcblxyXG48ZGl2IGNsYXNzPVwibmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2aWdhdGlvbl9fbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZpZ2F0aW9uX19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2aWdhdGlvbl9faXRlbVwiPjxhIGhyZWY9XCIvXCIgY2xhc3M9XCJuYXZpZ2F0aW9uX19saW5rXCI+SG9tZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdmlnYXRpb25fX2l0ZW1cIj48YSBocmVmPVwiI2Zvb3RlclwiIGNsYXNzPVwibmF2aWdhdGlvbl9fbGlua1wiPkNvbnRhY3QgdXM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcHBpbmdfX2NhcnRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwic2hvcHBpbmdfX2NhcnRfX2NhcnQgbmF2aWdhdGlvbl9fbGlua1wiIGhyZWY9XCIvY2FydC5odG1sXCI+Q2FydDwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wX19xdW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcnQtY291bnRcIj4ke2NvdW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbjwvaGVhZGVyPlxyXG5gXHJcblxyXG5cclxucGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBtYXJrdXApO1xyXG5cclxufVxyXG5cclxucmVuZGVyTmF2KHBhcmVudEVsZW1lbnQpe1xyXG5cclxuXHJcbn1cclxuXHJcbn0iLCJpbXBvcnQgeyBDYXJ0LCBDYXJ0SXRlbSB9IGZyb20gXCIuLi9jYXJ0L2NhcnRcIlxyXG5pbXBvcnQgeyBDYWNoZU1hbmFnZXIgfSBmcm9tIFwiLi4vY2FjaGVNYW5hZ2VyL2NhY2hlTWFuYWdlclwiO1xyXG5leHBvcnQgY2xhc3MgSGVscGVyIHtcclxuXHJcblxyXG4gICAgXHJcbnN0YXRpYyBwcm9kdWN0VXBkYXRlKGV2ZW50KSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ0YXJnZXRcIiArIGV2ZW50LnRhcmdldCk7XHJcbiAgICBjb25zdCBldmVudFRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBpZiAoZXZlbnRUYXJnZXQubWF0Y2hlcyhcIi5xdHktYnRuXCIpKSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBjYWNoZU1hbmFnZXIgPSBuZXcgQ2FjaGVNYW5hZ2VyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG15Q2FydCA9IG5ldyBDYXJ0KCk7XHJcbiAgICAgICAgICAgIG15Q2FydC5yZXN0b3JlU3RhdGUoY2FjaGVNYW5hZ2VyLmdldEl0ZW0oXCJjYXJ0XCIpKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG1lbnVEZXRhaWxzID0gY2FjaGVNYW5hZ2VyLmdldEl0ZW0oXCJtZW51SXRlbXNcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAvLyBhbGVydChxdWFudGl0eSk7XHJcbiAgICAgICAgIGlmKGV2ZW50VGFyZ2V0Lm1hdGNoZXMoXCIuaW5jLXF0eVwiKSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGV2ZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJ0LXBsdXMtbWludXMtYm94XCIpO1xyXG4gICAgICAgICAgICBsZXQgcXVhbnRpdHkgPSBwYXJzZUludChidG4udmFsdWUpO1xyXG4gICAgICAgICAgYnRuLnZhbHVlID0gcXVhbnRpdHkgKz0gMTtcclxuICAgICAgICAgIHZhciBpdGVtID0gbmV3IENhcnRJdGVtKGV2ZW50LnRhcmdldC5pZCwgYnRuLnZhbHVlKTtcclxuICAgICAgICAgIG15Q2FydC51cGRhdGUoaXRlbSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZihldmVudFRhcmdldC5tYXRjaGVzKFwiLmRlYy1xdHlcIikpe1xyXG4gICAgICAgICAgICBjb25zdCBidG4gPSBldmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FydC1wbHVzLW1pbnVzLWJveFwiKTtcclxuICAgICAgICAgICAgbGV0IHF1YW50aXR5ID0gcGFyc2VJbnQoYnRuLnZhbHVlKTtcclxuICAgICAgICAgIGlmKHF1YW50aXR5PjApXHJcbiAgICAgICAgICB7XHJcbiAgICAgXHJcbiAgICAgICAgICBidG4udmFsdWUgPSBxdWFudGl0eSAtPSAxO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYnRuKTtcclxuICAgICAgICAgIHZhciBpdGVtID0gbmV3IENhcnRJdGVtKGV2ZW50LnRhcmdldC5pZCwgYnRuLnZhbHVlKTtcclxuICAgICAgICAgIG15Q2FydC51cGRhdGUoaXRlbSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGV2ZW50VGFyZ2V0Lm1hdGNoZXMoXCIucmVtb3ZlXCIpKVxyXG57XHJcbiAgIC8vIGFsZXJ0KCdpbiByZW1vdmUnKTtcclxuICAgIHZhciBpdGVtID0gbmV3IENhcnRJdGVtKGV2ZW50LnRhcmdldC5pZCwwKTtcclxuXHJcbiAgICBteUNhcnQucmVtb3ZlKGl0ZW0pO1xyXG59XHJcbiAgICAgICAgICBteUNhcnQucmVjb25jaWxlKG1lbnVEZXRhaWxzKTtcclxuICAgICAgICAgIGNhY2hlTWFuYWdlci5zZXRJdGVtKFwiY2FydFwiLCBteUNhcnQpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJ3cml0aW5nIGNhY2hlXCIpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coY2FjaGVNYW5hZ2VyLmdldEl0ZW0oXCJjYXJ0XCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=