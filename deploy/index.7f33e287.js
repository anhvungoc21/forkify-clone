function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequire7e89;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequire7e89=a),a.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("27Lyk").register(JSON.parse('{"lnJ1J":"index.7f33e287.js","1DF7P":"icons.c14567a0.svg"}'));var o=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,a=Object.create(i.prototype),o=new S(r||[]);return a._invoke=function(e,t,n){var r=d;return function(i,a){if(r===p)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw a;return P()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=F(o,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?f:h,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=f,n.method="throw",n.arg=c.arg)}}}(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",h="suspendedYield",p="executing",f="completed",m={};function g(){}function v(){}function y(){}var _={};c(_,a,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(M([])));w&&w!==n&&r.call(w,a)&&(_=w);var k=y.prototype=g.prototype=Object.create(_);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(i,a,o,s){var c=l(e[i],e,a);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(d).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function F(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,F(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function M(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:P}}function P(){return{value:t,done:!0}}return v.prototype=y,c(k,"constructor",y),c(y,"constructor",v),v.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(x.prototype),c(x.prototype,o,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new x(u(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(k),c(k,s,"Generator"),c(k,a,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=M,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),$(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;$(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:M(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}({});try{regeneratorRuntime=o}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}const s=function(e){return new Promise((function(t,n){setTimeout((function(){n(new Error(`Request took too long! Timeout after ${e} second`))}),1e3*e)}))},c=async function(e){try{const t=await Promise.race([fetch(e),s(10)]),n=await t.json();if(!t.ok)throw new Error(`${n.message}\n (${t.status})`);return n}catch(e){throw e}},u={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]},l=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},d=function(e=u.search.page){u.search.page=e;const t=(e-1)*u.search.resultsPerPage,n=e*u.search.resultsPerPage;return u.search.results.slice(t,n)},h=function(e){u.bookmarks.push(e),e.id===u.recipe.id&&(u.recipe.bookmarked=!0),p()},p=function(){localStorage.setItem("bookmarks",JSON.stringify(u.bookmarks))},f=async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient format! Please use the correct format!");const[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await async function(e,t){try{const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},r=await Promise.race([fetch(e,n),s(10)]),i=await r.json();if(!r.ok)throw new Error(`${i.message} (${r.status})`);return i}catch(e){throw e}}("https:forkify-api.herokuapp.com/api/v2/recipes/?key=fc27ef0f-91db-425c-9844-70a0d09dca97",n);u.recipe=l(r),h(u.recipe)}catch(e){throw e}};!function(){const e=localStorage.getItem("bookmarks");e&&(u.bookmarks=JSON.parse(e))}();var m;m=new URL(a("27Lyk").resolve("1DF7P"),import.meta.url).toString();var g,v,y,_={};e(_,"Fraction",(()=>g),(e=>g=e)),Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,i=num.split(" ");if(i[0]&&(n=i[0]),i[1]&&(r=i[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var a=n.split("/");this.numerator=a[0],this.denominator=a[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(v=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},y=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(v(this.denominator)){var e=y(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}v(this.numerator)&&(e=y(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return r.forEach((function(e){var t=i.indexOf(e);t>=0&&(n.push(e),i.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},g=Fraction;class b{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i.at(t);e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}_clear(){this._parentElement.innerHTML=""}renderMessage(e=this._message){const n=`\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${t(m)}#icon-smile"></use> \n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}renderError(e=this._errorMessage){const n=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${t(m)}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}renderSpinner(){const e=`\n      <div class="spinner">\n        <svg>\n          <use href="${t(m)}#icon-loader"></use>\n        </svg>\n      </div>\n      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}}var w=new class extends b{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--tiny");if(!n)return;const r=Number.parseInt(n.dataset.updateTo);r>0&&e(r)}))}addHandlerBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n        <figure class="recipe__fig">\n          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n          <h1 class="recipe__title">\n            <span>${this._data.title}</span>\n          </h1>\n        </figure>\n  \n        <div class="recipe__details">\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${t(m)}#icon-clock"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n            <span class="recipe__info-text">minutes</span>\n          </div>\n            \n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${t(m)}#icon-users"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n            <span class="recipe__info-text">servings</span>\n  \n            <div class="recipe__info-buttons">\n              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n                <svg>\n                  <use href="${t(m)}#icon-minus-circle"></use>\n                </svg>\n              </button>\n              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n                <svg>\n                  <use href="${t(m)}#icon-plus-circle"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n           \n          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n            <svg>\n              <use href="${t(m)}#icon-user"></use>\n            </svg>\n          </div>\n  \n          <button class="btn--round btn--bookmark">\n             <svg class="">\n              <use href="${t(m)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n            </svg>\n          </button>\n        </div>\n  \n        <div class="recipe__ingredients">\n          <h2 class="heading--2">Recipe ingredients</h2>\n            <ul class="recipe__ingredient-list">\n              ${this._data.ingredients.map((e=>this._generateMarkupIngredient(e))).join("")}</div>\n  \n          <div class="recipe__directions">\n            <h2 class="heading--2">How to cook it</h2>\n            <p class="recipe__directions-text">\n              This recipe was carefully designed and tested by\n              <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n              directions at their website.\n            </p>\n            <a\n              class="btn--small recipe__btn"\n              href="${this._data.sourceUrl}"\n              target="_blank"\n            >\n              <span>Directions</span>\n              <svg class="search__icon">\n                <use href="${t(m)}#icon-arrow-right"></use>\n              </svg>\n            </a>\n          </div>\n          `}_generateMarkupIngredient(e){return`\n      <li class="recipe__ingredient">\n        <svg class="recipe__icon">\n          <use href="${t(m)}#icon-check"></use>\n        </svg>\n        <div class="recipe__quantity">${e.quantity?new(t(_).Fraction)(e.quantity).toString():""}</div>\n        <div class="recipe__description"> \n          <span class="recipe__unit">${e.unit??=""}</span>\n        ${e.description}\n        </div>\n      </li>`}};var k=new class extends b{_parentElement=document.querySelector(".search");getQuery(){const e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}addHandlerSearch(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault(),e()}))}_clearInput(){this._parentElement.querySelector(".search__field").value=""}};var E=class extends b{_generateMarkup(){return this._data.map((e=>this._generateMarkupPreview(e))).join("")}_generateMarkupPreview(e){const n=window.location.hash.slice(1);return`\n    <li class="preview">\n        <a class="preview__link ${e.id===n?"preview__link--active":""}" href="#${e.id}">\n            <figure class="preview__fig">\n                <img src="${e.image}" alt="Test" />\n            </figure>\n            <div class="preview__data">\n              <h4 class="preview__title">${e.title}</h4>\n              <p class="preview__publisher">${e.publisher}</p>\n              <div class="preview__user-generated ${e.key?"":"hidden"}">\n                  <svg>\n                      <use href="${t(m)}#icon-user"></use>\n                   </svg>\n              </div>\n            </div>\n        </a>\n    </li>\n  `}};var x=new class extends E{_parentElement=document.querySelector(".results");_errorMessage="No recipes found. Please try again!";_message=""};var F=new class extends b{_parentElement=document.querySelector(".pagination");addHandlerClickPage(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=Number.parseInt(n.dataset.goto);e(r)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?this._createNextButton(e+1):e===t&&t>1?this._createPrevButton(e-1):e<t?`${this._createPrevButton(e-1)}${this._createNextButton(e+1)}`:""}_createPrevButton(e){return`\n      <button data-goto="${e}" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n              <use href="${t(m)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${e}</span>\n      </button>`}_createNextButton(e){return`\n      <button data-goto="${e}" class="btn--inline pagination__btn--next">\n          <span>Page ${e}</span>\n          <svg class="search__icon">\n              <use href="${t(m)}#icon-arrow-right"></use>\n          </svg>  \n      </button>`}};var L=new class extends E{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="You haven't bookmarked anything yet! ";_message="";addHandlerRender(e){window.addEventListener("load",e)}};var $=new class extends b{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_message="Recipe successfully uploaded!";constructor(){super(),this._addHandlerModel()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}reRenderForm(){this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",'\n      <div class="upload__column">\n        <h3 class="upload__heading">Recipe data</h3>\n        <label>Title</label>\n        <input value="My Recipe" required name="title" type="text" />\n        <label>URL</label>\n        <input value="myurl" required name="sourceUrl" type="text" />\n        <label>Image URL</label>\n        <input value="myimage" required name="image" type="text" />\n        <label>Publisher</label>\n        <input value="My Name" required name="publisher" type="text" />\n        <label>Prep time</label>\n        <input value="30" required name="cookingTime" type="number" />\n        <label>Servings</label>\n        <input value="1" required name="servings" type="number" />\n      </div>\n\n      <div class="upload__column">\n        <h3 class="upload__heading">Ingredients</h3>\n        <label>Ingredient 1</label>\n        <input\n          value=""\n          type="text"\n          required\n          name="ingredient-1"\n          placeholder="Format: \'Quantity,Unit,Description\'"\n        />\n        <label>Ingredient 2</label>\n        <input\n          value=""\n          type="text"\n          name="ingredient-2"\n          placeholder="Format: \'Quantity,Unit,Description\'"\n        />\n        <label>Ingredient 3</label>\n        <input\n          value=""\n          type="text"\n          name="ingredient-3"\n          placeholder="Format: \'Quantity,Unit,Description\'"\n        />\n        <label>Ingredient 4</label>\n        <input\n          type="text"\n          name="ingredient-4"\n          placeholder="Format: \'Quantity,Unit,Description\'"\n        />\n        <label>Ingredient 5</label>\n        <input\n          type="text"\n          name="ingredient-5"\n          placeholder="Format: \'Quantity,Unit,Description\'"\n        />\n        <label>Ingredient 6</label>\n        <input\n          type="text"\n          name="ingredient-6"\n          placeholder="Format: \'Quantity,Unit,Description\'"\n        />\n      </div>\n\n      <button class="btn upload__btn">\n        <svg>\n          <use href="src/img/icons.svg#icon-upload-cloud"></use>\n        </svg>\n        <span>Upload</span>\n      </button>\n    </form>\n    </div>')}_addHandlerModel(){[this._btnOpen,this._btnClose,this._overlay].forEach((e=>{e.addEventListener("click",this.toggleWindow.bind(this))}))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}};const S=async function(){try{const e=window.location.hash.slice(1);if(!e)return;w.renderSpinner(),x.update(d()),L.update(u.bookmarks),await async function(e){try{const t=await c(`https:forkify-api.herokuapp.com/api/v2/recipes/${e}?key=fc27ef0f-91db-425c-9844-70a0d09dca97`);u.recipe=l(t),u.bookmarks.some((t=>t.id===e))?u.recipe.bookmarked=!0:u.recipe.bookmarked=!1}catch(e){throw console.log(e),e}}(e),w.render(u.recipe)}catch(e){console.log(e),w.renderError()}},M=async function(){try{const e=k.getQuery();if(!e)return;x.renderSpinner(),await async function(e){try{u.search.query=e;const t=await c(`https:forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=fc27ef0f-91db-425c-9844-70a0d09dca97`);u.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})))}catch(e){throw console.log(e),e}}(e),x.render(d(1)),F.render(u.search)}catch(e){console.log(e)}},P=function(e){x.render(d(e)),F.render(u.search)},q=function(e){!function(e){u.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/u.recipe.servings})),u.recipe.servings=e}(e),w.update(u.recipe)},T=function(){!1===u.recipe.bookmarked?h(u.recipe):function(e){const t=u.bookmarks.findIndex((t=>t.id===e));u.bookmarks.splice(t,1),e===u.recipe.id&&(u.recipe.bookmarked=!1),p()}(u.recipe.id),w.update(u.recipe),L.render(u.bookmarks)},j=function(){L.render(u.bookmarks)},H=async function(e){try{$.renderSpinner(),await f(e),w.render(u.recipe),$.renderMessage(),setTimeout((()=>$.toggleWindow()),1500),setTimeout((()=>$.reRenderForm()),2e3),L.render(u.bookmarks),window.history.pushState(null,"",`#${u.recipe.id}`)}catch(e){$.renderError(e.message)}};L.addHandlerRender(j),w.addHandlerRender(S),w.addHandlerUpdateServings(q),w.addHandlerBookmark(T),k.addHandlerSearch(M),F.addHandlerClickPage(P),$.addHandlerUpload(H);
//# sourceMappingURL=index.7f33e287.js.map
