(this["webpackJsonphello-react-front-end"]=this["webpackJsonphello-react-front-end"]||[]).push([[0],{14:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(3),o=n.n(s),u=(n(14),n(2)),i=n(4),a=n(9),j=n(7),b="GET_MESSAGES_SUCCESS",f=function(){return function(e){return e({type:"GET_MESSAGES_REQUEST"}),fetch("https://hello-rails-back-end.herokuapp.com/v1/messages").then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:b,json:e}}(t))}))}},d={message:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(j.a)(Object(j.a)({},e),{},{message:t.json[0].body});default:return e}},l=Object(i.b)({messagesReducer:h}),g=Object(i.c)(l,Object(i.a)(a.a)),O=n(1),S=function(){var e=Object(u.c)((function(e){return e.messagesReducer})),t=Object(u.b)();return Object(c.useEffect)((function(){t(f())}),[]),Object(O.jsx)("div",{children:e.message})},p=function(){return Object(O.jsx)(u.a,{store:g,children:Object(O.jsx)("div",{children:Object(O.jsx)(S,{})})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(p,{})}),document.getElementById("root")),E()}},[[22,1,2]]]);
//# sourceMappingURL=main.c636df5a.chunk.js.map