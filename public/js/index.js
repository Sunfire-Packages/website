/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../cookie/js/src/Cookie.js":
/*!**********************************!*\
  !*** ../cookie/js/src/Cookie.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cookie": () => (/* binding */ Cookie)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Cookie = /*#__PURE__*/function () {
  function Cookie() {
    _classCallCheck(this, Cookie);
  }

  _createClass(Cookie, null, [{
    key: "set",
    value: function set(name, value, expirationInDays, sameSite, secure) {
      var date = new Date();
      date.setTime(date.getTime() + expirationInDays * 24 * 60 * 60 * 1000);
      document.cookie = "".concat(name, "=").concat(value, ";expires=").concat(date.toUTCString(), ";path=/").concat(secure !== null && secure !== void 0 ? secure : '').concat(sameSite ? ';samesite=' + sameSite : '');
    }
  }, {
    key: "remove",
    value: function remove(cookie) {
      var _this = this;

      if (cookie instanceof Array) {
        cookie.forEach(function (cookie) {
          _this.set(cookie, '', -1);
        });
      } else {
        this.set(cookie, '', -1);
      }
    }
  }, {
    key: "all",
    get: function get() {
      var cookies = {};

      if (document.cookie && document.cookie != '') {
        var split = document.cookie.split(';');

        for (var i = 0; i < split.length; i++) {
          var name_value = split[i].split("=");
          cookies[name_value[0].trim()] = name_value[1].trim();
        }
      }

      return cookies;
    }
  }, {
    key: "get",
    value: function get(name) {
      return this.all[name];
    }
  }, {
    key: "exists",
    value: function exists(name) {
      return this.all().hasOwnProperty(name);
    }
  }, {
    key: "hasValue",
    value: function hasValue(name, value) {
      if (!this.exists(name)) {
        return false;
      }

      var $cookies = this.all();
      return $cookies[name] == value;
    }
  }]);

  return Cookie;
}();

/***/ }),

/***/ "../cookie/js/src/Encoder.js":
/*!***********************************!*\
  !*** ../cookie/js/src/Encoder.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Encoder": () => (/* binding */ Encoder)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Encoder = /*#__PURE__*/function () {
  function Encoder() {
    _classCallCheck(this, Encoder);
  }

  _createClass(Encoder, null, [{
    key: "encode",
    value: function encode(value) {
      return value !== undefined && encodeURIComponent(JSON.stringify(value));
    }
  }, {
    key: "decode",
    value: function decode(value) {
      return value !== undefined && JSON.parse(decodeURIComponent(value));
    }
  }]);

  return Encoder;
}();

/***/ }),

/***/ "../cookie/js/src/Whisk.js":
/*!*********************************!*\
  !*** ../cookie/js/src/Whisk.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Whisk": () => (/* binding */ Whisk)
/* harmony export */ });
/* harmony import */ var _Cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cookie */ "../cookie/js/src/Cookie.js");
/* harmony import */ var _Encoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Encoder */ "../cookie/js/src/Encoder.js");
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _classPrivateMethodGet(receiver, privateSet, fn) {
  if (!privateSet.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return fn;
}

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = privateMap.get(receiver);

  if (!descriptor) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = privateMap.get(receiver);

  if (!descriptor) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }

  return value;
}




var _COOKIE_DOMAIN = new WeakMap();

var _SAME_SITE = new WeakMap();

var _COOKIE_NAME = new WeakMap();

var _SECURE = new WeakMap();

var _secureDefault = new WeakMap();

var _sameSiteDefault = new WeakMap();

var _cookiesDefault = new WeakMap();

var _BASIC_STORE = new WeakMap();

var _$cookieStore = new WeakMap();

var _$defaultCookies = new WeakMap();

var _getCookiesOfGroup = new WeakSet();

var _removeAllCookiesOfGroup = new WeakSet();

var _createBasicStore = new WeakSet();

var _getGroup = new WeakSet();

var _groupCheck = new WeakSet();

var _cookieCheck = new WeakSet();

var _getBaseGroupOfCookie = new WeakSet();

var _getDefaultOfGroup = new WeakSet();

var _isGroupChecked = new WeakSet();

var _allCookiesOfGroupUntouched = new WeakSet();

var _noCookiesOfGroupDenied = new WeakSet();

var _allCookiesOfGroupApproved = new WeakSet();

var _initializeDefaults = new WeakSet();

var _save = new WeakSet();

var _fetchCookieStore = new WeakSet();

var _initData = new WeakSet();

var _vote = new WeakSet();

var Whisk = /*#__PURE__*/function () {
  function Whisk() {
    _classCallCheck(this, Whisk);

    _vote.add(this);

    _initData.add(this);

    _fetchCookieStore.add(this);

    _save.add(this);

    _initializeDefaults.add(this);

    _allCookiesOfGroupApproved.add(this);

    _noCookiesOfGroupDenied.add(this);

    _allCookiesOfGroupUntouched.add(this);

    _isGroupChecked.add(this);

    _getDefaultOfGroup.add(this);

    _getBaseGroupOfCookie.add(this);

    _cookieCheck.add(this);

    _groupCheck.add(this);

    _getGroup.add(this);

    _createBasicStore.add(this);

    _removeAllCookiesOfGroup.add(this);

    _getCookiesOfGroup.add(this);

    _COOKIE_DOMAIN.set(this, {
      writable: true,
      value: void 0
    });

    _SAME_SITE.set(this, {
      writable: true,
      value: void 0
    });

    _COOKIE_NAME.set(this, {
      writable: true,
      value: 'cookie-consent'
    });

    _SECURE.set(this, {
      writable: true,
      value: void 0
    });

    _secureDefault.set(this, {
      writable: true,
      value: ''
    });

    _sameSiteDefault.set(this, {
      writable: true,
      value: 'lax'
    });

    _cookiesDefault.set(this, {
      writable: true,
      value: JSON.stringify([])
    });

    _BASIC_STORE.set(this, {
      writable: true,
      value: {
        'consents_approved': [],
        'consents_denied': [],
        'accepted': false
      }
    });

    _$cookieStore.set(this, {
      writable: true,
      value: void 0
    });

    _$defaultCookies.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _$cookieStore, _classPrivateFieldGet(this, _BASIC_STORE));

    this.$cookies = null;
  }

  _createClass(Whisk, [{
    key: "approve",
    value: function approve(data) {
      var _this = this;

      _classPrivateMethodGet(this, _createBasicStore, _createBasicStore2).call(this);

      if (data instanceof Array) {
        _classPrivateFieldGet(this, _$cookieStore).consents_denied = _classPrivateFieldGet(this, _$cookieStore).consents_denied.filter(function (cookie) {
          return !data.includes(cookie);
        });
        data.forEach(function (cookie) {
          !_this.isApproved(cookie) && _classPrivateFieldGet(_this, _$cookieStore).consents_approved.push(cookie);
        });
      } else {
        _classPrivateFieldGet(this, _$cookieStore).consents_denied = _classPrivateFieldGet(this, _$cookieStore).consents_denied.filter(function (cookie) {
          return cookie !== data;
        });

        _classPrivateFieldGet(this, _$cookieStore).consents_approved.push(data);
      }

      _classPrivateMethodGet(this, _save, _save2).call(this);
    }
  }, {
    key: "deny",
    value: function deny(data) {
      var _this2 = this;

      _classPrivateMethodGet(this, _createBasicStore, _createBasicStore2).call(this);

      if (data instanceof Array) {
        _classPrivateFieldGet(this, _$cookieStore).consents_approved = _classPrivateFieldGet(this, _$cookieStore).consents_approved.filter(function (cookie) {
          return !data.includes(cookie);
        });
        data.forEach(function (cookie) {
          !_this2.isDenied(cookie) && _classPrivateFieldGet(_this2, _$cookieStore).consents_denied.push(cookie);
        });
      } else {
        _classPrivateFieldGet(this, _$cookieStore).consents_approved = _classPrivateFieldGet(this, _$cookieStore).consents_approved.filter(function (cookie) {
          return cookie !== data;
        });

        _classPrivateFieldGet(this, _$cookieStore).consents_denied.push(data);
      }

      _Cookie__WEBPACK_IMPORTED_MODULE_0__.Cookie.remove(data);

      _classPrivateMethodGet(this, _save, _save2).call(this);
    }
  }, {
    key: "approveGroup",
    value: function approveGroup(name) {
      _classPrivateMethodGet(this, _createBasicStore, _createBasicStore2).call(this);

      this.approve(_classPrivateMethodGet(this, _getCookiesOfGroup, _getCookiesOfGroup2).call(this, name));
    }
  }, {
    key: "denyGroup",
    value: function denyGroup(name) {
      _classPrivateMethodGet(this, _createBasicStore, _createBasicStore2).call(this);

      this.deny(_classPrivateMethodGet(this, _getCookiesOfGroup, _getCookiesOfGroup2).call(this, name));

      _classPrivateMethodGet(this, _removeAllCookiesOfGroup, _removeAllCookiesOfGroup2).call(this, name);
    }
  }, {
    key: "isApproved",
    value: function isApproved(name) {
      return _classPrivateFieldGet(this, _$cookieStore).consents_approved.indexOf(name) !== -1;
    }
  }, {
    key: "isDenied",
    value: function isDenied(name) {
      return _classPrivateFieldGet(this, _$cookieStore).consents_denied.indexOf(name) !== -1;
    }
  }, {
    key: "isStoreAccepted",
    value: function isStoreAccepted() {
      return _classPrivateFieldGet(this, _$cookieStore) && _classPrivateFieldGet(this, _$cookieStore).accepted;
    }
  }, {
    key: "acceptStore",
    value: function acceptStore() {
      _classPrivateMethodGet(this, _createBasicStore, _createBasicStore2).call(this);

      _classPrivateFieldGet(this, _$cookieStore).accepted = true;

      _classPrivateMethodGet(this, _save, _save2).call(this);
    }
  }, {
    key: "refreshData",
    value: function refreshData() {
      _classPrivateMethodGet(this, _fetchCookieStore, _fetchCookieStore2).call(this);

      this.$cookies = _classPrivateMethodGet(this, _vote, _vote2).call(this);
      return this.$cookies;
    }
  }, {
    key: "setCookie",
    value: function setCookie(name, value, expirationInDays) {
      if (!this.isApproved(name)) {
        return false;
      }

      _Cookie__WEBPACK_IMPORTED_MODULE_0__.Cookie.set(name, value, expirationInDays);
    }
  }, {
    key: "settings",
    get: function get() {
      return {
        'domain': _classPrivateFieldGet(this, _COOKIE_DOMAIN),
        'samesite': _classPrivateFieldGet(this, _SAME_SITE),
        'secure': _classPrivateFieldGet(this, _SECURE),
        'defaultCookies': _classPrivateFieldGet(this, _$defaultCookies)
      };
    }
  }, {
    key: "init",
    value: function init(options) {
      if (!options) {
        _classPrivateMethodGet(this, _initializeDefaults, _initializeDefaults2).call(this);
      } else {
        var _options$domain, _options$sameSite, _options$secure, _options$data;

        _classPrivateFieldSet(this, _COOKIE_DOMAIN, (_options$domain = options.domain) !== null && _options$domain !== void 0 ? _options$domain : window.location.origin);

        _classPrivateFieldSet(this, _SAME_SITE, (_options$sameSite = options.sameSite) !== null && _options$sameSite !== void 0 ? _options$sameSite : _classPrivateFieldGet(this, _sameSiteDefault));

        _classPrivateFieldSet(this, _SECURE, (_options$secure = options.secure) !== null && _options$secure !== void 0 ? _options$secure : _classPrivateFieldGet(this, _secureDefault));

        var values = (_options$data = options.data) !== null && _options$data !== void 0 ? _options$data : _classPrivateFieldGet(this, _cookiesDefault);

        _classPrivateFieldSet(this, _$defaultCookies, JSON.parse(values));

        this.$cookies = JSON.parse(values);
      }

      _classPrivateMethodGet(this, _initData, _initData2).call(this);
    }
  }]);

  return Whisk;
}();

var _getCookiesOfGroup2 = function _getCookiesOfGroup2(name) {
  var group = this.$cookies.find(function (cookie) {
    return cookie.name === name;
  });
  return group.cookies.map(function (cookie) {
    return cookie.name;
  });
};

var _removeAllCookiesOfGroup2 = function _removeAllCookiesOfGroup2(name) {
  _Cookie__WEBPACK_IMPORTED_MODULE_0__.Cookie.remove(_classPrivateMethodGet(this, _getCookiesOfGroup, _getCookiesOfGroup2).call(this, name));
};

var _createBasicStore2 = function _createBasicStore2() {
  if (!_classPrivateFieldGet(this, _$cookieStore)) {
    _classPrivateFieldSet(this, _$cookieStore, _classPrivateFieldGet(this, _BASIC_STORE));

    _classPrivateMethodGet(this, _save, _save2).call(this);

    return _classPrivateFieldGet(this, _$cookieStore);
  }

  return false;
};

var _getGroup2 = function _getGroup2(name) {
  return this.$cookies && this.$cookies.find(function (group) {
    return group.name === name;
  });
};

var _groupCheck2 = function _groupCheck2(name) {
  if (_classPrivateMethodGet(this, _getGroup, _getGroup2).call(this, name) && _classPrivateMethodGet(this, _getGroup, _getGroup2).call(this, name).required) {
    return true;
  }

  if (_classPrivateMethodGet(this, _isGroupChecked, _isGroupChecked2).call(this, name)) {
    return true;
  }

  if (_classPrivateMethodGet(this, _allCookiesOfGroupUntouched, _allCookiesOfGroupUntouched2).call(this, name)) {
    return _classPrivateMethodGet(this, _getDefaultOfGroup, _getDefaultOfGroup2).call(this, name);
  }

  return false;
};

var _cookieCheck2 = function _cookieCheck2(name) {
  var group = _classPrivateMethodGet(this, _getBaseGroupOfCookie, _getBaseGroupOfCookie2).call(this, name);

  var cookie = group && group.cookies.find(function (cookie) {
    return cookie.name === name;
  });

  if (!group) {
    return false;
  }

  if (group.required || cookie.required) {
    return true;
  }

  if (_classPrivateMethodGet(this, _isGroupChecked, _isGroupChecked2).call(this, group.name)) {
    return true;
  }

  if (this.isApproved(name)) {
    return true;
  }

  return false;
};

var _getBaseGroupOfCookie2 = function _getBaseGroupOfCookie2(name) {
  return this.$cookies && this.$cookies.find(function (group) {
    return group.cookies.find(function (cookie) {
      return cookie.name === name;
    });
  });
};

var _getDefaultOfGroup2 = function _getDefaultOfGroup2(name) {
  var group = _classPrivateFieldGet(this, _$defaultCookies).find(function (group) {
    return group.name === name;
  });

  return group.checked;
};

var _isGroupChecked2 = function _isGroupChecked2(name) {
  return _classPrivateMethodGet(this, _noCookiesOfGroupDenied, _noCookiesOfGroupDenied2).call(this, name) && this.isStoreAccepted() || _classPrivateMethodGet(this, _allCookiesOfGroupApproved, _allCookiesOfGroupApproved2).call(this, name);
};

var _allCookiesOfGroupUntouched2 = function _allCookiesOfGroupUntouched2(name) {
  var _this3 = this;

  return _classPrivateMethodGet(this, _getGroup, _getGroup2).call(this, name).cookies.some(function (cookie) {
    if (_this3.isApproved(cookie.name) && _this3.isDenied(cookie.name)) {
      return false;
    }
  });
};

var _noCookiesOfGroupDenied2 = function _noCookiesOfGroupDenied2(name) {
  var _this4 = this;

  return _classPrivateMethodGet(this, _getGroup, _getGroup2).call(this, name) && !_classPrivateMethodGet(this, _getGroup, _getGroup2).call(this, name).cookies.some(function (cookie) {
    if (_this4.isDenied(cookie.name)) {
      return true;
    }
  });
};

var _allCookiesOfGroupApproved2 = function _allCookiesOfGroupApproved2(name) {
  var _this5 = this;

  var group = _classPrivateMethodGet(this, _getGroup, _getGroup2).call(this, name);

  return group && group.cookies.length && group.cookies.every(function (cookie) {
    return _this5.isApproved(cookie.name);
  });
};

var _initializeDefaults2 = function _initializeDefaults2() {
  _classPrivateFieldSet(this, _COOKIE_DOMAIN, window.location.origin);

  _classPrivateFieldSet(this, _SAME_SITE, _classPrivateFieldGet(this, _sameSiteDefault));

  _classPrivateFieldSet(this, _SECURE, _classPrivateFieldGet(this, _secureDefault));

  _classPrivateFieldSet(this, _$defaultCookies, JSON.parse(_classPrivateFieldGet(this, _cookiesDefault)));

  this.$cookies = JSON.parse(_classPrivateFieldGet(this, _cookiesDefault));
};

var _save2 = function _save2() {
  _Cookie__WEBPACK_IMPORTED_MODULE_0__.Cookie.set(_classPrivateFieldGet(this, _COOKIE_NAME), _Encoder__WEBPACK_IMPORTED_MODULE_1__.Encoder.encode(_classPrivateFieldGet(this, _$cookieStore)), 1, _classPrivateFieldGet(this, _SAME_SITE), _classPrivateFieldGet(this, _SECURE));
};

var _fetchCookieStore2 = function _fetchCookieStore2() {
  var savedStore = _Encoder__WEBPACK_IMPORTED_MODULE_1__.Encoder.decode(_Cookie__WEBPACK_IMPORTED_MODULE_0__.Cookie.get(_classPrivateFieldGet(this, _COOKIE_NAME)));

  if (savedStore) {
    _classPrivateFieldSet(this, _$cookieStore, savedStore);
  } else {
    _classPrivateMethodGet(this, _createBasicStore, _createBasicStore2).call(this);
  }
};

var _initData2 = function _initData2() {
  _classPrivateMethodGet(this, _fetchCookieStore, _fetchCookieStore2).call(this);

  this.$cookies = _classPrivateMethodGet(this, _vote, _vote2).call(this);
  return _classPrivateFieldGet(this, _$defaultCookies);
};

var _vote2 = function _vote2() {
  var _this6 = this;

  return _classPrivateFieldGet(this, _$defaultCookies).map(function (group) {
    group.checked = _classPrivateMethodGet(_this6, _groupCheck, _groupCheck2).call(_this6, group.name);
    group.cookies.map(function (cookie) {
      cookie.checked = _classPrivateMethodGet(_this6, _cookieCheck, _cookieCheck2).call(_this6, cookie.name);
    });
    return group;
  });
};

/***/ }),

/***/ "../cookie/js/src/index.js":
/*!*********************************!*\
  !*** ../cookie/js/src/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Whisk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Whisk */ "../cookie/js/src/Whisk.js");


if (!window.sunfireCookie) {
  window.sunfireCookie = new _Whisk__WEBPACK_IMPORTED_MODULE_0__.Whisk();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Whisk__WEBPACK_IMPORTED_MODULE_0__.Whisk);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("../cookie/js/src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;