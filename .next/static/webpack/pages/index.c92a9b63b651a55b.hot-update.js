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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Map */ \"./components/Map.js\");\n/* harmony import */ var _components_LocationSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LocationSelector */ \"./components/LocationSelector.js\");\n/* harmony import */ var _components_Confirm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Confirm */ \"./components/Confirm.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/index.esm.js\");\n\n\n\n\n\n\n\nvar style = {\n    wrapper: \"h-screen w-screen flex flex-col\",\n    main: \"h-full w-screen flex-1 z-10\",\n    mapContainer: \"flex-1 w-full h-full\",\n    rideRequestContainer: \"h-full w-[400px] ml-[1rem] py-[3rem] absolute top-0 left-0 flex flex-col justify-end z-20\",\n    rideRequest: \"h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll\"\n};\nfunction Home() {\n    var firebaseConfig = {\n        //...\n        databaseURL: \"https://block-drive-af307-default-rtdb.firebaseio.com/\"\n    };\n    var app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_5__.initializeApp)(firebaseConfig);\n    var database = (0,firebase_database__WEBPACK_IMPORTED_MODULE_6__.getDatabase)(app);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\pages\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.main,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Map__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\pages\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\pages\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"absolute\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: style.rideRequest,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LocationSelector__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\pages\\\\index.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Confirm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\pages\\\\index.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\pages\\\\index.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\pages\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ashut\\\\OneDrive\\\\Desktop\\\\major\\\\BlockDrive\\\\pages\\\\index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this));\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ047QUFDMEI7QUFDbEI7QUFDQztBQUNHO0FBQy9DLEdBQUssQ0FBQ00sS0FBSyxHQUFHLENBQUM7SUFDYkMsT0FBTyxFQUFHLENBQStCO0lBQ3pDQyxJQUFJLEVBQUcsQ0FBMkI7SUFDbENDLFlBQVksRUFBRyxDQUFvQjtJQUNuQ0Msb0JBQW9CLEVBQUcsQ0FBeUY7SUFDaEhDLFdBQVcsRUFBRyxDQUFzRTtBQUN0RixDQUFDO0FBRWMsUUFBUSxDQUFDQyxJQUFJLEdBQUcsQ0FBQztJQUM5QixHQUFLLENBQUNDLGNBQWMsR0FBRyxDQUFDO1FBQ3RCLEVBQUs7UUFDTEMsV0FBVyxFQUFFLENBQXdEO0lBQ3ZFLENBQUM7SUFDRCxHQUFLLENBQUNDLEdBQUcsR0FBR1gsMkRBQWEsQ0FBQ1MsY0FBYztJQUN4QyxHQUFLLENBQUNHLFFBQVEsR0FBR1gsOERBQVcsQ0FBQ1UsR0FBRztJQUNoQyxNQUFNLDZFQUNIRSxDQUFHO1FBQUNDLFNBQVMsRUFBRVosS0FBSyxDQUFDQyxPQUFPOzt3RkFDMUJQLDBEQUFNOzs7Ozt3RkFDTmlCLENBQUc7Z0JBQUNDLFNBQVMsRUFBRVosS0FBSyxDQUFDRSxJQUFJO3NHQUN2QlAsdURBQUc7Ozs7Ozs7Ozs7d0ZBRUxnQixDQUFHO2dCQUFDWCxLQUFLLEVBQUUsQ0FBQztvQkFBQ2EsUUFBUSxFQUFFLENBQVU7Z0JBQUMsQ0FBQztzR0FDakNGLENBQUc7b0JBQUNDLFNBQVMsRUFBRVosS0FBSyxDQUFDSyxXQUFXOztvR0FDOUJULG9FQUFnQjs7Ozs7b0dBQ2hCQywyREFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQixDQUFDO0tBckJ1QlMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCBNYXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFwXCI7XHJcbmltcG9ydCBMb2NhdGlvblNlbGVjdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0xvY2F0aW9uU2VsZWN0b3JcIjtcclxuaW1wb3J0IENvbmZpcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29uZmlybVwiO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBnZXREYXRhYmFzZSB9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xyXG5jb25zdCBzdHlsZSA9IHtcclxuICB3cmFwcGVyOiBgaC1zY3JlZW4gdy1zY3JlZW4gZmxleCBmbGV4LWNvbGAsXHJcbiAgbWFpbjogYGgtZnVsbCB3LXNjcmVlbiBmbGV4LTEgei0xMGAsXHJcbiAgbWFwQ29udGFpbmVyOiBgZmxleC0xIHctZnVsbCBoLWZ1bGxgLFxyXG4gIHJpZGVSZXF1ZXN0Q29udGFpbmVyOiBgaC1mdWxsIHctWzQwMHB4XSBtbC1bMXJlbV0gcHktWzNyZW1dIGFic29sdXRlIHRvcC0wIGxlZnQtMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktZW5kIHotMjBgLFxyXG4gIHJpZGVSZXF1ZXN0OiBgaC1mdWxsIG1heC1oLVs3MDBweF0gYmctd2hpdGUgcm91bmRlZC1sZyBmbGV4IGZsZXgtY29sIG92ZXJmbG93LXNjcm9sbGAsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgLy8uLi5cclxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vYmxvY2stZHJpdmUtYWYzMDctZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL1wiLFxyXG4gIH07XHJcbiAgY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbiAgY29uc3QgZGF0YWJhc2UgPSBnZXREYXRhYmFzZShhcHApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUud3JhcHBlcn0+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm1haW59PlxyXG4gICAgICAgIDxNYXAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucmlkZVJlcXVlc3R9PlxyXG4gICAgICAgICAgPExvY2F0aW9uU2VsZWN0b3IgLz5cclxuICAgICAgICAgIDxDb25maXJtIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiTWFwIiwiTG9jYXRpb25TZWxlY3RvciIsIkNvbmZpcm0iLCJpbml0aWFsaXplQXBwIiwiZ2V0RGF0YWJhc2UiLCJzdHlsZSIsIndyYXBwZXIiLCJtYWluIiwibWFwQ29udGFpbmVyIiwicmlkZVJlcXVlc3RDb250YWluZXIiLCJyaWRlUmVxdWVzdCIsIkhvbWUiLCJmaXJlYmFzZUNvbmZpZyIsImRhdGFiYXNlVVJMIiwiYXBwIiwiZGF0YWJhc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});