(this["webpackJsonpsaloon-client"]=this["webpackJsonpsaloon-client"]||[]).push([[0],{262:function(e,t,n){e.exports=n(436)},271:function(e,t,n){},290:function(e,t,n){},291:function(e,t,n){},323:function(e,t,n){},325:function(e,t,n){},326:function(e,t,n){},327:function(e,t,n){},431:function(e,t,n){},432:function(e,t,n){},433:function(e,t,n){},435:function(e,t,n){},436:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(166),r=n.n(c),i=n(52),l=n(5),s=n(18),u=n(56),m=n(60),d=n(438),v=n(439),f=n(444),E=n(442),b=n(242),h=n(440);var p=function(e){var t=e.children,n=e.nClassName;return o.a.Children.map(t,(function(e){if(o.a.isValidElement(e))return o.a.cloneElement(e,{className:n})}))},g=n(170),N=n.n(g),O=n(239),j=n(175),y=n(240),k=n.n(y),w=n(241);function S(e,t){var n=t.method,a=void 0===n?"GET":n,o=t.headers,c=t.body,r=Object(i.a)(t,["method","headers","body"]),l=k.a.join("/api/v1",e)+("GET"===a&&c?"?".concat(Object(w.encode)(c)):"");return fetch(l,Object(j.a)({headers:Object(j.a)({"Content-Type":"application/json"},o)},r,{method:a,body:"GET"!==a?JSON.stringify(c):void 0})).then(function(){var e=Object(O.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return n=e.sent,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Promise.resolve());case 11:throw t;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}function C(e){return S("/user",{headers:{Authorization:e}})}function I(e){return S("/user/liked",{headers:{Authorization:e}})}function x(){return Object(a.useContext)(De)}function L(){var e=Object(a.useState)(-1),t=Object(l.a)(e,2),n=t[0],o=t[1];return[n,function(){return o(-n)}]}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.reload,n=x(),o=n.token,c=n.setToken,r=n.isLoggedIn,i=n.setIsLoggedIn,s=Object(a.useState)(null),u=Object(l.a)(s,2),m=u[0],d=u[1];return Object(a.useEffect)((function(){if(o&&r){C(o).then((function(e){return d(e)})).catch((function(e){return c(null),i(!1),void d(null)}))}}),[o,c,r,i,t]),m}n(271);function T(e){return o.a.createElement("div",{className:"search-wrapper"},o.a.createElement("input",{placeholder:"Out for lunch, come back later  \u2013Searchbar",disabled:!0}),o.a.createElement("div",{className:"i-wrapper"},o.a.createElement("div",{className:"body"},o.a.createElement(m.d,{size:20,className:"icon",color:"white"}))))}function P(e){var t=e.name,n=e.invites,c=e.redirect,r=e.reload,s=Object(a.useState)(!1),u=Object(l.a)(s,2),m=u[0],b=u[1],h=x(),p=h.setIsLoggedIn,g=h.setToken,N=function(){return b(!m)},O=function(e){var t=e.to,n=Object(i.a)(e,["to"]);return o.a.createElement(d.a,Object.assign({onClick:function(){return c(t)}},n))};return o.a.createElement(v.a,{isOpen:m,toggle:N,nav:!0},o.a.createElement(f.a,{caret:!0,className:"login-account"},t?"Hey, ".concat(t):"Hey!"),o.a.createElement(E.a,{right:!0},o.a.createElement(O,{to:"/account"},"My Account"),o.a.createElement(A,{invites:n,redirect:function(e){N(),c(e)},reload:r}),o.a.createElement(d.a,{divider:!0}),o.a.createElement(O,{to:"/settings"},"Settings"),o.a.createElement(d.a,{divider:!0}),o.a.createElement(d.a,{onClick:function(){g(null),p(!1),c("/")}},"Log Out")))}function A(e){var t,n=e.invites,c=void 0===n?[]:n,r=e.redirect,i=e.reload,s=Object(a.useState)(!1),u=Object(l.a)(s,2),d=u[0],g=u[1],N=x().token,O=function(){(null===c||void 0===c?void 0:c.length)<1?g(!1):g(!d)},j=function(e,t,n){(function(e,t){return S("/contributor",{method:"PUT",headers:{Authorization:e},body:{convo_id:t}})})(t,n).then((function(e){return i()})).catch((function(e){return i()})),e.stopPropagation()};function y(e){var t=e.children,n=e.id;return o.a.createElement("div",{className:"sub-item dropdown-item",onClick:function(){O(),r("/conversation/".concat(n))}},o.a.createElement("div",{className:"title"},t),o.a.createElement("span",{className:"buttons"},o.a.createElement(b.a,{outline:!0,size:"sm",color:"success",style:{marginRight:"5px"},onClick:function(e){return j(e,N,n)}},o.a.createElement(m.a,null)),o.a.createElement(b.a,{outline:!0,size:"sm",color:"danger",onClick:function(e){return function(e,t,n){e.stopPropagation()}(e)}},o.a.createElement(m.e,null))))}return o.a.createElement(v.a,{isOpen:d,toggle:O,direction:"left"},o.a.createElement(p,{nClassName:"dropdown-item"},o.a.createElement(f.a,null,"Invitations",o.a.createElement(h.a,{style:{marginLeft:"20px"}},null!==(t=null===c||void 0===c?void 0:c.length)&&void 0!==t?t:0))),o.a.createElement(E.a,null,c.map((function(e){return o.a.createElement(y,{key:"Notification/".concat(e.convo_id),id:e.convo_id},e.title)}))))}var z=Object(u.h)((function(e){var t=x().isLoggedIn,n=L(),a=Object(l.a)(n,2),c=a[0],r=a[1],i=_({reload:c});return o.a.createElement("div",{className:"header"},o.a.createElement("span",{id:"logo"},o.a.createElement(s.b,{to:"/",className:"saloon"},"Saloon"),o.a.createElement("span",{id:"slogan"},"Conversation Reimagined")),o.a.createElement(T,null),t&&o.a.createElement(s.b,{to:"/post",className:"login-account"},"Post"),t?o.a.createElement(P,{name:null===i||void 0===i?void 0:i.first_name,invites:null===i||void 0===i?void 0:i.invites,redirect:e.history.push,reload:r}):o.a.createElement("div",{className:"login-account"},o.a.createElement(s.b,{to:"/login"},"Login"),o.a.createElement(s.b,{to:"/register"},"Sign Up")))}));n(290);var V=Object(u.h)((function(e){return o.a.createElement(s.b,{to:e.to,className:[e.location.pathname.includes(e.to)?"selected":"","nav-item"].join(" ")},e.children)})),B=function(){return o.a.createElement("div",{className:"navigation"},o.a.createElement("div",{className:"links"},o.a.createElement(V,{to:"/home"},"Home"),o.a.createElement(V,{to:"/about"},"About")))},H=n(245),q=n(246),D=n(258),J=n(259),R=n(247),M=n.n(R),G=n(248),F=n.n(G),U=function(e){Object(J.a)(n,e);var t=Object(D.a)(n);function n(){var e;Object(H.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).persist=M()((function(t){window.localStorage.setItem(e.props.name,JSON.stringify(t))}),e.props.debounce),e}return Object(q.a)(n,[{key:"componentDidUpdate",value:function(e){var t=e.data;F()(t,this.props.data)||this.persist(this.props.data)}},{key:"componentDidMount",value:function(){var e=window.localStorage.getItem(this.props.name);e&&null!==e&&this.props.onMount(JSON.parse(e)),this.props.onComplete&&this.props.onComplete()}},{key:"render",value:function(){return null}}]),n}(o.a.Component);U.defaultProps={debounce:300};var W=n(94),K=n(249);function Y(e){return K({seed:e})}n(291);function $(e){var t,n,a,c=Object(u.g)().push;return o.a.createElement("div",{className:"xcard",onClick:function(){return c("/conversation/".concat(e.convo_id))}},o.a.createElement("div",{className:"title"},e.title),o.a.createElement(W.a,{name:null===(t=e.contributors)||void 0===t?void 0:t[0],round:!0,size:45,color:Y(null===(n=e.contributors)||void 0===n?void 0:n[0])}),e.contributors.length>1&&o.a.createElement(W.a,{name:e.contributors[1],round:!0,size:45,color:Y(null===(a=e.contributors)||void 0===a?void 0:a[1])}),o.a.createElement(Q,{contributors:e.contributors||[]}),o.a.createElement("div",{className:"age"},e.age),o.a.createElement("div",{className:"views"},e.views," Views"))}function Q(e){var t,n=e.contributors;return o.a.createElement("div",{className:"discussed-by"},"Discussion by ",1===(t=n).length?t[0]:2===t.length?"".concat(t[0]," and ").concat(t[1]):3===t.length?"".concat(t[0],", ").concat(t[1]," and ").concat(t[2]):4===t.length?"".concat(t[0],", ").concat(t[1],", ").concat(t[2]," and ").concat(t[3]):void 0)}var X=function(e){var t=e.cards,n=void 0===t?[]:t,a=e.noflex,c=void 0!==a&&a;return o.a.createElement("div",{className:"card-row ".concat(c?"noflex":"flex")},(null===n||void 0===n?void 0:n.length)>1&&!c?o.a.createElement("div",{className:"connector"}):null,null===n||void 0===n?void 0:n.map((function(e){return o.a.createElement($,Object.assign({},e,{key:"CardRow/".concat(e.convo_id)}))})))};function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.token;return S("/convo/".concat(e),{method:"GET",headers:n?{Authorization:n}:void 0})}function ee(e,t){var n=t.convo_id;return S("/contributor",{method:"POST",headers:{Authorization:t.token},body:{convo_id:n,invite:e}})}function te(){var e=x(),t=e.token,n=e.setToken,o=e.isLoggedIn,c=e.setIsLoggedIn,r=e.didPersistLoad,i=Object(a.useState)(null),s=Object(l.a)(i,2),u=s[0],m=s[1];return Object(a.useEffect)((function(){if(!u&&r){(function(e){return S("/feed",{method:"GET",headers:e?{Authorization:e}:void 0})})(t).then((function(e){return m(e.convos)})).catch((function(e){return n(null),c(!1),void m(null)}))}}),[t,u,n,o,c,r]),u}var ne=n(260),ae=n(252),oe=n.n(ae);var ce=function(){var e=te(),t=Object(ne.a)(),n=oe()(e,t<925?1:t<1260?2:3);return o.a.createElement("div",{className:"column-page"},n.map((function(e,t){return o.a.createElement(X,{cards:e,key:"CardRow/".concat(t)})})))};n(323);var re=function(){return o.a.createElement("div",{className:"about"},o.a.createElement("div",{id:"title"},"About Saloon"),o.a.createElement("div",{className:"editor"},o.a.createElement("div",{className:"quill"},o.a.createElement("div",{className:"ql-toolbar ql-snow"}),o.a.createElement("div",{className:"ql-container ql-snow"},o.a.createElement("div",null,"Saloon provides a space for HEALTHY and NUANCED conversations by making sure your conversations go uninterrupted AND by making sure your voices are heard."),o.a.createElement("div",{className:"bold-y-margin"},"How we do it"),o.a.createElement("div",null,"We keep conversations CLEAR:"),o.a.createElement("div",null,"When you start a conversation on Saloon, only you can decide who joins."),o.a.createElement("div",{className:"pad-top"},"Our conversations are always LIVE:"),o.a.createElement("div",null,"Saloon conversations never end, so they can be added to whenever inspiration strikes!"),o.a.createElement("div",{className:"pad-top"},"Comments mean MORE on Saloon:"),o.a.createElement("div",null,"Since all of our conversations are live, so are comments!"),o.a.createElement("div",null,"That means posters on Saloon can engage with reader feedback during conversations!"),o.a.createElement("div",{className:"bold-y-margin"},"Here are some tips to get the most out of your Saloon Conversations"),o.a.createElement("div",{className:"tip"},"Be Respectful"),o.a.createElement("div",{className:"tip"},"Be Disagreeable"),o.a.createElement("div",{className:"tip"},"Be Honest"),o.a.createElement("div",{className:"tip"},"Be Clear and Consice"),o.a.createElement("div",{className:"last"},"and last but not least..."),o.a.createElement("div",{className:"bold-y-margin fun"},"Have Fun!!")))))},ie=n(89);n(325);function le(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"field-title"},e.placeholder),o.a.createElement(ie.b,e),o.a.createElement(ie.a,{name:e.name,render:function(e){return o.a.createElement("div",{className:"error"},e.replace("_"," "))}}))}var se=function(e){var t=x(),n=t.isLoggedIn,a=t.setIsLoggedIn,c=t.setToken;return n?o.a.createElement(u.a,{to:e.location.state?e.location.state.from.pathname:"/"}):o.a.createElement("div",{className:"form"},o.a.createElement("h1",null,"Login"),o.a.createElement(ie.d,{initialValues:{email:"",password:""},onSubmit:function(e,t){(function(e,t){return S("/user/login",{method:"POST",body:{email:e,password:t}})})(e.email,e.password).then((function(e){c(e.token),a(!0)})).catch((function(e){t.setErrors({password:"incorrect password"}),t.setSubmitting(!1)}))}},(function(e){var t=e.isSubmitting;return o.a.createElement(ie.c,null,o.a.createElement(le,{type:"text",name:"email",placeholder:"email"}),o.a.createElement(le,{type:"password",name:"password",placeholder:"password"}),o.a.createElement("button",{type:"submit",disabled:t},"Submit"),o.a.createElement("div",{className:"switch-here"},"Don't have an account? Join ",o.a.createElement(s.b,{to:"/register"},"here")))})))},ue=n(77);var me=function(){var e=x(),t=e.setToken,n=e.setIsLoggedIn;return e.isLoggedIn?o.a.createElement(u.a,{to:"/home"}):o.a.createElement("div",{className:"form"},o.a.createElement("h1",null,"Register"),o.a.createElement(ie.d,{initialValues:{username:"",password:"",first_name:"",last_name:"",email:""},onSubmit:function(e,a){(function(e){var t=e.username,n=e.password;return S("/user/signup",{method:"POST",body:{username:t,first_name:e.first_name,last_name:e.last_name,password:n,email:e.email}})})(e).then((function(e){t(e.token),n(!0)})).catch((function(e){return a.setFieldError("email","something went wrong")}))},validationSchema:ue.a().shape({first_name:ue.b().required(),last_name:ue.b().required(),username:ue.b().required(),password:ue.b().required()})},(function(e){var t=e.isSubmitting;return o.a.createElement(ie.c,null,o.a.createElement(le,{type:"email",name:"email",placeholder:"email"}),o.a.createElement(le,{type:"text",name:"first_name",placeholder:"first name"}),o.a.createElement(le,{type:"text",name:"last_name",placeholder:"last name"}),o.a.createElement(le,{type:"text",name:"username",placeholder:"username"}),o.a.createElement(le,{type:"password",name:"password",placeholder:"password"}),o.a.createElement("button",{type:"submit",disabled:t},"Submit"),o.a.createElement("div",{className:"switch-here"},"Already have an account? Login ",o.a.createElement(s.b,{to:"/login"},"here")))})))};n(326);var de=function(){var e,t,n=_(),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.reload,n=x(),o=n.token,c=n.isLoggedIn,r=Object(a.useState)(null),i=Object(l.a)(r,2),s=i[0],u=i[1];return Object(a.useEffect)((function(){o&&c&&I(o).then((function(e){return u(e)})).catch((function(e){return u(null)}))}),[o,c,t]),s}();return o.a.createElement("div",{className:"column-page"},o.a.createElement("div",{className:"user-name"},"".concat(null!==(e=null===n||void 0===n?void 0:n.first_name)&&void 0!==e?e:"John"," ").concat(null!==(t=null===n||void 0===n?void 0:n.last_name)&&void 0!==t?t:"Smith")),o.a.createElement("div",{className:"section"},"History"),o.a.createElement(X,null),o.a.createElement("div",{className:"section"},"Liked Posts"),o.a.createElement(X,{cards:null===c||void 0===c?void 0:c.convos,noflex:!0}),o.a.createElement("div",{className:"section"},"My Posts"),o.a.createElement(X,{cards:null===n||void 0===n?void 0:n.convos,noflex:!0}))},ve=n(128),fe=n(76);n(327);var Ee=function(e){var t=e.children,n=Object(a.useState)(!1),c=Object(l.a)(n,2),r=c[0],i=c[1],s=function(){return i(!r)},u=Object(a.useState)(0),m=Object(l.a)(u,2),d=m[0],v=m[1],f=[];function E(){var e=o.a.Children.count(t);return 0===e?null:1===e?t:t[d]}return Object(a.useMemo)((function(){return o.a.Children.forEach(t,(function(e,t){o.a.isValidElement(e)&&f.push({index:t,Icon:e.props.icon,title:e.props.title,style:e.props.style})}))}),[t,f]),o.a.createElement("div",{className:"sidebar ".concat(r?"":"minimized"),style:f[d].style||{}},o.a.createElement("div",{className:"icons"},f.map((function(e){var t=e.index,n=e.Icon;return o.a.createElement("div",{className:"icon",key:"Sidebar/Icon/".concat(t),onClick:function(){return function(e){e===d?s():(!1===r&&s(),v(e))}(t)}},o.a.createElement(n,null))}))),o.a.createElement("div",{className:"sidebar-inner ".concat(r?"":"fade")},o.a.createElement("div",{className:"section-title"},f[d].title),o.a.createElement(E,null)))},be=n(256),he=n.n(be);function pe(e){var t=e.value,n=e.setValue,a=Object(i.a)(e,["value","setValue"]);return o.a.createElement(he.a,Object.assign({theme:"snow",modules:{toolbar:[["bold","italic","underline","strike"],["link"]]},formats:["bold","italic","underline","strike","link"],value:t||"",onChange:function(e){return n(e)}},a))}var ge=n(169),Ne=n(443);function Oe(e){return o.a.createElement(ge.a,Object.assign({matchers:[new Ne.a("url")]},e))}n(431);var je=function(e,t){return console.warn("Contributors component was not given an '".concat(e,"' prop")),t?[]:null};function ye(e){var t=_(),n={invited:we,active:ke},a=e.sections||[];return o.a.createElement("div",{className:"contributors"},!e.noTitle&&o.a.createElement("div",null,"Contributors"),a.map((function(t,a){var c=n[t];return o.a.createElement(c,Object.assign({key:"Contributors/".concat(t,"/").concat(a)},e))})),o.a.createElement(Ie,{onInvite:function(n){e.invited.includes(n)||n.toLowerCase()===(t?t.username.toLowerCase():null)||""===n.trim()||e.onInvite(n)}||function(){return je("onInvite")}}),e.children)}function ke(e){return o.a.createElement(Se,{color:"black",contributors:e.active||je("active")},"Active")}function we(e){return o.a.createElement(Se,{color:"gray",contributors:e.invited||je("invited")},"Invited")}function Se(e){var t=e.color,n=e.contributors,a=e.children;return o.a.createElement("div",{className:"section"},o.a.createElement("div",{className:"title"},a),o.a.createElement("div",{className:"users"},(n||[]).map((function(e){return o.a.createElement(Ce,{key:"invite/".concat(e),color:t},e)}))))}function Ce(e){var t=e.color,n=void 0===t?void 0:t;return o.a.createElement("div",{className:"user"},o.a.createElement(W.a,{name:e.children,src:e.image||null,color:Y(e.children),round:!0,size:25}),o.a.createElement("span",{className:"name",style:{color:n}},e.children))}function Ie(e){var t,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],i=c[1],s=function(){e.onInvite(r),i(""),t.focus()};return o.a.createElement("div",{className:"invite"},o.a.createElement("div",{className:"title"},"Invite Someone"),o.a.createElement("div",{className:"field"},o.a.createElement("input",{className:"clear-input",placeholder:"username",autoComplete:"off",value:r,onChange:function(e){return i(e.currentTarget.value)},onKeyDown:function(e){return"Enter"===e.key?s():null},ref:function(e){return t=e}}),o.a.createElement(fe.a,{className:"submit",onClick:s})))}function xe(e){return S("/comment/".concat(e),{method:"GET"})}n(432);function Le(e){var t=e.title,n=e.views,a=e.votes,c=e.userVote,r=e.updateVote,i=e.isLoggedIn,l=e.isContributor,s=e.navigate,u=e.id;return o.a.createElement("div",{className:"d-title"},o.a.createElement(_e,{votes:a,userVote:c,setVote:function(e){r(e===c?0:e)}}),o.a.createElement("div",null,o.a.createElement("div",{className:"text"},t),(!i||!l)&&o.a.createElement("div",{className:"join",onClick:function(){return!i&&s({pathname:"/login",state:{from:{pathname:"/conversation/".concat(u)}}})}},"Join Conversation")),o.a.createElement("div",{className:"views"},n," views"))}function _e(e){var t=e.votes,n=void 0===t?"0":t,a=e.userVote,c=e.setVote;return o.a.createElement("div",{className:"vote"},o.a.createElement(fe.c,{className:"thumb ".concat(1===a?"upvoted":""),onClick:function(){return c(1)}}),o.a.createElement("span",{className:"amount"},n),o.a.createElement(fe.b,{className:"thumb ".concat(-1===a?"upvoted":""),onClick:function(){return c(-1)}}))}function Te(e){var t=e.posts,n=e.body,a=e.setBody,c=e.submit,r=e.isLoggedIn,i=e.isContributor;return o.a.createElement("div",{className:"discussion"},o.a.createElement("div",{className:"inner"},t&&t.map((function(e,t){return o.a.createElement(Pe,Object.assign({},e,{key:"".concat(e.contributor,"/").concat(e.time_of_post,"/").concat(t)}))}))),r&&i&&o.a.createElement("div",{className:"editor-wrapper"},o.a.createElement(pe,{value:n,setValue:a}),o.a.createElement("div",{className:"post-button",onClick:c},"Submit")))}function Pe(e){var t=e.contributor,n=e.post;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"item"},o.a.createElement("span",{style:{color:Y(t)}},t,": "),o.a.createElement(Oe,{content:n})),o.a.createElement("div",{className:"break"}))}function Ae(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(!1),s=Object(l.a)(i,2),u=s[0],m=s[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"comment-section"},e.comments.map((function(e,t){return o.a.createElement(ze,Object.assign({key:"".concat(e.contributor,"/").concat(e.time_of_comment,"/").concat(t)},e))}))),o.a.createElement("div",{className:"add"},o.a.createElement("textarea",{value:c,onChange:function(e){return r(e.currentTarget.value)}}),o.a.createElement("button",{type:"submit",onClick:function(){u||(m(!0),e.postComment(c).then((function(e){m(!1),r("")})))}},u?"Posting":"Submit")))}function ze(e){var t=e.age,n=e.username,c=e.comment,r=e.votes,i=Object(a.useState)(!1),s=Object(l.a)(i,2),u=s[0],m=s[1];return o.a.createElement("div",{className:"comment"},o.a.createElement("div",{className:"meta"},o.a.createElement("div",{className:"contributor",style:{color:Y(n)}},n),o.a.createElement("div",{className:"likes ".concat(u?"upvoted":""),onClick:function(){return m(!u)}},u?r+1:r," ",o.a.createElement(fe.c,{style:{fontSize:"12px"}})),o.a.createElement("div",{className:"time"},t)," "),o.a.createElement("div",{className:"body"},c))}var Ve=function(e){var t=e.match.params.id,n=x(),c=n.token,r=n.isLoggedIn,i=L(),s=Object(l.a)(i,2),u=s[0],d=s[1],v=L(),f=Object(l.a)(v,2),E=f[0],b=f[1],h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.reload,o=t.token,c=Object(a.useState)({}),r=Object(l.a)(c,2),i=r[0],s=r[1],u=x(),m=u.didPersistLoad;return Object(a.useEffect)((function(){m&&Z(e,{token:o}).then((function(e){return s(e)})).catch((function(e){return s(null)}))}),[e,n,o,m]),i}(t,{reload:u,token:c}),p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.reload,o=t.token,c=Object(a.useState)([]),r=Object(l.a)(c,2),i=r[0],s=r[1],u=x(),m=u.didPersistLoad;return Object(a.useEffect)((function(){m&&xe(e).then((function(e){return s(e.comments)})).catch((function(e){}))}),[e,n,o,m]),i}(t,{reload:E,token:c}),g=Object(a.useState)(""),N=Object(l.a)(g,2),O=N[0],j=N[1],y=Object(a.useState)((null===h||void 0===h?void 0:h.contributors)||[]),k=Object(l.a)(y,2),w=k[0],C=k[1];return h||e.history.push("/home"),o.a.createElement("div",{className:"conversation"},o.a.createElement(Te,{posts:null===h||void 0===h?void 0:h.posts,submit:function(){(function(e,t){return S("/post",{method:"POST",headers:{Authorization:e},body:{convo_id:t.convo_id,post:t.post}})})(c,{convo_id:t,post:O}).then((function(){d(),j("")})).catch((function(e){}))},body:O,setBody:j,isLoggedIn:r,isContributor:null===h||void 0===h?void 0:h.isContributor}),o.a.createElement(Le,{title:null===h||void 0===h?void 0:h.title,views:null===h||void 0===h?void 0:h.views,votes:null===h||void 0===h?void 0:h.votes,userVote:null===h||void 0===h?void 0:h.vote,updateVote:function(e){(function(e,t){var n=t.token,a=t.vote;return S("/convo/".concat(e,"/vote/").concat(a),{method:"PUT",headers:n?{Authorization:n}:void 0})})(t,{token:c,vote:e}).then((function(){return d()})).catch((function(e){}))},isLoggedIn:r,isContributor:null===h||void 0===h?void 0:h.isContributor,navigate:e.history.push,id:t}),o.a.createElement(Ee,null,o.a.createElement(Ae,{icon:m.b,title:"Comments",comments:p||[],postComment:function(e){return function(e,t){var n=t.convo_id,a=t.comment;return S("/comment/".concat(n),{method:"POST",headers:{Authorization:e},body:{comment:a}})}(c,{convo_id:t,comment:e}).then((function(){return b()})).catch((function(e){}))}}),o.a.createElement(ye,{icon:m.c,title:"Contributors",style:{width:"100px",transition:"all 0.5s ease-in"},sections:["active","invited"],invited:w,active:null===h||void 0===h?void 0:h.contributors,onInvite:function(e){C([].concat(Object(ve.a)(w),[e])),ee(e,{token:c,convo_id:t}).then((function(e){return d()})).catch((function(e){}))},noTitle:!0})))},Be=n(441);n(433),n(434);function He(e){var t=x().token,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(""),u=Object(l.a)(s,2),m=u[0],d=u[1],v=Object(a.useState)([]),f=Object(l.a)(v,2),E=f[0],b=f[1],h=Object(a.useState)(!1),p=Object(l.a)(h,2),g=p[0],N=p[1];return o.a.createElement("div",{className:"post"},o.a.createElement(qe,{title:r,setTitle:i,body:m,setBody:d}),o.a.createElement("div",{className:""},o.a.createElement(ye,{sections:["invited"],onInvite:function(e){return b([].concat(Object(ve.a)(E),[e]))},invited:E},o.a.createElement("div",{className:"post-button",onClick:function(){N(!0),function(e,t){return S("/convo",{method:"POST",headers:{Authorization:e},body:{title:t.title,post:t.body}})}(t,{title:r,body:m}).then((function(e){var n=e.convo_id;return ee(E,{convo_id:n,token:t}).then((function(e){return n})).catch((function(e){return Promise.reject()}))})).then((function(t){N(!1),e.history.push("/conversation/".concat(t))})).catch((function(e){N(!1)}))}},g?o.a.createElement(Be.a,{css:"\n                  width: 50px;\n                  height: 50px;\n                  flex: 1;\n                "}):o.a.createElement("div",{className:"text"},"Post")))))}function qe(e){var t=e.title,n=e.setTitle,a=e.body,c=e.setBody;return o.a.createElement("div",{className:"editor"},o.a.createElement("input",{className:"post-title",placeholder:"Title",value:t,onChange:function(e){return n(e.currentTarget.value)}}),o.a.createElement(pe,{value:a,onChange:function(e){return c(e)}}))}n(435);var De=o.a.createContext();function Je(e){var t=e.component,n=e.authenticated,a=Object(i.a)(e,["component","authenticated"]);return o.a.createElement(u.b,Object.assign({},a,{render:function(e){return!0===n?o.a.createElement(t,Object.assign({},e,a)):o.a.createElement(u.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}var Re=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),i=Object(l.a)(r,2),m=i[0],d=i[1],v=Object(a.useState)(null),f=Object(l.a)(v,2),E=f[0],b=f[1];return o.a.createElement(De.Provider,{value:{isLoggedIn:m,setIsLoggedIn:d,token:E,setToken:b,didPersistLoad:n}},o.a.createElement(U,{data:{token:E,isLoggedIn:m},debounce:500,onMount:function(e){d(e.isLoggedIn),b(e.token)},onComplete:function(){return c(!0)}}),o.a.createElement(s.a,null,o.a.createElement("div",null,o.a.createElement(z,null),o.a.createElement(B,null),o.a.createElement("div",{className:"content"},o.a.createElement(u.d,null,o.a.createElement(u.a,{exact:!0,from:"/",to:"/home"}),o.a.createElement(u.b,{exact:!0,path:"/home",component:ce}),o.a.createElement(u.b,{exact:!0,path:"/about",component:re}),o.a.createElement(u.b,{exact:!0,path:"/login",component:se}),o.a.createElement(u.b,{exact:!0,path:"/register",component:me}),o.a.createElement(u.b,{exact:!0,path:"/conversation/:id",component:Ve}),o.a.createElement(Je,{exact:!0,path:"/account",component:de,authenticated:m}),o.a.createElement(Je,{exact:!0,path:"/post",component:He,authenticated:m}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(Re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[262,1,2]]]);
//# sourceMappingURL=main.92fc0dac.chunk.js.map