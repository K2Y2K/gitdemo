'use strict';var $jscomp={scope:{},findInternal:function(a,f,d){a instanceof String&&(a=String(a));for(var g=a.length,e=0;e<g;e++){var k=a[e];if(f.call(d,k,e,a))return{i:e,v:k}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,f,d){if(d.get||d.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[f]=d.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,f,d,g){if(f){d=$jscomp.global;a=a.split(".");for(g=0;g<a.length-1;g++){var e=a[g];e in d||(d[e]={});d=d[e]}a=a[a.length-1];g=d[a];f=f(g);f!=g&&null!=f&&$jscomp.defineProperty(d,a,{configurable:!0,writable:!0,value:f})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,d){return $jscomp.findInternal(this,a,d).v}},"es6-impl","es3");
(function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror"),require("./foldcode")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","./foldcode"],a):a(CodeMirror)})(function(a){function f(b){this.options=b;this.from=this.to=0}function d(b,c){b=b.findMarks(m(c,0),m(c+1,0));for(var a=0;a<b.length;++a)if(b[a].__isFold&&b[a].find().from.line==c)return b[a]}function g(b){if("string"==typeof b){var c=document.createElement("div");c.className=b+" CodeMirror-guttermarker-subtle";
return c}return b.cloneNode(!0)}function e(b,c,a){var l=b.state.foldGutter.options,e=c,f=b.foldOption(l,"minFoldSize"),k=b.foldOption(l,"rangeFinder");b.eachLine(c,a,function(c){var a=null;if(d(b,e))a=g(l.indicatorFolded);else{var h=m(e,0);(h=k&&k(b,h))&&h.to.line-h.from.line>=f&&(a=g(l.indicatorOpen))}b.setGutterMarker(c,l.gutter,a);++e})}function k(b){var c=b.getViewport(),a=b.state.foldGutter;a&&(b.operation(function(){e(b,c.from,c.to)}),a.from=c.from,a.to=c.to)}function q(b,c,a){var h=b.state.foldGutter;
h&&(h=h.options,a==h.gutter&&((a=d(b,c))?a.clear():b.foldCode(m(c,0),h.rangeFinder)))}function n(b){var c=b.state.foldGutter;if(c){var a=c.options;c.from=c.to=0;clearTimeout(c.changeUpdate);c.changeUpdate=setTimeout(function(){k(b)},a.foldOnChangeTimeSpan||600)}}function r(b){var a=b.state.foldGutter;if(a){var d=a.options;clearTimeout(a.changeUpdate);a.changeUpdate=setTimeout(function(){var c=b.getViewport();a.from==a.to||20<c.from-a.to||20<a.from-c.to?k(b):b.operation(function(){c.from<a.from&&(e(b,
c.from,a.from),a.from=c.from);c.to>a.to&&(e(b,a.to,c.to),a.to=c.to)})},d.updateViewportTimeSpan||400)}}function p(a,c){var b=a.state.foldGutter;b&&(c=c.line,c>=b.from&&c<b.to&&e(a,c,c+1))}a.defineOption("foldGutter",!1,function(b,c,d){d&&d!=a.Init&&(b.clearGutter(b.state.foldGutter.options.gutter),b.state.foldGutter=null,b.off("gutterClick",q),b.off("change",n),b.off("viewportChange",r),b.off("fold",p),b.off("unfold",p),b.off("swapDoc",n));c&&(d=b.state,!0===c&&(c={}),null==c.gutter&&(c.gutter="CodeMirror-foldgutter"),
null==c.indicatorOpen&&(c.indicatorOpen="CodeMirror-foldgutter-open"),null==c.indicatorFolded&&(c.indicatorFolded="CodeMirror-foldgutter-folded"),d.foldGutter=new f(c),k(b),b.on("gutterClick",q),b.on("change",n),b.on("viewportChange",r),b.on("fold",p),b.on("unfold",p),b.on("swapDoc",n))});var m=a.Pos});
