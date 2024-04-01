"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_Forum_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Forum/Index.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Forum/Index.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Partials_CorporateUI_AdminHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../Shared/Partials/CorporateUI/AdminHeader */ "./resources/js/Shared/Partials/CorporateUI/AdminHeader.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Index',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var __returned__ = {
      get AdminHeader() {
        return _Shared_Partials_CorporateUI_AdminHeader__WEBPACK_IMPORTED_MODULE_0__["default"];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Components/DigitalClockWidget.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Components/DigitalClockWidget.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");

var getCurrentTime = function getCurrentTime() {
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(), 'h:mm:ss a');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      currentTime: getCurrentTime()
    };
  },
  methods: {
    updateCurrentTime: function updateCurrentTime() {
      this.currentTime = getCurrentTime();
    }
  },
  created: function created() {
    var _this = this;
    setInterval(function () {
      return _this.updateCurrentTime();
    }, 1000);
  },
  props: {
    timezone: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/AdminHeader.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/AdminHeader.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var _Shared_Components_DigitalClockWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Shared/Components/DigitalClockWidget */ "./resources/js/Shared/Components/DigitalClockWidget.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'AdminHeader',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var page = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.usePage)();
    var username = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return page.props.auth.user.name;
    });
    var role = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _page$props$auth$user;
      return (_page$props$auth$user = page.props.auth.user.roles.name) !== null && _page$props$auth$user !== void 0 ? _page$props$auth$user : '';
    });
    var deSlug = function deSlug(slug) {
      var words = slug.split('-');
      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
      }
      return words.join(' ');
    };
    var __returned__ = {
      page: page,
      username: username,
      role: role,
      deSlug: deSlug,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      get usePage() {
        return _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.usePage;
      },
      get DigitalClockWidget() {
        return _Shared_Components_DigitalClockWidget__WEBPACK_IMPORTED_MODULE_2__["default"];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Forum/Index.vue?vue&type=template&id=490f470b":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Forum/Index.vue?vue&type=template&id=490f470b ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container-fluid py-4 px-5"
};
var _hoisted_2 = {
  "class": "row mt-4"
};
var _hoisted_3 = {
  "class": "col-lg-9"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"answer-action shadow\"><div class=\"action-content\"><div class=\"image-wrap\"><img src=\"https://html-template.spider-themes.net/docy/img/home_support/answer.png\" alt=\"answer action\"></div><div class=\"content\"><h2 class=\"ans-title\">Can’t find an answer?</h2><p> Make use of a qualified tutor to get the answer </p></div></div><!-- /.action-content --><div class=\"action-button-container\"><a href=\"#\" class=\"action_btn btn-ans\">Ask a Question</a></div><!-- /.action-button-container --></div><div class=\"post-header forums-header\"><div class=\"col-md-6 col-sm-6 support-info\"><span> Forum </span></div><!-- /.support-info --><div class=\"col-md-6 col-sm-6 support-category-menus\"><ul class=\"forum-titles\"><li class=\"forum-topic-count\">Topics</li><li class=\"forum-reply-count\">Posts</li><li class=\"forum-freshness\">Last Post</li></ul></div><!-- /.support-category-menus --></div>", 2);
var _hoisted_6 = {
  "class": "community-posts-wrapper bb-radius"
};
var _hoisted_7 = {
  "class": "community-post style-two forum-item bug"
};
var _hoisted_8 = {
  "class": "col-md-6 post-content"
};
var _hoisted_9 = {
  "class": "author-avatar forum-icon text-center"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "entry-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "/admin/forum/category"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "post-title"
}, " Announcements ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "This forum features announcements. If there is a new post in this forum, please check it out.")], -1 /* HOISTED */);
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-6 post-meta-wrapper\"><ul class=\"forum-titles\"><li class=\"forum-topic-count\">10</li><li class=\"forum-reply-count\">105</li><li class=\"forum-freshness\"><div class=\"freshness-box\"><div class=\"freshness-top\"><div class=\"freshness-link\"><a href=\"#\" title=\"Reply To: Main Forum Rules &amp; Policies\">2 years, 2 months ago</a></div></div><div class=\"freshness-btm\"><a href=\"#\" title=\"View Eh Jewel&#39;s profile\" class=\"bbp-author-link\"></a><div class=\"freshness-name\"><a href=\"#\" title=\"View Eh Jewel&#39;s profile\" class=\"bbp-author-link\"></a><a href=\"#\" title=\"View Eh Jewel&#39;s profile\" class=\"bbp-author-link\"><span class=\"bbp-author-name\">Eh Jewel</span></a></div><span class=\"bbp-author-avatar\"><img alt=\"Eh Jewel\" src=\"https://html-template.spider-themes.net/docy/img/home_support/cp5.jpg\"></span></div></div></li></ul></div>", 1);
var _hoisted_12 = {
  "class": "community-post style-two forum-item bug"
};
var _hoisted_13 = {
  "class": "col-md-6 post-content"
};
var _hoisted_14 = {
  "class": "author-avatar forum-icon text-center"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "entry-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "/admin/forum/category"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "post-title"
}, " Breakfast Club ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Intention setting and sharing session.")], -1 /* HOISTED */);
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-6 post-meta-wrapper\"><ul class=\"forum-titles\"><li class=\"forum-topic-count\">10</li><li class=\"forum-reply-count\">105</li><li class=\"forum-freshness\"><div class=\"freshness-box\"><div class=\"freshness-top\"><div class=\"freshness-link\"><a href=\"#\" title=\"Reply To: Main Forum Rules &amp; Policies\">2 years, 2 months ago</a></div></div><div class=\"freshness-btm\"><a href=\"#\" title=\"View Eh Jewel&#39;s profile\" class=\"bbp-author-link\"></a><div class=\"freshness-name\"><a href=\"#\" title=\"View Eh Jewel&#39;s profile\" class=\"bbp-author-link\"></a><a href=\"#\" title=\"View Eh Jewel&#39;s profile\" class=\"bbp-author-link\"><span class=\"bbp-author-name\">Eh Jewel</span></a></div><span class=\"bbp-author-avatar\"><img alt=\"Eh Jewel\" src=\"https://html-template.spider-themes.net/docy/img/home_support/cp5.jpg\"></span></div></div></li></ul></div>", 1);
var _hoisted_17 = {
  "class": "community-post style-two forum-item bug"
};
var _hoisted_18 = {
  "class": "col-md-6 post-content"
};
var _hoisted_19 = {
  "class": "author-avatar forum-icon text-center"
};
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "entry-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "/admin/forum/category"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "post-title"
}, " Seminars and workshops ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Financial Planning/Retirement Planning/Estate Planning, etc.")], -1 /* HOISTED */);
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-6 post-meta-wrapper\"><ul class=\"forum-titles\"><li class=\"forum-topic-count\">10</li><li class=\"forum-reply-count\">105</li><li class=\"forum-freshness\"><div class=\"freshness-box\"><div class=\"freshness-top\"><div class=\"freshness-link\"><a href=\"#\" title=\"Reply To: Main Forum Rules &amp; Policies\">2 years, 2 months ago</a></div></div><div class=\"freshness-btm\"><a href=\"#\" title=\"View Eh Jewel&#39;s profile\" class=\"bbp-author-link\"></a><div class=\"freshness-name\"><a href=\"#\" title=\"View Eh Jewel&#39;s profile\" class=\"bbp-author-link\"></a><a href=\"#\" title=\"View Eh Jewel&#39;s profile\" class=\"bbp-author-link\"><span class=\"bbp-author-name\">Eh Jewel</span></a></div><span class=\"bbp-author-avatar\"><img alt=\"Eh Jewel\" src=\"https://html-template.spider-themes.net/docy/img/home_support/cp5.jpg\"></span></div></div></li></ul></div>", 1);
var _hoisted_22 = {
  "class": "community-post style-two forum-item bug"
};
var _hoisted_23 = {
  "class": "col-md-6 post-content"
};
var _hoisted_24 = {
  "class": "author-avatar forum-icon text-center"
};
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "entry-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "/admin/forum/category"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "post-title"
}, " Training and development ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Leaders, if you are doing specific training in-person (small groups) or via zoom (large groups) for a certain area in financial advisory work, can extend to other FinArk consultants.")], -1 /* HOISTED */);
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-md-6 post-meta-wrapper\"><ul class=\"forum-titles\"><li class=\"forum-topic-count\">10</li><li class=\"forum-reply-count\">105</li><li class=\"forum-freshness\"><div class=\"freshness-box\"><div class=\"freshness-top\"><div class=\"freshness-link\"><a href=\"#\" title=\"Reply To: Main Forum Rules &amp; Policies\">2 years, 2 months ago</a></div></div><div class=\"freshness-btm\"><a href=\"#\" title=\"View Eh Jewel&#39;s profile\" class=\"bbp-author-link\"></a><div class=\"freshness-name\"><a href=\"#\" title=\"View Eh Jewel&#39;s profile\" class=\"bbp-author-link\"></a><a href=\"#\" title=\"View Eh Jewel&#39;s profile\" class=\"bbp-author-link\"><span class=\"bbp-author-name\">Eh Jewel</span></a></div><span class=\"bbp-author-avatar\"><img alt=\"Eh Jewel\" src=\"https://html-template.spider-themes.net/docy/img/home_support/cp5.jpg\"></span></div></div></li></ul></div>", 1);
var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-lg-3\"><div class=\"forum_sidebar\"><!-- &lt;div class=&quot;widget status_widget&quot;&gt;\r\n                        &lt;h4 class=&quot;c_head&quot;&gt;Information&lt;/h4&gt;\r\n                        &lt;p class=&quot;status&quot;&gt;Support is &lt;span class=&quot;offline&quot;&gt;Offline&lt;/span&gt;&lt;/p&gt;\r\n\r\n                        &lt;div class=&quot;open-hours&quot;&gt;\r\n                            &lt;h4 class=&quot;title-sm&quot;&gt;Our office hours&lt;/h4&gt;\r\n                            &lt;p&gt;Monday - Friday / 10am - 6pm (UTC +4) NewYork&lt;/p&gt;\r\n                            &lt;ul class=&quot;current-time list-unstyled&quot;&gt;\r\n                                &lt;li&gt;\r\n                                    &lt;h4 class=&quot;title-sm&quot;&gt;Your time&lt;/h4&gt;\r\n                                    &lt;p&gt;10:30:15 PM&lt;/p&gt;\r\n                                &lt;/li&gt;\r\n                                &lt;li&gt;\r\n                                    &lt;h4 class=&quot;title-sm&quot;&gt;Your time&lt;/h4&gt;\r\n                                    &lt;p&gt;10:30:15 PM&lt;/p&gt;\r\n                                &lt;/li&gt;\r\n                            &lt;/ul&gt;\r\n                        &lt;/div&gt;\r\n                    &lt;/div&gt; --><aside class=\"l_widget user_list_wd\"><div class=\"r_heading d-flex justify-content-between\"><h3>Ticket Categories</h3></div><ul class=\"list-unstyled ticket_categories px-3 mb-0\"><li><img src=\"https://html-template.spider-themes.net/docy/img/home_support/cmm5.png\" alt=\"category\"><a href=\"#\">Docs WordPress Theme</a> <span class=\"count\">10</span></li><li><img src=\"https://html-template.spider-themes.net/docy/img/home_support/cmm4.png\" alt=\"category\"><a href=\"#\">Product Landing</a><span class=\"count count-fill\">13</span><span class=\"count\">54</span></li><li><img src=\"https://html-template.spider-themes.net/docy/img/home_support/cmm2.png\" alt=\"category\"><a href=\"#\">Knowledge Base</a><span class=\"count\">142</span></li><li><img src=\"https://html-template.spider-themes.net/docy/img/home_support/cmm8.png\" alt=\"category\"><a href=\"#\">Startup and App</a> <span class=\"count\">13</span></li><li><img src=\"https://html-template.spider-themes.net/docy/img/home_support/cmm9.png\" alt=\"category\"><a href=\"#\">Clean Email Template</a> <span class=\"count\">123</span></li><li><img src=\"https://html-template.spider-themes.net/docy/img/home_support/cmm10.png\" alt=\"category\"><a href=\"#\">Apps WordPress Theme</a> <span class=\"count\">18</span></li></ul></aside><aside class=\"l_widget user_list_wd\"><div class=\"r_heading d-flex justify-content-between\"><h3>Tags</h3></div><ul class=\"list-unstyled w_tag_list style-light p-3\"><li><a href=\"#\">Swagger</a></li><li><a href=\"#\">Docy</a></li><li><a href=\"#\">weCare</a></li><li><a href=\"#\">Business</a></li><li><a href=\"#\">Download</a></li><li><a href=\"#\">Doc</a></li><li><a href=\"#\">Product board</a></li><li><a href=\"#\">WordPress</a></li><li><a href=\"#\">Design</a></li><li><a href=\"#\">ui/ux</a></li><li><a href=\"#\">Doc Design</a></li><li><a href=\"#\">DocAll</a></li></ul></aside></div></div>", 1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_FontAwesomeIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FontAwesomeIcon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Forum ⋅ "
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AdminHeader"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-bullhorn",
    "class": "text-danger fa-4xl"
  })]), _hoisted_10]), _hoisted_11]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-coffee",
    "class": "text-success fa-4xl"
  })]), _hoisted_15]), _hoisted_16]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-handshake",
    "class": "text-primary fa-4xl"
  })]), _hoisted_20]), _hoisted_21]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-fist-raised",
    "class": "text-warning fa-4xl"
  })]), _hoisted_25]), _hoisted_26])])]), _hoisted_27])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Components/DigitalClockWidget.vue?vue&type=template&id=60f55f47":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Components/DigitalClockWidget.vue?vue&type=template&id=60f55f47 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "text-dark fw-bold pt-2 px-3 rounded",
  style: {
    "line-height": ".7 !important"
  }
};
var _hoisted_2 = {
  "class": "fs-1"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_4 = {
  "class": "text-end fs-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.currentTime), 1 /* TEXT */), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.timezone), 1 /* TEXT */)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/AdminHeader.vue?vue&type=template&id=ac28f7f6":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/AdminHeader.vue?vue&type=template&id=ac28f7f6 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row mt-6"
};
var _hoisted_2 = {
  "class": "col-lg-12 col-sm-12"
};
var _hoisted_3 = {
  "class": "mb-4 card blur rounded-2"
};
var _hoisted_4 = {
  "class": "p-4 card-body"
};
var _hoisted_5 = {
  "class": "row"
};
var _hoisted_6 = {
  "class": "col-md-12"
};
var _hoisted_7 = {
  "class": "d-md-flex justify-content-between align-items-center mx-2"
};
var _hoisted_8 = {
  "class": "mb-md-0 mb-3"
};
var _hoisted_9 = {
  "class": "font-weight-bold mb-0"
};
var _hoisted_10 = {
  "class": "mb-0"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_9, "Hello, " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.username) + "!", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_10, "Signed in as " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.deSlug($setup.role)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["DigitalClockWidget"], {
    timezone: "Asia/Singapore"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button type=\"button\" class=\"btn btn-sm btn-white btn-icon d-flex align-items-center mb-0 ms-md-auto mb-sm-0 mb-2 me-2\">\r\n                                    <span class=\"btn-inner--icon\">\r\n                                        <span class=\"p-1 bg-success rounded-circle d-flex ms-auto me-2\">\r\n                                            <span class=\"visually-hidden\">New</span>\r\n                                        </span>\r\n                                    </span>\r\n                                    <span class=\"btn-inner--text\">Messages</span>\r\n                                </button>\r\n                                <button type=\"button\" class=\"btn btn-sm btn-dark btn-icon d-flex align-items-center mb-0\">\r\n                                    <span class=\"btn-inner--icon\">\r\n                                        <svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"d-block me-2\">\r\n                                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99\" />\r\n                                        </svg>\r\n                                    </span>\r\n                                    <span class=\"btn-inner--text\">Sync</span>\r\n                                </button> ")])])])])])])]);
}

/***/ }),

/***/ "./resources/js/Pages/Admin/Forum/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Admin/Forum/Index.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_490f470b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=490f470b */ "./resources/js/Pages/Admin/Forum/Index.vue?vue&type=template&id=490f470b");
/* harmony import */ var _Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Admin/Forum/Index.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_490f470b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Admin/Forum/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Components/DigitalClockWidget.vue":
/*!***************************************************************!*\
  !*** ./resources/js/Shared/Components/DigitalClockWidget.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DigitalClockWidget_vue_vue_type_template_id_60f55f47__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DigitalClockWidget.vue?vue&type=template&id=60f55f47 */ "./resources/js/Shared/Components/DigitalClockWidget.vue?vue&type=template&id=60f55f47");
/* harmony import */ var _DigitalClockWidget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DigitalClockWidget.vue?vue&type=script&lang=js */ "./resources/js/Shared/Components/DigitalClockWidget.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DigitalClockWidget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DigitalClockWidget_vue_vue_type_template_id_60f55f47__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Components/DigitalClockWidget.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/AdminHeader.vue":
/*!******************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/AdminHeader.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminHeader_vue_vue_type_template_id_ac28f7f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminHeader.vue?vue&type=template&id=ac28f7f6 */ "./resources/js/Shared/Partials/CorporateUI/AdminHeader.vue?vue&type=template&id=ac28f7f6");
/* harmony import */ var _AdminHeader_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminHeader.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Shared/Partials/CorporateUI/AdminHeader.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AdminHeader_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AdminHeader_vue_vue_type_template_id_ac28f7f6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Partials/CorporateUI/AdminHeader.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Admin/Forum/Index.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Forum/Index.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Forum/Index.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Components/DigitalClockWidget.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Shared/Components/DigitalClockWidget.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DigitalClockWidget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DigitalClockWidget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DigitalClockWidget.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Components/DigitalClockWidget.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/AdminHeader.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/AdminHeader.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminHeader_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminHeader_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminHeader.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/AdminHeader.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Forum/Index.vue?vue&type=template&id=490f470b":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Forum/Index.vue?vue&type=template&id=490f470b ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_490f470b__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_490f470b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=490f470b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Forum/Index.vue?vue&type=template&id=490f470b");


/***/ }),

/***/ "./resources/js/Shared/Components/DigitalClockWidget.vue?vue&type=template&id=60f55f47":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Shared/Components/DigitalClockWidget.vue?vue&type=template&id=60f55f47 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DigitalClockWidget_vue_vue_type_template_id_60f55f47__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DigitalClockWidget_vue_vue_type_template_id_60f55f47__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DigitalClockWidget.vue?vue&type=template&id=60f55f47 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Components/DigitalClockWidget.vue?vue&type=template&id=60f55f47");


/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/AdminHeader.vue?vue&type=template&id=ac28f7f6":
/*!************************************************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/AdminHeader.vue?vue&type=template&id=ac28f7f6 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminHeader_vue_vue_type_template_id_ac28f7f6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AdminHeader_vue_vue_type_template_id_ac28f7f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AdminHeader.vue?vue&type=template&id=ac28f7f6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/AdminHeader.vue?vue&type=template&id=ac28f7f6");


/***/ })

}]);