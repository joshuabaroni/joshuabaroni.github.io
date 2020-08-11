(this["webpackJsonpjoshuabaroni.github.io"]=this["webpackJsonpjoshuabaroni.github.io"]||[]).push([[0],{23:function(e,t,a){e.exports={NavLink:"Menu_NavLink__9JLxN",navbar:"Menu_navbar__2k2K1","navbar-brand":"Menu_navbar-brand__3SODX","navbar-toggle":"Menu_navbar-toggle__1v0eG"}},24:function(e,t,a){e.exports=a.p+"static/media/JoshBaroniResume2020-1.ff228373.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/ProfilePicBaroni2016.5bae192a.jpg"},38:function(e,t,a){e.exports=a(54)},43:function(e,t,a){},44:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(11),r=a.n(c),i=(a(43),a(44),a(14)),s=a(15),l=a(19),u=a(17),m=a(6),h=a.n(m),d=a(37),p=a(58),f=a(57),y=a(23),v=a.n(y),b=function(e){var t=[];return e.sections.map((function(e,a){return t.push(o.a.createElement(p.a.Link,{key:a,className:v.a.NavLink,href:"#".concat(e)},e))})),o.a.createElement(p.a,{className:"Menu"},t)},g=function(e){return o.a.createElement("div",null,o.a.createElement(f.a,{className:v.a.navbar,bg:"light",expand:"lg"},o.a.createElement(f.a.Brand,{href:"#root"}),o.a.createElement(b,{sections:e.sections})))},E=function(e){return o.a.createElement("div",{className:e.className},o.a.createElement("h2",null,e.classTitle),o.a.createElement("img",{src:e.img,style:{width:"60%"}}),o.a.createElement("p",null,console.log(e.body),e.body),e.children)},_=a(35),k=a.n(_),w=a(24),j=a.n(w),B=a(13),N=a.n(B),P=a(25),x=(new XMLHttpRequest,"https://naivebayesjava.herokuapp.com"),M={list_files:x+"/list_available_files",get_model:x+"/get_model",get_model_accuracy:x+"/get_model_accuracy",set_file:function(e){return x+"/set_file?fileKey=".concat(e)}};function S(e){return C.apply(this,arguments)}function C(){return(C=Object(P.a)(N.a.mark((function e(t){var a,n,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"GET",headers:{"Content-Type":"application/json"},accept:{Accept:"application/json"}},e.next=3,fetch(t,a);case 3:return n=e.sent,e.next=6,n.text();case 6:return o=e.sent,console.log("Response received from ".concat(M.get_model_accuracy," with code ").concat(n.status)),o=JSON.stringify(o),o=JSON.parse(o),e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(P.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={method:"POST",headers:{"Content-Type":"application/json"}},fetch(M.set_file(t),a).then((function(e){console.log("POST request sent to ".concat(M.set_file(t)," with code ").concat(e.status))}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({input:t.target.value})},e.callSetData=function(){!function(e){O.apply(this,arguments)}(e.state.input)},e.callListOfFiles=function(){S(M.list_files).then((function(t){e.setState({output:t})}))},e.callGetModel=function(){S(M.get_model).then((function(t){e.setState({output:t})}))},e.callGetModelAccuracy=function(){S(M.get_model_accuracy).then((function(t){e.setState({output:t})}))},e.state={input:"",output:[]},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h3",null,"Welcome to Naive Bayes Java!"),o.a.createElement("p",null,"The REST API for this project is hosted at"),o.a.createElement("a",{style:{display:"block","padding-bottom":"1.5em"},href:"https://naivebayesjava.herokuapp.com/swagger-ui.html#/"},"https://naivebayesjava.herokuapp.com/"),o.a.createElement("button",{style:{display:"inline"},onClick:this.callListOfFiles},"Get List of Valid Files"),o.a.createElement("button",{onClick:this.callGetModel},"Get Model"),o.a.createElement("button",{onClick:this.callGetModelAccuracy},"Get Model Accuracy"),o.a.createElement("div",{style:{margin:"auto",display:"block"}},o.a.createElement("input",{type:"text",value:this.state.input,onChange:this.handleChange}),o.a.createElement("button",{onClick:this.callSetData},"Set Training Data File")),o.a.createElement("output",{type:"textBox",style:{padding:"1.25em",display:"block",Height:"30px",Width:"300px"}},Object.keys(this.state.output).map((function(t){return e.state.output[t]}))))}}]),a}(n.Component),T={name:"Joshua Baroni",title:"FullStack Developer",sections:["Home","About Me","My Resume","Projects","Contact Me"],subpages:[function(){return o.a.createElement("div",{key:1,id:T.sections[1],className:h.a.BorderedDiv},o.a.createElement(E,{ignore:h.a.Ignore,className:h.a.sixtyPercent,classTitle:T.sections[1],img:k.a,body:"Hi, my name is Josh Baroni and welcome to my website!\n                    Graduating from CNU's Class of 2020 with a B.S. in Computer Science,\n                    I am currently new to the industry and am finding what specific type\n                    of data architecture and design I am most interested in pursuing. In the\n                    meantime, feel free to check out some of the projects I've worked on over\n                    the years."}))},function(){return o.a.createElement("div",{key:2,id:T.sections[2],className:h.a.BorderedDiv},o.a.createElement(E,{classTitle:"".concat(T.sections[2],": Updated 2020"),img:j.a},o.a.createElement(L,{name:"JoshBaroniResume2020.PDF",href:"https://docs.google.com/document/d/1XPGBCnOPeDbmYbU79OaEwSEDOC9kUKM1WLgZkvsJT4g/edit?usp=sharing"})))},function(){return o.a.createElement("div",{key:3,id:T.sections[4],className:h.a.BorderedDiv},o.a.createElement(E,{className:h.a.Bottom,classTitle:"".concat(T.sections[4]),body:"Email: joshua.baroni.16@cnu.edu\r Cell: (571)-389-2922 (Text me unless it's urgent!)\r Discord: HesAMusicMan#2934\r Contact Hours: 9a-5p EST Mon-Sat"}))}]},L=function(e){return console.log(e.href),o.a.createElement(d.a,null,o.a.createElement("a",{href:e.href},o.a.createElement("button",{className:h.a.LinkButton},o.a.createElement("strong",null,e.name))))};console.log(j.a);var G=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={show:!1},e.showNaiveBayes=function(){e.setState({show:!e.state.show})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{key:0,id:T.sections[0],className:h.a.Home},o.a.createElement(g,{sections:T.sections}),o.a.createElement("h1",null,T.name,": ",T.title),o.a.createElement(L,{name:"Github",href:"https://github.com/joshuabaroni"}),o.a.createElement(L,{name:"LinkedIn",href:"https://www.linkedin.com/in/joshua-baroni-b50580177/"}),o.a.createElement(L,{name:"Facebook",href:"https://www.facebook.com/profile.php?id=100020207475034"}),o.a.createElement("div",{style:{height:"20px"}}),this.state.show?o.a.createElement("div",null,o.a.createElement("button",{style:{margin:"auto",display:"block"},onClick:e.showNaiveBayes},"Hide Naive Bayes Project Interface"),o.a.createElement(D,{className:h.a.Project})):o.a.createElement("button",{style:{margin:"auto",display:"block"},onClick:e.showNaiveBayes},"Show Naive Bayes Project Interface"),T.subpages.map((function(e){return e()})))}}]),a}(n.Component);var I=function(){return o.a.createElement("div",null,o.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports={Home:"EntryPoint_Home__2XQwI",AboutMe:"EntryPoint_AboutMe__3dg8Q",BorderedDiv:"EntryPoint_BorderedDiv__2hydP",Bottom:"EntryPoint_Bottom__2Dcu2",LinkButton:"EntryPoint_LinkButton__3ufBN",Project:"EntryPoint_Project__2_-gZ",sixtyPercent:"EntryPoint_sixtyPercent__WKGmz"}}},[[38,1,2]]]);
//# sourceMappingURL=main.d526cd1e.chunk.js.map