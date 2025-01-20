import{f as U,o as w,a5 as x,a as u,aR as V,r as s,aS as N,ax as W,_ as R,e as _,aT as q,j as E,d as I,g as G}from"./index-6d58134c.js";function an(n,o){var e=Object.assign({},n);return Array.isArray(o)&&o.forEach(function(t){delete e[t]}),e}const cn=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"];function $(n){var o;return n==null||(o=n.getRootNode)===null||o===void 0?void 0:o.call(n)}function H(n){return $(n)instanceof ShadowRoot}function J(n){return H(n)?$(n):null}function K(n){return n.replace(/-(.)/g,function(o,e){return e.toUpperCase()})}function Q(n,o){U(n,"[@ant-design/icons] ".concat(o))}function S(n){return w(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(w(n.icon)==="object"||typeof n.icon=="function")}function k(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(o,e){var t=n[e];switch(e){case"class":o.className=t,delete o.class;break;default:delete o[e],o[K(e)]=t}return o},{})}function b(n,o,e){return e?x.createElement(n.tag,u(u({key:o},k(n.attrs)),e),(n.children||[]).map(function(t,r){return b(t,"".concat(o,"-").concat(n.tag,"-").concat(r))})):x.createElement(n.tag,u({key:o},k(n.attrs)),(n.children||[]).map(function(t,r){return b(t,"".concat(o,"-").concat(n.tag,"-").concat(r))}))}function O(n){return V(n)[0]}function j(n){return n?Array.isArray(n)?n:[n]:[]}var X=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,Y=function(o){var e=s.useContext(N),t=e.csp,r=e.prefixCls,a=X;r&&(a=a.replace(/anticon/g,r)),s.useEffect(function(){var i=o.current,c=J(i);W(a,"@ant-design-icons",{prepend:!0,csp:t,attachTo:c})},[])},Z=["icon","className","onClick","style","primaryColor","secondaryColor"],f={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function nn(n){var o=n.primaryColor,e=n.secondaryColor;f.primaryColor=o,f.secondaryColor=e||O(o),f.calculated=!!e}function on(){return u({},f)}var C=function(o){var e=o.icon,t=o.className,r=o.onClick,a=o.style,i=o.primaryColor,c=o.secondaryColor,y=R(o,Z),d=s.useRef(),m=f;if(i&&(m={primaryColor:i,secondaryColor:c||O(i)}),Y(d),Q(S(e),"icon should be icon definiton, but got ".concat(e)),!S(e))return null;var l=e;return l&&typeof l.icon=="function"&&(l=u(u({},l),{},{icon:l.icon(m.primaryColor,m.secondaryColor)})),b(l.icon,"svg-".concat(l.name),u(u({className:t,onClick:r,style:a,"data-icon":l.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},y),{},{ref:d}))};C.displayName="IconReact";C.getTwoToneColors=on;C.setTwoToneColors=nn;const T=C;function P(n){var o=j(n),e=_(o,2),t=e[0],r=e[1];return T.setTwoToneColors({primaryColor:t,secondaryColor:r})}function en(){var n=T.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var tn=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];P(q.primary);var g=s.forwardRef(function(n,o){var e=n.className,t=n.icon,r=n.spin,a=n.rotate,i=n.tabIndex,c=n.onClick,y=n.twoToneColor,d=R(n,tn),m=s.useContext(N),l=m.prefixCls,p=l===void 0?"anticon":l,A=m.rootClassName,B=E(A,p,I(I({},"".concat(p,"-").concat(t.name),!!t.name),"".concat(p,"-spin"),!!r||t.name==="loading"),e),v=i;v===void 0&&c&&(v=-1);var D=a?{msTransform:"rotate(".concat(a,"deg)"),transform:"rotate(".concat(a,"deg)")}:void 0,L=j(y),h=_(L,2),F=h[0],M=h[1];return s.createElement("span",G({role:"img","aria-label":t.name},d,{ref:o,tabIndex:v,onClick:c,className:B}),s.createElement(T,{icon:t,primaryColor:F,secondaryColor:M,style:D}))});g.displayName="AntdIcon";g.getTwoToneColor=en;g.setTwoToneColor=P;const ln=g,sn=function(n){if(!n)return!1;if(n instanceof Element){if(n.offsetParent)return!0;if(n.getBBox){var o=n.getBBox(),e=o.width,t=o.height;if(e||t)return!0}if(n.getBoundingClientRect){var r=n.getBoundingClientRect(),a=r.width,i=r.height;if(a||i)return!0}}return!1};globalThis&&globalThis.__rest;const z=s.createContext(null),un=(n,o)=>{const e=s.useContext(z),t=s.useMemo(()=>{if(!e)return"";const{compactDirection:r,isFirstItem:a,isLastItem:i}=e,c=r==="vertical"?"-vertical-":"-";return E(`${n}-compact${c}item`,{[`${n}-compact${c}first-item`]:a,[`${n}-compact${c}last-item`]:i,[`${n}-compact${c}item-rtl`]:o==="rtl"})},[n,o,e]);return{compactSize:e==null?void 0:e.compactSize,compactDirection:e==null?void 0:e.compactDirection,compactItemClassnames:t}},mn=n=>{let{children:o}=n;return s.createElement(z.Provider,{value:null},o)};export{ln as A,mn as N,cn as P,J as g,sn as i,an as o,un as u};
