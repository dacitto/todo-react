(this["webpackJsonptodo-react-app"]=this["webpackJsonptodo-react-app"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var l=c(0),n=c.n(l),s=c(2),a=c.n(s),i=c(3),r=c(4),o=(c(17),c(18),c(1)),d=function(e){var t=e.tasks,c=e.setTasks,l=e.setIsDark,n=e.isDark,s=Math.random().toString(36).substring(2),a=function(e){"NumpadEnter"!==e.code&&"Enter"!==e.code||""===e.target.value.trim()||(console.log(e.target.value.trim()),c([{task:e.target.value,id:s,completed:!1}].concat(Object(r.a)(t.filter((function(e){return!1===e.completed}))),Object(r.a)(t.filter((function(e){return!0===e.completed}))))),e.target.value="")};return Object(o.jsx)("header",{className:n?"header dark":"header",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"todo",children:[Object(o.jsx)("h1",{className:"todo-text",children:"todo"}),Object(o.jsxs)("div",{onClick:function(){l(!n)},children:[!n&&Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",children:Object(o.jsx)("path",{fill:"#FFF",fillRule:"evenodd",d:"M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"})}),n&&Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",children:Object(o.jsx)("path",{fill:"#FFF",fillRule:"evenodd",d:"M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"})})]})]}),Object(o.jsxs)("div",{className:"create",children:[Object(o.jsx)("span",{className:"check-circle"}),Object(o.jsx)("input",{placeholder:"Create a new todo...",onKeyUp:a,onBlur:function(e){e.code="Enter",a(e)}})]})]})})},j=c(5),u=(c(20),c(21),c.p+"static/media/icon-check.a8fb15d0.svg"),h=function(e){var t=e.completed,c=e.task,l=e.RemoveTask,n=e.CompleteTask,s=t?"checked":"";return Object(o.jsxs)("div",{className:"task",children:[Object(o.jsx)("span",{className:"check-circle "+s,onClick:function(){return n(c.id)},children:t&&Object(o.jsx)("img",{src:u,alt:""})}),Object(o.jsx)("span",{className:"text "+s,children:c.task}),Object(o.jsx)("span",{className:"close",onClick:function(){l(c.id)},children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",children:Object(o.jsx)("path",{fill:"#494C6B",fillRule:"evenodd",d:"M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"})})})]})},m=c(12),b=c(8),O=function(e){var t=e.tasks,c=e.setTasks,n=Object(l.useState)("all"),s=Object(i.a)(n,2),a=s[0],d=s[1],u=function(){return"all"===a?t:t.filter((function(e){return e.completed===a}))},O=function(e){c(t.filter((function(t){return t.id!==e})))},f=function(e){var l=t.map((function(t){return t.completed=t.id===e?!t.completed:t.completed,t}));c([].concat(Object(r.a)(l.filter((function(e){return!1===e.completed}))),Object(r.a)(l.filter((function(e){return e.completed})))))};return Object(o.jsxs)(o.Fragment,{children:[0===u().length&&Object(o.jsxs)("div",{className:"empty-list",children:[Object(o.jsx)("div",{className:"icon-container",children:Object(o.jsx)(m.a,{className:"icon"})}),Object(o.jsx)("h2",{className:"text",children:"No Tasks here"}),t.length>0&&Object(o.jsxs)("div",{className:"control",children:[Object(o.jsxs)("div",{children:[t.filter((function(e){return!1===e.completed})).length," items left"]}),t.length>0&&Object(o.jsx)("div",{className:"filter desktop-only",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"all"===a?"active":null,onClick:function(){return d("all")},children:"All"}),Object(o.jsx)("li",{className:!1===a?"active":null,onClick:function(){return d(!1)},children:"Active"}),Object(o.jsx)("li",{className:!0===a?"active":null,onClick:function(){return d(!0)},children:"Completed"})]})}),Object(o.jsx)("div",{className:"clear",onClick:function(){c(t.filter((function(e){return!1===e.completed})))},children:"Clear Completed"})]})]}),t.length>0&&u().length>0&&Object(o.jsx)(b.a,{onDragEnd:function(e){if(e.destination){var l=Array.from(t),n=l.splice(e.source.index,1),s=Object(i.a)(n,1)[0];l.splice(e.destination.index,0,s),c(l)}},children:Object(o.jsx)(b.c,{droppableId:"tasks",children:function(e){return Object(o.jsxs)("div",{className:"list-conainer",children:[Object(o.jsxs)("div",Object(j.a)(Object(j.a)({className:"list"},e.droppableProps),{},{ref:e.innerRef,children:[u().length===t.length&&u().map((function(e,t){return Object(o.jsx)(b.b,{draggableId:e.id.toString(),index:t,children:function(t){return Object(o.jsx)("div",Object(j.a)(Object(j.a)(Object(j.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:Object(o.jsx)(h,{completed:e.completed,task:e,RemoveTask:O,CompleteTask:f})}))}},e.id)})),e.placeholder,u().length!==t.length&&u().map((function(e){return Object(o.jsx)(h,{completed:e.completed,task:e,RemoveTask:O,CompleteTask:f})}))]})),Object(o.jsxs)("div",{className:"control",children:[Object(o.jsxs)("div",{children:[t.filter((function(e){return!1===e.completed})).length," ","items left"]}),t.length>0&&Object(o.jsx)("div",{className:"filter desktop-only",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"all"===a?"active":null,onClick:function(){return d("all")},children:"All"}),Object(o.jsx)("li",{className:!1===a?"active":null,onClick:function(){return d(!1)},children:"Active"}),Object(o.jsx)("li",{className:!0===a?"active":null,onClick:function(){return d(!0)},children:"Completed"})]})}),Object(o.jsx)("div",{className:"clear",onClick:function(){c(t.filter((function(e){return!1===e.completed})))},children:"Clear Completed"})]})]})}})}),t.length>0&&Object(o.jsx)("div",{className:"filter mobile-only",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"all"===a?"active":null,onClick:function(){return d("all")},children:"All"}),Object(o.jsx)("li",{className:!1===a?"active":null,onClick:function(){return d(!1)},children:"Active"}),Object(o.jsx)("li",{className:!0===a?"active":null,onClick:function(){return d(!0)},children:"Completed"})]})})]})};var f=function(){var e=Object(l.useState)([{id:1,task:"hey",completed:!1},{id:2,task:"take the nothing",completed:!1},{id:3,task:"go to sleep",completed:!0},{id:4,task:"useless task",completed:!0}]),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(l.useState)(!0),a=Object(i.a)(s,2),r=a[0],j=a[1];return document.body.classList=r?"dark":"",Object(o.jsxs)("div",{className:r&&"dark",children:[Object(o.jsx)(d,{tasks:c,setTasks:n,isDark:r,setIsDark:j}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(O,{tasks:c,setTasks:n})})]})};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.9753e03e.chunk.js.map