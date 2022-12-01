// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,l=n.__defineSetter__,i=n.__lookupGetter__,u=n.__lookupSetter__;function c(e){return e!=e}t=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,_,p,f;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((_="value"in r)&&(i.call(e,t)||u.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),p="get"in r,f="set"in r,_&&(p||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(e,t,r.get),f&&l&&l.call(e,t,r.set),e};function _(e,t,r,n,o){var a,l,i,u,_,p,f,b;return c(e)||c(t)?(r[o]=NaN,r[o+n]=NaN,r):(l=(65535&(f=(_=(65535&(e|=0))>>>0)*(p=(65535&(t|=0))>>>0)>>>0))>>>0,a=(f=(i=e>>16|0)*p+(b=f>>>16>>>0)>>>0)>>16>>>0,b=(f=_*(u=t>>16|0)+((65535&f)>>>0)>>>0)>>16>>>0,r[o]=i*u+a+b|0,r[o+n]=(f<<16)+l|0,r)}function p(e,t){return _(e,t,[0,0],1,0)}t(p,"assign",{configurable:!1,enumerable:!1,writable:!1,value:_});export{_ as assign,p as default};
//# sourceMappingURL=mod.js.map
