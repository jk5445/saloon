(this["webpackJsonpsaloon-client"]=this["webpackJsonpsaloon-client"]||[]).push([[0],{264:function(e,t,n){e.exports=n(433)},268:function(e,t,n){},287:function(e,t,n){},288:function(e,t,n){},322:function(e,t,n){},323:function(e,t,n){},324:function(e,t,n){},428:function(e,t,n){},429:function(e,t,n){},430:function(e,t,n){},432:function(e,t,n){},433:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(169),c=n.n(r),i=n(48),s=n(5),l=n(18),u=n(56),m=n(90),d=n(435),v=n(436),E=n(439),f=n(440),b=n(173),p=n(243),h=n.n(p);function g(e,t){var n=t.headers,a=t.body,o=Object(i.a)(t,["headers","body"]),r=h.a.join("/api/v1",e);return fetch(r,Object(b.a)({headers:Object(b.a)({"Content-Type":"application/json"},n)},o,{body:JSON.stringify(a)})).then((function(e){if(e.ok)return e.json();throw e}))}function N(){return Object(a.useContext)(Le)}function O(){var e=N(),t=e.token,n=e.setToken,o=e.isLoggedIn,r=e.setIsLoggedIn,c=Object(a.useState)(null),i=Object(s.a)(c,2),l=i[0],u=i[1];return Object(a.useEffect)((function(){if(t&&o){(function(e){return g("/user",{headers:{Authorization:e}})})(t).then((function(e){return u(e)})).catch((function(e){}))}}),[t,n,o,r]),l}n(268);function y(e){return o.a.createElement("div",{className:"search-wrapper"},o.a.createElement("input",{placeholder:"Search..."}),o.a.createElement("div",{className:"i-wrapper"},o.a.createElement("div",{className:"body"},o.a.createElement(m.c,{size:20,className:"icon",color:"white"}))))}function j(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),r=n[0],c=n[1],l=N(),u=l.setIsLoggedIn,m=l.setToken,b=function(t){var n=t.to,a=Object(i.a)(t,["to"]);return o.a.createElement(d.a,Object.assign({onClick:function(){return e.redirect(n)}},a))};return o.a.createElement(v.a,{isOpen:r,toggle:function(){return c(!r)},nav:!0},o.a.createElement(E.a,{caret:!0,className:"login-account"},"Hey, ",e.name),o.a.createElement(f.a,{right:!0},o.a.createElement(b,{to:"/user"},"Profile"),o.a.createElement(b,{to:"/saved-conversations"},"Saved Conversations"),o.a.createElement(b,{to:"/history"},"History"),o.a.createElement(d.a,{divider:!0}),o.a.createElement(b,{to:"/settings"},"Settings"),o.a.createElement(d.a,{divider:!0}),o.a.createElement(d.a,{onClick:function(){m(null),u(!1),e.redirect("/")}},"Log Out")))}var k=Object(u.h)((function(e){var t=N().isLoggedIn,n=O();return o.a.createElement("div",{className:"header"},o.a.createElement("span",{id:"logo"},o.a.createElement(l.b,{to:"/",className:"saloon"},"Saloon"),o.a.createElement("span",{id:"slogan"},"Conversation Reimagined")),o.a.createElement(y,null),t&&o.a.createElement(l.b,{to:"/post",className:"login-account"},"Post"),t?o.a.createElement(j,{name:n?n.first_name:void 0,redirect:e.history.push}):o.a.createElement("div",{className:"login-account"},o.a.createElement(l.b,{to:"/login"},"Login"),o.a.createElement(l.b,{to:"/register"},"Sign Up")))}));n(287);var w=Object(u.h)((function(e){return o.a.createElement(l.b,{to:e.to,className:[e.location.pathname.includes(e.to)?"selected":"","nav-item"].join(" ")},e.children)})),S=function(){return o.a.createElement("div",{className:"navigation"},o.a.createElement("div",{className:"links"},o.a.createElement(w,{to:"/home"},"Home"),o.a.createElement(w,{to:"/about"},"About")))},C=n(246),I=n(247),L=n(261),_=n(248),T=n(262),x=n(249),A=n.n(x),P=n(250),V=n.n(P),z=function(e){function t(){var e,n;Object(C.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(L.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(o)))).persist=A()((function(e){window.localStorage.setItem(n.props.name,JSON.stringify(e))}),n.props.debounce),n}return Object(T.a)(t,e),Object(I.a)(t,[{key:"componentDidUpdate",value:function(e){var t=e.data;V()(t,this.props.data)||this.persist(this.props.data)}},{key:"componentDidMount",value:function(){var e=window.localStorage.getItem(this.props.name);e&&null!==e&&this.props.onMount(JSON.parse(e)),this.props.onComplete&&this.props.onComplete()}},{key:"render",value:function(){return null}}]),t}(o.a.Component);z.defaultProps={debounce:300};var B=n(93);function q(){var e=N(),t=e.token,n=e.setToken,o=e.isLoggedIn,r=e.setIsLoggedIn,c=e.didPersistLoad,i=Object(a.useState)(null),l=Object(s.a)(i,2),u=l[0],m=l[1];return Object(a.useEffect)((function(){if(!u&&c){(function(e){return g("/feed",{method:"GET",headers:e?{Authorization:e}:void 0})})(t).then((function(e){return m(e.convos)})).catch((function(e){return n(null),r(!1),void m(null)}))}}),[t,u,n,o,r,c]),u}var H=n(251),D=n.n(H),J=n(260);n(288);function R(e){var t,n;return o.a.createElement("div",{className:"card-row"},(null===(t=e.cards)||void 0===t?void 0:t.length)>1?o.a.createElement("div",{className:"connector"}):null,null===(n=e.cards)||void 0===n?void 0:n.map((function(e){return o.a.createElement(F,Object.assign({},e,{key:"CardRow/".concat(e.convo_id)}))})))}function F(e){var t,n=Object(u.g)().push;return o.a.createElement("div",{className:"home-card",onClick:function(){return n("/conversation/".concat(e.convo_id))}},o.a.createElement("div",{className:"title"},e.title),o.a.createElement(B.a,{name:null===(t=e.contributors)||void 0===t?void 0:t[0],round:!0,size:45}),e.contributors.length>1&&o.a.createElement(B.a,{name:e.contributors[1],round:!0,size:45}),o.a.createElement(M,{contributors:e.contributors||[]}),o.a.createElement("div",{className:"age"},e.age),o.a.createElement("div",{className:"views"},e.views," Views"))}function M(e){var t,n=e.contributors;return o.a.createElement("div",{className:"discussed-by"},"Discussion by ",1===(t=n).length?t[0]:2===t.length?"".concat(t[0]," and ").concat(t[1]):3===t.length?"".concat(t[0],", ").concat(t[1]," and ").concat(t[2]):4===t.length?"".concat(t[0],", ").concat(t[1],", ").concat(t[2]," and ").concat(t[3]):void 0)}var U=function(){var e=q(),t=Object(J.a)(),n=[],a=!0,r=!1,c=void 0;try{for(var i,s=function(){var e=i.value;if(n.filter((function(t){return t.convo_id===e.convo_id})).length>0)return"break";n.push(e)},l=(null!==e&&void 0!==e?e:[])[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){if("break"===s())break}}catch(m){r=!0,c=m}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}var u=D()(n,t<925?1:t<1260?2:3);return o.a.createElement("div",{className:"home"},u.map((function(e,t){return o.a.createElement(R,{cards:e,key:"CardRow/".concat(t)})})))};n(322);var W=function(){return o.a.createElement("div",{className:"about"},o.a.createElement("div",{id:"title"},"About Saloon"),o.a.createElement("div",{className:"editor"},o.a.createElement("div",{className:"quill"},o.a.createElement("div",{className:"ql-toolbar ql-snow"}),o.a.createElement("div",{className:"ql-container ql-snow"},o.a.createElement("div",null,"Saloon provides a space for HEALTHY and NUANCED conversations by making sure your conversations go uninterrupted AND by making sure your voices are heard."),o.a.createElement("div",{className:"bold-y-margin"},"How we do it"),o.a.createElement("div",null,"We keep conversations CLEAR:"),o.a.createElement("div",null,"When you start a conversation on Saloon, only you can decide who joins."),o.a.createElement("div",{className:"pad-top"},"Our conversations are always LIVE:"),o.a.createElement("div",null,"Saloon conversations never end, so they can be added to whenever inspiration strikes!"),o.a.createElement("div",{className:"pad-top"},"Comments mean MORE on Saloon:"),o.a.createElement("div",null,"Since all of our conversations are live, so are comments!"),o.a.createElement("div",null,"That means posters on Saloon can engage with reader feedback during conversations!"),o.a.createElement("div",{className:"bold-y-margin"},"Here are some tips to get the most out of your Saloon Conversations"),o.a.createElement("div",{className:"tip"},"Be Respectful"),o.a.createElement("div",{className:"tip"},"Be Disagreeable"),o.a.createElement("div",{className:"tip"},"Be Honest"),o.a.createElement("div",{className:"tip"},"Be Clear and Consice"),o.a.createElement("div",{className:"last"},"and last but not least..."),o.a.createElement("div",{className:"bold-y-margin fun"},"Have Fun!!")))))},G=n(88);n(323);function K(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"field-title"},e.placeholder),o.a.createElement(G.b,e),o.a.createElement(G.a,{name:e.name,render:function(e){return o.a.createElement("div",{className:"error"},e.replace("_"," "))}}))}var Y=function(e){var t=N(),n=t.isLoggedIn,a=t.setIsLoggedIn,r=t.setToken;return n?o.a.createElement(u.a,{to:e.location.state?e.location.state.from.pathname:"/"}):o.a.createElement("div",{className:"form"},o.a.createElement("h1",null,"Login"),o.a.createElement(G.d,{initialValues:{email:"",password:""},onSubmit:function(e,t){(function(e,t){return g("/user/login",{method:"POST",body:{email:e,password:t}})})(e.email,e.password).then((function(e){r(e.token),a(!0)})).catch((function(e){t.setErrors({password:"incorrect password"}),t.setSubmitting(!1)}))}},(function(e){var t=e.isSubmitting;return o.a.createElement(G.c,null,o.a.createElement(K,{type:"text",name:"email",placeholder:"email"}),o.a.createElement(K,{type:"password",name:"password",placeholder:"password"}),o.a.createElement("button",{type:"submit",disabled:t},"Submit"),o.a.createElement("div",{className:"switch-here"},"Don't have an account? Join ",o.a.createElement(l.b,{to:"/register"},"here")))})))},$=n(77);var Q=function(){var e=N(),t=e.setToken,n=e.setIsLoggedIn;return e.isLoggedIn?o.a.createElement(u.a,{to:"/home"}):o.a.createElement("div",{className:"form"},o.a.createElement("h1",null,"Register"),o.a.createElement(G.d,{initialValues:{username:"",password:"",first_name:"",last_name:"",email:""},onSubmit:function(e,a){(function(e){var t=e.username,n=e.password;return g("/user/signup",{method:"POST",body:{username:t,first_name:e.first_name,last_name:e.last_name,password:n,email:e.email}})})(e).then((function(e){t(e.token),n(!0)})).catch((function(e){return a.setFieldError("email","something went wrong")}))},validationSchema:$.a().shape({first_name:$.b().required(),last_name:$.b().required(),username:$.b().required(),password:$.b().required()})},(function(e){var t=e.isSubmitting;return o.a.createElement(G.c,null,o.a.createElement(K,{type:"email",name:"email",placeholder:"email"}),o.a.createElement(K,{type:"text",name:"first_name",placeholder:"first name"}),o.a.createElement(K,{type:"text",name:"last_name",placeholder:"last name"}),o.a.createElement(K,{type:"text",name:"username",placeholder:"username"}),o.a.createElement(K,{type:"password",name:"password",placeholder:"password"}),o.a.createElement("button",{type:"submit",disabled:t},"Submit"),o.a.createElement("div",{className:"switch-here"},"Already have an account? Login ",o.a.createElement(l.b,{to:"/login"},"here")))})))},X=n(130),Z=n(76);n(324);var ee=function(e){var t=e.children,n=Object(a.useState)(!1),r=Object(s.a)(n,2),c=r[0],i=r[1],l=function(){return i(!c)},u=Object(a.useState)(0),m=Object(s.a)(u,2),d=m[0],v=m[1],E=[];return Object(a.useMemo)((function(){return o.a.Children.forEach(t,(function(e,t){o.a.isValidElement(e)&&E.push({index:t,Icon:e.props.icon,title:e.props.title,style:e.props.style})}))}),[t,E]),o.a.createElement("div",{className:"sidebar ".concat(c?"":"minimized"),style:E[d].style||{}},o.a.createElement("div",{className:"icons"},E.map((function(e){var t=e.index,n=e.Icon;return o.a.createElement("div",{className:"icon",key:"Sidebar/Icon/".concat(t),onClick:function(){return function(e){e===d?l():(!1===c&&l(),v(e))}(t)}},o.a.createElement(n,null))}))),o.a.createElement("div",{className:"sidebar-inner ".concat(c?"":"fade")},o.a.createElement("div",{className:"section-title"},E[d].title),o.a.createElement((function(){var e=o.a.Children.count(t);return 0===e?null:1===e?t:t[d]}),null)))},te=n(257),ne=n.n(te);function ae(e){var t=e.value,n=e.setValue,a=Object(i.a)(e,["value","setValue"]);return o.a.createElement(ne.a,Object.assign({theme:"snow",modules:{toolbar:[["bold","italic","underline","strike"],["link"]]},formats:["bold","italic","underline","strike","link"],value:t||"",onChange:function(e){return n(e)}},a))}var oe=n(172),re=n(438);function ce(e){return o.a.createElement(oe.a,Object.assign({matchers:[new re.a("url")]},e))}var ie=n(259);function se(e){return ie({seed:e})}n(428);var le=function(e,t){return console.warn("Contributors component was not given an '".concat(e,"' prop")),t?[]:null};function ue(e){var t=O(),n={invited:de,active:me},a=e.sections||[];return o.a.createElement("div",{className:"contributors"},!e.noTitle&&o.a.createElement("div",null,"Contributors"),a.map((function(t,a){var r=n[t];return o.a.createElement(r,Object.assign({key:"Contributors/".concat(t,"/").concat(a)},e))})),o.a.createElement(fe,{onInvite:function(n){e.invited.includes(n)||n.toLowerCase()===(t?t.username.toLowerCase():null)||""===n.trim()||e.onInvite(n)}||function(){return le("onInvite")}}),e.children)}function me(e){return o.a.createElement(ve,{color:"black",contributors:e.active||le("active")},"Active")}function de(e){return o.a.createElement(ve,{color:"gray",contributors:e.invited||le("invited")},"Invited")}function ve(e){var t=e.color,n=e.contributors,a=e.children;return o.a.createElement("div",{className:"section"},o.a.createElement("div",{className:"title"},a),o.a.createElement("div",{className:"users"},(n||[]).map((function(e){return o.a.createElement(Ee,{key:"invite/".concat(e),color:t},e)}))))}function Ee(e){var t=e.color,n=void 0===t?void 0:t;return o.a.createElement("div",{className:"user"},o.a.createElement(B.a,{name:e.children,src:e.image||null,color:se(e.children),round:!0,size:25}),o.a.createElement("span",{className:"name",style:{color:n}},e.children))}function fe(e){var t,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],l=function(){e.onInvite(c),i(""),t.focus()};return o.a.createElement("div",{className:"invite"},o.a.createElement("div",{className:"title"},"Invite Someone"),o.a.createElement("div",{className:"field"},o.a.createElement("input",{className:"clear-input",placeholder:"username",autoComplete:"off",value:c,onChange:function(e){return i(e.currentTarget.value)},onKeyDown:function(e){return"Enter"===e.key?l():null},ref:function(e){return t=e}}),o.a.createElement(Z.a,{className:"submit",onClick:l})))}function be(e,t){var n=t.reload,o=t.token,r=Object(a.useState)({}),c=Object(s.a)(r,2),i=c[0],l=c[1],u=N().didPersistLoad;return Object(a.useEffect)((function(){u&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.token;return g("/convo/".concat(e),{method:"GET",headers:n?{Authorization:n}:void 0})}(e,{token:o}).then((function(e){return l(e)})).catch((function(e){}))}),[e,n,o,u]),i}function pe(e,t){var n=t.reload,o=t.token,r=Object(a.useState)([]),c=Object(s.a)(r,2),i=c[0],l=c[1],u=N().didPersistLoad;return Object(a.useEffect)((function(){var t;u&&(t=e,g("/comment/".concat(t),{method:"GET"})).then((function(e){return l(e.comments)})).catch((function(e){}))}),[e,n,o,u]),i}function he(){var e=Object(a.useState)(-1),t=Object(s.a)(e,2),n=t[0],o=t[1];return[n,function(){return o(-n)}]}n(429);function ge(e){var t=e.title,n=e.views,a=e.votes,r=e.userVote,c=e.updateVote,i=e.isLoggedIn,s=e.isContributor,l=e.navigate,u=e.id;return o.a.createElement("div",{className:"d-title"},o.a.createElement(Ne,{votes:a,userVote:r,setVote:function(e){c(e===r?0:e)}}),o.a.createElement("div",null,o.a.createElement("div",{className:"text"},t),(!i||!s)&&o.a.createElement("div",{className:"join",onClick:function(){return!s&&l({pathname:"/login",state:{from:{pathname:"/conversation/".concat(u)}}})}},"Join Conversation")),o.a.createElement("div",{className:"views"},n," views"))}function Ne(e){var t=e.votes,n=void 0===t?"0":t,a=e.userVote,r=e.setVote;return o.a.createElement("div",{className:"vote"},o.a.createElement(Z.c,{className:"thumb ".concat(1===a?"upvoted":""),onClick:function(){return r(1)}}),o.a.createElement("span",{className:"amount"},n),o.a.createElement(Z.b,{className:"thumb ".concat(-1===a?"upvoted":""),onClick:function(){return r(-1)}}))}function Oe(e){var t=e.posts,n=e.body,a=e.setBody,r=e.submit,c=e.isLoggedIn,i=e.isContributor;return o.a.createElement("div",{className:"discussion"},o.a.createElement("div",{className:"inner"},t&&t.map((function(e,t){return o.a.createElement(ye,Object.assign({},e,{key:"".concat(e.contributor,"/").concat(e.time_of_post,"/").concat(t)}))}))),c&&i&&o.a.createElement("div",{className:"editor-wrapper"},o.a.createElement(ae,{value:n,setValue:a}),o.a.createElement("div",{className:"post-button",onClick:r},"Submit")))}function ye(e){var t=e.contributor,n=e.post;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"item"},o.a.createElement("span",{style:{color:se(t)}},t,": "),o.a.createElement(ce,{content:n})),o.a.createElement("div",{className:"break"}))}function je(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),l=Object(s.a)(i,2),u=l[0],m=l[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"comment-section"},e.comments.map((function(e,t){return o.a.createElement(ke,Object.assign({key:"".concat(e.contributor,"/").concat(e.time_of_comment,"/").concat(t)},e))}))),o.a.createElement("div",{className:"add"},o.a.createElement("textarea",{value:r,onChange:function(e){return c(e.currentTarget.value)}}),o.a.createElement("button",{type:"submit",onClick:function(){u||(m(!0),e.postComment(r).then((function(e){m(!1),c("")})))}},u?"Posting":"Submit")))}function ke(e){var t=e.age,n=e.username,r=e.comment,c=e.votes,i=Object(a.useState)(!1),l=Object(s.a)(i,2),u=l[0],m=l[1];return o.a.createElement("div",{className:"comment"},o.a.createElement("div",{className:"meta"},o.a.createElement("div",{className:"contributor",style:{color:se(n)}},n),o.a.createElement("div",{className:"likes ".concat(u?"upvoted":""),onClick:function(){return m(!u)}},u?c+1:c," ",o.a.createElement(Z.c,{style:{fontSize:"12px"}})),o.a.createElement("div",{className:"time"},t)," "),o.a.createElement("div",{className:"body"},r))}var we=function(e){var t=e.match.params.id,n=N(),r=n.token,c=n.isLoggedIn,i=he(),l=Object(s.a)(i,2),u=l[0],d=l[1],v=he(),E=Object(s.a)(v,2),f=E[0],b=E[1],p=be(t,{reload:u,token:r}),h=pe(t,{reload:f,token:r}),O=Object(a.useState)(""),y=Object(s.a)(O,2),j=y[0],k=y[1],w=Object(a.useState)(p.contributors||[]),S=Object(s.a)(w,2),C=S[0],I=S[1];return o.a.createElement("div",{className:"conversation"},o.a.createElement(Oe,{posts:p.posts,submit:function(){(function(e,t){return g("/post",{method:"POST",headers:{Authorization:e},body:{convo_id:t.convo_id,post:t.post}})})(r,{convo_id:t,post:j}).then((function(){d(),k("")})).catch((function(e){}))},body:j,setBody:k,isLoggedIn:c,isContributor:p.isContributor}),o.a.createElement(ge,{title:p.title,views:p.views,votes:p.votes,userVote:p.vote,updateVote:function(e){(function(e,t){var n=t.token,a=t.vote;return g("/convo/".concat(e,"/vote/").concat(a),{method:"PUT",headers:n?{Authorization:n}:void 0})})(t,{token:r,vote:e}).then((function(){return d()})).catch((function(e){}))},isLoggedIn:c,isContributor:p.isContributor,navigate:e.history.push,id:t}),o.a.createElement(ee,null,o.a.createElement(je,{icon:m.a,title:"Comments",comments:h||[],postComment:function(e){return function(e,t){var n=t.convo_id,a=t.comment;return g("/comment/".concat(n),{method:"POST",headers:{Authorization:e},body:{comment:a}})}(r,{convo_id:t,comment:e}).then((function(){return b()})).catch((function(e){}))}}),o.a.createElement(ue,{icon:m.b,title:"Contributors",style:{width:"100px",transition:"all 0.5s ease-in"},sections:["active","invited"],invited:C,active:p.contributors,onInvite:function(e){I([].concat(Object(X.a)(C),[e])),function(e,t){var n=t.convo_id;return g("/contributor",{method:"POST",headers:{Authorization:t.token},body:{convo_id:n,invite:e}})}(e,{token:r,convo_id:t}).then((function(e){return d()})).catch((function(e){}))},noTitle:!0})))},Se=n(437);n(430),n(431);function Ce(e){var t=N().token,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],l=Object(a.useState)(""),u=Object(s.a)(l,2),m=u[0],d=u[1],v=Object(a.useState)([]),E=Object(s.a)(v,2),f=E[0],b=E[1],p=Object(a.useState)(!1),h=Object(s.a)(p,2),O=h[0],y=h[1];return o.a.createElement("div",{className:"post"},o.a.createElement(Ie,{title:c,setTitle:i,body:m,setBody:d}),o.a.createElement("div",{className:""},o.a.createElement(ue,{sections:["invited"],onInvite:function(e){return b([].concat(Object(X.a)(f),[e]))},invited:f},o.a.createElement("div",{className:"post-button",onClick:function(){y(!0),function(e,t){return g("/convo",{method:"POST",headers:{Authorization:e},body:{title:t.title,post:t.body}})}(t,{title:c,body:m}).then((function(t){y(!1),e.history.push("/conversation/".concat(t.convo_id))})).catch((function(e){y(!1)}))}},O?o.a.createElement(Se.a,{css:"\n                  width: 50px;\n                  height: 50px;\n                  flex: 1;\n                "}):o.a.createElement("div",{className:"text"},"Post")))))}function Ie(e){var t=e.title,n=e.setTitle,a=e.body,r=e.setBody;return o.a.createElement("div",{className:"editor"},o.a.createElement("input",{className:"post-title",placeholder:"Title",value:t,onChange:function(e){return n(e.currentTarget.value)}}),o.a.createElement(ae,{value:a,onChange:function(e){return r(e)}}))}n(432);var Le=o.a.createContext();function _e(e){var t=e.component,n=e.authenticated,a=Object(i.a)(e,["component","authenticated"]);return o.a.createElement(u.b,Object.assign({},a,{render:function(e){return!0===n?o.a.createElement(t,Object.assign({},e,a)):o.a.createElement(u.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}var Te=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(s.a)(c,2),m=i[0],d=i[1],v=Object(a.useState)(null),E=Object(s.a)(v,2),f=E[0],b=E[1];return o.a.createElement(Le.Provider,{value:{isLoggedIn:m,setIsLoggedIn:d,token:f,setToken:b,didPersistLoad:n}},o.a.createElement(z,{data:{token:f,isLoggedIn:m},debounce:500,onMount:function(e){d(e.isLoggedIn),b(e.token)},onComplete:function(){return r(!0)}}),o.a.createElement(l.a,null,o.a.createElement("div",null,o.a.createElement(k,null),o.a.createElement(S,null),o.a.createElement("div",{className:"content"},o.a.createElement(u.d,null,o.a.createElement(u.a,{exact:!0,from:"/",to:"/home"}),o.a.createElement(u.b,{exact:!0,path:"/home",component:U}),o.a.createElement(u.b,{exact:!0,path:"/about",component:W}),o.a.createElement(u.b,{exact:!0,path:"/login",component:Y}),o.a.createElement(u.b,{exact:!0,path:"/register",component:Q}),o.a.createElement(u.b,{exact:!0,path:"/conversation/:id",component:we}),o.a.createElement(_e,{exact:!0,path:"/post",component:Ce,authenticated:m}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(Te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[264,1,2]]]);
//# sourceMappingURL=main.0162c01c.chunk.js.map