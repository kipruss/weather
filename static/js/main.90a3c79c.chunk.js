(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(4),o=n.n(r),s=(n(10),n(2)),i=n(5),l=["NL","RS","US","GB","FR","DE","IT","PL","ES","PT"],u={NL:"Netherlands",RS:"Serbia",US:"USA",GB:"Great Britain",FR:"France",DE:"Germany",IT:"Italy",PL:"Poland",ES:"Spain",PT:"Portugal"},b=(n(11),n(1)),m=function(e){var t=e.country,n=e.setCountry,a=Object(c.useMemo)((function(){var e={};return l.forEach((function(t){e[t]={primary:t,secondary:u[t]}})),e}),[]);return Object(b.jsx)(i.a,{selectButtonClassName:"flags-select-button",selected:t,countries:l,customLabels:a,showOptionLabel:!1,showSecondarySelectedLabel:!1,fullWidth:!1,onSelect:n})};n(13);var j=function(){var e=localStorage.getItem("country")||"NL",t=localStorage.getItem("city")||"",n=Object(c.useState)(e),a=Object(s.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(t),l=Object(s.a)(i,2),u=l[0],j=l[1],d=Object(c.useState)(null),h=Object(s.a)(d,2),f=h[0],p=h[1];return Object(b.jsx)("div",{className:"container main",children:Object(b.jsxs)("div",{className:"container wrapper",children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(m,{country:r,setCountry:function(e){localStorage.setItem("country",e),o(e)}}),Object(b.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),u?function(){try{var e="//api.openweathermap.org/data/2.5/weather?q=".concat(u,",").concat(r,"&units=metric&APPID=").concat("7ba0463f85bcb9ca816b9c8c54655d18");fetch(e).then((function(e){return localStorage.setItem("city",u),e.json()})).then((function(e){var t,n=null===e||void 0===e||null===(t=e.main)||void 0===t?void 0:t.temp;Number.isFinite(n)?p(Math.round(10*n)/10):console.error("Error while getting the temperature")}))}catch(t){console.error("Error:",t)}}():p(null)},children:[Object(b.jsx)("input",{className:"city",type:"text",value:u,onChange:function(e){j(e.target.value)},placeholder:"Please enter your location..."}),Object(b.jsx)("button",{className:"submit-button",type:"submit",children:"\ud83d\udd0d"})]})]}),Number.isFinite(f)&&Object(b.jsxs)("div",{className:"temperature",children:[f,Object(b.jsx)("sup",{className:"degree",children:"\xb0C"})]})]})})};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.90a3c79c.chunk.js.map