"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[313],{313:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var r=n(294),a=n(697),l=n.n(a),o=n(137),c=n(655);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function m(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}(this,n)}}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function d(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===i(t)?t:String(t)}function E(){return r.createElement("section",{className:"instructions-container"},r.createElement("h2",null,"Instructions"),r.createElement("ol",null,r.createElement("li",null,"Enter two Github users"),r.createElement("li",null,"Battle"),r.createElement("li",null,"See the winner")))}var w=function(e){f(n,e);var t=b(n);function n(){var e;u(this,n);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return d(y(e=t.call.apply(t,[this].concat(a))),"state",{username:""}),d(y(e),"handleChange",(function(t){e.setState({username:t.target.value})})),d(y(e),"handleSubmit",(function(t){t.preventDefault(),e.props.onSubmit(e.state.username)})),e}return m(n,[{key:"render",value:function(){return r.createElement("form",{className:"card bg-light",onSubmit:this.handleSubmit},r.createElement("label",{htmlFor:"username",className:"player-label"},this.props.label),r.createElement("div",{className:"input-row"},r.createElement("input",{type:"text",id:"username",placeholder:"github username",autoComplete:"off",value:this.state.username,onChange:this.handleChange}),r.createElement("button",{className:"btn link",type:"submit",disabled:!this.state.username},"Submit")))}}]),n}(r.Component);function g(e){var t=e.username,n=e.onReset,a=e.label;return r.createElement("article",{className:"card"},r.createElement("h3",{className:"player-label"},a),r.createElement("div",{className:"split"},r.createElement("div",{className:"row gap-md"},r.createElement("img",{width:32,height:32,className:"avatar",src:"https://github.com/".concat(t,".png?size=200"),alt:"Avatar for ".concat(t)}),r.createElement("a",{href:"https://github.com/".concat(t),className:"link"},t)),r.createElement("button",{className:"btn secondary icon",onClick:n},o.xv)))}g.propTypes={username:l().string.isRequired,onReset:l().func.isRequired,label:l().string.isRequired};var O=function(e){f(n,e);var t=b(n);function n(){var e;u(this,n);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return d(y(e=t.call.apply(t,[this].concat(a))),"state",{playerOne:null,playerTwo:null}),d(y(e),"handleSubmit",(function(t,n){e.setState(d({},t,n))})),d(y(e),"handleReset",(function(t){e.setState(d({},t,null))})),e}return m(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.playerOne,a=t.playerTwo;return r.createElement("main",{className:"stack main-stack animate-in"},r.createElement("div",{className:"split"},r.createElement("h1",null,"Players"),r.createElement(c.rU,{to:{pathname:"/results",search:"?playerOne=".concat(n,"&playerTwo=").concat(a)},className:"btn primary disabled"},"Battle")),r.createElement("section",{className:"grid"},null===n?r.createElement(w,{label:"Player One",onSubmit:function(t){return e.handleSubmit("playerOne",t)}}):r.createElement(g,{username:n,label:"Player One",onReset:function(){return e.handleReset("playerOne")}}),null===a?r.createElement(w,{label:"Player Two",onSubmit:function(t){return e.handleSubmit("playerTwo",t)}}):r.createElement(g,{username:a,label:"Player Two",onReset:function(){return e.handleReset("playerTwo")}})),r.createElement(E,null))}}]),n}(r.Component)}}]);