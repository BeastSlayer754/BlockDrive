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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _temp_avatar_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../temp/avatar.jpg */ \"./temp/avatar.jpg\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_uberContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/uberContext */ \"./context/uberContext.js\");\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar style = {\n    // wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20`,\n    leftMenu: \"flex\",\n    logo: \"text-3xl text-white flex cursor-pointer mr-16\",\n    menuItem: \"text-lg text-white font-medium flex items-center mx-4 cursor-pointer\",\n    rightMenu: \"flex gap-3 items-center\",\n    userImageContainer: \"mr-2\",\n    userImage: \"h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer\",\n    loginButton: \"flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1\",\n    loginText: \"ml-2\"\n};\nvar Navbar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_uberContext__WEBPACK_IMPORTED_MODULE_4__.UberContext), currentAccount = ref.currentAccount, connectWallet = ref.connectWallet, currentUser = ref.currentUser;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-black\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row mt-4 ms-sm-3 align-items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"col-sm-3 text-white text-3xl\",\n                    children: \"Block-Drive\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"col-sm-3 text-white text-xl\",\n                    children: \"History\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"row justify-content-center\",\n                            style: {\n                                marginLeft: \"45%\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"rounded-full\",\n                                src: _temp_avatar_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                width: 40,\n                                height: 40\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, _this),\n                        currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                currentAccount.slice(0, 6),\n                                \"...\",\n                                currentAccount.slice(39)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: style.loginButton,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsPerson, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/login\",\n                                    className: style.loginText,\n                                    children: \"Log in\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\components\\\\Navbar.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this));\n};\n_s(Navbar, \"w1o78WDolkAIovg0TuhjcywvS9E=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QjtBQUNTO0FBQ0U7QUFDUDtBQUNrQjs7O0FBRXBELEdBQUssQ0FBQ0ssS0FBSyxHQUFHLENBQUM7SUFDYixFQUFtRztJQUNuR0MsUUFBUSxFQUFHLENBQUk7SUFDZkMsSUFBSSxFQUFHLENBQTZDO0lBQ3BEQyxRQUFRLEVBQUcsQ0FBb0U7SUFDL0VDLFNBQVMsRUFBRyxDQUF1QjtJQUNuQ0Msa0JBQWtCLEVBQUcsQ0FBSTtJQUN6QkMsU0FBUyxFQUFHLENBQTREO0lBQ3hFQyxXQUFXLEVBQUcsQ0FBMEU7SUFDeEZDLFNBQVMsRUFBRyxDQUFJO0FBQ2xCLENBQUM7QUFFRCxHQUFLLENBQUNDLE1BQU0sR0FBRyxRQUFRLEdBQUYsQ0FBQzs7SUFDcEIsR0FBSyxDQUNIWCxHQUF1QixHQUF2QkEsaURBQVUsQ0FBQ0MsNkRBQVcsR0FEaEJXLGNBQWMsR0FDcEJaLEdBQXVCLENBRGpCWSxjQUFjLEVBQUVDLGFBQWEsR0FDbkNiLEdBQXVCLENBRERhLGFBQWEsRUFBRUMsV0FBVyxHQUNoRGQsR0FBdUIsQ0FEY2MsV0FBVztJQUdsRCxNQUFNLDZFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFVOzhGQUN0QkQsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBcUM7OzRGQUNqREMsQ0FBRTtvQkFBQ0QsU0FBUyxFQUFDLENBQThCOzhCQUFDLENBQVc7Ozs7Ozs0RkFDdkRDLENBQUU7b0JBQUNELFNBQVMsRUFBQyxDQUE2Qjs4QkFBQyxDQUFPOzs7Ozs7NEZBQ2xERCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBVTs7b0dBRXRCRCxDQUFHOzRCQUNGQyxTQUFTLEVBQUMsQ0FBNEI7NEJBQ3RDZCxLQUFLLEVBQUUsQ0FBQztnQ0FBQ2dCLFVBQVUsRUFBRSxDQUFLOzRCQUFDLENBQUM7a0hBRTNCckIsbURBQUs7Z0NBQ0ptQixTQUFTLEVBQUMsQ0FBYztnQ0FDeEJHLEdBQUcsRUFBRXJCLHdEQUFNO2dDQUNYc0IsS0FBSyxFQUFFLEVBQUU7Z0NBQ1RDLE1BQU0sRUFBRSxFQUFFOzs7Ozs7Ozs7Ozt3QkFHYlQsY0FBYywrRUFDWkcsQ0FBRzs7Z0NBQ0RILGNBQWMsQ0FBQ1UsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO2dDQUFFLENBQUc7Z0NBQUNWLGNBQWMsQ0FBQ1UsS0FBSyxDQUFDLEVBQUU7Ozs7OztnSEFHeERQLENBQUc7NEJBQUNDLFNBQVMsRUFBRWQsS0FBSyxDQUFDTyxXQUFXOzs0R0FDOUJWLG9EQUFROzs7Ozs0R0FDUndCLENBQUM7b0NBQUNDLElBQUksRUFBQyxDQUFRO29DQUFDUixTQUFTLEVBQUVkLEtBQUssQ0FBQ1EsU0FBUzs4Q0FBRSxDQUU3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZCxDQUFDO0dBdENLQyxNQUFNO0tBQU5BLE1BQU07QUF3Q1osK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmJhci5qcz9mYmNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgYXZhdGFyIGZyb20gXCIuLi90ZW1wL2F2YXRhci5qcGdcIjtcclxuaW1wb3J0IHsgQnNQZXJzb24gfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVYmVyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L3ViZXJDb250ZXh0XCI7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICAvLyB3cmFwcGVyOiBgaC0xNiB3LWZ1bGwgYmctYmxhY2sgdGV4dC13aGl0ZSBmbGV4IG1kOmp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlciBweC02MCBmaXhlZCB6LTIwYCxcclxuICBsZWZ0TWVudTogYGZsZXhgLFxyXG4gIGxvZ286IGB0ZXh0LTN4bCB0ZXh0LXdoaXRlIGZsZXggY3Vyc29yLXBvaW50ZXIgbXItMTZgLFxyXG4gIG1lbnVJdGVtOiBgdGV4dC1sZyB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIGZsZXggaXRlbXMtY2VudGVyIG14LTQgY3Vyc29yLXBvaW50ZXJgLFxyXG4gIHJpZ2h0TWVudTogYGZsZXggZ2FwLTMgaXRlbXMtY2VudGVyYCxcclxuICB1c2VySW1hZ2VDb250YWluZXI6IGBtci0yYCxcclxuICB1c2VySW1hZ2U6IGBoLTEwIHctMTAgbXItNCByb3VuZGVkLWZ1bGwgcC1weCBvYmplY3QtY292ZXIgY3Vyc29yLXBvaW50ZXJgLFxyXG4gIGxvZ2luQnV0dG9uOiBgZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIGhvdmVyOmJnLVsjMzMzMzMzXSBweC00IHB5LTFgLFxyXG4gIGxvZ2luVGV4dDogYG1sLTJgLFxyXG59O1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY3VycmVudEFjY291bnQsIGNvbm5lY3RXYWxsZXQsIGN1cnJlbnRVc2VyIH0gPVxyXG4gICAgdXNlQ29udGV4dChVYmVyQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTQgbXMtc20tMyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29sLXNtLTMgdGV4dC13aGl0ZSB0ZXh0LTN4bFwiPkJsb2NrLURyaXZlPC9oMT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29sLXNtLTMgdGV4dC13aGl0ZSB0ZXh0LXhsXCI+SGlzdG9yeTwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5tZW51SXRlbX0+e2N1cnJlbnRVc2VyLm5hbWU/LnNwbGl0KFwiIFwiKVswXX08L2Rpdj4gKi99XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI0NSVcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICAgIHNyYz17YXZhdGFyfVxyXG4gICAgICAgICAgICAgIHdpZHRoPXs0MH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezQwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7Y3VycmVudEFjY291bnQgPyAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge2N1cnJlbnRBY2NvdW50LnNsaWNlKDAsIDYpfS4uLntjdXJyZW50QWNjb3VudC5zbGljZSgzOSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxvZ2luQnV0dG9ufT5cclxuICAgICAgICAgICAgICA8QnNQZXJzb24gLz5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPXtzdHlsZS5sb2dpblRleHR9PlxyXG4gICAgICAgICAgICAgICAgTG9nIGluXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiYXZhdGFyIiwiQnNQZXJzb24iLCJ1c2VDb250ZXh0IiwiVWJlckNvbnRleHQiLCJzdHlsZSIsImxlZnRNZW51IiwibG9nbyIsIm1lbnVJdGVtIiwicmlnaHRNZW51IiwidXNlckltYWdlQ29udGFpbmVyIiwidXNlckltYWdlIiwibG9naW5CdXR0b24iLCJsb2dpblRleHQiLCJOYXZiYXIiLCJjdXJyZW50QWNjb3VudCIsImNvbm5lY3RXYWxsZXQiLCJjdXJyZW50VXNlciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFyZ2luTGVmdCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Iiwic2xpY2UiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ })

});