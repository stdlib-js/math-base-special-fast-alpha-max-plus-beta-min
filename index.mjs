// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fast-abs@v0.3.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-labs@v0.2.2-esm/index.mjs";var e=.96043387010342,i=.397824734759316;function s(n,r){return(n=t(n))>(r=t(r))?e*n+i*r:e*r+i*n}function u(n,t){return n>t?n+(t>>>1):(n>>>1)+t}function o(n,t){return(n=r(n))>(t=r(t))?n+(t>>>1):(n>>>1)+t}function f(n,t){return n>t?n+(t>>>2):(n>>>2)+t}function c(n,t){return(n=r(n))>(t=r(t))?n+(t>>>2):(n>>>2)+t}function a(n,r,e,i){if(i){if(1===n&&.5===r)return e?u:o;if(1===n&&.25===r)return e?f:c}return e?function(n,t){return function(r,e){return r>e?n*r+t*e:t*r+n*e}}(n,r):function(n,r){return function(e,i){return(e=t(e))>(i=t(i))?n*e+r*i:r*e+n*i}}(n,r)}n(s,"factory",a);export{s as default,a as factory};
//# sourceMappingURL=index.mjs.map
