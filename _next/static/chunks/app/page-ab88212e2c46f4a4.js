(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5371:function(t,e,n){Promise.resolve().then(n.bind(n,3223)),Promise.resolve().then(n.bind(n,8401)),Promise.resolve().then(n.bind(n,9597))},3223:function(t,e,n){"use strict";var r=n(7437),i=n(4635),a=n(6648);e.default=()=>(0,r.jsx)("div",{className:"w-full h-full relative style={{ backgroundColor: '#1c1c22' }}",children:(0,r.jsx)(i.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:2.4,duration:.4,ease:"easeInOut"}},children:(0,r.jsxs)(i.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:2,duration:.4,ease:"easeIn"}},className:"relative w-[290px] h-[290px] xl:w-[380px] xl:h-[380px] mix-blend-lighten",children:[(0,r.jsx)(a.default,{src:"/assets/Profile.png",priority:!0,quality:100,fill:!0,sizes:"(max-width: 600px) 100vw, 50vw",alt:"",className:"object-contain rounded-full"}),(0,r.jsx)(i.E.svg,{className:"absolute inset-0 w-full h-full",fill:"transparent",viewBox:"0 0 506 506",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)(i.E.circle,{cx:"253",cy:"253",r:"270",stroke:"#FFD700",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",initial:{strokeDasharray:"24 10 0 0"},animate:{strokeDasharray:["15 120 25 25","16 25 92 72"," 4 250 22 22"],rotate:[120,360]},transition:{duration:20,repeat:1/0,repeatType:"reverse"}})})]})})})},8401:function(t,e,n){"use strict";var r=n(7437),i=n(7138),a=n(1942);let s=[{icon:(0,r.jsx)(a.hJX,{}),path:"https://github.com/MerajuddinMalik"},{icon:(0,r.jsx)(a.BUd,{}),path:"https://www.linkedin.com/in/merajuddinmalik/"},{icon:(0,r.jsx)(a.V2E,{}),path:"https://www.youtube.com/@zemimaas"},{icon:(0,r.jsx)(a.erk,{}),path:"https://www.behance.net/merajuddin136/projects"},{icon:(0,r.jsx)(a.hIz,{}),path:"https://dribbble.com/MerajUddin/shots"}];e.default=t=>{let{containerStyles:e,iconStyles:n}=t;return(0,r.jsx)("div",{className:e,children:s.map((t,e)=>(0,r.jsx)(i.default,{href:t.path,className:n,children:t.icon},e))})}},9597:function(t,e,n){"use strict";var r=n(7437),i=n(7095);let a=[{num:2,Text:"Years of Experience"},{num:10,Text:"Projets Completed"},{num:"15",Text:"Technologies Knowledge"},{num:0,Text:"Code Commits"}];e.default=()=>(0,r.jsx)("section",{className:"pt-4 pb-12 xl:pt-0 xl:pb-0",children:(0,r.jsx)("div",{className:"contanner mx-auto",children:(0,r.jsx)("div",{className:"flex flex-wrap gap-6 max-w-[80vm] mx-auto xl:max-w-none",children:a.map((t,e)=>(0,r.jsxs)("div",{className:"flex-1 flex gap-4 items-center justify-center xl:justify-center",children:[(0,r.jsx)(i.ZP,{end:t.num,duration:5,delay:2,className:"text-4xl xl:text-6xl font-extrabold"}),(0,r.jsx)("p",{className:"".concat(t.Text.length<15?"max-w-[100px]":"max-w-[150px]","leading-sung text-white/80"),children:t.Text})]},e))})})})},7992:function(t,e,n){"use strict";n.r(e),n.d(e,{CountUp:function(){return i}});var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(){function t(t,e,n){var i=this;this.endVal=e,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.options.onCompleteCallback&&i.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,r,a=(Math.abs(t).toFixed(i.options.decimalPlaces)+"").split(".");if(e=a[0],n=a.length>1?i.options.decimal+a[1]:"",i.options.useGrouping){r="";for(var s=3,o=0,l=0,u=e.length;l<u;++l)i.options.useIndianSeparators&&4===l&&(s=2,o=1),0!==l&&o%s==0&&(r=i.options.separator+r),o++,r=e[u-l-1]+r;e=r}return i.options.numerals&&i.options.numerals.length&&(e=e.replace(/[0-9]/g,function(t){return i.options.numerals[+t]}),n=n.replace(/[0-9]/g,function(t){return i.options.numerals[+t]})),(t<0?"-":"")+i.options.prefix+e+n+i.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return i.handleScroll(i)}),window.onscroll=function(){window.onScrollFns.forEach(function(t){return t()})},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+window.pageYOffset,i=n.top+n.height+window.pageYOffset;i<e&&i>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>i||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>t,Math.abs(t-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var e=this.countDown?1:-1;this.endVal=t+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},7095:function(t,e,n){"use strict";var r=n(2265),i=n(7992);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach(function(e){!function(t,e,n){var r;(e="symbol"==typeof(r=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?r:String(r))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function o(){return(o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var c="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;function p(t){var e=r.useRef(t);return c(function(){e.current=t}),r.useCallback(function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)},[])}var f=function(t,e){var n=e.decimal,r=e.decimals,a=e.duration,s=e.easingFn,o=e.end,l=e.formattingFn,u=e.numerals,c=e.prefix,p=e.separator,f=e.start,d=e.suffix,h=e.useEasing,m=e.useGrouping,g=e.useIndianSeparators,y=e.enableScrollSpy,v=e.scrollSpyDelay,b=e.scrollSpyOnce,w=e.plugin;return new i.CountUp(t,o,{startVal:f,duration:a,decimal:n,decimalPlaces:r,easingFn:s,formattingFn:l,numerals:u,separator:p,prefix:c,suffix:d,plugin:w,useEasing:h,useIndianSeparators:g,useGrouping:m,enableScrollSpy:y,scrollSpyDelay:v,scrollSpyOnce:b})},d=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],h={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},m=function(t){var e=Object.fromEntries(Object.entries(t).filter(function(t){return void 0!==(function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,a,s,o=[],l=!0,u=!1;try{for(a=(n=n.call(t)).next;!(l=(r=a.call(n)).done)&&(o.push(r.value),2!==o.length);l=!0);}catch(t){u=!0,i=t}finally{try{if(!l&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw i}}return o}}(t,2)||function(t,e){if(t){if("string"==typeof t)return u(t,2);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,2)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1]})),n=r.useMemo(function(){return s(s({},h),e)},[t]),i=n.ref,a=n.startOnMount,o=n.enableReinitialize,c=n.delay,m=n.onEnd,g=n.onStart,y=n.onPauseResume,v=n.onReset,b=n.onUpdate,w=l(n,d),x=r.useRef(),V=r.useRef(),E=r.useRef(!1),j=p(function(){return f("string"==typeof i?i:i.current,w)}),O=p(function(t){var e=x.current;if(e&&!t)return e;var n=j();return x.current=n,n}),S=p(function(){var t=function(){return O(!0).start(function(){null==m||m({pauseResume:F,reset:N,start:A,update:P})})};c&&c>0?V.current=setTimeout(t,1e3*c):t(),null==g||g({pauseResume:F,reset:N,update:P})}),F=p(function(){O().pauseResume(),null==y||y({reset:N,start:A,update:P})}),N=p(function(){O().el&&(V.current&&clearTimeout(V.current),O().reset(),null==v||v({pauseResume:F,start:A,update:P}))}),P=p(function(t){O().update(t),null==b||b({pauseResume:F,reset:N,start:A})}),A=p(function(){N(),S()}),C=p(function(t){a&&(t&&N(),S())});return r.useEffect(function(){E.current?o&&C(!0):(E.current=!0,C())},[o,E,C,c,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect(function(){return function(){N()}},[N]),{start:A,pauseResume:F,reset:N,update:P,getCountUp:O}},g=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,i=t.containerProps,a=t.children,u=t.style,c=l(t,g),f=r.useRef(null),d=r.useRef(!1),h=m(s(s({},c),{},{ref:f,startOnMount:"function"!=typeof a||0===t.delay,enableReinitialize:!1})),y=h.start,v=h.reset,b=h.update,w=h.pauseResume,x=h.getCountUp,V=p(function(){y()}),E=p(function(e){t.preserveValue||v(),b(e)}),j=p(function(){if("function"==typeof t.children&&!(f.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}x()});r.useEffect(function(){j()},[j]),r.useEffect(function(){d.current&&E(t.end)},[t.end,E]);var O=n&&t;return(r.useEffect(function(){n&&d.current&&V()},[V,n,O]),r.useEffect(function(){!n&&d.current&&V()},[V,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect(function(){d.current=!0},[]),"function"==typeof a)?a({countUpRef:f,start:y,reset:v,update:b,pauseResume:w,getCountUp:x}):r.createElement("span",o({className:e,ref:f,style:u},i),void 0!==t.start?x().formattingFn(t.start):"")}}},function(t){t.O(0,[699,650,138,648,971,23,744],function(){return t(t.s=5371)}),_N_E=t.O()}]);