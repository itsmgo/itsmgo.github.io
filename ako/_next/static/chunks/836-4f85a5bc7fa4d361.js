(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[836],{4998:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return l}});var a=s(5893),n=s(5675),i=s.n(n),r=s(4868),o=s.n(r);function c(e){return(0,a.jsxs)("div",{className:o().data,children:[(0,a.jsx)("p",{children:e.data.field}),(0,a.jsx)("p",{className:o().values,children:[e.data.value,e.data.unit].join(" ")})]})}function l(e){var t,s;if(!e.asset)return;let n=null===(t=e.asset.data)||void 0===t?void 0:t.map(e=>(0,a.jsx)(c,{data:e},e.field)),r=null===(s=e.asset.flags)||void 0===s?void 0:s.map(e=>(0,a.jsx)("div",{className:o().icon,style:{transform:"translate(0, 0.1rem)"},children:(0,a.jsx)(i(),{src:"/flag-".concat(e,".svg"),alt:"Icon",fill:!0,priority:!0})},e));return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:o().card,children:[(0,a.jsxs)("div",{className:o().titlebar,children:[(0,a.jsx)("div",{className:[o().name,o().active].join(" "),children:(0,a.jsx)("p",{children:e.asset.name})}),(0,a.jsxs)("div",{className:o().icons,children:[e.asset.alerts.length>0&&(0,a.jsx)("div",{className:o().icon,children:(0,a.jsx)(i(),{src:"/alert.svg",alt:"Alert",fill:!0,priority:!0})}),r]})]}),e.isHovered&&(0,a.jsx)("div",{className:o().dataframe,children:n})]})})}},4836:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var a=s(5893),n=s(3149),i=s.n(n),r=s(7294),o=s(9993),c=s(4998);let l=new Map([[0,new Map([["asset-0",[.2079861111,.2871527778,.3086419753,.2388888889]],["asset-1",[.2142361111,.2597222222,.362345679,.3086419753]],["asset-2",[.7024305556,.8159722222,.2796296296,.2382716049]],["asset-3",[.8555555556,.9253472222,.5209876543,.399382716]],["asset-4",[.6548611111,.7447916667,.5388888889,.4820987654]],["asset-5",[.65,.7378472222,.600617284,.5444444444]],["asset-6",[.5006944444,.6177083333,.587654321,.5358024691]],["asset-7",[.5020833333,.6163194444,.6364197531,.5956790123]],["asset-8",[.6458333333,.7305555556,.6574074074,.6043209877]],["asset-9",[.6451388889,.7166666667,.7061728395,.6685185185]],["asset-10",[.6413194444,.7111111111,.7524691358,.7166666667]],["asset-11",[.6295138889,.7239583333,.8148148148,.7740740741]],["asset-12",[.7934027778,.8381944444,.637654321,.5530864198]],["asset-13",[.7798611111,.8277777778,.7222222222,.612345679]]])],[1,new Map([["asset-0",[-.03472222222,-.03472222222,-.06172839506,-.06172839506]],["asset-1",[-.03472222222,-.03472222222,-.06172839506,-.06172839506]],["asset-2",[.5732638889,.7395833333,.1635802469,.1061728395]],["asset-3",[.8086805556,.909375,.5290123457,.349382716]],["asset-4",[.5267361111,.6506944444,.5524691358,.4740740741]],["asset-5",[.5246527778,.64375,.6401234568,.5641975309]],["asset-6",[.3045138889,.471875,.625308642,.5512345679]],["asset-7",[.3135416667,.4753472222,.6925925926,.6339506173]],["asset-8",[.5239583333,.6378472222,.7191358025,.6469135802]],["asset-9",[.5288194444,.6246527778,.7827160494,.7320987654]],["asset-10",[.5267361111,.6190972222,.8450617284,.7938271605]],["asset-11",[.5142361111,.6378472222,.9271604938,.8709876543]],["asset-12",[.725,.7850694444,.6944444444,.5759259259]],["asset-13",[.7121527778,.7736111111,.8277777778,.6530864198]]])],[2,new Map([["asset-0",[.3225694444,.4364583333,.2117283951,.1061728395]],["asset-1",[.3270833333,.384375,.2907407407,.2098765432]],["asset-2",[-.03472222222,-.03472222222,-.06172839506,-.06172839506]],["asset-3",[-.03472222222,-.03472222222,-.06172839506,-.06172839506]],["asset-4",[.9302083333,1,.5524691358,.4740740741]],["asset-5",[.9111111111,1,.6401234568,.5641975309]],["asset-6",[.7104166667,.8836805556,.625308642,.5925925926]],["asset-7",[.7027777778,.8715277778,.6925925926,.6339506173]],["asset-8",[.8961805556,1,.7191358025,.6469135802]],["asset-9",[.8864583333,.9940972222,.7827160494,.7320987654]],["asset-10",[.871875,.9763888889,.8450617284,.7938271605]],["asset-11",[.8520833333,.9854166667,.9271604938,.8709876543]],["asset-12",[-.03472222222,-.03472222222,-.06172839506,-.06172839506]],["asset-13",[-.03472222222,-.03472222222,-.06172839506,-.06172839506]]])]]);function d(e){for(let s=0;s<e.length;s++){var t;let a=e[s];if((null===(t=a.bounds)||void 0===t?void 0:t.length)&&"number"==typeof a.value){if(a.bounds[0]>a.value)return"0001";if(a.bounds[1]<a.value)return"0002"}}return"0000"}function u(e,t,s){return"assets/".concat(e,"_").concat(t,"_").concat(s.toString().padStart(4,"0"),".png")}function f(e,t){return"transitions/".concat(e,"_").concat(t.toString().padStart(4,"0"),".jpg")}function h(e){return"assets/base_".concat(e,"_0000.png")}function v(e){var t;let s=(0,r.useRef)(null),[n,v]=(0,r.useState)(new Map([])),[m,_]=(0,r.useState)(new Map([])),[g,p]=(0,r.useState)(""),w=(0,r.useCallback)(t=>{if(!s.current)return;var a=s.current.getContext("2d").canvas,n=Math.max(a.width/1920,a.height/1080),i=(a.width-1920*n)/2,r=(a.height-1080*n)/2;let o=l.get(e.cameraPosition).get(t);return{x:o[0]*(1920*n)+i,y:(1-o[2])*(1080*n)+r,width:1920*n,height:1080*n}},[e]),x=(0,r.useCallback)(t=>{if(!s.current)return;let a=s.current.getContext("2d");var n=!1;e.assets.forEach(s=>{if(a.isPointInPath(m.get("".concat(e.cameraPosition,"-").concat(s.id)),t.clientX,t.clientY)){if("mousemove"!=t.type||(p(s.id),n=!0,s.isHovered||e.handleAssetHover(s.id,!0)),"click"==t.type){e.handleAssetClick(s.id),n=!0;return}}else s.isHovered&&e.handleAssetHover(s.id,!1)}),n||p("")},[e]),j=()=>{var t,a;if(!s.current)return;let n=s.current.getContext("2d");n.canvas.width=window.innerWidth,n.canvas.height=window.innerHeight,t=window.devicePixelRatio||1,a=n.canvas.getBoundingClientRect(),n.canvas.width=a.width*t,n.canvas.height=a.height*t,n.scale(1/t,1/t),function(){if(s.current){var t=s.current.getContext("2d").canvas,a=Math.max(t.width/1920,t.height/1080),n=(t.width-1920*a)/2,i=(t.height-1080*a)/2;[0,1,2].forEach(t=>{e.assets.forEach(e=>{let s=new Path2D,r=l.get(t).get(e.id),o=r[1]-r[0],c=r[3]-r[2],d=1920*a,u=1080*a;s.rect(r[0]*d+n,(1-r[2])*u+i,o*d,-c*u),_(new Map(m.set("".concat(t,"-").concat(e.id),s)))})})}}(),A()};(0,r.useEffect)(()=>{(function(){for(let t=1;t<=e.numFrames;t++)["in","pan","out"].forEach(e=>{let s=new Image(1920,1080),a=f(e,t);s.src=a,v(new Map(n.set(a,s)))});for(let t=0;t<=2;t++){for(let s=0;s<=e.numRange;s++)e.assets.forEach(e=>{["0001","0002"].forEach(s=>{let a=new Image(1920,1080),i=u(e.id,t,s);a.src=i,v(new Map(n.set(i,a)))})});let s=new Image(1920,1080),a=h(t);s.src=a,v(new Map(n.set(a,s)))}})(),j()},[]),(0,r.useEffect)(()=>(window.addEventListener("resize",j),window.addEventListener("mousemove",x),window.addEventListener("click",x),()=>{window.removeEventListener("resize",j),window.removeEventListener("mousemove",x),window.removeEventListener("click",x)}),[e.cameraPosition,e.handleAssetClick,e.handleAssetHover,e.transitionTo]);let A=(0,r.useCallback)(()=>{let t;if(!s.current||n.size<1)return;let a=s.current.getContext("2d"),i=()=>{let s;if(-1!=e.transitionTo){var r,o;let t=f((r=e.cameraPosition,o=e.transitionTo,0==r&&1==o||1==r&&0==o?"in":1==r&&2==o||2==r&&1==o?"pan":2==r&&0==o?"out":void 0),e.index);s=n.get(t)}else(s=n.get(h(e.cameraPosition))).onload=i;var c=a.canvas,v=Math.max(c.width/1920,c.height/1080),m=(c.width-1920*v)/2,_=(c.height-1080*v)/2;a.clearRect(0,0,1920,1080),a.drawImage(s,0,0,s.width,s.height,m,_,1920*v,1080*v),-1==e.transitionTo&&e.assets.filter(e=>"0000"!==d(e.data)).forEach(s=>{let i=l.get(e.cameraPosition).get(s.id),r=u(s.id,e.cameraPosition,d(s.data)),o=n.get(r);if(!o){console.log(r);return}a.drawImage(o,0,0,o.width,o.height,i[0]*(1920*v)+m,(1-i[2])*(1080*v)+_,1920*v,1080*v),cancelAnimationFrame(t)})};return i(),t=requestAnimationFrame(i),()=>cancelAnimationFrame(t)},[e,n]);(0,r.useEffect)(()=>A(),[e.index,e.cameraPosition,e.transitionTo,n]);let E=null===(t=e.assets)||void 0===t?void 0:t.map(e=>{if(g!=e.id)return;let t=w(e.id);return(0,a.jsx)(o.default,{x:null==t?void 0:t.x,y:null==t?void 0:t.y,children:(0,a.jsx)(c.default,{asset:e,isHovered:g==e.id})},e.id)});return(0,a.jsxs)("div",{className:i().image,children:[(0,a.jsx)("canvas",{ref:s}),E]})}},9993:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return l}});var a=s(5893),n=s(8028),i=s.n(n),r=s(5091),o=s.n(r),c=s(7294);function l(e){let t=(0,c.useMemo)(()=>e.x?{left:e.x,top:e.y,transform:"translate(0, -100%)"}:{backgroundColor:"#eee",right:"2rem"},[e]);return(0,a.jsx)("span",{className:"".concat(o().tooltip," ").concat(i().className),style:t,children:e.children})}},8028:function(e){e.exports={style:{fontFamily:"'__Inter_0fd5e2', '__Inter_Fallback_0fd5e2'",fontStyle:"normal"},className:"__className_0fd5e2"}},4868:function(e){e.exports={card:"AssetTooltip_card__zTVWV",small:"AssetTooltip_small__icn6_",titlebar:"AssetTooltip_titlebar__REFoF",name:"AssetTooltip_name__LV3rF",active:"AssetTooltip_active__0Z2A1",icons:"AssetTooltip_icons__3PVq4",dataframe:"AssetTooltip_dataframe__wJlHa",values:"AssetTooltip_values__UwFzC",data:"AssetTooltip_data__uCcqD",icon:"AssetTooltip_icon___yQdF"}},3149:function(e){e.exports={image:"MainMap_image__BRisu"}},5091:function(e){e.exports={tooltip:"Tooltip_tooltip__gtfDF"}}}]);