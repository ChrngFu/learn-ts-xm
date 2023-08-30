import{g as e}from"../dayjs/dayjs.341dffa3.js";function n(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var r={exports:{}},t=r.exports=function e(r,t,o){function i(u,c){if(!t[u]){if(!r[u]){if(!c&&n)return n(u);if(a)return a(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var s=t[u]={exports:{}};r[u][0].call(s.exports,(function(e){var n=r[u][1][e];return i(n||e)}),s,s.exports,e,r,t,o)}return t[u].exports}for(var a=n,u=0;u<o.length;u++)i(o[u]);return i}({1:[function(n,r,t){(function(e){var n,t,o=e.MutationObserver||e.WebKitMutationObserver;if(o){var i=0,a=new o(s),u=e.document.createTextNode("");a.observe(u,{characterData:!0}),n=function(){u.data=i=++i%2}}else if(e.setImmediate||void 0===e.MessageChannel)n="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var n=e.document.createElement("script");n.onreadystatechange=function(){s(),n.onreadystatechange=null,n.parentNode.removeChild(n),n=null},e.document.documentElement.appendChild(n)}:function(){setTimeout(s,0)};else{var c=new e.MessageChannel;c.port1.onmessage=s,n=function(){c.port2.postMessage(0)}}var f=[];function s(){var e,n;t=!0;for(var r=f.length;r;){for(n=f,f=[],e=-1;++e<r;)n[e]();r=f.length}t=!1}function l(e){1!==f.push(e)||t||n()}r.exports=l}).call(this,void 0!==e?e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,n,r){var t=e(1);function o(){}var i={},a=["REJECTED"],u=["FULFILLED"],c=["PENDING"];function f(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,e!==o&&v(this,e)}function s(e,n,r){this.promise=e,"function"==typeof n&&(this.onFulfilled=n,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function l(e,n,r){t((function(){var t;try{t=n(r)}catch(o){return i.reject(e,o)}t===e?i.reject(e,new TypeError("Cannot resolve promise with itself")):i.resolve(e,t)}))}function d(e){var n=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof n)return function(){n.apply(e,arguments)}}function v(e,n){var r=!1;function t(n){r||(r=!0,i.reject(e,n))}function o(n){r||(r=!0,i.resolve(e,n))}function a(){n(o,t)}var u=h(a);"error"===u.status&&t(u.value)}function h(e,n){var r={};try{r.value=e(n),r.status="success"}catch(t){r.status="error",r.value=t}return r}function y(e){return e instanceof this?e:i.resolve(new this(o),e)}function p(e){var n=new this(o);return i.reject(n,e)}function b(e){var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,t=!1;if(!r)return this.resolve([]);for(var a=new Array(r),u=0,c=-1,f=new this(o);++c<r;)s(e[c],c);return f;function s(e,o){function c(e){a[o]=e,++u!==r||t||(t=!0,i.resolve(f,a))}n.resolve(e).then(c,(function(e){t||(t=!0,i.reject(f,e))}))}}function m(e){var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,t=!1;if(!r)return this.resolve([]);for(var a=-1,u=new this(o);++a<r;)c(e[a]);return u;function c(e){n.resolve(e).then((function(e){t||(t=!0,i.resolve(u,e))}),(function(e){t||(t=!0,i.reject(u,e))}))}}n.exports=f,f.prototype.catch=function(e){return this.then(null,e)},f.prototype.then=function(e,n){if("function"!=typeof e&&this.state===u||"function"!=typeof n&&this.state===a)return this;var r=new this.constructor(o);return this.state!==c?l(r,this.state===u?e:n,this.outcome):this.queue.push(new s(r,e,n)),r},s.prototype.callFulfilled=function(e){i.resolve(this.promise,e)},s.prototype.otherCallFulfilled=function(e){l(this.promise,this.onFulfilled,e)},s.prototype.callRejected=function(e){i.reject(this.promise,e)},s.prototype.otherCallRejected=function(e){l(this.promise,this.onRejected,e)},i.resolve=function(e,n){var r=h(d,n);if("error"===r.status)return i.reject(e,r.value);var t=r.value;if(t)v(e,t);else{e.state=u,e.outcome=n;for(var o=-1,a=e.queue.length;++o<a;)e.queue[o].callFulfilled(n)}return e},i.reject=function(e,n){e.state=a,e.outcome=n;for(var r=-1,t=e.queue.length;++r<t;)e.queue[r].callRejected(n);return e},f.resolve=y,f.reject=p,f.all=b,f.race=m},{1:1}],3:[function(n,r,t){(function(e){"function"!=typeof e.Promise&&(e.Promise=n(2))}).call(this,void 0!==e?e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(e,n,r){var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){return}}var a=i();function u(){try{if(!a||!a.open)return!1;var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),n="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!e||n)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(r){return!1}}function c(e,n){e=e||[],n=n||{};try{return new Blob(e,n)}catch(o){if("TypeError"!==o.name)throw o;for(var r=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),t=0;t<e.length;t+=1)r.append(e[t]);return r.getBlob(n.type)}}"undefined"==typeof Promise&&e(3);var f=Promise;function s(e,n){n&&e.then((function(e){n(null,e)}),(function(e){n(e)}))}function l(e,n,r){"function"==typeof n&&e.then(n),"function"==typeof r&&e.catch(r)}function d(e){return"string"!=typeof e&&(e=String(e)),e}function v(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}var h="local-forage-detect-blob-support",y=void 0,p={},b=Object.prototype.toString,m="readonly",g="readwrite";function _(e){for(var n=e.length,r=new ArrayBuffer(n),t=new Uint8Array(r),o=0;o<n;o++)t[o]=e.charCodeAt(o);return r}function I(e){return new f((function(n){var r=e.transaction(h,g),t=c([""]);r.objectStore(h).put(t,"key"),r.onabort=function(e){e.preventDefault(),e.stopPropagation(),n(!1)},r.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),r=navigator.userAgent.match(/Edge\//);n(r||!e||parseInt(e[1],10)>=43)}})).catch((function(){return!1}))}function w(e){return"boolean"==typeof y?f.resolve(y):I(e).then((function(e){return y=e}))}function S(e){var n=p[e.name],r={};r.promise=new f((function(e,n){r.resolve=e,r.reject=n})),n.deferredOperations.push(r),n.dbReady?n.dbReady=n.dbReady.then((function(){return r.promise})):n.dbReady=r.promise}function E(e){var n=p[e.name].deferredOperations.pop();if(n)return n.resolve(),n.promise}function N(e,n){var r=p[e.name].deferredOperations.pop();if(r)return r.reject(n),r.promise}function j(e,n){return new f((function(r,t){if(p[e.name]=p[e.name]||F(),e.db){if(!n)return r(e.db);S(e),e.db.close()}var o=[e.name];n&&o.push(e.version);var i=a.open.apply(a,o);n&&(i.onupgradeneeded=function(n){var r=i.result;try{r.createObjectStore(e.storeName),n.oldVersion<=1&&r.createObjectStore(h)}catch(t){if("ConstraintError"!==t.name)throw t}}),i.onerror=function(e){e.preventDefault(),t(i.error)},i.onsuccess=function(){var n=i.result;n.onversionchange=function(e){e.target.close()},r(n),E(e)}}))}function R(e){return j(e,!1)}function A(e){return j(e,!0)}function D(e,n){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),t=e.version<e.db.version,o=e.version>e.db.version;if(t&&(e.version,e.version=e.db.version),o||r){if(r){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function O(e){return new f((function(n,r){var t=new FileReader;t.onerror=r,t.onloadend=function(r){var t=btoa(r.target.result||"");n({__local_forage_encoded_blob:!0,data:t,type:e.type})},t.readAsBinaryString(e)}))}function x(e){return c([_(atob(e.data))],{type:e.type})}function B(e){return e&&e.__local_forage_encoded_blob}function k(e){var n=this,r=n._initReady().then((function(){var e=p[n._dbInfo.name];if(e&&e.dbReady)return e.dbReady}));return l(r,e,e),r}function C(e){S(e);for(var n=p[e.name],r=n.forages,t=0;t<r.length;t++){var o=r[t];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,R(e).then((function(n){return e.db=n,D(e)?A(e):n})).then((function(t){e.db=n.db=t;for(var o=0;o<r.length;o++)r[o]._dbInfo.db=t})).catch((function(n){throw N(e,n),n}))}function T(e,n,r,t){void 0===t&&(t=1);try{var o=e.db.transaction(e.storeName,n);r(null,o)}catch(i){if(t>0&&(!e.db||"InvalidStateError"===i.name||"NotFoundError"===i.name))return f.resolve().then((function(){if(!e.db||"NotFoundError"===i.name&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),A(e)})).then((function(){return C(e).then((function(){T(e,n,r,t-1)}))})).catch(r);r(i)}}function F(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function L(e){var n=this,r={db:null};if(e)for(var t in e)r[t]=e[t];var o=p[r.name];o||(o=F(),p[r.name]=o),o.forages.push(n),n._initReady||(n._initReady=n.ready,n.ready=k);var i=[];function a(){return f.resolve()}for(var u=0;u<o.forages.length;u++){var c=o.forages[u];c!==n&&i.push(c._initReady().catch(a))}var s=o.forages.slice(0);return f.all(i).then((function(){return r.db=o.db,R(r)})).then((function(e){return r.db=e,D(r,n._defaultConfig.version)?A(r):e})).then((function(e){r.db=o.db=e,n._dbInfo=r;for(var t=0;t<s.length;t++){var i=s[t];i!==n&&(i._dbInfo.db=r.db,i._dbInfo.version=r.version)}}))}function M(e,n){var r=this;e=d(e);var t=new f((function(n,t){r.ready().then((function(){T(r._dbInfo,m,(function(o,i){if(o)return t(o);try{var a=i.objectStore(r._dbInfo.storeName).get(e);a.onsuccess=function(){var e=a.result;void 0===e&&(e=null),B(e)&&(e=x(e)),n(e)},a.onerror=function(){t(a.error)}}catch(u){t(u)}}))})).catch(t)}));return s(t,n),t}function z(e,n){var r=this,t=new f((function(n,t){r.ready().then((function(){T(r._dbInfo,m,(function(o,i){if(o)return t(o);try{var a=i.objectStore(r._dbInfo.storeName).openCursor(),u=1;a.onsuccess=function(){var r=a.result;if(r){var t=r.value;B(t)&&(t=x(t));var o=e(t,r.key,u++);void 0!==o?n(o):r.continue()}else n()},a.onerror=function(){t(a.error)}}catch(c){t(c)}}))})).catch(t)}));return s(t,n),t}function P(e,n,r){var t=this;e=d(e);var o=new f((function(r,o){var i;t.ready().then((function(){return i=t._dbInfo,"[object Blob]"===b.call(n)?w(i.db).then((function(e){return e?n:O(n)})):n})).then((function(n){T(t._dbInfo,g,(function(i,a){if(i)return o(i);try{var u=a.objectStore(t._dbInfo.storeName);null===n&&(n=void 0);var c=u.put(n,e);a.oncomplete=function(){void 0===n&&(n=null),r(n)},a.onabort=a.onerror=function(){var e=c.error?c.error:c.transaction.error;o(e)}}catch(f){o(f)}}))})).catch(o)}));return s(o,r),o}function q(e,n){var r=this;e=d(e);var t=new f((function(n,t){r.ready().then((function(){T(r._dbInfo,g,(function(o,i){if(o)return t(o);try{var a=i.objectStore(r._dbInfo.storeName).delete(e);i.oncomplete=function(){n()},i.onerror=function(){t(a.error)},i.onabort=function(){var e=a.error?a.error:a.transaction.error;t(e)}}catch(u){t(u)}}))})).catch(t)}));return s(t,n),t}function U(e){var n=this,r=new f((function(e,r){n.ready().then((function(){T(n._dbInfo,g,(function(t,o){if(t)return r(t);try{var i=o.objectStore(n._dbInfo.storeName).clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=i.error?i.error:i.transaction.error;r(e)}}catch(a){r(a)}}))})).catch(r)}));return s(r,e),r}function W(e){var n=this,r=new f((function(e,r){n.ready().then((function(){T(n._dbInfo,m,(function(t,o){if(t)return r(t);try{var i=o.objectStore(n._dbInfo.storeName).count();i.onsuccess=function(){e(i.result)},i.onerror=function(){r(i.error)}}catch(a){r(a)}}))})).catch(r)}));return s(r,e),r}function K(e,n){var r=this,t=new f((function(n,t){e<0?n(null):r.ready().then((function(){T(r._dbInfo,m,(function(o,i){if(o)return t(o);try{var a=i.objectStore(r._dbInfo.storeName),u=!1,c=a.openKeyCursor();c.onsuccess=function(){var r=c.result;r?0===e||u?n(r.key):(u=!0,r.advance(e)):n(null)},c.onerror=function(){t(c.error)}}catch(f){t(f)}}))})).catch(t)}));return s(t,n),t}function H(e){var n=this,r=new f((function(e,r){n.ready().then((function(){T(n._dbInfo,m,(function(t,o){if(t)return r(t);try{var i=o.objectStore(n._dbInfo.storeName).openKeyCursor(),a=[];i.onsuccess=function(){var n=i.result;n?(a.push(n.key),n.continue()):e(a)},i.onerror=function(){r(i.error)}}catch(u){r(u)}}))})).catch(r)}));return s(r,e),r}function Q(e,n){n=v.apply(this,arguments);var r=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var t,o=this;if(e.name){var i=e.name===r.name&&o._dbInfo.db?f.resolve(o._dbInfo.db):R(e).then((function(n){var r=p[e.name],t=r.forages;r.db=n;for(var o=0;o<t.length;o++)t[o]._dbInfo.db=n;return n}));t=e.storeName?i.then((function(n){if(n.objectStoreNames.contains(e.storeName)){var r=n.version+1;S(e);var t=p[e.name],o=t.forages;n.close();for(var i=0;i<o.length;i++){var u=o[i];u._dbInfo.db=null,u._dbInfo.version=r}return new f((function(n,t){var o=a.open(e.name,r);o.onerror=function(e){o.result.close(),t(e)},o.onupgradeneeded=function(){o.result.deleteObjectStore(e.storeName)},o.onsuccess=function(){var e=o.result;e.close(),n(e)}})).then((function(e){t.db=e;for(var n=0;n<o.length;n++){var r=o[n];r._dbInfo.db=e,E(r._dbInfo)}})).catch((function(n){throw(N(e,n)||f.resolve()).catch((function(){})),n}))}})):i.then((function(n){S(e);var r=p[e.name],t=r.forages;n.close();for(var o=0;o<t.length;o++)t[o]._dbInfo.db=null;return new f((function(n,r){var t=a.deleteDatabase(e.name);t.onerror=function(){var e=t.result;e&&e.close(),r(t.error)},t.onblocked=function(){},t.onsuccess=function(){var e=t.result;e&&e.close(),n(e)}})).then((function(e){r.db=e;for(var n=0;n<t.length;n++)E(t[n]._dbInfo)})).catch((function(n){throw(N(e,n)||f.resolve()).catch((function(){})),n}))}))}else t=f.reject("Invalid arguments");return s(t,n),t}var X={_driver:"asyncStorage",_initStorage:L,_support:u(),iterate:z,getItem:M,setItem:P,removeItem:q,clear:U,length:W,key:K,keys:H,dropInstance:Q};function G(){return"function"==typeof openDatabase}var J="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Y="~~local_forage_type~",V=/^~~local_forage_type~([^~]+)~/,Z="__lfsc__:",$=Z.length,ee="arbf",ne="blob",re="si08",te="ui08",oe="uic8",ie="si16",ae="si32",ue="ur16",ce="ui32",fe="fl32",se="fl64",le=$+ee.length,de=Object.prototype.toString;function ve(e){var n,r,t,o,i,a=.75*e.length,u=e.length,c=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);var f=new ArrayBuffer(a),s=new Uint8Array(f);for(n=0;n<u;n+=4)r=J.indexOf(e[n]),t=J.indexOf(e[n+1]),o=J.indexOf(e[n+2]),i=J.indexOf(e[n+3]),s[c++]=r<<2|t>>4,s[c++]=(15&t)<<4|o>>2,s[c++]=(3&o)<<6|63&i;return f}function he(e){var n,r=new Uint8Array(e),t="";for(n=0;n<r.length;n+=3)t+=J[r[n]>>2],t+=J[(3&r[n])<<4|r[n+1]>>4],t+=J[(15&r[n+1])<<2|r[n+2]>>6],t+=J[63&r[n+2]];return r.length%3==2?t=t.substring(0,t.length-1)+"=":r.length%3==1&&(t=t.substring(0,t.length-2)+"=="),t}function ye(e,n){var r="";if(e&&(r=de.call(e)),e&&("[object ArrayBuffer]"===r||e.buffer&&"[object ArrayBuffer]"===de.call(e.buffer))){var t,o=Z;e instanceof ArrayBuffer?(t=e,o+=ee):(t=e.buffer,"[object Int8Array]"===r?o+=re:"[object Uint8Array]"===r?o+=te:"[object Uint8ClampedArray]"===r?o+=oe:"[object Int16Array]"===r?o+=ie:"[object Uint16Array]"===r?o+=ue:"[object Int32Array]"===r?o+=ae:"[object Uint32Array]"===r?o+=ce:"[object Float32Array]"===r?o+=fe:"[object Float64Array]"===r?o+=se:n(new Error("Failed to get type for BinaryArray"))),n(o+he(t))}else if("[object Blob]"===r){var i=new FileReader;i.onload=function(){var r=Y+e.type+"~"+he(this.result);n(Z+ne+r)},i.readAsArrayBuffer(e)}else try{n(JSON.stringify(e))}catch(a){n(null,a)}}function pe(e){if(e.substring(0,$)!==Z)return JSON.parse(e);var n,r=e.substring(le),t=e.substring($,le);if(t===ne&&V.test(r)){var o=r.match(V);n=o[1],r=r.substring(o[0].length)}var i=ve(r);switch(t){case ee:return i;case ne:return c([i],{type:n});case re:return new Int8Array(i);case te:return new Uint8Array(i);case oe:return new Uint8ClampedArray(i);case ie:return new Int16Array(i);case ue:return new Uint16Array(i);case ae:return new Int32Array(i);case ce:return new Uint32Array(i);case fe:return new Float32Array(i);case se:return new Float64Array(i);default:throw new Error("Unkown type: "+t)}}var be={serialize:ye,deserialize:pe,stringToBuffer:ve,bufferToString:he};function me(e,n,r,t){e.executeSql("CREATE TABLE IF NOT EXISTS "+n.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],r,t)}function ge(e){var n=this,r={db:null};if(e)for(var t in e)r[t]="string"!=typeof e[t]?e[t].toString():e[t];var o=new f((function(e,t){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(o){return t(o)}r.db.transaction((function(o){me(o,r,(function(){n._dbInfo=r,e()}),(function(e,n){t(n)}))}),t)}));return r.serializer=be,o}function _e(e,n,r,t,o,i){e.executeSql(r,t,o,(function(e,a){a.code===a.SYNTAX_ERR?e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[n.storeName],(function(e,u){u.rows.length?i(e,a):me(e,n,(function(){e.executeSql(r,t,o,i)}),i)}),i):i(e,a)}),i)}function Ie(e,n){var r=this;e=d(e);var t=new f((function(n,t){r.ready().then((function(){var o=r._dbInfo;o.db.transaction((function(r){_e(r,o,"SELECT * FROM "+o.storeName+" WHERE key = ? LIMIT 1",[e],(function(e,r){var t=r.rows.length?r.rows.item(0).value:null;t&&(t=o.serializer.deserialize(t)),n(t)}),(function(e,n){t(n)}))}))})).catch(t)}));return s(t,n),t}function we(e,n){var r=this,t=new f((function(n,t){r.ready().then((function(){var o=r._dbInfo;o.db.transaction((function(r){_e(r,o,"SELECT * FROM "+o.storeName,[],(function(r,t){for(var i=t.rows,a=i.length,u=0;u<a;u++){var c=i.item(u),f=c.value;if(f&&(f=o.serializer.deserialize(f)),void 0!==(f=e(f,c.key,u+1)))return void n(f)}n()}),(function(e,n){t(n)}))}))})).catch(t)}));return s(t,n),t}function Se(e,n,r,t){var o=this;e=d(e);var i=new f((function(i,a){o.ready().then((function(){void 0===n&&(n=null);var u=n,c=o._dbInfo;c.serializer.serialize(n,(function(n,f){f?a(f):c.db.transaction((function(r){_e(r,c,"INSERT OR REPLACE INTO "+c.storeName+" (key, value) VALUES (?, ?)",[e,n],(function(){i(u)}),(function(e,n){a(n)}))}),(function(n){if(n.code===n.QUOTA_ERR){if(t>0)return void i(Se.apply(o,[e,u,r,t-1]));a(n)}}))}))})).catch(a)}));return s(i,r),i}function Ee(e,n,r){return Se.apply(this,[e,n,r,1])}function Ne(e,n){var r=this;e=d(e);var t=new f((function(n,t){r.ready().then((function(){var o=r._dbInfo;o.db.transaction((function(r){_e(r,o,"DELETE FROM "+o.storeName+" WHERE key = ?",[e],(function(){n()}),(function(e,n){t(n)}))}))})).catch(t)}));return s(t,n),t}function je(e){var n=this,r=new f((function(e,r){n.ready().then((function(){var t=n._dbInfo;t.db.transaction((function(n){_e(n,t,"DELETE FROM "+t.storeName,[],(function(){e()}),(function(e,n){r(n)}))}))})).catch(r)}));return s(r,e),r}function Re(e){var n=this,r=new f((function(e,r){n.ready().then((function(){var t=n._dbInfo;t.db.transaction((function(n){_e(n,t,"SELECT COUNT(key) as c FROM "+t.storeName,[],(function(n,r){var t=r.rows.item(0).c;e(t)}),(function(e,n){r(n)}))}))})).catch(r)}));return s(r,e),r}function Ae(e,n){var r=this,t=new f((function(n,t){r.ready().then((function(){var o=r._dbInfo;o.db.transaction((function(r){_e(r,o,"SELECT key FROM "+o.storeName+" WHERE id = ? LIMIT 1",[e+1],(function(e,r){var t=r.rows.length?r.rows.item(0).key:null;n(t)}),(function(e,n){t(n)}))}))})).catch(t)}));return s(t,n),t}function De(e){var n=this,r=new f((function(e,r){n.ready().then((function(){var t=n._dbInfo;t.db.transaction((function(n){_e(n,t,"SELECT key FROM "+t.storeName,[],(function(n,r){for(var t=[],o=0;o<r.rows.length;o++)t.push(r.rows.item(o).key);e(t)}),(function(e,n){r(n)}))}))})).catch(r)}));return s(r,e),r}function Oe(e){return new f((function(n,r){e.transaction((function(t){t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],(function(r,t){for(var o=[],i=0;i<t.rows.length;i++)o.push(t.rows.item(i).name);n({db:e,storeNames:o})}),(function(e,n){r(n)}))}),(function(e){r(e)}))}))}function xe(e,n){n=v.apply(this,arguments);var r=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||r.name,e.storeName=e.storeName||r.storeName);var t,o=this;return s(t=e.name?new f((function(n){var t;t=e.name===r.name?o._dbInfo.db:openDatabase(e.name,"","",0),e.storeName?n({db:t,storeNames:[e.storeName]}):n(Oe(t))})).then((function(e){return new f((function(n,r){e.db.transaction((function(t){function o(e){return new f((function(n,r){t.executeSql("DROP TABLE IF EXISTS "+e,[],(function(){n()}),(function(e,n){r(n)}))}))}for(var i=[],a=0,u=e.storeNames.length;a<u;a++)i.push(o(e.storeNames[a]));f.all(i).then((function(){n()})).catch((function(e){r(e)}))}),(function(e){r(e)}))}))})):f.reject("Invalid arguments"),n),t}var Be={_driver:"webSQLStorage",_initStorage:ge,_support:G(),iterate:we,getItem:Ie,setItem:Ee,removeItem:Ne,clear:je,length:Re,key:Ae,keys:De,dropInstance:xe};function ke(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(e){return!1}}function Ce(e,n){var r=e.name+"/";return e.storeName!==n.storeName&&(r+=e.storeName+"/"),r}function Te(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch(n){return!0}}function Fe(){return!Te()||localStorage.length>0}function Le(e){var n=this,r={};if(e)for(var t in e)r[t]=e[t];return r.keyPrefix=Ce(e,n._defaultConfig),Fe()?(n._dbInfo=r,r.serializer=be,f.resolve()):f.reject()}function Me(e){var n=this,r=n.ready().then((function(){for(var e=n._dbInfo.keyPrefix,r=localStorage.length-1;r>=0;r--){var t=localStorage.key(r);0===t.indexOf(e)&&localStorage.removeItem(t)}}));return s(r,e),r}function ze(e,n){var r=this;e=d(e);var t=r.ready().then((function(){var n=r._dbInfo,t=localStorage.getItem(n.keyPrefix+e);return t&&(t=n.serializer.deserialize(t)),t}));return s(t,n),t}function Pe(e,n){var r=this,t=r.ready().then((function(){for(var n=r._dbInfo,t=n.keyPrefix,o=t.length,i=localStorage.length,a=1,u=0;u<i;u++){var c=localStorage.key(u);if(0===c.indexOf(t)){var f=localStorage.getItem(c);if(f&&(f=n.serializer.deserialize(f)),void 0!==(f=e(f,c.substring(o),a++)))return f}}}));return s(t,n),t}function qe(e,n){var r=this,t=r.ready().then((function(){var n,t=r._dbInfo;try{n=localStorage.key(e)}catch(o){n=null}return n&&(n=n.substring(t.keyPrefix.length)),n}));return s(t,n),t}function Ue(e){var n=this,r=n.ready().then((function(){for(var e=n._dbInfo,r=localStorage.length,t=[],o=0;o<r;o++){var i=localStorage.key(o);0===i.indexOf(e.keyPrefix)&&t.push(i.substring(e.keyPrefix.length))}return t}));return s(r,e),r}function We(e){var n=this.keys().then((function(e){return e.length}));return s(n,e),n}function Ke(e,n){var r=this;e=d(e);var t=r.ready().then((function(){var n=r._dbInfo;localStorage.removeItem(n.keyPrefix+e)}));return s(t,n),t}function He(e,n,r){var t=this;e=d(e);var o=t.ready().then((function(){void 0===n&&(n=null);var r=n;return new f((function(o,i){var a=t._dbInfo;a.serializer.serialize(n,(function(n,t){if(t)i(t);else try{localStorage.setItem(a.keyPrefix+e,n),o(r)}catch(u){"QuotaExceededError"!==u.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==u.name||i(u),i(u)}}))}))}));return s(o,r),o}function Qe(e,n){if(n=v.apply(this,arguments),!(e="function"!=typeof e&&e||{}).name){var r=this.config();e.name=e.name||r.name,e.storeName=e.storeName||r.storeName}var t,o=this;return s(t=e.name?new f((function(n){e.storeName?n(Ce(e,o._defaultConfig)):n(e.name+"/")})).then((function(e){for(var n=localStorage.length-1;n>=0;n--){var r=localStorage.key(n);0===r.indexOf(e)&&localStorage.removeItem(r)}})):f.reject("Invalid arguments"),n),t}var Xe={_driver:"localStorageWrapper",_initStorage:Le,_support:ke(),iterate:Pe,getItem:ze,setItem:He,removeItem:Ke,clear:Me,length:We,key:qe,keys:Ue,dropInstance:Qe},Ge=function(e,n){return e===n||"number"==typeof e&&"number"==typeof n&&isNaN(e)&&isNaN(n)},Je=function(e,n){for(var r=e.length,t=0;t<r;){if(Ge(e[t],n))return!0;t++}return!1},Ye=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},Ve={},Ze={},$e={INDEXEDDB:X,WEBSQL:Be,LOCALSTORAGE:Xe},en=[$e.INDEXEDDB._driver,$e.WEBSQL._driver,$e.LOCALSTORAGE._driver],nn=["dropInstance"],rn=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(nn),tn={description:"",driver:en.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function on(e,n){e[n]=function(){var r=arguments;return e.ready().then((function(){return e[n].apply(e,r)}))}}function an(){for(var e=1;e<arguments.length;e++){var n=arguments[e];if(n)for(var r in n)n.hasOwnProperty(r)&&(Ye(n[r])?arguments[0][r]=n[r].slice():arguments[0][r]=n[r])}return arguments[0]}var un=function(){function e(n){for(var r in o(this,e),$e)if($e.hasOwnProperty(r)){var t=$e[r],i=t._driver;this[r]=i,Ve[i]||this.defineDriver(t)}this._defaultConfig=an({},tn),this._config=an({},this._defaultConfig,n),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch((function(){}))}return e.prototype.config=function(e){if("object"===(void 0===e?"undefined":t(e))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var n in e){if("storeName"===n&&(e[n]=e[n].replace(/\W/g,"_")),"version"===n&&"number"!=typeof e[n])return new Error("Database version must be a number.");this._config[n]=e[n]}return!("driver"in e)||!e.driver||this.setDriver(this._config.driver)}return"string"==typeof e?this._config[e]:this._config},e.prototype.defineDriver=function(e,n,r){var t=new f((function(n,r){try{var t=e._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!e._driver)return void r(o);for(var i=rn.concat("_initStorage"),a=0,u=i.length;a<u;a++){var c=i[a];if((!Je(nn,c)||e[c])&&"function"!=typeof e[c])return void r(o)}var l=function(){for(var n=function(e){return function(){var n=new Error("Method "+e+" is not implemented by the current driver"),r=f.reject(n);return s(r,arguments[arguments.length-1]),r}},r=0,t=nn.length;r<t;r++){var o=nn[r];e[o]||(e[o]=n(o))}};l();var d=function(r){Ve[t],Ve[t]=e,Ze[t]=r,n()};"_support"in e?e._support&&"function"==typeof e._support?e._support().then(d,r):d(!!e._support):d(!0)}catch(v){r(v)}}));return l(t,n,r),t},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(e,n,r){var t=Ve[e]?f.resolve(Ve[e]):f.reject(new Error("Driver not found."));return l(t,n,r),t},e.prototype.getSerializer=function(e){var n=f.resolve(be);return l(n,e),n},e.prototype.ready=function(e){var n=this,r=n._driverSet.then((function(){return null===n._ready&&(n._ready=n._initDriver()),n._ready}));return l(r,e,e),r},e.prototype.setDriver=function(e,n,r){var t=this;Ye(e)||(e=[e]);var o=this._getSupportedDrivers(e);function i(){t._config.driver=t.driver()}function a(e){return t._extend(e),i(),t._ready=t._initStorage(t._config),t._ready}function u(e){return function(){var n=0;function r(){for(;n<e.length;){var o=e[n];return n++,t._dbInfo=null,t._ready=null,t.getDriver(o).then(a).catch(r)}i();var u=new Error("No available storage method found.");return t._driverSet=f.reject(u),t._driverSet}return r()}}var c=null!==this._driverSet?this._driverSet.catch((function(){return f.resolve()})):f.resolve();return this._driverSet=c.then((function(){var e=o[0];return t._dbInfo=null,t._ready=null,t.getDriver(e).then((function(e){t._driver=e._driver,i(),t._wrapLibraryMethodsWithReady(),t._initDriver=u(o)}))})).catch((function(){i();var e=new Error("No available storage method found.");return t._driverSet=f.reject(e),t._driverSet})),l(this._driverSet,n,r),this._driverSet},e.prototype.supports=function(e){return!!Ze[e]},e.prototype._extend=function(e){an(this,e)},e.prototype._getSupportedDrivers=function(e){for(var n=[],r=0,t=e.length;r<t;r++){var o=e[r];this.supports(o)&&n.push(o)}return n},e.prototype._wrapLibraryMethodsWithReady=function(){for(var e=0,n=rn.length;e<n;e++)on(this,rn[e])},e.prototype.createInstance=function(n){return new e(n)},e}(),cn=new un;n.exports=cn},{3:3}]},{},[4])(4);
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/export{t as l};
