(this["webpackJsonppayment-form"]=this["webpackJsonppayment-form"]||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(33),s=a.n(r),o=(a(39),a(40),a(2)),l=a(8),i=a.n(l),u=a(13),j=a(10),d=a.p+"static/media/logo.6ce24c58.svg",p=a.p+"static/media/nphsat.3d9b6e5e.png",b=a(14),m=a.n(b),h=a(0);var O=function(){var e=Object(n.useState)("4999"),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)({}),s=Object(j.a)(r,2),o=s[0],l=s[1],b=Object(n.useState)(0),O=Object(j.a)(b,2),x=O[0],v=O[1];Object(n.useEffect)((function(){f.map((function(e){e.course===o&&c(e.fees)}))}),[o]);var f=[{course:"AI & ML",fees:"2500"},{course:"Web development",fees:"1500"},{course:"Cyber Security",fees:"3500"},{course:"Data Science",fees:"5500"}];function g(e){return new Promise((function(t){var a=document.createElement("script");a.src=e,a.onload=function(){t(!0)},a.onerror=function(){t(!1)},document.body.appendChild(a)}))}function y(){return(y=Object(u.a)(i.a.mark((function e(){var t,a,n,c,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("https://checkout.razorpay.com/v1/checkout.js");case 2:if(e.sent){e.next=6;break}return alert("Razorpay SDK failed to load. Are you online?"),e.abrupt("return");case 6:return e.next=8,m.a.post("http://localhost:8080/payment/orders");case 8:if(t=e.sent){e.next=12;break}return alert("Server error. Are you online?"),e.abrupt("return");case 12:a=t.data,n=a.amount,c=a.id,r=a.currency,s={key:"rzp_test_fOPTOz9r6ejQi8",amount:n.toString(),currency:r,name:"Soumya Corp.",description:"Test Transaction",image:{logo:d},order_id:c,handler:function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={orderCreationId:c,razorpayPaymentId:t.razorpay_payment_id,razorpayOrderId:t.razorpay_order_id,razorpaySignature:t.razorpay_signature},e.next=3,m.a.post("http://localhost:8080/payment/success",a);case 3:n=e.sent,console.log(n),alert(n.data.msg);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),prefill:{name:"Soumya Dey",email:"SoumyaDey@example.com",contact:"9999999999"},notes:{address:"Soumya Dey Corporate Office"},theme:{color:"#61dafb"}},new window.Razorpay(s).open();case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsx)("div",{className:"App container-fluid payment",children:Object(h.jsxs)("div",{className:"payment-form",children:[Object(h.jsx)("div",{className:"col-12 logo-container",children:Object(h.jsx)("img",{src:p,alt:""})}),Object(h.jsx)("h1",{children:"Payment Registration"}),Object(h.jsx)("label",{className:"col-12",for:"internshipTrack",children:"Internship Track"}),Object(h.jsx)("select",{className:"internshipTrack col-12",name:"internshipTrack",value:o,onChange:function(e){return l(e.target.value)},children:f.map((function(e){return Object(h.jsx)("option",{value:e.course,children:e.course})}))}),Object(h.jsx)("label",{className:"col-12",for:"internshipTrack",children:"Duration"}),Object(h.jsxs)("select",{className:"col-12",name:"duration",value:x,onChange:function(e){return v(e.target.value)},children:[Object(h.jsx)("option",{value:3,children:"3 months"}),Object(h.jsx)("option",{value:6,children:"6 months"}),Object(h.jsx)("option",{value:12,children:"12 months"})]}),Object(h.jsxs)("div",{className:"total-amount-container",children:["Total Amount: INR ",a]}),Object(h.jsx)("div",{className:"btn btn-success rounded-0",onClick:function(){return y.apply(this,arguments)},children:"PayNow"})]})})},x=a(11),v=a(19),f=new Date;var g=function(){var e,t=Object(o.f)(),a=Object(n.useState)({firstName:"",lastName:"",phoneNumber:"",email:"",department:"",yearOfPassing:f.getFullYear(),date:"8",month:"January"}),c=Object(j.a)(a,2),r=c[0],s=c[1],l=Object(n.useState)(),d=Object(j.a)(l,2),b=d[0],O=(d[1],["January","February","March","April","May","June","July","August","September","October","November","December"]),g=function(e){console.log(e.target.value),s(Object(v.a)(Object(v.a)({},r),{},Object(x.a)({},e.target.name,e.target.value)))},y=function(){var e=Object(u.a)(i.a.mark((function e(a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log(r),e.prev=2,e.next=5,m.a.post("https://sheet.best/api/sheets/a1b38d80-ebfc-45c7-8647-1c774ab29c6e",r);case 5:n=e.sent,console.log(n),t.push("/pay"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:window.location.replace("http://www.w3schools.com");case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"App form-container",children:Object(h.jsxs)("div",{className:"form-dialogue",children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-12 logo-container",children:Object(h.jsx)("img",{src:p,alt:""})})}),Object(h.jsxs)("div",{className:"col-12 my-2 bg-danger text-light px-3",children:["Course Fee starting from"," ",Object(h.jsxs)("strike",{children:["\u20b9 7,000/-",Object(h.jsx)("br",{})," "]}),"\u20b9 4,499/-"]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("form",{className:"row p-3",onSubmit:y,children:[Object(h.jsx)("h3",{className:"registration-title col-lg-12",children:" Registration Form "}),Object(h.jsx)("div",{className:"col-6",children:Object(h.jsx)("input",{className:"input p-2",name:"firstName",type:"text",value:r.firstName,placeholder:"First Name*",required:!0,onChange:g})}),Object(h.jsx)("div",{className:"col-6",children:Object(h.jsx)("input",{className:"input col-6 p-2",name:"lastName",type:"text",value:r.lastName,placeholder:"Last Name*",required:!0,onChange:g})}),Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("input",{className:"input p-2",name:"email",type:"email",value:r.email,placeholder:"Email*",required:!0,onChange:g})}),Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("input",{className:"input p-2",name:"phoneNumber",type:"number",min:"7777777777",value:r.phoneNumber,placeholder:"Phone Number (WhatsApp Number) *",required:!0,onChange:g})}),Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("input",{className:"input p-2",name:"department",type:"text",v:!0,alue:r.department,placeholder:"Department*",required:!0,onChange:g})}),Object(h.jsx)("label",{className:" col-12 mt-3 label-year-of-passing",children:"Year of Passing"}),Object(h.jsx)("div",{className:"col-12",children:Object(h.jsxs)("select",{value:r.yearOfPassing,id:"#yearOfPassing",placeholder:"Year of Passing",onChange:g,children:[Object(h.jsx)("option",{selected:!0,children:f.getFullYear()}),Object(h.jsx)("option",{children:f.getFullYear()+1}),Object(h.jsx)("option",{children:f.getFullYear()+2}),Object(h.jsx)("option",{children:f.getFullYear()+3})]})}),Object(h.jsx)("label",{className:"col-12 mt-3",children:"Date of Registration"}),Object(h.jsx)("div",{className:"col-6",children:Object(h.jsxs)("select",{required:!0,value:r.date,name:"date",onChange:g,children:[Object(h.jsxs)("option",{selected:!0,value:8,children:[" ","8th"," "]}),Object(h.jsx)("option",{value:24,children:" 24th "})]})}),Object(h.jsx)("div",{className:"col-6",children:Object(h.jsxs)("select",{value:r.registrationMonth,name:"month",onChange:g,children:[Object(h.jsx)("option",{value:O[0],selected:!0,children:O[0]}),Object(h.jsx)("option",{value:O[1],children:O[1]}),Object(h.jsx)("option",{value:O[2],children:O[2]}),Object(h.jsx)("option",{value:O[3],children:O[3]}),Object(h.jsx)("option",{value:O[4],children:O[4]}),Object(h.jsx)("option",{value:O[5],children:O[5]}),Object(h.jsx)("option",{value:O[6],children:O[6]}),Object(h.jsx)("option",{value:O[7],children:O[7]}),Object(h.jsx)("option",{value:O[8],children:O[8]}),Object(h.jsx)("option",{value:O[9],children:O[9]}),Object(h.jsx)("option",{value:O[10],children:O[10]}),Object(h.jsx)("option",{value:O[11],children:O[11]})]})}),Object(h.jsxs)("div",{className:"mt-3",children:[Object(h.jsx)("div",{className:"text-danger",children:b}),Object(h.jsx)("button",(e={className:"col-12",type:"submit"},Object(x.a)(e,"className","btn btn-success"),Object(x.a)(e,"children","Register"),e))]})]}),Object(h.jsx)("div",{className:"col-lg-4"})]})]})})};new Date;var y=function(){return Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{eaxct:!0,path:"/pay",children:Object(h.jsx)(O,{})}),Object(h.jsx)(o.a,{path:"/",children:Object(h.jsx)(g,{})})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,92)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},w=(a(66),a(67),a(68),a(15));s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(w.a,{children:Object(h.jsx)(y,{})})}),document.getElementById("root")),N()}},[[90,1,2]]]);
//# sourceMappingURL=main.47b8d485.chunk.js.map