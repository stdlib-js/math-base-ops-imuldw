// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,l=n.__lookupGetter__,u=n.__lookupSetter__;function c(e){return e!=e}e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(l.call(e,t)||u.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),_="get"in r,p="set"in r,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,t,r.get),p&&a&&a.call(e,t,r.set),e};var f=65535;function _(e,t,r,n,o){var i,a,l,u,_,p,d,s;return c(e)||c(t)?(r[o]=NaN,r[o+n]=NaN,r):(a=((d=(_=((e|=0)&f)>>>0)*(p=((t|=0)&f)>>>0)>>>0)&f)>>>0,i=(d=(l=e>>16|0)*p+(s=d>>>16>>>0)>>>0)>>16>>>0,s=(d=_*(u=t>>16|0)+((d&f)>>>0)>>>0)>>16>>>0,r[o]=l*u+i+s|0,r[o+n]=(d<<16)+a|0,r)}function p(e,t){return _(e,t,[0,0],1,0)}return e(p,"assign",{configurable:!1,enumerable:!1,writable:!1,value:_}),p},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).imuldw=t();
//# sourceMappingURL=browser.js.map
