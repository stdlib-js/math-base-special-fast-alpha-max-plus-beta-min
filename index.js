// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,a=n.__lookupGetter__,c=n.__lookupSetter__,f=r,l=function(e,t,r){var f,l,p,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(a.call(e,t)||c.call(e,t)?(f=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),p="get"in r,_="set"in r,l&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(e,t,r.get),_&&i&&i.call(e,t,r.set),e},p=t()?f:l,_=function(e){return e<0?-e:e},d=.96043387010342,b=.397824734759316;function y(e,t){return(e=_(e))>(t=_(t))?d*e+b*t:d*t+b*e}function s(e,t){return e>t?e+(t>>>1):(e>>>1)+t}var m=function(e){var t,r;return((r=0|e)^(t=r>>31|0))-t|0};function v(e,t){return(e=m(e))>(t=m(t))?e+(t>>>1):(e>>>1)+t}function j(e,t){return e>t?e+(t>>>2):(e>>>2)+t}function g(e,t){return(e=m(e))>(t=m(t))?e+(t>>>2):(e>>>2)+t}return p(y,"factory",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,n){if(n){if(1===e&&.5===t)return r?s:v;if(1===e&&.25===t)return r?j:g}return r?function(e,t){return function(r,n){return r>n?e*r+t*n:t*r+e*n}}(e,t):function(e,t){return function(r,n){return(r=_(r))>(n=_(n))?e*r+t*n:t*r+e*n}}(e,t)}}),y},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).ampbm=t();
//# sourceMappingURL=index.js.map
