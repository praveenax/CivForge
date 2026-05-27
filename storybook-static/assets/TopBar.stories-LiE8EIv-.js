import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./iframe-DqXOPkBZ.js";import{t as r}from"./jsx-runtime-BNO8td4Y.js";function i(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function a(e){if(Array.isArray(e))return e}function o(e){if(Array.isArray(e))return i(e)}function s(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,x(r.key),r)}}function l(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=te(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function d(e,t,n){return(t=x(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function p(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function m(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?g(Object(n),!0).forEach(function(t){d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function v(e,t){return a(e)||p(e,t)||te(e,t)||m()}function y(e){return o(e)||f(e)||te(e)||h()}function b(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function x(e){var t=b(e,`string`);return typeof t==`symbol`?t:t+``}function ee(e){"@babel/helpers - typeof";return ee=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ee(e)}function te(e,t){if(e){if(typeof e==`string`)return i(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function ne(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[A]}})}function re(e){var t=O.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function ie(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}function ae(e){return L.push(e),function(){L.splice(L.indexOf(e),1)}}function oe(e){if(!(!e||!k)){var t=O.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=O.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return O.head.insertBefore(t,r),e}}function se(){for(var e=12,t=``;e-- >0;)t+=Cr[Math.random()*62|0];return t}function S(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ce(e){return e.classList?S(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function le(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function ue(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${le(e[n])}" `},``).trim()}function de(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function fe(e){return e.size!==z.size||e.x!==z.x||e.y!==z.y||e.rotate!==z.rotate||e.flipX||e.flipY}function pe(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function me(e){var t=e.transform,n=e.width,r=n===void 0?Zn:n,i=e.height,a=i===void 0?Zn:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&Lt?c+=`translate(${t.x/R-r/2}em, ${t.y/R-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/R}em), calc(-50% + ${t.y/R}em)) `:c+=`translate(${t.x/R}em, ${t.y/R}em) `,c+=`scale(${t.size/R*(t.flipX?-1:1)}, ${t.size/R*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}function he(){var e=Qn,t=$n,n=I.cssPrefix,r=I.replacementClass,i=wr;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}function ge(){I.autoAddCss&&!Tr&&(oe(he()),Tr=!0)}function _e(e){k&&(kr?setTimeout(e,0):Dr.push(e))}function ve(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?le(e):`<${t} ${ue(r)}>${a.map(ve).join(``)}</${t}>`}function ye(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function be(e){return y(e).length===1?e.codePointAt(0).toString(16):null}function xe(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Se(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=xe(t);typeof V.hooks.addPack==`function`&&!r?V.hooks.addPack(e,xe(t)):V.styles[e]=_(_({},V.styles[e]||{}),i),e===`fas`&&Se(`fa`,t)}function Ce(e){return~xr.indexOf(e)}function we(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Ce(i)?i:null}function Te(e,t){return(Ir[e]||{})[t]}function Ee(e,t){return(Lr[e]||{})[t]}function C(e,t){return(Br[e]||{})[t]}function De(e){return Rr[e]||{prefix:null,iconName:null}}function Oe(e){var t=zr[e],n=Te(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function w(){return Fr}function ke(e){var t=A,n=Nr.reduce(function(e,t){return e[t]=`${I.cssPrefix}-${t}`,e},{});return Dn.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Pr[r].includes(e)}))&&(t=r)}),t}function Ae(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?A:t,r=ur[n][e];if(n===j&&!e)return`fad`;var i=fr[n][e]||fr[n][r],a=e in V.styles?e:null;return i||a||null}function je(e){var t=[],n=null;return e.forEach(function(e){var r=we(I.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Me(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}function Ne(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=Me(e.filter(function(e){return Ur.includes(e)})),a=Me(e.filter(function(e){return!Ur.includes(e)})),o=v(i.filter(function(e){return r=e,!Ut.includes(e)}),1)[0],s=o===void 0?null:o,c=ke(i),l=_(_({},je(a)),{},{prefix:Ae(s,{family:c})});return _(_(_({},l),Fe({values:e,family:c,styles:H,config:I,canonical:l,givenPrefix:r})),Pe(n,r,l))}function Pe(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?De(i):{},o=C(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!H.far&&H.fas&&!I.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}function Fe(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===j,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Wr.includes(n)&&(Object.keys(s).find(function(e){return Gr.includes(e)})||l.autoFetchSvg)&&(r.prefix=An.get(n).defaultShortPrefixId,r.iconName=C(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=w()||`fas`),r}function Ie(e,t){var n=t.mixoutsTo;return qr=e,U={},Object.keys(W).forEach(function(e){Jr.indexOf(e)===-1&&delete W[e]}),qr.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),ee(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){U[e]||(U[e]=[]),U[e].push(r[e])})}e.provides&&e.provides(W)}),n}function Le(e,t){var n=[...arguments].slice(2);return(U[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function T(e){var t=[...arguments].slice(1);(U[e]||[]).forEach(function(e){e.apply(null,t)})}function E(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return W[e]?W[e].apply(null,t):void 0}function Re(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||w();if(t)return t=C(n,t)||t,ye(Yr.definitions,n,t)||ye(V.styles,n,t)}function ze(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return ve(e)})}}),Object.defineProperty(e,"node",{get:function(){if(k){var t=O.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function Be(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(fe(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=de(_(_({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Ve(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${I.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:_(_({},i),{},{id:o}),children:r}]}]}function He(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Ue(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,p=f.width,m=f.height,h=[I.replacementClass,a?`${I.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:_(_({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!He(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[N]=``);var v=_(_({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:_({},l.styles)}),y=r.found&&n.found?E(`generateAbstractMask`,v)||{children:[],attributes:{}}:E(`generateAbstractIcon`,v)||{children:[],attributes:{}},b=y.children,x=y.attributes;return v.children=b,v.attributes=x,s?Ve(v):Be(v)}function We(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=_(_({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[N]=``);var l=_({},a.styles);fe(i)&&(l.transform=me({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=de(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Ge(e){var t=e.content,n=e.extra,r=_(_({},n.attributes),{},{class:n.classes.join(` `)}),i=de(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}function Ke(e){var t=e[0],n=e[1],r=v(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${I.cssPrefix}-${br.GROUP}`},children:[{tag:`path`,attributes:{class:`${I.cssPrefix}-${br.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${I.cssPrefix}-${br.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}function qe(e,t){!cr&&!I.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Je(e,t){var n=t;return t===`fa`&&I.styleDefault!==null&&(t=w()),new Promise(function(r,i){if(n===`fa`){var a=De(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Zr[t]&&Zr[t][e]){var o=Zr[t][e];return r(Ke(o))}qe(e,t),r(_(_({},Qr),{},{icon:I.showMissingIcons&&e&&E(`missingIconAbstract`)||{}}))})}function Ye(e){return typeof(e.getAttribute?e.getAttribute(N):null)==`string`}function Xe(e){var t=e.getAttribute?e.getAttribute(nr):null,n=e.getAttribute?e.getAttribute(rr):null;return t&&n}function Ze(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function Qe(){return I.autoReplaceSvg===!0?ai.replace:ai[I.autoReplaceSvg]||ai.replace}function $e(e){return O.createElementNS(`http://www.w3.org/2000/svg`,e)}function et(e){return O.createElement(e)}function tt(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?$e:et:t;if(typeof e==`string`)return O.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(tt(e,{ceFn:n}))}),r}function nt(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}function rt(e){e()}function it(e,t){var n=typeof t==`function`?t:ii;if(e.length===0)n();else{var r=rt;I.mutateApproach===ar&&(r=D.requestAnimationFrame||rt),r(function(){var t=Qe(),r=ri.begin(`mutate`);e.map(t),r(),n()})}}function at(){oi=!0}function ot(){oi=!1}function st(e){if(Ft&&I.observeMutations){var t=e.treeCallback,n=t===void 0?ii:t,r=e.nodeCallback,i=r===void 0?ii:r,a=e.pseudoElementsCallback,o=a===void 0?ii:a,s=e.observeMutationsRoot,c=s===void 0?O:s;si=new Ft(function(e){if(!oi){var t=w();S(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Ye(e.addedNodes[0])&&(I.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&I.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Ye(e.target)&&~yr.indexOf(e.attributeName))if(e.attributeName===`class`&&Xe(e.target)){var r=Ne(ce(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(nr,a||t),s&&e.target.setAttribute(rr,s)}else Ze(e.target)&&i(e.target)})}}),k&&si.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ct(){si&&si.disconnect()}function lt(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function ut(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Ne(ce(e));return i.prefix||=w(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Ee(i.prefix,e.innerText)||Te(i.prefix,be(e.innerText))),!i.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function dt(e){return S(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function ft(){return{iconName:null,prefix:null,transform:z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function pt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ut(e),r=n.iconName,i=n.prefix,a=n.rest,o=dt(e),s=Le(`parseNodeAttributes`,{},e);return _({iconName:r,prefix:i,transform:z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?lt(e):[],attributes:o}},s)}function mt(e){var t=I.autoReplaceSvg===`nest`?pt(e,{styleParser:!1}):pt(e);return~t.extra.classes.indexOf(_r)?E(`generateLayersText`,e,t):E(`generateSvgReplacementMutation`,e,t)}function ht(){return[].concat(y(Mn),y(Gn))}function gt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!k)return Promise.resolve();var n=O.documentElement.classList,r=function(e){return n.add(`${ir}-${e}`)},i=function(e){return n.remove(`${ir}-${e}`)},a=I.autoFetchSvg?ht():Ut.concat(Object.keys(ci));a.includes(`fa`)||a.push(`fa`);var o=[`.${_r}:not([${N}])`].concat(a.map(function(e){return`.${e}:not([${N}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=S(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=ri.begin(`onTree`),l=s.reduce(function(e,t){try{var n=mt(t);n&&e.push(n)}catch(e){cr||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){it(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function _t(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;mt(e).then(function(e){e&&it([e],t)})}function vt(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Re(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Re(i||{}),e(r,_(_({},n),{},{mask:i}))}}function yt(e){return be(y(e.replace(mi,``))[0]||``)}function bt(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(mi,``),r=n.codePointAt(0),i=r>=hi[0]&&r<=hi[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function xt(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(_i[n]||{})[i]||vi[n]}function St(e,t){var n=`${tr}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=S(e.children).filter(function(e){return e.getAttribute(er)===t})[0],o=D.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(vr),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=xt(s,l),p=yt(d),m=c[0].startsWith(`FontAwesome`),h=bt(o),g=Te(f,p),v=g;if(m){var y=Oe(p);y.iconName&&y.prefix&&(g=y.iconName,f=y.prefix)}if(g&&!h&&(!a||a.getAttribute(nr)!==f||a.getAttribute(rr)!==v)){e.setAttribute(n,v),a&&e.removeChild(a);var b=ft(),x=b.extra;x.attributes[er]=t,Je(g,f).then(function(i){var a=Ue(_(_({},b),{},{icons:{main:i,mask:Hr()},prefix:f,iconName:v,extra:x,watchable:!0})),o=O.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return ve(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Ct(e){return Promise.all([St(e,`::before`),St(e,`::after`)])}function wt(e){return e.parentNode!==document.head&&!~or.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(er)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}function Tt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(k){var n;if(t)n=e;else if(I.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=u(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=u(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,d=u(bi(l.selectorText)),f;try{for(d.s();!(f=d.n()).done;){var p=f.value;r.add(p)}}catch(e){d.e(e)}finally{d.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){I.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var m=Array.from(r).join(`, `);try{n=e.querySelectorAll(m)}catch{}}return new Promise(function(e,t){var r=S(n).filter(wt).map(Ct),i=ri.begin(`searchPseudoElements`);at(),Promise.all(r).then(function(){i(),ot(),e()}).catch(function(){i(),ot(),t()})})}}function Et(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Dt(e){return e.tag===`g`?e.children:[e]}var Ot,kt,At,jt,Mt,Nt,Pt,D,O,Ft,It,k,Lt,Rt,zt,Bt,Vt,Ht,Ut,A,j,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,M,Zn,Qn,$n,N,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,P,Sr,F,I,L,R,z,Cr,wr,Tr,Er,B,V,Dr,Or,kr,Ar,jr,H,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,U,W,Jr,Yr,G,Xr,Zr,Qr,$r,ei,K,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,q,Di,Oi,ki=e((()=>{Ot=function(){},kt={},At={},jt=null,Mt={mark:Ot,measure:Ot};try{typeof window<`u`&&(kt=window),typeof document<`u`&&(At=document),typeof MutationObserver<`u`&&(jt=MutationObserver),typeof performance<`u`&&(Mt=performance)}catch{}Nt=(kt.navigator||{}).userAgent,Pt=Nt===void 0?``:Nt,D=kt,O=At,Ft=jt,It=Mt,D.document,k=!!O.documentElement&&!!O.head&&typeof O.addEventListener==`function`&&typeof O.createElement==`function`,Lt=~Pt.indexOf(`MSIE`)||~Pt.indexOf(`Trident/`),zt=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Bt=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Vt={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},Ht={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Ut=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],A=`classic`,j=`duotone`,Wt=`sharp`,Gt=`sharp-duotone`,Kt=`chisel`,qt=`etch`,Jt=`graphite`,Yt=`jelly`,Xt=`jelly-duo`,Zt=`jelly-fill`,Qt=`notdog`,$t=`notdog-duo`,en=`slab`,tn=`slab-press`,nn=`thumbprint`,rn=`utility`,an=`utility-duo`,on=`utility-fill`,sn=`whiteboard`,cn=`Classic`,ln=`Duotone`,un=`Sharp`,dn=`Sharp Duotone`,fn=`Chisel`,pn=`Etch`,mn=`Graphite`,hn=`Jelly`,gn=`Jelly Duo`,_n=`Jelly Fill`,vn=`Notdog`,yn=`Notdog Duo`,bn=`Slab`,xn=`Slab Press`,Sn=`Thumbprint`,Cn=`Utility`,wn=`Utility Duo`,Tn=`Utility Fill`,En=`Whiteboard`,Dn=[A,j,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn],Rt={},d(d(d(d(d(d(d(d(d(d(Rt,A,cn),j,ln),Wt,un),Gt,dn),Kt,fn),qt,pn),Jt,mn),Yt,hn),Xt,gn),Zt,_n),d(d(d(d(d(d(d(d(d(Rt,Qt,vn),$t,yn),en,bn),tn,xn),nn,Sn),rn,Cn),an,wn),on,Tn),sn,En),On={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},kn={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},An=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),jn={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-press":{regular:`faslpr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},whiteboard:{semibold:`fawsb`}},Mn=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Nn={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},Pn=[`kit`],d(d({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`),Fn={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},In={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},Ln={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},Rn={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},Bn={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Vn=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],zn={},d(d(d(d(d(d(d(d(d(d(zn,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),d(d(d(d(d(d(d(d(d(zn,`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`slab`,`Slab`),`slab-press`,`Slab Press`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`whiteboard`,`Whiteboard`),d(d({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`),Hn={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},Un={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},Wn={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},Gn=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Vn,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Kn=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],qn=[1,2,3,4,5,6,7,8,9,10],Jn=qn.concat([11,12,13,14,15,16,17,18,19,20]),Yn=[].concat(y(Object.keys(Un)),Kn,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`inverse`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,`width-auto`,`width-fixed`,Bn.GROUP,Bn.SWAP_OPACITY,Bn.PRIMARY,Bn.SECONDARY],qn.map(function(e){return`${e}x`}),Jn.map(function(e){return`w-${e}`})),Xn={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},M=`___FONT_AWESOME___`,Zn=16,Qn=`fa`,$n=`svg-inline--fa`,N=`data-fa-i2svg`,er=`data-fa-pseudo-element`,tr=`data-fa-pseudo-element-pending`,nr=`data-prefix`,rr=`data-icon`,ir=`fontawesome-i2svg`,ar=`async`,or=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],sr=[`::before`,`::after`,`:before`,`:after`],cr=function(){try{return!0}catch{return!1}}(),lr=_({},Vt),lr[A]=_(_(_(_({},{"fa-duotone":`duotone`}),Vt[A]),Nn.kit),Nn[`kit-duotone`]),ur=ne(lr),dr=_({},jn),dr[A]=_(_(_(_({},{duotone:`fad`}),dr[A]),Rn.kit),Rn[`kit-duotone`]),fr=ne(dr),pr=_({},Wn),pr[A]=_(_({},pr[A]),Ln.kit),mr=ne(pr),hr=_({},Hn),hr[A]=_(_({},hr[A]),Fn.kit),ne(hr),gr=zt,_r=`fa-layers-text`,vr=Bt,ne(_({},On)),yr=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],br=Ht,xr=[].concat(y(Pn),y(Yn)),P=D.FontAwesomeConfig||{},O&&typeof O.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=v(e,2),n=t[0],r=t[1],i=ie(re(n));i!=null&&(P[r]=i)}),Sr={styleDefault:`solid`,familyDefault:A,cssPrefix:Qn,replacementClass:$n,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},P.familyPrefix&&(P.cssPrefix=P.familyPrefix),F=_(_({},Sr),P),F.autoReplaceSvg||(F.observeMutations=!1),I={},Object.keys(Sr).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(t){F[e]=t,L.forEach(function(e){return e(I)})},get:function(){return F[e]}})}),Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(e){F.cssPrefix=e,L.forEach(function(e){return e(I)})},get:function(){return F.cssPrefix}}),D.FontAwesomeConfig=I,L=[],R=Zn,z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1},Cr=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`,wr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`,Tr=!1,Er={mixout:function(){return{dom:{css:he,insertCss:ge}}},hooks:function(){return{beforeDOMElementCreation:function(){ge()},beforeI2svg:function(){ge()}}}},B=D||{},B[M]||(B[M]={}),B[M].styles||(B[M].styles={}),B[M].hooks||(B[M].hooks={}),B[M].shims||(B[M].shims=[]),V=B[M],Dr=[],Or=function(){O.removeEventListener(`DOMContentLoaded`,Or),kr=1,Dr.map(function(e){return e()})},kr=!1,k&&(kr=(O.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(O.readyState),kr||O.addEventListener(`DOMContentLoaded`,Or)),Ar=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},jr=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Ar(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l},H=V.styles,Mr=V.shims,Nr=Object.keys(mr),Pr=Nr.reduce(function(e,t){return e[t]=Object.keys(mr[t]),e},{}),Fr=null,Ir={},Lr={},Rr={},zr={},Br={},Vr=function(){var e=function(e){return jr(H,function(t,n,r){return t[r]=jr(n,e,{}),t},{})};Ir=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Lr=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Br=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in H||I.autoFetchSvg,n=jr(Mr,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Rr=n.names,zr=n.unicodes,Fr=Ae(I.styleDefault,{family:I.familyDefault})},ae(function(e){Fr=Ae(e.styleDefault,{family:I.familyDefault})}),Vr(),Hr=function(){return{prefix:null,iconName:null,rest:[]}},Ur=Gn.concat(Mn),Wr=Dn.filter(function(e){return e!==A||e!==j}),Gr=Object.keys(Wn).filter(function(e){return e!==A}).map(function(e){return Object.keys(Wn[e])}).flat(),Kr=function(){function e(){s(this,e),this.definitions={}}return l(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=_(_({},e.definitions[n]||{}),t[n]),Se(n,t[n]);var r=mr[A][n];r&&Se(r,t[n]),Vr()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),qr=[],U={},W={},Jr=Object.keys(W),Yr=new Kr,G={noAuto:function(){I.autoReplaceSvg=!1,I.observeMutations=!1,T(`noAuto`)},config:I,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return k?(T(`beforeI2svg`,e),E(`pseudoElements2svg`,e),E(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,_e(function(){Xr({autoReplaceSvgRoot:t}),T(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(ee(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:C(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Ae(e[0]);return{prefix:n,iconName:C(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${I.cssPrefix}-`)>-1||e.match(gr))){var r=Ne(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||w(),iconName:C(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=w();return{prefix:i,iconName:C(i,e)||e}}}},library:Yr,findIconDefinition:Re,toHtml:ve},Xr=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?O:e;(Object.keys(V.styles).length>0||I.autoFetchSvg)&&k&&I.autoReplaceSvg&&G.dom.i2svg({node:t})},Zr=V.styles,Qr={found:!1,width:512,height:512},$r=function(){},ei=I.measurePerformance&&It&&It.mark&&It.measure?It:{mark:$r,measure:$r},K=`FA "7.2.0"`,ti=function(e){return ei.mark(`${K} ${e} begins`),function(){return ni(e)}},ni=function(e){ei.mark(`${K} ${e} ends`),ei.measure(`${K} ${e}`,`${K} ${e} begins`,`${K} ${e} ends`)},ri={begin:ti,end:ni},ii=function(){},ai={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(tt(e),t)}),t.getAttribute(N)===null&&I.keepOriginalSource){var n=O.createComment(nt(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~ce(t).indexOf(I.replacementClass))return ai.replace(e);var r=RegExp(`${I.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===I.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return ve(e)}).join(`
`);t.setAttribute(N,``),t.innerHTML=a}},oi=!1,si=null,ci=V.styles,li=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?z:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,v=e.iconName,y=e.icon;return ze(_({type:`icon`},e),function(){return T(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Ue({icons:{main:Ke(y),mask:s?Ke(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:v,transform:_(_({},z),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},ui={mixout:function(){return{icon:vt(li)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=gt,e.nodeCallback=_t,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?O:t,r=e.callback;return gt(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Je(n,r),o.iconName?Je(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=v(o,2),u=l[0],d=l[1];t([e,Ue({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=de(a);o.length>0&&(n.style=o);var s;return fe(i)&&(s=E(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},di={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return ze({type:`layer`},function(){T(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${I.cssPrefix}-layers`].concat(y(r)).join(` `)},children:n}]})}}}},fi={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return ze({type:`counter`,content:e},function(){return T(`beforeDOMElementCreation`,{content:e,params:t}),Ge({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${I.cssPrefix}-layers-counter`].concat(y(a))}})})}}}},pi={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?z:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return ze({type:`text`,content:e},function(){return T(`beforeDOMElementCreation`,{content:e,params:t}),We({content:e,transform:_(_({},z),r),extra:{attributes:s,styles:l,classes:[`${I.cssPrefix}-layers-text`].concat(y(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(Lt){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,We({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},mi=RegExp(`"`,`ug`),hi=[1105920,1112319],gi=_(_(_(_({},{FontAwesome:{normal:`fas`,400:`fas`}}),kn),Xn),In),_i=Object.keys(gi).reduce(function(e,t){return e[t.toLowerCase()]=gi[t],e},{}),vi=Object.keys(_i).reduce(function(e,t){var n=_i[t];return e[t]=n[900]||y(Object.entries(n))[0][1],e},{}),yi=function(e){return!!e&&sr.some(function(t){return e.includes(t)})},bi=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=u(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(yi(a)){var o=sr.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t},xi={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Tt,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?O:t;I.searchPseudoElements&&Tt(n)}}},Si=!1,Ci={mixout:function(){return{dom:{unwatch:function(){at(),Si=!0}}}},hooks:function(){return{bootstrap:function(){st(Le(`mutationObserverCallbacks`,{}))},noAuto:function(){ct()},watch:function(e){var t=e.observeMutationsRoot;Si?ot():st(Le(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},wi=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Ti={mixout:function(){return{parse:{transform:function(e){return wi(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=wi(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:_({},a.outer),children:[{tag:`g`,attributes:_({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:_(_({},t.icon.attributes),a.path)}]}]}}}},Ei={x:0,y:0,width:`100%`,height:`100%`},Ie([Er,ui,di,fi,pi,xi,Ci,Ti,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Ne(n.split(` `).map(function(e){return e.trim()})):Hr();return r.prefix||=w(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=pe({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:_(_({},Ei),{},{fill:`white`})},p=c.children?{children:c.children.map(Et)}:{},m={tag:`g`,attributes:_({},d.inner),children:[Et(_({tag:c.tag,attributes:_(_({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:_({},d.outer),children:[m]},g=`mask-${a||se()}`,v=`clip-${a||se()}`,y={tag:`mask`,attributes:_(_({},Ei),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},b={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:v},children:Dt(u)},y]};return t.push(b,{tag:`rect`,attributes:_({fill:`currentColor`,"clip-path":`url(#${v})`,mask:`url(#${g})`},Ei)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;D.matchMedia&&(t=D.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:_(_({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=_(_({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:_(_({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:_(_({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:_(_({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:_(_({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:_(_({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:_(_({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:_(_({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:G}),G.noAuto,q=G.config,G.library,G.dom,Di=G.parse,G.findIconDefinition,G.toHtml,Oi=G.icon,G.layer,G.text,G.counter}));function Ai(e){return e-=0,e===e}function ji(e){return Ai(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}function Mi(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ni(e){if(J.has(e))return J.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=ji(n);t[e.startsWith(`webkit`)?Mi(e):e]=r}}}n=a+1}if(J.size===Vi){let e=J.keys().next().value;e&&J.delete(e)}return J.set(e,t),t}function Pi(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),Pi(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=Ni(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[ji(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(Bi)))}return e(t.tag,{...a,...u},...r)}function Fi(e){let t=q.cssPrefix||q.familyPrefix||Y;return t===Y?e:e.replace(new RegExp(String.raw`(?<=^|\s)${Y}-`,`g`),`${t}-`)}function Ii(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,className:b}=e,x=[];return b&&x.push(...b.split(` `)),t&&x.push(X.beat),n&&x.push(X.fade),r&&x.push(X.beatFade),i&&x.push(X.bounce),a&&x.push(X.shake),o&&x.push(X.spin),c&&x.push(X.spinReverse),s&&x.push(X.spinPulse),l&&x.push(X.pulse),u&&x.push(Z.fixedWidth),d&&x.push(Z.inverse),f&&x.push(Z.border),p===!0&&x.push(Z.flip),(p===`horizontal`||p===`both`)&&x.push(Z.flipHorizontal),(p===`vertical`||p===`both`)&&x.push(Z.flipVertical),m!=null&&x.push(Xi[m]),h!=null&&h!==0&&x.push(Yi[h]),g!=null&&x.push(Ji[g]),_&&x.push(Z.swapOpacity),qi()?(v&&x.push(Z.rotateBy),y&&x.push(Z.widthAuto),(q.cssPrefix||q.familyPrefix||Y)===Y?x:x.map(Fi)):x}function Li(e){if(e)return Qi(e)?e:Di.icon(e)}function Ri(e){return Object.keys(e)}var zi,Bi,J,Vi,Hi,Ui,Wi,Gi,Ki,qi,Y,X,Ji,Yi,Xi,Z,Zi,Qi,$i,ea,ta,na,ra=e((()=>{zi=t(n(),1),ki(),r(),Bi=(e,t)=>zi.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}}),J=new Map,Vi=1e3,Hi=Pi.bind(null,zi.createElement),Ui=(e,t)=>{let n=(0,zi.useId)();return e||(t?n:void 0)},Wi=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},typeof process<`u`&&{}.FA_VERSION,Gi=`searchPseudoElementsFullScan`in q&&typeof q.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,Ki=Number.parseInt(Gi)>=7,qi=()=>Ki,Y=`fa`,X={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`},Ji={left:`fa-pull-left`,right:`fa-pull-right`},Yi={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},Xi={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},Z={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`},Zi={default:`fa-layers`},Qi=e=>typeof e==`object`&&`icon`in e&&!!e.icon,$i=new Wi(`FontAwesomeIcon`),ea={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},ta=new Set(Object.keys(ea)),na=zi.forwardRef((e,t)=>{let n={...ea,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=Ui(c,!!i),d=Ui(s,!!o),f=Li(r);if(!f)return $i.error(`Icon lookup is undefined`,r),null;let p=Ii(n),m=typeof l==`string`?Di.transform(l):l,h=Li(i),g=Oi(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return $i.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of Ri(n))ta.has(e)||(v[e]=n[e]);return Hi(_[0],v)}),na.displayName=`FontAwesomeIcon`,`${Zi.default}${Z.fixedWidth}`})),ia,aa,oa,sa,ca,la,ua,da=e((()=>{ia={prefix:`fas`,iconName:`masks-theater`,icon:[576,512,[127917,`theater-masks`],`f630`,`M-5 118L23.5 279.7c14 79.5 76.3 141.8 155.8 155.8l12.7 2.2c-16.5-28.6-27.1-60.7-30.6-94.5l-24.1 4.3c-9.7 1.7-18.8-5.8-16.9-15.5 4.8-24.7 19.1-46.6 39.7-60.9l0-74.6c-1.4 .8-3 1.3-4.7 1.6l-63 11.1c-8.7 1.5-17.3-4.4-15.9-13.1 3.1-19.6 18.4-36 39.1-39.7 17.2-3 33.9 3.5 44.6 15.8l0-22.7c0-22.5 6.9-52.4 32.3-73.4 26-21.5 67.7-43.9 124.9-54.2-30.5-16.3-86.3-32-163.8-18.4-80.3 14.2-128 50.1-150.1 76.1-9 10.5-10.8 24.9-8.4 38.5zM208 138.7l0 174.8c0 80.7 50.5 152.9 126.4 180.4L362.1 504c14.1 5.1 29.6 5.1 43.7 0L433.6 494C509.5 466.4 560 394.3 560 313.5l0-174.8c0-6.9-2.1-13.8-7-18.6-22.6-22.5-78.2-56-169-56s-146.4 33.6-169 56c-4.9 4.9-7 11.7-7 18.6zm66.1 187.1c-1.4-7 7-11 12.7-6.6 26.9 20.6 60.6 32.9 97.2 32.9s70.2-12.3 97.2-32.9c5.7-4.4 14.1-.4 12.7 6.6-10.1 51.4-55.5 90.3-109.9 90.3s-99.8-38.8-109.9-90.3zm.5-101.5C281.2 205.5 299 192 320 192s38.9 13.5 45.4 32.3c2.9 8.4-4.5 15.7-13.4 15.7l-64 0c-8.8 0-16.3-7.4-13.4-15.7zM480 240l-64 0c-8.8 0-16.3-7.4-13.4-15.7 6.5-18.8 24.4-32.3 45.4-32.3s38.9 13.5 45.4 32.3c2.9 8.4-4.5 15.7-13.4 15.7z`]},aa={prefix:`fas`,iconName:`drumstick-bite`,icon:[512,512,[],`f6d7`,`M160 265.2c0 8.5-3.4 16.6-9.4 22.6l-26.8 26.8c-12.3 12.3-32.5 11.4-49.4 7.2-4.6-1.1-9.5-1.8-14.5-1.8-33.1 0-60 26.9-60 60s26.9 60 60 60c6.3 0 12 5.7 12 12 0 33.1 26.9 60 60 60s60-26.9 60-60c0-5-.6-9.8-1.8-14.5-4.2-16.9-5.2-37.1 7.2-49.4l26.8-26.8c6-6 14.1-9.4 22.6-9.4l89.2 0c6.3 0 12.4-.3 18.5-1 11.9-1.2 16.4-15.5 10.8-26-8.5-15.8-13.3-33.8-13.3-53 0-61.9 50.1-112 112-112 8 0 15.7 .8 23.2 2.4 11.7 2.5 24.1-5.9 22-17.6-14.7-82.3-86.7-144.8-173.2-144.8-97.2 0-176 78.8-176 176l0 89.2z`]},oa={prefix:`fas`,iconName:`hourglass-half`,icon:[384,512,[`hourglass-2`],`f252`,`M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l0 11c0 42.4 16.9 83.1 46.9 113.1l67.9 67.9-67.9 67.9C48.9 353.9 32 394.6 32 437l0 11c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-11c0-42.4-16.9-83.1-46.9-113.1l-67.9-67.9 67.9-67.9c30-30 46.9-70.7 46.9-113.1l0-11c17.7 0 32-14.3 32-32S369.7 0 352 0L32 0zM96 75l0-11 192 0 0 11c0 19-5.6 37.4-16 53L112 128c-10.3-15.6-16-34-16-53zm16 309c3.5-5.3 7.6-10.3 12.1-14.9l67.9-67.9 67.9 67.9c4.6 4.6 8.6 9.6 12.2 14.9L112 384z`]},sa={prefix:`fas`,iconName:`landmark`,icon:[512,512,[127963],`f66f`,`M238.7 5.1c10.5-6.8 24.1-6.8 34.6 0l224 144c11.9 7.7 17.4 22.3 13.4 35.9s-16.5 23-30.7 23l-32 0 0 208 51.2 38.4c8.1 6 12.8 15.5 12.8 25.6 0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32 0-10.1 4.7-19.6 12.8-25.6l51.2-38.4 0 0 0-208-32 0c-14.2 0-26.7-9.4-30.7-23s1.5-28.3 13.4-35.9l224-144zM336 208l0 208 64 0 0-208-64 0zM224 416l64 0 0-208-64 0 0 208zM112 208l0 208 64 0 0-208-64 0z`]},ca={prefix:`fas`,iconName:`hammer`,icon:[640,512,[128296],`f6e3`,`M246.9 18.3L271 3.8c21.6-13 46.3-19.8 71.5-19.8 36.8 0 72.2 14.6 98.2 40.7l63.9 63.9c15 15 23.4 35.4 23.4 56.6l0 30.9 19.7 19.7 0 0c15.6-15.6 40.9-15.6 56.6 0s15.6 40.9 0 56.6l-64 64c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L464 240 433.1 240c-21.2 0-41.6-8.4-56.6-23.4l-49.1-49.1c-15-15-23.4-35.4-23.4-56.6l0-12.7c0-11.2-5.9-21.7-15.5-27.4l-41.6-25c-10.4-6.2-10.4-21.2 0-27.4zM50.7 402.7l222.1-222.1 90.5 90.5-222.1 222.1c-25 25-65.5 25-90.5 0s-25-65.5 0-90.5z`]},la={prefix:`fas`,iconName:`coins`,icon:[512,512,[],`f51e`,`M128 96l0-16c0-44.2 86-80 192-80S512 35.8 512 80l0 16c0 30.6-41.3 57.2-102 70.7-2.4-2.8-4.9-5.5-7.4-8-15.5-15.3-35.5-26.9-56.4-35.5-41.9-17.5-96.5-27.1-154.2-27.1-21.9 0-43.3 1.4-63.8 4.1-.2-1.3-.2-2.7-.2-4.1zM432 353l0-46.2c15.1-3.9 29.3-8.5 42.2-13.9 13.2-5.5 26.1-12.2 37.8-20.3l0 15.4c0 26.8-31.5 50.5-80 65zm0-96l0-33c0-4.5-.4-8.8-1-13 15.5-3.9 30-8.6 43.2-14.2s26.1-12.2 37.8-20.3l0 15.4c0 26.8-31.5 50.5-80 65zM0 240l0-16c0-44.2 86-80 192-80s192 35.8 192 80l0 16c0 44.2-86 80-192 80S0 284.2 0 240zm384 96c0 44.2-86 80-192 80S0 380.2 0 336l0-15.4c11.6 8.1 24.5 14.7 37.8 20.3 41.9 17.5 96.5 27.1 154.2 27.1s112.3-9.7 154.2-27.1c13.2-5.5 26.1-12.2 37.8-20.3l0 15.4zm0 80.6l0 15.4c0 44.2-86 80-192 80S0 476.2 0 432l0-15.4c11.6 8.1 24.5 14.7 37.8 20.3 41.9 17.5 96.5 27.1 154.2 27.1s112.3-9.7 154.2-27.1c13.2-5.5 26.1-12.2 37.8-20.3z`]},ua={prefix:`fas`,iconName:`book-open`,icon:[512,512,[128214,128366],`f518`,`M256 141.3l0 309.3 .5-.2C311.1 427.7 369.7 416 428.8 416l19.2 0 0-320-19.2 0c-42.2 0-84.1 8.4-123.1 24.6-16.8 7-33.4 13.9-49.7 20.7zM230.9 61.5L256 72 281.1 61.5C327.9 42 378.1 32 428.8 32L464 32c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-35.2 0c-50.7 0-100.9 10-147.7 29.5l-12.8 5.3c-7.9 3.3-16.7 3.3-24.6 0l-12.8-5.3C184.1 490 133.9 480 83.2 480L48 480c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32l35.2 0c50.7 0 100.9 10 147.7 29.5z`]}}));function fa({onEndTurn:e}){return(0,pa.jsx)(`button`,{type:`button`,className:`turn-button`,onClick:e,children:`End Turn`})}var pa,ma=e((()=>{pa=r(),fa.__docgenInfo={description:``,methods:[],displayName:`TurnButton`}}));function ha({icon:e,label:t,value:n}){return(0,Q.jsxs)(`div`,{className:`stat-card`,children:[(0,Q.jsxs)(`span`,{className:`stat-card-label`,children:[e?(0,Q.jsx)(na,{icon:e}):null,(0,Q.jsx)(`span`,{children:t})]}),(0,Q.jsx)(`strong`,{children:n})]})}function ga({turn:e,player:t,researchProgress:n,onToggleTechTree:r,onOpenList:i,isSimulationRunning:a,onToggleSimulation:o,onEndTurn:s}){let c=Math.max(0,Math.min(100,n?.progressPct??0));return(0,Q.jsx)(`header`,{className:`top-bar`,children:(0,Q.jsxs)(`div`,{className:`stats-row`,children:[(0,Q.jsxs)(`h3`,{className:`game-title`,children:[(0,Q.jsx)(na,{icon:sa}),(0,Q.jsx)(`span`,{children:`CivForge`})]}),(0,Q.jsxs)(`div`,{className:`stats-row-prod`,children:[(0,Q.jsx)(ha,{icon:oa,label:`Turn`,value:e}),(0,Q.jsx)(ha,{icon:aa,label:`Food`,value:t?.stockpile.food??0}),(0,Q.jsx)(ha,{icon:ca,label:`Production`,value:t?.stockpile.production??0}),(0,Q.jsx)(ha,{icon:la,label:`Gold`,value:t?.stockpile.gold??0}),(0,Q.jsx)(ha,{icon:ua,label:`Science`,value:t?.stockpile.science??0}),(0,Q.jsx)(ha,{icon:ia,label:`Culture`,value:t?.stockpile.culture??0})]}),(0,Q.jsx)(`div`,{className:`research-line`,children:n.currentTech?`Researching ${n.currentTech.name}: ${c}%`:`No active research`}),(0,Q.jsx)(`div`,{className:`research-progress`,role:`progressbar`,"aria-label":`Research progress`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":c,children:(0,Q.jsx)(`div`,{className:`research-progress-fill`,style:{width:`${c}%`}})}),(0,Q.jsxs)(`div`,{className:`top-actions`,children:[(0,Q.jsx)(`button`,{type:`button`,onClick:r,children:`Tech Tree`}),(0,Q.jsx)(`button`,{type:`button`,onClick:i,children:`List`}),(0,Q.jsx)(`button`,{type:`button`,onClick:o,children:a?`Stop`:`Start`}),(0,Q.jsx)(fa,{onEndTurn:s})]})]})})}var Q,_a=e((()=>{ra(),da(),ma(),Q=r(),ga.__docgenInfo={description:``,methods:[],displayName:`TopBar`}})),va,$,ya;e((()=>{_a(),va={title:`UI/Top Bar`,component:ga,parameters:{layout:`fullscreen`}},$={args:{turn:12,player:{stockpile:{food:18,production:11,gold:24,science:9,culture:6}},researchProgress:{currentTech:{name:`Bronze Working`},progressPct:64},onToggleTechTree:()=>{},onOpenList:()=>{},isSimulationRunning:!0,onToggleSimulation:()=>{},onEndTurn:()=>{}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    turn: 12,
    player: {
      stockpile: {
        food: 18,
        production: 11,
        gold: 24,
        science: 9,
        culture: 6
      }
    },
    researchProgress: {
      currentTech: {
        name: "Bronze Working"
      },
      progressPct: 64
    },
    onToggleTechTree: () => {},
    onOpenList: () => {},
    isSimulationRunning: true,
    onToggleSimulation: () => {},
    onEndTurn: () => {}
  }
}`,...$.parameters?.docs?.source}}},ya=[`Default`]}))();export{$ as Default,ya as __namedExportsOrder,va as default};