(()=>{var t={353:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",i="minute",s="hour",a="day",u="week",o="month",c="quarter",f="year",l="date",h="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},m={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,o),s=n-i<0,a=e.clone().add(r+(s?-1:1),o);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:f,w:u,d:a,D:l,h:s,m:i,s:r,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",g={};g[y]=$;var M="$isDayjsObject",w=function(t){return t instanceof _||!(!t||!t[M])},b=function t(e,n,r){var i;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();g[s]&&(i=s),n&&(g[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;g[u]=e,i=u}return!r&&i&&(y=i),i||!r&&y},D=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},S=m;S.l=b,S.i=w,S.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function $(t){this.$L=b(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[M]=!0}var v=$.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return S},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return D(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<D(t)},v.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,c=!!S.u(e)||e,h=S.p(t),d=function(t,e){var r=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?r:r.endOf(a)},p=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,v=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case f:return c?d(1,0):d(31,11);case o:return c?d(1,v):d(0,v+1);case u:var g=this.$locale().weekStart||0,M=($<g?$+7:$)-g;return d(c?m-M:m+(6-M),v);case a:case l:return p(y+"Hours",0);case s:return p(y+"Minutes",1);case i:return p(y+"Seconds",2);case r:return p(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var u,c=S.p(t),h="set"+(this.$u?"UTC":""),d=(u={},u[a]=h+"Date",u[l]=h+"Date",u[o]=h+"Month",u[f]=h+"FullYear",u[s]=h+"Hours",u[i]=h+"Minutes",u[r]=h+"Seconds",u[n]=h+"Milliseconds",u)[c],p=c===a?this.$D+(e-this.$W):e;if(c===o||c===f){var $=this.clone().set(l,1);$.$d[d](p),$.init(),this.$d=$.set(l,Math.min(this.$D,$.daysInMonth())).$d}else d&&this.$d[d](p);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[S.p(t)]()},v.add=function(n,c){var l,h=this;n=Number(n);var d=S.p(c),p=function(t){var e=D(h);return S.w(e.date(e.date()+Math.round(t*n)),h)};if(d===o)return this.set(o,this.$M+n);if(d===f)return this.set(f,this.$y+n);if(d===a)return p(1);if(d===u)return p(7);var $=(l={},l[i]=t,l[s]=e,l[r]=1e3,l)[d]||1,v=this.$d.getTime()+n*$;return S.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return S.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return S.s(e.$y,4,"0");case"M":return u+1;case"MM":return S.s(u+1,2,"0");case"MMM":return l(n.monthsShort,u,c,3);case"MMMM":return l(c,u);case"D":return e.$D;case"DD":return S.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return l(n.weekdaysMin,e.$W,o,2);case"ddd":return l(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return S.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,a,!0);case"A":return $(s,a,!1);case"m":return String(a);case"mm":return S.s(a,2,"0");case"s":return String(e.$s);case"ss":return S.s(e.$s,2,"0");case"SSS":return S.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,l,h){var d,p=this,$=S.p(l),v=D(n),m=(v.utcOffset()-this.utcOffset())*t,y=this-v,g=function(){return S.m(p,v)};switch($){case f:d=g()/12;break;case o:d=g();break;case c:d=g()/3;break;case u:d=(y-m)/6048e5;break;case a:d=(y-m)/864e5;break;case s:d=y/e;break;case i:d=y/t;break;case r:d=y/1e3;break;default:d=y}return h?d:S.a(d)},v.daysInMonth=function(){return this.endOf(o).$D},v.$locale=function(){return g[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=b(t,e,!0);return r&&(n.$L=r),n},v.clone=function(){return S.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},$}(),x=_.prototype;return D.prototype=x,[["$ms",n],["$s",r],["$m",i],["$H",s],["$W",a],["$M",o],["$y",f],["$D",l]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,_,D),t.$i=!0),D},D.locale=b,D.isDayjs=w,D.unix=function(t){return D(1e3*t)},D.en=g[y],D.Ls=g,D.p={},D}()},279:function(t){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(t,e,n,i){return r.fromToBase(t,e,n,i)}n.en.relativeTime=i,r.fromToBase=function(e,r,s,a,u){for(var o,c,f,l=s.$locale().relativeTime||i,h=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],d=h.length,p=0;p<d;p+=1){var $=h[p];$.d&&(o=a?n(e).diff(s,$.d,!0):s.diff(e,$.d,!0));var v=(t.rounding||Math.round)(Math.abs(o));if(f=o>0,v<=$.r||!$.r){v<=1&&p>0&&($=h[p-1]);var m=l[$.l];u&&(v=u(""+v)),c="string"==typeof m?m.replace("%d",v):m(v,r,$.l,f);break}}if(r)return c;var y=f?l.future:l.past;return"function"==typeof y?y(c):y.replace("%s",c)},r.to=function(t,e){return s(t,e,this,!0)},r.from=function(t,e){return s(t,e,this)};var a=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(a(this),t)},r.fromNow=function(t){return this.from(a(this),t)}}}()},927:function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function a(t){try{o(r.next(t))}catch(t){s(t)}}function u(t){try{o(r.throw(t))}catch(t){s(t)}}function o(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}o((r=r.apply(t,e||[])).next())}))},i=this&&this.__generator||function(t,e){var n,r,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(u){return function(o){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,u[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){a.label=u[1];break}if(6===u[0]&&a.label<i[1]){a.label=i[1],i=u;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(u);break}i[2]&&a.ops.pop(),a.trys.pop();continue}u=e.call(t,a)}catch(t){u=[6,t],r=0}finally{n=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,o])}}},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=s(n(353)),u=s(n(279));function o(t){return r(this,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,fetch("https://fwd.innopolis.university/api/hw2?email=".concat(t))];case 1:return[4,n.sent().json()];case 2:return[2,n.sent()];case 3:return e=n.sent(),console.error("Error fetching comic ID:",e),[2,null];case 4:return[2]}}))}))}function c(t){return r(this,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,fetch("https://fwd.innopolis.university/api/comic?id=".concat(t))];case 1:return[4,n.sent().json()];case 2:return[2,n.sent()];case 3:return e=n.sent(),console.error("Error fetching comic data:",e),[2,null];case 4:return[2]}}))}))}a.default.extend(u.default),function(){r(this,void 0,void 0,(function(){var t,e;return i(this,(function(n){switch(n.label){case 0:return[4,o("s.lutfullin@innopolis.university")];case 1:return(t=n.sent())?[4,c(t)]:[3,3];case 2:(e=n.sent())&&function(t){var e=document.getElementById("comic-container");if(e){var n=document.createElement("img");n.src=t.img,n.alt=t.alt,n.title=t.title;var r=document.createElement("h2");r.textContent=t.safe_title;var i=document.createElement("p"),s=new Date(parseInt(t.year),parseInt(t.month)-1,parseInt(t.day));i.textContent="Published: ".concat(s.toLocaleDateString(),", ").concat((0,a.default)(s).fromNow());var u=document.createElement("p");if(t.transcript){var o=t.transcript.replace(/[\[\]\{\}]/g,"").replace(/\.\)\)\s?\(\([^)]+\.\)\)/g,"").replace(/\(\([^)]+\)\)/g,"");u.textContent=o}else u.textContent="No transcript available.";e.appendChild(n),e.appendChild(r),e.appendChild(i)}}(e),n.label=3;case 3:return[2]}}))}))}()}},e={};!function n(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}(927)})();
