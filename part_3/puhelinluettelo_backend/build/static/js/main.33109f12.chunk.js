(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(6),c=t.n(r),u=t(7),o=t(3),a=t(2),i=t(4),s=t.n(i),l="/api/persons/",d={getAll:function(){return s.a.get(l).then((function(e){return e.data}))},createPerson:function(e){return s.a.post(l,e).then((function(e){return e.data}))},deletePerson:function(e){return s.a.delete(l+e).then((function(e){return e.data}))},updatePerson:function(e){return s.a.put(l+e.id,e).then((function(e){return e.data}))}},f=(t(38),t(0)),j=function(e){var n=e.person,t=e.delPerson;return Object(f.jsxs)("p",{children:[n.name," ",n.number," ",Object(f.jsx)("button",{onClick:function(e){return t(e,n.id)},children:"delete"})]})},b=function(e){var n=e.persons,t=e.filterstr,r=e.delPerson;return function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}(n,t).map((function(e){return Object(f.jsx)(j,{person:e,delPerson:r},e.name)}))},h=function(e){var n=e.newFilter,t=e.handleFilter;return Object(f.jsxs)("div",{children:["filter shown with ",Object(f.jsx)("input",{value:n,onChange:t})]})},m=function(e){var n=e.addPerson,t=e.newName,r=e.handleNameChange,c=e.newNumber,u=e.handleNumberChange;return Object(f.jsxs)("form",{onSubmit:n,children:[Object(f.jsxs)("div",{children:["name: ",Object(f.jsx)("input",{value:t,onChange:r})]}),Object(f.jsxs)("div",{children:["number: ",Object(f.jsx)("input",{value:c,onChange:u})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",children:"add"})})]})},O=function(e){var n=e.message;return null===n?null:Object(f.jsx)("div",{className:"info box",children:n})},p=function(e){var n=e.message;return null===n?null:Object(f.jsx)("div",{className:"error box",children:n})},v=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),i=Object(o.a)(c,2),s=i[0],l=i[1],j=Object(a.useState)(""),v=Object(o.a)(j,2),x=v[0],g=v[1],w=Object(a.useState)(""),P=Object(o.a)(w,2),N=P[0],C=P[1],S=Object(a.useState)(null),k=Object(o.a)(S,2),y=k[0],T=k[1],A=Object(a.useState)(null),F=Object(o.a)(A,2),I=F[0],D=F[1];Object(a.useEffect)((function(){d.getAll().then((function(e){r(e)}))}),[]);return Object(f.jsxs)("div",{children:[Object(f.jsx)(O,{message:y}),Object(f.jsx)(p,{message:I}),Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(h,{newFilter:N,handleFilter:function(e){C(e.target.value)}}),Object(f.jsx)("h2",{children:"add a new"}),Object(f.jsx)(m,{addPerson:function(e){if(e.preventDefault(),-1===t.findIndex((function(e){return e.name===s}))){var n={name:s,number:x};d.createPerson(n).then((function(e){r(t.concat(e)),T("".concat(s," added to phonebook")),setTimeout((function(){T(null)}),5e3)})).catch((function(e){console.log("error data",e.response.data),D(JSON.stringify(e.response.data)),setTimeout((function(){D(null)}),5e3)}))}else if(window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))){var c=t.find((function(e){return e.name===s})),o=Object(u.a)(Object(u.a)({},c),{},{number:x});d.updatePerson(o).then((function(){d.getAll().then((function(e){r(e)})),T("".concat(s,"'s number updated")),setTimeout((function(){T(null)}),5e3)})).catch((function(e){D(e.response.data),setTimeout((function(){D(null)}),5e3)}))}l(""),g(""),C("")},newName:s,handleNameChange:function(e){l(e.target.value)},newNumber:x,handleNumberChange:function(e){g(e.target.value)}}),Object(f.jsx)("h2",{children:"Numbers"}),Object(f.jsx)(b,{persons:t,filterstr:N,delPerson:function(e,n){e.preventDefault();var c=t.find((function(e){return e.id===n}));window.confirm("Delete "+c.name)&&d.deletePerson(c.id).then((function(){d.getAll().then((function(e){r(e)})),T("".concat(c.name," deleted")),setTimeout((function(){T(null)}),5e3)})).catch((function(e){D("Information of ".concat(c.name," has already been removed from server")),setTimeout((function(){D(null)}),5e3),r(t.filter((function(e){return e.id!==n})))}))}})]})};c.a.render(Object(f.jsx)(v,{}),document.getElementById("root")),c.a.render(Object(f.jsx)(v,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.33109f12.chunk.js.map