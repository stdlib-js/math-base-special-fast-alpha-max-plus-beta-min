"use strict";var n=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var p=n(function(Y,c){
var s=require('@stdlib/math-base-special-fast-abs/dist'),o=.96043387010342,f=.397824734759316;function k(t,r){return t=s(t),r=s(r),t>r?o*t+f*r:o*r+f*t}c.exports=k
});var v=n(function(Z,q){
function z(t,r){return t>r?t+(r>>>1):(t>>>1)+r}q.exports=z
});var A=n(function(_,h){
var a=require('@stdlib/math-base-special-labs/dist');function C(t,r){return t=a(t),r=a(r),t>r?t+(r>>>1):(t>>>1)+r}h.exports=C
});var w=n(function($,b){
function D(t,r){return t>r?t+(r>>>2):(t>>>2)+r}b.exports=D
});var B=n(function(g,m){
var d=require('@stdlib/math-base-special-labs/dist');function F(t,r){return t=d(t),r=d(r),t>r?t+(r>>>2):(t>>>2)+r}m.exports=F
});var H=n(function(l,E){
function G(t,r){return u;function u(e,i){return e>i?t*e+r*i:r*e+t*i}}E.exports=G
});var P=n(function(y,O){
var L=require('@stdlib/math-base-special-fast-abs/dist');function I(t,r){return u;function u(e,i){return e=L(e),i=L(i),e>i?t*e+r*i:r*e+t*i}}O.exports=I
});var T=n(function(x,R){
var J=v(),K=A(),M=w(),N=B(),Q=H(),S=P();function U(t,r,u,e){if(e){if(t===1&&r===.5)return u?J:K;if(t===1&&r===.25)return u?M:N}return u?Q(t,r):S(t,r)}R.exports=U
});var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=p(),W=T();V(j,"factory",W);module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
