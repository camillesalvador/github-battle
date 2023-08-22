"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[126],{126:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var n=r(294),o=r(697),a=r.n(o),i=r(137);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,m(n.key),n)}}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e,t,r){return(t=m(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(t)?t:String(t)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(m,e);var t,r,o,a,i=(o=m,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(o);if(a){var r=f(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)}(this,e)});function m(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return p(s(e=i.call.apply(i,[this].concat(r))),"state",{hovering:!1}),p(s(e),"mouseOver",(function(){e.setState({hovering:!0})})),p(s(e),"mouseOut",(function(){e.setState({hovering:!1})})),e}return t=m,(r=[{key:"render",value:function(){return n.createElement("div",{onMouseOver:this.mouseOver,onMouseOut:this.mouseOut},this.props.children(this.state.hovering))}}])&&c(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),m}(n.Component),d={position:"relative",display:"flex"};function h(e){var t=e.children,r=e.element;return n.createElement(y,null,(function(e){return n.createElement("div",{style:d},!0===e&&r,t)}))}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}function v(e){var t=e.created_at,r=e.forked_count,o=e.language,a=e.updated_at,i=e.watchers,u=e.login;return n.createElement("ul",{className:"tooltip stack"},n.createElement("li",{className:"split"},n.createElement("span",null,"By:")," ",n.createElement("span",null,u)),o&&n.createElement("li",{className:"split"},n.createElement("span",null,"Language:")," ",n.createElement("span",null,o)),n.createElement("li",{className:"split"},n.createElement("span",null,"Created:")," ",n.createElement("span",null,new Date(t).toLocaleDateString())),n.createElement("li",{className:"split"},n.createElement("span",null,"Last Updated:")," ",n.createElement("span",null,new Date(a).toLocaleDateString())),n.createElement("li",{className:"split"},n.createElement("span",null,"Watchers:")," ",n.createElement("span",null,i)),r&&n.createElement("li",{className:"split"},n.createElement("span",null,"Forks:")," ",n.createElement("span",null,r)))}function g(){return n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{style:{width:"5%"}},i.dY),n.createElement("th",{style:{width:"50%"}},"Repository"),n.createElement("th",{style:{width:"15%"}},"Stars"),n.createElement("th",{style:{width:"15%"}},"Forks"),n.createElement("th",{style:{width:"15%"}},"Open Issue")))}function E(e){var t=e.index,r=e.owner,o=e.stargazers_count,a=e.forks,i=e.open_issues,u=e.name,c=e.created_at,l=e.updated_at,s=e.language,f=e.watchers,p=r.login,m=r.avatar_url,y=r.type;return n.createElement("tr",{key:u},n.createElement("td",null,t+1),n.createElement("td",null,n.createElement(h,{element:n.createElement(v,{created_at:c,language:s,updated_at:l,watchers:f,type:y,login:p})},n.createElement("div",null,n.createElement("div",{style:{position:"relative",display:"flex"}},n.createElement("div",{className:"row gap-md"},n.createElement("img",{src:m,alt:"Avatar for ".concat(p),className:"avatar",width:32,height:32}),n.createElement("a",{href:"https://github.com/".concat(p,"/").concat(u)},u)))))),n.createElement("td",null,o),n.createElement("td",null,a),n.createElement("td",null,i))}function w(e){var t=e.repos;return n.createElement("table",null,n.createElement(g,null),n.createElement("tbody",null,t.map((function(e,t){return n.createElement(E,b({key:t},e,{index:t}))}))))}E.propTypes={index:a().number.isRequired,owner:a().shape({login:a().string.isRequired,avatar_url:a().string.isRequired}).isRequired,stargazers_count:a().number.isRequired,forks:a().number.isRequired,open_issues:a().number.isRequired,name:a().string.isRequired},w.propTypes={repos:a().array.isRequired};var O=r(335);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,L(n.key),n)}}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}function k(e,t,r){return(t=L(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function L(e){var t=function(e,t){if("object"!==j(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===j(t)?t:String(t)}function N(e){var t=e.selected,r=e.onUpdateLanguage;return n.createElement("select",{onChange:function(e){return r(e.target.value)},selected:t},["All","JavaScript","Ruby","Java","CSS","Python"].map((function(e){return n.createElement("option",{key:e,value:e},e)})))}N.propTypes={selected:a().string.isRequired,onUpdateLanguage:a().func.isRequired};var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(u,e);var t,r,o,a,i=(o=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(o);if(a){var r=R(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}(this,e)});function u(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return k(P(e=i.call.apply(i,[this].concat(r))),"state",{selectedLanguage:"All",repos:null,error:null}),k(P(e),"updateLanguage",(function(t){e.setState({selectedLanguage:t}),(0,O.Q)(t).then((function(t){return e.setState({repos:t,error:null})})).catch((function(t){console.warn("Error fetching repos: ",t),e.setState({error:"There was an error fetching the repositories."})}))})),e}return t=u,(r=[{key:"componentDidMount",value:function(){this.updateLanguage(this.state.selectedLanguage)}},{key:"render",value:function(){var e=this.state,t=e.selectedLanguage,r=e.repos,o=e.error;return n.createElement("main",{className:"stack main-stack animate-in"},n.createElement("div",{className:"split"},n.createElement("h1",null,"Popular"),n.createElement(N,{selected:t,onUpdateLanguage:this.updateLanguage})),o&&n.createElement("p",{className:"text-center error"},o),r&&n.createElement(w,{repos:r}))}}])&&S(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(n.Component)},335:(e,t,r)=>{function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){var t=window.encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(e,"&sort=stars&order=desc&type=Repositories"));return fetch(t).then((function(e){return e.json()})).then((function(e){if(!e.items)throw new Error(e.message);return e.items}))}function a(e){return fetch("https://api.github.com/users/".concat(e,"/repos?per_page=100")).then((function(e){return e.json()})).then((function(e){if(e.message)throw new Error(e.message);return e}))}function i(e,t){return 3*e+function(e){return e.reduce((function(e,t){return e+t.stargazers_count}),0)}(t)}function u(e){return Promise.all([(t=e,fetch("https://api.github.com/users/".concat(t)).then((function(e){return e.json()})).then((function(e){if(e.message)throw new Error(e.message);return e}))),a(e)]).then((function(e){var t,r,o=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,u=[],c=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return u}}(t,r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],u=o[1];return{profile:a,score:i(a.followers,u)}}));var t}function c(e){return e.sort((function(e,t){return t.score-e.score}))}function l(e){return Promise.all([u(e[0]),u(e[1])]).then(c)}r.d(t,{N:()=>l,Q:()=>o})}}]);