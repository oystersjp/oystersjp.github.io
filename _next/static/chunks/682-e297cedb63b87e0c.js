(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[682],{1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,u=n(7273).Z,a=r(n(7294)),l=n(6273),f=n(2725),c=n(3462),i=n(1018),s=n(7190),d=n(1210),p=n(8684),v="undefined"!==typeof a.default.useTransition,y={};function b(e,t,n,o){if(e&&l.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;y[t+"%"+n+(r?"%"+r:"")]=!0}}var h=a.default.forwardRef((function(e,t){var n,r=e.href,h=e.as,g=e.children,m=e.prefetch,_=e.passHref,C=e.replace,M=e.soft,j=e.shallow,R=e.scroll,x=e.locale,L=e.onClick,O=e.onMouseEnter,E=e.onTouchStart,k=e.legacyBehavior,w=void 0===k?!0!==Boolean(!1):k,P=u(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,!w||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var S=!1!==m,A=o(v?a.default.useTransition():[],2)[1],I=a.default.useContext(c.RouterContext),T=a.default.useContext(i.AppRouterContext);T&&(I=T);var U,Z=a.default.useMemo((function(){var e=o(l.resolveHref(I,r,!0),2),t=e[0],n=e[1];return{href:t,as:h?l.resolveHref(I,h):n||t}}),[I,r,h]),B=Z.href,D=Z.as,H=a.default.useRef(B),K=a.default.useRef(D);w&&(U=a.default.Children.only(n));var N=w?U&&"object"===typeof U&&U.ref:t,G=o(s.useIntersection({rootMargin:"200px"}),3),q=G[0],z=G[1],$=G[2],F=a.default.useCallback((function(e){K.current===D&&H.current===B||($(),K.current=D,H.current=B),q(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[D,N,B,$,q]);a.default.useEffect((function(){var e=z&&S&&l.isLocalURL(B),t="undefined"!==typeof x?x:I&&I.locale,n=y[B+"%"+D+(t?"%"+t:"")];e&&!n&&b(I,B,D,{locale:t})}),[D,B,z,x,S,I]);var J={ref:F,onClick:function(e){w||"function"!==typeof L||L(e),w&&U.props&&"function"===typeof U.props.onClick&&U.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,u,a,f,c,i){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var s=function(){"softPush"in t&&"softReplace"in t?t[u?r?"softReplace":"softPush":r?"replace":"push"](n):t[r?"replace":"push"](n,o,{shallow:a,locale:c,scroll:f})};i?i(s):s()}}(e,I,B,D,C,M,j,R,x,T?A:void 0)},onMouseEnter:function(e){w||"function"!==typeof O||O(e),w&&U.props&&"function"===typeof U.props.onMouseEnter&&U.props.onMouseEnter(e),l.isLocalURL(B)&&b(I,B,D,{priority:!0})},onTouchStart:function(e){w||"function"!==typeof E||E(e),w&&U.props&&"function"===typeof U.props.onTouchStart&&U.props.onTouchStart(e),l.isLocalURL(B)&&b(I,B,D,{priority:!0})}};if(!w||_||"a"===U.type&&!("href"in U.props)){var Q="undefined"!==typeof x?x:I&&I.locale,V=I&&I.isLocaleDomain&&d.getDomainLocale(D,Q,I.locales,I.domainLocales);J.href=V||p.addBasePath(f.addLocale(D,Q,I&&I.defaultLocale))}return w?a.default.cloneElement(U,J):a.default.createElement("a",Object.assign({},P,J),n)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,i=r.useRef(),s=o(r.useState(!1),2),d=s[0],p=s[1],v=o(r.useState(null),2),y=v[0],b=v[1];r.useEffect((function(){if(a){if(i.current&&(i.current(),i.current=void 0),c||d)return;return y&&y.tagName&&(i.current=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=f.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(o&&(t=l.get(o)))return t;var r=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:r},f.push(n),l.set(n,t),t}(n),r=o.id,u=o.observer,a=o.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),l.delete(r);var t=f.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&f.splice(t,1)}}}(y,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==i.current||i.current(),i.current=void 0}}if(!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[y,c,n,t,d]);var h=r.useCallback((function(){p(!1)}),[]);return[b,d,h]};var r=n(7294),u=n(9311),a="function"===typeof IntersectionObserver;var l=new Map,f=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294)),r=o.default.createContext(null);t.AppRouterContext=r;var u=o.default.createContext(null);t.LayoutRouterContext=u;var a=o.default.createContext(null);t.GlobalLayoutRouterContext=a},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},797:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return r}})}}]);