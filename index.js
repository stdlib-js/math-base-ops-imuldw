// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=function(e){return e!=e},n=65535;return function(){var t,o,f,i,u,r,d,l,s,a,c;return 3===arguments.length?(t=arguments[0],l=arguments[1],s=arguments[2]):(t=[0,0],l=arguments[0],s=arguments[1]),e(l)||e(s)?NaN:(f=((a=(r=((l|=0)&n)>>>0)*(d=((s|=0)&n)>>>0)>>>0)&n)>>>0,o=(a=(i=l>>16|0)*d+(c=a>>>16>>>0)>>>0)>>16>>>0,c=(a=r*(u=s>>16|0)+((a&n)>>>0)>>>0)>>16>>>0,t[0]=i*u+o+c|0,t[1]=(a<<16)+f|0,t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).imuldw=n();
//# sourceMappingURL=index.js.map
