(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L6id:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){},a=u("pMnS"),i=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),s=t.Oa({encapsulation:0,styles:[[".fs[_ngcontent-%COMP%]{height:100vh;width:100%;box-sizing:border-box}@media only screen and (max-width:768px){.fs[_ngcontent-%COMP%]{height:auto}}"]],data:{}});function o(l){return t.fb(0,[(l()(),t.Qa(0,0,null,null,1,"div",[["class","fs"]],null,null,null,null,null)),t.Xa(null,0)],null,null)}var r=u("Ip0R"),c=u("6blF"),d=u("isby"),p=u("2Bdj"),f=u("67Y/");Object;var b=u("mrSG"),v=u("FFOo"),h=function(l){function n(n,u){var t=l.call(this,n,u)||this;return t.scheduler=n,t.work=u,t.pending=!1,t}return b.c(n,l),n.prototype.schedule=function(l,n){if(void 0===n&&(n=0),this.closed)return this;this.state=l;var u=this.id,t=this.scheduler;return null!=u&&(this.id=this.recycleAsyncId(t,u,n)),this.pending=!0,this.delay=n,this.id=this.id||this.requestAsyncId(t,this.id,n),this},n.prototype.requestAsyncId=function(l,n,u){return void 0===u&&(u=0),setInterval(l.flush.bind(l,this),u)},n.prototype.recycleAsyncId=function(l,n,u){if(void 0===u&&(u=0),null!==u&&this.delay===u&&!1===this.pending)return n;clearInterval(n)},n.prototype.execute=function(l,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var u=this._execute(l,n);if(u)return u;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(l,n){var u=!1,t=void 0;try{this.work(l)}catch(l){u=!0,t=!!l&&l||new Error(l)}if(u)return this.unsubscribe(),t},n.prototype._unsubscribe=function(){var l=this.id,n=this.scheduler,u=n.actions,t=u.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==t&&u.splice(t,1),null!=l&&(this.id=this.recycleAsyncId(n,l,null)),this.delay=null},n}(function(l){function n(n,u){return l.call(this)||this}return b.c(n,l),n.prototype.schedule=function(l,n){return void 0===n&&(n=0),this},n}(u("pugT").a)),m=function(){function l(n,u){void 0===u&&(u=l.now),this.SchedulerAction=n,this.now=u}return l.prototype.schedule=function(l,n,u){return void 0===n&&(n=0),new this.SchedulerAction(this,l).schedule(u,n)},l.now=function(){return Date.now()},l}(),g=new(function(l){function n(u,t){void 0===t&&(t=m.now);var e=l.call(this,u,function(){return n.delegate&&n.delegate!==e?n.delegate.now():t()})||this;return e.actions=[],e.active=!1,e.scheduled=void 0,e}return b.c(n,l),n.prototype.schedule=function(u,t,e){return void 0===t&&(t=0),n.delegate&&n.delegate!==this?n.delegate.schedule(u,t,e):l.prototype.schedule.call(this,u,t,e)},n.prototype.flush=function(l){var n=this.actions;if(this.active)n.push(l);else{var u;this.active=!0;do{if(u=l.execute(l.state,l.delay))break}while(l=n.shift());if(this.active=!1,u){for(;l=n.shift();)l.unsubscribe();throw u}}},n}(m))(h);function x(l,n){return void 0===n&&(n=g),function(u){return u.lift(new y(l,n))}}var y=function(){function l(l,n){this.dueTime=l,this.scheduler=n}return l.prototype.call=function(l,n){return n.subscribe(new Q(l,this.dueTime,this.scheduler))},l}(),Q=function(l){function n(n,u,t){var e=l.call(this,n)||this;return e.dueTime=u,e.scheduler=t,e.debouncedSubscription=null,e.lastValue=null,e.hasValue=!1,e}return b.c(n,l),n.prototype._next=function(l){this.clearDebounce(),this.lastValue=l,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(w,this.dueTime,this))},n.prototype._complete=function(){this.debouncedNext(),this.destination.complete()},n.prototype.debouncedNext=function(){if(this.clearDebounce(),this.hasValue){var l=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(l)}},n.prototype.clearDebounce=function(){var l=this.debouncedSubscription;null!==l&&(this.remove(l),l.unsubscribe(),this.debouncedSubscription=null)},n}(v.a);function w(l){l.debouncedNext()}var k=function(){function l(){this.fix_nav=!1,this.active_index=0,this.navigation=["Home","Services","About Us","Contact Us"]}return l.prototype.ngOnInit=function(){var l=this;this.setNavigationBar(),function l(n,u,t,e){return Object(p.a)(t)&&(e=t,t=void 0),e?l(n,u,t).pipe(Object(f.a)(function(l){return Object(d.a)(l)?e.apply(void 0,l):e(l)})):new c.a(function(l){!function l(n,u,t,e,a){var i;if(function(l){return l&&"function"==typeof l.addEventListener&&"function"==typeof l.removeEventListener}(n)){var s=n;n.addEventListener(u,t,a),i=function(){return s.removeEventListener(u,t,a)}}else if(function(l){return l&&"function"==typeof l.on&&"function"==typeof l.off}(n)){var o=n;n.on(u,t),i=function(){return o.off(u,t)}}else if(function(l){return l&&"function"==typeof l.addListener&&"function"==typeof l.removeListener}(n)){var r=n;n.addListener(u,t),i=function(){return r.removeListener(u,t)}}else{if(!n||!n.length)throw new TypeError("Invalid event target");for(var c=0,d=n.length;c<d;c++)l(n[c],u,t,e,a)}e.add(i)}(n,u,function(n){l.next(arguments.length>1?Array.prototype.slice.call(arguments):n)},l,t)})}(window,"scroll").pipe(x(30)).subscribe(function(n){l.setNavigationBar(),l.setActiveIndex()})},l.prototype.setActiveIndex=function(){var l=+window.pageYOffset;this.active_index=0!==l?Math.floor(l/window.innerHeight):0},l.prototype.setNavigationBar=function(){var l=window.pageYOffset;this.fix_nav=l>100},l.prototype.scrollPage=function(l){var n=l*window.innerHeight;try{window.scrollTo({left:0,top:n,behavior:"smooth"})}catch(l){window.scrollTo(0,n)}},l}(),O=t.Oa({encapsulation:0,styles:[[".navbar[_ngcontent-%COMP%]{background-image:linear-gradient(to bottom,rgba(0,0,0,.2),rgba(0,0,0,0))}.fixed-top[_ngcontent-%COMP%]{background-color:rgba(13,15,48,.9)!important;background-image:none;top:-60px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.navbar.fixed-top[_ngcontent-%COMP%]{animation:.5s forwards slideNav;-webkit-animation:.5s forwards slideNav}@-webkit-keyframes slideNav{100%{top:0}}@keyframes slideNav{100%{top:0}}.padding-top[_ngcontent-%COMP%]{height:56px}"]],data:{}});function C(l){return t.fb(0,[(l()(),t.Qa(0,0,null,null,0,"div",[["class","padding-top"]],null,null,null,null,null))],null,null)}function P(l){return t.fb(0,[(l()(),t.Qa(0,0,null,null,4,"li",[["class","nav-item"]],null,null,null,null,null)),t.Pa(1,278528,null,0,r.h,[t.u,t.v,t.l,t.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.ab(2,{active:0}),(l()(),t.Qa(3,0,null,null,1,"div",[["class","nav-link"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.scrollPage(l.context.index)&&t),t},null,null)),(l()(),t.db(4,null,["",""]))],function(l,n){l(n,1,0,"nav-item",l(n,2,0,n.context.index===n.component.active_index))},function(l,n){l(n,4,0,n.context.$implicit)})}function _(l){return t.fb(0,[(l()(),t.Ha(16777216,null,null,1,null,C)),t.Pa(1,16384,null,0,r.j,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),(l()(),t.Qa(2,0,null,null,14,"nav",[["class","navbar navbar-expand-md navbar-dark "]],null,null,null,null,null)),t.Pa(3,278528,null,0,r.h,[t.u,t.v,t.l,t.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.ab(4,{"fixed-top":0}),(l()(),t.Qa(5,0,null,null,11,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.Qa(6,0,null,null,4,"a",[["class","navbar-brand"],["href","#"]],null,null,null,null,null)),(l()(),t.Qa(7,0,null,null,3,"div",[["class","d-flex align-items-center"]],null,null,null,null,null)),(l()(),t.Qa(8,0,null,null,0,"img",[["alt",""],["height","20px"],["src","assets/logo-sm.png"]],null,null,null,null,null)),(l()(),t.Qa(9,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.db(-1,null,["\xa0Technology Solutions, Inc"])),(l()(),t.Qa(11,0,null,null,1,"button",[["aria-controls","navbarsExample04"],["aria-expanded","false"],["aria-label","Toggle navigation"],["class","navbar-toggler"],["data-target","#navbarsExample04"],["data-toggle","collapse"],["type","button"]],null,null,null,null,null)),(l()(),t.Qa(12,0,null,null,0,"span",[["class","navbar-toggler-icon"]],null,null,null,null,null)),(l()(),t.Qa(13,0,null,null,3,"div",[["class","collapse navbar-collapse"],["id","navbarsExample04"]],null,null,null,null,null)),(l()(),t.Qa(14,0,null,null,2,"ul",[["class","navbar-nav ml-auto"]],null,null,null,null,null)),(l()(),t.Ha(16777216,null,null,1,null,P)),t.Pa(16,278528,null,0,r.i,[t.Q,t.N,t.u],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,1,0,u.fix_nav),l(n,3,0,"navbar navbar-expand-md navbar-dark ",l(n,4,0,u.fix_nav)),l(n,16,0,u.navigation)},null)}var M=u("u3L/"),I=t.Oa({encapsulation:2,styles:[],data:{}});function A(l){return t.fb(0,[(l()(),t.Qa(0,0,null,null,3,"div",[["class","particles-container"]],null,null,null,null,null)),t.Pa(1,278528,null,0,r.m,[t.v,t.l,t.F],{ngStyle:[0,"ngStyle"]},null),(l()(),t.Qa(2,0,null,null,1,"canvas",[["d-particles",""]],[[4,"width","%"],[4,"height","%"]],[[null,"mousemove"],[null,"mouseleave"],[null,"click"]],function(l,n,u){var e=!0;return"mousemove"===n&&(e=!1!==t.Ya(l,3).onMouseMove(u)&&e),"mouseleave"===n&&(e=!1!==t.Ya(l,3).onMouseLeave()&&e),"click"===n&&(e=!1!==t.Ya(l,3).onClick()&&e),e},null,null)),t.Pa(3,4210688,null,0,M.b,[t.l],{params:[0,"params"]},null)],function(l,n){var u=n.component;l(n,1,0,u.style),l(n,3,0,u.params)},function(l,n){var u=n.component;l(n,2,0,u.width,u.height)})}var T=function(){function l(){this.isBlurred=!1}return l.prototype.ngOnInit=function(){},l}(),N=t.Oa({encapsulation:0,styles:[[".service-container[_ngcontent-%COMP%]{padding:2em;height:100%;transition:.5s}.service-container[_ngcontent-%COMP%]:hover{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.3)}.service-container.blurred[_ngcontent-%COMP%]{color:#dbdbdb!important;border-color:#dbdbdb!important}[_nghost-%COMP%]     .service-container.blurred .text-muted{color:#dbdbdb!important}"]],data:{}});function S(l){return t.fb(0,[(l()(),t.Qa(0,0,null,null,3,"div",[["class","service-container"]],null,null,null,null,null)),t.Pa(1,278528,null,0,r.h,[t.u,t.v,t.l,t.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.ab(2,{blurred:0}),(l()(),t.Qa(3,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],function(l,n){l(n,1,0,"service-container",l(n,2,0,n.component.isBlurred))},function(l,n){l(n,3,0,n.component.htmlContent)})}var j=function(){function l(l){this._sanitizer=l}return l.prototype.transform=function(l){if(l)return this._sanitizer.bypassSecurityTrustHtml(l)},l}(),E=u("ZYjt"),z=u("26FU"),L=function(){function l(){this._active=new z.a(null),this.active=null,this.items=[]}return l.prototype.ngOnInit=function(){var l=this;this.items=['<div>\n        <div class="multiple-icon pb-2 d-flex justify-content-center">\n            <i class="fa fa-desktop fa-3x" aria-hidden="true"></i>\n            <i class="fa fa-laptop fa-5x" aria-hidden="true"></i>\n            <i class="fa fa-tablet fa-3x" aria-hidden="true"></i>\n        </div>\n        <div class="display-5 text-center">\n          Web Design and Development\n        </div>\n        <small class="text-muted d-block text-center">\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur minus iure atque cupiditate in neque ab.\n        </small>\n      </div>','\n      <div class="service-container blurred">\n        <div>\n          <div class="d-flex pb-2 justify-content-center">\n              <i class="fa fa-cube fa-5x" aria-hidden="true"></i>\n          </div>\n          <div class="display-5 text-center">\n            Custom Application Development\n          </div>\n          <small class="text-muted d-block text-center">\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur minus iure atque cupiditate in neque ab.\n          </small>\n        </div>\n      </div>','\n        <div class="service-container">\n          <div>\n            <div class="pb-2 d-flex justify-content-center">\n                <i class="fa fa-server fa-5x" aria-hidden="true"></i>\n            </div>\n            <div class="display-5 text-center">\n                Data Center Infrastructure Management\n            </div>\n            <small class="text-muted d-block text-center">\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur minus iure atque cupiditate in neque ab.\n            </small>\n\n          </div>\n          </div>\n      ','\n      <div class="service-container">\n        <div>\n          <div class="pb-2 d-flex justify-content-center">\n              <i class="fa fa-wifi fa-5x" aria-hidden="true"></i>\n          </div>\n          <div class="display-5 text-center">\n              Network Management\n          </div>\n          <small class="text-muted d-block text-center">\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur minus iure atque cupiditate in neque ab.\n          </small>\n        </div>\n      </div>','\n      <div class="service-container">\n        <div>\n          <div class="pb-2 d-flex justify-content-center">\n              <i class="fa fa-users fa-5x" aria-hidden="true"></i>\n          </div>\n          <div class="display-5 text-center">\n              IT Consulting\n          </div>\n          <small class="text-muted d-block text-center">\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur minus iure atque cupiditate in neque ab.\n          </small>\n\n        </div>\n      </div>\n      ','\n        <div class="service-container">\n            <div>\n              <div class="pb-2 d-flex justify-content-center">\n                  <i class="fa fa-list-ol fa-5x" aria-hidden="true"></i>\n              </div>\n              <div class="display-5 text-center">\n                  Project Management\n              </div>\n              <small class="text-muted d-block text-center">\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur minus iure atque cupiditate in neque ab.\n              </small>\n            </div>\n          </div>\n      '],this._active.pipe(x(50)).subscribe(function(n){return l.active=n})},l.prototype.isActive=function(l){return null==this.active||this.active===+l},l.prototype.setActive=function(l){this._active.next(l)},l.prototype.resetActive=function(){this._active.next(null)},l}(),F=t.Oa({encapsulation:0,styles:[[""]],data:{}});function W(l){return t.fb(0,[(l()(),t.Qa(0,0,null,null,3,"div",[["class","col-md-4 col-sm-6 mb-3"]],null,null,null,null,null)),(l()(),t.Qa(1,0,null,null,2,"service-item",[],null,[[null,"mouseenter"],[null,"mouseleave"]],function(l,n,u){var t=!0,e=l.component;return"mouseenter"===n&&(t=!1!==e.setActive(l.context.index)&&t),"mouseleave"===n&&(t=!1!==e.resetActive()&&t),t},S,N)),t.Pa(2,114688,null,0,T,[],{htmlContent:[0,"htmlContent"],isBlurred:[1,"isBlurred"]},null),t.bb(3,1)],function(l,n){var u=n.component;l(n,2,0,t.eb(n,2,0,l(n,3,0,t.Ya(n.parent,0),n.context.$implicit)),!u.isActive(n.context.index))},null)}function V(l){return t.fb(0,[t.Za(0,j,[E.b]),(l()(),t.Qa(1,0,null,null,8,"div",[["class","space-for-nav h-100"]],null,null,null,null,null)),(l()(),t.Qa(2,0,null,null,7,"div",[["class","container h-100"]],null,null,null,null,null)),(l()(),t.Qa(3,0,null,null,6,"div",[["class","d-flex h-100"]],null,null,null,null,null)),(l()(),t.Qa(4,0,null,null,5,"div",[["class","m-auto py-sm"]],null,null,null,null,null)),(l()(),t.Qa(5,0,null,null,1,"h3",[["class","display-4 text-center mb-5"]],null,null,null,null,null)),(l()(),t.db(-1,null,["Here's What We Can Do For You"])),(l()(),t.Qa(7,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ha(16777216,null,null,1,null,W)),t.Pa(9,278528,null,0,r.i,[t.Q,t.N,t.u],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,9,0,n.component.items)},null)}var q=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),H=t.Oa({encapsulation:0,styles:[[".wrapper[_ngcontent-%COMP%]{overflow:hidden;position:relative}.sliding-background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;background:url(https://sttechph.github.io/portal/assets/aboutus.jpg) 0 0/contain repeat-x;height:100%;width:5076px;-webkit-animation:60s linear infinite slide;animation:60s linear infinite slide;z-index:-2}@-webkit-keyframes slide{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}100%{-webkit-transform:translate3d(-1692px,0,0);transform:translate3d(-1692px,0,0)}}@keyframes slide{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}100%{-webkit-transform:translate3d(-1692px,0,0);transform:translate3d(-1692px,0,0)}}.bl[_ngcontent-%COMP%]{font-size:60px}.bl-sub[_ngcontent-%COMP%]{font-size:18px}.bl-1[_ngcontent-%COMP%]{font-size:50px}.bl-2[_ngcontent-%COMP%]{font-size:30px}.core-val[_ngcontent-%COMP%]{box-sizing:border-box;width:200px}"]],data:{}});function R(l){return t.fb(0,[(l()(),t.Qa(0,0,null,null,34,"div",[["class","wrapper h-100  py-sm"]],null,null,null,null,null)),(l()(),t.Qa(1,0,null,null,0,"div",[["class","sliding-background"]],null,null,null,null,null)),(l()(),t.Qa(2,0,null,null,32,"div",[["class","container h-100"]],null,null,null,null,null)),(l()(),t.Qa(3,0,null,null,31,"div",[["class","d-flex h-100"]],null,null,null,null,null)),(l()(),t.Qa(4,0,null,null,30,"div",[["class","m-auto"]],null,null,null,null,null)),(l()(),t.Qa(5,0,null,null,1,"div",[["class","text-white bl roboto-bold text-center mb-1"]],null,null,null,null,null)),(l()(),t.db(-1,null,["OUR VISION"])),(l()(),t.Qa(7,0,null,null,1,"div",[["class","text-center bl-sub text-white"]],null,null,null,null,null)),(l()(),t.db(-1,null,["We are in the business of providing exemplary and integral IT solutions to institutions addressing modern \u2013 day challenges while adding value to our partners\u2019 product and services."])),(l()(),t.Qa(9,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Qa(10,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Qa(11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Qa(12,0,null,null,1,"div",[["class","text-white bl-1 roboto-bold text-center"]],null,null,null,null,null)),(l()(),t.db(-1,null,["OUR CORE VALUES"])),(l()(),t.Qa(14,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Qa(15,0,null,null,10,"div",[["class","row justify-content-around "]],null,null,null,null,null)),(l()(),t.Qa(16,0,null,null,4,"div",[["class","col-md-4 mb-3"]],null,null,null,null,null)),(l()(),t.Qa(17,0,null,null,1,"div",[["class","text-white bl-2 roboto-bold text-center mb-1"]],null,null,null,null,null)),(l()(),t.db(-1,null,["PARTNER-CENTRIC"])),(l()(),t.Qa(19,0,null,null,1,"div",[["class","text-center bl-sub text-white"]],null,null,null,null,null)),(l()(),t.db(-1,null,["Responsible. Reliable. Trustworthy. Accountable. Competent."])),(l()(),t.Qa(21,0,null,null,4,"div",[["class","col-md-4 mb-3"]],null,null,null,null,null)),(l()(),t.Qa(22,0,null,null,1,"div",[["class","text-white bl-2 roboto-bold text-center mb-1"]],null,null,null,null,null)),(l()(),t.db(-1,null,["PASSIONATE "])),(l()(),t.Qa(24,0,null,null,1,"div",[["class","text-center bl-sub text-white"]],null,null,null,null,null)),(l()(),t.db(-1,null,["We go beyond what is expected from us. We go the extra mile."])),(l()(),t.Qa(26,0,null,null,5,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),t.Qa(27,0,null,null,4,"div",[["class","col-md-6 mb-3"]],null,null,null,null,null)),(l()(),t.Qa(28,0,null,null,1,"div",[["class","text-white bl-2 roboto-bold text-center mb-1"]],null,null,null,null,null)),(l()(),t.db(-1,null,["CREATIVE AND INNOVATIVE"])),(l()(),t.Qa(30,0,null,null,1,"div",[["class","text-center bl-sub text-white"]],null,null,null,null,null)),(l()(),t.db(-1,null,["Our forward thinking allows us to think outside the box and address modern day IT challenges."])),(l()(),t.Qa(32,0,null,null,2,"p",[["class","text-center text-gold"]],null,null,null,null,null)),(l()(),t.Qa(33,0,null,null,1,"i",[],null,null,null,null,null)),(l()(),t.db(-1,null,['"Work Hard, Play Harder"']))],null,null)}var D=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),Y=t.Oa({encapsulation:0,styles:[[".address-line[_ngcontent-%COMP%]{line-height:1.5}.sample-map[_ngcontent-%COMP%]{width:100%;height:250px;-o-object-fit:cover;object-fit:cover}.form-control[_ngcontent-%COMP%]{background-color:#f4f5f7}.connect[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:25px;display:inline;margin-right:1em}"]],data:{}});function B(l){return t.fb(0,[(l()(),t.Qa(0,0,null,null,50,"div",[["class","space-for-nav h-100 h-100"]],null,null,null,null,null)),(l()(),t.Qa(1,0,null,null,49,"div",[["class","container h-100 d-flex"]],null,null,null,null,null)),(l()(),t.Qa(2,0,null,null,48,"div",[["class","m-auto py-sm"]],null,null,null,null,null)),(l()(),t.Qa(3,0,null,null,1,"h1",[["class","roboto-bold mb-3"]],null,null,null,null,null)),(l()(),t.db(-1,null,["Contact Us"])),(l()(),t.Qa(5,0,null,null,45,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Qa(6,0,null,null,22,"div",[["class","col-md-7"]],null,null,null,null,null)),(l()(),t.Qa(7,0,null,null,21,"form",[["class","d-block mb-3"]],null,null,null,null,null)),(l()(),t.Qa(8,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Qa(9,0,null,null,4,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t.Qa(10,0,null,null,3,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.Qa(11,0,null,null,1,"label",[["for","fname"]],null,null,null,null,null)),(l()(),t.db(-1,null,["First Name"])),(l()(),t.Qa(13,0,null,null,0,"input",[["class","form-control"],["id","fname"],["type","text"]],null,null,null,null,null)),(l()(),t.Qa(14,0,null,null,4,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t.Qa(15,0,null,null,3,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.Qa(16,0,null,null,1,"label",[["for","lanme"]],null,null,null,null,null)),(l()(),t.db(-1,null,["Last Name"])),(l()(),t.Qa(18,0,null,null,0,"input",[["class","form-control"],["id","lanme"],["type","text"]],null,null,null,null,null)),(l()(),t.Qa(19,0,null,null,3,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.Qa(20,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(l()(),t.db(-1,null,["Email address"])),(l()(),t.Qa(22,0,null,null,0,"input",[["aria-describedby","emailHelp"],["class","form-control"],["id","email"],["placeholder","Enter email"],["type","email"]],null,null,null,null,null)),(l()(),t.Qa(23,0,null,null,3,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.Qa(24,0,null,null,1,"label",[["for","exampleFormControlTextarea1"]],null,null,null,null,null)),(l()(),t.db(-1,null,["Message"])),(l()(),t.Qa(26,0,null,null,0,"textarea",[["class","form-control"],["id","exampleFormControlTextarea1"],["rows","3"]],null,null,null,null,null)),(l()(),t.Qa(27,0,null,null,1,"button",[["class","btn btn-st"],["type","submit"]],null,null,null,null,null)),(l()(),t.db(-1,null,["Submit"])),(l()(),t.Qa(29,0,null,null,21,"div",[["class","col-md-5"]],null,null,null,null,null)),(l()(),t.Qa(30,0,null,null,0,"img",[["alt",""],["class","sample-map"],["src","assets/sample-map.jpg"]],null,null,null,null,null)),(l()(),t.Qa(31,0,null,null,1,"p",[["class","mb-1 mt-3 roboto-bold text-red"]],null,null,null,null,null)),(l()(),t.db(-1,null,["+63 Techonology Solutions, Inc."])),(l()(),t.Qa(33,0,null,null,17,"dl",[["class","row mt-1"]],null,null,null,null,null)),(l()(),t.Qa(34,0,null,null,1,"dt",[["class","col-sm-4"]],null,null,null,null,null)),(l()(),t.db(-1,null,["Address"])),(l()(),t.Qa(36,0,null,null,6,"dd",[["class","col-sm-8"]],null,null,null,null,null)),(l()(),t.Qa(37,0,null,null,1,"div",[["class","address-line"]],null,null,null,null,null)),(l()(),t.db(-1,null,["7/F Unit-B 8Rockwell"])),(l()(),t.Qa(39,0,null,null,1,"div",[["class","address-line"]],null,null,null,null,null)),(l()(),t.db(-1,null,["Hidalgo Drive, Rockwell Center"])),(l()(),t.Qa(41,0,null,null,1,"div",[["class","address-line"]],null,null,null,null,null)),(l()(),t.db(-1,null,["Poblacion, Makati City"])),(l()(),t.Qa(43,0,null,null,1,"dt",[["class","col-sm-4"]],null,null,null,null,null)),(l()(),t.db(-1,null,["Contact"])),(l()(),t.Qa(45,0,null,null,1,"dd",[["class","col-sm-8"]],null,null,null,null,null)),(l()(),t.db(-1,null,["+632 683 7563"])),(l()(),t.Qa(47,0,null,null,1,"dt",[["class","col-sm-4"]],null,null,null,null,null)),(l()(),t.db(-1,null,["VAT REG TIN"])),(l()(),t.Qa(49,0,null,null,1,"dd",[["class","col-sm-8"]],null,null,null,null,null)),(l()(),t.db(-1,null,["009 667 000 000"]))],null,null)}var U=function(){function l(){this.myStyle={},this.myParams={},this.width=100,this.height=100}return l.prototype.ngOnInit=function(){this.myStyle={"background-color":"#0d0f30","background-image":"linear-gradient(to right,#0d0f30 ,#24243e)",position:"absolute",width:"100%",height:"100%","z-index":-1,top:0,left:0},this.myParams={particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}},l}(),G=t.Oa({encapsulation:0,styles:[[".main-landing[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.works[_ngcontent-%COMP%]{font-size:120px}.solution[_ngcontent-%COMP%]{font-size:40px}.implementing[_ngcontent-%COMP%]{font-size:18px}.landing-img[_ngcontent-%COMP%]{height:100%;width:100%;max-height:500px;-o-object-fit:contain;object-fit:contain}"]],data:{}});function Z(l){return t.fb(0,[(l()(),t.Qa(0,0,null,null,31,"wc-fs-container",[],null,null,null,o,s)),t.Pa(1,114688,null,0,i,[],null,null),(l()(),t.Qa(2,0,null,0,29,"div",[["class","main-landing h-100 w-100 "]],null,null,null,null,null)),(l()(),t.Qa(3,0,null,null,1,"st-navbar",[],null,null,null,_,O)),t.Pa(4,114688,null,0,k,[],null,null),(l()(),t.Qa(5,0,null,null,1,"particles",[],null,null,null,A,I)),t.Pa(6,49152,null,0,M.a,[],{params:[0,"params"],style:[1,"style"]},null),(l()(),t.Qa(7,0,null,null,24,"div",[["class","h-100 w-100 d-flex "]],null,null,null,null,null)),(l()(),t.Qa(8,0,null,null,23,"div",[["class","container m-auto  py-sm"]],null,null,null,null,null)),(l()(),t.Qa(9,0,null,null,22,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Qa(10,0,null,null,17,"div",[["class","col-md-6 d-flex  text-white"]],null,null,null,null,null)),(l()(),t.Qa(11,0,null,null,16,"div",[["class","my-auto"]],null,null,null,null,null)),(l()(),t.Qa(12,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),t.Qa(13,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t.db(-1,null,["Serving"])),(l()(),t.Qa(15,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.Qa(16,0,null,null,1,"span",[["class","solution text-gold roboto-bold"]],null,null,null,null,null)),(l()(),t.db(-1,null,["Solutions"])),(l()(),t.Qa(18,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.Qa(19,0,null,null,1,"span",[["class","works roboto-bold"]],null,null,null,null,null)),(l()(),t.db(-1,null,["Simply."])),(l()(),t.Qa(21,0,null,null,1,"p",[["class",""]],null,null,null,null,null)),(l()(),t.db(-1,null,["63 Techonology Solutions Inc."])),(l()(),t.Qa(23,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t.Qa(24,0,null,null,1,"button",[["class","btn btn-lg btn-red mr-3"]],null,null,null,null,null)),(l()(),t.db(-1,null,["Contact Us"])),(l()(),t.Qa(26,0,null,null,1,"button",[["class","btn btn-lg btn-outline-red"]],null,null,null,null,null)),(l()(),t.db(-1,null,["Download Brochure"])),(l()(),t.Qa(28,0,null,null,3,"div",[["class","d-none d-md-block col-md-6"]],null,null,null,null,null)),(l()(),t.Qa(29,0,null,null,2,"div",[["class","d-flex h-100 w-100"]],null,null,null,null,null)),(l()(),t.Qa(30,0,null,null,1,"div",[["class","my-auto"]],null,null,null,null,null)),(l()(),t.Qa(31,0,null,null,0,"img",[["alt",""],["class","landing-img"],["src","assets/landing-img.png"]],null,null,null,null,null)),(l()(),t.Qa(32,0,null,null,3,"wc-fs-container",[],null,null,null,o,s)),t.Pa(33,114688,null,0,i,[],null,null),(l()(),t.Qa(34,0,null,0,1,"home-services",[],null,null,null,V,F)),t.Pa(35,114688,null,0,L,[],null,null),(l()(),t.Qa(36,0,null,null,3,"wc-fs-container",[],null,null,null,o,s)),t.Pa(37,114688,null,0,i,[],null,null),(l()(),t.Qa(38,0,null,0,1,"about-us",[],null,null,null,R,H)),t.Pa(39,114688,null,0,q,[],null,null),(l()(),t.Qa(40,0,null,null,3,"wc-fs-container",[],null,null,null,o,s)),t.Pa(41,114688,null,0,i,[],null,null),(l()(),t.Qa(42,0,null,0,1,"contact-us",[],null,null,null,B,Y)),t.Pa(43,114688,null,0,D,[],null,null)],function(l,n){var u=n.component;l(n,1,0),l(n,4,0),l(n,6,0,u.myParams,u.myStyle),l(n,33,0),l(n,35,0),l(n,37,0),l(n,39,0),l(n,41,0),l(n,43,0)},null)}var J=t.Ma("app-landing",U,function(l){return t.fb(0,[(l()(),t.Qa(0,0,null,null,1,"app-landing",[],null,null,null,Z,G)),t.Pa(1,114688,null,0,U,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),X=u("9E/Q"),$=function(){},K=u("ZYCi"),ll=function(){},nl=function(){};u.d(n,"HomeModuleNgFactory",function(){return ul});var ul=t.Na(e,[],function(l){return t.Va([t.Wa(512,t.k,t.Ca,[[8,[a.a,J]],[3,t.k],t.z]),t.Wa(4608,r.l,r.k,[t.w,[2,r.s]]),t.Wa(1073742336,r.b,r.b,[]),t.Wa(1073742336,M.c,M.c,[]),t.Wa(1073742336,X.a,X.a,[]),t.Wa(1073742336,$,$,[]),t.Wa(1073742336,K.l,K.l,[[2,K.r],[2,K.k]]),t.Wa(1073742336,ll,ll,[]),t.Wa(1073742336,nl,nl,[]),t.Wa(1073742336,e,e,[]),t.Wa(1024,K.i,function(){return[[{path:"",component:U}]]},[])])})}}]);