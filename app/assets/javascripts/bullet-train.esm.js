import{Controller as t}from"stimulus";function e(t){var e=(t.match(/^(?:\.\/)?(.+)(?:[_-]controller\..+?)$/)||[])[1];if(e)return e.replace(/_/g,"-").replace(/\//g,"--")}function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,n(t,e)}function n(t,e){return n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(t,e)}var i=function(t){function e(){return t.apply(this,arguments)||this}return r(e,t),e.prototype.copy=function(){this.inputTarget.value=this.sourceTarget.innerText,this.inputTarget.select(),document.execCommand("copy"),this.buttonTarget.innerHTML='<i id="copied" class="fas fa-check w-4 h-4 block text-green-600"></i>',setTimeout(function(){document.getElementById("copied").innerHTML='<i class="far fa-copy w-4 h-4 block text-gray-600"></i>'},1500)},e}(t);i.targets=["source","input","button"];var o=function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var n=e.prototype;return n.toggle=function(){var t=this.isWrapperHidden?this.showEventNameValue:this.hideEventNameValue;this.isWrapperHidden&&this.showWrapper(),this.wrapperTarget.dispatchEvent(new CustomEvent(t))},n.isWrapperHidden=function(){this.wrapperTarget.classList.has(this.hiddenClass)},n.showWrapper=function(){this.wrapperTarget.classList.remove(this.hiddenClass)},n.hideWrapper=function(){this.wrapperTarget.classList.add(this.hiddenClass)},e}(t);o.targets=["wrapper"],o.classes=["hidden"],o.values={showEventName:String,hideEventName:String};var s=[[i,"clipboard_controller.js"],[o,"mobile_menu_controller.js"]].map(function(t){var r=t[0];return{identifier:e(t[1]),controllerConstructor:r}});document.addEventListener("turbo:load",function(){navigator.userAgent.toLocaleLowerCase().includes("electron")&&document.body.classList.add("electron")});export{s as controllerDefinitions};
//# sourceMappingURL=bullet-train.esm.js.map
