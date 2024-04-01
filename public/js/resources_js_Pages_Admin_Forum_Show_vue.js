"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_Forum_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Forum/Show.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Forum/Show.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Partials_CorporateUI_AdminHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../Shared/Partials/CorporateUI/AdminHeader */ "./resources/js/Shared/Partials/CorporateUI/AdminHeader.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Show',
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Forum/Show.vue?vue&type=template&id=63430a54":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Forum/Show.vue?vue&type=template&id=63430a54 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container-fluid py-4 px-5"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", {
  "class": "doc_blog_grid_area sec_pad forum-single-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "container"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-9"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Forum post top area "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-9"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum-post-top"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "author-avatar",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/author-avatar.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum-post-author"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "author-name",
  href: "#"
}, " Eh Jewel "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum-author-meta"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "author-badge"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "16px",
  height: "15px"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  fill: "rgb(131, 135, 147)",
  d: "M11.729,12.136 L11.582,12.167 C11.362,12.415 11.125,12.645 10.869,12.857 L14.999,12.857 C15.134,12.857 15.255,12.944 15.307,13.077 C15.359,13.211 15.331,13.365 15.235,13.467 L14.488,14.268 C14.053,14.733 13.452,15.000 12.838,15.000 L2.495,15.000 C1.872,15.000 1.286,14.740 0.845,14.268 L0.098,13.467 C0.002,13.365 -0.026,13.211 0.026,13.077 C0.077,12.944 0.199,12.857 0.334,12.857 L4.463,12.857 C2.928,11.585 2.000,9.630 2.000,7.499 L2.000,6.785 C2.000,6.194 2.449,5.713 3.000,5.713 L12.333,5.713 C12.885,5.713 13.333,6.194 13.333,6.785 L13.333,7.343 C13.869,7.160 14.736,6.973 15.355,7.400 C15.783,7.696 16.000,8.209 16.000,8.928 C16.000,11.239 11.903,12.100 11.729,12.136 ZM14.994,8.002 C14.557,7.698 13.715,7.941 13.294,8.113 C13.197,9.261 12.837,10.339 12.255,11.269 C13.480,10.911 15.333,10.116 15.333,8.928 C15.333,8.462 15.223,8.158 14.994,8.002 ZM10.261,4.419 C10.376,4.573 10.353,4.798 10.209,4.921 C10.148,4.974 10.074,4.999 10.001,4.999 C9.903,4.999 9.807,4.954 9.740,4.865 C9.198,4.139 9.198,3.002 9.741,2.277 C10.086,1.816 10.086,1.040 9.742,0.580 C9.627,0.426 9.650,0.201 9.794,0.078 C9.937,-0.044 10.146,-0.020 10.263,0.134 C10.805,0.860 10.805,1.996 10.263,2.722 C9.917,3.183 9.917,3.959 10.261,4.419 ZM8.259,4.419 C8.373,4.573 8.350,4.798 8.207,4.921 C8.145,4.974 8.071,4.999 7.999,4.999 C7.901,4.999 7.804,4.954 7.738,4.865 C7.195,4.139 7.195,3.002 7.738,2.277 C8.082,1.816 8.082,1.040 7.739,0.580 C7.624,0.426 7.647,0.201 7.791,0.078 C7.935,-0.045 8.145,-0.020 8.259,0.134 C8.802,0.860 8.802,1.996 8.259,2.722 C7.915,3.183 7.915,3.959 8.259,4.419 ZM6.261,4.418 C6.376,4.572 6.353,4.797 6.210,4.920 C6.148,4.973 6.074,4.999 6.001,4.999 C5.903,4.999 5.807,4.953 5.741,4.865 C5.198,4.139 5.198,3.002 5.741,2.276 C6.085,1.815 6.085,1.039 5.742,0.580 C5.627,0.426 5.650,0.201 5.794,0.078 C5.937,-0.046 6.147,-0.020 6.262,0.133 C6.804,0.859 6.804,1.996 6.262,2.721 C5.918,3.182 5.918,3.959 6.261,4.418 Z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Conversation Starter")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "author-badge"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "icon_calendar"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: ""
}, "January 16 at 10:32 PM")])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "action-button-container"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "action_btn btn-ans ask-btn"
}, "Ask Question")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Forum post content "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "q-title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span class=\"question-icon\" title=\"Question\">Q:</span> "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Sticky navbar is shown, but state is inactive")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum-post-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Daft blimey cor blimey guvnor jolly good don't get shirty with me what a load of rubbish no biggie ruddy cuppa cheesed off bleeding, arse spiffing it's your round codswallop gormless off his nut bodge I smashing, mufty chancer Oxford my good sir bobby it's all gone to pot bite your arm off wind up Harry. Blatant A bit of how's your father it's your round are you taking the piss gutted mate codswallop golly gosh, James Bond I old chimney pot is bum bag do one, fanny around crikey pukka tomfoolery nancy boy. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Spiffing good time burke give us a bell absolutely bladdered gutted mate tosser cuppa happy days Harry young delinquent amongst car boot, baking cakes cheesed off I down the pub what a load of rubbish such a fibber knees up me old mucker wind up smashing. My lady cheeky faff about what a plonker so I said pardon you chimney pot cheesed off haggle quaint, cup of tea gormless excuse my French mush bleeding knackered squiffy mush, such a fibber dropped a clanger jolly good he lost his bottle vagabond no biggie fanny around brilliant. Chip shop absolutely bladdered cockup up the kyver cracking goal is pardon you cuppa easy peasy the full monty the bee's knees blatant, bugger pear shaped a load of old tosh zonked give us a bell up the duff bleeder fantastic James Bond chap. Off his nut the BBC mufty hotpot my lady I super tomfoolery nancy boy, loo fanny around bits and bobs nice one only a quid Eaton blow off barmy, knees up bobby cup of char barney a no biggie gormless.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum-post-btm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "taxonomy forum-post-tags"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "icon_tags_alt"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Bug"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(", "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Feature"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(", "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Error")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"taxonomy forum-post-cat\">\r\n                                    <img src=\"https://html-template.spider-themes.net/docy/img/forum/logo-favicon.png\" alt=\"\"><a href=\"#\">Docy Support</a>\r\n                                </div> ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "action-button-container action-btns"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "action_btn btn-ans ask-btn reply-btn"
}, "Reply"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "action_btn btn-ans ask-btn too-btn"
}, "I have this question too (20)")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Best answer "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"best-answer\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-9\">\r\n                                    <div class=\"forum-post-top\">\r\n                                        <a class=\"author-avatar\" href=\"#\">\r\n                                            <img src=\"https://html-template.spider-themes.net/docy/img/forum/author-avatar.png\" alt=\"\">\r\n                                        </a>\r\n                                        <div class=\"forum-post-author\">\r\n                                            <a class=\"author-name\" href=\"#\"> Eh Jewel </a>\r\n                                            <div class=\"forum-author-meta\">\r\n                                                <div class=\"author-badge\">\r\n                                                    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16px\" height=\"15px\">\r\n                                                        <path fill-rule=\"evenodd\" fill=\"rgb(131, 135, 147)\" d=\"M11.729,12.136 L11.582,12.167 C11.362,12.415 11.125,12.645 10.869,12.857 L14.999,12.857 C15.134,12.857 15.255,12.944 15.307,13.077 C15.359,13.211 15.331,13.365 15.235,13.467 L14.488,14.268 C14.053,14.733 13.452,15.000 12.838,15.000 L2.495,15.000 C1.872,15.000 1.286,14.740 0.845,14.268 L0.098,13.467 C0.002,13.365 -0.026,13.211 0.026,13.077 C0.077,12.944 0.199,12.857 0.334,12.857 L4.463,12.857 C2.928,11.585 2.000,9.630 2.000,7.499 L2.000,6.785 C2.000,6.194 2.449,5.713 3.000,5.713 L12.333,5.713 C12.885,5.713 13.333,6.194 13.333,6.785 L13.333,7.343 C13.869,7.160 14.736,6.973 15.355,7.400 C15.783,7.696 16.000,8.209 16.000,8.928 C16.000,11.239 11.903,12.100 11.729,12.136 ZM14.994,8.002 C14.557,7.698 13.715,7.941 13.294,8.113 C13.197,9.261 12.837,10.339 12.255,11.269 C13.480,10.911 15.333,10.116 15.333,8.928 C15.333,8.462 15.223,8.158 14.994,8.002 ZM10.261,4.419 C10.376,4.573 10.353,4.798 10.209,4.921 C10.148,4.974 10.074,4.999 10.001,4.999 C9.903,4.999 9.807,4.954 9.740,4.865 C9.198,4.139 9.198,3.002 9.741,2.277 C10.086,1.816 10.086,1.040 9.742,0.580 C9.627,0.426 9.650,0.201 9.794,0.078 C9.937,-0.044 10.146,-0.020 10.263,0.134 C10.805,0.860 10.805,1.996 10.263,2.722 C9.917,3.183 9.917,3.959 10.261,4.419 ZM8.259,4.419 C8.373,4.573 8.350,4.798 8.207,4.921 C8.145,4.974 8.071,4.999 7.999,4.999 C7.901,4.999 7.804,4.954 7.738,4.865 C7.195,4.139 7.195,3.002 7.738,2.277 C8.082,1.816 8.082,1.040 7.739,0.580 C7.624,0.426 7.647,0.201 7.791,0.078 C7.935,-0.045 8.145,-0.020 8.259,0.134 C8.802,0.860 8.802,1.996 8.259,2.722 C7.915,3.183 7.915,3.959 8.259,4.419 ZM6.261,4.418 C6.376,4.572 6.353,4.797 6.210,4.920 C6.148,4.973 6.074,4.999 6.001,4.999 C5.903,4.999 5.807,4.953 5.741,4.865 C5.198,4.139 5.198,3.002 5.741,2.276 C6.085,1.815 6.085,1.039 5.742,0.580 C5.627,0.426 5.650,0.201 5.794,0.078 C5.937,-0.046 6.147,-0.020 6.262,0.133 C6.804,0.859 6.804,1.996 6.262,2.721 C5.918,3.182 5.918,3.959 6.261,4.418 Z\"></path>\r\n                                                    </svg>\r\n                                                    <span>Conversation Starter</span>\r\n                                                </div>\r\n                                                <div class=\"author-badge\">\r\n                                                    <i class=\"icon_calendar\"></i>\r\n                                                    <a href=\"\">January 16 at 10:32 PM</a>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-3\">\r\n                                    <p class=\"accepted-ans-mark\">\r\n                                        <i class=\"icon_check\"></i> <span>Accepted Solution</span>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"best-ans-content d-flex\">\r\n                                <span class=\"question-icon\" title=\"The Best Answer\">A:</span>\r\n                                <p>\r\n                                    Hi,\r\n                                    You can edit the service pages with Elementor. To enable Elementor on Service post type, follow the bellow steps<br>\r\n                                    Step 1 - Navigate to your website's WordPress Dashbord&gt;Elementor&gt;Settings<br>\r\n                                    Step 2 - Tick the post you went to edit with Elementor in the post typs section and click the  save<br>\r\n                                    changes button<br>\r\n                                    Step 3 - Now you can click edit with Elementor button and start working<br><br>\r\n                                    Thanks!\r\n                                </p>\r\n                            </div>\r\n                        </div> "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" All answer "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "all-answers"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "title"
}, "All Replies"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"filter-bar d-flex\">\r\n                                <div class=\"sort\">\r\n                                    <select class=\"custom-select\" id=\"sortBy\" style=\"display: none;\">\r\n                                        <option selected=\"\">Sort By</option>\r\n                                        <option value=\"1\">ASC</option>\r\n                                        <option value=\"2\">Desc</option>\r\n                                        <option value=\"3\">Vote</option>\r\n                                    </select><div class=\"nice-select custom-select\" tabindex=\"0\"><span class=\"current\">Sort By</span><ul class=\"list\"><li data-value=\"Sort By\" class=\"option selected\">Sort By</li><li data-value=\"1\" class=\"option\">ASC</li><li data-value=\"2\" class=\"option\">Desc</li><li data-value=\"3\" class=\"option\">Vote</li></ul></div>\r\n                                </div>\r\n                                <p>Page 1 of 4</p>\r\n                            </div> "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum-comment"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum-post-top"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "author-avatar",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/author-avatar.png",
  alt: "author avatar"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum-post-author"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "author-name",
  href: "#"
}, "Eh Jewel"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum-author-meta"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "author-badge"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "16px",
  height: "15px"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  fill: "rgb(131, 135, 147)",
  d: "M11.729,12.136 L11.582,12.167 C11.362,12.415 11.125,12.645 10.869,12.857 L14.999,12.857 C15.134,12.857 15.255,12.944 15.307,13.077 C15.359,13.211 15.331,13.365 15.235,13.467 L14.488,14.268 C14.053,14.733 13.452,15.000 12.838,15.000 L2.495,15.000 C1.872,15.000 1.286,14.740 0.845,14.268 L0.098,13.467 C0.002,13.365 -0.026,13.211 0.026,13.077 C0.077,12.944 0.199,12.857 0.334,12.857 L4.463,12.857 C2.928,11.585 2.000,9.630 2.000,7.499 L2.000,6.785 C2.000,6.194 2.449,5.713 3.000,5.713 L12.333,5.713 C12.885,5.713 13.333,6.194 13.333,6.785 L13.333,7.343 C13.869,7.160 14.736,6.973 15.355,7.400 C15.783,7.696 16.000,8.209 16.000,8.928 C16.000,11.239 11.903,12.100 11.729,12.136 ZM14.994,8.002 C14.557,7.698 13.715,7.941 13.294,8.113 C13.197,9.261 12.837,10.339 12.255,11.269 C13.480,10.911 15.333,10.116 15.333,8.928 C15.333,8.462 15.223,8.158 14.994,8.002 ZM10.261,4.419 C10.376,4.573 10.353,4.798 10.209,4.921 C10.148,4.974 10.074,4.999 10.001,4.999 C9.903,4.999 9.807,4.954 9.740,4.865 C9.198,4.139 9.198,3.002 9.741,2.277 C10.086,1.816 10.086,1.040 9.742,0.580 C9.627,0.426 9.650,0.201 9.794,0.078 C9.937,-0.044 10.146,-0.020 10.263,0.134 C10.805,0.860 10.805,1.996 10.263,2.722 C9.917,3.183 9.917,3.959 10.261,4.419 ZM8.259,4.419 C8.373,4.573 8.350,4.798 8.207,4.921 C8.145,4.974 8.071,4.999 7.999,4.999 C7.901,4.999 7.804,4.954 7.738,4.865 C7.195,4.139 7.195,3.002 7.738,2.277 C8.082,1.816 8.082,1.040 7.739,0.580 C7.624,0.426 7.647,0.201 7.791,0.078 C7.935,-0.045 8.145,-0.020 8.259,0.134 C8.802,0.860 8.802,1.996 8.259,2.722 C7.915,3.183 7.915,3.959 8.259,4.419 ZM6.261,4.418 C6.376,4.572 6.353,4.797 6.210,4.920 C6.148,4.973 6.074,4.999 6.001,4.999 C5.903,4.999 5.807,4.953 5.741,4.865 C5.198,4.139 5.198,3.002 5.741,2.276 C6.085,1.815 6.085,1.039 5.742,0.580 C5.627,0.426 5.650,0.201 5.794,0.078 C5.937,-0.046 6.147,-0.020 6.262,0.133 C6.804,0.859 6.804,1.996 6.262,2.721 C5.918,3.182 5.918,3.959 6.261,4.418 Z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Conversation Starter")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "author-badge"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "icon_calendar"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: ""
}, "January 16 at 10:32 PM")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "comment-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "action-button-container action-btns"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "action_btn btn-ans ask-btn reply-btn"
}, "Reply"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "action_btn btn-ans ask-btn too-btn"
}, "Helpful")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum-comment"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum-post-top"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "author-avatar",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/author-avatar-2.jpg",
  alt: "author avatar"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum-post-author"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "author-name",
  href: "#"
}, "Parsley Montana"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum-author-meta"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "author-badge"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "10px",
  height: "13px"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  fill: "rgb(107, 112, 127)",
  d: "M10.010,3.449 C9.996,3.196 9.996,2.955 9.996,2.714 C9.996,2.519 9.810,2.369 9.567,2.369 C7.783,2.369 6.427,1.956 5.300,1.071 C5.128,0.945 4.871,0.945 4.700,1.071 C3.573,1.956 2.217,2.369 0.433,2.369 C0.190,2.369 0.004,2.519 0.004,2.714 C0.004,2.955 0.004,3.196 -0.010,3.449 C-0.067,5.861 -0.153,11.587 4.857,12.977 L5.000,13.000 L5.143,12.977 C10.138,11.587 10.067,5.873 10.010,3.449 ZM4.726,9.505 C4.640,9.563 4.541,9.597 4.426,9.597 L4.412,9.597 C4.298,9.597 4.184,9.551 4.112,9.482 L1.964,7.195 L3.245,5.996 L4.469,7.325 L7.047,4.678 L8.324,5.937 L4.726,9.505 Z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Moderator")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "author-badge"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "icon_calendar"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: ""
}, "February 16 at 5:32 PM")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "comment-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "That cockup bleeding skive off such a fibber cup of char squiffy car boot, lemon squeezy lavatory Richard jolly good tosser excuse my French, mush barney."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "action-button-container action-btns"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "action_btn btn-ans ask-btn reply-btn"
}, "Reply"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "action_btn btn-ans ask-btn too-btn"
}, "Helpful")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum-comment"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum-post-top"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "author-avatar",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/author-avatar-3.jpg",
  alt: "author avatar"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum-post-author"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "author-name",
  href: "#"
}, "Giles Posture"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum-author-meta"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "author-badge"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "11px",
  height: "12px"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  fill: "rgb(107, 112, 127)",
  d: "M8.519,11.369 C6.537,12.296 5.144,12.075 4.064,11.465 C2.984,10.855 0.455,9.433 0.455,9.433 C-0.009,9.164 -0.147,8.606 0.145,8.184 C0.442,7.766 1.054,7.643 1.523,7.911 L3.032,8.666 L0.516,3.256 C0.349,2.897 0.530,2.459 0.919,2.277 C1.309,2.095 1.759,2.238 1.926,2.597 L3.435,5.842 C3.491,5.962 3.641,6.010 3.771,5.949 C3.901,5.888 3.961,5.742 3.905,5.623 L1.993,1.511 C1.827,1.153 2.007,0.714 2.396,0.532 C2.786,0.350 3.236,0.493 3.403,0.852 L5.315,4.964 C5.371,5.083 5.521,5.130 5.651,5.070 C5.780,5.009 5.841,4.863 5.785,4.744 L4.074,1.065 C3.908,0.706 4.088,0.268 4.477,0.086 C4.867,-0.096 5.317,0.047 5.484,0.406 L7.396,4.517 C7.452,4.637 7.603,4.684 7.732,4.624 C7.861,4.563 7.922,4.417 7.866,4.298 L6.558,1.484 C6.391,1.126 6.572,0.688 6.961,0.506 C7.350,0.324 7.801,0.467 7.968,0.825 C7.968,0.825 10.361,5.972 10.685,6.668 C11.008,7.364 11.800,9.835 8.519,11.369 Z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Explorer")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "author-badge"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "icon_calendar"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: ""
}, "January 16 at 10:32 PM")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "comment-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup.!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "action-button-container action-btns"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "action_btn btn-ans ask-btn reply-btn"
}, "Reply"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "action_btn btn-ans ask-btn too-btn"
}, "Helpful")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum-comment"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum-post-top"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "author-avatar",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/author-avatar.png",
  alt: "author avatar"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum-post-author"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "author-name",
  href: "#"
}, "Norman Gordon"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum-author-meta"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "author-badge"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "16px",
  height: "15px"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  fill: "rgb(131, 135, 147)",
  d: "M11.729,12.136 L11.582,12.167 C11.362,12.415 11.125,12.645 10.869,12.857 L14.999,12.857 C15.134,12.857 15.255,12.944 15.307,13.077 C15.359,13.211 15.331,13.365 15.235,13.467 L14.488,14.268 C14.053,14.733 13.452,15.000 12.838,15.000 L2.495,15.000 C1.872,15.000 1.286,14.740 0.845,14.268 L0.098,13.467 C0.002,13.365 -0.026,13.211 0.026,13.077 C0.077,12.944 0.199,12.857 0.334,12.857 L4.463,12.857 C2.928,11.585 2.000,9.630 2.000,7.499 L2.000,6.785 C2.000,6.194 2.449,5.713 3.000,5.713 L12.333,5.713 C12.885,5.713 13.333,6.194 13.333,6.785 L13.333,7.343 C13.869,7.160 14.736,6.973 15.355,7.400 C15.783,7.696 16.000,8.209 16.000,8.928 C16.000,11.239 11.903,12.100 11.729,12.136 ZM14.994,8.002 C14.557,7.698 13.715,7.941 13.294,8.113 C13.197,9.261 12.837,10.339 12.255,11.269 C13.480,10.911 15.333,10.116 15.333,8.928 C15.333,8.462 15.223,8.158 14.994,8.002 ZM10.261,4.419 C10.376,4.573 10.353,4.798 10.209,4.921 C10.148,4.974 10.074,4.999 10.001,4.999 C9.903,4.999 9.807,4.954 9.740,4.865 C9.198,4.139 9.198,3.002 9.741,2.277 C10.086,1.816 10.086,1.040 9.742,0.580 C9.627,0.426 9.650,0.201 9.794,0.078 C9.937,-0.044 10.146,-0.020 10.263,0.134 C10.805,0.860 10.805,1.996 10.263,2.722 C9.917,3.183 9.917,3.959 10.261,4.419 ZM8.259,4.419 C8.373,4.573 8.350,4.798 8.207,4.921 C8.145,4.974 8.071,4.999 7.999,4.999 C7.901,4.999 7.804,4.954 7.738,4.865 C7.195,4.139 7.195,3.002 7.738,2.277 C8.082,1.816 8.082,1.040 7.739,0.580 C7.624,0.426 7.647,0.201 7.791,0.078 C7.935,-0.045 8.145,-0.020 8.259,0.134 C8.802,0.860 8.802,1.996 8.259,2.722 C7.915,3.183 7.915,3.959 8.259,4.419 ZM6.261,4.418 C6.376,4.572 6.353,4.797 6.210,4.920 C6.148,4.973 6.074,4.999 6.001,4.999 C5.903,4.999 5.807,4.953 5.741,4.865 C5.198,4.139 5.198,3.002 5.741,2.276 C6.085,1.815 6.085,1.039 5.742,0.580 C5.627,0.426 5.650,0.201 5.794,0.078 C5.937,-0.046 6.147,-0.020 6.262,0.133 C6.804,0.859 6.804,1.996 6.262,2.721 C5.918,3.182 5.918,3.959 6.261,4.418 Z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Conversation Starter")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "author-badge"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "icon_calendar"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: ""
}, "January 16 at 10:32 PM")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "comment-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Cheeky chap jolly good mufty a load of old tosh I don't want no agro a chinwag amongst tickety-boo, tosser victoria sponge horse play happy days give us a bell nice one cup of tea young delinquent wellies, cockup absolutely bladdered barmy bleeding.!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "action-button-container action-btns"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "action_btn btn-ans ask-btn reply-btn"
}, "Reply"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "action_btn btn-ans ask-btn too-btn"
}, "Helpful")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"pagination-wrapper\">\r\n                                <div class=\"view-post-of\">\r\n                                    <p>Viewing 4 Comments - 1 through 10 (of 96 total)</p>\r\n                                </div>\r\n                                <ul class=\"post-pagination\">\r\n                                    <li class=\"prev-post pegi-disable\"><a href=\"#\"><i class=\"arrow_carrot-left\"></i></a>\r\n                                    </li>\r\n                                    <li><a href=\"#\" class=\"active\">1</a></li>\r\n                                    <li><a href=\"#\">2</a></li>\r\n                                    <li><a href=\"#\">3</a></li>\r\n                                    <li><a href=\"#\">4</a></li>\r\n                                    <li><a href=\"#\">15</a></li>\r\n                                    <li class=\"next-post\"><a href=\"#\"><i class=\"arrow_carrot-right\"></i></a></li>\r\n                                </ul>\r\n                            </div> ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.col-lg-8 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "forum_sidebar"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget status_widget"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "c_head"
}, "Information"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "status"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Support is "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "offline"
}, "Offline")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "open-hours"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-sm"
}, "Our office hours"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Monday - Friday / 10am - 6pm (UTC +4) NewYork "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "current-time list-unstyled"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-sm"
}, "Your time"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "10:30:15 PM")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "title-sm"
}, "Your time"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "10:30:15 PM")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.open-hours ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget usefull_links_widget"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "c_head"
}, "Usefull Links"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "list-unstyled usefull-links"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "icon_lightbulb_alt"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "FAQs")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "icon_clock_alt"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Popular")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "icon_piechart"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Recent")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "icon_info_alt"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Unanswered")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget ticket_widget"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "c_head"
}, "Ticket Categories"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "list-unstyled ticket_categories"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/home_support/cmm5.png",
  alt: "category"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Docs WordPress Theme"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "count"
}, "10")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/home_support/cmm4.png",
  alt: "category"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Product Landing"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "count count-fill"
}, "13"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "count"
}, "54")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/home_support/cmm2.png",
  alt: "category"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Knowledge Base"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "count"
}, "142")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/home_support/cmm8.png",
  alt: "category"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Startup and App"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "count"
}, "13")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/home_support/cmm9.png",
  alt: "category"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Clean Email Template"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "count"
}, "123")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/home_support/cmm10.png",
  alt: "category"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Apps WordPress Theme"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "count"
}, "18")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget tag_widget"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "c_head"
}, "Tags"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "list-unstyled w_tag_list style-light"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Swagger")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Docy")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "weCare")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Business")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Download")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Doc")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "WordPress")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Design")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "ui/ux")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Doc Design")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "DocAll")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Productboard")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Magento")])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.col-lg-4 ")])])], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Forum ⋅ "
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AdminHeader"]), _hoisted_2])], 64 /* STABLE_FRAGMENT */);
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

/***/ "./resources/js/Pages/Admin/Forum/Show.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Admin/Forum/Show.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_63430a54__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=63430a54 */ "./resources/js/Pages/Admin/Forum/Show.vue?vue&type=template&id=63430a54");
/* harmony import */ var _Show_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Admin/Forum/Show.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Show_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Show_vue_vue_type_template_id_63430a54__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Admin/Forum/Show.vue"]])
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

/***/ "./resources/js/Pages/Admin/Forum/Show.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Forum/Show.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Forum/Show.vue?vue&type=script&setup=true&lang=js");
 

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

/***/ "./resources/js/Pages/Admin/Forum/Show.vue?vue&type=template&id=63430a54":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Forum/Show.vue?vue&type=template&id=63430a54 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_63430a54__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_63430a54__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=template&id=63430a54 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Forum/Show.vue?vue&type=template&id=63430a54");


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