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

/***/ "./components/Pokemon.js":
/*!*******************************!*\
  !*** ./components/Pokemon.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n/* eslint-disable jsx-a11y/alt-text */ \n\n\nvar _this = undefined;\nvar Pokemon = function(param) {\n    var pokemon = param.pokemon, index = param.index;\n    var pokeIndex = ('000' + (index + 1)).slice(-3);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/pokemon/\".concat(pokemon.name),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-slate-900 rounded p-1 flex flex-col justify-center items-center relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"absolute text-5xl text-slate-500 top-0 right-3 font-bold\",\n                        children: [\n                            \"#\",\n                            pokeIndex\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\components\\\\Pokemon.js\",\n                        lineNumber: 13,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        alt: pokemon.name,\n                        width: 150,\n                        height: 150,\n                        src: \"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/\".concat(pokeIndex, \".png\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\components\\\\Pokemon.js\",\n                        lineNumber: 14,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"uppercase font-semibold tracking-wider text-amber-400\",\n                        children: pokemon.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\components\\\\Pokemon.js\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\components\\\\Pokemon.js\",\n                lineNumber: 12,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\components\\\\Pokemon.js\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\components\\\\Pokemon.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, _this));\n};\n_c = Pokemon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokemon);\nvar _c;\n$RefreshReg$(_c, \"Pokemon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bva2Vtb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEVBQXNDLHFDQUNiO0FBQ0s7QUFDRjs7QUFFNUIsR0FBSyxDQUFDRyxPQUFPLEdBQUcsUUFBUSxRQUFnQixDQUFDO1FBQXRCQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsS0FBSyxTQUFMQSxLQUFLO0lBQzdCLEdBQUssQ0FBQ0MsU0FBUyxJQUFJLENBQUssUUFBSUQsS0FBSyxHQUFHLENBQUMsR0FBR0UsS0FBSyxFQUFFLENBQUM7SUFFaEQsTUFBTSw2RUFDREwsa0RBQUk7UUFBQ00sSUFBSSxFQUFHLENBQVMsV0FBZSxPQUFiSixPQUFPLENBQUNLLElBQUk7OEZBQy9CQyxDQUFDO2tHQUNHQyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBNkU7O2dHQUN2RkMsQ0FBSTt3QkFBQ0QsU0FBUyxFQUFDLENBQTBEOzs0QkFBQyxDQUFDOzRCQUFDTixTQUFTOzs7Ozs7O2dHQUNyRkwsbURBQUs7d0JBQ0ZhLEdBQUcsRUFBRVYsT0FBTyxDQUFDSyxJQUFJO3dCQUNqQk0sS0FBSyxFQUFFLEdBQUc7d0JBQ1ZDLE1BQU0sRUFBRSxHQUFHO3dCQUNYQyxHQUFHLEVBQUcsQ0FBMEQsNERBQVksTUFBSSxDQUFkWCxTQUFTLEVBQUMsQ0FBSTs7Ozs7O2dHQUVuRk8sQ0FBSTt3QkFBQ0QsU0FBUyxFQUFDLENBQXVEO2tDQUNsRVIsT0FBTyxDQUFDSyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJDLENBQUM7S0FyQktOLE9BQU87QUF1QmIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bva2Vtb24uanM/MDg3NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbHQtdGV4dCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFBva2Vtb24gPSAoeyBwb2tlbW9uLCBpbmRleCB9KSA9PiB7XHJcbiAgICBjb25zdCBwb2tlSW5kZXggPSAoJzAwMCcgKyAoaW5kZXggKyAxKSkuc2xpY2UoLTMpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayBocmVmPXtgL3Bva2Vtb24vJHtwb2tlbW9uLm5hbWV9YH0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXNsYXRlLTkwMCByb3VuZGVkIHAtMSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByZWxhdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdhYnNvbHV0ZSB0ZXh0LTV4bCB0ZXh0LXNsYXRlLTUwMCB0b3AtMCByaWdodC0zIGZvbnQtYm9sZCc+I3twb2tlSW5kZXh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Bva2Vtb24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vYXNzZXRzLnBva2Vtb24uY29tL2Fzc2V0cy9jbXMyL2ltZy9wb2tlZGV4L2RldGFpbC8ke3Bva2VJbmRleH0ucG5nYH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndXBwZXJjYXNlIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZXIgdGV4dC1hbWJlci00MDAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9rZW1vbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBva2Vtb247Il0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJMaW5rIiwiUG9rZW1vbiIsInBva2Vtb24iLCJpbmRleCIsInBva2VJbmRleCIsInNsaWNlIiwiaHJlZiIsIm5hbWUiLCJhIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Pokemon.js\n");

/***/ })

});