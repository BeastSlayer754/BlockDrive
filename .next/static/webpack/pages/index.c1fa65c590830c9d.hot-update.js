"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _temp_avatar_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../temp/avatar.jpg */ \"./temp/avatar.jpg\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_uberContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/uberContext */ \"./context/uberContext.js\");\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar style = {\n    wrapper: \"h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20\",\n    leftMenu: \"flex\",\n    logo: \"text-3xl text-white flex cursor-pointer mr-16\",\n    menuItem: \"text-lg text-white font-medium flex items-center mx-4 cursor-pointer\",\n    rightMenu: \"flex gap-3 items-center\",\n    userImageContainer: \"mr-2\",\n    userImage: \"h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer\",\n    loginButton: \"flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1\",\n    loginText: \"ml-2\"\n};\nvar Navbar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_uberContext__WEBPACK_IMPORTED_MODULE_4__.UberContext), currentAccount = ref.currentAccount, connectWallet = ref.connectWallet, currentUser = ref.currentUser;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.leftMenu,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.logo,\n                        children: \"Block-Drive\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.menuItem,\n                        children: \"History\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.rightMenu,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.userImageContainer,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            className: style.userImage,\n                            src: _temp_avatar_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                            width: 40,\n                            height: 40\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            currentAccount.slice(0, 6),\n                            \"...\",\n                            currentAccount.slice(39)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.loginButton,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsPerson, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/login\",\n                                className: style.loginText,\n                                children: \"Log in\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this));\n};\n_s(Navbar, \"w1o78WDolkAIovg0TuhjcywvS9E=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QjtBQUNTO0FBQ0U7QUFDUDtBQUNrQjs7O0FBRXBELEdBQUssQ0FBQ0ssS0FBSyxHQUFHLENBQUM7SUFDYkMsT0FBTyxFQUFHLENBQW9GO0lBQzlGQyxRQUFRLEVBQUcsQ0FBSTtJQUNmQyxJQUFJLEVBQUcsQ0FBNkM7SUFDcERDLFFBQVEsRUFBRyxDQUFvRTtJQUMvRUMsU0FBUyxFQUFHLENBQXVCO0lBQ25DQyxrQkFBa0IsRUFBRyxDQUFJO0lBQ3pCQyxTQUFTLEVBQUcsQ0FBNEQ7SUFDeEVDLFdBQVcsRUFBRyxDQUEwRTtJQUN4RkMsU0FBUyxFQUFHLENBQUk7QUFDbEIsQ0FBQztBQUVELEdBQUssQ0FBQ0MsTUFBTSxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUNwQixHQUFLLENBQ0haLEdBQXVCLEdBQXZCQSxpREFBVSxDQUFDQyw2REFBVyxHQURoQlksY0FBYyxHQUNwQmIsR0FBdUIsQ0FEakJhLGNBQWMsRUFBRUMsYUFBYSxHQUNuQ2QsR0FBdUIsQ0FERGMsYUFBYSxFQUFFQyxXQUFXLEdBQ2hEZixHQUF1QixDQURjZSxXQUFXO0lBR2xELE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQUs7O3dGQUNqQkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFFZixLQUFLLENBQUNFLFFBQVE7O2dHQUMzQlksQ0FBRzt3QkFBQ0MsU0FBUyxFQUFFZixLQUFLLENBQUNHLElBQUk7a0NBQUUsQ0FBVzs7Ozs7O2dHQUN0Q1csQ0FBRzt3QkFBQ0MsU0FBUyxFQUFFZixLQUFLLENBQUNJLFFBQVE7a0NBQUUsQ0FBTzs7Ozs7Ozs7Ozs7O3dGQUV4Q1UsQ0FBRztnQkFBQ0MsU0FBUyxFQUFFZixLQUFLLENBQUNLLFNBQVM7O2dHQUU1QlMsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFFZixLQUFLLENBQUNNLGtCQUFrQjs4R0FDckNYLG1EQUFLOzRCQUNKb0IsU0FBUyxFQUFFZixLQUFLLENBQUNPLFNBQVM7NEJBQzFCUyxHQUFHLEVBQUVwQix3REFBTTs0QkFDWHFCLEtBQUssRUFBRSxFQUFFOzRCQUNUQyxNQUFNLEVBQUUsRUFBRTs7Ozs7Ozs7Ozs7b0JBR2JQLGNBQWMsK0VBQ1pHLENBQUc7OzRCQUNESCxjQUFjLENBQUNRLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQzs0QkFBRSxDQUFHOzRCQUFDUixjQUFjLENBQUNRLEtBQUssQ0FBQyxFQUFFOzs7Ozs7NEdBR3hETCxDQUFHO3dCQUFDQyxTQUFTLEVBQUVmLEtBQUssQ0FBQ1EsV0FBVzs7d0dBQzlCWCxvREFBUTs7Ozs7d0dBQ1J1QixDQUFDO2dDQUFDQyxJQUFJLEVBQUMsQ0FBUTtnQ0FBQ04sU0FBUyxFQUFFZixLQUFLLENBQUNTLFNBQVM7MENBQUUsQ0FFN0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1aLENBQUM7R0FuQ0tDLE1BQU07S0FBTkEsTUFBTTtBQXFDWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzP2ZiY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBhdmF0YXIgZnJvbSBcIi4uL3RlbXAvYXZhdGFyLmpwZ1wiO1xyXG5pbXBvcnQgeyBCc1BlcnNvbiB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFViZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvdWJlckNvbnRleHRcIjtcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHdyYXBwZXI6IGBoLTE2IHctZnVsbCBiZy1ibGFjayB0ZXh0LXdoaXRlIGZsZXggbWQ6anVzdGlmeS1hcm91bmQgaXRlbXMtY2VudGVyIHB4LTYwIGZpeGVkIHotMjBgLFxyXG4gIGxlZnRNZW51OiBgZmxleGAsXHJcbiAgbG9nbzogYHRleHQtM3hsIHRleHQtd2hpdGUgZmxleCBjdXJzb3ItcG9pbnRlciBtci0xNmAsXHJcbiAgbWVudUl0ZW06IGB0ZXh0LWxnIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gZmxleCBpdGVtcy1jZW50ZXIgbXgtNCBjdXJzb3ItcG9pbnRlcmAsXHJcbiAgcmlnaHRNZW51OiBgZmxleCBnYXAtMyBpdGVtcy1jZW50ZXJgLFxyXG4gIHVzZXJJbWFnZUNvbnRhaW5lcjogYG1yLTJgLFxyXG4gIHVzZXJJbWFnZTogYGgtMTAgdy0xMCBtci00IHJvdW5kZWQtZnVsbCBwLXB4IG9iamVjdC1jb3ZlciBjdXJzb3ItcG9pbnRlcmAsXHJcbiAgbG9naW5CdXR0b246IGBmbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWZ1bGwgaG92ZXI6YmctWyMzMzMzMzNdIHB4LTQgcHktMWAsXHJcbiAgbG9naW5UZXh0OiBgbWwtMmAsXHJcbn07XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBjdXJyZW50QWNjb3VudCwgY29ubmVjdFdhbGxldCwgY3VycmVudFVzZXIgfSA9XHJcbiAgICB1c2VDb250ZXh0KFViZXJDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sZWZ0TWVudX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxvZ299PkJsb2NrLURyaXZlPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm1lbnVJdGVtfT5IaXN0b3J5PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucmlnaHRNZW51fT5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlLm1lbnVJdGVtfT57Y3VycmVudFVzZXIubmFtZT8uc3BsaXQoXCIgXCIpWzBdfTwvZGl2PiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudXNlckltYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnVzZXJJbWFnZX1cclxuICAgICAgICAgICAgc3JjPXthdmF0YXJ9XHJcbiAgICAgICAgICAgIHdpZHRoPXs0MH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs0MH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2N1cnJlbnRBY2NvdW50ID8gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2N1cnJlbnRBY2NvdW50LnNsaWNlKDAsIDYpfS4uLntjdXJyZW50QWNjb3VudC5zbGljZSgzOSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxvZ2luQnV0dG9ufT5cclxuICAgICAgICAgICAgPEJzUGVyc29uIC8+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9e3N0eWxlLmxvZ2luVGV4dH0+XHJcbiAgICAgICAgICAgICAgTG9nIGluXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiYXZhdGFyIiwiQnNQZXJzb24iLCJ1c2VDb250ZXh0IiwiVWJlckNvbnRleHQiLCJzdHlsZSIsIndyYXBwZXIiLCJsZWZ0TWVudSIsImxvZ28iLCJtZW51SXRlbSIsInJpZ2h0TWVudSIsInVzZXJJbWFnZUNvbnRhaW5lciIsInVzZXJJbWFnZSIsImxvZ2luQnV0dG9uIiwibG9naW5UZXh0IiwiTmF2YmFyIiwiY3VycmVudEFjY291bnQiLCJjb25uZWN0V2FsbGV0IiwiY3VycmVudFVzZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInNsaWNlIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ })

});