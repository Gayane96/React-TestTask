(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(9),s=n.n(r),i=(n(16),n(17),n(3)),o=n(0),u=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)("div",{className:"counter_container",children:[Object(o.jsx)("button",{onClick:function(){return a(0)},children:"Reset"}),Object(o.jsx)("p",{children:n}),Object(o.jsx)("button",{onClick:function(){return a(n+1)},children:"Plus"})]})},j=n(6),b=n.n(j),l=n(11),d=n(2),O=n(10),p=n(8),h=function(){var e=a.a.useMemo((function(){return[{Header:" ",columns:[{Header:"Name",accessor:"name"},{Header:"Email",accessor:"email"},{Header:"Position",accessor:"position"}]}]}),[]),t=Object(c.useState)([]),n=Object(i.a)(t,2),r=n[0],s=n[1],u=Object(c.useState)(""),j=Object(i.a)(u,2),h=(j[0],j[1],Object(c.useState)("")),f=Object(i.a)(h,2),g=(f[0],f[1],Object(c.useState)("")),x=Object(i.a)(g,2),m=(x[0],x[1],Object(c.useState)([])),P=Object(i.a)(m,2);P[0],P[1];function v(){return(v=Object(O.a)(b.a.mark((function e(){var t,n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://60a63e14b970910017eb1174.mockapi.io/api/v1/employees",{method:"POST"});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,(c=Object(l.a)(r)).unshift(n),s(c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}var k=Object(p.useTable)({columns:e,data:r,initialState:{pageIndex:0,pageSize:5}},p.usePagination),C=k.getTableProps,S=k.getTableBodyProps,y=k.headerGroups,w=k.prepareRow,H=k.page,T=k.canPreviousPage,F=k.canNextPage,I=k.pageOptions,N=k.pageCount,z=k.gotoPage,B=k.nextPage,E=k.previousPage,R=(k.setPageSize,k.state),G=R.pageIndex;R.pageSize;return Object(c.useEffect)((function(){fetch("https://60a63e14b970910017eb1174.mockapi.io/api/v1/employees?page=1&limit=100").then((function(e){return e.json().then((function(e){return s(e)}))}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsxs)("table",Object(d.a)(Object(d.a)({},C()),{},{children:[Object(o.jsx)("thead",{children:y.map((function(e){return Object(o.jsx)("tr",Object(d.a)(Object(d.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(o.jsx)("th",Object(d.a)(Object(d.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(o.jsxs)("tbody",Object(d.a)(Object(d.a)({},S()),{},{children:[console.log(H),H.map((function(e,t){return w(e),Object(o.jsx)("tr",Object(d.a)(Object(d.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(o.jsx)("td",Object(d.a)(Object(d.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))]}))]})),Object(o.jsxs)("div",{className:"pagination",children:[Object(o.jsx)("button",{onClick:function(){return z(0)},disabled:!T,children:"<<"})," ",Object(o.jsx)("button",{onClick:function(){return E()},disabled:!T,children:"<"})," ",Object(o.jsx)("button",{onClick:function(){return B()},disabled:!F,children:">"})," ",Object(o.jsx)("button",{onClick:function(){return z(N-1)},disabled:!F,children:">>"})," ",Object(o.jsxs)("span",{children:["Page"," ",Object(o.jsxs)("strong",{children:[G+1," of ",I.length]})," "]}),Object(o.jsx)("span",{children:Object(o.jsx)("button",{onClick:function(){return function(){return v.apply(this,arguments)}()},children:"Add new user"})})," "]})]})};var f=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(u,{}),Object(o.jsx)(h,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),g()}},[[21,1,2]]]);
//# sourceMappingURL=main.33e95972.chunk.js.map