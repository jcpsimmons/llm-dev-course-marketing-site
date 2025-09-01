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
exports.id = "app/api/placeholder/[...params]/route";
exports.ids = ["app/api/placeholder/[...params]/route"];
exports.modules = {

/***/ "(rsc)/./app/api/placeholder/[...params]/route.ts":
/*!**************************************************!*\
  !*** ./app/api/placeholder/[...params]/route.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/api/server.js\");\n\nasync function GET(request, { params }) {\n    const [width, height] = params.params;\n    const w = parseInt(width) || 400;\n    const h = parseInt(height) || 400;\n    // Create a simple SVG placeholder\n    const svg = `\n    <svg width=\"${w}\" height=\"${h}\" viewBox=\"0 0 ${w} ${h}\" xmlns=\"http://www.w3.org/2000/svg\">\n      <defs>\n        <linearGradient id=\"grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n          <stop offset=\"0%\" style=\"stop-color:#e11d48;stop-opacity:0.1\" />\n          <stop offset=\"100%\" style=\"stop-color:#7c3aed;stop-opacity:0.2\" />\n        </linearGradient>\n      </defs>\n      <rect width=\"100%\" height=\"100%\" fill=\"url(#grad)\" />\n      <circle cx=\"${w / 2}\" cy=\"${h / 2}\" r=\"${Math.min(w, h) / 3}\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"2\" opacity=\"0.3\"/>\n      <text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" font-family=\"system-ui\" font-size=\"16\" fill=\"#64748b\">\n        ${w}×${h}\n      </text>\n    </svg>\n  `;\n    return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(svg, {\n        headers: {\n            'Content-Type': 'image/svg+xml',\n            'Cache-Control': 'public, max-age=31536000, immutable'\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3BsYWNlaG9sZGVyL1suLi5wYXJhbXNdL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXVEO0FBRWhELGVBQWVDLElBQUlDLE9BQW9CLEVBQUUsRUFBRUMsTUFBTSxFQUFvQztJQUMxRixNQUFNLENBQUNDLE9BQU9DLE9BQU8sR0FBR0YsT0FBT0EsTUFBTTtJQUNyQyxNQUFNRyxJQUFJQyxTQUFTSCxVQUFVO0lBQzdCLE1BQU1JLElBQUlELFNBQVNGLFdBQVc7SUFFOUIsa0NBQWtDO0lBQ2xDLE1BQU1JLE1BQU0sQ0FBQztnQkFDQyxFQUFFSCxFQUFFLFVBQVUsRUFBRUUsRUFBRSxlQUFlLEVBQUVGLEVBQUUsQ0FBQyxFQUFFRSxFQUFFOzs7Ozs7OztrQkFReEMsRUFBRUYsSUFBRSxFQUFFLE1BQU0sRUFBRUUsSUFBRSxFQUFFLEtBQUssRUFBRUUsS0FBS0MsR0FBRyxDQUFDTCxHQUFFRSxLQUFHLEVBQUU7O1FBRW5ELEVBQUVGLEVBQUUsQ0FBQyxFQUFFRSxFQUFFOzs7RUFHZixDQUFDO0lBRUQsT0FBTyxJQUFJUixxREFBWUEsQ0FBQ1MsS0FBSztRQUMzQkcsU0FBUztZQUNQLGdCQUFnQjtZQUNoQixpQkFBaUI7UUFDbkI7SUFDRjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvc2ltc2llcy9Eb2N1bWVudHMvZ2l0aHViL2xsbS1kZXYtY291cnNlLW1hcmtldGluZy1zaXRlL2FwcC9hcGkvcGxhY2Vob2xkZXIvWy4uLnBhcmFtc10vcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0LCB7IHBhcmFtcyB9OiB7IHBhcmFtczogeyBwYXJhbXM6IHN0cmluZ1tdIH0gfSkge1xuICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSBwYXJhbXMucGFyYW1zXG4gIGNvbnN0IHcgPSBwYXJzZUludCh3aWR0aCkgfHwgNDAwXG4gIGNvbnN0IGggPSBwYXJzZUludChoZWlnaHQpIHx8IDQwMFxuXG4gIC8vIENyZWF0ZSBhIHNpbXBsZSBTVkcgcGxhY2Vob2xkZXJcbiAgY29uc3Qgc3ZnID0gYFxuICAgIDxzdmcgd2lkdGg9XCIke3d9XCIgaGVpZ2h0PVwiJHtofVwiIHZpZXdCb3g9XCIwIDAgJHt3fSAke2h9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImdyYWRcIiB4MT1cIjAlXCIgeTE9XCIwJVwiIHgyPVwiMTAwJVwiIHkyPVwiMTAwJVwiPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAlXCIgc3R5bGU9XCJzdG9wLWNvbG9yOiNlMTFkNDg7c3RvcC1vcGFjaXR5OjAuMVwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0eWxlPVwic3RvcC1jb2xvcjojN2MzYWVkO3N0b3Atb3BhY2l0eTowLjJcIiAvPlxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgPC9kZWZzPlxuICAgICAgPHJlY3Qgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbGw9XCJ1cmwoI2dyYWQpXCIgLz5cbiAgICAgIDxjaXJjbGUgY3g9XCIke3cvMn1cIiBjeT1cIiR7aC8yfVwiIHI9XCIke01hdGgubWluKHcsaCkvM31cIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNlMTFkNDhcIiBzdHJva2Utd2lkdGg9XCIyXCIgb3BhY2l0eT1cIjAuM1wiLz5cbiAgICAgIDx0ZXh0IHg9XCI1MCVcIiB5PVwiNTAlXCIgZG9taW5hbnQtYmFzZWxpbmU9XCJtaWRkbGVcIiB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiIGZvbnQtZmFtaWx5PVwic3lzdGVtLXVpXCIgZm9udC1zaXplPVwiMTZcIiBmaWxsPVwiIzY0NzQ4YlwiPlxuICAgICAgICAke3d9w5cke2h9XG4gICAgICA8L3RleHQ+XG4gICAgPC9zdmc+XG4gIGBcblxuICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShzdmcsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2ltYWdlL3N2Zyt4bWwnLFxuICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAncHVibGljLCBtYXgtYWdlPTMxNTM2MDAwLCBpbW11dGFibGUnXG4gICAgfVxuICB9KVxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJHRVQiLCJyZXF1ZXN0IiwicGFyYW1zIiwid2lkdGgiLCJoZWlnaHQiLCJ3IiwicGFyc2VJbnQiLCJoIiwic3ZnIiwiTWF0aCIsIm1pbiIsImhlYWRlcnMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/placeholder/[...params]/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fplaceholder%2F%5B...params%5D%2Froute&page=%2Fapi%2Fplaceholder%2F%5B...params%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fplaceholder%2F%5B...params%5D%2Froute.ts&appDir=%2FUsers%2Fsimsies%2FDocuments%2Fgithub%2Fllm-dev-course-marketing-site%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsimsies%2FDocuments%2Fgithub%2Fllm-dev-course-marketing-site&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fplaceholder%2F%5B...params%5D%2Froute&page=%2Fapi%2Fplaceholder%2F%5B...params%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fplaceholder%2F%5B...params%5D%2Froute.ts&appDir=%2FUsers%2Fsimsies%2FDocuments%2Fgithub%2Fllm-dev-course-marketing-site%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsimsies%2FDocuments%2Fgithub%2Fllm-dev-course-marketing-site&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_simsies_Documents_github_llm_dev_course_marketing_site_app_api_placeholder_params_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/placeholder/[...params]/route.ts */ \"(rsc)/./app/api/placeholder/[...params]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/placeholder/[...params]/route\",\n        pathname: \"/api/placeholder/[...params]\",\n        filename: \"route\",\n        bundlePath: \"app/api/placeholder/[...params]/route\"\n    },\n    resolvedPagePath: \"/Users/simsies/Documents/github/llm-dev-course-marketing-site/app/api/placeholder/[...params]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_simsies_Documents_github_llm_dev_course_marketing_site_app_api_placeholder_params_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4yLjRfcmVhY3QtZG9tQDE5LjEuMV9yZWFjdEAxOS4xLjFfX3JlYWN0QDE5LjEuMS9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwbGFjZWhvbGRlciUyRiU1Qi4uLnBhcmFtcyU1RCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcGxhY2Vob2xkZXIlMkYlNUIuLi5wYXJhbXMlNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwbGFjZWhvbGRlciUyRiU1Qi4uLnBhcmFtcyU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNpbXNpZXMlMkZEb2N1bWVudHMlMkZnaXRodWIlMkZsbG0tZGV2LWNvdXJzZS1tYXJrZXRpbmctc2l0ZSUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZzaW1zaWVzJTJGRG9jdW1lbnRzJTJGZ2l0aHViJTJGbGxtLWRldi1jb3Vyc2UtbWFya2V0aW5nLXNpdGUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3NEO0FBQ25JO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvc2ltc2llcy9Eb2N1bWVudHMvZ2l0aHViL2xsbS1kZXYtY291cnNlLW1hcmtldGluZy1zaXRlL2FwcC9hcGkvcGxhY2Vob2xkZXIvWy4uLnBhcmFtc10vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3BsYWNlaG9sZGVyL1suLi5wYXJhbXNdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcGxhY2Vob2xkZXIvWy4uLnBhcmFtc11cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3BsYWNlaG9sZGVyL1suLi5wYXJhbXNdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3NpbXNpZXMvRG9jdW1lbnRzL2dpdGh1Yi9sbG0tZGV2LWNvdXJzZS1tYXJrZXRpbmctc2l0ZS9hcHAvYXBpL3BsYWNlaG9sZGVyL1suLi5wYXJhbXNdL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fplaceholder%2F%5B...params%5D%2Froute&page=%2Fapi%2Fplaceholder%2F%5B...params%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fplaceholder%2F%5B...params%5D%2Froute.ts&appDir=%2FUsers%2Fsimsies%2FDocuments%2Fgithub%2Fllm-dev-course-marketing-site%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsimsies%2FDocuments%2Fgithub%2Fllm-dev-course-marketing-site&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.2.4_react-dom@19.1.1_react@19.1.1__react@19.1.1"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fplaceholder%2F%5B...params%5D%2Froute&page=%2Fapi%2Fplaceholder%2F%5B...params%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fplaceholder%2F%5B...params%5D%2Froute.ts&appDir=%2FUsers%2Fsimsies%2FDocuments%2Fgithub%2Fllm-dev-course-marketing-site%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsimsies%2FDocuments%2Fgithub%2Fllm-dev-course-marketing-site&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();