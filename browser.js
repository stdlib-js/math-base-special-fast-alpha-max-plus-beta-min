// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,a=n.__lookupGetter__,c=n.__lookupSetter__;function f(e){return e<0?-e:e}e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var f,l,p,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(a.call(e,t)||c.call(e,t)?(f=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),p="get"in r,_="set"in r,l&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(e,t,r.get),_&&i&&i.call(e,t,r.set),e};var l=.96043387010342,p=.397824734759316;function _(e,t){return(e=f(e))>(t=f(t))?l*e+p*t:l*t+p*e}function d(e,t){return e>t?e+(t>>>1):(e>>>1)+t}function b(e){var t,r;return((r=0|e)^(t=r>>31|0))-t|0}function y(e,t){return(e=b(e))>(t=b(t))?e+(t>>>1):(e>>>1)+t}function s(e,t){return e>t?e+(t>>>2):(e>>>2)+t}function m(e,t){return(e=b(e))>(t=b(t))?e+(t>>>2):(e>>>2)+t}return e(_,"factory",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,n){if(n){if(1===e&&.5===t)return r?d:y;if(1===e&&.25===t)return r?s:m}return r?function(e,t){return function(r,n){return r>n?e*r+t*n:t*r+e*n}}(e,t):function(e,t){return function(r,n){return(r=f(r))>(n=f(n))?e*r+t*n:t*r+e*n}}(e,t)}}),_},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).ampbm=t();
//# sourceMappingURL=browser.js.map
