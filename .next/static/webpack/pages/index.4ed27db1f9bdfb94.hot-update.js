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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var C_Users_devil_Desktop_xd_pokedex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_devil_Desktop_xd_pokedex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_devil_Desktop_xd_pokedex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Pokemon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Pokemon */ \"./components/Pokemon.js\");\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction Home(param) {\n    var initialpokemon = param.initialpokemon;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialpokemon), pokemon = ref[0], setPokemon = ref[1];\n    var fetchPokemon = function() {\n        var _ref = _asyncToGenerator(C_Users_devil_Desktop_xd_pokedex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url) {\n            var response, nextPokemon;\n            return C_Users_devil_Desktop_xd_pokedex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(url);\n                    case 2:\n                        response = _ctx.sent;\n                        _ctx.next = 5;\n                        return response.json();\n                    case 5:\n                        nextPokemon = _ctx.sent;\n                        setPokemon(nextPokemon);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchPokemon(url) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10\",\n                children: pokemon.results.map(function(monster, index) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Pokemon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        pokemon: monster,\n                        index: index\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\pages\\\\index.js\",\n                        lineNumber: 18,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\pages\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"px-3 py-1 bg-slate-900\",\n                        onClick: function() {\n                            return fetchPokemon(pokemon.previous);\n                        },\n                        children: \"prev\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\pages\\\\index.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"px-3 py-1 bg-slate-900\",\n                        onClick: function() {\n                            return fetchPokemon(pokemon.next);\n                        },\n                        children: \"next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\pages\\\\index.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\devil\\\\Desktop\\\\xd\\\\pokedex\\\\pages\\\\index.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this));\n};\n_s(Home, \"d60aAxbDZ+so0+I6gaW+MQM+DMY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDVDtBQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixRQUFRLENBQUNHLElBQUksQ0FBQyxLQUFrQixFQUFFLENBQUM7UUFBbkJDLGNBQWMsR0FBaEIsS0FBa0IsQ0FBaEJBLGNBQWM7OztJQUN6QyxHQUFLLENBQXlCSCxHQUF3QixHQUF4QkEsK0NBQVEsQ0FBQ0csY0FBYyxHQUE5Q0MsT0FBTyxHQUFnQkosR0FBd0IsS0FBdENLLFVBQVUsR0FBSUwsR0FBd0I7SUFFdEQsR0FBSyxDQUFDTSxZQUFZO2lMQUFHLFFBQVEsU0FBREMsR0FBRyxFQUFLLENBQUM7Z0JBQzNCQyxRQUFRLEVBQ1JDLFdBQVc7Ozs7OytCQURNQyxLQUFLLENBQUNILEdBQUc7O3dCQUExQkMsUUFBUTs7K0JBQ1lBLFFBQVEsQ0FBQ0csSUFBSTs7d0JBQWpDRixXQUFXO3dCQUNqQkosVUFBVSxDQUFDSSxXQUFXOzs7Ozs7UUFDMUIsQ0FBQzt3QkFKS0gsWUFBWSxDQUFVQyxHQUFHOzs7O0lBTS9CLE1BQU0sNkVBQ0RSLDBEQUFNOzt3RkFDRmEsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXVEOzBCQUNqRVQsT0FBTyxDQUFDVSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE9BQU8sRUFBRUMsS0FBSztrQ0FDaEMsTUFBTSwrREFBTGhCLDJEQUFPO3dCQUFhRyxPQUFPLEVBQUVZLE9BQU87d0JBQUVDLEtBQUssRUFBRUEsS0FBSzt1QkFBckNBLEtBQUs7Ozs7Ozs7Ozs7O3dGQUkxQkwsQ0FBRzs7Z0dBQ0NNLENBQU07d0JBQUNMLFNBQVMsRUFBQyxDQUF3Qjt3QkFBQ00sT0FBTyxFQUFFLFFBQVE7NEJBQUZiLE1BQU0sQ0FBTkEsWUFBWSxDQUFDRixPQUFPLENBQUNnQixRQUFROztrQ0FBRyxDQUFJOzs7Ozs7Z0dBQzdGRixDQUFNO3dCQUFDTCxTQUFTLEVBQUMsQ0FBd0I7d0JBQUNNLE9BQU8sRUFBRSxRQUFROzRCQUFGYixNQUFNLENBQU5BLFlBQVksQ0FBQ0YsT0FBTyxDQUFDaUIsSUFBSTs7a0NBQUcsQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTFHLENBQUM7R0F2QnVCbkIsSUFBSTtLQUFKQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBva2Vtb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9rZW1vblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGluaXRpYWxwb2tlbW9uIH0pIHtcclxuICAgIGNvbnN0IFtwb2tlbW9uLCBzZXRQb2tlbW9uXSA9IHVzZVN0YXRlKGluaXRpYWxwb2tlbW9uKVxyXG5cclxuICAgIGNvbnN0IGZldGNoUG9rZW1vbiA9IGFzeW5jICh1cmwpID0+IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcclxuICAgICAgICBjb25zdCBuZXh0UG9rZW1vbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIHNldFBva2Vtb24obmV4dFBva2Vtb24pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTUgZ2FwLTEwXCI+XHJcbiAgICAgICAgICAgICAgICB7cG9rZW1vbi5yZXN1bHRzLm1hcCgobW9uc3RlciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8UG9rZW1vbiBrZXk9e2luZGV4fSBwb2tlbW9uPXttb25zdGVyfSBpbmRleD17aW5kZXh9IC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC0zIHB5LTEgYmctc2xhdGUtOTAwXCIgb25DbGljaz17KCkgPT4gZmV0Y2hQb2tlbW9uKHBva2Vtb24ucHJldmlvdXMpfT5wcmV2PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTMgcHktMSBiZy1zbGF0ZS05MDBcIiBvbkNsaWNrPXsoKSA9PiBmZXRjaFBva2Vtb24ocG9rZW1vbi5uZXh0KX0+bmV4dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb25cIilcclxuICAgIGNvbnN0IGluaXRpYWxwb2tlbW9uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBpbml0aWFscG9rZW1vblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwidXNlU3RhdGUiLCJQb2tlbW9uIiwiSG9tZSIsImluaXRpYWxwb2tlbW9uIiwicG9rZW1vbiIsInNldFBva2Vtb24iLCJmZXRjaFBva2Vtb24iLCJ1cmwiLCJyZXNwb25zZSIsIm5leHRQb2tlbW9uIiwiZmV0Y2giLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVzdWx0cyIsIm1hcCIsIm1vbnN0ZXIiLCJpbmRleCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwcmV2aW91cyIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});