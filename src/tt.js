!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,(()=>(()=>{"use strict";var e={967:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e){this.handlers=new Map,this.init(e)}init(e){null==e||e.defineExtension("serverless",{onEvent:this.onEvent.bind(this),transformResponse:this.transformResponse.bind(this)})}onEvent(e,t){var n,o,i;if(void 0!==t.detail.xhr&&this.shouldIntercept(null===(i=null===(o=null===(n=null==t?void 0:t.detail)||void 0===n?void 0:n.elt)||void 0===o?void 0:o["htmx-internal-data"])||void 0===i?void 0:i.path))if("htmx:beforeSend"===e){const e=t.detail.xhr;e.send=()=>{e.dispatchEvent(new Event("loadstart")),e.dispatchEvent(new Event("load")),e.dispatchEvent(new Event("loadend")),e.readyState,XMLHttpRequest.DONE}}else"htmx:beforeSwap"===e&&(t.detail.shouldSwap=!0)}transformResponse(e,t,n){var o,i;return this.shouldIntercept(null===(o=null==n?void 0:n["htmx-internal-data"])||void 0===o?void 0:o.path)?this.handlers.get(null===(i=null==n?void 0:n["htmx-internal-data"])||void 0===i?void 0:i.path):e}shouldIntercept(e){return e=null!=e?e:"",this.handlers.has(e)}}},607:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=new(o(n(967)).default)(window.htmx);window.htmxServerless=i,t.default=function(){return!1}}},t={},n=function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}(607);return n.default})()));