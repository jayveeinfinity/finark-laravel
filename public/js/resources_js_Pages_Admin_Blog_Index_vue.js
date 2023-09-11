"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_Blog_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Blog/Index.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Blog/Index.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Partials_CorporateUI_Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Shared/Partials/CorporateUI/Footer */ "./resources/js/Shared/Partials/CorporateUI/Footer.vue");
/* harmony import */ var _Shared_Layouts_CorporateUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Shared/Layouts/CorporateUI */ "./resources/js/Shared/Layouts/CorporateUI.vue");
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/dist/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.js");




chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_2__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale);
var __default__ = {
  components: {
    Bar: vue_chartjs__WEBPACK_IMPORTED_MODULE_3__.Bar
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
  layout: _Shared_Layouts_CorporateUI__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'Index',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {
      get CorporateUI() {
        return _Shared_Layouts_CorporateUI__WEBPACK_IMPORTED_MODULE_1__["default"];
      },
      get Bar() {
        return vue_chartjs__WEBPACK_IMPORTED_MODULE_3__.Bar;
      },
      get ChartJS() {
        return chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart;
      },
      get Title() {
        return chart_js__WEBPACK_IMPORTED_MODULE_2__.Title;
      },
      get Tooltip() {
        return chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip;
      },
      get Legend() {
        return chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend;
      },
      get BarElement() {
        return chart_js__WEBPACK_IMPORTED_MODULE_2__.BarElement;
      },
      get CategoryScale() {
        return chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale;
      },
      get LinearScale() {
        return chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale;
      },
      get Footer() {
        return _Shared_Partials_CorporateUI_Footer__WEBPACK_IMPORTED_MODULE_0__["default"];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Partials_CorporateUI_Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Partials/CorporateUI/Sidebar */ "./resources/js/Shared/Partials/CorporateUI/Sidebar.vue");
/* harmony import */ var _Partials_CorporateUI_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Partials/CorporateUI/Navbar */ "./resources/js/Shared/Partials/CorporateUI/Navbar.vue");


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
        name: "Appointments",
        url: "/admin/appointments"
      }, {
        id: 4,
        name: "Create",
        url: "/admin/partner/create"
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
    var expose = _ref.expose;
    expose();
    var __returned__ = {
      get SideBar() {
        return _Partials_CorporateUI_Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"];
      },
      get NavBar() {
        return _Partials_CorporateUI_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Blog/Index.vue?vue&type=template&id=6c0b2be4":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Blog/Index.vue?vue&type=template&id=6c0b2be4 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Appointments", -1 /* HOISTED */);
var _hoisted_2 = {
  "class": "container-fluid py-4 px-5"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-md-12\"><div class=\"d-md-flex align-items-center mb-3 mx-2\"><!-- &lt;div class=&quot;mb-md-0 mb-3&quot;&gt;\r\n                        &lt;h3 class=&quot;font-weight-bold mb-0&quot;&gt;Hello, Jayvee!&lt;/h3&gt;\r\n                        &lt;p class=&quot;mb-0&quot;&gt;Signed in as Developer&lt;/p&gt;\r\n                    &lt;/div&gt; --><button type=\"button\" class=\"btn btn-sm btn-white btn-icon d-flex align-items-center mb-0 ms-md-auto mb-sm-0 mb-2 me-2\"><span class=\"btn-inner--icon\"><span class=\"p-1 bg-success rounded-circle d-flex ms-auto me-2\"><span class=\"visually-hidden\">New</span></span></span><span class=\"btn-inner--text\">Messages</span></button><button type=\"button\" class=\"btn btn-sm btn-dark btn-icon d-flex align-items-center mb-0\"><span class=\"btn-inner--icon\"><svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"d-block me-2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99\"></path></svg></span><span class=\"btn-inner--text\">Sync</span></button></div></div></div><hr class=\"my-0\">", 2);
var _hoisted_5 = {
  "class": "row mt-4"
};
var _hoisted_6 = {
  "class": "col-xl-3 col-sm-6 mb-xl-0"
};
var _hoisted_7 = {
  "class": "card border shadow-xs mb-4"
};
var _hoisted_8 = {
  "class": "card-body text-start p-3 w-100"
};
var _hoisted_9 = {
  "class": "icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-12\"><div class=\"w-100\"><p class=\"text-sm text-secondary mb-1\">To process</p><h4 class=\"mb-2 font-weight-bold\">0</h4><div class=\"d-flex align-items-center\"><!-- &lt;span class=&quot;text-sm text-success font-weight-bolder&quot;&gt;\r\n                                            &lt;i class=&quot;fa fa-chevron-up text-xs me-1&quot;&gt;&lt;/i&gt;0%\r\n                                        &lt;/span&gt;\r\n                                        &lt;span class=&quot;text-sm ms-1&quot;&gt;&lt;/span&gt; --></div></div></div></div>", 1);
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
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-12\"><div class=\"w-100\"><p class=\"text-sm text-secondary mb-1\">Processed</p><h4 class=\"mb-2 font-weight-bold\">0</h4><div class=\"d-flex align-items-center\"><!-- &lt;span class=&quot;text-sm text-success font-weight-bolder&quot;&gt;\r\n                                            &lt;i class=&quot;fa fa-chevron-up text-xs me-1&quot;&gt;&lt;/i&gt;0%\r\n                                        &lt;/span&gt;\r\n                                        &lt;span class=&quot;text-sm ms-1&quot;&gt;0&lt;/span&gt; --></div></div></div></div>", 1);
var _hoisted_16 = {
  "class": "col-xl-3 col-sm-6 mb-xl-0"
};
var _hoisted_17 = {
  "class": "card border shadow-xs mb-4"
};
var _hoisted_18 = {
  "class": "card-body text-start p-3 w-100"
};
var _hoisted_19 = {
  "class": "icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3"
};
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-12\"><div class=\"w-100\"><p class=\"text-sm text-secondary mb-1\">Today&#39;s appointments</p><h4 class=\"mb-2 font-weight-bold\">0</h4><div class=\"d-flex align-items-center\"><!-- &lt;span class=&quot;text-sm text-success font-weight-bolder&quot;&gt;\r\n                                            &lt;i class=&quot;fa fa-chevron-up text-xs me-1&quot;&gt;&lt;/i&gt;0%\r\n                                        &lt;/span&gt;\r\n                                        &lt;span class=&quot;text-sm ms-1&quot;&gt;0&lt;/span&gt; --></div></div></div></div>", 1);
var _hoisted_21 = {
  "class": "col-xl-3 col-sm-6"
};
var _hoisted_22 = {
  "class": "card border shadow-xs mb-4"
};
var _hoisted_23 = {
  "class": "card-body text-start p-3 w-100"
};
var _hoisted_24 = {
  "class": "icon icon-shape icon-sm bg-dark text-white text-center border-radius-sm d-flex align-items-center justify-content-center mb-3"
};
var _hoisted_25 = {
  "class": "row"
};
var _hoisted_26 = {
  "class": "col-12"
};
var _hoisted_27 = {
  "class": "w-100"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-sm text-secondary mb-1"
}, "Total Appointments", -1 /* HOISTED */);
var _hoisted_29 = {
  "class": "mb-2 font-weight-bold"
};
var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex align-items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span class=\"text-sm text-success font-weight-bolder\">\r\n                                            <i class=\"fa fa-chevron-up text-xs me-1\"></i>0%\r\n                                        </span>\r\n                                        <span class=\"text-sm ms-1\">0</span> ")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$props$appointmentsC;
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_FontAwesomeIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FontAwesomeIcon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-calendar-check"
  })]), _hoisted_10])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-briefcase"
  })]), _hoisted_15])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-calendar-check"
  })]), _hoisted_20])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-calendar-check"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$appointmentsC = $props.appointmentsCount) !== null && _$props$appointmentsC !== void 0 ? _$props$appointmentsC : 0), 1 /* TEXT */), _hoisted_30])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"row mb-4\">\r\n            <div class=\"col-lg-4 col-md-6 mb-md-0 mb-4\">\r\n            <div class=\"card shadow-xs border h-100\">\r\n                <div class=\"card-header pb-0\">\r\n                <h6 class=\"font-weight-semibold text-lg mb-0\">Balances over time</h6>\r\n                <p class=\"text-sm\">Here you have details about the balance.</p>\r\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                    <input type=\"radio\" class=\"btn-check\" name=\"btnradio\" id=\"btnradio1\" autocomplete=\"off\" checked>\r\n                    <label class=\"btn btn-white px-3 mb-0\" for=\"btnradio1\">12 months</label>\r\n                    <input type=\"radio\" class=\"btn-check\" name=\"btnradio\" id=\"btnradio2\" autocomplete=\"off\">\r\n                    <label class=\"btn btn-white px-3 mb-0\" for=\"btnradio2\">30 days</label>\r\n                    <input type=\"radio\" class=\"btn-check\" name=\"btnradio\" id=\"btnradio3\" autocomplete=\"off\">\r\n                    <label class=\"btn btn-white px-3 mb-0\" for=\"btnradio3\">7 days</label>\r\n                </div>\r\n                </div>\r\n                <div class=\"card-body py-3\">\r\n                <div class=\"chart mb-2\">\r\n                    <Bar\r\n                        id=\"my-chart-id\"\r\n                        :options=\"chartOptions\"\r\n                        :data=\"chartData\"\r\n                    />\r\n                </div>\r\n                <button class=\"btn btn-white mb-0 ms-auto\">View report</button>\r\n                </div>\r\n            </div>\r\n            </div>\r\n            <div class=\"col-lg-8 col-md-6\">\r\n            <div class=\"card shadow-xs border\">\r\n                <div class=\"card-header border-bottom pb-0\">\r\n                <div class=\"d-sm-flex align-items-center mb-3\">\r\n                    <div>\r\n                    <h6 class=\"font-weight-semibold text-lg mb-0\">Recent transactions</h6>\r\n                    <p class=\"text-sm mb-sm-0 mb-2\">These are details about the last transactions</p>\r\n                    </div>\r\n                    <div class=\"ms-auto d-flex\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-white mb-0 me-2\">\r\n                        View report\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-sm btn-dark btn-icon d-flex align-items-center mb-0\">\r\n                        <span class=\"btn-inner--icon\">\r\n                        <svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"d-block me-2\">\r\n                            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3\" />\r\n                        </svg>\r\n                        </span>\r\n                        <span class=\"btn-inner--text\">Download</span>\r\n                    </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"pb-3 d-sm-flex align-items-center\">\r\n                    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\r\n                    <input type=\"radio\" class=\"btn-check\" name=\"btnradiotable\" id=\"btnradiotable1\" autocomplete=\"off\" checked>\r\n                    <label class=\"btn btn-white px-3 mb-0\" for=\"btnradiotable1\">All</label>\r\n                    <input type=\"radio\" class=\"btn-check\" name=\"btnradiotable\" id=\"btnradiotable2\" autocomplete=\"off\">\r\n                    <label class=\"btn btn-white px-3 mb-0\" for=\"btnradiotable2\">Monitored</label>\r\n                    <input type=\"radio\" class=\"btn-check\" name=\"btnradiotable\" id=\"btnradiotable3\" autocomplete=\"off\">\r\n                    <label class=\"btn btn-white px-3 mb-0\" for=\"btnradiotable3\">Unmonitored</label>\r\n                    </div>\r\n                    <div class=\"input-group w-sm-25 ms-auto\">\r\n                    <span class=\"input-group-text text-body\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16px\" height=\"16px\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\">\r\n                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z\"></path>\r\n                        </svg>\r\n                    </span>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                    </div>\r\n                </div>\r\n                </div>\r\n                <div class=\"card-body px-0 py-0\">\r\n                <div class=\"table-responsive p-0\">\r\n                    <table class=\"table align-items-center justify-content-center mb-0\">\r\n                    <thead class=\"bg-gray-100\">\r\n                        <tr>\r\n                            <th class=\"text-secondary text-xs font-weight-semibold opacity-7\">Transaction</th>\r\n                            <th class=\"text-secondary text-xs font-weight-semibold opacity-7 ps-2\">Amount</th>\r\n                            <th class=\"text-secondary text-xs font-weight-semibold opacity-7 ps-2\">Date</th>\r\n                            <th class=\"text-secondary text-xs font-weight-semibold opacity-7 ps-2\">Account</th>\r\n                            <th class=\"text-center text-secondary text-xs font-weight-semibold opacity-7\"></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                        <td>\r\n                            <div class=\"d-flex px-2\">\r\n                            <div class=\"avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2\">\r\n                                <img src=\"https://demos.creative-tim.com/corporate-ui-dashboard/assets/img/small-logos/logo-spotify.svg\" class=\"w-80\" alt=\"spotify\">\r\n                            </div>\r\n                            <div class=\"my-auto\">\r\n                                <h6 class=\"mb-0 text-sm\">Spotify</h6>\r\n                            </div>\r\n                            </div>\r\n                        </td>\r\n                        <td>\r\n                            <p class=\"text-sm font-weight-normal mb-0\">$2,500</p>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"text-sm font-weight-normal\">Wed 3:00pm</span>\r\n                        </td>\r\n                        <td class=\"align-middle\">\r\n                            <div class=\"d-flex\">\r\n                            <div class=\"border px-1 py-1 text-center d-flex align-items-center border-radius-sm my-auto\">\r\n                                <img src=\"https://demos.creative-tim.com/corporate-ui-dashboard/assets/img/logos/visa.png\" class=\"w-90 mx-auto\" alt=\"visa\">\r\n                            </div>\r\n                            <div class=\"ms-2\">\r\n                                <p class=\"text-dark text-sm mb-0\">Visa 1234</p>\r\n                                <p class=\"text-secondary text-sm mb-0\">Expiry 06/2026</p>\r\n                            </div>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"align-middle\">\r\n                            <a href=\"javascript:;\" class=\"text-secondary font-weight-bold text-xs\" data-bs-toggle=\"tooltip\" data-bs-title=\"Edit user\">\r\n                            <svg width=\"14\" height=\"14\" viewBox=\"0 0 15 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                <path d=\"M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z\" fill=\"#64748B\" />\r\n                            </svg>\r\n                            </a>\r\n                        </td>\r\n                        </tr>\r\n                        <tr>\r\n                        <td>\r\n                            <div class=\"d-flex px-2\">\r\n                            <div class=\"avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2\">\r\n                                <img src=\"https://demos.creative-tim.com/corporate-ui-dashboard/assets/img/small-logos/logo-invision.svg\" class=\"w-80\" alt=\"invision\">\r\n                            </div>\r\n                            <div class=\"my-auto\">\r\n                                <h6 class=\"mb-0 text-sm\">Invision</h6>\r\n                            </div>\r\n                            </div>\r\n                        </td>\r\n                        <td>\r\n                            <p class=\"text-sm font-weight-normal mb-0\">$5,000</p>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"text-sm font-weight-normal\">Wed 1:00pm</span>\r\n                        </td>\r\n                        <td class=\"align-middle\">\r\n                            <div class=\"d-flex\">\r\n                            <div class=\"border px-1 py-1 text-center d-flex align-items-center border-radius-sm my-auto\">\r\n                                <img src=\"https://demos.creative-tim.com/corporate-ui-dashboard/assets/img/logos/mastercard.png\" class=\"w-90 mx-auto\" alt=\"mastercard\">\r\n                            </div>\r\n                            <div class=\"ms-2\">\r\n                                <p class=\"text-dark text-sm mb-0\">Mastercard 1234</p>\r\n                                <p class=\"text-secondary text-sm mb-0\">Expiry 06/2026</p>\r\n                            </div>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"align-middle\">\r\n                            <a href=\"javascript:;\" class=\"text-secondary font-weight-bold text-xs\" data-bs-toggle=\"tooltip\" data-bs-title=\"Edit user\">\r\n                            <svg width=\"14\" height=\"14\" viewBox=\"0 0 15 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                <path d=\"M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z\" fill=\"#64748B\" />\r\n                            </svg>\r\n                            </a>\r\n                        </td>\r\n                        </tr>\r\n                        <tr>\r\n                        <td>\r\n                            <div class=\"d-flex px-2\">\r\n                            <div class=\"avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2\">\r\n                                <img src=\"https://demos.creative-tim.com/corporate-ui-dashboard/assets/img/small-logos/logo-jira.svg\" class=\"w-80\" alt=\"jira\">\r\n                            </div>\r\n                            <div class=\"my-auto\">\r\n                                <h6 class=\"mb-0 text-sm\">Jira</h6>\r\n                            </div>\r\n                            </div>\r\n                        </td>\r\n                        <td>\r\n                            <p class=\"text-sm font-weight-normal mb-0\">$3,400</p>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"text-sm font-weight-normal\">Mon 7:40pm</span>\r\n                        </td>\r\n                        <td class=\"align-middle\">\r\n                            <div class=\"d-flex\">\r\n                            <div class=\"border px-1 py-1 text-center d-flex align-items-center border-radius-sm my-auto\">\r\n                                <img src=\"https://demos.creative-tim.com/corporate-ui-dashboard/assets/img/logos/mastercard.png\" class=\"w-90 mx-auto\" alt=\"mastercard\">\r\n                            </div>\r\n                            <div class=\"ms-2\">\r\n                                <p class=\"text-dark text-sm mb-0\">Mastercard 1234</p>\r\n                                <p class=\"text-secondary text-sm mb-0\">Expiry 06/2026</p>\r\n                            </div>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"align-middle\">\r\n                            <a href=\"javascript:;\" class=\"text-secondary font-weight-bold text-xs\" data-bs-toggle=\"tooltip\" data-bs-title=\"Edit user\">\r\n                            <svg width=\"14\" height=\"14\" viewBox=\"0 0 15 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                <path d=\"M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z\" fill=\"#64748B\" />\r\n                            </svg>\r\n                            </a>\r\n                        </td>\r\n                        </tr>\r\n                        <tr>\r\n                        <td>\r\n                            <div class=\"d-flex px-2\">\r\n                            <div class=\"avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2\">\r\n                                <img src=\"https://demos.creative-tim.com/corporate-ui-dashboard/assets/img/small-logos/logo-slack.svg\" class=\"w-80\" alt=\"slack\">\r\n                            </div>\r\n                            <div class=\"my-auto\">\r\n                                <h6 class=\"mb-0 text-sm\">Slack</h6>\r\n                            </div>\r\n                            </div>\r\n                        </td>\r\n                        <td>\r\n                            <p class=\"text-sm font-weight-normal mb-0\">$1,000</p>\r\n                        </td>\r\n                        <td>\r\n                            <span class=\"text-sm font-weight-normal\">Wed 5:00pm</span>\r\n                        </td>\r\n                        <td class=\"align-middle\">\r\n                            <div class=\"d-flex\">\r\n                            <div class=\"border px-1 py-1 text-center d-flex align-items-center border-radius-sm my-auto\">\r\n                                <img src=\"https://demos.creative-tim.com/corporate-ui-dashboard/assets/img/logos/visa.png\" class=\"w-90 mx-auto\" alt=\"visa\">\r\n                            </div>\r\n                            <div class=\"ms-2\">\r\n                                <p class=\"text-dark text-sm mb-0\">Visa 1234</p>\r\n                                <p class=\"text-secondary text-sm mb-0\">Expiry 06/2026</p>\r\n                            </div>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"align-middle\">\r\n                            <a href=\"javascript:;\" class=\"text-secondary font-weight-bold text-xs\" data-bs-toggle=\"tooltip\" data-bs-title=\"Edit user\">\r\n                            <svg width=\"14\" height=\"14\" viewBox=\"0 0 15 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                <path d=\"M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z\" fill=\"#64748B\" />\r\n                            </svg>\r\n                            </a>\r\n                        </td>\r\n                        </tr>\r\n                    </tbody>\r\n                    </table>\r\n                </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n            <div class=\"card shadow-xs border\">\r\n                <div class=\"card-header pb-0\">\r\n                <div class=\"d-sm-flex align-items-center mb-3\">\r\n                    <div>\r\n                    <h6 class=\"font-weight-semibold text-lg mb-0\">Overview balance</h6>\r\n                    <p class=\"text-sm mb-sm-0 mb-2\">Here you have details about the balance.</p>\r\n                    </div>\r\n                    <div class=\"ms-auto d-flex\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-white mb-0 me-2\">\r\n                        View report\r\n                    </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"d-sm-flex align-items-center\">\r\n                    <h3 class=\"mb-0 font-weight-semibold\">$87,982.80</h3>\r\n                    <span class=\"badge badge-sm border border-success text-success bg-success border-radius-sm ms-sm-3 px-2\">\r\n                    <svg width=\"9\" height=\"9\" viewBox=\"0 0 10 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                        <path d=\"M0.46967 4.46967C0.176777 4.76256 0.176777 5.23744 0.46967 5.53033C0.762563 5.82322 1.23744 5.82322 1.53033 5.53033L0.46967 4.46967ZM5.53033 1.53033C5.82322 1.23744 5.82322 0.762563 5.53033 0.46967C5.23744 0.176777 4.76256 0.176777 4.46967 0.46967L5.53033 1.53033ZM5.53033 0.46967C5.23744 0.176777 4.76256 0.176777 4.46967 0.46967C4.17678 0.762563 4.17678 1.23744 4.46967 1.53033L5.53033 0.46967ZM8.46967 5.53033C8.76256 5.82322 9.23744 5.82322 9.53033 5.53033C9.82322 5.23744 9.82322 4.76256 9.53033 4.46967L8.46967 5.53033ZM1.53033 5.53033L5.53033 1.53033L4.46967 0.46967L0.46967 4.46967L1.53033 5.53033ZM4.46967 1.53033L8.46967 5.53033L9.53033 4.46967L5.53033 0.46967L4.46967 1.53033Z\" fill=\"#67C23A\"></path>\r\n                    </svg>\r\n                    10.5%\r\n                    </span>\r\n                </div>\r\n                </div>\r\n                <div class=\"card-body p-3\">\r\n                <div class=\"chart mt-n6\">\r\n                </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Footer"])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=template&id=250a2ee7":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=template&id=250a2ee7 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "g-sidenav-show bg-gray-100"
};
var _hoisted_2 = {
  "class": "main-content position-relative max-height-vh-100 h-100 border-radius-lg"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("body", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SideBar"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NavBar"], {
    page: $data.page
  }, null, 8 /* PROPS */, ["page"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Footer.vue?vue&type=template&id=e306f93c":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Footer.vue?vue&type=template&id=e306f93c ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "footer pt-3"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"container-fluid\"><div class=\"row align-items-center justify-content-lg-between\"><div class=\"col-lg-6 mb-lg-0 mb-4\"><div class=\"copyright text-center text-xs text-muted text-lg-start\"> Copyright © 2023 Corporate UI by <a href=\"https://www.creative-tim.com\" class=\"text-secondary\" target=\"_blank\">Creative Tim</a>. </div></div><div class=\"col-lg-6\"><ul class=\"nav nav-footer justify-content-center justify-content-lg-end\"><li class=\"nav-item\"><a href=\"https://www.creative-tim.com\" class=\"nav-link text-xs text-muted\" target=\"_blank\">Creative Tim</a></li><li class=\"nav-item\"><a href=\"https://www.creative-tim.com/presentation\" class=\"nav-link text-xs text-muted\" target=\"_blank\">About Us</a></li><li class=\"nav-item\"><a href=\"https://www.creative-tim.com/blog\" class=\"nav-link text-xs text-muted\" target=\"_blank\">Blog</a></li><li class=\"nav-item\"><a href=\"https://www.creative-tim.com/license\" class=\"nav-link text-xs pe-0 text-muted\" target=\"_blank\">License</a></li></ul></div></div></div>", 1);
var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("footer", _hoisted_1, _hoisted_3);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=template&id=2d2ea757":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=template&id=2d2ea757 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
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
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4\" id=\"navbar\"><div class=\"ms-md-auto pe-md-3 d-flex align-items-center\"><div class=\"input-group\"><span class=\"input-group-text text-body bg-white border-end-0\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16px\" height=\"16px\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z\"></path></svg></span><input type=\"text\" class=\"form-control ps-0\" placeholder=\"Search\"></div></div><ul class=\"navbar-nav justify-content-end\"><li class=\"nav-item d-xl-none px-3 d-flex align-items-center\"><a href=\"javascript:void(0)\" class=\"nav-link text-body p-0\" id=\"iconNavbarSidenav\"><div class=\"sidenav-toggler-inner\"><i class=\"sidenav-toggler-line\"></i><i class=\"sidenav-toggler-line\"></i><i class=\"sidenav-toggler-line\"></i></div></a></li><!-- &lt;li class=&quot;nav-item px-3 d-flex align-items-center&quot;&gt;\r\n                        &lt;a href=&quot;javascript:;&quot; class=&quot;nav-link text-body p-0&quot;&gt;\r\n                            &lt;svg width=&quot;16&quot; height=&quot;16&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;fixed-plugin-button-nav cursor-pointer&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;currentColor&quot;&gt;\r\n                            &lt;path fill-rule=&quot;evenodd&quot; d=&quot;M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z&quot; clip-rule=&quot;evenodd&quot; /&gt;\r\n                            &lt;/svg&gt;\r\n                        &lt;/a&gt;\r\n                    &lt;/li&gt; --><li class=\"nav-item dropdown pe-2 d-flex align-items-center\"><a href=\"javascript:;\" class=\"nav-link text-body p-0\" id=\"dropdownMenuButton\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><svg height=\"16\" width=\"16\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"cursor-pointers\"><path fill-rule=\"evenodd\" d=\"M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z\" clip-rule=\"evenodd\"></path></svg></a><ul class=\"dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4\" aria-labelledby=\"dropdownMenuButton\"><p class=\"m-0 text-center\">No notifications</p><!-- &lt;li class=&quot;mb-2&quot;&gt;\r\n                                &lt;a class=&quot;dropdown-item border-radius-md&quot; href=&quot;javascript:;&quot;&gt;\r\n                                    &lt;div class=&quot;d-flex py-1&quot;&gt;\r\n                                    &lt;div class=&quot;my-auto&quot;&gt;\r\n                                        &lt;img src=&quot;/storage/images/brands/logo.png&quot; class=&quot;avatar avatar-sm border-radius-sm  me-3 &quot;&gt;\r\n                                    &lt;/div&gt;\r\n                                    &lt;div class=&quot;d-flex flex-column justify-content-center&quot;&gt;\r\n                                        &lt;h6 class=&quot;text-sm font-weight-normal mb-1&quot;&gt;\r\n                                        &lt;span class=&quot;font-weight-bold&quot;&gt;New message&lt;/span&gt; from Laur\r\n                                        &lt;/h6&gt;\r\n                                        &lt;p class=&quot;text-xs text-secondary mb-0 d-flex align-items-center &quot;&gt;\r\n                                        &lt;i class=&quot;fa fa-clock opacity-6 me-1&quot;&gt;&lt;/i&gt;\r\n                                        13 minutes ago\r\n                                        &lt;/p&gt;\r\n                                    &lt;/div&gt;\r\n                                    &lt;/div&gt;\r\n                                &lt;/a&gt;\r\n                            &lt;/li&gt;\r\n                            &lt;li class=&quot;mb-2&quot;&gt;\r\n                                &lt;a class=&quot;dropdown-item border-radius-md&quot; href=&quot;javascript:;&quot;&gt;\r\n                                    &lt;div class=&quot;d-flex py-1&quot;&gt;\r\n                                    &lt;div class=&quot;my-auto&quot;&gt;\r\n                                        &lt;img src=&quot;/storage/images/brands/logo.png&quot; class=&quot;avatar avatar-sm border-radius-sm bg-gradient-dark p-2  me-3 &quot;&gt;\r\n                                    &lt;/div&gt;\r\n                                    &lt;div class=&quot;d-flex flex-column justify-content-center&quot;&gt;\r\n                                        &lt;h6 class=&quot;text-sm font-weight-normal mb-1&quot;&gt;\r\n                                        &lt;span class=&quot;font-weight-bold&quot;&gt;New report&lt;/span&gt; by Google\r\n                                        &lt;/h6&gt;\r\n                                        &lt;p class=&quot;text-xs text-secondary mb-0 d-flex align-items-center &quot;&gt;\r\n                                        &lt;i class=&quot;fa fa-clock opacity-6 me-1&quot;&gt;&lt;/i&gt;\r\n                                        1 day\r\n                                        &lt;/p&gt;\r\n                                    &lt;/div&gt;\r\n                                    &lt;/div&gt;\r\n                                &lt;/a&gt;\r\n                            &lt;/li&gt;\r\n                            &lt;li&gt;\r\n                                &lt;a class=&quot;dropdown-item border-radius-md&quot; href=&quot;javascript:;&quot;&gt;\r\n                                    &lt;div class=&quot;d-flex py-1&quot;&gt;\r\n                                    &lt;div class=&quot;avatar avatar-sm border-radius-sm bg-slate-800  me-3  my-auto&quot;&gt;\r\n                                        &lt;svg width=&quot;12px&quot; height=&quot;12px&quot; viewBox=&quot;0 0 43 36&quot; version=&quot;1.1&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot;&gt;\r\n                                        &lt;title&gt;credit-card&lt;/title&gt;\r\n                                        &lt;g stroke=&quot;none&quot; stroke-width=&quot;1&quot; fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;&gt;\r\n                                            &lt;g transform=&quot;translate(-2169.000000, -745.000000)&quot; fill=&quot;#FFFFFF&quot; fill-rule=&quot;nonzero&quot;&gt;\r\n                                            &lt;g transform=&quot;translate(1716.000000, 291.000000)&quot;&gt;\r\n                                                &lt;g transform=&quot;translate(453.000000, 454.000000)&quot;&gt;\r\n                                                &lt;path class=&quot;color-background&quot; d=&quot;M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z&quot; opacity=&quot;0.593633743&quot;&gt;&lt;/path&gt;\r\n                                                &lt;path class=&quot;color-background&quot; d=&quot;M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z&quot;&gt;&lt;/path&gt;\r\n                                                &lt;/g&gt;\r\n                                            &lt;/g&gt;\r\n                                            &lt;/g&gt;\r\n                                        &lt;/g&gt;\r\n                                        &lt;/svg&gt;\r\n                                    &lt;/div&gt;\r\n                                    &lt;div class=&quot;d-flex flex-column justify-content-center&quot;&gt;\r\n                                        &lt;h6 class=&quot;text-sm font-weight-normal mb-1&quot;&gt;\r\n                                        Payment successfully completed\r\n                                        &lt;/h6&gt;\r\n                                        &lt;p class=&quot;text-xs text-secondary d-flex align-items-center mb-0 &quot;&gt;\r\n                                        &lt;i class=&quot;fa fa-clock opacity-6 me-1&quot;&gt;&lt;/i&gt;\r\n                                        2 days\r\n                                        &lt;/p&gt;\r\n                                    &lt;/div&gt;\r\n                                    &lt;/div&gt;\r\n                                &lt;/a&gt;\r\n                            &lt;/li&gt; --></ul></li><li class=\"nav-item ps-2 d-flex align-items-center\"><a href=\"/admin/profile\" class=\"nav-link text-body p-0\"><img src=\"/storage/images/brands/logo.png\" class=\"avatar avatar-sm\" alt=\"avatar\"></a></li></ul></div>", 1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_4, [_hoisted_5, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.pages, function (page) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": "breadcrumb-item text-sm text-dark active",
      "aria-current": "page",
      key: page.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(page.name), 1 /* TEXT */);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.page), 1 /* TEXT */)]), _hoisted_7])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Sidebar.vue?vue&type=template&id=2c8335b6":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Sidebar.vue?vue&type=template&id=2c8335b6 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
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
    "height": "100vh !important",
    "overflow-x": "hidden"
  }
};
var _hoisted_4 = {
  "class": "navbar-nav"
};
var _hoisted_5 = {
  "class": "nav-item"
};
var _hoisted_6 = {
  "class": "nav-link active",
  href: "/admin/home"
};
var _hoisted_7 = {
  "class": "icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Dashboard", -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "nav-item mt-2"
};
var _hoisted_10 = {
  "class": "d-flex align-items-center nav-link"
};
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "font-weight-normal text-md ms-2"
}, "Content Management", -1 /* HOISTED */);
var _hoisted_12 = {
  "class": "nav-item border-start my-0 pt-2"
};
var _hoisted_13 = {
  "class": "nav-link position-relative ms-0 ps-2 py-2",
  href: "/admin/appointments"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Appointments", -1 /* HOISTED */);
var _hoisted_15 = {
  "class": "nav-item border-start my-0 pt-2"
};
var _hoisted_16 = {
  "class": "nav-link position-relative ms-0 ps-2 py-2",
  href: "/admin/blogs"
};
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Blogs", -1 /* HOISTED */);
var _hoisted_18 = {
  "class": "nav-item border-start my-0 pt-2"
};
var _hoisted_19 = {
  "class": "nav-link position-relative ms-0 ps-2 py-2",
  href: "/admin/careers"
};
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Careers", -1 /* HOISTED */);
var _hoisted_21 = {
  "class": "nav-item border-start my-0 pt-2"
};
var _hoisted_22 = {
  "class": "nav-link position-relative ms-0 ps-2 py-2",
  href: "/admin/events"
};
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Events", -1 /* HOISTED */);
var _hoisted_24 = {
  "class": "nav-item border-start my-0 pt-2"
};
var _hoisted_25 = {
  "class": "nav-link position-relative ms-0 ps-2 py-2",
  href: "/admin/partners"
};
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "nav-link-text ms-1"
}, "Partners", -1 /* HOISTED */);

function render(_ctx, _cache) {
  var _component_FontAwesomeIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FontAwesomeIcon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("aside", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-gauge",
    "class": "text-white"
  })]), _hoisted_8])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-sitemap"
  }), _hoisted_11])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-calendar-check"
  }), _hoisted_14])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-newspaper"
  }), _hoisted_17])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-users"
  }), _hoisted_20])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-calendar-days"
  }), _hoisted_23])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FontAwesomeIcon, {
    icon: "fa-solid fa-handshake"
  }), _hoisted_26])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"sidenav-footer mx-4 \">\r\n            <div class=\"card border-radius-md\" id=\"sidenavCard\">\r\n                <div class=\"card-body  text-start  p-3 w-100\">\r\n                    <div class=\"mb-3\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" class=\"text-primary\" viewBox=\"0 0 24 24\" fill=\"currentColor\" id=\"sidenavCardIcon\">\r\n                        <path d=\"M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z\" />\r\n                        <path d=\"M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z\" />\r\n                        </svg>\r\n                    </div>\r\n                    <div class=\"docs-info\">\r\n                        <h6 class=\"font-weight-bold up mb-2\">Need help?</h6>\r\n                        <p class=\"text-sm font-weight-normal\">Please check our docs.</p>\r\n                        <a href=\"https://www.creative-tim.com/learning-lab/bootstrap/license/corporate-ui-dashboard\" target=\"_blank\" class=\"font-weight-bold text-sm mb-0 icon-move-right mt-auto w-100 mb-0\">\r\n                        Documentation\r\n                        <i class=\"fas fa-arrow-right-long text-sm ms-1\" aria-hidden=\"true\"></i>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> ")]);
}

/***/ }),

/***/ "./resources/js/Pages/Admin/Blog/Index.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Admin/Blog/Index.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_6c0b2be4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=6c0b2be4 */ "./resources/js/Pages/Admin/Blog/Index.vue?vue&type=template&id=6c0b2be4");
/* harmony import */ var _Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Admin/Blog/Index.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var D_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_6c0b2be4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Admin/Blog/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Layouts/CorporateUI.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Shared/Layouts/CorporateUI.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CorporateUI_vue_vue_type_template_id_250a2ee7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CorporateUI.vue?vue&type=template&id=250a2ee7 */ "./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=template&id=250a2ee7");
/* harmony import */ var _CorporateUI_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CorporateUI.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var D_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CorporateUI_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CorporateUI_vue_vue_type_template_id_250a2ee7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Layouts/CorporateUI.vue"]])
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
/* harmony import */ var D_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Footer_vue_vue_type_template_id_e306f93c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Partials/CorporateUI/Footer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/Navbar.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/Navbar.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navbar_vue_vue_type_template_id_2d2ea757__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=2d2ea757 */ "./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=template&id=2d2ea757");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js */ "./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=script&lang=js");
/* harmony import */ var D_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Navbar_vue_vue_type_template_id_2d2ea757__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Partials/CorporateUI/Navbar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/Sidebar.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/Sidebar.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_vue_vue_type_template_id_2c8335b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=2c8335b6 */ "./resources/js/Shared/Partials/CorporateUI/Sidebar.vue?vue&type=template&id=2c8335b6");
/* harmony import */ var D_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_clients_finark_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Sidebar_vue_vue_type_template_id_2c8335b6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Partials/CorporateUI/Sidebar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Admin/Blog/Index.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Blog/Index.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Blog/Index.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CorporateUI_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CorporateUI_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CorporateUI.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navbar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Blog/Index.vue?vue&type=template&id=6c0b2be4":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Blog/Index.vue?vue&type=template&id=6c0b2be4 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_6c0b2be4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_6c0b2be4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=6c0b2be4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Blog/Index.vue?vue&type=template&id=6c0b2be4");


/***/ }),

/***/ "./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=template&id=250a2ee7":
/*!***********************************************************************************!*\
  !*** ./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=template&id=250a2ee7 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CorporateUI_vue_vue_type_template_id_250a2ee7__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CorporateUI_vue_vue_type_template_id_250a2ee7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CorporateUI.vue?vue&type=template&id=250a2ee7 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layouts/CorporateUI.vue?vue&type=template&id=250a2ee7");


/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/Footer.vue?vue&type=template&id=e306f93c":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/Footer.vue?vue&type=template&id=e306f93c ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_e306f93c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_e306f93c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=template&id=e306f93c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Footer.vue?vue&type=template&id=e306f93c");


/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=template&id=2d2ea757":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=template&id=2d2ea757 ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_template_id_2d2ea757__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_template_id_2d2ea757__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navbar.vue?vue&type=template&id=2d2ea757 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Navbar.vue?vue&type=template&id=2d2ea757");


/***/ }),

/***/ "./resources/js/Shared/Partials/CorporateUI/Sidebar.vue?vue&type=template&id=2c8335b6":
/*!********************************************************************************************!*\
  !*** ./resources/js/Shared/Partials/CorporateUI/Sidebar.vue?vue&type=template&id=2c8335b6 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_template_id_2c8335b6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_template_id_2c8335b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar.vue?vue&type=template&id=2c8335b6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Partials/CorporateUI/Sidebar.vue?vue&type=template&id=2c8335b6");


/***/ })

}]);