function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{WAHi:function(t,e,n){"use strict";n.r(e),n.d(e,"ListModule",(function(){return mt}));var r=n("ofXK"),a=n("3Pt+"),i=n("tyNb"),o=n("fXoL");function u(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function s(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function c(t){s(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function d(t,e){s(2,arguments);var n=c(t),r=u(e);return n.setDate(n.getDate()+r),n}function l(t,e){s(2,arguments);var n=u(e);return d(t,-n)}function f(t){s(1,arguments);var e=c(t),n=e.getFullYear(),r=e.getMonth(),a=new Date(0);return a.setFullYear(n,r+1,0),a.setHours(0,0,0,0),a.getDate()}function h(t,e){s(2,arguments);var n=c(t),r=u(e),a=n.getMonth()+r,i=new Date(0);i.setFullYear(n.getFullYear(),a,1),i.setHours(0,0,0,0);var o=f(i);return n.setMonth(a,Math.min(o,n.getDate())),n}function m(t,e){s(2,arguments);var n=u(e);return h(t,-n)}var g,b,w=["Angular Bolivia","Angular Colombia","Ng Bogot\xe1","Ng Medellin","Ng Popay\xe1n","GDG Cochabamba","GDG La Paz","Angular Peru","Angular Mexico","Angular Chile","Angular Costa Rica","Angular Honduras","Angular Quito","She Codes Angular","Angular Ecuador","Angular Dominicana","Angular Rome"],v=((b=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"getListA",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;return this.generateCommunities(t)}},{key:"getListB",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;return this.generateCommunities(t)}},{key:"generateName",value:function(){var t=this.getRandomInt(0,w.length-1);return w[t]}},{key:"generateDate",value:function(){var t=this.getRandomInt(0,1e3);return function(t,e){if(s(2,arguments),!e||"object"!=typeof e)return new Date(NaN);var n="years"in e?u(e.years):0,r="months"in e?u(e.months):0,a="weeks"in e?u(e.weeks):0,i="days"in e?u(e.days):0,o="hours"in e?u(e.hours):0,d="minutes"in e?u(e.minutes):0,f="seconds"in e?u(e.seconds):0,h=m(c(t),r+12*n),g=l(h,i+7*a),b=d+60*o,w=f+60*b,v=1e3*w,y=new Date(g.getTime()-v);return y}(new Date,{days:t})}},{key:"getRandomInt",value:function(t,e){return Math.floor(Math.random()*(e-t))+t}},{key:"generateCommunity",value:function(t){return{name:t||this.generateName(),members:this.getRandomInt(1,10),created_at:this.generateDate()}}},{key:"generateCommunities",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,e=[],n=0;n<t;n++)e.push(this.generateCommunity());return e}}]),t}()).\u0275fac=function(t){return new(t||b)},b.\u0275prov=o.Fb({token:b,factory:b.\u0275fac,providedIn:"root"}),b),y=((g=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t){var e=p(t);return console.log("calc",t,e),e}}]),t}()).\u0275fac=function(t){return new(t||g)},g.\u0275pipe=o.Ib({name:"calculateMembers",type:g,pure:!0}),g),p=function(t){return console.log("\ud83d\udda5\ud83d\udd25",t),t<5?"low":t>=5&&t<=7?"medium":t>7?"high":void 0};function M(t){s(1,arguments);var e=c(t);return!isNaN(e)}var C={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function T(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var k={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function D(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function P(t){return function(e,n){var r=String(e),a=n||{},i=a.width,o=r.match(i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth]);if(!o)return null;var u,s=o[0],c=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(c)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(s))return n}(c):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(s))return n}(c),u=t.valueCallback?t.valueCallback(u):u,{value:u=a.valueCallback?a.valueCallback(u):u,rest:r.slice(s.length)}}}var x,U={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof C[t]?C[t]:1===e?C[t].one:C[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:{date:T({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:T({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:T({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},formatRelative:function(t,e,n,r){return k[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:D({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:D({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:D({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:D({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:D({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(x={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(x.matchPattern);if(!a)return null;var i=a[0],o=n.match(x.parsePattern);if(!o)return null;var u=x.valueCallback?x.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:P({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:P({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:P({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:P({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:P({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function S(t,e){s(2,arguments);var n=c(t).getTime(),r=u(e);return new Date(n+r)}function L(t,e){s(2,arguments);var n=u(e);return S(t,-n)}function W(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}function Y(t){s(1,arguments);var e=1,n=c(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function N(t){s(1,arguments);var e=c(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=Y(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=Y(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function O(t){s(1,arguments);var e=N(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=Y(n);return r}function E(t,e){s(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=null==a?0:u(a),o=null==n.weekStartsOn?i:u(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=c(t),l=d.getUTCDay(),f=(l<o?7:0)+l-o;return d.setUTCDate(d.getUTCDate()-f),d.setUTCHours(0,0,0,0),d}function A(t,e){s(1,arguments);var n=c(t,e),r=n.getUTCFullYear(),a=e||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,d=null==o?1:u(o),l=null==a.firstWeekContainsDate?d:u(a.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=new Date(0);f.setUTCFullYear(r+1,0,l),f.setUTCHours(0,0,0,0);var h=E(f,e),m=new Date(0);m.setUTCFullYear(r,0,l),m.setUTCHours(0,0,0,0);var g=E(m,e);return n.getTime()>=h.getTime()?r+1:n.getTime()>=g.getTime()?r:r-1}function z(t,e){s(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:u(a),o=null==n.firstWeekContainsDate?i:u(n.firstWeekContainsDate),c=A(t,e),d=new Date(0);d.setUTCFullYear(c,0,o),d.setUTCHours(0,0,0,0);var l=E(d,e);return l}function q(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+W(i,2)}function F(t,e){return t%60==0?(t>0?"-":"+")+W(Math.abs(t)/60,2):B(t,e)}function B(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+W(Math.floor(a/60),2)+n+W(a%60,2)}var H={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear();return n.ordinalNumber(r>0?r:1-r,{unit:"year"})}return function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return W("yy"===e?r%100:r,e.length)}(t,e)},Y:function(t,e,n,r){var a=A(t,r),i=a>0?a:1-a;return"YY"===e?W(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):W(i,e.length)},R:function(t,e){return W(N(t),e.length)},u:function(t,e){return W(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return W(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return W(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):W(n+1,2)}(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return W(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){s(1,arguments);var n=c(t),r=E(n,e).getTime()-z(n,e).getTime();return Math.round(r/6048e5)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):W(a,e.length)},I:function(t,e,n){var r=function(t){s(1,arguments);var e=c(t),n=Y(e).getTime()-O(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):W(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):function(t,e){return W(t.getUTCDate(),e.length)}(t,e)},D:function(t,e,n){var r=function(t){s(1,arguments);var e=c(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/864e5)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):W(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return W(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return W(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return W(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return function(t,e){return W(t.getUTCHours()%12||12,e.length)}(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):function(t,e){return W(t.getUTCHours(),e.length)}(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):W(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):W(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):function(t,e){return W(t.getUTCMinutes(),e.length)}(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):function(t,e){return W(t.getUTCSeconds(),e.length)}(t,e)},S:function(t,e){return function(t,e){var n=e.length,r=t.getUTCMilliseconds();return W(Math.floor(r*Math.pow(10,n-3)),e.length)}(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return F(a);case"XXXX":case"XX":return B(a);case"XXXXX":case"XXX":default:return B(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return F(a);case"xxxx":case"xx":return B(a);case"xxxxx":case"xxx":default:return B(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+q(a,":");case"OOOO":default:return"GMT"+B(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+q(a,":");case"zzzz":default:return"GMT"+B(a,":")}},t:function(t,e,n,r){return W(Math.floor((r._originalDate||t).getTime()/1e3),e.length)},T:function(t,e,n,r){return W((r._originalDate||t).getTime(),e.length)}};function j(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function X(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var G={p:X,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return j(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",j(a,e)).replace("{{time}}",X(i,e))}};function _(t){return t.getTime()%6e4}function Q(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());return e.setSeconds(0,0),6e4*n+(n>0?(6e4+_(e))%6e4:_(e))}var R=["D","DD"],I=["YY","YYYY"];function J(t){return-1!==R.indexOf(t)}function Z(t){return-1!==I.indexOf(t)}function V(t){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===t)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===t)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===t)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var $=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,K=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,tt=/^'([^]*?)'?$/,et=/''/g,nt=/[a-zA-Z]/;function rt(t){return t.match(tt)[1].replace(et,"'")}var at,it=((at=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy/MM/dd";return function(t,e,n){s(2,arguments);var r=String(e),a=n||{},i=a.locale||U,o=i.options&&i.options.firstWeekContainsDate,d=null==o?1:u(o),l=null==a.firstWeekContainsDate?d:u(a.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=i.options&&i.options.weekStartsOn,h=null==f?0:u(f),m=null==a.weekStartsOn?h:u(a.weekStartsOn);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var g=c(t);if(!M(g))throw new RangeError("Invalid time value");var b=Q(g),w=L(g,b),v={firstWeekContainsDate:l,weekStartsOn:m,locale:i,_originalDate:g},y=r.match(K).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,G[e])(t,i.formatLong,v):t})).join("").match($).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return rt(t);var n=H[e];if(n)return!a.useAdditionalWeekYearTokens&&Z(t)&&V(t),!a.useAdditionalDayOfYearTokens&&J(t)&&V(t),n(w,t,i.localize,v);if(e.match(nt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("");return y}(t,e)}}]),t}()).\u0275fac=function(t){return new(t||at)},at.\u0275pipe=o.Ib({name:"dateFormat",type:at,pure:!0}),at);function ot(t,e){if(1&t){var n=o.Nb();o.Mb(0,"tr"),o.Mb(1,"td"),o.fc(2),o.Lb(),o.Mb(3,"td"),o.Mb(4,"b"),o.fc(5),o.Mb(6,"sup"),o.fc(7),o.Xb(8,"calculateMembers"),o.Lb(),o.Lb(),o.Lb(),o.Mb(9,"td"),o.fc(10),o.Xb(11,"dateFormat"),o.Lb(),o.Mb(12,"td"),o.Mb(13,"button",2),o.Ub("click",(function(){o.bc(n);var t=e.$implicit;return o.Wb().onRemove(t)})),o.fc(14,"Remove"),o.Lb(),o.Lb(),o.Lb()}if(2&t){var r=e.$implicit;o.zb(2),o.gc(r.name),o.zb(3),o.hc("",r.members," "),o.zb(2),o.gc(o.Yb(8,4,r.members)),o.zb(3),o.gc(o.Yb(11,6,r.created_at))}}var ut,st,ct,dt,lt=((ut=function(){function t(){_classCallCheck(this,t),this.data=[],this.add=new o.n,this.remove=new o.n,this.nameInput=new a.b}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"handleEnter",value:function(){this.add.emit(this.nameInput.value),this.nameInput.setValue("")}},{key:"onRemove",value:function(t){this.remove.emit(t)}}]),t}()).\u0275fac=function(t){return new(t||ut)},ut.\u0275cmp=o.Db({type:ut,selectors:[["app-communities-list"]],inputs:{title:"title",data:"data"},outputs:{add:"add",remove:"remove"},decls:16,vars:3,consts:[["type","search","placeholder","Type name",3,"formControl","keydown.enter"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(t,e){1&t&&(o.Mb(0,"h3"),o.fc(1),o.Lb(),o.Mb(2,"input",0),o.Ub("keydown.enter",(function(){return e.handleEnter()})),o.Lb(),o.Mb(3,"table"),o.Mb(4,"thead"),o.Mb(5,"tr"),o.Mb(6,"th"),o.fc(7,"Name"),o.Lb(),o.Mb(8,"th"),o.fc(9,"Members"),o.Lb(),o.Mb(10,"th"),o.fc(11,"Created At"),o.Lb(),o.Mb(12,"th"),o.fc(13,"Actions"),o.Lb(),o.Lb(),o.Lb(),o.Mb(14,"tbody"),o.ec(15,ot,15,8,"tr",1),o.Lb(),o.Lb()),2&t&&(o.zb(1),o.gc(e.title),o.zb(1),o.Zb("formControl",e.nameInput),o.zb(13),o.Zb("ngForOf",e.data))},directives:[a.a,a.f,a.c,r.h],pipes:[y,it],styles:[""],changeDetection:0}),ut),ft=[{path:"",component:(st=function(){function t(e){_classCallCheck(this,t),this.dataService=e,this.listA=[],this.listB=[]}return _createClass(t,[{key:"ngOnInit",value:function(){this.listA=this.dataService.getListA(),this.listB=this.dataService.getListB()}},{key:"add",value:function(t,e){var n=this.dataService.generateCommunity(e);t.unshift(n)}},{key:"remove",value:function(t,e){t.splice(t.indexOf(e),1)}}]),t}(),st.\u0275fac=function(t){return new(t||st)(o.Jb(v))},st.\u0275cmp=o.Db({type:st,selectors:[["app-list"]],decls:7,vars:2,consts:[["title","List A",3,"data","add","remove"],["title","List B",3,"data","add","remove"]],template:function(t,e){1&t&&(o.Mb(0,"h1"),o.fc(1,"List"),o.Lb(),o.Mb(2,"section"),o.Mb(3,"aside"),o.Mb(4,"app-communities-list",0),o.Ub("add",(function(t){return e.add(e.listA,t)}))("remove",(function(t){return e.remove(e.listA,t)})),o.Lb(),o.Lb(),o.Mb(5,"aside"),o.Mb(6,"app-communities-list",1),o.Ub("add",(function(t){return e.add(e.listB,t)}))("remove",(function(t){return e.remove(e.listB,t)})),o.Lb(),o.Lb(),o.Lb()),2&t&&(o.zb(4),o.Zb("data",e.listA),o.zb(2),o.Zb("data",e.listB))},directives:[lt],styles:[""]}),st)}],ht=((dt=function t(){_classCallCheck(this,t)}).\u0275mod=o.Hb({type:dt}),dt.\u0275inj=o.Gb({factory:function(t){return new(t||dt)},imports:[[i.b.forChild(ft)],i.b]}),dt),mt=((ct=function t(){_classCallCheck(this,t)}).\u0275mod=o.Hb({type:ct}),ct.\u0275inj=o.Gb({factory:function(t){return new(t||ct)},imports:[[r.b,a.i,ht]]}),ct)}}]);