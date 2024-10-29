"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_Blogs_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Blogs/Index.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Blogs/Index.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Partials_CorporateUI_AdminHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Shared/Partials/CorporateUI/AdminHeader */ "./resources/js/Shared/Partials/CorporateUI/AdminHeader.vue");
/* harmony import */ var _Shared_Partials_CorporateUI_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Shared/Partials/CorporateUI/Footer */ "./resources/js/Shared/Partials/CorporateUI/Footer.vue");
/* harmony import */ var _Shared_Layouts_CorporateUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Shared/Layouts/CorporateUI */ "./resources/js/Shared/Layouts/CorporateUI.vue");
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/dist/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.js");





chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_3__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale);
var __default__ = {
  components: {
    Bar: vue_chartjs__WEBPACK_IMPORTED_MODULE_4__.Bar
  },
  data: function data() {
    return {
      chartData: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [{
          label: "Sales",
          tension: 0.4,
          borderWidth: 0,
          borderSkipped: false,
          backgroundColor: "#2ca8ff",
          data: [450, 200, 100, 220, 500, 100, 400, 230, 500, 200],
          maxBarThickness: 6
        }, {
          label: "Sales",
          tension: 0.4,
          borderWidth: 0,
          borderSkipped: false,
          backgroundColor: "#7c3aed",
          data: [200, 300, 200, 420, 400, 200, 300, 430, 400, 300],
          maxBarThickness: 6
        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: '#fff',
            titleColor: '#1e293b',
            bodyColor: '#1e293b',
            borderColor: '#e9ecef',
            borderWidth: 1,
            usePointStyle: true
          }
        },
        interaction: {
          intersect: false,
          mode: 'index'
        },
        scales: {
          y: {
            stacked: true,
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [4, 4]
            },
            ticks: {
              beginAtZero: true,
              padding: 10,
              font: {
                size: 12,
                family: "Noto Sans",
                style: 'normal',
                lineHeight: 2
              },
              color: "#64748B"
            }
          },
          x: {
            stacked: true,
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false
            },
            ticks: {
              font: {
                size: 12,
                family: "Noto Sans",
                style: 'normal',
                lineHeight: 2
              },
              color: "#64748B"
            }
          }
        }
      }
    };
  },
  props: {
    appointmentsCount: Number
  },
  layout: _Shared_Layouts_CorporateUI__WEBPACK_IMPORTED_MODULE_2__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*@__PURE__*/Object.assign(__default__, {
  __name: 'Index',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var __returned__ = {
      get CorporateUI() {
        return _Shared_Layouts_CorporateUI__WEBPACK_IMPORTED_MODULE_2__["default"];
      },
      get Bar() {
        return vue_chartjs__WEBPACK_IMPORTED_MODULE_4__.Bar;
      },
      get ChartJS() {
        return chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart;
      },
      get Title() {
        return chart_js__WEBPACK_IMPORTED_MODULE_3__.Title;
      },
      get Tooltip() {
        return chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip;
      },
      get Legend() {
        return chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend;
      },
      get BarElement() {
        return chart_js__WEBPACK_IMPORTED_MODULE_3__.BarElement;
      },
      get CategoryScale() {
        return chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale;
      },
      get LinearScale() {
        return chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale;
      },
      get AdminHeader() {
        return _Shared_Partials_CorporateUI_AdminHeader__WEBPACK_IMPORTED_MODULE_0__["default"];
      },
      get Footer() {
        return _Shared_Partials_CorporateUI_Footer__WEBPACK_IMPORTED_MODULE_1__["default"];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Blogs/Index.vue?vue&type=template&id=fbb75a0a":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Blogs/Index.vue?vue&type=template&id=fbb75a0a ***!
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
  "class": "col-xl-3 col-sm-6 mb-xl-0"
};
var _hoisted_4 = {
  "class": "card border shadow-xs mb-4"
};
var _hoisted_5 = {
  "class": "card-body text-start p-3 w-100"
};
var _hoisted_6 = {
  "class": "icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3"
};
var _hoisted_7 = {
  "class": "col-xl-3 col-sm-6 mb-xl-0"
};
var _hoisted_8 = {
  "class": "card border shadow-xs mb-4"
};
var _hoisted_9 = {
  "class": "card-body text-start p-3 w-100"
};
var _hoisted_10 = {
  "class": "icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3"
};
var _hoisted_11 = {
  "class": "col-xl-3 col-sm-6 mb-xl-0"
};
var _hoisted_12 = {
  "class": "card border shadow-xs mb-4"
};
var _hoisted_13 = {
  "class": "card-body text-start p-3 w-100"
};
var _hoisted_14 = {
  "class": "icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3"
};
var _hoisted_15 = {
  "class": "col-xl-3 col-sm-6"
};
var _hoisted_16 = {
  "class": "card border shadow-xs mb-4"
};
var _hoisted_17 = {
  "class": "card-body text-start p-3 w-100"
};
var _hoisted_18 = {
  "class": "icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3"
};
var _hoisted_19 = {
  "class": "row"
};
var _hoisted_20 = {
  "class": "col-12"
};
var _hoisted_21 = {
  "class": "w-100"
};
var _hoisted_22 = {
  "class": "mb-2 font-weight-bold"
};
var _hoisted_23 = {
  "class": "col-12"
};
var _hoisted_24 = {
  "class": "card shadow-xs border mb-4 pb-3"
};
var _hoisted_25 = {
  "class": "card-body p-3"
};
var _hoisted_26 = {
  "class": "row"
};
var _hoisted_27 = {
  "class": "col-xl-4 col-md-6 mb-xl-0 mb-4"
};
var _hoisted_28 = {
  "class": "px-5 border border-dashed card h-100 card-plain border-light"
};
var _hoisted_29 = {
  "class": "text-center card-body d-flex flex-column justify-content-center"
};
var _hoisted_30 = {
  "class": "mx-auto mb-2 text-center text-white icon icon-shape bg-dark rounded-circle d-flex align-items-center justify-content-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$props$appointmentsC;
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_FontAwesomeIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FontAwesomeIcon");
  var _component_dragdrop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("dragdrop");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Blogs ⋅ Admin Panel ⋅"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AdminHeader"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-eye"
  })]), _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-12\"><div class=\"w-100\"><p class=\"text-sm text-secondary mb-1\">Total Views</p><h4 class=\"mb-2 font-weight-bold\">0</h4><div class=\"d-flex align-items-center\"><!-- &lt;span class=&quot;text-sm text-success font-weight-bolder&quot;&gt;\r\n                                            &lt;i class=&quot;fa fa-chevron-up text-xs me-1&quot;&gt;&lt;/i&gt;0%\r\n                                        &lt;/span&gt;\r\n                                        &lt;span class=&quot;text-sm ms-1&quot;&gt;&lt;/span&gt; --></div></div></div></div>", 1))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-newspaper"
  })]), _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-12\"><div class=\"w-100\"><p class=\"text-sm text-secondary mb-1\">Blogs</p><h4 class=\"mb-2 font-weight-bold\">0</h4><div class=\"d-flex align-items-center\"><!-- &lt;span class=&quot;text-sm text-success font-weight-bolder&quot;&gt;\r\n                                            &lt;i class=&quot;fa fa-chevron-up text-xs me-1&quot;&gt;&lt;/i&gt;0%\r\n                                        &lt;/span&gt;\r\n                                        &lt;span class=&quot;text-sm ms-1&quot;&gt;0&lt;/span&gt; --></div></div></div></div>", 1))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-check"
  })]), _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-12\"><div class=\"w-100\"><p class=\"text-sm text-secondary mb-1\">Active blogs</p><h4 class=\"mb-2 font-weight-bold\">0</h4><div class=\"d-flex align-items-center\"><!-- &lt;span class=&quot;text-sm text-success font-weight-bolder&quot;&gt;\r\n                                            &lt;i class=&quot;fa fa-chevron-up text-xs me-1&quot;&gt;&lt;/i&gt;0%\r\n                                        &lt;/span&gt;\r\n                                        &lt;span class=&quot;text-sm ms-1&quot;&gt;0&lt;/span&gt; --></div></div></div></div>", 1))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-ban"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-sm text-secondary mb-1"
  }, "Inactive blogs", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$appointmentsC = $props.appointmentsCount) !== null && _$props$appointmentsC !== void 0 ? _$props$appointmentsC : 0), 1 /* TEXT */), _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex align-items-center"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span class=\"text-sm text-success font-weight-bolder\">\r\n                                            <i class=\"fa fa-chevron-up text-xs me-1\"></i>0%\r\n                                        </span>\r\n                                        <span class=\"text-sm ms-1\">0</span> ")], -1 /* HOISTED */))])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-header pb-0 p-3"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
    "class": "mb-0 font-weight-semibold text-lg"
  }, "Blogs"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-sm mb-1"
  }, "Here you will find video courses that could help you to grow your skills.")], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_dragdrop), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/admin/courses/create"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
        icon: "fa-solid fa-edit"
      })]), _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
        "class": "text-lg text-dark"
      }, " Create new blog", -1 /* HOISTED */)), _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
        "class": "mb-0 text-sm text-secondary"
      }, "Write content to the editor and post to blogs.", -1 /* HOISTED */))];
    }),
    _: 1 /* STABLE */
  })])])]), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-xl-4 col-md-6 mb-xl-0 mb-4\"><div class=\"mb-4 card card-background card-background-after-none align-items-start\"><div class=\"bg-cover full-background\" style=\"background-image:url(&#39;https://images.unsplash.com/photo-1637763723578-79a4ca9225f7?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=871&amp;q=80&#39;);\"></div><span class=\"mask bg-dark opacity-1 border-radius-lg\"></span><div class=\"p-3 card-body text-start w-100\"><div class=\"row\"><div class=\"col-12\"><div class=\"p-3 mt-8 border border-white shadow blur d-flex align-items-center w-100 border-radius-md\"><div class=\"w-50\"><p class=\"mb-1 text-sm text-dark font-weight-bold\">Sara Lamalo</p><p class=\"mb-0 text-xs text-secondary\">20 Jul 2022</p></div><p class=\"text-sm text-dark font-weight-bold ms-auto\">Growth</p></div></div></div></div></div><a href=\"javascript:;\"><h4 class=\"font-weight-semibold\">Supplementary Retirement Scheme SRS Boosting Your Savings Through Tax Relief</h4></a><p class=\"mb-4\">The Supplementary Retirement Scheme (SRS) is a program designed by the Singapore Ministry of Finance to provide attractive tax incentives to citizens and foreigners alike who are looking to save more for their retirement.</p><a href=\"javascript:;\" class=\"mt-auto mb-5 text-dark font-weight-semibold icon-move-right w-100\"> Read post <i class=\"text-sm fas fa-arrow-right-long ms-1\" aria-hidden=\"true\"></i></a></div><div class=\"col-xl-4 col-md-6 mb-xl-0 mb-4\"><div class=\"card card-background border-radius-xl card-background-after-none align-items-start mb-4\"><div class=\"full-background bg-cover\" style=\"background-image:url(&#39;https://images.unsplash.com/photo-1517554558809-9b4971b38f39?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=870&amp;q=80&#39;);\"></div><span class=\"mask bg-dark opacity-1 border-radius-lg\"></span><div class=\"card-body text-start p-3 w-100\"><div class=\"row\"><div class=\"col-12\"><div class=\"blur shadow d-flex align-items-center w-100 border-radius-md border border-white mt-8 p-3\"><div class=\"w-50\"><p class=\"text-dark text-sm font-weight-bold mb-1\">Charles Deluvio</p><p class=\"text-xs text-secondary mb-0\">17 Jul 2022</p></div><p class=\"text-dark text-sm font-weight-bold ms-auto\">Education</p></div></div></div></div></div><a href=\"javascript:;\"><h4 class=\"font-weight-semibold\"> Don&#39;t be afraid to be wrong </h4></a><p class=\"mb-4\"> As Uber works through a huge amount of internal management turmoil. </p><a href=\"javascript:;\" class=\"btn btn-block finark-bg-primary text-white font-weight-semibold mt-auto w-100 mb-5\"> Watch course <i class=\"fas fa-eye text-sm ms-1\"></i></a><!-- &lt;a href=&quot;javascript:;&quot; class=&quot; text-dark font-weight-semibold icon-move-right mt-auto w-100 mb-5&quot;&gt;\r\n                                    Read post\r\n                                    &lt;i class=&quot;fas fa-arrow-right-long text-sm ms-1&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;\r\n                                &lt;/a&gt; --></div>", 2))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"row mb-4\">\r\n            <div class=\"col-lg-4 col-md-6 mb-md-0 mb-4\">\r\n            <div class=\"card shadow-xs border h-100\">\r\n                <div class=\"card-header pb-0\">\r\n                <h6 class=\"font-weight-semibold text-lg mb-0\">Balances over time</h6>\r\n                <p class=\"text-sm\">Here you have details about the balance.</p>\r\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                    <input type=\"radio\" class=\"btn-check\" name=\"btnradio\" id=\"btnradio1\" autocomplete=\"off\" checked>\r\n                    <label class=\"btn btn-white px-3 mb-0\" for=\"btnradio1\">12 months</label>\r\n                    <input type=\"radio\" class=\"btn-check\" name=\"btnradio\" id=\"btnradio2\" autocomplete=\"off\">\r\n                    <label class=\"btn btn-white px-3 mb-0\" for=\"btnradio2\">30 days</label>\r\n                    <input type=\"radio\" class=\"btn-check\" name=\"btnradio\" id=\"btnradio3\" autocomplete=\"off\">\r\n                    <label class=\"btn btn-white px-3 mb-0\" for=\"btnradio3\">7 days</label>\r\n                </div>\r\n                </div>\r\n                <div class=\"card-body py-3\">\r\n                <div class=\"chart mb-2\">\r\n                    <Bar\r\n                        id=\"my-chart-id\"\r\n                        :options=\"chartOptions\"\r\n                        :data=\"chartData\"\r\n                    />\r\n                </div>\r\n                <button class=\"btn btn-white mb-0 ms-auto\">View report</button>\r\n                </div>\r\n            </div>\r\n            </div>\r\n            <div class=\"col-lg-8 col-md-6\">\r\n            <div class=\"card shadow-xs border\">\r\n                <div class=\"card-header border-bottom pb-0\">\r\n                <div class=\"d-sm-flex align-items-center mb-3\">\r\n                    <div>\r\n                    <h6 class=\"font-weight-semibold text-lg mb-0\">Recent transactions</h6>\r\n                    <p class=\"text-sm mb-sm-0 mb-2\">These are details about the last transactions</p>\r\n                    </div>\r\n                    <div class=\"ms-auto d-flex\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-white mb-0 me-2\">\r\n                        View report\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-sm btn-dark btn-icon d-flex align-items-center mb-0\">\r\n                        <span class=\"btn-inner--icon\">\r\n                        <svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"d-block me-2\">\r\n                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3\" />\r\n                        </svg>\r\n                        </span>\r\n                        <span class=\"btn-inner--text\">Download</span>\r\n                    </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"pb-3 d-sm-flex align-items-center\">\r\n                    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                    <input type=\"radio\" class=\"btn-check\" name=\"btnradiotable\" id=\"btnradiotable1\" autocomplete=\"off\" checked>\r\n                    <label class=\"btn btn-white px-3 mb-0\" for=\"btnradiotable1\">All</label>\r\n                    <input type=\"radio\" class=\"btn-check\" name=\"btnradiotable\" id=\"btnradiotable2\" autocomplete=\"off\">\r\n                    <label class=\"btn btn-white px-3 mb-0\" for=\"btnradiotable2\">Monitored</label>\r\n                    <input type=\"radio\" class=\"btn-check\" name=\"btnradiotable\" id=\"btnradiotable3\" autocomplete=\"off\">\r\n                    <label class=\"btn btn-white px-3 mb-0\" for=\"btnradiotable3\">Unmonitored</label>\r\n                    </div>\r\n                    <div class=\"input-group w-sm-25 ms-auto\">\r\n                    <span class=\"input-group-text text-body\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16px\" height=\"16px\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\">\r\n                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z\"></path>\r\n                        </svg>\r\n                    </span>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                    </div>\r\n                </div>\r\n                </div>\r\n                <div class=\"card-body px-0 py-0\">\r\n                <div class=\"table-responsive p-0\">\r\n                    <table class=\"table align-items-center justify-content-center mb-0\">\r\n                    <thead class=\"bg-gray-100\">\r\n                        <tr>\r\n                            <th class=\"text-secondary text-xs font-weight-semibold opacity-7\">Transaction</th>\r\n                            <th class=\"text-secondary text-xs font-weight-semibold opacity-7 ps-2\">Amount</th>\r\n                            <th class=\"text-secondary text-xs font-weight-semibold opacity-7 ps-2\">Date</th>\r\n                            <th class=\"text-secondary text-xs font-weight-semibold opacity-7 ps-2\">Account</th>\r\n                            <th class=\"text-center text-secondary text-xs font-weight-semibold opacity-7\"></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                        <td>\r\n                            <div class=\"d-flex px-2\">\r\n                            <div class=\"avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2\">\r\n                                <img src=\"https://demos.creative-tim.com/corporate-ui-dashboard/assets/img/small-logos/logo-spotify.svg\" class=\"w-80\" alt=\"spotify\">\r\n                            </div>\r\n                            <div class=\"my-auto\">\r\n                                <h6 class=\"mb-0 text-sm\">Spotify</h6>\r\n                            </div>\r\n                            </div>\r\n                        </td>\r\n                        <td>\r\n                            <p class=\"text-sm font-weight-normal mb-0\">$2,500</p>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"text-sm font-weight-normal\">Wed 3:00pm</span>\r\n                        </td>\r\n                        <td class=\"align-middle\">\r\n                            <div class=\"d-flex\">\r\n                            <div class=\"border px-1 py-1 text-center d-flex align-items-center border-radius-sm my-auto\">\r\n                                <img src=\"https://demos.creative-tim.com/corporate-ui-dashboard/assets/img/logos/visa.png\" class=\"w-90 mx-auto\" alt=\"visa\">\r\n                            </div>\r\n                            <div class=\"ms-2\">\r\n                                <p class=\"text-dark text-sm mb-0\">Visa 1234</p>\r\n                                <p class=\"text-secondary text-sm mb-0\">Expiry 06/2026</p>\r\n                            </div>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"align-middle\">\r\n                            <a href=\"javascript:;\" class=\"text-secondary font-weight-bold text-xs\" data-bs-toggle=\"tooltip\" data-bs-title=\"Edit user\">\r\n                            <svg width=\"14\" height=\"14\" viewBox=\"0 0 15 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                <path d=\"M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z\" fill=\"#64748B\" />\r\n                            </svg>\r\n                            </a>\r\n                        </td>\r\n                        </tr>\r\n                        <tr>\r\n                        <td>\r\n                            <div class=\"d-flex px-2\">\r\n                            <div class=\"avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2\">\r\n                                <img src=\"https://demos.creative-tim.com/corporate-ui-dashboard/assets/img/small-logos/logo-invision.svg\" class=\"w-80\" alt=\"invision\">\r\n                            </div>\r\n                            <div class=\"my-auto\">\r\n                                <h6 class=\"mb-0 text-sm\">Invision</h6>\r\n                            </div>\r\n                            </div>\r\n                        </td>\r\n                        <td>\r\n                            <p class=\"text-sm font-weight-normal mb-0\">$5,000</p>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"text-sm font-weight-normal\">Wed 1:00pm</span>\r\n                        </td>\r\n                        <td class=\"align-middle\">\r\n                            <div class=\"d-flex\">\r\n                            <div class=\"border px-1 py-1 text-center d-flex align-items-center border-radius-sm my-auto\">\r\n                                <img src=\"https://demos.creative-tim.com/corporate-ui-dashboard/assets/img/logos/mastercard.png\" class=\"w-90 mx-auto\" alt=\"mastercard\">\r\n                            </div>\r\n                            <div class=\"ms-2\">\r\n                                <p class=\"text-dark text-sm mb-0\">Mastercard 1234</p>\r\n                                <p class=\"text-secondary text-sm mb-0\">Expiry 06/2026</p>\r\n                            </div>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"align-middle\">\r\n                            <a href=\"javascript:;\" class=\"text-secondary font-weight-bold text-xs\" data-bs-toggle=\"tooltip\" data-bs-title=\"Edit user\">\r\n                            <svg width=\"14\" height=\"14\" viewBox=\"0 0 15 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                <path d=\"M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z\" fill=\"#64748B\" />\r\n                            </svg>\r\n                            </a>\r\n                        </td>\r\n                        </tr>\r\n                        <tr>\r\n                        <td>\r\n                            <div class=\"d-flex px-2\">\r\n                            <div class=\"avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2\">\r\n                                <img src=\"https://demos.creative-tim.com/corporate-ui-dashboard/assets/img/small-logos/logo-jira.svg\" class=\"w-80\" alt=\"jira\">\r\n                            </div>\r\n                            <div class=\"my-auto\">\r\n                                <h6 class=\"mb-0 text-sm\">Jira</h6>\r\n                            </div>\r\n                            </div>\r\n                        </td>\r\n                        <td>\r\n                            <p class=\"text-sm font-weight-normal mb-0\">$3,400</p>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"text-sm font-weight-normal\">Mon 7:40pm</span>\r\n                        </td>\r\n                        <td class=\"align-middle\">\r\n                            <div class=\"d-flex\">\r\n                            <div class=\"border px-1 py-1 text-center d-flex align-items-center border-radius-sm my-auto\">\r\n                                <img src=\"https://demos.creative-tim.com/corporate-ui-dashboard/assets/img/logos/mastercard.png\" class=\"w-90 mx-auto\" alt=\"mastercard\">\r\n                            </div>\r\n                            <div class=\"ms-2\">\r\n                                <p class=\"text-dark text-sm mb-0\">Mastercard 1234</p>\r\n                                <p class=\"text-secondary text-sm mb-0\">Expiry 06/2026</p>\r\n                            </div>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"align-middle\">\r\n                            <a href=\"javascript:;\" class=\"text-secondary font-weight-bold text-xs\" data-bs-toggle=\"tooltip\" data-bs-title=\"Edit user\">\r\n                            <svg width=\"14\" height=\"14\" viewBox=\"0 0 15 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                <path d=\"M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z\" fill=\"#64748B\" />\r\n                            </svg>\r\n                            </a>\r\n                        </td>\r\n                        </tr>\r\n                        <tr>\r\n                        <td>\r\n                            <div class=\"d-flex px-2\">\r\n                            <div class=\"avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2\">\r\n                                <img src=\"https://demos.creative-tim.com/corporate-ui-dashboard/assets/img/small-logos/logo-slack.svg\" class=\"w-80\" alt=\"slack\">\r\n                            </div>\r\n                            <div class=\"my-auto\">\r\n                                <h6 class=\"mb-0 text-sm\">Slack</h6>\r\n                            </div>\r\n                            </div>\r\n                        </td>\r\n                        <td>\r\n                            <p class=\"text-sm font-weight-normal mb-0\">$1,000</p>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"text-sm font-weight-normal\">Wed 5:00pm</span>\r\n                        </td>\r\n                        <td class=\"align-middle\">\r\n                            <div class=\"d-flex\">\r\n                            <div class=\"border px-1 py-1 text-center d-flex align-items-center border-radius-sm my-auto\">\r\n                                <img src=\"https://demos.creative-tim.com/corporate-ui-dashboard/assets/img/logos/visa.png\" class=\"w-90 mx-auto\" alt=\"visa\">\r\n                            </div>\r\n                            <div class=\"ms-2\">\r\n                                <p class=\"text-dark text-sm mb-0\">Visa 1234</p>\r\n                                <p class=\"text-secondary text-sm mb-0\">Expiry 06/2026</p>\r\n                            </div>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"align-middle\">\r\n                            <a href=\"javascript:;\" class=\"text-secondary font-weight-bold text-xs\" data-bs-toggle=\"tooltip\" data-bs-title=\"Edit user\">\r\n                            <svg width=\"14\" height=\"14\" viewBox=\"0 0 15 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                <path d=\"M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z\" fill=\"#64748B\" />\r\n                            </svg>\r\n                            </a>\r\n                        </td>\r\n                        </tr>\r\n                    </tbody>\r\n                    </table>\r\n                </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n            <div class=\"card shadow-xs border\">\r\n                <div class=\"card-header pb-0\">\r\n                <div class=\"d-sm-flex align-items-center mb-3\">\r\n                    <div>\r\n                    <h6 class=\"font-weight-semibold text-lg mb-0\">Overview balance</h6>\r\n                    <p class=\"text-sm mb-sm-0 mb-2\">Here you have details about the balance.</p>\r\n                    </div>\r\n                    <div class=\"ms-auto d-flex\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-white mb-0 me-2\">\r\n                        View report\r\n                    </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"d-sm-flex align-items-center\">\r\n                    <h3 class=\"mb-0 font-weight-semibold\">$87,982.80</h3>\r\n                    <span class=\"badge badge-sm border border-success text-success bg-success border-radius-sm ms-sm-3 px-2\">\r\n                    <svg width=\"9\" height=\"9\" viewBox=\"0 0 10 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                        <path d=\"M0.46967 4.46967C0.176777 4.76256 0.176777 5.23744 0.46967 5.53033C0.762563 5.82322 1.23744 5.82322 1.53033 5.53033L0.46967 4.46967ZM5.53033 1.53033C5.82322 1.23744 5.82322 0.762563 5.53033 0.46967C5.23744 0.176777 4.76256 0.176777 4.46967 0.46967L5.53033 1.53033ZM5.53033 0.46967C5.23744 0.176777 4.76256 0.176777 4.46967 0.46967C4.17678 0.762563 4.17678 1.23744 4.46967 1.53033L5.53033 0.46967ZM8.46967 5.53033C8.76256 5.82322 9.23744 5.82322 9.53033 5.53033C9.82322 5.23744 9.82322 4.76256 9.53033 4.46967L8.46967 5.53033ZM1.53033 5.53033L5.53033 1.53033L4.46967 0.46967L0.46967 4.46967L1.53033 5.53033ZM4.46967 1.53033L8.46967 5.53033L9.53033 4.46967L5.53033 0.46967L4.46967 1.53033Z\" fill=\"#67C23A\"></path>\r\n                    </svg>\r\n                    10.5%\r\n                    </span>\r\n                </div>\r\n                </div>\r\n                <div class=\"card-body p-3\">\r\n                <div class=\"chart mt-n6\">\r\n                </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Footer"])])], 64 /* STABLE_FRAGMENT */);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Footer.vue?vue&type=template&id=e306f93c":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Footer.vue?vue&type=template&id=e306f93c ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "footer pt-3"
};
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("footer", _hoisted_1, _cache[0] || (_cache[0] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "container-fluid"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row align-items-center justify-content-lg-between"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-lg-6 mb-lg-0 mb-4"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "copyright text-center text-xs text-muted text-lg-start"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Copyright © 2024 FinArk "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <a href=\"https://www.creative-tim.com\" class=\"text-secondary\" target=\"_blank\">Creative Tim</a>. ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"col-lg-6\">\r\n                    <ul class=\"nav nav-footer justify-content-center justify-content-lg-end\">\r\n                        <li class=\"nav-item\">\r\n                        <a href=\"https://www.creative-tim.com\" class=\"nav-link text-xs text-muted\" target=\"_blank\">Creative Tim</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                        <a href=\"https://www.creative-tim.com/presentation\" class=\"nav-link text-xs text-muted\" target=\"_blank\">About Us</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                        <a href=\"https://www.creative-tim.com/blog\" class=\"nav-link text-xs text-muted\" target=\"_blank\">Blog</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                        <a href=\"https://www.creative-tim.com/license\" class=\"nav-link text-xs pe-0 text-muted\" target=\"_blank\">License</a>\r\n                        </li>\r\n                    </ul>\r\n                </div> ")])], -1 /* HOISTED */)]));
}

/***/ }),

/***/ "./resources/js/Pages/Admin/Blogs/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Admin/Blogs/Index.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_fbb75a0a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=fbb75a0a */ "./resources/js/Pages/Admin/Blogs/Index.vue?vue&type=template&id=fbb75a0a");
/* harmony import */ var _Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Admin/Blogs/Index.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var D_xampp_htdocs_clients_finark_laravel_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_clients_finark_laravel_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_fbb75a0a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Admin/Blogs/Index.vue"]])
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

/***/ "./resources/js/Shared/Partials/CorporateUI/Footer.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/Footer.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_e306f93c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=e306f93c */ "./resources/js/Shared/Partials/CorporateUI/Footer.vue?vue&type=template&id=e306f93c");
/* harmony import */ var D_xampp_htdocs_clients_finark_laravel_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_clients_finark_laravel_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Footer_vue_vue_type_template_id_e306f93c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Partials/CorporateUI/Footer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Admin/Blogs/Index.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Blogs/Index.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Blogs/Index.vue?vue&type=script&setup=true&lang=js");
 

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

/***/ "./resources/js/Pages/Admin/Blogs/Index.vue?vue&type=template&id=fbb75a0a":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Blogs/Index.vue?vue&type=template&id=fbb75a0a ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_fbb75a0a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_fbb75a0a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=fbb75a0a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Blogs/Index.vue?vue&type=template&id=fbb75a0a");


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


/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/Footer.vue?vue&type=template&id=e306f93c":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/Footer.vue?vue&type=template&id=e306f93c ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_e306f93c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_e306f93c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=template&id=e306f93c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Footer.vue?vue&type=template&id=e306f93c");


/***/ })

}]);