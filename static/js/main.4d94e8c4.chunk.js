(this.webpackJsonpreactdemo=this.webpackJsonpreactdemo||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(7),a=n.n(i),r=n(2),s=n(5),o=n(0),j=function(e){return Object(o.jsxs)("div",{className:"rm-person",children:[Object(o.jsx)("img",{src:e.image,alt:e.name}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:e.name}),Object(o.jsx)("p",{children:e.age})]})]})},u=function(e){var t=e.data;return Object(o.jsx)(o.Fragment,{children:t.map((function(e){return Object(o.jsx)(j,Object(s.a)({},e),e.id)}))})},d=(n(14),[{id:1,name:"Bertie Yates",age:28,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"},{id:2,name:"Hester Hogan",age:32,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"},{id:3,name:"Larry Little",age:36,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"},{id:4,name:"Sean Walsh",age:34,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"},{id:5,name:"Lola Gardner",age:29,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"}]),m=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){i(d)}),[]),Object(o.jsx)("main",{children:Object(o.jsxs)("section",{className:"rm-container",children:[Object(o.jsx)("h2",{children:"Birthday Reminder App Page"}),Object(o.jsxs)("h3",{children:[n.length," birthdays today"]}),Object(o.jsx)(u,{data:n}),Object(o.jsx)("button",{type:"button",onClick:function(){return i([])},children:"Remove All"})]})})},l=[{id:1,img:"https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg",title:"I love you to the moon and back",author:"John"},{id:2,img:"https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",title:"I Love You to the Moon and Back",author:"Amelia Hepworth"}],b=function(e){var t=e.img,n=e.title,c=e.author;return Object(o.jsxs)("article",{className:"book",children:[Object(o.jsx)("img",{src:t,alt:""}),Object(o.jsx)("h4",{children:n}),Object(o.jsx)("h4",{children:c}),Object(o.jsx)("button",{type:"button",className:"btn",onClick:function(){return function(e){alert(e)}(c)},children:"more details"})]})},h=n(8),O=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)([]),s=Object(r.a)(a,2),j=s[0],u=s[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),n){var t={id:(new Date).getTime().toString(),name:n};u((function(e){return[].concat(Object(h.a)(e),[t])})),i("")}else console.log("empty input")},children:[Object(o.jsx)("div",{children:Object(o.jsx)("input",{type:"text",value:n,onChange:function(e){return i(e.target.value)}})}),Object(o.jsx)("button",{type:"submit",children:"add user"})]}),Object(o.jsx)("hr",{style:{marginTop:"2rem"}}),j.map((function(e){return Object(o.jsxs)("div",{style:{marginTop:"0.5rem"},children:[Object(o.jsx)("p",{children:e.name}),Object(o.jsx)("button",{type:"button",onClick:function(){return function(e){var t=j.filter((function(t){return t.id!==e}));u(t)}(e.id)},children:" remove "})]},e.id)}))]})},p=function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("hr",{style:{margin:"2rem"}}),n&&Object(o.jsx)(O,{style:{marginBottom:"2rem"}}),Object(o.jsx)("button",{type:"button",onClick:function(){i(!n)},children:"show/hide"})]})},g=(n(15),function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("section",{className:"header",children:Object(o.jsx)(p,{})}),Object(o.jsx)("section",{className:"booklist",children:l.map((function(e){return Object(o.jsx)(b,Object(s.a)({},e),e.id)}))})]})}),x=function(){var e=Object(c.useState)("Random"),t=Object(r.a)(e,2);t[0],t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(m,{}),Object(o.jsx)("hr",{style:{margin:"3rem"}}),Object(o.jsx)(g,{})]})};n(16);a.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4d94e8c4.chunk.js.map