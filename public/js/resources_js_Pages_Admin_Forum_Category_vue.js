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
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"answer-action shadow\"><div class=\"action-content\"><div class=\"image-wrap\"><img src=\"https://html-template.spider-themes.net/docy/img/home_support/answer.png\" alt=\"answer action\"></div><div class=\"content\"><h2 class=\"ans-title\">Can’t find an answer?</h2><p> Make use of a qualified tutor to get the answer </p></div></div><!-- /.action-content --><div class=\"action-button-container\"><a href=\"#\" class=\"action_btn btn-ans\">Ask a Question</a></div><!-- /.action-button-container --></div>", 1);
var _hoisted_8 = {
  "class": "forum_l_inner"
};
var _hoisted_9 = {
  "class": "forum_head d-flex justify-content-between"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav left"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, "Forum"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li><i class=\"icon_error-circle_alt\"></i> 15 Open</li>\r\n                                        <li><a href=\"#\"><i class=\" icon_check\"></i> 202 Closed</a></li>\r\n                                        <li><a href=\"#\"><i class=\"icon_refresh\"></i> Reset</a></li> ")], -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "nav right"
};
var _hoisted_12 = {
  "class": "dropdown"
};
var _hoisted_13 = {
  "class": "btn dropdown-toggle mb-0",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"dropdown-menu\"><h3 class=\"title\">Filter by author</h3><form action=\"#\" class=\"cate-search-form\"><input type=\"text\" placeholder=\"Search users\"></form><div class=\"all_users scroll mCustomScrollbar _mCS_1 mCS_no_scrollbar\"><div id=\"mCSB_1\" class=\"mCustomScrollBox mCS-light mCSB_vertical mCSB_inside\" style=\"max-height:none;\"><div id=\"mCSB_1_container\" class=\"mCSB_container mCS_y_hidden mCS_no_scrollbar_y\" style=\"position:relative;top:0;left:0;\" dir=\"ltr\"><a class=\"dropdown-item\" href=\"#\"><img src=\"https://html-template.spider-themes.net/docy/img/forum/filter-user-1.png\" alt=\"\" class=\"mCS_img_loaded\"> Donny Peters</a><a class=\"dropdown-item\" href=\"#\"><img src=\"https://html-template.spider-themes.net/docy/img/forum/filter-user-2.png\" alt=\"\" class=\"mCS_img_loaded\">Linh Knapp</a><a class=\"dropdown-item\" href=\"#\"><img src=\"https://html-template.spider-themes.net/docy/img/forum/filter-user-3.png\" alt=\"\" class=\"mCS_img_loaded\">Albert Roach</a><a class=\"dropdown-item\" href=\"#\"><img src=\"https://html-template.spider-themes.net/docy/img/forum/filter-user-4.png\" alt=\"\" class=\"mCS_img_loaded\">Kristin Larsen</a><a class=\"dropdown-item\" href=\"#\"><img src=\"https://html-template.spider-themes.net/docy/img/forum/filter-user-5.png\" alt=\"\" class=\"mCS_img_loaded\">Ernest Patton</a><a class=\"dropdown-item\" href=\"#\"><img src=\"https://html-template.spider-themes.net/docy/img/forum/filter-user-2.png\" alt=\"\" class=\"mCS_img_loaded\">Linh Knapp Patton</a><a class=\"dropdown-item\" href=\"#\"><img src=\"https://html-template.spider-themes.net/docy/img/forum/filter-user-1.png\" alt=\"\" class=\"mCS_img_loaded\">Donny Peters</a></div><div id=\"mCSB_1_scrollbar_vertical\" class=\"mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical\" style=\"display:none;\"><div class=\"mCSB_draggerContainer\"><div id=\"mCSB_1_dragger_vertical\" class=\"mCSB_dragger\" style=\"position:absolute;min-height:30px;\"><div class=\"mCSB_dragger_bar\" style=\"line-height:30px;\"></div><div class=\"mCSB_draggerRail\"></div></div></div></div></div></div></div>", 1);
var _hoisted_15 = {
  "class": "dropdown right_dir"
};
var _hoisted_16 = {
  "class": "btn dropdown-toggle mb-0",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
};
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"dropdown-menu\"><h3 class=\"title\">Filter by label</h3><form action=\"#\" class=\"cate-search-form\"><input type=\"text\" placeholder=\"Search Users\"></form><div class=\"all_users scroll\"><a class=\"dropdown-item\" href=\"#\"><span class=\"color red\"></span> bugs</a><a class=\"dropdown-item\" href=\"#\"><span class=\"color blue\"></span> request/feature</a><a class=\"dropdown-item\" href=\"#\"><span class=\"color dark_blue\"></span> Developer Edition</a><a class=\"dropdown-item\" href=\"#\"><span class=\"color green\"></span>help wanted</a><a class=\"dropdown-item\" href=\"#\"><span class=\"color pink\"></span>question</a></div></div>", 1);
var _hoisted_18 = {
  "class": "dropdown right_dir"
};
var _hoisted_19 = {
  "class": "btn dropdown-toggle mb-0",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
};
var _hoisted_20 = {
  "class": "dropdown-menu"
};
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "title"
}, "Filter by author", -1 /* HOISTED */);
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
  action: "#",
  "class": "cate-search-form"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  placeholder: "Search users"
})], -1 /* HOISTED */);
var _hoisted_23 = {
  "class": "all_users short-by scroll"
};
var _hoisted_24 = {
  "class": "dropdown-item active-short",
  href: "#"
};
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<a class=\"dropdown-item\" href=\"#\"> Oldest </a><a class=\"dropdown-item\" href=\"#\"> Most commented </a><a class=\"dropdown-item\" href=\"#\"> Least commented </a><a class=\"dropdown-item\" href=\"#\"> Recently updated </a><a class=\"dropdown-item\" href=\"#\"> Recently updated </a>", 5);
var _hoisted_30 = {
  "class": "forum_body"
};
var _hoisted_31 = {
  "class": "navbar-nav topic_list"
};
var _hoisted_32 = {
  "class": "media"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/f-user-1.png\" alt=\"\"></div><div class=\"media-body\"><div class=\"t_title\"><a href=\"/admin/forum/category/single\"><h4>One page template</h4></a></div><a href=\"#\"><h6><img src=\"https://html-template.spider-themes.net/docy/img/svg/hashtag.svg\" alt=\"\"> General </h6></a><h6><i class=\"icon_clock_alt\"></i> 26 minutes ago </h6></div>", 2);
var _hoisted_35 = {
  "class": "media-right"
};
var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-toggle",
  href: "#",
  role: "button",
  id: "dropdownMenuLink",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/small-u-1.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu",
  "aria-labelledby": "dropdownMenuLink"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-1.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "follow_btn",
  href: "#"
}, "Follow")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row answere_items"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])])], -1 /* HOISTED */);
var _hoisted_37 = {
  "class": "count",
  href: "#"
};
var _hoisted_38 = {
  "class": "count",
  href: "#"
};
var _hoisted_39 = {
  "class": "count",
  href: "#"
};
var _hoisted_40 = {
  "class": "media"
};
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/f-user-2.png\" alt=\"\"></div><div class=\"media-body\"><div class=\"t_title\"><a href=\"/admin/forum/category/single\"><h4>Support &quot;IntelliSense&quot; plugin for JetBrains WebStorm </h4></a></div><a href=\"#\"><h6><i class=\"icon_lightbulb_alt\" aria-hidden=\"true\"></i> Ideas </h6></a><h6><i class=\"icon_clock_alt\"></i> 2h ago </h6></div>", 2);
var _hoisted_43 = {
  "class": "media-right"
};
var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-toggle",
  href: "#",
  role: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/small-u-1.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-2.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "follow_btn",
  href: "#"
}, "Follow")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row answere_items"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-toggle",
  href: "#",
  role: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/small-u-2.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-1.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "follow_btn",
  href: "#"
}, "Follow")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row answere_items"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-toggle",
  href: "#",
  role: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/small-u-3.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-2.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "follow_btn",
  href: "#"
}, "Follow")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row answere_items"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])])], -1 /* HOISTED */);
var _hoisted_45 = {
  "class": "count",
  href: "#"
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
  "class": "media"
};
var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/f-user-4.png\" alt=\"\"></div><div class=\"media-body\"><div class=\"t_title\"><a href=\"/admin/forum/category/single\"><h4>How to create progressbar with this tailwind css file upload form</h4></a></div><a href=\"#\"><h6><img src=\"https://html-template.spider-themes.net/docy/img/svg/hashtag.svg\" alt=\"\"> General </h6></a><h6><i class=\"icon_calendar\"></i> December 01, 2020 at 8:16 pm </h6></div>", 2);
var _hoisted_51 = {
  "class": "media-right"
};
var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-toggle",
  href: "#",
  role: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/small-u-3.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-2.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "follow_btn",
  href: "#"
}, "Follow")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row answere_items"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-toggle",
  href: "#",
  role: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/small-u-5.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-1.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "follow_btn",
  href: "#"
}, "Follow")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row answere_items"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-toggle",
  href: "#",
  role: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/small-u-6.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-2.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "follow_btn",
  href: "#"
}, "Follow")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row answere_items"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])])], -1 /* HOISTED */);
var _hoisted_53 = {
  "class": "count",
  href: "#"
};
var _hoisted_54 = {
  "class": "count",
  href: "#"
};
var _hoisted_55 = {
  "class": "count",
  href: "#"
};
var _hoisted_56 = {
  "class": "media"
};
var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "rounded-circle",
  src: "https://html-template.spider-themes.net/docy/img/forum/f-user-4.png",
  alt: ""
})], -1 /* HOISTED */);
var _hoisted_58 = {
  "class": "media-body"
};
var _hoisted_59 = {
  "class": "t_title"
};
var _hoisted_60 = {
  href: "/admin/forum/category/single"
};
var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-futbol-o",
  "aria-hidden": "true"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Help ")])], -1 /* HOISTED */);
var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "icon_calendar"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" November 27, 2020 at 10:15 pm ")], -1 /* HOISTED */);
var _hoisted_63 = {
  "class": "media-right"
};
var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-toggle",
  href: "#",
  role: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/small-u-7.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-2.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "follow_btn",
  href: "#"
}, "Follow")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row answere_items"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-toggle",
  href: "#",
  role: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/small-u-6.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-1.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "follow_btn",
  href: "#"
}, "Follow")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row answere_items"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])])], -1 /* HOISTED */);
var _hoisted_65 = {
  "class": "count",
  href: "#"
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
  "class": "media"
};
var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/f-user-5.png\" alt=\"\"></div><div class=\"media-body\"><div class=\"t_title\"><a href=\"/admin/forum/category/single\"><h4>Featured Image on Mobile</h4></a></div><a href=\"#\"><h6><i class=\"lnr lnr-users\" aria-hidden=\"true\"></i> User Feedback </h6></a><h6><i class=\"icon_calendar\"></i> November 20, 2020 at 8:16 pm </h6></div>", 2);
var _hoisted_71 = {
  "class": "media-right"
};
var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-toggle",
  href: "#",
  role: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/small-u-1.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-1.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "follow_btn",
  href: "#"
}, "Follow")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row answere_items"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])])], -1 /* HOISTED */);
var _hoisted_73 = {
  "class": "count",
  href: "#"
};
var _hoisted_74 = {
  "class": "count",
  href: "#"
};
var _hoisted_75 = {
  "class": "count",
  href: "#"
};
var _hoisted_76 = {
  "class": "media"
};
var _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/f-user-6.png\" alt=\"\"></div><div class=\"media-body\"><div class=\"t_title\"><a href=\"/admin/forum/category/single\"><h4>Can we get Figma files for Tailwind UI components?</h4></a></div><a href=\"#\"><h6><img src=\"https://html-template.spider-themes.net/docy/img/svg/hashtag.svg\" alt=\"\"> Ideas </h6></a><h6><i class=\"icon_calendar\"></i> November 10, 2020 at 7:16 pm </h6></div>", 2);
var _hoisted_79 = {
  "class": "media-right"
};
var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-toggle",
  href: "#",
  role: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/small-u-3.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-1.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "follow_btn",
  href: "#"
}, "Follow")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row answere_items"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])])], -1 /* HOISTED */);
var _hoisted_81 = {
  "class": "count",
  href: "#"
};
var _hoisted_82 = {
  "class": "count",
  href: "#"
};
var _hoisted_83 = {
  "class": "count",
  href: "#"
};
var _hoisted_84 = {
  "class": "media"
};
var _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/f-user-7.png\" alt=\"\"></div><div class=\"media-body\"><div class=\"t_title\"><a href=\"/admin/forum/category/single\"><h4>Slow compile performance with Laravel Mix and npm run watch</h4></a></div><a href=\"#\"><h6><img src=\"https://html-template.spider-themes.net/docy/img/svg/hashtag.svg\" alt=\"\"> General </h6></a><h6><i class=\"icon_calendar\"></i> November 05, 2020 at 9:00 am </h6></div>", 2);
var _hoisted_87 = {
  "class": "media-right"
};
var _hoisted_88 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-toggle",
  href: "#",
  role: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/small-u-6.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-2.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "follow_btn",
  href: "#"
}, "Follow")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row answere_items"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-toggle",
  href: "#",
  role: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/small-u-7.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-1.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "follow_btn",
  href: "#"
}, "Follow")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row answere_items"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-toggle",
  href: "#",
  role: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/small-u-8.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-2.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "follow_btn",
  href: "#"
}, "Follow")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row answere_items"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-toggle",
  href: "#",
  role: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/small-u-9.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-1.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "follow_btn",
  href: "#"
}, "Follow")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row answere_items"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-toggle",
  href: "#",
  role: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/small-u-10.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-2.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "follow_btn",
  href: "#"
}, "Follow")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row answere_items"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])])], -1 /* HOISTED */);
var _hoisted_89 = {
  "class": "count",
  href: "#"
};
var _hoisted_90 = {
  "class": "count",
  href: "#"
};
var _hoisted_91 = {
  "class": "count",
  href: "#"
};
var _hoisted_92 = {
  "class": "media"
};
var _hoisted_93 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/f-user-8.png\" alt=\"\"></div><div class=\"media-body\"><div class=\"t_title\"><a href=\"/admin/forum/category/single\"><h4>How do correctly describe the opacity for a colors?</h4></a></div><a href=\"#\"><h6><i class=\"fa fa-futbol-o\" aria-hidden=\"true\"></i> Help </h6></a><h6><i class=\"icon_calendar\"></i> November 01, 2020 at 3:16 pm </h6></div>", 2);
var _hoisted_95 = {
  "class": "media-right"
};
var _hoisted_96 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-toggle",
  href: "#",
  role: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/small-u-1.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-2.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "follow_btn",
  href: "#"
}, "Follow")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row answere_items"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])])], -1 /* HOISTED */);
var _hoisted_97 = {
  "class": "count",
  href: "#"
};
var _hoisted_98 = {
  "class": "count",
  href: "#"
};
var _hoisted_99 = {
  "class": "count",
  href: "#"
};
var _hoisted_100 = {
  "class": "media"
};
var _hoisted_101 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/f-user-9.png\" alt=\"\"></div><div class=\"media-body\"><div class=\"t_title\"><a href=\"/admin/forum/category/single\"><h4>Add CSS writing-mode classes to Tailwind</h4></a></div><a href=\"#\"><h6><i class=\"lnr lnr-users\" aria-hidden=\"true\"></i> User Feedback </h6></a><h6><i class=\"icon_calendar\"></i> September 27, 2020 at 11:05 pm </h6></div>", 2);
var _hoisted_103 = {
  "class": "media-right"
};
var _hoisted_104 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-toggle",
  href: "#",
  role: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/small-u-2.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-1.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "follow_btn",
  href: "#"
}, "Follow")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row answere_items"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])])], -1 /* HOISTED */);
var _hoisted_105 = {
  "class": "count",
  href: "#"
};
var _hoisted_106 = {
  "class": "count",
  href: "#"
};
var _hoisted_107 = {
  "class": "count",
  href: "#"
};
var _hoisted_108 = {
  "class": "media"
};
var _hoisted_109 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/f-user-10.png\" alt=\"\"></div><div class=\"media-body\"><div class=\"t_title\"><a href=\"/admin/forum/category/single\"><h4>Generating docs from a custom tailwind.config.js</h4></a></div><a href=\"#\"><h6><i class=\"icon_lightbulb_alt\" aria-hidden=\"true\"></i> Ideas </h6></a><h6><i class=\"icon_calendar\"></i> September 15, 2020 at 8:16 pm </h6></div>", 2);
var _hoisted_111 = {
  "class": "media-right"
};
var _hoisted_112 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-toggle",
  href: "#",
  role: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/small-u-10.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-1.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "follow_btn",
  href: "#"
}, "Follow")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row answere_items"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "dropdown-toggle",
  href: "#",
  role: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/small-u-11.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown-menu"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/user-hover-2.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Jonah Terry")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "follow_btn",
  href: "#"
}, "Follow")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row answere_items"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Answers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Question")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "40")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Followers")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "30")])])])])], -1 /* HOISTED */);
var _hoisted_113 = {
  "class": "count",
  href: "#"
};
var _hoisted_114 = {
  "class": "count",
  href: "#"
};
var _hoisted_115 = {
  "class": "count",
  href: "#"
};
var _hoisted_116 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row pagination_inner\"><div class=\"col-lg-2\"><h6>Total: <span> 225 </span></h6></div><div class=\"col-lg-8\"><nav aria-label=\"Page navigation example\"><ul class=\"pagination justify-content-center\"><li class=\"page-item\"><a class=\"page-link\" href=\"#\"><i class=\"arrow_carrot-left\"></i> Previous</a></li><li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">...</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">21</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next <i class=\"arrow_carrot-right\"></i></a></li></ul></nav></div><div class=\"col-lg-2\"><div class=\"input-group go_btn\"><input type=\"number\" class=\"form-control\" aria-label=\"Recipient&#39;s username\"><div class=\"input-group-append\"><button class=\"btn btn-outline-secondary\" type=\"button\">Go</button></div></div></div></div>", 1);
var _hoisted_117 = {
  "class": "col-xl-3 col-lg-4"
};
var _hoisted_118 = {
  "class": "right_side_forum"
};
var _hoisted_119 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<aside class=\"r_widget user_list_wd\"><div class=\"r_heading d-flex justify-content-between\"><h3>Most Helpful</h3><h5>Last 30 days</h5></div><ul class=\"navbar-nav\"><li><a href=\"#\"><div class=\"media\"><div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/helpful-user/h-user-1.png\" alt=\"\"></div><div class=\"media-body\"><h4>cleo-parra</h4></div><div class=\"media-right\"><div class=\"count\"> 10 </div><i class=\"icon_check_alt\"></i></div></div></a></li><li><a href=\"#\"><div class=\"media\"><div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/helpful-user/h-user-2.png\" alt=\"\"></div><div class=\"media-body\"><h4>roy_marin</h4></div><div class=\"media-right\"><div class=\"count\"> 08 </div><i class=\"icon_check_alt\"></i></div></div></a></li><li><a href=\"#\"><div class=\"media\"><div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/helpful-user/h-user-3.png\" alt=\"\"></div><div class=\"media-body\"><h4>hellen.austin</h4></div><div class=\"media-right\"><div class=\"count\"> 05 </div><i class=\"icon_check_alt\"></i></div></div></a></li><li><a href=\"#\"><div class=\"media\"><div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/helpful-user/h-user-4.png\" alt=\"\"></div><div class=\"media-body\"><h4>erna.may</h4></div><div class=\"media-right\"><div class=\"count\"> 03 </div><i class=\"icon_check_alt\"></i></div></div></a></li><li><a href=\"#\"><div class=\"media\"><div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/helpful-user/h-user-5.png\" alt=\"\"></div><div class=\"media-body\"><h4>jacobson</h4></div><div class=\"media-right\"><div class=\"count\"> 02 </div><i class=\"icon_check_alt\"></i></div></div></a></li><li><a href=\"#\"><div class=\"media\"><div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/helpful-user/h-user-6.png\" alt=\"\"></div><div class=\"media-body\"><h4>van.mays</h4></div><div class=\"media-right\"><div class=\"count\"> 01 </div><i class=\"icon_check_alt\"></i></div></div></a></li><li><a href=\"#\"><div class=\"media\"><div class=\"d-flex\"><img class=\"rounded-circle\" src=\"https://html-template.spider-themes.net/docy/img/forum/helpful-user/h-user-7.png\" alt=\"\"></div><div class=\"media-body\"><h4>steve_barr</h4></div><div class=\"media-right\"><div class=\"count\"> 01 </div><i class=\"icon_check_alt\"></i></div></div></a></li></ul></aside>", 1);
var _hoisted_120 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<aside class=\"l_widget user_list_wd\"><div class=\"r_heading d-flex justify-content-between\"><h3>Tags</h3><!-- &lt;h5&gt;Last 30 days&lt;/h5&gt; --></div><!-- &lt;h3 class=&quot;wd_title&quot;&gt;Tags&lt;/h3&gt; --><ul class=\"list-unstyled w_tag_list style-light p-3\"><li><a href=\"#\">Swagger</a></li><li><a href=\"#\">Docy</a></li><li><a href=\"#\">weCare</a></li><li><a href=\"#\">Business</a></li><li><a href=\"#\">Download</a></li><li><a href=\"#\">Doc</a></li><li><a href=\"#\">Product board</a></li><li><a href=\"#\">WordPress</a></li><li><a href=\"#\">Design</a></li><li><a href=\"#\">ui/ux</a></li><li><a href=\"#\">Doc Design</a></li><li><a href=\"#\">DocAll</a></li></ul></aside>", 1);
var _hoisted_121 = {
  "class": "l_widget comment_list"
};
var _hoisted_122 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "r_heading d-flex justify-content-between"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Recent Topics")], -1 /* HOISTED */);
var _hoisted_123 = {
  "class": "navbar-nav mt-2 mx-2"
};
var _hoisted_124 = {
  "class": "media"
};
var _hoisted_125 = {
  "class": "d-flex align-self-center"
};
var _hoisted_126 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Intégration 300 by")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/r-topic-user.png",
  alt: ""
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Jean Conner")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "4 days, 3 hours ago")], -1 /* HOISTED */);
var _hoisted_127 = {
  "class": "media"
};
var _hoisted_128 = {
  "class": "d-flex align-self-center"
};
var _hoisted_129 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "how by")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/r-topic-user.png",
  alt: ""
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Lucile Barber")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "1 week ago")], -1 /* HOISTED */);
var _hoisted_130 = {
  "class": "media"
};
var _hoisted_131 = {
  "class": "d-flex align-self-center"
};
var _hoisted_132 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "testing by")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/r-topic-user.png",
  alt: ""
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Dwain Cherry")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "3 days, 20 hours ago")], -1 /* HOISTED */);
var _hoisted_133 = {
  "class": "media"
};
var _hoisted_134 = {
  "class": "d-flex align-self-center"
};
var _hoisted_135 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Title by")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/r-topic-user.png",
  alt: ""
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Kati Burch")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "1 month ago")], -1 /* HOISTED */);
var _hoisted_136 = {
  "class": "media"
};
var _hoisted_137 = {
  "class": "d-flex align-self-center"
};
var _hoisted_138 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "media-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Green Planet by")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "https://html-template.spider-themes.net/docy/img/forum/r-topic-user.png",
  alt: ""
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Morris Ruiz")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "1 week, 2 days ago")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_FontAwesomeIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FontAwesomeIcon");
  var _component_ion_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ion-icon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Category ⋅ Forum ⋅ "
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AdminHeader"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"col-xl-2 d-none d-xl-block\">\r\n                        <div class=\"left_side_forum\">\r\n                            <aside class=\"l_widget forum_list\">\r\n                                <h3 class=\"wd_title\">Forums</h3>\r\n                                <ul class=\"navbar-nav\">\r\n                                    <li class=\"active nav-item\">\r\n                                        <a href=\"#\"><i class=\"social_tumbleupon\"></i>View all</a>\r\n                                    </li>\r\n                                    <li class=\"nav-item\">\r\n                                        <a href=\"#\"><i class=\"icon_lightbulb_alt\"></i>General</a>\r\n                                    </li>\r\n                                    <li class=\"nav-item\">\r\n                                        <a href=\"#\"><i class=\"icon_lightbulb_alt\"></i>Ideas</a>\r\n                                    </li>\r\n                                    <li class=\"nav-item\">\r\n                                        <a href=\"#\"><i class=\"fa fa-user-o\"></i>User Feedback</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </aside>\r\n                        </div>\r\n                    </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Author "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-angle-down"
  })]), _hoisted_14])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Label "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-angle-down"
  })]), _hoisted_17])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Sort "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-angle-down"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_icon, {
    name: "checkmark-outline",
    role: "img",
    "class": "md hydrated",
    "aria-label": "checkmark outline"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Newest ")]), _hoisted_25])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-heart"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 5")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-comments"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 70")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-eye"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 420")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-heart"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 5")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-comments"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 70")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-eye"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 420")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [_hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-heart"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 5")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-comments"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 70")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-eye"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 420")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [_hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("How works and where can found the class? "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_icon, {
    name: "checkmark-circle",
    role: "img",
    "class": "md hydrated",
    "aria-label": "checkmark circle"
  })])])]), _hoisted_61, _hoisted_62]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [_hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-heart"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 5")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-comments"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 70")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-eye"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 420")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [_hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [_hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-heart"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 5")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-comments"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 70")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-eye"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 420")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [_hoisted_77, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [_hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-heart"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 5")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-comments"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 70")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-eye"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 420")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [_hoisted_85, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [_hoisted_88, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_89, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-heart"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 5")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_90, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-comments"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 70")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_91, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-eye"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 420")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [_hoisted_93, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_95, [_hoisted_96, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_97, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-heart"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 5")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_98, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-comments"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 70")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-eye"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 420")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, [_hoisted_101, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_103, [_hoisted_104, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_105, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-heart"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 5")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-comments"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 70")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_107, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-eye"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 420")])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_108, [_hoisted_109, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_111, [_hoisted_112, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_113, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-heart"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 5")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_114, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-comments"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 70")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_115, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-regular fa-eye"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 420")])])])])])])]), _hoisted_116])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_117, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_118, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <aside class=\"r_widget qustion_wd\">\r\n                                <button class=\"btn\" type=\"button\"><img src=\"https://html-template.spider-themes.net/docy/img/forum/helpful-user/question-1.png\" alt=\"\">Ask Question <i class=\"arrow_carrot-right\"></i></button>\r\n                            </aside> "), _hoisted_119, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <aside class=\"r_widget question_list_wd\">\r\n                                <div class=\"r_heading d-flex justify-content-between\">\r\n                                    <h3>Top</h3>\r\n                                    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n                                        <li class=\"nav-item\" role=\"presentation\">\r\n                                            <a class=\"nav-link active\" id=\"home-tab\" data-bs-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">7 days</a>\r\n                                        </li>\r\n                                        <li class=\"nav-item\" role=\"presentation\">\r\n                                            <a class=\"nav-link\" id=\"profile-tab\" data-bs-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">30 days</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"tab-content\" id=\"myTabContent\">\r\n                                    <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n                                        <ul class=\"navbar-nav\">\r\n                                            <li><a href=\"#\"><span>01</span>Example of NearBy Place Search - SITE KIT</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\"><span>02</span>Example of Direction Steps - MAP KIT</a></li>\r\n                                            <li><a href=\"#\"><span>03</span>Introduction to AppGallery Connect Crash\r\n                                                    Service</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\"><span>04</span>Bank Card Recognition and Payment Screen - ML\r\n                                                    KIT</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\"><span>05</span>Example of Direction Steps - MAP KIT</a></li>\r\n                                            <li><a href=\"#\"><span>06</span>Example of NearBy Place Search - SITE KIT</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                    <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\r\n                                        <ul class=\"navbar-nav\">\r\n                                            <li><a href=\"#\"><span>01</span>Example of NearBy Place Search - SITE KIT</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\"><span>02</span>Example of Direction Steps - MAP KIT</a></li>\r\n                                            <li><a href=\"#\"><span>03</span>Introduction to AppGallery Connect Crash\r\n                                                    Service</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\"><span>04</span>Bank Card Recognition and Payment Screen - ML\r\n                                                    KIT</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\"><span>05</span>Example of Direction Steps - MAP KIT</a></li>\r\n                                            <li><a href=\"#\"><span>06</span>Example of NearBy Place Search - SITE KIT</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </aside> "), _hoisted_120, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_121, [_hoisted_122, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <h3 class=\"wd_title\">Recent Topics</h3> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_123, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_124, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_125, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-comment-dots"
  })]), _hoisted_126])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_127, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_128, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-comment-dots"
  })]), _hoisted_129])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_130, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_131, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-comment-dots"
  })]), _hoisted_132])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_133, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_134, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-comment-dots"
  })]), _hoisted_135])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_136, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_137, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-comment-dots"
  })]), _hoisted_138])])])])])])])])])])], 64 /* STABLE_FRAGMENT */);
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
/* harmony import */ var C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Category_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Category_vue_vue_type_template_id_117b4c55__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Admin/Forum/Category.vue"]])
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