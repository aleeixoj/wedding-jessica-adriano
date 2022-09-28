/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/styles/home.module.scss":
/*!*************************************!*\
  !*** ./src/styles/home.module.scss ***!
  \*************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2hvbWUubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JvZGEvLi9zcmMvc3R5bGVzL2hvbWUubW9kdWxlLnNjc3M/NDZiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/home.module.scss\n");

/***/ }),

/***/ "./src/context/auth.tsx":
/*!******************************!*\
  !*** ./src/context/auth.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ \"react-cookie\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.ts\");\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst AuthProvider = ({ children  })=>{\n    const { 0: responseData , 1: setResponseData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: authenticated , 1: setAuthenticated  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: loginError , 1: setLoginError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const { 0: registerError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [cookie, setCookie, removeCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_2__.useCookies)([\n        'access_code'\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (cookie.access_code) {\n            _services_api__WEBPACK_IMPORTED_MODULE_3__.api.defaults.headers.common.access_code = `${cookie.access_code}`;\n            loadData(cookie.access_code);\n        }\n        setLoading(false);\n    }, []);\n    async function loadData(data) {\n        const response = await _services_api__WEBPACK_IMPORTED_MODULE_3__.api.get('/family', {\n            headers: {\n                data\n            }\n        });\n        setResponseData(response.data);\n    }\n    async function signIn(data) {\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_3__.api.get('/family', {\n                headers: data\n            });\n            setLoginError(null);\n            _services_api__WEBPACK_IMPORTED_MODULE_3__.api.defaults.headers.common.access_code = response.data.access_code;\n            setCookie('access_code', response.data.access_code);\n            setResponseData(response.data);\n        } catch (error) {\n            setLoginError(error.response.data.message);\n        }\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            loading,\n            authenticated,\n            loginError,\n            registerError,\n            signIn,\n            responseData,\n            loadData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/aleixo/www/projects/wedding/src/context/auth.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined));\n};\nfunction useAuth() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    return context;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9hdXRoLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBS3NFO0FBQzdCO0FBRUo7QUFFckMsS0FBSyxDQUFDTSxXQUFXLGlCQUFHTixvREFBYSxDQUFhLElBQUk7QUFFM0MsS0FBSyxDQUFDTyxZQUFZLElBQUksQ0FBQyxDQUFDQyxRQUFRLEVBQU0sQ0FBQyxHQUFLLENBQUM7SUFDbEQsS0FBSyxNQUFFQyxZQUFZLE1BQUVDLGVBQWUsTUFBSVQsK0NBQVEsQ0FBTSxDQUFDLENBQUM7SUFDeEQsS0FBSyxNQUFFVSxhQUFhLE1BQUVDLGdCQUFnQixNQUFJWCwrQ0FBUSxDQUFDLEtBQUs7SUFDeEQsS0FBSyxNQUFFWSxVQUFVLE1BQUVDLGFBQWEsTUFBSWIsK0NBQVEsQ0FBYSxDQUFFO0lBQzNELEtBQUssTUFBRWMsYUFBYSxNQUFJZCwrQ0FBUSxDQUFDLElBQUk7SUFDckMsS0FBSyxNQUFFZSxPQUFPLE1BQUVDLFVBQVUsTUFBSWhCLCtDQUFRLENBQUMsSUFBSTtJQUMzQyxLQUFLLEVBQUVpQixNQUFNLEVBQUVDLFNBQVMsRUFBRUMsWUFBWSxJQUFJaEIsd0RBQVUsQ0FBQyxDQUFDO1FBQUEsQ0FBYTtJQUFBLENBQUM7SUFFcEVGLGdEQUFTLEtBQU8sQ0FBQztRQUNmLEVBQUUsRUFBRWdCLE1BQU0sQ0FBQ0csV0FBVyxFQUFFLENBQUM7WUFDdkJoQixrRkFBdUMsTUFBTWEsTUFBTSxDQUFDRyxXQUFXO1lBRS9ESSxRQUFRLENBQUNQLE1BQU0sQ0FBQ0csV0FBVztRQUM3QixDQUFDO1FBQ0RKLFVBQVUsQ0FBQyxLQUFLO0lBQ2xCLENBQUMsRUFBRSxDQUFDLENBQUM7bUJBRVVRLFFBQVEsQ0FBQ0MsSUFBUyxFQUFFLENBQUM7UUFDbEMsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDdEIsa0RBQU8sQ0FBQyxDQUFTLFVBQUUsQ0FBQztZQUFDa0IsT0FBTyxFQUFFLENBQUM7Z0JBQUNHLElBQUk7WUFBQyxDQUFDO1FBQUMsQ0FBQztRQUMvRGhCLGVBQWUsQ0FBQ2lCLFFBQVEsQ0FBQ0QsSUFBSTtJQUMvQixDQUFDO21CQUVjRyxNQUFNLENBQUNILElBQVMsRUFBRSxDQUFDO1FBQ2hDLEdBQUcsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDdEIsa0RBQU8sQ0FBQyxDQUFTLFVBQUUsQ0FBQztnQkFBQ2tCLE9BQU8sRUFBRUcsSUFBSTtZQUFDLENBQUM7WUFFM0RaLGFBQWEsQ0FBQyxJQUFJO1lBRWxCVCxrRkFBdUMsR0FBR3NCLFFBQVEsQ0FBQ0QsSUFBSSxDQUFDTCxXQUFXO1lBRW5FRixTQUFTLENBQUMsQ0FBYSxjQUFFUSxRQUFRLENBQUNELElBQUksQ0FBQ0wsV0FBVztZQUVsRFgsZUFBZSxDQUFDaUIsUUFBUSxDQUFDRCxJQUFJO1FBQy9CLENBQUMsQ0FBQyxLQUFLLEVBQUVJLEtBQUssRUFBTyxDQUFDO1lBQ3BCaEIsYUFBYSxDQUFDZ0IsS0FBSyxDQUFDSCxRQUFRLENBQUNELElBQUksQ0FBQ0ssT0FBTztRQUMzQyxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sNkVBQ0h6QixXQUFXLENBQUMwQixRQUFRO1FBQ25CQyxLQUFLLEVBQUUsQ0FBQztZQUNOakIsT0FBTztZQUNQTCxhQUFhO1lBQ2JFLFVBQVU7WUFDVkUsYUFBYTtZQUNiYyxNQUFNO1lBQ05wQixZQUFZO1lBQ1pnQixRQUFRO1FBQ1YsQ0FBQztrQkFFQWpCLFFBQVE7Ozs7OztBQUdmLENBQUM7QUFFTSxTQUFTMEIsT0FBTyxHQUFHLENBQUM7SUFDekIsS0FBSyxDQUFDQyxPQUFPLEdBQUdoQyxpREFBVSxDQUFDRyxXQUFXO0lBRXRDLE1BQU0sQ0FBQzZCLE9BQU87QUFDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JvZGEvLi9zcmMvY29udGV4dC9hdXRoLnRzeD80ZWFlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuXG5pbXBvcnQgeyBBeGlvc0Vycm9yIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5cbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaSc7XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxhbnkgfCBudWxsPihudWxsKTtcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IGFueSkgPT4ge1xuICBjb25zdCBbcmVzcG9uc2VEYXRhLCBzZXRSZXNwb25zZURhdGFdID0gdXNlU3RhdGU8YW55PihbXSk7XG4gIGNvbnN0IFthdXRoZW50aWNhdGVkLCBzZXRBdXRoZW50aWNhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvZ2luRXJyb3IsIHNldExvZ2luRXJyb3JdID0gdXNlU3RhdGU8bnVsbCB8IGFueT4oJycpO1xuICBjb25zdCBbcmVnaXN0ZXJFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtjb29raWUsIHNldENvb2tpZSwgcmVtb3ZlQ29va2llXSA9IHVzZUNvb2tpZXMoWydhY2Nlc3NfY29kZSddKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb29raWUuYWNjZXNzX2NvZGUpIHtcbiAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbi5hY2Nlc3NfY29kZSA9IGAke2Nvb2tpZS5hY2Nlc3NfY29kZX1gO1xuXG4gICAgICBsb2FkRGF0YShjb29raWUuYWNjZXNzX2NvZGUpO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWREYXRhKGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldCgnL2ZhbWlseScsIHsgaGVhZGVyczogeyBkYXRhIH0gfSk7XG4gICAgc2V0UmVzcG9uc2VEYXRhKHJlc3BvbnNlLmRhdGEpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc2lnbkluKGRhdGE6IGFueSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoJy9mYW1pbHknLCB7IGhlYWRlcnM6IGRhdGEgfSk7XG5cbiAgICAgIHNldExvZ2luRXJyb3IobnVsbCk7XG5cbiAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbi5hY2Nlc3NfY29kZSA9IHJlc3BvbnNlLmRhdGEuYWNjZXNzX2NvZGU7XG5cbiAgICAgIHNldENvb2tpZSgnYWNjZXNzX2NvZGUnLCByZXNwb25zZS5kYXRhLmFjY2Vzc19jb2RlKTtcblxuICAgICAgc2V0UmVzcG9uc2VEYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIHNldExvZ2luRXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgbG9hZGluZyxcbiAgICAgICAgYXV0aGVudGljYXRlZCxcbiAgICAgICAgbG9naW5FcnJvcixcbiAgICAgICAgcmVnaXN0ZXJFcnJvcixcbiAgICAgICAgc2lnbkluLFxuICAgICAgICByZXNwb25zZURhdGEsXG4gICAgICAgIGxvYWREYXRhLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBdXRoKCkge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsInVzZUNvb2tpZXMiLCJhcGkiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwicmVzcG9uc2VEYXRhIiwic2V0UmVzcG9uc2VEYXRhIiwiYXV0aGVudGljYXRlZCIsInNldEF1dGhlbnRpY2F0ZWQiLCJsb2dpbkVycm9yIiwic2V0TG9naW5FcnJvciIsInJlZ2lzdGVyRXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvb2tpZSIsInNldENvb2tpZSIsInJlbW92ZUNvb2tpZSIsImFjY2Vzc19jb2RlIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwibG9hZERhdGEiLCJkYXRhIiwicmVzcG9uc2UiLCJnZXQiLCJzaWduSW4iLCJlcnJvciIsIm1lc3NhZ2UiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/auth.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./src/styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cookie */ \"react-cookie\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ \"react-modal\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/auth */ \"./src/context/auth.tsx\");\n/* harmony import */ var _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/home.module.scss */ \"./src/styles/home.module.scss\");\n/* harmony import */ var _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    react_modal__WEBPACK_IMPORTED_MODULE_4___default().setAppElement('#__next');\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_cookie__WEBPACK_IMPORTED_MODULE_3__.CookiesProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_auth__WEBPACK_IMPORTED_MODULE_5__.AuthProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {\n                theme: _styles_theme__WEBPACK_IMPORTED_MODULE_6__.theme,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/aleixo/www/projects/wedding/src/pages/_app.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/aleixo/www/projects/wedding/src/pages/_app.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/aleixo/www/projects/wedding/src/pages/_app.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/aleixo/www/projects/wedding/src/pages/_app.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aleixo/www/projects/wedding/src/pages/_app.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNrQjtBQUVIO0FBQ2Y7QUFFZTtBQUNBO0FBQ1A7U0FFOUJNLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFXLENBQUMsRUFBRSxDQUFDO0lBQ2xETixnRUFBbUIsQ0FBQyxDQUFTO0lBQzdCLE1BQU0sNkVBQ0hELHlEQUFlOzhGQUNiRSx1REFBWTtrR0FDVkgsNERBQWM7Z0JBQUNLLEtBQUssRUFBRUEsZ0RBQUs7c0dBRXpCSyxDQUFHO29CQUFDQyxTQUFTLEVBQUVQLDJFQUFlOzBHQUM1QkcsU0FBUzsyQkFBS0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEMsQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2RhLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5zY3NzJztcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgQ29va2llc1Byb3ZpZGVyIH0gZnJvbSAncmVhY3QtY29va2llJztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5cbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvYXV0aCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL2hvbWUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIE1vZGFsLnNldEFwcEVsZW1lbnQoJyNfX25leHQnKTtcbiAgcmV0dXJuIChcbiAgICA8Q29va2llc1Byb3ZpZGVyPlxuICAgICAgPEF1dGhQcm92aWRlcj5cbiAgICAgICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgey8qIDxIZWFkZXIgLz4gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgICA8L0F1dGhQcm92aWRlcj5cbiAgICA8L0Nvb2tpZXNQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJDb29raWVzUHJvdmlkZXIiLCJNb2RhbCIsIkF1dGhQcm92aWRlciIsInN0eWxlIiwidGhlbWUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNldEFwcEVsZW1lbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: 'http://localhost:3333'\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUV6QixLQUFLLENBQUNDLEdBQUcsR0FBR0QsbURBQVksQ0FBQyxDQUFDO0lBQ3hCRyxPQUFPLEVBQUUsQ0FBdUI7QUFDbEMsQ0FBQztBQUVjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9kYS8uL3NyYy9zZXJ2aWNlcy9hcGkudHM/OTU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDozMzMzJyxcbn0pO1xuXG5leHBvcnQgeyBhcGkgfTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    colors: {\n        gray: {\n            '900': '#181B23',\n            '800': '#1F2029',\n            '700': '#353646',\n            '600': '#4B4D63',\n            '500': '#616480',\n            '400': '#797D9A',\n            '300': '#9699B0',\n            '200': '#B3B5C6',\n            '100': '#D1D2DC',\n            '50': '#EEEEF2'\n        }\n    },\n    fonts: {\n        heading: 'Poppins',\n        body: 'Poppins'\n    },\n    bg: {\n        flag: '../../public/flag.svg'\n    },\n    styles: {\n        global: {\n            body: {\n                bg: 'gray.50',\n                color: 'gray.600',\n                height: '100vh',\n                overflowX: 'hidden'\n            }\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUV2QyxLQUFLLENBQUNDLEtBQUssR0FBR0QsNkRBQVcsQ0FBQyxDQUFDO0lBQ2hDRSxNQUFNLEVBQUUsQ0FBQztRQUNQQyxJQUFJLEVBQUUsQ0FBQztZQUNMLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUksS0FBRSxDQUFTO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBQ0RDLEtBQUssRUFBRSxDQUFDO1FBQ05DLE9BQU8sRUFBRSxDQUFTO1FBQ2xCQyxJQUFJLEVBQUUsQ0FBUztJQUNqQixDQUFDO0lBQ0RDLEVBQUUsRUFBRSxDQUFDO1FBQ0hDLElBQUksRUFBRSxDQUF1QjtJQUMvQixDQUFDO0lBQ0RDLE1BQU0sRUFBRSxDQUFDO1FBQ1BDLE1BQU0sRUFBRSxDQUFDO1lBQ1BKLElBQUksRUFBRSxDQUFDO2dCQUNMQyxFQUFFLEVBQUUsQ0FBUztnQkFDYkksS0FBSyxFQUFFLENBQVU7Z0JBQ2pCQyxNQUFNLEVBQUUsQ0FBTztnQkFDZkMsU0FBUyxFQUFFLENBQVE7WUFDckIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JvZGEvLi9zcmMvc3R5bGVzL3RoZW1lLnRzPzUxNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuICBjb2xvcnM6IHtcbiAgICBncmF5OiB7XG4gICAgICAnOTAwJzogJyMxODFCMjMnLFxuICAgICAgJzgwMCc6ICcjMUYyMDI5JyxcbiAgICAgICc3MDAnOiAnIzM1MzY0NicsXG4gICAgICAnNjAwJzogJyM0QjRENjMnLFxuICAgICAgJzUwMCc6ICcjNjE2NDgwJyxcbiAgICAgICc0MDAnOiAnIzc5N0Q5QScsXG4gICAgICAnMzAwJzogJyM5Njk5QjAnLFxuICAgICAgJzIwMCc6ICcjQjNCNUM2JyxcbiAgICAgICcxMDAnOiAnI0QxRDJEQycsXG4gICAgICAnNTAnOiAnI0VFRUVGMicsXG4gICAgfSxcbiAgfSxcbiAgZm9udHM6IHtcbiAgICBoZWFkaW5nOiAnUG9wcGlucycsXG4gICAgYm9keTogJ1BvcHBpbnMnLFxuICB9LFxuICBiZzoge1xuICAgIGZsYWc6ICcuLi8uLi9wdWJsaWMvZmxhZy5zdmcnLFxuICB9LFxuICBzdHlsZXM6IHtcbiAgICBnbG9iYWw6IHtcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgYmc6ICdncmF5LjUwJyxcbiAgICAgICAgY29sb3I6ICdncmF5LjYwMCcsXG4gICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwidGhlbWUiLCJjb2xvcnMiLCJncmF5IiwiZm9udHMiLCJoZWFkaW5nIiwiYm9keSIsImJnIiwiZmxhZyIsInN0eWxlcyIsImdsb2JhbCIsImNvbG9yIiwiaGVpZ2h0Iiwib3ZlcmZsb3dYIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ "./src/styles/globals.scss":
/*!*********************************!*\
  !*** ./src/styles/globals.scss ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-cookie");

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-modal");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();