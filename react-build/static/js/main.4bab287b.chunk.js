(this["webpackJsonpsaloon-client"]=this["webpackJsonpsaloon-client"]||[]).push([[0],{216:function(e,t,n){e.exports=n(418)},222:function(e,t,n){},228:function(e,t,n){},229:function(e,t,n){},263:function(e,t,n){},390:function(e,t,n){},413:function(e,t,n){},414:function(e,t,n){},415:function(e,t,n){},417:function(e,t,n){},418:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(129),r=n.n(c),i=n(33),s=n(4),l=n(15),u=n(35),m=n(68),d=n(420),v=n(421),f=n(424),p=n(425),E=n(92),b=n(199),h=n.n(b);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(){return!1};function y(e,t){var n=t.headers,a=t.body,o=Object(i.a)(t,["headers","body"]),c=h.a.join(j()?"https://agile-tor-73556.herokuapp.com/api/v1":"/api/v1",e);return fetch(c,O({headers:O({"Content-Type":"application/json"},n)},o,{body:JSON.stringify(a)})).then((function(e){if(e.ok)return e.json();throw e}))}function N(){return Object(a.useContext)(_e)}function k(){var e=N(),t=e.token,n=e.setToken,o=e.isLoggedIn,c=e.setIsLoggedIn,r=Object(a.useState)(null),i=Object(s.a)(r,2),l=i[0],u=i[1];return Object(a.useEffect)((function(){if(t&&o){(function(e){return y("/user",{headers:{Authorization:e}})})(t).then((function(e){return u(e)})).catch((function(e){return n(null),c(!1),void u(null)}))}}),[t,n,o,c]),l}n(222);function w(e){return o.a.createElement("div",{className:"search-wrapper"},o.a.createElement("input",{placeholder:"Search..."}),o.a.createElement("div",null,o.a.createElement("div",{className:"body"},o.a.createElement(m.c,{size:20,className:"icon",color:"white"}))))}function S(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],r=n[1],l=N(),u=l.setIsLoggedIn,m=l.setToken,E=function(t){var n=t.to,a=Object(i.a)(t,["to"]);return o.a.createElement(d.a,Object.assign({onClick:function(){return e.redirect(n)}},a))};return o.a.createElement(v.a,{isOpen:c,toggle:function(){return r(!c)},nav:!0},o.a.createElement(f.a,{caret:!0,className:"login-account"},"Hey, ",e.name),o.a.createElement(p.a,{right:!0},o.a.createElement(E,{to:"/user"},"Profile"),o.a.createElement(E,{to:"/saved-conversations"},"Saved Conversations"),o.a.createElement(E,{to:"/history"},"History"),o.a.createElement(d.a,{divider:!0}),o.a.createElement(E,{to:"/settings"},"Settings"),o.a.createElement(d.a,{divider:!0}),o.a.createElement(d.a,{onClick:function(){m(null),u(!1),e.redirect("/")}},"Log Out")))}var C=Object(u.g)((function(e){var t=N().isLoggedIn,n=k();return o.a.createElement("div",{className:"header"},o.a.createElement(l.b,{to:"/",className:"saloon"},"Saloon"),o.a.createElement(w,null),t&&o.a.createElement(l.b,{to:"/post",className:"login-account"},"Post"),t?o.a.createElement(S,{name:n?n.first_name:void 0,redirect:e.history.push}):o.a.createElement(l.b,{to:"/login",className:"login-account"},"Login"))}));n(228);var I=Object(u.g)((function(e){return o.a.createElement(l.b,{to:e.to,className:[e.location.pathname.includes(e.to)?"selected":"","nav-item"].join(" ")},e.children)})),_=function(){return o.a.createElement("div",{className:"navigation"},o.a.createElement("div",{className:"links"},o.a.createElement(I,{to:"/home"},"Home")))},L=n(201),P=n(202),T=n(213),x=n(203),z=n(214),V=n(204),A=n.n(V),D=n(205),J=n.n(D),B=function(e){function t(){var e,n;Object(L.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(T.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(o)))).persist=A()((function(e){window.localStorage.setItem(n.props.name,JSON.stringify(e))}),n.props.debounce),n}return Object(z.a)(t,e),Object(P.a)(t,[{key:"componentDidUpdate",value:function(e){var t=e.data;J()(t,this.props.data)||this.persist(this.props.data)}},{key:"componentDidMount",value:function(){var e=window.localStorage.getItem(this.props.name);e&&null!==e&&this.props.onMount(JSON.parse(e)),this.props.onComplete&&this.props.onComplete()}},{key:"render",value:function(){return null}}]),t}(o.a.Component);B.defaultProps={debounce:300};var F=n(69),q=n(132),M=n(423);function G(e){return o.a.createElement(q.a,Object.assign({matchers:[new M.a("url")]},e))}var H=n(207);function U(e){return H({seed:e})}n(229);function W(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"item",onClick:function(){return e.navigate("/conversation/".concat(e.convo_id))}},o.a.createElement("div",{className:"title"},e.title),o.a.createElement("div",{className:"inner"},o.a.createElement(K,e),o.a.createElement("div",{className:"body"},o.a.createElement(G,{content:e.description})))),o.a.createElement("div",{className:"break"}))}function K(e){var t;return o.a.createElement("div",{className:"meta"},o.a.createElement(R,{people:e.contributors,description:(t=e.contributors,1===t.length?t[0]:2===t.length?"".concat(t[0]," and ").concat(t[1]):3===t.length?"".concat(t[0],", ").concat(t[1]," and ").concat(t[2]):4===t.length?"".concat(t[0],", ").concat(t[1],", ").concat(t[2]," and ").concat(t[3]):void 0)}),o.a.createElement("div",{className:"creator"},e.creator),o.a.createElement("div",{className:"convo-data"},o.a.createElement("div",{className:"left"},o.a.createElement("div",null,"edited ",e.age),o.a.createElement("div",null,"viewed ",e.views," times")),o.a.createElement("div",{className:"right"},o.a.createElement("div",null,e.votes," votes"),o.a.createElement("div",null,e.comments," comments"))))}function R(e){return o.a.createElement("div",{className:"discussed-by"},o.a.createElement(F.a,{name:e.people[0],color:U(e.people[0]),round:!0,size:42}),e.people.length>1&&o.a.createElement(F.a,{name:e.people[1],color:U(e.people[1]),round:!0,size:42}),o.a.createElement("span",{className:"text"},o.a.createElement("div",null,"Discussion by ",e.description)))}var $=Object(u.g)((function(e){var t=e.items,n=[];return o.a.createElement("div",{className:"feed"},(t||[]).map((function(t){return!n.includes(t.convo_id)&&(n.push(t.convo_id),o.a.createElement(W,Object.assign({},t,{key:"Feed/".concat(t.convo_id),navigate:function(t){return e.history.push(t)},description:t.post})))})))}));function Q(){var e=N(),t=e.token,n=e.setToken,o=e.isLoggedIn,c=e.setIsLoggedIn,r=e.didPersistLoad,i=Object(a.useState)(null),l=Object(s.a)(i,2),u=l[0],m=l[1];return Object(a.useEffect)((function(){if(!u&&r){(function(e){return y("/feed",{method:"GET",headers:e?{Authorization:e}:void 0})})(t).then((function(e){return m(e.convos)})).catch((function(e){return n(null),c(!1),void m(null)}))}}),[t,u,n,o,c,r]),u}var X=function(){var e=Q();return o.a.createElement("div",{className:"home"},o.a.createElement($,{items:e}))},Y=n(66);n(263);function Z(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"field-title"},e.placeholder),o.a.createElement(Y.b,e),o.a.createElement(Y.a,{name:e.name,render:function(e){return o.a.createElement("div",{className:"error"},e.replace("_"," "))}}))}var ee=function(e){var t=N(),n=t.isLoggedIn,a=t.setIsLoggedIn,c=t.setToken;return n?o.a.createElement(u.a,{to:e.location.state?e.location.state.from.pathname:"/"}):o.a.createElement("div",{className:"form"},o.a.createElement("h1",null,"Login"),o.a.createElement(Y.d,{initialValues:{email:"",password:""},onSubmit:function(e,t){(function(e,t){return y("/user/login",{method:"POST",body:{email:e,password:t}})})(e.email,e.password).then((function(e){c(e.token),a(!0)})).catch((function(e){t.setErrors({password:"incorrect password"}),t.setSubmitting(!1)}))}},(function(e){var t=e.isSubmitting;return o.a.createElement(Y.c,null,o.a.createElement(Z,{type:"text",name:"email",placeholder:"email"}),o.a.createElement(Z,{type:"password",name:"password",placeholder:"password"}),o.a.createElement("button",{type:"submit",disabled:t},"Submit"),o.a.createElement("div",{className:"switch-here"},"Don't have an account? Join ",o.a.createElement(l.b,{to:"/register"},"here")))})))},te=n(57);var ne=function(){var e=N(),t=e.setToken,n=e.setIsLoggedIn;return e.isLoggedIn?o.a.createElement(u.a,{to:"/home"}):o.a.createElement("div",{className:"form"},o.a.createElement("h1",null,"Register"),o.a.createElement(Y.d,{initialValues:{username:"",password:"",first_name:"",last_name:"",email:""},onSubmit:function(e,a){(function(e){var t=e.username,n=e.password;return y("/user/signup",{method:"POST",body:{username:t,first_name:e.first_name,last_name:e.last_name,password:n,email:e.email}})})(e).then((function(e){t(e.token),n(!0)})).catch((function(e){return a.setFieldError("email","something went wrong")}))},validationSchema:te.object().shape({first_name:te.string().required(),last_name:te.string().required(),username:te.string().required(),password:te.string().required()})},(function(e){var t=e.isSubmitting;return o.a.createElement(Y.c,null,o.a.createElement(Z,{type:"email",name:"email",placeholder:"email"}),o.a.createElement(Z,{type:"text",name:"first_name",placeholder:"first name"}),o.a.createElement(Z,{type:"text",name:"last_name",placeholder:"last name"}),o.a.createElement(Z,{type:"text",name:"username",placeholder:"username"}),o.a.createElement(Z,{type:"password",name:"password",placeholder:"password"}),o.a.createElement("button",{type:"submit",disabled:t},"Submit"),o.a.createElement("div",{className:"switch-here"},"Already have an account? Login ",o.a.createElement(l.b,{to:"/login"},"here")))})))},ae=n(95),oe=n(56);n(390);var ce=function(e){var t=e.children,n=Object(a.useState)(!1),c=Object(s.a)(n,2),r=c[0],i=c[1],l=function(){return i(!r)},u=Object(a.useState)(0),m=Object(s.a)(u,2),d=m[0],v=m[1],f=[];return Object(a.useMemo)((function(){return o.a.Children.forEach(t,(function(e,t){o.a.isValidElement(e)&&f.push({index:t,Icon:e.props.icon,title:e.props.title,style:e.props.style})}))}),[t,f]),o.a.createElement("div",{className:"sidebar ".concat(r?"":"minimized"),style:f[d].style||{}},o.a.createElement("div",{className:"icons"},f.map((function(e){var t=e.index,n=e.Icon;return o.a.createElement("div",{className:"icon",key:"Sidebar/Icon/".concat(t),onClick:function(){return function(e){e===d?l():(!1===r&&l(),v(e))}(t)}},o.a.createElement(n,null))}))),o.a.createElement("div",{className:"sidebar-inner ".concat(r?"":"fade")},o.a.createElement("div",{className:"section-title"},f[d].title),o.a.createElement((function(){var e=o.a.Children.count(t);return 0===e?null:1===e?t:t[d]}),null)))},re=n(212),ie=n.n(re);function se(e){var t=e.value,n=e.setValue,a=Object(i.a)(e,["value","setValue"]);return o.a.createElement(ie.a,Object.assign({theme:"snow",modules:{toolbar:[["bold","italic","underline","strike"],["link"]]},formats:["bold","italic","underline","strike","link"],value:t||"",onChange:function(e){return n(e)}},a))}n(413);var le=function(e,t){return console.warn("Contributors component was not given an '".concat(e,"' prop")),t?[]:null};function ue(e){var t=k(),n={invited:de,active:me},a=e.sections||[];return o.a.createElement("div",{className:"contributors"},!e.noTitle&&o.a.createElement("div",null,"Contributors"),a.map((function(t,a){var c=n[t];return o.a.createElement(c,Object.assign({key:"Contributors/".concat(t,"/").concat(a)},e))})),o.a.createElement(pe,{onInvite:function(n){e.invited.includes(n)||n.toLowerCase()===t.username.toLowerCase()||""===n.trim()||e.onInvite(n)}||function(){return le("onInvite")}}),e.children)}function me(e){return o.a.createElement(ve,{color:"black",contributors:e.active||le("active")},"Active")}function de(e){return o.a.createElement(ve,{color:"gray",contributors:e.invited||le("invited")},"Invited")}function ve(e){var t=e.color,n=e.contributors,a=e.children;return o.a.createElement("div",{className:"section"},o.a.createElement("div",{className:"title"},a),o.a.createElement("div",{className:"users"},(n||[]).map((function(e){return o.a.createElement(fe,{key:"invite/".concat(e),color:t},e)}))))}function fe(e){var t=e.color,n=void 0===t?void 0:t;return o.a.createElement("div",{className:"user"},o.a.createElement(F.a,{name:e.children,src:e.image||null,color:U(e.children),round:!0,size:25}),o.a.createElement("span",{className:"name",style:{color:n}},e.children))}function pe(e){var t,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1],l=function(){e.onInvite(r),i(""),t.focus()};return o.a.createElement("div",{className:"invite"},o.a.createElement("div",{className:"title"},"Invite Someone"),o.a.createElement("div",{className:"field"},o.a.createElement("input",{className:"clear-input",placeholder:"username",autoComplete:"off",value:r,onChange:function(e){return i(e.currentTarget.value)},onKeyDown:function(e){return"Enter"===e.key?l():null},ref:function(e){return t=e}}),o.a.createElement(oe.a,{className:"submit",onClick:l})))}function Ee(e,t){var n=t.reload,o=t.token,c=Object(a.useState)({}),r=Object(s.a)(c,2),i=r[0],l=r[1],u=N().didPersistLoad;return Object(a.useEffect)((function(){u&&function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).token;return y("/convo/".concat(e),{method:"GET",headers:t?{Authorization:t}:void 0})}(e,{token:o}).then((function(e){return l(e)})).catch((function(e){}))}),[e,n,o,u]),i}function be(e,t){var n=t.reload,o=t.token,c=Object(a.useState)([]),r=Object(s.a)(c,2),i=r[0],l=r[1],u=N().didPersistLoad;return Object(a.useEffect)((function(){var t;u&&(t=e,y("/comment/".concat(t),{method:"GET"})).then((function(e){return l(e)})).catch((function(e){}))}),[e,n,o,u]),i}function he(){var e=Object(a.useState)(-1),t=Object(s.a)(e,2),n=t[0],o=t[1];return[n,function(){return o(-n)}]}n(414);function ge(e){var t=e.title,n=e.views,a=e.votes,c=e.userVote,r=e.updateVote,i=e.isLoggedIn,s=e.isContributor,l=e.navigate,u=e.id;return o.a.createElement("div",{className:"d-title"},o.a.createElement(Oe,{votes:a,userVote:c,setVote:function(e){r(e===c?0:e)}}),o.a.createElement("div",null,o.a.createElement("div",{className:"text"},t),(!i||!s)&&o.a.createElement("div",{className:"join",onClick:function(){return!s&&l({pathname:"/login",state:{from:{pathname:"/conversation/".concat(u)}}})}},"Join Conversation")),o.a.createElement("div",{className:"views"},n," views"))}function Oe(e){var t=e.votes,n=void 0===t?"0":t,a=e.userVote,c=e.setVote;return o.a.createElement("div",{className:"vote"},o.a.createElement(oe.c,{className:"thumb ".concat(1===a?"upvoted":""),onClick:function(){return c(1)}}),o.a.createElement("span",{className:"amount"},n),o.a.createElement(oe.b,{className:"thumb ".concat(-1===a?"upvoted":""),onClick:function(){return c(-1)}}))}function je(e){var t=e.posts,n=e.body,a=e.setBody,c=e.submit,r=e.isLoggedIn,i=e.isContributor;return o.a.createElement("div",{className:"discussion"},o.a.createElement("div",{className:"inner"},t&&t.map((function(e,t){return o.a.createElement(ye,Object.assign({},e,{key:"".concat(e.contributor,"/").concat(e.time_of_post,"/").concat(t)}))}))),r&&i&&o.a.createElement("div",{className:"editor-wrapper"},o.a.createElement(se,{value:n,setValue:a}),o.a.createElement("div",{className:"post-button",onClick:c},"Submit")))}function ye(e){var t=e.contributor,n=e.post;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"item"},o.a.createElement("span",{style:{color:U(t)}},t,": "),o.a.createElement(G,{content:n})),o.a.createElement("div",{className:"break"}))}function Ne(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(!1),l=Object(s.a)(i,2),u=l[0],m=l[1];return o.a.createElement(o.a.Fragment,null,e.comments.map((function(e,t){return o.a.createElement(ke,Object.assign({key:"".concat(e.contributor,"/").concat(e.time_of_comment,"/").concat(t)},e))})),o.a.createElement("div",{className:"add"},o.a.createElement("textarea",{value:c,onChange:function(e){return r(e.currentTarget.value)}}),o.a.createElement("button",{type:"submit",onClick:function(){u||(m(!0),e.postComment(c).then((function(e){m(!1),r("")})))}},u?"Posting":"Submit")))}function ke(e){var t=e.time_of_comment,n=e.contributor,c=e.body,r=e.likes,i=Object(a.useState)(!1),l=Object(s.a)(i,2),u=l[0],m=l[1];return o.a.createElement("div",{className:"comment"},o.a.createElement("div",{className:"meta"},o.a.createElement("div",{className:"contributor",style:{color:U(n)}},n),o.a.createElement("div",{className:"likes ".concat(u?"upvoted":""),onClick:function(){return m(!u)}},u?r+1:r," ",o.a.createElement(oe.c,{style:{fontSize:"12px"}})),o.a.createElement("div",{className:"time"},t)),o.a.createElement("div",{className:"body"},c))}var we=function(e){var t=e.match.params.id,n=N(),c=n.token,r=n.isLoggedIn,i=he(),l=Object(s.a)(i,2),u=l[0],d=l[1],v=he(),f=Object(s.a)(v,2),p=f[0],E=f[1],b=Ee(t,{reload:u,token:c}),h=be(t,{reload:p,token:c}),g=Object(a.useState)(""),O=Object(s.a)(g,2),j=O[0],k=O[1],w=Object(a.useState)(b.contributors||[]),S=Object(s.a)(w,2),C=S[0],I=S[1];return o.a.createElement("div",{className:"conversation"},o.a.createElement(je,{posts:b.posts,submit:function(){(function(e,t){return y("/post",{method:"POST",headers:{Authorization:e},body:{convo_id:t.convo_id,post:t.post}})})(c,{convo_id:t,post:j}).then((function(){d(),k("")})).catch((function(e){}))},body:j,setBody:k,isLoggedIn:r,isContributor:b.isContributor}),o.a.createElement(ge,{title:b.title,views:b.views,votes:b.votes,userVote:b.vote,updateVote:function(e){(function(e,t){var n=t.token,a=t.vote;return y("/convo/".concat(e,"/vote/").concat(a),{method:"PUT",headers:n?{Authorization:n}:void 0})})(t,{token:c,vote:e}).then((function(){return d()})).catch((function(e){}))},isLoggedIn:r,isContributor:b.isContributor,navigate:e.history.push,id:t}),o.a.createElement(ce,null,o.a.createElement(Ne,{icon:m.a,title:"Comments",comments:h||[],postComment:function(e){return function(e,t){return y("/comment",{method:"POST",headers:{Authorization:e},body:{convo_id:t.convo_id,post:t.comment}})}(c,{convo_id:t,comment:e}).then((function(){return E()})).catch((function(e){}))}}),o.a.createElement(ue,{icon:m.b,title:"Contributors",style:{width:"100px",transition:"all 0.5s ease-in"},sections:["active","invited"],invited:C,active:b.contributors,onInvite:function(e){I([].concat(Object(ae.a)(C),[e])),function(e,t){var n=t.convo_id;return y("/contributor",{method:"POST",headers:{Authorization:t.token},body:{convo_id:n,invite:e}})}(e,{token:c,convo_id:t}).then((function(e){return d()})).catch((function(e){}))},noTitle:!0})))},Se=n(422);n(415),n(416);function Ce(e){var t=N().token,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1],l=Object(a.useState)(""),u=Object(s.a)(l,2),m=u[0],d=u[1],v=Object(a.useState)([]),f=Object(s.a)(v,2),p=f[0],E=f[1],b=Object(a.useState)(!1),h=Object(s.a)(b,2),g=h[0],O=h[1];return o.a.createElement("div",{className:"post"},o.a.createElement(Ie,{title:r,setTitle:i,body:m,setBody:d}),o.a.createElement("div",{className:""},o.a.createElement(ue,{sections:["invited"],onInvite:function(e){return E([].concat(Object(ae.a)(p),[e]))},invited:p},o.a.createElement("div",{className:"post-button",onClick:function(){O(!0),function(e,t){return y("/convo",{method:"POST",headers:{Authorization:e},body:{title:t.title,post:t.body}})}(t,{title:r,body:m}).then((function(t){O(!1),e.history.push("/conversation/".concat(t.convo_id))})).catch((function(e){O(!1)}))}},g?o.a.createElement(Se.a,{css:"\n                  width: 50px;\n                  height: 50px;\n                  flex: 1;\n                "}):o.a.createElement("div",{className:"text"},"Post")))))}function Ie(e){var t=e.title,n=e.setTitle,a=e.body,c=e.setBody;return o.a.createElement("div",{className:"editor"},o.a.createElement("input",{className:"post-title",placeholder:"Title",value:t,onChange:function(e){return n(e.currentTarget.value)}}),o.a.createElement(se,{value:a,onChange:function(e){return c(e)}}))}n(417);var _e=o.a.createContext();function Le(e){var t=e.component,n=e.authenticated,a=Object(i.a)(e,["component","authenticated"]);return o.a.createElement(u.b,Object.assign({},a,{render:function(e){return!0===n?o.a.createElement(t,Object.assign({},e,a)):o.a.createElement(u.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}var Pe=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),i=Object(s.a)(r,2),m=i[0],d=i[1],v=Object(a.useState)(null),f=Object(s.a)(v,2),p=f[0],E=f[1];return o.a.createElement(_e.Provider,{value:{isLoggedIn:m,setIsLoggedIn:d,token:p,setToken:E,didPersistLoad:n}},o.a.createElement(B,{data:{token:p,isLoggedIn:m},debounce:500,onMount:function(e){d(e.isLoggedIn),E(e.token)},onComplete:function(){return c(!0)}}),o.a.createElement(l.a,null,o.a.createElement("div",null,o.a.createElement(C,null),o.a.createElement(_,null),o.a.createElement("div",{className:"content"},o.a.createElement(u.d,null,o.a.createElement(u.a,{exact:!0,from:"/",to:"/home"}),o.a.createElement(u.b,{exact:!0,path:"/home",component:X}),o.a.createElement(u.b,{exact:!0,path:"/login",component:ee}),o.a.createElement(u.b,{exact:!0,path:"/register",component:ne}),o.a.createElement(u.b,{exact:!0,path:"/conversation/:id",component:we}),o.a.createElement(Le,{exact:!0,path:"/post",component:Ce,authenticated:m}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(Pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[216,1,2]]]);
//# sourceMappingURL=main.4bab287b.chunk.js.map