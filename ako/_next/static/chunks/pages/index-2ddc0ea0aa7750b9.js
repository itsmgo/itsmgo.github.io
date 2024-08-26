(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(1364)}])},3470:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return m}});var a=i(5893),t=i(5675),n=i.n(t),o=i(8265),r=i.n(o),l=i(9993);function d(e){return(0,a.jsxs)("div",{className:r().data,children:[(0,a.jsx)("p",{children:e.data.field}),(0,a.jsx)("p",{className:r().values,children:[e.data.value,e.data.unit].join(" ")})]})}let c={fan:"Fan is active",defrost:"Defrosting",cool:"Cooling",door:"Door is open"};function m(e){var s,i,t,o,m,v,u,f,_;let h=null===(s=e.asset)||void 0===s?void 0:s.data.map(e=>(0,a.jsx)(d,{data:e},e.field)),p=null===(i=e.asset)||void 0===i?void 0:i.flags.map(e=>(0,a.jsxs)("div",{className:r().icon,style:{transform:"translate(0, 0.1rem)"},children:[(0,a.jsx)(n(),{src:"/flag-".concat(e,".svg"),alt:"Icon",fill:!0,priority:!0}),(0,a.jsx)(l.default,{children:(0,a.jsx)("p",{children:c[e]})})]},e));return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:[r().card,(null===(t=e.asset)||void 0===t?void 0:t.isHovered)?r().hovered:""].join(" "),children:[(0,a.jsxs)("div",{className:r().titlebar,children:[(0,a.jsxs)("button",{className:[r().name,(null===(o=e.asset)||void 0===o?void 0:o.isActive)?r().active:""].join(" "),onClick:()=>{var s;return e.onClick(null===(s=e.asset)||void 0===s?void 0:s.id)},children:[(0,a.jsx)(n(),{src:"/arrow.svg",alt:"Expand",className:(null===(m=e.asset)||void 0===m?void 0:m.isActive)?r().arrow:"",width:25,height:25,priority:!0}),(0,a.jsx)("p",{children:null===(v=e.asset)||void 0===v?void 0:v.name})]}),(0,a.jsxs)("div",{className:r().icons,children:[(null===(u=e.asset)||void 0===u?void 0:u.alerts.length)>0&&(0,a.jsxs)("div",{className:r().icon,children:[(0,a.jsx)(n(),{src:"/alert.svg",alt:"Alert",fill:!0,priority:!0}),(0,a.jsx)(l.default,{children:null===(f=e.asset)||void 0===f?void 0:f.alerts.map(e=>(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:e.code}),": ",e.message]},e.code))})]}),p]})]}),(null===(_=e.asset)||void 0===_?void 0:_.isActive)&&(0,a.jsx)("div",{className:r().dataframe,children:h})]})})}},5064:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return l}});var a=i(5893),t=i(5080),n=i.n(t),o=i(3470),r=i(1578);function l(e){var s;let i=null===(s=e.assets)||void 0===s?void 0:s.map(s=>(0,a.jsx)(o.default,{asset:s,onClick:e.handleAssetClick},s.id));return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:n().container,children:[(0,a.jsx)(r.default,{isMinimized:e.isMinimized,onClick:e.handleMinimizeClick}),i]})})}},199:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return l}});var a=i(5893),t=i(5675),n=i.n(t),o=i(1720),r=i.n(o);function l(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:r().container,children:[e.isZoomed&&(0,a.jsxs)("div",{className:r().movebar,children:[(0,a.jsx)("button",{className:r().movebutton,onClick:e.handlePanClick,children:(0,a.jsx)(n(),{src:"/big-arrow.svg",alt:"Move",fill:!0,style:{transform:"rotate(180deg)"},priority:!0})}),(0,a.jsx)("button",{className:r().movebutton,onClick:e.handlePanClick,children:(0,a.jsx)(n(),{src:"/big-arrow.svg",alt:"Move",fill:!0,priority:!0})}),(0,a.jsx)("div",{className:[r().indicator,e.isPanned?r().panned:""].join(" ")})]}),(0,a.jsx)("button",{className:r().navbutton,onClick:e.handleZoomClick,children:(0,a.jsx)(n(),{src:e.isZoomed?"/close-fullscreen.svg":"/open-fullscreen.svg",alt:"Fullscreen",fill:!0,priority:!0})})]})})}},1578:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return l}});var a=i(5893),t=i(5675),n=i.n(t),o=i(2196),r=i.n(o);function l(e){return(0,a.jsxs)("div",{className:r().titlebar,children:[(0,a.jsx)("p",{children:"Information"}),(0,a.jsx)("button",{className:r().minbutton,onClick:e.onClick,children:(0,a.jsx)("div",{className:r().minimize,children:(0,a.jsx)(n(),{src:e.isMinimized?"/maximize.svg":"/minimize.svg",alt:"Expand",fill:!0,priority:!0})})})]})}},1364:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return h}});var a=i(5893),t=i(8405),n=i.n(t),o=i(9008),r=i.n(o),l=i(5675),d=i.n(l),c=i(2003),m=i.n(c),v=i(5064),u=i(199),f=i(7294),_=i(4836);function h(){let e={field:"Avg temperature",value:3.56,unit:"\xbaC"},s={field:"TTI",value:67.29,unit:"%"},i={field:"Real temperature",value:7.35,unit:"\xbaC"},t={field:"Inlet pressure",value:.81,unit:"hPa"},o={field:"Outlet pressure",value:.81,unit:"hPa"},l={field:"Performance",value:.81,unit:"%",bounds:[0,.2]},c={code:"R302",message:"Testing alerts"},h={code:"R303",message:"Testing 2 alerts"},[p,x]=(0,f.useState)({assets:[{id:"asset-0",name:"Asset #0 Test name",isActive:!1,isHovered:!1,alerts:[],data:[e,s,i,t,o],flags:[]},{id:"asset-1",name:"Asset #1",isActive:!1,isHovered:!1,alerts:[],data:[e,s,i,t,o],flags:["fan"]},{id:"asset-2",name:"Asset #2",isActive:!1,isHovered:!1,alerts:[],data:[e,s,t,o,l],flags:[]},{id:"asset-3",name:"Asset #3",isActive:!1,isHovered:!1,alerts:[c,h],data:[s,o,i],flags:["cool","door"]},{id:"asset-4",name:"Asset #4",isActive:!1,isHovered:!1,alerts:[c],data:[{field:"Avg temperature",value:3.56,unit:"\xbaC",bounds:[4,7]},s,i,o],flags:["defrost"]},{id:"asset-5",name:"Asset #5",isActive:!1,isHovered:!1,alerts:[],data:[e,s,i],flags:[]},{id:"asset-6",name:"Asset #6",isActive:!1,isHovered:!1,alerts:[c,h],data:[e,t,o],flags:[]},{id:"asset-7",name:"Asset #7",isActive:!1,isHovered:!1,alerts:[],data:[e,s,i,t,o,l],flags:[]},{id:"asset-8",name:"Asset #8",isActive:!1,isHovered:!1,alerts:[],data:[e,s,i,t,o],flags:["fan"]},{id:"asset-9",name:"Asset #9",isActive:!1,isHovered:!1,alerts:[],data:[e,s,t,o],flags:[]},{id:"asset-10",name:"Asset #10",isActive:!1,isHovered:!1,alerts:[c,h],data:[s,o,i],flags:["door"]},{id:"asset-11",name:"Asset #11 Test",isActive:!1,isHovered:!1,alerts:[c],data:[e,s,i,o],flags:["defrost"]},{id:"asset-12",name:"Asset #12",isActive:!1,isHovered:!1,alerts:[],data:[e,s,i],flags:[]},{id:"asset-13",name:"Asset #13",isActive:!1,isHovered:!1,alerts:[c,h],data:[e,t,o],flags:[]}],isInfoMinimized:!0,mapPosition:0,transitionTo:-1}),g=e=>{let s=p.assets.map(s=>(s.id==e&&(s.isActive=!s.isActive),s));x({...p,assets:s})},j=async()=>{if(1==p.mapPosition){x({...p,transitionTo:2});for(let e=1;e<=20;e++)C(e),await new Promise(e=>setTimeout(e,30));x({...p,mapPosition:2})}else{x({...p,transitionTo:1});for(let e=20;e>=1;e--)C(e),await new Promise(e=>setTimeout(e,30));x({...p,mapPosition:1})}},A=async()=>{if(1==p.mapPosition){x({...p,transitionTo:0});for(let e=20;e>=1;e--)C(e),await new Promise(e=>setTimeout(e,30));x({...p,mapPosition:0})}else if(2==p.mapPosition){x({...p,transitionTo:0});for(let e=1;e<=20;e++)C(e),await new Promise(e=>setTimeout(e,30));x({...p,mapPosition:0})}else{x({...p,transitionTo:1});for(let e=1;e<=20;e++)C(e),await new Promise(e=>setTimeout(e,30));x({...p,mapPosition:1})}},N=(0,f.useCallback)((e,s)=>{let i=p.assets.map(i=>(i.id==e&&(i.isHovered=s),i));x({...p,assets:i})},[p]),[b,C]=(0,f.useState)(0);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"AKO Monitoring Platform"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"public/favicon.ico"})]}),(0,a.jsxs)("main",{className:"".concat(m().main," ").concat(n().className),children:[(0,a.jsxs)("div",{className:m().info,children:[(0,a.jsxs)("p",{className:m().description,children:["Bonpreu Esclat",(0,a.jsx)("strong",{className:m().strong,children:"vilafranca del pened\xe8s"})]}),(0,a.jsx)(v.default,{isMinimized:p.isInfoMinimized,handleMinimizeClick:()=>{let e=p.assets.map(e=>(e.isActive=p.isInfoMinimized,e));x({...p,assets:e,isInfoMinimized:!p.isInfoMinimized})},assets:p.assets,handleAssetClick:g})]}),(0,a.jsxs)("div",{className:m().rightbar,children:[(0,a.jsx)("div",{className:m().akoLogo,children:(0,a.jsx)("a",{href:"https://ako.com",target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)(d(),{src:"/ako.svg",alt:"AKO Logo",fill:!0,priority:!0})})}),(0,a.jsx)(u.default,{isZoomed:0!=p.mapPosition,isPanned:(2==p.transitionTo||2==p.mapPosition)&&1!=p.transitionTo,handleZoomClick:()=>{-1==p.transitionTo&&A()},handlePanClick:()=>{-1==p.transitionTo&&j()}})]}),(0,a.jsx)(_.default,{index:b,numFrames:20,numRange:0,assets:p.assets,handleAssetHover:N,handleAssetClick:g,cameraPosition:p.mapPosition,transitionTo:p.transitionTo})]})]})}},8405:function(e){e.exports={style:{fontFamily:"'__Chakra_Petch_c548ad', '__Chakra_Petch_Fallback_c548ad'",fontStyle:"normal"},className:"__className_c548ad"}},8265:function(e){e.exports={card:"AssetCard_card__wVOOr",hovered:"AssetCard_hovered__WG6If",titlebar:"AssetCard_titlebar__xCZuO",name:"AssetCard_name__JpWdX",active:"AssetCard_active__gK1pn",arrow:"AssetCard_arrow__mGsQt",icons:"AssetCard_icons__X6b4E",dataframe:"AssetCard_dataframe__4A4Tp",values:"AssetCard_values__unOnT",data:"AssetCard_data__wQKa3",icon:"AssetCard_icon__WczbE"}},2003:function(e){e.exports={main:"Home_main__2uIek",info:"Home_info__v0RuA",description:"Home_description__zHUB6",strong:"Home_strong__TZx92",rightbar:"Home_rightbar__45vEx",akoLogo:"Home_akoLogo__YDMQt"}},5080:function(e){e.exports={container:"InformationPanel_container__DgZUj"}},1720:function(e){e.exports={container:"NavigationBar_container__7Tq_W",navbutton:"NavigationBar_navbutton__dElyz",movebar:"NavigationBar_movebar__HV2aX",movebutton:"NavigationBar_movebutton__EYHsJ",indicator:"NavigationBar_indicator__NR_5f",panned:"NavigationBar_panned__y0WSz"}},2196:function(e){e.exports={titlebar:"TitleBar_titlebar__0q8JA",minbutton:"TitleBar_minbutton__oEWc1",minimize:"TitleBar_minimize__yFS7f"}},9008:function(e,s,i){e.exports=i(7828)}},function(e){e.O(0,[675,836,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);