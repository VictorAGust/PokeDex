"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pokemon/[name]",{

/***/ "./pages/pokemon/[name].js":
/*!*********************************!*\
  !*** ./pages/pokemon/[name].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _this = undefined;\nvar Pokemon = function(param) {\n    var pokemon = param.pokemon;\n    var _this1 = _this;\n    var pokeIndex = ('000' + pokemon.id).slice(-3);\n    var pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);\n    var renderTypes = function() {\n        return pokemon.types.map(function(type) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"px-2 py-1 bg-slate-700 rounded\",\n                children: type.type.name\n            }, type.slot, false, {\n                fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\pages\\\\pokemon\\\\[name].js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, _this1);\n        });\n    };\n    var renderStats = function() {\n        return pokemon.stats.map(function(stat, index) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-slate-700 my-2 rounded p-1 ml-9 mr-9\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-slate-900 rounded px-2\",\n                    style: {\n                        width: \"\".concat(stat.base_stat, \"%\")\n                    },\n                    children: stat.base_stat\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\pages\\\\pokemon\\\\[name].js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, _this1)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\pages\\\\pokemon\\\\[name].js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, _this1);\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: pokeName,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"absolute text-[400px] font-bold text-slate-500\",\n                        children: [\n                            \"#\",\n                            pokeIndex\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\pages\\\\pokemon\\\\[name].js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        alt: pokemon.name,\n                        width: 400,\n                        height: 400,\n                        src: \"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/\".concat(pokeIndex, \".png\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\pages\\\\pokemon\\\\[name].js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\pages\\\\pokemon\\\\[name].js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-slate-900 rounded p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex gap-5\",\n                        children: renderTypes()\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\pages\\\\pokemon\\\\[name].js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: renderStats()\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\pages\\\\pokemon\\\\[name].js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\pages\\\\pokemon\\\\[name].js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\pages\\\\pokemon\\\\[name].js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, _this));\n};\n_c = Pokemon;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokemon);\nvar _c;\n$RefreshReg$(_c, \"Pokemon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uL1tuYW1lXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDbUI7QUFDZDs7QUFFOUIsR0FBSyxDQUFDRyxPQUFPLEdBQUcsUUFBUSxRQUFTLENBQUM7UUFBZkMsT0FBTyxTQUFQQSxPQUFPOztJQUN0QixHQUFLLENBQUNDLFNBQVMsSUFBSSxDQUFLLE9BQUlELE9BQU8sQ0FBQ0UsRUFBRSxFQUFHQyxLQUFLLEVBQUUsQ0FBQztJQUNqRCxHQUFLLENBQUNDLFFBQVEsR0FBR0osT0FBTyxDQUFDSyxJQUFJLENBQUMsQ0FBQyxFQUFFQyxXQUFXLEtBQUtOLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDRixLQUFLLENBQUMsQ0FBQztJQUVyRSxHQUFLLENBQUNJLFdBQVcsR0FBRyxRQUFRO1FBQUYsTUFDM0IsQ0FBS1AsT0FBTyxDQUFDUSxLQUFLLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxJQUFJOzBCQUNsQixNQUFNLCtEQUFMQyxDQUFFO2dCQUFpQkMsU0FBUyxFQUFDLENBQWdDOzBCQUN6REYsSUFBSSxDQUFDQSxJQUFJLENBQUNMLElBQUk7ZUFEVkssSUFBSSxDQUFDRyxJQUFJOzs7Ozs7O0lBTTFCLEdBQUssQ0FBQ0MsV0FBVyxHQUFHLFFBQVE7UUFBRixNQUMzQixDQUFLZCxPQUFPLENBQUNlLEtBQUssQ0FBQ04sR0FBRyxDQUFDLFFBQVEsQ0FBUE8sSUFBSSxFQUFFQyxLQUFLOzBCQUMxQixNQUFNLCtEQUFMQyxDQUFHO2dCQUFhTixTQUFTLEVBQUMsQ0FBeUM7c0dBQy9ETSxDQUFHO29CQUFDTixTQUFTLEVBQUMsQ0FBMkJPO29CQUFBQSxLQUFLLEVBQUUsQ0FBQ0M7d0JBQUFBLEtBQUssRUFBRyxHQUFpQixNQUFDLENBQWhCSixJQUFJLENBQUNLLFNBQVMsRUFBQyxDQUFDO29CQUFDLENBQUM7OEJBQ3pFTCxJQUFJLENBQUNLLFNBQVM7Ozs7OztlQUZiSixLQUFLOzs7Ozs7O0lBU3ZCLE1BQU0sNkVBQ0RwQiwwREFBTTtRQUFDeUIsS0FBSyxFQUFFbEIsUUFBUTs7d0ZBQ2xCYyxDQUFHO2dCQUFDTixTQUFTLEVBQUMsQ0FBMkM7O2dHQUNyRFcsQ0FBSTt3QkFBQ1gsU0FBUyxFQUFDLENBQWdEOzs0QkFBQyxDQUFDOzRCQUFDWCxTQUFTOzs7Ozs7O2dHQUMzRUgsbURBQUs7d0JBQ0YwQixHQUFHLEVBQUV4QixPQUFPLENBQUNLLElBQUk7d0JBQ2pCZSxLQUFLLEVBQUUsR0FBRzt3QkFDVkssTUFBTSxFQUFFLEdBQUc7d0JBQ1hDLEdBQUcsRUFBRyxDQUEwRCw0REFBWSxNQUFJLENBQWR6QixTQUFTLEVBQUMsQ0FBSTs7Ozs7Ozs7Ozs7O3dGQUl2RmlCLENBQUc7Z0JBQUNOLFNBQVMsRUFBQyxDQUEwQjs7Z0dBQ3BDZSxDQUFFO3dCQUFDZixTQUFTLEVBQUMsQ0FBWTtrQ0FDckJMLFdBQVc7Ozs7OztnR0FHZlcsQ0FBRztrQ0FDQ0osV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hDLENBQUM7S0E5Q0tmLE9BQU87O0FBZ0RiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9rZW1vbi9bbmFtZV0uanM/MDQzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5jb25zdCBQb2tlbW9uID0gKHsgcG9rZW1vbiB9KSA9PiB7XHJcbiAgICBjb25zdCBwb2tlSW5kZXggPSAoJzAwMCcgKyAocG9rZW1vbi5pZCkpLnNsaWNlKC0zKVxyXG4gICAgY29uc3QgcG9rZU5hbWUgPSBwb2tlbW9uLm5hbWVbMF0udG9VcHBlckNhc2UoKSArIHBva2Vtb24ubmFtZS5zbGljZSgxKVxyXG5cclxuICAgIGNvbnN0IHJlbmRlclR5cGVzID0gKCkgPT4gKFxyXG4gICAgICAgIHBva2Vtb24udHlwZXMubWFwKHR5cGUgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXt0eXBlLnNsb3R9IGNsYXNzTmFtZT0ncHgtMiBweS0xIGJnLXNsYXRlLTcwMCByb3VuZGVkJz5cclxuICAgICAgICAgICAgICAgIHt0eXBlLnR5cGUubmFtZX1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICApKVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHJlbmRlclN0YXRzID0gKCkgPT4gKFxyXG4gICAgICAgIHBva2Vtb24uc3RhdHMubWFwKChzdGF0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT0nYmctc2xhdGUtNzAwIG15LTIgcm91bmRlZCBwLTEgbWwtOSBtci05Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1zbGF0ZS05MDAgcm91bmRlZCBweC0yJ3N0eWxlPXt7d2lkdGg6IGAke3N0YXQuYmFzZV9zdGF0fSVgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3N0YXQuYmFzZV9zdGF0fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpXHJcbiAgICApXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dCB0aXRsZT17cG9rZU5hbWV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdhYnNvbHV0ZSB0ZXh0LVs0MDBweF0gZm9udC1ib2xkIHRleHQtc2xhdGUtNTAwJz4je3Bva2VJbmRleH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3Bva2Vtb24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDAwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vYXNzZXRzLnBva2Vtb24uY29tL2Fzc2V0cy9jbXMyL2ltZy9wb2tlZGV4L2RldGFpbC8ke3Bva2VJbmRleH0ucG5nYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXNsYXRlLTkwMCByb3VuZGVkIHAtNSc+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGdhcC01Jz5cclxuICAgICAgICAgICAgICAgICAgICB7cmVuZGVyVHlwZXMoKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7cmVuZGVyU3RhdHMoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb2tlbW9uO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtjb250ZXh0LnF1ZXJ5Lm5hbWV9YClcclxuICAgIGNvbnN0IHBva2Vtb24gPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHBva2Vtb25cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJJbWFnZSIsIlBva2Vtb24iLCJwb2tlbW9uIiwicG9rZUluZGV4IiwiaWQiLCJzbGljZSIsInBva2VOYW1lIiwibmFtZSIsInRvVXBwZXJDYXNlIiwicmVuZGVyVHlwZXMiLCJ0eXBlcyIsIm1hcCIsInR5cGUiLCJsaSIsImNsYXNzTmFtZSIsInNsb3QiLCJyZW5kZXJTdGF0cyIsInN0YXRzIiwic3RhdCIsImluZGV4IiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImJhc2Vfc3RhdCIsInRpdGxlIiwic3BhbiIsImFsdCIsImhlaWdodCIsInNyYyIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/pokemon/[name].js\n");

/***/ })

});