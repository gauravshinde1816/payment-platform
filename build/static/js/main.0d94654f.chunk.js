(this["webpackJsonppayment-form"]=this["webpackJsonppayment-form"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(33),r=n.n(s),i=(n(39),n(40),n(2)),o=n(8),l=n.n(o),j=n(12),u=n(10),d=n.p+"static/media/logo.6ce24c58.svg",p=n.p+"static/media/nphsat.3d9b6e5e.png",m=n(13),h=n.n(m),b=n(0);var O=function(){var e=Object(a.useState)("4999"),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)({}),r=Object(u.a)(s,2),i=r[0],o=r[1],m=Object(a.useState)(0),O=Object(u.a)(m,2),x=O[0],v=O[1];Object(a.useEffect)((function(){f.map((function(e){e.course===i&&c(e.fees)}))}),[i]);var f=[{course:"AI & ML",fees:"2500"},{course:"Web development",fees:"1500"},{course:"Cyber Security",fees:"3500"},{course:"Data Science",fees:"5500"}];function g(e){return new Promise((function(t){var n=document.createElement("script");n.src=e,n.onload=function(){t(!0)},n.onerror=function(){t(!1)},document.body.appendChild(n)}))}function N(){return(N=Object(j.a)(l.a.mark((function e(){var t,n,a,c,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("https://checkout.razorpay.com/v1/checkout.js");case 2:if(e.sent){e.next=6;break}return alert("Razorpay SDK failed to load. Are you online?"),e.abrupt("return");case 6:return e.next=8,h.a.post("http://localhost:8080/payment/orders");case 8:if(t=e.sent){e.next=12;break}return alert("Server error. Are you online?"),e.abrupt("return");case 12:n=t.data,a=n.amount,c=n.id,s=n.currency,r={key:"rzp_test_fOPTOz9r6ejQi8",amount:a.toString(),currency:s,name:"Soumya Corp.",description:"Test Transaction",image:{logo:d},order_id:c,handler:function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={orderCreationId:c,razorpayPaymentId:t.razorpay_payment_id,razorpayOrderId:t.razorpay_order_id,razorpaySignature:t.razorpay_signature},e.next=3,h.a.post("http://localhost:8080/payment/success",n);case 3:a=e.sent,console.log(a),alert(a.data.msg);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),prefill:{name:"Soumya Dey",email:"SoumyaDey@example.com",contact:"9999999999"},notes:{address:"Soumya Dey Corporate Office"},theme:{color:"#61dafb"}},new window.Razorpay(r).open();case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("div",{className:"container payment",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-12 logo-container",children:Object(b.jsx)("img",{src:p,alt:""})}),Object(b.jsx)("div",{className:"col-lg-6",children:Object(b.jsxs)("div",{className:"payment-form",children:[Object(b.jsx)("h1",{children:"Payment Registration"}),Object(b.jsx)("label",{className:"col-12",for:"internshipTrack",children:"Internship Track"}),Object(b.jsx)("select",{className:"internshipTrack col-12",name:"internshipTrack",value:i,onChange:function(e){return o(e.target.value)},children:f.map((function(e){return Object(b.jsx)("option",{value:e.course,children:e.course})}))}),Object(b.jsx)("label",{className:"col-12",for:"internshipTrack",children:"Duration"}),Object(b.jsxs)("select",{className:"col-12",name:"duration",value:x,onChange:function(e){return v(e.target.value)},children:[Object(b.jsx)("option",{value:3,children:"3 months"}),Object(b.jsx)("option",{value:6,children:"6 months"}),Object(b.jsx)("option",{value:12,children:"12 months"})]}),Object(b.jsxs)("div",{className:"total-amount-container",children:["Total Amount: INR ",n]}),Object(b.jsx)("div",{className:"btn btn-success rounded-0 col-12",onClick:function(){return N.apply(this,arguments)},children:"PayNow"})]})}),Object(b.jsx)("div",{className:"col-lg-6",children:Object(b.jsx)("div",{className:"row p-4",children:Object(b.jsxs)("div",{className:" benefits-container",children:[Object(b.jsx)("div",{className:"col-12 benefits-head",children:"Remote Internship Program Benefits"}),Object(b.jsx)("ul",{children:["Remote Internships Benefits","Remote Internships Benefits","Remote Internships Benefits","Remote Internships Benefits","Remote Internships Benefits","Remote Internships Benefits","Remote Internships Benefits"].map((function(e){return Object(b.jsx)("li",{className:"col-12",children:e})}))})]})})})]})})})},x=n(15),v=n(19),f=new Date;var g=function(){var e=Object(i.f)(),t=Object(a.useState)({firstName:"",lastName:"",phoneNumber:"",email:"",department:"",yearOfPassing:f.getFullYear(),date:"8",month:"January"}),n=Object(u.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(),o=Object(u.a)(r,2),d=o[0],m=(o[1],["January","February","March","April","May","June","July","August","September","October","November","December"]),O=function(e){console.log(e.target.value),s(Object(v.a)(Object(v.a)({},c),{},Object(x.a)({},e.target.name,e.target.value)))},g=function(){var t=Object(j.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log(c),t.prev=2,t.next=5,h.a.post("https://sheet.best/api/sheets/a1b38d80-ebfc-45c7-8647-1c774ab29c6e",c);case 5:a=t.sent,console.log(a),e.push("/pay"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"App form-container",children:Object(b.jsxs)("div",{className:"form-dialogue",children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-12",children:Object(b.jsx)("div",{className:"logo-container",children:Object(b.jsx)("img",{src:p,alt:""})})})}),Object(b.jsxs)("div",{className:"col-12 my-2 bg-danger text-light px-3",children:["Course Fee starting from"," ",Object(b.jsxs)("strike",{children:["\u20b9 7,000/-",Object(b.jsx)("br",{})," "]}),"\u20b9 4,499/-"]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("form",{className:"row p-3",onSubmit:g,children:[Object(b.jsxs)("h3",{className:"registration-title col-lg-12",children:[" ","Registration Form"," "]}),Object(b.jsx)("div",{className:"col-6",children:Object(b.jsx)("input",{className:"input p-2",name:"firstName",type:"text",value:c.firstName,placeholder:"First Name*",required:!0,onChange:O})}),Object(b.jsx)("div",{className:"col-6",children:Object(b.jsx)("input",{className:"input col-6 p-2",name:"lastName",type:"text",value:c.lastName,placeholder:"Last Name*",required:!0,onChange:O})}),Object(b.jsx)("div",{className:"col-12",children:Object(b.jsx)("input",{className:"input p-2",name:"email",type:"email",value:c.email,placeholder:"Email*",required:!0,onChange:O})}),Object(b.jsx)("div",{className:"col-12",children:Object(b.jsx)("input",{className:"input p-2",name:"phoneNumber",type:"number",min:"7777777777",value:c.phoneNumber,placeholder:"Phone Number (WhatsApp Number) *",required:!0,onChange:O})}),Object(b.jsx)("div",{className:"col-12",children:Object(b.jsx)("input",{className:"input p-2",name:"department",type:"text",v:!0,alue:c.department,placeholder:"Department*",required:!0,onChange:O})}),Object(b.jsx)("label",{className:" col-12 mt-3 label-year-of-passing",children:"Year of Passing"}),Object(b.jsx)("div",{className:"col-12",children:Object(b.jsxs)("select",{value:c.yearOfPassing,id:"#yearOfPassing",placeholder:"Year of Passing",onChange:O,children:[Object(b.jsx)("option",{selected:!0,children:f.getFullYear()}),Object(b.jsx)("option",{children:f.getFullYear()+1}),Object(b.jsx)("option",{children:f.getFullYear()+2}),Object(b.jsx)("option",{children:f.getFullYear()+3})]})}),Object(b.jsx)("label",{className:"col-12 mt-3",children:"Date of Registration"}),Object(b.jsx)("div",{className:"col-6",children:Object(b.jsxs)("select",{required:!0,value:c.date,name:"date",onChange:O,children:[Object(b.jsxs)("option",{selected:!0,value:8,children:[" ","8th"," "]}),Object(b.jsx)("option",{value:24,children:" 24th "})]})}),Object(b.jsx)("div",{className:"col-6",children:Object(b.jsxs)("select",{value:c.registrationMonth,name:"month",onChange:O,children:[Object(b.jsx)("option",{value:m[0],selected:!0,children:m[0]}),Object(b.jsx)("option",{value:m[1],children:m[1]}),Object(b.jsx)("option",{value:m[2],children:m[2]}),Object(b.jsx)("option",{value:m[3],children:m[3]}),Object(b.jsx)("option",{value:m[4],children:m[4]}),Object(b.jsx)("option",{value:m[5],children:m[5]}),Object(b.jsx)("option",{value:m[6],children:m[6]}),Object(b.jsx)("option",{value:m[7],children:m[7]}),Object(b.jsx)("option",{value:m[8],children:m[8]}),Object(b.jsx)("option",{value:m[9],children:m[9]}),Object(b.jsx)("option",{value:m[10],children:m[10]}),Object(b.jsx)("option",{value:m[11],children:m[11]})]})}),Object(b.jsxs)("div",{className:"mt-3",children:[Object(b.jsx)("div",{className:"text-danger",children:d}),Object(b.jsx)("button",{type:"submit",className:"btn btn-success col-12 rounded-0",children:"Register"})]})]}),Object(b.jsx)("div",{className:"col-lg-4"})]})]})})};new Date;var N=function(){return Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{eaxct:!0,path:"/pay",children:Object(b.jsx)(O,{})}),Object(b.jsx)(i.a,{path:"/",children:Object(b.jsx)(g,{})})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,92)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))},C=(n(66),n(67),n(68),n(14));r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(C.a,{children:Object(b.jsx)(N,{})})}),document.getElementById("root")),y()}},[[90,1,2]]]);
//# sourceMappingURL=main.0d94654f.chunk.js.map