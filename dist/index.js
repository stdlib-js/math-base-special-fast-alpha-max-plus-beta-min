"use strict";var i=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var p=i(function(Y,c){
var s=require('@stdlib/math-base-special-fast-abs/dist'),o=.96043387010342,f=.397824734759316;function k(t,r){return t=s(t),r=s(r),t>r?o*t+f*r:o*r+f*t}c.exports=k
});var v=i(function(Z,q){
function z(t,r){return t>r?t+(r>>>1):(t>>>1)+r}q.exports=z
});var A=i(function(_,h){
var a=require('@stdlib/math-base-special-labs/dist');function C(t,r){return t=a(t),r=a(r),t>r?t+(r>>>1):(t>>>1)+r}h.exports=C
});var w=i(function($,b){
function D(t,r){return t>r?t+(r>>>2):(t>>>2)+r}b.exports=D
});var B=i(function(g,m){
var d=require('@stdlib/math-base-special-labs/dist');function F(t,r){return t=d(t),r=d(r),t>r?t+(r>>>2):(t>>>2)+r}m.exports=F
});var H=i(function(l,E){
function G(t,r){return n;function n(e,u){return e>u?t*e+r*u:r*e+t*u}}E.exports=G
});var P=i(function(y,O){
var L=require('@stdlib/math-base-special-fast-abs/dist');function I(t,r){return n;function n(e,u){return e=L(e),u=L(u),e>u?t*e+r*u:r*e+t*u}}O.exports=I
});var T=i(function(x,R){
var J=v(),K=A(),M=w(),N=B(),Q=H(),S=P();function U(t,r,n,e){if(e){if(t===1&&r===.5)return n?J:K;if(t===1&&r===.25)return n?M:N}return n?Q(t,r):S(t,r)}R.exports=U
});var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=p(),W=T();V(j,"factory",W);module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
