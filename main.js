(()=>{"use strict";var e={p:""};e.p;function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=null}var o,n,r;return o=e,(n=[{key:"bindToDOM",value:function(e){if(!(e instanceof HTMLElement))throw new Error('Контейнер не является элементом "HTMLElement"');this.container=e}},{key:"drawUi",value:function(){var e=document.createElement("button");e.type="button",e.classList.add("button"),e.textContent="Показать подсказку",this.container.append(e),this.btn=e}},{key:"showPopover",value:function(){var e=document.createElement("div");e.classList.add("popover"),e.innerHTML='\n    <h4 class="popover-header">Popover title</h4>\n    <p class="popover-body">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>Alias ea possimus ratione impedit doloremque earum consectetur, dicta maxime est sit.</p>\n    <div class="popover-tip"></div>\n    ',this.container.prepend(e),e.style.top="".concat(this.btn.offsetTop-e.offsetHeight,"px"),e.style.left="".concat(this.btn.offsetLeft+this.btn.offsetWidth/2-e.offsetWidth/2,"px")}},{key:"clearPopover",value:function(){var e=this.container.querySelector(".popover");e&&e.remove()}}])&&t(o.prototype,n),r&&t(o,r),Object.defineProperty(o,"prototype",{writable:!1}),e}();function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popoverUi=t}var t,o,r;return t=e,(o=[{key:"init",value:function(){var e=this;this.popoverUi.drawUi(),this.popoverUi.btn.addEventListener("click",(function(){e.popoverUi.container.querySelector(".popover")?e.popoverUi.clearPopover():e.popoverUi.showPopover()}))}}])&&n(t.prototype,o),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),i=new o;i.bindToDOM(document.querySelector("#container")),new r(i).init()})();