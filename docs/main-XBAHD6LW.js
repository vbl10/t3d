var KM=Object.defineProperty,JM=Object.defineProperties;var QM=Object.getOwnPropertyDescriptors;var sg=Object.getOwnPropertySymbols;var eE=Object.prototype.hasOwnProperty,tE=Object.prototype.propertyIsEnumerable;var og=(n,e,t)=>e in n?KM(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ge=(n,e)=>{for(var t in e||={})eE.call(e,t)&&og(n,t,e[t]);if(sg)for(var t of sg(e))tE.call(e,t)&&og(n,t,e[t]);return n},xt=(n,e)=>JM(n,QM(e));var es=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});function ag(n,e){return Object.is(n,e)}var Lt=null,qa=!1,Rd=1,ts=Symbol("SIGNAL");function it(n){let e=Lt;return Lt=n,e}function Nd(){return Lt}var Xa={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Pd(n){if(qa)throw new Error("");if(Lt===null)return;Lt.consumerOnSignalRead(n);let e=Lt.nextProducerIndex++;if(Za(Lt),e<Lt.producerNode.length&&Lt.producerNode[e]!==n&&Mo(Lt)){let t=Lt.producerNode[e];Ya(t,Lt.producerIndexOfThis[e])}Lt.producerNode[e]!==n&&(Lt.producerNode[e]=n,Lt.producerIndexOfThis[e]=Mo(Lt)?fg(n,Lt,e):0),Lt.producerLastReadVersion[e]=n.version}function cg(){Rd++}function lg(n){if(!(Mo(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Rd)){if(!n.producerMustRecompute(n)&&!Fd(n)){Ad(n);return}n.producerRecomputeValue(n),Ad(n)}}function Od(n){if(n.liveConsumerNode===void 0)return;let e=qa;qa=!0;try{for(let t of n.liveConsumerNode)t.dirty||nE(t)}finally{qa=e}}function ug(){return Lt?.consumerAllowSignalWrites!==!1}function nE(n){n.dirty=!0,Od(n),n.consumerMarkedDirty?.(n)}function Ad(n){n.dirty=!1,n.lastCleanEpoch=Rd}function Ld(n){return n&&(n.nextProducerIndex=0),it(n)}function dg(n,e){if(it(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Mo(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Ya(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Fd(n){Za(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(lg(t),i!==t.version))return!0}return!1}function kd(n){if(Za(n),Mo(n))for(let e=0;e<n.producerNode.length;e++)Ya(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function fg(n,e,t){if(hg(n),n.liveConsumerNode.length===0&&pg(n))for(let i=0;i<n.producerNode.length;i++)n.producerIndexOfThis[i]=fg(n.producerNode[i],n,i);return n.liveConsumerIndexOfThis.push(t),n.liveConsumerNode.push(e)-1}function Ya(n,e){if(hg(n),n.liveConsumerNode.length===1&&pg(n))for(let i=0;i<n.producerNode.length;i++)Ya(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];Za(r),r.producerIndexOfThis[i]=e}}function Mo(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function Za(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function hg(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function pg(n){return n.producerNode!==void 0}function iE(){throw new Error}var mg=iE;function rE(n){mg(n)}function Ud(n){mg=n}var sE=null;function Bd(n,e){ug()||rE(n),n.equal(n.value,e)||(n.value=e,oE(n))}var Vd=xt(ge({},Xa),{equal:ag,value:void 0,kind:"signal"});function oE(n){n.version++,cg(),Od(n),sE?.()}var Hd;function Eo(){return Hd}function mi(n){let e=Hd;return Hd=n,e}var Ka=Symbol("NotFound");function Oe(n){return typeof n=="function"}function ns(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Ja=ns(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function So(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Nt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Oe(i))try{i()}catch(s){e=s instanceof Ja?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{gg(s)}catch(o){e=e??[],o instanceof Ja?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Ja(e)}}add(e){var t;if(e&&e!==this)if(this.closed)gg(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&So(t,e)}remove(e){let{_finalizers:t}=this;t&&So(t,e),e instanceof n&&e._removeParent(this)}};Nt.EMPTY=(()=>{let n=new Nt;return n.closed=!0,n})();var zd=Nt.EMPTY;function Qa(n){return n instanceof Nt||n&&"closed"in n&&Oe(n.remove)&&Oe(n.add)&&Oe(n.unsubscribe)}function gg(n){Oe(n)?n():n.unsubscribe()}var Ln={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var is={setTimeout(n,e,...t){let{delegate:i}=is;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=is;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function ec(n){is.setTimeout(()=>{let{onUnhandledError:e}=Ln;if(e)e(n);else throw n})}function wo(){}var vg=Gd("C",void 0,void 0);function yg(n){return Gd("E",void 0,n)}function _g(n){return Gd("N",n,void 0)}function Gd(n,e,t){return{kind:n,value:e,error:t}}var _r=null;function rs(n){if(Ln.useDeprecatedSynchronousErrorHandling){let e=!_r;if(e&&(_r={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=_r;if(_r=null,t)throw i}}else n()}function xg(n){Ln.useDeprecatedSynchronousErrorHandling&&_r&&(_r.errorThrown=!0,_r.error=n)}var xr=class extends Nt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Qa(e)&&e.add(this)):this.destination=gE}static create(e,t,i){return new ss(e,t,i)}next(e){this.isStopped?jd(_g(e),this):this._next(e)}error(e){this.isStopped?jd(yg(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?jd(vg,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},pE=Function.prototype.bind;function Wd(n,e){return pE.call(n,e)}var $d=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){tc(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){tc(i)}else tc(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){tc(t)}}},ss=class extends xr{constructor(e,t,i){super();let r;if(Oe(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Ln.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Wd(e.next,s),error:e.error&&Wd(e.error,s),complete:e.complete&&Wd(e.complete,s)}):r=e}this.destination=new $d(r)}};function tc(n){Ln.useDeprecatedSynchronousErrorHandling?xg(n):ec(n)}function mE(n){throw n}function jd(n,e){let{onStoppedNotification:t}=Ln;t&&is.setTimeout(()=>t(n,e))}var gE={closed:!0,next:wo,error:mE,complete:wo};var os=typeof Symbol=="function"&&Symbol.observable||"@@observable";function dn(n){return n}function qd(...n){return Xd(n)}function Xd(n){return n.length===0?dn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var ht=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=yE(t)?t:new ss(t,i,r);return rs(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=Mg(i),new i((r,s)=>{let o=new ss({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[os](){return this}pipe(...t){return Xd(t)(this)}toPromise(t){return t=Mg(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function Mg(n){var e;return(e=n??Ln.Promise)!==null&&e!==void 0?e:Promise}function vE(n){return n&&Oe(n.next)&&Oe(n.error)&&Oe(n.complete)}function yE(n){return n&&n instanceof xr||vE(n)&&Qa(n)}function Yd(n){return Oe(n?.lift)}function Ke(n){return e=>{if(Yd(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Je(n,e,t,i,r){return new Zd(n,e,t,i,r)}var Zd=class extends xr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function as(){return Ke((n,e)=>{let t=null;n._refCount++;let i=Je(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var cs=class extends ht{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Yd(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Nt;let t=this.getSubject();e.add(this.source.subscribe(Je(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Nt.EMPTY)}return e}refCount(){return as()(this)}};var Eg=ns(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Bt=(()=>{class n extends ht{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new nc(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Eg}next(t){rs(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){rs(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){rs(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?zd:(this.currentObservers=null,s.push(t),new Nt(()=>{this.currentObservers=null,So(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new ht;return t.source=this,t}}return n.create=(e,t)=>new nc(e,t),n})(),nc=class extends Bt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:zd}};var Wt=class extends Bt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var sn=new ht(n=>n.complete());function Sg(n){return n&&Oe(n.schedule)}function wg(n){return n[n.length-1]}function bg(n){return Oe(wg(n))?n.pop():void 0}function Bi(n){return Sg(wg(n))?n.pop():void 0}function Cg(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Tg(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Mr(n){return this instanceof Mr?(this.v=n,this):new Mr(n)}function Dg(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(h){return function(g){return Promise.resolve(g).then(h,d)}}function a(h,g){i[h]&&(r[h]=function(y){return new Promise(function(m,p){s.push([h,y,m,p])>1||c(h,y)})},g&&(r[h]=g(r[h])))}function c(h,g){try{l(i[h](g))}catch(y){f(s[0][3],y)}}function l(h){h.value instanceof Mr?Promise.resolve(h.value.v).then(u,d):f(s[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,g){h(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function Ig(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Tg=="function"?Tg(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var ic=n=>n&&typeof n.length=="number"&&typeof n!="function";function rc(n){return Oe(n?.then)}function sc(n){return Oe(n[os])}function oc(n){return Symbol.asyncIterator&&Oe(n?.[Symbol.asyncIterator])}function ac(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function _E(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var cc=_E();function lc(n){return Oe(n?.[cc])}function uc(n){return Dg(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield Mr(t.read());if(r)return yield Mr(void 0);yield yield Mr(i)}}finally{t.releaseLock()}})}function dc(n){return Oe(n?.getReader)}function Vt(n){if(n instanceof ht)return n;if(n!=null){if(sc(n))return xE(n);if(ic(n))return ME(n);if(rc(n))return EE(n);if(oc(n))return Ag(n);if(lc(n))return SE(n);if(dc(n))return wE(n)}throw ac(n)}function xE(n){return new ht(e=>{let t=n[os]();if(Oe(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function ME(n){return new ht(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function EE(n){return new ht(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,ec)})}function SE(n){return new ht(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function Ag(n){return new ht(e=>{bE(n,e).catch(t=>e.error(t))})}function wE(n){return Ag(uc(n))}function bE(n,e){var t,i,r,s;return Cg(this,void 0,void 0,function*(){try{for(t=Ig(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function on(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function fc(n,e=0){return Ke((t,i)=>{t.subscribe(Je(i,r=>on(i,n,()=>i.next(r),e),()=>on(i,n,()=>i.complete(),e),r=>on(i,n,()=>i.error(r),e)))})}function hc(n,e=0){return Ke((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function Rg(n,e){return Vt(n).pipe(hc(e),fc(e))}function Ng(n,e){return Vt(n).pipe(hc(e),fc(e))}function Pg(n,e){return new ht(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function Og(n,e){return new ht(t=>{let i;return on(t,e,()=>{i=n[cc](),on(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Oe(i?.return)&&i.return()})}function pc(n,e){if(!n)throw new Error("Iterable cannot be null");return new ht(t=>{on(t,e,()=>{let i=n[Symbol.asyncIterator]();on(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function Lg(n,e){return pc(uc(n),e)}function Fg(n,e){if(n!=null){if(sc(n))return Rg(n,e);if(ic(n))return Pg(n,e);if(rc(n))return Ng(n,e);if(oc(n))return pc(n,e);if(lc(n))return Og(n,e);if(dc(n))return Lg(n,e)}throw ac(n)}function Pt(n,e){return e?Fg(n,e):Vt(n)}function Le(...n){let e=Bi(n);return Pt(n,e)}function ls(n,e){let t=Oe(n)?n:()=>n,i=r=>r.error(t());return new ht(e?r=>e.schedule(i,0,r):i)}function Kd(n){return!!n&&(n instanceof ht||Oe(n.lift)&&Oe(n.subscribe))}var gi=ns(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function rt(n,e){return Ke((t,i)=>{let r=0;t.subscribe(Je(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:TE}=Array;function CE(n,e){return TE(e)?n(...e):n(e)}function kg(n){return rt(e=>CE(n,e))}var{isArray:DE}=Array,{getPrototypeOf:IE,prototype:AE,keys:RE}=Object;function Ug(n){if(n.length===1){let e=n[0];if(DE(e))return{args:e,keys:null};if(NE(e)){let t=RE(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function NE(n){return n&&typeof n=="object"&&IE(n)===AE}function Bg(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function mc(...n){let e=Bi(n),t=bg(n),{args:i,keys:r}=Ug(n);if(i.length===0)return Pt([],e);let s=new ht(PE(i,e,r?o=>Bg(r,o):dn));return t?s.pipe(kg(t)):s}function PE(n,e,t=dn){return i=>{Vg(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)Vg(e,()=>{let l=Pt(n[c],e),u=!1;l.subscribe(Je(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function Vg(n,e,t){n?on(t,n,e):e()}function Hg(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},h=y=>l<i?g(y):c.push(y),g=y=>{s&&e.next(y),l++;let m=!1;Vt(t(y,u++)).subscribe(Je(e,p=>{r?.(p),s?h(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();o?on(e,o,()=>g(p)):g(p)}f()}catch(p){e.error(p)}}))};return n.subscribe(Je(e,h,()=>{d=!0,f()})),()=>{a?.()}}function Ft(n,e,t=1/0){return Oe(e)?Ft((i,r)=>rt((s,o)=>e(i,s,r,o))(Vt(n(i,r))),t):(typeof e=="number"&&(t=e),Ke((i,r)=>Hg(i,r,n,t)))}function zg(n=1/0){return Ft(dn,n)}function Gg(){return zg(1)}function us(...n){return Gg()(Pt(n,Bi(n)))}function gc(n){return new ht(e=>{Vt(n()).subscribe(e)})}function Fn(n,e){return Ke((t,i)=>{let r=0;t.subscribe(Je(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Vi(n){return Ke((e,t)=>{let i=null,r=!1,s;i=e.subscribe(Je(t,void 0,void 0,o=>{s=Vt(n(o,Vi(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function Wg(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(Je(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function ds(n,e){return Oe(e)?Ft(n,e,1):Ft(n,1)}function Hi(n){return Ke((e,t)=>{let i=!1;e.subscribe(Je(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function vi(n){return n<=0?()=>sn:Ke((e,t)=>{let i=0;e.subscribe(Je(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function vc(n=OE){return Ke((e,t)=>{let i=!1;e.subscribe(Je(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function OE(){return new gi}function bo(n){return Ke((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function yi(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Fn((r,s)=>n(r,s,i)):dn,vi(1),t?Hi(e):vc(()=>new gi))}function fs(n){return n<=0?()=>sn:Ke((e,t)=>{let i=[];e.subscribe(Je(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function Jd(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Fn((r,s)=>n(r,s,i)):dn,fs(1),t?Hi(e):vc(()=>new gi))}function Qd(n,e){return Ke(Wg(n,e,arguments.length>=2,!0))}function ef(...n){let e=Bi(n);return Ke((t,i)=>{(e?us(n,t,e):us(n,t)).subscribe(i)})}function kn(n,e){return Ke((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(Je(i,c=>{r?.unsubscribe();let l=0,u=s++;Vt(n(c,u)).subscribe(r=Je(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function tf(n){return Ke((e,t)=>{Vt(n).subscribe(Je(t,()=>t.complete(),wo)),!t.closed&&e.subscribe(t)})}function jt(n,e,t){let i=Oe(n)||e||t?{next:n,error:e,complete:t}:n;return i?Ke((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(Je(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):dn}var Se=class extends Error{code;constructor(e,t){super(FE(e,t)),this.code=e}};function LE(n){return`NG0${Math.abs(n)}`}function FE(n,e){return`${LE(n)}${e?": "+e:""}`}var Rv=Symbol("InputSignalNode#UNSET"),kE=xt(ge({},Vd),{transformFn:void 0,applyValueToInputSignal(n,e){Bd(n,e)}});function Nv(n,e){let t=Object.create(kE);t.value=n,t.transformFn=e?.transform;function i(){if(Pd(t),t.value===Rv){let r=null;throw new Se(-950,r)}return t.value}return i[ts]=t,i}function Uo(n){return{toString:n}.toString()}var yc="__parameters__";function UE(n){return function(...t){if(n){let i=n(...t);for(let r in i)this[r]=i[r]}}}function Pv(n,e,t){return Uo(()=>{let i=UE(e);function r(...s){if(this instanceof r)return i.apply(this,s),this;let o=new r(...s);return a.annotation=o,a;function a(c,l,u){let d=c.hasOwnProperty(yc)?c[yc]:Object.defineProperty(c,yc,{value:[]})[yc];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(o),c}}return r.prototype.ngMetadataName=n,r.annotationCls=r,r})}function mt(n){for(let e in n)if(n[e]===mt)return e;throw Error("Could not find renamed property on target object.")}function fn(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(fn).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function jg(n,e){return n?e?`${n} ${e}`:n:e||""}var BE=mt({__forward_ref__:mt});function Ov(n){return n.__forward_ref__=Ov,n.toString=function(){return fn(this())},n}function Tn(n){return Lv(n)?n():n}function Lv(n){return typeof n=="function"&&n.hasOwnProperty(BE)&&n.__forward_ref__===Ov}function Te(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function jc(n){return{providers:n.providers||[],imports:n.imports||[]}}function $c(n){return $g(n,kv)||$g(n,Uv)}function Fv(n){return $c(n)!==null}function $g(n,e){return n.hasOwnProperty(e)?n[e]:null}function VE(n){let e=n&&(n[kv]||n[Uv]);return e||null}function qg(n){return n&&(n.hasOwnProperty(Xg)||n.hasOwnProperty(HE))?n[Xg]:null}var kv=mt({\u0275prov:mt}),Xg=mt({\u0275inj:mt}),Uv=mt({ngInjectableDef:mt}),HE=mt({ngInjectorDef:mt}),De=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Te({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Bv(n){return n&&!!n.\u0275providers}var zE=mt({\u0275cmp:mt}),GE=mt({\u0275dir:mt}),WE=mt({\u0275pipe:mt}),jE=mt({\u0275mod:mt}),bc=mt({\u0275fac:mt}),Io=mt({__NG_ELEMENT_ID__:mt}),Yg=mt({__NG_ENV_ID__:mt});function Vv(n){return typeof n=="string"?n:n==null?"":String(n)}function $E(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():Vv(n)}function Hv(n,e){throw new Se(-200,n)}function Qf(n,e){throw new Se(-201,!1)}var ze=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(ze||{}),df;function zv(){return df}function bn(n){let e=df;return df=n,e}function Gv(n,e,t){let i=$c(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&ze.Optional)return null;if(e!==void 0)return e;Qf(n,"Injector")}var qE={},Er=qE,ff="__NG_DI_FLAG__",Tc=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=t;return this.injector.get(e,i.optional?Ka:Er,i)}},Cc="ngTempTokenPath",XE="ngTokenPath",YE=/\n/gm,ZE="\u0275",Zg="__source";function KE(n,e=ze.Default){if(Eo()===void 0)throw new Se(-203,!1);if(Eo()===null)return Gv(n,void 0,e);{let t=Eo(),i;return t instanceof Tc?i=t.injector:i=t,i.get(n,e&ze.Optional?null:void 0,e)}}function Ge(n,e=ze.Default){return(zv()||KE)(Tn(n),e)}function ie(n,e=ze.Default){return Ge(n,qc(e))}function qc(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function hf(n){let e=[];for(let t=0;t<n.length;t++){let i=Tn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Se(900,!1);let r,s=ze.Default;for(let o=0;o<i.length;o++){let a=i[o],c=JE(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(Ge(r,s))}else e.push(Ge(i))}return e}function Wv(n,e){return n[ff]=e,n.prototype[ff]=e,n}function JE(n){return n[ff]}function QE(n,e,t,i){let r=n[Cc];throw e[Zg]&&r.unshift(e[Zg]),n.message=eS(`
`+n.message,r,t,i),n[XE]=r,n[Cc]=null,n}function eS(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==ZE?n.slice(2):n;let r=fn(e);if(Array.isArray(e))r=e.map(fn).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):fn(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(YE,`
  `)}`}var tS=Wv(Pv("Optional"),8);var nS=Wv(Pv("SkipSelf"),4);function vs(n,e){let t=n.hasOwnProperty(bc);return t?n[bc]:null}function iS(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function rS(n){return n.flat(Number.POSITIVE_INFINITY)}function eh(n,e){n.forEach(t=>Array.isArray(t)?eh(t,e):e(t))}function jv(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Dc(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var ys={},Zn=[],Ao=new De(""),$v=new De("",-1),qv=new De(""),Ic=class{get(e,t=Er){if(t===Er){let i=new Error(`NullInjectorError: No provider for ${fn(e)}!`);throw i.name="NullInjectorError",i}return t}};function Xv(n,e){let t=n[jE]||null;if(!t&&e===!0)throw new Error(`Type ${fn(n)} does not have '\u0275mod' property.`);return t}function _s(n){return n[zE]||null}function sS(n){return n[GE]||null}function oS(n){return n[WE]||null}function th(n){return{\u0275providers:n}}function aS(...n){return{\u0275providers:Yv(!0,n),\u0275fromNgModule:!0}}function Yv(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return eh(e,o=>{let a=o;pf(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Zv(r,s),t}function Zv(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];nh(r,s=>{e(s,i)})}}function pf(n,e,t,i){if(n=Tn(n),!n)return!1;let r=null,s=qg(n),o=!s&&_s(n);if(!s&&!o){let c=n.ngModule;if(s=qg(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)pf(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{eh(s.imports,u=>{pf(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Zv(l,e)}if(!a){let l=vs(r)||(()=>new r);e({provide:r,useFactory:l,deps:Zn},r),e({provide:qv,useValue:r,multi:!0},r),e({provide:Ao,useValue:()=>Ge(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;nh(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function nh(n,e){for(let t of n)Bv(t)&&(t=t.\u0275providers),Array.isArray(t)?nh(t,e):e(t)}var cS=mt({provide:String,useValue:mt});function Kv(n){return n!==null&&typeof n=="object"&&cS in n}function lS(n){return!!(n&&n.useExisting)}function uS(n){return!!(n&&n.useFactory)}function mf(n){return typeof n=="function"}var Xc=new De(""),_c={},Kg={},nf;function ih(){return nf===void 0&&(nf=new Ic),nf}var Dn=class{},Ro=class extends Dn{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,vf(e,o=>this.processProvider(o)),this.records.set($v,hs(void 0,this)),r.has("environment")&&this.records.set(Dn,hs(void 0,this));let s=this.records.get(Xc);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(qv,Zn,ze.Self))}retrieve(e,t){let i=t;return this.get(e,i.optional?Ka:Er,i)}destroy(){Co(this),this._destroyed=!0;let e=it(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),it(e)}}onDestroy(e){return Co(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){Co(this);let t=mi(this),i=bn(void 0),r;try{return e()}finally{mi(t),bn(i)}}get(e,t=Er,i=ze.Default){if(Co(this),e.hasOwnProperty(Yg))return e[Yg](this);i=qc(i);let r,s=mi(this),o=bn(void 0);try{if(!(i&ze.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=gS(e)&&$c(e);l&&this.injectableDefInScope(l)?c=hs(gf(e),_c):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&ze.Self?ih():this.parent;return t=i&ze.Optional&&t===Er?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[Cc]=a[Cc]||[]).unshift(fn(e)),s)throw a;return QE(a,e,"R3InjectorError",this.source)}else throw a}finally{bn(o),mi(s)}}resolveInjectorInitializers(){let e=it(null),t=mi(this),i=bn(void 0),r;try{let s=this.get(Ao,Zn,ze.Self);for(let o of s)o()}finally{mi(t),bn(i),it(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(fn(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=Tn(e);let t=mf(e)?e:Tn(e&&e.provide),i=fS(e);if(!mf(e)&&e.multi===!0){let r=this.records.get(t);r||(r=hs(void 0,_c,!0),r.factory=()=>hf(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=it(null);try{return t.value===Kg?Hv(fn(e)):t.value===_c&&(t.value=Kg,t.value=t.factory()),typeof t.value=="object"&&t.value&&mS(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{it(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Tn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function gf(n){let e=$c(n),t=e!==null?e.factory:vs(n);if(t!==null)return t;if(n instanceof De)throw new Se(204,!1);if(n instanceof Function)return dS(n);throw new Se(204,!1)}function dS(n){if(n.length>0)throw new Se(204,!1);let t=VE(n);return t!==null?()=>t.factory(n):()=>new n}function fS(n){if(Kv(n))return hs(void 0,n.useValue);{let e=hS(n);return hs(e,_c)}}function hS(n,e,t){let i;if(mf(n)){let r=Tn(n);return vs(r)||gf(r)}else if(Kv(n))i=()=>Tn(n.useValue);else if(uS(n))i=()=>n.useFactory(...hf(n.deps||[]));else if(lS(n))i=()=>Ge(Tn(n.useExisting));else{let r=Tn(n&&(n.useClass||n.provide));if(pS(n))i=()=>new r(...hf(n.deps));else return vs(r)||gf(r)}return i}function Co(n){if(n.destroyed)throw new Se(205,!1)}function hs(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function pS(n){return!!n.deps}function mS(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function gS(n){return typeof n=="function"||typeof n=="object"&&n instanceof De}function vf(n,e){for(let t of n)Array.isArray(t)?vf(t,e):t&&Bv(t)?vf(t.\u0275providers,e):e(t)}function Vn(n,e){let t;n instanceof Ro?(Co(n),t=n):t=new Tc(n);let i,r=mi(t),s=bn(void 0);try{return e()}finally{mi(r),bn(s)}}function vS(){return zv()!==void 0||Eo()!=null}function yS(n){return typeof n=="function"}var Mi=0,je=1,Fe=2,Xt=3,Bn=4,Hn=5,Ac=6,Rc=7,pn=8,xs=9,Wi=10,cn=11,No=12,Jg=13,Bo=14,Jn=15,wr=16,ps=17,_i=18,Yc=19,Jv=20,zi=21,rf=22,Nc=23,Cn=24,sf=25,ji=26,Qv=1;var br=7,Pc=8,Ms=9,hn=10;function Gi(n){return Array.isArray(n)&&typeof n[Qv]=="object"}function Ei(n){return Array.isArray(n)&&n[Qv]===!0}function ey(n){return(n.flags&4)!==0}function ws(n){return n.componentOffset>-1}function ty(n){return(n.flags&1)===1}function Ir(n){return!!n.template}function Oc(n){return(n[Fe]&512)!==0}function Vo(n){return(n[Fe]&256)===256}var yf=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function ny(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var rh=(()=>{let n=()=>iy;return n.ngInherit=!0,n})();function iy(n){return n.type.prototype.ngOnChanges&&(n.setInput=xS),_S}function _S(){let n=sy(this),e=n?.current;if(e){let t=n.previous;if(t===ys)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function xS(n,e,t,i,r){let s=this.declaredInputs[i],o=sy(n)||MS(n,{previous:ys,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new yf(l&&l.currentValue,t,c===ys),ny(n,e,r,t)}var ry="__ngSimpleChanges__";function sy(n){return n[ry]||null}function MS(n,e){return n[ry]=e}var Qg=null;var vt=function(n,e=null,t){Qg?.(n,e,t)},ES="svg",SS="math";function Qn(n){for(;Array.isArray(n);)n=n[Mi];return n}function wS(n,e){return Qn(e[n])}function Si(n,e){return Qn(e[n.index])}function oy(n,e){return n.data[e]}function ei(n,e){let t=e[n];return Gi(t)?t:t[Mi]}function bS(n){return(n[Fe]&4)===4}function sh(n){return(n[Fe]&128)===128}function TS(n){return Ei(n[Xt])}function ev(n,e){return e==null?null:n[e]}function ay(n){n[ps]=0}function cy(n){n[Fe]&1024||(n[Fe]|=1024,sh(n)&&Kc(n))}function Zc(n){return!!(n[Fe]&9216||n[Cn]?.dirty)}function _f(n){n[Wi].changeDetectionScheduler?.notify(8),n[Fe]&64&&(n[Fe]|=1024),Zc(n)&&Kc(n)}function Kc(n){n[Wi].changeDetectionScheduler?.notify(0);let e=Tr(n);for(;e!==null&&!(e[Fe]&8192||(e[Fe]|=8192,!sh(e)));)e=Tr(e)}function ly(n,e){if(Vo(n))throw new Se(911,!1);n[zi]===null&&(n[zi]=[]),n[zi].push(e)}function CS(n,e){if(n[zi]===null)return;let t=n[zi].indexOf(e);t!==-1&&n[zi].splice(t,1)}function Tr(n){let e=n[Xt];return Ei(e)?e[Xt]:e}function oh(n){return n[Rc]??=[]}function ah(n){return n.cleanup??=[]}function DS(n,e,t,i){let r=oh(e);r.push(t),n.firstCreatePass&&ah(n).push(i,r.length-1)}var Qe={lFrame:vy(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var xf=!1;function IS(){return Qe.lFrame.elementDepthCount}function AS(){Qe.lFrame.elementDepthCount++}function RS(){Qe.lFrame.elementDepthCount--}function NS(){return Qe.bindingsEnabled}function PS(){return Qe.skipHydrationRootTNode!==null}function OS(n){return Qe.skipHydrationRootTNode===n}function LS(){Qe.skipHydrationRootTNode=null}function At(){return Qe.lFrame.lView}function qi(){return Qe.lFrame.tView}function ch(n){return Qe.lFrame.contextLView=n,n[pn]}function lh(n){return Qe.lFrame.contextLView=null,n}function ni(){let n=uy();for(;n!==null&&n.type===64;)n=n.parent;return n}function uy(){return Qe.lFrame.currentTNode}function FS(){let n=Qe.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Jc(n,e){let t=Qe.lFrame;t.currentTNode=n,t.isParent=e}function dy(){return Qe.lFrame.isParent}function kS(){Qe.lFrame.isParent=!1}function fy(){return xf}function tv(n){let e=xf;return xf=n,e}function US(){let n=Qe.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function BS(n){return Qe.lFrame.bindingIndex=n}function hy(){return Qe.lFrame.bindingIndex++}function VS(){return Qe.lFrame.inI18n}function HS(n,e){let t=Qe.lFrame;t.bindingIndex=t.bindingRootIndex=n,Mf(e)}function zS(){return Qe.lFrame.currentDirectiveIndex}function Mf(n){Qe.lFrame.currentDirectiveIndex=n}function py(){return Qe.lFrame.currentQueryIndex}function uh(n){Qe.lFrame.currentQueryIndex=n}function GS(n){let e=n[je];return e.type===2?e.declTNode:e.type===1?n[Hn]:null}function my(n,e,t){if(t&ze.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&ze.Host);)if(r=GS(s),r===null||(s=s[Bo],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=Qe.lFrame=gy();return i.currentTNode=e,i.lView=n,!0}function dh(n){let e=gy(),t=n[je];Qe.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function gy(){let n=Qe.lFrame,e=n===null?null:n.child;return e===null?vy(n):e}function vy(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function yy(){let n=Qe.lFrame;return Qe.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var _y=yy;function fh(){let n=yy();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function hh(){return Qe.lFrame.selectedIndex}function Cr(n){Qe.lFrame.selectedIndex=n}function WS(){let n=Qe.lFrame;return oy(n.tView,n.selectedIndex)}function jS(){return Qe.lFrame.currentNamespace}var xy=!0;function My(){return xy}function Ey(n){xy=n}function $S(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=iy(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function qS(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function xc(n,e,t){Sy(n,e,3,t)}function Mc(n,e,t,i){(n[Fe]&3)===t&&Sy(n,e,t,i)}function of(n,e){let t=n[Fe];(t&3)===e&&(t&=16383,t+=1,n[Fe]=t)}function Sy(n,e,t,i){let r=i!==void 0?n[ps]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[ps]+=65536),(a<s||s==-1)&&(XS(n,t,e,c),n[ps]=(n[ps]&4294901760)+c+2),c++}function nv(n,e){vt(4,n,e);let t=it(null);try{e.call(n)}finally{it(t),vt(5,n,e)}}function XS(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Fe]>>14<n[ps]>>16&&(n[Fe]&3)===e&&(n[Fe]+=16384,nv(a,s)):nv(a,s)}var gs=-1,Po=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i){this.factory=e,this.canSeeViewProviders=t,this.injectImpl=i}};function YS(n){return(n.flags&8)!==0}function ZS(n){return(n.flags&16)!==0}function KS(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];QS(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function JS(n){return n===3||n===4||n===6}function QS(n){return n.charCodeAt(0)===64}function wy(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?iv(n,t,r,null,e[++i]):iv(n,t,r,null,null))}}return n}function iv(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){r!==null&&(n[s+1]=r);return}s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),r!==null&&n.splice(s++,0,r)}function by(n){return n!==gs}function Lc(n){return n&32767}function ew(n){return n>>16}function Fc(n,e){let t=ew(n),i=e;for(;t>0;)i=i[Bo],t--;return i}var Ef=!0;function rv(n){let e=Ef;return Ef=n,e}var tw=256,Ty=tw-1,Cy=5,nw=0,Kn={};function iw(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(Io)&&(i=t[Io]),i==null&&(i=t[Io]=nw++);let r=i&Ty,s=1<<r;e.data[n+(r>>Cy)]|=s}function Dy(n,e){let t=Iy(n,e);if(t!==-1)return t;let i=e[je];i.firstCreatePass&&(n.injectorIndex=e.length,af(i.data,n),af(e,null),af(i.blueprint,null));let r=ph(n,e),s=n.injectorIndex;if(by(r)){let o=Lc(r),a=Fc(r,e),c=a[je].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function af(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Iy(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function ph(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Oy(r),i===null)return gs;if(t++,r=r[Bo],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return gs}function rw(n,e,t){iw(n,e,t)}function Ay(n,e,t){if(t&ze.Optional||n!==void 0)return n;Qf(e,"NodeInjector")}function Ry(n,e,t,i){if(t&ze.Optional&&i===void 0&&(i=null),(t&(ze.Self|ze.Host))===0){let r=n[xs],s=bn(void 0);try{return r?r.get(e,i,t&ze.Optional):Gv(e,i,t&ze.Optional)}finally{bn(s)}}return Ay(i,e,t)}function Ny(n,e,t,i=ze.Default,r){if(n!==null){if(e[Fe]&2048&&!(i&ze.Self)){let o=cw(n,e,t,i,Kn);if(o!==Kn)return o}let s=Py(n,e,t,i,Kn);if(s!==Kn)return s}return Ry(e,t,i,r)}function Py(n,e,t,i,r){let s=ow(t);if(typeof s=="function"){if(!my(e,n,i))return i&ze.Host?Ay(r,t,i):Ry(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&ze.Optional))Qf(t);else return o}finally{_y()}}else if(typeof s=="number"){let o=null,a=Iy(n,e),c=gs,l=i&ze.Host?e[Jn][Hn]:null;for((a===-1||i&ze.SkipSelf)&&(c=a===-1?ph(n,e):e[a+8],c===gs||!ov(i,!1)?a=-1:(o=e[je],a=Lc(c),e=Fc(c,e)));a!==-1;){let u=e[je];if(sv(s,a,u.data)){let d=sw(a,e,t,o,i,l);if(d!==Kn)return d}c=e[a+8],c!==gs&&ov(i,e[je].data[a+8]===l)&&sv(s,a,e)?(o=u,a=Lc(c),e=Fc(c,e)):a=-1}}return r}function sw(n,e,t,i,r,s){let o=e[je],a=o.data[n+8],c=i==null?ws(a)&&Ef:i!=o&&(a.type&3)!==0,l=r&ze.Host&&s===a,u=Ec(a,o,t,c,l);return u!==null?kc(e,o,u,a):Kn}function Ec(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let g=o[h];if(h<c&&t===g||h>=c&&g.type===t)return h}if(r){let h=o[c];if(h&&Ir(h)&&h.type===t)return c}return null}function kc(n,e,t,i){let r=n[t],s=e.data;if(r instanceof Po){let o=r;o.resolving&&Hv($E(s[t]));let a=rv(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?bn(o.injectImpl):null,u=my(n,i,ze.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&$S(t,s[t],e)}finally{l!==null&&bn(l),rv(a),o.resolving=!1,_y()}}return r}function ow(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(Io)?n[Io]:void 0;return typeof e=="number"?e>=0?e&Ty:aw:e}function sv(n,e,t){let i=1<<n;return!!(t[e+(n>>Cy)]&i)}function ov(n,e){return!(n&ze.Self)&&!(n&ze.Host&&e)}var Sr=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Ny(this._tNode,this._lView,e,qc(i),t)}};function aw(){return new Sr(ni(),At())}function mh(n){return Uo(()=>{let e=n.prototype.constructor,t=e[bc]||Sf(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[bc]||Sf(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function Sf(n){return Lv(n)?()=>{let e=Sf(Tn(n));return e&&e()}:vs(n)}function cw(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Fe]&2048&&!Oc(o);){let a=Py(s,o,t,i|ze.Self,Kn);if(a!==Kn)return a;let c=s.parent;if(!c){let l=o[Jv];if(l){let u=l.get(t,Kn,i);if(u!==Kn)return u}c=Oy(o),o=o[Bo]}s=c}return r}function Oy(n){let e=n[je],t=e.type;return t===2?e.declTNode:t===1?n[Hn]:null}function av(n,e=null,t=null,i){let r=Ly(n,e,t,i);return r.resolveInjectorInitializers(),r}function Ly(n,e=null,t=null,i,r=new Set){let s=[t||Zn,aS(n)];return i=i||(typeof n=="object"?void 0:fn(n)),new Ro(s,e||ih(),i||null,r)}var $i=class n{static THROW_IF_NOT_FOUND=Er;static NULL=new Ic;static create(e,t){if(Array.isArray(e))return av({name:""},t,e,"");{let i=e.name??"";return av({name:i},e.parent,e.providers,i)}}static \u0275prov=Te({token:n,providedIn:"any",factory:()=>Ge($v)});static __NG_ELEMENT_ID__=-1};var lw=new De("");lw.__NG_ELEMENT_ID__=n=>{let e=ni();if(e===null)throw new Se(204,!1);if(e.type&2)return e.value;if(n&ze.Optional)return null;throw new Se(204,!1)};var Fy=!1,Qc=(()=>{class n{static __NG_ELEMENT_ID__=uw;static __NG_ENV_ID__=t=>t}return n})(),wf=class extends Qc{_lView;constructor(e){super(),this._lView=e}onDestroy(e){return ly(this._lView,e),()=>CS(this._lView,e)}};function uw(){return new wf(At())}var Oo=class{},gh=new De("",{providedIn:"root",factory:()=>!1});var ky=new De(""),Uy=new De(""),bs=(()=>{class n{taskId=0;pendingTasks=new Set;get _hasPendingTasks(){return this.hasPendingTasks.value}hasPendingTasks=new Wt(!1);add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static \u0275prov=Te({token:n,providedIn:"root",factory:()=>new n})}return n})();var bf=class extends Bt{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,vS()&&(this.destroyRef=ie(Qc,{optional:!0})??void 0,this.pendingTasks=ie(bs,{optional:!0})??void 0)}emit(e){let t=it(null);try{super.next(e)}finally{it(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Nt&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{e(t),i!==void 0&&this.pendingTasks?.remove(i)})}}},an=bf;function Uc(...n){}function By(n){let e,t;function i(){n=Uc;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function cv(n){return queueMicrotask(()=>n()),()=>{n=Uc}}var vh="isAngularZone",Bc=vh+"_ID",dw=0,Ht=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new an(!1);onMicrotaskEmpty=new an(!1);onStable=new an(!1);onError=new an(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=Fy}=e;if(typeof Zone>"u")throw new Se(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,pw(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(vh)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Se(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Se(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,fw,Uc,Uc);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},fw={};function yh(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function hw(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){By(()=>{n.callbackScheduled=!1,Tf(n),n.isCheckStableRunning=!0,yh(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),Tf(n)}function pw(n){let e=()=>{hw(n)},t=dw++;n._inner=n._inner.fork({name:"angular",properties:{[vh]:!0,[Bc]:t,[Bc+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(mw(c))return i.invokeTask(s,o,a,c);try{return lv(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),uv(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return lv(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!gw(c)&&e(),uv(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,Tf(n),yh(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function Tf(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function lv(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function uv(n){n._nesting--,yh(n)}var Cf=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new an;onMicrotaskEmpty=new an;onStable=new an;onError=new an;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function mw(n){return Vy(n,"__ignore_ng_zone__")}function gw(n){return Vy(n,"__scheduler_tick__")}function Vy(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var xi=class{_console=console;handleError(e){this._console.error("ERROR",e)}},vw=new De("",{providedIn:"root",factory:()=>{let n=ie(Ht),e=ie(xi);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function dv(n,e){return Nv(n,e)}function yw(n){return Nv(Rv,n)}var Hy=(dv.required=yw,dv);function _w(){return Ts(ni(),At())}function Ts(n,e){return new Cs(Si(n,e))}var Cs=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=_w}return n})();function xw(n){return n instanceof Cs?n.nativeElement:n}function Mw(){return this._results[Symbol.iterator]()}var Df=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new Bt}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=rS(e);(this._changesDetected=!iS(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=Mw};function zy(n){return(n.flags&128)===128}var Gy=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(Gy||{}),Wy=new Map,Ew=0;function Sw(){return Ew++}function ww(n){Wy.set(n[Yc],n)}function If(n){Wy.delete(n[Yc])}var fv="__ngContext__";function el(n,e){Gi(e)?(n[fv]=e[Yc],ww(e)):n[fv]=e}function jy(n){return qy(n[No])}function $y(n){return qy(n[Bn])}function qy(n){for(;n!==null&&!Ei(n);)n=n[Bn];return n}var Af;function Xy(n){Af=n}function bw(){if(Af!==void 0)return Af;if(typeof document<"u")return document;throw new Se(210,!1)}var _h=new De("",{providedIn:"root",factory:()=>Tw}),Tw="ng",xh=new De(""),Ho=new De("",{providedIn:"platform",factory:()=>"unknown"});var Mh=new De("",{providedIn:"root",factory:()=>bw().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Cw="h",Dw="b";var Yy=!1,Iw=new De("",{providedIn:"root",factory:()=>Yy});var Zy=function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n}(Zy||{}),tl=new De(""),hv=new Set;function Eh(n){hv.has(n)||(hv.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var Aw=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Te({token:n,providedIn:"root",factory:()=>new n})}return n})();var Rw=()=>null;function Ky(n,e,t=!1){return Rw(n,e,t)}function Jy(n,e){let t=n.contentQueries;if(t!==null){let i=it(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];uh(s),a.contentQueries(2,e[o],o)}}}finally{it(i)}}}function Rf(n,e,t){uh(0);let i=it(null);try{e(n,t)}finally{it(i)}}function Qy(n,e,t){if(ey(e)){let i=it(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{it(i)}}}var ti=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(ti||{});function e_(n){return n instanceof Function?n():n}function Nw(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var t_="ng-template";function Pw(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&Nw(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Sh(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function Sh(n){return n.type===4&&n.value!==t_}function Ow(n,e,t){let i=n.type===4&&!t?t_:n.value;return e===i}function Lw(n,e,t){let i=4,r=n.attrs,s=r!==null?Uw(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Un(i)&&!Un(c))return!1;if(o&&Un(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!Ow(n,c,t)||c===""&&e.length===1){if(Un(i))return!1;o=!0}}else if(i&8){if(r===null||!Pw(n,r,c,t)){if(Un(i))return!1;o=!0}}else{let l=e[++a],u=Fw(c,r,Sh(n),t);if(u===-1){if(Un(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Un(i))return!1;o=!0}}}}return Un(i)||o}function Un(n){return(n&1)===0}function Fw(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return Bw(e,n)}function kw(n,e,t=!1){for(let i=0;i<e.length;i++)if(Lw(n,e[i],t))return!0;return!1}function Uw(n){for(let e=0;e<n.length;e++){let t=n[e];if(JS(t))return e}return n.length}function Bw(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function pv(n,e){return n?":not("+e.trim()+")":e}function Vw(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Un(o)&&(e+=pv(s,r),r=""),i=o,s=s||!Un(i);t++}return r!==""&&(e+=pv(s,r)),e}function Hw(n){return n.map(Vw).join(",")}function zw(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Un(r))break;r=s}i++}return t.length&&e.push(1,...t),e}var zo={};function Gw(n,e){return n.createText(e)}function Ww(n,e,t){n.setValue(e,t)}function n_(n,e,t){return n.createElement(e,t)}function Vc(n,e,t,i,r){n.insertBefore(e,t,i,r)}function i_(n,e,t){n.appendChild(e,t)}function mv(n,e,t,i,r){i!==null?Vc(n,e,t,i,r):i_(n,e,t)}function jw(n,e,t){n.removeChild(null,e,t)}function $w(n,e,t){n.setAttribute(e,"style",t)}function qw(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function r_(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&KS(n,e,i),r!==null&&qw(n,e,r),s!==null&&$w(n,e,s)}function s_(n,e,t,i,r,s,o,a,c,l,u){let d=ji+i,f=d+r,h=Xw(d,f),g=typeof l=="function"?l():l;return h[je]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function Xw(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:zo);return t}function Yw(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=s_(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function wh(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[Mi]=r,d[Fe]=i|4|128|8|64|1024,(l!==null||n&&n[Fe]&2048)&&(d[Fe]|=2048),ay(d),d[Xt]=d[Bo]=n,d[pn]=t,d[Wi]=o||n&&n[Wi],d[cn]=a||n&&n[cn],d[xs]=c||n&&n[xs]||null,d[Hn]=s,d[Yc]=Sw(),d[Ac]=u,d[Jv]=l,d[Jn]=e.type==2?n[Jn]:d,d}function Zw(n,e,t){let i=Si(e,n),r=Yw(t),s=n[Wi].rendererFactory,o=c_(n,wh(n,r,null,o_(t),i,e,null,s.createRenderer(i,t),null,null,null));return n[e.index]=o}function o_(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function a_(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function c_(n,e){return n[No]?n[Jg][Bn]=e:n[No]=e,n[Jg]=e,e}function nl(n=1){l_(qi(),At(),hh()+n,!1)}function l_(n,e,t,i){if(!i)if((e[Fe]&3)===3){let s=n.preOrderCheckHooks;s!==null&&xc(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Mc(e,s,0,t)}Cr(t)}var il=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(il||{});function Nf(n,e,t,i){let r=it(null);try{let[s,o,a]=n.inputs[t],c=null;(o&il.SignalBased)!==0&&(c=e[s][ts]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,s):ny(e,c,s,i)}finally{it(r)}}function u_(n,e,t,i,r){let s=hh(),o=i&2;try{Cr(-1),o&&e.length>ji&&l_(n,e,ji,!1),vt(o?2:0,r),t(i,r)}finally{Cr(s),vt(o?3:1,r)}}function d_(n,e,t){rb(n,e,t),(t.flags&64)===64&&sb(n,e,t)}function Kw(n,e,t=Si){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function Jw(n,e,t,i){let s=i.get(Iw,Yy)||t===ti.ShadowDom,o=n.selectRootElement(e,s);return Qw(o),o}function Qw(n){eb(n)}var eb=()=>null;function tb(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function nb(n,e,t,i,r,s,o,a){if(!a&&bh(e,n,t,i,r)){ws(e)&&ib(t,e.index);return}if(e.type&3){let c=Si(e,t);i=tb(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)}else e.type&12}function ib(n,e){let t=ei(e,n);t[Fe]&16||(t[Fe]|=64)}function rb(n,e,t){let i=t.directiveStart,r=t.directiveEnd;ws(t)&&Zw(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||Dy(t,e);let s=t.initialInputs;for(let o=i;o<r;o++){let a=n.data[o],c=kc(e,n,o,t);if(el(c,e),s!==null&&cb(e,o-i,c,a,t,s),Ir(a)){let l=ei(t.index,e);l[pn]=kc(e,n,o,t)}}}function sb(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=zS();try{Cr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];Mf(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&ob(c,l)}}finally{Cr(-1),Mf(o)}}function ob(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function ab(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let s=t[r];kw(e,s.selectors,!1)&&(i??=[],Ir(s)?i.unshift(s):i.push(s))}return i}function cb(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;a+=2){let c=o[a],l=o[a+1];Nf(i,t,c,l)}}function lb(n,e){let t=n[xs],i=t?t.get(xi,null):null;i&&i.handleError(e)}function bh(n,e,t,i,r){let s=n.inputs?.[i],o=n.hostDirectiveInputs?.[i],a=!1;if(o)for(let c=0;c<o.length;c+=2){let l=o[c],u=o[c+1],d=e.data[l];Nf(d,t[l],u,r),a=!0}if(s)for(let c of s){let l=t[c],u=e.data[c];Nf(u,l,i,r),a=!0}return a}function ub(n,e){let t=ei(e,n),i=t[je];db(i,t);let r=t[Mi];r!==null&&t[Ac]===null&&(t[Ac]=Ky(r,t[xs])),vt(18),Th(i,t,t[pn]),vt(19,t[pn])}function db(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function Th(n,e,t){dh(e);try{let i=n.viewQuery;i!==null&&Rf(1,i,t);let r=n.template;r!==null&&u_(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[_i]?.finishViewCreation(n),n.staticContentQueries&&Jy(n,e),n.staticViewQueries&&Rf(2,n.viewQuery,t);let s=n.components;s!==null&&fb(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Fe]&=-5,fh()}}function fb(n,e){for(let t=0;t<e.length;t++)ub(n,e[t])}function hb(n,e,t,i){let r=it(null);try{let s=e.tView,a=n[Fe]&4096?4096:16,c=wh(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[wr]=l;let u=n[_i];return u!==null&&(c[_i]=u.createEmbeddedView(s)),Th(s,c,t),c}finally{it(r)}}function gv(n,e){return!e||e.firstChild===null||zy(n)}var pb;function Ch(n,e){return pb(n,e)}var Xi=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(Xi||{});function f_(n){return(n.flags&32)===32}function ms(n,e,t,i,r){if(i!=null){let s,o=!1;Ei(i)?s=i:Gi(i)&&(o=!0,i=i[Mi]);let a=Qn(i);n===0&&t!==null?r==null?i_(e,t,a):Vc(e,t,a,r||null,!0):n===1&&t!==null?Vc(e,t,a,r||null,!0):n===2?jw(e,a,o):n===3&&e.destroyNode(a),s!=null&&Tb(e,n,s,t,r)}}function mb(n,e){h_(n,e),e[Mi]=null,e[Hn]=null}function gb(n,e,t,i,r,s){i[Mi]=r,i[Hn]=e,rl(n,i,t,1,r,s)}function h_(n,e){e[Wi].changeDetectionScheduler?.notify(9),rl(n,e,e[cn],2,null,null)}function vb(n){let e=n[No];if(!e)return cf(n[je],n);for(;e;){let t=null;if(Gi(e))t=e[No];else{let i=e[hn];i&&(t=i)}if(!t){for(;e&&!e[Bn]&&e!==n;)Gi(e)&&cf(e[je],e),e=e[Xt];e===null&&(e=n),Gi(e)&&cf(e[je],e),t=e&&e[Bn]}e=t}}function Dh(n,e){let t=n[Ms],i=t.indexOf(e);t.splice(i,1)}function p_(n,e){if(Vo(e))return;let t=e[cn];t.destroyNode&&rl(n,e,t,3,null,null),vb(e)}function cf(n,e){if(Vo(e))return;let t=it(null);try{e[Fe]&=-129,e[Fe]|=256,e[Cn]&&kd(e[Cn]),_b(n,e),yb(n,e),e[je].type===1&&e[cn].destroy();let i=e[wr];if(i!==null&&Ei(e[Xt])){i!==e[Xt]&&Dh(i,e);let r=e[_i];r!==null&&r.detachView(n)}If(e)}finally{it(t)}}function yb(n,e){let t=n.cleanup,i=e[Rc];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[Rc]=null);let r=e[zi];if(r!==null){e[zi]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[Nc];if(s!==null){e[Nc]=null;for(let o of s)o.destroy()}}function _b(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Po)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];vt(4,a,c);try{c.call(a)}finally{vt(5,a,c)}}else{vt(4,r,s);try{s.call(r)}finally{vt(5,r,s)}}}}}function xb(n,e,t){return Mb(n,e.parent,t)}function Mb(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[Mi];if(ws(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===ti.None||r===ti.Emulated)return null}return Si(i,t)}function Eb(n,e,t){return wb(n,e,t)}function Sb(n,e,t){return n.type&40?Si(n,t):null}var wb=Sb,vv;function m_(n,e,t,i){let r=xb(n,i,e),s=e[cn],o=i.parent||e[Hn],a=Eb(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)mv(s,r,t[c],a,!1);else mv(s,r,t,a,!1);vv!==void 0&&vv(s,i,e,t,r)}function Do(n,e){if(e!==null){let t=e.type;if(t&3)return Si(e,n);if(t&4)return Pf(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Do(n,i);{let r=n[e.index];return Ei(r)?Pf(-1,r):Qn(r)}}else{if(t&128)return Do(n,e.next);if(t&32)return Ch(e,n)()||Qn(n[e.index]);{let i=g_(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Tr(n[Jn]);return Do(r,i)}else return Do(n,e.next)}}}return null}function g_(n,e){if(e!==null){let i=n[Jn][Hn],r=e.projection;return i.projection[r]}return null}function Pf(n,e){let t=hn+n+1;if(t<e.length){let i=e[t],r=i[je].firstChild;if(r!==null)return Do(i,r)}return e[br]}function Ih(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(o&&e===0&&(a&&el(Qn(a),i),t.flags|=2),!f_(t))if(c&8)Ih(n,e,t.child,i,r,s,!1),ms(e,n,r,a,s);else if(c&32){let l=Ch(t,i),u;for(;u=l();)ms(e,n,r,u,s);ms(e,n,r,a,s)}else c&16?bb(n,e,i,t,r,s):ms(e,n,r,a,s);t=o?t.projectionNext:t.next}}function rl(n,e,t,i,r,s){Ih(t,i,n.firstChild,e,r,s,!1)}function bb(n,e,t,i,r,s){let o=t[Jn],c=o[Hn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];ms(e,n,r,u,s)}else{let l=c,u=o[Xt];zy(i)&&(l.flags|=128),Ih(n,e,l,u,r,s,!0)}}function Tb(n,e,t,i,r){let s=t[br],o=Qn(t);s!==o&&ms(e,n,i,s,r);for(let a=hn;a<t.length;a++){let c=t[a];rl(c[je],c,n,e,i,s)}}function Hc(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(Qn(s)),Ei(s)&&Cb(s,i);let o=t.type;if(o&8)Hc(n,e,t.child,i);else if(o&32){let a=Ch(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=g_(e,t);if(Array.isArray(a))i.push(...a);else{let c=Tr(e[Jn]);Hc(c[je],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function Cb(n,e){for(let t=hn;t<n.length;t++){let i=n[t],r=i[je].firstChild;r!==null&&Hc(i[je],i,r,e)}n[br]!==n[Mi]&&e.push(n[br])}function v_(n){if(n[sf]!==null){for(let e of n[sf])e.impl.addSequence(e);n[sf].length=0}}var y_=[];function Db(n){return n[Cn]??Ib(n)}function Ib(n){let e=y_.pop()??Object.create(Rb);return e.lView=n,e}function Ab(n){n.lView[Cn]!==n&&(n.lView=null,y_.push(n))}var Rb=xt(ge({},Xa),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{Kc(n.lView)},consumerOnSignalRead(){this.lView[Cn]=this}});function Nb(n){let e=n[Cn]??Object.create(Pb);return e.lView=n,e}var Pb=xt(ge({},Xa),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=Tr(n.lView);for(;e&&!__(e[je]);)e=Tr(e);e&&cy(e)},consumerOnSignalRead(){this.lView[Cn]=this}});function __(n){return n.type!==2}function x_(n){if(n[Nc]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[Nc])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[Fe]&8192)}}var Ob=100;function M_(n,e=!0,t=0){let r=n[Wi].rendererFactory,s=!1;s||r.begin?.();try{Lb(n,t)}catch(o){throw e&&lb(n,o),o}finally{s||r.end?.()}}function Lb(n,e){let t=fy();try{tv(!0),Of(n,e);let i=0;for(;Zc(n);){if(i===Ob)throw new Se(103,!1);i++,Of(n,1)}}finally{tv(t)}}function Fb(n,e,t,i){if(Vo(e))return;let r=e[Fe],s=!1,o=!1;dh(e);let a=!0,c=null,l=null;s||(__(n)?(l=Db(e),c=Ld(l)):Nd()===null?(a=!1,l=Nb(e),c=Ld(l)):e[Cn]&&(kd(e[Cn]),e[Cn]=null));try{ay(e),BS(n.bindingStartIndex),t!==null&&u_(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let h=n.preOrderCheckHooks;h!==null&&xc(e,h,null)}else{let h=n.preOrderHooks;h!==null&&Mc(e,h,0,null),of(e,0)}if(o||kb(e),x_(e),E_(e,0),n.contentQueries!==null&&Jy(n,e),!s)if(u){let h=n.contentCheckHooks;h!==null&&xc(e,h)}else{let h=n.contentHooks;h!==null&&Mc(e,h,1),of(e,1)}Bb(n,e);let d=n.components;d!==null&&w_(e,d,0);let f=n.viewQuery;if(f!==null&&Rf(2,f,i),!s)if(u){let h=n.viewCheckHooks;h!==null&&xc(e,h)}else{let h=n.viewHooks;h!==null&&Mc(e,h,2),of(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[rf]){for(let h of e[rf])h();e[rf]=null}s||(v_(e),e[Fe]&=-73)}catch(u){throw s||Kc(e),u}finally{l!==null&&(dg(l,c),a&&Ab(l)),fh()}}function E_(n,e){for(let t=jy(n);t!==null;t=$y(t))for(let i=hn;i<t.length;i++){let r=t[i];S_(r,e)}}function kb(n){for(let e=jy(n);e!==null;e=$y(e)){if(!(e[Fe]&2))continue;let t=e[Ms];for(let i=0;i<t.length;i++){let r=t[i];cy(r)}}}function Ub(n,e,t){vt(18);let i=ei(e,n);S_(i,t),vt(19,i[pn])}function S_(n,e){sh(n)&&Of(n,e)}function Of(n,e){let i=n[je],r=n[Fe],s=n[Cn],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Fd(s)),o||=!1,s&&(s.dirty=!1),n[Fe]&=-9217,o)Fb(i,n,i.template,n[pn]);else if(r&8192){x_(n),E_(n,1);let a=i.components;a!==null&&w_(n,a,1),v_(n)}}function w_(n,e,t){for(let i=0;i<e.length;i++)Ub(n,e[i],t)}function Bb(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Cr(~r);else{let s=r,o=t[++i],a=t[++i];HS(o,s);let c=e[s];vt(24,c),a(2,c),vt(25,c)}}}finally{Cr(-1)}}function Ah(n,e){let t=fy()?64:1088;for(n[Wi].changeDetectionScheduler?.notify(e);n;){n[Fe]|=t;let i=Tr(n);if(Oc(n)&&!i)return n;n=i}return null}function Vb(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Hb(n,e,t,i=!0){let r=e[je];if(zb(r,e,n,t),i){let o=Pf(t,n),a=e[cn],c=a.parentNode(n[br]);c!==null&&gb(r,n[Hn],a,e,c,o)}let s=e[Ac];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Lf(n,e){if(n.length<=hn)return;let t=hn+e,i=n[t];if(i){let r=i[wr];r!==null&&r!==n&&Dh(r,i),e>0&&(n[t-1][Bn]=i[Bn]);let s=Dc(n,hn+e);mb(i[je],i);let o=s[_i];o!==null&&o.detachView(s[je]),i[Xt]=null,i[Bn]=null,i[Fe]&=-129}return i}function zb(n,e,t,i){let r=hn+i,s=t.length;i>0&&(t[r-1][Bn]=e),i<s-hn?(e[Bn]=t[r],jv(t,hn+i,e)):(t.push(e),e[Bn]=null),e[Xt]=t;let o=e[wr];o!==null&&t!==o&&b_(o,e);let a=e[_i];a!==null&&a.insertView(n),_f(e),e[Fe]|=128}function b_(n,e){let t=n[Ms],i=e[Xt];if(Gi(i))n[Fe]|=2;else{let r=i[Xt][Jn];e[Jn]!==r&&(n[Fe]|=2)}t===null?n[Ms]=[e]:t.push(e)}var Lo=class{_lView;_cdRefInjectingView;notifyErrorHandler;_appRef=null;_attachedToViewContainer=!1;get rootNodes(){let e=this._lView,t=e[je];return Hc(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i}get context(){return this._lView[pn]}set context(e){this._lView[pn]=e}get destroyed(){return Vo(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Xt];if(Ei(e)){let t=e[Pc],i=t?t.indexOf(this):-1;i>-1&&(Lf(e,i),Dc(t,i))}this._attachedToViewContainer=!1}p_(this._lView[je],this._lView)}onDestroy(e){ly(this._lView,e)}markForCheck(){Ah(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Fe]&=-129}reattach(){_f(this._lView),this._lView[Fe]|=128}detectChanges(){this._lView[Fe]|=1024,M_(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Se(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=Oc(this._lView),t=this._lView[wr];t!==null&&!e&&Dh(t,this._lView),h_(this._lView[je],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Se(902,!1);this._appRef=e;let t=Oc(this._lView),i=this._lView[wr];i!==null&&!t&&b_(i,this._lView),_f(this._lView)}};var Fo=(()=>{class n{static __NG_ELEMENT_ID__=jb}return n})(),Gb=Fo,Wb=class extends Gb{_declarationLView;_declarationTContainer;elementRef;constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=hb(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:i});return new Lo(r)}};function jb(){return Rh(ni(),At())}function Rh(n,e){return n.type&4?new Wb(e,n,Ts(n,e)):null}function T_(n,e,t,i,r){let s=n.data[e];if(s===null)s=$b(n,e,t,i,r),VS()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=FS();s.injectorIndex=o===null?-1:o.injectorIndex}return Jc(s,!0),s}function $b(n,e,t,i,r){let s=uy(),o=dy(),a=o?s:s&&s.parent,c=n.data[e]=Xb(n,a,t,e,i,r);return qb(n,c,s,o),c}function qb(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function Xb(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return PS()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var bU=new RegExp(`^(\\d+)*(${Dw}|${Cw})*(.*)`);var Yb=()=>null;function yv(n,e){return Yb(n,e)}var Zb=class{},C_=class{},Ff=class{resolveComponentFactory(e){throw Error(`No component factory found for ${fn(e)}.`)}},sl=class{static NULL=new Ff},Es=class{},D_=(()=>{class n{destroyNode=null;static __NG_ELEMENT_ID__=()=>Kb()}return n})();function Kb(){let n=At(),e=ni(),t=ei(e.index,n);return(Gi(t)?t:n)[cn]}var Jb=(()=>{class n{static \u0275prov=Te({token:n,providedIn:"root",factory:()=>null})}return n})();var lf={},kf=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=qc(i);let r=this.injector.get(e,lf,i);return r!==lf||t===lf?r:this.parentInjector.get(e,t,i)}};function _v(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=jg(r,a);else if(s==2){let c=a,l=e[++o];i=jg(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function Ar(n,e=ze.Default){let t=At();if(t===null)return Ge(n,e);let i=ni();return Ny(i,t,Tn(n),e)}function Qb(n,e,t,i,r){let s=i===null?null:{"":-1},o=r(n,t);if(o!==null){let a,c=null,l=null,u=tT(o);u===null?a=o:[a,c,l]=u,rT(n,e,t,a,s,c,l)}s!==null&&i!==null&&eT(t,i,s)}function eT(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Se(-301,!1);i.push(e[r],s)}}function tT(n){let e=null,t=!1;for(let o=0;o<n.length;o++){let a=n[o];if(o===0&&Ir(a)&&(e=a),a.findHostDirectiveDefs!==null){t=!0;break}}if(!t)return null;let i=null,r=null,s=null;for(let o of n)o.findHostDirectiveDefs!==null&&(i??=[],r??=new Map,s??=new Map,nT(o,i,s,r)),o===e&&(i??=[],i.push(o));return i!==null?(i.push(...e===null?n:n.slice(1)),[i,r,s]):null}function nT(n,e,t,i){let r=e.length;n.findHostDirectiveDefs(n,e,i),t.set(n,[r,e.length-1])}function iT(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function rT(n,e,t,i,r,s,o){let a=i.length,c=!1;for(let f=0;f<a;f++){let h=i[f];!c&&Ir(h)&&(c=!0,iT(n,t,f)),rw(Dy(t,e),n,h.type)}uT(t,n.data.length,a);for(let f=0;f<a;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,d=a_(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let f=0;f<a;f++){let h=i[f];if(t.mergedAttrs=wy(t.mergedAttrs,h.hostAttrs),oT(n,t,e,d,h),lT(d,h,r),o!==null&&o.has(h)){let[y,m]=o.get(h);t.directiveToIndex.set(h.type,[d,y+t.directiveStart,m+t.directiveStart])}else(s===null||!s.has(h))&&t.directiveToIndex.set(h.type,d);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let g=h.type.prototype;!l&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(g.ngOnChanges||g.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}sT(n,t,s)}function sT(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))xv(0,e,r,i),xv(1,e,r,i),Ev(e,i,!1);else{let s=t.get(r);Mv(0,e,s,i),Mv(1,e,s,i),Ev(e,i,!0)}}}function xv(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o;n===0?o=e.inputs??={}:o=e.outputs??={},o[s]??=[],o[s].push(i),I_(e,s)}}function Mv(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o=r[s],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[o]??=[],a[o].push(i,s),I_(e,o)}}function I_(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function Ev(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:s}=n;if(i===null||!t&&r===null||t&&s===null||Sh(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let o=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){o??=[],o.push(c,i[a+1]);break}}else if(t&&s.hasOwnProperty(c)){let l=s[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){o??=[],o.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(o)}function oT(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=vs(r.type,!0)),o=new Po(s,Ir(r),Ar);n.blueprint[i]=o,t[i]=o,aT(n,e,i,a_(n,t,r.hostVars,zo),r)}function aT(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;cT(o)!=a&&o.push(a),o.push(t,i,s)}}function cT(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function lT(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Ir(e)&&(t[""]=n)}}function uT(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function A_(n,e,t,i,r,s,o,a){let c=e.consts,l=ev(c,o),u=T_(e,n,2,i,l);return s&&Qb(e,t,u,ev(c,a),r),u.mergedAttrs=wy(u.mergedAttrs,u.attrs),u.attrs!==null&&_v(u,u.attrs,!1),u.mergedAttrs!==null&&_v(u,u.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,u),u}function R_(n,e){qS(n,e),ey(e)&&n.queries.elementEnd(e)}var zc=class extends sl{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=_s(e);return new ko(t,this.ngModule)}};function dT(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],s={propName:t,templateName:e,isSignal:(i&il.SignalBased)!==0};return r&&(s.transform=r),s})}function fT(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function hT(n,e,t){let i=e instanceof Dn?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new kf(t,i):t}function pT(n){let e=n.get(Es,null);if(e===null)throw new Se(407,!1);let t=n.get(Jb,null),i=n.get(Oo,null);return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i}}function mT(n,e){let t=(n.selectors[0][0]||"div").toLowerCase();return n_(e,t,t==="svg"?ES:t==="math"?SS:null)}var ko=class extends C_{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=dT(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=fT(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=Hw(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r){vt(22);let s=it(null);try{let o=this.componentDef,a=i?["ng-version","19.2.7"]:zw(this.componentDef.selectors[0]),c=s_(0,null,null,1,0,null,null,null,null,[a],null),l=hT(o,r||this.ngModule,e),u=pT(l),d=u.rendererFactory.createRenderer(null,o),f=i?Jw(d,i,o.encapsulation,l):mT(o,d),h=wh(null,c,null,512|o_(o),null,null,u,d,l,null,Ky(f,l,!0));h[ji]=f,dh(h);let g=null;try{let y=A_(ji,c,h,"#host",()=>[this.componentDef],!0,0);f&&(r_(d,f,y),el(f,h)),d_(c,h,y),Qy(c,y,h),R_(c,y),t!==void 0&&gT(y,this.ngContentSelectors,t),g=ei(y.index,h),h[pn]=g[pn],Th(c,h,null)}catch(y){throw g!==null&&If(g),If(h),y}finally{vt(23),fh()}return new Uf(this.componentType,h)}finally{it(s)}}},Uf=class extends Zb{_rootLView;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t){super(),this._rootLView=t,this._tNode=oy(t[je],ji),this.location=Ts(this._tNode,t),this.instance=ei(this._tNode.index,t)[pn],this.hostView=this.changeDetectorRef=new Lo(t,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,s=bh(i,r[je],r,e,t);this.previousInputValues.set(e,t);let o=ei(i.index,r);Ah(o,1)}get injector(){return new Sr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function gT(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}var Ds=(()=>{class n{static __NG_ELEMENT_ID__=vT}return n})();function vT(){let n=ni();return P_(n,At())}var yT=Ds,N_=class extends yT{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Ts(this._hostTNode,this._hostLView)}get injector(){return new Sr(this._hostTNode,this._hostLView)}get parentInjector(){let e=ph(this._hostTNode,this._hostLView);if(by(e)){let t=Fc(e,this._hostLView),i=Lc(e),r=t[je].data[i+8];return new Sr(r,t)}else return new Sr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=Sv(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-hn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=yv(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,gv(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!yS(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new ko(_s(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let y=(o?l:this.parentInjector).get(Dn,null);y&&(s=y)}let u=_s(c.componentType??{}),d=yv(this._lContainer,u?.id??null),f=d?.firstChild??null,h=c.create(l,r,f,s);return this.insertImpl(h.hostView,a,gv(this._hostTNode,d)),h}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(TS(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Xt],l=new N_(c,c[Hn],c[Xt]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return Hb(o,r,s,i),e.attachToViewContainerRef(),jv(uf(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=Sv(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Lf(this._lContainer,t);i&&(Dc(uf(this._lContainer),t),p_(i[je],i))}detach(e){let t=this._adjustIndex(e,-1),i=Lf(this._lContainer,t);return i&&Dc(uf(this._lContainer),t)!=null?new Lo(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function Sv(n){return n[Pc]}function uf(n){return n[Pc]||(n[Pc]=[])}function P_(n,e){let t,i=e[n.index];return Ei(i)?t=i:(t=Vb(i,e,null,n),e[n.index]=t,c_(e,t)),xT(t,e,n,i),new N_(t,n,e)}function _T(n,e){let t=n[cn],i=t.createComment(""),r=Si(e,n),s=t.parentNode(r);return Vc(t,s,i,t.nextSibling(r),!1),i}var xT=MT;function MT(n,e,t,i){if(n[br])return;let r;t.type&8?r=Qn(i):r=_T(e,t),n[br]=r}var Bf=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Vf=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)Nh(e,t).matches!==null&&this.queries[t].setDirty()}},Hf=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=IT(e):this.predicate=e}},zf=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Gf=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,ET(t,s)),this.matchTNodeWithReadOption(e,t,Ec(t,e,s,!1,!1))}else i===Fo?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,Ec(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Cs||r===Ds||r===Fo&&t.type&4)this.addMatch(t.index,-2);else{let s=Ec(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function ET(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function ST(n,e){return n.type&11?Ts(n,e):n.type&4?Rh(n,e):null}function wT(n,e,t,i){return t===-1?ST(e,n):t===-2?bT(n,e,i):kc(n,n[je],t,e)}function bT(n,e,t){if(t===Cs)return Ts(e,n);if(t===Fo)return Rh(e,n);if(t===Ds)return P_(e,n)}function O_(n,e,t,i){let r=e[_i].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(wT(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Wf(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=O_(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=hn;d<u.length;d++){let f=u[d];f[wr]===f[Xt]&&Wf(f[je],f,l,i)}if(u[Ms]!==null){let d=u[Ms];for(let f=0;f<d.length;f++){let h=d[f];Wf(h[je],h,l,i)}}}}}return i}function TT(n,e){return n[_i].queries[e].queryList}function CT(n,e,t){let i=new Df((t&4)===4);return DS(n,e,i,i.destroy),(e[_i]??=new Vf).queries.push(new Bf(i))-1}function DT(n,e,t){let i=qi();return i.firstCreatePass&&(AT(i,new Hf(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),CT(i,At(),e)}function IT(n){return n.split(",").map(e=>e.trim())}function AT(n,e,t){n.queries===null&&(n.queries=new zf),n.queries.track(new Gf(e,t))}function Nh(n,e){return n.queries.getByIndex(e)}function RT(n,e){let t=n[je],i=Nh(t,e);return i.crossesNgTemplate?Wf(t,n,e,[]):O_(t,n,i,e)}var Ss=class{},Ph=class{};var jf=class extends Ss{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new zc(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=Xv(e);this._bootstrapComponents=e_(s.bootstrap),this._r3Injector=Ly(e,t,[{provide:Ss,useValue:this},{provide:sl,useValue:this.componentFactoryResolver},...i],fn(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},$f=class extends Ph{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new jf(this.moduleType,e,[])}};var Gc=class extends Ss{injector;componentFactoryResolver=new zc(this);instance=null;constructor(e){super();let t=new Ro([...e.providers,{provide:Ss,useValue:this},{provide:sl,useValue:this.componentFactoryResolver}],e.parent||ih(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function ol(n,e,t=null){return new Gc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var NT=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=Yv(!1,t.type),r=i.length>0?ol([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Te({token:n,providedIn:"environment",factory:()=>new n(Ge(Dn))})}return n})();function Is(n){return Uo(()=>{let e=L_(n),t=xt(ge({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Gy.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(NT).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||ti.Emulated,styles:n.styles||Zn,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&Eh("NgStandalone"),F_(t);let i=n.dependencies;return t.directiveDefs=wv(i,!1),t.pipeDefs=wv(i,!0),t.id=kT(t),t})}function PT(n){return _s(n)||sS(n)}function OT(n){return n!==null}function al(n){return Uo(()=>({type:n.type,bootstrap:n.bootstrap||Zn,declarations:n.declarations||Zn,imports:n.imports||Zn,exports:n.exports||Zn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function LT(n,e){if(n==null)return ys;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a,c;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s,c=r[3]||null):(s=r,o=r,a=il.None,c=null),t[s]=[i,a,c],e[s]=o}return t}function FT(n){if(n==null)return ys;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function cl(n){return Uo(()=>{let e=L_(n);return F_(e),e})}function L_(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||ys,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||Zn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:LT(n.inputs,e),outputs:FT(n.outputs),debugInfo:null}}function F_(n){n.features?.forEach(e=>e(n))}function wv(n,e){if(!n)return null;let t=e?oS:PT;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(OT)}function kT(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function k_(n){return n!==null&&(typeof n=="function"||typeof n=="object")}function UT(n,e,t){return n[e]=t}function Oh(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}var U_=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var B_=new De("");var BT=(()=>{class n{static \u0275prov=Te({token:n,providedIn:"root",factory:()=>new qf})}return n})(),qf=class{queuedEffectCount=0;queues=new Map;schedule(e){this.enqueue(e)}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),this.queuedEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||(this.queuedEffectCount++,i.add(e))}flush(){for(;this.queuedEffectCount>0;)for(let[e,t]of this.queues)e===null?this.flushQueue(t):e.run(()=>this.flushQueue(t))}flushQueue(e){for(let t of e)e.delete(t),this.queuedEffectCount--,t.run()}};function Go(n){return!!n&&typeof n.then=="function"}function V_(n){return!!n&&typeof n.subscribe=="function"}var VT=new De("");var H_=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=ie(VT,{optional:!0})??[];injector=ie($i);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=Vn(this.injector,r);if(Go(s))t.push(s);else if(V_(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Lh=new De("");function HT(){Ud(()=>{throw new Se(600,!1)})}function zT(n){return n.isBoundToModule}var GT=10;var Dr=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=ie(vw);afterRenderManager=ie(Aw);zonelessEnabled=ie(gh);rootEffectScheduler=ie(BT);dirtyFlags=0;tracingSnapshot=null;externalTestViews=new Set;afterTick=new Bt;get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];isStable=ie(bs).hasPendingTasks.pipe(rt(t=>!t));constructor(){ie(tl,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=ie(Dn);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=$i.NULL){vt(10);let s=t instanceof C_;if(!this._injector.get(H_).done){let h="";throw new Se(405,h)}let a;s?a=t:a=this._injector.get(sl).resolveComponentFactory(t),this.componentTypes.push(a.componentType);let c=zT(a)?void 0:this._injector.get(Ss),l=i||a.selector,u=a.create(r,[],l,c),d=u.location.nativeElement,f=u.injector.get(B_,null);return f?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),Sc(this.components,u),f?.unregisterApplication(d)}),this._loadComponent(u),vt(11,u),u}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){vt(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(Zy.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new Se(101,!1);let t=it(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,it(t),this.afterTick.next(),vt(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Es,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<GT;)vt(14),this.synchronizeOnce(),vt(15)}synchronizeOnce(){if(this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush()),this.dirtyFlags&7){let t=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i,notifyErrorHandler:r}of this.allViews)WT(i,r,t,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}else this._rendererFactory?.begin?.(),this._rendererFactory?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Zc(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Sc(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(Lh,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Sc(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Se(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Sc(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function WT(n,e,t,i){if(!t&&!Zc(n))return;M_(n,e,t&&!i?0:1)}function jT(n,e,t,i){return Oh(n,hy(),t)?e+Vv(t)+i:zo}function Fh(n,e,t){let i=At(),r=hy();if(Oh(i,r,e)){let s=qi(),o=WS();nb(s,o,i,n,e,i[cn],t,!1)}return Fh}function bv(n,e,t,i,r){bh(e,n,t,r?"class":"style",i)}function zn(n,e,t,i){let r=At(),s=qi(),o=ji+n,a=r[cn],c=s.firstCreatePass?A_(o,s,r,e,ab,NS(),t,i):s.data[o],l=$T(s,r,c,a,e,n);r[o]=l;let u=ty(c);return Jc(c,!0),r_(a,l,c),!f_(c)&&My()&&m_(s,r,l,c),(IS()===0||u)&&el(l,r),AS(),u&&(d_(s,r,c),Qy(s,c,r)),i!==null&&Kw(r,c),zn}function Gn(){let n=ni();dy()?kS():(n=n.parent,Jc(n,!1));let e=n;OS(e)&&LS(),RS();let t=qi();return t.firstCreatePass&&R_(t,e),e.classesWithoutHost!=null&&YS(e)&&bv(t,e,At(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&ZS(e)&&bv(t,e,At(),e.stylesWithoutHost,!1),Gn}function Rr(n,e,t,i){return zn(n,e,t,i),Gn(),Rr}var $T=(n,e,t,i,r,s)=>(Ey(!0),n_(i,r,jS()));function z_(){return At()}var Wc="en-US";var qT=Wc;function XT(n){typeof n=="string"&&(qT=n.toLowerCase().replace(/_/g,"-"))}function Tv(n,e,t){return function i(r){if(r===Function)return t;let s=ws(n)?ei(n.index,e):e;Ah(s,5);let o=e[pn],a=Cv(e,o,t,r),c=i.__ngNextListenerFn__;for(;c;)a=Cv(e,o,c,r)&&a,c=c.__ngNextListenerFn__;return a}}function Cv(n,e,t,i){let r=it(null);try{return vt(6,e,t),t(i)!==!1}catch(s){return YT(n,s),!1}finally{vt(7,e,t),it(r)}}function YT(n,e){let t=n[xs],i=t?t.get(xi,null):null;i&&i.handleError(e)}function Dv(n,e,t,i,r,s){let o=e[t],a=e[je],l=a.data[t].outputs[i],u=o[l],d=a.firstCreatePass?ah(a):null,f=oh(e),h=u.subscribe(s),g=f.length;f.push(s,h),d&&d.push(r,n.index,g,-(g+1))}var ZT=(n,e,t)=>{};function ll(n,e,t,i){let r=At(),s=qi(),o=ni();return JT(s,r,r[cn],o,n,e,i),ll}function KT(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[Rc],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function JT(n,e,t,i,r,s,o){let a=ty(i),l=n.firstCreatePass?ah(n):null,u=oh(e),d=!0;if(i.type&3||o){let f=Si(i,e),h=o?o(f):f,g=u.length,y=o?p=>o(Qn(p[i.index])):i.index,m=null;if(!o&&a&&(m=KT(n,e,r,i.index)),m!==null){let p=m.__ngLastListenerFn__||m;p.__ngNextListenerFn__=s,m.__ngLastListenerFn__=s,d=!1}else{s=Tv(i,e,s),ZT(h,r,s);let p=t.listen(h,r,s);u.push(s,p),l&&l.push(r,y,g,g+1)}}else s=Tv(i,e,s);if(d){let f=i.outputs?.[r],h=i.hostDirectiveOutputs?.[r];if(h&&h.length)for(let g=0;g<h.length;g+=2){let y=h[g],m=h[g+1];Dv(i,e,y,m,r,s)}if(f&&f.length)for(let g of f)Dv(i,e,g,r,r,s)}}function G_(n,e,t){DT(n,e,t)}function W_(n){let e=At(),t=qi(),i=py();uh(i+1);let r=Nh(t,i);if(n.dirty&&bS(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=RT(e,i);n.reset(s,xw),n.notifyOnChanges()}return!0}return!1}function j_(){return TT(At(),py())}function Yi(n,e=""){let t=At(),i=qi(),r=n+ji,s=i.firstCreatePass?T_(i,r,1,e,null):i.data[r],o=QT(i,t,s,e,n);t[r]=o,My()&&m_(i,t,o,s),Jc(s,!1)}var QT=(n,e,t,i,r)=>(Ey(!0),Gw(e[cn],i));function ul(n,e,t){let i=At(),r=jT(i,n,e,t);return r!==zo&&eC(i,hh(),r),ul}function eC(n,e,t){let i=wS(e,n);Ww(n[cn],i,t)}function $_(n,e,t,i){return nC(At(),US(),n,e,t,i)}function tC(n,e){let t=n[e];return t===zo?void 0:t}function nC(n,e,t,i,r,s){let o=e+t;return Oh(n,o,r)?UT(n,o+1,s?i.call(s,r):i(r)):tC(n,o+1)}var Xf=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},q_=(()=>{class n{compileModuleSync(t){return new $f(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=Xv(t),s=e_(r.declarations).reduce((o,a)=>{let c=_s(a);return c&&o.push(new ko(c)),o},[]);return new Xf(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var iC=(()=>{class n{zone=ie(Ht);changeDetectionScheduler=ie(Oo);applicationRef=ie(Dr);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),rC=new De("",{factory:()=>!1});function X_({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new Ht(xt(ge({},Z_()),{scheduleInRootZone:t})),[{provide:Ht,useFactory:n},{provide:Ao,multi:!0,useFactory:()=>{let i=ie(iC,{optional:!0});return()=>i.initialize()}},{provide:Ao,multi:!0,useFactory:()=>{let i=ie(sC);return()=>{i.initialize()}}},e===!0?{provide:ky,useValue:!0}:[],{provide:Uy,useValue:t??Fy}]}function Y_(n){let e=n?.ignoreChangesOutsideZone,t=n?.scheduleInRootZone,i=X_({ngZoneFactory:()=>{let r=Z_(n);return r.scheduleInRootZone=t,r.shouldCoalesceEventChangeDetection&&Eh("NgZone_CoalesceEvent"),new Ht(r)},ignoreChangesOutsideZone:e,scheduleInRootZone:t});return th([{provide:rC,useValue:!0},{provide:gh,useValue:!1},i])}function Z_(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var sC=(()=>{class n{subscription=new Nt;initialized=!1;zone=ie(Ht);pendingTasks=ie(bs);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Ht.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Ht.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var oC=(()=>{class n{appRef=ie(Dr);taskService=ie(bs);ngZone=ie(Ht);zonelessEnabled=ie(gh);tracing=ie(tl,{optional:!0});disableScheduling=ie(ky,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Nt;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Bc):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(ie(Uy,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof Cf||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{this.appRef.dirtyFlags|=16,i=!0;break}case 13:{this.appRef.dirtyFlags|=2,i=!0;break}case 11:{i=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?cv:By;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Bc+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,cv(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function aC(){return typeof $localize<"u"&&$localize.locale||Wc}var kh=new De("",{providedIn:"root",factory:()=>ie(kh,ze.Optional|ze.SkipSelf)||aC()});var Yf=new De(""),cC=new De("");function To(n){return!n.moduleRef}function lC(n){let e=To(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Ht);return t.run(()=>{To(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(xi,null),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:s=>{i.handleError(s)}})}),To(n)){let s=()=>e.destroy(),o=n.platformInjector.get(Yf);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(Yf);o.add(s),n.moduleRef.onDestroy(()=>{Sc(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return dC(i,t,()=>{let s=e.get(H_);return s.runInitializers(),s.donePromise.then(()=>{let o=e.get(kh,Wc);if(XT(o||Wc),!e.get(cC,!0))return To(n)?e.get(Dr):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(To(n)){let c=e.get(Dr);return n.rootComponent!==void 0&&c.bootstrap(n.rootComponent),c}else return uC(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function uC(n,e){let t=n.injector.get(Dr);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new Se(-403,!1);e.push(n)}function dC(n,e,t){try{let i=t();return Go(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var wc=null;function fC(n=[],e){return $i.create({name:e,providers:[{provide:Xc,useValue:"platform"},{provide:Yf,useValue:new Set([()=>wc=null])},...n]})}function hC(n=[]){if(wc)return wc;let e=fC(n);return wc=e,HT(),pC(e),e}function pC(n){let e=n.get(xh,null);Vn(n,()=>{e?.forEach(t=>t())})}var Uh=(()=>{class n{static __NG_ELEMENT_ID__=mC}return n})();function mC(n){return gC(ni(),At(),(n&16)===16)}function gC(n,e,t){if(ws(n)&&!t){let i=ei(n.index,e);return new Lo(i,i)}else if(n.type&175){let i=e[Jn];return new Lo(i,e)}return null}var Zf=class{constructor(){}supports(e){return e instanceof Map||k_(e)}create(){return new Kf}},Kf=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;_removalsTail=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(e){let t;for(t=this._mapHead;t!==null;t=t._next)e(t)}forEachPreviousItem(e){let t;for(t=this._previousMapHead;t!==null;t=t._nextPrevious)e(t)}forEachChangedItem(e){let t;for(t=this._changesHead;t!==null;t=t._nextChanged)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)e(t)}diff(e){if(!e)e=new Map;else if(!(e instanceof Map||k_(e)))throw new Se(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._mapHead;if(this._appendAfter=null,this._forEach(e,(i,r)=>{if(t&&t.key===r)this._maybeAddToChanges(t,i),this._appendAfter=t,t=t._next;else{let s=this._getOrCreateRecordForKey(r,i);t=this._insertBeforeOrAppend(t,s)}}),t){t._prev&&(t._prev._next=null),this._removalsHead=t;for(let i=t;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(e,t){if(e){let i=e._prev;return t._next=e,t._prev=i,e._prev=t,i&&(i._next=t),e===this._mapHead&&(this._mapHead=t),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=t,t._prev=this._appendAfter):this._mapHead=t,this._appendAfter=t,null}_getOrCreateRecordForKey(e,t){if(this._records.has(e)){let r=this._records.get(e);this._maybeAddToChanges(r,t);let s=r._prev,o=r._next;return s&&(s._next=o),o&&(o._prev=s),r._next=null,r._prev=null,r}let i=new Jf(e);return this._records.set(e,i),i.currentValue=t,this._addToAdditions(i),i}_reset(){if(this.isDirty){let e;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;e!==null;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;e!=null;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(e,t){Object.is(t,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=t,this._addToChanges(e))}_addToAdditions(e){this._additionsHead===null?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)}_addToChanges(e){this._changesHead===null?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)}_forEach(e,t){e instanceof Map?e.forEach(t):Object.keys(e).forEach(i=>t(e[i],i))}},Jf=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(e){this.key=e}};function Iv(){return new Bh([new Zf])}var Bh=(()=>{class n{static \u0275prov=Te({token:n,providedIn:"root",factory:Iv});factories;constructor(t){this.factories=t}static create(t,i){if(i){let r=i.factories.slice();t=t.concat(r)}return new n(t)}static extend(t){return{provide:n,useFactory:i=>n.create(t,i||Iv()),deps:[[n,new nS,new tS]]}}find(t){let i=this.factories.find(r=>r.supports(t));if(i)return i;throw new Se(901,!1)}}return n})();function K_(n){vt(8);try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=hC(i),s=[X_({}),{provide:Oo,useExisting:oC},...t||[]],o=new Gc({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1});return lC({r3Injector:o.injector,platformInjector:r,rootComponent:e})}catch(e){return Promise.reject(e)}finally{vt(9)}}var Av=class{[ts];constructor(e){this[ts]=e}destroy(){this[ts].destroy()}};var Yt=new De("");var e0=null;function bi(){return e0}function Vh(n){e0??=n}var Wo=class{},Hh=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>ie(t0),providedIn:"platform"})}return n})();var t0=(()=>{class n extends Hh{_location;_history;_doc=ie(Yt);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return bi().getBaseHref(this._doc)}onPopState(t){let i=bi().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=bi().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function n0(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function J_(n){let e=n.search(/#|\?|$/);return n[e-1]==="/"?n.slice(0,e-1)+n.slice(e):n}function Zi(n){return n&&n[0]!=="?"?`?${n}`:n}var dl=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>ie(r0),providedIn:"root"})}return n})(),i0=new De(""),r0=(()=>{class n extends dl{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??ie(Yt).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return n0(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+Zi(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+Zi(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+Zi(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(Ge(Hh),Ge(i0,8))};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),As=(()=>{class n{_subject=new Bt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=_C(J_(Q_(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+Zi(i))}normalize(t){return n.stripTrailingSlash(yC(this._basePath,Q_(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Zi(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Zi(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Zi;static joinWithSlash=n0;static stripTrailingSlash=J_;static \u0275fac=function(i){return new(i||n)(Ge(dl))};static \u0275prov=Te({token:n,factory:()=>vC(),providedIn:"root"})}return n})();function vC(){return new As(Ge(dl))}function yC(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function Q_(n){return n.replace(/\/index.html$/,"")}function _C(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}var zh=(()=>{class n{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(t,i,r){this._ngEl=t,this._differs=i,this._renderer=r}set ngStyle(t){this._ngStyle=t,!this._differ&&t&&(this._differ=this._differs.find(t).create())}ngDoCheck(){if(this._differ){let t=this._differ.diff(this._ngStyle);t&&this._applyChanges(t)}}_setStyle(t,i){let[r,s]=t.split("."),o=r.indexOf("-")===-1?void 0:Xi.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,s?`${i}${s}`:i,o):this._renderer.removeStyle(this._ngEl.nativeElement,r,o)}_applyChanges(t){t.forEachRemovedItem(i=>this._setStyle(i.key,null)),t.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),t.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}static \u0275fac=function(i){return new(i||n)(Ar(Cs),Ar(Bh),Ar(D_))};static \u0275dir=cl({type:n,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return n})();var fl=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=al({type:n});static \u0275inj=jc({})}return n})();function Gh(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var Wh="browser",s0="server";function hl(n){return n===s0}var jo=class{};var gl=new De(""),Xh=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r,s){return this._findPluginFor(i).addEventListener(t,i,r,s)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new Se(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(Ge(gl),Ge(Ht))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})(),$o=class{_doc;constructor(e){this._doc=e}manager},pl="ng-app-id";function o0(n){for(let e of n)e.remove()}function a0(n,e){let t=e.createElement("style");return t.textContent=n,t}function EC(n,e,t,i){let r=n.head?.querySelectorAll(`style[${pl}="${e}"],link[${pl}="${e}"]`);if(r)for(let s of r)s.removeAttribute(pl),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function $h(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var Yh=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.isServer=hl(s),EC(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,a0);i?.forEach(r=>this.addUsage(r,this.external,$h))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(o0(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])o0(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,a0(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,$h(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(pl,this.appId),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(Ge(Yt),Ge(_h),Ge(Mh,8),Ge(Ho))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})(),jh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Zh=/%COMP%/g;var l0="%COMP%",SC=`_nghost-${l0}`,wC=`_ngcontent-${l0}`,bC=!0,TC=new De("",{providedIn:"root",factory:()=>bC});function CC(n){return wC.replace(Zh,n)}function DC(n){return SC.replace(Zh,n)}function u0(n,e){return e.map(t=>t.replace(Zh,n))}var Kh=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,s,o,a,c,l=null,u=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.tracingService=u,this.platformIsServer=hl(a),this.defaultRenderer=new qo(t,o,c,this.platformIsServer,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===ti.ShadowDom&&(i=xt(ge({},i),{encapsulation:ti.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof ml?r.applyToHost(t):r instanceof Xo&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,f=this.tracingService;switch(i.encapsulation){case ti.Emulated:s=new ml(c,l,i,this.appId,u,o,a,d,f);break;case ti.ShadowDom:return new qh(c,l,t,i,o,a,this.nonce,d,f);default:s=new Xo(c,l,i,u,o,a,d,f);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(Ge(Xh),Ge(Yh),Ge(_h),Ge(TC),Ge(Yt),Ge(Ho),Ge(Ht),Ge(Mh),Ge(tl,8))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})(),qo=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r,s){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(jh[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(c0(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(c0(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Se(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=jh[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=jh[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Xi.DashCase|Xi.Important)?e.style.setProperty(t,i,r&Xi.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Xi.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=bi().getGlobalEventTarget(this.doc,e),!e))throw new Se(5102,!1);let s=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function c0(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var qh=class extends qo{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,c,l),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=u0(r.id,u);for(let f of u){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=f,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let f of d){let h=$h(f,s);a&&h.setAttribute("nonce",a),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Xo=class extends qo{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,a,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=i.styles;this.styles=l?u0(l,u):u,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ml=class extends Xo{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,c,l){let u=r+"-"+i.id;super(e,t,i,s,o,a,c,l,u),this.contentAttr=CC(u),this.hostAttr=DC(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var vl=class n extends Wo{supportsDOMEvents=!0;static makeCurrent(){Vh(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=IC();return t==null?null:AC(t)}resetBaseElement(){Yo=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Gh(document.cookie,e)}},Yo=null;function IC(){return Yo=Yo||document.querySelector("base"),Yo?Yo.getAttribute("href"):null}function AC(n){return new URL(n,document.baseURI).pathname}var RC=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})(),f0=(()=>{class n extends $o{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,s){return t.addEventListener(i,r,s),()=>this.removeEventListener(t,i,r,s)}removeEventListener(t,i,r,s){return t.removeEventListener(i,r,s)}static \u0275fac=function(i){return new(i||n)(Ge(Yt))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})(),d0=["alt","control","meta","shift"],NC={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},PC={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},h0=(()=>{class n extends $o{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,s){let o=n.parseEventName(i),a=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>bi().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),d0.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=NC[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),d0.forEach(o=>{if(o!==r){let a=PC[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(Ge(Yt))};static \u0275prov=Te({token:n,factory:n.\u0275fac})}return n})();function Jh(n,e){return K_(ge({rootComponent:n},OC(e)))}function OC(n){return{appProviders:[...BC,...n?.providers??[]],platformProviders:UC}}function LC(){vl.makeCurrent()}function FC(){return new xi}function kC(){return Xy(document),document}var UC=[{provide:Ho,useValue:Wh},{provide:xh,useValue:LC,multi:!0},{provide:Yt,useFactory:kC}];var BC=[{provide:Xc,useValue:"root"},{provide:xi,useFactory:FC},{provide:gl,useClass:f0,multi:!0,deps:[Yt]},{provide:gl,useClass:h0,multi:!0,deps:[Yt]},Kh,Yh,Xh,{provide:Es,useExisting:Kh},{provide:jo,useClass:RC},[]];var p0=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(Ge(Yt))};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Be="primary",aa=Symbol("RouteTitle"),ip=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Fs(n){return new ip(n)}function HC(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function zC(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!ii(n[t],e[t]))return!1;return!0}function ii(n,e){let t=n?rp(n):void 0,i=e?rp(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!E0(n[r],e[r]))return!1;return!0}function rp(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function E0(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function S0(n){return n.length>0?n[n.length-1]:null}function Qi(n){return Kd(n)?n:Go(n)?Pt(Promise.resolve(n)):Le(n)}var GC={exact:b0,subset:T0},w0={exact:WC,subset:jC,ignored:()=>!0};function m0(n,e,t){return GC[t.paths](n.root,e.root,t.matrixParams)&&w0[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function WC(n,e){return ii(n,e)}function b0(n,e,t){if(!Pr(n.segments,e.segments)||!xl(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!b0(n.children[i],e.children[i],t))return!1;return!0}function jC(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>E0(n[t],e[t]))}function T0(n,e,t){return C0(n,e,e.segments,t)}function C0(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Pr(r,t)||e.hasChildren()||!xl(r,t,i))}else if(n.segments.length===t.length){if(!Pr(n.segments,t)||!xl(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!T0(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Pr(n.segments,r)||!xl(n.segments,r,i)||!n.children[Be]?!1:C0(n.children[Be],e,s,i)}}function xl(n,e,t){return e.every((i,r)=>w0[t](n[r].parameters,i.parameters))}var Ci=class{root;queryParams;fragment;_queryParamMap;constructor(e=new ut([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Fs(this.queryParams),this._queryParamMap}toString(){return XC.serialize(this)}},ut=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ml(this)}},Nr=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Fs(this.parameters),this._parameterMap}toString(){return I0(this)}};function $C(n,e){return Pr(n,e)&&n.every((t,i)=>ii(t.parameters,e[i].parameters))}function Pr(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function qC(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Be&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Be&&(t=t.concat(e(r,i)))}),t}var Ol=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>new ks,providedIn:"root"})}return n})(),ks=class{parse(e){let t=new op(e);return new Ci(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Zo(e.root,!0)}`,i=KC(e.queryParams),r=typeof e.fragment=="string"?`#${YC(e.fragment)}`:"";return`${t}${i}${r}`}},XC=new ks;function Ml(n){return n.segments.map(e=>I0(e)).join("/")}function Zo(n,e){if(!n.hasChildren())return Ml(n);if(e){let t=n.children[Be]?Zo(n.children[Be],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Be&&i.push(`${r}:${Zo(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=qC(n,(i,r)=>r===Be?[Zo(n.children[Be],!1)]:[`${r}:${Zo(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Be]!=null?`${Ml(n)}/${t[0]}`:`${Ml(n)}/(${t.join("//")})`}}function D0(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function yl(n){return D0(n).replace(/%3B/gi,";")}function YC(n){return encodeURI(n)}function sp(n){return D0(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function El(n){return decodeURIComponent(n)}function g0(n){return El(n.replace(/\+/g,"%20"))}function I0(n){return`${sp(n.path)}${ZC(n.parameters)}`}function ZC(n){return Object.entries(n).map(([e,t])=>`;${sp(e)}=${sp(t)}`).join("")}function KC(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${yl(t)}=${yl(r)}`).join("&"):`${yl(t)}=${yl(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var JC=/^[^\/()?;#]+/;function Qh(n){let e=n.match(JC);return e?e[0]:""}var QC=/^[^\/()?;=#]+/;function eD(n){let e=n.match(QC);return e?e[0]:""}var tD=/^[^=?&#]+/;function nD(n){let e=n.match(tD);return e?e[0]:""}var iD=/^[^&#]+/;function rD(n){let e=n.match(iD);return e?e[0]:""}var op=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ut([],{}):new ut([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Be]=new ut(e,t)),i}parseSegment(){let e=Qh(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Se(4009,!1);return this.capture(e),new Nr(El(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=eD(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Qh(this.remaining);r&&(i=r,this.capture(i))}e[El(t)]=El(i)}parseQueryParam(e){let t=nD(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=rD(this.remaining);o&&(i=o,this.capture(i))}let r=g0(t),s=g0(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Qh(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Se(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Be);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Be]:new ut([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Se(4011,!1)}};function A0(n){return n.segments.length>0?new ut([],{[Be]:n}):n}function R0(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=R0(r);if(i===Be&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new ut(n.segments,e);return sD(t)}function sD(n){if(n.numberOfChildren===1&&n.children[Be]){let e=n.children[Be];return new ut(n.segments.concat(e.segments),e.children)}return n}function Us(n){return n instanceof Ci}function oD(n,e,t=null,i=null){let r=N0(n);return P0(r,e,t,i)}function N0(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new ut(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=A0(i);return e??r}function P0(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return ep(r,r,r,t,i);let s=aD(e);if(s.toRoot())return ep(r,r,new ut([],{}),t,i);let o=cD(s,r,n),a=o.processChildren?Jo(o.segmentGroup,o.index,s.commands):L0(o.segmentGroup,o.index,s.commands);return ep(r,o.segmentGroup,a,t,i)}function wl(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function ea(n){return typeof n=="object"&&n!=null&&n.outlets}function ep(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=O0(n,e,t);let a=A0(R0(o));return new Ci(a,s,r)}function O0(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=O0(s,e,t)}),new ut(n.segments,i)}var bl=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&wl(i[0]))throw new Se(4003,!1);let r=i.find(ea);if(r&&r!==S0(i))throw new Se(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function aD(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new bl(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new bl(t,e,i)}var Ps=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function cD(n,e,t){if(n.isAbsolute)return new Ps(e,!0,0);if(!t)return new Ps(e,!1,NaN);if(t.parent===null)return new Ps(t,!0,0);let i=wl(n.commands[0])?0:1,r=t.segments.length-1+i;return lD(t,r,n.numberOfDoubleDots)}function lD(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new Se(4005,!1);r=i.segments.length}return new Ps(i,!1,r-s)}function uD(n){return ea(n[0])?n[0].outlets:{[Be]:n}}function L0(n,e,t){if(n??=new ut([],{}),n.segments.length===0&&n.hasChildren())return Jo(n,e,t);let i=dD(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new ut(n.segments.slice(0,i.pathIndex),{});return s.children[Be]=new ut(n.segments.slice(i.pathIndex),n.children),Jo(s,0,r)}else return i.match&&r.length===0?new ut(n.segments,{}):i.match&&!n.hasChildren()?ap(n,e,t):i.match?Jo(n,0,r):ap(n,e,t)}function Jo(n,e,t){if(t.length===0)return new ut(n.segments,{});{let i=uD(t),r={};if(Object.keys(i).some(s=>s!==Be)&&n.children[Be]&&n.numberOfChildren===1&&n.children[Be].segments.length===0){let s=Jo(n.children[Be],e,t);return new ut(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=L0(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new ut(n.segments,r)}}function dD(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(ea(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!y0(c,l,o))return s;i+=2}else{if(!y0(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function ap(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(ea(s)){let c=fD(s.outlets);return new ut(i,c)}if(r===0&&wl(t[0])){let c=n.segments[e];i.push(new Nr(c.path,v0(t[0]))),r++;continue}let o=ea(s)?s.outlets[Be]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&wl(a)?(i.push(new Nr(o,v0(a))),r+=2):(i.push(new Nr(o,{})),r++)}return new ut(i,{})}function fD(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=ap(new ut([],{}),0,i))}),e}function v0(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function y0(n,e,t){return n==t.path&&ii(e,t.parameters)}var Sl="imperative",$t=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}($t||{}),In=class{id;url;constructor(e,t){this.id=e,this.url=t}},Bs=class extends In{type=$t.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ki=class extends In{urlAfterRedirects;type=$t.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},gn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(gn||{}),Tl=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(Tl||{}),Ti=class extends In{reason;code;type=$t.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Ji=class extends In{reason;code;type=$t.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},ta=class extends In{error;target;type=$t.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Cl=class extends In{urlAfterRedirects;state;type=$t.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},cp=class extends In{urlAfterRedirects;state;type=$t.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},lp=class extends In{urlAfterRedirects;state;shouldActivate;type=$t.GuardsCheckEnd;constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},up=class extends In{urlAfterRedirects;state;type=$t.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},dp=class extends In{urlAfterRedirects;state;type=$t.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},fp=class{route;type=$t.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},hp=class{route;type=$t.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},pp=class{snapshot;type=$t.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},mp=class{snapshot;type=$t.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},gp=class{snapshot;type=$t.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},vp=class{snapshot;type=$t.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var na=class{},Vs=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function hD(n,e){return n.providers&&!n._injector&&(n._injector=ol(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Wn(n){return n.outlet||Be}function pD(n,e){let t=n.filter(i=>Wn(i)===e);return t.push(...n.filter(i=>Wn(i)!==e)),t}function ca(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var yp=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return ca(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new la(this.rootInjector)}},la=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new yp(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(Ge(Dn))};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Dl=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=_p(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=_p(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=xp(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return xp(e,this._root).map(t=>t.value)}};function _p(n,e){if(n===e.value)return e;for(let t of e.children){let i=_p(n,t);if(i)return i}return null}function xp(n,e){if(n===e.value)return[e];for(let t of e.children){let i=xp(n,t);if(i.length)return i.unshift(e),i}return[]}var mn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Ns(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var Il=class extends Dl{snapshot;constructor(e,t){super(e),this.snapshot=t,Ip(this,e)}toString(){return this.snapshot.toString()}};function F0(n){let e=mD(n),t=new Wt([new Nr("",{})]),i=new Wt({}),r=new Wt({}),s=new Wt({}),o=new Wt(""),a=new Or(t,i,s,o,r,Be,n,e.root);return a.snapshot=e.root,new Il(new mn(a,[]),e)}function mD(n){let e={},t={},i={},r="",s=new Os([],e,i,r,t,Be,n,null,{});return new Rl("",new mn(s,[]))}var Or=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(rt(l=>l[aa]))??Le(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(rt(e=>Fs(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(rt(e=>Fs(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Al(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:ge(ge({},e.params),n.params),data:ge(ge({},e.data),n.data),resolve:ge(ge(ge(ge({},n.data),e.data),r?.data),n._resolvedData)}:i={params:ge({},n.params),data:ge({},n.data),resolve:ge(ge({},n.data),n._resolvedData??{})},r&&U0(r)&&(i.resolve[aa]=r.title),i}var Os=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[aa]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Fs(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Fs(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Rl=class extends Dl{url;constructor(e,t){super(t),this.url=e,Ip(this,t)}toString(){return k0(this._root)}};function Ip(n,e){e.value._routerState=n,e.children.forEach(t=>Ip(n,t))}function k0(n){let e=n.children.length>0?` { ${n.children.map(k0).join(", ")} } `:"";return`${n.value}${e}`}function tp(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,ii(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),ii(e.params,t.params)||n.paramsSubject.next(t.params),zC(e.url,t.url)||n.urlSubject.next(t.url),ii(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Mp(n,e){let t=ii(n.params,e.params)&&$C(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||Mp(n.parent,e.parent))}function U0(n){return typeof n.title=="string"||n.title===null}var gD=new De(""),B0=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Be;activateEvents=new an;deactivateEvents=new an;attachEvents=new an;detachEvents=new an;routerOutletData=Hy(void 0);parentContexts=ie(la);location=ie(Ds);changeDetector=ie(Uh);inputBinder=ie(Ll,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Se(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Se(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Se(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new Se(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Ep(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=cl({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[rh]})}return n})(),Ep=class{route;childContexts;parent;outletData;constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===Or?this.route:e===la?this.childContexts:e===gD?this.outletData:this.parent.get(e,t)}},Ll=new De("");function vD(n,e,t){let i=ia(n,e._root,t?t._root:void 0);return new Il(i,e)}function ia(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=yD(n,e,t);return new mn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>ia(n,a)),o}}let i=_D(e.value),r=e.children.map(s=>ia(n,s));return new mn(i,r)}}function yD(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return ia(n,i,r);return ia(n,i)})}function _D(n){return new Or(new Wt(n.url),new Wt(n.params),new Wt(n.queryParams),new Wt(n.fragment),new Wt(n.data),n.outlet,n.component,n)}var ra=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},V0="ngNavigationCancelingError";function Nl(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=Us(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=H0(!1,gn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function H0(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[V0]=!0,t.cancellationCode=e,t}function xD(n){return z0(n)&&Us(n.url)}function z0(n){return!!n&&n[V0]}var MD=(n,e,t,i)=>rt(r=>(new Sp(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),Sp=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),tp(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Ns(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Ns(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Ns(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Ns(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new vp(s.value.snapshot))}),e.children.length&&this.forwardEvent(new mp(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(tp(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),tp(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,i)}},Pl=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Ls=class{component;route;constructor(e,t){this.component=e,this.route=t}};function ED(n,e,t){let i=n._root,r=e?e._root:null;return Ko(i,r,t,[i.value])}function SD(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function zs(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!Fv(n)?n:e.get(n):i}function Ko(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Ns(e);return n.children.forEach(o=>{wD(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Qo(a,t.getContext(o),r)),r}function wD(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=bD(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Pl(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Ko(n,e,a?a.children:null,i,r):Ko(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Ls(a.outlet.component,o))}else o&&Qo(e,a,r),r.canActivateChecks.push(new Pl(i)),s.component?Ko(n,null,a?a.children:null,i,r):Ko(n,null,t,i,r);return r}function bD(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Pr(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Pr(n.url,e.url)||!ii(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Mp(n,e)||!ii(n.queryParams,e.queryParams);case"paramsChange":default:return!Mp(n,e)}}function Qo(n,e,t){let i=Ns(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?Qo(o,e.children.getContext(s),t):Qo(o,null,t):Qo(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Ls(e.outlet.component,r)):t.canDeactivateChecks.push(new Ls(null,r)):t.canDeactivateChecks.push(new Ls(null,r))}function ua(n){return typeof n=="function"}function TD(n){return typeof n=="boolean"}function CD(n){return n&&ua(n.canLoad)}function DD(n){return n&&ua(n.canActivate)}function ID(n){return n&&ua(n.canActivateChild)}function AD(n){return n&&ua(n.canDeactivate)}function RD(n){return n&&ua(n.canMatch)}function G0(n){return n instanceof gi||n?.name==="EmptyError"}var _l=Symbol("INITIAL_VALUE");function Hs(){return kn(n=>mc(n.map(e=>e.pipe(vi(1),ef(_l)))).pipe(rt(e=>{for(let t of e)if(t!==!0){if(t===_l)return _l;if(t===!1||ND(t))return t}return!0}),Fn(e=>e!==_l),vi(1)))}function ND(n){return Us(n)||n instanceof ra}function PD(n,e){return Ft(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Le(xt(ge({},t),{guardsResult:!0})):OD(o,i,r,n).pipe(Ft(a=>a&&TD(a)?LD(i,s,n,e):Le(a)),rt(a=>xt(ge({},t),{guardsResult:a})))})}function OD(n,e,t,i){return Pt(n).pipe(Ft(r=>VD(r.component,r.route,t,e,i)),yi(r=>r!==!0,!0))}function LD(n,e,t,i){return Pt(e).pipe(ds(r=>us(kD(r.route.parent,i),FD(r.route,i),BD(n,r.path,t),UD(n,r.route,t))),yi(r=>r!==!0,!0))}function FD(n,e){return n!==null&&e&&e(new gp(n)),Le(!0)}function kD(n,e){return n!==null&&e&&e(new pp(n)),Le(!0)}function UD(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Le(!0);let r=i.map(s=>gc(()=>{let o=ca(e)??t,a=zs(s,o),c=DD(a)?a.canActivate(e,n):Vn(o,()=>a(e,n));return Qi(c).pipe(yi())}));return Le(r).pipe(Hs())}function BD(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>SD(o)).filter(o=>o!==null).map(o=>gc(()=>{let a=o.guards.map(c=>{let l=ca(o.node)??t,u=zs(c,l),d=ID(u)?u.canActivateChild(i,n):Vn(l,()=>u(i,n));return Qi(d).pipe(yi())});return Le(a).pipe(Hs())}));return Le(s).pipe(Hs())}function VD(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Le(!0);let o=s.map(a=>{let c=ca(e)??r,l=zs(a,c),u=AD(l)?l.canDeactivate(n,e,t,i):Vn(c,()=>l(n,e,t,i));return Qi(u).pipe(yi())});return Le(o).pipe(Hs())}function HD(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Le(!0);let s=r.map(o=>{let a=zs(o,n),c=CD(a)?a.canLoad(e,t):Vn(n,()=>a(e,t));return Qi(c)});return Le(s).pipe(Hs(),W0(i))}function W0(n){return qd(jt(e=>{if(typeof e!="boolean")throw Nl(n,e)}),rt(e=>e===!0))}function zD(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Le(!0);let s=r.map(o=>{let a=zs(o,n),c=RD(a)?a.canMatch(e,t):Vn(n,()=>a(e,t));return Qi(c)});return Le(s).pipe(Hs(),W0(i))}var sa=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},oa=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function Rs(n){return ls(new sa(n))}function GD(n){return ls(new Se(4e3,!1))}function WD(n){return ls(H0(!1,gn.GuardRejected))}var wp=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Le(i);if(r.numberOfChildren>1||!r.children[Be])return GD(`${e.redirectTo}`);r=r.children[Be]}}applyRedirectCommands(e,t,i,r,s){if(typeof t!="string"){let a=t,{queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,params:h,data:g,title:y}=r,m=Vn(s,()=>a({params:h,data:g,queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,title:y}));if(m instanceof Ci)throw new oa(m);t=m}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t[0]==="/")throw new oa(o);return o}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Ci(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new ut(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Se(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},bp={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function jD(n,e,t,i,r){let s=j0(n,e,t);return s.matched?(i=hD(e,i),zD(i,e,t,r).pipe(rt(o=>o===!0?s:ge({},bp)))):Le(s)}function j0(n,e,t){if(e.path==="**")return $D(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?ge({},bp):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||HC)(t,n,e);if(!r)return ge({},bp);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?ge(ge({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function $D(n){return{matched:!0,parameters:n.length>0?S0(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function _0(n,e,t,i){return t.length>0&&YD(n,t,i)?{segmentGroup:new ut(e,XD(i,new ut(t,n.children))),slicedSegments:[]}:t.length===0&&ZD(n,t,i)?{segmentGroup:new ut(n.segments,qD(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new ut(n.segments,n.children),slicedSegments:t}}function qD(n,e,t,i){let r={};for(let s of t)if(Fl(n,e,s)&&!i[Wn(s)]){let o=new ut([],{});r[Wn(s)]=o}return ge(ge({},i),r)}function XD(n,e){let t={};t[Be]=e;for(let i of n)if(i.path===""&&Wn(i)!==Be){let r=new ut([],{});t[Wn(i)]=r}return t}function YD(n,e,t){return t.some(i=>Fl(n,e,i)&&Wn(i)!==Be)}function ZD(n,e,t){return t.some(i=>Fl(n,e,i))}function Fl(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function KD(n,e,t){return e.length===0&&!n.children[t]}var Tp=class{};function JD(n,e,t,i,r,s,o="emptyOnly"){return new Cp(n,e,t,i,r,o,s).recognize()}var QD=31,Cp=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new wp(this.urlSerializer,this.urlTree)}noMatchError(e){return new Se(4002,`'${e.segmentGroup}'`)}recognize(){let e=_0(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(rt(({children:t,rootSnapshot:i})=>{let r=new mn(i,t),s=new Rl("",r),o=oD(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new Os([],Object.freeze({}),Object.freeze(ge({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Be,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,Be,t).pipe(rt(i=>({children:i,rootSnapshot:t})),Vi(i=>{if(i instanceof oa)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof sa?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,s){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,s):this.processSegment(e,t,i,i.segments,r,!0,s).pipe(rt(o=>o instanceof mn?[o]:[]))}processChildren(e,t,i,r){let s=[];for(let o of Object.keys(i.children))o==="primary"?s.unshift(o):s.push(o);return Pt(s).pipe(ds(o=>{let a=i.children[o],c=pD(t,o);return this.processSegmentGroup(e,c,a,o,r)}),Qd((o,a)=>(o.push(...a),o)),Hi(null),Jd(),Ft(o=>{if(o===null)return Rs(i);let a=$0(o);return eI(a),Le(a)}))}processSegment(e,t,i,r,s,o,a){return Pt(t).pipe(ds(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,s,o,a).pipe(Vi(l=>{if(l instanceof sa)return Le(null);throw l}))),yi(c=>!!c),Vi(c=>{if(G0(c))return KD(i,r,s)?Le(new Tp):Rs(i);throw c}))}processSegmentAgainstRoute(e,t,i,r,s,o,a,c){return Wn(i)!==o&&(o===Be||!Fl(r,s,i))?Rs(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,c):Rs(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=j0(t,r,s);if(!c)return Rs(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>QD&&(this.allowRedirects=!1));let h=new Os(s,l,Object.freeze(ge({},this.urlTree.queryParams)),this.urlTree.fragment,x0(r),Wn(r),r.component??r._loadedComponent??null,r,M0(r)),g=Al(h,a,this.paramsInheritanceStrategy);h.params=Object.freeze(g.params),h.data=Object.freeze(g.data);let y=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,h,e);return this.applyRedirects.lineralizeSegments(r,y).pipe(Ft(m=>this.processSegment(e,i,t,m.concat(f),o,!1,a)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a=jD(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),a.pipe(kn(c=>c.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(kn(({routes:l})=>{let u=i._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:h}=c,g=new Os(f,d,Object.freeze(ge({},this.urlTree.queryParams)),this.urlTree.fragment,x0(i),Wn(i),i.component??i._loadedComponent??null,i,M0(i)),y=Al(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(y.params),g.data=Object.freeze(y.data);let{segmentGroup:m,slicedSegments:p}=_0(t,f,h,l);if(p.length===0&&m.hasChildren())return this.processChildren(u,l,m,g).pipe(rt(b=>new mn(g,b)));if(l.length===0&&p.length===0)return Le(new mn(g,[]));let C=Wn(i)===s;return this.processSegment(u,l,m,p,C?Be:s,!0,g).pipe(rt(b=>new mn(g,b instanceof mn?[b]:[])))}))):Rs(t)))}getChildConfig(e,t,i){return t.children?Le({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Le({routes:t._loadedRoutes,injector:t._loadedInjector}):HD(e,t,i,this.urlSerializer).pipe(Ft(r=>r?this.configLoader.loadChildren(e,t).pipe(jt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):WD(t))):Le({routes:[],injector:e})}};function eI(n){n.sort((e,t)=>e.value.outlet===Be?-1:t.value.outlet===Be?1:e.value.outlet.localeCompare(t.value.outlet))}function tI(n){let e=n.value.routeConfig;return e&&e.path===""}function $0(n){let e=[],t=new Set;for(let i of n){if(!tI(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=$0(i.children);e.push(new mn(i.value,r))}return e.filter(i=>!t.has(i))}function x0(n){return n.data||{}}function M0(n){return n.resolve||{}}function nI(n,e,t,i,r,s){return Ft(o=>JD(n,e,t,i,o.extractedUrl,r,s).pipe(rt(({state:a,tree:c})=>xt(ge({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function iI(n,e){return Ft(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Le(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of q0(c))o.add(l);let a=0;return Pt(o).pipe(ds(c=>s.has(c)?rI(c,i,n,e):(c.data=Al(c,c.parent,n).resolve,Le(void 0))),jt(()=>a++),fs(1),Ft(c=>a===o.size?Le(t):sn))})}function q0(n){let e=n.children.map(t=>q0(t)).flat();return[n,...e]}function rI(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!U0(r)&&(s[aa]=r.title),sI(s,n,e,i).pipe(rt(o=>(n._resolvedData=o,n.data=Al(n,n.parent,t).resolve,null)))}function sI(n,e,t,i){let r=rp(n);if(r.length===0)return Le({});let s={};return Pt(r).pipe(Ft(o=>oI(n[o],e,t,i).pipe(yi(),jt(a=>{if(a instanceof ra)throw Nl(new ks,a);s[o]=a}))),fs(1),rt(()=>s),Vi(o=>G0(o)?sn:ls(o)))}function oI(n,e,t,i){let r=ca(e)??i,s=zs(n,r),o=s.resolve?s.resolve(e,t):Vn(r,()=>s(e,t));return Qi(o)}function np(n){return kn(e=>{let t=n(e);return t?Pt(t).pipe(rt(()=>e)):Le(e)})}var X0=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===Be);return i}getResolvedTitleForRoute(t){return t.data[aa]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>ie(aI),providedIn:"root"})}return n})(),aI=(()=>{class n extends X0{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(Ge(p0))};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),kl=new De("",{providedIn:"root",factory:()=>({})}),Y0=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Is({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&Rr(0,"router-outlet")},dependencies:[B0],encapsulation:2})}return n})();function Ap(n){let e=n.children&&n.children.map(Ap),t=e?xt(ge({},n),{children:e}):ge({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Be&&(t.component=Y0),t}var Ul=new De(""),Z0=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=ie(q_);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Le(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=Qi(t.loadComponent()).pipe(rt(K0),jt(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),bo(()=>{this.componentLoaders.delete(t)})),r=new cs(i,()=>new Bt).pipe(as());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Le({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=cI(i,this.compiler,t,this.onLoadEndListener).pipe(bo(()=>{this.childrenLoaders.delete(i)})),o=new cs(s,()=>new Bt).pipe(as());return this.childrenLoaders.set(i,o),o}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function cI(n,e,t,i){return Qi(n.loadChildren()).pipe(rt(K0),Ft(r=>r instanceof Ph||Array.isArray(r)?Le(r):Pt(e.compileModuleAsync(r))),rt(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(Ul,[],{optional:!0,self:!0}).flat()),{routes:o.map(Ap),injector:s}}))}function lI(n){return n&&typeof n=="object"&&"default"in n}function K0(n){return lI(n)?n.default:n}var Rp=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>ie(uI),providedIn:"root"})}return n})(),uI=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),J0=new De("");var Q0=new De(""),ex=(()=>{class n{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new Bt;transitionAbortSubject=new Bt;configLoader=ie(Z0);environmentInjector=ie(Dn);destroyRef=ie(Qc);urlSerializer=ie(Ol);rootContexts=ie(la);location=ie(As);inputBindingEnabled=ie(Ll,{optional:!0})!==null;titleStrategy=ie(X0);options=ie(kl,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=ie(Rp);createViewTransition=ie(J0,{optional:!0});navigationErrorHandler=ie(Q0,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Le(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new fp(r)),i=r=>this.events.next(new hp(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(xt(ge({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i}))}setupNavigations(t){return this.transitions=new Wt(null),this.transitions.pipe(Fn(i=>i!==null),kn(i=>{let r=!1,s=!1;return Le(i).pipe(kn(o=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",gn.SupersededByNewNavigation),sn;this.currentTransition=i,this.currentNavigation={id:o.id,initialUrl:o.rawUrl,extractedUrl:o.extractedUrl,targetBrowserUrl:typeof o.extras.browserUrl=="string"?this.urlSerializer.parse(o.extras.browserUrl):o.extras.browserUrl,trigger:o.source,extras:o.extras,previousNavigation:this.lastSuccessfulNavigation?xt(ge({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let a=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),c=o.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!a&&c!=="reload"){let l="";return this.events.next(new Ji(o.id,this.urlSerializer.serialize(o.rawUrl),l,Tl.IgnoredSameUrlNavigation)),o.resolve(!1),sn}if(this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))return Le(o).pipe(kn(l=>(this.events.next(new Bs(l.id,this.urlSerializer.serialize(l.extractedUrl),l.source,l.restoredState)),l.id!==this.navigationId?sn:Promise.resolve(l))),nI(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),jt(l=>{i.targetSnapshot=l.targetSnapshot,i.urlAfterRedirects=l.urlAfterRedirects,this.currentNavigation=xt(ge({},this.currentNavigation),{finalUrl:l.urlAfterRedirects});let u=new Cl(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}));if(a&&this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)){let{id:l,extractedUrl:u,source:d,restoredState:f,extras:h}=o,g=new Bs(l,this.urlSerializer.serialize(u),d,f);this.events.next(g);let y=F0(this.rootComponentType).snapshot;return this.currentTransition=i=xt(ge({},o),{targetSnapshot:y,urlAfterRedirects:u,extras:xt(ge({},h),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=u,Le(i)}else{let l="";return this.events.next(new Ji(o.id,this.urlSerializer.serialize(o.extractedUrl),l,Tl.IgnoredByUrlHandlingStrategy)),o.resolve(!1),sn}}),jt(o=>{let a=new cp(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(a)}),rt(o=>(this.currentTransition=i=xt(ge({},o),{guards:ED(o.targetSnapshot,o.currentSnapshot,this.rootContexts)}),i)),PD(this.environmentInjector,o=>this.events.next(o)),jt(o=>{if(i.guardsResult=o.guardsResult,o.guardsResult&&typeof o.guardsResult!="boolean")throw Nl(this.urlSerializer,o.guardsResult);let a=new lp(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot,!!o.guardsResult);this.events.next(a)}),Fn(o=>o.guardsResult?!0:(this.cancelNavigationTransition(o,"",gn.GuardRejected),!1)),np(o=>{if(o.guards.canActivateChecks.length!==0)return Le(o).pipe(jt(a=>{let c=new up(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}),kn(a=>{let c=!1;return Le(a).pipe(iI(this.paramsInheritanceStrategy,this.environmentInjector),jt({next:()=>c=!0,complete:()=>{c||this.cancelNavigationTransition(a,"",gn.NoDataFromResolver)}}))}),jt(a=>{let c=new dp(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}))}),np(o=>{let a=c=>{let l=[];c.routeConfig?.loadComponent&&!c.routeConfig._loadedComponent&&l.push(this.configLoader.loadComponent(c.routeConfig).pipe(jt(u=>{c.component=u}),rt(()=>{})));for(let u of c.children)l.push(...a(u));return l};return mc(a(o.targetSnapshot.root)).pipe(Hi(null),vi(1))}),np(()=>this.afterPreactivation()),kn(()=>{let{currentSnapshot:o,targetSnapshot:a}=i,c=this.createViewTransition?.(this.environmentInjector,o.root,a.root);return c?Pt(c).pipe(rt(()=>i)):Le(i)}),rt(o=>{let a=vD(t.routeReuseStrategy,o.targetSnapshot,o.currentRouterState);return this.currentTransition=i=xt(ge({},o),{targetRouterState:a}),this.currentNavigation.targetRouterState=a,i}),jt(()=>{this.events.next(new na)}),MD(this.rootContexts,t.routeReuseStrategy,o=>this.events.next(o),this.inputBindingEnabled),vi(1),jt({next:o=>{r=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Ki(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects))),this.titleStrategy?.updateTitle(o.targetRouterState.snapshot),o.resolve(!0)},complete:()=>{r=!0}}),tf(this.transitionAbortSubject.pipe(jt(o=>{throw o}))),bo(()=>{!r&&!s&&this.cancelNavigationTransition(i,"",gn.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation=null,this.currentTransition=null)}),Vi(o=>{if(this.destroyed)return i.resolve(!1),sn;if(s=!0,z0(o))this.events.next(new Ti(i.id,this.urlSerializer.serialize(i.extractedUrl),o.message,o.cancellationCode)),xD(o)?this.events.next(new Vs(o.url,o.navigationBehaviorOptions)):i.resolve(!1);else{let a=new ta(i.id,this.urlSerializer.serialize(i.extractedUrl),o,i.targetSnapshot??void 0);try{let c=Vn(this.environmentInjector,()=>this.navigationErrorHandler?.(a));if(c instanceof ra){let{message:l,cancellationCode:u}=Nl(this.urlSerializer,c);this.events.next(new Ti(i.id,this.urlSerializer.serialize(i.extractedUrl),l,u)),this.events.next(new Vs(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(a),o}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return sn}))}))}cancelNavigationTransition(t,i,r){let s=new Ti(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function dI(n){return n!==Sl}var fI=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>ie(hI),providedIn:"root"})}return n})(),Dp=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},hI=(()=>{class n extends Dp{static \u0275fac=(()=>{let t;return function(r){return(t||(t=mh(n)))(r||n)}})();static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),tx=(()=>{class n{urlSerializer=ie(Ol);options=ie(kl,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=ie(As);urlHandlingStrategy=ie(Rp);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ci;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:i,targetBrowserUrl:r}){let s=t!==void 0?this.urlHandlingStrategy.merge(t,i):i,o=r??s;return o instanceof Ci?this.urlSerializer.serialize(o):o}commitTransition({targetRouterState:t,finalUrl:i,initialUrl:r}){i&&t?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=t):this.rawUrlTree=r}routerState=F0(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:()=>ie(pI),providedIn:"root"})}return n})(),pI=(()=>{class n extends tx{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{t(i.url,i.state,"popstate")})})}handleRouterEvent(t,i){t instanceof Bs?this.updateStateMemento():t instanceof Ji?this.commitTransition(i):t instanceof Cl?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof na?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof Ti&&(t.code===gn.GuardRejected||t.code===gn.NoDataFromResolver)?this.restoreHistory(i):t instanceof ta?this.restoreHistory(i,!0):t instanceof Ki&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:i,id:r}){let{replaceUrl:s,state:o}=i;if(this.location.isCurrentPathEqualTo(t)||s){let a=this.browserPageId,c=ge(ge({},o),this.generateNgRouterState(r,a));this.location.replaceState(t,"",c)}else{let a=ge(ge({},o),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(t,"",a)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.getCurrentUrlTree()===t.finalUrl&&s===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=mh(n)))(r||n)}})();static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function nx(n,e){n.events.pipe(Fn(t=>t instanceof Ki||t instanceof Ti||t instanceof ta||t instanceof Ji),rt(t=>t instanceof Ki||t instanceof Ji?0:(t instanceof Ti?t.code===gn.Redirect||t.code===gn.SupersededByNewNavigation:!1)?2:1),Fn(t=>t!==2),vi(1)).subscribe(()=>{e()})}var mI={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},gI={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Np=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=ie(U_);stateManager=ie(tx);options=ie(kl,{optional:!0})||{};pendingTasks=ie(bs);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=ie(ex);urlSerializer=ie(Ol);location=ie(As);urlHandlingStrategy=ie(Rp);_events=new Bt;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=ie(fI);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=ie(Ul,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!ie(Ll,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Nt;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof Ti&&i.code!==gn.Redirect&&i.code!==gn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Ki)this.navigated=!0;else if(i instanceof Vs){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=ge({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||dI(r.source)},o);this.scheduleNavigation(a,Sl,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}yI(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Sl,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i,r)=>{this.navigateToSyncWithBrowser(t,r,i)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=ge({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Ap),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=ge(ge({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=N0(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return P0(d,t,u,l??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=Us(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,Sl,null,i)}navigate(t,i={skipLocationChange:!1}){return vI(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=ge({},mI):i===!1?r=ge({},gI):r=i,Us(t))return m0(this.currentUrlTree,t,r);let s=this.parseUrl(t);return m0(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return nx(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function vI(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Se(4008,!1)}function yI(n){return!(n instanceof na)&&!(n instanceof Vs)}var _I=new De("");function Pp(n,...e){return th([{provide:Ul,multi:!0,useValue:n},[],{provide:Or,useFactory:xI,deps:[Np]},{provide:Lh,multi:!0,useFactory:MI},e.map(t=>t.\u0275providers)])}function xI(n){return n.routerState.root}function MI(){let n=ie($i);return e=>{let t=n.get(Dr);if(e!==t.components[0])return;let i=n.get(Np),r=n.get(EI);n.get(SI)===1&&i.initialNavigation(),n.get(wI,null,ze.Optional)?.setUpPreloading(),n.get(_I,null,ze.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var EI=new De("",{factory:()=>new Bt}),SI=new De("",{providedIn:"root",factory:()=>1});var wI=new De("");var ix=[];var rx={providers:[Y_({eventCoalescing:!0}),Pp(ix)]};var Tu="175";var wx=0,fm=1,bx=2;var hm=1,Tx=2,li=3,Xn=0,nn=1,ui=2,Fi=0,Hr=1,pm=2,mm=3,gm=4,Cx=5,cr=100,Dx=101,Ix=102,Ax=103,Rx=104,Nx=200,Px=201,Ox=202,Lx=203,ru=204,su=205,Fx=206,kx=207,Ux=208,Bx=209,Vx=210,Hx=211,zx=212,Gx=213,Wx=214,Cu=0,Du=1,Iu=2,zr=3,Au=4,Ru=5,Nu=6,Pu=7,Ou=0,jx=1,$x=2,ki=0,qx=1,Xx=2,Yx=3,Zx=4,Kx=5,Jx=6,Qx=7;var im=300,$r=301,qr=302,Lu=303,Fu=304,Oa=306,ou=1e3,ar=1001,au=1002,Rn=1003,eM=1004;var La=1005;var Yn=1006,ku=1007;var pr=1008;var di=1009,vm=1010,ym=1011,lo=1012,Uu=1013,mr=1014,fi=1015,uo=1016,Bu=1017,Vu=1018,fo=1020,_m=35902,xm=1021,Mm=1022,Nn=1023,Em=1024,Sm=1025,no=1026,ho=1027,wm=1028,Hu=1029,bm=1030,zu=1031;var Gu=1033,Fa=33776,ka=33777,Ua=33778,Ba=33779,Wu=35840,ju=35841,$u=35842,qu=35843,Xu=36196,Yu=37492,Zu=37496,Ku=37808,Ju=37809,Qu=37810,ed=37811,td=37812,nd=37813,id=37814,rd=37815,sd=37816,od=37817,ad=37818,cd=37819,ld=37820,ud=37821,Va=36492,dd=36494,fd=36495,Tm=36283,hd=36284,pd=36285,md=36286;var ga=2300,cu=2301,iu=2302,rm=2400,sm=2401,om=2402;var tM=3200,nM=3201;var Cm=0,iM=1,Ui="",_n="srgb",Gr="srgb-linear",va="linear",ft="srgb";var Br=7680;var am=519,rM=512,sM=513,oM=514,Dm=515,aM=516,cM=517,lM=518,uM=519,cm=35044;var Im="300 es",si=2e3,ya=2001;var Oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Op=Math.PI/180,lu=180/Math.PI;function Ha(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function TI(n,e){return(n%e+e)%e}function Lp(n,e,t){return(1-t)*n+t*e}function da(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ln(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var $e=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ke=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],y=r[0],m=r[3],p=r[6],C=r[1],b=r[4],S=r[7],O=r[2],R=r[5],D=r[8];return s[0]=o*y+a*C+c*O,s[3]=o*m+a*b+c*R,s[6]=o*p+a*S+c*D,s[1]=l*y+u*C+d*O,s[4]=l*m+u*b+d*R,s[7]=l*p+u*S+d*D,s[2]=f*y+h*C+g*O,s[5]=f*m+h*b+g*R,s[8]=f*p+h*S+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,h=l*s-o*c,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=h*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fp.makeScale(e,t)),this}rotate(e){return this.premultiply(Fp.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Fp=new ke;function Am(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dM(){let n=_a("canvas");return n.style.display="block",n}var sx={};function za(n){n in sx||(sx[n]=!0,console.warn(n))}function fM(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function hM(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function pM(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ox=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ax=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CI(){let n={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ft&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(r.r=to(r.r),r.g=to(r.g),r.b=to(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ui?va:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Gr]:{primaries:e,whitePoint:i,transfer:va,toXYZ:ox,fromXYZ:ax,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:ox,fromXYZ:ax,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),n}var st=CI();function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function to(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Gs,uu=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gs===void 0&&(Gs=_a("canvas")),Gs.width=e.width,Gs.height=e.height;let r=Gs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Gs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_a("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Pi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},DI=0,io=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DI++}),this.uuid=Ha(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(kp(r[o].image)):s.push(kp(r[o]))}else s=kp(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function kp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?uu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var II=0,gr=(()=>{class n extends Oi{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=ar,s=ar,o=Yn,a=pr,c=Nn,l=di,u=n.DEFAULT_ANISOTROPY,d=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:II++}),this.uuid=Ha(),this.name="",this.source=new io(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==im)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ou:t.x=t.x-Math.floor(t.x);break;case ar:t.x=t.x<0?0:1;break;case au:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ou:t.y=t.y-Math.floor(t.y);break;case ar:t.y=t.y<0?0:1;break;case au:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=im,n.DEFAULT_ANISOTROPY=1,n})(),Mt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,S=(h+1)/2,O=(p+1)/2,R=(u+f)/4,D=(d+y)/4,L=(g+m)/4;return b>S&&b>O?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=R/i,s=D/i):S>O?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=L/r):O<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),i=D/s,r=L/s),this.set(i,r,s,t),this}let C=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(C)<.001&&(C=1),this.x=(m-g)/C,this.y=(d-y)/C,this.z=(f-u)/C,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},du=class extends Oi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new gr(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new io(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends du{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},xa=class extends gr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var fu=class extends gr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Li=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==f||l!==h||u!==g){let m=1-a,p=c*f+l*h+u*g+d*y,C=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let O=Math.sqrt(b),R=Math.atan2(O,p*C);m=Math.sin(m*R)/O,a=Math.sin(a*R)/O}let S=a*C;if(c=c*m+f*S,l=l*m+h*S,u=u*m+g*S,d=d*m+y*S,m===1-a){let O=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=O,l*=O,u*=O,d*=O}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),h=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cx.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Up.copy(this).projectOnVector(e),this.sub(Up)}reflect(e){return this.sub(Up.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Up=new w,cx=new Li,lr=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bl.copy(i.boundingBox)),Bl.applyMatrix4(e.matrixWorld),this.union(Bl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),Vl.subVectors(this.max,fa),Ws.subVectors(e.a,fa),js.subVectors(e.b,fa),$s.subVectors(e.c,fa),er.subVectors(js,Ws),tr.subVectors($s,js),Lr.subVectors(Ws,$s);let t=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Lr.z,Lr.y,er.z,0,-er.x,tr.z,0,-tr.x,Lr.z,0,-Lr.x,-er.y,er.x,0,-tr.y,tr.x,0,-Lr.y,Lr.x,0];return!Bp(t,Ws,js,$s,Vl)||(t=[1,0,0,0,1,0,0,0,1],!Bp(t,Ws,js,$s,Vl))?!1:(Hl.crossVectors(er,tr),t=[Hl.x,Hl.y,Hl.z],Bp(t,Ws,js,$s,Vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Di=[new w,new w,new w,new w,new w,new w,new w,new w],jn=new w,Bl=new lr,Ws=new w,js=new w,$s=new w,er=new w,tr=new w,Lr=new w,fa=new w,Vl=new w,Hl=new w,Fr=new w;function Bp(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Fr.fromArray(n,s);let a=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),c=e.dot(Fr),l=t.dot(Fr),u=i.dot(Fr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var AI=new lr,ha=new w,Vp=new w,ro=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):AI.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);let t=ha.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ha,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(Vp)),this.expandByPoint(ha.copy(e.center).sub(Vp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ii=new w,Hp=new w,zl=new w,nr=new w,zp=new w,Gl=new w,Gp=new w,hu=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Hp.copy(e).add(t).multiplyScalar(.5),zl.copy(t).sub(e).normalize(),nr.copy(this.origin).sub(Hp);let s=e.distanceTo(t)*.5,o=-this.direction.dot(zl),a=nr.dot(this.direction),c=-nr.dot(zl),l=nr.lengthSq(),u=Math.abs(1-o*o),d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){let y=1/u;d*=y,f*=y,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Hp).addScaledVector(zl,f),h}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);let i=Ii.dot(this.direction),r=Ii.dot(Ii)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,i,r,s){zp.subVectors(t,e),Gl.subVectors(i,e),Gp.crossVectors(zp,Gl);let o=this.direction.dot(Gp),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;nr.subVectors(this.origin,e);let c=a*this.direction.dot(Gl.crossVectors(nr,Gl));if(c<0)return null;let l=a*this.direction.dot(zp.cross(nr));if(l<0||c+l>o)return null;let u=-a*nr.dot(Gp);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},St=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,h,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,y,m)}set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/qs.setFromMatrixColumn(e,0).length(),s=1/qs.setFromMatrixColumn(e,1).length(),o=1/qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,g=l*u,y=l*d;t[0]=f+y*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=y+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,g=l*u,y=l*d;t[0]=f-y*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,h=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+y,t[1]=c*d,t[5]=y*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,h=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=y-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-y*d}else if(e.order==="XZY"){let f=o*c,h=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+y,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RI,e,NI)}lookAt(e,t,i){let r=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),ir.crossVectors(i,vn),ir.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),ir.crossVectors(i,vn)),ir.normalize(),Wl.crossVectors(vn,ir),r[0]=ir.x,r[4]=Wl.x,r[8]=vn.x,r[1]=ir.y,r[5]=Wl.y,r[9]=vn.y,r[2]=ir.z,r[6]=Wl.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],y=i[6],m=i[10],p=i[14],C=i[3],b=i[7],S=i[11],O=i[15],R=r[0],D=r[4],L=r[8],M=r[12],x=r[1],I=r[5],G=r[9],B=r[13],X=r[2],Y=r[6],j=r[10],K=r[14],H=r[3],re=r[7],de=r[11],xe=r[15];return s[0]=o*R+a*x+c*X+l*H,s[4]=o*D+a*I+c*Y+l*re,s[8]=o*L+a*G+c*j+l*de,s[12]=o*M+a*B+c*K+l*xe,s[1]=u*R+d*x+f*X+h*H,s[5]=u*D+d*I+f*Y+h*re,s[9]=u*L+d*G+f*j+h*de,s[13]=u*M+d*B+f*K+h*xe,s[2]=g*R+y*x+m*X+p*H,s[6]=g*D+y*I+m*Y+p*re,s[10]=g*L+y*G+m*j+p*de,s[14]=g*M+y*B+m*K+p*xe,s[3]=C*R+b*x+S*X+O*H,s[7]=C*D+b*I+S*Y+O*re,s[11]=C*L+b*G+S*j+O*de,s[15]=C*M+b*B+S*K+O*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*h-i*c*h)+y*(+t*c*h-t*l*f+s*o*f-r*o*h+r*l*u-s*c*u)+m*(+t*l*d-t*a*h-s*o*d+i*o*h+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],y=e[13],m=e[14],p=e[15],C=d*m*l-y*f*l+y*c*h-a*m*h-d*c*p+a*f*p,b=g*f*l-u*m*l-g*c*h+o*m*h+u*c*p-o*f*p,S=u*y*l-g*d*l+g*a*h-o*y*h-u*a*p+o*d*p,O=g*d*c-u*y*c-g*a*f+o*y*f+u*a*m-o*d*m,R=t*C+i*b+r*S+s*O;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/R;return e[0]=C*D,e[1]=(y*f*s-d*m*s-y*r*h+i*m*h+d*r*p-i*f*p)*D,e[2]=(a*m*s-y*c*s+y*r*l-i*m*l-a*r*p+i*c*p)*D,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*h-i*c*h)*D,e[4]=b*D,e[5]=(u*m*s-g*f*s+g*r*h-t*m*h-u*r*p+t*f*p)*D,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*D,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*h+t*c*h)*D,e[8]=S*D,e[9]=(g*d*s-u*y*s-g*i*h+t*y*h+u*i*p-t*d*p)*D,e[10]=(o*y*s-g*a*s+g*i*l-t*y*l-o*i*p+t*a*p)*D,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*h-t*a*h)*D,e[12]=O*D,e[13]=(u*y*r-g*d*r+g*i*f-t*y*f-u*i*m+t*d*m)*D,e[14]=(g*a*r-o*y*r-g*i*c+t*y*c+o*i*m-t*a*m)*D,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*D,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,h=s*u,g=s*d,y=o*u,m=o*d,p=a*d,C=c*l,b=c*u,S=c*d,O=i.x,R=i.y,D=i.z;return r[0]=(1-(y+p))*O,r[1]=(h+S)*O,r[2]=(g-b)*O,r[3]=0,r[4]=(h-S)*R,r[5]=(1-(f+p))*R,r[6]=(m+C)*R,r[7]=0,r[8]=(g+b)*D,r[9]=(m-C)*D,r[10]=(1-(f+y))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=qs.set(r[0],r[1],r[2]).length(),o=qs.set(r[4],r[5],r[6]).length(),a=qs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$n.copy(this);let l=1/s,u=1/o,d=1/a;return $n.elements[0]*=l,$n.elements[1]*=l,$n.elements[2]*=l,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=d,$n.elements[9]*=d,$n.elements[10]*=d,t.setFromRotationMatrix($n),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=si){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),h,g;if(a===si)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ya)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=si){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*l,h=(i+r)*u,g,y;if(a===si)g=(o+s)*d,y=-2*d;else if(a===ya)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},qs=new w,$n=new St,RI=new w(0,0,0),NI=new w(1,1,1),ir=new w,Wl=new w,vn=new w,lx=new St,ux=new Li,ur=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],h=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return lx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return ux.setFromEuler(this),this.setFromQuaternion(ux,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Ma=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},PI=0,dx=new w,Xs=new Li,Ai=new St,jl=new w,pa=new w,OI=new w,LI=new Li,fx=new w(1,0,0),hx=new w(0,1,0),px=new w(0,0,1),mx={type:"added"},FI={type:"removed"},Ys={type:"childadded",child:null},Wp={type:"childremoved",child:null},ci=(()=>{class n extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PI++}),this.uuid=Ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new w,i=new ur,r=new Li,s=new w(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new ke}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Xs.setFromAxisAngle(t,i),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(t,i){return Xs.setFromAxisAngle(t,i),this.quaternion.premultiply(Xs),this}rotateX(t){return this.rotateOnAxis(fx,t)}rotateY(t){return this.rotateOnAxis(hx,t)}rotateZ(t){return this.rotateOnAxis(px,t)}translateOnAxis(t,i){return dx.copy(t).applyQuaternion(this.quaternion),this.position.add(dx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(fx,t)}translateY(t){return this.translateOnAxis(hx,t)}translateZ(t){return this.translateOnAxis(px,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?jl.copy(t):jl.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(pa,jl,this.up):Ai.lookAt(jl,pa,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(Ai),this.quaternion.premultiply(Xs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mx),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(FI),Wp.child=t,this.dispatchEvent(Wp),Wp.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mx),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,t,OI),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,LI,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),g=a(t.animations),y=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new w(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),qn=new w,Ri=new w,jp=new w,Ni=new w,Zs=new w,Ks=new w,gx=new w,$p=new w,qp=new w,Xp=new w,Yp=new Mt,Zp=new Mt,Kp=new Mt,or=class n{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qn.subVectors(e,t),r.cross(qn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qn.subVectors(r,t),Ri.subVectors(i,t),jp.subVectors(e,t);let o=qn.dot(qn),a=qn.dot(Ri),c=qn.dot(jp),l=Ri.dot(Ri),u=Ri.dot(jp),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ni.x),c.addScaledVector(o,Ni.y),c.addScaledVector(a,Ni.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Yp.setScalar(0),Zp.setScalar(0),Kp.setScalar(0),Yp.fromBufferAttribute(e,t),Zp.fromBufferAttribute(e,i),Kp.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Yp,s.x),o.addScaledVector(Zp,s.y),o.addScaledVector(Kp,s.z),o}static isFrontFacing(e,t,i,r){return qn.subVectors(i,t),Ri.subVectors(e,t),qn.cross(Ri).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),qn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Zs.subVectors(r,i),Ks.subVectors(s,i),$p.subVectors(e,i);let c=Zs.dot($p),l=Ks.dot($p);if(c<=0&&l<=0)return t.copy(i);qp.subVectors(e,r);let u=Zs.dot(qp),d=Ks.dot(qp);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Zs,o);Xp.subVectors(e,s);let h=Zs.dot(Xp),g=Ks.dot(Xp);if(g>=0&&h<=g)return t.copy(s);let y=h*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ks,a);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return gx.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(gx,a);let p=1/(m+y+f);return o=y*p,a=f*p,t.copy(i).addScaledVector(Zs,o).addScaledVector(Ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},$l={h:0,s:0,l:0};function Jp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Pe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=TI(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Jp(o,s,e+1/3),this.g=Jp(o,s,e),this.b=Jp(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,t=_n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){let i=mM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return st.fromWorkingColorSpace(Kt.copy(this),e),Math.round(qe(Kt.r*255,0,255))*65536+Math.round(qe(Kt.g*255,0,255))*256+Math.round(qe(Kt.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Kt.copy(this),t);let i=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=_n){st.fromWorkingColorSpace(Kt.copy(this),e);let t=Kt.r,i=Kt.g,r=Kt.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+t,rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rr),e.getHSL($l);let i=Lp(rr.h,$l.h,t),r=Lp(rr.s,$l.s,t),s=Lp(rr.l,$l.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new Pe;Pe.NAMES=mM;var kI=0,dr=class extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kI++}),this.uuid=Ha(),this.name="",this.type="Material",this.blending=Hr,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ru,this.blendDst=su,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(i.blending=this.blending),this.side!==Xn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ru&&(i.blendSrc=this.blendSrc),this.blendDst!==su&&(i.blendDst=this.blendDst),this.blendEquation!==cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==am&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ea=class extends dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.combine=Ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ot=new w,ql=new $e,UI=0,Dt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UI++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=cm,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ql.fromBufferAttribute(this,t),ql.applyMatrix3(e),this.setXY(t,ql.x,ql.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=da(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=da(t,this.array)),t}setX(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=da(t,this.array)),t}setY(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=da(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=da(t,this.array)),t}setW(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cm&&(e.usage=this.usage),e}};var Sa=class extends Dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var wa=class extends Dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var oi=class extends Dt{constructor(e,t,i){super(new Float32Array(e),t,i)}},BI=0,An=new St,Qp=new ci,Js=new w,yn=new lr,ma=new lr,zt=new w,Qt=class n extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BI++}),this.uuid=Ha(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Am(e)?wa:Sa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return Qp.lookAt(e),Qp.updateMatrix(),this.applyMatrix4(Qp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oi(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ro);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ma.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(yn.min,ma.min),yn.expandByPoint(zt),zt.addVectors(yn.max,ma.max),yn.expandByPoint(zt)):(yn.expandByPoint(ma.min),yn.expandByPoint(ma.max))}yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)zt.fromBufferAttribute(a,l),c&&(Js.fromBufferAttribute(e,l),zt.add(Js)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new w,c[L]=new w;let l=new w,u=new w,d=new w,f=new $e,h=new $e,g=new $e,y=new w,m=new w;function p(L,M,x){l.fromBufferAttribute(i,L),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,x),f.fromBufferAttribute(s,L),h.fromBufferAttribute(s,M),g.fromBufferAttribute(s,x),u.sub(l),d.sub(l),h.sub(f),g.sub(f);let I=1/(h.x*g.y-g.x*h.y);isFinite(I)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(I),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(I),a[L].add(y),a[M].add(y),a[x].add(y),c[L].add(m),c[M].add(m),c[x].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let L=0,M=C.length;L<M;++L){let x=C[L],I=x.start,G=x.count;for(let B=I,X=I+G;B<X;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let b=new w,S=new w,O=new w,R=new w;function D(L){O.fromBufferAttribute(r,L),R.copy(O);let M=a[L];b.copy(M),b.sub(O.multiplyScalar(O.dot(M))).normalize(),S.crossVectors(R,M);let I=S.dot(c[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,I)}for(let L=0,M=C.length;L<M;++L){let x=C[L],I=x.start,G=x.count;for(let B=I,X=I+G;B<X;B+=3)D(e.getX(B+0)),D(e.getX(B+1)),D(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new w,s=new w,o=new w,a=new w,c=new w,l=new w,u=new w,d=new w;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?h=c[y]*a.data.stride+a.offset:h=c[y]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new Dt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vx=new St,kr=new hu,Xl=new ro,yx=new w,Yl=new w,Zl=new w,Kl=new w,em=new w,Jl=new w,_x=new w,Ql=new w,yt=class extends ci{constructor(e=new Qt,t=new Ea){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Jl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(em.fromBufferAttribute(d,e),o?Jl.addScaledVector(em,u):Jl.addScaledVector(em.sub(t),u))}t.add(Jl)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xl.copy(i.boundingSphere),Xl.applyMatrix4(s),kr.copy(e.ray).recast(e.near),!(Xl.containsPoint(kr.origin)===!1&&(kr.intersectSphere(Xl,yx)===null||kr.origin.distanceToSquared(yx)>(e.far-e.near)**2))&&(vx.copy(s).invert(),kr.copy(e.ray).applyMatrix4(vx),!(i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,kr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],C=Math.max(m.start,h.start),b=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=C,O=b;S<O;S+=3){let R=a.getX(S),D=a.getX(S+1),L=a.getX(S+2);r=eu(this,p,e,i,l,u,d,R,D,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let C=a.getX(m),b=a.getX(m+1),S=a.getX(m+2);r=eu(this,o,e,i,l,u,d,C,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],C=Math.max(m.start,h.start),b=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let S=C,O=b;S<O;S+=3){let R=S,D=S+1,L=S+2;r=eu(this,p,e,i,l,u,d,R,D,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(c.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let C=m,b=m+1,S=m+2;r=eu(this,o,e,i,l,u,d,C,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function VI(n,e,t,i,r,s,o,a){let c;if(e.side===nn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Xn,a),c===null)return null;Ql.copy(a),Ql.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ql);return l<t.near||l>t.far?null:{distance:l,point:Ql.clone(),object:n}}function eu(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Yl),n.getVertexPosition(c,Zl),n.getVertexPosition(l,Kl);let u=VI(n,e,t,i,Yl,Zl,Kl,_x);if(u){let d=new w;or.getBarycoord(_x,Yl,Zl,Kl,d),r&&(u.uv=or.getInterpolatedAttribute(r,a,c,l,d,new $e)),s&&(u.uv1=or.getInterpolatedAttribute(s,a,c,l,d,new $e)),o&&(u.normal=or.getInterpolatedAttribute(o,a,c,l,d,new w),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new w,materialIndex:0};or.getNormal(Yl,Zl,Kl,f.normal),u.face=f,u.barycoord=d}return u}var so=class n extends Qt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new oi(l,3)),this.setAttribute("normal",new oi(u,3)),this.setAttribute("uv",new oi(d,2));function g(y,m,p,C,b,S,O,R,D,L,M){let x=S/D,I=O/L,G=S/2,B=O/2,X=R/2,Y=D+1,j=L+1,K=0,H=0,re=new w;for(let de=0;de<j;de++){let xe=de*I-B;for(let We=0;We<Y;We++){let pt=We*x-G;re[y]=pt*C,re[m]=xe*b,re[p]=X,l.push(re.x,re.y,re.z),re[y]=0,re[m]=0,re[p]=R>0?1:-1,u.push(re.x,re.y,re.z),d.push(We/D),d.push(1-de/L),K+=1}}for(let de=0;de<L;de++)for(let xe=0;xe<D;xe++){let We=f+xe+Y*de,pt=f+xe+Y*(de+1),W=f+(xe+1)+Y*(de+1),ee=f+(xe+1)+Y*de;c.push(We,pt,ee),c.push(pt,W,ee),H+=6}a.addGroup(h,H,M),h+=H,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Xr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function en(n){let e={};for(let t=0;t<n.length;t++){let i=Xr(n[t]);for(let r in i)e[r]=i[r]}return e}function HI(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rm(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var gM={clone:Xr,merge:en},zI=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GI=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zI,this.fragmentShader=GI,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=HI(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ba=class extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},sr=new w,xx=new $e,Mx=new $e,Jt=class extends ba{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Op*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lu*2*Math.atan(Math.tan(Op*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,t){return this.getViewBounds(e,xx,Mx),t.subVectors(Mx,xx)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Op*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qs=-90,eo=1,pu=class extends ci{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Jt(Qs,eo,e,t);r.layers=this.layers,this.add(r);let s=new Jt(Qs,eo,e,t);s.layers=this.layers,this.add(s);let o=new Jt(Qs,eo,e,t);o.layers=this.layers,this.add(o);let a=new Jt(Qs,eo,e,t);a.layers=this.layers,this.add(a);let c=new Jt(Qs,eo,e,t);c.layers=this.layers,this.add(c);let l=new Jt(Qs,eo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ta=class extends gr{constructor(e=[],t=$r,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},mu=class extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ta(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new so(5,5,5),s=new xn({name:"CubemapFromEquirect",uniforms:Xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Fi});s.uniforms.tEquirect.value=t;let o=new yt(r,s),a=t.minFilter;return t.minFilter===pr&&(t.minFilter=Yn),new pu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Vr=class extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}},WI={type:"move"},oo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(WI)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Vr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Ca=class extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ur,this.environmentIntensity=1,this.environmentRotation=new ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var tm=new w,jI=new w,$I=new ke,ri=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=tm.subVectors(i,t).cross(jI.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(tm),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||$I.getNormalMatrix(e),r=this.coplanarPoint(tm).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ur=new ro,tu=new w,ao=class{constructor(e=new ri,t=new ri,i=new ri,r=new ri,s=new ri,o=new ri){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=si){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],h=r[8],g=r[9],y=r[10],m=r[11],p=r[12],C=r[13],b=r[14],S=r[15];if(i[0].setComponents(c-s,f-l,m-h,S-p).normalize(),i[1].setComponents(c+s,f+l,m+h,S+p).normalize(),i[2].setComponents(c+o,f+u,m+g,S+C).normalize(),i[3].setComponents(c-o,f-u,m-g,S-C).normalize(),i[4].setComponents(c-a,f-d,m-y,S-b).normalize(),t===si)i[5].setComponents(c+a,f+d,m+y,S+b).normalize();else if(t===ya)i[5].setComponents(a,d,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(tu.x=r.normal.x>0?e.max.x:e.min.x,tu.y=r.normal.y>0?e.max.y:e.min.y,tu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(tu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Da=class extends gr{constructor(e,t,i=mr,r,s,o,a=Rn,c=Rn,l,u=no){if(u!==no&&u!==ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new io(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Ia=class n extends Qt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let C=p*f-o;for(let b=0;b<l;b++){let S=b*d-s;g.push(S,-C,0),y.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let C=0;C<a;C++){let b=C+l*p,S=C+l*(p+1),O=C+1+l*(p+1),R=C+1+l*p;h.push(b,S,R),h.push(S,O,R)}this.setIndex(h),this.setAttribute("position",new oi(g,3)),this.setAttribute("normal",new oi(y,3)),this.setAttribute("uv",new oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Wr=class extends dr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pe(16777215),this.specular=new Pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cm,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ur,this.combine=Ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var gu=class extends dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vu=class extends dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function nu(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function qI(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var jr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yu=class extends jr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rm,endingEnd:rm}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case sm:s=e,a=2*t-i;break;case om:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case sm:o=e,c=2*i-t;break;case om:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,C=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,b=(-1-h)*m+(1.5+h)*y+.5*g,S=h*m-h*y;for(let O=0;O!==a;++O)s[O]=p*o[u+O]+C*o[l+O]+b*o[c+O]+S*o[d+O];return s}},_u=class extends jr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},xu=class extends jr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Mn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=nu(t,this.TimeBufferType),this.values=nu(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:nu(e.times,Array),values:nu(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _u(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ga:t=this.InterpolantFactoryMethodDiscrete;break;case cu:t=this.InterpolantFactoryMethodLinear;break;case iu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return cu;case this.InterpolantFactoryMethodSmooth:return iu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&qI(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===iu,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[f+g]||y!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=cu;var fr=class extends Mn{constructor(e,t,i){super(e,t,i)}};fr.prototype.ValueTypeName="bool";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=ga;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Mu=class extends Mn{constructor(e,t,i,r){super(e,t,i,r)}};Mu.prototype.ValueTypeName="color";var Eu=class extends Mn{constructor(e,t,i,r){super(e,t,i,r)}};Eu.prototype.ValueTypeName="number";var Su=class extends jr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Li.slerpFlat(s,0,o,l-a,o,l,c);return s}},Aa=class extends Mn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Su(this.times,this.values,this.getValueSize(),e)}};Aa.prototype.ValueTypeName="quaternion";Aa.prototype.InterpolantFactoryMethodSmooth=void 0;var hr=class extends Mn{constructor(e,t,i){super(e,t,i)}};hr.prototype.ValueTypeName="string";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=ga;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;var wu=class extends Mn{constructor(e,t,i,r){super(e,t,i,r)}};wu.prototype.ValueTypeName="vector";var Ra=class extends ci{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var nm=new St,Ex=new w,Sx=new w,lm=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ao,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Ex.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ex),Sx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sx),t.updateMatrixWorld(),nm.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nm),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Na=class extends ba{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},um=class extends lm{constructor(){super(new Na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},co=class extends Ra{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ci.DEFAULT_UP),this.updateMatrix(),this.target=new ci,this.shadow=new um}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Pa=class extends Ra{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var bu=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}};var Nm="\\[\\]\\.:\\/",XI=new RegExp("["+Nm+"]","g"),Pm="[^"+Nm+"]",YI="[^"+Nm.replace("\\.","")+"]",ZI=/((?:WC+[\/:])*)/.source.replace("WC",Pm),KI=/(WCOD+)?/.source.replace("WCOD",YI),JI=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pm),QI=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pm),eA=new RegExp("^"+ZI+KI+JI+QI+"$"),tA=["material","materials","bones","map"],dm=class{constructor(e,t,i){let r=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ct=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(XI,"")}static parseTrackName(t){let i=eA.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);tA.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=dm,n})();Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fH=new Float32Array(1);function Om(n,e,t,i){let r=nA(i);switch(t){case xm:return n*e;case Em:return n*e;case Sm:return n*e*2;case wm:return n*e/r.components*r.byteLength;case Hu:return n*e/r.components*r.byteLength;case bm:return n*e*2/r.components*r.byteLength;case zu:return n*e*2/r.components*r.byteLength;case Mm:return n*e*3/r.components*r.byteLength;case Nn:return n*e*4/r.components*r.byteLength;case Gu:return n*e*4/r.components*r.byteLength;case Fa:case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ua:case Ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ju:case qu:return Math.max(n,16)*Math.max(e,8)/4;case Wu:case $u:return Math.max(n,8)*Math.max(e,8)/2;case Xu:case Yu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ku:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ju:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Qu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ed:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case td:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case nd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case id:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case rd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case sd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case od:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ad:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case cd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ld:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ud:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Va:case dd:case fd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Tm:case hd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case pd:case md:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nA(n){switch(n){case di:case vm:return{byteLength:1,components:1};case lo:case ym:case uo:return{byteLength:2,components:1};case Bu:case Vu:return{byteLength:2,components:4};case mr:case Uu:case fi:return{byteLength:4,components:1};case _m:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tu);function VM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function iA(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],y=d[h];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let y=d[h];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var rA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_A=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,EA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,CA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,IA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,AA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OA="gl_FragColor = linearToOutputTexel( gl_FragColor );",LA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,UA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,BA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$A=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ZA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,KA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_R=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ER=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,SR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,CR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,PR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,VR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,HR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,GR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$R=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,KR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,QR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,n1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,i1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,u1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,d1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,f1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,E1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,w1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,b1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,D1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,N1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,L1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:rA,alphahash_pars_fragment:sA,alphamap_fragment:oA,alphamap_pars_fragment:aA,alphatest_fragment:cA,alphatest_pars_fragment:lA,aomap_fragment:uA,aomap_pars_fragment:dA,batching_pars_vertex:fA,batching_vertex:hA,begin_vertex:pA,beginnormal_vertex:mA,bsdfs:gA,iridescence_fragment:vA,bumpmap_pars_fragment:yA,clipping_planes_fragment:_A,clipping_planes_pars_fragment:xA,clipping_planes_pars_vertex:MA,clipping_planes_vertex:EA,color_fragment:SA,color_pars_fragment:wA,color_pars_vertex:bA,color_vertex:TA,common:CA,cube_uv_reflection_fragment:DA,defaultnormal_vertex:IA,displacementmap_pars_vertex:AA,displacementmap_vertex:RA,emissivemap_fragment:NA,emissivemap_pars_fragment:PA,colorspace_fragment:OA,colorspace_pars_fragment:LA,envmap_fragment:FA,envmap_common_pars_fragment:kA,envmap_pars_fragment:UA,envmap_pars_vertex:BA,envmap_physical_pars_fragment:ZA,envmap_vertex:VA,fog_vertex:HA,fog_pars_vertex:zA,fog_fragment:GA,fog_pars_fragment:WA,gradientmap_pars_fragment:jA,lightmap_pars_fragment:$A,lights_lambert_fragment:qA,lights_lambert_pars_fragment:XA,lights_pars_begin:YA,lights_toon_fragment:KA,lights_toon_pars_fragment:JA,lights_phong_fragment:QA,lights_phong_pars_fragment:eR,lights_physical_fragment:tR,lights_physical_pars_fragment:nR,lights_fragment_begin:iR,lights_fragment_maps:rR,lights_fragment_end:sR,logdepthbuf_fragment:oR,logdepthbuf_pars_fragment:aR,logdepthbuf_pars_vertex:cR,logdepthbuf_vertex:lR,map_fragment:uR,map_pars_fragment:dR,map_particle_fragment:fR,map_particle_pars_fragment:hR,metalnessmap_fragment:pR,metalnessmap_pars_fragment:mR,morphinstance_vertex:gR,morphcolor_vertex:vR,morphnormal_vertex:yR,morphtarget_pars_vertex:_R,morphtarget_vertex:xR,normal_fragment_begin:MR,normal_fragment_maps:ER,normal_pars_fragment:SR,normal_pars_vertex:wR,normal_vertex:bR,normalmap_pars_fragment:TR,clearcoat_normal_fragment_begin:CR,clearcoat_normal_fragment_maps:DR,clearcoat_pars_fragment:IR,iridescence_pars_fragment:AR,opaque_fragment:RR,packing:NR,premultiplied_alpha_fragment:PR,project_vertex:OR,dithering_fragment:LR,dithering_pars_fragment:FR,roughnessmap_fragment:kR,roughnessmap_pars_fragment:UR,shadowmap_pars_fragment:BR,shadowmap_pars_vertex:VR,shadowmap_vertex:HR,shadowmask_pars_fragment:zR,skinbase_vertex:GR,skinning_pars_vertex:WR,skinning_vertex:jR,skinnormal_vertex:$R,specularmap_fragment:qR,specularmap_pars_fragment:XR,tonemapping_fragment:YR,tonemapping_pars_fragment:ZR,transmission_fragment:KR,transmission_pars_fragment:JR,uv_pars_fragment:QR,uv_pars_vertex:e1,uv_vertex:t1,worldpos_vertex:n1,background_vert:i1,background_frag:r1,backgroundCube_vert:s1,backgroundCube_frag:o1,cube_vert:a1,cube_frag:c1,depth_vert:l1,depth_frag:u1,distanceRGBA_vert:d1,distanceRGBA_frag:f1,equirect_vert:h1,equirect_frag:p1,linedashed_vert:m1,linedashed_frag:g1,meshbasic_vert:v1,meshbasic_frag:y1,meshlambert_vert:_1,meshlambert_frag:x1,meshmatcap_vert:M1,meshmatcap_frag:E1,meshnormal_vert:S1,meshnormal_frag:w1,meshphong_vert:b1,meshphong_frag:T1,meshphysical_vert:C1,meshphysical_frag:D1,meshtoon_vert:I1,meshtoon_frag:A1,points_vert:R1,points_frag:N1,shadow_vert:P1,shadow_frag:O1,sprite_vert:L1,sprite_frag:F1},te={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},hi={basic:{uniforms:en([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:en([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Pe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:en([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:en([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:en([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Pe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:en([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:en([te.points,te.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:en([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:en([te.common,te.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:en([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:en([te.sprite,te.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:en([te.common,te.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:en([te.lights,te.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};hi.physical={uniforms:en([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var gd={r:0,b:0,g:0},Yr=new ur,k1=new St;function U1(n,e,t,i,r,s,o){let a=new Pe(0),c=s===!0?0:1,l,u,d=null,f=0,h=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function y(b){let S=!1,O=g(b);O===null?p(a,c):O&&O.isColor&&(p(O,1),S=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,S){let O=g(S);O&&(O.isCubeTexture||O.mapping===Oa)?(u===void 0&&(u=new yt(new so(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Xr(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Yr.copy(S.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),u.material.uniforms.envMap.value=O,u.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(k1.makeRotationFromEuler(Yr)),u.material.toneMapped=st.getTransfer(O.colorSpace)!==ft,(d!==O||f!==O.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=O,f=O.version,h=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):O&&O.isTexture&&(l===void 0&&(l=new yt(new Ia(2,2),new xn({name:"BackgroundMaterial",uniforms:Xr(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=O,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=st.getTransfer(O.colorSpace)!==ft,O.matrixAutoUpdate===!0&&O.updateMatrix(),l.material.uniforms.uvTransform.value.copy(O.matrix),(d!==O||f!==O.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=O,f=O.version,h=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,S){b.getRGB(gd,Rm(n)),i.buffers.color.setClear(gd.r,gd.g,gd.b,S,o)}function C(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:y,addToRenderList:m,dispose:C}}function B1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(x,I,G,B,X){let Y=!1,j=d(B,G,I);s!==j&&(s=j,l(s.object)),Y=h(x,B,G,X),Y&&g(x,B,G,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,S(x,I,G,B),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,I,G){let B=G.wireframe===!0,X=i[x.id];X===void 0&&(X={},i[x.id]=X);let Y=X[I.id];Y===void 0&&(Y={},X[I.id]=Y);let j=Y[B];return j===void 0&&(j=f(c()),Y[B]=j),j}function f(x){let I=[],G=[],B=[];for(let X=0;X<t;X++)I[X]=0,G[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:B,object:x,attributes:{},index:null}}function h(x,I,G,B){let X=s.attributes,Y=I.attributes,j=0,K=G.getAttributes();for(let H in K)if(K[H].location>=0){let de=X[H],xe=Y[H];if(xe===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor)),de===void 0||de.attribute!==xe||xe&&de.data!==xe.data)return!0;j++}return s.attributesNum!==j||s.index!==B}function g(x,I,G,B){let X={},Y=I.attributes,j=0,K=G.getAttributes();for(let H in K)if(K[H].location>=0){let de=Y[H];de===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(de=x.instanceColor));let xe={};xe.attribute=de,de&&de.data&&(xe.data=de.data),X[H]=xe,j++}s.attributes=X,s.attributesNum=j,s.index=B}function y(){let x=s.newAttributes;for(let I=0,G=x.length;I<G;I++)x[I]=0}function m(x){p(x,0)}function p(x,I){let G=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;G[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),X[x]!==I&&(n.vertexAttribDivisor(x,I),X[x]=I)}function C(){let x=s.newAttributes,I=s.enabledAttributes;for(let G=0,B=I.length;G<B;G++)I[G]!==x[G]&&(n.disableVertexAttribArray(G),I[G]=0)}function b(x,I,G,B,X,Y,j){j===!0?n.vertexAttribIPointer(x,I,G,X,Y):n.vertexAttribPointer(x,I,G,B,X,Y)}function S(x,I,G,B){y();let X=B.attributes,Y=G.getAttributes(),j=I.defaultAttributeValues;for(let K in Y){let H=Y[K];if(H.location>=0){let re=X[K];if(re===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(re=x.instanceColor)),re!==void 0){let de=re.normalized,xe=re.itemSize,We=e.get(re);if(We===void 0)continue;let pt=We.buffer,W=We.type,ee=We.bytesPerElement,ve=W===n.INT||W===n.UNSIGNED_INT||re.gpuType===Uu;if(re.isInterleavedBufferAttribute){let se=re.data,be=se.stride,at=re.offset;if(se.isInstancedInterleavedBuffer){for(let Ie=0;Ie<H.locationSize;Ie++)p(H.location+Ie,se.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ie=0;Ie<H.locationSize;Ie++)m(H.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let Ie=0;Ie<H.locationSize;Ie++)b(H.location+Ie,xe/H.locationSize,W,de,be*ee,(at+xe/H.locationSize*Ie)*ee,ve)}else{if(re.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)p(H.location+se,re.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let se=0;se<H.locationSize;se++)m(H.location+se);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let se=0;se<H.locationSize;se++)b(H.location+se,xe/H.locationSize,W,de,xe*ee,xe/H.locationSize*se*ee,ve)}}else if(j!==void 0){let de=j[K];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(H.location,de);break;case 3:n.vertexAttrib3fv(H.location,de);break;case 4:n.vertexAttrib4fv(H.location,de);break;default:n.vertexAttrib1fv(H.location,de)}}}}C()}function O(){L();for(let x in i){let I=i[x];for(let G in I){let B=I[G];for(let X in B)u(B[X].object),delete B[X];delete I[G]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;let I=i[x.id];for(let G in I){let B=I[G];for(let X in B)u(B[X].object),delete B[X];delete I[G]}delete i[x.id]}function D(x){for(let I in i){let G=i[I];if(G[x.id]===void 0)continue;let B=G[x.id];for(let X in B)u(B[X].object),delete B[X];delete G[x.id]}}function L(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:O,releaseStatesOfGeometry:R,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:m,disableUnusedAttributes:C}}function V1(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*f[y];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function H1(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==Nn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let L=D===uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==di&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==fi&&!L)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:C,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:O,maxSamples:R}}function z1(n){let e=this,t=null,i=0,r=!1,s=!1,o=new ri,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let C=s?0:i,b=C*4,S=p.clippingState||null;c.value=S,S=u(g,f,b,h);for(let O=0;O!==b;++O)S[O]=t[O];p.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=h+y*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,S=h;b!==y;++b,S+=4)o.copy(d[b]).applyMatrix4(C,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function G1(n){let e=new WeakMap;function t(o,a){return a===Lu?o.mapping=$r:a===Fu&&(o.mapping=qr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Lu||a===Fu)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new mu(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var mo=4,vM=[.125,.215,.35,.446,.526,.582],Jr=20,Lm=new Na,yM=new Pe,Fm=null,km=0,Um=0,Bm=!1,Kr=(1+Math.sqrt(5))/2,po=1/Kr,_M=[new w(-Kr,po,0),new w(Kr,po,0),new w(-po,0,Kr),new w(po,0,Kr),new w(0,Kr,-po),new w(0,Kr,po),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],W1=new w,_d=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=W1}=s;Fm=this._renderer.getRenderTarget(),km=this._renderer.getActiveCubeFace(),Um=this._renderer.getActiveMipmapLevel(),Bm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=EM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=MM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fm,km,Um),this._renderer.xr.enabled=Bm,e.scissorTest=!1,vd(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$r||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fm=this._renderer.getRenderTarget(),km=this._renderer.getActiveCubeFace(),Um=this._renderer.getActiveMipmapLevel(),Bm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:uo,format:Nn,colorSpace:Gr,depthBuffer:!1},r=xM(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xM(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=j1(s)),this._blurMaterial=$1(s,e,t)}return r}_compileMaterial(e){let t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,Lm)}_sceneToCubeUV(e,t,i,r,s){let c=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(yM),d.toneMapping=ki,d.autoClear=!1;let g=new Ea({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),y=new yt(new so,g),m=!1,p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(yM),m=!0);for(let C=0;C<6;C++){let b=C%3;b===0?(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[C],s.y,s.z)):b===1?(c.up.set(0,0,l[C]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[C],s.z)):(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[C]));let S=this._cubeSize;vd(r,b*S,C>2?S:0,S,S),d.setRenderTarget(r),m&&d.render(y,c),d.render(e,c)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===$r||e.mapping===qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=EM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=MM());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new yt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;vd(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Lm)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=_M[(r-s-1)%_M.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new yt(this._lodPlanes[r],l),f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Jr-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):Jr;m>Jr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jr}`);let p=[],C=0;for(let D=0;D<Jr;++D){let L=D/y,M=Math.exp(-L*L/2);p.push(M),D===0?C+=M:D<m&&(C+=2*M)}for(let D=0;D<p.length;D++)p[D]=p[D]/C;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;let S=this._sizeLods[r],O=3*S*(r>b-mo?r-b+mo:0),R=4*(this._cubeSize-S);vd(t,O,R,3*S,2*S),c.setRenderTarget(t),c.render(d,Lm)}};function j1(n){let e=[],t=[],i=[],r=n,s=n-mo+1+vM.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-mo?c=vM[o-n+mo-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,y=3,m=2,p=1,C=new Float32Array(y*g*h),b=new Float32Array(m*g*h),S=new Float32Array(p*g*h);for(let R=0;R<h;R++){let D=R%3*2/3-1,L=R>2?0:-1,M=[D,L,0,D+2/3,L,0,D+2/3,L+1,0,D,L,0,D+2/3,L+1,0,D,L+1,0];C.set(M,y*g*R),b.set(f,m*g*R);let x=[R,R,R,R,R,R];S.set(x,p*g*R)}let O=new Qt;O.setAttribute("position",new Dt(C,y)),O.setAttribute("uv",new Dt(b,m)),O.setAttribute("faceIndex",new Dt(S,p)),e.push(O),r>mo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xM(n,e,t){let i=new ai(n,e,t);return i.texture.mapping=Oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vd(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function $1(n,e,t){let i=new Float32Array(Jr),r=new w(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ym(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function MM(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ym(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function EM(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ym(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Ym(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function q1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Lu||c===Fu,u=c===$r||c===qr;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new _d(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new _d(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function X1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&za("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Y1(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,g=d.attributes.position,y=0;if(h!==null){let C=h.array;y=h.version;for(let b=0,S=C.length;b<S;b+=3){let O=C[b+0],R=C[b+1],D=C[b+2];f.push(O,R,R,D,D,O)}}else if(g!==void 0){let C=g.array;y=g.version;for(let b=0,S=C.length/3-1;b<S;b+=3){let O=b+0,R=b+1,D=b+2;f.push(O,R,R,D,D,O)}}else return;let m=new(Am(f)?wa:Sa)(f,1);m.version=y;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Z1(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*o,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,h[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,y,0,g);let p=0;for(let C=0;C<g;C++)p+=h[C]*y[C];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function K1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function J1(n,e,t){let i=new WeakMap,r=new Mt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let x=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var h=x;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],C=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],S=0;g===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let O=a.attributes.position.count*S,R=1;O>e.maxTextureSize&&(R=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);let D=new Float32Array(O*R*4*d),L=new xa(D,O,R,d);L.type=fi,L.needsUpdate=!0;let M=S*4;for(let I=0;I<d;I++){let G=p[I],B=C[I],X=b[I],Y=O*R*4*I;for(let j=0;j<G.count;j++){let K=j*M;g===!0&&(r.fromBufferAttribute(G,j),D[Y+K+0]=r.x,D[Y+K+1]=r.y,D[Y+K+2]=r.z,D[Y+K+3]=0),y===!0&&(r.fromBufferAttribute(B,j),D[Y+K+4]=r.x,D[Y+K+5]=r.y,D[Y+K+6]=r.z,D[Y+K+7]=0),m===!0&&(r.fromBufferAttribute(X,j),D[Y+K+8]=r.x,D[Y+K+9]=r.y,D[Y+K+10]=r.z,D[Y+K+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:L,size:new $e(O,R)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let y=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Q1(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var HM=new gr,SM=new Da(1,1),zM=new xa,GM=new fu,WM=new Ta,wM=[],bM=[],TM=new Float32Array(16),CM=new Float32Array(9),DM=new Float32Array(4);function vo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=wM[r];if(s===void 0&&(s=new Float32Array(r),wM[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Md(n,e){let t=bM[e];t===void 0&&(t=new Int32Array(e),bM[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function eN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function tN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function nN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function iN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function rN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(kt(t,i))return;DM.set(i),n.uniformMatrix2fv(this.addr,!1,DM),Ut(t,i)}}function sN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(kt(t,i))return;CM.set(i),n.uniformMatrix3fv(this.addr,!1,CM),Ut(t,i)}}function oN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(kt(t,i))return;TM.set(i),n.uniformMatrix4fv(this.addr,!1,TM),Ut(t,i)}}function aN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function cN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function lN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function uN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function dN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function fN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function hN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function pN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function mN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(SM.compareFunction=Dm,s=SM):s=HM,t.setTexture2D(e||s,r)}function gN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||GM,r)}function vN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||WM,r)}function yN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zM,r)}function _N(n){switch(n){case 5126:return eN;case 35664:return tN;case 35665:return nN;case 35666:return iN;case 35674:return rN;case 35675:return sN;case 35676:return oN;case 5124:case 35670:return aN;case 35667:case 35671:return cN;case 35668:case 35672:return lN;case 35669:case 35673:return uN;case 5125:return dN;case 36294:return fN;case 36295:return hN;case 36296:return pN;case 35678:case 36198:case 36298:case 36306:case 35682:return mN;case 35679:case 36299:case 36307:return gN;case 35680:case 36300:case 36308:case 36293:return vN;case 36289:case 36303:case 36311:case 36292:return yN}}function xN(n,e){n.uniform1fv(this.addr,e)}function MN(n,e){let t=vo(e,this.size,2);n.uniform2fv(this.addr,t)}function EN(n,e){let t=vo(e,this.size,3);n.uniform3fv(this.addr,t)}function SN(n,e){let t=vo(e,this.size,4);n.uniform4fv(this.addr,t)}function wN(n,e){let t=vo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function bN(n,e){let t=vo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function TN(n,e){let t=vo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function CN(n,e){n.uniform1iv(this.addr,e)}function DN(n,e){n.uniform2iv(this.addr,e)}function IN(n,e){n.uniform3iv(this.addr,e)}function AN(n,e){n.uniform4iv(this.addr,e)}function RN(n,e){n.uniform1uiv(this.addr,e)}function NN(n,e){n.uniform2uiv(this.addr,e)}function PN(n,e){n.uniform3uiv(this.addr,e)}function ON(n,e){n.uniform4uiv(this.addr,e)}function LN(n,e,t){let i=this.cache,r=e.length,s=Md(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||HM,s[o])}function FN(n,e,t){let i=this.cache,r=e.length,s=Md(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||GM,s[o])}function kN(n,e,t){let i=this.cache,r=e.length,s=Md(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||WM,s[o])}function UN(n,e,t){let i=this.cache,r=e.length,s=Md(t,r);kt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||zM,s[o])}function BN(n){switch(n){case 5126:return xN;case 35664:return MN;case 35665:return EN;case 35666:return SN;case 35674:return wN;case 35675:return bN;case 35676:return TN;case 5124:case 35670:return CN;case 35667:case 35671:return DN;case 35668:case 35672:return IN;case 35669:case 35673:return AN;case 5125:return RN;case 36294:return NN;case 36295:return PN;case 36296:return ON;case 35678:case 36198:case 36298:case 36306:case 35682:return LN;case 35679:case 36299:case 36307:return FN;case 35680:case 36300:case 36308:case 36293:return kN;case 36289:case 36303:case 36311:case 36292:return UN}}var Hm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_N(t.type)}},zm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=BN(t.type)}},Gm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Vm=/(\w+)(\])?(\[|\.)?/g;function IM(n,e){n.seq.push(e),n.map[e.id]=e}function VN(n,e,t){let i=n.name,r=i.length;for(Vm.lastIndex=0;;){let s=Vm.exec(i),o=Vm.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){IM(t,l===void 0?new Hm(a,n,e):new zm(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Gm(a),IM(t,d)),t=d}}}var go=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);VN(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function AM(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var HN=37297,zN=0;function GN(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var RM=new ke;function WN(n){st._getMatrix(RM,st.workingColorSpace,n);let e=`mat3( ${RM.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case va:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function NM(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+GN(n.getShaderSource(e),o)}else return r}function jN(n,e){let t=WN(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $N(n,e){let t;switch(e){case qx:t="Linear";break;case Xx:t="Reinhard";break;case Yx:t="Cineon";break;case Zx:t="ACESFilmic";break;case Jx:t="AgX";break;case Qx:t="Neutral";break;case Kx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var yd=new w;function qN(){st.getLuminanceCoefficients(yd);let n=yd.x.toFixed(4),e=yd.y.toFixed(4),t=yd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XN(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function YN(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ZN(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ga(n){return n!==""}function PM(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function OM(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var KN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wm(n){return n.replace(KN,QN)}var JN=new Map;function QN(n,e){let t=He[e];if(t===void 0){let i=JN.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wm(t)}var eP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function LM(n){return n.replace(eP,tP)}function tP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function FM(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Tx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function iP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $r:case qr:e="ENVMAP_TYPE_CUBE";break;case Oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qr:e="ENVMAP_MODE_REFRACTION";break}return e}function sP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ou:e="ENVMAP_BLENDING_MULTIPLY";break;case jx:e="ENVMAP_BLENDING_MIX";break;case $x:e="ENVMAP_BLENDING_ADD";break}return e}function oP(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function aP(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=nP(t),l=iP(t),u=rP(t),d=sP(t),f=oP(t),h=XN(t),g=YN(s),y=r.createProgram(),m,p,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ga).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ga).join(`
`),p.length>0&&(p+=`
`)):(m=[FM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),p=[FM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?He.tonemapping_pars_fragment:"",t.toneMapping!==ki?$N("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,jN("linearToOutputTexel",t.outputColorSpace),qN(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ga).join(`
`)),o=Wm(o),o=PM(o,t),o=OM(o,t),a=Wm(a),a=PM(a,t),a=OM(a,t),o=LM(o),a=LM(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Im?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=C+m+o,S=C+p+a,O=AM(r,r.VERTEX_SHADER,b),R=AM(r,r.FRAGMENT_SHADER,S);r.attachShader(y,O),r.attachShader(y,R),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function D(I){if(n.debug.checkShaderErrors){let G=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(O).trim(),X=r.getShaderInfoLog(R).trim(),Y=!0,j=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,O,R);else{let K=NM(r,O,"vertex"),H=NM(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+K+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||X==="")&&(j=!1);j&&(I.diagnostics={runnable:Y,programLog:G,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(O),r.deleteShader(R),L=new go(r,y),M=ZN(r,y)}let L;this.getUniforms=function(){return L===void 0&&D(this),L};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,HN)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zN++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=O,this.fragmentShader=R,this}var cP=0,jm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new $m(e),t.set(e,i)),i}},$m=class{constructor(e){this.id=cP++,this.code=e,this.usedTimes=0}};function lP(n,e,t,i,r,s,o){let a=new Ma,c=new jm,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,x,I,G,B){let X=G.fog,Y=B.geometry,j=M.isMeshStandardMaterial?G.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||j),H=K&&K.mapping===Oa?K.image.height:null,re=g[M.type];M.precision!==null&&(h=r.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));let de=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,xe=de!==void 0?de.length:0,We=0;Y.morphAttributes.position!==void 0&&(We=1),Y.morphAttributes.normal!==void 0&&(We=2),Y.morphAttributes.color!==void 0&&(We=3);let pt,W,ee,ve;if(re){let dt=hi[re];pt=dt.vertexShader,W=dt.fragmentShader}else pt=M.vertexShader,W=M.fragmentShader,c.update(M),ee=c.getVertexShaderID(M),ve=c.getFragmentShaderID(M);let se=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),at=B.isInstancedMesh===!0,Ie=B.isBatchedMesh===!0,It=!!M.map,wt=!!M.matcap,Xe=!!K,T=!!M.aoMap,En=!!M.lightMap,et=!!M.bumpMap,Ye=!!M.normalMap,Me=!!M.displacementMap,_t=!!M.emissiveMap,_e=!!M.metalnessMap,E=!!M.roughnessMap,v=M.anisotropy>0,F=M.clearcoat>0,$=M.dispersion>0,Z=M.iridescence>0,z=M.sheen>0,ye=M.transmission>0,oe=v&&!!M.anisotropyMap,fe=F&&!!M.clearcoatMap,tt=F&&!!M.clearcoatNormalMap,Q=F&&!!M.clearcoatRoughnessMap,he=Z&&!!M.iridescenceMap,Ce=Z&&!!M.iridescenceThicknessMap,Re=z&&!!M.sheenColorMap,pe=z&&!!M.sheenRoughnessMap,Ze=!!M.specularMap,Ve=!!M.specularColorMap,gt=!!M.specularIntensityMap,A=ye&&!!M.transmissionMap,ae=ye&&!!M.thicknessMap,V=!!M.gradientMap,q=!!M.alphaMap,le=M.alphaTest>0,ce=!!M.alphaHash,Ue=!!M.extensions,bt=ki;M.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(bt=n.toneMapping);let qt={shaderID:re,shaderType:M.type,shaderName:M.name,vertexShader:pt,fragmentShader:W,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Ie,batchingColor:Ie&&B._colorsTexture!==null,instancing:at,instancingColor:at&&B.instanceColor!==null,instancingMorph:at&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Gr,alphaToCoverage:!!M.alphaToCoverage,map:It,matcap:wt,envMap:Xe,envMapMode:Xe&&K.mapping,envMapCubeUVHeight:H,aoMap:T,lightMap:En,bumpMap:et,normalMap:Ye,displacementMap:f&&Me,emissiveMap:_t,normalMapObjectSpace:Ye&&M.normalMapType===iM,normalMapTangentSpace:Ye&&M.normalMapType===Cm,metalnessMap:_e,roughnessMap:E,anisotropy:v,anisotropyMap:oe,clearcoat:F,clearcoatMap:fe,clearcoatNormalMap:tt,clearcoatRoughnessMap:Q,dispersion:$,iridescence:Z,iridescenceMap:he,iridescenceThicknessMap:Ce,sheen:z,sheenColorMap:Re,sheenRoughnessMap:pe,specularMap:Ze,specularColorMap:Ve,specularIntensityMap:gt,transmission:ye,transmissionMap:A,thicknessMap:ae,gradientMap:V,opaque:M.transparent===!1&&M.blending===Hr&&M.alphaToCoverage===!1,alphaMap:q,alphaTest:le,alphaHash:ce,combine:M.combine,mapUv:It&&y(M.map.channel),aoMapUv:T&&y(M.aoMap.channel),lightMapUv:En&&y(M.lightMap.channel),bumpMapUv:et&&y(M.bumpMap.channel),normalMapUv:Ye&&y(M.normalMap.channel),displacementMapUv:Me&&y(M.displacementMap.channel),emissiveMapUv:_t&&y(M.emissiveMap.channel),metalnessMapUv:_e&&y(M.metalnessMap.channel),roughnessMapUv:E&&y(M.roughnessMap.channel),anisotropyMapUv:oe&&y(M.anisotropyMap.channel),clearcoatMapUv:fe&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:tt&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:pe&&y(M.sheenRoughnessMap.channel),specularMapUv:Ze&&y(M.specularMap.channel),specularColorMapUv:Ve&&y(M.specularColorMap.channel),specularIntensityMapUv:gt&&y(M.specularIntensityMap.channel),transmissionMapUv:A&&y(M.transmissionMap.channel),thicknessMapUv:ae&&y(M.thicknessMap.channel),alphaMapUv:q&&y(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ye||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(It||q),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:be,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:We,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,decodeVideoTexture:It&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===ft,decodeVideoTextureEmissive:_t&&M.emissiveMap.isVideoTexture===!0&&st.getTransfer(M.emissiveMap.colorSpace)===ft,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ui,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ue&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&M.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function p(M){let x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)x.push(I),x.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(C(x,M),b(x,M),x.push(n.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function C(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function b(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){let x=g[M.type],I;if(x){let G=hi[x];I=gM.clone(G.uniforms)}else I=M.uniforms;return I}function O(M,x){let I;for(let G=0,B=u.length;G<B;G++){let X=u[G];if(X.cacheKey===x){I=X,++I.usedTimes;break}}return I===void 0&&(I=new aP(n,x,M,s),u.push(I)),I}function R(M){if(--M.usedTimes===0){let x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function D(M){c.remove(M)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:O,releaseProgram:R,releaseShaderCache:D,programs:u,dispose:L}}function uP(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function dP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function kM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function UM(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,g,y,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),e++,p}function a(d,f,h,g,y,m){let p=o(d,f,h,g,y,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(d,f,h,g,y,m){let p=o(d,f,h,g,y,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||dP),i.length>1&&i.sort(f||kM),r.length>1&&r.sort(f||kM)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function fP(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new UM,n.set(i,[o])):r>=s.length?(o=new UM,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function hP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Pe};break;case"SpotLight":t={position:new w,direction:new w,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new w,halfWidth:new w,halfHeight:new w};break}return n[e.id]=t,t}}}function pP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var mP=0;function gP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vP(n){let e=new hP,t=pP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new w);let r=new w,s=new St,o=new St;function a(l){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,g=0,y=0,m=0,p=0,C=0,b=0,S=0,O=0,R=0,D=0;l.sort(gP);for(let M=0,x=l.length;M<x;M++){let I=l[M],G=I.color,B=I.intensity,X=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=G.r*B,d+=G.g*B,f+=G.b*B;else if(I.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(I.sh.coefficients[j],B);D++}else if(I.isDirectionalLight){let j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,H=t.get(I);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.directionalShadow[h]=H,i.directionalShadowMap[h]=Y,i.directionalShadowMatrix[h]=I.shadow.matrix,C++}i.directional[h]=j,h++}else if(I.isSpotLight){let j=e.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(G).multiplyScalar(B),j.distance=X,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,i.spot[y]=j;let K=I.shadow;if(I.map&&(i.spotLightMap[O]=I.map,O++,K.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[y]=K.matrix,I.castShadow){let H=t.get(I);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.spotShadow[y]=H,i.spotShadowMap[y]=Y,S++}y++}else if(I.isRectAreaLight){let j=e.get(I);j.color.copy(G).multiplyScalar(B),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=j,m++}else if(I.isPointLight){let j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),j.distance=I.distance,j.decay=I.decay,I.castShadow){let K=I.shadow,H=t.get(I);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=I.shadow.matrix,b++}i.point[g]=j,g++}else if(I.isHemisphereLight){let j=e.get(I);j.skyColor.copy(I.color).multiplyScalar(B),j.groundColor.copy(I.groundColor).multiplyScalar(B),i.hemi[p]=j,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let L=i.hash;(L.directionalLength!==h||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==C||L.numPointShadows!==b||L.numSpotShadows!==S||L.numSpotMaps!==O||L.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+O-R,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=D,L.directionalLength=h,L.pointLength=g,L.spotLength=y,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=C,L.numPointShadows=b,L.numSpotShadows=S,L.numSpotMaps=O,L.numLightProbes=D,i.version=mP++)}function c(l,u){let d=0,f=0,h=0,g=0,y=0,m=u.matrixWorldInverse;for(let p=0,C=l.length;p<C;p++){let b=l[p];if(b.isDirectionalLight){let S=i.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(b.isSpotLight){let S=i.spot[h];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(b.isRectAreaLight){let S=i.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let S=i.hemi[y];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:i}}function BM(n){let e=new vP(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function yP(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new BM(n),e.set(r,[a])):s>=o.length?(a=new BM(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var _P=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function MP(n,e,t){let i=new ao,r=new $e,s=new $e,o=new Mt,a=new gu({depthPacking:nM}),c=new vu,l={},u=t.maxTextureSize,d={[Xn]:nn,[nn]:Xn,[ui]:ui},f=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:_P,fragmentShader:xP}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new Qt;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new yt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hm;let p=this.type;this.render=function(R,D,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let M=n.getRenderTarget(),x=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Fi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let B=p!==li&&this.type===li,X=p===li&&this.type!==li;for(let Y=0,j=R.length;Y<j;Y++){let K=R[Y],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let re=H.getFrameExtents();if(r.multiply(re),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,H.mapSize.y=s.y)),H.map===null||B===!0||X===!0){let xe=this.type!==li?{minFilter:Rn,magFilter:Rn}:{};H.map!==null&&H.map.dispose(),H.map=new ai(r.x,r.y,xe),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let de=H.getViewportCount();for(let xe=0;xe<de;xe++){let We=H.getViewport(xe);o.set(s.x*We.x,s.y*We.y,s.x*We.z,s.y*We.w),G.viewport(o),H.updateMatrices(K,xe),i=H.getFrustum(),S(D,L,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===li&&C(H,L),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,x,I)};function C(R,D){let L=e.update(y);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ai(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(D,null,L,f,y,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(D,null,L,h,y,null)}function b(R,D,L,M){let x=null,I=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)x=I;else if(x=L.isPointLight===!0?c:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let G=x.uuid,B=D.uuid,X=l[G];X===void 0&&(X={},l[G]=X);let Y=X[B];Y===void 0&&(Y=x.clone(),X[B]=Y,D.addEventListener("dispose",O)),x=Y}if(x.visible=D.visible,x.wireframe=D.wireframe,M===li?x.side=D.shadowSide!==null?D.shadowSide:D.side:x.side=D.shadowSide!==null?D.shadowSide:d[D.side],x.alphaMap=D.alphaMap,x.alphaTest=D.alphaTest,x.map=D.map,x.clipShadows=D.clipShadows,x.clippingPlanes=D.clippingPlanes,x.clipIntersection=D.clipIntersection,x.displacementMap=D.displacementMap,x.displacementScale=D.displacementScale,x.displacementBias=D.displacementBias,x.wireframeLinewidth=D.wireframeLinewidth,x.linewidth=D.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let G=n.properties.get(x);G.light=L}return x}function S(R,D,L,M,x){if(R.visible===!1)return;if(R.layers.test(D.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===li)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);let B=e.update(R),X=R.material;if(Array.isArray(X)){let Y=B.groups;for(let j=0,K=Y.length;j<K;j++){let H=Y[j],re=X[H.materialIndex];if(re&&re.visible){let de=b(R,re,M,x);R.onBeforeShadow(n,R,D,L,B,de,H),n.renderBufferDirect(L,null,B,de,R,H),R.onAfterShadow(n,R,D,L,B,de,H)}}}else if(X.visible){let Y=b(R,X,M,x);R.onBeforeShadow(n,R,D,L,B,Y,null),n.renderBufferDirect(L,null,B,Y,R,null),R.onAfterShadow(n,R,D,L,B,Y,null)}}let G=R.children;for(let B=0,X=G.length;B<X;B++)S(G[B],D,L,M,x)}function O(R){R.target.removeEventListener("dispose",O);for(let L in l){let M=l[L],x=R.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}var EP={[Cu]:Du,[Iu]:Nu,[Au]:Pu,[zr]:Ru,[Du]:Cu,[Nu]:Iu,[Pu]:Au,[Ru]:zr};function SP(n,e){function t(){let A=!1,ae=new Mt,V=null,q=new Mt(0,0,0,0);return{setMask:function(le){V!==le&&!A&&(n.colorMask(le,le,le,le),V=le)},setLocked:function(le){A=le},setClear:function(le,ce,Ue,bt,qt){qt===!0&&(le*=bt,ce*=bt,Ue*=bt),ae.set(le,ce,Ue,bt),q.equals(ae)===!1&&(n.clearColor(le,ce,Ue,bt),q.copy(ae))},reset:function(){A=!1,V=null,q.set(-1,0,0,0)}}}function i(){let A=!1,ae=!1,V=null,q=null,le=null;return{setReversed:function(ce){if(ae!==ce){let Ue=e.get("EXT_clip_control");ce?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ae=ce;let bt=le;le=null,this.setClear(bt)}},getReversed:function(){return ae},setTest:function(ce){ce?se(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(ce){V!==ce&&!A&&(n.depthMask(ce),V=ce)},setFunc:function(ce){if(ae&&(ce=EP[ce]),q!==ce){switch(ce){case Cu:n.depthFunc(n.NEVER);break;case Du:n.depthFunc(n.ALWAYS);break;case Iu:n.depthFunc(n.LESS);break;case zr:n.depthFunc(n.LEQUAL);break;case Au:n.depthFunc(n.EQUAL);break;case Ru:n.depthFunc(n.GEQUAL);break;case Nu:n.depthFunc(n.GREATER);break;case Pu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=ce}},setLocked:function(ce){A=ce},setClear:function(ce){le!==ce&&(ae&&(ce=1-ce),n.clearDepth(ce),le=ce)},reset:function(){A=!1,V=null,q=null,le=null,ae=!1}}}function r(){let A=!1,ae=null,V=null,q=null,le=null,ce=null,Ue=null,bt=null,qt=null;return{setTest:function(dt){A||(dt?se(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(dt){ae!==dt&&!A&&(n.stencilMask(dt),ae=dt)},setFunc:function(dt,Pn,pi){(V!==dt||q!==Pn||le!==pi)&&(n.stencilFunc(dt,Pn,pi),V=dt,q=Pn,le=pi)},setOp:function(dt,Pn,pi){(ce!==dt||Ue!==Pn||bt!==pi)&&(n.stencilOp(dt,Pn,pi),ce=dt,Ue=Pn,bt=pi)},setLocked:function(dt){A=dt},setClear:function(dt){qt!==dt&&(n.clearStencil(dt),qt=dt)},reset:function(){A=!1,ae=null,V=null,q=null,le=null,ce=null,Ue=null,bt=null,qt=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,C=null,b=null,S=null,O=null,R=null,D=new Pe(0,0,0),L=0,M=!1,x=null,I=null,G=null,B=null,X=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,K=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),j=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),j=K>=2);let re=null,de={},xe=n.getParameter(n.SCISSOR_BOX),We=n.getParameter(n.VIEWPORT),pt=new Mt().fromArray(xe),W=new Mt().fromArray(We);function ee(A,ae,V,q){let le=new Uint8Array(4),ce=n.createTexture();n.bindTexture(A,ce),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<V;Ue++)A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,q,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(ae+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return ce}let ve={};ve[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc(zr),et(!1),Ye(fm),se(n.CULL_FACE),T(Fi);function se(A){u[A]!==!0&&(n.enable(A),u[A]=!0)}function be(A){u[A]!==!1&&(n.disable(A),u[A]=!1)}function at(A,ae){return d[A]!==ae?(n.bindFramebuffer(A,ae),d[A]=ae,A===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ae),A===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ie(A,ae){let V=h,q=!1;if(A){V=f.get(ae),V===void 0&&(V=[],f.set(ae,V));let le=A.textures;if(V.length!==le.length||V[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Ue=le.length;ce<Ue;ce++)V[ce]=n.COLOR_ATTACHMENT0+ce;V.length=le.length,q=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,q=!0);q&&n.drawBuffers(V)}function It(A){return g!==A?(n.useProgram(A),g=A,!0):!1}let wt={[cr]:n.FUNC_ADD,[Dx]:n.FUNC_SUBTRACT,[Ix]:n.FUNC_REVERSE_SUBTRACT};wt[Ax]=n.MIN,wt[Rx]=n.MAX;let Xe={[Nx]:n.ZERO,[Px]:n.ONE,[Ox]:n.SRC_COLOR,[ru]:n.SRC_ALPHA,[Vx]:n.SRC_ALPHA_SATURATE,[Ux]:n.DST_COLOR,[Fx]:n.DST_ALPHA,[Lx]:n.ONE_MINUS_SRC_COLOR,[su]:n.ONE_MINUS_SRC_ALPHA,[Bx]:n.ONE_MINUS_DST_COLOR,[kx]:n.ONE_MINUS_DST_ALPHA,[Hx]:n.CONSTANT_COLOR,[zx]:n.ONE_MINUS_CONSTANT_COLOR,[Gx]:n.CONSTANT_ALPHA,[Wx]:n.ONE_MINUS_CONSTANT_ALPHA};function T(A,ae,V,q,le,ce,Ue,bt,qt,dt){if(A===Fi){y===!0&&(be(n.BLEND),y=!1);return}if(y===!1&&(se(n.BLEND),y=!0),A!==Cx){if(A!==m||dt!==M){if((p!==cr||S!==cr)&&(n.blendEquation(n.FUNC_ADD),p=cr,S=cr),dt)switch(A){case Hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pm:n.blendFunc(n.ONE,n.ONE);break;case mm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pm:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case mm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}C=null,b=null,O=null,R=null,D.set(0,0,0),L=0,m=A,M=dt}return}le=le||ae,ce=ce||V,Ue=Ue||q,(ae!==p||le!==S)&&(n.blendEquationSeparate(wt[ae],wt[le]),p=ae,S=le),(V!==C||q!==b||ce!==O||Ue!==R)&&(n.blendFuncSeparate(Xe[V],Xe[q],Xe[ce],Xe[Ue]),C=V,b=q,O=ce,R=Ue),(bt.equals(D)===!1||qt!==L)&&(n.blendColor(bt.r,bt.g,bt.b,qt),D.copy(bt),L=qt),m=A,M=!1}function En(A,ae){A.side===ui?be(n.CULL_FACE):se(n.CULL_FACE);let V=A.side===nn;ae&&(V=!V),et(V),A.blending===Hr&&A.transparent===!1?T(Fi):T(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),o.setFunc(A.depthFunc),o.setTest(A.depthTest),o.setMask(A.depthWrite),s.setMask(A.colorWrite);let q=A.stencilWrite;a.setTest(q),q&&(a.setMask(A.stencilWriteMask),a.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),a.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),_t(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function et(A){x!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),x=A)}function Ye(A){A!==wx?(se(n.CULL_FACE),A!==I&&(A===fm?n.cullFace(n.BACK):A===bx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),I=A}function Me(A){A!==G&&(j&&n.lineWidth(A),G=A)}function _t(A,ae,V){A?(se(n.POLYGON_OFFSET_FILL),(B!==ae||X!==V)&&(n.polygonOffset(ae,V),B=ae,X=V)):be(n.POLYGON_OFFSET_FILL)}function _e(A){A?se(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function E(A){A===void 0&&(A=n.TEXTURE0+Y-1),re!==A&&(n.activeTexture(A),re=A)}function v(A,ae,V){V===void 0&&(re===null?V=n.TEXTURE0+Y-1:V=re);let q=de[V];q===void 0&&(q={type:void 0,texture:void 0},de[V]=q),(q.type!==A||q.texture!==ae)&&(re!==V&&(n.activeTexture(V),re=V),n.bindTexture(A,ae||ve[A]),q.type=A,q.texture=ae)}function F(){let A=de[re];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function $(){try{n.compressedTexImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(){try{n.compressedTexImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function z(){try{n.texSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ye(){try{n.texSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function oe(){try{n.compressedTexSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function fe(){try{n.compressedTexSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function tt(){try{n.texStorage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Q(){try{n.texStorage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function he(){try{n.texImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ce(){try{n.texImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Re(A){pt.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),pt.copy(A))}function pe(A){W.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),W.copy(A))}function Ze(A,ae){let V=l.get(ae);V===void 0&&(V=new WeakMap,l.set(ae,V));let q=V.get(A);q===void 0&&(q=n.getUniformBlockIndex(ae,A.name),V.set(A,q))}function Ve(A,ae){let q=l.get(ae).get(A);c.get(ae)!==q&&(n.uniformBlockBinding(ae,q,A.__bindingPointIndex),c.set(ae,q))}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},re=null,de={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,C=null,b=null,S=null,O=null,R=null,D=new Pe(0,0,0),L=0,M=!1,x=null,I=null,G=null,B=null,X=null,pt.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:be,bindFramebuffer:at,drawBuffers:Ie,useProgram:It,setBlending:T,setMaterial:En,setFlipSided:et,setCullFace:Ye,setLineWidth:Me,setPolygonOffset:_t,setScissorTest:_e,activeTexture:E,bindTexture:v,unbindTexture:F,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:he,texImage3D:Ce,updateUBOMapping:Ze,uniformBlockBinding:Ve,texStorage2D:tt,texStorage3D:Q,texSubImage2D:z,texSubImage3D:ye,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:Re,viewport:pe,reset:gt}}function wP(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $e,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return h?new OffscreenCanvas(E,v):_a("canvas")}function y(E,v,F){let $=1,Z=_e(E);if((Z.width>F||Z.height>F)&&($=F/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let z=Math.floor($*Z.width),ye=Math.floor($*Z.height);d===void 0&&(d=g(z,ye));let oe=v?g(z,ye):d;return oe.width=z,oe.height=ye,oe.getContext("2d").drawImage(E,0,0,z,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+z+"x"+ye+")."),oe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function C(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(E,v,F,$,Z=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let z=v;if(v===n.RED&&(F===n.FLOAT&&(z=n.R32F),F===n.HALF_FLOAT&&(z=n.R16F),F===n.UNSIGNED_BYTE&&(z=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.R8UI),F===n.UNSIGNED_SHORT&&(z=n.R16UI),F===n.UNSIGNED_INT&&(z=n.R32UI),F===n.BYTE&&(z=n.R8I),F===n.SHORT&&(z=n.R16I),F===n.INT&&(z=n.R32I)),v===n.RG&&(F===n.FLOAT&&(z=n.RG32F),F===n.HALF_FLOAT&&(z=n.RG16F),F===n.UNSIGNED_BYTE&&(z=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.RG8UI),F===n.UNSIGNED_SHORT&&(z=n.RG16UI),F===n.UNSIGNED_INT&&(z=n.RG32UI),F===n.BYTE&&(z=n.RG8I),F===n.SHORT&&(z=n.RG16I),F===n.INT&&(z=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.RGB8UI),F===n.UNSIGNED_SHORT&&(z=n.RGB16UI),F===n.UNSIGNED_INT&&(z=n.RGB32UI),F===n.BYTE&&(z=n.RGB8I),F===n.SHORT&&(z=n.RGB16I),F===n.INT&&(z=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),F===n.UNSIGNED_INT&&(z=n.RGBA32UI),F===n.BYTE&&(z=n.RGBA8I),F===n.SHORT&&(z=n.RGBA16I),F===n.INT&&(z=n.RGBA32I)),v===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),v===n.RGBA){let ye=Z?va:st.getTransfer($);F===n.FLOAT&&(z=n.RGBA32F),F===n.HALF_FLOAT&&(z=n.RGBA16F),F===n.UNSIGNED_BYTE&&(z=ye===ft?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function S(E,v){let F;return E?v===null||v===mr||v===fo?F=n.DEPTH24_STENCIL8:v===fi?F=n.DEPTH32F_STENCIL8:v===lo&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===mr||v===fo?F=n.DEPTH_COMPONENT24:v===fi?F=n.DEPTH_COMPONENT32F:v===lo&&(F=n.DEPTH_COMPONENT16),F}function O(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Rn&&E.minFilter!==Yn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function R(E){let v=E.target;v.removeEventListener("dispose",R),L(v),v.isVideoTexture&&u.delete(v)}function D(E){let v=E.target;v.removeEventListener("dispose",D),x(v)}function L(E){let v=i.get(E);if(v.__webglInit===void 0)return;let F=E.source,$=f.get(F);if($){let Z=$[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(E),Object.keys($).length===0&&f.delete(F)}i.remove(E)}function M(E){let v=i.get(E);n.deleteTexture(v.__webglTexture);let F=E.source,$=f.get(F);delete $[v.__cacheKey],o.memory.textures--}function x(E){let v=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let Z=0;Z<v.__webglFramebuffer[$].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[$][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=E.textures;for(let $=0,Z=F.length;$<Z;$++){let z=i.get(F[$]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(F[$])}i.remove(E)}let I=0;function G(){I=0}function B(){let E=I;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),I+=1,E}function X(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function Y(E,v){let F=i.get(E);if(E.isVideoTexture&&Me(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){let $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(F,E,v);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function j(E,v){let F=i.get(E);if(E.version>0&&F.__version!==E.version){W(F,E,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function K(E,v){let F=i.get(E);if(E.version>0&&F.__version!==E.version){W(F,E,v);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function H(E,v){let F=i.get(E);if(E.version>0&&F.__version!==E.version){ee(F,E,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}let re={[ou]:n.REPEAT,[ar]:n.CLAMP_TO_EDGE,[au]:n.MIRRORED_REPEAT},de={[Rn]:n.NEAREST,[eM]:n.NEAREST_MIPMAP_NEAREST,[La]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[ku]:n.LINEAR_MIPMAP_NEAREST,[pr]:n.LINEAR_MIPMAP_LINEAR},xe={[rM]:n.NEVER,[uM]:n.ALWAYS,[sM]:n.LESS,[Dm]:n.LEQUAL,[oM]:n.EQUAL,[lM]:n.GEQUAL,[aM]:n.GREATER,[cM]:n.NOTEQUAL};function We(E,v){if(v.type===fi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Yn||v.magFilter===ku||v.magFilter===La||v.magFilter===pr||v.minFilter===Yn||v.minFilter===ku||v.minFilter===La||v.minFilter===pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,re[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,re[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,re[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,de[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,de[v.minFilter]),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Rn||v.minFilter!==La&&v.minFilter!==pr||v.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function pt(E,v){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",R));let $=v.source,Z=f.get($);Z===void 0&&(Z={},f.set($,Z));let z=X(v);if(z!==E.__cacheKey){Z[z]===void 0&&(Z[z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[z].usedTimes++;let ye=Z[E.__cacheKey];ye!==void 0&&(Z[E.__cacheKey].usedTimes--,ye.usedTimes===0&&M(v)),E.__cacheKey=z,E.__webglTexture=Z[z].texture}return F}function W(E,v,F){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);let Z=pt(E,v),z=v.source;t.bindTexture($,E.__webglTexture,n.TEXTURE0+F);let ye=i.get(z);if(z.version!==ye.__version||Z===!0){t.activeTexture(n.TEXTURE0+F);let oe=st.getPrimaries(st.workingColorSpace),fe=v.colorSpace===Ui?null:st.getPrimaries(v.colorSpace),tt=v.colorSpace===Ui||oe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Q=y(v.image,!1,r.maxTextureSize);Q=_t(v,Q);let he=s.convert(v.format,v.colorSpace),Ce=s.convert(v.type),Re=b(v.internalFormat,he,Ce,v.colorSpace,v.isVideoTexture);We($,v);let pe,Ze=v.mipmaps,Ve=v.isVideoTexture!==!0,gt=ye.__version===void 0||Z===!0,A=z.dataReady,ae=O(v,Q);if(v.isDepthTexture)Re=S(v.format===ho,v.type),gt&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Re,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Re,Q.width,Q.height,0,he,Ce,null));else if(v.isDataTexture)if(Ze.length>0){Ve&&gt&&t.texStorage2D(n.TEXTURE_2D,ae,Re,Ze[0].width,Ze[0].height);for(let V=0,q=Ze.length;V<q;V++)pe=Ze[V],Ve?A&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,he,Ce,pe.data):t.texImage2D(n.TEXTURE_2D,V,Re,pe.width,pe.height,0,he,Ce,pe.data);v.generateMipmaps=!1}else Ve?(gt&&t.texStorage2D(n.TEXTURE_2D,ae,Re,Q.width,Q.height),A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,he,Ce,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Re,Q.width,Q.height,0,he,Ce,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ve&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Re,Ze[0].width,Ze[0].height,Q.depth);for(let V=0,q=Ze.length;V<q;V++)if(pe=Ze[V],v.format!==Nn)if(he!==null)if(Ve){if(A)if(v.layerUpdates.size>0){let le=Om(pe.width,pe.height,v.format,v.type);for(let ce of v.layerUpdates){let Ue=pe.data.subarray(ce*le/pe.data.BYTES_PER_ELEMENT,(ce+1)*le/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,ce,pe.width,pe.height,1,he,Ue)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,Q.depth,he,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Re,pe.width,pe.height,Q.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?A&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,Q.depth,he,Ce,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,Re,pe.width,pe.height,Q.depth,0,he,Ce,pe.data)}else{Ve&&gt&&t.texStorage2D(n.TEXTURE_2D,ae,Re,Ze[0].width,Ze[0].height);for(let V=0,q=Ze.length;V<q;V++)pe=Ze[V],v.format!==Nn?he!==null?Ve?A&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,he,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,V,Re,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?A&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,he,Ce,pe.data):t.texImage2D(n.TEXTURE_2D,V,Re,pe.width,pe.height,0,he,Ce,pe.data)}else if(v.isDataArrayTexture)if(Ve){if(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Re,Q.width,Q.height,Q.depth),A)if(v.layerUpdates.size>0){let V=Om(Q.width,Q.height,v.format,v.type);for(let q of v.layerUpdates){let le=Q.data.subarray(q*V/Q.data.BYTES_PER_ELEMENT,(q+1)*V/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,he,Ce,le)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,he,Ce,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,Q.width,Q.height,Q.depth,0,he,Ce,Q.data);else if(v.isData3DTexture)Ve?(gt&&t.texStorage3D(n.TEXTURE_3D,ae,Re,Q.width,Q.height,Q.depth),A&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,he,Ce,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Re,Q.width,Q.height,Q.depth,0,he,Ce,Q.data);else if(v.isFramebufferTexture){if(gt)if(Ve)t.texStorage2D(n.TEXTURE_2D,ae,Re,Q.width,Q.height);else{let V=Q.width,q=Q.height;for(let le=0;le<ae;le++)t.texImage2D(n.TEXTURE_2D,le,Re,V,q,0,he,Ce,null),V>>=1,q>>=1}}else if(Ze.length>0){if(Ve&&gt){let V=_e(Ze[0]);t.texStorage2D(n.TEXTURE_2D,ae,Re,V.width,V.height)}for(let V=0,q=Ze.length;V<q;V++)pe=Ze[V],Ve?A&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,he,Ce,pe):t.texImage2D(n.TEXTURE_2D,V,Re,he,Ce,pe);v.generateMipmaps=!1}else if(Ve){if(gt){let V=_e(Q);t.texStorage2D(n.TEXTURE_2D,ae,Re,V.width,V.height)}A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Ce,Q)}else t.texImage2D(n.TEXTURE_2D,0,Re,he,Ce,Q);m(v)&&p($),ye.__version=z.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ee(E,v,F){if(v.image.length!==6)return;let $=pt(E,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);let z=i.get(Z);if(Z.version!==z.__version||$===!0){t.activeTexture(n.TEXTURE0+F);let ye=st.getPrimaries(st.workingColorSpace),oe=v.colorSpace===Ui?null:st.getPrimaries(v.colorSpace),fe=v.colorSpace===Ui||ye===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let tt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,he=[];for(let q=0;q<6;q++)!tt&&!Q?he[q]=y(v.image[q],!0,r.maxCubemapSize):he[q]=Q?v.image[q].image:v.image[q],he[q]=_t(v,he[q]);let Ce=he[0],Re=s.convert(v.format,v.colorSpace),pe=s.convert(v.type),Ze=b(v.internalFormat,Re,pe,v.colorSpace),Ve=v.isVideoTexture!==!0,gt=z.__version===void 0||$===!0,A=Z.dataReady,ae=O(v,Ce);We(n.TEXTURE_CUBE_MAP,v);let V;if(tt){Ve&&gt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Ze,Ce.width,Ce.height);for(let q=0;q<6;q++){V=he[q].mipmaps;for(let le=0;le<V.length;le++){let ce=V[le];v.format!==Nn?Re!==null?Ve?A&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,0,0,ce.width,ce.height,Re,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,Ze,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,0,0,ce.width,ce.height,Re,pe,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,Ze,ce.width,ce.height,0,Re,pe,ce.data)}}}else{if(V=v.mipmaps,Ve&&gt){V.length>0&&ae++;let q=_e(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Ze,q.width,q.height)}for(let q=0;q<6;q++)if(Q){Ve?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,he[q].width,he[q].height,Re,pe,he[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ze,he[q].width,he[q].height,0,Re,pe,he[q].data);for(let le=0;le<V.length;le++){let Ue=V[le].image[q].image;Ve?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,0,0,Ue.width,Ue.height,Re,pe,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,Ze,Ue.width,Ue.height,0,Re,pe,Ue.data)}}else{Ve?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Re,pe,he[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ze,Re,pe,he[q]);for(let le=0;le<V.length;le++){let ce=V[le];Ve?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,0,0,Re,pe,ce.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,Ze,Re,pe,ce.image[q])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),z.__version=Z.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ve(E,v,F,$,Z,z){let ye=s.convert(F.format,F.colorSpace),oe=s.convert(F.type),fe=b(F.internalFormat,ye,oe,F.colorSpace),tt=i.get(v),Q=i.get(F);if(Q.__renderTarget=v,!tt.__hasExternalTextures){let he=Math.max(1,v.width>>z),Ce=Math.max(1,v.height>>z);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,z,fe,he,Ce,v.depth,0,ye,oe,null):t.texImage2D(Z,z,fe,he,Ce,0,ye,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Ye(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Z,Q.__webglTexture,0,et(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Z,Q.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(E,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer){let $=v.depthTexture,Z=$&&$.isDepthTexture?$.type:null,z=S(v.stencilBuffer,Z),ye=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=et(v);Ye(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,z,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,z,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,E)}else{let $=v.textures;for(let Z=0;Z<$.length;Z++){let z=$[Z],ye=s.convert(z.format,z.colorSpace),oe=s.convert(z.type),fe=b(z.internalFormat,ye,oe,z.colorSpace),tt=et(v);F&&Ye(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,fe,v.width,v.height):Ye(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt,fe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,fe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=i.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);let Z=$.__webglTexture,z=et(v);if(v.depthTexture.format===no)Ye(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(v.depthTexture.format===ho)Ye(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function at(E){let v=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let $=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=$}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");be(v.__webglFramebuffer,E)}else if(F){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),se(v.__webglDepthbuffer[$],E,!1);else{let Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),se(v.__webglDepthbuffer,E,!1);else{let $=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Z)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(E,v,F){let $=i.get(E);v!==void 0&&ve($.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&at(E)}function It(E){let v=E.texture,F=i.get(E),$=i.get(v);E.addEventListener("dispose",D);let Z=E.textures,z=E.isWebGLCubeRenderTarget===!0,ye=Z.length>1;if(ye||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,o.memory.textures++),z){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let fe=0;fe<v.mipmaps.length;fe++)F.__webglFramebuffer[oe][fe]=n.createFramebuffer()}else F.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)F.__webglFramebuffer[oe]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(ye)for(let oe=0,fe=Z.length;oe<fe;oe++){let tt=i.get(Z[oe]);tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&Ye(E)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let oe=0;oe<Z.length;oe++){let fe=Z[oe];F.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[oe]);let tt=s.convert(fe.format,fe.colorSpace),Q=s.convert(fe.type),he=b(fe.internalFormat,tt,Q,fe.colorSpace,E.isXRRenderTarget===!0),Ce=et(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,he,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,F.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),se(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),We(n.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ve(F.__webglFramebuffer[oe][fe],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else ve(F.__webglFramebuffer[oe],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let oe=0,fe=Z.length;oe<fe;oe++){let tt=Z[oe],Q=i.get(tt);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),We(n.TEXTURE_2D,tt),ve(F.__webglFramebuffer,E,tt,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(tt)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(oe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,$.__webglTexture),We(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ve(F.__webglFramebuffer[fe],E,v,n.COLOR_ATTACHMENT0,oe,fe);else ve(F.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,oe,0);m(v)&&p(oe),t.unbindTexture()}E.depthBuffer&&at(E)}function wt(E){let v=E.textures;for(let F=0,$=v.length;F<$;F++){let Z=v[F];if(m(Z)){let z=C(E),ye=i.get(Z).__webglTexture;t.bindTexture(z,ye),p(z),t.unbindTexture()}}}let Xe=[],T=[];function En(E){if(E.samples>0){if(Ye(E)===!1){let v=E.textures,F=E.width,$=E.height,Z=n.COLOR_BUFFER_BIT,z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(E),oe=v.length>1;if(oe)for(let fe=0;fe<v.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let fe=0;fe<v.length;fe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[fe]);let tt=i.get(v[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,F,$,0,0,F,$,Z,n.NEAREST),c===!0&&(Xe.length=0,T.length=0,Xe.push(n.COLOR_ATTACHMENT0+fe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Xe.push(z),T.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let fe=0;fe<v.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,ye.__webglColorRenderbuffer[fe]);let tt=i.get(v[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,tt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let v=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function et(E){return Math.min(r.maxSamples,E.samples)}function Ye(E){let v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Me(E){let v=o.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function _t(E,v){let F=E.colorSpace,$=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Gr&&F!==Ui&&(st.getTransfer(F)===ft?($!==Nn||Z!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function _e(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=j,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=Ie,this.setupRenderTarget=It,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=En,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Ye}function bP(n,e){function t(i,r=Ui){let s,o=st.getTransfer(r);if(i===di)return n.UNSIGNED_BYTE;if(i===Bu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Vu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_m)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vm)return n.BYTE;if(i===ym)return n.SHORT;if(i===lo)return n.UNSIGNED_SHORT;if(i===Uu)return n.INT;if(i===mr)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===uo)return n.HALF_FLOAT;if(i===xm)return n.ALPHA;if(i===Mm)return n.RGB;if(i===Nn)return n.RGBA;if(i===Em)return n.LUMINANCE;if(i===Sm)return n.LUMINANCE_ALPHA;if(i===no)return n.DEPTH_COMPONENT;if(i===ho)return n.DEPTH_STENCIL;if(i===wm)return n.RED;if(i===Hu)return n.RED_INTEGER;if(i===bm)return n.RG;if(i===zu)return n.RG_INTEGER;if(i===Gu)return n.RGBA_INTEGER;if(i===Fa||i===ka||i===Ua||i===Ba)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Fa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Fa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ka)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ua)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ba)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wu||i===ju||i===$u||i===qu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ju)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$u)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xu||i===Yu||i===Zu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Xu||i===Yu)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Zu)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ku||i===Ju||i===Qu||i===ed||i===td||i===nd||i===id||i===rd||i===sd||i===od||i===ad||i===cd||i===ld||i===ud)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ku)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ju)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qu)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ed)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===td)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===id)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===od)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ad)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ld)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ud)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Va||i===dd||i===fd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Va)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tm||i===hd||i===pd||i===md)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Va)return s.COMPRESSED_RED_RGTC1_EXT;if(i===hd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===md)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var TP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,qm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new gr,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new xn({vertexShader:TP,fragmentShader:CP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new Ia(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xm=class extends Oi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,y=new qm,m=t.getContextAttributes(),p=null,C=null,b=[],S=[],O=new $e,R=null,D=new Jt;D.viewport=new Mt;let L=new Jt;L.viewport=new Mt;let M=[D,L],x=new bu,I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=b[W];return ee===void 0&&(ee=new oo,b[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=b[W];return ee===void 0&&(ee=new oo,b[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=b[W];return ee===void 0&&(ee=new oo,b[W]=ee),ee.getHandSpace()};function B(W){let ee=S.indexOf(W.inputSource);if(ee===-1)return;let ve=b[ee];ve!==void 0&&(ve.update(W.inputSource,W.frame,l||o),ve.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Y);for(let W=0;W<b.length;W++){let ee=S[W];ee!==null&&(S[W]=null,b[W].disconnect(ee))}I=null,G=null,y.reset(),e.setRenderTarget(p),h=null,f=null,d=null,r=null,C=null,pt.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(W){return es(this,null,function*(){if(r=W,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),R=e.getPixelRatio(),e.getSize(O),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,se=null,be=null;m.depth&&(be=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=m.stencil?ho:no,se=m.stencil?fo:mr);let at={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(at),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),C=new ai(f.textureWidth,f.textureHeight,{format:Nn,type:di,depthTexture:new Da(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ve={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),C=new ai(h.framebufferWidth,h.framebufferHeight,{format:Nn,type:di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),pt.setContext(r),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(W){for(let ee=0;ee<W.removed.length;ee++){let ve=W.removed[ee],se=S.indexOf(ve);se>=0&&(S[se]=null,b[se].disconnect(ve))}for(let ee=0;ee<W.added.length;ee++){let ve=W.added[ee],se=S.indexOf(ve);if(se===-1){for(let at=0;at<b.length;at++)if(at>=S.length){S.push(ve),se=at;break}else if(S[at]===null){S[at]=ve,se=at;break}if(se===-1)break}let be=b[se];be&&be.connect(ve)}}let j=new w,K=new w;function H(W,ee,ve){j.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(ve.matrixWorld);let se=j.distanceTo(K),be=ee.projectionMatrix.elements,at=ve.projectionMatrix.elements,Ie=be[14]/(be[10]-1),It=be[14]/(be[10]+1),wt=(be[9]+1)/be[5],Xe=(be[9]-1)/be[5],T=(be[8]-1)/be[0],En=(at[8]+1)/at[0],et=Ie*T,Ye=Ie*En,Me=se/(-T+En),_t=Me*-T;if(ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(_t),W.translateZ(Me),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),be[10]===-1)W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let _e=Ie+Me,E=It+Me,v=et-_t,F=Ye+(se-_t),$=wt*It/E*_e,Z=Xe*It/E*_e;W.projectionMatrix.makePerspective(v,F,$,Z,_e,E),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function re(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ee=W.near,ve=W.far;y.texture!==null&&(y.depthNear>0&&(ee=y.depthNear),y.depthFar>0&&(ve=y.depthFar)),x.near=L.near=D.near=ee,x.far=L.far=D.far=ve,(I!==x.near||G!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),I=x.near,G=x.far),D.layers.mask=W.layers.mask|2,L.layers.mask=W.layers.mask|4,x.layers.mask=D.layers.mask|L.layers.mask;let se=W.parent,be=x.cameras;re(x,se);for(let at=0;at<be.length;at++)re(be[at],se);be.length===2?H(x,D,L):x.projectionMatrix.copy(D.projectionMatrix),de(W,x,se)};function de(W,ee,ve){ve===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(ve.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=lu*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let xe=null;function We(W,ee){if(u=ee.getViewerPose(l||o),g=ee,u!==null){let ve=u.views;h!==null&&(e.setRenderTargetFramebuffer(C,h.framebuffer),e.setRenderTarget(C));let se=!1;ve.length!==x.cameras.length&&(x.cameras.length=0,se=!0);for(let Ie=0;Ie<ve.length;Ie++){let It=ve[Ie],wt=null;if(h!==null)wt=h.getViewport(It);else{let T=d.getViewSubImage(f,It);wt=T.viewport,Ie===0&&(e.setRenderTargetTextures(C,T.colorTexture,T.depthStencilTexture),e.setRenderTarget(C))}let Xe=M[Ie];Xe===void 0&&(Xe=new Jt,Xe.layers.enable(Ie),Xe.viewport=new Mt,M[Ie]=Xe),Xe.matrix.fromArray(It.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(It.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(wt.x,wt.y,wt.width,wt.height),Ie===0&&(x.matrix.copy(Xe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),se===!0&&x.cameras.push(Xe)}let be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){let Ie=d.getDepthInformation(ve[0]);Ie&&Ie.isValid&&Ie.texture&&y.init(e,Ie,r.renderState)}}for(let ve=0;ve<b.length;ve++){let se=S[ve],be=b[ve];se!==null&&be!==void 0&&be.update(se,ee,l||o)}xe&&xe(W,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let pt=new VM;pt.setAnimationLoop(We),this.setAnimationLoop=function(W){xe=W},this.dispose=function(){}}},Zr=new ur,DP=new St;function IP(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Rm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,C,b,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,C,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let C=e.get(p),b=C.envMap,S=C.envMapRotation;b&&(m.envMap.value=b,Zr.copy(S),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),m.envMapRotation.value.setFromMatrix4(DP.makeRotationFromEuler(Zr)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,C,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*C,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,C){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let C=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function AP(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,b){let S=b.program;i.uniformBlockBinding(C,S)}function l(C,b){let S=r[C.id];S===void 0&&(g(C),S=u(C),r[C.id]=S,C.addEventListener("dispose",m));let O=b.program;i.updateUBOMapping(C,O);let R=e.render.frame;s[C.id]!==R&&(f(C),s[C.id]=R)}function u(C){let b=d();C.__bindingPointIndex=b;let S=n.createBuffer(),O=C.__size,R=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,O,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function d(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){let b=r[C.id],S=C.uniforms,O=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,D=S.length;R<D;R++){let L=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,x=L.length;M<x;M++){let I=L[M];if(h(I,R,M,O)===!0){let G=I.__offset,B=Array.isArray(I.value)?I.value:[I.value],X=0;for(let Y=0;Y<B.length;Y++){let j=B[Y],K=y(j);typeof j=="number"||typeof j=="boolean"?(I.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,G+X,I.__data)):j.isMatrix3?(I.__data[0]=j.elements[0],I.__data[1]=j.elements[1],I.__data[2]=j.elements[2],I.__data[3]=0,I.__data[4]=j.elements[3],I.__data[5]=j.elements[4],I.__data[6]=j.elements[5],I.__data[7]=0,I.__data[8]=j.elements[6],I.__data[9]=j.elements[7],I.__data[10]=j.elements[8],I.__data[11]=0):(j.toArray(I.__data,X),X+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(C,b,S,O){let R=C.value,D=b+"_"+S;if(O[D]===void 0)return typeof R=="number"||typeof R=="boolean"?O[D]=R:O[D]=R.clone(),!0;{let L=O[D];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return O[D]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(C){let b=C.uniforms,S=0,O=16;for(let D=0,L=b.length;D<L;D++){let M=Array.isArray(b[D])?b[D]:[b[D]];for(let x=0,I=M.length;x<I;x++){let G=M[x],B=Array.isArray(G.value)?G.value:[G.value];for(let X=0,Y=B.length;X<Y;X++){let j=B[X],K=y(j),H=S%O,re=H%K.boundary,de=H+re;S+=re,de!==0&&O-de<K.storage&&(S+=O-de),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=K.storage}}}let R=S%O;return R>0&&(S+=O-R),C.__size=S,C.__cache={},this}function y(C){let b={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(b.boundary=4,b.storage=4):C.isVector2?(b.boundary=8,b.storage=8):C.isVector3||C.isColor?(b.boundary=16,b.storage=12):C.isVector4?(b.boundary=16,b.storage=16):C.isMatrix3?(b.boundary=48,b.storage=48):C.isMatrix4?(b.boundary=64,b.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),b}function m(C){let b=C.target;b.removeEventListener("dispose",m);let S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(let C in r)n.deleteBuffer(r[C]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var xd=class{constructor(e={}){let{canvas:t=dM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,C=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,O=!1;this._outputColorSpace=_n;let R=0,D=0,L=null,M=-1,x=null,I=new Mt,G=new Mt,B=null,X=new Pe(0),Y=0,j=t.width,K=t.height,H=1,re=null,de=null,xe=new Mt(0,0,j,K),We=new Mt(0,0,j,K),pt=!1,W=new ao,ee=!1,ve=!1,se=new St,be=new St,at=new w,Ie=new Mt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function Xe(){return L===null?H:1}let T=i;function En(_,N){return t.getContext(_,N)}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tu}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ce,!1),T===null){let N="webgl2";if(T=En(N,_),T===null)throw En(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let et,Ye,Me,_t,_e,E,v,F,$,Z,z,ye,oe,fe,tt,Q,he,Ce,Re,pe,Ze,Ve,gt,A;function ae(){et=new X1(T),et.init(),Ve=new bP(T,et),Ye=new H1(T,et,e,Ve),Me=new SP(T,et),Ye.reverseDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),_t=new K1(T),_e=new uP,E=new wP(T,et,Me,_e,Ye,Ve,_t),v=new G1(S),F=new q1(S),$=new iA(T),gt=new B1(T,$),Z=new Y1(T,$,_t,gt),z=new Q1(T,Z,$,_t),Re=new J1(T,Ye,E),Q=new z1(_e),ye=new lP(S,v,F,et,Ye,gt,Q),oe=new IP(S,_e),fe=new fP,tt=new yP(et),Ce=new U1(S,v,F,Me,z,h,c),he=new MP(S,z,Ye),A=new AP(T,_t,Ye,Me),pe=new V1(T,et,_t),Ze=new Z1(T,et,_t),_t.programs=ye.programs,S.capabilities=Ye,S.extensions=et,S.properties=_e,S.renderLists=fe,S.shadowMap=he,S.state=Me,S.info=_t}ae();let V=new Xm(S,T);this.xr=V,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let _=et.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=et.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(_){_!==void 0&&(H=_,this.setSize(j,K,!1))},this.getSize=function(_){return _.set(j,K)},this.setSize=function(_,N,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=_,K=N,t.width=Math.floor(_*H),t.height=Math.floor(N*H),k===!0&&(t.style.width=_+"px",t.style.height=N+"px"),this.setViewport(0,0,_,N)},this.getDrawingBufferSize=function(_){return _.set(j*H,K*H).floor()},this.setDrawingBufferSize=function(_,N,k){j=_,K=N,H=k,t.width=Math.floor(_*k),t.height=Math.floor(N*k),this.setViewport(0,0,_,N)},this.getCurrentViewport=function(_){return _.copy(I)},this.getViewport=function(_){return _.copy(xe)},this.setViewport=function(_,N,k,U){_.isVector4?xe.set(_.x,_.y,_.z,_.w):xe.set(_,N,k,U),Me.viewport(I.copy(xe).multiplyScalar(H).round())},this.getScissor=function(_){return _.copy(We)},this.setScissor=function(_,N,k,U){_.isVector4?We.set(_.x,_.y,_.z,_.w):We.set(_,N,k,U),Me.scissor(G.copy(We).multiplyScalar(H).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(_){Me.setScissorTest(pt=_)},this.setOpaqueSort=function(_){re=_},this.setTransparentSort=function(_){de=_},this.getClearColor=function(_){return _.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(_=!0,N=!0,k=!0){let U=0;if(_){let P=!1;if(L!==null){let J=L.texture.format;P=J===Gu||J===zu||J===Hu}if(P){let J=L.texture.type,ne=J===di||J===mr||J===lo||J===fo||J===Bu||J===Vu,ue=Ce.getClearColor(),me=Ce.getClearAlpha(),Ne=ue.r,Ae=ue.g,Ee=ue.b;ne?(g[0]=Ne,g[1]=Ae,g[2]=Ee,g[3]=me,T.clearBufferuiv(T.COLOR,0,g)):(y[0]=Ne,y[1]=Ae,y[2]=Ee,y[3]=me,T.clearBufferiv(T.COLOR,0,y))}else U|=T.COLOR_BUFFER_BIT}N&&(U|=T.DEPTH_BUFFER_BIT),k&&(U|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Ce.dispose(),fe.dispose(),tt.dispose(),_e.dispose(),v.dispose(),F.dispose(),z.dispose(),gt.dispose(),A.dispose(),ye.dispose(),V.dispose(),V.removeEventListener("sessionstart",Jm),V.removeEventListener("sessionend",Qm),vr.stop()};function q(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;let _=_t.autoReset,N=he.enabled,k=he.autoUpdate,U=he.needsUpdate,P=he.type;ae(),_t.autoReset=_,he.enabled=N,he.autoUpdate=k,he.needsUpdate=U,he.type=P}function ce(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Ue(_){let N=_.target;N.removeEventListener("dispose",Ue),bt(N)}function bt(_){qt(_),_e.remove(_)}function qt(_){let N=_e.get(_).programs;N!==void 0&&(N.forEach(function(k){ye.releaseProgram(k)}),_.isShaderMaterial&&ye.releaseShaderCache(_))}this.renderBufferDirect=function(_,N,k,U,P,J){N===null&&(N=It);let ne=P.isMesh&&P.matrixWorld.determinant()<0,ue=jM(_,N,k,U,P);Me.setMaterial(U,ne);let me=k.index,Ne=1;if(U.wireframe===!0){if(me=Z.getWireframeAttribute(k),me===void 0)return;Ne=2}let Ae=k.drawRange,Ee=k.attributes.position,nt=Ae.start*Ne,ct=(Ae.start+Ae.count)*Ne;J!==null&&(nt=Math.max(nt,J.start*Ne),ct=Math.min(ct,(J.start+J.count)*Ne)),me!==null?(nt=Math.max(nt,0),ct=Math.min(ct,me.count)):Ee!=null&&(nt=Math.max(nt,0),ct=Math.min(ct,Ee.count));let Rt=ct-nt;if(Rt<0||Rt===1/0)return;gt.setup(P,U,ue,k,me);let Tt,ot=pe;if(me!==null&&(Tt=$.get(me),ot=Ze,ot.setIndex(Tt)),P.isMesh)U.wireframe===!0?(Me.setLineWidth(U.wireframeLinewidth*Xe()),ot.setMode(T.LINES)):ot.setMode(T.TRIANGLES);else if(P.isLine){let we=U.linewidth;we===void 0&&(we=1),Me.setLineWidth(we*Xe()),P.isLineSegments?ot.setMode(T.LINES):P.isLineLoop?ot.setMode(T.LINE_LOOP):ot.setMode(T.LINE_STRIP)}else P.isPoints?ot.setMode(T.POINTS):P.isSprite&&ot.setMode(T.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)za("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ot.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let we=P._multiDrawStarts,Gt=P._multiDrawCounts,lt=P._multiDrawCount,On=me?$.get(me).bytesPerElement:1,Qr=_e.get(U).currentProgram.getUniforms();for(let un=0;un<lt;un++)Qr.setValue(T,"_gl_DrawID",un),ot.render(we[un]/On,Gt[un])}else if(P.isInstancedMesh)ot.renderInstances(nt,Rt,P.count);else if(k.isInstancedBufferGeometry){let we=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Gt=Math.min(k.instanceCount,we);ot.renderInstances(nt,Rt,Gt)}else ot.render(nt,Rt)};function dt(_,N,k){_.transparent===!0&&_.side===ui&&_.forceSinglePass===!1?(_.side=nn,_.needsUpdate=!0,$a(_,N,k),_.side=Xn,_.needsUpdate=!0,$a(_,N,k),_.side=ui):$a(_,N,k)}this.compile=function(_,N,k=null){k===null&&(k=_),p=tt.get(k),p.init(N),b.push(p),k.traverseVisible(function(P){P.isLight&&P.layers.test(N.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),_!==k&&_.traverseVisible(function(P){P.isLight&&P.layers.test(N.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),p.setupLights();let U=new Set;return _.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let J=P.material;if(J)if(Array.isArray(J))for(let ne=0;ne<J.length;ne++){let ue=J[ne];dt(ue,k,P),U.add(ue)}else dt(J,k,P),U.add(J)}),p=b.pop(),U},this.compileAsync=function(_,N,k=null){let U=this.compile(_,N,k);return new Promise(P=>{function J(){if(U.forEach(function(ne){_e.get(ne).currentProgram.isReady()&&U.delete(ne)}),U.size===0){P(_);return}setTimeout(J,10)}et.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Pn=null;function pi(_){Pn&&Pn(_)}function Jm(){vr.stop()}function Qm(){vr.start()}let vr=new VM;vr.setAnimationLoop(pi),typeof self<"u"&&vr.setContext(self),this.setAnimationLoop=function(_){Pn=_,V.setAnimationLoop(_),_===null?vr.stop():vr.start()},V.addEventListener("sessionstart",Jm),V.addEventListener("sessionend",Qm),this.render=function(_,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(N),N=V.getCamera()),_.isScene===!0&&_.onBeforeRender(S,_,N,L),p=tt.get(_,b.length),p.init(N),b.push(p),be.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),W.setFromProjectionMatrix(be),ve=this.localClippingEnabled,ee=Q.init(this.clippingPlanes,ve),m=fe.get(_,C.length),m.init(),C.push(m),V.enabled===!0&&V.isPresenting===!0){let J=S.xr.getDepthSensingMesh();J!==null&&Dd(J,N,-1/0,S.sortObjects)}Dd(_,N,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(re,de),wt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,wt&&Ce.addToRenderList(m,_),this.info.render.frame++,ee===!0&&Q.beginShadows();let k=p.state.shadowsArray;he.render(k,_,N),ee===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let U=m.opaque,P=m.transmissive;if(p.setupLights(),N.isArrayCamera){let J=N.cameras;if(P.length>0)for(let ne=0,ue=J.length;ne<ue;ne++){let me=J[ne];tg(U,P,_,me)}wt&&Ce.render(_);for(let ne=0,ue=J.length;ne<ue;ne++){let me=J[ne];eg(m,_,me,me.viewport)}}else P.length>0&&tg(U,P,_,N),wt&&Ce.render(_),eg(m,_,N);L!==null&&D===0&&(E.updateMultisampleRenderTarget(L),E.updateRenderTargetMipmap(L)),_.isScene===!0&&_.onAfterRender(S,_,N),gt.resetDefaultState(),M=-1,x=null,b.pop(),b.length>0?(p=b[b.length-1],ee===!0&&Q.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function Dd(_,N,k,U){if(_.visible===!1)return;if(_.layers.test(N.layers)){if(_.isGroup)k=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(N);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||W.intersectsSprite(_)){U&&Ie.setFromMatrixPosition(_.matrixWorld).applyMatrix4(be);let ne=z.update(_),ue=_.material;ue.visible&&m.push(_,ne,ue,k,Ie.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||W.intersectsObject(_))){let ne=z.update(_),ue=_.material;if(U&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ie.copy(_.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Ie.copy(ne.boundingSphere.center)),Ie.applyMatrix4(_.matrixWorld).applyMatrix4(be)),Array.isArray(ue)){let me=ne.groups;for(let Ne=0,Ae=me.length;Ne<Ae;Ne++){let Ee=me[Ne],nt=ue[Ee.materialIndex];nt&&nt.visible&&m.push(_,ne,nt,k,Ie.z,Ee)}}else ue.visible&&m.push(_,ne,ue,k,Ie.z,null)}}let J=_.children;for(let ne=0,ue=J.length;ne<ue;ne++)Dd(J[ne],N,k,U)}function eg(_,N,k,U){let P=_.opaque,J=_.transmissive,ne=_.transparent;p.setupLightsView(k),ee===!0&&Q.setGlobalState(S.clippingPlanes,k),U&&Me.viewport(I.copy(U)),P.length>0&&ja(P,N,k),J.length>0&&ja(J,N,k),ne.length>0&&ja(ne,N,k),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function tg(_,N,k,U){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[U.id]===void 0&&(p.state.transmissionRenderTarget[U.id]=new ai(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?uo:di,minFilter:pr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));let J=p.state.transmissionRenderTarget[U.id],ne=U.viewport||I;J.setSize(ne.z*S.transmissionResolutionScale,ne.w*S.transmissionResolutionScale);let ue=S.getRenderTarget();S.setRenderTarget(J),S.getClearColor(X),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),wt&&Ce.render(k);let me=S.toneMapping;S.toneMapping=ki;let Ne=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),p.setupLightsView(U),ee===!0&&Q.setGlobalState(S.clippingPlanes,U),ja(_,k,U),E.updateMultisampleRenderTarget(J),E.updateRenderTargetMipmap(J),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let Ee=0,nt=N.length;Ee<nt;Ee++){let ct=N[Ee],Rt=ct.object,Tt=ct.geometry,ot=ct.material,we=ct.group;if(ot.side===ui&&Rt.layers.test(U.layers)){let Gt=ot.side;ot.side=nn,ot.needsUpdate=!0,ng(Rt,k,U,Tt,ot,we),ot.side=Gt,ot.needsUpdate=!0,Ae=!0}}Ae===!0&&(E.updateMultisampleRenderTarget(J),E.updateRenderTargetMipmap(J))}S.setRenderTarget(ue),S.setClearColor(X,Y),Ne!==void 0&&(U.viewport=Ne),S.toneMapping=me}function ja(_,N,k){let U=N.isScene===!0?N.overrideMaterial:null;for(let P=0,J=_.length;P<J;P++){let ne=_[P],ue=ne.object,me=ne.geometry,Ne=ne.group,Ae=ne.material;Ae.allowOverride===!0&&U!==null&&(Ae=U),ue.layers.test(k.layers)&&ng(ue,N,k,me,Ae,Ne)}}function ng(_,N,k,U,P,J){_.onBeforeRender(S,N,k,U,P,J),_.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),P.onBeforeRender(S,N,k,U,_,J),P.transparent===!0&&P.side===ui&&P.forceSinglePass===!1?(P.side=nn,P.needsUpdate=!0,S.renderBufferDirect(k,N,U,P,_,J),P.side=Xn,P.needsUpdate=!0,S.renderBufferDirect(k,N,U,P,_,J),P.side=ui):S.renderBufferDirect(k,N,U,P,_,J),_.onAfterRender(S,N,k,U,P,J)}function $a(_,N,k){N.isScene!==!0&&(N=It);let U=_e.get(_),P=p.state.lights,J=p.state.shadowsArray,ne=P.state.version,ue=ye.getParameters(_,P.state,J,N,k),me=ye.getProgramCacheKey(ue),Ne=U.programs;U.environment=_.isMeshStandardMaterial?N.environment:null,U.fog=N.fog,U.envMap=(_.isMeshStandardMaterial?F:v).get(_.envMap||U.environment),U.envMapRotation=U.environment!==null&&_.envMap===null?N.environmentRotation:_.envMapRotation,Ne===void 0&&(_.addEventListener("dispose",Ue),Ne=new Map,U.programs=Ne);let Ae=Ne.get(me);if(Ae!==void 0){if(U.currentProgram===Ae&&U.lightsStateVersion===ne)return rg(_,ue),Ae}else ue.uniforms=ye.getUniforms(_),_.onBeforeCompile(ue,S),Ae=ye.acquireProgram(ue,me),Ne.set(me,Ae),U.uniforms=ue.uniforms;let Ee=U.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ee.clippingPlanes=Q.uniform),rg(_,ue),U.needsLights=qM(_),U.lightsStateVersion=ne,U.needsLights&&(Ee.ambientLightColor.value=P.state.ambient,Ee.lightProbe.value=P.state.probe,Ee.directionalLights.value=P.state.directional,Ee.directionalLightShadows.value=P.state.directionalShadow,Ee.spotLights.value=P.state.spot,Ee.spotLightShadows.value=P.state.spotShadow,Ee.rectAreaLights.value=P.state.rectArea,Ee.ltc_1.value=P.state.rectAreaLTC1,Ee.ltc_2.value=P.state.rectAreaLTC2,Ee.pointLights.value=P.state.point,Ee.pointLightShadows.value=P.state.pointShadow,Ee.hemisphereLights.value=P.state.hemi,Ee.directionalShadowMap.value=P.state.directionalShadowMap,Ee.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Ee.spotShadowMap.value=P.state.spotShadowMap,Ee.spotLightMatrix.value=P.state.spotLightMatrix,Ee.spotLightMap.value=P.state.spotLightMap,Ee.pointShadowMap.value=P.state.pointShadowMap,Ee.pointShadowMatrix.value=P.state.pointShadowMatrix),U.currentProgram=Ae,U.uniformsList=null,Ae}function ig(_){if(_.uniformsList===null){let N=_.currentProgram.getUniforms();_.uniformsList=go.seqWithValue(N.seq,_.uniforms)}return _.uniformsList}function rg(_,N){let k=_e.get(_);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function jM(_,N,k,U,P){N.isScene!==!0&&(N=It),E.resetTextureUnits();let J=N.fog,ne=U.isMeshStandardMaterial?N.environment:null,ue=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Gr,me=(U.isMeshStandardMaterial?F:v).get(U.envMap||ne),Ne=U.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ae=!!k.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Ee=!!k.morphAttributes.position,nt=!!k.morphAttributes.normal,ct=!!k.morphAttributes.color,Rt=ki;U.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Rt=S.toneMapping);let Tt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ot=Tt!==void 0?Tt.length:0,we=_e.get(U),Gt=p.state.lights;if(ee===!0&&(ve===!0||_!==x)){let tn=_===x&&U.id===M;Q.setState(U,_,tn)}let lt=!1;U.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Gt.state.version||we.outputColorSpace!==ue||P.isBatchedMesh&&we.batching===!1||!P.isBatchedMesh&&we.batching===!0||P.isBatchedMesh&&we.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&we.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&we.instancing===!1||!P.isInstancedMesh&&we.instancing===!0||P.isSkinnedMesh&&we.skinning===!1||!P.isSkinnedMesh&&we.skinning===!0||P.isInstancedMesh&&we.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&we.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&we.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&we.instancingMorph===!1&&P.morphTexture!==null||we.envMap!==me||U.fog===!0&&we.fog!==J||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Q.numPlanes||we.numIntersection!==Q.numIntersection)||we.vertexAlphas!==Ne||we.vertexTangents!==Ae||we.morphTargets!==Ee||we.morphNormals!==nt||we.morphColors!==ct||we.toneMapping!==Rt||we.morphTargetsCount!==ot)&&(lt=!0):(lt=!0,we.__version=U.version);let On=we.currentProgram;lt===!0&&(On=$a(U,N,P));let Qr=!1,un=!1,xo=!1,Et=On.getUniforms(),Sn=we.uniforms;if(Me.useProgram(On.program)&&(Qr=!0,un=!0,xo=!0),U.id!==M&&(M=U.id,un=!0),Qr||x!==_){Me.buffers.depth.getReversed()?(se.copy(_.projectionMatrix),hM(se),pM(se),Et.setValue(T,"projectionMatrix",se)):Et.setValue(T,"projectionMatrix",_.projectionMatrix),Et.setValue(T,"viewMatrix",_.matrixWorldInverse);let rn=Et.map.cameraPosition;rn!==void 0&&rn.setValue(T,at.setFromMatrixPosition(_.matrixWorld)),Ye.logarithmicDepthBuffer&&Et.setValue(T,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Et.setValue(T,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,un=!0,xo=!0)}if(P.isSkinnedMesh){Et.setOptional(T,P,"bindMatrix"),Et.setOptional(T,P,"bindMatrixInverse");let tn=P.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Et.setValue(T,"boneTexture",tn.boneTexture,E))}P.isBatchedMesh&&(Et.setOptional(T,P,"batchingTexture"),Et.setValue(T,"batchingTexture",P._matricesTexture,E),Et.setOptional(T,P,"batchingIdTexture"),Et.setValue(T,"batchingIdTexture",P._indirectTexture,E),Et.setOptional(T,P,"batchingColorTexture"),P._colorsTexture!==null&&Et.setValue(T,"batchingColorTexture",P._colorsTexture,E));let wn=k.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Re.update(P,k,On),(un||we.receiveShadow!==P.receiveShadow)&&(we.receiveShadow=P.receiveShadow,Et.setValue(T,"receiveShadow",P.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Sn.envMap.value=me,Sn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&N.environment!==null&&(Sn.envMapIntensity.value=N.environmentIntensity),un&&(Et.setValue(T,"toneMappingExposure",S.toneMappingExposure),we.needsLights&&$M(Sn,xo),J&&U.fog===!0&&oe.refreshFogUniforms(Sn,J),oe.refreshMaterialUniforms(Sn,U,H,K,p.state.transmissionRenderTarget[_.id]),go.upload(T,ig(we),Sn,E)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(go.upload(T,ig(we),Sn,E),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Et.setValue(T,"center",P.center),Et.setValue(T,"modelViewMatrix",P.modelViewMatrix),Et.setValue(T,"normalMatrix",P.normalMatrix),Et.setValue(T,"modelMatrix",P.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let tn=U.uniformsGroups;for(let rn=0,Id=tn.length;rn<Id;rn++){let yr=tn[rn];A.update(yr,On),A.bind(yr,On)}}return On}function $M(_,N){_.ambientLightColor.needsUpdate=N,_.lightProbe.needsUpdate=N,_.directionalLights.needsUpdate=N,_.directionalLightShadows.needsUpdate=N,_.pointLights.needsUpdate=N,_.pointLightShadows.needsUpdate=N,_.spotLights.needsUpdate=N,_.spotLightShadows.needsUpdate=N,_.rectAreaLights.needsUpdate=N,_.hemisphereLights.needsUpdate=N}function qM(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(_,N,k){let U=_e.get(_);U.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),_e.get(_.texture).__webglTexture=N,_e.get(_.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:k,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,N){let k=_e.get(_);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};let XM=T.createFramebuffer();this.setRenderTarget=function(_,N=0,k=0){L=_,R=N,D=k;let U=!0,P=null,J=!1,ne=!1;if(_){let me=_e.get(_);if(me.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(T.FRAMEBUFFER,null),U=!1;else if(me.__webglFramebuffer===void 0)E.setupRenderTarget(_);else if(me.__hasExternalTextures)E.rebindTextures(_,_e.get(_.texture).__webglTexture,_e.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Ee=_.depthTexture;if(me.__boundDepthTexture!==Ee){if(Ee!==null&&_e.has(Ee)&&(_.width!==Ee.image.width||_.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(_)}}let Ne=_.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ne=!0);let Ae=_e.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ae[N])?P=Ae[N][k]:P=Ae[N],J=!0):_.samples>0&&E.useMultisampledRTT(_)===!1?P=_e.get(_).__webglMultisampledFramebuffer:Array.isArray(Ae)?P=Ae[k]:P=Ae,I.copy(_.viewport),G.copy(_.scissor),B=_.scissorTest}else I.copy(xe).multiplyScalar(H).floor(),G.copy(We).multiplyScalar(H).floor(),B=pt;if(k!==0&&(P=XM),Me.bindFramebuffer(T.FRAMEBUFFER,P)&&U&&Me.drawBuffers(_,P),Me.viewport(I),Me.scissor(G),Me.setScissorTest(B),J){let me=_e.get(_.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+N,me.__webglTexture,k)}else if(ne){let me=_e.get(_.texture),Ne=N;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,me.__webglTexture,k,Ne)}else if(_!==null&&k!==0){let me=_e.get(_.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,me.__webglTexture,k)}M=-1},this.readRenderTargetPixels=function(_,N,k,U,P,J,ne){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=_e.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ne!==void 0&&(ue=ue[ne]),ue){Me.bindFramebuffer(T.FRAMEBUFFER,ue);try{let me=_.texture,Ne=me.format,Ae=me.type;if(!Ye.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=_.width-U&&k>=0&&k<=_.height-P&&T.readPixels(N,k,U,P,Ve.convert(Ne),Ve.convert(Ae),J)}finally{let me=L!==null?_e.get(L).__webglFramebuffer:null;Me.bindFramebuffer(T.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=function(_,N,k,U,P,J,ne){return es(this,null,function*(){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=_e.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ne!==void 0&&(ue=ue[ne]),ue)if(N>=0&&N<=_.width-U&&k>=0&&k<=_.height-P){Me.bindFramebuffer(T.FRAMEBUFFER,ue);let me=_.texture,Ne=me.format,Ae=me.type;if(!Ye.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ee),T.bufferData(T.PIXEL_PACK_BUFFER,J.byteLength,T.STREAM_READ),T.readPixels(N,k,U,P,Ve.convert(Ne),Ve.convert(Ae),0);let nt=L!==null?_e.get(L).__webglFramebuffer:null;Me.bindFramebuffer(T.FRAMEBUFFER,nt);let ct=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),yield fM(T,ct,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ee),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,J),T.deleteBuffer(Ee),T.deleteSync(ct),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(_,N=null,k=0){let U=Math.pow(2,-k),P=Math.floor(_.image.width*U),J=Math.floor(_.image.height*U),ne=N!==null?N.x:0,ue=N!==null?N.y:0;E.setTexture2D(_,0),T.copyTexSubImage2D(T.TEXTURE_2D,k,0,0,ne,ue,P,J),Me.unbindTexture()};let YM=T.createFramebuffer(),ZM=T.createFramebuffer();this.copyTextureToTexture=function(_,N,k=null,U=null,P=0,J=null){J===null&&(P!==0?(za("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=P,P=0):J=0);let ne,ue,me,Ne,Ae,Ee,nt,ct,Rt,Tt=_.isCompressedTexture?_.mipmaps[J]:_.image;if(k!==null)ne=k.max.x-k.min.x,ue=k.max.y-k.min.y,me=k.isBox3?k.max.z-k.min.z:1,Ne=k.min.x,Ae=k.min.y,Ee=k.isBox3?k.min.z:0;else{let wn=Math.pow(2,-P);ne=Math.floor(Tt.width*wn),ue=Math.floor(Tt.height*wn),_.isDataArrayTexture?me=Tt.depth:_.isData3DTexture?me=Math.floor(Tt.depth*wn):me=1,Ne=0,Ae=0,Ee=0}U!==null?(nt=U.x,ct=U.y,Rt=U.z):(nt=0,ct=0,Rt=0);let ot=Ve.convert(N.format),we=Ve.convert(N.type),Gt;N.isData3DTexture?(E.setTexture3D(N,0),Gt=T.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(E.setTexture2DArray(N,0),Gt=T.TEXTURE_2D_ARRAY):(E.setTexture2D(N,0),Gt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,N.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,N.unpackAlignment);let lt=T.getParameter(T.UNPACK_ROW_LENGTH),On=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Qr=T.getParameter(T.UNPACK_SKIP_PIXELS),un=T.getParameter(T.UNPACK_SKIP_ROWS),xo=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Tt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Tt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ne),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ae),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ee);let Et=_.isDataArrayTexture||_.isData3DTexture,Sn=N.isDataArrayTexture||N.isData3DTexture;if(_.isDepthTexture){let wn=_e.get(_),tn=_e.get(N),rn=_e.get(wn.__renderTarget),Id=_e.get(tn.__renderTarget);Me.bindFramebuffer(T.READ_FRAMEBUFFER,rn.__webglFramebuffer),Me.bindFramebuffer(T.DRAW_FRAMEBUFFER,Id.__webglFramebuffer);for(let yr=0;yr<me;yr++)Et&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_e.get(_).__webglTexture,P,Ee+yr),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_e.get(N).__webglTexture,J,Rt+yr)),T.blitFramebuffer(Ne,Ae,ne,ue,nt,ct,ne,ue,T.DEPTH_BUFFER_BIT,T.NEAREST);Me.bindFramebuffer(T.READ_FRAMEBUFFER,null),Me.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(P!==0||_.isRenderTargetTexture||_e.has(_)){let wn=_e.get(_),tn=_e.get(N);Me.bindFramebuffer(T.READ_FRAMEBUFFER,YM),Me.bindFramebuffer(T.DRAW_FRAMEBUFFER,ZM);for(let rn=0;rn<me;rn++)Et?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,wn.__webglTexture,P,Ee+rn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,wn.__webglTexture,P),Sn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,tn.__webglTexture,J,Rt+rn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,tn.__webglTexture,J),P!==0?T.blitFramebuffer(Ne,Ae,ne,ue,nt,ct,ne,ue,T.COLOR_BUFFER_BIT,T.NEAREST):Sn?T.copyTexSubImage3D(Gt,J,nt,ct,Rt+rn,Ne,Ae,ne,ue):T.copyTexSubImage2D(Gt,J,nt,ct,Ne,Ae,ne,ue);Me.bindFramebuffer(T.READ_FRAMEBUFFER,null),Me.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Sn?_.isDataTexture||_.isData3DTexture?T.texSubImage3D(Gt,J,nt,ct,Rt,ne,ue,me,ot,we,Tt.data):N.isCompressedArrayTexture?T.compressedTexSubImage3D(Gt,J,nt,ct,Rt,ne,ue,me,ot,Tt.data):T.texSubImage3D(Gt,J,nt,ct,Rt,ne,ue,me,ot,we,Tt):_.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,J,nt,ct,ne,ue,ot,we,Tt.data):_.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,J,nt,ct,Tt.width,Tt.height,ot,Tt.data):T.texSubImage2D(T.TEXTURE_2D,J,nt,ct,ne,ue,ot,we,Tt);T.pixelStorei(T.UNPACK_ROW_LENGTH,lt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,On),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Qr),T.pixelStorei(T.UNPACK_SKIP_ROWS,un),T.pixelStorei(T.UNPACK_SKIP_IMAGES,xo),J===0&&N.generateMipmaps&&T.generateMipmap(Gt),Me.unbindTexture()},this.copyTextureToTexture3D=function(_,N,k=null,U=null,P=0){return za('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,N,k,U,P)},this.initRenderTarget=function(_){_e.get(_).__webglFramebuffer===void 0&&E.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?E.setTextureCube(_,0):_.isData3DTexture?E.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?E.setTexture2DArray(_,0):E.setTexture2D(_,0),Me.unbindTexture()},this.resetState=function(){R=0,D=0,L=null,Me.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var yo=class extends Qt{constructor(e,t){super();let i=[new w(0,0,0),new w(1,0,0),new w(1,1,0),new w(0,1,0)],r=[new w(1,0,0),new w(1,0,-1),new w(1,1,-1),new w(1,1,0)],s=[new w(1,0,-1),new w(0,0,-1),new w(0,1,-1),new w(1,1,-1)],o=[new w(0,0,-1),new w(0,0,0),new w(0,1,0),new w(0,1,-1)],a=[new w(0,1,0),new w(1,1,0),new w(1,1,-1),new w(0,1,-1)],c=[new w(0,0,-1),new w(1,0,-1),new w(1,0,0),new w(0,0,0)],l=[i,r,s,o,a,c].map(d=>{let f=d.map(g=>g.multiply(e)),h=new w;for(let g of f)h.add(g);h.divideScalar(f.length);for(let g of f){let y=g.clone().sub(h).normalize();g.sub(y.multiplyScalar(t*1.414213562))}return f}),u=[];l.forEach(d=>d.forEach(f=>u.push(f.x,f.y,f.z))),this.setAttribute("position",new Dt(new Float32Array(u),3)),this.setIndex([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23,0,13,23,1,22,4,2,7,17,3,16,14,8,5,21,9,20,12,10,15,19,11,18,6,0,23,1,23,22,1,1,4,7,1,7,2,2,17,3,3,17,16,3,14,0,14,13,0,8,21,9,21,20,9,9,12,15,9,15,10,10,19,18,10,18,11,11,6,8,8,6,5,17,6,18,17,7,6,16,19,14,19,15,14,22,21,5,22,5,4,23,12,20,23,13,12]),this.computeVertexNormals()}};var Ed=class extends yt{constructor(t){super();this.playFieldLogicalOriginVisualOffset=t;let i=new yo(new w(1,1,1),.05);for(let r=0;r<4;r++)this.cubes.push(new yt(i,this.cubeMaterial)),this.cubes[r].castShadow=!0,this.add(this.cubes[r]);this.setShape(this.shapeIdx)}cubeMaterial=new Wr({shininess:15});cubes=[];shapeIdx=0;logicCore=new Zm;copyLogicCore(t){this.logicCore.copy(t);for(let i=0;i<4;i++)this.cubes[i].position.copy(this.logicCore.voxels[i]),this.cubes[i].position.z*=-1;this.updateVisualPosition()}setShape(t){this.shapeIdx=t;for(let i=0;i<4;i++){this.logicCore.voxels[i].copy(_o[t].voxels[i]);let r=this.cubes[i];r.position.copy(_o[t].voxels[i]),r.position.z*=-1}this.cubeMaterial.color=_o[t].color,this.cubeMaterial.specular=_o[t].color}updateVisualPosition(){this.position.x=this.logicCore.position.x+this.playFieldLogicalOriginVisualOffset.x,this.position.y=this.logicCore.position.y+this.playFieldLogicalOriginVisualOffset.y,this.position.z=-this.logicCore.position.z+this.playFieldLogicalOriginVisualOffset.z}},Zm=class n{voxels=[];position=new w;constructor(){for(let e=0;e<4;e++)this.voxels.push(new w)}clone(){let e=new n;e.voxels.length=this.voxels.length;for(let t=0;t<this.voxels.length;t++)e.voxels[t]=this.voxels[t].clone();return e.position.copy(this.position),e}copy(e){for(let t=0;t<4;t++)this.voxels[t].copy(e.voxels[t]);this.position.copy(e.position)}rotateWorld(e){for(let t=0;t<4;t++){let i=this.voxels[t];i.addScalar(.5).applyMatrix4(new St().makeRotationAxis(e,Math.PI/2)).addScalar(-.5),i.x=Math.round(i.x),i.y=Math.round(i.y),i.z=Math.round(i.z)}}getBoundingBox(){let e=this.voxels[0].x,t=this.voxels[0].x,i=this.voxels[0].y,r=this.voxels[0].y,s=this.voxels[0].z,o=this.voxels[0].z;for(let a of this.voxels)e=Math.min(e,a.x),t=Math.max(t,a.x+1),i=Math.min(i,a.y),r=Math.max(r,a.y+1),s=Math.min(s,a.z),o=Math.max(o,a.z+1);return e+=this.position.x,t+=this.position.x,i+=this.position.y,r+=this.position.y,s+=this.position.z,o+=this.position.z,{left:e,right:t,bottom:i,top:r,front:s,back:o}}},_o=[{voxels:[new w(-1,-1,0),new w(0,-1,0),new w(-1,0,0),new w(-1,1,0)],color:new Pe(16711680)},{voxels:[new w(-1,-1,0),new w(0,-1,0),new w(0,0,0),new w(1,0,0)],color:new Pe(16776960)},{voxels:[new w(-1,-1,0),new w(0,-1,0),new w(0,0,0),new w(-1,0,0)],color:new Pe(65535)},{voxels:[new w(0,-2,0),new w(0,-1,0),new w(0,0,0),new w(0,1,0)],color:new Pe(16711816)},{voxels:[new w(-1,-1,0),new w(0,-1,0),new w(0,0,0),new w(1,-1,0)],color:new Pe(8913151)},{voxels:[new w(0,0,0),new w(0,-1,0),new w(-1,-1,0),new w(-1,-1,-1)],color:new Pe(8947967)},{voxels:[new w(-1,-1,-1),new w(0,0,0),new w(0,-1,0),new w(0,-1,-1)],color:new Pe(8978312)},{voxels:[new w(0,0,0),new w(0,-1,0),new w(-1,-1,0),new w(0,-1,-1)],color:new Pe(8978176)}];var Sd=class extends yt{gridMaterialLeftRight;gridMaterialFrontBack;gridMaterialTopBottom;constructor(e,t,i){super();let r=new xn({vertexShader:`
                varying vec2 vUv;

                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                varying vec2 vUv;
                uniform vec2 vDim;
                uniform vec4 vColor;
                uniform float uThickness;
                uniform int blocks[8]; // 4 blocks with x and y coordinates each

                void main() {
                    vec2 a = vUv * vDim;
                    vec2 b = a - floor(a);
                    vec2 c = min(b, 1. - b);

                    gl_FragColor = vColor * min(3., (abs(0.01 / c.x) + abs(0.01 / c.y)) + 0.01);
                    
                    for (int i = 0; i < 4; i++) {
                        int blockX = blocks[i * 2];
                        int blockY = blocks[i * 2 + 1];

                        if (int(a.x) == blockX && int(a.y) == blockY) {
                            gl_FragColor = vec4(0.5, 1.0, 0.0, 1.0);
                            break;
                        }
                    }
                }
            `,side:Xn,uniforms:{vDim:{value:new $e(0,0)},vColor:{value:t},uThickness:{value:i},blocks:{value:[-1,-1,-1,-1,-1,-1,-1,-1]}}});this.gridMaterialLeftRight=r.clone(),this.gridMaterialLeftRight.uniforms.vDim.value=new $e(e.z,e.y),this.gridMaterialFrontBack=r.clone(),this.gridMaterialFrontBack.uniforms.vDim.value=new $e(e.x,e.y),this.gridMaterialTopBottom=r.clone(),this.gridMaterialTopBottom.uniforms.vDim.value=new $e(e.x,e.z);let s=new Dt(new Float32Array([0,0,1,0,1,1,0,1]),2),o=new Qt;o.setAttribute("position",new Dt(new Float32Array([-e.x/2,-e.y/2,+e.z/2,-e.x/2,-e.y/2,-e.z/2,-e.x/2,+e.y/2,-e.z/2,-e.x/2,+e.y/2,+e.z/2]),3)),o.setAttribute("uv",s),o.setIndex([0,1,2,0,2,3]);let a=new Qt;a.setAttribute("position",new Dt(new Float32Array([+e.x/2,-e.y/2,+e.z/2,+e.x/2,-e.y/2,-e.z/2,+e.x/2,+e.y/2,-e.z/2,+e.x/2,+e.y/2,+e.z/2]),3)),a.setAttribute("uv",s),a.setIndex([0,2,1,0,3,2]);let c=new Qt;c.setAttribute("position",new Dt(new Float32Array([-e.x/2,-e.y/2,+e.z/2,+e.x/2,-e.y/2,+e.z/2,+e.x/2,+e.y/2,+e.z/2,-e.x/2,+e.y/2,+e.z/2]),3)),c.setAttribute("uv",s),c.setIndex([0,3,2,0,2,1]);let l=new Qt;l.setAttribute("position",new Dt(new Float32Array([-e.x/2,-e.y/2,-e.z/2,+e.x/2,-e.y/2,-e.z/2,+e.x/2,+e.y/2,-e.z/2,-e.x/2,+e.y/2,-e.z/2]),3)),l.setAttribute("uv",s),l.setIndex([0,2,3,0,1,2]);let u=new Qt;u.setAttribute("position",new Dt(new Float32Array([-e.x/2,-e.y/2,+e.z/2,+e.x/2,-e.y/2,+e.z/2,+e.x/2,-e.y/2,-e.z/2,-e.x/2,-e.y/2,-e.z/2]),3)),u.setAttribute("uv",s),u.setIndex([0,2,3,0,1,2]),this.add(new yt(o,this.gridMaterialLeftRight),new yt(a,this.gridMaterialLeftRight),new yt(c,this.gridMaterialFrontBack),new yt(l,this.gridMaterialFrontBack),new yt(u,this.gridMaterialTopBottom))}updateHighlights(e){for(let t=0;t<4;t++){let i=e[t];this.gridMaterialLeftRight.uniforms.blocks.value[t*2]=Math.floor(i.z),this.gridMaterialLeftRight.uniforms.blocks.value[t*2+1]=Math.floor(i.y),this.gridMaterialFrontBack.uniforms.blocks.value[t*2]=Math.floor(i.x),this.gridMaterialFrontBack.uniforms.blocks.value[t*2+1]=Math.floor(i.y),this.gridMaterialTopBottom.uniforms.blocks.value[t*2]=Math.floor(i.x),this.gridMaterialTopBottom.uniforms.blocks.value[t*2+1]=Math.floor(i.z)}}};var wd=class extends yt{constructor(t){super();this.dim=t;for(let i=0;i<t.x*t.y*t.z;i++){this.voxelStates.push(!1);let r=new yt(this.voxelGeometry,this.voxelMaterial);r.castShadow=!0,r.receiveShadow=!0,r.position.copy(this.worldToVisualPos(this.voxelIdxToVec(i))),this.voxelMeshes.push(r)}this.grid=new Sd(t,new Mt(.55,.15,.75,1),.03),this.add(this.grid,this.voxelsMesh)}voxelMaterial=new Wr({color:10526880,specular:10526880,shininess:30});voxelGeometry=new yo(new w(1,1,1),.05);voxelStates=[];voxelMeshes=[];voxelsMesh=new yt;grid;tetrominoCollision(t){for(let i of t.voxels){let r=i.clone().add(t.position);if(r.x<0||r.x>=this.dim.x||r.z<0||r.z>=this.dim.z||r.y<0||r.y<this.dim.y&&this.voxelStates[this.vecToVoxelIdx(r)])return!0}return!1}placeTetromino(t){let i=this.voxelsMesh.children.length;for(let s of t.voxels){let o=s.clone().add(t.position),a=this.vecToVoxelIdx(o);this.voxelStates[a]=!0,this.voxelsMesh.add(this.voxelMeshes[a])}let r=0;for(let s=0;s<this.dim.y;){let o=!0;for(let a=0;a<this.dim.x&&o;a++)for(let c=0;c<this.dim.z&&o;c++)o=this.voxelStates[this.vecToVoxelIdx(new w(a,s,c))];if(o){r++;for(let a=s;a<this.dim.y-1;a++)for(let c=0;c<this.dim.x;c++)for(let l=0;l<this.dim.z;l++){let u=this.vecToVoxelIdx(new w(c,a,l)),d=this.vecToVoxelIdx(new w(c,a+1,l));this.voxelStates[u]!=this.voxelStates[d]&&(this.voxelStates[u]?this.voxelsMesh.remove(this.voxelMeshes[u]):this.voxelsMesh.add(this.voxelMeshes[u]),this.voxelStates[u]=this.voxelStates[d])}for(let a=0;a<this.dim.x;a++)for(let c=0;c<this.dim.z;c++){let l=this.vecToVoxelIdx(new w(a,this.dim.y-1,c));this.voxelStates[l]&&(this.voxelsMesh.remove(this.voxelMeshes[l]),this.voxelStates[l]=!1)}}else s++}return r}reset(){for(let t=0;t<this.voxelStates.length;t++)this.voxelStates[t]=!1;this.voxelsMesh.clear()}worldToVisualPos(t){return t.add(new w(-this.dim.x/2,-this.dim.y/2,-this.dim.z/2)).multiply(new w(1,1,-1))}vecToVoxelIdx(t){return t.x+t.y*this.dim.x+t.z*this.dim.x*this.dim.y}voxelIdxToVec(t){return new w(t%this.dim.x,Math.floor(t%(this.dim.x*this.dim.y)/this.dim.x),Math.floor(t/(this.dim.x*this.dim.y)))}};var RP=["MoveForward","MoveBackwards","MoveLeft","MoveRight","ForceDown","RotateZCCW","RotateZCW","RotateYCCW","RotateYCW"],Km=class{async=!1;pressed=!1;held=!1;released=!1;lastTick=0;tick(e){return this.held&&performance.now()-this.lastTick>e*1e3?(this.lastTick+=e*1e3,!0):!1}},bd=class n{localStoragePrefix="keyBindings.";bindings;states;constructor(){this.bindings=[{action:"MoveForward",keyCode:"KeyW"},{action:"MoveBackwards",keyCode:"KeyS"},{action:"MoveLeft",keyCode:"KeyA"},{action:"MoveRight",keyCode:"KeyD"},{action:"ForceDown",keyCode:"KeyX"},{action:"RotateZCCW",keyCode:"KeyQ"},{action:"RotateZCW",keyCode:"KeyE"},{action:"RotateYCCW",keyCode:"KeyZ"},{action:"RotateYCW",keyCode:"KeyC"}],this.states=new Map;for(let e of RP){let t=this.bindings.find(i=>i.action==e);t&&(t.keyCode=localStorage.getItem("keyBindings."+e)??t?.keyCode),this.states.set(e,new Km)}document.addEventListener("keypress",this.onKeyPress),document.addEventListener("keyup",this.onKeyUp)}ngOnDestroy(){document.removeEventListener("keypress",this.onKeyPress),document.removeEventListener("keyup",this.onKeyUp)}onKeyPress=e=>{let t=this.bindings.find(i=>i.keyCode==e.code);if(t){let i=this.states.get(t.action);i&&(i.async=!0)}};onKeyUp=e=>{let t=this.bindings.find(i=>i.keyCode==e.code);if(t){let i=this.states.get(t.action);i&&(i.async=!1)}};listenAndSet(e){let t=i=>{document.removeEventListener("keypress",t);let r=this.bindings.find(s=>s.action==e);r&&(r.keyCode=i.code),localStorage.setItem(this.localStoragePrefix+e,i.code)};document.addEventListener("keypress",t)}syncStates(){for(let e of this.states.values())e.async?e.held?(e.pressed=!1,e.held=!0,e.released=!1):(e.pressed=!0,e.held=!0,e.released=!1,e.lastTick=performance.now()):e.held?(e.pressed=!1,e.held=!1,e.released=!0):(e.pressed=!1,e.held=!1,e.released=!1)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Te({token:n,factory:n.\u0275fac,providedIn:"root"})};var OP=["rendererContainer"],LP=n=>({display:n}),Td=class n{constructor(e){this.kbd=e;this.playField=new wd(new w(4,12,4)),this.tetromino=new Ed(new w(-this.playField.dim.x/2,-this.playField.dim.y/2,this.playField.dim.z/2)),this.tetrominoDescent={vel:-1,deltaH:0}}PI=Math.PI;rendererContainer;scene;camera;renderer;animationFrameHandle;paused=!0;tp0=0;playField;tetromino;tetrominoDescent;score=0;rowsCleared=0;keyStateTickPeriod=.15;ngOnInit(){this.initThree(),document.addEventListener("keypress",e=>{switch(e.code){case"KeyL":break;case"KeyP":this.pause();break;case"KeyR":this.reset()}}),document.addEventListener("mousemove",e=>{this.paused||(this.playField.rotateOnAxis(new w(0,1,0),e.movementX/5/180*Math.PI),this.playField.rotateOnWorldAxis(new w(1,0,0),e.movementY/5/180*Math.PI))})}ngOnDestroy(){}initThree(){this.scene=new Ca;let e=this.rendererContainer.nativeElement.clientWidth,t=this.rendererContainer.nativeElement.clientHeight;this.camera=new Jt(75,e/t,.1,1e3),this.camera.position.z=15,this.renderer=new xd({antialias:!0}),this.renderer.setSize(e,t),this.rendererContainer.nativeElement.appendChild(this.renderer.domElement),this.renderer.shadowMap.enabled=!0,this.scene.add(this.playField),this.playField.add(this.tetromino);let i=new co(16777215,1);i.position.set(1,1,1),i.castShadow=!0,this.scene.add(i);let r=new co(16777215,1);r.position.set(1,1,1),this.scene.add(r);let s=new Pa(16777215,.6);this.scene.add(s),this.reset()}pause=()=>{if(this.paused=!this.paused,this.paused)cancelAnimationFrame(this.animationFrameHandle),document.exitPointerLock();else{this.rendererContainer.nativeElement.requestPointerLock();let e=null,t=r=>{console.log("Mouse Travado"),document.removeEventListener("pointerlockchange",t),e()};new Promise(r=>{e=r,document.addEventListener("pointerlockchange",t)}).then(()=>{this.tp0=performance.now(),this.animate()})}};reset=e=>{this.playField.reset(),this.tetromino.setShape(this.getNextTetromino()),this.tetrominoDescent={deltaH:0,vel:-1},this.tetromino.logicCore.position=new w(Math.floor(this.playField.dim.x/2),Math.floor(this.playField.dim.y+2),Math.floor(this.playField.dim.z/2)),this.tetromino.updateVisualPosition(),this.score=0,this.rowsCleared=0,e&&this.pause()};getNextTetromino(){return Math.floor(Math.random()*(_o.length-.001))}getPlayFieldDirection(){let e=new w;return this.playField.getWorldDirection(e),e}vecToArr(e){return[{label:"x",value:e.x},{label:"y",value:e.y},{label:"z",value:e.z}]}update(){let e=performance.now(),t=(e-this.tp0)/1e3;this.tp0=e;let i=this.tetromino.logicCore.clone(),r=new w;{this.playField.getWorldDirection(r),r.y=0,r.normalize();let s=[new w(0,0,-1),new w(1,0,0),new w(0,0,1),new w(-1,0,0)],o=0,a=r.dot(s[o]);for(let c=1;c<s.length;c++){let l=r.dot(s[c]);l>a&&(a=l,o=c)}r.copy(s[o]),r.x*=-1,r.z*=-1}this.kbd.syncStates();for(let[s,o]of this.kbd.states)switch(s){case"MoveForward":if(o.pressed||o.tick(this.keyStateTickPeriod)){let a=r.clone().applyAxisAngle(new w(0,1,0),Math.PI);a.x=Math.round(a.x),a.y=Math.round(a.y),a.z=Math.round(a.z);let c=i.clone();c.position.add(a),this.playField.tetrominoCollision(c)||i.position.copy(c.position)}break;case"MoveBackwards":if(o.pressed||o.tick(this.keyStateTickPeriod)){let a=i.clone();a.position.add(r),this.playField.tetrominoCollision(a)||i.position.copy(a.position)}break;case"MoveLeft":if(o.pressed||o.tick(this.keyStateTickPeriod)){let a=r.clone().applyAxisAngle(new w(0,1,0),Math.PI/2);a.x=Math.round(a.x),a.y=Math.round(a.y),a.z=Math.round(a.z);let c=i.clone();c.position.add(a),this.playField.tetrominoCollision(c)||i.position.copy(c.position)}break;case"MoveRight":if(o.pressed||o.tick(this.keyStateTickPeriod)){let a=r.clone().applyAxisAngle(new w(0,1,0),-Math.PI/2);a.x=Math.round(a.x),a.y=Math.round(a.y),a.z=Math.round(a.z);let c=i.clone();c.position.add(a),this.playField.tetrominoCollision(c)||i.position.copy(c.position)}break;case"ForceDown":(o.pressed||o.tick(this.keyStateTickPeriod))&&this.tetrominoDescent.deltaH--;break;case"RotateYCCW":if(o.pressed){let a=i.clone();a.rotateWorld(new w(0,-1,0)),this.playField.tetrominoCollision(a)||i.copy(a)}break;case"RotateYCW":if(o.pressed){let a=i.clone();a.rotateWorld(new w(0,1,0)),this.playField.tetrominoCollision(a)||i.copy(a)}break;case"RotateZCCW":if(o.pressed){let a=r.clone().applyAxisAngle(new w(0,1,0),Math.PI);a.x=Math.round(a.x),a.y=Math.round(a.y),a.z=Math.round(a.z);let c=i.clone();c.rotateWorld(a),this.playField.tetrominoCollision(c)||i.copy(c)}break;case"RotateZCW":if(o.pressed){let a=i.clone();a.rotateWorld(r),this.playField.tetrominoCollision(a)||i.copy(a)}break}if(this.tetrominoDescent.deltaH+=this.tetrominoDescent.vel*t,this.tetrominoDescent.deltaH<-1&&(i.position.y--,this.tetrominoDescent.deltaH++),this.playField.tetrominoCollision(i))if(i.getBoundingBox().top>=this.playField.dim.y)this.reset();else{i.position.y++;let o=this.playField.placeTetromino(i);this.score+=o*o,this.tetrominoDescent.vel-=.1*o,this.rowsCleared+=o,this.tetromino.logicCore.position.x=this.playField.dim.x/2,this.tetromino.logicCore.position.y=this.playField.dim.y+2,this.tetromino.logicCore.position.z=this.playField.dim.z/2,this.tetromino.setShape(this.getNextTetromino()),this.tetromino.updateVisualPosition()}else this.tetromino.copyLogicCore(i)}animate=()=>{this.animationFrameHandle=requestAnimationFrame(this.animate),this.update(),this.renderer.render(this.scene,this.camera)};static \u0275fac=function(t){return new(t||n)(Ar(bd))};static \u0275cmp=Is({type:n,selectors:[["app-game"]],viewQuery:function(t,i){if(t&1&&G_(OP,7),t&2){let r;W_(r=j_())&&(i.rendererContainer=r.first)}},decls:20,vars:5,consts:[["rendererContainer",""],[2,"width","100vw","height","100vh","position","relative","display","flex","background-color","black"],[2,"position","absolute","z-index","1"],[2,"width","100vw","height","100vh","display","block","overflow","hidden"],[2,"position","absolute","z-index","2","color","white"],[2,"font-size","24pt"],[2,"font-size","14pt"],[1,"popup",3,"ngStyle"],[2,"color","rgba(255, 255, 255, 0.936)","font-size","24pt"],[3,"click"]],template:function(t,i){if(t&1){let r=z_();zn(0,"div",1)(1,"div",2),Rr(2,"div",3,0),Gn(),zn(4,"div",4)(5,"p",5),Yi(6),Gn(),zn(7,"p",6),Yi(8),Gn()(),zn(9,"div",7)(10,"h2",8),Yi(11," Pausa "),Gn(),zn(12,"button",9),ll("click",function(){return ch(r),lh(i.pause())}),Yi(13,"Continuar"),Gn(),zn(14,"button",9),ll("click",function(){return ch(r),lh(i.reset(!0))}),Yi(15,"Recome\xE7ar"),Gn(),zn(16,"button"),Yi(17,"Configura\xE7\xF5es"),Gn(),zn(18,"button"),Yi(19,"Sair"),Gn()()()}t&2&&(nl(6),ul("Pontua\xE7\xE3o: ",i.score,""),nl(2),ul("N\xEDvel: ",i.rowsCleared,""),nl(),Fh("ngStyle",$_(3,LP,i.paused?"flex":"none")))},dependencies:[fl,zh],styles:["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0}.popup[_ngcontent-%COMP%]{z-index:2;margin:auto;min-width:300px;height:fit-content;background:linear-gradient(90deg,#260047b3,#47002180);border-radius:20px;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);display:flex;flex-direction:column;gap:20px;padding:30px}button[_ngcontent-%COMP%]{background-color:transparent;border:none;color:#fff;text-align:left;font-size:16pt;padding:10px 20px;border-radius:100px;transition:all .125s ease;letter-spacing:2px;font-weight:lighter}button[_ngcontent-%COMP%]:hover{background-color:#ffffff12;cursor:pointer}"]})};var Cd=class n{title="web";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Is({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(t,i){t&1&&Rr(0,"app-game")},dependencies:[Td],encapsulation:2})};Jh(Cd,rx).catch(n=>console.error(n));
