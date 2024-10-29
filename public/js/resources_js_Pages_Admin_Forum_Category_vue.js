"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_Forum_Category_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Forum/Category.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Forum/Category.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Partials_CorporateUI_AdminHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../Shared/Partials/CorporateUI/AdminHeader */ "./resources/js/Shared/Partials/CorporateUI/AdminHeader.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Category',
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
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns-tz */ "./node_modules/date-fns-tz/esm/index.js");

var getCurrentTime = function getCurrentTime() {
  return (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_0__.formatInTimeZone)(new Date(), 'Asia/Singapore', 'h:mm:ss a');
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Forum/Category.vue?vue&type=template&id=117b4c55":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Forum/Category.vue?vue&type=template&id=117b4c55 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "forum_sidebar_area",
  id: "sticky_doc"
};
var _hoisted_3 = {
  "class": "container-fluid px-0"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "col-xl-9 col-lg-8"
};
var _hoisted_6 = {
  "class": "forum_topic_list_inner"
};
var _hoisted_7 = {
  "class": "forum_l_inner"
};
var _hoisted_8 = {
  "class": "forum_head d-flex justify-content-between"
};
var _hoisted_9 = {
  "class": "nav right"
};
var _hoisted_10 = {
  "class": "dropdown"
};
var _hoisted_11 = {
  "class": "btn dropdown-toggle mb-0",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
};
var _hoisted_12 = {
  "class": "dropdown right_dir"
};
var _hoisted_13 = {
  "class": "btn dropdown-toggle mb-0",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
};
var _hoisted_14 = {
  "class": "dropdown right_dir"
};
var _hoisted_15 = {
  "class": "btn dropdown-toggle mb-0",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
};
var _hoisted_16 = {
  "class": "dropdown-menu"
};
var _hoisted_17 = {
  "class": "all_users short-by scroll"
};
var _hoisted_18 = {
  "class": "dropdown-item active-short",
  href: "#"
};
var _hoisted_19 = {
  "class": "forum_body"
};
var _hoisted_20 = {
  "class": "navbar-nav topic_list"
};
var _hoisted_21 = {
  "class": "media"
};
var _hoisted_22 = {
  "class": "media-right"
};
var _hoisted_23 = {
  "class": "count",
  href: "#"
};
var _hoisted_24 = {
  "class": "count",
  href: "#"
};
var _hoisted_25 = {
  "class": "count",
  href: "#"
};
var _hoisted_26 = {
  "class": "media"
};
var _hoisted_27 = {
  "class": "media-right"
};
var _hoisted_28 = {
  "class": "count",
  href: "#"
};
var _hoisted_29 = {
  "class": "count",
  href: "#"
};
var _hoisted_30 = {
  "class": "count",
  href: "#"
};
var _hoisted_31 = {
  "class": "media"
};
var _hoisted_32 = {
  "class": "media-right"
};
var _hoisted_33 = {
  "class": "count",
  href: "#"
};
var _hoisted_34 = {
  "class": "count",
  href: "#"
};
var _hoisted_35 = {
  "class": "count",
  href: "#"
};
var _hoisted_36 = {
  "class": "media"
};
var _hoisted_37 = {
  "class": "media-body"
};
var _hoisted_38 = {
  "class": "t_title"
};
var _hoisted_39 = {
  href: "/admin/forum/category/single"
};
var _hoisted_40 = {
  "class": "media-right"
};
var _hoisted_41 = {
  "class": "count",
  href: "#"
};
var _hoisted_42 = {
  "class": "count",
  href: "#"
};
var _hoisted_43 = {
  "class": "count",
  href: "#"
};
var _hoisted_44 = {
  "class": "media"
};
var _hoisted_45 = {
  "class": "media-right"
};
var _hoisted_46 = {
  "class": "count",
  href: "#"
};
var _hoisted_47 = {
  "class": "count",
  href: "#"
};
var _hoisted_48 = {
  "class": "count",
  href: "#"
};
var _hoisted_49 = {
  "class": "media"
};
var _hoisted_50 = {
  "class": "media-right"
};
var _hoisted_51 = {
  "class": "count",
  href: "#"
};
var _hoisted_52 = {
  "class": "count",
  href: "#"
};
var _hoisted_53 = {
  "class": "count",
  href: "#"
};
var _hoisted_54 = {
  "class": "media"
};
var _hoisted_55 = {
  "class": "media-right"
};
var _hoisted_56 = {
  "class": "count",
  href: "#"
};
var _hoisted_57 = {
  "class": "count",
  href: "#"
};
var _hoisted_58 = {
  "class": "count",
  href: "#"
};
var _hoisted_59 = {
  "class": "media"
};
var _hoisted_60 = {
  "class": "media-right"
};
var _hoisted_61 = {
  "class": "count",
  href: "#"
};
var _hoisted_62 = {
  "class": "count",
  href: "#"
};
var _hoisted_63 = {
  "class": "count",
  href: "#"
};
var _hoisted_64 = {
  "class": "media"
};
var _hoisted_65 = {
  "class": "media-right"
};
var _hoisted_66 = {
  "class": "count",
  href: "#"
};
var _hoisted_67 = {
  "class": "count",
  href: "#"
};
var _hoisted_68 = {
  "class": "count",
  href: "#"
};
var _hoisted_69 = {
  "class": "media"
};
var _hoisted_70 = {
  "class": "media-right"
};
var _hoisted_71 = {
  "class": "count",
  href: "#"
};
var _hoisted_72 = {
  "class": "count",
  href: "#"
};
var _hoisted_73 = {
  "class": "count",
  href: "#"
};
var _hoisted_74 = {
  "class": "col-xl-3 col-lg-4"
};
var _hoisted_75 = {
  "class": "right_side_forum"
};
var _hoisted_76 = {
  "class": "l_widget comment_list"
};
var _hoisted_77 = {
  "class": "navbar-nav mt-2 mx-2"
};
var _hoisted_78 = {
  "class": "media"
};
var _hoisted_79 = {
  "class": "d-flex align-self-center"
};
var _hoisted_80 = {
  "class": "media"
};
var _hoisted_81 = {
  "class": "d-flex align-self-center"
};
var _hoisted_82 = {
  "class": "media"
};
var _hoisted_83 = {
  "class": "d-flex align-self-center"
};
var _hoisted_84 = {
  "class": "media"
};
var _hoisted_85 = {
  "class": "d-flex align-self-center"
};
var _hoisted_86 = {
  "class": "media"
};
var _hoisted_87 = {
  "class": "d-flex align-self-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_FontAwesomeIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FontAwesomeIcon");
  var _component_ion_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-icon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Category ⋅ Forum ⋅ "
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AdminHeader"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"col-xl-2 d-none d-xl-block\">\r\n                        <div class=\"left_side_forum\">\r\n                            <aside class=\"l_widget forum_list\">\r\n                                <h3 class=\"wd_title\">Forums</h3>\r\n                                <ul class=\"navbar-nav\">\r\n                                    <li class=\"active nav-item\">\r\n                                        <a href=\"#\"><i class=\"social_tumbleupon\"></i>View all</a>\r\n                                    </li>\r\n                                    <li class=\"nav-item\">\r\n                                        <a href=\"#\"><i class=\"icon_lightbulb_alt\"></i>General</a>\r\n                                    </li>\r\n                                    <li class=\"nav-item\">\r\n                                        <a href=\"#\"><i class=\"icon_lightbulb_alt\"></i>Ideas</a>\r\n                                    </li>\r\n                                    <li class=\"nav-item\">\r\n                                        <a href=\"#\"><i class=\"fa fa-user-o\"></i>User Feedback</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </aside>\r\n                        </div>\r\n                    </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_cache[63] || (_cache[63] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"answer-action shadow\"><div class=\"action-content\"><div class=\"image-wrap\"><img src=\"https://html-template.spider-themes.net/docy/img/home_support/answer.png\" alt=\"answer action\"></div><div class=\"content\"><h2 class=\"ans-title\">Can’t find an answer?</h2><p> Make use of a qualified tutor to get the answer </p></div></div><!-- /.action-content --><div class=\"action-button-container\"><a href=\"#\" class=\"action_btn btn-ans\">Ask a Question</a></div><!-- /.action-button-container --></div>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": "nav left"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, "Forum"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li><i class=\"icon_error-circle_alt\"></i> 15 Open</li>\r\n                                        <li><a href=\"#\"><i class=\" icon_check\"></i> 202 Closed</a></li>\r\n                                        <li><a href=\"#\"><i class=\"icon_refresh\"></i> Reset</a></li> ")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_11, [_cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Author ")), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-angle-down"
  })]), _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"dropdown-menu\"><h3 class=\"title\">Filter by author</h3><form action=\"#\" class=\"cate-search-form\"><input type=\"text\" placeholder=\"Search users\"></form><div class=\"all_users scroll mCustomScrollbar _mCS_1 mCS_no_scrollbar\"><div id=\"mCSB_1\" class=\"mCustomScrollBox mCS-light mCSB_vertical mCSB_inside\" style=\"max-height:none;\"><div id=\"mCSB_1_container\" class=\"mCSB_container mCS_y_hidden mCS_no_scrollbar_y\" style=\"position:relative;top:0;left:0;\" dir=\"ltr\"><a class=\"dropdown-item\" href=\"#\"><img src=\"https://html-template.spider-themes.net/docy/img/forum/filter-user-1.png\" alt=\"\" class=\"mCS_img_loaded\"> Donny Peters</a><a class=\"dropdown-item\" href=\"#\"><img src=\"https://html-template.spider-themes.net/docy/img/forum/filter-user-2.png\" alt=\"\" class=\"mCS_img_loaded\">Linh Knapp</a><a class=\"dropdown-item\" href=\"#\"><img src=\"https://html-template.spider-themes.net/docy/img/forum/filter-user-3.png\" alt=\"\" class=\"mCS_img_loaded\">Albert Roach</a><a class=\"dropdown-item\" href=\"#\"><img src=\"https://html-template.spider-themes.net/docy/img/forum/filter-user-4.png\" alt=\"\" class=\"mCS_img_loaded\">Kristin Larsen</a><a class=\"dropdown-item\" href=\"#\"><img src=\"https://html-template.spider-themes.net/docy/img/forum/filter-user-5.png\" alt=\"\" class=\"mCS_img_loaded\">Ernest Patton</a><a class=\"dropdown-item\" href=\"#\"><img src=\"https://html-template.spider-themes.net/docy/img/forum/filter-user-2.png\" alt=\"\" class=\"mCS_img_loaded\">Linh Knapp Patton</a><a class=\"dropdown-item\" href=\"#\"><img src=\"https://html-template.spider-themes.net/docy/img/forum/filter-user-1.png\" alt=\"\" class=\"mCS_img_loaded\">Donny Peters</a></div><div id=\"mCSB_1_scrollbar_vertical\" class=\"mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical\" style=\"display:none;\"><div class=\"mCSB_draggerContainer\"><div id=\"mCSB_1_dragger_vertical\" class=\"mCSB_dragger\" style=\"position:absolute;min-height:30px;\"><div class=\"mCSB_dragger_bar\" style=\"line-height:30px;\"></div><div class=\"mCSB_draggerRail\"></div></div></div></div></div></div></div>", 1))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_13, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Label ")), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-angle-down"
  })]), _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"dropdown-menu\"><h3 class=\"title\">Filter by label</h3><form action=\"#\" class=\"cate-search-form\"><input type=\"text\" placeholder=\"Search Users\"></form><div class=\"all_users scroll\"><a class=\"dropdown-item\" href=\"#\"><span class=\"color red\"></span> bugs</a><a class=\"dropdown-item\" href=\"#\"><span class=\"color blue\"></span> request/feature</a><a class=\"dropdown-item\" href=\"#\"><span class=\"color dark_blue\"></span> Developer Edition</a><a class=\"dropdown-item\" href=\"#\"><span class=\"color green\"></span>help wanted</a><a class=\"dropdown-item\" href=\"#\"><span class=\"color pink\"></span>question</a></div></div>", 1))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_15, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Sort ")), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-angle-down"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": "title"
  }, "Filter by author", -1 /* HOISTED */)), _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    action: "#",
    "class": "cate-search-form"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    placeholder: "Search users"
  })], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_icon, {
    name: "checkmark-outline",
    role: "img",
    "class": "md hydrated",
    "aria-label": "checkmark outline"
  }), _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Newest "))]), _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a class=\"dropdown-item\" href=\"#\"> Oldest </a><a class=\"dropdown-item\" href=\"#\"> Most commented </a><a class=\"dropdown-item\" href=\"#\"> Least commented </a><a class=\"dropdown-item\" href=\"#\"> Recently updated </a><a class=\"dropdown-item\" href=\"#\"> Recently updated </a>", 5))])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/f-user-1.png\" alt=\"\"></div><div class=\"media-body\"><div class=\"t_title\"><a href=\"/admin/forum/category/single\"><h4>One page template</h4></a></div><a href=\"#\"><h6><img src=\"https://html-template.spider-themes.net/docy/img/svg/hashtag.svg\" alt=\"\"> General </h6></a><h6><i class=\"icon_clock_alt\"></i> 26 minutes ago </h6></div>", 2)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": "nav"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "dropdown"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-toggle",
    href: "#",
    role: "button",
    id: "dropdownMenuLink",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/small-u-1.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dropdown-menu",
    "aria-labelledby": "dropdownMenuLink"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-1.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "follow_btn",
    href: "#"
  }, "Follow")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row answere_items"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-heart"
  }), _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 5"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-comments"
  }), _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 70"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-eye"
  }), _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 420"))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/f-user-2.png\" alt=\"\"></div><div class=\"media-body\"><div class=\"t_title\"><a href=\"/admin/forum/category/single\"><h4>Support &quot;IntelliSense&quot; plugin for JetBrains WebStorm </h4></a></div><a href=\"#\"><h6><i class=\"icon_lightbulb_alt\" aria-hidden=\"true\"></i> Ideas </h6></a><h6><i class=\"icon_clock_alt\"></i> 2h ago </h6></div>", 2)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": "nav"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "dropdown"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-toggle",
    href: "#",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/small-u-1.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dropdown-menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-2.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "follow_btn",
    href: "#"
  }, "Follow")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row answere_items"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "dropdown"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-toggle",
    href: "#",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/small-u-2.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dropdown-menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-1.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "follow_btn",
    href: "#"
  }, "Follow")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row answere_items"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "dropdown"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-toggle",
    href: "#",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/small-u-3.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dropdown-menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-2.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "follow_btn",
    href: "#"
  }, "Follow")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row answere_items"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-heart"
  }), _cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 5"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-comments"
  }), _cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 70"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-eye"
  }), _cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 420"))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_cache[24] || (_cache[24] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/f-user-4.png\" alt=\"\"></div><div class=\"media-body\"><div class=\"t_title\"><a href=\"/admin/forum/category/single\"><h4>How to create progressbar with this tailwind css file upload form</h4></a></div><a href=\"#\"><h6><img src=\"https://html-template.spider-themes.net/docy/img/svg/hashtag.svg\" alt=\"\"> General </h6></a><h6><i class=\"icon_calendar\"></i> December 01, 2020 at 8:16 pm </h6></div>", 2)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_cache[23] || (_cache[23] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": "nav"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "dropdown"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-toggle",
    href: "#",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/small-u-3.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dropdown-menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-2.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "follow_btn",
    href: "#"
  }, "Follow")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row answere_items"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "dropdown"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-toggle",
    href: "#",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/small-u-5.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dropdown-menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-1.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "follow_btn",
    href: "#"
  }, "Follow")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row answere_items"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "dropdown"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-toggle",
    href: "#",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/small-u-6.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dropdown-menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-2.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "follow_btn",
    href: "#"
  }, "Follow")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row answere_items"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-heart"
  }), _cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 5"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-comments"
  }), _cache[21] || (_cache[21] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 70"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-eye"
  }), _cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 420"))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_cache[32] || (_cache[32] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "rounded-circle",
    src: "https://html-template.spider-themes.net/docy/img/forum/f-user-4.png",
    alt: ""
  })], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, [_cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("How works and where can found the class? ")), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_icon, {
    name: "checkmark-circle",
    role: "img",
    "class": "md hydrated",
    "aria-label": "checkmark circle"
  })])])]), _cache[26] || (_cache[26] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa fa-futbol-o",
    "aria-hidden": "true"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Help ")])], -1 /* HOISTED */)), _cache[27] || (_cache[27] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon_calendar"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" November 27, 2020 at 10:15 pm ")], -1 /* HOISTED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_cache[31] || (_cache[31] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": "nav"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "dropdown"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-toggle",
    href: "#",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/small-u-7.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dropdown-menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-2.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "follow_btn",
    href: "#"
  }, "Follow")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row answere_items"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "dropdown"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-toggle",
    href: "#",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/small-u-6.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dropdown-menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-1.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "follow_btn",
    href: "#"
  }, "Follow")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row answere_items"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-heart"
  }), _cache[28] || (_cache[28] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 5"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-comments"
  }), _cache[29] || (_cache[29] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 70"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-eye"
  }), _cache[30] || (_cache[30] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 420"))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [_cache[37] || (_cache[37] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/f-user-5.png\" alt=\"\"></div><div class=\"media-body\"><div class=\"t_title\"><a href=\"/admin/forum/category/single\"><h4>Featured Image on Mobile</h4></a></div><a href=\"#\"><h6><i class=\"lnr lnr-users\" aria-hidden=\"true\"></i> User Feedback </h6></a><h6><i class=\"icon_calendar\"></i> November 20, 2020 at 8:16 pm </h6></div>", 2)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_cache[36] || (_cache[36] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": "nav"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "dropdown"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-toggle",
    href: "#",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/small-u-1.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dropdown-menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-1.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "follow_btn",
    href: "#"
  }, "Follow")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row answere_items"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-heart"
  }), _cache[33] || (_cache[33] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 5"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-comments"
  }), _cache[34] || (_cache[34] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 70"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-eye"
  }), _cache[35] || (_cache[35] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 420"))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [_cache[42] || (_cache[42] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/f-user-6.png\" alt=\"\"></div><div class=\"media-body\"><div class=\"t_title\"><a href=\"/admin/forum/category/single\"><h4>Can we get Figma files for Tailwind UI components?</h4></a></div><a href=\"#\"><h6><img src=\"https://html-template.spider-themes.net/docy/img/svg/hashtag.svg\" alt=\"\"> Ideas </h6></a><h6><i class=\"icon_calendar\"></i> November 10, 2020 at 7:16 pm </h6></div>", 2)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [_cache[41] || (_cache[41] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": "nav"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "dropdown"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-toggle",
    href: "#",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/small-u-3.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dropdown-menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-1.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "follow_btn",
    href: "#"
  }, "Follow")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row answere_items"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-heart"
  }), _cache[38] || (_cache[38] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 5"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-comments"
  }), _cache[39] || (_cache[39] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 70"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-eye"
  }), _cache[40] || (_cache[40] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 420"))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [_cache[47] || (_cache[47] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/f-user-7.png\" alt=\"\"></div><div class=\"media-body\"><div class=\"t_title\"><a href=\"/admin/forum/category/single\"><h4>Slow compile performance with Laravel Mix and npm run watch</h4></a></div><a href=\"#\"><h6><img src=\"https://html-template.spider-themes.net/docy/img/svg/hashtag.svg\" alt=\"\"> General </h6></a><h6><i class=\"icon_calendar\"></i> November 05, 2020 at 9:00 am </h6></div>", 2)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [_cache[46] || (_cache[46] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": "nav"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "dropdown"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-toggle",
    href: "#",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/small-u-6.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dropdown-menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-2.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "follow_btn",
    href: "#"
  }, "Follow")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row answere_items"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "dropdown"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-toggle",
    href: "#",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/small-u-7.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dropdown-menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-1.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "follow_btn",
    href: "#"
  }, "Follow")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row answere_items"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "dropdown"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-toggle",
    href: "#",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/small-u-8.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dropdown-menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-2.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "follow_btn",
    href: "#"
  }, "Follow")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row answere_items"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "dropdown"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-toggle",
    href: "#",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/small-u-9.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dropdown-menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-1.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "follow_btn",
    href: "#"
  }, "Follow")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row answere_items"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "dropdown"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-toggle",
    href: "#",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/small-u-10.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dropdown-menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-2.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "follow_btn",
    href: "#"
  }, "Follow")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row answere_items"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-heart"
  }), _cache[43] || (_cache[43] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 5"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-comments"
  }), _cache[44] || (_cache[44] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 70"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-eye"
  }), _cache[45] || (_cache[45] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 420"))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [_cache[52] || (_cache[52] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/f-user-8.png\" alt=\"\"></div><div class=\"media-body\"><div class=\"t_title\"><a href=\"/admin/forum/category/single\"><h4>How do correctly describe the opacity for a colors?</h4></a></div><a href=\"#\"><h6><i class=\"fa fa-futbol-o\" aria-hidden=\"true\"></i> Help </h6></a><h6><i class=\"icon_calendar\"></i> November 01, 2020 at 3:16 pm </h6></div>", 2)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [_cache[51] || (_cache[51] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": "nav"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "dropdown"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-toggle",
    href: "#",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/small-u-1.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dropdown-menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-2.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "follow_btn",
    href: "#"
  }, "Follow")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row answere_items"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-heart"
  }), _cache[48] || (_cache[48] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 5"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-comments"
  }), _cache[49] || (_cache[49] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 70"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-eye"
  }), _cache[50] || (_cache[50] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 420"))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [_cache[57] || (_cache[57] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/f-user-9.png\" alt=\"\"></div><div class=\"media-body\"><div class=\"t_title\"><a href=\"/admin/forum/category/single\"><h4>Add CSS writing-mode classes to Tailwind</h4></a></div><a href=\"#\"><h6><i class=\"lnr lnr-users\" aria-hidden=\"true\"></i> User Feedback </h6></a><h6><i class=\"icon_calendar\"></i> September 27, 2020 at 11:05 pm </h6></div>", 2)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [_cache[56] || (_cache[56] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": "nav"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "dropdown"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-toggle",
    href: "#",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/small-u-2.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dropdown-menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-1.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "follow_btn",
    href: "#"
  }, "Follow")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row answere_items"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-heart"
  }), _cache[53] || (_cache[53] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 5"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-comments"
  }), _cache[54] || (_cache[54] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 70"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-eye"
  }), _cache[55] || (_cache[55] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 420"))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [_cache[62] || (_cache[62] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/f-user-10.png\" alt=\"\"></div><div class=\"media-body\"><div class=\"t_title\"><a href=\"/admin/forum/category/single\"><h4>Generating docs from a custom tailwind.config.js</h4></a></div><a href=\"#\"><h6><i class=\"icon_lightbulb_alt\" aria-hidden=\"true\"></i> Ideas </h6></a><h6><i class=\"icon_calendar\"></i> September 15, 2020 at 8:16 pm </h6></div>", 2)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [_cache[61] || (_cache[61] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": "nav"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "dropdown"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-toggle",
    href: "#",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/small-u-10.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dropdown-menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-1.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "follow_btn",
    href: "#"
  }, "Follow")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row answere_items"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "dropdown"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "dropdown-toggle",
    href: "#",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/small-u-11.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dropdown-menu"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-2.png",
    alt: ""
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "follow_btn",
    href: "#"
  }, "Follow")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row answere_items"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-heart"
  }), _cache[58] || (_cache[58] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 5"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-comments"
  }), _cache[59] || (_cache[59] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 70"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-eye"
  }), _cache[60] || (_cache[60] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 420"))])])])])])])]), _cache[64] || (_cache[64] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row pagination_inner\"><div class=\"col-lg-2\"><h6>Total: <span> 225 </span></h6></div><div class=\"col-lg-8\"><nav aria-label=\"Page navigation example\"><ul class=\"pagination justify-content-center\"><li class=\"page-item\"><a class=\"page-link\" href=\"#\"><i class=\"arrow_carrot-left\"></i> Previous</a></li><li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">...</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">21</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next <i class=\"arrow_carrot-right\"></i></a></li></ul></nav></div><div class=\"col-lg-2\"><div class=\"input-group go_btn\"><input type=\"number\" class=\"form-control\" aria-label=\"Recipient&#39;s username\"><div class=\"input-group-append\"><button class=\"btn btn-outline-secondary\" type=\"button\">Go</button></div></div></div></div>", 1))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <aside class=\"r_widget qustion_wd\">\r\n                                <button class=\"btn\" type=\"button\"><img src=\"https://html-template.spider-themes.net/docy/img/forum/helpful-user/question-1.png\" alt=\"\">Ask Question <i class=\"arrow_carrot-right\"></i></button>\r\n                            </aside> "), _cache[71] || (_cache[71] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<aside class=\"r_widget user_list_wd\"><div class=\"r_heading d-flex justify-content-between\"><h3>Most Helpful</h3><h5>Last 30 days</h5></div><ul class=\"navbar-nav\"><li><a href=\"#\"><div class=\"media\"><div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/helpful-user/h-user-1.png\" alt=\"\"></div><div class=\"media-body\"><h4>cleo-parra</h4></div><div class=\"media-right\"><div class=\"count\"> 10 </div><i class=\"icon_check_alt\"></i></div></div></a></li><li><a href=\"#\"><div class=\"media\"><div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/helpful-user/h-user-2.png\" alt=\"\"></div><div class=\"media-body\"><h4>roy_marin</h4></div><div class=\"media-right\"><div class=\"count\"> 08 </div><i class=\"icon_check_alt\"></i></div></div></a></li><li><a href=\"#\"><div class=\"media\"><div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/helpful-user/h-user-3.png\" alt=\"\"></div><div class=\"media-body\"><h4>hellen.austin</h4></div><div class=\"media-right\"><div class=\"count\"> 05 </div><i class=\"icon_check_alt\"></i></div></div></a></li><li><a href=\"#\"><div class=\"media\"><div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/helpful-user/h-user-4.png\" alt=\"\"></div><div class=\"media-body\"><h4>erna.may</h4></div><div class=\"media-right\"><div class=\"count\"> 03 </div><i class=\"icon_check_alt\"></i></div></div></a></li><li><a href=\"#\"><div class=\"media\"><div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/helpful-user/h-user-5.png\" alt=\"\"></div><div class=\"media-body\"><h4>jacobson</h4></div><div class=\"media-right\"><div class=\"count\"> 02 </div><i class=\"icon_check_alt\"></i></div></div></a></li><li><a href=\"#\"><div class=\"media\"><div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/helpful-user/h-user-6.png\" alt=\"\"></div><div class=\"media-body\"><h4>van.mays</h4></div><div class=\"media-right\"><div class=\"count\"> 01 </div><i class=\"icon_check_alt\"></i></div></div></a></li><li><a href=\"#\"><div class=\"media\"><div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/helpful-user/h-user-7.png\" alt=\"\"></div><div class=\"media-body\"><h4>steve_barr</h4></div><div class=\"media-right\"><div class=\"count\"> 01 </div><i class=\"icon_check_alt\"></i></div></div></a></li></ul></aside>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <aside class=\"r_widget question_list_wd\">\r\n                                <div class=\"r_heading d-flex justify-content-between\">\r\n                                    <h3>Top</h3>\r\n                                    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n                                        <li class=\"nav-item\" role=\"presentation\">\r\n                                            <a class=\"nav-link active\" id=\"home-tab\" data-bs-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">7 days</a>\r\n                                        </li>\r\n                                        <li class=\"nav-item\" role=\"presentation\">\r\n                                            <a class=\"nav-link\" id=\"profile-tab\" data-bs-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">30 days</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"tab-content\" id=\"myTabContent\">\r\n                                    <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n                                        <ul class=\"navbar-nav\">\r\n                                            <li><a href=\"#\"><span>01</span>Example of NearBy Place Search - SITE KIT</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\"><span>02</span>Example of Direction Steps - MAP KIT</a></li>\r\n                                            <li><a href=\"#\"><span>03</span>Introduction to AppGallery Connect Crash\r\n                                                    Service</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\"><span>04</span>Bank Card Recognition and Payment Screen - ML\r\n                                                    KIT</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\"><span>05</span>Example of Direction Steps - MAP KIT</a></li>\r\n                                            <li><a href=\"#\"><span>06</span>Example of NearBy Place Search - SITE KIT</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                    <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\r\n                                        <ul class=\"navbar-nav\">\r\n                                            <li><a href=\"#\"><span>01</span>Example of NearBy Place Search - SITE KIT</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\"><span>02</span>Example of Direction Steps - MAP KIT</a></li>\r\n                                            <li><a href=\"#\"><span>03</span>Introduction to AppGallery Connect Crash\r\n                                                    Service</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\"><span>04</span>Bank Card Recognition and Payment Screen - ML\r\n                                                    KIT</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\"><span>05</span>Example of Direction Steps - MAP KIT</a></li>\r\n                                            <li><a href=\"#\"><span>06</span>Example of NearBy Place Search - SITE KIT</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </aside> "), _cache[72] || (_cache[72] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<aside class=\"l_widget user_list_wd\"><div class=\"r_heading d-flex justify-content-between\"><h3>Tags</h3><!-- &lt;h5&gt;Last 30 days&lt;/h5&gt; --></div><!-- &lt;h3 class=&quot;wd_title&quot;&gt;Tags&lt;/h3&gt; --><ul class=\"list-unstyled w_tag_list style-light p-3\"><li><a href=\"#\">Swagger</a></li><li><a href=\"#\">Docy</a></li><li><a href=\"#\">weCare</a></li><li><a href=\"#\">Business</a></li><li><a href=\"#\">Download</a></li><li><a href=\"#\">Doc</a></li><li><a href=\"#\">Product board</a></li><li><a href=\"#\">WordPress</a></li><li><a href=\"#\">Design</a></li><li><a href=\"#\">ui/ux</a></li><li><a href=\"#\">Doc Design</a></li><li><a href=\"#\">DocAll</a></li></ul></aside>", 1)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_76, [_cache[70] || (_cache[70] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "r_heading d-flex justify-content-between"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Recent Topics")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <h3 class=\"wd_title\">Recent Topics</h3> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-comment-dots"
  })]), _cache[65] || (_cache[65] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Intégration 300 by")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/r-topic-user.png",
    alt: ""
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Jean Conner")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "4 days, 3 hours ago")], -1 /* HOISTED */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-comment-dots"
  })]), _cache[66] || (_cache[66] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "how by")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/r-topic-user.png",
    alt: ""
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Lucile Barber")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "1 week ago")], -1 /* HOISTED */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-comment-dots"
  })]), _cache[67] || (_cache[67] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "testing by")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/r-topic-user.png",
    alt: ""
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Dwain Cherry")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "3 days, 20 hours ago")], -1 /* HOISTED */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-comment-dots"
  })]), _cache[68] || (_cache[68] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Title by")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/r-topic-user.png",
    alt: ""
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Kati Burch")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "1 month ago")], -1 /* HOISTED */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-comment-dots"
  })]), _cache[69] || (_cache[69] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "media-body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Green Planet by")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "https://html-template.spider-themes.net/docy/img/forum/r-topic-user.png",
    alt: ""
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Morris Ruiz")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "1 week, 2 days ago")], -1 /* HOISTED */))])])])])])])])])])])], 64 /* STABLE_FRAGMENT */);
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
var _hoisted_3 = {
  "class": "text-end fs-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.currentTime), 1 /* TEXT */), _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.timezone), 1 /* TEXT */)]);
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

/***/ "./resources/js/Pages/Admin/Forum/Category.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Admin/Forum/Category.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Category_vue_vue_type_template_id_117b4c55__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.vue?vue&type=template&id=117b4c55 */ "./resources/js/Pages/Admin/Forum/Category.vue?vue&type=template&id=117b4c55");
/* harmony import */ var _Category_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Admin/Forum/Category.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var D_xampp_htdocs_clients_finark_laravel_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_clients_finark_laravel_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Category_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Category_vue_vue_type_template_id_117b4c55__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Admin/Forum/Category.vue"]])
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
/* harmony import */ var D_xampp_htdocs_clients_finark_laravel_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_clients_finark_laravel_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DigitalClockWidget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DigitalClockWidget_vue_vue_type_template_id_60f55f47__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Components/DigitalClockWidget.vue"]])
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
/* harmony import */ var D_xampp_htdocs_clients_finark_laravel_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_clients_finark_laravel_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AdminHeader_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AdminHeader_vue_vue_type_template_id_ac28f7f6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Partials/CorporateUI/AdminHeader.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Admin/Forum/Category.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Forum/Category.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Category_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Category_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Category.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Forum/Category.vue?vue&type=script&setup=true&lang=js");
 

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

/***/ "./resources/js/Pages/Admin/Forum/Category.vue?vue&type=template&id=117b4c55":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Forum/Category.vue?vue&type=template&id=117b4c55 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Category_vue_vue_type_template_id_117b4c55__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Category_vue_vue_type_template_id_117b4c55__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Category.vue?vue&type=template&id=117b4c55 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Forum/Category.vue?vue&type=template&id=117b4c55");


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