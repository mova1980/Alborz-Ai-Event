(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var dd={exports:{}},Io={};var Yv;function US(){if(Yv)return Io;Yv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Io.Fragment=e,Io.jsx=i,Io.jsxs=i,Io}var Zv;function LS(){return Zv||(Zv=1,dd.exports=US()),dd.exports}var R=LS(),hd={exports:{}},rt={};var Kv;function NS(){if(Kv)return rt;Kv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function _(O,ie,Te){this.props=O,this.context=ie,this.refs=S,this.updater=Te||E}_.prototype.isReactComponent={},_.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function P(){}P.prototype=_.prototype;function L(O,ie,Te){this.props=O,this.context=ie,this.refs=S,this.updater=Te||E}var w=L.prototype=new P;w.constructor=L,b(w,_.prototype),w.isPureReactComponent=!0;var H=Array.isArray;function V(){}var z={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function D(O,ie,Te){var Ce=Te.ref;return{$$typeof:r,type:O,key:ie,ref:Ce!==void 0?Ce:null,props:Te}}function U(O,ie){return D(O.type,ie,O.props)}function F(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function ce(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Te){return ie[Te]})}var le=/\/+/g;function de(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?ce(""+O.key):ie.toString(36)}function he(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(V,V):(O.status="pending",O.then(function(ie){O.status==="pending"&&(O.status="fulfilled",O.value=ie)},function(ie){O.status==="pending"&&(O.status="rejected",O.reason=ie)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function I(O,ie,Te,Ce,J){var xe=typeof O;(xe==="undefined"||xe==="boolean")&&(O=null);var _e=!1;if(O===null)_e=!0;else switch(xe){case"bigint":case"string":case"number":_e=!0;break;case"object":switch(O.$$typeof){case r:case e:_e=!0;break;case g:return _e=O._init,I(_e(O._payload),ie,Te,Ce,J)}}if(_e)return J=J(O),_e=Ce===""?"."+de(O,0):Ce,H(J)?(Te="",_e!=null&&(Te=_e.replace(le,"$&/")+"/"),I(J,ie,Te,"",function(nt){return nt})):J!=null&&(F(J)&&(J=U(J,Te+(J.key==null||O&&O.key===J.key?"":(""+J.key).replace(le,"$&/")+"/")+_e)),ie.push(J)),1;_e=0;var Ge=Ce===""?".":Ce+":";if(H(O))for(var ze=0;ze<O.length;ze++)Ce=O[ze],xe=Ge+de(Ce,ze),_e+=I(Ce,ie,Te,xe,J);else if(ze=M(O),typeof ze=="function")for(O=ze.call(O),ze=0;!(Ce=O.next()).done;)Ce=Ce.value,xe=Ge+de(Ce,ze++),_e+=I(Ce,ie,Te,xe,J);else if(xe==="object"){if(typeof O.then=="function")return I(he(O),ie,Te,Ce,J);throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return _e}function K(O,ie,Te){if(O==null)return O;var Ce=[],J=0;return I(O,Ce,"","",function(xe){return ie.call(Te,xe,J++)}),Ce}function Z(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(Te){(O._status===0||O._status===-1)&&(O._status=1,O._result=Te)},function(Te){(O._status===0||O._status===-1)&&(O._status=2,O._result=Te)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var Se=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},be={map:K,forEach:function(O,ie,Te){K(O,function(){ie.apply(this,arguments)},Te)},count:function(O){var ie=0;return K(O,function(){ie++}),ie},toArray:function(O){return K(O,function(ie){return ie})||[]},only:function(O){if(!F(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return rt.Activity=v,rt.Children=be,rt.Component=_,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=L,rt.StrictMode=s,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,rt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},rt.cache=function(O){return function(){return O.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(O,ie,Te){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Ce=b({},O.props),J=O.key;if(ie!=null)for(xe in ie.key!==void 0&&(J=""+ie.key),ie)!j.call(ie,xe)||xe==="key"||xe==="__self"||xe==="__source"||xe==="ref"&&ie.ref===void 0||(Ce[xe]=ie[xe]);var xe=arguments.length-2;if(xe===1)Ce.children=Te;else if(1<xe){for(var _e=Array(xe),Ge=0;Ge<xe;Ge++)_e[Ge]=arguments[Ge+2];Ce.children=_e}return D(O.type,J,Ce)},rt.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},rt.createElement=function(O,ie,Te){var Ce,J={},xe=null;if(ie!=null)for(Ce in ie.key!==void 0&&(xe=""+ie.key),ie)j.call(ie,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(J[Ce]=ie[Ce]);var _e=arguments.length-2;if(_e===1)J.children=Te;else if(1<_e){for(var Ge=Array(_e),ze=0;ze<_e;ze++)Ge[ze]=arguments[ze+2];J.children=Ge}if(O&&O.defaultProps)for(Ce in _e=O.defaultProps,_e)J[Ce]===void 0&&(J[Ce]=_e[Ce]);return D(O,xe,J)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(O){return{$$typeof:h,render:O}},rt.isValidElement=F,rt.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:Z}},rt.memo=function(O,ie){return{$$typeof:p,type:O,compare:ie===void 0?null:ie}},rt.startTransition=function(O){var ie=z.T,Te={};z.T=Te;try{var Ce=O(),J=z.S;J!==null&&J(Te,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(V,Se)}catch(xe){Se(xe)}finally{ie!==null&&Te.types!==null&&(ie.types=Te.types),z.T=ie}},rt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},rt.use=function(O){return z.H.use(O)},rt.useActionState=function(O,ie,Te){return z.H.useActionState(O,ie,Te)},rt.useCallback=function(O,ie){return z.H.useCallback(O,ie)},rt.useContext=function(O){return z.H.useContext(O)},rt.useDebugValue=function(){},rt.useDeferredValue=function(O,ie){return z.H.useDeferredValue(O,ie)},rt.useEffect=function(O,ie){return z.H.useEffect(O,ie)},rt.useEffectEvent=function(O){return z.H.useEffectEvent(O)},rt.useId=function(){return z.H.useId()},rt.useImperativeHandle=function(O,ie,Te){return z.H.useImperativeHandle(O,ie,Te)},rt.useInsertionEffect=function(O,ie){return z.H.useInsertionEffect(O,ie)},rt.useLayoutEffect=function(O,ie){return z.H.useLayoutEffect(O,ie)},rt.useMemo=function(O,ie){return z.H.useMemo(O,ie)},rt.useOptimistic=function(O,ie){return z.H.useOptimistic(O,ie)},rt.useReducer=function(O,ie,Te){return z.H.useReducer(O,ie,Te)},rt.useRef=function(O){return z.H.useRef(O)},rt.useState=function(O){return z.H.useState(O)},rt.useSyncExternalStore=function(O,ie,Te){return z.H.useSyncExternalStore(O,ie,Te)},rt.useTransition=function(){return z.H.useTransition()},rt.version="19.2.8",rt}var Qv;function Vh(){return Qv||(Qv=1,hd.exports=NS()),hd.exports}var Q=Vh(),pd={exports:{}},Bo={},md={exports:{}},gd={};var Jv;function OS(){return Jv||(Jv=1,(function(r){function e(I,K){var Z=I.length;I.push(K);e:for(;0<Z;){var Se=Z-1>>>1,be=I[Se];if(0<l(be,K))I[Se]=K,I[Z]=be,Z=Se;else break e}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var K=I[0],Z=I.pop();if(Z!==K){I[0]=Z;e:for(var Se=0,be=I.length,O=be>>>1;Se<O;){var ie=2*(Se+1)-1,Te=I[ie],Ce=ie+1,J=I[Ce];if(0>l(Te,Z))Ce<be&&0>l(J,Te)?(I[Se]=J,I[Ce]=Z,Se=Ce):(I[Se]=Te,I[ie]=Z,Se=ie);else if(Ce<be&&0>l(J,Z))I[Se]=J,I[Ce]=Z,Se=Ce;else break e}}return K}function l(I,K){var Z=I.sortIndex-K.sortIndex;return Z!==0?Z:I.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,v=null,x=3,M=!1,E=!1,b=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(I){for(var K=i(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=I)s(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function H(I){if(b=!1,w(I),!E)if(i(m)!==null)E=!0,V||(V=!0,ce());else{var K=i(p);K!==null&&he(H,K.startTime-I)}}var V=!1,z=-1,j=5,D=-1;function U(){return S?!0:!(r.unstable_now()-D<j)}function F(){if(S=!1,V){var I=r.unstable_now();D=I;var K=!0;try{e:{E=!1,b&&(b=!1,P(z),z=-1),M=!0;var Z=x;try{t:{for(w(I),v=i(m);v!==null&&!(v.expirationTime>I&&U());){var Se=v.callback;if(typeof Se=="function"){v.callback=null,x=v.priorityLevel;var be=Se(v.expirationTime<=I);if(I=r.unstable_now(),typeof be=="function"){v.callback=be,w(I),K=!0;break t}v===i(m)&&s(m),w(I)}else s(m);v=i(m)}if(v!==null)K=!0;else{var O=i(p);O!==null&&he(H,O.startTime-I),K=!1}}break e}finally{v=null,x=Z,M=!1}K=void 0}}finally{K?ce():V=!1}}}var ce;if(typeof L=="function")ce=function(){L(F)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,de=le.port2;le.port1.onmessage=F,ce=function(){de.postMessage(null)}}else ce=function(){_(F,0)};function he(I,K){z=_(function(){I(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(I){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var Z=x;x=K;try{return I()}finally{x=Z}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(I,K){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Z=x;x=I;try{return K()}finally{x=Z}},r.unstable_scheduleCallback=function(I,K,Z){var Se=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Se+Z:Se):Z=Se,I){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=Z+be,I={id:g++,callback:K,priorityLevel:I,startTime:Z,expirationTime:be,sortIndex:-1},Z>Se?(I.sortIndex=Z,e(p,I),i(m)===null&&I===i(p)&&(b?(P(z),z=-1):b=!0,he(H,Z-Se))):(I.sortIndex=be,e(m,I),E||M||(E=!0,V||(V=!0,ce()))),I},r.unstable_shouldYield=U,r.unstable_wrapCallback=function(I){var K=x;return function(){var Z=x;x=K;try{return I.apply(this,arguments)}finally{x=Z}}}})(gd)),gd}var $v;function PS(){return $v||($v=1,md.exports=OS()),md.exports}var vd={exports:{}},An={};var e_;function zS(){if(e_)return An;e_=1;var r=Vh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,An.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},An.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},An.requestFormReset=function(m){s.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},An.useFormStatus=function(){return f.H.useHostTransitionStatus()},An.version="19.2.8",An}var t_;function IS(){if(t_)return vd.exports;t_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),vd.exports=zS(),vd.exports}var n_;function BS(){if(n_)return Bo;n_=1;var r=PS(),e=Vh(),i=IS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var y=!1,A=u.child;A;){if(A===a){y=!0,a=u,o=d;break}if(A===o){y=!0,o=u,a=d;break}A=A.sibling}if(!y){for(A=d.child;A;){if(A===a){y=!0,a=d,o=u;break}if(A===o){y=!0,o=d,a=u;break}A=A.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var le=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case H:return"Suspense";case V:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case L:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:de(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return de(t(n))}catch{}}return null}var he=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Se=[],be=-1;function O(t){return{current:t}}function ie(t){0>be||(t.current=Se[be],Se[be]=null,be--)}function Te(t,n){be++,Se[be]=t.current,t.current=n}var Ce=O(null),J=O(null),xe=O(null),_e=O(null);function Ge(t,n){switch(Te(xe,n),Te(J,t),Te(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?vv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=vv(n),t=_v(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(Ce),Te(Ce,t)}function ze(){ie(Ce),ie(J),ie(xe)}function nt(t){t.memoizedState!==null&&Te(_e,t);var n=Ce.current,a=_v(n,t.type);n!==a&&(Te(J,t),Te(Ce,a))}function Xt(t){J.current===t&&(ie(Ce),ie(J)),_e.current===t&&(ie(_e),No._currentValue=Z)}var ht,G;function Tt(t){if(ht===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ht=n&&n[1]||"",G=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ht+t+G}var $e=!1;function St(t,n){if(!t||$e)return"";$e=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(oe){var ne=oe}Reflect.construct(t,[],ge)}else{try{ge.call()}catch(oe){ne=oe}t.call(ge.prototype)}}else{try{throw Error()}catch(oe){ne=oe}(ge=t())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(oe){if(oe&&ne&&typeof oe.stack=="string")return[oe.stack,ne.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],A=d[1];if(y&&A){var B=y.split(`
`),ee=A.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===ee.length)for(o=B.length-1,u=ee.length-1;1<=o&&0<=u&&B[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==ee[u]){var fe=`
`+B[o].replace(" at new "," at ");return t.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",t.displayName)),fe}while(1<=o&&0<=u);break}}}finally{$e=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Tt(a):""}function Ke(t,n){switch(t.tag){case 26:case 27:case 5:return Tt(t.type);case 16:return Tt("Lazy");case 13:return t.child!==n&&n!==null?Tt("Suspense Fallback"):Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 15:return St(t.type,!1);case 11:return St(t.type.render,!1);case 1:return St(t.type,!0);case 31:return Tt("Activity");default:return""}}function Gt(t){try{var n="",a=null;do n+=Ke(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Fe=Object.prototype.hasOwnProperty,st=r.unstable_scheduleCallback,Qt=r.unstable_cancelCallback,Zt=r.unstable_shouldYield,N=r.unstable_requestPaint,T=r.unstable_now,te=r.unstable_getCurrentPriorityLevel,pe=r.unstable_ImmediatePriority,Me=r.unstable_UserBlockingPriority,ue=r.unstable_NormalPriority,Ye=r.unstable_LowPriority,we=r.unstable_IdlePriority,We=r.log,qe=r.unstable_setDisableYieldValue,Ae=null,De=null;function Ze(t){if(typeof We=="function"&&qe(t),De&&typeof De.setStrictMode=="function")try{De.setStrictMode(Ae,t)}catch{}}var Ie=Math.clz32?Math.clz32:X,Le=Math.log,ot=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(Le(t)/ot|0)|0}var Re=256,Ue=262144,Be=4194304;function Ee(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Ee(o):(y&=A,y!==0?u=Ee(y):a||(a=A&~t,a!==0&&(u=Ee(a))))):(A=o&~d,A!==0?u=Ee(A):y!==0?u=Ee(y):a||(a=o&~t,a!==0&&(u=Ee(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function He(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function at(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(){var t=Be;return Be<<=1,(Be&62914560)===0&&(Be=4194304),t}function bt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ni(t,n,a,o,u,d){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,B=t.expirationTimes,ee=t.hiddenUpdates;for(a=y&~a;0<a;){var fe=31-Ie(a),ge=1<<fe;A[fe]=0,B[fe]=-1;var ne=ee[fe];if(ne!==null)for(ee[fe]=null,fe=0;fe<ne.length;fe++){var oe=ne[fe];oe!==null&&(oe.lane&=-536870913)}a&=~ge}o!==0&&Ws(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~n))}function Ws(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ie(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Ai(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ie(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Ur(t,n){var a=n&-n;return a=(a&42)!==0?1:Lr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Lr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Nr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ja(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:Gv(t.type))}function qs(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var Wn=Math.random().toString(36).slice(2),sn="__reactFiber$"+Wn,xn="__reactProps$"+Wn,ga="__reactContainer$"+Wn,Ys="__reactEvents$"+Wn,ru="__reactListeners$"+Wn,su="__reactHandles$"+Wn,cl="__reactResources$"+Wn,$a="__reactMarker$"+Wn;function C(t){delete t[sn],delete t[xn],delete t[Ys],delete t[ru],delete t[su]}function W(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ga]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=bv(t);t!==null;){if(a=t[sn])return a;t=bv(t)}return n}t=a,a=t.parentNode}return null}function ae(t){if(t=t[sn]||t[ga]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function re(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function q(t){var n=t[cl];return n||(n=t[cl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ye(t){t[$a]=!0}var Ne=new Set,ke={};function Pe(t,n){Qe(t,n),Qe(t+"Capture",n)}function Qe(t,n){for(ke[t]=n,t=0;t<n.length;t++)Ne.add(n[t])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Je={},dt={};function Lt(t){return Fe.call(dt,t)?!0:Fe.call(Je,t)?!1:it.test(t)?dt[t]=!0:(Je[t]=!0,!1)}function Vt(t,n,a){if(Lt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Nt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function pt(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Xe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function At(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function yn(t){if(!t._valueTracker){var n=jt(t)?"checked":"value";t._valueTracker=At(t,n,""+t[n])}}function Gi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=jt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function gn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var er=/[\n"\\]/g;function vt(t){return t.replace(er,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function bn(t,n,a,o,u,d,y,A){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Xe(n)):t.value!==""+Xe(n)&&(t.value=""+Xe(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?dn(t,y,Xe(n)):a!=null?dn(t,y,Xe(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+Xe(A):t.removeAttribute("name")}function Un(t,n,a,o,u,d,y,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){yn(t);return}a=a!=null?""+Xe(a):"",n=n!=null?""+Xe(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),yn(t)}function dn(t,n,a){n==="number"&&gn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function tn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Xe(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Or(t,n,a){if(n!=null&&(n=""+Xe(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Xe(a):""}function Ri(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(he(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Xe(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),yn(t)}function Pr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ax=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pp(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ax.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function mp(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&pp(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&pp(t,d,n[d])}function ou(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ul(t){return Cx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Vi(){}var lu=null;function cu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zr=null,Ir=null;function gp(t){var n=ae(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;e:switch(t=n.stateNode,n.type){case"input":if(bn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[xn]||null;if(!u)throw Error(s(90));bn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Gi(o)}break e;case"textarea":Or(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&tn(t,!!a.multiple,n,!1)}}}var uu=!1;function vp(t,n,a){if(uu)return t(n,a);uu=!0;try{var o=t(n);return o}finally{if(uu=!1,(zr!==null||Ir!==null)&&(Ql(),zr&&(n=zr,t=Ir,Ir=zr=null,gp(n),t)))for(n=0;n<t.length;n++)gp(t[n])}}function Zs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fu=!1;if(ki)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){fu=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{fu=!1}var va=null,du=null,fl=null;function _p(){if(fl)return fl;var t,n=du,a=n.length,o,u="value"in va?va.value:va.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[d-o];o++);return fl=u.slice(t,1<o?1-o:void 0)}function dl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function hl(){return!0}function xp(){return!1}function In(t){function n(a,o,u,d,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?hl:xp,this.isPropagationStopped=xp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),n}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=In(tr),Qs=v({},tr,{view:0,detail:0}),wx=In(Qs),hu,pu,Js,ml=v({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(hu=t.screenX-Js.screenX,pu=t.screenY-Js.screenY):pu=hu=0,Js=t),hu)},movementY:function(t){return"movementY"in t?t.movementY:pu}}),yp=In(ml),Dx=v({},ml,{dataTransfer:0}),Ux=In(Dx),Lx=v({},Qs,{relatedTarget:0}),mu=In(Lx),Nx=v({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ox=In(Nx),Px=v({},tr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zx=In(Px),Ix=v({},tr,{data:0}),Sp=In(Ix),Bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Hx[t])?!!n[t]:!1}function gu(){return Gx}var Vx=v({},Qs,{key:function(t){if(t.key){var n=Bx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kx=In(Vx),Xx=v({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=In(Xx),jx=v({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),Wx=In(jx),qx=v({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yx=In(qx),Zx=v({},ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Kx=In(Zx),Qx=v({},tr,{newState:0,oldState:0}),Jx=In(Qx),$x=[9,13,27,32],vu=ki&&"CompositionEvent"in window,$s=null;ki&&"documentMode"in document&&($s=document.documentMode);var ey=ki&&"TextEvent"in window&&!$s,Ep=ki&&(!vu||$s&&8<$s&&11>=$s),Tp=" ",bp=!1;function Ap(t,n){switch(t){case"keyup":return $x.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Br=!1;function ty(t,n){switch(t){case"compositionend":return Rp(n);case"keypress":return n.which!==32?null:(bp=!0,Tp);case"textInput":return t=n.data,t===Tp&&bp?null:t;default:return null}}function ny(t,n){if(Br)return t==="compositionend"||!vu&&Ap(t,n)?(t=_p(),fl=du=va=null,Br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ep&&n.locale!=="ko"?null:n.data;default:return null}}var iy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!iy[t.type]:n==="textarea"}function wp(t,n,a,o){zr?Ir?Ir.push(o):Ir=[o]:zr=o,n=ac(n,"onChange"),0<n.length&&(a=new pl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var eo=null,to=null;function ay(t){fv(t,0)}function gl(t){var n=re(t);if(Gi(n))return t}function Dp(t,n){if(t==="change")return n}var Up=!1;if(ki){var _u;if(ki){var xu="oninput"in document;if(!xu){var Lp=document.createElement("div");Lp.setAttribute("oninput","return;"),xu=typeof Lp.oninput=="function"}_u=xu}else _u=!1;Up=_u&&(!document.documentMode||9<document.documentMode)}function Np(){eo&&(eo.detachEvent("onpropertychange",Op),to=eo=null)}function Op(t){if(t.propertyName==="value"&&gl(to)){var n=[];wp(n,to,t,cu(t)),vp(ay,n)}}function ry(t,n,a){t==="focusin"?(Np(),eo=n,to=a,eo.attachEvent("onpropertychange",Op)):t==="focusout"&&Np()}function sy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gl(to)}function oy(t,n){if(t==="click")return gl(n)}function ly(t,n){if(t==="input"||t==="change")return gl(n)}function cy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var qn=typeof Object.is=="function"?Object.is:cy;function no(t,n){if(qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Fe.call(n,u)||!qn(t[u],n[u]))return!1}return!0}function Pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zp(t,n){var a=Pp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Pp(a)}}function Ip(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ip(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Bp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=gn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=gn(t.document)}return n}function yu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var uy=ki&&"documentMode"in document&&11>=document.documentMode,Fr=null,Su=null,io=null,Mu=!1;function Fp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mu||Fr==null||Fr!==gn(o)||(o=Fr,"selectionStart"in o&&yu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&no(io,o)||(io=o,o=ac(Su,"onSelect"),0<o.length&&(n=new pl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Fr)))}function nr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Hr={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},Eu={},Hp={};ki&&(Hp=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function ir(t){if(Eu[t])return Eu[t];if(!Hr[t])return t;var n=Hr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Hp)return Eu[t]=n[a];return t}var Gp=ir("animationend"),Vp=ir("animationiteration"),kp=ir("animationstart"),fy=ir("transitionrun"),dy=ir("transitionstart"),hy=ir("transitioncancel"),Xp=ir("transitionend"),jp=new Map,Tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tu.push("scrollEnd");function pi(t,n){jp.set(t,n),Pe(n,[t])}var vl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ii=[],Gr=0,bu=0;function _l(){for(var t=Gr,n=bu=Gr=0;n<t;){var a=ii[n];ii[n++]=null;var o=ii[n];ii[n++]=null;var u=ii[n];ii[n++]=null;var d=ii[n];if(ii[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&Wp(a,u,d)}}function xl(t,n,a,o){ii[Gr++]=t,ii[Gr++]=n,ii[Gr++]=a,ii[Gr++]=o,bu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Au(t,n,a,o){return xl(t,n,a,o),yl(t)}function ar(t,n){return xl(t,null,null,n),yl(t)}function Wp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Ie(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function yl(t){if(50<Ao)throw Ao=0,zf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Vr={};function py(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,o){return new py(t,n,a,o)}function Ru(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xi(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function qp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Sl(t,n,a,o,u,d){var y=0;if(o=t,typeof t=="function")Ru(t)&&(y=1);else if(typeof t=="string")y=xS(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=Yn(31,a,n,u),t.elementType=D,t.lanes=d,t;case b:return rr(a.children,u,d,n);case S:y=8,u|=24;break;case _:return t=Yn(12,a,n,u|2),t.elementType=_,t.lanes=d,t;case H:return t=Yn(13,a,n,u),t.elementType=H,t.lanes=d,t;case V:return t=Yn(19,a,n,u),t.elementType=V,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:y=10;break e;case P:y=9;break e;case w:y=11;break e;case z:y=14;break e;case j:y=16,o=null;break e}y=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Yn(y,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function rr(t,n,a,o){return t=Yn(7,t,o,n),t.lanes=a,t}function Cu(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function Yp(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function wu(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Zp=new WeakMap;function ai(t,n){if(typeof t=="object"&&t!==null){var a=Zp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Gt(n)},Zp.set(t,n),n)}return{value:t,source:n,stack:Gt(n)}}var kr=[],Xr=0,Ml=null,ao=0,ri=[],si=0,_a=null,Ci=1,wi="";function ji(t,n){kr[Xr++]=ao,kr[Xr++]=Ml,Ml=t,ao=n}function Kp(t,n,a){ri[si++]=Ci,ri[si++]=wi,ri[si++]=_a,_a=t;var o=Ci;t=wi;var u=32-Ie(o)-1;o&=~(1<<u),a+=1;var d=32-Ie(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Ci=1<<32-Ie(n)+u|a<<u|o,wi=d+t}else Ci=1<<d|a<<u|o,wi=t}function Du(t){t.return!==null&&(ji(t,1),Kp(t,1,0))}function Uu(t){for(;t===Ml;)Ml=kr[--Xr],kr[Xr]=null,ao=kr[--Xr],kr[Xr]=null;for(;t===_a;)_a=ri[--si],ri[si]=null,wi=ri[--si],ri[si]=null,Ci=ri[--si],ri[si]=null}function Qp(t,n){ri[si++]=Ci,ri[si++]=wi,ri[si++]=_a,Ci=n.id,wi=n.overflow,_a=t}var Sn=null,Wt=null,Mt=!1,xa=null,oi=!1,Lu=Error(s(519));function ya(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(ai(n,t)),Lu}function Jp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[sn]=t,n[xn]=o,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)gt(Co[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Un(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),Ri(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||mv(n.textContent,a)?(o.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),o.onScroll!=null&&gt("scroll",n),o.onScrollEnd!=null&&gt("scrollend",n),o.onClick!=null&&(n.onclick=Vi),n=!0):n=!1,n||ya(t,!0)}function $p(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:Sn=Sn.return}}function jr(t){if(t!==Sn)return!1;if(!Mt)return $p(t),Mt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Qf(t.type,t.memoizedProps)),a=!a),a&&Wt&&ya(t),$p(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Wt=Tv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Wt=Tv(t)}else n===27?(n=Wt,Oa(t.type)?(t=nd,nd=null,Wt=t):Wt=n):Wt=Sn?ci(t.stateNode.nextSibling):null;return!0}function sr(){Wt=Sn=null,Mt=!1}function Nu(){var t=xa;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),xa=null),t}function ro(t){xa===null?xa=[t]:xa.push(t)}var Ou=O(null),or=null,Wi=null;function Sa(t,n,a){Te(Ou,n._currentValue),n._currentValue=a}function qi(t){t._currentValue=Ou.current,ie(Ou)}function Pu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function zu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var A=d;d=u;for(var B=0;B<n.length;B++)if(A.context===n[B]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),Pu(d.return,a,t),o||(y=null);break e}d=A.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),Pu(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Wr(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var A=u.type;qn(u.pendingProps.value,y.value)||(t!==null?t.push(A):t=[A])}}else if(u===_e.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(No):t=[No])}u=u.return}t!==null&&zu(n,t,a,o),n.flags|=262144}function El(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function lr(t){or=t,Wi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return em(or,t)}function Tl(t,n){return or===null&&lr(t),em(t,n)}function em(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Wi===null){if(t===null)throw Error(s(308));Wi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Wi=Wi.next=n;return a}var my=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},gy=r.unstable_scheduleCallback,vy=r.unstable_NormalPriority,on={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Iu(){return{controller:new my,data:new Map,refCount:0}}function so(t){t.refCount--,t.refCount===0&&gy(vy,function(){t.controller.abort()})}var oo=null,Bu=0,qr=0,Yr=null;function _y(t,n){if(oo===null){var a=oo=[];Bu=0,qr=Vf(),Yr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Bu++,n.then(tm,tm),n}function tm(){if(--Bu===0&&oo!==null){Yr!==null&&(Yr.status="fulfilled");var t=oo;oo=null,qr=0,Yr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function xy(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var nm=I.S;I.S=function(t,n){Fg=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&_y(t,n),nm!==null&&nm(t,n)};var cr=O(null);function Fu(){var t=cr.current;return t!==null?t:kt.pooledCache}function bl(t,n){n===null?Te(cr,cr.current):Te(cr,n.pool)}function im(){var t=Fu();return t===null?null:{parent:on._currentValue,pool:t}}var Zr=Error(s(460)),Hu=Error(s(474)),Al=Error(s(542)),Rl={then:function(){}};function am(t){return t=t.status,t==="fulfilled"||t==="rejected"}function rm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Vi,Vi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,om(t),t;default:if(typeof n.status=="string")n.then(Vi,Vi);else{if(t=kt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,om(t),t}throw fr=n,Zr}}function ur(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(fr=a,Zr):a}}var fr=null;function sm(){if(fr===null)throw Error(s(459));var t=fr;return fr=null,t}function om(t){if(t===Zr||t===Al)throw Error(s(483))}var Kr=null,lo=0;function Cl(t){var n=lo;return lo+=1,Kr===null&&(Kr=[]),rm(Kr,t,n)}function co(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function wl(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function lm(t){function n(Y,k){if(t){var $=Y.deletions;$===null?(Y.deletions=[k],Y.flags|=16):$.push(k)}}function a(Y,k){if(!t)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function o(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function u(Y,k){return Y=Xi(Y,k),Y.index=0,Y.sibling=null,Y}function d(Y,k,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<k?(Y.flags|=67108866,k):$):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function y(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,k,$,me){return k===null||k.tag!==6?(k=Cu($,Y.mode,me),k.return=Y,k):(k=u(k,$),k.return=Y,k)}function B(Y,k,$,me){var et=$.type;return et===b?fe(Y,k,$.props.children,me,$.key):k!==null&&(k.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===j&&ur(et)===k.type)?(k=u(k,$.props),co(k,$),k.return=Y,k):(k=Sl($.type,$.key,$.props,null,Y.mode,me),co(k,$),k.return=Y,k)}function ee(Y,k,$,me){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=wu($,Y.mode,me),k.return=Y,k):(k=u(k,$.children||[]),k.return=Y,k)}function fe(Y,k,$,me,et){return k===null||k.tag!==7?(k=rr($,Y.mode,me,et),k.return=Y,k):(k=u(k,$),k.return=Y,k)}function ge(Y,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Cu(""+k,Y.mode,$),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return $=Sl(k.type,k.key,k.props,null,Y.mode,$),co($,k),$.return=Y,$;case E:return k=wu(k,Y.mode,$),k.return=Y,k;case j:return k=ur(k),ge(Y,k,$)}if(he(k)||ce(k))return k=rr(k,Y.mode,$,null),k.return=Y,k;if(typeof k.then=="function")return ge(Y,Cl(k),$);if(k.$$typeof===L)return ge(Y,Tl(Y,k),$);wl(Y,k)}return null}function ne(Y,k,$,me){var et=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return et!==null?null:A(Y,k,""+$,me);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===et?B(Y,k,$,me):null;case E:return $.key===et?ee(Y,k,$,me):null;case j:return $=ur($),ne(Y,k,$,me)}if(he($)||ce($))return et!==null?null:fe(Y,k,$,me,null);if(typeof $.then=="function")return ne(Y,k,Cl($),me);if($.$$typeof===L)return ne(Y,k,Tl(Y,$),me);wl(Y,$)}return null}function oe(Y,k,$,me,et){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return Y=Y.get($)||null,A(k,Y,""+me,et);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case M:return Y=Y.get(me.key===null?$:me.key)||null,B(k,Y,me,et);case E:return Y=Y.get(me.key===null?$:me.key)||null,ee(k,Y,me,et);case j:return me=ur(me),oe(Y,k,$,me,et)}if(he(me)||ce(me))return Y=Y.get($)||null,fe(k,Y,me,et,null);if(typeof me.then=="function")return oe(Y,k,$,Cl(me),et);if(me.$$typeof===L)return oe(Y,k,$,Tl(k,me),et);wl(k,me)}return null}function Ve(Y,k,$,me){for(var et=null,Rt=null,je=k,ct=k=0,xt=null;je!==null&&ct<$.length;ct++){je.index>ct?(xt=je,je=null):xt=je.sibling;var Ct=ne(Y,je,$[ct],me);if(Ct===null){je===null&&(je=xt);break}t&&je&&Ct.alternate===null&&n(Y,je),k=d(Ct,k,ct),Rt===null?et=Ct:Rt.sibling=Ct,Rt=Ct,je=xt}if(ct===$.length)return a(Y,je),Mt&&ji(Y,ct),et;if(je===null){for(;ct<$.length;ct++)je=ge(Y,$[ct],me),je!==null&&(k=d(je,k,ct),Rt===null?et=je:Rt.sibling=je,Rt=je);return Mt&&ji(Y,ct),et}for(je=o(je);ct<$.length;ct++)xt=oe(je,Y,ct,$[ct],me),xt!==null&&(t&&xt.alternate!==null&&je.delete(xt.key===null?ct:xt.key),k=d(xt,k,ct),Rt===null?et=xt:Rt.sibling=xt,Rt=xt);return t&&je.forEach(function(Fa){return n(Y,Fa)}),Mt&&ji(Y,ct),et}function tt(Y,k,$,me){if($==null)throw Error(s(151));for(var et=null,Rt=null,je=k,ct=k=0,xt=null,Ct=$.next();je!==null&&!Ct.done;ct++,Ct=$.next()){je.index>ct?(xt=je,je=null):xt=je.sibling;var Fa=ne(Y,je,Ct.value,me);if(Fa===null){je===null&&(je=xt);break}t&&je&&Fa.alternate===null&&n(Y,je),k=d(Fa,k,ct),Rt===null?et=Fa:Rt.sibling=Fa,Rt=Fa,je=xt}if(Ct.done)return a(Y,je),Mt&&ji(Y,ct),et;if(je===null){for(;!Ct.done;ct++,Ct=$.next())Ct=ge(Y,Ct.value,me),Ct!==null&&(k=d(Ct,k,ct),Rt===null?et=Ct:Rt.sibling=Ct,Rt=Ct);return Mt&&ji(Y,ct),et}for(je=o(je);!Ct.done;ct++,Ct=$.next())Ct=oe(je,Y,ct,Ct.value,me),Ct!==null&&(t&&Ct.alternate!==null&&je.delete(Ct.key===null?ct:Ct.key),k=d(Ct,k,ct),Rt===null?et=Ct:Rt.sibling=Ct,Rt=Ct);return t&&je.forEach(function(DS){return n(Y,DS)}),Mt&&ji(Y,ct),et}function Ft(Y,k,$,me){if(typeof $=="object"&&$!==null&&$.type===b&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:e:{for(var et=$.key;k!==null;){if(k.key===et){if(et=$.type,et===b){if(k.tag===7){a(Y,k.sibling),me=u(k,$.props.children),me.return=Y,Y=me;break e}}else if(k.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===j&&ur(et)===k.type){a(Y,k.sibling),me=u(k,$.props),co(me,$),me.return=Y,Y=me;break e}a(Y,k);break}else n(Y,k);k=k.sibling}$.type===b?(me=rr($.props.children,Y.mode,me,$.key),me.return=Y,Y=me):(me=Sl($.type,$.key,$.props,null,Y.mode,me),co(me,$),me.return=Y,Y=me)}return y(Y);case E:e:{for(et=$.key;k!==null;){if(k.key===et)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(Y,k.sibling),me=u(k,$.children||[]),me.return=Y,Y=me;break e}else{a(Y,k);break}else n(Y,k);k=k.sibling}me=wu($,Y.mode,me),me.return=Y,Y=me}return y(Y);case j:return $=ur($),Ft(Y,k,$,me)}if(he($))return Ve(Y,k,$,me);if(ce($)){if(et=ce($),typeof et!="function")throw Error(s(150));return $=et.call($),tt(Y,k,$,me)}if(typeof $.then=="function")return Ft(Y,k,Cl($),me);if($.$$typeof===L)return Ft(Y,k,Tl(Y,$),me);wl(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(Y,k.sibling),me=u(k,$),me.return=Y,Y=me):(a(Y,k),me=Cu($,Y.mode,me),me.return=Y,Y=me),y(Y)):a(Y,k)}return function(Y,k,$,me){try{lo=0;var et=Ft(Y,k,$,me);return Kr=null,et}catch(je){if(je===Zr||je===Al)throw je;var Rt=Yn(29,je,null,Y.mode);return Rt.lanes=me,Rt.return=Y,Rt}}}var dr=lm(!0),cm=lm(!1),Ma=!1;function Gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ea(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ta(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Dt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=yl(t),Wp(t,null,a),n}return xl(t,o,n,a),yl(t)}function uo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ai(t,a)}}function ku(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Xu=!1;function fo(){if(Xu){var t=Yr;if(t!==null)throw t}}function ho(t,n,a,o){Xu=!1;var u=t.updateQueue;Ma=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var B=A,ee=B.next;B.next=null,y===null?d=ee:y.next=ee,y=B;var fe=t.alternate;fe!==null&&(fe=fe.updateQueue,A=fe.lastBaseUpdate,A!==y&&(A===null?fe.firstBaseUpdate=ee:A.next=ee,fe.lastBaseUpdate=B))}if(d!==null){var ge=u.baseState;y=0,fe=ee=B=null,A=d;do{var ne=A.lane&-536870913,oe=ne!==A.lane;if(oe?(_t&ne)===ne:(o&ne)===ne){ne!==0&&ne===qr&&(Xu=!0),fe!==null&&(fe=fe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Ve=t,tt=A;ne=n;var Ft=a;switch(tt.tag){case 1:if(Ve=tt.payload,typeof Ve=="function"){ge=Ve.call(Ft,ge,ne);break e}ge=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=tt.payload,ne=typeof Ve=="function"?Ve.call(Ft,ge,ne):Ve,ne==null)break e;ge=v({},ge,ne);break e;case 2:Ma=!0}}ne=A.callback,ne!==null&&(t.flags|=64,oe&&(t.flags|=8192),oe=u.callbacks,oe===null?u.callbacks=[ne]:oe.push(ne))}else oe={lane:ne,tag:A.tag,payload:A.payload,callback:A.callback,next:null},fe===null?(ee=fe=oe,B=ge):fe=fe.next=oe,y|=ne;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;oe=A,A=oe.next,oe.next=null,u.lastBaseUpdate=oe,u.shared.pending=null}}while(!0);fe===null&&(B=ge),u.baseState=B,u.firstBaseUpdate=ee,u.lastBaseUpdate=fe,d===null&&(u.shared.lanes=0),wa|=y,t.lanes=y,t.memoizedState=ge}}function um(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function fm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)um(a[t],n)}var Qr=O(null),Dl=O(0);function dm(t,n){t=na,Te(Dl,t),Te(Qr,n),na=t|n.baseLanes}function ju(){Te(Dl,na),Te(Qr,Qr.current)}function Wu(){na=Dl.current,ie(Qr),ie(Dl)}var Zn=O(null),li=null;function ba(t){var n=t.alternate;Te(nn,nn.current&1),Te(Zn,t),li===null&&(n===null||Qr.current!==null||n.memoizedState!==null)&&(li=t)}function qu(t){Te(nn,nn.current),Te(Zn,t),li===null&&(li=t)}function hm(t){t.tag===22?(Te(nn,nn.current),Te(Zn,t),li===null&&(li=t)):Aa()}function Aa(){Te(nn,nn.current),Te(Zn,Zn.current)}function Kn(t){ie(Zn),li===t&&(li=null),ie(nn)}var nn=O(0);function Ul(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ed(a)||td(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Yi=0,lt=null,It=null,ln=null,Ll=!1,Jr=!1,hr=!1,Nl=0,po=0,$r=null,yy=0;function Jt(){throw Error(s(321))}function Yu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!qn(t[a],n[a]))return!1;return!0}function Zu(t,n,a,o,u,d){return Yi=d,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?Km:ff,hr=!1,d=a(o,u),hr=!1,Jr&&(d=mm(n,a,o,u)),pm(t),d}function pm(t){I.H=vo;var n=It!==null&&It.next!==null;if(Yi=0,ln=It=lt=null,Ll=!1,po=0,$r=null,n)throw Error(s(300));t===null||cn||(t=t.dependencies,t!==null&&El(t)&&(cn=!0))}function mm(t,n,a,o){lt=t;var u=0;do{if(Jr&&($r=null),po=0,Jr=!1,25<=u)throw Error(s(301));if(u+=1,ln=It=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=Qm,d=n(a,o)}while(Jr);return d}function Sy(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?mo(n):n,t=t.useState()[0],(It!==null?It.memoizedState:null)!==t&&(lt.flags|=1024),n}function Ku(){var t=Nl!==0;return Nl=0,t}function Qu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ju(t){if(Ll){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ll=!1}Yi=0,ln=It=lt=null,Jr=!1,po=Nl=0,$r=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?lt.memoizedState=ln=t:ln=ln.next=t,ln}function an(){if(It===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var n=ln===null?lt.memoizedState:ln.next;if(n!==null)ln=n,It=t;else{if(t===null)throw lt.alternate===null?Error(s(467)):Error(s(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},ln===null?lt.memoizedState=ln=t:ln=ln.next=t}return ln}function Ol(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(t){var n=po;return po+=1,$r===null&&($r=[]),t=rm($r,t,n),n=lt,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Km:ff),t}function Pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return mo(t);if(t.$$typeof===L)return Mn(t)}throw Error(s(438,String(t)))}function $u(t){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=lt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ol(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=U;return n.index++,a}function Zi(t,n){return typeof n=="function"?n(t):n}function zl(t){var n=an();return ef(n,It,t)}function ef(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var A=y=null,B=null,ee=n,fe=!1;do{var ge=ee.lane&-536870913;if(ge!==ee.lane?(_t&ge)===ge:(Yi&ge)===ge){var ne=ee.revertLane;if(ne===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),ge===qr&&(fe=!0);else if((Yi&ne)===ne){ee=ee.next,ne===qr&&(fe=!0);continue}else ge={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(A=B=ge,y=d):B=B.next=ge,lt.lanes|=ne,wa|=ne;ge=ee.action,hr&&a(d,ge),d=ee.hasEagerState?ee.eagerState:a(d,ge)}else ne={lane:ge,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(A=B=ne,y=d):B=B.next=ne,lt.lanes|=ge,wa|=ge;ee=ee.next}while(ee!==null&&ee!==n);if(B===null?y=d:B.next=A,!qn(d,t.memoizedState)&&(cn=!0,fe&&(a=Yr,a!==null)))throw a;t.memoizedState=d,t.baseState=y,t.baseQueue=B,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function tf(t){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=t(d,y.action),y=y.next;while(y!==u);qn(d,n.memoizedState)||(cn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function gm(t,n,a){var o=lt,u=an(),d=Mt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!qn((It||u).memoizedState,a);if(y&&(u.memoizedState=a,cn=!0),u=u.queue,rf(xm.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,es(9,{destroy:void 0},_m.bind(null,o,u,a,n),null),kt===null)throw Error(s(349));d||(Yi&127)!==0||vm(o,n,a)}return a}function vm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=Ol(),lt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function _m(t,n,a,o){n.value=a,n.getSnapshot=o,ym(n)&&Sm(t)}function xm(t,n,a){return a(function(){ym(n)&&Sm(t)})}function ym(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!qn(t,a)}catch{return!0}}function Sm(t){var n=ar(t,2);n!==null&&Vn(n,t,2)}function nf(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),hr){Ze(!0);try{a()}finally{Ze(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:t},n}function Mm(t,n,a,o){return t.baseState=a,ef(t,It,typeof o=="function"?o:Zi)}function My(t,n,a,o,u){if(Fl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};I.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Em(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Em(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=I.T,y={};I.T=y;try{var A=a(u,o),B=I.S;B!==null&&B(y,A),Tm(t,n,A)}catch(ee){af(t,n,ee)}finally{d!==null&&y.types!==null&&(d.types=y.types),I.T=d}}else try{d=a(u,o),Tm(t,n,d)}catch(ee){af(t,n,ee)}}function Tm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){bm(t,n,o)},function(o){return af(t,n,o)}):bm(t,n,a)}function bm(t,n,a){n.status="fulfilled",n.value=a,Am(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Em(t,a)))}function af(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Am(n),n=n.next;while(n!==o)}t.action=null}function Am(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Rm(t,n){return n}function Cm(t,n){if(Mt){var a=kt.formState;if(a!==null){e:{var o=lt;if(Mt){if(Wt){t:{for(var u=Wt,d=oi;u.nodeType!==8;){if(!d){u=null;break t}if(u=ci(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Wt=ci(u.nextSibling),o=u.data==="F!";break e}}ya(o)}o=!1}o&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rm,lastRenderedState:n},a.queue=o,a=qm.bind(null,lt,o),o.dispatch=a,o=nf(!1),d=uf.bind(null,lt,!1,o.queue),o=Ln(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=My.bind(null,lt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function wm(t){var n=an();return Dm(n,It,t)}function Dm(t,n,a){if(n=ef(t,n,Rm)[0],t=zl(Zi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(y){throw y===Zr?Al:y}else o=n;n=an();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,es(9,{destroy:void 0},Ey.bind(null,u,a),null)),[o,d,t]}function Ey(t,n){t.action=n}function Um(t){var n=an(),a=It;if(a!==null)return Dm(n,a,t);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function es(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=lt.updateQueue,n===null&&(n=Ol(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Lm(){return an().memoizedState}function Il(t,n,a,o){var u=Ln();lt.flags|=t,u.memoizedState=es(1|n,{destroy:void 0},a,o===void 0?null:o)}function Bl(t,n,a,o){var u=an();o=o===void 0?null:o;var d=u.memoizedState.inst;It!==null&&o!==null&&Yu(o,It.memoizedState.deps)?u.memoizedState=es(n,d,a,o):(lt.flags|=t,u.memoizedState=es(1|n,d,a,o))}function Nm(t,n){Il(8390656,8,t,n)}function rf(t,n){Bl(2048,8,t,n)}function Ty(t){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=Ol(),lt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Om(t){var n=an().memoizedState;return Ty({ref:n,nextImpl:t}),function(){if((Dt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Pm(t,n){return Bl(4,2,t,n)}function zm(t,n){return Bl(4,4,t,n)}function Im(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Bm(t,n,a){a=a!=null?a.concat([t]):null,Bl(4,4,Im.bind(null,n,t),a)}function sf(){}function Fm(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Yu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Hm(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Yu(n,o[1]))return o[0];if(o=t(),hr){Ze(!0);try{t()}finally{Ze(!1)}}return a.memoizedState=[o,n],o}function of(t,n,a){return a===void 0||(Yi&1073741824)!==0&&(_t&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Gg(),lt.lanes|=t,wa|=t,a)}function Gm(t,n,a,o){return qn(a,n)?a:Qr.current!==null?(t=of(t,a,o),qn(t,n)||(cn=!0),t):(Yi&42)===0||(Yi&1073741824)!==0&&(_t&261930)===0?(cn=!0,t.memoizedState=a):(t=Gg(),lt.lanes|=t,wa|=t,n)}function Vm(t,n,a,o,u){var d=K.p;K.p=d!==0&&8>d?d:8;var y=I.T,A={};I.T=A,uf(t,!1,n,a);try{var B=u(),ee=I.S;if(ee!==null&&ee(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var fe=xy(B,o);go(t,n,fe,$n(t))}else go(t,n,o,$n(t))}catch(ge){go(t,n,{then:function(){},status:"rejected",reason:ge},$n())}finally{K.p=d,y!==null&&A.types!==null&&(y.types=A.types),I.T=y}}function by(){}function lf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=km(t).queue;Vm(t,u,n,Z,a===null?by:function(){return Xm(t),a(o)})}function km(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Xm(t){var n=km(t);n.next===null&&(n=t.alternate.memoizedState),go(t,n.next.queue,{},$n())}function cf(){return Mn(No)}function jm(){return an().memoizedState}function Wm(){return an().memoizedState}function Ay(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();t=Ea(a);var o=Ta(n,t,a);o!==null&&(Vn(o,n,a),uo(o,n,a)),n={cache:Iu()},t.payload=n;return}n=n.return}}function Ry(t,n,a){var o=$n();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fl(t)?Ym(n,a):(a=Au(t,n,a,o),a!==null&&(Vn(a,t,o),Zm(a,n,o)))}function qm(t,n,a){var o=$n();go(t,n,a,o)}function go(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fl(t))Ym(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,A=d(y,a);if(u.hasEagerState=!0,u.eagerState=A,qn(A,y))return xl(t,n,u,0),kt===null&&_l(),!1}catch{}if(a=Au(t,n,u,o),a!==null)return Vn(a,t,o),Zm(a,n,o),!0}return!1}function uf(t,n,a,o){if(o={lane:2,revertLane:Vf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Fl(t)){if(n)throw Error(s(479))}else n=Au(t,a,o,2),n!==null&&Vn(n,t,2)}function Fl(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function Ym(t,n){Jr=Ll=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Zm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ai(t,a)}}var vo={readContext:Mn,use:Pl,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt};vo.useEffectEvent=Jt;var Km={readContext:Mn,use:Pl,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:Nm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Il(4194308,4,Im.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Il(4194308,4,t,n)},useInsertionEffect:function(t,n){Il(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var o=t();if(hr){Ze(!0);try{t()}finally{Ze(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Ln();if(a!==void 0){var u=a(n);if(hr){Ze(!0);try{a(n)}finally{Ze(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Ry.bind(null,lt,t),[o.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=nf(t);var n=t.queue,a=qm.bind(null,lt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:sf,useDeferredValue:function(t,n){var a=Ln();return of(a,t,n)},useTransition:function(){var t=nf(!1);return t=Vm.bind(null,lt,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=lt,u=Ln();if(Mt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),kt===null)throw Error(s(349));(_t&127)!==0||vm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Nm(xm.bind(null,o,d,t),[t]),o.flags|=2048,es(9,{destroy:void 0},_m.bind(null,o,d,a,n),null),a},useId:function(){var t=Ln(),n=kt.identifierPrefix;if(Mt){var a=wi,o=Ci;a=(o&~(1<<32-Ie(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Nl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=yy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:cf,useFormState:Cm,useActionState:Cm,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=uf.bind(null,lt,!0,a),a.dispatch=n,[t,n]},useMemoCache:$u,useCacheRefresh:function(){return Ln().memoizedState=Ay.bind(null,lt)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((Dt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ff={readContext:Mn,use:Pl,useCallback:Fm,useContext:Mn,useEffect:rf,useImperativeHandle:Bm,useInsertionEffect:Pm,useLayoutEffect:zm,useMemo:Hm,useReducer:zl,useRef:Lm,useState:function(){return zl(Zi)},useDebugValue:sf,useDeferredValue:function(t,n){var a=an();return Gm(a,It.memoizedState,t,n)},useTransition:function(){var t=zl(Zi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:gm,useId:jm,useHostTransitionStatus:cf,useFormState:wm,useActionState:wm,useOptimistic:function(t,n){var a=an();return Mm(a,It,t,n)},useMemoCache:$u,useCacheRefresh:Wm};ff.useEffectEvent=Om;var Qm={readContext:Mn,use:Pl,useCallback:Fm,useContext:Mn,useEffect:rf,useImperativeHandle:Bm,useInsertionEffect:Pm,useLayoutEffect:zm,useMemo:Hm,useReducer:tf,useRef:Lm,useState:function(){return tf(Zi)},useDebugValue:sf,useDeferredValue:function(t,n){var a=an();return It===null?of(a,t,n):Gm(a,It.memoizedState,t,n)},useTransition:function(){var t=tf(Zi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:gm,useId:jm,useHostTransitionStatus:cf,useFormState:Um,useActionState:Um,useOptimistic:function(t,n){var a=an();return It!==null?Mm(a,It,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:$u,useCacheRefresh:Wm};Qm.useEffectEvent=Om;function df(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var hf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=$n(),u=Ea(o);u.payload=n,a!=null&&(u.callback=a),n=Ta(t,u,o),n!==null&&(Vn(n,t,o),uo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=$n(),u=Ea(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ta(t,u,o),n!==null&&(Vn(n,t,o),uo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=$n(),o=Ea(a);o.tag=2,n!=null&&(o.callback=n),n=Ta(t,o,a),n!==null&&(Vn(n,t,a),uo(n,t,a))}};function Jm(t,n,a,o,u,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!no(a,o)||!no(u,d):!0}function $m(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&hf.enqueueReplaceState(n,n.state,null)}function pr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function eg(t){vl(t)}function tg(t){console.error(t)}function ng(t){vl(t)}function Hl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ig(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function pf(t,n,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){Hl(t,n)},a}function ag(t){return t=Ea(t),t.tag=3,t}function rg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){ig(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){ig(n,a,o),typeof u!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Cy(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Wr(n,a,u,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?Jl():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Rl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ff(t,o,u)),!1;case 22:return a.flags|=65536,o===Rl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ff(t,o,u)),!1}throw Error(s(435,a.tag))}return Ff(t,o,u),Jl(),!1}if(Mt)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Lu&&(t=Error(s(422),{cause:o}),ro(ai(t,a)))):(o!==Lu&&(n=Error(s(423),{cause:o}),ro(ai(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ai(o,a),u=pf(t.stateNode,o,u),ku(t,u),$t!==4&&($t=2)),!1;var d=Error(s(520),{cause:o});if(d=ai(d,a),bo===null?bo=[d]:bo.push(d),$t!==4&&($t=2),n===null)return!0;o=ai(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=pf(a.stateNode,o,t),ku(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Da===null||!Da.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=ag(u),rg(u,t,a,o),ku(a,u),!1}a=a.return}while(a!==null);return!1}var mf=Error(s(461)),cn=!1;function En(t,n,a,o){n.child=t===null?cm(n,null,a,o):dr(n,t.child,a,o)}function sg(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var y={};for(var A in o)A!=="ref"&&(y[A]=o[A])}else y=o;return lr(n),o=Zu(t,n,a,y,d,u),A=Ku(),t!==null&&!cn?(Qu(t,n,u),Ki(t,n,u)):(Mt&&A&&Du(n),n.flags|=1,En(t,n,o,u),n.child)}function og(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Ru(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,lg(t,n,d,o,u)):(t=Sl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Ef(t,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:no,a(y,o)&&t.ref===n.ref)return Ki(t,n,u)}return n.flags|=1,t=Xi(d,o),t.ref=n.ref,t.return=n,n.child=t}function lg(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(no(d,o)&&t.ref===n.ref)if(cn=!1,n.pendingProps=o=d,Ef(t,u))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,Ki(t,n,u)}return gf(t,n,a,o,u)}function cg(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return ug(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&bl(n,d!==null?d.cachePool:null),d!==null?dm(n,d):ju(),hm(n);else return o=n.lanes=536870912,ug(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(bl(n,d.cachePool),dm(n,d),Aa(),n.memoizedState=null):(t!==null&&bl(n,null),ju(),Aa());return En(t,n,u,a),n.child}function _o(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ug(t,n,a,o,u){var d=Fu();return d=d===null?null:{parent:on._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&bl(n,null),ju(),hm(n),t!==null&&Wr(t,n,o,!0),n.childLanes=u,null}function Gl(t,n){return n=kl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function fg(t,n,a){return dr(n,t.child,null,a),t=Gl(n,n.pendingProps),t.flags|=2,Kn(n),n.memoizedState=null,t}function wy(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Mt){if(o.mode==="hidden")return t=Gl(n,o),n.lanes=536870912,_o(null,t);if(qu(n),(t=Wt)?(t=Ev(t,oi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:_a!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=Yp(t),a.return=n,n.child=a,Sn=n,Wt=null)):t=null,t===null)throw ya(n);return n.lanes=536870912,null}return Gl(n,o)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(qu(n),u)if(n.flags&256)n.flags&=-257,n=fg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||Wr(t,n,a,!1),u=(a&t.childLanes)!==0,cn||u){if(o=kt,o!==null&&(y=Ur(o,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,ar(t,y),Vn(o,t,y),mf;Jl(),n=fg(t,n,a)}else t=d.treeContext,Wt=ci(y.nextSibling),Sn=n,Mt=!0,xa=null,oi=!1,t!==null&&Qp(n,t),n=Gl(n,o),n.flags|=4096;return n}return t=Xi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Vl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function gf(t,n,a,o,u){return lr(n),a=Zu(t,n,a,o,void 0,u),o=Ku(),t!==null&&!cn?(Qu(t,n,u),Ki(t,n,u)):(Mt&&o&&Du(n),n.flags|=1,En(t,n,a,u),n.child)}function dg(t,n,a,o,u,d){return lr(n),n.updateQueue=null,a=mm(n,o,a,u),pm(t),o=Ku(),t!==null&&!cn?(Qu(t,n,d),Ki(t,n,d)):(Mt&&o&&Du(n),n.flags|=1,En(t,n,a,d),n.child)}function hg(t,n,a,o,u){if(lr(n),n.stateNode===null){var d=Vr,y=a.contextType;typeof y=="object"&&y!==null&&(d=Mn(y)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=hf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Gu(n),y=a.contextType,d.context=typeof y=="object"&&y!==null?Mn(y):Vr,d.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(df(n,a,y,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&hf.enqueueReplaceState(d,d.state,null),ho(n,o,d,u),fo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var A=n.memoizedProps,B=pr(a,A);d.props=B;var ee=d.context,fe=a.contextType;y=Vr,typeof fe=="object"&&fe!==null&&(y=Mn(fe));var ge=a.getDerivedStateFromProps;fe=typeof ge=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,fe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||ee!==y)&&$m(n,d,o,y),Ma=!1;var ne=n.memoizedState;d.state=ne,ho(n,o,d,u),fo(),ee=n.memoizedState,A||ne!==ee||Ma?(typeof ge=="function"&&(df(n,a,ge,o),ee=n.memoizedState),(B=Ma||Jm(n,a,B,o,ne,ee,y))?(fe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),d.props=o,d.state=ee,d.context=y,o=B):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Vu(t,n),y=n.memoizedProps,fe=pr(a,y),d.props=fe,ge=n.pendingProps,ne=d.context,ee=a.contextType,B=Vr,typeof ee=="object"&&ee!==null&&(B=Mn(ee)),A=a.getDerivedStateFromProps,(ee=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==ge||ne!==B)&&$m(n,d,o,B),Ma=!1,ne=n.memoizedState,d.state=ne,ho(n,o,d,u),fo();var oe=n.memoizedState;y!==ge||ne!==oe||Ma||t!==null&&t.dependencies!==null&&El(t.dependencies)?(typeof A=="function"&&(df(n,a,A,o),oe=n.memoizedState),(fe=Ma||Jm(n,a,fe,o,ne,oe,B)||t!==null&&t.dependencies!==null&&El(t.dependencies))?(ee||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,oe,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,oe,B)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=oe),d.props=o,d.state=oe,d.context=B,o=fe):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Vl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=dr(n,t.child,null,u),n.child=dr(n,null,a,u)):En(t,n,a,u),n.memoizedState=d.state,t=n.child):t=Ki(t,n,u),t}function pg(t,n,a,o){return sr(),n.flags|=256,En(t,n,a,o),n.child}var vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _f(t){return{baseLanes:t,cachePool:im()}}function xf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Jn),t}function mg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Mt){if(u?ba(n):Aa(),(t=Wt)?(t=Ev(t,oi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:_a!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=Yp(t),a.return=n,n.child=a,Sn=n,Wt=null)):t=null,t===null)throw ya(n);return td(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Aa(),u=n.mode,A=kl({mode:"hidden",children:A},u),o=rr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=_f(a),o.childLanes=xf(t,y,a),n.memoizedState=vf,_o(null,o)):(ba(n),yf(n,A))}var B=t.memoizedState;if(B!==null&&(A=B.dehydrated,A!==null)){if(d)n.flags&256?(ba(n),n.flags&=-257,n=Sf(t,n,a)):n.memoizedState!==null?(Aa(),n.child=t.child,n.flags|=128,n=null):(Aa(),A=o.fallback,u=n.mode,o=kl({mode:"visible",children:o.children},u),A=rr(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,dr(n,t.child,null,a),o=n.child,o.memoizedState=_f(a),o.childLanes=xf(t,y,a),n.memoizedState=vf,n=_o(null,o));else if(ba(n),td(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var ee=y.dgst;y=ee,o=Error(s(419)),o.stack="",o.digest=y,ro({value:o,source:null,stack:null}),n=Sf(t,n,a)}else if(cn||Wr(t,n,a,!1),y=(a&t.childLanes)!==0,cn||y){if(y=kt,y!==null&&(o=Ur(y,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,ar(t,o),Vn(y,t,o),mf;ed(A)||Jl(),n=Sf(t,n,a)}else ed(A)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Wt=ci(A.nextSibling),Sn=n,Mt=!0,xa=null,oi=!1,t!==null&&Qp(n,t),n=yf(n,o.children),n.flags|=4096);return n}return u?(Aa(),A=o.fallback,u=n.mode,B=t.child,ee=B.sibling,o=Xi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,ee!==null?A=Xi(ee,A):(A=rr(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,_o(null,o),o=n.child,A=t.child.memoizedState,A===null?A=_f(a):(u=A.cachePool,u!==null?(B=on._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=im(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=xf(t,y,a),n.memoizedState=vf,_o(t.child,o)):(ba(n),a=t.child,t=a.sibling,a=Xi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function yf(t,n){return n=kl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function kl(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function Sf(t,n,a){return dr(n,t.child,null,a),t=yf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function gg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Pu(t.return,n,a)}function Mf(t,n,a,o,u,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=d)}function vg(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var y=nn.current,A=(y&2)!==0;if(A?(y=y&1|2,n.flags|=128):y&=1,Te(nn,y),En(t,n,o,a),o=Mt?ao:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gg(t,a,n);else if(t.tag===19)gg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ul(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Mf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ul(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Mf(n,!0,a,null,d,o);break;case"together":Mf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),wa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Wr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Xi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Xi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Ef(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&El(t)))}function Dy(t,n,a){switch(n.tag){case 3:Ge(n,n.stateNode.containerInfo),Sa(n,on,t.memoizedState.cache),sr();break;case 27:case 5:nt(n);break;case 4:Ge(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,qu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?mg(t,n,a):(ba(n),t=Ki(t,n,a),t!==null?t.sibling:null);ba(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Wr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return vg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Te(nn,nn.current),o)break;return null;case 22:return n.lanes=0,cg(t,n,a,n.pendingProps);case 24:Sa(n,on,t.memoizedState.cache)}return Ki(t,n,a)}function _g(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!Ef(t,a)&&(n.flags&128)===0)return cn=!1,Dy(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,Mt&&(n.flags&1048576)!==0&&Kp(n,ao,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=ur(n.elementType),n.type=t,typeof t=="function")Ru(t)?(o=pr(t,o),n.tag=1,n=hg(null,n,t,o,a)):(n.tag=0,n=gf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=sg(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=og(null,n,t,o,a);break e}}throw n=de(t)||t,Error(s(306,n,""))}}return n;case 0:return gf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=pr(o,n.pendingProps),hg(t,n,o,u,a);case 3:e:{if(Ge(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Vu(t,n),ho(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Sa(n,on,o),o!==d.cache&&zu(n,[on],a,!0),fo(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=pg(t,n,o,a);break e}else if(o!==u){u=ai(Error(s(424)),n),ro(u),n=pg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Wt=ci(t.firstChild),Sn=n,Mt=!0,xa=null,oi=!0,a=cm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(sr(),o===u){n=Ki(t,n,a);break e}En(t,n,o,a)}n=n.child}return n;case 26:return Vl(t,n),t===null?(a=wv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,t=n.pendingProps,o=rc(xe.current).createElement(a),o[sn]=n,o[xn]=t,Tn(o,a,t),ye(o),n.stateNode=o):n.memoizedState=wv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&Mt&&(o=n.stateNode=Av(n.type,n.pendingProps,xe.current),Sn=n,oi=!0,u=Wt,Oa(n.type)?(nd=u,Wt=ci(o.firstChild)):Wt=u),En(t,n,n.pendingProps.children,a),Vl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Mt&&((u=o=Wt)&&(o=sS(o,n.type,n.pendingProps,oi),o!==null?(n.stateNode=o,Sn=n,Wt=ci(o.firstChild),oi=!1,u=!0):u=!1),u||ya(n)),nt(n),u=n.type,d=n.pendingProps,y=t!==null?t.memoizedProps:null,o=d.children,Qf(u,d)?o=null:y!==null&&Qf(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Zu(t,n,Sy,null,null,a),No._currentValue=u),Vl(t,n),En(t,n,o,a),n.child;case 6:return t===null&&Mt&&((t=a=Wt)&&(a=oS(a,n.pendingProps,oi),a!==null?(n.stateNode=a,Sn=n,Wt=null,t=!0):t=!1),t||ya(n)),null;case 13:return mg(t,n,a);case 4:return Ge(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=dr(n,null,o,a):En(t,n,o,a),n.child;case 11:return sg(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Sa(n,n.type,o.value),En(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,lr(n),u=Mn(u),o=o(u),n.flags|=1,En(t,n,o,a),n.child;case 14:return og(t,n,n.type,n.pendingProps,a);case 15:return lg(t,n,n.type,n.pendingProps,a);case 19:return vg(t,n,a);case 31:return wy(t,n,a);case 22:return cg(t,n,a,n.pendingProps);case 24:return lr(n),o=Mn(on),t===null?(u=Fu(),u===null&&(u=kt,d=Iu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Gu(n),Sa(n,on,u)):((t.lanes&a)!==0&&(Vu(t,n),ho(n,null,null,a),fo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Sa(n,on,o)):(o=d.cache,Sa(n,on,o),o!==u.cache&&zu(n,[on],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Qi(t){t.flags|=4}function Tf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(jg())t.flags|=8192;else throw fr=Rl,Hu}else t.flags&=-16777217}function xg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ov(n))if(jg())t.flags|=8192;else throw fr=Rl,Hu}function Xl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ot():536870912,t.lanes|=n,as|=n)}function xo(t,n){if(!Mt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Uy(t,n,a){var o=n.pendingProps;switch(Uu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),qi(on),ze(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(jr(n)?Qi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Nu())),qt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(Qi(n),d!==null?(qt(n),xg(n,d)):(qt(n),Tf(n,u,null,o,a))):d?d!==t.memoizedState?(Qi(n),qt(n),xg(n,d)):(qt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Qi(n),qt(n),Tf(n,u,t,o,a)),null;case 27:if(Xt(n),a=xe.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Qi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return qt(n),null}t=Ce.current,jr(n)?Jp(n):(t=Av(u,o,a),n.stateNode=t,Qi(n))}return qt(n),null;case 5:if(Xt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Qi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return qt(n),null}if(d=Ce.current,jr(n))Jp(n);else{var y=rc(xe.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}d[sn]=n,d[xn]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;e:switch(Tn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Qi(n)}}return qt(n),Tf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=xe.current,jr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Sn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||mv(t.nodeValue,a)),t||ya(n,!0)}else t=rc(t).createTextNode(o),t[sn]=n,n.stateNode=t}return qt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=jr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[sn]=n}else sr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),t=!1}else a=Nu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=jr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[sn]=n}else sr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),u=!1}else u=Nu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Xl(n,n.updateQueue),qt(n),null);case 4:return ze(),t===null&&Wf(n.stateNode.containerInfo),qt(n),null;case 10:return qi(n.type),qt(n),null;case 19:if(ie(nn),o=n.memoizedState,o===null)return qt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)xo(o,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Ul(t),d!==null){for(n.flags|=128,xo(o,!1),t=d.updateQueue,n.updateQueue=t,Xl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)qp(a,t),a=a.sibling;return Te(nn,nn.current&1|2),Mt&&ji(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&T()>Zl&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Ul(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Xl(n,t),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Mt)return qt(n),null}else 2*T()-o.renderingStartTime>Zl&&a!==536870912&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=T(),t.sibling=null,a=nn.current,Te(nn,u?a&1|2:a&1),Mt&&ji(n,o.treeForkCount),t):(qt(n),null);case 22:case 23:return Kn(n),Wu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&Xl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ie(cr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),qi(on),qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ly(t,n){switch(Uu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return qi(on),ze(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Xt(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(s(340));sr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));sr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ie(nn),null;case 4:return ze(),null;case 10:return qi(n.type),null;case 22:case 23:return Kn(n),Wu(),t!==null&&ie(cr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return qi(on),null;case 25:return null;default:return null}}function yg(t,n){switch(Uu(n),n.tag){case 3:qi(on),ze();break;case 26:case 27:case 5:Xt(n);break;case 4:ze();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:ie(nn);break;case 10:qi(n.type);break;case 22:case 23:Kn(n),Wu(),t!==null&&ie(cr);break;case 24:qi(on)}}function yo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==u)}}catch(A){zt(n,n.return,A)}}function Ra(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var y=o.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,u=n;var B=a,ee=A;try{ee()}catch(fe){zt(u,B,fe)}}}o=o.next}while(o!==d)}}catch(fe){zt(n,n.return,fe)}}function Sg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{fm(n,a)}catch(o){zt(t,t.return,o)}}}function Mg(t,n,a){a.props=pr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){zt(t,n,o)}}function So(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){zt(t,n,u)}}function Di(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){zt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){zt(t,n,u)}else a.current=null}function Eg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){zt(t,t.return,u)}}function bf(t,n,a){try{var o=t.stateNode;eS(o,t.type,a,n),o[xn]=n}catch(u){zt(t,t.return,u)}}function Tg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Oa(t.type)||t.tag===4}function Af(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Oa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Vi));else if(o!==4&&(o===27&&Oa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Rf(t,n,a),t=t.sibling;t!==null;)Rf(t,n,a),t=t.sibling}function jl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Oa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(jl(t,n,a),t=t.sibling;t!==null;)jl(t,n,a),t=t.sibling}function bg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Tn(n,o,a),n[sn]=t,n[xn]=a}catch(d){zt(t,t.return,d)}}var Ji=!1,un=!1,Cf=!1,Ag=typeof WeakSet=="function"?WeakSet:Set,vn=null;function Ny(t,n){if(t=t.containerInfo,Zf=dc,t=Bp(t),yu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var y=0,A=-1,B=-1,ee=0,fe=0,ge=t,ne=null;t:for(;;){for(var oe;ge!==a||u!==0&&ge.nodeType!==3||(A=y+u),ge!==d||o!==0&&ge.nodeType!==3||(B=y+o),ge.nodeType===3&&(y+=ge.nodeValue.length),(oe=ge.firstChild)!==null;)ne=ge,ge=oe;for(;;){if(ge===t)break t;if(ne===a&&++ee===u&&(A=y),ne===d&&++fe===o&&(B=y),(oe=ge.nextSibling)!==null)break;ge=ne,ne=ge.parentNode}ge=oe}a=A===-1||B===-1?null:{start:A,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kf={focusedElem:t,selectionRange:a},dc=!1,vn=n;vn!==null;)if(n=vn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,vn=t;else for(;vn!==null;){switch(n=vn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Ve=pr(a.type,u);t=o.getSnapshotBeforeUpdate(Ve,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){zt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)$f(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":$f(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,vn=t;break}vn=n.return}}function Rg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ea(t,a),o&4&&yo(5,a);break;case 1:if(ea(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){zt(a,a.return,y)}else{var u=pr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){zt(a,a.return,y)}}o&64&&Sg(a),o&512&&So(a,a.return);break;case 3:if(ea(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{fm(t,n)}catch(y){zt(a,a.return,y)}}break;case 27:n===null&&o&4&&bg(a);case 26:case 5:ea(t,a),n===null&&o&4&&Eg(a),o&512&&So(a,a.return);break;case 12:ea(t,a);break;case 31:ea(t,a),o&4&&Dg(t,a);break;case 13:ea(t,a),o&4&&Ug(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Vy.bind(null,a),lS(t,a))));break;case 22:if(o=a.memoizedState!==null||Ji,!o){n=n!==null&&n.memoizedState!==null||un,u=Ji;var d=un;Ji=o,(un=n)&&!d?ta(t,a,(a.subtreeFlags&8772)!==0):ea(t,a),Ji=u,un=d}break;case 30:break;default:ea(t,a)}}function Cg(t){var n=t.alternate;n!==null&&(t.alternate=null,Cg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&C(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Yt=null,Bn=!1;function $i(t,n,a){for(a=a.child;a!==null;)wg(t,n,a),a=a.sibling}function wg(t,n,a){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(Ae,a)}catch{}switch(a.tag){case 26:un||Di(a,n),$i(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Di(a,n);var o=Yt,u=Bn;Oa(a.type)&&(Yt=a.stateNode,Bn=!1),$i(t,n,a),Do(a.stateNode),Yt=o,Bn=u;break;case 5:un||Di(a,n);case 6:if(o=Yt,u=Bn,Yt=null,$i(t,n,a),Yt=o,Bn=u,Yt!==null)if(Bn)try{(Yt.nodeType===9?Yt.body:Yt.nodeName==="HTML"?Yt.ownerDocument.body:Yt).removeChild(a.stateNode)}catch(d){zt(a,n,d)}else try{Yt.removeChild(a.stateNode)}catch(d){zt(a,n,d)}break;case 18:Yt!==null&&(Bn?(t=Yt,Sv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ds(t)):Sv(Yt,a.stateNode));break;case 4:o=Yt,u=Bn,Yt=a.stateNode.containerInfo,Bn=!0,$i(t,n,a),Yt=o,Bn=u;break;case 0:case 11:case 14:case 15:Ra(2,a,n),un||Ra(4,a,n),$i(t,n,a);break;case 1:un||(Di(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Mg(a,n,o)),$i(t,n,a);break;case 21:$i(t,n,a);break;case 22:un=(o=un)||a.memoizedState!==null,$i(t,n,a),un=o;break;default:$i(t,n,a)}}function Dg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ds(t)}catch(a){zt(n,n.return,a)}}}function Ug(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ds(t)}catch(a){zt(n,n.return,a)}}function Oy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Ag),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Ag),n;default:throw Error(s(435,t.tag))}}function Wl(t,n){var a=Oy(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=ky.bind(null,t,o);o.then(u,u)}})}function Fn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,y=n,A=y;e:for(;A!==null;){switch(A.tag){case 27:if(Oa(A.type)){Yt=A.stateNode,Bn=!1;break e}break;case 5:Yt=A.stateNode,Bn=!1;break e;case 3:case 4:Yt=A.stateNode.containerInfo,Bn=!0;break e}A=A.return}if(Yt===null)throw Error(s(160));wg(d,y,u),Yt=null,Bn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Lg(n,t),n=n.sibling}var mi=null;function Lg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Fn(n,t),Hn(t),o&4&&(Ra(3,t,t.return),yo(3,t),Ra(5,t,t.return));break;case 1:Fn(n,t),Hn(t),o&512&&(un||a===null||Di(a,a.return)),o&64&&Ji&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=mi;if(Fn(n,t),Hn(t),o&512&&(un||a===null||Di(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[$a]||d[sn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Tn(d,o,a),d[sn]=t,ye(d),o=d;break e;case"link":var y=Lv("link","href",u).get(o+(a.href||""));if(y){for(var A=0;A<y.length;A++)if(d=y[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(A,1);break t}}d=u.createElement(o),Tn(d,o,a),u.head.appendChild(d);break;case"meta":if(y=Lv("meta","content",u).get(o+(a.content||""))){for(A=0;A<y.length;A++)if(d=y[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(A,1);break t}}d=u.createElement(o),Tn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[sn]=t,ye(d),o=d}t.stateNode=o}else Nv(u,t.type,t.stateNode);else t.stateNode=Uv(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Nv(u,t.type,t.stateNode):Uv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&bf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,t),Hn(t),o&512&&(un||a===null||Di(a,a.return)),a!==null&&o&4&&bf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,t),Hn(t),o&512&&(un||a===null||Di(a,a.return)),t.flags&32){u=t.stateNode;try{Pr(u,"")}catch(Ve){zt(t,t.return,Ve)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,bf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Cf=!0);break;case 6:if(Fn(n,t),Hn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ve){zt(t,t.return,Ve)}}break;case 3:if(lc=null,u=mi,mi=sc(n.containerInfo),Fn(n,t),mi=u,Hn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ds(n.containerInfo)}catch(Ve){zt(t,t.return,Ve)}Cf&&(Cf=!1,Ng(t));break;case 4:o=mi,mi=sc(t.stateNode.containerInfo),Fn(n,t),Hn(t),mi=o;break;case 12:Fn(n,t),Hn(t);break;case 31:Fn(n,t),Hn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Wl(t,o)));break;case 13:Fn(n,t),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yl=T()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Wl(t,o)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,ee=Ji,fe=un;if(Ji=ee||u,un=fe||B,Fn(n,t),un=fe,Ji=ee,Hn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||Ji||un||mr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(d=B.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=B.stateNode;var ge=B.memoizedProps.style,ne=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;A.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(Ve){zt(B,B.return,Ve)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Ve){zt(B,B.return,Ve)}}}else if(n.tag===18){if(a===null){B=n;try{var oe=B.stateNode;u?Mv(oe,!0):Mv(B.stateNode,!1)}catch(Ve){zt(B,B.return,Ve)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Wl(t,a))));break;case 19:Fn(n,t),Hn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Wl(t,o)));break;case 30:break;case 21:break;default:Fn(n,t),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Tg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Af(t);jl(t,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(Pr(y,""),a.flags&=-33);var A=Af(t);jl(t,A,y);break;case 3:case 4:var B=a.stateNode.containerInfo,ee=Af(t);Rf(t,ee,B);break;default:throw Error(s(161))}}catch(fe){zt(t,t.return,fe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ng(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ng(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Rg(t,n.alternate,n),n=n.sibling}function mr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ra(4,n,n.return),mr(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Mg(n,n.return,a),mr(n);break;case 27:Do(n.stateNode);case 26:case 5:Di(n,n.return),mr(n);break;case 22:n.memoizedState===null&&mr(n);break;case 30:mr(n);break;default:mr(n)}t=t.sibling}}function ta(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:ta(u,d,a),yo(4,d);break;case 1:if(ta(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){zt(o,o.return,ee)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)um(B[u],A)}catch(ee){zt(o,o.return,ee)}}a&&y&64&&Sg(d),So(d,d.return);break;case 27:bg(d);case 26:case 5:ta(u,d,a),a&&o===null&&y&4&&Eg(d),So(d,d.return);break;case 12:ta(u,d,a);break;case 31:ta(u,d,a),a&&y&4&&Dg(u,d);break;case 13:ta(u,d,a),a&&y&4&&Ug(u,d);break;case 22:d.memoizedState===null&&ta(u,d,a),So(d,d.return);break;case 30:break;default:ta(u,d,a)}n=n.sibling}}function wf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&so(a))}function Df(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t))}function gi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Og(t,n,a,o),n=n.sibling}function Og(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:gi(t,n,a,o),u&2048&&yo(9,n);break;case 1:gi(t,n,a,o);break;case 3:gi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t)));break;case 12:if(u&2048){gi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,y=d.id,A=d.onPostCommit;typeof A=="function"&&A(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){zt(n,n.return,B)}}else gi(t,n,a,o);break;case 31:gi(t,n,a,o);break;case 13:gi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?gi(t,n,a,o):Mo(t,n):d._visibility&2?gi(t,n,a,o):(d._visibility|=2,ts(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&wf(y,n);break;case 24:gi(t,n,a,o),u&2048&&Df(n.alternate,n);break;default:gi(t,n,a,o)}}function ts(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,y=n,A=a,B=o,ee=y.flags;switch(y.tag){case 0:case 11:case 15:ts(d,y,A,B,u),yo(8,y);break;case 23:break;case 22:var fe=y.stateNode;y.memoizedState!==null?fe._visibility&2?ts(d,y,A,B,u):Mo(d,y):(fe._visibility|=2,ts(d,y,A,B,u)),u&&ee&2048&&wf(y.alternate,y);break;case 24:ts(d,y,A,B,u),u&&ee&2048&&Df(y.alternate,y);break;default:ts(d,y,A,B,u)}n=n.sibling}}function Mo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Mo(a,o),u&2048&&wf(o.alternate,o);break;case 24:Mo(a,o),u&2048&&Df(o.alternate,o);break;default:Mo(a,o)}n=n.sibling}}var Eo=8192;function ns(t,n,a){if(t.subtreeFlags&Eo)for(t=t.child;t!==null;)Pg(t,n,a),t=t.sibling}function Pg(t,n,a){switch(t.tag){case 26:ns(t,n,a),t.flags&Eo&&t.memoizedState!==null&&yS(a,mi,t.memoizedState,t.memoizedProps);break;case 5:ns(t,n,a);break;case 3:case 4:var o=mi;mi=sc(t.stateNode.containerInfo),ns(t,n,a),mi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Eo,Eo=16777216,ns(t,n,a),Eo=o):ns(t,n,a));break;default:ns(t,n,a)}}function zg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function To(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,Bg(o,t)}zg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ig(t),t=t.sibling}function Ig(t){switch(t.tag){case 0:case 11:case 15:To(t),t.flags&2048&&Ra(9,t,t.return);break;case 3:To(t);break;case 12:To(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ql(t)):To(t);break;default:To(t)}}function ql(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,Bg(o,t)}zg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ra(8,n,n.return),ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ql(n));break;default:ql(n)}t=t.sibling}}function Bg(t,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Ra(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:so(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vn=o;else e:for(a=t;vn!==null;){o=vn;var u=o.sibling,d=o.return;if(Cg(o),o===a){vn=null;break e}if(u!==null){u.return=d,vn=u;break e}vn=d}}}var Py={getCacheForType:function(t){var n=Mn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(on).controller.signal}},zy=typeof WeakMap=="function"?WeakMap:Map,Dt=0,kt=null,mt=null,_t=0,Pt=0,Qn=null,Ca=!1,is=!1,Uf=!1,na=0,$t=0,wa=0,gr=0,Lf=0,Jn=0,as=0,bo=null,Gn=null,Nf=!1,Yl=0,Fg=0,Zl=1/0,Kl=null,Da=null,hn=0,Ua=null,rs=null,ia=0,Of=0,Pf=null,Hg=null,Ao=0,zf=null;function $n(){return(Dt&2)!==0&&_t!==0?_t&-_t:I.T!==null?Vf():Ja()}function Gg(){if(Jn===0)if((_t&536870912)===0||Mt){var t=Ue;Ue<<=1,(Ue&3932160)===0&&(Ue=262144),Jn=t}else Jn=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Jn}function Vn(t,n,a){(t===kt&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)&&(ss(t,0),La(t,_t,Jn,!1)),Dn(t,a),((Dt&2)===0||t!==kt)&&(t===kt&&((Dt&2)===0&&(gr|=a),$t===4&&La(t,_t,Jn,!1)),Ui(t))}function Vg(t,n,a){if((Dt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||He(t,n),u=o?Fy(t,n):Bf(t,n,!0),d=o;do{if(u===0){is&&!o&&La(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!Iy(a)){u=Bf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var A=t;u=bo;var B=A.current.memoizedState.isDehydrated;if(B&&(ss(A,y).flags|=256),y=Bf(A,y,!1),y!==2){if(Uf&&!B){A.errorRecoveryDisabledLanes|=d,gr|=d,u=4;break e}d=Gn,Gn=u,d!==null&&(Gn===null?Gn=d:Gn.push.apply(Gn,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){ss(t,0),La(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:La(o,n,Jn,!Ca);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Yl+300-T(),10<u)){if(La(o,n,Jn,!Ca),ve(o,0,!0)!==0)break e;ia=n,o.timeoutHandle=xv(kg.bind(null,o,a,Gn,Kl,Nf,n,Jn,gr,as,Ca,d,"Throttled",-0,0),u);break e}kg(o,a,Gn,Kl,Nf,n,Jn,gr,as,Ca,d,null,-0,0)}}break}while(!0);Ui(t)}function kg(t,n,a,o,u,d,y,A,B,ee,fe,ge,ne,oe){if(t.timeoutHandle=-1,ge=n.subtreeFlags,ge&8192||(ge&16785408)===16785408){ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vi},Pg(n,d,ge);var Ve=(d&62914560)===d?Yl-T():(d&4194048)===d?Fg-T():0;if(Ve=SS(ge,Ve),Ve!==null){ia=d,t.cancelPendingCommit=Ve(Qg.bind(null,t,n,d,a,o,u,y,A,B,fe,ge,null,ne,oe)),La(t,d,y,!ee);return}}Qg(t,n,d,a,o,u,y,A,B)}function Iy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!qn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function La(t,n,a,o){n&=~Lf,n&=~gr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Ie(u),y=1<<d;o[d]=-1,u&=~y}a!==0&&Ws(t,a,n)}function Ql(){return(Dt&6)===0?(Ro(0),!1):!0}function If(){if(mt!==null){if(Pt===0)var t=mt.return;else t=mt,Wi=or=null,Ju(t),Kr=null,lo=0,t=mt;for(;t!==null;)yg(t.alternate,t),t=t.return;mt=null}}function ss(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,iS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ia=0,If(),kt=t,mt=a=Xi(t.current,null),_t=n,Pt=0,Qn=null,Ca=!1,is=He(t,n),Uf=!1,as=Jn=Lf=gr=wa=$t=0,Gn=bo=null,Nf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ie(o),d=1<<u;n|=t[u],o&=~d}return na=n,_l(),a}function Xg(t,n){lt=null,I.H=vo,n===Zr||n===Al?(n=sm(),Pt=3):n===Hu?(n=sm(),Pt=4):Pt=n===mf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,mt===null&&($t=1,Hl(t,ai(n,t.current)))}function jg(){var t=Zn.current;return t===null?!0:(_t&4194048)===_t?li===null:(_t&62914560)===_t||(_t&536870912)!==0?t===li:!1}function Wg(){var t=I.H;return I.H=vo,t===null?vo:t}function qg(){var t=I.A;return I.A=Py,t}function Jl(){$t=4,Ca||(_t&4194048)!==_t&&Zn.current!==null||(is=!0),(wa&134217727)===0&&(gr&134217727)===0||kt===null||La(kt,_t,Jn,!1)}function Bf(t,n,a){var o=Dt;Dt|=2;var u=Wg(),d=qg();(kt!==t||_t!==n)&&(Kl=null,ss(t,n)),n=!1;var y=$t;e:do try{if(Pt!==0&&mt!==null){var A=mt,B=Qn;switch(Pt){case 8:If(),y=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var ee=Pt;if(Pt=0,Qn=null,os(t,A,B,ee),a&&is){y=0;break e}break;default:ee=Pt,Pt=0,Qn=null,os(t,A,B,ee)}}By(),y=$t;break}catch(fe){Xg(t,fe)}while(!0);return n&&t.shellSuspendCounter++,Wi=or=null,Dt=o,I.H=u,I.A=d,mt===null&&(kt=null,_t=0,_l()),y}function By(){for(;mt!==null;)Yg(mt)}function Fy(t,n){var a=Dt;Dt|=2;var o=Wg(),u=qg();kt!==t||_t!==n?(Kl=null,Zl=T()+500,ss(t,n)):is=He(t,n);e:do try{if(Pt!==0&&mt!==null){n=mt;var d=Qn;t:switch(Pt){case 1:Pt=0,Qn=null,os(t,n,d,1);break;case 2:case 9:if(am(d)){Pt=0,Qn=null,Zg(n);break}n=function(){Pt!==2&&Pt!==9||kt!==t||(Pt=7),Ui(t)},d.then(n,n);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:am(d)?(Pt=0,Qn=null,Zg(n)):(Pt=0,Qn=null,os(t,n,d,7));break;case 5:var y=null;switch(mt.tag){case 26:y=mt.memoizedState;case 5:case 27:var A=mt;if(y?Ov(y):A.stateNode.complete){Pt=0,Qn=null;var B=A.sibling;if(B!==null)mt=B;else{var ee=A.return;ee!==null?(mt=ee,$l(ee)):mt=null}break t}}Pt=0,Qn=null,os(t,n,d,5);break;case 6:Pt=0,Qn=null,os(t,n,d,6);break;case 8:If(),$t=6;break e;default:throw Error(s(462))}}Hy();break}catch(fe){Xg(t,fe)}while(!0);return Wi=or=null,I.H=o,I.A=u,Dt=a,mt!==null?0:(kt=null,_t=0,_l(),$t)}function Hy(){for(;mt!==null&&!Zt();)Yg(mt)}function Yg(t){var n=_g(t.alternate,t,na);t.memoizedProps=t.pendingProps,n===null?$l(t):mt=n}function Zg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=dg(a,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=dg(a,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:Ju(n);default:yg(a,n),n=mt=qp(n,na),n=_g(a,n,na)}t.memoizedProps=t.pendingProps,n===null?$l(t):mt=n}function os(t,n,a,o){Wi=or=null,Ju(n),Kr=null,lo=0;var u=n.return;try{if(Cy(t,u,n,a,_t)){$t=1,Hl(t,ai(a,t.current)),mt=null;return}}catch(d){if(u!==null)throw mt=u,d;$t=1,Hl(t,ai(a,t.current)),mt=null;return}n.flags&32768?(Mt||o===1?t=!0:is||(_t&536870912)!==0?t=!1:(Ca=t=!0,(o===2||o===9||o===3||o===6)&&(o=Zn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Kg(n,t)):$l(n)}function $l(t){var n=t;do{if((n.flags&32768)!==0){Kg(n,Ca);return}t=n.return;var a=Uy(n.alternate,n,na);if(a!==null){mt=a;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=t}while(n!==null);$t===0&&($t=5)}function Kg(t,n){do{var a=Ly(t.alternate,t);if(a!==null){a.flags&=32767,mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){mt=t;return}mt=t=a}while(t!==null);$t=6,mt=null}function Qg(t,n,a,o,u,d,y,A,B){t.cancelPendingCommit=null;do ec();while(hn!==0);if((Dt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=bu,ni(t,a,d,y,A,B),t===kt&&(mt=kt=null,_t=0),rs=n,Ua=t,ia=a,Of=d,Pf=u,Hg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Xy(ue,function(){return nv(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=K.p,K.p=2,y=Dt,Dt|=4;try{Ny(t,n,a)}finally{Dt=y,K.p=u,I.T=o}}hn=1,Jg(),$g(),ev()}}function Jg(){if(hn===1){hn=0;var t=Ua,n=rs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=K.p;K.p=2;var u=Dt;Dt|=4;try{Lg(n,t);var d=Kf,y=Bp(t.containerInfo),A=d.focusedElem,B=d.selectionRange;if(y!==A&&A&&A.ownerDocument&&Ip(A.ownerDocument.documentElement,A)){if(B!==null&&yu(A)){var ee=B.start,fe=B.end;if(fe===void 0&&(fe=ee),"selectionStart"in A)A.selectionStart=ee,A.selectionEnd=Math.min(fe,A.value.length);else{var ge=A.ownerDocument||document,ne=ge&&ge.defaultView||window;if(ne.getSelection){var oe=ne.getSelection(),Ve=A.textContent.length,tt=Math.min(B.start,Ve),Ft=B.end===void 0?tt:Math.min(B.end,Ve);!oe.extend&&tt>Ft&&(y=Ft,Ft=tt,tt=y);var Y=zp(A,tt),k=zp(A,Ft);if(Y&&k&&(oe.rangeCount!==1||oe.anchorNode!==Y.node||oe.anchorOffset!==Y.offset||oe.focusNode!==k.node||oe.focusOffset!==k.offset)){var $=ge.createRange();$.setStart(Y.node,Y.offset),oe.removeAllRanges(),tt>Ft?(oe.addRange($),oe.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),oe.addRange($))}}}}for(ge=[],oe=A;oe=oe.parentNode;)oe.nodeType===1&&ge.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ge.length;A++){var me=ge[A];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}dc=!!Zf,Kf=Zf=null}finally{Dt=u,K.p=o,I.T=a}}t.current=n,hn=2}}function $g(){if(hn===2){hn=0;var t=Ua,n=rs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=K.p;K.p=2;var u=Dt;Dt|=4;try{Rg(t,n.alternate,n)}finally{Dt=u,K.p=o,I.T=a}}hn=3}}function ev(){if(hn===4||hn===3){hn=0,N();var t=Ua,n=rs,a=ia,o=Hg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,rs=Ua=null,tv(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Da=null),Nr(a),n=n.stateNode,De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(Ae,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=K.p,K.p=2,I.T=null;try{for(var d=t.onRecoverableError,y=0;y<o.length;y++){var A=o[y];d(A.value,{componentStack:A.stack})}}finally{I.T=n,K.p=u}}(ia&3)!==0&&ec(),Ui(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===zf?Ao++:(Ao=0,zf=t):Ao=0,Ro(0)}}function tv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,so(n)))}function ec(){return Jg(),$g(),ev(),nv()}function nv(){if(hn!==5)return!1;var t=Ua,n=Of;Of=0;var a=Nr(ia),o=I.T,u=K.p;try{K.p=32>a?32:a,I.T=null,a=Pf,Pf=null;var d=Ua,y=ia;if(hn=0,rs=Ua=null,ia=0,(Dt&6)!==0)throw Error(s(331));var A=Dt;if(Dt|=4,Ig(d.current),Og(d,d.current,y,a),Dt=A,Ro(0,!1),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(Ae,d)}catch{}return!0}finally{K.p=u,I.T=o,tv(t,n)}}function iv(t,n,a){n=ai(a,n),n=pf(t.stateNode,n,2),t=Ta(t,n,2),t!==null&&(Dn(t,2),Ui(t))}function zt(t,n,a){if(t.tag===3)iv(t,t,a);else for(;n!==null;){if(n.tag===3){iv(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Da===null||!Da.has(o))){t=ai(a,t),a=ag(2),o=Ta(n,a,2),o!==null&&(rg(a,o,n,t),Dn(o,2),Ui(o));break}}n=n.return}}function Ff(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new zy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Uf=!0,u.add(a),t=Gy.bind(null,t,n,a),n.then(t,t))}function Gy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,kt===t&&(_t&a)===a&&($t===4||$t===3&&(_t&62914560)===_t&&300>T()-Yl?(Dt&2)===0&&ss(t,0):Lf|=a,as===_t&&(as=0)),Ui(t)}function av(t,n){n===0&&(n=Ot()),t=ar(t,n),t!==null&&(Dn(t,n),Ui(t))}function Vy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),av(t,a)}function ky(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),av(t,a)}function Xy(t,n){return st(t,n)}var tc=null,ls=null,Hf=!1,nc=!1,Gf=!1,Na=0;function Ui(t){t!==ls&&t.next===null&&(ls===null?tc=ls=t:ls=ls.next=t),nc=!0,Hf||(Hf=!0,Wy())}function Ro(t,n){if(!Gf&&nc){Gf=!0;do for(var a=!1,o=tc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-Ie(42|t)+1)-1,d&=u&~(y&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,lv(o,d))}else d=_t,d=ve(o,o===kt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||He(o,d)||(a=!0,lv(o,d));o=o.next}while(a);Gf=!1}}function jy(){rv()}function rv(){nc=Hf=!1;var t=0;Na!==0&&nS()&&(t=Na);for(var n=T(),a=null,o=tc;o!==null;){var u=o.next,d=sv(o,n);d===0?(o.next=null,a===null?tc=u:a.next=u,u===null&&(ls=a)):(a=o,(t!==0||(d&3)!==0)&&(nc=!0)),o=u}hn!==0&&hn!==5||Ro(t),Na!==0&&(Na=0)}function sv(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-Ie(d),A=1<<y,B=u[y];B===-1?((A&a)===0||(A&o)!==0)&&(u[y]=at(A,n)):B<=n&&(t.expiredLanes|=A),d&=~A}if(n=kt,a=_t,a=ve(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Pt===2||Pt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Qt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||He(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Qt(o),Nr(a)){case 2:case 8:a=Me;break;case 32:a=ue;break;case 268435456:a=we;break;default:a=ue}return o=ov.bind(null,t),a=st(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Qt(o),t.callbackPriority=2,t.callbackNode=null,2}function ov(t,n){if(hn!==0&&hn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ec()&&t.callbackNode!==a)return null;var o=_t;return o=ve(t,t===kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Vg(t,o,n),sv(t,T()),t.callbackNode!=null&&t.callbackNode===a?ov.bind(null,t):null)}function lv(t,n){if(ec())return null;Vg(t,n,!0)}function Wy(){aS(function(){(Dt&6)!==0?st(pe,jy):rv()})}function Vf(){if(Na===0){var t=qr;t===0&&(t=Re,Re<<=1,(Re&261888)===0&&(Re=256)),Na=t}return Na}function cv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ul(""+t)}function uv(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function qy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=cv((u[xn]||null).action),y=o.submitter;y&&(n=(n=y[xn]||null)?cv(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var A=new pl("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Na!==0){var B=y?uv(u,y):new FormData(u);lf(a,{pending:!0,data:B,method:u.method,action:d},null,B)}}else typeof d=="function"&&(A.preventDefault(),B=y?uv(u,y):new FormData(u),lf(a,{pending:!0,data:B,method:u.method,action:d},d,B))},currentTarget:u}]})}}for(var kf=0;kf<Tu.length;kf++){var Xf=Tu[kf],Yy=Xf.toLowerCase(),Zy=Xf[0].toUpperCase()+Xf.slice(1);pi(Yy,"on"+Zy)}pi(Gp,"onAnimationEnd"),pi(Vp,"onAnimationIteration"),pi(kp,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(fy,"onTransitionRun"),pi(dy,"onTransitionStart"),pi(hy,"onTransitionCancel"),pi(Xp,"onTransitionEnd"),Qe("onMouseEnter",["mouseout","mouseover"]),Qe("onMouseLeave",["mouseout","mouseover"]),Qe("onPointerEnter",["pointerout","pointerover"]),Qe("onPointerLeave",["pointerout","pointerover"]),Pe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ky=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function fv(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var A=o[y],B=A.instance,ee=A.currentTarget;if(A=A.listener,B!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=ee;try{d(u)}catch(fe){vl(fe)}u.currentTarget=null,d=B}else for(y=0;y<o.length;y++){if(A=o[y],B=A.instance,ee=A.currentTarget,A=A.listener,B!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=ee;try{d(u)}catch(fe){vl(fe)}u.currentTarget=null,d=B}}}}function gt(t,n){var a=n[Ys];a===void 0&&(a=n[Ys]=new Set);var o=t+"__bubble";a.has(o)||(dv(n,t,2,!1),a.add(o))}function jf(t,n,a){var o=0;n&&(o|=4),dv(a,t,o,n)}var ic="_reactListening"+Math.random().toString(36).slice(2);function Wf(t){if(!t[ic]){t[ic]=!0,Ne.forEach(function(a){a!=="selectionchange"&&(Ky.has(a)||jf(a,!1,t),jf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ic]||(n[ic]=!0,jf("selectionchange",!1,n))}}function dv(t,n,a,o){switch(Gv(n)){case 2:var u=TS;break;case 8:u=bS;break;default:u=od}a=u.bind(null,n,a,t),u=void 0,!fu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function qf(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var A=o.stateNode.containerInfo;if(A===u)break;if(y===4)for(y=o.return;y!==null;){var B=y.tag;if((B===3||B===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;A!==null;){if(y=W(A),y===null)return;if(B=y.tag,B===5||B===6||B===26||B===27){o=d=y;continue e}A=A.parentNode}}o=o.return}vp(function(){var ee=d,fe=cu(a),ge=[];e:{var ne=jp.get(t);if(ne!==void 0){var oe=pl,Ve=t;switch(t){case"keypress":if(dl(a)===0)break e;case"keydown":case"keyup":oe=kx;break;case"focusin":Ve="focus",oe=mu;break;case"focusout":Ve="blur",oe=mu;break;case"beforeblur":case"afterblur":oe=mu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=Wx;break;case Gp:case Vp:case kp:oe=Ox;break;case Xp:oe=Yx;break;case"scroll":case"scrollend":oe=wx;break;case"wheel":oe=Kx;break;case"copy":case"cut":case"paste":oe=zx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=Mp;break;case"toggle":case"beforetoggle":oe=Jx}var tt=(n&4)!==0,Ft=!tt&&(t==="scroll"||t==="scrollend"),Y=tt?ne!==null?ne+"Capture":null:ne;tt=[];for(var k=ee,$;k!==null;){var me=k;if($=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||$===null||Y===null||(me=Zs(k,Y),me!=null&&tt.push(wo(k,me,$))),Ft)break;k=k.return}0<tt.length&&(ne=new oe(ne,Ve,null,a,fe),ge.push({event:ne,listeners:tt}))}}if((n&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",oe=t==="mouseout"||t==="pointerout",ne&&a!==lu&&(Ve=a.relatedTarget||a.fromElement)&&(W(Ve)||Ve[ga]))break e;if((oe||ne)&&(ne=fe.window===fe?fe:(ne=fe.ownerDocument)?ne.defaultView||ne.parentWindow:window,oe?(Ve=a.relatedTarget||a.toElement,oe=ee,Ve=Ve?W(Ve):null,Ve!==null&&(Ft=c(Ve),tt=Ve.tag,Ve!==Ft||tt!==5&&tt!==27&&tt!==6)&&(Ve=null)):(oe=null,Ve=ee),oe!==Ve)){if(tt=yp,me="onMouseLeave",Y="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Mp,me="onPointerLeave",Y="onPointerEnter",k="pointer"),Ft=oe==null?ne:re(oe),$=Ve==null?ne:re(Ve),ne=new tt(me,k+"leave",oe,a,fe),ne.target=Ft,ne.relatedTarget=$,me=null,W(fe)===ee&&(tt=new tt(Y,k+"enter",Ve,a,fe),tt.target=$,tt.relatedTarget=Ft,me=tt),Ft=me,oe&&Ve)t:{for(tt=Qy,Y=oe,k=Ve,$=0,me=Y;me;me=tt(me))$++;me=0;for(var et=k;et;et=tt(et))me++;for(;0<$-me;)Y=tt(Y),$--;for(;0<me-$;)k=tt(k),me--;for(;$--;){if(Y===k||k!==null&&Y===k.alternate){tt=Y;break t}Y=tt(Y),k=tt(k)}tt=null}else tt=null;oe!==null&&hv(ge,ne,oe,tt,!1),Ve!==null&&Ft!==null&&hv(ge,Ft,Ve,tt,!0)}}e:{if(ne=ee?re(ee):window,oe=ne.nodeName&&ne.nodeName.toLowerCase(),oe==="select"||oe==="input"&&ne.type==="file")var Rt=Dp;else if(Cp(ne))if(Up)Rt=ly;else{Rt=sy;var je=ry}else oe=ne.nodeName,!oe||oe.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?ee&&ou(ee.elementType)&&(Rt=Dp):Rt=oy;if(Rt&&(Rt=Rt(t,ee))){wp(ge,Rt,a,fe);break e}je&&je(t,ne,ee),t==="focusout"&&ee&&ne.type==="number"&&ee.memoizedProps.value!=null&&dn(ne,"number",ne.value)}switch(je=ee?re(ee):window,t){case"focusin":(Cp(je)||je.contentEditable==="true")&&(Fr=je,Su=ee,io=null);break;case"focusout":io=Su=Fr=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Fp(ge,a,fe);break;case"selectionchange":if(uy)break;case"keydown":case"keyup":Fp(ge,a,fe)}var ct;if(vu)e:{switch(t){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Br?Ap(t,a)&&(xt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(Ep&&a.locale!=="ko"&&(Br||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Br&&(ct=_p()):(va=fe,du="value"in va?va.value:va.textContent,Br=!0)),je=ac(ee,xt),0<je.length&&(xt=new Sp(xt,t,null,a,fe),ge.push({event:xt,listeners:je}),ct?xt.data=ct:(ct=Rp(a),ct!==null&&(xt.data=ct)))),(ct=ey?ty(t,a):ny(t,a))&&(xt=ac(ee,"onBeforeInput"),0<xt.length&&(je=new Sp("onBeforeInput","beforeinput",null,a,fe),ge.push({event:je,listeners:xt}),je.data=ct)),qy(ge,t,ee,a,fe)}fv(ge,n)})}function wo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ac(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Zs(t,a),u!=null&&o.unshift(wo(t,u,d)),u=Zs(t,n),u!=null&&o.push(wo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function Qy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function hv(t,n,a,o,u){for(var d=n._reactName,y=[];a!==null&&a!==o;){var A=a,B=A.alternate,ee=A.stateNode;if(A=A.tag,B!==null&&B===o)break;A!==5&&A!==26&&A!==27||ee===null||(B=ee,u?(ee=Zs(a,d),ee!=null&&y.unshift(wo(a,ee,B))):u||(ee=Zs(a,d),ee!=null&&y.push(wo(a,ee,B)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var Jy=/\r\n?/g,$y=/\u0000|\uFFFD/g;function pv(t){return(typeof t=="string"?t:""+t).replace(Jy,`
`).replace($y,"")}function mv(t,n){return n=pv(n),pv(t)===n}function Bt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Pr(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Pr(t,""+o);break;case"className":Nt(t,"class",o);break;case"tabIndex":Nt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Nt(t,a,o);break;case"style":mp(t,o,d);break;case"data":if(n!=="object"){Nt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ul(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Bt(t,n,"name",u.name,u,null),Bt(t,n,"formEncType",u.formEncType,u,null),Bt(t,n,"formMethod",u.formMethod,u,null),Bt(t,n,"formTarget",u.formTarget,u,null)):(Bt(t,n,"encType",u.encType,u,null),Bt(t,n,"method",u.method,u,null),Bt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ul(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Vi);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ul(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":gt("beforetoggle",t),gt("toggle",t),Vt(t,"popover",o);break;case"xlinkActuate":pt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":pt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":pt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":pt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":pt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":pt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":pt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":pt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":pt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Vt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Rx.get(a)||a,Vt(t,a,o))}}function Yf(t,n,a,o,u,d){switch(a){case"style":mp(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Pr(t,o):(typeof o=="number"||typeof o=="bigint")&&Pr(t,""+o);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Vi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ke.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[xn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Vt(t,a,o)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Bt(t,n,d,y,a,null)}}u&&Bt(t,n,"srcSet",a.srcSet,a,null),o&&Bt(t,n,"src",a.src,a,null);return;case"input":gt("invalid",t);var A=d=y=u=null,B=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var fe=a[o];if(fe!=null)switch(o){case"name":u=fe;break;case"type":y=fe;break;case"checked":B=fe;break;case"defaultChecked":ee=fe;break;case"value":d=fe;break;case"defaultValue":A=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:Bt(t,n,o,fe,a,null)}}Un(t,d,A,B,ee,y,u,!1);return;case"select":gt("invalid",t),o=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":y=A;break;case"multiple":o=A;default:Bt(t,n,u,A,a,null)}n=d,a=y,t.multiple=!!o,n!=null?tn(t,!!o,n,!1):a!=null&&tn(t,!!o,a,!0);return;case"textarea":gt("invalid",t),d=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(A=a[y],A!=null))switch(y){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Bt(t,n,y,A,a,null)}Ri(t,o,u,d);return;case"option":for(B in a)a.hasOwnProperty(B)&&(o=a[B],o!=null)&&(B==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Bt(t,n,B,o,a,null));return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(o=0;o<Co.length;o++)gt(Co[o],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Bt(t,n,ee,o,a,null)}return;default:if(ou(n)){for(fe in a)a.hasOwnProperty(fe)&&(o=a[fe],o!==void 0&&Yf(t,n,fe,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Bt(t,n,A,o,a,null))}function eS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,A=null,B=null,ee=null,fe=null;for(oe in a){var ge=a[oe];if(a.hasOwnProperty(oe)&&ge!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":B=ge;default:o.hasOwnProperty(oe)||Bt(t,n,oe,null,o,ge)}}for(var ne in o){var oe=o[ne];if(ge=a[ne],o.hasOwnProperty(ne)&&(oe!=null||ge!=null))switch(ne){case"type":d=oe;break;case"name":u=oe;break;case"checked":ee=oe;break;case"defaultChecked":fe=oe;break;case"value":y=oe;break;case"defaultValue":A=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(s(137,n));break;default:oe!==ge&&Bt(t,n,ne,oe,o,ge)}}bn(t,y,A,B,ee,fe,d,u);return;case"select":oe=y=A=ne=null;for(d in a)if(B=a[d],a.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":oe=B;default:o.hasOwnProperty(d)||Bt(t,n,d,null,o,B)}for(u in o)if(d=o[u],B=a[u],o.hasOwnProperty(u)&&(d!=null||B!=null))switch(u){case"value":ne=d;break;case"defaultValue":A=d;break;case"multiple":y=d;default:d!==B&&Bt(t,n,u,d,o,B)}n=A,a=y,o=oe,ne!=null?tn(t,!!a,ne,!1):!!o!=!!a&&(n!=null?tn(t,!!a,n,!0):tn(t,!!a,a?[]:"",!1));return;case"textarea":oe=ne=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Bt(t,n,A,null,o,u)}for(y in o)if(u=o[y],d=a[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":ne=u;break;case"defaultValue":oe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Bt(t,n,y,u,o,d)}Or(t,ne,oe);return;case"option":for(var Ve in a)ne=a[Ve],a.hasOwnProperty(Ve)&&ne!=null&&!o.hasOwnProperty(Ve)&&(Ve==="selected"?t.selected=!1:Bt(t,n,Ve,null,o,ne));for(B in o)ne=o[B],oe=a[B],o.hasOwnProperty(B)&&ne!==oe&&(ne!=null||oe!=null)&&(B==="selected"?t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol":Bt(t,n,B,ne,o,oe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)ne=a[tt],a.hasOwnProperty(tt)&&ne!=null&&!o.hasOwnProperty(tt)&&Bt(t,n,tt,null,o,ne);for(ee in o)if(ne=o[ee],oe=a[ee],o.hasOwnProperty(ee)&&ne!==oe&&(ne!=null||oe!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(s(137,n));break;default:Bt(t,n,ee,ne,o,oe)}return;default:if(ou(n)){for(var Ft in a)ne=a[Ft],a.hasOwnProperty(Ft)&&ne!==void 0&&!o.hasOwnProperty(Ft)&&Yf(t,n,Ft,void 0,o,ne);for(fe in o)ne=o[fe],oe=a[fe],!o.hasOwnProperty(fe)||ne===oe||ne===void 0&&oe===void 0||Yf(t,n,fe,ne,o,oe);return}}for(var Y in a)ne=a[Y],a.hasOwnProperty(Y)&&ne!=null&&!o.hasOwnProperty(Y)&&Bt(t,n,Y,null,o,ne);for(ge in o)ne=o[ge],oe=a[ge],!o.hasOwnProperty(ge)||ne===oe||ne==null&&oe==null||Bt(t,n,ge,ne,o,oe)}function gv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function tS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,y=u.initiatorType,A=u.duration;if(d&&A&&gv(y)){for(y=0,A=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],ee=B.startTime;if(ee>A)break;var fe=B.transferSize,ge=B.initiatorType;fe&&gv(ge)&&(B=B.responseEnd,y+=fe*(B<A?1:(A-ee)/(B-ee)))}if(--o,n+=8*(d+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Zf=null,Kf=null;function rc(t){return t.nodeType===9?t:t.ownerDocument}function vv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _v(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Qf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jf=null;function nS(){var t=window.event;return t&&t.type==="popstate"?t===Jf?!1:(Jf=t,!0):(Jf=null,!1)}var xv=typeof setTimeout=="function"?setTimeout:void 0,iS=typeof clearTimeout=="function"?clearTimeout:void 0,yv=typeof Promise=="function"?Promise:void 0,aS=typeof queueMicrotask=="function"?queueMicrotask:typeof yv<"u"?function(t){return yv.resolve(null).then(t).catch(rS)}:xv;function rS(t){setTimeout(function(){throw t})}function Oa(t){return t==="head"}function Sv(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),ds(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Do(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Do(a);for(var d=a.firstChild;d;){var y=d.nextSibling,A=d.nodeName;d[$a]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&Do(t.ownerDocument.body);a=u}while(a);ds(n)}function Mv(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function $f(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$f(a),C(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function sS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[$a])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function oS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function Ev(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ci(t.nextSibling),t===null))return null;return t}function ed(t){return t.data==="$?"||t.data==="$~"}function td(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function lS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var nd=null;function Tv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function bv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Av(t,n,a){switch(n=rc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Do(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);C(t)}var ui=new Map,Rv=new Set;function sc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var aa=K.d;K.d={f:cS,r:uS,D:fS,C:dS,L:hS,m:pS,X:gS,S:mS,M:vS};function cS(){var t=aa.f(),n=Ql();return t||n}function uS(t){var n=ae(t);n!==null&&n.tag===5&&n.type==="form"?Xm(n):aa.r(t)}var cs=typeof document>"u"?null:document;function Cv(t,n,a){var o=cs;if(o&&typeof n=="string"&&n){var u=vt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Rv.has(u)||(Rv.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Tn(n,"link",t),ye(n),o.head.appendChild(n)))}}function fS(t){aa.D(t),Cv("dns-prefetch",t,null)}function dS(t,n){aa.C(t,n),Cv("preconnect",t,n)}function hS(t,n,a){aa.L(t,n,a);var o=cs;if(o&&t&&n){var u='link[rel="preload"][as="'+vt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+vt(a.imageSizes)+'"]')):u+='[href="'+vt(t)+'"]';var d=u;switch(n){case"style":d=us(t);break;case"script":d=fs(t)}ui.has(d)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Uo(d))||n==="script"&&o.querySelector(Lo(d))||(n=o.createElement("link"),Tn(n,"link",t),ye(n),o.head.appendChild(n)))}}function pS(t,n){aa.m(t,n);var a=cs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+vt(o)+'"][href="'+vt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=fs(t)}if(!ui.has(d)&&(t=v({rel:"modulepreload",href:t},n),ui.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Lo(d)))return}o=a.createElement("link"),Tn(o,"link",t),ye(o),a.head.appendChild(o)}}}function mS(t,n,a){aa.S(t,n,a);var o=cs;if(o&&t){var u=q(o).hoistableStyles,d=us(t);n=n||"default";var y=u.get(d);if(!y){var A={loading:0,preload:null};if(y=o.querySelector(Uo(d)))A.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(d))&&id(t,a);var B=y=o.createElement("link");ye(B),Tn(B,"link",t),B._p=new Promise(function(ee,fe){B.onload=ee,B.onerror=fe}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,oc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:A},u.set(d,y)}}}function gS(t,n){aa.X(t,n);var a=cs;if(a&&t){var o=q(a).hoistableScripts,u=fs(t),d=o.get(u);d||(d=a.querySelector(Lo(u)),d||(t=v({src:t,async:!0},n),(n=ui.get(u))&&ad(t,n),d=a.createElement("script"),ye(d),Tn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function vS(t,n){aa.M(t,n);var a=cs;if(a&&t){var o=q(a).hoistableScripts,u=fs(t),d=o.get(u);d||(d=a.querySelector(Lo(u)),d||(t=v({src:t,async:!0,type:"module"},n),(n=ui.get(u))&&ad(t,n),d=a.createElement("script"),ye(d),Tn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function wv(t,n,a,o){var u=(u=xe.current)?sc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=q(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=us(a.href);var d=q(u).hoistableStyles,y=d.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=u.querySelector(Uo(t)))&&!d._p&&(y.instance=d,y.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),d||_S(u,t,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fs(a),a=q(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function us(t){return'href="'+vt(t)+'"'}function Uo(t){return'link[rel="stylesheet"]['+t+"]"}function Dv(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function _S(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),ye(n),t.head.appendChild(n))}function fs(t){return'[src="'+vt(t)+'"]'}function Lo(t){return"script[async]"+t}function Uv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+vt(a.href)+'"]');if(o)return n.instance=o,ye(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),ye(o),Tn(o,"style",u),oc(o,a.precedence,t),n.instance=o;case"stylesheet":u=us(a.href);var d=t.querySelector(Uo(u));if(d)return n.state.loading|=4,n.instance=d,ye(d),d;o=Dv(a),(u=ui.get(u))&&id(o,u),d=(t.ownerDocument||t).createElement("link"),ye(d);var y=d;return y._p=new Promise(function(A,B){y.onload=A,y.onerror=B}),Tn(d,"link",o),n.state.loading|=4,oc(d,a.precedence,t),n.instance=d;case"script":return d=fs(a.src),(u=t.querySelector(Lo(d)))?(n.instance=u,ye(u),u):(o=a,(u=ui.get(d))&&(o=v({},a),ad(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),ye(u),Tn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,oc(o,a.precedence,t));return n.instance}function oc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var A=o[y];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function id(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ad(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var lc=null;function Lv(t,n,a){if(lc===null){var o=new Map,u=lc=new Map;u.set(a,o)}else u=lc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[$a]||d[sn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=t+y;var A=o.get(y);A?A.push(d):o.set(y,[d])}}return o}function Nv(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function xS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ov(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function yS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=us(o.href),d=n.querySelector(Uo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=cc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,ye(d);return}d=n.ownerDocument||n,o=Dv(o),(u=ui.get(u))&&id(o,u),d=d.createElement("link"),ye(d);var y=d;y._p=new Promise(function(A,B){y.onload=A,y.onerror=B}),Tn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=cc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var rd=0;function SS(t,n){return t.stylesheets&&t.count===0&&fc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&fc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&rd===0&&(rd=62500*tS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&fc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>rd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function cc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var uc=null;function fc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,uc=new Map,n.forEach(MS,t),uc=null,cc.call(t))}function MS(t,n){if(!(n.state.loading&4)){var a=uc.get(t);if(a)var o=a.get(null);else{a=new Map,uc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,u),a.set(y,u),this.count++,o=cc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var No={$$typeof:L,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function ES(t,n,a,o,u,d,y,A,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Pv(t,n,a,o,u,d,y,A,B,ee,fe,ge){return t=new ES(t,n,a,y,B,ee,fe,ge,A),n=1,d===!0&&(n|=24),d=Yn(3,null,null,n),t.current=d,d.stateNode=t,n=Iu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Gu(d),t}function zv(t){return t?(t=Vr,t):Vr}function Iv(t,n,a,o,u,d){u=zv(u),o.context===null?o.context=u:o.pendingContext=u,o=Ea(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ta(t,o,n),a!==null&&(Vn(a,t,n),uo(a,t,n))}function Bv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function sd(t,n){Bv(t,n),(t=t.alternate)&&Bv(t,n)}function Fv(t){if(t.tag===13||t.tag===31){var n=ar(t,67108864);n!==null&&Vn(n,t,67108864),sd(t,67108864)}}function Hv(t){if(t.tag===13||t.tag===31){var n=$n();n=Lr(n);var a=ar(t,n);a!==null&&Vn(a,t,n),sd(t,n)}}var dc=!0;function TS(t,n,a,o){var u=I.T;I.T=null;var d=K.p;try{K.p=2,od(t,n,a,o)}finally{K.p=d,I.T=u}}function bS(t,n,a,o){var u=I.T;I.T=null;var d=K.p;try{K.p=8,od(t,n,a,o)}finally{K.p=d,I.T=u}}function od(t,n,a,o){if(dc){var u=ld(o);if(u===null)qf(t,n,o,hc,a),Vv(t,o);else if(RS(u,t,n,a,o))o.stopPropagation();else if(Vv(t,o),n&4&&-1<AS.indexOf(t)){for(;u!==null;){var d=ae(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=Ee(d.pendingLanes);if(y!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var B=1<<31-Ie(y);A.entanglements[1]|=B,y&=~B}Ui(d),(Dt&6)===0&&(Zl=T()+500,Ro(0))}}break;case 31:case 13:A=ar(d,2),A!==null&&Vn(A,d,2),Ql(),sd(d,2)}if(d=ld(o),d===null&&qf(t,n,o,hc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else qf(t,n,o,null,a)}}function ld(t){return t=cu(t),cd(t)}var hc=null;function cd(t){if(hc=null,t=W(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return hc=t,null}function Gv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(te()){case pe:return 2;case Me:return 8;case ue:case Ye:return 32;case we:return 268435456;default:return 32}default:return 32}}var ud=!1,Pa=null,za=null,Ia=null,Oo=new Map,Po=new Map,Ba=[],AS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vv(t,n){switch(t){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function zo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=ae(n),n!==null&&Fv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function RS(t,n,a,o,u){switch(n){case"focusin":return Pa=zo(Pa,t,n,a,o,u),!0;case"dragenter":return za=zo(za,t,n,a,o,u),!0;case"mouseover":return Ia=zo(Ia,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Oo.set(d,zo(Oo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Po.set(d,zo(Po.get(d)||null,t,n,a,o,u)),!0}return!1}function kv(t){var n=W(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,qs(t.priority,function(){Hv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,qs(t.priority,function(){Hv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ld(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);lu=o,a.target.dispatchEvent(o),lu=null}else return n=ae(a),n!==null&&Fv(n),t.blockedOn=a,!1;n.shift()}return!0}function Xv(t,n,a){pc(t)&&a.delete(n)}function CS(){ud=!1,Pa!==null&&pc(Pa)&&(Pa=null),za!==null&&pc(za)&&(za=null),Ia!==null&&pc(Ia)&&(Ia=null),Oo.forEach(Xv),Po.forEach(Xv)}function mc(t,n){t.blockedOn===n&&(t.blockedOn=null,ud||(ud=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,CS)))}var gc=null;function jv(t){gc!==t&&(gc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){gc===t&&(gc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(cd(o||a)===null)continue;break}var d=ae(a);d!==null&&(t.splice(n,3),n-=3,lf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ds(t){function n(B){return mc(B,t)}Pa!==null&&mc(Pa,t),za!==null&&mc(za,t),Ia!==null&&mc(Ia,t),Oo.forEach(n),Po.forEach(n);for(var a=0;a<Ba.length;a++){var o=Ba[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)kv(a),a.blockedOn===null&&Ba.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],y=u[xn]||null;if(typeof d=="function")y||jv(a);else if(y){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[xn]||null)A=y.formAction;else if(cd(u)!==null)continue}else A=y.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),jv(a)}}}function Wv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function fd(t){this._internalRoot=t}vc.prototype.render=fd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=$n();Iv(a,o,t,n,null,null)},vc.prototype.unmount=fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Iv(t.current,2,null,t,null,null),Ql(),n[ga]=null}};function vc(t){this._internalRoot=t}vc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ja();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ba.length&&n!==0&&n<Ba[a].priority;a++);Ba.splice(a,0,t),a===0&&kv(t)}};var qv=e.version;if(qv!=="19.2.8")throw Error(s(527,qv,"19.2.8"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var wS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_c.isDisabled&&_c.supportsFiber)try{Ae=_c.inject(wS),De=_c}catch{}}return Bo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=eg,d=tg,y=ng;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=Pv(t,1,!1,null,null,a,o,null,u,d,y,Wv),t[ga]=n.current,Wf(t),new fd(n)},Bo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=eg,y=tg,A=ng,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Pv(t,1,!0,n,a??null,o,u,B,d,y,A,Wv),n.context=zv(null),a=n.current,o=$n(),o=Lr(o),u=Ea(o),u.callback=null,Ta(a,u,o),a=o,n.current.lanes=a,Dn(n,a),Ui(n),t[ga]=n.current,Wf(t),new vc(n)},Bo.version="19.2.8",Bo}var i_;function FS(){if(i_)return pd.exports;i_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),pd.exports=BS(),pd.exports}var HS=FS();var kh=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,x0=/^[\\/]{2}/;function GS(r,e){return e+r.replace(/\\/g,"/")}var a_="popstate";function r_(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function VS(r={}){function e(s,l){let c=l.state?.masked,{pathname:f,search:h,hash:m}=c||s.location;return eh("",{pathname:f,search:h,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default",c?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function i(s,l){return typeof l=="string"?l:Os(l)}return XS(e,i,null,r)}function Kt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Ii(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function kS(){return Math.random().toString(36).substring(2,10)}function s_(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function eh(r,e,i=null,s,l){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Gs(e):e,state:i,key:e&&e.key||s||kS(),mask:l}}function Os({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Gs(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function XS(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,h="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function v(){h="POP";let S=g(),_=S==null?null:S-p;p=S,m&&m({action:h,location:b.location,delta:_})}function x(S,_){h="PUSH";let P=r_(S)?S:eh(b.location,S,_);p=g()+1;let L=s_(P,p),w=b.createHref(P.mask||P);try{f.pushState(L,"",w)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign(w)}c&&m&&m({action:h,location:b.location,delta:1})}function M(S,_){h="REPLACE";let P=r_(S)?S:eh(b.location,S,_);p=g();let L=s_(P,p),w=b.createHref(P.mask||P);f.replaceState(L,"",w),c&&m&&m({action:h,location:b.location,delta:0})}function E(S){return jS(l,S)}let b={get action(){return h},get location(){return r(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(a_,v),m=S,()=>{l.removeEventListener(a_,v),m=null}},createHref(S){return e(l,S)},createURL:E,encodeLocation(S){let _=E(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:M,go(S){return f.go(S)}};return b}function jS(r,e,i=!1){let s="http://localhost";r&&(s=r.location.origin!=="null"?r.location.origin:r.location.href),Kt(s,"No window.location.(origin|href) available to create URL");let l=typeof e=="string"?e:Os(e);return l=l.replace(/ $/,"%20"),!i&&x0.test(l)&&(l=s+l),new URL(l,s)}function y0(r,e,i="/"){return WS(r,e,i,!1)}function WS(r,e,i,s,l){let c=typeof e=="string"?Gs(e):e,f=pa(c.pathname||"/",i);if(f==null)return null;let h=qS(r),m=null,p=aM(f);for(let g=0;m==null&&g<h.length;++g)m=iM(h[g],p,s);return m}function qS(r){let e=S0(r);return YS(e),e}function S0(r,e=[],i=[],s="",l=!1){let c=(f,h,m=l,p)=>{let g={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(s)&&m)return;Kt(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length)}let v=Ei([s,g.relativePath]),x=i.concat(g);f.children&&f.children.length>0&&(Kt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),S0(f.children,e,x,v,m)),!(f.path==null&&!f.index)&&e.push({path:v,score:tM(v,f.index),routesMeta:x.map((M,E)=>{let[b,S]=T0(M.relativePath,M.caseSensitive,E===x.length-1);return{...M,matcher:b,compiledParams:S}})})};return r.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of M0(f.path))c(f,h,!0,m)}),e}function M0(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=M0(s.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>r.startsWith("/")&&m===""?"/":m)}function YS(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:nM(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var ZS=/^:[\w-]+$/,KS=3,QS=2,JS=1,$S=10,eM=-2,o_=r=>r==="*";function tM(r,e){let i=r.split("/"),s=i.length;return i.some(o_)&&(s+=eM),e&&(s+=QS),i.filter(l=>!o_(l)).reduce((l,c)=>l+(ZS.test(c)?KS:c===""?JS:$S),s)}function nM(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function iM(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let h=0;h<s.length;++h){let m=s[h],p=h===s.length-1,g=c==="/"?e:e.slice(c.length)||"/",v={path:m.relativePath,caseSensitive:m.caseSensitive,end:p},x=m.matcher&&m.compiledParams?E0(v,g,m.matcher,m.compiledParams):Zc(v,g),M=m.route;if(!x&&p&&i&&!s[s.length-1].route.index&&(x=Zc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!x)return null;Object.assign(l,x.params),f.push({params:l,pathname:Ei([c,x.pathname]),pathnameBase:oM(Ei([c,x.pathnameBase])),route:M}),x.pathnameBase!=="/"&&(c=Ei([c,x.pathnameBase]))}return f}function Zc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=T0(r.path,r.caseSensitive,r.end);return E0(r,e,i,s)}function E0(r,e,i,s){let l=e.match(i);if(!l)return null;let c=l[0],f=Ps(c,1),h=l.slice(1);return{params:s.reduce((p,{paramName:g,isOptional:v},x)=>{if(g==="*"){let E=h[x]||"";f=Ps(c.slice(0,c.length-E.length),1)}const M=h[x];return v&&!M?p[g]=void 0:p[g]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:r}}function T0(r,e=!1,i=!0){Ii(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m,p,g)=>{if(s.push({paramName:h,isOptional:m!=null}),m){let v=g.charAt(p+f.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function aM(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ii(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function pa(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function rM(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Gs(r):r,c;return i?(i=A0(i),i.startsWith("/")||i.startsWith("\\")?c=l_(i.substring(1),"/"):c=l_(i,e)):c=e,{pathname:c,search:lM(s),hash:cM(l)}}function l_(r,e){let i=Ps(e).split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function _d(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function sM(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function b0(r){let e=sM(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function Xh(r,e,i,s=!1){let l;typeof r=="string"?l=Gs(r):(l={...r},Kt(!l.pathname||!l.pathname.includes("?"),_d("?","pathname","search",l)),Kt(!l.pathname||!l.pathname.includes("#"),_d("#","pathname","hash",l)),Kt(!l.search||!l.search.includes("#"),_d("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let v=e.length-1;if(!s&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),v-=1;l.pathname=x.join("/")}h=v>=0?e[v]:"/"}let m=rM(l,h),p=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var A0=r=>r.replace(/[\\/]{2,}/g,"/"),Ei=r=>A0(r.join("/"));function Ps(r,e=0){let i=r.length;for(;i>e&&r.charCodeAt(i-1)===47;)i--;return i===r.length?r:r.slice(0,i)}var oM=r=>Ps(r).replace(/^\/*/,"/"),lM=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,cM=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,uM=class{constructor(r,e,i,s=!1){this.status=r,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function fM(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function dM(r){let e=r.map(i=>i.route.path).filter(Boolean);return Ei(e)||"/"}var R0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function C0(r,e){let i=r;if(typeof i!="string"||!kh.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(R0)try{let c=new URL(window.location.href),f=x0.test(i)?new URL(GS(i,c.protocol)):new URL(i),h=pa(f.pathname,e);f.origin===c.origin&&h!=null?i=h+f.search+f.hash:l=!0}catch{Ii(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var c_=new URL("http://localhost");function w0(r){if(r.createURL)return r.createURL("/");try{return new URL(r.createHref("/"),c_)}catch{return c_}}function xd(r,e){return r.origin===e.origin&&(r.origin!=="null"||r.protocol===e.protocol&&r.host===e.host)}function hM(r,e){if(r.startsWith("//"))return!0;let i=e.protocol.toLowerCase();return r.toLowerCase().startsWith(i)?e.host===""||r.slice(i.length).startsWith("//"):!1}function D0(r,e,i,s){let l=null;try{l=r==null?null:new URL(r,i)}catch{}let c=new URL(e,i),f=l!=null&&!xd(l,i),h=!xd(c,i);if(s==="reject"){if(f||h)throw new Error("External navigation is not allowed")}else if(h&&(l==null||!hM(r,l)||!xd(l,c)))throw new Error("External navigation is not allowed")}var U0=["POST","PUT","PATCH","DELETE"];new Set(U0);var pM=["GET",...U0];new Set(pM);var mM=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function gM(r){try{return mM.includes(new URL(r).protocol)}catch{return!1}}var Vs=Q.createContext(null);Vs.displayName="DataRouter";var $c=Q.createContext(null);$c.displayName="DataRouterState";var L0=Q.createContext(!1);function vM(){return Q.useContext(L0)}var N0=Q.createContext({isTransitioning:!1});N0.displayName="ViewTransition";var _M=Q.createContext(new Map);_M.displayName="Fetchers";var xM=Q.createContext(null);xM.displayName="Await";var hi=Q.createContext(null);hi.displayName="Navigation";var el=Q.createContext(null);el.displayName="Location";var Hi=Q.createContext({outlet:null,matches:[],isDataRoute:!1});Hi.displayName="Route";var jh=Q.createContext(null);jh.displayName="RouteError";var O0="REACT_ROUTER_ERROR",yM="REDIRECT",SM="ROUTE_ERROR_RESPONSE";function MM(r){if(r.startsWith(`${O0}:${yM}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function EM(r){if(r.startsWith(`${O0}:${SM}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new uM(e.status,e.statusText,e.data)}catch{}}function TM(r,{relative:e}={}){Kt(tl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=Q.useContext(hi),{hash:l,pathname:c,search:f}=nl(r,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:Ei([i,c])),s.createHref({pathname:h,search:f,hash:l})}function tl(){return Q.useContext(el)!=null}function bi(){return Kt(tl(),"useLocation() may be used only in the context of a <Router> component."),Q.useContext(el).location}var P0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function z0(r){Q.useContext(hi).static||Q.useLayoutEffect(r)}function I0(){let{isDataRoute:r}=Q.useContext(Hi);return r?FM():bM()}function bM(){Kt(tl(),"useNavigate() may be used only in the context of a <Router> component.");let r=Q.useContext(Vs),{basename:e,navigator:i}=Q.useContext(hi),{matches:s}=Q.useContext(Hi),{pathname:l}=bi(),c=JSON.stringify(b0(s)),f=Q.useRef(!1);return z0(()=>{f.current=!0}),Q.useCallback((m,p={})=>{if(Ii(f.current,P0),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=Xh(m,JSON.parse(c),l,p.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Ei([e,g.pathname])),D0(typeof m=="string"?m:Os(m),i.createHref(g),w0(i),"reject"),(p.replace?i.replace:i.push)(g,p.state,p)},[e,i,c,l,r])}var AM=Q.createContext(null);function RM(r){let e=Q.useContext(Hi).outlet;return Q.useMemo(()=>e&&Q.createElement(AM.Provider,{value:r},e),[e,r])}function nl(r,{relative:e}={}){let{matches:i}=Q.useContext(Hi),{pathname:s}=bi(),l=JSON.stringify(b0(i));return Q.useMemo(()=>Xh(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function CM(r,e){return B0(r,e)}function B0(r,e,i){Kt(tl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=Q.useContext(hi),{matches:l}=Q.useContext(Hi),c=l[l.length-1],f=c?c.params:{},h=c?c.pathname:"/",m=c?c.pathnameBase:"/",p=c&&c.route;{let S=p&&p.path||"";H0(h,!p||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let g=bi(),v;if(e){let S=typeof e=="string"?Gs(e):e;Kt(m==="/"||S.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${S.pathname}" was given in the \`location\` prop.`),v=S}else v=g;let x=v.pathname||"/",M=x;if(m!=="/"){let S=m.replace(/^\//,"").split("/");M="/"+x.replace(/^\//,"").split("/").slice(S.length).join("/")}let E=i&&i.state.matches.length?i.state.matches.map(S=>Object.assign(S,{route:i.manifest[S.route.id]||S.route})):y0(r,{pathname:M});Ii(p||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Ii(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=NM(E&&E.map(S=>Object.assign({},S,{params:Object.assign({},f,S.params),pathname:Ei([m,s.encodeLocation?s.encodeLocation(S.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?m:Ei([m,s.encodeLocation?s.encodeLocation(S.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathnameBase])})),l,i);return e&&b?Q.createElement(el.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},b):b}function wM(){let r=BM(),e=fM(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=Q.createElement(Q.Fragment,null,Q.createElement("p",null,"💿 Hey developer 👋"),Q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Q.createElement("code",{style:c},"ErrorBoundary")," or"," ",Q.createElement("code",{style:c},"errorElement")," prop on your route.")),Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},e),i?Q.createElement("pre",{style:l},i):null,f)}var DM=Q.createElement(wM,null),F0=class extends Q.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=EM(r.digest);i&&(r=i)}let e=r!==void 0?Q.createElement(Hi.Provider,{value:this.props.routeContext},Q.createElement(jh.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?Q.createElement(UM,{error:r},e):e}};F0.contextType=L0;var yd=new WeakMap;function UM({children:r,error:e}){let{basename:i,navigator:s}=Q.useContext(hi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let l=MM(e.digest);if(l){let c=yd.get(e);if(c)throw c;let f=C0(l.location,i),h=f.absoluteURL||f.to;if(D0(l.location,h,w0(s),"allow-explicit"),gM(h))throw new Error("Invalid redirect location");if(R0&&!yd.get(e))if(f.isExternal||l.reloadDocument)window.location.href=h;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:l.replace}));throw yd.set(e,m),m}return Q.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h}`})}}return r}function LM({routeContext:r,match:e,children:i}){let s=Q.useContext(Vs);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),Q.createElement(Hi.Provider,{value:r},i)}function NM(r,e=[],i){let s=i?.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let l=r,c=s?.errors;if(c!=null){let g=l.findIndex(v=>v.route.id&&c?.[v.route.id]!==void 0);Kt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,g+1))}let f=!1,h=-1;if(i&&s){f=s.renderFallback;for(let g=0;g<l.length;g++){let v=l[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=g),v.route.id){let{loaderData:x,errors:M}=s,E=v.route.loader&&!x.hasOwnProperty(v.route.id)&&(!M||M[v.route.id]===void 0);if(v.route.lazy||E){i.isStatic&&(f=!0),h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}}let m=i?.onError,p=s&&m?(g,v)=>{m(g,{location:s.location,params:s.matches?.[0]?.params??{},pattern:dM(s.matches),errorInfo:v})}:void 0;return l.reduceRight((g,v,x)=>{let M,E=!1,b=null,S=null;s&&(M=c&&v.route.id?c[v.route.id]:void 0,b=v.route.errorElement||DM,f&&(h<0&&x===0?(H0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):h===x&&(E=!0,S=v.route.hydrateFallbackElement||null)));let _=e.concat(l.slice(0,x+1)),P=()=>{let L;return M?L=b:E?L=S:v.route.Component?L=Q.createElement(v.route.Component,null):v.route.element?L=v.route.element:L=g,Q.createElement(LM,{match:v,routeContext:{outlet:g,matches:_,isDataRoute:s!=null},children:L})};return s&&(v.route.ErrorBoundary||v.route.errorElement||x===0)?Q.createElement(F0,{location:s.location,revalidation:s.revalidation,component:b,error:M,children:P(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):P()},null)}function Wh(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function OM(r){let e=Q.useContext(Vs);return Kt(e,Wh(r)),e}function PM(r){let e=Q.useContext($c);return Kt(e,Wh(r)),e}function zM(r){let e=Q.useContext(Hi);return Kt(e,Wh(r)),e}function qh(r){let e=zM(r),i=e.matches[e.matches.length-1];return Kt(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function IM(){return qh("useRouteId")}function BM(){let r=Q.useContext(jh),e=PM("useRouteError"),i=qh("useRouteError");return r!==void 0?r:e.errors?.[i]}function FM(){let{router:r}=OM("useNavigate"),e=qh("useNavigate"),i=Q.useRef(!1);return z0(()=>{i.current=!0}),Q.useCallback(async(l,c={})=>{Ii(i.current,P0),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var u_={};function H0(r,e,i){!e&&!u_[r]&&(u_[r]=!0,Ii(!1,i))}Q.memo(HM);function HM({routes:r,manifest:e,future:i,state:s,isStatic:l,onError:c}){return B0(r,void 0,{manifest:e,state:s,isStatic:l,onError:c})}function GM(r){return RM(r.context)}function kn(r){Kt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function VM({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1,useTransitions:f}){Kt(!tl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),m=Q.useMemo(()=>({basename:h,navigator:l,static:c,useTransitions:f,future:{}}),[h,l,c,f]);typeof i=="string"&&(i=Gs(i));let{pathname:p="/",search:g="",hash:v="",state:x=null,key:M="default",mask:E}=i,b=Q.useMemo(()=>{let S=pa(p,h);return S==null?null:{location:{pathname:S,search:g,hash:v,state:x,key:M,mask:E},navigationType:s}},[h,p,g,v,x,M,s,E]);return Ii(b!=null,`<Router basename="${h}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:Q.createElement(hi.Provider,{value:m},Q.createElement(el.Provider,{children:e,value:b}))}function kM({children:r,location:e}){return CM(th(r),e)}function th(r,e=[]){let i=[];return Q.Children.forEach(r,(s,l)=>{if(!Q.isValidElement(s))return;let c=[...e,l];if(s.type===Q.Fragment){i.push.apply(i,th(s.props.children,c));return}Kt(s.type===kn,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Kt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=th(s.props.children,c)),i.push(f)}),i}var Gc="get",Vc="application/x-www-form-urlencoded";function eu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function XM(r){return eu(r)&&r.tagName.toLowerCase()==="button"}function jM(r){return eu(r)&&r.tagName.toLowerCase()==="form"}function WM(r){return eu(r)&&r.tagName.toLowerCase()==="input"}function qM(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function YM(r,e){return r.button===0&&(!e||e==="_self")&&!qM(r)}var xc=null;function ZM(){if(xc===null)try{new FormData(document.createElement("form"),0),xc=!1}catch{xc=!0}return xc}var KM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Sd(r){return r!=null&&!KM.has(r)?(Ii(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vc}"`),null):r}function QM(r,e){let i,s,l,c,f;if(jM(r)){let h=r.getAttribute("action");s=h?pa(h,e):null,i=r.getAttribute("method")||Gc,l=Sd(r.getAttribute("enctype"))||Vc,c=new FormData(r)}else if(XM(r)||WM(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||h.getAttribute("action");if(s=m?pa(m,e):null,i=r.getAttribute("formmethod")||h.getAttribute("method")||Gc,l=Sd(r.getAttribute("formenctype"))||Sd(h.getAttribute("enctype"))||Vc,c=new FormData(h,r),!ZM()){let{name:p,type:g,value:v}=r;if(g==="image"){let x=p?`${p}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else p&&c.append(p,v)}}else{if(eu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Gc,s=null,l=Vc,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Yh(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function G0(r,e,i,s){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:e&&pa(l.pathname,e)==="/"?l.pathname=`${Ps(e)}/_root.${s}`:l.pathname=`${Ps(l.pathname)}.${s}`,l}async function JM(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $M(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function eE(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await JM(c,i);return f.links?f.links():[]}return[]}));return aE(s.flat(1).filter($M).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function f_(r,e,i,s,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let g=s.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function tE(r,e,{includeHydrateFallback:i}={}){return nE(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function nE(r){return[...new Set(r)]}function iE(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function aE(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(iE(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function Zh(){let r=Q.useContext(Vs);return Yh(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function rE(){let r=Q.useContext($c);return Yh(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Kh=Q.createContext(void 0);Kh.displayName="FrameworkContext";function tu(){let r=Q.useContext(Kh);return Yh(r,"You must render this element inside a <HydratedRouter> element"),r}function sE(r,e){let i=Q.useContext(Kh),[s,l]=Q.useState(!1),[c,f]=Q.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=e,x=Q.useRef(null);Q.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let b=_=>{_.forEach(P=>{f(P.isIntersecting)})},S=new IntersectionObserver(b,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[r]),Q.useEffect(()=>{if(s){let b=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(b)}}},[s]);let M=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,x,{}]:[c,x,{onFocus:Fo(h,M),onBlur:Fo(m,E),onMouseEnter:Fo(p,M),onMouseLeave:Fo(g,E),onTouchStart:Fo(v,M)}]:[!1,x,{}]}function Fo(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function oE({page:r,...e}){let i=vM(),{nonce:s}=tu(),{router:l}=Zh(),c=Q.useMemo(()=>y0(l.routes,r,l.basename),[l.routes,r,l.basename]);return c?(e.nonce==null&&s&&(e={...e,nonce:s}),i?Q.createElement(cE,{page:r,matches:c,...e}):Q.createElement(uE,{page:r,matches:c,...e})):null}function lE(r){let{manifest:e,routeModules:i}=tu(),[s,l]=Q.useState([]);return Q.useEffect(()=>{let c=!1;return eE(r,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,e,i]),s}function cE({page:r,matches:e,...i}){let s=bi(),{future:l}=tu(),{basename:c}=Zh(),f=Q.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let h=G0(r,c,l.v8_trailingSlashAwareDataRequests,"rsc"),m=!1,p=[];for(let g of e)typeof g.route.shouldRevalidate=="function"?m=!0:p.push(g.route.id);return m&&p.length>0&&h.searchParams.set("_routes",p.join(",")),[h.pathname+h.search]},[c,l.v8_trailingSlashAwareDataRequests,r,s,e]);return Q.createElement(Q.Fragment,null,f.map(h=>Q.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...i})))}function uE({page:r,matches:e,...i}){let s=bi(),{future:l,manifest:c,routeModules:f}=tu(),{basename:h}=Zh(),{loaderData:m,matches:p}=rE(),g=Q.useMemo(()=>f_(r,e,p,c,s,"data"),[r,e,p,c,s]),v=Q.useMemo(()=>f_(r,e,p,c,s,"assets"),[r,e,p,c,s]),x=Q.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let b=new Set,S=!1;if(e.forEach(P=>{let L=c.routes[P.route.id];!L||!L.hasLoader||(!g.some(w=>w.route.id===P.route.id)&&P.route.id in m&&f[P.route.id]?.shouldRevalidate||L.hasClientLoader?S=!0:b.add(P.route.id))}),b.size===0)return[];let _=G0(r,h,l.v8_trailingSlashAwareDataRequests,"data");return S&&b.size>0&&_.searchParams.set("_routes",e.filter(P=>b.has(P.route.id)).map(P=>P.route.id).join(",")),[_.pathname+_.search]},[h,l.v8_trailingSlashAwareDataRequests,m,s,c,g,e,r,f]),M=Q.useMemo(()=>tE(v,c),[v,c]),E=lE(v);return Q.createElement(Q.Fragment,null,x.map(b=>Q.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),M.map(b=>Q.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),E.map(({key:b,link:S})=>Q.createElement("link",{key:b,nonce:i.nonce,...S,crossOrigin:S.crossOrigin??i.crossOrigin})))}function fE(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var dE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{dE&&(window.__reactRouterVersion="7.18.3")}catch{}function hE({basename:r,children:e,useTransitions:i,window:s}){let l=Q.useRef();l.current==null&&(l.current=VS({window:s,v5Compat:!0}));let c=l.current,[f,h]=Q.useState({action:c.action,location:c.location}),m=Q.useCallback(p=>{i===!1?h(p):Q.startTransition(()=>h(p))},[i]);return Q.useLayoutEffect(()=>c.listen(m),[c,m]),Q.createElement(VM,{basename:r,children:e,location:f.location,navigationType:f.action,navigator:c,useTransitions:i})}var ma=Q.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,mask:h,state:m,target:p,to:g,preventScrollReset:v,viewTransition:x,defaultShouldRevalidate:M,...E},b){let{basename:S,navigator:_,useTransitions:P}=Q.useContext(hi),L=typeof g=="string"&&kh.test(g),w=C0(g,S);g=w.to;let H=TM(g,{relative:l}),V=bi(),z=null;if(h){let he=Xh(h,[],V.mask?V.mask.pathname:"/",!0);S!=="/"&&(he.pathname=he.pathname==="/"?S:Ei([S,he.pathname])),z=_.createHref(he)}let[j,D,U]=sE(s,E),F=gE(g,{replace:f,mask:h,state:m,target:p,preventScrollReset:v,relative:l,viewTransition:x,defaultShouldRevalidate:M,useTransitions:P});function ce(he){e&&e(he),he.defaultPrevented||F(he)}let le=!(w.isExternal||c),de=Q.createElement("a",{...E,...U,href:(le?z:void 0)||w.absoluteURL||H,onClick:le?ce:e,ref:fE(b,D),target:p,"data-discover":!L&&i==="render"?"true":void 0});return j&&!L?Q.createElement(Q.Fragment,null,de,Q.createElement(oE,{page:H})):de});ma.displayName="Link";var V0=Q.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},g){let v=nl(f,{relative:p.relative}),x=bi(),M=Q.useContext($c),{navigator:E,basename:b}=Q.useContext(hi),S=M!=null&&SE(v)&&h===!0,_=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,P=x.pathname,L=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(P=P.toLowerCase(),L=L?L.toLowerCase():null,_=_.toLowerCase()),L&&b&&(L=pa(L,b)||L);const w=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let H=P===_||!l&&P.startsWith(_)&&P.charAt(w)==="/",V=L!=null&&(L===_||!l&&L.startsWith(_)&&L.charAt(_.length)==="/"),z={isActive:H,isPending:V,isTransitioning:S},j=H?e:void 0,D;typeof s=="function"?D=s(z):D=[s,H?"active":null,V?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let U=typeof c=="function"?c(z):c;return Q.createElement(ma,{...p,"aria-current":j,className:D,ref:g,style:U,to:f,viewTransition:h},typeof m=="function"?m(z):m)});V0.displayName="NavLink";var pE=Q.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=Gc,action:h,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:v,defaultShouldRevalidate:x,...M},E)=>{let{useTransitions:b}=Q.useContext(hi),S=xE(),_=yE(h,{relative:p}),P=f.toLowerCase()==="get"?"get":"post",L=typeof h=="string"&&kh.test(h),w=H=>{if(m&&m(H),H.defaultPrevented)return;H.preventDefault();let V=H.nativeEvent.submitter,z=V?.getAttribute("formmethod")||f,j=()=>S(V||H.currentTarget,{fetcherKey:e,method:z,navigate:i,replace:l,state:c,relative:p,preventScrollReset:g,viewTransition:v,defaultShouldRevalidate:x});b&&i!==!1?Q.startTransition(()=>j()):j()};return Q.createElement("form",{ref:E,method:P,action:_,onSubmit:s?m:w,...M,"data-discover":!L&&r==="render"?"true":void 0})});pE.displayName="Form";function mE(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function k0(r){let e=Q.useContext(Vs);return Kt(e,mE(r)),e}function gE(r,{target:e,replace:i,mask:s,state:l,preventScrollReset:c,relative:f,viewTransition:h,defaultShouldRevalidate:m,useTransitions:p}={}){let g=I0(),v=bi(),x=nl(r,{relative:f});return Q.useCallback(M=>{if(YM(M,e)){M.preventDefault();let E=i!==void 0?i:Os(v)===Os(x),b=()=>g(r,{replace:E,mask:s,state:l,preventScrollReset:c,relative:f,viewTransition:h,defaultShouldRevalidate:m});p?Q.startTransition(()=>b()):b()}},[v,g,x,i,s,l,e,r,c,f,h,m,p])}var vE=0,_E=()=>`__${String(++vE)}__`;function xE(){let{router:r}=k0("useSubmit"),{basename:e}=Q.useContext(hi),i=IM(),s=r.fetch,l=r.navigate;return Q.useCallback(async(c,f={})=>{let{action:h,method:m,encType:p,formData:g,body:v}=QM(c,e);if(f.navigate===!1){let x=f.fetcherKey||_E();await s(x,i,f.action||h,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:v,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:v,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,l,e,i])}function yE(r,{relative:e}={}){let{basename:i}=Q.useContext(hi),s=Q.useContext(Hi);Kt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...nl(r||".",{relative:e})},f=bi();if(r==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(v=>v).forEach(v=>h.append("index",v));let g=h.toString();c.search=g?`?${g}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Ei([i,c.pathname])),Os(c)}function SE(r,{relative:e}={}){let i=Q.useContext(N0);Kt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=k0("useViewTransitionState"),l=nl(r,{relative:e});if(!i.isTransitioning)return!1;let c=pa(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=pa(i.nextLocation.pathname,s)||i.nextLocation.pathname;return Zc(l.pathname,f)!=null||Zc(l.pathname,c)!=null}const X0={lang:"fa",dir:"rtl",meta:{title:"هفته تکنولوژی البرز ۱۴۰۵"},brand:{name:"هفته تکنولوژی البرز",year:"۱۴۰۵",enShort:"ATW 2026",tagline:"البرز، قلب دیجیتال ایران",theme:"هوش مصنوعی در مسیر حل مسائل کلان کشور",summit:"دومین اجلاس فناوری‌های دیجیتال و هوش مصنوعی البرز",host:"پژوهشگاه مواد و انرژی",organizer:"سازمان نظام صنفی رایانه‌ای استان البرز"},nav:{home:"خانه",program:"برنامه",exhibit:"غرفه",visit:"بازدید",problems:"مسائل",venue:"مکان",search:"جستجو",menu:"منو",close:"بستن"},skip:{content:"رفتن به محتوا",menu:"رفتن به منو"},hero:{kicker:"۲۲ — ۲۴ مهر ۱۴۰۵  ·  پژوهشگاه مواد و انرژی",slides:[{title:"البرز",first:"قلب دیجیتال ایران",second:"کانون ملی فناوری"},{title:"هوش مصنوعی",first:"مسائل کلان کشور",second:"راهکار واقعی"},{title:"اتصال",first:"صنعت، دولت، علم",second:"تا پایلوت ماندگار"}],lead:"رویدادی سه‌روزه که نمایشگاه، اجلاس، بازار حل مسئله و تجربه عمومی فناوری را در یک معماری واحد جمع می‌کند — تا ارتباط صنعت، دولت و پژوهشگاه به نتیجه برسد، نه به بازدید.",ctaVisit:"ثبت بازدید",ctaBooth:"درخواست غرفه",ctaProblem:"ثبت مسئله",scroll:"ادامه"},countdown:{label:"تا گشایش",days:"روز",hours:"ساعت",minutes:"دقیقه",seconds:"ثانیه"},headlines:{title:"سرخط‌ها",items:[{date:"۱۴۰۵/۰۶/۰۷",title:"فراخوان ثبت مسائل واقعی صنعت و دولت آغاز شد",href:"/problems"},{date:"۱۴۰۵/۰۶/۰۵",title:"ثبت غرفه برای ۲۰۰ شرکت فناور باز است",href:"/exhibit"},{date:"۱۴۰۵/۰۶/۰۱",title:"ثبت‌نام بازدیدکنندگان تخصصی و عمومی",href:"/visit"},{date:"۱۴۰۵/۰۵/۲۰",title:"دومین اجلاس هوش مصنوعی البرز؛ ستون محتوایی دوره",href:"/program"}]},pull:{body:"در پژوهشگاه مواد و انرژی، صنعت مسئله می‌آورد، دولت اولویت می‌گذارد، علم داده و آزمایش می‌سازد. این اتصال قرار نیست سه روزه تمام شود — باید به پایلوت و قرارداد برسد.",cta:"معماری رویداد",href:"/program"},quote:{text:"دوره دوم از نقطه صفر آغاز نمی‌شود؛ بر پایه یک تجربه اجرایی واقعی ساخته شده است.",attr:"گزارش دوره نخست · آذر ۱۴۰۴"},stats:{items:[{n:"۵۰+",l:"شرکت فناور در دوره نخست"},{n:"۳۰",l:"کارگاه تخصصی برگزارشده"},{n:"۲۰۰",l:"هدف غرفه‌دار در ۱۴۰۵"},{n:"۱۵–۲۵هزار",l:"هدف بازدید"}]},chain:{kicker:"فلسفه طراحی",title:"از مسئله تا ارزش",lead:"نمایشگاه از جمع‌آوری مسئله آغاز می‌شود و به پایلوت، قرارداد و ارزش اقتصادی یا اجتماعی می‌رسد.",steps:[{n:"۰۱",t:"شناسایی مسائل کلان",d:"دریافت مسئله از دولت و صنعت"},{n:"۰۲",t:"شناخت مسئله و داده",d:"کارت مسئله، داده و شاخص موفقیت"},{n:"۰۳",t:"به‌کارگیری فناوری",d:"تطبیق شرکت، تیم و راهکار"},{n:"۰۴",t:"راهکار پیشران",d:"ارائه کوتاه، نمونه و ارزیابی"},{n:"۰۵",t:"پایلوت و خلق ارزش",d:"اجرای آزمایشی و توسعه قرارداد"}]},zones:{kicker:"معماری میدان",title:"نُه زون، یک رویداد",lead:"زون‌ها ساختار فیزیکی‌اند؛ پاویون‌ها تقسیم محتوایی غرفه‌ها. هیچ‌کدام جای دیگری را نمی‌گیرد.",items:[{t:"نمایشگاه اصلی",d:"غرفه شرکت‌ها، پاویون‌ها و معرفی راهکارها."},{t:"اجلاس هوش مصنوعی",d:"افتتاحیه، پنل‌های سیاستی و سخنرانی‌های کلیدی."},{t:"دیوار مسائل کلان",d:"مسائل واقعی دولت و صنعت؛ اتصال به راهکاردهنده."},{t:"آزمایشگاه زنده",d:"چرخه داده تا تصمیم، در محیط پژوهشگاه."},{t:"مرکز کارگاه‌ها",d:"حداقل سی کارگاه تخصصی و مدیریتی."},{t:"فضای مذاکرات",d:"جلسات از پیش‌برنامه‌ریزی‌شده تجاری و دولت‌با‌کسب‌وکار."},{t:"عرصه استارتاپ",d:"ارائه، رقابت، سرمایه و انتخاب طرح‌های برتر."},{t:"نمایشگاه کار",d:"استخدام، کارآموزی و ارتباط دانشگاه و صنعت."},{t:"جشنواره عمومی",d:"گیمینگ، رباتیک، واقعیت مجازی و تجربه خانواده."}]},program:{kicker:"سه روز قطعی",title:"قوس روایی میدان",more:"برنامه کامل",days:[{day:"روز اول",date:"۲۲ مهر",title:"دولت و صنعت",sub:"مسائل بزرگ، راهکارهای هوشمند",items:[{t:"۸:۳۰",d:"پذیرش و بازدید اولیه"},{t:"۹:۳۰",d:"افتتاحیه؛ آینده اقتصاد و صنعت البرز در عصر هوش مصنوعی"},{t:"۱۰:۳۰",d:"پنل عالی‌رتبه حل مسائل کلان با فناوری"},{t:"۱۲:۰۰",d:"بازدید مدیران از نمایشگاه و دیوار مسائل"},{t:"۱۴:۰۰",d:"پنل مسائل دیجیتال صنایع استان؛ از مسئله تا پروژه"},{t:"۱۵:۳۰",d:"جلسات دولت با کسب‌وکار و جلسات تجاری"}]},{day:"روز دوم",date:"۲۳ مهر",title:"فناوری",sub:"از پژوهش و دانشگاه تا صنعت و بازار",items:[{t:"۹:۰۰",d:"پنل هوش مصنوعی صنعتی؛ از آزمایشگاه تا کارخانه"},{t:"۱۰:۳۰",d:"کارگاه‌های تخصصی هم‌زمان"},{t:"۱۲:۰۰",d:"بازدید تخصصی نمایشگاه و آزمایشگاه زنده"},{t:"۱۴:۰۰",d:"پنل تبدیل مسئله صنعتی به پروژه پژوهشی و فناورانه"},{t:"۱۵:۳۰",d:"ارائه شرکت‌های منتخب به صنایع و سرمایه‌گذاران"}]},{day:"روز سوم",date:"۲۴ مهر",title:"جامعه و استعداد",sub:"فناوری برای مردم و آینده‌سازان",items:[{t:"۹:۰۰",d:"بازدید مدارس، دانشگاه‌ها و گروه‌های عمومی"},{t:"۱۰:۰۰",d:"کارگاه عمومی؛ هوش مصنوعی و زندگی روزمره"},{t:"۱۱:۰۰",d:"نمایش زنده کاربردهای هوش مصنوعی، رباتیک و اینترنت اشیا"},{t:"۱۴:۰۰",d:"کارگاه تحول کسب‌وکارهای کوچک با هوش مصنوعی"},{t:"۱۵:۰۰",d:"فینال گیمینگ و انتخاب برگزیدگان"},{t:"۱۶:۳۰",d:"اختتامیه، جوایز حل مسئله و تقدیر"}]}],pageLead:"سه روز، سه مخاطب محوری — بدون اینکه هویت جامع رویداد شکسته شود. توسعه به روز چهارم و پنجم فقط در صورت تأمین فضا، بودجه و تقاضا.",expand:"در صورت تأمین شریک و تقاضا، روز چهارم به امنیت سایبری و زیرساخت، و روز پنجم به اشتغال و تجربه عمومی گسترده اختصاص می‌یابد — بدون برهم‌زدن هسته سه‌روزه."},exhibit:{kicker:"بازار فناوری",title:"دویست شرکت؛ یک فهرست یکتا",lead:"هسته غرفه‌داران، شرکت‌های فاوا، هوش مصنوعی و اقتصاد دیجیتال‌اند. ظرفیت مکمل برای دانش‌بنیان، استارتاپ و دانشگاه است. خریداران صنعتی خارج از سهمیه غرفه‌اند.",layers:[{n:"۱۵۰–۱۶۰",t:"هسته فاوا و اقتصاد دیجیتال"},{n:"۴۰–۵۰",t:"دانش‌بنیان، استارتاپ و دانشگاه"},{n:"۲۰۰",t:"سقف غرفه‌دار با شناسه یکتا"}],modesTitle:"شیوه استقرار",modes:[{t:"غرفه مستقل",d:"محصول کامل، تیم فروش، نمایش مستقل."},{t:"پاویون تخصصی",d:"تجمیع زیر یک موضوع یا نهاد."},{t:"میز فناوری",d:"تیم کوچک، MVP و خدمات تخصصی."},{t:"نمایش زنده",d:"رباتیک، زیرساخت و تجربه عملی."}],pavilionsTitle:"پاویون‌ها",pavilions:["هوش مصنوعی و عامل‌های هوشمند","صنعت هوشمند و اتوماسیون","دانش‌بنیان و استارتاپ","انرژی و محیط‌زیست","دانشگاه و پژوهش","دولت هوشمند","سرمایه‌گذاری و تامین مالی","استعداد، اشتغال و آینده‌سازان"],formTitle:"درخواست غرفه",formLead:"ظرفیت نهایی منوط به نقشه پژوهشگاه و ایمنی غرفه‌سازی است. دبیرخانه پس از بررسی با شما تماس می‌گیرد."},visit:{kicker:"حضور در میدان",title:"چه کسی باید بیاید",lead:"این رویداد برای تماشا ساخته نشده. هر گروه مسیر جدا دارد — و اثر اتصال صنعت، دولت و علم باید برای مردم هم دیده شود.",groups:[{t:"دولت و حاکمیت",d:"استانداری، ادارات، شهرداری‌ها؛ طرح مسئله و دولت هوشمند."},{t:"صنعت",d:"مدیران عامل، تولید، تحقیق و توسعه، زنجیره تامین."},{t:"فناوری و دانش",d:"فاوا، دانش‌بنیان، دانشگاه، پژوهشگاه و مراکز رشد."},{t:"سرمایه و بازار",d:"صندوق‌ها، بانک‌ها، اپراتورها و خریداران سازمانی."},{t:"استعداد و اشتغال",d:"دانشجو، متخصص، کارآموز و تیم نوپا."},{t:"عموم مردم",d:"خانواده، دانش‌آموز و کسب‌وکار کوچک؛ روز سوم."}],formTitle:"ثبت بازدید",formLead:"ظرفیت سالن‌های تخصصی محدود است. ثبت‌نام، اولویت ورود به اجلاس و میزهای مذاکره را مشخص می‌کند."},problems:{kicker:"بازار حل مسئله",title:"دیوار مسائل کلان",lead:"فرایند پیش از نمایشگاه شروع می‌شود. صنایع مسئله واقعی می‌نویسند؛ دبیرخانه پالایش می‌کند؛ شرکت‌ها با زمان کافی MVP می‌سازند.",tools:[{t:"کارت مسئله",d:"عنوان، وضعیت، داده، هدف، شاخص، بودجه و زمان."},{t:"دیوار مسائل",d:"نمایش عمومی مسائل تاییدشده دولت و صنعت."},{t:"تطبیق راهکار",d:"معرفی شرکت واجد ظرفیت به صاحب مسئله."},{t:"ارائه تخصصی",d:"ارزیابی فنی و انتخاب گزینه‌های برتر."},{t:"حامی پایلوت",d:"جذب منابع برای آزمایش راهکار منتخب."},{t:"پیگیری پسارویداد",d:"جلسات ۳۰، ۶۰ و ۹۰ روزه تا تعیین تکلیف."}],formTitle:"ثبت کارت مسئله",formLead:"مسئله باید واقعی، قابل طرح و دارای مالک سازمانی باشد. مسائل عمومی و شعاری وارد دیوار نمی‌شوند."},venue:{kicker:"میزبان علمی",title:"پژوهشگاه مواد و انرژی",lead:"میدان امسال یک سالن اجاره‌ای نیست. پژوهشگاه، آزمایشگاه زنده، تور علمی و اتصال پژوهش به صنعت را میزبانی می‌کند.",facts:[{t:"نشانی",d:"کرج، مشکین‌دشت — مجموعه پژوهشگاه مواد و انرژی"},{t:"تاریخ",d:"۲۲ تا ۲۴ مهر ۱۴۰۵ برابر با ۱۴ تا ۱۶ اکتبر ۲۰۲۶"},{t:"مدت",d:"سه روز قطعی؛ قابل توسعه به چهار یا پنج روز"},{t:"برگزارکننده",d:"نصر البرز، با میزبانی علمی پژوهشگاه مواد و انرژی"}],roleTitle:"چرا اینجا",role:"پژوهشگاه مواد و انرژی فقط آدرس روی کارت دعوت نیست. آزمایشگاه زنده، تورهای علمی و ظرفیت پژوهشی همین‌جا به غرفه و میز مسئله وصل می‌شود — تا ارتباط صنعت و علم موقت نماند."},form:{name:"نام و نام خانوادگی",org:"سازمان / شرکت",role:"سمت",email:"ایمیل",phone:"تلفن",type:"نوع حضور",message:"توضیح",submit:"ارسال",sent:"درخواست ثبت شد. دبیرخانه با شما تماس می‌گیرد.",required:"این فیلد لازم است",visitTypes:["بازدید تخصصی","بازدید عمومی","رسانه","دانشجو"],boothTypes:["غرفه مستقل","پاویون","میز فناوری","نمایش زنده"],problemFields:{title:"عنوان مسئله",current:"وضعیت فعلی",data:"داده موجود",goal:"هدف",kpi:"شاخص موفقیت",budget:"بودجه تقریبی",time:"زمان اجرا"}},partners:{title:"شرکای میدان",items:["سازمان نظام صنفی رایانه‌ای استان البرز","پژوهشگاه مواد و انرژی","اداره کل ارتباطات و فناوری اطلاعات استان البرز","انجمن شرکت‌های دانش‌بنیان استان البرز","سازمان مدیریت صنعتی استان البرز","اتاق بازرگانی، صنایع، معادن و کشاورزی البرز","اداره کل صنعت، معدن و تجارت استان البرز","خانه صنعت، معدن و تجارت البرز"]},ghost:"۲۰۰ شرکت  ·  ۱۵ تا ۲۵ هزار بازدید  ·  پایلوت نه غرفه  ·  صنعت دولت علم  ·  البرز قلب دیجیتال ایران  ·  هوش مصنوعی مسائل کلان",footer:{phone:"۰۲۶-۳۶۲۰۱۸۸۸",email:"info@merc.ac.ir",copy:"هفته تکنولوژی البرز ۱۴۰۵. کلیه حقوق محفوظ است.",legal:["حریم خصوصی","نقشه سایت"]},search:{placeholder:"جستجو در رویداد",empty:"نتیجه‌ای نیست."},crumbs:{home:"خانه"}},ME={lang:"en",dir:"ltr",meta:{title:"Alborz Technology Week 2026"},brand:{name:"Alborz Technology Week",year:"2026",enShort:"ATW 2026",tagline:"Alborz, the Digital Heart of Iran",theme:"AI for Iran’s national-scale challenges",summit:"2nd Alborz Digital Technologies & AI Summit",host:"Materials and Energy Research Center",organizer:"Alborz Computer Trade Organization"},nav:{home:"Home",program:"Program",exhibit:"Exhibit",visit:"Visit",problems:"Problems",venue:"Venue",search:"Search",menu:"Menu",close:"Close"},skip:{content:"Skip to content",menu:"Skip to menu"},hero:{kicker:"14–16 October 2026  ·  Materials and Energy Research Center",slides:[{title:"Alborz",first:"Digital Heart of Iran",second:"A national tech capital"},{title:"Artificial Intelligence",first:"National-scale problems",second:"Working solutions"},{title:"A permanent link",first:"Industry, state, science",second:"Through to pilot"}],lead:"A three-day architecture that binds an exhibition, an AI summit, a problem market and a public technology festival — so the link between industry, government and the research center becomes a pilot, not a photo.",ctaVisit:"Register to visit",ctaBooth:"Request a booth",ctaProblem:"Submit a problem",scroll:"Scroll"},countdown:{label:"Until opening",days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds"},headlines:{title:"Headlines",items:[{date:"2026-08-29",title:"Industry and government problem intake is now open",href:"/problems"},{date:"2026-08-27",title:"Booth registration for 200 technology firms",href:"/exhibit"},{date:"2026-08-23",title:"Visitor registration — professional and public",href:"/visit"},{date:"2026-08-11",title:"The Alborz AI Summit anchors this edition",href:"/program"}]},pull:{body:"At MERC, industry brings the problem, government sets the priority, science supplies data and the lab. The connection is not meant to last three days — it is meant to become a pilot and a contract.",cta:"Event architecture",href:"/program"},quote:{text:"The second edition does not start at zero. It is built on a real operating record.",attr:"First edition report  ·  December 2025"},stats:{items:[{n:"50+",l:"technology firms, first edition"},{n:"30",l:"specialist workshops delivered"},{n:"200",l:"exhibitor target for 2026"},{n:"15–25k",l:"visitor target"}]},chain:{kicker:"Design philosophy",title:"From problem to value",lead:"The exhibition starts by collecting problems and ends in pilots, contracts and economic or social value.",steps:[{n:"01",t:"Identify the problem",d:"Intake from government and industry"},{n:"02",t:"Map data and success",d:"Problem card, data, KPI"},{n:"03",t:"Apply the technology",d:"Match firm, team, solution"},{n:"04",t:"Advance a solution",d:"Short pitch, prototype, review"},{n:"05",t:"Pilot and create value",d:"Trial run and contract path"}]},zones:{kicker:"Ground architecture",title:"Nine zones, one week",lead:"Zones are physical. Pavilions are content. They are not the same layer.",items:[{t:"Main exhibition",d:"Booths, pavilions, working solutions."},{t:"AI Summit",d:"Opening, policy panels, keynotes."},{t:"Problem Wall",d:"Real state and industry problems, matched to solvers."},{t:"Live Lab",d:"Data to decision, inside the research center."},{t:"Workshop hub",d:"At least thirty specialist and executive sessions."},{t:"Deal rooms",d:"Pre-set industry and government meetings."},{t:"Startup arena",d:"Pitches, capital, selection."},{t:"Work & talent",d:"Hiring, internships, university–industry."},{t:"Public festival",d:"Gaming, robotics, VR, families."}]},program:{kicker:"Three confirmed days",title:"The narrative arc",more:"Full program",days:[{day:"Day 01",date:"14 Oct",title:"State & industry",sub:"Large problems, intelligent solutions",items:[{t:"08:30",d:"Arrival and first walkthrough"},{t:"09:30",d:"Opening: Alborz industry in the age of AI"},{t:"10:30",d:"High-level panel on national-scale problems"},{t:"12:00",d:"Leadership tour of the floor and Problem Wall"},{t:"14:00",d:"Provincial industry digital issues — problem to project"},{t:"15:30",d:"Government–business and commercial sessions"}]},{day:"Day 02",date:"15 Oct",title:"Technology",sub:"From lab and campus to factory and market",items:[{t:"09:00",d:"Industrial AI — laboratory to factory"},{t:"10:30",d:"Parallel specialist workshops"},{t:"12:00",d:"Technical tour of the floor and Live Lab"},{t:"14:00",d:"Turning an industrial problem into a research project"},{t:"15:30",d:"Selected firms pitch to industry and capital"}]},{day:"Day 03",date:"16 Oct",title:"Society & talent",sub:"Technology for the public and the next generation",items:[{t:"09:00",d:"Schools, universities, public groups"},{t:"10:00",d:"Public workshop: AI in everyday life"},{t:"11:00",d:"Live AI, robotics and IoT demonstrations"},{t:"14:00",d:"Small-business transformation with AI"},{t:"15:00",d:"Esports final and awards"},{t:"16:30",d:"Closing, problem-solving prizes, honours"}]}],pageLead:"Three days, three primary audiences — without breaking the parent brand. Days four and five open only if space, budget and demand are in place.",expand:"If partners and demand land, day four hosts cyber, cloud and infrastructure; day five hosts talent, startups and a wider public festival — without touching the three-day core."},exhibit:{kicker:"Technology market",title:"Two hundred firms. One unique list.",lead:"The core is ICT, AI and the digital economy. A complementary band is reserved for knowledge-based firms, startups and universities. Industrial buyers sit outside the exhibitor quota.",layers:[{n:"150–160",t:"ICT and digital economy core"},{n:"40–50",t:"Knowledge-based, startup, campus"},{n:"200",t:"Hard cap, unique IDs only"}],modesTitle:"How you stand",modes:[{t:"Independent booth",d:"Full product, sales team, own footprint."},{t:"Specialist pavilion",d:"Grouped under a theme or institution."},{t:"Technology desk",d:"Small teams, MVPs, specialist services."},{t:"Live display",d:"Robotics, infrastructure, working kit."}],pavilionsTitle:"Pavilions",pavilions:["AI and intelligent agents","Smart industry and automation","Knowledge-based and startup","Energy and environment","University and research","Smart government","Investment and finance","Talent, work and the next generation"],formTitle:"Booth request",formLead:"Final allocation follows the campus map and safety rules. The secretariat will reply after review."},visit:{kicker:"On the ground",title:"Who should come",lead:"This is not built for spectating. Each audience has a path — and the industry–government–science link must be visible to the public.",groups:[{t:"Government",d:"Province, agencies, municipalities; problems and smart state."},{t:"Industry",d:"CEOs, production, R&D, supply chain."},{t:"Technology & science",d:"ICT, knowledge-based firms, universities, MERC."},{t:"Capital & market",d:"Funds, banks, operators, institutional buyers."},{t:"Talent",d:"Students, specialists, interns, new teams."},{t:"The public",d:"Families, schools, small business — day three."}],formTitle:"Visitor registration",formLead:"Summit rooms are finite. Registration sets priority for the summit and deal rooms."},problems:{kicker:"Problem market",title:"The Problem Wall",lead:"Intake starts before the doors open. Industry files a real problem. The secretariat filters. Firms get time to build an MVP.",tools:[{t:"Problem card",d:"Title, status, data, goal, KPI, budget, timing."},{t:"Problem Wall",d:"Public display of cleared state and industry issues."},{t:"Match",d:"Introduce capable firms to the owner."},{t:"Specialist pitch",d:"Technical review and shortlisting."},{t:"Pilot sponsor",d:"Resources to trial the selected path."},{t:"Aftercare",d:"30 / 60 / 90-day sessions until a decision."}],formTitle:"File a problem card",formLead:"The problem must be real, briefable, and owned by an organisation. Slogans do not make the wall."},venue:{kicker:"Scientific host",title:"Materials and Energy Research Center",lead:"This year the ground is not a hired hall. MERC hosts the Live Lab, scientific tours, and the research-to-industry link.",facts:[{t:"Address",d:"Karaj, Meshkin Dasht — MERC campus"},{t:"Dates",d:"14–16 October 2026  ·  22–24 Mehr 1405"},{t:"Duration",d:"Three confirmed days; expandable to four or five"},{t:"Presented by",d:"Alborz Computer Trade Organization, hosted by MERC"}],roleTitle:"Why this campus",role:"MERC is not a line on the invitation. The Live Lab, scientific tours and research capacity plug straight into booths and problem tables — so the industry–science link does not expire on closing night."},form:{name:"Full name",org:"Organisation",role:"Role",email:"Email",phone:"Phone",type:"Attendance type",message:"Notes",submit:"Submit",sent:"Received. The secretariat will contact you.",required:"Required",visitTypes:["Professional visit","Public visit","Press","Student"],boothTypes:["Independent booth","Pavilion","Technology desk","Live display"],problemFields:{title:"Problem title",current:"Current state",data:"Available data",goal:"Goal",kpi:"Success metric",budget:"Indicative budget",time:"Time horizon"}},partners:{title:"On the field",items:["Alborz Computer Trade Organization","Materials and Energy Research Center","Alborz ICT Directorate","Alborz Knowledge-Based Companies Association","Industrial Management Institute, Alborz","Alborz Chamber of Commerce","Alborz Industry, Mining and Trade Directorate","Alborz House of Industry, Mining and Trade"]},ghost:"200 FIRMS  ·  15–25K VISITORS  ·  PILOT NOT PAVILION  ·  INDUSTRY STATE SCIENCE  ·  ALBORZ DIGITAL HEART OF IRAN  ·  AI FOR NATIONAL PROBLEMS",footer:{phone:"+98 26 3620 1888",email:"info@merc.ac.ir",copy:"Alborz Technology Week 2026. All rights reserved.",legal:["Privacy","Sitemap"]},search:{placeholder:"Search the week",empty:"No results."},crumbs:{home:"Home"}},j0=Q.createContext(null);function EE({children:r}){const{pathname:e}=bi(),i=e==="/en"||e.startsWith("/en/"),s=i?ME:X0,l=i?"/en":"";Q.useEffect(()=>{document.documentElement.lang=s.lang,document.documentElement.dir=s.dir,document.title=s.meta.title},[s]);const c=m=>{const p=e.replace(/^\/en(?=\/|$)/,"")||"/";return m==="en"?p==="/"?"/en":`/en${p}`:p},f=m=>!m||m==="/"?l||"/":`${l}${m}`,h=Q.useMemo(()=>({t:s,isEn:i,base:l,path:f,switchPath:c}),[s,i,l,e]);return R.jsx(j0.Provider,{value:h,children:r})}function jn(){const r=Q.useContext(j0);return r||{t:X0,isEn:!1,base:"",path:e=>e||"/",switchPath:()=>"/"}}const TE="modulepreload",bE=function(r){return"/"+r},d_={},AE=function(e,i,s){let l=Promise.resolve();if(i&&i.length>0){let p=function(g){return Promise.all(g.map(v=>Promise.resolve(v).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};var f=p;document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),m=h?.nonce||h?.getAttribute("nonce");l=p(i.map(g=>{if(g=bE(g),g in d_)return;d_[g]=!0;const v=g.endsWith(".css"),x=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${x}`))return;const M=document.createElement("link");if(M.rel=v?"stylesheet":TE,v||(M.as="script"),M.crossOrigin="",M.href=g,m&&M.setAttribute("nonce",m),document.head.appendChild(M),v)return new Promise((E,b)=>{M.addEventListener("load",E),M.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${g}`)))})}))}function c(h){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=h,window.dispatchEvent(m),!m.defaultPrevented)throw h}return l.then(h=>{for(const m of h||[])m.status==="rejected"&&c(m.reason);return e().catch(c)})};function W0(){const{t:r,path:e}=jn();return R.jsxs(ma,{to:e("/"),className:"logo","aria-label":r.brand.name,children:[R.jsx("svg",{className:"logo-mark",viewBox:"0 0 42 28","aria-hidden":"true",children:R.jsx("polygon",{points:"8,26 24,2 34,2 18,26"})}),R.jsxs("span",{className:"logo-text",children:[R.jsx("strong",{children:r.brand.name}),R.jsxs("span",{children:[r.brand.year," · ",r.brand.enShort]})]})]})}function q0({compact:r=!1}){return R.jsxs("a",{className:`merc-lockup${r?" is-compact":""}`,href:"https://www.merc.ac.ir",target:"_blank",rel:"noreferrer",title:"پژوهشگاه مواد و انرژی",children:[R.jsx("img",{className:"merc-full",src:"/images/logo-merc.png",alt:"پژوهشگاه مواد و انرژی — وزارت علوم، تحقیقات و فناوری"}),R.jsx("img",{className:"merc-emblem",src:"/images/logo-merc-emblem.png",alt:"","aria-hidden":"true"})]})}const RE=[["program","/program"],["exhibit","/exhibit"],["visit","/visit"],["problems","/problems"],["venue","/venue"]];function CE({onSearch:r,menuOpen:e,setMenuOpen:i}){const{t:s,path:l,switchPath:c,isEn:f}=jn();return R.jsx("header",{className:"header",id:"header",children:R.jsxs("div",{className:"header-inner",children:[R.jsxs("div",{className:"brand-lockup",children:[R.jsx(W0,{}),R.jsx("span",{className:"brand-rule","aria-hidden":"true"}),R.jsx(q0,{})]}),R.jsx("nav",{id:"mainNav",className:e?"target":"","aria-label":s.nav.menu,children:R.jsx("ul",{children:RE.map(([h,m])=>R.jsx("li",{children:R.jsx(V0,{to:l(m),className:({isActive:p})=>p?"is-current":void 0,onClick:()=>i(!1),children:s.nav[h]})},h))})}),R.jsxs("div",{className:"header-tools",children:[R.jsxs("div",{className:"lang-switch","aria-label":"Language",children:[R.jsx(ma,{to:c("fa"),className:f?void 0:"is-active",children:"FA"}),R.jsx(ma,{to:c("en"),className:f?"is-active":void 0,children:"EN"})]}),R.jsx("button",{className:"icon-btn",onClick:r,"aria-label":s.nav.search,title:s.nav.search,children:R.jsx("svg",{viewBox:"0 0 20 18",children:R.jsx("path",{d:"M.2 18l6-6C3.7 8.7 4.4 4 7.8 1.5 11.1-1 15.8-.3 18.3 3c2.5 3.3 1.8 8-1.6 10.5-2.7 2-6.3 2-9 0L3.3 18H.2zM12.2 13.5c3.3 0 5.9-2.7 5.9-5.9S15.5 1.6 12.2 1.6 6.3 4.3 6.3 7.6c0 3.3 2.7 5.9 5.9 5.9"})})}),R.jsx("button",{id:"navToggle",className:`mobile-nav mobile-nav-spring ${e?"is-active":""}`,type:"button","aria-label":s.nav.menu,"aria-expanded":e,onClick:()=>i(h=>!h),children:R.jsxs("span",{className:"mobile-nav-box",children:[R.jsx("span",{}),R.jsx("span",{}),R.jsx("span",{})]})})]})]})})}function wE(){const{t:r,path:e}=jn();return R.jsxs("footer",{className:"footer",id:"footer",children:[R.jsxs("div",{className:"footer-top",children:[R.jsx("div",{className:"social",id:"footerSocial",children:["X","in"].map(i=>R.jsx("a",{href:"#","aria-label":i,children:R.jsxs("svg",{viewBox:"0 0 58 39",children:[R.jsx("polygon",{points:"1.5 37.4 19.7 1 56.3 1 38.1 37.4"}),R.jsx("text",{x:"29",y:"24",textAnchor:"middle",className:"inn",fill:"#fff",fontSize:"11",fontFamily:"Outfit, sans-serif",children:i})]})},i))}),R.jsx("div",{className:"footer-phone",children:R.jsx("a",{href:"tel:+982636201888",children:r.footer.phone})}),R.jsxs("ul",{className:"footer-offices",children:[R.jsx("li",{children:R.jsx(ma,{to:e("/venue"),children:r.brand.host})}),R.jsx("li",{children:"Karaj"}),R.jsx("li",{children:"Alborz"})]})]}),R.jsxs("div",{className:"footer-bottom",children:[R.jsx(W0,{}),R.jsx(q0,{}),R.jsx("div",{children:r.footer.copy}),R.jsx("a",{href:`mailto:${r.footer.email}`,children:r.footer.email})]})]})}function DE({done:r}){return R.jsxs("div",{className:`preloader ${r?"is-done":""}`,"aria-hidden":r,children:[R.jsxs("svg",{className:"preloader-mark",viewBox:"0 0 200 130",children:[R.jsx("path",{d:"M40 118 L110 12 L160 12 L90 118 Z"}),R.jsx("polygon",{className:"fill-late",points:"40,118 110,12 160,12 90,118"})]}),R.jsx("p",{children:"ALBORZ TECHNOLOGY WEEK"})]})}function UE({open:r,onClose:e}){const{t:i,path:s}=jn(),[l,c]=Q.useState(""),f=Q.useRef(null),h=I0(),m=Q.useMemo(()=>[{t:i.nav.program,p:"/program"},{t:i.nav.exhibit,p:"/exhibit"},{t:i.nav.visit,p:"/visit"},{t:i.nav.problems,p:"/problems"},{t:i.nav.venue,p:"/venue"},{t:i.brand.tagline,p:"/"},{t:i.brand.theme,p:"/problems"},{t:i.hero.ctaBooth,p:"/exhibit"}],[i]),p=l.trim()?m.filter(g=>g.t.toLowerCase().includes(l.trim().toLowerCase())):m;return Q.useEffect(()=>{r?setTimeout(()=>f.current?.focus(),50):c("")},[r]),Q.useEffect(()=>{const g=v=>{v.key==="Escape"&&e()};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[e]),R.jsxs("div",{className:`search-overlay ${r?"is-on":""}`,role:"dialog","aria-label":i.nav.search,children:[R.jsx("button",{className:"search-close",type:"button",onClick:e,children:i.nav.close}),R.jsx("form",{onSubmit:g=>{g.preventDefault(),p[0]&&(h(s(p[0].p)),e())},children:R.jsx("input",{ref:f,value:l,onChange:g=>c(g.target.value),placeholder:i.search.placeholder,"aria-label":i.search.placeholder})})]})}function LE(){const r=Q.useRef(null),e=Q.useRef(null);return Q.useEffect(()=>{const i=window.matchMedia("(pointer: fine)").matches,s=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!i||s)return;document.body.classList.add("cursor-on");let l=window.innerWidth/2,c=window.innerHeight/2,f=l,h=c,m=!1,p=!1;const g=S=>!!(S&&S.closest&&S.closest("a, button, .linktext, .lang-switch, .zone, .chip, label, .icon-btn")),v=S=>{l=S.clientX,c=S.clientY,m=g(S.target),document.body.classList.toggle("cursor-hover",m)},x=()=>{p=!0,document.body.classList.add("cursor-down")},M=()=>{p=!1,document.body.classList.remove("cursor-down")};window.addEventListener("mousemove",v,{passive:!0}),window.addEventListener("mousedown",x),window.addEventListener("mouseup",M);let E;const b=()=>{if(f+=(l-f)*.18,h+=(c-h)*.18,r.current&&(r.current.style.transform=`translate3d(${l}px, ${c}px, 0)`),e.current){const S=p?.72:m?1.35:1;e.current.style.transform=`translate3d(${f}px, ${h}px, 0) scale(${S})`}E=requestAnimationFrame(b)};return E=requestAnimationFrame(b),()=>{cancelAnimationFrame(E),document.body.classList.remove("cursor-on","cursor-hover","cursor-down"),window.removeEventListener("mousemove",v),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",M)}},[]),R.jsxs("div",{className:"cursor-root","aria-hidden":"true",children:[R.jsx("div",{className:"cursor-core",ref:r}),R.jsx("svg",{className:"cursor-ring",ref:e,viewBox:"0 0 42 28",children:R.jsx("polygon",{points:"8,26 24,2 34,2 18,26"})})]})}const Y0=Q.createContext(!1);function NE(){const{t:r}=jn(),e=bi(),[i,s]=Q.useState(!1),[l,c]=Q.useState(!1),[f,h]=Q.useState(!1);return Q.useEffect(()=>{const m=setTimeout(()=>s(!0),1400);return()=>clearTimeout(m)},[]),Q.useEffect(()=>{let m=()=>{},p;return(async()=>{try{const{default:g}=await AE(async()=>{const{default:M}=await import("./lenis-BBml_0t9.js");return{default:M}},[]),v=new g({lerp:.08,smoothWheel:!0}),x=M=>{v.raf(M),p=requestAnimationFrame(x)};p=requestAnimationFrame(x),m=()=>{cancelAnimationFrame(p),v.destroy()}}catch(g){console.warn("lenis skipped",g)}})(),()=>m()},[]),Q.useEffect(()=>{const m=()=>{document.body.classList.toggle("scrolled",window.scrollY>=1)};return m(),window.addEventListener("scroll",m,{passive:!0}),()=>window.removeEventListener("scroll",m)},[]),Q.useEffect(()=>{c(!1),h(!1),window.scrollTo(0,0)},[e.pathname]),Q.useEffect(()=>{document.body.classList.toggle("mobile-active",l)},[l]),R.jsxs(Y0.Provider,{value:i,children:[R.jsx(DE,{done:i}),R.jsx(LE,{}),R.jsx("div",{className:"noise","aria-hidden":"true"}),R.jsx("a",{className:"skip",href:"#mainContent",children:r.skip.content}),R.jsx(CE,{onSearch:()=>h(!0),menuOpen:l,setMenuOpen:c}),R.jsxs("div",{className:"site-shift",children:[R.jsx(GM,{}),R.jsx(wE,{})]}),R.jsx(UE,{open:f,onClose:()=>h(!1)})]})}function Md(r="120px"){const e=Q.useRef(null),[i,s]=Q.useState(!1);return Q.useEffect(()=>{const l=e.current;if(!l)return;const c=new IntersectionObserver(([f])=>{f.isIntersecting&&s(!0)},{rootMargin:`0px 0px -${r} 0px`,threshold:.12});return c.observe(l),()=>c.disconnect()},[r]),[e,i]}function Ds({to:r,href:e,onClick:i,children:s,type:l="button"}){const c=R.jsx("span",{children:s});return R.jsx("div",{className:"linktext",children:r?R.jsx(ma,{to:r,children:c}):e?R.jsx("a",{href:e,children:c}):R.jsx("button",{type:l,onClick:i,children:c})})}const Qh="179",OE=0,h_=1,PE=2,Z0=1,zE=2,ua=3,Za=0,Pn=1,fa=2,qa=0,Us=1,p_=2,m_=3,g_=4,IE=5,br=100,BE=101,FE=102,HE=103,GE=104,VE=200,kE=201,XE=202,jE=203,nh=204,ih=205,WE=206,qE=207,YE=208,ZE=209,KE=210,QE=211,JE=212,$E=213,eT=214,ah=0,rh=1,sh=2,zs=3,oh=4,lh=5,ch=6,uh=7,Jh=0,tT=1,nT=2,Ya=0,iT=1,aT=2,rT=3,sT=4,oT=5,lT=6,cT=7,K0=300,Is=301,Bs=302,fh=303,dh=304,nu=306,hh=1e3,Rr=1001,ph=1002,Ti=1003,uT=1004,yc=1005,Ni=1006,Ed=1007,Cr=1008,Bi=1009,Q0=1010,J0=1011,Yo=1012,$h=1013,wr=1014,da=1015,il=1016,ep=1017,tp=1018,Zo=1020,$0=35902,ex=1021,tx=1022,Si=1023,Ko=1026,Qo=1027,nx=1028,np=1029,ix=1030,ip=1031,ap=1033,kc=33776,Xc=33777,jc=33778,Wc=33779,mh=35840,gh=35841,vh=35842,_h=35843,xh=36196,yh=37492,Sh=37496,Mh=37808,Eh=37809,Th=37810,bh=37811,Ah=37812,Rh=37813,Ch=37814,wh=37815,Dh=37816,Uh=37817,Lh=37818,Nh=37819,Oh=37820,Ph=37821,qc=36492,zh=36494,Ih=36495,ax=36283,Bh=36284,Fh=36285,Hh=36286,fT=3200,dT=3201,rx=0,hT=1,Wa="",Xn="srgb",Fs="srgb-linear",Kc="linear",Ht="srgb",hs=7680,v_=519,pT=512,mT=513,gT=514,sx=515,vT=516,_T=517,xT=518,yT=519,__=35044,x_="300 es",Oi=2e3,Qc=2001;class ks{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let y_=1234567;const Wo=Math.PI/180,Jo=180/Math.PI;function Xs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]).toLowerCase()}function yt(r,e,i){return Math.max(e,Math.min(i,r))}function rp(r,e){return(r%e+e)%e}function ST(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function MT(r,e,i){return r!==e?(i-r)/(e-r):0}function qo(r,e,i){return(1-i)*r+i*e}function ET(r,e,i,s){return qo(r,e,1-Math.exp(-i*s))}function TT(r,e=1){return e-Math.abs(rp(r,e*2)-e)}function bT(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function AT(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function RT(r,e){return r+Math.floor(Math.random()*(e-r+1))}function CT(r,e){return r+Math.random()*(e-r)}function wT(r){return r*(.5-Math.random())}function DT(r){r!==void 0&&(y_=r);let e=y_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function UT(r){return r*Wo}function LT(r){return r*Jo}function NT(r){return(r&r-1)===0&&r!==0}function OT(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function PT(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function zT(r,e,i,s,l){const c=Math.cos,f=Math.sin,h=c(i/2),m=f(i/2),p=c((e+s)/2),g=f((e+s)/2),v=c((e-s)/2),x=f((e-s)/2),M=c((s-e)/2),E=f((s-e)/2);switch(l){case"XYX":r.set(h*g,m*v,m*x,h*p);break;case"YZY":r.set(m*x,h*g,m*v,h*p);break;case"ZXZ":r.set(m*v,m*x,h*g,h*p);break;case"XZX":r.set(h*g,m*E,m*M,h*p);break;case"YXY":r.set(m*M,h*g,m*E,h*p);break;case"ZYZ":r.set(m*E,m*M,h*g,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Cs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const S_={DEG2RAD:Wo,RAD2DEG:Jo,generateUUID:Xs,clamp:yt,euclideanModulo:rp,mapLinear:ST,inverseLerp:MT,lerp:qo,damp:ET,pingpong:TT,smoothstep:bT,smootherstep:AT,randInt:RT,randFloat:CT,randFloatSpread:wT,seededRandom:DT,degToRad:UT,radToDeg:LT,isPowerOfTwo:NT,ceilPowerOfTwo:OT,floorPowerOfTwo:PT,setQuaternionFromProperEuler:zT,normalize:Nn,denormalize:Cs};class Ut{constructor(e=0,i=0){Ut.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(yt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class al{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],g=s[l+2],v=s[l+3];const x=c[f+0],M=c[f+1],E=c[f+2],b=c[f+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(h===1){e[i+0]=x,e[i+1]=M,e[i+2]=E,e[i+3]=b;return}if(v!==b||m!==x||p!==M||g!==E){let S=1-h;const _=m*x+p*M+g*E+v*b,P=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const H=Math.sqrt(L),V=Math.atan2(H,_*P);S=Math.sin(S*V)/H,h=Math.sin(h*V)/H}const w=h*P;if(m=m*S+x*w,p=p*S+M*w,g=g*S+E*w,v=v*S+b*w,S===1-h){const H=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=H,p*=H,g*=H,v*=H}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],v=c[f],x=c[f+1],M=c[f+2],E=c[f+3];return e[i]=h*E+g*v+m*M-p*x,e[i+1]=m*E+g*x+p*v-h*M,e[i+2]=p*E+g*M+h*x-m*v,e[i+3]=g*E-h*v-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),v=h(c/2),x=m(s/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*g*v+p*M*E,this._y=p*M*v-x*g*E,this._z=p*g*E+x*M*v,this._w=p*g*v-x*M*E;break;case"YXZ":this._x=x*g*v+p*M*E,this._y=p*M*v-x*g*E,this._z=p*g*E-x*M*v,this._w=p*g*v+x*M*E;break;case"ZXY":this._x=x*g*v-p*M*E,this._y=p*M*v+x*g*E,this._z=p*g*E+x*M*v,this._w=p*g*v-x*M*E;break;case"ZYX":this._x=x*g*v-p*M*E,this._y=p*M*v+x*g*E,this._z=p*g*E-x*M*v,this._w=p*g*v+x*M*E;break;case"YZX":this._x=x*g*v+p*M*E,this._y=p*M*v+x*g*E,this._z=p*g*E-x*M*v,this._w=p*g*v-x*M*E;break;case"XZY":this._x=x*g*v-p*M*E,this._y=p*M*v-x*g*E,this._z=p*g*E+x*M*v,this._w=p*g*v+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=s+h+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(s>h&&s>v){const M=2*Math.sqrt(1+s-h-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>v){const M=2*Math.sqrt(1+h-s-v);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-s-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+f*h+l*p-c*m,this._y=l*g+f*m+c*h-s*p,this._z=c*g+f*p+s*m-l*h,this._w=f*g-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,f=this._w;let h=f*e._w+s*e._x+l*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=f*v+this._w*x,this._x=s*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,i=0,s=0){se.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(M_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(M_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*s),g=2*(h*i-c*l),v=2*(c*s-f*i);return this.x=i+m*p+f*v-h*g,this.y=s+m*g+h*p-c*v,this.z=l+m*v+c*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Td.copy(this).projectOnVector(e),this.sub(Td)}reflect(e){return this.sub(Td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(yt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Td=new se,M_=new al;class ut{constructor(e,i,s,l,c,f,h,m,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p)}set(e,i,s,l,c,f,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],g=s[4],v=s[7],x=s[2],M=s[5],E=s[8],b=l[0],S=l[3],_=l[6],P=l[1],L=l[4],w=l[7],H=l[2],V=l[5],z=l[8];return c[0]=f*b+h*P+m*H,c[3]=f*S+h*L+m*V,c[6]=f*_+h*w+m*z,c[1]=p*b+g*P+v*H,c[4]=p*S+g*L+v*V,c[7]=p*_+g*w+v*z,c[2]=x*b+M*P+E*H,c[5]=x*S+M*L+E*V,c[8]=x*_+M*w+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*f*g-i*h*p-s*c*g+s*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=g*f-h*p,x=h*m-g*c,M=p*c-f*m,E=i*v+s*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=v*b,e[1]=(l*p-g*s)*b,e[2]=(h*s-l*f)*b,e[3]=x*b,e[4]=(g*i-l*m)*b,e[5]=(l*c-h*i)*b,e[6]=M*b,e[7]=(s*m-p*i)*b,e[8]=(f*i-s*c)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(bd.makeScale(e,i)),this}rotate(e){return this.premultiply(bd.makeRotation(-e)),this}translate(e,i){return this.premultiply(bd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bd=new ut;function ox(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function $o(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function IT(){const r=$o("canvas");return r.style.display="block",r}const E_={};function Ls(r){r in E_||(E_[r]=!0,console.warn(r))}function BT(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const T_=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),b_=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FT(){const r={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ht&&(l.r=ha(l.r),l.g=ha(l.g),l.b=ha(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ht&&(l.r=Ns(l.r),l.g=Ns(l.g),l.b=Ns(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wa?Kc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ls("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ls("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Fs]:{primaries:e,whitePoint:s,transfer:Kc,toXYZ:T_,fromXYZ:b_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:e,whitePoint:s,transfer:Ht,toXYZ:T_,fromXYZ:b_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),r}const wt=FT();function ha(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ns(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ps;class HT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ps===void 0&&(ps=$o("canvas")),ps.width=e.width,ps.height=e.height;const l=ps.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=ps}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=$o("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ha(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ha(i[s]/255)*255):i[s]=ha(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let GT=0;class sp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=Xs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Ad(l[f].image)):c.push(Ad(l[f]))}else c=Ad(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Ad(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?HT.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VT=0;const Rd=new se;class zn extends ks{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=Rr,l=Rr,c=Ni,f=Cr,h=Si,m=Bi,p=zn.DEFAULT_ANISOTROPY,g=Wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=Xs(),this.name="",this.source=new sp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rd).x}get height(){return this.source.getSize(Rd).y}get depth(){return this.source.getSize(Rd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==K0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hh:e.x=e.x-Math.floor(e.x);break;case Rr:e.x=e.x<0?0:1;break;case ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hh:e.y=e.y-Math.floor(e.y);break;case Rr:e.y=e.y<0?0:1;break;case ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=K0;zn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,s=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],g=m[4],v=m[8],x=m[1],M=m[5],E=m[9],b=m[2],S=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+b)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,w=(M+1)/2,H=(_+1)/2,V=(g+x)/4,z=(v+b)/4,j=(E+S)/4;return L>w&&L>H?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=V/s,c=z/s):w>H?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=V/l,c=j/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=z/c,l=j/c),this.set(s,l,c,i),this}let P=Math.sqrt((S-E)*(S-E)+(v-b)*(v-b)+(x-g)*(x-g));return Math.abs(P)<.001&&(P=1),this.x=(S-E)/P,this.y=(v-b)/P,this.z=(x-g)/P,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this.w=yt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this.w=yt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kT extends ks{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new zn(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new sp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends kT{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class lx extends zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class XT extends zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl{constructor(e=new se(1/0,1/0,1/0),i=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(vi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(vi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=vi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,vi):vi.fromBufferAttribute(c,f),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Sc.copy(s.boundingBox)),Sc.applyMatrix4(e.matrixWorld),this.union(Sc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),Mc.subVectors(this.max,Ho),ms.subVectors(e.a,Ho),gs.subVectors(e.b,Ho),vs.subVectors(e.c,Ho),Ha.subVectors(gs,ms),Ga.subVectors(vs,gs),vr.subVectors(ms,vs);let i=[0,-Ha.z,Ha.y,0,-Ga.z,Ga.y,0,-vr.z,vr.y,Ha.z,0,-Ha.x,Ga.z,0,-Ga.x,vr.z,0,-vr.x,-Ha.y,Ha.x,0,-Ga.y,Ga.x,0,-vr.y,vr.x,0];return!Cd(i,ms,gs,vs,Mc)||(i=[1,0,0,0,1,0,0,0,1],!Cd(i,ms,gs,vs,Mc))?!1:(Ec.crossVectors(Ha,Ga),i=[Ec.x,Ec.y,Ec.z],Cd(i,ms,gs,vs,Mc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ra=[new se,new se,new se,new se,new se,new se,new se,new se],vi=new se,Sc=new rl,ms=new se,gs=new se,vs=new se,Ha=new se,Ga=new se,vr=new se,Ho=new se,Mc=new se,Ec=new se,_r=new se;function Cd(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){_r.fromArray(r,c);const h=l.x*Math.abs(_r.x)+l.y*Math.abs(_r.y)+l.z*Math.abs(_r.z),m=e.dot(_r),p=i.dot(_r),g=s.dot(_r);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const jT=new rl,Go=new se,wd=new se;class op{constructor(e=new se,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):jT.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const i=Go.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Go,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(wd)),this.expandByPoint(Go.copy(e.center).sub(wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const sa=new se,Dd=new se,Tc=new se,Va=new se,Ud=new se,bc=new se,Ld=new se;class WT{constructor(e=new se,i=new se(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=sa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(sa.copy(this.origin).addScaledVector(this.direction,i),sa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Dd.copy(e).add(i).multiplyScalar(.5),Tc.copy(i).sub(e).normalize(),Va.copy(this.origin).sub(Dd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Tc),h=Va.dot(this.direction),m=-Va.dot(Tc),p=Va.lengthSq(),g=Math.abs(1-f*f);let v,x,M,E;if(g>0)if(v=f*m-h,x=f*h-m,E=c*g,v>=0)if(x>=-E)if(x<=E){const b=1/g;v*=b,x*=b,M=v*(v+f*x+2*h)+x*(f*v+x+2*m)+p}else x=c,v=Math.max(0,-(f*x+h)),M=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(f*x+h)),M=-v*v+x*(x+2*m)+p;else x<=-E?(v=Math.max(0,-(-f*c+h)),x=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+x*(x+2*m)+p):x<=E?(v=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(v=Math.max(0,-(f*c+h)),x=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+x*(x+2*m)+p);else x=f>0?-c:c,v=Math.max(0,-(f*x+h)),M=-v*v+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Dd).addScaledVector(Tc,x),M}intersectSphere(e,i){sa.subVectors(e.center,this.origin);const s=sa.dot(this.direction),l=sa.dot(sa)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(c=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(h=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,sa)!==null}intersectTriangle(e,i,s,l,c){Ud.subVectors(i,e),bc.subVectors(s,e),Ld.crossVectors(Ud,bc);let f=this.direction.dot(Ld),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Va.subVectors(this.origin,e);const m=h*this.direction.dot(bc.crossVectors(Va,bc));if(m<0)return null;const p=h*this.direction.dot(Ud.cross(Va));if(p<0||m+p>f)return null;const g=-h*Va.dot(Ld);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,i,s,l,c,f,h,m,p,g,v,x,M,E,b,S){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p,g,v,x,M,E,b,S)}set(e,i,s,l,c,f,h,m,p,g,v,x,M,E,b,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=f,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=E,_[11]=b,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/_s.setFromMatrixColumn(e,0).length(),c=1/_s.setFromMatrixColumn(e,1).length(),f=1/_s.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=f*g,M=f*v,E=h*g,b=h*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+E*p,i[5]=x-b*p,i[9]=-h*m,i[2]=b-x*p,i[6]=E+M*p,i[10]=f*m}else if(e.order==="YXZ"){const x=m*g,M=m*v,E=p*g,b=p*v;i[0]=x+b*h,i[4]=E*h-M,i[8]=f*p,i[1]=f*v,i[5]=f*g,i[9]=-h,i[2]=M*h-E,i[6]=b+x*h,i[10]=f*m}else if(e.order==="ZXY"){const x=m*g,M=m*v,E=p*g,b=p*v;i[0]=x-b*h,i[4]=-f*v,i[8]=E+M*h,i[1]=M+E*h,i[5]=f*g,i[9]=b-x*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const x=f*g,M=f*v,E=h*g,b=h*v;i[0]=m*g,i[4]=E*p-M,i[8]=x*p+b,i[1]=m*v,i[5]=b*p+x,i[9]=M*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,M=f*p,E=h*m,b=h*p;i[0]=m*g,i[4]=b-x*v,i[8]=E*v+M,i[1]=v,i[5]=f*g,i[9]=-h*g,i[2]=-p*g,i[6]=M*v+E,i[10]=x-b*v}else if(e.order==="XZY"){const x=f*m,M=f*p,E=h*m,b=h*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+b,i[5]=f*g,i[9]=M*v-E,i[2]=E*v-M,i[6]=h*g,i[10]=b*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qT,e,YT)}lookAt(e,i,s){const l=this.elements;return ei.subVectors(e,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),ka.crossVectors(s,ei),ka.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),ka.crossVectors(s,ei)),ka.normalize(),Ac.crossVectors(ei,ka),l[0]=ka.x,l[4]=Ac.x,l[8]=ei.x,l[1]=ka.y,l[5]=Ac.y,l[9]=ei.y,l[2]=ka.z,l[6]=Ac.z,l[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],g=s[1],v=s[5],x=s[9],M=s[13],E=s[2],b=s[6],S=s[10],_=s[14],P=s[3],L=s[7],w=s[11],H=s[15],V=l[0],z=l[4],j=l[8],D=l[12],U=l[1],F=l[5],ce=l[9],le=l[13],de=l[2],he=l[6],I=l[10],K=l[14],Z=l[3],Se=l[7],be=l[11],O=l[15];return c[0]=f*V+h*U+m*de+p*Z,c[4]=f*z+h*F+m*he+p*Se,c[8]=f*j+h*ce+m*I+p*be,c[12]=f*D+h*le+m*K+p*O,c[1]=g*V+v*U+x*de+M*Z,c[5]=g*z+v*F+x*he+M*Se,c[9]=g*j+v*ce+x*I+M*be,c[13]=g*D+v*le+x*K+M*O,c[2]=E*V+b*U+S*de+_*Z,c[6]=E*z+b*F+S*he+_*Se,c[10]=E*j+b*ce+S*I+_*be,c[14]=E*D+b*le+S*K+_*O,c[3]=P*V+L*U+w*de+H*Z,c[7]=P*z+L*F+w*he+H*Se,c[11]=P*j+L*ce+w*I+H*be,c[15]=P*D+L*le+w*K+H*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],g=e[2],v=e[6],x=e[10],M=e[14],E=e[3],b=e[7],S=e[11],_=e[15];return E*(+c*m*v-l*p*v-c*h*x+s*p*x+l*h*M-s*m*M)+b*(+i*m*M-i*p*x+c*f*x-l*f*M+l*p*g-c*m*g)+S*(+i*p*v-i*h*M-c*f*v+s*f*M+c*h*g-s*p*g)+_*(-l*h*g-i*m*v+i*h*x+l*f*v-s*f*x+s*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=e[9],x=e[10],M=e[11],E=e[12],b=e[13],S=e[14],_=e[15],P=v*S*p-b*x*p+b*m*M-h*S*M-v*m*_+h*x*_,L=E*x*p-g*S*p-E*m*M+f*S*M+g*m*_-f*x*_,w=g*b*p-E*v*p+E*h*M-f*b*M-g*h*_+f*v*_,H=E*v*m-g*b*m-E*h*x+f*b*x+g*h*S-f*v*S,V=i*P+s*L+l*w+c*H;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/V;return e[0]=P*z,e[1]=(b*x*c-v*S*c-b*l*M+s*S*M+v*l*_-s*x*_)*z,e[2]=(h*S*c-b*m*c+b*l*p-s*S*p-h*l*_+s*m*_)*z,e[3]=(v*m*c-h*x*c-v*l*p+s*x*p+h*l*M-s*m*M)*z,e[4]=L*z,e[5]=(g*S*c-E*x*c+E*l*M-i*S*M-g*l*_+i*x*_)*z,e[6]=(E*m*c-f*S*c-E*l*p+i*S*p+f*l*_-i*m*_)*z,e[7]=(f*x*c-g*m*c+g*l*p-i*x*p-f*l*M+i*m*M)*z,e[8]=w*z,e[9]=(E*v*c-g*b*c-E*s*M+i*b*M+g*s*_-i*v*_)*z,e[10]=(f*b*c-E*h*c+E*s*p-i*b*p-f*s*_+i*h*_)*z,e[11]=(g*h*c-f*v*c-g*s*p+i*v*p+f*s*M-i*h*M)*z,e[12]=H*z,e[13]=(g*b*l-E*v*l+E*s*x-i*b*x-g*s*S+i*v*S)*z,e[14]=(E*h*l-f*b*l-E*s*m+i*b*m+f*s*S-i*h*S)*z,e[15]=(f*v*l-g*h*l+g*s*m-i*v*m-f*s*x+i*h*x)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,h=e.y,m=e.z,p=c*f,g=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*f,0,p*m-l*h,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,g=f+f,v=h+h,x=c*p,M=c*g,E=c*v,b=f*g,S=f*v,_=h*v,P=m*p,L=m*g,w=m*v,H=s.x,V=s.y,z=s.z;return l[0]=(1-(b+_))*H,l[1]=(M+w)*H,l[2]=(E-L)*H,l[3]=0,l[4]=(M-w)*V,l[5]=(1-(x+_))*V,l[6]=(S+P)*V,l[7]=0,l[8]=(E+L)*z,l[9]=(S-P)*z,l[10]=(1-(x+b))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=_s.set(l[0],l[1],l[2]).length();const f=_s.set(l[4],l[5],l[6]).length(),h=_s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],_i.copy(this);const p=1/c,g=1/f,v=1/h;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=g,_i.elements[5]*=g,_i.elements[6]*=g,_i.elements[8]*=v,_i.elements[9]*=v,_i.elements[10]*=v,i.setFromRotationMatrix(_i),s.x=c,s.y=f,s.z=h,this}makePerspective(e,i,s,l,c,f,h=Oi,m=!1){const p=this.elements,g=2*c/(i-e),v=2*c/(s-l),x=(i+e)/(i-e),M=(s+l)/(s-l);let E,b;if(m)E=c/(f-c),b=f*c/(f-c);else if(h===Oi)E=-(f+c)/(f-c),b=-2*f*c/(f-c);else if(h===Qc)E=-f/(f-c),b=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,h=Oi,m=!1){const p=this.elements,g=2/(i-e),v=2/(s-l),x=-(i+e)/(i-e),M=-(s+l)/(s-l);let E,b;if(m)E=1/(f-c),b=f/(f-c);else if(h===Oi)E=-2/(f-c),b=-(f+c)/(f-c);else if(h===Qc)E=-1/(f-c),b=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const _s=new se,_i=new rn,qT=new se(0,0,0),YT=new se(1,1,1),ka=new se,Ac=new se,ei=new se,A_=new rn,R_=new al;class Fi{constructor(e=0,i=0,s=0,l=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(yt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return A_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(A_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return R_.setFromEuler(this),this.setFromQuaternion(R_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class cx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ZT=0;const C_=new se,xs=new al,oa=new rn,Rc=new se,Vo=new se,KT=new se,QT=new al,w_=new se(1,0,0),D_=new se(0,1,0),U_=new se(0,0,1),L_={type:"added"},JT={type:"removed"},ys={type:"childadded",child:null},Nd={type:"childremoved",child:null};class wn extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new se,i=new Fi,s=new al,l=new se(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new ut}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return xs.setFromAxisAngle(e,i),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,i){return xs.setFromAxisAngle(e,i),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(w_,e)}rotateY(e){return this.rotateOnAxis(D_,e)}rotateZ(e){return this.rotateOnAxis(U_,e)}translateOnAxis(e,i){return C_.copy(e).applyQuaternion(this.quaternion),this.position.add(C_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(w_,e)}translateY(e){return this.translateOnAxis(D_,e)}translateZ(e){return this.translateOnAxis(U_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Rc.copy(e):Rc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oa.lookAt(Vo,Rc,this.up):oa.lookAt(Rc,Vo,this.up),this.quaternion.setFromRotationMatrix(oa),l&&(oa.extractRotation(l.matrixWorld),xs.setFromRotationMatrix(oa),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(L_),ys.child=e,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(JT),Nd.child=e,this.dispatchEvent(Nd),Nd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oa.multiply(e.parent.matrixWorld)),e.applyMatrix4(oa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(L_),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,KT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,QT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),g=f(e.images),v=f(e.shapes),x=f(e.skeletons),M=f(e.animations),E=f(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}wn.DEFAULT_UP=new se(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new se,la=new se,Od=new se,ca=new se,Ss=new se,Ms=new se,N_=new se,Pd=new se,zd=new se,Id=new se,Bd=new en,Fd=new en,Hd=new en;class yi{constructor(e=new se,i=new se,s=new se){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),xi.subVectors(e,i),l.cross(xi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){xi.subVectors(l,i),la.subVectors(s,i),Od.subVectors(e,i);const f=xi.dot(xi),h=xi.dot(la),m=xi.dot(Od),p=la.dot(la),g=la.dot(Od),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const x=1/v,M=(p*m-h*g)*x,E=(f*g-h*m)*x;return c.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ca)===null?!1:ca.x>=0&&ca.y>=0&&ca.x+ca.y<=1}static getInterpolation(e,i,s,l,c,f,h,m){return this.getBarycoord(e,i,s,l,ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ca.x),m.addScaledVector(f,ca.y),m.addScaledVector(h,ca.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return Bd.setScalar(0),Fd.setScalar(0),Hd.setScalar(0),Bd.fromBufferAttribute(e,i),Fd.fromBufferAttribute(e,s),Hd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Bd,c.x),f.addScaledVector(Fd,c.y),f.addScaledVector(Hd,c.z),f}static isFrontFacing(e,i,s,l){return xi.subVectors(s,i),la.subVectors(e,i),xi.cross(la).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),la.subVectors(this.a,this.b),xi.cross(la).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return yi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return yi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,h;Ss.subVectors(l,s),Ms.subVectors(c,s),Pd.subVectors(e,s);const m=Ss.dot(Pd),p=Ms.dot(Pd);if(m<=0&&p<=0)return i.copy(s);zd.subVectors(e,l);const g=Ss.dot(zd),v=Ms.dot(zd);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Ss,f);Id.subVectors(e,c);const M=Ss.dot(Id),E=Ms.dot(Id);if(E>=0&&M<=E)return i.copy(c);const b=M*p-m*E;if(b<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(Ms,h);const S=g*E-M*v;if(S<=0&&v-g>=0&&M-E>=0)return N_.subVectors(c,l),h=(v-g)/(v-g+(M-E)),i.copy(l).addScaledVector(N_,h);const _=1/(S+b+x);return f=b*_,h=x*_,i.copy(s).addScaledVector(Ss,f).addScaledVector(Ms,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ux={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Gd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Et{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=wt.workingColorSpace){return this.r=e,this.g=i,this.b=s,wt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=wt.workingColorSpace){if(e=rp(e,1),i=yt(i,0,1),s=yt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Gd(f,c,e+1/3),this.g=Gd(f,c,e),this.b=Gd(f,c,e-1/3)}return wt.colorSpaceToWorking(this,l),this}setStyle(e,i=Xn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Xn){const s=ux[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return wt.workingToColorSpace(Cn.copy(this),e),Math.round(yt(Cn.r*255,0,255))*65536+Math.round(yt(Cn.g*255,0,255))*256+Math.round(yt(Cn.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=wt.workingColorSpace){wt.workingToColorSpace(Cn.copy(this),i);const s=Cn.r,l=Cn.g,c=Cn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=g<=.5?v/(f+h):v/(2-f-h),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=wt.workingColorSpace){return wt.workingToColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=Xn){wt.workingToColorSpace(Cn.copy(this),e);const i=Cn.r,s=Cn.g,l=Cn.b;return e!==Xn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Xa),this.setHSL(Xa.h+e,Xa.s+i,Xa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Xa),e.getHSL(Cc);const s=qo(Xa.h,Cc.h,i),l=qo(Xa.s,Cc.s,i),c=qo(Xa.l,Cc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Et;Et.NAMES=ux;let $T=0;class sl extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$T++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=Us,this.side=Za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(s.blending=this.blending),this.side!==Za&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==nh&&(s.blendSrc=this.blendSrc),this.blendDst!==ih&&(s.blendDst=this.blendDst),this.blendEquation!==br&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==v_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lp extends sl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new se,wc=new Ut;let eb=0;class Pi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=__,this.updateRanges=[],this.gpuType=da,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)wc.fromBufferAttribute(this,i),wc.applyMatrix3(e),this.setXY(i,wc.x,wc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Cs(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Nn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Cs(i,this.array)),i}setX(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Cs(i,this.array)),i}setY(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Cs(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Cs(i,this.array)),i}setW(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Nn(i,this.array),s=Nn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Nn(i,this.array),s=Nn(s,this.array),l=Nn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Nn(i,this.array),s=Nn(s,this.array),l=Nn(l,this.array),c=Nn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==__&&(e.usage=this.usage),e}}class fx extends Pi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class dx extends Pi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class zi extends Pi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let tb=0;const fi=new rn,Vd=new wn,Es=new se,ti=new rl,ko=new rl,_n=new se;class Qa extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ox(e)?dx:fx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ut().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,i,s){return fi.makeTranslation(e,i,s),this.applyMatrix4(fi),this}scale(e,i,s){return fi.makeScale(e,i,s),this.applyMatrix4(fi),this}lookAt(e){return Vd.lookAt(e),Vd.updateMatrix(),this.applyMatrix4(Vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new zi(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new op);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];ko.setFromBufferAttribute(h),this.morphTargetsRelative?(_n.addVectors(ti.min,ko.min),ti.expandByPoint(_n),_n.addVectors(ti.max,ko.max),ti.expandByPoint(_n)):(ti.expandByPoint(ko.min),ti.expandByPoint(ko.max))}ti.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)_n.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(_n));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)_n.fromBufferAttribute(h,p),m&&(Es.fromBufferAttribute(e,p),_n.add(Es)),l=Math.max(l,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let j=0;j<s.count;j++)h[j]=new se,m[j]=new se;const p=new se,g=new se,v=new se,x=new Ut,M=new Ut,E=new Ut,b=new se,S=new se;function _(j,D,U){p.fromBufferAttribute(s,j),g.fromBufferAttribute(s,D),v.fromBufferAttribute(s,U),x.fromBufferAttribute(c,j),M.fromBufferAttribute(c,D),E.fromBufferAttribute(c,U),g.sub(p),v.sub(p),M.sub(x),E.sub(x);const F=1/(M.x*E.y-E.x*M.y);isFinite(F)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(F),S.copy(v).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(F),h[j].add(b),h[D].add(b),h[U].add(b),m[j].add(S),m[D].add(S),m[U].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let j=0,D=P.length;j<D;++j){const U=P[j],F=U.start,ce=U.count;for(let le=F,de=F+ce;le<de;le+=3)_(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const L=new se,w=new se,H=new se,V=new se;function z(j){H.fromBufferAttribute(l,j),V.copy(H);const D=h[j];L.copy(D),L.sub(H.multiplyScalar(H.dot(D))).normalize(),w.crossVectors(V,D);const F=w.dot(m[j])<0?-1:1;f.setXYZW(j,L.x,L.y,L.z,F)}for(let j=0,D=P.length;j<D;++j){const U=P[j],F=U.start,ce=U.count;for(let le=F,de=F+ce;le<de;le+=3)z(e.getX(le+0)),z(e.getX(le+1)),z(e.getX(le+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Pi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new se,c=new se,f=new se,h=new se,m=new se,p=new se,g=new se,v=new se;if(e)for(let x=0,M=e.count;x<M;x+=3){const E=e.getX(x+0),b=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,S),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,S),h.add(g),m.add(g),p.add(g),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,v=h.normalized,x=new p.constructor(m.length*g);let M=0,E=0;for(let b=0,S=m.length;b<S;b++){h.isInterleavedBufferAttribute?M=m[b]*h.data.stride+h.offset:M=m[b]*g;for(let _=0;_<g;_++)x[E++]=p[M++]}return new Pi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Qa,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const x=p[g],M=e(x,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],v=c[p];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const O_=new rn,xr=new WT,Dc=new op,P_=new se,Uc=new se,Lc=new se,Nc=new se,kd=new se,Oc=new se,z_=new se,Pc=new se;class Mi extends wn{constructor(e=new Qa,i=new lp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Oc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],v=c[m];g!==0&&(kd.fromBufferAttribute(v,e),f?Oc.addScaledVector(kd,g):Oc.addScaledVector(kd.sub(i),g))}i.add(Oc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Dc.copy(s.boundingSphere),Dc.applyMatrix4(c),xr.copy(e.ray).recast(e.near),!(Dc.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Dc,P_)===null||xr.origin.distanceToSquared(P_)>(e.far-e.near)**2))&&(O_.copy(c).invert(),xr.copy(e.ray).applyMatrix4(O_),!(s.boundingBox!==null&&xr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,xr)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,b=x.length;E<b;E++){const S=x[E],_=f[S.materialIndex],P=Math.max(S.start,M.start),L=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let w=P,H=L;w<H;w+=3){const V=h.getX(w),z=h.getX(w+1),j=h.getX(w+2);l=zc(this,_,e,s,p,g,v,V,z,j),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(h.count,M.start+M.count);for(let S=E,_=b;S<_;S+=3){const P=h.getX(S),L=h.getX(S+1),w=h.getX(S+2);l=zc(this,f,e,s,p,g,v,P,L,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,b=x.length;E<b;E++){const S=x[E],_=f[S.materialIndex],P=Math.max(S.start,M.start),L=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let w=P,H=L;w<H;w+=3){const V=w,z=w+1,j=w+2;l=zc(this,_,e,s,p,g,v,V,z,j),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let S=E,_=b;S<_;S+=3){const P=S,L=S+1,w=S+2;l=zc(this,f,e,s,p,g,v,P,L,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function nb(r,e,i,s,l,c,f,h){let m;if(e.side===Pn?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,e.side===Za,h),m===null)return null;Pc.copy(h),Pc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Pc);return p<i.near||p>i.far?null:{distance:p,point:Pc.clone(),object:r}}function zc(r,e,i,s,l,c,f,h,m,p){r.getVertexPosition(h,Uc),r.getVertexPosition(m,Lc),r.getVertexPosition(p,Nc);const g=nb(r,e,i,s,Uc,Lc,Nc,z_);if(g){const v=new se;yi.getBarycoord(z_,Uc,Lc,Nc,v),l&&(g.uv=yi.getInterpolatedAttribute(l,h,m,p,v,new Ut)),c&&(g.uv1=yi.getInterpolatedAttribute(c,h,m,p,v,new Ut)),f&&(g.normal=yi.getInterpolatedAttribute(f,h,m,p,v,new se),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new se,materialIndex:0};yi.getNormal(Uc,Lc,Nc,x.normal),g.face=x,g.barycoord=v}return g}class ol extends Qa{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],v=[];let x=0,M=0;E("z","y","x",-1,-1,s,i,e,f,c,0),E("z","y","x",1,-1,s,i,-e,f,c,1),E("x","z","y",1,1,e,s,i,l,f,2),E("x","z","y",1,-1,e,s,-i,l,f,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new zi(p,3)),this.setAttribute("normal",new zi(g,3)),this.setAttribute("uv",new zi(v,2));function E(b,S,_,P,L,w,H,V,z,j,D){const U=w/z,F=H/j,ce=w/2,le=H/2,de=V/2,he=z+1,I=j+1;let K=0,Z=0;const Se=new se;for(let be=0;be<I;be++){const O=be*F-le;for(let ie=0;ie<he;ie++){const Te=ie*U-ce;Se[b]=Te*P,Se[S]=O*L,Se[_]=de,p.push(Se.x,Se.y,Se.z),Se[b]=0,Se[S]=0,Se[_]=V>0?1:-1,g.push(Se.x,Se.y,Se.z),v.push(ie/z),v.push(1-be/j),K+=1}}for(let be=0;be<j;be++)for(let O=0;O<z;O++){const ie=x+O+he*be,Te=x+O+he*(be+1),Ce=x+(O+1)+he*(be+1),J=x+(O+1)+he*be;m.push(ie,Te,J),m.push(Te,Ce,J),Z+=6}h.addGroup(M,Z,D),M+=Z,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function On(r){const e={};for(let i=0;i<r.length;i++){const s=Hs(r[i]);for(const l in s)e[l]=s[l]}return e}function ib(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function hx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const ab={clone:Hs,merge:On};var rb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ka extends sl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rb,this.fragmentShader=sb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=ib(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class px extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ja=new se,I_=new Ut,B_=new Ut;class di extends px{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Jo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ja.x,ja.y).multiplyScalar(-e/ja.z),ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ja.x,ja.y).multiplyScalar(-e/ja.z)}getViewSize(e,i){return this.getViewBounds(e,I_,B_),i.subVectors(B_,I_)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Wo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ts=-90,bs=1;class ob extends wn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(Ts,bs,e,i);l.layers=this.layers,this.add(l);const c=new di(Ts,bs,e,i);c.layers=this.layers,this.add(c);const f=new di(Ts,bs,e,i);f.layers=this.layers,this.add(f);const h=new di(Ts,bs,e,i);h.layers=this.layers,this.add(h);const m=new di(Ts,bs,e,i);m.layers=this.layers,this.add(m);const p=new di(Ts,bs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Oi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Qc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=b,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(v,x,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class mx extends zn{constructor(e=[],i=Is,s,l,c,f,h,m,p,g){super(e,i,s,l,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lb extends Dr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new mx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ol(5,5,5),c=new Ka({name:"CubemapFromEquirect",uniforms:Hs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Pn,blending:qa});c.uniforms.tEquirect.value=i;const f=new Mi(l,c),h=i.minFilter;return i.minFilter===Cr&&(i.minFilter=Ni),new ob(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}class Xo extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cb={type:"move"};class Xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const b of e.hand.values()){const S=i.getJointPose(b,s),_=this._getHandJoint(p,b);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(cb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Xo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class ub extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const jd=new se,fb=new se,db=new ut;class Er{constructor(e=new se(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=jd.subVectors(s,i).cross(fb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(jd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||db.getNormalMatrix(e),l=this.coplanarPoint(jd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new op,hb=new Ut(.5,.5),Ic=new se;class cp{constructor(e=new Er,i=new Er,s=new Er,l=new Er,c=new Er,f=new Er){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Oi,s=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],v=c[5],x=c[6],M=c[7],E=c[8],b=c[9],S=c[10],_=c[11],P=c[12],L=c[13],w=c[14],H=c[15];if(l[0].setComponents(p-f,M-g,_-E,H-P).normalize(),l[1].setComponents(p+f,M+g,_+E,H+P).normalize(),l[2].setComponents(p+h,M+v,_+b,H+L).normalize(),l[3].setComponents(p-h,M-v,_-b,H-L).normalize(),s)l[4].setComponents(m,x,S,w).normalize(),l[5].setComponents(p-m,M-x,_-S,H-w).normalize();else if(l[4].setComponents(p-m,M-x,_-S,H-w).normalize(),i===Oi)l[5].setComponents(p+m,M+x,_+S,H+w).normalize();else if(i===Qc)l[5].setComponents(m,x,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){yr.center.set(0,0,0);const i=hb.distanceTo(e.center);return yr.radius=.7071067811865476+i,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ic.x=l.normal.x>0?e.max.x:e.min.x,Ic.y=l.normal.y>0?e.max.y:e.min.y,Ic.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gx extends zn{constructor(e,i,s=wr,l,c,f,h=Ti,m=Ti,p,g=Ko,v=1){if(g!==Ko&&g!==Qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:v};super(x,l,c,f,h,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class iu extends Qa{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,v=e/h,x=i/m,M=[],E=[],b=[],S=[];for(let _=0;_<g;_++){const P=_*x-f;for(let L=0;L<p;L++){const w=L*v-c;E.push(w,-P,0),b.push(0,0,1),S.push(L/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let P=0;P<h;P++){const L=P+p*_,w=P+p*(_+1),H=P+1+p*(_+1),V=P+1+p*_;M.push(L,w,V),M.push(w,H,V)}this.setIndex(M),this.setAttribute("position",new zi(E,3)),this.setAttribute("normal",new zi(b,3)),this.setAttribute("uv",new zi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new iu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jc extends Qa{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const g=[],v=new se,x=new se,M=[],E=[],b=[],S=[];for(let _=0;_<=s;_++){const P=[],L=_/s;let w=0;_===0&&f===0?w=.5/i:_===s&&m===Math.PI&&(w=-.5/i);for(let H=0;H<=i;H++){const V=H/i;v.x=-e*Math.cos(l+V*c)*Math.sin(f+L*h),v.y=e*Math.cos(f+L*h),v.z=e*Math.sin(l+V*c)*Math.sin(f+L*h),E.push(v.x,v.y,v.z),x.copy(v).normalize(),b.push(x.x,x.y,x.z),S.push(V+w,1-L),P.push(p++)}g.push(P)}for(let _=0;_<s;_++)for(let P=0;P<i;P++){const L=g[_][P+1],w=g[_][P],H=g[_+1][P],V=g[_+1][P+1];(_!==0||f>0)&&M.push(L,w,V),(_!==s-1||m<Math.PI)&&M.push(w,H,V)}this.setIndex(M),this.setAttribute("position",new zi(E,3)),this.setAttribute("normal",new zi(b,3)),this.setAttribute("uv",new zi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pb extends sl{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Et(16777215),this.specular=new Et(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rx,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mb extends sl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gb extends sl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wd={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class vb{constructor(e,i,s){const l=this;let c=!1,f=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this.abortController=new AbortController,this.itemStart=function(g){h++,c===!1&&l.onStart!==void 0&&l.onStart(g,f,h),c=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,h),f===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,x=p.length;v<x;v+=2){const M=p[v],E=p[v+1];if(M.global&&(M.lastIndex=0),M.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const _b=new vb;class up{constructor(e){this.manager=e!==void 0?e:_b,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,c){s.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}up.DEFAULT_MATERIAL_NAME="__DEFAULT";const As=new WeakMap;class xb extends up{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,f=Wd.get(`image:${e}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(f),c.manager.itemEnd(e)},0);else{let v=As.get(f);v===void 0&&(v=[],As.set(f,v)),v.push({onLoad:i,onError:l})}return f}const h=$o("img");function m(){g(),i&&i(this);const v=As.get(this)||[];for(let x=0;x<v.length;x++){const M=v[x];M.onLoad&&M.onLoad(this)}As.delete(this),c.manager.itemEnd(e)}function p(v){g(),l&&l(v),Wd.remove(`image:${e}`);const x=As.get(this)||[];for(let M=0;M<x.length;M++){const E=x[M];E.onError&&E.onError(v)}As.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Wd.add(`image:${e}`,h),c.manager.itemStart(e),h.src=e,h}}class yb extends up{constructor(e){super(e)}load(e,i,s,l){const c=new zn,f=new xb(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(e,function(h){c.image=h,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}class vx extends wn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const qd=new rn,F_=new se,H_=new se;class Sb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=Bi,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cp,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;F_.setFromMatrixPosition(e.matrixWorld),i.position.copy(F_),H_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(H_),i.updateMatrixWorld(),qd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(qd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _x extends px{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Mb extends Sb{constructor(){super(new _x(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class G_ extends vx{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new Mb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Eb extends vx{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tb extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function V_(r,e,i,s){const l=bb(s);switch(i){case ex:return r*e;case nx:return r*e/l.components*l.byteLength;case np:return r*e/l.components*l.byteLength;case ix:return r*e*2/l.components*l.byteLength;case ip:return r*e*2/l.components*l.byteLength;case tx:return r*e*3/l.components*l.byteLength;case Si:return r*e*4/l.components*l.byteLength;case ap:return r*e*4/l.components*l.byteLength;case kc:case Xc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case jc:case Wc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gh:case _h:return Math.max(r,16)*Math.max(e,8)/4;case mh:case vh:return Math.max(r,8)*Math.max(e,8)/2;case xh:case yh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Sh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Th:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case bh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case wh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ph:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case qc:case zh:case Ih:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ax:case Bh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Fh:case Hh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function bb(r){switch(r){case Bi:case Q0:return{byteLength:1,components:1};case Yo:case J0:case il:return{byteLength:2,components:1};case ep:case tp:return{byteLength:2,components:4};case wr:case $h:case da:return{byteLength:4,components:1};case $0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qh);function xx(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Ab(r){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,v=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),h.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const g=m.array,v=m.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,g);else{v.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<v.length;M++){const E=v[x],b=v[M];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++x,v[x]=b)}v.length=x+1;for(let M=0,E=v.length;M<E;M++){const b=v[M];r.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var Rb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cb=`#ifdef USE_ALPHAHASH
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
#endif`,wb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Db=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ub=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nb=`#ifdef USE_AOMAP
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
#endif`,Ob=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pb=`#ifdef USE_BATCHING
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
#endif`,zb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ib=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hb=`#ifdef USE_IRIDESCENCE
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
#endif`,Gb=`#ifdef USE_BUMPMAP
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
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kb=`#define PI 3.141592653589793
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
} // validated`,Qb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jb=`vec3 transformedNormal = objectNormal;
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
#endif`,$b=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iA="gl_FragColor = linearToOutputTexel( gl_FragColor );",aA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rA=`#ifdef USE_ENVMAP
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
#endif`,sA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oA=`#ifdef USE_ENVMAP
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
#endif`,lA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cA=`#ifdef USE_ENVMAP
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
#endif`,uA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pA=`#ifdef USE_GRADIENTMAP
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
}`,mA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_A=`uniform bool receiveShadow;
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
#endif`,xA=`#ifdef USE_ENVMAP
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
#endif`,yA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TA=`PhysicalMaterial material;
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
#endif`,bA=`struct PhysicalMaterial {
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
}`,AA=`
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
#endif`,RA=`#if defined( RE_IndirectDiffuse )
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
#endif`,CA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zA=`#if defined( USE_POINTS_UV )
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
#endif`,IA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VA=`#ifdef USE_MORPHTARGETS
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
#endif`,kA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,WA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZA=`#ifdef USE_NORMALMAP
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
#endif`,KA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$A=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,n1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
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
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f1=`float getShadowMask() {
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
}`,d1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h1=`#ifdef USE_SKINNING
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
#endif`,p1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m1=`#ifdef USE_SKINNING
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
#endif`,g1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y1=`#ifdef USE_TRANSMISSION
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
#endif`,S1=`#ifdef USE_TRANSMISSION
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R1=`uniform sampler2D t2D;
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`#include <common>
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
}`,N1=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,O1=`#define DISTANCE
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
}`,P1=`#define DISTANCE
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
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`uniform float scale;
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
}`,F1=`uniform vec3 diffuse;
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
}`,H1=`#include <common>
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
}`,G1=`uniform vec3 diffuse;
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
}`,V1=`#define LAMBERT
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
}`,k1=`#define LAMBERT
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
}`,X1=`#define MATCAP
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
}`,j1=`#define MATCAP
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
}`,W1=`#define NORMAL
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
}`,q1=`#define NORMAL
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
}`,Y1=`#define PHONG
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
}`,Z1=`#define PHONG
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
}`,K1=`#define STANDARD
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
}`,Q1=`#define STANDARD
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
}`,J1=`#define TOON
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
}`,$1=`#define TOON
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
}`,eR=`uniform float size;
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
}`,tR=`uniform vec3 diffuse;
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
}`,nR=`#include <common>
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
}`,iR=`uniform vec3 color;
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
}`,aR=`uniform float rotation;
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
}`,rR=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Rb,alphahash_pars_fragment:Cb,alphamap_fragment:wb,alphamap_pars_fragment:Db,alphatest_fragment:Ub,alphatest_pars_fragment:Lb,aomap_fragment:Nb,aomap_pars_fragment:Ob,batching_pars_vertex:Pb,batching_vertex:zb,begin_vertex:Ib,beginnormal_vertex:Bb,bsdfs:Fb,iridescence_fragment:Hb,bumpmap_pars_fragment:Gb,clipping_planes_fragment:Vb,clipping_planes_pars_fragment:kb,clipping_planes_pars_vertex:Xb,clipping_planes_vertex:jb,color_fragment:Wb,color_pars_fragment:qb,color_pars_vertex:Yb,color_vertex:Zb,common:Kb,cube_uv_reflection_fragment:Qb,defaultnormal_vertex:Jb,displacementmap_pars_vertex:$b,displacementmap_vertex:eA,emissivemap_fragment:tA,emissivemap_pars_fragment:nA,colorspace_fragment:iA,colorspace_pars_fragment:aA,envmap_fragment:rA,envmap_common_pars_fragment:sA,envmap_pars_fragment:oA,envmap_pars_vertex:lA,envmap_physical_pars_fragment:xA,envmap_vertex:cA,fog_vertex:uA,fog_pars_vertex:fA,fog_fragment:dA,fog_pars_fragment:hA,gradientmap_pars_fragment:pA,lightmap_pars_fragment:mA,lights_lambert_fragment:gA,lights_lambert_pars_fragment:vA,lights_pars_begin:_A,lights_toon_fragment:yA,lights_toon_pars_fragment:SA,lights_phong_fragment:MA,lights_phong_pars_fragment:EA,lights_physical_fragment:TA,lights_physical_pars_fragment:bA,lights_fragment_begin:AA,lights_fragment_maps:RA,lights_fragment_end:CA,logdepthbuf_fragment:wA,logdepthbuf_pars_fragment:DA,logdepthbuf_pars_vertex:UA,logdepthbuf_vertex:LA,map_fragment:NA,map_pars_fragment:OA,map_particle_fragment:PA,map_particle_pars_fragment:zA,metalnessmap_fragment:IA,metalnessmap_pars_fragment:BA,morphinstance_vertex:FA,morphcolor_vertex:HA,morphnormal_vertex:GA,morphtarget_pars_vertex:VA,morphtarget_vertex:kA,normal_fragment_begin:XA,normal_fragment_maps:jA,normal_pars_fragment:WA,normal_pars_vertex:qA,normal_vertex:YA,normalmap_pars_fragment:ZA,clearcoat_normal_fragment_begin:KA,clearcoat_normal_fragment_maps:QA,clearcoat_pars_fragment:JA,iridescence_pars_fragment:$A,opaque_fragment:e1,packing:t1,premultiplied_alpha_fragment:n1,project_vertex:i1,dithering_fragment:a1,dithering_pars_fragment:r1,roughnessmap_fragment:s1,roughnessmap_pars_fragment:o1,shadowmap_pars_fragment:l1,shadowmap_pars_vertex:c1,shadowmap_vertex:u1,shadowmask_pars_fragment:f1,skinbase_vertex:d1,skinning_pars_vertex:h1,skinning_vertex:p1,skinnormal_vertex:m1,specularmap_fragment:g1,specularmap_pars_fragment:v1,tonemapping_fragment:_1,tonemapping_pars_fragment:x1,transmission_fragment:y1,transmission_pars_fragment:S1,uv_pars_fragment:M1,uv_pars_vertex:E1,uv_vertex:T1,worldpos_vertex:b1,background_vert:A1,background_frag:R1,backgroundCube_vert:C1,backgroundCube_frag:w1,cube_vert:D1,cube_frag:U1,depth_vert:L1,depth_frag:N1,distanceRGBA_vert:O1,distanceRGBA_frag:P1,equirect_vert:z1,equirect_frag:I1,linedashed_vert:B1,linedashed_frag:F1,meshbasic_vert:H1,meshbasic_frag:G1,meshlambert_vert:V1,meshlambert_frag:k1,meshmatcap_vert:X1,meshmatcap_frag:j1,meshnormal_vert:W1,meshnormal_frag:q1,meshphong_vert:Y1,meshphong_frag:Z1,meshphysical_vert:K1,meshphysical_frag:Q1,meshtoon_vert:J1,meshtoon_frag:$1,points_vert:eR,points_frag:tR,shadow_vert:nR,shadow_frag:iR,sprite_vert:aR,sprite_frag:rR},Oe={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Li={basic:{uniforms:On([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:On([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Et(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:On([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:On([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:On([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Et(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:On([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:On([Oe.points,Oe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:On([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:On([Oe.common,Oe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:On([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:On([Oe.sprite,Oe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:On([Oe.common,Oe.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:On([Oe.lights,Oe.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Li.physical={uniforms:On([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Bc={r:0,b:0,g:0},Sr=new Fi,sR=new rn;function oR(r,e,i,s,l,c,f){const h=new Et(0);let m=c===!0?0:1,p,g,v=null,x=0,M=null;function E(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?i:e).get(w)),w}function b(L){let w=!1;const H=E(L);H===null?_(h,m):H&&H.isColor&&(_(H,1),w=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?s.buffers.color.setClear(0,0,0,1,f):V==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(L,w){const H=E(w);H&&(H.isCubeTexture||H.mapping===nu)?(g===void 0&&(g=new Mi(new ol(1,1,1),new Ka({name:"BackgroundCubeMaterial",uniforms:Hs(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Sr.copy(w.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(sR.makeRotationFromEuler(Sr)),g.material.toneMapped=wt.getTransfer(H.colorSpace)!==Ht,(v!==H||x!==H.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,v=H,x=H.version,M=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new Mi(new iu(2,2),new Ka({name:"BackgroundMaterial",uniforms:Hs(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=wt.getTransfer(H.colorSpace)!==Ht,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||x!==H.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,v=H,x=H.version,M=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,w){L.getRGB(Bc,hx(r)),s.buffers.color.setClear(Bc.r,Bc.g,Bc.b,w,f)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,w=1){h.set(L),m=w,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(h,m)},render:b,addToRenderList:S,dispose:P}}function lR(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function h(U,F,ce,le,de){let he=!1;const I=v(le,ce,F);c!==I&&(c=I,p(c.object)),he=M(U,le,ce,de),he&&E(U,le,ce,de),de!==null&&e.update(de,r.ELEMENT_ARRAY_BUFFER),(he||f)&&(f=!1,w(U,F,ce,le),de!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function m(){return r.createVertexArray()}function p(U){return r.bindVertexArray(U)}function g(U){return r.deleteVertexArray(U)}function v(U,F,ce){const le=ce.wireframe===!0;let de=s[U.id];de===void 0&&(de={},s[U.id]=de);let he=de[F.id];he===void 0&&(he={},de[F.id]=he);let I=he[le];return I===void 0&&(I=x(m()),he[le]=I),I}function x(U){const F=[],ce=[],le=[];for(let de=0;de<i;de++)F[de]=0,ce[de]=0,le[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ce,attributeDivisors:le,object:U,attributes:{},index:null}}function M(U,F,ce,le){const de=c.attributes,he=F.attributes;let I=0;const K=ce.getAttributes();for(const Z in K)if(K[Z].location>=0){const be=de[Z];let O=he[Z];if(O===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(O=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(O=U.instanceColor)),be===void 0||be.attribute!==O||O&&be.data!==O.data)return!0;I++}return c.attributesNum!==I||c.index!==le}function E(U,F,ce,le){const de={},he=F.attributes;let I=0;const K=ce.getAttributes();for(const Z in K)if(K[Z].location>=0){let be=he[Z];be===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(be=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(be=U.instanceColor));const O={};O.attribute=be,be&&be.data&&(O.data=be.data),de[Z]=O,I++}c.attributes=de,c.attributesNum=I,c.index=le}function b(){const U=c.newAttributes;for(let F=0,ce=U.length;F<ce;F++)U[F]=0}function S(U){_(U,0)}function _(U,F){const ce=c.newAttributes,le=c.enabledAttributes,de=c.attributeDivisors;ce[U]=1,le[U]===0&&(r.enableVertexAttribArray(U),le[U]=1),de[U]!==F&&(r.vertexAttribDivisor(U,F),de[U]=F)}function P(){const U=c.newAttributes,F=c.enabledAttributes;for(let ce=0,le=F.length;ce<le;ce++)F[ce]!==U[ce]&&(r.disableVertexAttribArray(ce),F[ce]=0)}function L(U,F,ce,le,de,he,I){I===!0?r.vertexAttribIPointer(U,F,ce,de,he):r.vertexAttribPointer(U,F,ce,le,de,he)}function w(U,F,ce,le){b();const de=le.attributes,he=ce.getAttributes(),I=F.defaultAttributeValues;for(const K in he){const Z=he[K];if(Z.location>=0){let Se=de[K];if(Se===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(Se=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(Se=U.instanceColor)),Se!==void 0){const be=Se.normalized,O=Se.itemSize,ie=e.get(Se);if(ie===void 0)continue;const Te=ie.buffer,Ce=ie.type,J=ie.bytesPerElement,xe=Ce===r.INT||Ce===r.UNSIGNED_INT||Se.gpuType===$h;if(Se.isInterleavedBufferAttribute){const _e=Se.data,Ge=_e.stride,ze=Se.offset;if(_e.isInstancedInterleavedBuffer){for(let nt=0;nt<Z.locationSize;nt++)_(Z.location+nt,_e.meshPerAttribute);U.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let nt=0;nt<Z.locationSize;nt++)S(Z.location+nt);r.bindBuffer(r.ARRAY_BUFFER,Te);for(let nt=0;nt<Z.locationSize;nt++)L(Z.location+nt,O/Z.locationSize,Ce,be,Ge*J,(ze+O/Z.locationSize*nt)*J,xe)}else{if(Se.isInstancedBufferAttribute){for(let _e=0;_e<Z.locationSize;_e++)_(Z.location+_e,Se.meshPerAttribute);U.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let _e=0;_e<Z.locationSize;_e++)S(Z.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Te);for(let _e=0;_e<Z.locationSize;_e++)L(Z.location+_e,O/Z.locationSize,Ce,be,O*J,O/Z.locationSize*_e*J,xe)}}else if(I!==void 0){const be=I[K];if(be!==void 0)switch(be.length){case 2:r.vertexAttrib2fv(Z.location,be);break;case 3:r.vertexAttrib3fv(Z.location,be);break;case 4:r.vertexAttrib4fv(Z.location,be);break;default:r.vertexAttrib1fv(Z.location,be)}}}}P()}function H(){j();for(const U in s){const F=s[U];for(const ce in F){const le=F[ce];for(const de in le)g(le[de].object),delete le[de];delete F[ce]}delete s[U]}}function V(U){if(s[U.id]===void 0)return;const F=s[U.id];for(const ce in F){const le=F[ce];for(const de in le)g(le[de].object),delete le[de];delete F[ce]}delete s[U.id]}function z(U){for(const F in s){const ce=s[F];if(ce[U.id]===void 0)continue;const le=ce[U.id];for(const de in le)g(le[de].object),delete le[de];delete ce[U.id]}}function j(){D(),f=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:D,dispose:H,releaseStatesOfGeometry:V,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:S,disableUnusedAttributes:P}}function cR(r,e,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function f(p,g,v){v!==0&&(r.drawArraysInstanced(s,p,g,v),i.update(g,s,v))}function h(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let M=0;for(let E=0;E<v;E++)M+=g[E];i.update(M,s,1)}function m(p,g,v,x){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)f(p[E],g[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,v);let E=0;for(let b=0;b<v;b++)E+=g[b]*x[b];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function uR(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Si&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const j=z===il&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Bi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==da&&!j)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,V=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:P,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:H,maxSamples:V}}function fR(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Er,h=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||s!==0||l;return l=x,s=v.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const E=v.clippingPlanes,b=v.clipIntersection,S=v.clipShadows,_=r.get(v);if(!l||E===null||E.length===0||c&&!S)c?g(null):p();else{const P=c?0:s,L=P*4;let w=_.clippingState||null;m.value=w,w=g(E,x,L,M);for(let H=0;H!==L;++H)w[H]=i[H];_.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(v,x,M,E){const b=v!==null?v.length:0;let S=null;if(b!==0){if(S=m.value,E!==!0||S===null){const _=M+b*4,P=x.matrixWorldInverse;h.getNormalMatrix(P),(S===null||S.length<_)&&(S=new Float32Array(_));for(let L=0,w=M;L!==b;++L,w+=4)f.copy(v[L]).applyMatrix4(P,h),f.normal.toArray(S,w),S[w+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,S}}function dR(r){let e=new WeakMap;function i(f,h){return h===fh?f.mapping=Is:h===dh&&(f.mapping=Bs),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===fh||h===dh)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new lb(m.height);return p.fromEquirectangularTexture(r,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const ws=4,k_=[.125,.215,.35,.446,.526,.582],Ar=20,Yd=new _x,X_=new Et;let Zd=null,Kd=0,Qd=0,Jd=!1;const Tr=(1+Math.sqrt(5))/2,Rs=1/Tr,j_=[new se(-Tr,Rs,0),new se(Tr,Rs,0),new se(-Rs,0,Tr),new se(Rs,0,Tr),new se(0,Tr,-Rs),new se(0,Tr,Rs),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)],hR=new se;class W_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=hR}=c;Zd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zd,Kd,Qd),this._renderer.xr.enabled=Jd,e.scissorTest=!1,Fc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Is||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:il,format:Si,colorSpace:Fs,depthBuffer:!1},l=q_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=q_(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pR(c)),this._blurMaterial=mR(c,e,i)}return l}_compileMaterial(e){const i=new Mi(this._lodPlanes[0],e);this._renderer.compile(i,Yd)}_sceneToCubeUV(e,i,s,l,c){const m=new di(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(X_),v.toneMapping=Ya,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const b=new lp({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),S=new Mi(new ol,b);let _=!1;const P=e.background;P?P.isColor&&(b.color.copy(P),e.background=null,_=!0):(b.color.copy(X_),_=!0);for(let L=0;L<6;L++){const w=L%3;w===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[L],c.y,c.z)):w===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[L]));const H=this._cubeSize;Fc(l,w*H,L>2?H:0,H,H),v.setRenderTarget(l),_&&v.render(S,m),v.render(e,m)}S.geometry.dispose(),S.material.dispose(),v.toneMapping=M,v.autoClear=x,e.background=P}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Is||e.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Y_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Mi(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Fc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Yd)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=j_[(l-c-1)%j_.length];this._blur(e,c-1,c,f,h)}i.autoClear=s}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Mi(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ar-1),b=c/E,S=isFinite(c)?1+Math.floor(g*b):Ar;S>Ar&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ar}`);const _=[];let P=0;for(let z=0;z<Ar;++z){const j=z/b,D=Math.exp(-j*j/2);_.push(D),z===0?P+=D:z<S&&(P+=2*D)}for(let z=0;z<_.length;z++)_[z]=_[z]/P;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-s;const w=this._sizeLods[l],H=3*w*(l>L-ws?l-L+ws:0),V=4*(this._cubeSize-w);Fc(i,H,V,3*w,2*w),m.setRenderTarget(i),m.render(v,Yd)}}function pR(r){const e=[],i=[],s=[];let l=r;const c=r-ws+1+k_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let m=1/h;f>r-ws?m=k_[f-r+ws-1]:f===0&&(m=0),s.push(m);const p=1/(h-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,E=6,b=3,S=2,_=1,P=new Float32Array(b*E*M),L=new Float32Array(S*E*M),w=new Float32Array(_*E*M);for(let V=0;V<M;V++){const z=V%3*2/3-1,j=V>2?0:-1,D=[z,j,0,z+2/3,j,0,z+2/3,j+1,0,z,j,0,z+2/3,j+1,0,z,j+1,0];P.set(D,b*E*V),L.set(x,S*E*V);const U=[V,V,V,V,V,V];w.set(U,_*E*V)}const H=new Qa;H.setAttribute("position",new Pi(P,b)),H.setAttribute("uv",new Pi(L,S)),H.setAttribute("faceIndex",new Pi(w,_)),e.push(H),l>ws&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function q_(r,e,i){const s=new Dr(r,e,i);return s.texture.mapping=nu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Fc(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function mR(r,e,i){const s=new Float32Array(Ar),l=new se(0,1,0);return new Ka({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:fp(),fragmentShader:`

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
		`,blending:qa,depthTest:!1,depthWrite:!1})}function Y_(){return new Ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fp(),fragmentShader:`

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
		`,blending:qa,depthTest:!1,depthWrite:!1})}function Z_(){return new Ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function fp(){return`

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
	`}function gR(r){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===fh||m===dh,g=m===Is||m===Bs;if(p||g){let v=e.get(h);const x=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new W_(r)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),v.texture;if(v!==void 0)return v.texture;{const M=h.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new W_(r)),v=p?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function vR(r){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Ls("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function _R(r,e,i,s){const l={},c=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(v,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)e.update(x[M],r.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,E=v.attributes.position;let b=0;if(M!==null){const P=M.array;b=M.version;for(let L=0,w=P.length;L<w;L+=3){const H=P[L+0],V=P[L+1],z=P[L+2];x.push(H,V,V,z,z,H)}}else if(E!==void 0){const P=E.array;b=E.version;for(let L=0,w=P.length/3-1;L<w;L+=3){const H=L+0,V=L+1,z=L+2;x.push(H,V,V,z,z,H)}}else return;const S=new(ox(x)?dx:fx)(x,1);S.version=b;const _=c.get(v);_&&e.remove(_),c.set(v,S)}function g(v){const x=c.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function xR(r,e,i){let s;function l(x){s=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,M){r.drawElements(s,M,c,x*f),i.update(M,s,1)}function p(x,M,E){E!==0&&(r.drawElementsInstanced(s,M,c,x*f,E),i.update(M,s,E))}function g(x,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,x,0,E);let S=0;for(let _=0;_<E;_++)S+=M[_];i.update(S,s,1)}function v(x,M,E,b){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)p(x[_]/f,M[_],b[_]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,c,x,0,b,0,E);let _=0;for(let P=0;P<E;P++)_+=M[P]*b[P];i.update(_,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function yR(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function SR(r,e,i){const s=new WeakMap,l=new en;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=s.get(h);if(x===void 0||x.count!==v){let U=function(){j.dispose(),s.delete(h),h.removeEventListener("dispose",U)};var M=U;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let w=0;E===!0&&(w=1),b===!0&&(w=2),S===!0&&(w=3);let H=h.attributes.position.count*w,V=1;H>e.maxTextureSize&&(V=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const z=new Float32Array(H*V*4*v),j=new lx(z,H,V,v);j.type=da,j.needsUpdate=!0;const D=w*4;for(let F=0;F<v;F++){const ce=_[F],le=P[F],de=L[F],he=H*V*4*F;for(let I=0;I<ce.count;I++){const K=I*D;E===!0&&(l.fromBufferAttribute(ce,I),z[he+K+0]=l.x,z[he+K+1]=l.y,z[he+K+2]=l.z,z[he+K+3]=0),b===!0&&(l.fromBufferAttribute(le,I),z[he+K+4]=l.x,z[he+K+5]=l.y,z[he+K+6]=l.z,z[he+K+7]=0),S===!0&&(l.fromBufferAttribute(de,I),z[he+K+8]=l.x,z[he+K+9]=l.y,z[he+K+10]=l.z,z[he+K+11]=de.itemSize===4?l.w:1)}}x={count:v,texture:j,size:new Ut(H,V)},s.set(h,x),h.addEventListener("dispose",U)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const b=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",b),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function MR(r,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const yx=new zn,K_=new gx(1,1),Sx=new lx,Mx=new XT,Ex=new mx,Q_=[],J_=[],$_=new Float32Array(16),e0=new Float32Array(9),t0=new Float32Array(4);function js(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Q_[l];if(c===void 0&&(c=new Float32Array(l),Q_[l]=c),e!==0){s.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,r[f].toArray(c,h)}return c}function pn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function mn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function au(r,e){let i=J_[e];i===void 0&&(i=new Int32Array(e),J_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function ER(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function TR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;r.uniform2fv(this.addr,e),mn(i,e)}}function bR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pn(i,e))return;r.uniform3fv(this.addr,e),mn(i,e)}}function AR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;r.uniform4fv(this.addr,e),mn(i,e)}}function RR(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(pn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,s))return;t0.set(s),r.uniformMatrix2fv(this.addr,!1,t0),mn(i,s)}}function CR(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(pn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,s))return;e0.set(s),r.uniformMatrix3fv(this.addr,!1,e0),mn(i,s)}}function wR(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(pn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,s))return;$_.set(s),r.uniformMatrix4fv(this.addr,!1,$_),mn(i,s)}}function DR(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function UR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;r.uniform2iv(this.addr,e),mn(i,e)}}function LR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;r.uniform3iv(this.addr,e),mn(i,e)}}function NR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;r.uniform4iv(this.addr,e),mn(i,e)}}function OR(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function PR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;r.uniform2uiv(this.addr,e),mn(i,e)}}function zR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;r.uniform3uiv(this.addr,e),mn(i,e)}}function IR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;r.uniform4uiv(this.addr,e),mn(i,e)}}function BR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(K_.compareFunction=sx,c=K_):c=yx,i.setTexture2D(e||c,l)}function FR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Mx,l)}function HR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Ex,l)}function GR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Sx,l)}function VR(r){switch(r){case 5126:return ER;case 35664:return TR;case 35665:return bR;case 35666:return AR;case 35674:return RR;case 35675:return CR;case 35676:return wR;case 5124:case 35670:return DR;case 35667:case 35671:return UR;case 35668:case 35672:return LR;case 35669:case 35673:return NR;case 5125:return OR;case 36294:return PR;case 36295:return zR;case 36296:return IR;case 35678:case 36198:case 36298:case 36306:case 35682:return BR;case 35679:case 36299:case 36307:return FR;case 35680:case 36300:case 36308:case 36293:return HR;case 36289:case 36303:case 36311:case 36292:return GR}}function kR(r,e){r.uniform1fv(this.addr,e)}function XR(r,e){const i=js(e,this.size,2);r.uniform2fv(this.addr,i)}function jR(r,e){const i=js(e,this.size,3);r.uniform3fv(this.addr,i)}function WR(r,e){const i=js(e,this.size,4);r.uniform4fv(this.addr,i)}function qR(r,e){const i=js(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function YR(r,e){const i=js(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function ZR(r,e){const i=js(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function KR(r,e){r.uniform1iv(this.addr,e)}function QR(r,e){r.uniform2iv(this.addr,e)}function JR(r,e){r.uniform3iv(this.addr,e)}function $R(r,e){r.uniform4iv(this.addr,e)}function eC(r,e){r.uniform1uiv(this.addr,e)}function tC(r,e){r.uniform2uiv(this.addr,e)}function nC(r,e){r.uniform3uiv(this.addr,e)}function iC(r,e){r.uniform4uiv(this.addr,e)}function aC(r,e,i){const s=this.cache,l=e.length,c=au(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||yx,c[f])}function rC(r,e,i){const s=this.cache,l=e.length,c=au(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Mx,c[f])}function sC(r,e,i){const s=this.cache,l=e.length,c=au(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Ex,c[f])}function oC(r,e,i){const s=this.cache,l=e.length,c=au(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Sx,c[f])}function lC(r){switch(r){case 5126:return kR;case 35664:return XR;case 35665:return jR;case 35666:return WR;case 35674:return qR;case 35675:return YR;case 35676:return ZR;case 5124:case 35670:return KR;case 35667:case 35671:return QR;case 35668:case 35672:return JR;case 35669:case 35673:return $R;case 5125:return eC;case 36294:return tC;case 36295:return nC;case 36296:return iC;case 35678:case 36198:case 36298:case 36306:case 35682:return aC;case 35679:case 36299:case 36307:return rC;case 35680:case 36300:case 36308:case 36293:return sC;case 36289:case 36303:case 36311:case 36292:return oC}}class cC{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=VR(i.type)}}class uC{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=lC(i.type)}}class fC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const $d=/(\w+)(\])?(\[|\.)?/g;function n0(r,e){r.seq.push(e),r.map[e.id]=e}function dC(r,e,i){const s=r.name,l=s.length;for($d.lastIndex=0;;){const c=$d.exec(s),f=$d.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){n0(i,p===void 0?new cC(h,r,e):new uC(h,r,e));break}else{let v=i.map[h];v===void 0&&(v=new fC(h),n0(i,v)),i=v}}}class Yc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);dC(c,f,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function i0(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const hC=37297;let pC=0;function mC(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const a0=new ut;function gC(r){wt._getMatrix(a0,wt.workingColorSpace,r);const e=`mat3( ${a0.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(r)){case Kc:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function r0(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+mC(r.getShaderSource(e),h)}else return c}function vC(r,e){const i=gC(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function _C(r,e){let i;switch(e){case iT:i="Linear";break;case aT:i="Reinhard";break;case rT:i="Cineon";break;case sT:i="ACESFilmic";break;case lT:i="AgX";break;case cT:i="Neutral";break;case oT:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Hc=new se;function xC(){wt.getLuminanceCoefficients(Hc);const r=Hc.x.toFixed(4),e=Hc.y.toFixed(4),i=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function SC(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function MC(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:h}}return i}function jo(r){return r!==""}function s0(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const EC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(r){return r.replace(EC,bC)}const TC=new Map;function bC(r,e){let i=ft[e];if(i===void 0){const s=TC.get(e);if(s!==void 0)i=ft[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Gh(i)}const AC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l0(r){return r.replace(AC,RC)}function RC(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function c0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CC(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Z0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===zE?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ua&&(e="SHADOWMAP_TYPE_VSM"),e}function wC(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Is:case Bs:e="ENVMAP_TYPE_CUBE";break;case nu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DC(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Bs&&(e="ENVMAP_MODE_REFRACTION"),e}function UC(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Jh:e="ENVMAP_BLENDING_MULTIPLY";break;case tT:e="ENVMAP_BLENDING_MIX";break;case nT:e="ENVMAP_BLENDING_ADD";break}return e}function LC(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function NC(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=CC(i),p=wC(i),g=DC(i),v=UC(i),x=LC(i),M=yC(i),E=SC(c),b=l.createProgram();let S,_,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(jo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(jo).join(`
`),_.length>0&&(_+=`
`)):(S=[c0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),_=[c0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ya?"#define TONE_MAPPING":"",i.toneMapping!==Ya?ft.tonemapping_pars_fragment:"",i.toneMapping!==Ya?_C("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,vC("linearToOutputTexel",i.outputColorSpace),xC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(jo).join(`
`)),f=Gh(f),f=s0(f,i),f=o0(f,i),h=Gh(h),h=s0(h,i),h=o0(h,i),f=l0(f),h=l0(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===x_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===x_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=P+S+f,w=P+_+h,H=i0(l,l.VERTEX_SHADER,L),V=i0(l,l.FRAGMENT_SHADER,w);l.attachShader(b,H),l.attachShader(b,V),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function z(F){if(r.debug.checkShaderErrors){const ce=l.getProgramInfoLog(b)||"",le=l.getShaderInfoLog(H)||"",de=l.getShaderInfoLog(V)||"",he=ce.trim(),I=le.trim(),K=de.trim();let Z=!0,Se=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,b,H,V);else{const be=r0(l,H,"vertex"),O=r0(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+he+`
`+be+`
`+O)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(I===""||K==="")&&(Se=!1);Se&&(F.diagnostics={runnable:Z,programLog:he,vertexShader:{log:I,prefix:S},fragmentShader:{log:K,prefix:_}})}l.deleteShader(H),l.deleteShader(V),j=new Yc(l,b),D=MC(l,b)}let j;this.getUniforms=function(){return j===void 0&&z(this),j};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=l.getProgramParameter(b,hC)),U},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=pC++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=H,this.fragmentShader=V,this}let OC=0;class PC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new zC(e),i.set(e,s)),s}}class zC{constructor(e){this.id=OC++,this.code=e,this.usedTimes=0}}function IC(r,e,i,s,l,c,f){const h=new cx,m=new PC,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,U,F,ce,le){const de=ce.fog,he=le.geometry,I=D.isMeshStandardMaterial?ce.environment:null,K=(D.isMeshStandardMaterial?i:e).get(D.envMap||I),Z=K&&K.mapping===nu?K.image.height:null,Se=E[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const be=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,O=be!==void 0?be.length:0;let ie=0;he.morphAttributes.position!==void 0&&(ie=1),he.morphAttributes.normal!==void 0&&(ie=2),he.morphAttributes.color!==void 0&&(ie=3);let Te,Ce,J,xe;if(Se){const bt=Li[Se];Te=bt.vertexShader,Ce=bt.fragmentShader}else Te=D.vertexShader,Ce=D.fragmentShader,m.update(D),J=m.getVertexShaderID(D),xe=m.getFragmentShaderID(D);const _e=r.getRenderTarget(),Ge=r.state.buffers.depth.getReversed(),ze=le.isInstancedMesh===!0,nt=le.isBatchedMesh===!0,Xt=!!D.map,ht=!!D.matcap,G=!!K,Tt=!!D.aoMap,$e=!!D.lightMap,St=!!D.bumpMap,Ke=!!D.normalMap,Gt=!!D.displacementMap,Fe=!!D.emissiveMap,st=!!D.metalnessMap,Qt=!!D.roughnessMap,Zt=D.anisotropy>0,N=D.clearcoat>0,T=D.dispersion>0,te=D.iridescence>0,pe=D.sheen>0,Me=D.transmission>0,ue=Zt&&!!D.anisotropyMap,Ye=N&&!!D.clearcoatMap,we=N&&!!D.clearcoatNormalMap,We=N&&!!D.clearcoatRoughnessMap,qe=te&&!!D.iridescenceMap,Ae=te&&!!D.iridescenceThicknessMap,De=pe&&!!D.sheenColorMap,Ze=pe&&!!D.sheenRoughnessMap,Ie=!!D.specularMap,Le=!!D.specularColorMap,ot=!!D.specularIntensityMap,X=Me&&!!D.transmissionMap,Re=Me&&!!D.thicknessMap,Ue=!!D.gradientMap,Be=!!D.alphaMap,Ee=D.alphaTest>0,ve=!!D.alphaHash,He=!!D.extensions;let at=Ya;D.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(at=r.toneMapping);const Ot={shaderID:Se,shaderType:D.type,shaderName:D.name,vertexShader:Te,fragmentShader:Ce,defines:D.defines,customVertexShaderID:J,customFragmentShaderID:xe,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:nt,batchingColor:nt&&le._colorsTexture!==null,instancing:ze,instancingColor:ze&&le.instanceColor!==null,instancingMorph:ze&&le.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Fs,alphaToCoverage:!!D.alphaToCoverage,map:Xt,matcap:ht,envMap:G,envMapMode:G&&K.mapping,envMapCubeUVHeight:Z,aoMap:Tt,lightMap:$e,bumpMap:St,normalMap:Ke,displacementMap:x&&Gt,emissiveMap:Fe,normalMapObjectSpace:Ke&&D.normalMapType===hT,normalMapTangentSpace:Ke&&D.normalMapType===rx,metalnessMap:st,roughnessMap:Qt,anisotropy:Zt,anisotropyMap:ue,clearcoat:N,clearcoatMap:Ye,clearcoatNormalMap:we,clearcoatRoughnessMap:We,dispersion:T,iridescence:te,iridescenceMap:qe,iridescenceThicknessMap:Ae,sheen:pe,sheenColorMap:De,sheenRoughnessMap:Ze,specularMap:Ie,specularColorMap:Le,specularIntensityMap:ot,transmission:Me,transmissionMap:X,thicknessMap:Re,gradientMap:Ue,opaque:D.transparent===!1&&D.blending===Us&&D.alphaToCoverage===!1,alphaMap:Be,alphaTest:Ee,alphaHash:ve,combine:D.combine,mapUv:Xt&&b(D.map.channel),aoMapUv:Tt&&b(D.aoMap.channel),lightMapUv:$e&&b(D.lightMap.channel),bumpMapUv:St&&b(D.bumpMap.channel),normalMapUv:Ke&&b(D.normalMap.channel),displacementMapUv:Gt&&b(D.displacementMap.channel),emissiveMapUv:Fe&&b(D.emissiveMap.channel),metalnessMapUv:st&&b(D.metalnessMap.channel),roughnessMapUv:Qt&&b(D.roughnessMap.channel),anisotropyMapUv:ue&&b(D.anisotropyMap.channel),clearcoatMapUv:Ye&&b(D.clearcoatMap.channel),clearcoatNormalMapUv:we&&b(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&b(D.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&b(D.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&b(D.iridescenceThicknessMap.channel),sheenColorMapUv:De&&b(D.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&b(D.sheenRoughnessMap.channel),specularMapUv:Ie&&b(D.specularMap.channel),specularColorMapUv:Le&&b(D.specularColorMap.channel),specularIntensityMapUv:ot&&b(D.specularIntensityMap.channel),transmissionMapUv:X&&b(D.transmissionMap.channel),thicknessMapUv:Re&&b(D.thicknessMap.channel),alphaMapUv:Be&&b(D.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(Ke||Zt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!he.attributes.uv&&(Xt||Be),fog:!!de,useFog:D.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ge,skinning:le.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ie,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:at,decodeVideoTexture:Xt&&D.map.isVideoTexture===!0&&wt.getTransfer(D.map.colorSpace)===Ht,decodeVideoTextureEmissive:Fe&&D.emissiveMap.isVideoTexture===!0&&wt.getTransfer(D.emissiveMap.colorSpace)===Ht,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===fa,flipSided:D.side===Pn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:He&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&D.extensions.multiDraw===!0||nt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ot.vertexUv1s=p.has(1),Ot.vertexUv2s=p.has(2),Ot.vertexUv3s=p.has(3),p.clear(),Ot}function _(D){const U=[];if(D.shaderID?U.push(D.shaderID):(U.push(D.customVertexShaderID),U.push(D.customFragmentShaderID)),D.defines!==void 0)for(const F in D.defines)U.push(F),U.push(D.defines[F]);return D.isRawShaderMaterial===!1&&(P(U,D),L(U,D),U.push(r.outputColorSpace)),U.push(D.customProgramCacheKey),U.join()}function P(D,U){D.push(U.precision),D.push(U.outputColorSpace),D.push(U.envMapMode),D.push(U.envMapCubeUVHeight),D.push(U.mapUv),D.push(U.alphaMapUv),D.push(U.lightMapUv),D.push(U.aoMapUv),D.push(U.bumpMapUv),D.push(U.normalMapUv),D.push(U.displacementMapUv),D.push(U.emissiveMapUv),D.push(U.metalnessMapUv),D.push(U.roughnessMapUv),D.push(U.anisotropyMapUv),D.push(U.clearcoatMapUv),D.push(U.clearcoatNormalMapUv),D.push(U.clearcoatRoughnessMapUv),D.push(U.iridescenceMapUv),D.push(U.iridescenceThicknessMapUv),D.push(U.sheenColorMapUv),D.push(U.sheenRoughnessMapUv),D.push(U.specularMapUv),D.push(U.specularColorMapUv),D.push(U.specularIntensityMapUv),D.push(U.transmissionMapUv),D.push(U.thicknessMapUv),D.push(U.combine),D.push(U.fogExp2),D.push(U.sizeAttenuation),D.push(U.morphTargetsCount),D.push(U.morphAttributeCount),D.push(U.numDirLights),D.push(U.numPointLights),D.push(U.numSpotLights),D.push(U.numSpotLightMaps),D.push(U.numHemiLights),D.push(U.numRectAreaLights),D.push(U.numDirLightShadows),D.push(U.numPointLightShadows),D.push(U.numSpotLightShadows),D.push(U.numSpotLightShadowsWithMaps),D.push(U.numLightProbes),D.push(U.shadowMapType),D.push(U.toneMapping),D.push(U.numClippingPlanes),D.push(U.numClipIntersection),D.push(U.depthPacking)}function L(D,U){h.disableAll(),U.supportsVertexTextures&&h.enable(0),U.instancing&&h.enable(1),U.instancingColor&&h.enable(2),U.instancingMorph&&h.enable(3),U.matcap&&h.enable(4),U.envMap&&h.enable(5),U.normalMapObjectSpace&&h.enable(6),U.normalMapTangentSpace&&h.enable(7),U.clearcoat&&h.enable(8),U.iridescence&&h.enable(9),U.alphaTest&&h.enable(10),U.vertexColors&&h.enable(11),U.vertexAlphas&&h.enable(12),U.vertexUv1s&&h.enable(13),U.vertexUv2s&&h.enable(14),U.vertexUv3s&&h.enable(15),U.vertexTangents&&h.enable(16),U.anisotropy&&h.enable(17),U.alphaHash&&h.enable(18),U.batching&&h.enable(19),U.dispersion&&h.enable(20),U.batchingColor&&h.enable(21),U.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),U.fog&&h.enable(0),U.useFog&&h.enable(1),U.flatShading&&h.enable(2),U.logarithmicDepthBuffer&&h.enable(3),U.reversedDepthBuffer&&h.enable(4),U.skinning&&h.enable(5),U.morphTargets&&h.enable(6),U.morphNormals&&h.enable(7),U.morphColors&&h.enable(8),U.premultipliedAlpha&&h.enable(9),U.shadowMapEnabled&&h.enable(10),U.doubleSided&&h.enable(11),U.flipSided&&h.enable(12),U.useDepthPacking&&h.enable(13),U.dithering&&h.enable(14),U.transmission&&h.enable(15),U.sheen&&h.enable(16),U.opaque&&h.enable(17),U.pointsUvs&&h.enable(18),U.decodeVideoTexture&&h.enable(19),U.decodeVideoTextureEmissive&&h.enable(20),U.alphaToCoverage&&h.enable(21),D.push(h.mask)}function w(D){const U=E[D.type];let F;if(U){const ce=Li[U];F=ab.clone(ce.uniforms)}else F=D.uniforms;return F}function H(D,U){let F;for(let ce=0,le=g.length;ce<le;ce++){const de=g[ce];if(de.cacheKey===U){F=de,++F.usedTimes;break}}return F===void 0&&(F=new NC(r,U,D,c),g.push(F)),F}function V(D){if(--D.usedTimes===0){const U=g.indexOf(D);g[U]=g[g.length-1],g.pop(),D.destroy()}}function z(D){m.remove(D)}function j(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:w,acquireProgram:H,releaseProgram:V,releaseShaderCache:z,programs:g,dispose:j}}function BC(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function FC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function u0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function f0(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(v,x,M,E,b,S){let _=r[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:E,renderOrder:v.renderOrder,z:b,group:S},r[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=b,_.group=S),e++,_}function h(v,x,M,E,b,S){const _=f(v,x,M,E,b,S);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,x,M,E,b,S){const _=f(v,x,M,E,b,S);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||FC),s.length>1&&s.sort(x||u0),l.length>1&&l.sort(x||u0)}function g(){for(let v=e,x=r.length;v<x;v++){const M=r[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function HC(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new f0,r.set(s,[f])):l>=c.length?(f=new f0,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function GC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new se,color:new Et};break;case"SpotLight":i={position:new se,direction:new se,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new se,color:new Et,distance:0,decay:0};break;case"HemisphereLight":i={direction:new se,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":i={color:new Et,position:new se,halfWidth:new se,halfHeight:new se};break}return r[e.id]=i,i}}}function VC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let kC=0;function XC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function jC(r){const e=new GC,i=VC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new se);const l=new se,c=new rn,f=new rn;function h(p){let g=0,v=0,x=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,E=0,b=0,S=0,_=0,P=0,L=0,w=0,H=0,V=0,z=0;p.sort(XC);for(let D=0,U=p.length;D<U;D++){const F=p[D],ce=F.color,le=F.intensity,de=F.distance,he=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=ce.r*le,v+=ce.g*le,x+=ce.b*le;else if(F.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(F.sh.coefficients[I],le);z++}else if(F.isDirectionalLight){const I=e.get(F);if(I.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const K=F.shadow,Z=i.get(F);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.directionalShadow[M]=Z,s.directionalShadowMap[M]=he,s.directionalShadowMatrix[M]=F.shadow.matrix,P++}s.directional[M]=I,M++}else if(F.isSpotLight){const I=e.get(F);I.position.setFromMatrixPosition(F.matrixWorld),I.color.copy(ce).multiplyScalar(le),I.distance=de,I.coneCos=Math.cos(F.angle),I.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),I.decay=F.decay,s.spot[b]=I;const K=F.shadow;if(F.map&&(s.spotLightMap[H]=F.map,H++,K.updateMatrices(F),F.castShadow&&V++),s.spotLightMatrix[b]=K.matrix,F.castShadow){const Z=i.get(F);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.spotShadow[b]=Z,s.spotShadowMap[b]=he,w++}b++}else if(F.isRectAreaLight){const I=e.get(F);I.color.copy(ce).multiplyScalar(le),I.halfWidth.set(F.width*.5,0,0),I.halfHeight.set(0,F.height*.5,0),s.rectArea[S]=I,S++}else if(F.isPointLight){const I=e.get(F);if(I.color.copy(F.color).multiplyScalar(F.intensity),I.distance=F.distance,I.decay=F.decay,F.castShadow){const K=F.shadow,Z=i.get(F);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,s.pointShadow[E]=Z,s.pointShadowMap[E]=he,s.pointShadowMatrix[E]=F.shadow.matrix,L++}s.point[E]=I,E++}else if(F.isHemisphereLight){const I=e.get(F);I.skyColor.copy(F.color).multiplyScalar(le),I.groundColor.copy(F.groundColor).multiplyScalar(le),s.hemi[_]=I,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=x;const j=s.hash;(j.directionalLength!==M||j.pointLength!==E||j.spotLength!==b||j.rectAreaLength!==S||j.hemiLength!==_||j.numDirectionalShadows!==P||j.numPointShadows!==L||j.numSpotShadows!==w||j.numSpotMaps!==H||j.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=b,s.rectArea.length=S,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=w+H-V,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=z,j.directionalLength=M,j.pointLength=E,j.spotLength=b,j.rectAreaLength=S,j.hemiLength=_,j.numDirectionalShadows=P,j.numPointShadows=L,j.numSpotShadows=w,j.numSpotMaps=H,j.numLightProbes=z,s.version=kC++)}function m(p,g){let v=0,x=0,M=0,E=0,b=0;const S=g.matrixWorldInverse;for(let _=0,P=p.length;_<P;_++){const L=p[_];if(L.isDirectionalLight){const w=s.directional[v];w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),v++}else if(L.isSpotLight){const w=s.spot[M];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const w=s.rectArea[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),f.identity(),c.copy(L.matrixWorld),c.premultiply(S),f.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const w=s.point[x];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const w=s.hemi[b];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(S),b++}}}return{setup:h,setupView:m,state:s}}function d0(r){const e=new jC(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function h(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function WC(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new d0(r),e.set(l,[h])):c>=f.length?(h=new d0(r),f.push(h)):h=f[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const qC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YC=`uniform sampler2D shadow_pass;
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
}`;function ZC(r,e,i){let s=new cp;const l=new Ut,c=new Ut,f=new en,h=new mb({depthPacking:dT}),m=new gb,p={},g=i.maxTextureSize,v={[Za]:Pn,[Pn]:Za,[fa]:fa},x=new Ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:qC,fragmentShader:YC}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new Qa;E.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Mi(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Z0;let _=this.type;this.render=function(V,z,j){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||V.length===0)return;const D=r.getRenderTarget(),U=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),ce=r.state;ce.setBlending(qa),ce.buffers.depth.getReversed()?ce.buffers.color.setClear(0,0,0,0):ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const le=_!==ua&&this.type===ua,de=_===ua&&this.type!==ua;for(let he=0,I=V.length;he<I;he++){const K=V[he],Z=K.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const Se=Z.getFrameExtents();if(l.multiply(Se),c.copy(Z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Se.x),l.x=c.x*Se.x,Z.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Se.y),l.y=c.y*Se.y,Z.mapSize.y=c.y)),Z.map===null||le===!0||de===!0){const O=this.type!==ua?{minFilter:Ti,magFilter:Ti}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Dr(l.x,l.y,O),Z.map.texture.name=K.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const be=Z.getViewportCount();for(let O=0;O<be;O++){const ie=Z.getViewport(O);f.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),ce.viewport(f),Z.updateMatrices(K,O),s=Z.getFrustum(),w(z,j,Z.camera,K,this.type)}Z.isPointLightShadow!==!0&&this.type===ua&&P(Z,j),Z.needsUpdate=!1}_=this.type,S.needsUpdate=!1,r.setRenderTarget(D,U,F)};function P(V,z){const j=e.update(b);x.defines.VSM_SAMPLES!==V.blurSamples&&(x.defines.VSM_SAMPLES=V.blurSamples,M.defines.VSM_SAMPLES=V.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Dr(l.x,l.y)),x.uniforms.shadow_pass.value=V.map.texture,x.uniforms.resolution.value=V.mapSize,x.uniforms.radius.value=V.radius,r.setRenderTarget(V.mapPass),r.clear(),r.renderBufferDirect(z,null,j,x,b,null),M.uniforms.shadow_pass.value=V.mapPass.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,r.setRenderTarget(V.map),r.clear(),r.renderBufferDirect(z,null,j,M,b,null)}function L(V,z,j,D){let U=null;const F=j.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(F!==void 0)U=F;else if(U=j.isPointLight===!0?m:h,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ce=U.uuid,le=z.uuid;let de=p[ce];de===void 0&&(de={},p[ce]=de);let he=de[le];he===void 0&&(he=U.clone(),de[le]=he,z.addEventListener("dispose",H)),U=he}if(U.visible=z.visible,U.wireframe=z.wireframe,D===ua?U.side=z.shadowSide!==null?z.shadowSide:z.side:U.side=z.shadowSide!==null?z.shadowSide:v[z.side],U.alphaMap=z.alphaMap,U.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,U.map=z.map,U.clipShadows=z.clipShadows,U.clippingPlanes=z.clippingPlanes,U.clipIntersection=z.clipIntersection,U.displacementMap=z.displacementMap,U.displacementScale=z.displacementScale,U.displacementBias=z.displacementBias,U.wireframeLinewidth=z.wireframeLinewidth,U.linewidth=z.linewidth,j.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const ce=r.properties.get(U);ce.light=j}return U}function w(V,z,j,D,U){if(V.visible===!1)return;if(V.layers.test(z.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&U===ua)&&(!V.frustumCulled||s.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,V.matrixWorld);const le=e.update(V),de=V.material;if(Array.isArray(de)){const he=le.groups;for(let I=0,K=he.length;I<K;I++){const Z=he[I],Se=de[Z.materialIndex];if(Se&&Se.visible){const be=L(V,Se,D,U);V.onBeforeShadow(r,V,z,j,le,be,Z),r.renderBufferDirect(j,null,le,be,V,Z),V.onAfterShadow(r,V,z,j,le,be,Z)}}}else if(de.visible){const he=L(V,de,D,U);V.onBeforeShadow(r,V,z,j,le,he,null),r.renderBufferDirect(j,null,le,he,V,null),V.onAfterShadow(r,V,z,j,le,he,null)}}const ce=V.children;for(let le=0,de=ce.length;le<de;le++)w(ce[le],z,j,D,U)}function H(V){V.target.removeEventListener("dispose",H);for(const j in p){const D=p[j],U=V.target.uuid;U in D&&(D[U].dispose(),delete D[U])}}}const KC={[ah]:rh,[sh]:ch,[oh]:uh,[zs]:lh,[rh]:ah,[ch]:sh,[uh]:oh,[lh]:zs};function QC(r,e){function i(){let X=!1;const Re=new en;let Ue=null;const Be=new en(0,0,0,0);return{setMask:function(Ee){Ue!==Ee&&!X&&(r.colorMask(Ee,Ee,Ee,Ee),Ue=Ee)},setLocked:function(Ee){X=Ee},setClear:function(Ee,ve,He,at,Ot){Ot===!0&&(Ee*=at,ve*=at,He*=at),Re.set(Ee,ve,He,at),Be.equals(Re)===!1&&(r.clearColor(Ee,ve,He,at),Be.copy(Re))},reset:function(){X=!1,Ue=null,Be.set(-1,0,0,0)}}}function s(){let X=!1,Re=!1,Ue=null,Be=null,Ee=null;return{setReversed:function(ve){if(Re!==ve){const He=e.get("EXT_clip_control");ve?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Re=ve;const at=Ee;Ee=null,this.setClear(at)}},getReversed:function(){return Re},setTest:function(ve){ve?_e(r.DEPTH_TEST):Ge(r.DEPTH_TEST)},setMask:function(ve){Ue!==ve&&!X&&(r.depthMask(ve),Ue=ve)},setFunc:function(ve){if(Re&&(ve=KC[ve]),Be!==ve){switch(ve){case ah:r.depthFunc(r.NEVER);break;case rh:r.depthFunc(r.ALWAYS);break;case sh:r.depthFunc(r.LESS);break;case zs:r.depthFunc(r.LEQUAL);break;case oh:r.depthFunc(r.EQUAL);break;case lh:r.depthFunc(r.GEQUAL);break;case ch:r.depthFunc(r.GREATER);break;case uh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Be=ve}},setLocked:function(ve){X=ve},setClear:function(ve){Ee!==ve&&(Re&&(ve=1-ve),r.clearDepth(ve),Ee=ve)},reset:function(){X=!1,Ue=null,Be=null,Ee=null,Re=!1}}}function l(){let X=!1,Re=null,Ue=null,Be=null,Ee=null,ve=null,He=null,at=null,Ot=null;return{setTest:function(bt){X||(bt?_e(r.STENCIL_TEST):Ge(r.STENCIL_TEST))},setMask:function(bt){Re!==bt&&!X&&(r.stencilMask(bt),Re=bt)},setFunc:function(bt,Dn,ni){(Ue!==bt||Be!==Dn||Ee!==ni)&&(r.stencilFunc(bt,Dn,ni),Ue=bt,Be=Dn,Ee=ni)},setOp:function(bt,Dn,ni){(ve!==bt||He!==Dn||at!==ni)&&(r.stencilOp(bt,Dn,ni),ve=bt,He=Dn,at=ni)},setLocked:function(bt){X=bt},setClear:function(bt){Ot!==bt&&(r.clearStencil(bt),Ot=bt)},reset:function(){X=!1,Re=null,Ue=null,Be=null,Ee=null,ve=null,He=null,at=null,Ot=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,M=[],E=null,b=!1,S=null,_=null,P=null,L=null,w=null,H=null,V=null,z=new Et(0,0,0),j=0,D=!1,U=null,F=null,ce=null,le=null,de=null;const he=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,K=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),I=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),I=K>=2);let Se=null,be={};const O=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),Te=new en().fromArray(O),Ce=new en().fromArray(ie);function J(X,Re,Ue,Be){const Ee=new Uint8Array(4),ve=r.createTexture();r.bindTexture(X,ve),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<Ue;He++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,Be,0,r.RGBA,r.UNSIGNED_BYTE,Ee):r.texImage2D(Re+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ee);return ve}const xe={};xe[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),xe[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xe[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),_e(r.DEPTH_TEST),f.setFunc(zs),St(!1),Ke(h_),_e(r.CULL_FACE),Tt(qa);function _e(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function Ge(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function ze(X,Re){return v[X]!==Re?(r.bindFramebuffer(X,Re),v[X]=Re,X===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Re),X===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function nt(X,Re){let Ue=M,Be=!1;if(X){Ue=x.get(Re),Ue===void 0&&(Ue=[],x.set(Re,Ue));const Ee=X.textures;if(Ue.length!==Ee.length||Ue[0]!==r.COLOR_ATTACHMENT0){for(let ve=0,He=Ee.length;ve<He;ve++)Ue[ve]=r.COLOR_ATTACHMENT0+ve;Ue.length=Ee.length,Be=!0}}else Ue[0]!==r.BACK&&(Ue[0]=r.BACK,Be=!0);Be&&r.drawBuffers(Ue)}function Xt(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const ht={[br]:r.FUNC_ADD,[BE]:r.FUNC_SUBTRACT,[FE]:r.FUNC_REVERSE_SUBTRACT};ht[HE]=r.MIN,ht[GE]=r.MAX;const G={[VE]:r.ZERO,[kE]:r.ONE,[XE]:r.SRC_COLOR,[nh]:r.SRC_ALPHA,[KE]:r.SRC_ALPHA_SATURATE,[YE]:r.DST_COLOR,[WE]:r.DST_ALPHA,[jE]:r.ONE_MINUS_SRC_COLOR,[ih]:r.ONE_MINUS_SRC_ALPHA,[ZE]:r.ONE_MINUS_DST_COLOR,[qE]:r.ONE_MINUS_DST_ALPHA,[QE]:r.CONSTANT_COLOR,[JE]:r.ONE_MINUS_CONSTANT_COLOR,[$E]:r.CONSTANT_ALPHA,[eT]:r.ONE_MINUS_CONSTANT_ALPHA};function Tt(X,Re,Ue,Be,Ee,ve,He,at,Ot,bt){if(X===qa){b===!0&&(Ge(r.BLEND),b=!1);return}if(b===!1&&(_e(r.BLEND),b=!0),X!==IE){if(X!==S||bt!==D){if((_!==br||w!==br)&&(r.blendEquation(r.FUNC_ADD),_=br,w=br),bt)switch(X){case Us:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case p_:r.blendFunc(r.ONE,r.ONE);break;case m_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case g_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Us:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case p_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case m_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case g_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}P=null,L=null,H=null,V=null,z.set(0,0,0),j=0,S=X,D=bt}return}Ee=Ee||Re,ve=ve||Ue,He=He||Be,(Re!==_||Ee!==w)&&(r.blendEquationSeparate(ht[Re],ht[Ee]),_=Re,w=Ee),(Ue!==P||Be!==L||ve!==H||He!==V)&&(r.blendFuncSeparate(G[Ue],G[Be],G[ve],G[He]),P=Ue,L=Be,H=ve,V=He),(at.equals(z)===!1||Ot!==j)&&(r.blendColor(at.r,at.g,at.b,Ot),z.copy(at),j=Ot),S=X,D=!1}function $e(X,Re){X.side===fa?Ge(r.CULL_FACE):_e(r.CULL_FACE);let Ue=X.side===Pn;Re&&(Ue=!Ue),St(Ue),X.blending===Us&&X.transparent===!1?Tt(qa):Tt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Be=X.stencilWrite;h.setTest(Be),Be&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Fe(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):Ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function St(X){U!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),U=X)}function Ke(X){X!==OE?(_e(r.CULL_FACE),X!==F&&(X===h_?r.cullFace(r.BACK):X===PE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ge(r.CULL_FACE),F=X}function Gt(X){X!==ce&&(I&&r.lineWidth(X),ce=X)}function Fe(X,Re,Ue){X?(_e(r.POLYGON_OFFSET_FILL),(le!==Re||de!==Ue)&&(r.polygonOffset(Re,Ue),le=Re,de=Ue)):Ge(r.POLYGON_OFFSET_FILL)}function st(X){X?_e(r.SCISSOR_TEST):Ge(r.SCISSOR_TEST)}function Qt(X){X===void 0&&(X=r.TEXTURE0+he-1),Se!==X&&(r.activeTexture(X),Se=X)}function Zt(X,Re,Ue){Ue===void 0&&(Se===null?Ue=r.TEXTURE0+he-1:Ue=Se);let Be=be[Ue];Be===void 0&&(Be={type:void 0,texture:void 0},be[Ue]=Be),(Be.type!==X||Be.texture!==Re)&&(Se!==Ue&&(r.activeTexture(Ue),Se=Ue),r.bindTexture(X,Re||xe[X]),Be.type=X,Be.texture=Re)}function N(){const X=be[Se];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function te(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pe(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Me(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ue(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ye(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function we(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function We(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qe(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function De(X){Te.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Te.copy(X))}function Ze(X){Ce.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ce.copy(X))}function Ie(X,Re){let Ue=p.get(Re);Ue===void 0&&(Ue=new WeakMap,p.set(Re,Ue));let Be=Ue.get(X);Be===void 0&&(Be=r.getUniformBlockIndex(Re,X.name),Ue.set(X,Be))}function Le(X,Re){const Be=p.get(Re).get(X);m.get(Re)!==Be&&(r.uniformBlockBinding(Re,Be,X.__bindingPointIndex),m.set(Re,Be))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Se=null,be={},v={},x=new WeakMap,M=[],E=null,b=!1,S=null,_=null,P=null,L=null,w=null,H=null,V=null,z=new Et(0,0,0),j=0,D=!1,U=null,F=null,ce=null,le=null,de=null,Te.set(0,0,r.canvas.width,r.canvas.height),Ce.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:_e,disable:Ge,bindFramebuffer:ze,drawBuffers:nt,useProgram:Xt,setBlending:Tt,setMaterial:$e,setFlipSided:St,setCullFace:Ke,setLineWidth:Gt,setPolygonOffset:Fe,setScissorTest:st,activeTexture:Qt,bindTexture:Zt,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:te,texImage2D:qe,texImage3D:Ae,updateUBOMapping:Ie,uniformBlockBinding:Le,texStorage2D:we,texStorage3D:We,texSubImage2D:pe,texSubImage3D:Me,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ye,scissor:De,viewport:Ze,reset:ot}}function JC(r,e,i,s,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ut,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,T){return M?new OffscreenCanvas(N,T):$o("canvas")}function b(N,T,te){let pe=1;const Me=Zt(N);if((Me.width>te||Me.height>te)&&(pe=te/Math.max(Me.width,Me.height)),pe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ue=Math.floor(pe*Me.width),Ye=Math.floor(pe*Me.height);v===void 0&&(v=E(ue,Ye));const we=T?E(ue,Ye):v;return we.width=ue,we.height=Ye,we.getContext("2d").drawImage(N,0,0,ue,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+ue+"x"+Ye+")."),we}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),N;return N}function S(N){return N.generateMipmaps}function _(N){r.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(N,T,te,pe,Me=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ue=T;if(T===r.RED&&(te===r.FLOAT&&(ue=r.R32F),te===r.HALF_FLOAT&&(ue=r.R16F),te===r.UNSIGNED_BYTE&&(ue=r.R8)),T===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(ue=r.R8UI),te===r.UNSIGNED_SHORT&&(ue=r.R16UI),te===r.UNSIGNED_INT&&(ue=r.R32UI),te===r.BYTE&&(ue=r.R8I),te===r.SHORT&&(ue=r.R16I),te===r.INT&&(ue=r.R32I)),T===r.RG&&(te===r.FLOAT&&(ue=r.RG32F),te===r.HALF_FLOAT&&(ue=r.RG16F),te===r.UNSIGNED_BYTE&&(ue=r.RG8)),T===r.RG_INTEGER&&(te===r.UNSIGNED_BYTE&&(ue=r.RG8UI),te===r.UNSIGNED_SHORT&&(ue=r.RG16UI),te===r.UNSIGNED_INT&&(ue=r.RG32UI),te===r.BYTE&&(ue=r.RG8I),te===r.SHORT&&(ue=r.RG16I),te===r.INT&&(ue=r.RG32I)),T===r.RGB_INTEGER&&(te===r.UNSIGNED_BYTE&&(ue=r.RGB8UI),te===r.UNSIGNED_SHORT&&(ue=r.RGB16UI),te===r.UNSIGNED_INT&&(ue=r.RGB32UI),te===r.BYTE&&(ue=r.RGB8I),te===r.SHORT&&(ue=r.RGB16I),te===r.INT&&(ue=r.RGB32I)),T===r.RGBA_INTEGER&&(te===r.UNSIGNED_BYTE&&(ue=r.RGBA8UI),te===r.UNSIGNED_SHORT&&(ue=r.RGBA16UI),te===r.UNSIGNED_INT&&(ue=r.RGBA32UI),te===r.BYTE&&(ue=r.RGBA8I),te===r.SHORT&&(ue=r.RGBA16I),te===r.INT&&(ue=r.RGBA32I)),T===r.RGB&&te===r.UNSIGNED_INT_5_9_9_9_REV&&(ue=r.RGB9_E5),T===r.RGBA){const Ye=Me?Kc:wt.getTransfer(pe);te===r.FLOAT&&(ue=r.RGBA32F),te===r.HALF_FLOAT&&(ue=r.RGBA16F),te===r.UNSIGNED_BYTE&&(ue=Ye===Ht?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)}return(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function w(N,T){let te;return N?T===null||T===wr||T===Zo?te=r.DEPTH24_STENCIL8:T===da?te=r.DEPTH32F_STENCIL8:T===Yo&&(te=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===wr||T===Zo?te=r.DEPTH_COMPONENT24:T===da?te=r.DEPTH_COMPONENT32F:T===Yo&&(te=r.DEPTH_COMPONENT16),te}function H(N,T){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ti&&N.minFilter!==Ni?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function V(N){const T=N.target;T.removeEventListener("dispose",V),j(T),T.isVideoTexture&&g.delete(T)}function z(N){const T=N.target;T.removeEventListener("dispose",z),U(T)}function j(N){const T=s.get(N);if(T.__webglInit===void 0)return;const te=N.source,pe=x.get(te);if(pe){const Me=pe[T.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&D(N),Object.keys(pe).length===0&&x.delete(te)}s.remove(N)}function D(N){const T=s.get(N);r.deleteTexture(T.__webglTexture);const te=N.source,pe=x.get(te);delete pe[T.__cacheKey],f.memory.textures--}function U(N){const T=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let Me=0;Me<T.__webglFramebuffer[pe].length;Me++)r.deleteFramebuffer(T.__webglFramebuffer[pe][Me]);else r.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)r.deleteFramebuffer(T.__webglFramebuffer[pe]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=N.textures;for(let pe=0,Me=te.length;pe<Me;pe++){const ue=s.get(te[pe]);ue.__webglTexture&&(r.deleteTexture(ue.__webglTexture),f.memory.textures--),s.remove(te[pe])}s.remove(N)}let F=0;function ce(){F=0}function le(){const N=F;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),F+=1,N}function de(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function he(N,T){const te=s.get(N);if(N.isVideoTexture&&st(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&te.__version!==N.version){const pe=N.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(te,N,T);return}}else N.isExternalTexture&&(te.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+T)}function I(N,T){const te=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&te.__version!==N.version){xe(te,N,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+T)}function K(N,T){const te=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&te.__version!==N.version){xe(te,N,T);return}i.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+T)}function Z(N,T){const te=s.get(N);if(N.version>0&&te.__version!==N.version){_e(te,N,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+T)}const Se={[hh]:r.REPEAT,[Rr]:r.CLAMP_TO_EDGE,[ph]:r.MIRRORED_REPEAT},be={[Ti]:r.NEAREST,[uT]:r.NEAREST_MIPMAP_NEAREST,[yc]:r.NEAREST_MIPMAP_LINEAR,[Ni]:r.LINEAR,[Ed]:r.LINEAR_MIPMAP_NEAREST,[Cr]:r.LINEAR_MIPMAP_LINEAR},O={[pT]:r.NEVER,[yT]:r.ALWAYS,[mT]:r.LESS,[sx]:r.LEQUAL,[gT]:r.EQUAL,[xT]:r.GEQUAL,[vT]:r.GREATER,[_T]:r.NOTEQUAL};function ie(N,T){if(T.type===da&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ni||T.magFilter===Ed||T.magFilter===yc||T.magFilter===Cr||T.minFilter===Ni||T.minFilter===Ed||T.minFilter===yc||T.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,Se[T.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,Se[T.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,Se[T.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,be[T.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,be[T.minFilter]),T.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,O[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ti||T.minFilter!==yc&&T.minFilter!==Cr||T.type===da&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Te(N,T){let te=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",V));const pe=T.source;let Me=x.get(pe);Me===void 0&&(Me={},x.set(pe,Me));const ue=de(T);if(ue!==N.__cacheKey){Me[ue]===void 0&&(Me[ue]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,te=!0),Me[ue].usedTimes++;const Ye=Me[N.__cacheKey];Ye!==void 0&&(Me[N.__cacheKey].usedTimes--,Ye.usedTimes===0&&D(T)),N.__cacheKey=ue,N.__webglTexture=Me[ue].texture}return te}function Ce(N,T,te){return Math.floor(Math.floor(N/te)/T)}function J(N,T,te,pe){const ue=N.updateRanges;if(ue.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,te,pe,T.data);else{ue.sort((Ae,De)=>Ae.start-De.start);let Ye=0;for(let Ae=1;Ae<ue.length;Ae++){const De=ue[Ye],Ze=ue[Ae],Ie=De.start+De.count,Le=Ce(Ze.start,T.width,4),ot=Ce(De.start,T.width,4);Ze.start<=Ie+1&&Le===ot&&Ce(Ze.start+Ze.count-1,T.width,4)===Le?De.count=Math.max(De.count,Ze.start+Ze.count-De.start):(++Ye,ue[Ye]=Ze)}ue.length=Ye+1;const we=r.getParameter(r.UNPACK_ROW_LENGTH),We=r.getParameter(r.UNPACK_SKIP_PIXELS),qe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Ae=0,De=ue.length;Ae<De;Ae++){const Ze=ue[Ae],Ie=Math.floor(Ze.start/4),Le=Math.ceil(Ze.count/4),ot=Ie%T.width,X=Math.floor(Ie/T.width),Re=Le,Ue=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ot),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,ot,X,Re,Ue,te,pe,T.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,we),r.pixelStorei(r.UNPACK_SKIP_PIXELS,We),r.pixelStorei(r.UNPACK_SKIP_ROWS,qe)}}function xe(N,T,te){let pe=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=r.TEXTURE_3D);const Me=Te(N,T),ue=T.source;i.bindTexture(pe,N.__webglTexture,r.TEXTURE0+te);const Ye=s.get(ue);if(ue.version!==Ye.__version||Me===!0){i.activeTexture(r.TEXTURE0+te);const we=wt.getPrimaries(wt.workingColorSpace),We=T.colorSpace===Wa?null:wt.getPrimaries(T.colorSpace),qe=T.colorSpace===Wa||we===We?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Ae=b(T.image,!1,l.maxTextureSize);Ae=Qt(T,Ae);const De=c.convert(T.format,T.colorSpace),Ze=c.convert(T.type);let Ie=L(T.internalFormat,De,Ze,T.colorSpace,T.isVideoTexture);ie(pe,T);let Le;const ot=T.mipmaps,X=T.isVideoTexture!==!0,Re=Ye.__version===void 0||Me===!0,Ue=ue.dataReady,Be=H(T,Ae);if(T.isDepthTexture)Ie=w(T.format===Qo,T.type),Re&&(X?i.texStorage2D(r.TEXTURE_2D,1,Ie,Ae.width,Ae.height):i.texImage2D(r.TEXTURE_2D,0,Ie,Ae.width,Ae.height,0,De,Ze,null));else if(T.isDataTexture)if(ot.length>0){X&&Re&&i.texStorage2D(r.TEXTURE_2D,Be,Ie,ot[0].width,ot[0].height);for(let Ee=0,ve=ot.length;Ee<ve;Ee++)Le=ot[Ee],X?Ue&&i.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Le.width,Le.height,De,Ze,Le.data):i.texImage2D(r.TEXTURE_2D,Ee,Ie,Le.width,Le.height,0,De,Ze,Le.data);T.generateMipmaps=!1}else X?(Re&&i.texStorage2D(r.TEXTURE_2D,Be,Ie,Ae.width,Ae.height),Ue&&J(T,Ae,De,Ze)):i.texImage2D(r.TEXTURE_2D,0,Ie,Ae.width,Ae.height,0,De,Ze,Ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&Re&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Be,Ie,ot[0].width,ot[0].height,Ae.depth);for(let Ee=0,ve=ot.length;Ee<ve;Ee++)if(Le=ot[Ee],T.format!==Si)if(De!==null)if(X){if(Ue)if(T.layerUpdates.size>0){const He=V_(Le.width,Le.height,T.format,T.type);for(const at of T.layerUpdates){const Ot=Le.data.subarray(at*He/Le.data.BYTES_PER_ELEMENT,(at+1)*He/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,at,Le.width,Le.height,1,De,Ot)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,Le.width,Le.height,Ae.depth,De,Le.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ee,Ie,Le.width,Le.height,Ae.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ue&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,Le.width,Le.height,Ae.depth,De,Ze,Le.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Ee,Ie,Le.width,Le.height,Ae.depth,0,De,Ze,Le.data)}else{X&&Re&&i.texStorage2D(r.TEXTURE_2D,Be,Ie,ot[0].width,ot[0].height);for(let Ee=0,ve=ot.length;Ee<ve;Ee++)Le=ot[Ee],T.format!==Si?De!==null?X?Ue&&i.compressedTexSubImage2D(r.TEXTURE_2D,Ee,0,0,Le.width,Le.height,De,Le.data):i.compressedTexImage2D(r.TEXTURE_2D,Ee,Ie,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ue&&i.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Le.width,Le.height,De,Ze,Le.data):i.texImage2D(r.TEXTURE_2D,Ee,Ie,Le.width,Le.height,0,De,Ze,Le.data)}else if(T.isDataArrayTexture)if(X){if(Re&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Be,Ie,Ae.width,Ae.height,Ae.depth),Ue)if(T.layerUpdates.size>0){const Ee=V_(Ae.width,Ae.height,T.format,T.type);for(const ve of T.layerUpdates){const He=Ae.data.subarray(ve*Ee/Ae.data.BYTES_PER_ELEMENT,(ve+1)*Ee/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ve,Ae.width,Ae.height,1,De,Ze,He)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,De,Ze,Ae.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ie,Ae.width,Ae.height,Ae.depth,0,De,Ze,Ae.data);else if(T.isData3DTexture)X?(Re&&i.texStorage3D(r.TEXTURE_3D,Be,Ie,Ae.width,Ae.height,Ae.depth),Ue&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,De,Ze,Ae.data)):i.texImage3D(r.TEXTURE_3D,0,Ie,Ae.width,Ae.height,Ae.depth,0,De,Ze,Ae.data);else if(T.isFramebufferTexture){if(Re)if(X)i.texStorage2D(r.TEXTURE_2D,Be,Ie,Ae.width,Ae.height);else{let Ee=Ae.width,ve=Ae.height;for(let He=0;He<Be;He++)i.texImage2D(r.TEXTURE_2D,He,Ie,Ee,ve,0,De,Ze,null),Ee>>=1,ve>>=1}}else if(ot.length>0){if(X&&Re){const Ee=Zt(ot[0]);i.texStorage2D(r.TEXTURE_2D,Be,Ie,Ee.width,Ee.height)}for(let Ee=0,ve=ot.length;Ee<ve;Ee++)Le=ot[Ee],X?Ue&&i.texSubImage2D(r.TEXTURE_2D,Ee,0,0,De,Ze,Le):i.texImage2D(r.TEXTURE_2D,Ee,Ie,De,Ze,Le);T.generateMipmaps=!1}else if(X){if(Re){const Ee=Zt(Ae);i.texStorage2D(r.TEXTURE_2D,Be,Ie,Ee.width,Ee.height)}Ue&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,De,Ze,Ae)}else i.texImage2D(r.TEXTURE_2D,0,Ie,De,Ze,Ae);S(T)&&_(pe),Ye.__version=ue.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function _e(N,T,te){if(T.image.length!==6)return;const pe=Te(N,T),Me=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+te);const ue=s.get(Me);if(Me.version!==ue.__version||pe===!0){i.activeTexture(r.TEXTURE0+te);const Ye=wt.getPrimaries(wt.workingColorSpace),we=T.colorSpace===Wa?null:wt.getPrimaries(T.colorSpace),We=T.colorSpace===Wa||Ye===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const qe=T.isCompressedTexture||T.image[0].isCompressedTexture,Ae=T.image[0]&&T.image[0].isDataTexture,De=[];for(let ve=0;ve<6;ve++)!qe&&!Ae?De[ve]=b(T.image[ve],!0,l.maxCubemapSize):De[ve]=Ae?T.image[ve].image:T.image[ve],De[ve]=Qt(T,De[ve]);const Ze=De[0],Ie=c.convert(T.format,T.colorSpace),Le=c.convert(T.type),ot=L(T.internalFormat,Ie,Le,T.colorSpace),X=T.isVideoTexture!==!0,Re=ue.__version===void 0||pe===!0,Ue=Me.dataReady;let Be=H(T,Ze);ie(r.TEXTURE_CUBE_MAP,T);let Ee;if(qe){X&&Re&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Be,ot,Ze.width,Ze.height);for(let ve=0;ve<6;ve++){Ee=De[ve].mipmaps;for(let He=0;He<Ee.length;He++){const at=Ee[He];T.format!==Si?Ie!==null?X?Ue&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,0,0,at.width,at.height,Ie,at.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,ot,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ue&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,0,0,at.width,at.height,Ie,Le,at.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,ot,at.width,at.height,0,Ie,Le,at.data)}}}else{if(Ee=T.mipmaps,X&&Re){Ee.length>0&&Be++;const ve=Zt(De[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Be,ot,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ae){X?Ue&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,De[ve].width,De[ve].height,Ie,Le,De[ve].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ot,De[ve].width,De[ve].height,0,Ie,Le,De[ve].data);for(let He=0;He<Ee.length;He++){const Ot=Ee[He].image[ve].image;X?Ue&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,0,0,Ot.width,Ot.height,Ie,Le,Ot.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,ot,Ot.width,Ot.height,0,Ie,Le,Ot.data)}}else{X?Ue&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ie,Le,De[ve]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ot,Ie,Le,De[ve]);for(let He=0;He<Ee.length;He++){const at=Ee[He];X?Ue&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,0,0,Ie,Le,at.image[ve]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,ot,Ie,Le,at.image[ve])}}}S(T)&&_(r.TEXTURE_CUBE_MAP),ue.__version=Me.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Ge(N,T,te,pe,Me,ue){const Ye=c.convert(te.format,te.colorSpace),we=c.convert(te.type),We=L(te.internalFormat,Ye,we,te.colorSpace),qe=s.get(T),Ae=s.get(te);if(Ae.__renderTarget=T,!qe.__hasExternalTextures){const De=Math.max(1,T.width>>ue),Ze=Math.max(1,T.height>>ue);Me===r.TEXTURE_3D||Me===r.TEXTURE_2D_ARRAY?i.texImage3D(Me,ue,We,De,Ze,T.depth,0,Ye,we,null):i.texImage2D(Me,ue,We,De,Ze,0,Ye,we,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),Fe(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,Me,Ae.__webglTexture,0,Gt(T)):(Me===r.TEXTURE_2D||Me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pe,Me,Ae.__webglTexture,ue),i.bindFramebuffer(r.FRAMEBUFFER,null)}function ze(N,T,te){if(r.bindRenderbuffer(r.RENDERBUFFER,N),T.depthBuffer){const pe=T.depthTexture,Me=pe&&pe.isDepthTexture?pe.type:null,ue=w(T.stencilBuffer,Me),Ye=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=Gt(T);Fe(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,ue,T.width,T.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,ue,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ue,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ye,r.RENDERBUFFER,N)}else{const pe=T.textures;for(let Me=0;Me<pe.length;Me++){const ue=pe[Me],Ye=c.convert(ue.format,ue.colorSpace),we=c.convert(ue.type),We=L(ue.internalFormat,Ye,we,ue.colorSpace),qe=Gt(T);te&&Fe(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,We,T.width,T.height):Fe(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe,We,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,We,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function nt(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=s.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he(T.depthTexture,0);const Me=pe.__webglTexture,ue=Gt(T);if(T.depthTexture.format===Ko)Fe(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Me,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Me,0);else if(T.depthTexture.format===Qo)Fe(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Me,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function Xt(N){const T=s.get(N),te=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const pe=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const Me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",Me)};pe.addEventListener("dispose",Me),T.__depthDisposeCallback=Me}T.__boundDepthTexture=pe}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const pe=N.texture.mipmaps;pe&&pe.length>0?nt(T.__webglFramebuffer[0],N):nt(T.__webglFramebuffer,N)}else if(te){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=r.createRenderbuffer(),ze(T.__webglDepthbuffer[pe],N,!1);else{const Me=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[pe];r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,ue)}}else{const pe=N.texture.mipmaps;if(pe&&pe.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),ze(T.__webglDepthbuffer,N,!1);else{const Me=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,ue)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(N,T,te){const pe=s.get(N);T!==void 0&&Ge(pe.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&Xt(N)}function G(N){const T=N.texture,te=s.get(N),pe=s.get(T);N.addEventListener("dispose",z);const Me=N.textures,ue=N.isWebGLCubeRenderTarget===!0,Ye=Me.length>1;if(Ye||(pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture()),pe.__version=T.version,f.memory.textures++),ue){te.__webglFramebuffer=[];for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[we]=[];for(let We=0;We<T.mipmaps.length;We++)te.__webglFramebuffer[we][We]=r.createFramebuffer()}else te.__webglFramebuffer[we]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let we=0;we<T.mipmaps.length;we++)te.__webglFramebuffer[we]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(Ye)for(let we=0,We=Me.length;we<We;we++){const qe=s.get(Me[we]);qe.__webglTexture===void 0&&(qe.__webglTexture=r.createTexture(),f.memory.textures++)}if(N.samples>0&&Fe(N)===!1){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let we=0;we<Me.length;we++){const We=Me[we];te.__webglColorRenderbuffer[we]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[we]);const qe=c.convert(We.format,We.colorSpace),Ae=c.convert(We.type),De=L(We.internalFormat,qe,Ae,We.colorSpace,N.isXRRenderTarget===!0),Ze=Gt(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,De,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,te.__webglColorRenderbuffer[we])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),ze(te.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){i.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),ie(r.TEXTURE_CUBE_MAP,T);for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0)for(let We=0;We<T.mipmaps.length;We++)Ge(te.__webglFramebuffer[we][We],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,We);else Ge(te.__webglFramebuffer[we],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(T)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ye){for(let we=0,We=Me.length;we<We;we++){const qe=Me[we],Ae=s.get(qe);let De=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(De=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(De,Ae.__webglTexture),ie(De,qe),Ge(te.__webglFramebuffer,N,qe,r.COLOR_ATTACHMENT0+we,De,0),S(qe)&&_(De)}i.unbindTexture()}else{let we=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(we=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(we,pe.__webglTexture),ie(we,T),T.mipmaps&&T.mipmaps.length>0)for(let We=0;We<T.mipmaps.length;We++)Ge(te.__webglFramebuffer[We],N,T,r.COLOR_ATTACHMENT0,we,We);else Ge(te.__webglFramebuffer,N,T,r.COLOR_ATTACHMENT0,we,0);S(T)&&_(we),i.unbindTexture()}N.depthBuffer&&Xt(N)}function Tt(N){const T=N.textures;for(let te=0,pe=T.length;te<pe;te++){const Me=T[te];if(S(Me)){const ue=P(N),Ye=s.get(Me).__webglTexture;i.bindTexture(ue,Ye),_(ue),i.unbindTexture()}}}const $e=[],St=[];function Ke(N){if(N.samples>0){if(Fe(N)===!1){const T=N.textures,te=N.width,pe=N.height;let Me=r.COLOR_BUFFER_BIT;const ue=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ye=s.get(N),we=T.length>1;if(we)for(let qe=0;qe<T.length;qe++)i.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const We=N.texture.mipmaps;We&&We.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let qe=0;qe<T.length;qe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Me|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Me|=r.STENCIL_BUFFER_BIT)),we){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[qe]);const Ae=s.get(T[qe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ae,0)}r.blitFramebuffer(0,0,te,pe,0,0,te,pe,Me,r.NEAREST),m===!0&&($e.length=0,St.length=0,$e.push(r.COLOR_ATTACHMENT0+qe),N.depthBuffer&&N.resolveDepthBuffer===!1&&($e.push(ue),St.push(ue),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,St)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$e))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),we)for(let qe=0;qe<T.length;qe++){i.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[qe]);const Ae=s.get(T[qe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.TEXTURE_2D,Ae,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const T=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Gt(N){return Math.min(l.maxSamples,N.samples)}function Fe(N){const T=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function st(N){const T=f.render.frame;g.get(N)!==T&&(g.set(N,T),N.update())}function Qt(N,T){const te=N.colorSpace,pe=N.format,Me=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||te!==Fs&&te!==Wa&&(wt.getTransfer(te)===Ht?(pe!==Si||Me!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),T}function Zt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=le,this.resetTextureUnits=ce,this.setTexture2D=he,this.setTexture2DArray=I,this.setTexture3D=K,this.setTextureCube=Z,this.rebindTextures=ht,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=Fe}function $C(r,e){function i(s,l=Wa){let c;const f=wt.getTransfer(l);if(s===Bi)return r.UNSIGNED_BYTE;if(s===ep)return r.UNSIGNED_SHORT_4_4_4_4;if(s===tp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===$0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Q0)return r.BYTE;if(s===J0)return r.SHORT;if(s===Yo)return r.UNSIGNED_SHORT;if(s===$h)return r.INT;if(s===wr)return r.UNSIGNED_INT;if(s===da)return r.FLOAT;if(s===il)return r.HALF_FLOAT;if(s===ex)return r.ALPHA;if(s===tx)return r.RGB;if(s===Si)return r.RGBA;if(s===Ko)return r.DEPTH_COMPONENT;if(s===Qo)return r.DEPTH_STENCIL;if(s===nx)return r.RED;if(s===np)return r.RED_INTEGER;if(s===ix)return r.RG;if(s===ip)return r.RG_INTEGER;if(s===ap)return r.RGBA_INTEGER;if(s===kc||s===Xc||s===jc||s===Wc)if(f===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mh||s===gh||s===vh||s===_h)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===mh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_h)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xh||s===yh||s===Sh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===xh||s===yh)return f===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Sh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Mh||s===Eh||s===Th||s===bh||s===Ah||s===Rh||s===Ch||s===wh||s===Dh||s===Uh||s===Lh||s===Nh||s===Oh||s===Ph)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Mh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Eh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Th)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ah)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ch)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Dh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Uh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Nh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Oh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ph)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qc||s===zh||s===Ih)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===qc)return f===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===zh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ih)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ax||s===Bh||s===Fh||s===Hh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===qc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Bh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Hh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}class Tx extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const ew=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tw=`
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

}`;class nw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Tx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ka({vertexShader:ew,fragmentShader:tw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Mi(new iu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iw extends ks{constructor(e,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,v=null,x=null,M=null,E=null;const b=new nw,S={},_=i.getContextAttributes();let P=null,L=null;const w=[],H=[],V=new Ut;let z=null;const j=new di;j.viewport=new en;const D=new di;D.viewport=new en;const U=[j,D],F=new Tb;let ce=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let xe=w[J];return xe===void 0&&(xe=new Xd,w[J]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(J){let xe=w[J];return xe===void 0&&(xe=new Xd,w[J]=xe),xe.getGripSpace()},this.getHand=function(J){let xe=w[J];return xe===void 0&&(xe=new Xd,w[J]=xe),xe.getHandSpace()};function de(J){const xe=H.indexOf(J.inputSource);if(xe===-1)return;const _e=w[xe];_e!==void 0&&(_e.update(J.inputSource,J.frame,p||f),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function he(){l.removeEventListener("select",de),l.removeEventListener("selectstart",de),l.removeEventListener("selectend",de),l.removeEventListener("squeeze",de),l.removeEventListener("squeezestart",de),l.removeEventListener("squeezeend",de),l.removeEventListener("end",he),l.removeEventListener("inputsourceschange",I);for(let J=0;J<w.length;J++){const xe=H[J];xe!==null&&(H[J]=null,w[J].disconnect(xe))}ce=null,le=null,b.reset();for(const J in S)delete S[J];e.setRenderTarget(P),M=null,x=null,v=null,l=null,L=null,Ce.stop(),s.isPresenting=!1,e.setPixelRatio(z),e.setSize(V.width,V.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",de),l.addEventListener("selectstart",de),l.addEventListener("selectend",de),l.addEventListener("squeeze",de),l.addEventListener("squeezestart",de),l.addEventListener("squeezeend",de),l.addEventListener("end",he),l.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await i.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(V),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,i)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ge=null,ze=null;_.depth&&(ze=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_e=_.stencil?Qo:Ko,Ge=_.stencil?Zo:wr);const nt={colorFormat:i.RGBA8,depthFormat:ze,scaleFactor:c};x=v.createProjectionLayer(nt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new Dr(x.textureWidth,x.textureHeight,{format:Si,type:Bi,depthTexture:new gx(x.textureWidth,x.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const _e={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,_e),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new Dr(M.framebufferWidth,M.framebufferHeight,{format:Si,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ce.setContext(l),Ce.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function I(J){for(let xe=0;xe<J.removed.length;xe++){const _e=J.removed[xe],Ge=H.indexOf(_e);Ge>=0&&(H[Ge]=null,w[Ge].disconnect(_e))}for(let xe=0;xe<J.added.length;xe++){const _e=J.added[xe];let Ge=H.indexOf(_e);if(Ge===-1){for(let nt=0;nt<w.length;nt++)if(nt>=H.length){H.push(_e),Ge=nt;break}else if(H[nt]===null){H[nt]=_e,Ge=nt;break}if(Ge===-1)break}const ze=w[Ge];ze&&ze.connect(_e)}}const K=new se,Z=new se;function Se(J,xe,_e){K.setFromMatrixPosition(xe.matrixWorld),Z.setFromMatrixPosition(_e.matrixWorld);const Ge=K.distanceTo(Z),ze=xe.projectionMatrix.elements,nt=_e.projectionMatrix.elements,Xt=ze[14]/(ze[10]-1),ht=ze[14]/(ze[10]+1),G=(ze[9]+1)/ze[5],Tt=(ze[9]-1)/ze[5],$e=(ze[8]-1)/ze[0],St=(nt[8]+1)/nt[0],Ke=Xt*$e,Gt=Xt*St,Fe=Ge/(-$e+St),st=Fe*-$e;if(xe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(st),J.translateZ(Fe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ze[10]===-1)J.projectionMatrix.copy(xe.projectionMatrix),J.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const Qt=Xt+Fe,Zt=ht+Fe,N=Ke-st,T=Gt+(Ge-st),te=G*ht/Zt*Qt,pe=Tt*ht/Zt*Qt;J.projectionMatrix.makePerspective(N,T,te,pe,Qt,Zt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function be(J,xe){xe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(xe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let xe=J.near,_e=J.far;b.texture!==null&&(b.depthNear>0&&(xe=b.depthNear),b.depthFar>0&&(_e=b.depthFar)),F.near=D.near=j.near=xe,F.far=D.far=j.far=_e,(ce!==F.near||le!==F.far)&&(l.updateRenderState({depthNear:F.near,depthFar:F.far}),ce=F.near,le=F.far),F.layers.mask=J.layers.mask|6,j.layers.mask=F.layers.mask&3,D.layers.mask=F.layers.mask&5;const Ge=J.parent,ze=F.cameras;be(F,Ge);for(let nt=0;nt<ze.length;nt++)be(ze[nt],Ge);ze.length===2?Se(F,j,D):F.projectionMatrix.copy(j.projectionMatrix),O(J,F,Ge)};function O(J,xe,_e){_e===null?J.matrix.copy(xe.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(xe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(xe.projectionMatrix),J.projectionMatrixInverse.copy(xe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Jo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(J){m=J,x!==null&&(x.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(F)},this.getCameraTexture=function(J){return S[J]};let ie=null;function Te(J,xe){if(g=xe.getViewerPose(p||f),E=xe,g!==null){const _e=g.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let Ge=!1;_e.length!==F.cameras.length&&(F.cameras.length=0,Ge=!0);for(let ht=0;ht<_e.length;ht++){const G=_e[ht];let Tt=null;if(M!==null)Tt=M.getViewport(G);else{const St=v.getViewSubImage(x,G);Tt=St.viewport,ht===0&&(e.setRenderTargetTextures(L,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(L))}let $e=U[ht];$e===void 0&&($e=new di,$e.layers.enable(ht),$e.viewport=new en,U[ht]=$e),$e.matrix.fromArray(G.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(G.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),ht===0&&(F.matrix.copy($e.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ge===!0&&F.cameras.push($e)}const ze=l.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const ht=v.getDepthInformation(_e[0]);ht&&ht.isValid&&ht.texture&&b.init(ht,l.renderState)}if(ze&&ze.includes("camera-access")&&(e.state.unbindTexture(),v))for(let ht=0;ht<_e.length;ht++){const G=_e[ht].camera;if(G){let Tt=S[G];Tt||(Tt=new Tx,S[G]=Tt);const $e=v.getCameraImage(G);Tt.sourceTexture=$e}}}for(let _e=0;_e<w.length;_e++){const Ge=H[_e],ze=w[_e];Ge!==null&&ze!==void 0&&ze.update(Ge,xe,p||f)}ie&&ie(J,xe),xe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:xe}),E=null}const Ce=new xx;Ce.setAnimationLoop(Te),this.setAnimationLoop=function(J){ie=J},this.dispose=function(){}}}const Mr=new Fi,aw=new rn;function rw(r,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,hx(r)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,P,L,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),v(S,_)):_.isMeshPhongMaterial?(c(S,_),g(S,_)):_.isMeshStandardMaterial?(c(S,_),x(S,_),_.isMeshPhysicalMaterial&&M(S,_,w)):_.isMeshMatcapMaterial?(c(S,_),E(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),b(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,P,L):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Pn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Pn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const P=e.get(_),L=P.envMap,w=P.envMapRotation;L&&(S.envMap.value=L,Mr.copy(w),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),S.envMapRotation.value.setFromMatrix4(aw.makeRotationFromEuler(Mr)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,P,L){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*P,S.scale.value=L*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,P){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Pn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function b(S,_){const P=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function sw(r,e,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,L){const w=L.program;s.uniformBlockBinding(P,w)}function p(P,L){let w=l[P.id];w===void 0&&(E(P),w=g(P),l[P.id]=w,P.addEventListener("dispose",S));const H=L.program;s.updateUBOMapping(P,H);const V=e.render.frame;c[P.id]!==V&&(x(P),c[P.id]=V)}function g(P){const L=v();P.__bindingPointIndex=L;const w=r.createBuffer(),H=P.__size,V=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,H,V),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,w),w}function v(){for(let P=0;P<h;P++)if(f.indexOf(P)===-1)return f.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const L=l[P.id],w=P.uniforms,H=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let V=0,z=w.length;V<z;V++){const j=Array.isArray(w[V])?w[V]:[w[V]];for(let D=0,U=j.length;D<U;D++){const F=j[D];if(M(F,V,D,H)===!0){const ce=F.__offset,le=Array.isArray(F.value)?F.value:[F.value];let de=0;for(let he=0;he<le.length;he++){const I=le[he],K=b(I);typeof I=="number"||typeof I=="boolean"?(F.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,ce+de,F.__data)):I.isMatrix3?(F.__data[0]=I.elements[0],F.__data[1]=I.elements[1],F.__data[2]=I.elements[2],F.__data[3]=0,F.__data[4]=I.elements[3],F.__data[5]=I.elements[4],F.__data[6]=I.elements[5],F.__data[7]=0,F.__data[8]=I.elements[6],F.__data[9]=I.elements[7],F.__data[10]=I.elements[8],F.__data[11]=0):(I.toArray(F.__data,de),de+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ce,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(P,L,w,H){const V=P.value,z=L+"_"+w;if(H[z]===void 0)return typeof V=="number"||typeof V=="boolean"?H[z]=V:H[z]=V.clone(),!0;{const j=H[z];if(typeof V=="number"||typeof V=="boolean"){if(j!==V)return H[z]=V,!0}else if(j.equals(V)===!1)return j.copy(V),!0}return!1}function E(P){const L=P.uniforms;let w=0;const H=16;for(let z=0,j=L.length;z<j;z++){const D=Array.isArray(L[z])?L[z]:[L[z]];for(let U=0,F=D.length;U<F;U++){const ce=D[U],le=Array.isArray(ce.value)?ce.value:[ce.value];for(let de=0,he=le.length;de<he;de++){const I=le[de],K=b(I),Z=w%H,Se=Z%K.boundary,be=Z+Se;w+=Se,be!==0&&H-be<K.storage&&(w+=H-be),ce.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=w,w+=K.storage}}}const V=w%H;return V>0&&(w+=H-V),P.__size=w,P.__cache={},this}function b(P){const L={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(L.boundary=4,L.storage=4):P.isVector2?(L.boundary=8,L.storage=8):P.isVector3||P.isColor?(L.boundary=16,L.storage=12):P.isVector4?(L.boundary=16,L.storage=16):P.isMatrix3?(L.boundary=48,L.storage=48):P.isMatrix4?(L.boundary=64,L.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),L}function S(P){const L=P.target;L.removeEventListener("dispose",S);const w=f.indexOf(L.__bindingPointIndex);f.splice(w,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function _(){for(const P in l)r.deleteBuffer(l[P]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}class ow{constructor(e={}){const{canvas:i=IT(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=f;const E=new Uint32Array(4),b=new Int32Array(4);let S=null,_=null;const P=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let H=!1;this._outputColorSpace=Xn;let V=0,z=0,j=null,D=-1,U=null;const F=new en,ce=new en;let le=null;const de=new Et(0);let he=0,I=i.width,K=i.height,Z=1,Se=null,be=null;const O=new en(0,0,I,K),ie=new en(0,0,I,K);let Te=!1;const Ce=new cp;let J=!1,xe=!1;const _e=new rn,Ge=new se,ze=new en,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function ht(){return j===null?Z:1}let G=s;function Tt(C,W){return i.getContext(C,W)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Qh}`),i.addEventListener("webglcontextlost",Ue,!1),i.addEventListener("webglcontextrestored",Be,!1),i.addEventListener("webglcontextcreationerror",Ee,!1),G===null){const W="webgl2";if(G=Tt(W,C),G===null)throw Tt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let $e,St,Ke,Gt,Fe,st,Qt,Zt,N,T,te,pe,Me,ue,Ye,we,We,qe,Ae,De,Ze,Ie,Le,ot;function X(){$e=new vR(G),$e.init(),Ie=new $C(G,$e),St=new uR(G,$e,e,Ie),Ke=new QC(G,$e),St.reversedDepthBuffer&&x&&Ke.buffers.depth.setReversed(!0),Gt=new yR(G),Fe=new BC,st=new JC(G,$e,Ke,Fe,St,Ie,Gt),Qt=new dR(w),Zt=new gR(w),N=new Ab(G),Le=new lR(G,N),T=new _R(G,N,Gt,Le),te=new MR(G,T,N,Gt),Ae=new SR(G,St,st),we=new fR(Fe),pe=new IC(w,Qt,Zt,$e,St,Le,we),Me=new rw(w,Fe),ue=new HC,Ye=new WC($e),qe=new oR(w,Qt,Zt,Ke,te,M,m),We=new ZC(w,te,St),ot=new sw(G,Gt,St,Ke),De=new cR(G,$e,Gt),Ze=new xR(G,$e,Gt),Gt.programs=pe.programs,w.capabilities=St,w.extensions=$e,w.properties=Fe,w.renderLists=ue,w.shadowMap=We,w.state=Ke,w.info=Gt}X();const Re=new iw(w,G);this.xr=Re,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=$e.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=$e.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(I,K,!1))},this.getSize=function(C){return C.set(I,K)},this.setSize=function(C,W,ae=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,K=W,i.width=Math.floor(C*Z),i.height=Math.floor(W*Z),ae===!0&&(i.style.width=C+"px",i.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(I*Z,K*Z).floor()},this.setDrawingBufferSize=function(C,W,ae){I=C,K=W,Z=ae,i.width=Math.floor(C*ae),i.height=Math.floor(W*ae),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(O)},this.setViewport=function(C,W,ae,re){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,W,ae,re),Ke.viewport(F.copy(O).multiplyScalar(Z).round())},this.getScissor=function(C){return C.copy(ie)},this.setScissor=function(C,W,ae,re){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,W,ae,re),Ke.scissor(ce.copy(ie).multiplyScalar(Z).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(C){Ke.setScissorTest(Te=C)},this.setOpaqueSort=function(C){Se=C},this.setTransparentSort=function(C){be=C},this.getClearColor=function(C){return C.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,ae=!0){let re=0;if(C){let q=!1;if(j!==null){const ye=j.texture.format;q=ye===ap||ye===ip||ye===np}if(q){const ye=j.texture.type,Ne=ye===Bi||ye===wr||ye===Yo||ye===Zo||ye===ep||ye===tp,ke=qe.getClearColor(),Pe=qe.getClearAlpha(),Qe=ke.r,it=ke.g,Je=ke.b;Ne?(E[0]=Qe,E[1]=it,E[2]=Je,E[3]=Pe,G.clearBufferuiv(G.COLOR,0,E)):(b[0]=Qe,b[1]=it,b[2]=Je,b[3]=Pe,G.clearBufferiv(G.COLOR,0,b))}else re|=G.COLOR_BUFFER_BIT}W&&(re|=G.DEPTH_BUFFER_BIT),ae&&(re|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ue,!1),i.removeEventListener("webglcontextrestored",Be,!1),i.removeEventListener("webglcontextcreationerror",Ee,!1),qe.dispose(),ue.dispose(),Ye.dispose(),Fe.dispose(),Qt.dispose(),Zt.dispose(),te.dispose(),Le.dispose(),ot.dispose(),pe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",ni),Re.removeEventListener("sessionend",Ws),Ai.stop()};function Ue(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const C=Gt.autoReset,W=We.enabled,ae=We.autoUpdate,re=We.needsUpdate,q=We.type;X(),Gt.autoReset=C,We.enabled=W,We.autoUpdate=ae,We.needsUpdate=re,We.type=q}function Ee(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ve(C){const W=C.target;W.removeEventListener("dispose",ve),He(W)}function He(C){at(C),Fe.remove(C)}function at(C){const W=Fe.get(C).programs;W!==void 0&&(W.forEach(function(ae){pe.releaseProgram(ae)}),C.isShaderMaterial&&pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,ae,re,q,ye){W===null&&(W=nt);const Ne=q.isMesh&&q.matrixWorld.determinant()<0,ke=ga(C,W,ae,re,q);Ke.setMaterial(re,Ne);let Pe=ae.index,Qe=1;if(re.wireframe===!0){if(Pe=T.getWireframeAttribute(ae),Pe===void 0)return;Qe=2}const it=ae.drawRange,Je=ae.attributes.position;let dt=it.start*Qe,Lt=(it.start+it.count)*Qe;ye!==null&&(dt=Math.max(dt,ye.start*Qe),Lt=Math.min(Lt,(ye.start+ye.count)*Qe)),Pe!==null?(dt=Math.max(dt,0),Lt=Math.min(Lt,Pe.count)):Je!=null&&(dt=Math.max(dt,0),Lt=Math.min(Lt,Je.count));const Vt=Lt-dt;if(Vt<0||Vt===1/0)return;Le.setup(q,re,ke,ae,Pe);let Nt,pt=De;if(Pe!==null&&(Nt=N.get(Pe),pt=Ze,pt.setIndex(Nt)),q.isMesh)re.wireframe===!0?(Ke.setLineWidth(re.wireframeLinewidth*ht()),pt.setMode(G.LINES)):pt.setMode(G.TRIANGLES);else if(q.isLine){let Xe=re.linewidth;Xe===void 0&&(Xe=1),Ke.setLineWidth(Xe*ht()),q.isLineSegments?pt.setMode(G.LINES):q.isLineLoop?pt.setMode(G.LINE_LOOP):pt.setMode(G.LINE_STRIP)}else q.isPoints?pt.setMode(G.POINTS):q.isSprite&&pt.setMode(G.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Ls("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))pt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Xe=q._multiDrawStarts,jt=q._multiDrawCounts,At=q._multiDrawCount,yn=Pe?N.get(Pe).bytesPerElement:1,Gi=Fe.get(re).currentProgram.getUniforms();for(let gn=0;gn<At;gn++)Gi.setValue(G,"_gl_DrawID",gn),pt.render(Xe[gn]/yn,jt[gn])}else if(q.isInstancedMesh)pt.renderInstances(dt,Vt,q.count);else if(ae.isInstancedBufferGeometry){const Xe=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,jt=Math.min(ae.instanceCount,Xe);pt.renderInstances(dt,Vt,jt)}else pt.render(dt,Vt)};function Ot(C,W,ae){C.transparent===!0&&C.side===fa&&C.forceSinglePass===!1?(C.side=Pn,C.needsUpdate=!0,Wn(C,W,ae),C.side=Za,C.needsUpdate=!0,Wn(C,W,ae),C.side=fa):Wn(C,W,ae)}this.compile=function(C,W,ae=null){ae===null&&(ae=C),_=Ye.get(ae),_.init(W),L.push(_),ae.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),C!==ae&&C.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights();const re=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ye=q.material;if(ye)if(Array.isArray(ye))for(let Ne=0;Ne<ye.length;Ne++){const ke=ye[Ne];Ot(ke,ae,q),re.add(ke)}else Ot(ye,ae,q),re.add(ye)}),_=L.pop(),re},this.compileAsync=function(C,W,ae=null){const re=this.compile(C,W,ae);return new Promise(q=>{function ye(){if(re.forEach(function(Ne){Fe.get(Ne).currentProgram.isReady()&&re.delete(Ne)}),re.size===0){q(C);return}setTimeout(ye,10)}$e.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let bt=null;function Dn(C){bt&&bt(C)}function ni(){Ai.stop()}function Ws(){Ai.start()}const Ai=new xx;Ai.setAnimationLoop(Dn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(C){bt=C,Re.setAnimationLoop(C),C===null?Ai.stop():Ai.start()},Re.addEventListener("sessionstart",ni),Re.addEventListener("sessionend",Ws),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(W),W=Re.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,W,j),_=Ye.get(C,L.length),_.init(W),L.push(_),_e.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ce.setFromProjectionMatrix(_e,Oi,W.reversedDepth),xe=this.localClippingEnabled,J=we.init(this.clippingPlanes,xe),S=ue.get(C,P.length),S.init(),P.push(S),Re.enabled===!0&&Re.isPresenting===!0){const ye=w.xr.getDepthSensingMesh();ye!==null&&Ur(ye,W,-1/0,w.sortObjects)}Ur(C,W,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(Se,be),Xt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Xt&&qe.addToRenderList(S,C),this.info.render.frame++,J===!0&&we.beginShadows();const ae=_.state.shadowsArray;We.render(ae,C,W),J===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=S.opaque,q=S.transmissive;if(_.setupLights(),W.isArrayCamera){const ye=W.cameras;if(q.length>0)for(let Ne=0,ke=ye.length;Ne<ke;Ne++){const Pe=ye[Ne];Nr(re,q,C,Pe)}Xt&&qe.render(C);for(let Ne=0,ke=ye.length;Ne<ke;Ne++){const Pe=ye[Ne];Lr(S,C,Pe,Pe.viewport)}}else q.length>0&&Nr(re,q,C,W),Xt&&qe.render(C),Lr(S,C,W);j!==null&&z===0&&(st.updateMultisampleRenderTarget(j),st.updateRenderTargetMipmap(j)),C.isScene===!0&&C.onAfterRender(w,C,W),Le.resetDefaultState(),D=-1,U=null,L.pop(),L.length>0?(_=L[L.length-1],J===!0&&we.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,P.pop(),P.length>0?S=P[P.length-1]:S=null};function Ur(C,W,ae,re){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ce.intersectsSprite(C)){re&&ze.setFromMatrixPosition(C.matrixWorld).applyMatrix4(_e);const Ne=te.update(C),ke=C.material;ke.visible&&S.push(C,Ne,ke,ae,ze.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ce.intersectsObject(C))){const Ne=te.update(C),ke=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ze.copy(C.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ze.copy(Ne.boundingSphere.center)),ze.applyMatrix4(C.matrixWorld).applyMatrix4(_e)),Array.isArray(ke)){const Pe=Ne.groups;for(let Qe=0,it=Pe.length;Qe<it;Qe++){const Je=Pe[Qe],dt=ke[Je.materialIndex];dt&&dt.visible&&S.push(C,Ne,dt,ae,ze.z,Je)}}else ke.visible&&S.push(C,Ne,ke,ae,ze.z,null)}}const ye=C.children;for(let Ne=0,ke=ye.length;Ne<ke;Ne++)Ur(ye[Ne],W,ae,re)}function Lr(C,W,ae,re){const q=C.opaque,ye=C.transmissive,Ne=C.transparent;_.setupLightsView(ae),J===!0&&we.setGlobalState(w.clippingPlanes,ae),re&&Ke.viewport(F.copy(re)),q.length>0&&Ja(q,W,ae),ye.length>0&&Ja(ye,W,ae),Ne.length>0&&Ja(Ne,W,ae),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Nr(C,W,ae,re){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[re.id]===void 0&&(_.state.transmissionRenderTarget[re.id]=new Dr(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?il:Bi,minFilter:Cr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const ye=_.state.transmissionRenderTarget[re.id],Ne=re.viewport||F;ye.setSize(Ne.z*w.transmissionResolutionScale,Ne.w*w.transmissionResolutionScale);const ke=w.getRenderTarget(),Pe=w.getActiveCubeFace(),Qe=w.getActiveMipmapLevel();w.setRenderTarget(ye),w.getClearColor(de),he=w.getClearAlpha(),he<1&&w.setClearColor(16777215,.5),w.clear(),Xt&&qe.render(ae);const it=w.toneMapping;w.toneMapping=Ya;const Je=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),_.setupLightsView(re),J===!0&&we.setGlobalState(w.clippingPlanes,re),Ja(C,ae,re),st.updateMultisampleRenderTarget(ye),st.updateRenderTargetMipmap(ye),$e.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Lt=0,Vt=W.length;Lt<Vt;Lt++){const Nt=W[Lt],pt=Nt.object,Xe=Nt.geometry,jt=Nt.material,At=Nt.group;if(jt.side===fa&&pt.layers.test(re.layers)){const yn=jt.side;jt.side=Pn,jt.needsUpdate=!0,qs(pt,ae,re,Xe,jt,At),jt.side=yn,jt.needsUpdate=!0,dt=!0}}dt===!0&&(st.updateMultisampleRenderTarget(ye),st.updateRenderTargetMipmap(ye))}w.setRenderTarget(ke,Pe,Qe),w.setClearColor(de,he),Je!==void 0&&(re.viewport=Je),w.toneMapping=it}function Ja(C,W,ae){const re=W.isScene===!0?W.overrideMaterial:null;for(let q=0,ye=C.length;q<ye;q++){const Ne=C[q],ke=Ne.object,Pe=Ne.geometry,Qe=Ne.group;let it=Ne.material;it.allowOverride===!0&&re!==null&&(it=re),ke.layers.test(ae.layers)&&qs(ke,W,ae,Pe,it,Qe)}}function qs(C,W,ae,re,q,ye){C.onBeforeRender(w,W,ae,re,q,ye),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(w,W,ae,re,C,ye),q.transparent===!0&&q.side===fa&&q.forceSinglePass===!1?(q.side=Pn,q.needsUpdate=!0,w.renderBufferDirect(ae,W,re,q,C,ye),q.side=Za,q.needsUpdate=!0,w.renderBufferDirect(ae,W,re,q,C,ye),q.side=fa):w.renderBufferDirect(ae,W,re,q,C,ye),C.onAfterRender(w,W,ae,re,q,ye)}function Wn(C,W,ae){W.isScene!==!0&&(W=nt);const re=Fe.get(C),q=_.state.lights,ye=_.state.shadowsArray,Ne=q.state.version,ke=pe.getParameters(C,q.state,ye,W,ae),Pe=pe.getProgramCacheKey(ke);let Qe=re.programs;re.environment=C.isMeshStandardMaterial?W.environment:null,re.fog=W.fog,re.envMap=(C.isMeshStandardMaterial?Zt:Qt).get(C.envMap||re.environment),re.envMapRotation=re.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Qe===void 0&&(C.addEventListener("dispose",ve),Qe=new Map,re.programs=Qe);let it=Qe.get(Pe);if(it!==void 0){if(re.currentProgram===it&&re.lightsStateVersion===Ne)return xn(C,ke),it}else ke.uniforms=pe.getUniforms(C),C.onBeforeCompile(ke,w),it=pe.acquireProgram(ke,Pe),Qe.set(Pe,it),re.uniforms=ke.uniforms;const Je=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Je.clippingPlanes=we.uniform),xn(C,ke),re.needsLights=ru(C),re.lightsStateVersion=Ne,re.needsLights&&(Je.ambientLightColor.value=q.state.ambient,Je.lightProbe.value=q.state.probe,Je.directionalLights.value=q.state.directional,Je.directionalLightShadows.value=q.state.directionalShadow,Je.spotLights.value=q.state.spot,Je.spotLightShadows.value=q.state.spotShadow,Je.rectAreaLights.value=q.state.rectArea,Je.ltc_1.value=q.state.rectAreaLTC1,Je.ltc_2.value=q.state.rectAreaLTC2,Je.pointLights.value=q.state.point,Je.pointLightShadows.value=q.state.pointShadow,Je.hemisphereLights.value=q.state.hemi,Je.directionalShadowMap.value=q.state.directionalShadowMap,Je.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Je.spotShadowMap.value=q.state.spotShadowMap,Je.spotLightMatrix.value=q.state.spotLightMatrix,Je.spotLightMap.value=q.state.spotLightMap,Je.pointShadowMap.value=q.state.pointShadowMap,Je.pointShadowMatrix.value=q.state.pointShadowMatrix),re.currentProgram=it,re.uniformsList=null,it}function sn(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Yc.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function xn(C,W){const ae=Fe.get(C);ae.outputColorSpace=W.outputColorSpace,ae.batching=W.batching,ae.batchingColor=W.batchingColor,ae.instancing=W.instancing,ae.instancingColor=W.instancingColor,ae.instancingMorph=W.instancingMorph,ae.skinning=W.skinning,ae.morphTargets=W.morphTargets,ae.morphNormals=W.morphNormals,ae.morphColors=W.morphColors,ae.morphTargetsCount=W.morphTargetsCount,ae.numClippingPlanes=W.numClippingPlanes,ae.numIntersection=W.numClipIntersection,ae.vertexAlphas=W.vertexAlphas,ae.vertexTangents=W.vertexTangents,ae.toneMapping=W.toneMapping}function ga(C,W,ae,re,q){W.isScene!==!0&&(W=nt),st.resetTextureUnits();const ye=W.fog,Ne=re.isMeshStandardMaterial?W.environment:null,ke=j===null?w.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Fs,Pe=(re.isMeshStandardMaterial?Zt:Qt).get(re.envMap||Ne),Qe=re.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,it=!!ae.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Je=!!ae.morphAttributes.position,dt=!!ae.morphAttributes.normal,Lt=!!ae.morphAttributes.color;let Vt=Ya;re.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Vt=w.toneMapping);const Nt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,pt=Nt!==void 0?Nt.length:0,Xe=Fe.get(re),jt=_.state.lights;if(J===!0&&(xe===!0||C!==U)){const dn=C===U&&re.id===D;we.setState(re,C,dn)}let At=!1;re.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==jt.state.version||Xe.outputColorSpace!==ke||q.isBatchedMesh&&Xe.batching===!1||!q.isBatchedMesh&&Xe.batching===!0||q.isBatchedMesh&&Xe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Xe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Xe.instancing===!1||!q.isInstancedMesh&&Xe.instancing===!0||q.isSkinnedMesh&&Xe.skinning===!1||!q.isSkinnedMesh&&Xe.skinning===!0||q.isInstancedMesh&&Xe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Xe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Xe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Xe.instancingMorph===!1&&q.morphTexture!==null||Xe.envMap!==Pe||re.fog===!0&&Xe.fog!==ye||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==we.numPlanes||Xe.numIntersection!==we.numIntersection)||Xe.vertexAlphas!==Qe||Xe.vertexTangents!==it||Xe.morphTargets!==Je||Xe.morphNormals!==dt||Xe.morphColors!==Lt||Xe.toneMapping!==Vt||Xe.morphTargetsCount!==pt)&&(At=!0):(At=!0,Xe.__version=re.version);let yn=Xe.currentProgram;At===!0&&(yn=Wn(re,W,q));let Gi=!1,gn=!1,er=!1;const vt=yn.getUniforms(),bn=Xe.uniforms;if(Ke.useProgram(yn.program)&&(Gi=!0,gn=!0,er=!0),re.id!==D&&(D=re.id,gn=!0),Gi||U!==C){Ke.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),vt.setValue(G,"projectionMatrix",C.projectionMatrix),vt.setValue(G,"viewMatrix",C.matrixWorldInverse);const tn=vt.map.cameraPosition;tn!==void 0&&tn.setValue(G,Ge.setFromMatrixPosition(C.matrixWorld)),St.logarithmicDepthBuffer&&vt.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&vt.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),U!==C&&(U=C,gn=!0,er=!0)}if(q.isSkinnedMesh){vt.setOptional(G,q,"bindMatrix"),vt.setOptional(G,q,"bindMatrixInverse");const dn=q.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),vt.setValue(G,"boneTexture",dn.boneTexture,st))}q.isBatchedMesh&&(vt.setOptional(G,q,"batchingTexture"),vt.setValue(G,"batchingTexture",q._matricesTexture,st),vt.setOptional(G,q,"batchingIdTexture"),vt.setValue(G,"batchingIdTexture",q._indirectTexture,st),vt.setOptional(G,q,"batchingColorTexture"),q._colorsTexture!==null&&vt.setValue(G,"batchingColorTexture",q._colorsTexture,st));const Un=ae.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Ae.update(q,ae,yn),(gn||Xe.receiveShadow!==q.receiveShadow)&&(Xe.receiveShadow=q.receiveShadow,vt.setValue(G,"receiveShadow",q.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(bn.envMap.value=Pe,bn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&W.environment!==null&&(bn.envMapIntensity.value=W.environmentIntensity),gn&&(vt.setValue(G,"toneMappingExposure",w.toneMappingExposure),Xe.needsLights&&Ys(bn,er),ye&&re.fog===!0&&Me.refreshFogUniforms(bn,ye),Me.refreshMaterialUniforms(bn,re,Z,K,_.state.transmissionRenderTarget[C.id]),Yc.upload(G,sn(Xe),bn,st)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Yc.upload(G,sn(Xe),bn,st),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&vt.setValue(G,"center",q.center),vt.setValue(G,"modelViewMatrix",q.modelViewMatrix),vt.setValue(G,"normalMatrix",q.normalMatrix),vt.setValue(G,"modelMatrix",q.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const dn=re.uniformsGroups;for(let tn=0,Or=dn.length;tn<Or;tn++){const Ri=dn[tn];ot.update(Ri,yn),ot.bind(Ri,yn)}}return yn}function Ys(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function ru(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(C,W,ae){const re=Fe.get(C);re.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Fe.get(C.texture).__webglTexture=W,Fe.get(C.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ae,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){const ae=Fe.get(C);ae.__webglFramebuffer=W,ae.__useDefaultFramebuffer=W===void 0};const su=G.createFramebuffer();this.setRenderTarget=function(C,W=0,ae=0){j=C,V=W,z=ae;let re=!0,q=null,ye=!1,Ne=!1;if(C){const Pe=Fe.get(C);if(Pe.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(G.FRAMEBUFFER,null),re=!1;else if(Pe.__webglFramebuffer===void 0)st.setupRenderTarget(C);else if(Pe.__hasExternalTextures)st.rebindTextures(C,Fe.get(C.texture).__webglTexture,Fe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Je=C.depthTexture;if(Pe.__boundDepthTexture!==Je){if(Je!==null&&Fe.has(Je)&&(C.width!==Je.image.width||C.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(C)}}const Qe=C.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ne=!0);const it=Fe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(it[W])?q=it[W][ae]:q=it[W],ye=!0):C.samples>0&&st.useMultisampledRTT(C)===!1?q=Fe.get(C).__webglMultisampledFramebuffer:Array.isArray(it)?q=it[ae]:q=it,F.copy(C.viewport),ce.copy(C.scissor),le=C.scissorTest}else F.copy(O).multiplyScalar(Z).floor(),ce.copy(ie).multiplyScalar(Z).floor(),le=Te;if(ae!==0&&(q=su),Ke.bindFramebuffer(G.FRAMEBUFFER,q)&&re&&Ke.drawBuffers(C,q),Ke.viewport(F),Ke.scissor(ce),Ke.setScissorTest(le),ye){const Pe=Fe.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pe.__webglTexture,ae)}else if(Ne){const Pe=W;for(let Qe=0;Qe<C.textures.length;Qe++){const it=Fe.get(C.textures[Qe]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Qe,it.__webglTexture,ae,Pe)}}else if(C!==null&&ae!==0){const Pe=Fe.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pe.__webglTexture,ae)}D=-1},this.readRenderTargetPixels=function(C,W,ae,re,q,ye,Ne,ke=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne]),Pe){Ke.bindFramebuffer(G.FRAMEBUFFER,Pe);try{const Qe=C.textures[ke],it=Qe.format,Je=Qe.type;if(!St.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-re&&ae>=0&&ae<=C.height-q&&(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ke),G.readPixels(W,ae,re,q,Ie.convert(it),Ie.convert(Je),ye))}finally{const Qe=j!==null?Fe.get(j).__webglFramebuffer:null;Ke.bindFramebuffer(G.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(C,W,ae,re,q,ye,Ne,ke=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne]),Pe)if(W>=0&&W<=C.width-re&&ae>=0&&ae<=C.height-q){Ke.bindFramebuffer(G.FRAMEBUFFER,Pe);const Qe=C.textures[ke],it=Qe.format,Je=Qe.type;if(!St.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,dt),G.bufferData(G.PIXEL_PACK_BUFFER,ye.byteLength,G.STREAM_READ),C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ke),G.readPixels(W,ae,re,q,Ie.convert(it),Ie.convert(Je),0);const Lt=j!==null?Fe.get(j).__webglFramebuffer:null;Ke.bindFramebuffer(G.FRAMEBUFFER,Lt);const Vt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await BT(G,Vt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,dt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,ye),G.deleteBuffer(dt),G.deleteSync(Vt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,ae=0){const re=Math.pow(2,-ae),q=Math.floor(C.image.width*re),ye=Math.floor(C.image.height*re),Ne=W!==null?W.x:0,ke=W!==null?W.y:0;st.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,ae,0,0,Ne,ke,q,ye),Ke.unbindTexture()};const cl=G.createFramebuffer(),$a=G.createFramebuffer();this.copyTextureToTexture=function(C,W,ae=null,re=null,q=0,ye=null){ye===null&&(q!==0?(Ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=q,q=0):ye=0);let Ne,ke,Pe,Qe,it,Je,dt,Lt,Vt;const Nt=C.isCompressedTexture?C.mipmaps[ye]:C.image;if(ae!==null)Ne=ae.max.x-ae.min.x,ke=ae.max.y-ae.min.y,Pe=ae.isBox3?ae.max.z-ae.min.z:1,Qe=ae.min.x,it=ae.min.y,Je=ae.isBox3?ae.min.z:0;else{const Un=Math.pow(2,-q);Ne=Math.floor(Nt.width*Un),ke=Math.floor(Nt.height*Un),C.isDataArrayTexture?Pe=Nt.depth:C.isData3DTexture?Pe=Math.floor(Nt.depth*Un):Pe=1,Qe=0,it=0,Je=0}re!==null?(dt=re.x,Lt=re.y,Vt=re.z):(dt=0,Lt=0,Vt=0);const pt=Ie.convert(W.format),Xe=Ie.convert(W.type);let jt;W.isData3DTexture?(st.setTexture3D(W,0),jt=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(st.setTexture2DArray(W,0),jt=G.TEXTURE_2D_ARRAY):(st.setTexture2D(W,0),jt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const At=G.getParameter(G.UNPACK_ROW_LENGTH),yn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Gi=G.getParameter(G.UNPACK_SKIP_PIXELS),gn=G.getParameter(G.UNPACK_SKIP_ROWS),er=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Nt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Nt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Qe),G.pixelStorei(G.UNPACK_SKIP_ROWS,it),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Je);const vt=C.isDataArrayTexture||C.isData3DTexture,bn=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){const Un=Fe.get(C),dn=Fe.get(W),tn=Fe.get(Un.__renderTarget),Or=Fe.get(dn.__renderTarget);Ke.bindFramebuffer(G.READ_FRAMEBUFFER,tn.__webglFramebuffer),Ke.bindFramebuffer(G.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let Ri=0;Ri<Pe;Ri++)vt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Fe.get(C).__webglTexture,q,Je+Ri),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Fe.get(W).__webglTexture,ye,Vt+Ri)),G.blitFramebuffer(Qe,it,Ne,ke,dt,Lt,Ne,ke,G.DEPTH_BUFFER_BIT,G.NEAREST);Ke.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(q!==0||C.isRenderTargetTexture||Fe.has(C)){const Un=Fe.get(C),dn=Fe.get(W);Ke.bindFramebuffer(G.READ_FRAMEBUFFER,cl),Ke.bindFramebuffer(G.DRAW_FRAMEBUFFER,$a);for(let tn=0;tn<Pe;tn++)vt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Un.__webglTexture,q,Je+tn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Un.__webglTexture,q),bn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,dn.__webglTexture,ye,Vt+tn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,dn.__webglTexture,ye),q!==0?G.blitFramebuffer(Qe,it,Ne,ke,dt,Lt,Ne,ke,G.COLOR_BUFFER_BIT,G.NEAREST):bn?G.copyTexSubImage3D(jt,ye,dt,Lt,Vt+tn,Qe,it,Ne,ke):G.copyTexSubImage2D(jt,ye,dt,Lt,Qe,it,Ne,ke);Ke.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else bn?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(jt,ye,dt,Lt,Vt,Ne,ke,Pe,pt,Xe,Nt.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D(jt,ye,dt,Lt,Vt,Ne,ke,Pe,pt,Nt.data):G.texSubImage3D(jt,ye,dt,Lt,Vt,Ne,ke,Pe,pt,Xe,Nt):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,ye,dt,Lt,Ne,ke,pt,Xe,Nt.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,ye,dt,Lt,Nt.width,Nt.height,pt,Nt.data):G.texSubImage2D(G.TEXTURE_2D,ye,dt,Lt,Ne,ke,pt,Xe,Nt);G.pixelStorei(G.UNPACK_ROW_LENGTH,At),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Gi),G.pixelStorei(G.UNPACK_SKIP_ROWS,gn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,er),ye===0&&W.generateMipmaps&&G.generateMipmap(jt),Ke.unbindTexture()},this.copyTextureToTexture3D=function(C,W,ae=null,re=null,q=0){return Ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,W,ae,re,q)},this.initRenderTarget=function(C){Fe.get(C).__webglFramebuffer===void 0&&st.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?st.setTextureCube(C,0):C.isData3DTexture?st.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?st.setTexture2DArray(C,0):st.setTexture2D(C,0),Ke.unbindTexture()},this.resetState=function(){V=0,z=0,j=null,Ke.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),i.unpackColorSpace=wt._getUnpackColorSpace()}}const lw="https://unpkg.com/three-globe@2.44.1/example/img/earth-blue-marble.jpg",cw="https://unpkg.com/three-globe@2.44.1/example/img/earth-night.jpg";function uw(){const r=Q.useRef(null),e=Q.useRef(null),i=Q.useRef(null),s=Q.useRef(0);return Q.useEffect(()=>{const l=e.current,c=r.current;if(!l||!c)return;let f,h=!1;const m=()=>{i.current&&(i.current.style.opacity="1"),l.style.opacity="0"};try{f=new ow({canvas:l,antialias:!0,alpha:!0})}catch{m();return}f.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),f.setClearColor(0,0);const p=new ub,g=new di(32,1,.1,20);g.position.z=3.05;const v=new Xo;p.add(v);const x=new Jc(1,80,80),M=new pb({color:8956671,shininess:8,specular:new Et(2241365)}),E=new Mi(x,M);v.add(E);const b=new Mi(new Jc(1.045,64,64),new lp({color:22015,transparent:!0,opacity:.16,side:Pn}));v.add(b),p.add(new Eb(6719675,1.1));const S=new G_(16777215,2.1);S.position.set(-2.2,.6,2.4),p.add(S);const _=new G_(5084415,.9);_.position.set(3,-1,-2),p.add(_);const P=new yb;P.setCrossOrigin("anonymous"),P.load(lw,j=>{h||(j.colorSpace=Xn,M.map=j,M.color=new Et(16777215),M.needsUpdate=!0,l.style.opacity="1",i.current&&(i.current.style.opacity="0"))},void 0,()=>{P.load(cw,j=>{h||(j.colorSpace=Xn,M.map=j,M.color=new Et(16777215),M.needsUpdate=!0,l.style.opacity="1")},void 0,m)}),E.rotation.y=S_.degToRad(-48),E.rotation.x=S_.degToRad(18);const L=()=>{const j=c.clientWidth,D=c.clientHeight;f.setSize(j,D,!1),g.aspect=j/Math.max(D,1),g.updateProjectionMatrix()};L();const w=new ResizeObserver(L);w.observe(c);const H={x:0,y:0},V=j=>{const D=c.getBoundingClientRect();H.x=((j.clientX-D.left)/D.width-.5)*2,H.y=((j.clientY-D.top)/D.height-.5)*2,c.style.setProperty("--rx",`${(-H.y*6).toFixed(2)}deg`),c.style.setProperty("--ry",`${(H.x*8).toFixed(2)}deg`)};c.addEventListener("mousemove",V);const z=()=>{try{E.rotation.y+=9e-4,v.rotation.y+=(H.x*.18-v.rotation.y)*.04,v.rotation.x+=(-H.y*.1-v.rotation.x)*.04,f.render(p,g)}catch{m();return}s.current=requestAnimationFrame(z)};return z(),()=>{h=!0,cancelAnimationFrame(s.current),w.disconnect(),c.removeEventListener("mousemove",V),x.dispose(),M.dispose(),f.dispose()}},[]),R.jsxs("div",{className:"globe-stage",ref:r,children:[R.jsx("div",{className:"globe-halo"}),R.jsx("img",{ref:i,className:"earth-photo",src:"/images/earth-globe.png",alt:"",style:{position:"absolute",opacity:1,zIndex:1}}),R.jsx("canvas",{ref:e,style:{position:"relative",zIndex:2,width:"100%",height:"100%",opacity:0}})]})}function dp({className:r="line-art",on:e=!0}){return R.jsxs("svg",{className:`${r}${e?" start":""}`,viewBox:"0 0 667 690",fill:"none","aria-hidden":"true",children:[R.jsx("path",{className:"draw d0",d:"M468.5 1.3H659.5"}),R.jsx("path",{className:"draw d1",d:"M74.5 344.3L278.5 1.3"}),R.jsx("path",{className:"draw d2",d:"M0 173.3H641.5"}),R.jsx("path",{className:"draw d3",d:"M24.5 345.3H666.5"}),R.jsx("path",{className:"draw d4",d:"M82.5 689.3L371.5 173.3"}),R.jsx("path",{className:"draw d5",d:"M370.5 517.3L659.5 1.3"}),R.jsx("path",{className:"draw d6",d:"M179.5 517.3H535.5"}),R.jsx("style",{children:`
        .draw { stroke-dasharray: 700; stroke-dashoffset: 700; }
        .start .d0 { animation: drawL 1.25s linear 0ms forwards; }
        .start .d1 { animation: drawL 1.25s linear 110ms forwards; }
        .start .d2 { animation: drawL 1.25s linear 220ms forwards; }
        .start .d3 { animation: drawL 1.25s linear 330ms forwards; }
        .start .d4 { animation: drawL 1.25s linear 440ms forwards; }
        .start .d5 { animation: drawL 1.25s linear 550ms forwards; }
        .start .d6 { animation: drawL 1.25s linear 660ms forwards; }
        @keyframes drawL { to { stroke-dashoffset: 0; } }
      `})]})}class bx extends Q.Component{constructor(e){super(e),this.state={err:null}}static getDerivedStateFromError(e){return{err:e}}componentDidCatch(e,i){console.error("ATW render error",e,i)}render(){return this.state.err?this.props.fallback?this.props.fallback:R.jsxs("div",{style:{padding:40,color:"#f2f5f9",fontFamily:"sans-serif"},children:[R.jsx("h1",{children:"خطا در بارگذاری"}),R.jsx("pre",{style:{whiteSpace:"pre-wrap",color:"#80b3ff"},children:String(this.state.err)})]}):this.props.children}}function fw(){return R.jsxs("div",{className:"globe-stage",children:[R.jsx("div",{className:"globe-halo"}),R.jsx("img",{className:"earth-photo",src:"/images/earth-globe.png",alt:""})]})}function dw(){const r=Q.useMemo(()=>Array.from({length:48},(e,i)=>({i,top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,s:Math.random()*2.2+.4,d:`${2+Math.random()*4}s`,delay:`${Math.random()*3}s`})),[]);return R.jsx("div",{className:"hero-stars","aria-hidden":"true",children:r.map(e=>R.jsx("span",{className:"hero-star",style:{top:e.top,left:e.left,width:e.s,height:e.s,animationDuration:e.d,animationDelay:e.delay}},e.i))})}function hw(r){const[e,i]=Q.useState(()=>Date.now());Q.useEffect(()=>{const m=setInterval(()=>i(Date.now()),1e3);return()=>clearInterval(m)},[]);const s=Math.max(0,r-e),l=Math.floor(s/864e5),c=Math.floor(s%864e5/36e5),f=Math.floor(s%36e5/6e4),h=Math.floor(s%6e4/1e3);return{days:l,hours:c,minutes:f,seconds:h}}function pw({ready:r}){const{t:e,path:i}=jn(),[s,l]=Q.useState(0),[c,f]=Q.useState(!1),[h,m]=Q.useState(!1),p=hw(new Date("2026-10-14T08:30:00+03:30").getTime());return Q.useEffect(()=>{if(!r)return;const g=setTimeout(()=>m(!0),80);return()=>clearTimeout(g)},[r]),Q.useEffect(()=>{if(!h)return;f(!1);const g=setTimeout(()=>f(!0),2e3),v=setTimeout(()=>{l(x=>(x+1)%e.hero.slides.length)},12500);return()=>{clearTimeout(g),clearTimeout(v)}},[s,h,e.hero.slides.length]),R.jsxs("section",{className:`hero ${h?"is-on":""}`,children:[R.jsx(dw,{}),R.jsxs("div",{className:"globe-wrap",id:"videoWrapper",children:[R.jsx(bx,{fallback:R.jsx(fw,{}),children:R.jsx(uw,{})}),R.jsx(dp,{className:"globe-lines",on:h})]}),R.jsx("div",{className:"hero-copy",children:R.jsxs("div",{className:"aligner",children:[R.jsx("div",{className:"hero-kicker",children:e.hero.kicker}),R.jsx("div",{id:"textSlides",children:R.jsx("ul",{children:e.hero.slides.map((g,v)=>R.jsxs("li",{className:`${v===s?"current":""} ${v===s&&c?"slide-in":""}`,children:[R.jsx("div",{className:"hero-title display",children:g.title}),R.jsxs("div",{className:"animated-titles",children:[R.jsx("div",{className:"secondtitle",children:g.second}),R.jsx("div",{className:"firsttitle",children:g.first})]})]},g.title))})}),R.jsx("p",{className:"hero-lead",children:e.hero.lead}),R.jsxs("div",{children:[R.jsx("div",{className:"countdown-label",children:e.countdown.label}),R.jsx("div",{className:"countdown","aria-hidden":"true",children:[[p.days,e.countdown.days],[p.hours,e.countdown.hours],[p.minutes,e.countdown.minutes],[p.seconds,e.countdown.seconds]].map(([g,v])=>R.jsxs("div",{children:[R.jsx("b",{children:String(g).padStart(2,"0")}),R.jsx("span",{children:v})]},v))})]}),R.jsxs("div",{className:"cta-row",children:[R.jsx(Ds,{to:i("/visit"),children:e.hero.ctaVisit}),R.jsx(Ds,{to:i("/exhibit"),children:e.hero.ctaBooth}),R.jsx(Ds,{to:i("/problems"),children:e.hero.ctaProblem})]})]})}),R.jsxs("div",{className:"scroll-ind",children:[R.jsx("i",{})," ",e.hero.scroll]})]})}function h0(){const r=Q.useContext(Y0),{t:e,path:i}=jn(),[s,l]=Md("80px"),[c,f]=Md("80px"),[h,m]=Md("80px");return R.jsxs("main",{id:"mainContent",children:[R.jsx(pw,{ready:!!r}),R.jsxs("section",{className:`headlines ${l?"is-on":""}`,ref:s,id:"headLines",children:[R.jsx("h2",{className:"display",children:e.headlines.title}),R.jsx("ul",{children:e.headlines.items.map(p=>R.jsx("li",{children:R.jsxs(ma,{to:i(p.href),children:[R.jsx("div",{className:"itemdate",children:R.jsx("span",{children:p.date})}),R.jsx("div",{className:"htitle",children:p.title})]})},p.title))})]}),R.jsx("section",{className:"pull",id:"imagePullQuote",children:R.jsxs("div",{className:"pull-row",children:[R.jsx("div",{className:"pull-image",children:R.jsx("picture",{children:R.jsx("img",{src:"/images/connection-lab.jpg",alt:""})})}),R.jsxs("div",{className:"pull-content",children:[R.jsx("p",{children:e.pull.body}),R.jsx(Ds,{to:i(e.pull.href),children:e.pull.cta})]})]})}),R.jsxs("section",{className:"quote-block",ref:c,id:"homeQuote",children:[R.jsx(dp,{on:f}),R.jsxs("div",{className:"quote-text display",children:["“",e.quote.text,"”"]}),R.jsx("div",{className:"quote-attr",children:e.quote.attr})]}),R.jsx("section",{className:"stats",children:e.stats.items.map(p=>R.jsxs("div",{children:[R.jsx("div",{className:"stat-n display",children:p.n}),R.jsx("div",{className:"stat-l",children:p.l})]},p.l))}),R.jsxs("section",{className:`chain ${m?"is-on":""}`,ref:h,children:[R.jsx("div",{className:"kicker",children:e.chain.kicker}),R.jsx("h2",{className:"section-title",children:e.chain.title}),R.jsx("p",{className:"lead",children:e.chain.lead}),R.jsx("div",{className:"steps",children:e.chain.steps.map(p=>R.jsxs("article",{className:"step",children:[R.jsx("b",{children:p.n}),R.jsx("h3",{children:p.t}),R.jsx("p",{children:p.d})]},p.n))})]}),R.jsxs("section",{className:"zones",children:[R.jsx("div",{className:"kicker",children:e.zones.kicker}),R.jsx("h2",{className:"section-title",children:e.zones.title}),R.jsx("p",{className:"lead",children:e.zones.lead}),R.jsx("div",{className:"zone-grid",children:e.zones.items.map(p=>R.jsxs("article",{className:"zone",children:[R.jsx("h3",{children:p.t}),R.jsx("p",{children:p.d})]},p.t))})]}),R.jsxs("section",{className:"program-preview",children:[R.jsx("div",{className:"kicker",children:e.program.kicker}),R.jsx("h2",{className:"section-title",children:e.program.title}),R.jsx("div",{className:"days",children:e.program.days.map(p=>R.jsxs("article",{className:"day",children:[R.jsxs("div",{className:"when",children:[p.day," · ",p.date]}),R.jsx("h3",{className:"day-title",children:p.title}),R.jsx("p",{className:"sub",children:p.sub}),R.jsx("ul",{children:p.items.slice(0,4).map(g=>R.jsxs("li",{children:[R.jsx("span",{children:g.t}),R.jsx("em",{children:g.d})]},g.t))})]},p.day))}),R.jsx("div",{style:{marginTop:28},children:R.jsx(Ds,{to:i("/program"),children:e.program.more})})]}),R.jsx("div",{className:"ghost-text",id:"ghostText",children:R.jsx("div",{children:R.jsxs("span",{children:[e.ghost,"  ",e.ghost]})})}),R.jsxs("section",{className:"partners",children:[R.jsx("h2",{className:"section-title",children:e.partners.title}),R.jsx("ul",{children:e.partners.items.map(p=>R.jsx("li",{children:p},p))})]})]})}function ll({title:r,lead:e,children:i}){const{t:s,path:l}=jn();return R.jsxs("main",{className:"page",id:"mainContent",children:[R.jsx(dp,{className:"line-design",on:!0}),R.jsxs("nav",{className:"crumbs","aria-label":"breadcrumb",children:[R.jsx(ma,{to:l("/"),children:s.crumbs.home}),R.jsx("span",{children:"/"}),R.jsx("span",{children:r})]}),R.jsx("h1",{className:"page-title display",children:r}),e?R.jsx("p",{className:"page-lead",children:e}):null,i]})}function p0(){const{t:r}=jn();return R.jsxs(ll,{title:r.nav.program,lead:r.program.pageLead,children:[r.program.days.map(e=>R.jsxs("section",{className:"day-full",children:[R.jsxs("header",{children:[R.jsxs("div",{className:"kicker",children:[e.day," · ",e.date]}),R.jsx("h2",{className:"section-title",children:e.title}),R.jsx("p",{className:"lead",children:e.sub})]}),R.jsx("article",{className:"day",children:R.jsx("ul",{children:e.items.map(i=>R.jsxs("li",{children:[R.jsx("span",{children:i.t}),R.jsx("em",{children:i.d})]},i.t))})})]},e.day)),R.jsx("p",{className:"lead",children:r.program.expand})]})}function hp({variant:r="visit"}){const{t:e}=jn(),[i,s]=Q.useState(!1),l=e.form;if(i)return R.jsx("div",{className:"form-success",children:l.sent});const c=r==="exhibit"?l.boothTypes:l.visitTypes;return R.jsxs("form",{className:"form",onSubmit:f=>{f.preventDefault(),s(!0)},children:[R.jsxs("label",{children:[l.name,R.jsx("input",{required:!0,name:"name"})]}),R.jsxs("label",{children:[l.org,R.jsx("input",{required:!0,name:"org"})]}),R.jsxs("label",{children:[l.role,R.jsx("input",{name:"role"})]}),R.jsxs("label",{children:[l.email,R.jsx("input",{required:!0,type:"email",name:"email"})]}),R.jsxs("label",{children:[l.phone,R.jsx("input",{required:!0,name:"phone"})]}),r!=="problem"&&R.jsxs("label",{children:[l.type,R.jsx("select",{name:"type",defaultValue:c[0],children:c.map(f=>R.jsx("option",{children:f},f))})]}),r==="problem"&&R.jsxs(R.Fragment,{children:[R.jsxs("label",{children:[l.problemFields.title,R.jsx("input",{required:!0,name:"ptitle"})]}),R.jsxs("label",{children:[l.problemFields.current,R.jsx("textarea",{name:"current"})]}),R.jsxs("label",{children:[l.problemFields.data,R.jsx("textarea",{name:"data"})]}),R.jsxs("label",{children:[l.problemFields.goal,R.jsx("input",{name:"goal"})]}),R.jsxs("label",{children:[l.problemFields.kpi,R.jsx("input",{name:"kpi"})]}),R.jsxs("label",{children:[l.problemFields.budget,R.jsx("input",{name:"budget"})]}),R.jsxs("label",{children:[l.problemFields.time,R.jsx("input",{name:"time"})]})]}),r!=="problem"&&R.jsxs("label",{children:[l.message,R.jsx("textarea",{name:"message"})]}),R.jsx(Ds,{type:"submit",children:l.submit})]})}function m0(){const{t:r}=jn(),e=r.exhibit;return R.jsxs(ll,{title:r.nav.exhibit,lead:e.lead,children:[R.jsx("div",{className:"kicker",children:e.kicker}),R.jsx("h2",{className:"section-title",style:{marginTop:0},children:e.title}),R.jsx("div",{className:"card-grid three",style:{margin:"28px 0 48px"},children:e.layers.map(i=>R.jsxs("article",{className:"card",children:[R.jsx("div",{className:"num display",children:i.n}),R.jsx("p",{children:i.t})]},i.t))}),R.jsx("h3",{className:"section-title",style:{fontSize:28},children:e.modesTitle}),R.jsx("div",{className:"card-grid two",style:{margin:"16px 0 48px"},children:e.modes.map(i=>R.jsxs("article",{className:"card",children:[R.jsx("h3",{children:i.t}),R.jsx("p",{children:i.d})]},i.t))}),R.jsx("h3",{className:"section-title",style:{fontSize:28},children:e.pavilionsTitle}),R.jsx("div",{className:"chips",children:e.pavilions.map(i=>R.jsx("span",{className:"chip",children:i},i))}),R.jsxs("div",{className:"split",children:[R.jsxs("div",{children:[R.jsx("h3",{className:"section-title",style:{fontSize:28},children:e.formTitle}),R.jsx("p",{className:"lead",children:e.formLead}),R.jsx(hp,{variant:"exhibit"})]}),R.jsx("div",{className:"media-frame",children:R.jsx("img",{src:"/images/zone-exhibition.jpg",alt:""})})]})]})}function g0(){const{t:r}=jn(),e=r.visit;return R.jsxs(ll,{title:r.nav.visit,lead:e.lead,children:[R.jsx("div",{className:"kicker",children:e.kicker}),R.jsx("h2",{className:"section-title",style:{marginTop:0},children:e.title}),R.jsx("div",{className:"card-grid three",style:{margin:"24px 0 48px"},children:e.groups.map(i=>R.jsxs("article",{className:"card",children:[R.jsx("h3",{children:i.t}),R.jsx("p",{children:i.d})]},i.t))}),R.jsxs("div",{className:"split",children:[R.jsxs("div",{children:[R.jsx("h3",{className:"section-title",style:{fontSize:28},children:e.formTitle}),R.jsx("p",{className:"lead",children:e.formLead}),R.jsx(hp,{variant:"visit"})]}),R.jsx("div",{className:"media-frame",children:R.jsx("img",{src:"/images/zone-summit.jpg",alt:""})})]})]})}function v0(){const{t:r}=jn(),e=r.problems;return R.jsxs(ll,{title:r.nav.problems,lead:e.lead,children:[R.jsx("div",{className:"kicker",children:e.kicker}),R.jsx("h2",{className:"section-title",style:{marginTop:0},children:e.title}),R.jsx("div",{className:"card-grid three",style:{margin:"24px 0 48px"},children:e.tools.map(i=>R.jsxs("article",{className:"card",children:[R.jsx("h3",{children:i.t}),R.jsx("p",{children:i.d})]},i.t))}),R.jsxs("div",{className:"split",children:[R.jsx("div",{className:"media-frame",children:R.jsx("img",{src:"/images/problem-wall.jpg",alt:""})}),R.jsxs("div",{children:[R.jsx("h3",{className:"section-title",style:{fontSize:28},children:e.formTitle}),R.jsx("p",{className:"lead",children:e.formLead}),R.jsx(hp,{variant:"problem"})]})]})]})}function _0(){const{t:r}=jn(),e=r.venue;return R.jsxs(ll,{title:r.nav.venue,lead:e.lead,children:[R.jsx("div",{className:"kicker",children:e.kicker}),R.jsx("h2",{className:"section-title",style:{marginTop:0},children:e.title}),R.jsxs("div",{className:"split",children:[R.jsx("div",{className:"media-frame",children:R.jsx("img",{src:"/images/venue-merc.jpg",alt:""})}),R.jsx("div",{children:e.facts.map(i=>R.jsxs("article",{className:"card",style:{marginBottom:12},children:[R.jsx("h3",{children:i.t}),R.jsx("p",{children:i.d})]},i.t))})]}),R.jsxs("div",{style:{marginTop:48},children:[R.jsx("h3",{className:"section-title",style:{fontSize:28},children:e.roleTitle}),R.jsx("p",{className:"lead",children:e.role}),R.jsx("div",{className:"media-frame",style:{maxWidth:920,marginTop:24},children:R.jsx("img",{src:"/images/live-lab.jpg",alt:""})})]})]})}function mw(){return R.jsx(EE,{children:R.jsx(kM,{children:R.jsxs(kn,{element:R.jsx(NE,{}),children:[R.jsx(kn,{index:!0,element:R.jsx(h0,{})}),R.jsx(kn,{path:"program",element:R.jsx(p0,{})}),R.jsx(kn,{path:"exhibit",element:R.jsx(m0,{})}),R.jsx(kn,{path:"visit",element:R.jsx(g0,{})}),R.jsx(kn,{path:"problems",element:R.jsx(v0,{})}),R.jsx(kn,{path:"venue",element:R.jsx(_0,{})}),R.jsx(kn,{path:"en",element:R.jsx(h0,{})}),R.jsx(kn,{path:"en/program",element:R.jsx(p0,{})}),R.jsx(kn,{path:"en/exhibit",element:R.jsx(m0,{})}),R.jsx(kn,{path:"en/visit",element:R.jsx(g0,{})}),R.jsx(kn,{path:"en/problems",element:R.jsx(v0,{})}),R.jsx(kn,{path:"en/venue",element:R.jsx(_0,{})})]})})})}HS.createRoot(document.getElementById("root")).render(R.jsx(Q.StrictMode,{children:R.jsx(bx,{children:R.jsx(hE,{children:R.jsx(mw,{})})})}));
