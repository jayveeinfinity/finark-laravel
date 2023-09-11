(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Components/FeedbackModal.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Components/FeedbackModal.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      name: "",
      email: "",
      message: "",
      rate: ""
    };
  },
  computed: {
    isSubmitReady: function isSubmitReady() {
      return !(this.name && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email) && this.message && this.rate);
    }
  },
  methods: {
    SubmitForm: function SubmitForm(e) {
      var formData = new FormData();
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('message', this.message);
      formData.append('rate', this.rate);
      this.Save(formData);
    },
    Save: function Save(formData) {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$http.post('/feedback/store', formData);
            case 2:
              response = _context.sent;
              if (response.data.status === "success") {
                _this.ResetForm();
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: "Feedback submitted!",
                  text: "Thank you for rating our website!",
                  icon: 'success',
                  allowOutsideClick: false
                }).then(function (result) {
                  if (result.isConfirmed) {
                    var buttonClose = document.getElementById('modalClose');
                    buttonClose.click();
                  }
                });
              }
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    ResetForm: function ResetForm() {
      // Reset the form fields
      this.name = '';
      this.email = '';
      this.message = '';
      this.rate = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Partials_CorporateUI_Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Partials/CorporateUI/Sidebar */ "./resources/js/Shared/Partials/CorporateUI/Sidebar.vue");
/* harmony import */ var _Partials_CorporateUI_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Partials/CorporateUI/Navbar */ "./resources/js/Shared/Partials/CorporateUI/Navbar.vue");
/* harmony import */ var _Partials_CorporateUI_NavbarAlt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Partials/CorporateUI/NavbarAlt */ "./resources/js/Shared/Partials/CorporateUI/NavbarAlt.vue");



var __default__ = {
  data: function data() {
    return {
      page: "Dashboard",
      pages: [{
        id: 1,
        name: "Dashboard",
        url: "/admin/home"
      }, {
        id: 2,
        name: "Partners",
        url: "/admin/partners"
      }, {
        id: 3,
        name: "Blogs",
        url: "/admin/blogs"
      }, {
        id: 4,
        name: "Appointments",
        url: "/admin/appointments"
      }, {
        id: 5,
        name: "Create",
        url: "/admin/blog/create"
      }, {
        id: 6,
        name: "Create",
        url: "/admin/partner/create"
      }, {
        id: 7,
        name: "Users",
        url: "/admin/users"
      }, {
        id: 8,
        name: "Create",
        url: "/admin/blogs/create"
      }, {
        id: 9,
        name: "Courses",
        url: "/admin/courses"
      }]
    };
  },
  created: function created() {
    var _this = this;
    this.pages.forEach(function (page) {
      if (page.url == _this.$page.url) {
        _this.page = page.name;
        return;
      }
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'CorporateUI',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var __returned__ = {
      get SideBar() {
        return _Partials_CorporateUI_Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"];
      },
      get NavBar() {
        return _Partials_CorporateUI_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"];
      },
      get NavBarAlt() {
        return _Partials_CorporateUI_NavbarAlt__WEBPACK_IMPORTED_MODULE_2__["default"];
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/Landing.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/Landing.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Partials_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Partials/Header */ "./resources/js/Shared/Partials/Header.vue");
/* harmony import */ var _Partials_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Partials/Footer */ "./resources/js/Shared/Partials/Footer.vue");
/* harmony import */ var _Components_FeedbackModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Components/FeedbackModal */ "./resources/js/Shared/Components/FeedbackModal.vue");
/* harmony import */ var _Shared_Partials_CorporateUI_AdminNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Shared/Partials/CorporateUI/AdminNav */ "./resources/js/Shared/Partials/CorporateUI/AdminNav.vue");




var __default__ = {
  computed: {
    username: function username() {
      return this.$page.props.auth !== null ? this.$page.props.auth.user.username : '';
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'Landing',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var __returned__ = {
      get Header() {
        return _Partials_Header__WEBPACK_IMPORTED_MODULE_0__["default"];
      },
      get Footer() {
        return _Partials_Footer__WEBPACK_IMPORTED_MODULE_1__["default"];
      },
      get FeedbackModal() {
        return _Components_FeedbackModal__WEBPACK_IMPORTED_MODULE_2__["default"];
      },
      get AdminNav() {
        return _Shared_Partials_CorporateUI_AdminNav__WEBPACK_IMPORTED_MODULE_3__["default"];
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/AdminNav.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/AdminNav.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    username: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    page: String,
    pages: Array
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/NavbarAlt.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/NavbarAlt.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var _Helpers_Functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Helpers/Functions */ "./resources/js/Shared/Helpers/Functions.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'NavbarAlt',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var page = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.usePage)();
    var pages = page.url.slice(1).split("/");
    var active = pages[pages.length - 1];
    pages.pop();
    var __returned__ = {
      page: page,
      get pages() {
        return pages;
      },
      set pages(v) {
        pages = v;
      },
      get active() {
        return active;
      },
      set active(v) {
        active = v;
      },
      get usePage() {
        return _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.usePage;
      },
      get helpers() {
        return _Helpers_Functions__WEBPACK_IMPORTED_MODULE_1__["default"];
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Sidebar.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Sidebar.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Helpers_Functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../Shared/Helpers/Functions */ "./resources/js/Shared/Helpers/Functions.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Sidebar',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var __returned__ = {
      get helpers() {
        return _Shared_Helpers_Functions__WEBPACK_IMPORTED_MODULE_0__["default"];
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Components/FeedbackModal.vue?vue&type=template&id=1c34e4ab":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Components/FeedbackModal.vue?vue&type=template&id=1c34e4ab ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "position-fixed bottom-0 end-0 mr-3 mb-3"
};
var _hoisted_2 = {
  type: "button",
  "class": "btn finark-bg-primary text-white",
  "data-bs-toggle": "modal",
  "data-bs-target": "#feedbackFormModal"
};
var _hoisted_3 = {
  "class": "modal fade",
  id: "feedbackFormModal",
  tabindex: "-1",
  "aria-labelledby": "feedbackFormModalLabel",
  "aria-hidden": "true"
};
var _hoisted_4 = {
  "class": "modal-dialog modal-dialog-centered"
};
var _hoisted_5 = {
  "class": "modal-content"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"modal-header\"><h1 class=\"modal-title fs-5\" id=\"feedbackFormModalLabel\">FinArk feedback form</h1><button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button></div><div class=\"d-flex flex-column finark-bg-primary pt-4 px-4 pb-3\"><div class=\"mb-3 d-flex justify-content-center\"><img src=\"/storage/images/brands/logo-banner-white.png\" height=\"48\"></div><h2 class=\"fw-bold text-white text-center\">Tell us how would you rate our website?</h2></div>", 2);
var _hoisted_8 = {
  "class": "modal-body"
};
var _hoisted_9 = {
  "class": "mb-3"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "name",
  "class": "form-label fw-bold"
}, "*Name", -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "mb-3"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email",
  "class": "form-label fw-bold"
}, "*Email address", -1 /* HOISTED */);
var _hoisted_13 = {
  "class": "mb-3"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "name",
  "class": "form-label fw-bold"
}, "*How would you rate our website?", -1 /* HOISTED */);
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "btn btn-outline-primary btn-sm",
  "for": "btn-check-poor"
}, "Poor", -1 /* HOISTED */);
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "btn btn-outline-primary btn-sm",
  "for": "btn-check-fair"
}, "Fair", -1 /* HOISTED */);
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "btn btn-outline-primary btn-sm",
  "for": "btn-check-good"
}, "Good", -1 /* HOISTED */);
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "btn btn-outline-primary btn-sm",
  "for": "btn-check-very-good"
}, "Very Good", -1 /* HOISTED */);
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "btn btn-outline-primary btn-sm",
  "for": "btn-check-excellent"
}, "Excellent", -1 /* HOISTED */);
var _hoisted_21 = {
  "class": "mb-3"
};
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "comments",
  "class": "form-label fw-bold"
}, "*Is there anything else you'd like to share about our website experience?", -1 /* HOISTED */);
var _hoisted_23 = {
  "class": "text-end"
};
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-secondary",
  "data-bs-dismiss": "modal",
  id: "modalClose"
}, "Close", -1 /* HOISTED */);
var _hoisted_25 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FontAwesomeIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FontAwesomeIcon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Button trigger modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-edit"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Write a feedback ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.SubmitForm && $options.SubmitForm.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    id: "name",
    placeholder: "Name...",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.name = $event;
    }),
    required: "",
    autocomplete: "off"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    "class": "form-control",
    id: "email",
    placeholder: "name@example.com",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.email = $event;
    }),
    required: "",
    autocomplete: "off"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.email]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    "class": "btn-check",
    name: "btn-check-rate",
    id: "btn-check-poor",
    value: "poor",
    autocomplete: "off",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.rate = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.rate]]), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    "class": "btn-check",
    name: "btn-check-rate",
    id: "btn-check-fair",
    value: "fair",
    autocomplete: "off",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.rate = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.rate]]), _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    "class": "btn-check",
    name: "btn-check-rate",
    id: "btn-check-good",
    value: "good",
    autocomplete: "off",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.rate = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.rate]]), _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    "class": "btn-check",
    name: "btn-check-rate",
    id: "btn-check-very-good",
    value: "very-good",
    autocomplete: "off",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.rate = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.rate]]), _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "radio",
    "class": "btn-check",
    name: "btn-check-rate",
    id: "btn-check-excellent",
    value: "excellent",
    autocomplete: "off",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.rate = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.rate]]), _hoisted_20]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control",
    id: "comments",
    rows: "3",
    placeholder: "Write your messsages, comments and suggestions...",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.message = $event;
    }),
    required: ""
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.message]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "btn finark-bg-primary text-white",
    disabled: $options.isSubmitReady
  }, "Submit", 8 /* PROPS */, _hoisted_25)])], 32 /* HYDRATE_EVENTS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"modal-footer pt-0\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\r\n                </div> ")])])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=template&id=250a2ee7":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=template&id=250a2ee7 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "g-sidenav-show bg-gray-100"
};
var _hoisted_2 = {
  "class": "main-content position-relative max-height-vh-100 h-100 border-radius-lg"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("body", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SideBar"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NavBarAlt"], {
    page: $data.page
  }, null, 8 /* PROPS */, ["page"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/Landing.vue?vue&type=template&id=6e667745":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/Landing.vue?vue&type=template&id=6e667745 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  "head-key": "description",
  name: "description",
  content: "We provide quality financial advice and competitive financial products and solutions our clients - serving in our clients' needs."
}, null, -1 /* HOISTED */);
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  "head-key": "author",
  name: "author",
  content: "John Vincent Bonza - Full Stack Developer - Infinity Solutions former Infinity Brackets"
}, null, -1 /* HOISTED */);
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  "head-key": "keywords",
  name: "keywords",
  content: "financial, advisory, insurance, partners, life, finark, clients, solutions, financial advisory, insurance partners, we provide, advisory practice, financial consultants, support them, advisory firm"
}, null, -1 /* HOISTED */);
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  "head-key": "social-title",
  property: "og:title",
  content: "FinArk ⋅ Transforming the way financial advisory is done"
}, null, -1 /* HOISTED */);
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  "head-key": "social-description",
  property: "og:description",
  content: "We provide quality financial advice and competitive financial products and solutions our clients - serving in our clients' needs."
}, null, -1 /* HOISTED */);
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  "head-key": "social-image",
  property: "og:image",
  content: "http://fin-ark.com/storage/images/backgrounds/landing-image.jpeg"
}, null, -1 /* HOISTED */);
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  "head-key": "social-url",
  property: "og:url",
  content: "http://fin-ark.com/"
}, null, -1 /* HOISTED */);
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  "head-key": "social-type",
  property: "og:type",
  content: "website"
}, null, -1 /* HOISTED */);
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  "head-key": "twitter-title",
  property: "twitter:title",
  content: "FinArk ⋅ Transforming the way financial advisory is done"
}, null, -1 /* HOISTED */);
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  "head-key": "twitter-description",
  property: "twitter:description",
  content: "We provide quality financial advice and competitive financial products and solutions our clients - serving in our clients' needs."
}, null, -1 /* HOISTED */);
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  "head-key": "twitter-image",
  property: "twitter:image",
  content: "http://fin-ark.com/storage/images/backgrounds/landing-image.jpeg"
}, null, -1 /* HOISTED */);
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  content: "summary_large_image",
  name: "twitter:card"
}, null, -1 /* HOISTED */);
var _hoisted_13 = {
  "class": "finark-bg-default"
};
var _hoisted_14 = {
  "class": "main-content"
};
var _hoisted_15 = {
  "class": "header py-md-5 py-2 bg-landing-image-7"
};
var _hoisted_16 = {
  "class": "container-xxl container-xl container-lg container-md container-sm"
};
var _hoisted_17 = {
  "class": "header-body text-center mt-7 mb-5"
};
var _hoisted_18 = {
  "class": "row"
};
var _hoisted_19 = {
  "class": "col-12"
};
var _hoisted_20 = {
  "class": "d-flex justify-content-between"
};
var _hoisted_21 = {
  "class": "align-self-center"
};
var _hoisted_22 = {
  key: 0,
  "class": "finark-landing-featured-h1 text-white text-start finark-text-shadow fw-normal lh-1"
};
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "finark-fw-800"
}, "Financial Seas", -1 /* HOISTED */);
var _hoisted_26 = {
  "class": "finark-landing-featured-h1 finark-fw-800 text-white text-start text-uppercase finark-text-shadow"
};
var _hoisted_27 = {
  key: 0
};
var _hoisted_28 = {
  key: 1
};
var _hoisted_29 = {
  key: 2
};
var _hoisted_30 = {
  key: 3
};
var _hoisted_31 = {
  key: 4
};
var _hoisted_32 = {
  key: 0,
  "class": "d-flex flex-column align-self-center"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "bg-white mx-auto mb-3 d-lg-block d-none",
  style: {
    "width": "3px",
    "height": "50px"
  }
}, null, -1 /* HOISTED */);
var _hoisted_34 = {
  "class": "pt-2 pb-1 px-4 text-white d-flex flex-column justify-content-end align-items-center"
};
var _hoisted_35 = {
  "class": "finark-default-link text-white mb-1",
  href: "https://www.facebook.com/FinancialArk",
  target: "_blank"
};
var _hoisted_36 = {
  "class": "finark-default-link text-white mb-1",
  href: "https://www.instagram.com/finark.advisory/",
  target: "_blank"
};
var _hoisted_37 = {
  "class": "finark-default-link text-white mb-1",
  href: "https://www.youtube.com/@FinancialArk",
  target: "_blank"
};
var _hoisted_38 = {
  "class": "finark-default-link text-white mb-1",
  href: "https://www.linkedin.com/company/finarkgroup/",
  target: "_blank"
};
var _hoisted_39 = {
  "class": "finark-default-link text-white mb-1",
  href: "https://wa.me/6591813260",
  target: "_blank"
};
var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "bg-white mx-auto mt-2 d-lg-block d-none",
  style: {
    "width": "3px",
    "height": "50px"
  }
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_FontAwesomeIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FontAwesomeIcon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Main meta tags "), _hoisted_1, _hoisted_2, _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Social media meta tags "), _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Twitter meta tags "), _hoisted_9, _hoisted_10, _hoisted_11, _hoisted_12];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("body", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AdminNav"], {
    username: $options.username
  }, null, 8 /* PROPS */, ["username"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.$page.props.auth != null]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Header"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_ctx.$page.component == 'Landing' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h1", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Navigating the"), _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("ever-changing"), _hoisted_24, _hoisted_25])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_26, [_ctx.$page.component == 'About' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_27, "About Us")) : _ctx.$page.component == 'Partners' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_28, "Our Partners")) : _ctx.$page.component == 'Services' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_29, "Our Services")) : _ctx.$page.component == 'Contact' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_30, "Contact Us")) : _ctx.$page.component != 'Landing' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.component), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), _ctx.$page.component == 'Landing' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span class=\"me-2 fst-italic mb-1\" style=\"font-size: 0.7rem;\">Tel: <a class=\"finark-default-link text-white\" href=\"tel:+65 9181 3260\"><b>+65 9181 3260</b></a></span> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-brands fa-facebook",
    "class": "fs-4 text-white"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-brands fa-instagram-square",
    "class": "fs-4 text-white"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-brands fa-youtube-square",
    "class": "fs-4 text-white"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-brands fa-linkedin",
    "class": "fs-4 text-white"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-envelope",
    "class": "fs-4 text-white"
  })])]), _hoisted_40])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <h1 class=\"finark-landing-featured-h1 text-white text-left finark-text-shadow\">\r\n                                <span v-if=\"$page.component == 'Landing'\">Navigating the<br>ever-changing<br><span class=\"finark-fw-800\">Financial Seas</span></span>\r\n                                <span v-else-if=\"$page.component == 'About'\">About Us</span>\r\n                                <span v-else-if=\"$page.component == 'Partners'\">Our Partners</span>\r\n                                <span v-else-if=\"$page.component == 'Services'\">Our Services</span>\r\n                                <span v-else-if=\"$page.component == 'Contact'\">Contact Us</span>\r\n                                <span v-else>{{ $page.component }}</span>\r\n                            </h1> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"col-12\" v-if=\"$page.component == 'Landing'\">\r\n                            <p class=\"finark-landing-featured-p text-white text-left finark-text-shadow font-weight-400\">We provide quality financial advice and competitive financial products and solutions our clients - serving in our clients' needs.</p>\r\n                        </div> ")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"separator separator-bottom separator-skew zindex-100\" style=\"height: 100px !important;\">\r\n                <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n                </svg>\r\n            </div> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Footer"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FeedbackModal"])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/AdminNav.vue?vue&type=template&id=c9e9de4a":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/AdminNav.vue?vue&type=template&id=c9e9de4a ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container-fluid finark-bg-primary"
};
var _hoisted_2 = {
  "class": "container-xxl container-xl container-lg container-md container-sm"
};
var _hoisted_3 = {
  "class": "d-flex justify-content-between pt-3 pb-1"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "/admin",
  "class": "btn btn-sm btn-outline-white"
}, "Admin dashboard")], -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "text-white"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "/signout",
  "class": "btn btn-sm btn-outline-white"
}, "Sign out", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Hi! " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.username) + " ", 1 /* TEXT */), _hoisted_6])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=template&id=2d2ea757":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=template&id=2d2ea757 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "navbar navbar-main navbar-expand-lg mx-5 px-0 shadow-none rounded",
  id: "navbarBlur",
  "navbar-scroll": "true"
};
var _hoisted_2 = {
  "class": "container-fluid py-1 px-2"
};
var _hoisted_3 = {
  "aria-label": "breadcrumb"
};
var _hoisted_4 = {
  "class": "breadcrumb bg-transparent mb-1 pb-0 pt-1 px-0 me-sm-6 me-5"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item text-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "opacity-5 text-dark",
  href: "/admin"
}, "FinArk")], -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "font-weight-bold mb-0"
};
var _hoisted_7 = {
  "class": "collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4",
  id: "navbar"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"ms-md-auto pe-md-3 d-flex align-items-center\"><div class=\"input-group\"><span class=\"input-group-text text-body bg-white border-end-0\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16px\" height=\"16px\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z\"></path></svg></span><input type=\"text\" class=\"form-control ps-0\" placeholder=\"Search\"></div></div>", 1);
var _hoisted_9 = {
  "class": "navbar-nav justify-content-end"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<li class=\"nav-item d-xl-none px-3 d-flex align-items-center\"><a href=\"javascript:void(0)\" class=\"nav-link text-body p-0\" id=\"iconNavbarSidenav\"><div class=\"sidenav-toggler-inner\"><i class=\"sidenav-toggler-line\"></i><i class=\"sidenav-toggler-line\"></i><i class=\"sidenav-toggler-line\"></i></div></a></li>", 1);
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<li class=\"nav-item dropdown pe-2 d-flex align-items-center\"><a href=\"javascript:;\" class=\"nav-link text-body p-0\" id=\"dropdownMenuButton\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><svg height=\"16\" width=\"16\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"cursor-pointers\"><path fill-rule=\"evenodd\" d=\"M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z\" clip-rule=\"evenodd\"></path></svg></a><ul class=\"dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4\" aria-labelledby=\"dropdownMenuButton\"><p class=\"m-0 text-center\">No notifications</p><!-- &lt;li class=&quot;mb-2&quot;&gt;\r\n                                &lt;a class=&quot;dropdown-item border-radius-md&quot; href=&quot;javascript:;&quot;&gt;\r\n                                    &lt;div class=&quot;d-flex py-1&quot;&gt;\r\n                                    &lt;div class=&quot;my-auto&quot;&gt;\r\n                                        &lt;img src=&quot;/storage/images/brands/logo.png&quot; class=&quot;avatar avatar-sm border-radius-sm  me-3 &quot;&gt;\r\n                                    &lt;/div&gt;\r\n                                    &lt;div class=&quot;d-flex flex-column justify-content-center&quot;&gt;\r\n                                        &lt;h6 class=&quot;text-sm font-weight-normal mb-1&quot;&gt;\r\n                                        &lt;span class=&quot;font-weight-bold&quot;&gt;New message&lt;/span&gt; from Laur\r\n                                        &lt;/h6&gt;\r\n                                        &lt;p class=&quot;text-xs text-secondary mb-0 d-flex align-items-center &quot;&gt;\r\n                                        &lt;i class=&quot;fa fa-clock opacity-6 me-1&quot;&gt;&lt;/i&gt;\r\n                                        13 minutes ago\r\n                                        &lt;/p&gt;\r\n                                    &lt;/div&gt;\r\n                                    &lt;/div&gt;\r\n                                &lt;/a&gt;\r\n                            &lt;/li&gt;\r\n                            &lt;li class=&quot;mb-2&quot;&gt;\r\n                                &lt;a class=&quot;dropdown-item border-radius-md&quot; href=&quot;javascript:;&quot;&gt;\r\n                                    &lt;div class=&quot;d-flex py-1&quot;&gt;\r\n                                    &lt;div class=&quot;my-auto&quot;&gt;\r\n                                        &lt;img src=&quot;/storage/images/brands/logo.png&quot; class=&quot;avatar avatar-sm border-radius-sm bg-gradient-dark p-2  me-3 &quot;&gt;\r\n                                    &lt;/div&gt;\r\n                                    &lt;div class=&quot;d-flex flex-column justify-content-center&quot;&gt;\r\n                                        &lt;h6 class=&quot;text-sm font-weight-normal mb-1&quot;&gt;\r\n                                        &lt;span class=&quot;font-weight-bold&quot;&gt;New report&lt;/span&gt; by Google\r\n                                        &lt;/h6&gt;\r\n                                        &lt;p class=&quot;text-xs text-secondary mb-0 d-flex align-items-center &quot;&gt;\r\n                                        &lt;i class=&quot;fa fa-clock opacity-6 me-1&quot;&gt;&lt;/i&gt;\r\n                                        1 day\r\n                                        &lt;/p&gt;\r\n                                    &lt;/div&gt;\r\n                                    &lt;/div&gt;\r\n                                &lt;/a&gt;\r\n                            &lt;/li&gt;\r\n                            &lt;li&gt;\r\n                                &lt;a class=&quot;dropdown-item border-radius-md&quot; href=&quot;javascript:;&quot;&gt;\r\n                                    &lt;div class=&quot;d-flex py-1&quot;&gt;\r\n                                    &lt;div class=&quot;avatar avatar-sm border-radius-sm bg-slate-800  me-3  my-auto&quot;&gt;\r\n                                        &lt;svg width=&quot;12px&quot; height=&quot;12px&quot; viewBox=&quot;0 0 43 36&quot; version=&quot;1.1&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot;&gt;\r\n                                        &lt;title&gt;credit-card&lt;/title&gt;\r\n                                        &lt;g stroke=&quot;none&quot; stroke-width=&quot;1&quot; fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;&gt;\r\n                                            &lt;g transform=&quot;translate(-2169.000000, -745.000000)&quot; fill=&quot;#FFFFFF&quot; fill-rule=&quot;nonzero&quot;&gt;\r\n                                            &lt;g transform=&quot;translate(1716.000000, 291.000000)&quot;&gt;\r\n                                                &lt;g transform=&quot;translate(453.000000, 454.000000)&quot;&gt;\r\n                                                &lt;path class=&quot;color-background&quot; d=&quot;M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z&quot; opacity=&quot;0.593633743&quot;&gt;&lt;/path&gt;\r\n                                                &lt;path class=&quot;color-background&quot; d=&quot;M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z&quot;&gt;&lt;/path&gt;\r\n                                                &lt;/g&gt;\r\n                                            &lt;/g&gt;\r\n                                            &lt;/g&gt;\r\n                                        &lt;/g&gt;\r\n                                        &lt;/svg&gt;\r\n                                    &lt;/div&gt;\r\n                                    &lt;div class=&quot;d-flex flex-column justify-content-center&quot;&gt;\r\n                                        &lt;h6 class=&quot;text-sm font-weight-normal mb-1&quot;&gt;\r\n                                        Payment successfully completed\r\n                                        &lt;/h6&gt;\r\n                                        &lt;p class=&quot;text-xs text-secondary d-flex align-items-center mb-0 &quot;&gt;\r\n                                        &lt;i class=&quot;fa fa-clock opacity-6 me-1&quot;&gt;&lt;/i&gt;\r\n                                        2 days\r\n                                        &lt;/p&gt;\r\n                                    &lt;/div&gt;\r\n                                    &lt;/div&gt;\r\n                                &lt;/a&gt;\r\n                            &lt;/li&gt; --></ul></li>", 1);
var _hoisted_12 = {
  "class": "nav-item ps-2 d-flex align-items-center"
};
var _hoisted_13 = ["href"];
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/storage/images/brands/logo.png",
  "class": "avatar avatar-sm",
  alt: "avatar"
}, null, -1 /* HOISTED */);
var _hoisted_15 = [_hoisted_14];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_4, [_hoisted_5, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.pages, function (page) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": "breadcrumb-item text-sm text-dark active",
      "aria-current": "page",
      key: page.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(page.name), 1 /* TEXT */);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.page), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"nav-item px-3 d-flex align-items-center\">\r\n                        <a href=\"javascript:;\" class=\"nav-link text-body p-0\">\r\n                            <svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\" class=\"fixed-plugin-button-nav cursor-pointer\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\r\n                            <path fill-rule=\"evenodd\" d=\"M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z\" clip-rule=\"evenodd\" />\r\n                            </svg>\r\n                        </a>\r\n                    </li> "), _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: '/admin/users/edit/' + _ctx.$page.props.auth.user.id,
    "class": "nav-link text-body p-0"
  }, _hoisted_15, 8 /* PROPS */, _hoisted_13)])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/NavbarAlt.vue?vue&type=template&id=77f7b2fc":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/NavbarAlt.vue?vue&type=template&id=77f7b2fc ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "navbar-on-header px-0 mx-5 rounded shadow-none z-index-2 navbar navbar-main navbar-expand-lg",
  "navbar-scroll": "true",
  id: "navbarBlur"
};
var _hoisted_2 = {
  "class": "container-fluid px-2 py-1 min-w-100"
};
var _hoisted_3 = {
  "aria-label": "breadcrumb"
};
var _hoisted_4 = {
  "class": "px-0 pt-1 pb-0 mb-1 bg-transparent breadcrumb me-sm-6 me-5"
};
var _hoisted_5 = {
  "class": "mb-0 font-weight-bold breadcrumb-text text-white"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4",
  id: "navbar"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ms-md-auto pe-md-3 d-flex align-items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "input-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "input-group-text text-body bg-white border-end-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16px",
  height: "16px",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  "class": "form-control ps-0",
  placeholder: "Search",
  onfocus: "focused(this)",
  onfocusout: "defocused(this)"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "navbar-nav justify-content-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item d-xl-none ps-3 d-flex align-items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "p-0 nav-link text-white",
  id: "iconNavbarSidenav"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "sidenav-toggler-inner"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bg-white sidenav-toggler-line"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bg-white sidenav-toggler-line"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bg-white sidenav-toggler-line"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "px-3 nav-item d-flex align-items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "p-0 nav-link text-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  width: "16",
  height: "16",
  xmlns: "http://www.w3.org/2000/svg",
  "class": "cursor-pointer fixed-plugin-button-nav",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z",
  "clip-rule": "evenodd"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item dropdown pe-2 d-flex align-items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "p-0 nav-link text-white",
  id: "dropdownMenuButton",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  height: "16",
  width: "16",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "class": "cursor-pointers"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z",
  "clip-rule": "evenodd"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "px-2 py-3 dropdown-menu dropdown-menu-end me-sm-n4",
  "aria-labelledby": "dropdownMenuButton"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "mb-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item border-radius-md",
  href: "javascript:;"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "py-1 d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "my-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://demos.creative-tim.com/corporate-ui-dashboard-pro/assets/img/team-2.jpg",
  "class": "avatar avatar-sm me-3",
  alt: "user image"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-column justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "mb-1 text-sm font-weight-normal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "font-weight-bold"
}, "New message"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" from Laur ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-0 text-xs text-secondary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-clock me-1",
  "aria-hidden": "true"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 13 minutes ago ")])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "mb-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item border-radius-md",
  href: "javascript:;"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "py-1 d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "my-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://demos.creative-tim.com/corporate-ui-dashboard-pro/assets/img/small-logos/logo-spotify.svg",
  "class": "avatar avatar-sm bg-gradient-dark me-3",
  alt: "logo spotify"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-column justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "mb-1 text-sm font-weight-normal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "font-weight-bold"
}, "New album"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" by Travis Scott ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-0 text-xs text-secondary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-clock me-1",
  "aria-hidden": "true"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 1 day ")])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-item border-radius-md",
  href: "javascript:;"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "py-1 d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "avatar avatar-sm bg-gradient-secondary me-3 my-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  width: "12px",
  height: "12px",
  viewBox: "0 0 43 36",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "credit-card"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  transform: "translate(-2169.000000, -745.000000)",
  fill: "#FFFFFF",
  "fill-rule": "nonzero"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  transform: "translate(1716.000000, 291.000000)"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", {
  transform: "translate(453.000000, 454.000000)"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "class": "color-background",
  d: "M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z",
  opacity: "0.593633743"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "class": "color-background",
  d: "M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
})])])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-column justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "mb-1 text-sm font-weight-normal"
}, " Payment successfully completed "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mb-0 text-xs text-secondary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-clock me-1",
  "aria-hidden": "true"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 2 days ")])])])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item d-flex align-items-center ps-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "nav-link text-white font-weight-bold px-0",
  target: "_blank"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item dropdown d-flex align-items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "nav-link text-white font-weight-bold px-0",
  target: "_blank"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "avatar avatar-sm position-relative"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/storage/images/brands/logo-white.png",
  alt: "profile_image",
  "class": "w-100 border-radius-md"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "nav-link text-white font-weight-bold px-0",
  target: "_blank"
})])], -1 /* HOISTED */);
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "top-0 bg-cover z-index-n1 min-height-100 max-height-200 h-25 position-absolute w-100 start-0 end-0",
  style: {
    "background-image": "url('/storage/images/backgrounds/header-blue-purple.jpg')",
    "background-position": "bottom"
  }
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"text-sm breadcrumb-item\" >\r\n                        <a class=\"opacity-5 p-0 breadcrumb-text text-white\" href=\"javascript:;\">Dashboard</a>\r\n                    </li> "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.pages, function (page) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": "text-sm breadcrumb-item breadcrumb-text text-white active",
      "aria-current": "page",
      key: page
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(page == 'admin' ? 'Dashboard' : page != 'dashboard' ? $setup.helpers.capitalized(page) : ''), 1 /* TEXT */);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.helpers.capitalized($setup.active)), 1 /* TEXT */)]), _hoisted_6])]), _hoisted_7], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Sidebar.vue?vue&type=template&id=2c8335b6":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Sidebar.vue?vue&type=template&id=2c8335b6 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "sidenav navbar navbar-vertical navbar-expand-xs border-0 bg-slate-900 fixed-start",
  id: "sidenav-main"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "sidenav-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none",
  "aria-hidden": "true",
  id: "iconSidenav"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "navbar-brand d-flex align-items-center m-0",
  href: "/admin"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/storage/images/brands/logo-banner-white.png"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span class=\"font-weight-bold text-lg\">FinArk</span> ")])], -1 /* HOISTED */);
var _hoisted_3 = {
  "class": "collapse navbar-collapse px-4 w-auto",
  id: "sidenav-collapse-main",
  style: {
    "height": "calc(100vh - 150px)",
    "overflow-x": "hidden"
  }
};
var _hoisted_4 = {
  "class": "navbar-nav"
};
var _hoisted_5 = {
  key: 0,
  "class": "nav-item"
};
var _hoisted_6 = {
  "class": "icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Dashboard", -1 /* HOISTED */);
var _hoisted_8 = {
  "class": "nav-item"
};
var _hoisted_9 = {
  "class": "icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Forum", -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "nav-item mt-2"
};
var _hoisted_12 = {
  "class": "d-flex align-items-center nav-link"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "font-weight-normal text-md ms-2"
}, "FinArk Management", -1 /* HOISTED */);
var _hoisted_14 = {
  "class": "nav-item border-start my-0 pt-2"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Vision & OKR", -1 /* HOISTED */);
var _hoisted_16 = {
  "class": "nav-item border-start my-0 pt-2"
};
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Training courses", -1 /* HOISTED */);
var _hoisted_18 = {
  "class": "nav-item border-start my-0 pt-2"
};
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Product Comparison", -1 /* HOISTED */);
var _hoisted_20 = {
  "class": "nav-item border-start my-0 pt-2"
};
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Contributions", -1 /* HOISTED */);
var _hoisted_22 = {
  key: 1,
  "class": "nav-item mt-2"
};
var _hoisted_23 = {
  "class": "d-flex align-items-center nav-link"
};
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "font-weight-normal text-md ms-2"
}, "Client Management", -1 /* HOISTED */);
var _hoisted_25 = {
  key: 2,
  "class": "nav-item border-start my-0 pt-2"
};
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Appointments", -1 /* HOISTED */);
var _hoisted_27 = {
  key: 3,
  "class": "nav-item border-start my-0 pt-2"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Clients", -1 /* HOISTED */);
var _hoisted_29 = {
  "class": "nav-item mt-2"
};
var _hoisted_30 = {
  key: 0,
  "class": "d-flex align-items-center nav-link"
};
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "font-weight-normal text-md ms-2"
}, "Content Management", -1 /* HOISTED */);
var _hoisted_32 = {
  key: 4,
  "class": "nav-item border-start my-0 pt-2"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Blogs", -1 /* HOISTED */);
var _hoisted_34 = {
  key: 5,
  "class": "nav-item border-start my-0 pt-2"
};
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Events", -1 /* HOISTED */);
var _hoisted_36 = {
  key: 6,
  "class": "nav-item border-start my-0 pt-2"
};
var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Partners", -1 /* HOISTED */);
var _hoisted_38 = {
  key: 7,
  "class": "nav-item mt-2"
};
var _hoisted_39 = {
  "class": "d-flex align-items-center nav-link"
};
var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "font-weight-normal text-md ms-2"
}, "Recruitment Management", -1 /* HOISTED */);
var _hoisted_41 = {
  key: 8,
  "class": "nav-item border-start my-0 pt-2"
};
var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Careers", -1 /* HOISTED */);
var _hoisted_43 = {
  key: 9,
  "class": "nav-item mt-2"
};
var _hoisted_44 = {
  "class": "d-flex align-items-center nav-link"
};
var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "font-weight-normal text-md ms-2"
}, "Access Management", -1 /* HOISTED */);
var _hoisted_46 = {
  key: 10,
  "class": "nav-item border-start my-0 pt-2"
};
var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Users", -1 /* HOISTED */);
var _hoisted_48 = {
  key: 11,
  "class": "nav-item border-start my-0 pt-2"
};
var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Roles", -1 /* HOISTED */);
var _hoisted_50 = {
  key: 12,
  "class": "nav-item border-start my-0 pt-2"
};
var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Permissions", -1 /* HOISTED */);
var _hoisted_52 = {
  "class": "sidenav-footer mx-4"
};
var _hoisted_53 = {
  "class": "d-flex justify-content-center pt-3"
};
var _hoisted_54 = {
  "class": "btn btn-sm btn-danger",
  href: "/signout"
};
var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Sign out", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FontAwesomeIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FontAwesomeIcon");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("aside", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_4, [$setup.helpers.hasRole('admin', 'developer') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "nav-link active",
    href: "/admin/dashboard"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
        icon: "fa-solid fa-gauge",
        "class": "text-white"
      })]), _hoisted_7];
    }),
    _: 1 /* STABLE */
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "nav-link active",
    href: "/admin/forum"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
        icon: "fa-solid fa-comments",
        "class": "text-white"
      })]), _hoisted_10];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-globe"
  }), _hoisted_13])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "nav-link position-relative ms-0 ps-2 py-2",
    href: "/admin/okr"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
        icon: "fa-solid fa-bullseye"
      }), _hoisted_15];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "nav-link position-relative ms-0 ps-2 py-2",
    href: "/admin/courses"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
        icon: "fa-solid fa-film"
      }), _hoisted_17];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "nav-link position-relative ms-0 ps-2 py-2",
    href: "/admin/product-comparison"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
        icon: "fa-solid fa-question-circle"
      }), _hoisted_19];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "nav-link position-relative ms-0 ps-2 py-2",
    href: "/admin/contributions"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
        icon: "fa-solid fa-hands-helping"
      }), _hoisted_21];
    }),
    _: 1 /* STABLE */
  })]), $setup.helpers.hasRole('admin', 'developer') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-user-friends"
  }), _hoisted_24])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.helpers.hasRole('admin', 'developer') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "nav-link position-relative ms-0 ps-2 py-2",
    href: "/admin/appointments"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
        icon: "fa-solid fa-calendar-check"
      }), _hoisted_26];
    }),
    _: 1 /* STABLE */
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.helpers.hasRole('admin', 'developer') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "nav-link position-relative ms-0 ps-2 py-2",
    href: "/admin/clients"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
        icon: "fa-solid fa-user-friends"
      }), _hoisted_28];
    }),
    _: 1 /* STABLE */
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_29, [$setup.helpers.hasRole('admin', 'developer') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-sitemap"
  }), _hoisted_31])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $setup.helpers.hasRole('admin', 'developer') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "nav-link position-relative ms-0 ps-2 py-2",
    href: "/admin/blogs"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
        icon: "fa-solid fa-newspaper"
      }), _hoisted_33];
    }),
    _: 1 /* STABLE */
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.helpers.hasRole('admin', 'developer') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "nav-link position-relative ms-0 ps-2 py-2",
    href: "/admin/events"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
        icon: "fa-solid fa-calendar-days"
      }), _hoisted_35];
    }),
    _: 1 /* STABLE */
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.helpers.hasRole('admin', 'developer') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "nav-link position-relative ms-0 ps-2 py-2",
    href: "/admin/partners"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
        icon: "fa-solid fa-handshake"
      }), _hoisted_37];
    }),
    _: 1 /* STABLE */
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.helpers.hasRole('admin', 'developer') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-users"
  }), _hoisted_40])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.helpers.hasRole('admin', 'developer') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "nav-link position-relative ms-0 ps-2 py-2",
    href: "/admin/careers"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
        icon: "fa-solid fa-user-tie"
      }), _hoisted_42];
    }),
    _: 1 /* STABLE */
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.helpers.hasRole('admin', 'developer') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-key"
  }), _hoisted_45])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.helpers.hasRole('admin', 'developer') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "nav-link position-relative ms-0 ps-2 py-2",
    href: "/admin/users"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
        icon: "fa-solid fa-users"
      }), _hoisted_47];
    }),
    _: 1 /* STABLE */
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.helpers.hasRole('developer') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "nav-link position-relative ms-0 ps-2 py-2",
    href: "/admin/roles"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
        icon: "fa-solid fa-id-badge"
      }), _hoisted_49];
    }),
    _: 1 /* STABLE */
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.helpers.hasRole('developer') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "nav-link position-relative ms-0 ps-2 py-2",
    href: "/admin/permissions"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
        icon: "fa-solid fa-clipboard-check"
      }), _hoisted_51];
    }),
    _: 1 /* STABLE */
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"card\" id=\"sidenavCard\">\r\n                <div class=\"card-body  text-start p-3 w-100\">\r\n                    <div class=\"mb-3\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" class=\"text-primary\" viewBox=\"0 0 24 24\" fill=\"currentColor\" id=\"sidenavCardIcon\">\r\n                        <path d=\"M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z\" />\r\n                        <path d=\"M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z\" />\r\n                        </svg>\r\n                    </div>\r\n                    <div class=\"docs-info\">\r\n                        <h6 class=\"font-weight-bold up mb-2\">Need help?</h6>\r\n                        <p class=\"text-sm font-weight-normal\">Please check our docs.</p>\r\n                        <a href=\"https://www.creative-tim.com/learning-lab/bootstrap/license/corporate-ui-dashboard\" target=\"_blank\" class=\"font-weight-bold text-sm mb-0 icon-move-right mt-auto w-100 mb-0\">\r\n                        Documentation\r\n                        <i class=\"fas fa-arrow-right-long text-sm ms-1\" aria-hidden=\"true\"></i>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-sign-out-alt"
  }), _hoisted_55])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/Footer.vue?vue&type=template&id=048e2eac":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/Footer.vue?vue&type=template&id=048e2eac ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<footer class=\"container-fluid py-5\"><div class=\"container\"><div class=\"row justify-content-xl-between\"><div class=\"col-xl-6 text-center\"><a href=\"./\"><img src=\"/storage/images/brands/logo-banner.png\" height=\"100\"></a></div><div class=\"col-xl-6 pt-md-0 pt-5\"><h2 class=\"finark-text-primary fw-normal text-uppercase text-center fs-3 lh-1 mt-sm-5\">Navigating the Ever-Changing Financial Seas</h2><br><br><h2 class=\"finark-font-bold finark-text-primary text-uppercase text-center\">Keep in touch</h2><div class=\"d-flex align-items-center justify-content-center\"><a class=\"mx-3\" href=\"https://www.linkedin.com/company/finarkgroup/\" target=\"_blank\"><img class=\"w-100 finark-footer-icons\" src=\"/storage/images/icons/linkedin.png\"></a><a class=\"mx-3\" href=\"https://www.instagram.com/finark.advisory/\" target=\"_blank\"><img class=\"w-100 finark-footer-icons\" src=\"/storage/images/icons/instagram.png\"></a><a class=\"mx-3\" href=\"https://www.facebook.com/FinancialArk\" target=\"_blank\"><img class=\"w-100 finark-footer-icons\" src=\"/storage/images/icons/facebook.png\"></a><a class=\"mx-3\" href=\"https://wa.me/6591813260\" target=\"_blank\"><img class=\"w-100 finark-footer-icons\" src=\"/storage/images/icons/whatsapp.png\"></a><a class=\"mx-3\" href=\"https://www.youtube.com/@FinancialArk\" target=\"_blank\"><img class=\"w-100 finark-footer-icons\" src=\"/storage/images/icons/youtube.png\"></a></div><!-- &lt;p class=&quot;text-white font-weight-bold&quot;&gt;\r\n                        MAIN CONTACT: &lt;a class=&quot;finark-default-link text-white&quot; href=&quot;tel:+65 9181 3260&quot;&gt;+65 9181 3260&lt;/a&gt; &lt;a class=&quot;text-success&quot; href=&quot;https://wa.me/6591813260&quot;&gt;&lt;FontAwesomeIcon icon=&quot;fa-brands fa-square-whatsapp&quot; /&gt;&lt;/a&gt;\r\n                    &lt;/p&gt; --><!-- &lt;p class=&quot;text-white font-weight-bold&quot;&gt;\r\n                        Head Office is at 02-312&lt;br&gt;\r\n                        Meeting Rooms at Eagles’ Loft: 02-338 &lt;br&gt;\r\n                        FinArk Group&#39;s Office is at 17-302\r\n                    &lt;/p&gt; --><!-- &lt;div class=&quot;map-responsive&quot;&gt;\r\n                        &lt;iframe src=&quot;https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.791809773056!2d103.85854721373764!3d1.299726862098973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19b10af0bbb5%3A0xdcd29a3d25f3c7c1!2sPromiseLand%20Independent%20Pte%20Ltd!5e0!3m2!1sen!2sph!4v1675578518337!5m2!1sen!2sph&quot; width=&quot;600&quot; height=&quot;450&quot; style=&quot;border:0;&quot; allowfullscreen loading=&quot;lazy&quot; referrerpolicy=&quot;no-referrer-when-downgrade&quot;&gt;&lt;/iframe&gt;\r\n                    &lt;/div&gt; --></div><!-- &lt;div class=&quot;col-xl-6 mt-5 px-lg-7&quot;&gt;\r\n                    &lt;div class=&quot;row align-items-center justify-content-xl-between pt-4 pb-5 px-3 bg-white rounded&quot;&gt;\r\n                        &lt;div class=&quot;col-xl-12&quot;&gt;\r\n                            &lt;h2 class=&quot;text-dark&quot;&gt;PromiseLand&#39;s Head Office&lt;/h2&gt;\r\n                            &lt;div class=&quot;finark-landing-separator rounded mb-2&quot;&gt;&lt;/div&gt;\r\n                            &lt;br&gt;\r\n                            &lt;p class=&quot;text-dark font-weight-bold&quot;&gt;\r\n                                7500A Beach Rd, #02-312&lt;br&gt;\r\n                                The Plaza, Singapore (199591)&lt;br&gt;\r\n                            &lt;/p&gt;\r\n                        &lt;/div&gt;\r\n                        &lt;div class=&quot;trustmark col-4 col-xl-4 bg-white rounded align-items-center d-none d-md-flex&quot;&gt;\r\n                            &lt;a href=&quot;https://www.skillsfuture.gov.sg/employerawards/sme2021&quot; target=&quot;_blank&quot;&gt;\r\n                                &lt;img class=&quot;img-fluid box-shadow-landing rounded&quot; src=&quot;https://synergy.com.sg/packs/media/images/layout/skillsfuture-baef90afd5f7997fa350133c030a15aa.png&quot;&gt;\r\n                            &lt;/a&gt;\r\n                        &lt;/div&gt;\r\n                        &lt;div class=&quot;trustmark col-4 col-xl-4 bg-white rounded align-items-center d-none d-md-flex&quot;&gt;\r\n                            &lt;a href=&quot;https://www.imda.gov.sg/programme-listing/data-protection-trustmark-certification&quot; target=&quot;_blank&quot;&gt;\r\n                                &lt;img class=&quot;img-fluid box-shadow-landing rounded&quot; src=&quot;https://synergy.com.sg/packs/media/images/layout/data-trustmark-d295ff1739f9141c96068b172195f4db.png&quot;&gt;\r\n                        &lt;/a&gt;\r\n                        &lt;/div&gt;\r\n                        &lt;div class=&quot;trustmark col-4 col-xl-4 bg-white rounded align-items-center d-none d-md-flex&quot;&gt;\r\n                            &lt;a href=&quot;https://www.enterprisesg.gov.sg/quality-standards/business-excellence&quot; target=&quot;_blank&quot;&gt;\r\n                                &lt;img class=&quot;img-fluid box-shadow-landing rounded&quot; src=&quot;https://synergy.com.sg/packs/media/images/layout/sqc_star-316d4f87e05bbab8903552168b1d3ebe.png&quot;&gt;\r\n                            &lt;/a&gt;\r\n                        &lt;/div&gt;\r\n                        &lt;div class=&quot;col-6 d-flex d-md-none d-xl-flex&quot;&gt;&lt;a href=&quot;http://www.urs-holdings.com/iso-certification/iso-9001--quality-management-system&quot; target=&quot;_blank&quot;&gt;&lt;img class=&quot;img-fluid p-0 p-md-3 box-shadow-landing&quot; src=&quot;https://synergy.com.sg/packs/media/images/layout/iso_9001-2995e6a58f26896aeb761ba9740a0b2a.png&quot;&gt;&lt;/a&gt;&lt;/div&gt;\r\n                        &lt;div class=&quot;col-6 d-flex d-md-none d-xl-flex&quot;&gt;&lt;a href=&quot;https://www.urs-holdings.com/iso-certification/iso-27001-information-security-management-system-certification&quot; target=&quot;_blank&quot;&gt;&lt;img class=&quot;img-fluid p-0 p-md-3 box-shadow-landing&quot; src=&quot;https://synergy.com.sg/packs/media/images/layout/iso_27001-dae43ea08325442b1934d5234822ac6c.png&quot;&gt;&lt;/a&gt;&lt;/div&gt;\r\n                    &lt;/div&gt;\r\n                &lt;/div&gt; --></div></div></footer>", 1);
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.791733639206!2d103.8583448137375!3d1.2997750620988509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19c72efb115b%3A0xbf68d8eb3c9fdd8f!2sFinArk%20Group%20at%20PromiseLand%20Independent!5e0!3m2!1sen!2sph!4v1677322291963!5m2!1sen!2sph",
  width: "100%",
  height: "450",
  style: {
    "border": "0"
  },
  allowfullscreen: "",
  loading: "lazy",
  referrerpolicy: "no-referrer-when-downgrade"
}, null, -1 /* HOISTED */);
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"container-fluid py-3 finark-bg-default-alt\"><div class=\"container\"><div class=\"row align-items-center justify-content-xl-between\"><div class=\"col-xl-6 d-flex justify-content-center justify-content-xl-start\"><div class=\"copyright text-muted\"> © 2023<a href=\"#\" class=\"font-weight-bold ml-1\" target=\"_blank\">FinArk</a> ⋅ All rights reserved </div></div><div class=\"col-xl-6\"><div class=\"nav nav-footer justify-content-center justify-content-xl-end\">Developed by <a href=\"#\" class=\"font-weight-bold ml-1\" target=\"_blank\">Infinity Solutions</a></div></div></div></div></div>", 1);
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"container-fluid pt-5\" style=\"background-color: #212529 !important;\">\r\n        <div class=\" container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 text-center\">\r\n                    <h2 class=\"finark-font-bold text-white text-uppercase fs-1\">Keep in touch</h2>\r\n                    <div class=\"finark-landing-separator rounded mb-2\" style=\"margin: 0 auto;\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container-fluid py-3 pb-5\" style=\"background-color: #212529 !important;\">\r\n        <div class=\" container\">\r\n            <div class=\"d-flex align-items-center justify-content-center\">\r\n                <a class=\"mx-3\" href=\"https://www.facebook.com/FinancialArk\" target=\"_blank\">\r\n                    <img class=\"w-100 finark-footer-icons\" src=\"/storage/images/icons/facebook.png\">\r\n                </a>\r\n                <a class=\"mx-3\" href=\"https://www.instagram.com/finark.advisory/\" target=\"_blank\">\r\n                    <img class=\"w-100 finark-footer-icons\" src=\"/storage/images/icons/instagram.png\">\r\n                </a>\r\n                <a class=\"mx-3\" href=\"https://www.youtube.com/@FinancialArk\" target=\"_blank\">\r\n                    <img class=\"w-100 finark-footer-icons\" src=\"/storage/images/icons/youtube.png\">\r\n                </a>\r\n                <a class=\"mx-3\" href=\"https://www.linkedin.com/company/finarkgroup/\" target=\"_blank\">\r\n                    <img class=\"w-100 finark-footer-icons\" src=\"/storage/images/icons/linkedin.png\">\r\n                </a>\r\n                <a class=\"mx-3\" href=\"https://wa.me/6591813260\" target=\"_blank\">\r\n                    <img class=\"w-100 finark-footer-icons\" src=\"/storage/images/icons/whatsapp.png\">\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div> "), _hoisted_3], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/Header.vue?vue&type=template&id=25c0929e":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/Header.vue?vue&type=template&id=25c0929e ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<nav class=\"navbar navbar-top navbar-horizontal navbar-expand-lg navbar-dark\" style=\"top:-8px;\"><div class=\"container-xxl container-xl container-lg container-md container-sm px-4\"><a href=\"/\"><img src=\"/storage/images/brands/logo-banner-white.png\" height=\"50\"></a><button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbar-collapse-main\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbar-collapse-main\"><!-- Collapse header --><div class=\"navbar-collapse-header d-lg-none\"><div class=\"row\"><div class=\"col-6 collapse-brand\"><a href=\"/\"><img src=\"/storage/images/brands/logo-banner.png\"></a></div><div class=\"col-6 collapse-close\"><button type=\"button\" class=\"navbar-toggler\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbar-collapse-main\" aria-controls=\"sidenav-main\" aria-expanded=\"false\" aria-label=\"Toggle sidenav\"><span></span><span></span></button></div></div></div><!-- Navbar items --><ul class=\"navbar-nav ml-auto\"><li class=\"nav-item\"><a class=\"nav-link nav-link-icon\" href=\"/\"><span class=\"nav-link-inner--text fw-bold finark-text-shadow-nav\">Home</span></a></li><li class=\"nav-item\"><a class=\"nav-link nav-link-icon\" href=\"/about\"><span class=\"nav-link-inner--text fw-bold finark-text-shadow-nav\">About Us</span></a></li><li class=\"nav-item\"><a class=\"nav-link nav-link-icon\" href=\"/services\"><span class=\"nav-link-inner--text fw-bold finark-text-shadow-nav\">Services</span></a></li><li class=\"nav-item\"><a class=\"nav-link nav-link-icon\" href=\"/events\"><span class=\"nav-link-inner--text fw-bold finark-text-shadow-nav\">Events</span></a></li><li class=\"nav-item\"><a class=\"nav-link nav-link-icon\" href=\"/blogs\"><span class=\"nav-link-inner--text fw-bold finark-text-shadow-nav\">Blogs</span></a></li><li class=\"nav-item\"><a class=\"nav-link nav-link-icon\" href=\"/careers\"><span class=\"nav-link-inner--text fw-bold finark-text-shadow-nav\">Careers</span></a></li><!-- &lt;li class=&quot;nav-item&quot;&gt;\r\n                        &lt;a class=&quot;nav-link nav-link-icon&quot; href=&quot;/contacts&quot;&gt;\r\n                            &lt;span class=&quot;nav-link-inner--text&quot;&gt;Contact Us&lt;/span&gt;\r\n                        &lt;/a&gt;\r\n                    &lt;/li&gt;\r\n                    &lt;li class=&quot;nav-item bg-white rounded&quot;&gt;\r\n                        &lt;a class=&quot;nav-link nav-link-icon&quot; href=&quot;/signin&quot;&gt;\r\n                            &lt;FontAwesomeIcon icon=&quot;fa-solid fa-right-to-bracket&quot; class=&quot; text-dark&quot; /&gt;\r\n                            &lt;span class=&quot;nav-link-inner--text text-dark&quot;&gt;Sign in&lt;/span&gt;\r\n                        &lt;/a&gt;\r\n                    &lt;/li&gt; --></ul></div></div></nav>", 1);
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"container-fluid finark-bg-primary\">\r\n        <div class=\"container pt-2 pb-1 px-4 text-white d-flex justify-content-end align-items-center\">\r\n            <span class=\"me-2 fst-italic mb-1\" style=\"font-size: 0.7rem;\">Tel: <a class=\"finark-default-link text-white\" href=\"tel:+65 9181 3260\"><b>+65 9181 3260</b></a></span>\r\n            <a class=\"finark-default-link text-white me-1\" href=\"https://www.facebook.com/FinancialArk\" target=\"_blank\">\r\n                <FontAwesomeIcon icon=\"fa-brands fa-facebook-square\" class=\"fs-5\" />\r\n            </a>\r\n            <a class=\"finark-default-link text-white me-1\" href=\"https://www.instagram.com/finark.advisory/\" target=\"_blank\">\r\n                <FontAwesomeIcon icon=\"fa-brands fa-instagram-square\" class=\"fs-5\" />\r\n            </a>\r\n            <a class=\"finark-default-link text-white me-1\" href=\"https://www.youtube.com/@FinancialArk\" target=\"_blank\">\r\n                <FontAwesomeIcon icon=\"fa-brands fa-youtube-square\" class=\"fs-5\" />\r\n            </a>\r\n            <a class=\"finark-default-link text-white me-1\" href=\"https://www.linkedin.com/company/finarkgroup/\" target=\"_blank\">\r\n                <FontAwesomeIcon icon=\"fa-brands fa-linkedin\" class=\"fs-5\" />\r\n            </a>\r\n            <a class=\"finark-default-link text-white me-1\" href=\"https://wa.me/6591813260\" target=\"_blank\">\r\n                <FontAwesomeIcon icon=\"fa-brands fa-whatsapp-square\" class=\"fs-5\" />\r\n            </a>\r\n        </div>\r\n    </div> "), _hoisted_1], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/Shared/Helpers/Functions.js":
/*!**************************************************!*\
  !*** ./resources/js/Shared/Helpers/Functions.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");

var page = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.usePage)();
var hasRole = function hasRole() {
  if (page.props.auth.user.roles) {
    for (var _len = arguments.length, roles = new Array(_len), _key = 0; _key < _len; _key++) {
      roles[_key] = arguments[_key];
    }
    return roles.includes(page.props.auth.user.roles.name);
  }
  return false;
};
var deSlug = function deSlug(slug) {
  var words = slug.split('-');
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return words.join(' ');
};
var capitalized = function capitalized(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
var toUserInitial = function toUserInitial(string) {
  if (!string) {
    return false;
  }
  var strings = string.split(" ");
  return strings.length > 1 ? strings[0][0].toUpperCase() + strings[1][0].toUpperCase() : strings[0][0].toUpperCase();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  hasRole: hasRole,
  deSlug: deSlug,
  capitalized: capitalized,
  toUserInitial: toUserInitial
});

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Shared_Layouts_Landing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shared/Layouts/Landing */ "./resources/js/Shared/Layouts/Landing.vue");
/* harmony import */ var _Shared_Layouts_CorporateUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shared/Layouts/CorporateUI */ "./resources/js/Shared/Layouts/CorporateUI.vue");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.mjs");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.mjs");
/* harmony import */ var _ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-vue */ "./node_modules/@ckeditor/ckeditor5-vue/dist/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _vueup_vue_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vueup/vue-quill */ "./node_modules/@vueup/vue-quill/dist/vue-quill.esm-bundler.js");
/* harmony import */ var _vueup_vue_quill_dist_vue_quill_snow_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vueup/vue-quill/dist/vue-quill.snow.css */ "./node_modules/@vueup/vue-quill/dist/vue-quill.snow.css");
/* harmony import */ var vue_plyr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-plyr */ "./node_modules/vue-plyr/dist/vue-plyr.esm.js");
/* harmony import */ var vue_plyr_dist_vue_plyr_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-plyr/dist/vue-plyr.css */ "./node_modules/vue-plyr/dist/vue-plyr.css");
/* harmony import */ var _videojs_player_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @videojs-player/vue */ "./node_modules/@videojs-player/vue/dist/videojs-player.esm.js");
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! video.js/dist/video-js.css */ "./node_modules/video.js/dist/video-js.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









// import axios from 'axios';






_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__.library.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faRightToBracket, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faAngleLeft, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faAngleRight, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faLocationDot, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faMoneyBillWave, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faBriefcase, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faMoneyBillTrendUp, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faUniversalAccess, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faPersonCane, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faHandsHoldingChild, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faHouseChimney, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faFileInvoice, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faWhatsappSquare, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faFacebook, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faInstagramSquare, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faSquareYoutube, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faLinkedin, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faHeart, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faArrowTrendUp, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faChartColumn, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faCity, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faPeopleGroup, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faGlobe, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faCaretLeft, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faCaretRight, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faBars, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faBarsStaggered, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faGauge, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faUsers, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faCog, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faHandshake, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faAnglesRight, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faBell, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faCalendarCheck, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faNewspaper, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faUserTie, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faCalendarDays, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faSitemap, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faSackDollar, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faPiggyBank, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faEye, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faCheck, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faBan, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faPlus, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faEdit, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faEnvelope, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faWhatsapp, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faMessage, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faArrowLeftLong, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faUserPlus, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faIdBadge, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faKey, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faClipboardCheck, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faFilm, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faInfoCircle, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faIdCard, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faSignOutAlt, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faUserFriends, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faClock, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faUserCheck, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faUserTimes, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faCalendar, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faPlayCircle, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faLongArrowAltLeft, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faLongArrowAltRight, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faComments, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faBullseye, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faHandsHelping, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faQuestionCircle, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faUpload, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faCheckCircle, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faVideo);
(0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.createInertiaApp)({
  resolve: function () {
    var _resolve = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(name) {
      var page, _page$layout, _page$layout2;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __webpack_require__("./resources/js/Pages lazy recursive ^\\.\\/.*$")("./".concat(name));
          case 2:
            page = _context.sent["default"];
            if (name.startsWith("Admin/")) {
              (_page$layout = page.layout) !== null && _page$layout !== void 0 ? _page$layout : page.layout = _Shared_Layouts_CorporateUI__WEBPACK_IMPORTED_MODULE_3__["default"];
            } else {
              (_page$layout2 = page.layout) !== null && _page$layout2 !== void 0 ? _page$layout2 : page.layout = _Shared_Layouts_Landing__WEBPACK_IMPORTED_MODULE_2__["default"];
            }
            return _context.abrupt("return", page);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function resolve(_x) {
      return _resolve.apply(this, arguments);
    }
    return resolve;
  }(),
  setup: function setup(_ref) {
    var el = _ref.el,
      App = _ref.App,
      props = _ref.props,
      plugin = _ref.plugin;
    var VueApp = (0,vue__WEBPACK_IMPORTED_MODULE_1__.createApp)({
      render: function render() {
        return (0,vue__WEBPACK_IMPORTED_MODULE_1__.h)(App, props);
      }
    });

    // VueApp.config.globalProperties.$http = axios;
    // VueApp.config.globalProperties.$route = route

    VueApp.use(plugin).use((_ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_6___default())).use(vue_plyr__WEBPACK_IMPORTED_MODULE_9__["default"], {
      plyr: {}
    }).use(_videojs_player_vue__WEBPACK_IMPORTED_MODULE_11__["default"]).component('QuillEditor', _vueup_vue_quill__WEBPACK_IMPORTED_MODULE_7__.QuillEditor).component("Link", _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.Link).component("Head", _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.Head).component('FontAwesomeIcon', _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon).mount(el);
  },
  title: function title(_title) {
    return "".concat(_title, " FinArk Official Website");
  },
  progress: false
  // progress: {
  //     color: '#043a54',
  // }
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/custom.scss":
/*!************************************!*\
  !*** ./resources/sass/custom.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/admin.scss":
/*!***********************************!*\
  !*** ./resources/sass/admin.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/Shared/Components/FeedbackModal.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Shared/Components/FeedbackModal.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FeedbackModal_vue_vue_type_template_id_1c34e4ab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeedbackModal.vue?vue&type=template&id=1c34e4ab */ "./resources/js/Shared/Components/FeedbackModal.vue?vue&type=template&id=1c34e4ab");
/* harmony import */ var _FeedbackModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackModal.vue?vue&type=script&lang=js */ "./resources/js/Shared/Components/FeedbackModal.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FeedbackModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FeedbackModal_vue_vue_type_template_id_1c34e4ab__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Components/FeedbackModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Layouts/CorporateUI.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Shared/Layouts/CorporateUI.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CorporateUI_vue_vue_type_template_id_250a2ee7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CorporateUI.vue?vue&type=template&id=250a2ee7 */ "./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=template&id=250a2ee7");
/* harmony import */ var _CorporateUI_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CorporateUI.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CorporateUI_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CorporateUI_vue_vue_type_template_id_250a2ee7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Layouts/CorporateUI.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Layouts/Landing.vue":
/*!*************************************************!*\
  !*** ./resources/js/Shared/Layouts/Landing.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Landing_vue_vue_type_template_id_6e667745__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Landing.vue?vue&type=template&id=6e667745 */ "./resources/js/Shared/Layouts/Landing.vue?vue&type=template&id=6e667745");
/* harmony import */ var _Landing_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Landing.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Shared/Layouts/Landing.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Landing_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Landing_vue_vue_type_template_id_6e667745__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Layouts/Landing.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/AdminNav.vue":
/*!***************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/AdminNav.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminNav_vue_vue_type_template_id_c9e9de4a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminNav.vue?vue&type=template&id=c9e9de4a */ "./resources/js/Shared/Partials/CorporateUI/AdminNav.vue?vue&type=template&id=c9e9de4a");
/* harmony import */ var _AdminNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminNav.vue?vue&type=script&lang=js */ "./resources/js/Shared/Partials/CorporateUI/AdminNav.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AdminNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AdminNav_vue_vue_type_template_id_c9e9de4a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Partials/CorporateUI/AdminNav.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/Navbar.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/Navbar.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navbar_vue_vue_type_template_id_2d2ea757__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=2d2ea757 */ "./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=template&id=2d2ea757");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js */ "./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Navbar_vue_vue_type_template_id_2d2ea757__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Partials/CorporateUI/Navbar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/NavbarAlt.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/NavbarAlt.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavbarAlt_vue_vue_type_template_id_77f7b2fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavbarAlt.vue?vue&type=template&id=77f7b2fc */ "./resources/js/Shared/Partials/CorporateUI/NavbarAlt.vue?vue&type=template&id=77f7b2fc");
/* harmony import */ var _NavbarAlt_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarAlt.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Shared/Partials/CorporateUI/NavbarAlt.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_NavbarAlt_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NavbarAlt_vue_vue_type_template_id_77f7b2fc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Partials/CorporateUI/NavbarAlt.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/Sidebar.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/Sidebar.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_vue_vue_type_template_id_2c8335b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=2c8335b6 */ "./resources/js/Shared/Partials/CorporateUI/Sidebar.vue?vue&type=template&id=2c8335b6");
/* harmony import */ var _Sidebar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Shared/Partials/CorporateUI/Sidebar.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Sidebar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Sidebar_vue_vue_type_template_id_2c8335b6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Partials/CorporateUI/Sidebar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Partials/Footer.vue":
/*!*************************************************!*\
  !*** ./resources/js/Shared/Partials/Footer.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_048e2eac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=048e2eac */ "./resources/js/Shared/Partials/Footer.vue?vue&type=template&id=048e2eac");
/* harmony import */ var C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Footer_vue_vue_type_template_id_048e2eac__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Partials/Footer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Partials/Header.vue":
/*!*************************************************!*\
  !*** ./resources/js/Shared/Partials/Header.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_25c0929e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=25c0929e */ "./resources/js/Shared/Partials/Header.vue?vue&type=template&id=25c0929e");
/* harmony import */ var C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Header_vue_vue_type_template_id_25c0929e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Partials/Header.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Components/FeedbackModal.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Shared/Components/FeedbackModal.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FeedbackModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FeedbackModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FeedbackModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Components/FeedbackModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CorporateUI_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CorporateUI_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CorporateUI.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Layouts/Landing.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/Shared/Layouts/Landing.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Landing_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Landing_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Landing.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/Landing.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/AdminNav.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/AdminNav.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminNav.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/AdminNav.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navbar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/NavbarAlt.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/NavbarAlt.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavbarAlt_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavbarAlt_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavbarAlt.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/NavbarAlt.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/Sidebar.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/Sidebar.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Sidebar.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Components/FeedbackModal.vue?vue&type=template&id=1c34e4ab":
/*!****************************************************************************************!*\
  !*** ./resources/js/Shared/Components/FeedbackModal.vue?vue&type=template&id=1c34e4ab ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FeedbackModal_vue_vue_type_template_id_1c34e4ab__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FeedbackModal_vue_vue_type_template_id_1c34e4ab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FeedbackModal.vue?vue&type=template&id=1c34e4ab */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Components/FeedbackModal.vue?vue&type=template&id=1c34e4ab");


/***/ }),

/***/ "./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=template&id=250a2ee7":
/*!***********************************************************************************!*\
  !*** ./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=template&id=250a2ee7 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CorporateUI_vue_vue_type_template_id_250a2ee7__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CorporateUI_vue_vue_type_template_id_250a2ee7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CorporateUI.vue?vue&type=template&id=250a2ee7 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=template&id=250a2ee7");


/***/ }),

/***/ "./resources/js/Shared/Layouts/Landing.vue?vue&type=template&id=6e667745":
/*!*******************************************************************************!*\
  !*** ./resources/js/Shared/Layouts/Landing.vue?vue&type=template&id=6e667745 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Landing_vue_vue_type_template_id_6e667745__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Landing_vue_vue_type_template_id_6e667745__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Landing.vue?vue&type=template&id=6e667745 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/Landing.vue?vue&type=template&id=6e667745");


/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/AdminNav.vue?vue&type=template&id=c9e9de4a":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/AdminNav.vue?vue&type=template&id=c9e9de4a ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminNav_vue_vue_type_template_id_c9e9de4a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminNav_vue_vue_type_template_id_c9e9de4a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminNav.vue?vue&type=template&id=c9e9de4a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/AdminNav.vue?vue&type=template&id=c9e9de4a");


/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=template&id=2d2ea757":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=template&id=2d2ea757 ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_template_id_2d2ea757__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_template_id_2d2ea757__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navbar.vue?vue&type=template&id=2d2ea757 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=template&id=2d2ea757");


/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/NavbarAlt.vue?vue&type=template&id=77f7b2fc":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/NavbarAlt.vue?vue&type=template&id=77f7b2fc ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavbarAlt_vue_vue_type_template_id_77f7b2fc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavbarAlt_vue_vue_type_template_id_77f7b2fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavbarAlt.vue?vue&type=template&id=77f7b2fc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/NavbarAlt.vue?vue&type=template&id=77f7b2fc");


/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/Sidebar.vue?vue&type=template&id=2c8335b6":
/*!********************************************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/Sidebar.vue?vue&type=template&id=2c8335b6 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_template_id_2c8335b6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_template_id_2c8335b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar.vue?vue&type=template&id=2c8335b6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Sidebar.vue?vue&type=template&id=2c8335b6");


/***/ }),

/***/ "./resources/js/Shared/Partials/Footer.vue?vue&type=template&id=048e2eac":
/*!*******************************************************************************!*\
  !*** ./resources/js/Shared/Partials/Footer.vue?vue&type=template&id=048e2eac ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_048e2eac__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_048e2eac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=template&id=048e2eac */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/Footer.vue?vue&type=template&id=048e2eac");


/***/ }),

/***/ "./resources/js/Shared/Partials/Header.vue?vue&type=template&id=25c0929e":
/*!*******************************************************************************!*\
  !*** ./resources/js/Shared/Partials/Header.vue?vue&type=template&id=25c0929e ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_25c0929e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_25c0929e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=template&id=25c0929e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/Header.vue?vue&type=template&id=25c0929e");


/***/ }),

/***/ "./resources/js/Pages lazy recursive ^\\.\\/.*$":
/*!************************************************************!*\
  !*** ./resources/js/Pages/ lazy ^\.\/.*$ namespace object ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./About": [
		"./resources/js/Pages/About.vue",
		"resources_js_Pages_About_vue"
	],
	"./About.vue": [
		"./resources/js/Pages/About.vue",
		"resources_js_Pages_About_vue"
	],
	"./Admin/Appointments/Index": [
		"./resources/js/Pages/Admin/Appointments/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Appointments_Index_vue"
	],
	"./Admin/Appointments/Index.vue": [
		"./resources/js/Pages/Admin/Appointments/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Appointments_Index_vue"
	],
	"./Admin/Appointments/Show": [
		"./resources/js/Pages/Admin/Appointments/Show.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Appointments_Show_vue"
	],
	"./Admin/Appointments/Show.vue": [
		"./resources/js/Pages/Admin/Appointments/Show.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Appointments_Show_vue"
	],
	"./Admin/Blogs/CKEDITOR": [
		"./resources/js/Pages/Admin/Blogs/CKEDITOR.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Blogs_CKEDITOR_vue"
	],
	"./Admin/Blogs/CKEDITOR.vue": [
		"./resources/js/Pages/Admin/Blogs/CKEDITOR.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Blogs_CKEDITOR_vue"
	],
	"./Admin/Blogs/Create": [
		"./resources/js/Pages/Admin/Blogs/Create.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Blogs_Create_vue"
	],
	"./Admin/Blogs/Create.vue": [
		"./resources/js/Pages/Admin/Blogs/Create.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Blogs_Create_vue"
	],
	"./Admin/Blogs/Index": [
		"./resources/js/Pages/Admin/Blogs/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Blogs_Index_vue"
	],
	"./Admin/Blogs/Index.vue": [
		"./resources/js/Pages/Admin/Blogs/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Blogs_Index_vue"
	],
	"./Admin/Careers/Create": [
		"./resources/js/Pages/Admin/Careers/Create.vue",
		"resources_js_Pages_Admin_Careers_Create_vue"
	],
	"./Admin/Careers/Create.vue": [
		"./resources/js/Pages/Admin/Careers/Create.vue",
		"resources_js_Pages_Admin_Careers_Create_vue"
	],
	"./Admin/Careers/Index": [
		"./resources/js/Pages/Admin/Careers/Index.vue",
		"resources_js_Pages_Admin_Careers_Index_vue"
	],
	"./Admin/Careers/Index.vue": [
		"./resources/js/Pages/Admin/Careers/Index.vue",
		"resources_js_Pages_Admin_Careers_Index_vue"
	],
	"./Admin/Clients/Index": [
		"./resources/js/Pages/Admin/Clients/Index.vue",
		"resources_js_Pages_Admin_Clients_Index_vue"
	],
	"./Admin/Clients/Index.vue": [
		"./resources/js/Pages/Admin/Clients/Index.vue",
		"resources_js_Pages_Admin_Clients_Index_vue"
	],
	"./Admin/Courses/Create": [
		"./resources/js/Pages/Admin/Courses/Create.vue",
		"resources_js_Pages_Admin_Courses_Create_vue"
	],
	"./Admin/Courses/Create.vue": [
		"./resources/js/Pages/Admin/Courses/Create.vue",
		"resources_js_Pages_Admin_Courses_Create_vue"
	],
	"./Admin/Courses/Edit": [
		"./resources/js/Pages/Admin/Courses/Edit.vue",
		"resources_js_Pages_Admin_Courses_Edit_vue"
	],
	"./Admin/Courses/Edit.vue": [
		"./resources/js/Pages/Admin/Courses/Edit.vue",
		"resources_js_Pages_Admin_Courses_Edit_vue"
	],
	"./Admin/Courses/Index": [
		"./resources/js/Pages/Admin/Courses/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Courses_Index_vue"
	],
	"./Admin/Courses/Index.vue": [
		"./resources/js/Pages/Admin/Courses/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Courses_Index_vue"
	],
	"./Admin/Courses/Show": [
		"./resources/js/Pages/Admin/Courses/Show.vue",
		"resources_js_Pages_Admin_Courses_Show_vue"
	],
	"./Admin/Courses/Show.vue": [
		"./resources/js/Pages/Admin/Courses/Show.vue",
		"resources_js_Pages_Admin_Courses_Show_vue"
	],
	"./Admin/Dashboard/Index": [
		"./resources/js/Pages/Admin/Dashboard/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Dashboard_Index_vue"
	],
	"./Admin/Dashboard/Index.vue": [
		"./resources/js/Pages/Admin/Dashboard/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Dashboard_Index_vue"
	],
	"./Admin/Forum/Index": [
		"./resources/js/Pages/Admin/Forum/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Forum_Index_vue"
	],
	"./Admin/Forum/Index.vue": [
		"./resources/js/Pages/Admin/Forum/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Forum_Index_vue"
	],
	"./Admin/Home": [
		"./resources/js/Pages/Admin/Home.vue",
		"resources_js_Pages_Admin_Home_vue"
	],
	"./Admin/Home.vue": [
		"./resources/js/Pages/Admin/Home.vue",
		"resources_js_Pages_Admin_Home_vue"
	],
	"./Admin/Partners/Create": [
		"./resources/js/Pages/Admin/Partners/Create.vue",
		"resources_js_Pages_Admin_Partners_Create_vue"
	],
	"./Admin/Partners/Create.vue": [
		"./resources/js/Pages/Admin/Partners/Create.vue",
		"resources_js_Pages_Admin_Partners_Create_vue"
	],
	"./Admin/Partners/Index": [
		"./resources/js/Pages/Admin/Partners/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Partners_Index_vue"
	],
	"./Admin/Partners/Index.vue": [
		"./resources/js/Pages/Admin/Partners/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Partners_Index_vue"
	],
	"./Admin/Users/Create": [
		"./resources/js/Pages/Admin/Users/Create.vue",
		"resources_js_Pages_Admin_Users_Create_vue"
	],
	"./Admin/Users/Create.vue": [
		"./resources/js/Pages/Admin/Users/Create.vue",
		"resources_js_Pages_Admin_Users_Create_vue"
	],
	"./Admin/Users/Edit": [
		"./resources/js/Pages/Admin/Users/Edit.vue",
		"resources_js_Pages_Admin_Users_Edit_vue"
	],
	"./Admin/Users/Edit.vue": [
		"./resources/js/Pages/Admin/Users/Edit.vue",
		"resources_js_Pages_Admin_Users_Edit_vue"
	],
	"./Admin/Users/Index": [
		"./resources/js/Pages/Admin/Users/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Users_Index_vue"
	],
	"./Admin/Users/Index.vue": [
		"./resources/js/Pages/Admin/Users/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Users_Index_vue"
	],
	"./Admin/Users/Show": [
		"./resources/js/Pages/Admin/Users/Show.vue",
		"resources_js_Pages_Admin_Users_Show_vue"
	],
	"./Admin/Users/Show.vue": [
		"./resources/js/Pages/Admin/Users/Show.vue",
		"resources_js_Pages_Admin_Users_Show_vue"
	],
	"./Admin/Videos/Chunks": [
		"./resources/js/Pages/Admin/Videos/Chunks.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Videos_Chunks_vue"
	],
	"./Admin/Videos/Chunks.vue": [
		"./resources/js/Pages/Admin/Videos/Chunks.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Videos_Chunks_vue"
	],
	"./Admin/Videos/Create": [
		"./resources/js/Pages/Admin/Videos/Create.vue",
		"resources_js_Pages_Admin_Videos_Create_vue"
	],
	"./Admin/Videos/Create.vue": [
		"./resources/js/Pages/Admin/Videos/Create.vue",
		"resources_js_Pages_Admin_Videos_Create_vue"
	],
	"./Admin/Videos/Edit": [
		"./resources/js/Pages/Admin/Videos/Edit.vue",
		"resources_js_Pages_Admin_Videos_Edit_vue"
	],
	"./Admin/Videos/Edit.vue": [
		"./resources/js/Pages/Admin/Videos/Edit.vue",
		"resources_js_Pages_Admin_Videos_Edit_vue"
	],
	"./Admin/Videos/Show": [
		"./resources/js/Pages/Admin/Videos/Show.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Videos_Show_vue"
	],
	"./Admin/Videos/Show.vue": [
		"./resources/js/Pages/Admin/Videos/Show.vue",
		"/js/vendor",
		"resources_js_Pages_Admin_Videos_Show_vue"
	],
	"./Auth/SignIn": [
		"./resources/js/Pages/Auth/SignIn.vue",
		"resources_js_Pages_Auth_SignIn_vue"
	],
	"./Auth/SignIn.vue": [
		"./resources/js/Pages/Auth/SignIn.vue",
		"resources_js_Pages_Auth_SignIn_vue"
	],
	"./Blogs": [
		"./resources/js/Pages/Blogs.vue",
		"resources_js_Pages_Blogs_vue"
	],
	"./Blogs.vue": [
		"./resources/js/Pages/Blogs.vue",
		"resources_js_Pages_Blogs_vue"
	],
	"./Careers": [
		"./resources/js/Pages/Careers.vue",
		"resources_js_Pages_Careers_vue"
	],
	"./Careers.vue": [
		"./resources/js/Pages/Careers.vue",
		"resources_js_Pages_Careers_vue"
	],
	"./Contact": [
		"./resources/js/Pages/Contact.vue",
		"resources_js_Pages_Contact_vue"
	],
	"./Contact.vue": [
		"./resources/js/Pages/Contact.vue",
		"resources_js_Pages_Contact_vue"
	],
	"./Event": [
		"./resources/js/Pages/Event.vue",
		"resources_js_Pages_Event_vue"
	],
	"./Event.vue": [
		"./resources/js/Pages/Event.vue",
		"resources_js_Pages_Event_vue"
	],
	"./Events": [
		"./resources/js/Pages/Events.vue",
		"resources_js_Pages_Events_vue"
	],
	"./Events.vue": [
		"./resources/js/Pages/Events.vue",
		"resources_js_Pages_Events_vue"
	],
	"./Landing": [
		"./resources/js/Pages/Landing.vue",
		"resources_js_Pages_Landing_vue"
	],
	"./Landing.vue": [
		"./resources/js/Pages/Landing.vue",
		"resources_js_Pages_Landing_vue"
	],
	"./Partners": [
		"./resources/js/Pages/Partners.vue",
		"resources_js_Pages_Partners_vue"
	],
	"./Partners.vue": [
		"./resources/js/Pages/Partners.vue",
		"resources_js_Pages_Partners_vue"
	],
	"./Service": [
		"./resources/js/Pages/Service.vue",
		"resources_js_Pages_Service_vue"
	],
	"./Service.vue": [
		"./resources/js/Pages/Service.vue",
		"resources_js_Pages_Service_vue"
	],
	"./Services": [
		"./resources/js/Pages/Services.vue",
		"resources_js_Pages_Services_vue"
	],
	"./Services.vue": [
		"./resources/js/Pages/Services.vue",
		"resources_js_Pages_Services_vue"
	],
	"./Services/BusinessContinuity": [
		"./resources/js/Pages/Services/BusinessContinuity.vue",
		"resources_js_Pages_Services_BusinessContinuity_vue"
	],
	"./Services/BusinessContinuity.vue": [
		"./resources/js/Pages/Services/BusinessContinuity.vue",
		"resources_js_Pages_Services_BusinessContinuity_vue"
	],
	"./Services/EstatePlanning": [
		"./resources/js/Pages/Services/EstatePlanning.vue",
		"resources_js_Pages_Services_EstatePlanning_vue"
	],
	"./Services/EstatePlanning.vue": [
		"./resources/js/Pages/Services/EstatePlanning.vue",
		"resources_js_Pages_Services_EstatePlanning_vue"
	],
	"./Services/FinancialPlanningAdults": [
		"./resources/js/Pages/Services/FinancialPlanningAdults.vue",
		"resources_js_Pages_Services_FinancialPlanningAdults_vue"
	],
	"./Services/FinancialPlanningAdults.vue": [
		"./resources/js/Pages/Services/FinancialPlanningAdults.vue",
		"resources_js_Pages_Services_FinancialPlanningAdults_vue"
	],
	"./Services/FinancialPlanningChildren": [
		"./resources/js/Pages/Services/FinancialPlanningChildren.vue",
		"resources_js_Pages_Services_FinancialPlanningChildren_vue"
	],
	"./Services/FinancialPlanningChildren.vue": [
		"./resources/js/Pages/Services/FinancialPlanningChildren.vue",
		"resources_js_Pages_Services_FinancialPlanningChildren_vue"
	],
	"./Services/GeneralInsurance": [
		"./resources/js/Pages/Services/GeneralInsurance.vue",
		"resources_js_Pages_Services_GeneralInsurance_vue"
	],
	"./Services/GeneralInsurance.vue": [
		"./resources/js/Pages/Services/GeneralInsurance.vue",
		"resources_js_Pages_Services_GeneralInsurance_vue"
	],
	"./Services/InsurancePortfolioReview": [
		"./resources/js/Pages/Services/InsurancePortfolioReview.vue",
		"resources_js_Pages_Services_InsurancePortfolioReview_vue"
	],
	"./Services/InsurancePortfolioReview.vue": [
		"./resources/js/Pages/Services/InsurancePortfolioReview.vue",
		"resources_js_Pages_Services_InsurancePortfolioReview_vue"
	],
	"./Services/InvestmentAdvisory": [
		"./resources/js/Pages/Services/InvestmentAdvisory.vue",
		"resources_js_Pages_Services_InvestmentAdvisory_vue"
	],
	"./Services/InvestmentAdvisory.vue": [
		"./resources/js/Pages/Services/InvestmentAdvisory.vue",
		"resources_js_Pages_Services_InvestmentAdvisory_vue"
	],
	"./Services/LoanAdvisory": [
		"./resources/js/Pages/Services/LoanAdvisory.vue",
		"resources_js_Pages_Services_LoanAdvisory_vue"
	],
	"./Services/LoanAdvisory.vue": [
		"./resources/js/Pages/Services/LoanAdvisory.vue",
		"resources_js_Pages_Services_LoanAdvisory_vue"
	],
	"./Services/RetirementPlanning": [
		"./resources/js/Pages/Services/RetirementPlanning.vue",
		"resources_js_Pages_Services_RetirementPlanning_vue"
	],
	"./Services/RetirementPlanning.vue": [
		"./resources/js/Pages/Services/RetirementPlanning.vue",
		"resources_js_Pages_Services_RetirementPlanning_vue"
	],
	"./Services/SavingsAndInvestmentPlans": [
		"./resources/js/Pages/Services/SavingsAndInvestmentPlans.vue",
		"resources_js_Pages_Services_SavingsAndInvestmentPlans_vue"
	],
	"./Services/SavingsAndInvestmentPlans.vue": [
		"./resources/js/Pages/Services/SavingsAndInvestmentPlans.vue",
		"resources_js_Pages_Services_SavingsAndInvestmentPlans_vue"
	],
	"./SignIn": [
		"./resources/js/Pages/SignIn.vue",
		"resources_js_Pages_SignIn_vue"
	],
	"./SignIn.vue": [
		"./resources/js/Pages/SignIn.vue",
		"resources_js_Pages_SignIn_vue"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/Pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "?6298":
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?2128":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/admin","css/custom","css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/sass/app.scss"), __webpack_exec__("./resources/sass/custom.scss"), __webpack_exec__("./resources/sass/admin.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);