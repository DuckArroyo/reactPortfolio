/*! For license information please see main.966b3239.chunk.js.LICENSE.txt */
(this.webpackJsonpchallenge20=this.webpackJsonpchallenge20||[]).push([[0],{11:function(e,t,n){},13:function(e){e.exports=JSON.parse('[{"id":1,"name":"swapsies","image":"../photos/canyon.jpg","gitHub":"https://github.com/DuckArroyo/swapsies","liveLink":"https://sheltered-sands-11266.herokuapp.com/"},{"id":2,"name":"What to Eat","image":"../photos/dam.jpg","gitHub":"https://github.com/DuckArroyo/whattoeat","liveLink":"https://duckarroyo.github.io/whattoeat/"},{"id":3,"name":"WickedBlogs","image":"../photos/eye.jpg","gitHub":"https://github.com/DuckArroyo/wickedblogs","liveLink":"https://sleepy-caverns-39452.herokuapp.com"},{"id":4,"name":"Note Taker","image":"../photos/camdenLock.jpg","gitHub":"https://github.com/DuckArroyo/challenge11","liveLink":"https://still-sands-24648.herokuapp.com/"},{"id":5,"name":"Password Generator","image":"../photos/mesa.jpg","gitHub":"https://github.com/DuckArroyo/challenge3","liveLink":"https://duckarroyo.github.io/passwordgenerator/"},{"id":6,"name":"Workday Scheduler","image":"../photos/sand.jpg","gitHub":"https://github.com/DuckArroyo/challenge5","liveLink":"https://duckarroyo.github.io/challenge5/"}]')},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(10),s=n(12),a=n.n(s),l=(n(18),n(2)),o=n(0);function j(){return Object(o.jsxs)("header",{children:[Object(o.jsx)("h2",{className:"inBox",children:"DeveloperDuck"}),Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{className:"navBar",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"/contact",children:"Contact"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"/portfolio",children:"Portfolio"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"/resume",children:"Resume"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"/fiveyear",children:"5 Year Plan"})})]})})]})}function h(){return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:"Welcome"}),Object(o.jsxs)("div",{id:"content",children:[Object(o.jsx)("p",{children:"Welcome to my first React application. Please look around and feel free to inquire via email. The contact form has front end functionality only at the moment, I will add backend functionality as time allows."}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:"Hello, my name is Rafael Arroyo, and I am a web development student at the University of Oregon. I am starting a YouTube channel in 2022. Love and enjoy the Pacific Northwest #UpperLeftUSA. For the past 6 years I have been playing the game Ingress where I slay the competition."})]})]})}var d=n(6),b=n(7),m=n(4);function u(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(m.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(""),s=Object(m.a)(r,2),a=s[0],l=s[1],j=n.name,h=n.email,u=n.message;function O(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);l(t?"":"Your email is invalid.")}else e.target.value.length?l(""):l("".concat(e.target.name," is required."));a||i(Object(b.a)(Object(b.a)({},n),{},Object(d.a)({},e.target.name,e.target.value)))}return console.log(n),Object(o.jsxs)("section",{children:[Object(o.jsx)("h1",{children:"Message me"}),Object(o.jsxs)("form",{id:"contact-form",children:[Object(o.jsx)("p",{children:"The contact form has front end functionality only at the moment, I will add backend functionality as time allows. The form does console log user input. The fields are validated."}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:"To contact me, click the Email me link in the footer."}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",defaultValue:j,onBlur:O,name:"name"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address: "}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"email",defaultValue:h,onBlur:O,name:"email"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message: "}),Object(o.jsx)("br",{}),Object(o.jsx)("textarea",{name:"message",defaultValue:u,onBlur:O,rows:"5"})]}),a&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:a})}),Object(o.jsx)("button",{id:"contact-form",onSubmit:function(e){e.preventDefault(),a||(i(Object(b.a)(Object(b.a)({},n),{},Object(d.a)({},e.target.name,e.target.value))),console.log("Form",n))},children:"Send"})]})]})}n(11);function O(e){return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"img-container",children:Object(o.jsx)("img",{alt:e.image,src:e.image})}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Name: "})," ",e.name]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"GitHub: "}),Object(o.jsx)("a",{href:e.gitHub,children:"Link"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Live Application: "}),Object(o.jsx)("a",{href:e.liveLink,children:"Link"})]})]})})]})}var x=n(13);function g(){return Object(o.jsx)("div",{className:"wrapper",children:x.map((function(e){return Object(o.jsx)(O,{id:e.id,name:e.name,gitHub:e.gitHub,liveLink:e.liveLink,image:e.image},e.id)}))})}function p(){return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:"WORK EXPERIENCE"}),Object(o.jsx)("h3",{children:"University of Oregon, Eugene \u2014 Office Coordinator II"}),Object(o.jsx)("h4",{children:"August 2013 - PRESENT"}),Object(o.jsx)("div",{id:"content",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Manage budget operations"}),Object(o.jsx)("li",{children:"Prepare budget reports for program director and teams"}),Object(o.jsx)("li",{children:"Reconcile ledger"}),Object(o.jsx)("li",{children:"Manage the department procurement cards"}),Object(o.jsx)("li",{children:"Assist with developing office policies and procedures"}),Object(o.jsx)("li",{children:"Develop automated workflows for department processes"}),Object(o.jsx)("li",{children:"Draft contracts for events"}),Object(o.jsx)("li",{children:"Work with the contracting office to execute agreements"}),Object(o.jsx)("li",{children:"Assist in fulfilling terms set in agreements Develop the curriculum for student trainings"}),Object(o.jsx)("li",{children:"On Board and train student assistants into department"}),Object(o.jsx)("li",{children:"Managed department logistics"}),Object(o.jsx)("li",{children:"Hire, train, and supervise event student staff"}),Object(o.jsx)("li",{children:"Assess event activities risk and advise on ways to mitigate"}),Object(o.jsx)("li",{children:"Oversee department payroll and process hiring documents"}),Object(o.jsx)("li",{children:"EMU Permanent Art Collection manager"})]})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"EDUCATION"}),Object(o.jsx)("h3",{children:"University of Oregon, Eugene \u2014 B.A. of Art "}),Object(o.jsx)("p",{children:"September 2010 - June 2013"}),Object(o.jsx)("h3",{children:"Coding Bootcamp"}),Object(o.jsx)("p",{children:"July 2021 - January 2022"}),Object(o.jsx)("div",{id:"content",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Content"}),Object(o.jsx)("li",{children:"Content"})]})}),Object(o.jsx)("h3",{children:"Chemeketa Community College, Salem \u2014 A.A. Computer Aided Drafting"}),Object(o.jsx)("p",{children:"September 2006 - June 2008"})]})]})}function f(){return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:"In five years"}),Object(o.jsx)("div",{id:"content",children:Object(o.jsx)("p",{children:"In 5 years I would like to be in Japan"})})]})}var v=n(5);function k(){return Object(o.jsxs)("footer",{className:"footer",children:[Object(o.jsx)(v.a,{href:"https://duckarroyo.github.io/challenge2",target:"_blank",children:"HTML Portfolio"}),Object(o.jsx)(v.a,{href:"https://github.com/DuckArroyo",target:"_blank",children:"GitHub"}),Object(o.jsx)(v.a,{href:"https://twitter.com/DevDuckArroyo",target:"_blank",children:"Twitter"}),Object(o.jsx)(v.a,{href:"https://www.linkedin.com/in/duckarroyo",target:"_blank",children:"LinkedIn"}),Object(o.jsx)(v.a,{href:"https://codepen.io/DeveloperDuckArroyo",target:"_blank",children:"Codepen"}),Object(o.jsx)(v.a,{href:"mailto:DeveloperDuckArroyo@gmail.com",children:"Email Me"})]})}var y=function(){return Object(o.jsxs)("div",{className:"App",style:{height:"100vh"},children:[Object(o.jsx)(j,{}),Object(o.jsx)("div",{id:"container",children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"about",element:Object(o.jsx)(h,{})}),Object(o.jsx)(l.a,{path:"contact",element:Object(o.jsx)(u,{})}),Object(o.jsx)(l.a,{path:"portfolio",element:Object(o.jsx)(g,{})}),Object(o.jsx)(l.a,{path:"resume",element:Object(o.jsx)(p,{})}),Object(o.jsx)(l.a,{path:"fiveyear",element:Object(o.jsx)(f,{})}),Object(o.jsx)(l.a,{path:"*",element:Object(o.jsx)(h,{})})]})}),Object(o.jsx)(k,{})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(r.a,{children:Object(o.jsx)(y,{})})}),document.getElementById("root")),w()}},[[20,1,2]]]);
//# sourceMappingURL=main.966b3239.chunk.js.map