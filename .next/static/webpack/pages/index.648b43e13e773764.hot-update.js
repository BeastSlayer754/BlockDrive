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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _temp_avatar_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../temp/avatar.jpg */ \"./temp/avatar.jpg\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_uberContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/uberContext */ \"./context/uberContext.js\");\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar style = {\n    wrapper: \"h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20\",\n    leftMenu: \"flex\",\n    logo: \"text-3xl text-white flex cursor-pointer mr-16\",\n    menuItem: \"text-lg text-white font-medium flex items-center mx-4 cursor-pointer\",\n    rightMenu: \"flex gap-3 items-center\",\n    userImageContainer: \"mr-2\",\n    userImage: \"h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer\",\n    loginButton: \"flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1\",\n    loginText: \"ml-2\"\n};\nvar Navbar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_uberContext__WEBPACK_IMPORTED_MODULE_4__.UberContext), currentAccount = ref.currentAccount, connectWallet = ref.connectWallet, currentUser = ref.currentUser;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row bg-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-sm-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center text-white text-3xl\",\n                        children: \"Block-Drive\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center text-white text-xl\",\n                        children: \"History\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.rightMenu,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row justify-content-center\",\n                        style: {\n                            width: \"100%\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            className: \"rounded-full \",\n                            src: _temp_avatar_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                            width: 40,\n                            height: 40\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            currentAccount.slice(0, 6),\n                            \"...\",\n                            currentAccount.slice(39)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.loginButton,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsPerson, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/login\",\n                                className: style.loginText,\n                                children: \"Log in\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this));\n};\n_s(Navbar, \"w1o78WDolkAIovg0TuhjcywvS9E=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QjtBQUNTO0FBQ0U7QUFDUDtBQUNrQjs7O0FBRXBELEdBQUssQ0FBQ0ssS0FBSyxHQUFHLENBQUM7SUFDYkMsT0FBTyxFQUFHLENBQW9GO0lBQzlGQyxRQUFRLEVBQUcsQ0FBSTtJQUNmQyxJQUFJLEVBQUcsQ0FBNkM7SUFDcERDLFFBQVEsRUFBRyxDQUFvRTtJQUMvRUMsU0FBUyxFQUFHLENBQXVCO0lBQ25DQyxrQkFBa0IsRUFBRyxDQUFJO0lBQ3pCQyxTQUFTLEVBQUcsQ0FBNEQ7SUFDeEVDLFdBQVcsRUFBRyxDQUEwRTtJQUN4RkMsU0FBUyxFQUFHLENBQUk7QUFDbEIsQ0FBQztBQUVELEdBQUssQ0FBQ0MsTUFBTSxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUNwQixHQUFLLENBQ0haLEdBQXVCLEdBQXZCQSxpREFBVSxDQUFDQyw2REFBVyxHQURoQlksY0FBYyxHQUNwQmIsR0FBdUIsQ0FEakJhLGNBQWMsRUFBRUMsYUFBYSxHQUNuQ2QsR0FBdUIsQ0FERGMsYUFBYSxFQUFFQyxXQUFXLEdBQ2hEZixHQUF1QixDQURjZSxXQUFXO0lBR2xELE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWM7O3dGQUMxQkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVU7O2dHQUN0QkQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQWlDO2tDQUFDLENBQVc7Ozs7OztnR0FDM0RELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFnQztrQ0FBQyxDQUFPOzs7Ozs7Ozs7Ozs7d0ZBRXhERCxDQUFHO2dCQUFDQyxTQUFTLEVBQUVmLEtBQUssQ0FBQ0ssU0FBUzs7Z0dBRTVCUyxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBNEI7d0JBQUNmLEtBQUssRUFBRSxDQUFDOzRCQUFDZ0IsS0FBSyxFQUFFLENBQU07d0JBQUMsQ0FBQzs4R0FDakVyQixtREFBSzs0QkFDSm9CLFNBQVMsRUFBQyxDQUFlOzRCQUN6QkUsR0FBRyxFQUFFckIsd0RBQU07NEJBQ1hvQixLQUFLLEVBQUUsRUFBRTs0QkFDVEUsTUFBTSxFQUFFLEVBQUU7Ozs7Ozs7Ozs7O29CQUdiUCxjQUFjLCtFQUNaRyxDQUFHOzs0QkFDREgsY0FBYyxDQUFDUSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7NEJBQUUsQ0FBRzs0QkFBQ1IsY0FBYyxDQUFDUSxLQUFLLENBQUMsRUFBRTs7Ozs7OzRHQUd4REwsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFFZixLQUFLLENBQUNRLFdBQVc7O3dHQUM5Qlgsb0RBQVE7Ozs7O3dHQUNSdUIsQ0FBQztnQ0FBQ0MsSUFBSSxFQUFDLENBQVE7Z0NBQUNOLFNBQVMsRUFBRWYsS0FBSyxDQUFDUyxTQUFTOzBDQUFFLENBRTdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWixDQUFDO0dBbkNLQyxNQUFNO0tBQU5BLE1BQU07QUFxQ1osK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmJhci5qcz9mYmNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgYXZhdGFyIGZyb20gXCIuLi90ZW1wL2F2YXRhci5qcGdcIjtcclxuaW1wb3J0IHsgQnNQZXJzb24gfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVYmVyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L3ViZXJDb250ZXh0XCI7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICB3cmFwcGVyOiBgaC0xNiB3LWZ1bGwgYmctYmxhY2sgdGV4dC13aGl0ZSBmbGV4IG1kOmp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlciBweC02MCBmaXhlZCB6LTIwYCxcclxuICBsZWZ0TWVudTogYGZsZXhgLFxyXG4gIGxvZ286IGB0ZXh0LTN4bCB0ZXh0LXdoaXRlIGZsZXggY3Vyc29yLXBvaW50ZXIgbXItMTZgLFxyXG4gIG1lbnVJdGVtOiBgdGV4dC1sZyB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIGZsZXggaXRlbXMtY2VudGVyIG14LTQgY3Vyc29yLXBvaW50ZXJgLFxyXG4gIHJpZ2h0TWVudTogYGZsZXggZ2FwLTMgaXRlbXMtY2VudGVyYCxcclxuICB1c2VySW1hZ2VDb250YWluZXI6IGBtci0yYCxcclxuICB1c2VySW1hZ2U6IGBoLTEwIHctMTAgbXItNCByb3VuZGVkLWZ1bGwgcC1weCBvYmplY3QtY292ZXIgY3Vyc29yLXBvaW50ZXJgLFxyXG4gIGxvZ2luQnV0dG9uOiBgZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIGhvdmVyOmJnLVsjMzMzMzMzXSBweC00IHB5LTFgLFxyXG4gIGxvZ2luVGV4dDogYG1sLTJgLFxyXG59O1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY3VycmVudEFjY291bnQsIGNvbm5lY3RXYWxsZXQsIGN1cnJlbnRVc2VyIH0gPVxyXG4gICAgdXNlQ29udGV4dChVYmVyQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBiZy1ibGFja1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtM3hsXCI+QmxvY2stRHJpdmU8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtd2hpdGUgdGV4dC14bFwiPkhpc3Rvcnk8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5yaWdodE1lbnV9PlxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubWVudUl0ZW19PntjdXJyZW50VXNlci5uYW1lPy5zcGxpdChcIiBcIilbMF19PC9kaXY+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIFwiXHJcbiAgICAgICAgICAgIHNyYz17YXZhdGFyfVxyXG4gICAgICAgICAgICB3aWR0aD17NDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NDB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtjdXJyZW50QWNjb3VudCA/IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtjdXJyZW50QWNjb3VudC5zbGljZSgwLCA2KX0uLi57Y3VycmVudEFjY291bnQuc2xpY2UoMzkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sb2dpbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgIDxCc1BlcnNvbiAvPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPXtzdHlsZS5sb2dpblRleHR9PlxyXG4gICAgICAgICAgICAgIExvZyBpblxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsImF2YXRhciIsIkJzUGVyc29uIiwidXNlQ29udGV4dCIsIlViZXJDb250ZXh0Iiwic3R5bGUiLCJ3cmFwcGVyIiwibGVmdE1lbnUiLCJsb2dvIiwibWVudUl0ZW0iLCJyaWdodE1lbnUiLCJ1c2VySW1hZ2VDb250YWluZXIiLCJ1c2VySW1hZ2UiLCJsb2dpbkJ1dHRvbiIsImxvZ2luVGV4dCIsIk5hdmJhciIsImN1cnJlbnRBY2NvdW50IiwiY29ubmVjdFdhbGxldCIsImN1cnJlbnRVc2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwid2lkdGgiLCJzcmMiLCJoZWlnaHQiLCJzbGljZSIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ })

});