"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_SignIn_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SignIn.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SignIn.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Partials_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Shared/Partials/Header */ "./resources/js/Shared/Partials/Header.vue");
/* harmony import */ var _Shared_Partials_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Shared/Partials/Footer */ "./resources/js/Shared/Partials/Footer.vue");
/* harmony import */ var _Shared_Layouts_LandingAlt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Shared/Layouts/LandingAlt */ "./resources/js/Shared/Layouts/LandingAlt.vue");



var __default__ = {
  layout: _Shared_Layouts_LandingAlt__WEBPACK_IMPORTED_MODULE_2__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/Object.assign(__default__, {
  __name: 'SignIn',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var __returned__ = {
      get LandingAlt() {
        return _Shared_Layouts_LandingAlt__WEBPACK_IMPORTED_MODULE_2__["default"];
      },
      get Header() {
        return _Shared_Partials_Header__WEBPACK_IMPORTED_MODULE_0__["default"];
      },
      get Footer() {
        return _Shared_Partials_Footer__WEBPACK_IMPORTED_MODULE_1__["default"];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/LandingAlt.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/LandingAlt.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/Object.assign(__default__, {
  __name: 'LandingAlt',
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SignIn.vue?vue&type=template&id=00dd51ab":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SignIn.vue?vue&type=template&id=00dd51ab ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "main-content"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[0] || (_cache[0] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Sign in ⋅ FinArk ⋅ Navigating the Ever-Changing Financial Seas", -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
        rel: "canonical",
        href: "http://fin-ark.com/"
      }, null, -1 /* HOISTED */)]);
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Header"])]), _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"container-fluid py-5\"><div class=\"container p-0 p-lg-5\"><div class=\"d-flex justify-content-center\"><form class=\"finark-bg-signin finark-signin-form\"><h2 class=\"text-white text-uppercase mb-4\">Sign In</h2><div class=\"form-group\"><input type=\"email\" class=\"form-control\" placeholder=\"Email\"></div><div class=\"form-group\"><input type=\"password\" class=\"form-control\" placeholder=\"Password\"></div><div class=\"form-group text-center\"><button class=\"btn finark-bg-primary text-white\">Sign in</button></div></form></div></div></div>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Footer"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/LandingAlt.vue?vue&type=template&id=41f227d4":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/LandingAlt.vue?vue&type=template&id=41f227d4 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "finark-bg-default"
};
var _hoisted_2 = {
  "class": "main-content"
};
var _hoisted_3 = {
  "class": "header py-md-5 py-2 bg-landing-image-7"
};
var _hoisted_4 = {
  "class": "container-xxl container-xl container-lg container-md container-sm"
};
var _hoisted_5 = {
  "class": "header-body text-center mt-7 mb-5"
};
var _hoisted_6 = {
  "class": "row"
};
var _hoisted_7 = {
  "class": "col-12"
};
var _hoisted_8 = {
  "class": "d-flex justify-content-between"
};
var _hoisted_9 = {
  "class": "align-self-center"
};
var _hoisted_10 = {
  key: 0,
  "class": "finark-landing-featured-h1 text-white text-start finark-text-shadow fw-normal lh-1"
};
var _hoisted_11 = {
  "class": "finark-landing-featured-h1 finark-fw-800 text-white text-start text-uppercase finark-text-shadow"
};
var _hoisted_12 = {
  key: 0
};
var _hoisted_13 = {
  key: 1
};
var _hoisted_14 = {
  key: 2
};
var _hoisted_15 = {
  key: 3
};
var _hoisted_16 = {
  key: 4
};
var _hoisted_17 = {
  key: 0,
  "class": "d-flex flex-column align-self-center"
};
var _hoisted_18 = {
  "class": "pt-2 pb-1 px-4 text-white d-flex flex-column justify-content-end align-items-center"
};
var _hoisted_19 = {
  "class": "finark-default-link text-white mb-1",
  href: "https://www.facebook.com/FinancialArk",
  target: "_blank"
};
var _hoisted_20 = {
  "class": "finark-default-link text-white mb-1",
  href: "https://www.instagram.com/finark.advisory/",
  target: "_blank"
};
var _hoisted_21 = {
  "class": "finark-default-link text-white mb-1",
  href: "https://www.youtube.com/@FinancialArk",
  target: "_blank"
};
var _hoisted_22 = {
  "class": "finark-default-link text-white mb-1",
  href: "https://www.linkedin.com/company/finarkgroup/",
  target: "_blank"
};
var _hoisted_23 = {
  "class": "finark-default-link text-white mb-1",
  href: "https://wa.me/6591813260",
  target: "_blank"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_FontAwesomeIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FontAwesomeIcon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Main meta tags "), _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
        "head-key": "description",
        name: "description",
        content: "We provide quality financial advice and competitive financial products and solutions our clients - serving in our clients' needs."
      }, null, -1 /* HOISTED */)), _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
        "head-key": "author",
        name: "author",
        content: "John Vincent Bonza - Full Stack Developer - Infinity Solutions former Infinity Brackets"
      }, null, -1 /* HOISTED */)), _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
        "head-key": "keywords",
        name: "keywords",
        content: "financial, advisory, insurance, partners, life, finark, clients, solutions, financial advisory, insurance partners, we provide, advisory practice, financial consultants, support them, advisory firm"
      }, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Social media meta tags "), _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
        "head-key": "social-title",
        property: "og:title",
        content: "FinArk ⋅ Transforming the way financial advisory is done"
      }, null, -1 /* HOISTED */)), _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
        "head-key": "social-description",
        property: "og:description",
        content: "We provide quality financial advice and competitive financial products and solutions our clients - serving in our clients' needs."
      }, null, -1 /* HOISTED */)), _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
        "head-key": "social-image",
        property: "og:image",
        content: "http://fin-ark.com/storage/images/backgrounds/landing-image.jpeg"
      }, null, -1 /* HOISTED */)), _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
        "head-key": "social-url",
        property: "og:url",
        content: "http://fin-ark.com/"
      }, null, -1 /* HOISTED */)), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
        "head-key": "social-type",
        property: "og:type",
        content: "website"
      }, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Twitter meta tags "), _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
        "head-key": "twitter-title",
        property: "twitter:title",
        content: "FinArk ⋅ Transforming the way financial advisory is done"
      }, null, -1 /* HOISTED */)), _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
        "head-key": "twitter-description",
        property: "twitter:description",
        content: "We provide quality financial advice and competitive financial products and solutions our clients - serving in our clients' needs."
      }, null, -1 /* HOISTED */)), _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
        "head-key": "twitter-image",
        property: "twitter:image",
        content: "http://fin-ark.com/storage/images/backgrounds/landing-image.jpeg"
      }, null, -1 /* HOISTED */)), _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
        content: "summary_large_image",
        name: "twitter:card"
      }, null, -1 /* HOISTED */))];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("body", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <AdminNav v-show=\"$page.props.auth != null\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Header"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_ctx.$page.component == 'Landing' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h1", _hoisted_10, _cache[12] || (_cache[12] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Navigating the"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("ever-changing"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "finark-fw-800"
  }, "Financial Seas", -1 /* HOISTED */)]))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_11, [_ctx.$page.component == 'About' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_12, "About Us")) : _ctx.$page.component == 'Partners' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_13, "Our Partners")) : _ctx.$page.component == 'Services' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_14, "Our Services")) : _ctx.$page.component == 'Contact' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_15, "Contact Us")) : _ctx.$page.component != 'Landing' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.component), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), _ctx.$page.component == 'Landing' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, [_cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-white mx-auto mb-3 d-lg-block d-none",
    style: {
      "width": "3px",
      "height": "50px"
    }
  }, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span class=\"me-2 fst-italic mb-1\" style=\"font-size: 0.7rem;\">Tel: <a class=\"finark-default-link text-white\" href=\"tel:+65 9181 3260\"><b>+65 9181 3260</b></a></span> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-brands fa-facebook",
    "class": "fs-4 text-white"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-brands fa-instagram-square",
    "class": "fs-4 text-white"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-brands fa-youtube-square",
    "class": "fs-4 text-white"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-brands fa-linkedin",
    "class": "fs-4 text-white"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-envelope",
    "class": "fs-4 text-white"
  })])]), _cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "bg-white mx-auto mt-2 d-lg-block d-none",
    style: {
      "width": "3px",
      "height": "50px"
    }
  }, null, -1 /* HOISTED */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <h1 class=\"finark-landing-featured-h1 text-white text-left finark-text-shadow\">\r\n                                <span v-if=\"$page.component == 'Landing'\">Navigating the<br>ever-changing<br><span class=\"finark-fw-800\">Financial Seas</span></span>\r\n                                <span v-else-if=\"$page.component == 'About'\">About Us</span>\r\n                                <span v-else-if=\"$page.component == 'Partners'\">Our Partners</span>\r\n                                <span v-else-if=\"$page.component == 'Services'\">Our Services</span>\r\n                                <span v-else-if=\"$page.component == 'Contact'\">Contact Us</span>\r\n                                <span v-else>{{ $page.component }}</span>\r\n                            </h1> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"col-12\" v-if=\"$page.component == 'Landing'\">\r\n                            <p class=\"finark-landing-featured-p text-white text-left finark-text-shadow font-weight-400\">We provide quality financial advice and competitive financial products and solutions our clients - serving in our clients' needs.</p>\r\n                        </div> ")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"separator separator-bottom separator-skew zindex-100\" style=\"height: 100px !important;\">\r\n                <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n                </svg>\r\n            </div> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Footer"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FeedbackModal"])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/Pages/SignIn.vue":
/*!***************************************!*\
  !*** ./resources/js/Pages/SignIn.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SignIn_vue_vue_type_template_id_00dd51ab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignIn.vue?vue&type=template&id=00dd51ab */ "./resources/js/Pages/SignIn.vue?vue&type=template&id=00dd51ab");
/* harmony import */ var _SignIn_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignIn.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/SignIn.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var D_xampp_htdocs_clients_finark_laravel_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_clients_finark_laravel_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SignIn_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SignIn_vue_vue_type_template_id_00dd51ab__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/SignIn.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Layouts/LandingAlt.vue":
/*!****************************************************!*\
  !*** ./resources/js/Shared/Layouts/LandingAlt.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LandingAlt_vue_vue_type_template_id_41f227d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LandingAlt.vue?vue&type=template&id=41f227d4 */ "./resources/js/Shared/Layouts/LandingAlt.vue?vue&type=template&id=41f227d4");
/* harmony import */ var _LandingAlt_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LandingAlt.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Shared/Layouts/LandingAlt.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var D_xampp_htdocs_clients_finark_laravel_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_clients_finark_laravel_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LandingAlt_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LandingAlt_vue_vue_type_template_id_41f227d4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Layouts/LandingAlt.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/SignIn.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/SignIn.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignIn_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignIn_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SignIn.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SignIn.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Layouts/LandingAlt.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Shared/Layouts/LandingAlt.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LandingAlt_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LandingAlt_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LandingAlt.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/LandingAlt.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/SignIn.vue?vue&type=template&id=00dd51ab":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/SignIn.vue?vue&type=template&id=00dd51ab ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignIn_vue_vue_type_template_id_00dd51ab__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SignIn_vue_vue_type_template_id_00dd51ab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SignIn.vue?vue&type=template&id=00dd51ab */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SignIn.vue?vue&type=template&id=00dd51ab");


/***/ }),

/***/ "./resources/js/Shared/Layouts/LandingAlt.vue?vue&type=template&id=41f227d4":
/*!**********************************************************************************!*\
  !*** ./resources/js/Shared/Layouts/LandingAlt.vue?vue&type=template&id=41f227d4 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LandingAlt_vue_vue_type_template_id_41f227d4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LandingAlt_vue_vue_type_template_id_41f227d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LandingAlt.vue?vue&type=template&id=41f227d4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/LandingAlt.vue?vue&type=template&id=41f227d4");


/***/ })

}]);