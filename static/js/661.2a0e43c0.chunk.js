"use strict";(self.webpackChunkiamhegdeashwath=self.webpackChunkiamhegdeashwath||[]).push([[661],{2661:(e,a,s)=>{s.r(a),s.d(a,{default:()=>i});var t=s(5043),n=s(3279),l=s(579);const i=e=>{let{pageCard:a}=e;const[s,i]=(0,t.useState)(!0),[r,m]=(0,t.useState)({name:"",email:"",message:""}),[c,o]=(0,t.useState)(""),[d,h]=(0,t.useState)(""),[u,p]=(0,t.useState)(!1);(0,t.useEffect)((()=>()=>{i(!0)}),[]);const g=e=>{m({...r,[e.target.name]:e.target.value})},f={...r,_captcha:"false"};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("header",{children:(0,l.jsx)("h2",{className:"h2 article-title",children:a.pageTitle})}),(0,l.jsx)("section",{className:"mapbox","data-mapbox":!0,children:(0,l.jsxs)("figure",{children:[s&&(0,l.jsx)("div",{className:"spinner-container",children:(0,l.jsx)("div",{className:"spinner"})}),(0,l.jsx)("iframe",{width:"600",height:"450",style:{border:"0"},title:"Milpitas, California Area",loading:"lazy",src:"https://www.google.com/maps/embed/v1/place?key=AIzaSyAqRj_nUu61uhSvia4D5_IaN5yTduwCD5g&q=Milpitas,CA",onLoad:()=>{i(!1)}})]})}),(0,l.jsxs)("section",{className:"contact-form",children:[(0,l.jsx)("h3",{className:"h3 form-title",children:"Contact Form"}),(0,l.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),p(!0);try{if(!(await fetch("https://formsubmit.co/hegde.ashwath1@gmail.com",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)})).ok)throw new Error("Something went wrong. Please try again.");o("Your message has been sent successfully!"),h(""),m({name:"",email:"",message:""}),p(!1)}catch(a){h(a.message),o("")}n.Ay.event({category:"User",action:"Clicked Button",label:"Send Message via Contact Page"})},className:"form","data-form":!0,children:[(0,l.jsx)("input",{type:"hidden",name:"_captcha",value:"false",className:"form-input"}),(0,l.jsxs)("div",{className:"input-wrapper",children:[(0,l.jsx)("input",{type:"text",name:"name",value:r.name,className:"form-input",placeholder:"Full name",onChange:g,required:!0,"data-form-input":!0}),(0,l.jsx)("input",{type:"email",name:"email",value:r.email,className:"form-input",placeholder:"Email address",onChange:g,required:!0,"data-form-input":!0})]}),(0,l.jsx)("textarea",{name:"message",className:"form-input",value:r.message,placeholder:"Your Message",onChange:g,required:!0,"data-form-input":!0}),(0,l.jsxs)("button",{className:"form-btn",type:"submit",disabled:u,"data-form-btn":!0,children:[(0,l.jsx)("ion-icon",{name:"paper-plane"}),(0,l.jsx)("span",{children:u?"Sending...":"Send Message"})]})]}),c&&(0,l.jsxs)("div",{className:"alert alert-success-msg alert-dismissible fade show",children:[c,(0,l.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close",onClick:()=>o("")})]}),d&&(0,l.jsxs)("div",{className:"alert alert-error-msg alert-dismissible fade show",children:[d,(0,l.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close",onClick:()=>h("")})]})]})]})}}}]);
//# sourceMappingURL=661.2a0e43c0.chunk.js.map