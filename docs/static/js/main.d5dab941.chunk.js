(this["webpackJsonprouting-practice"]=this["webpackJsonprouting-practice"]||[]).push([[0],{12:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),o=n.n(l),c=(n(12),n(2));function i(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome"))}function u(){return r.a.createElement("nav",null,r.a.createElement("h1",null,"React Routing: "),r.a.createElement("ul",null,r.a.createElement("ul",null,r.a.createElement(c.a,{to:"/"},"Main Page")),r.a.createElement("ul",null,r.a.createElement(c.a,{to:"/home"},"Home Page"))))}function m(e){var t=e.input,n=!0;return isNaN(t)&&(n=!1),r.a.createElement("div",null,n?r.a.createElement("h1",null,"The number is: ",t):r.a.createElement("h1",null,"The word is: ",t))}function s(){return r.a.createElement("div",{className:"Container"},r.a.createElement("h1",null,"This is a main page"))}function h(e){var t=e.bg,n=e.color,l=e.word,o={backgroundColor:t,color:n};return r.a.createElement(a.Fragment,null,r.a.createElement("h1",{style:o},"The word is: ",l))}n(19);var E=function(){return r.a.createElement("div",{className:"Container"},r.a.createElement(u,null),r.a.createElement(c.b,null,r.a.createElement(s,{exact:!0,path:"/",component:s}),r.a.createElement(i,{exact:!0,path:"/home",component:i}),r.a.createElement(m,{exact:!0,path:"/:input",component:m}),r.a.createElement(h,{exact:!0,path:"/:word/:color/:bg",component:h})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(20)}},[[7,1,2]]]);
//# sourceMappingURL=main.d5dab941.chunk.js.map