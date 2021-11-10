(this["webpackJsonpmemories-app"]=this["webpackJsonpmemories-app"]||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),s=a(17),i=a(34),o=a(82),l=a(60),u="FETCH_POSTS_LIST",d="ADD_POST",p="UPDATE_POST",j="DELETE_POST",b="ERROR",m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return t.payload?t.payload:e;case d:return[].concat(Object(l.a)(e),Object(l.a)(t.payload));case p:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case j:return e.filter((function(e){return e._id!==t.postId}));default:return e}},f=Object(i.b)({posts:m}),g=a(52),h=a(160),x=a(161),O=a(155),v=a(164),y=a(159),C=a.p+"static/media/memories.9cfa8a46.png",k=a(18),w=a.n(k),R=a(35),E=a(36),I=a.n(E),N={server:{baseUrl:"http://localhost:8090",apis:{post:{base:"/posts",addPost:"/add",likePost:"/likePost"}}}},S=N.server.baseUrl,P=function(){var e="".concat(S).concat(N.server.apis.post.base);return I.a.get(e)},_=function(e){var t="".concat(S).concat(N.server.apis.post.base).concat(N.server.apis.post.addPost),a={title:e.title,creator:e.creator,message:e.message,tags:e.tags,selectedFile:e.selectedFile};return I.a.post(t,a)},T=function(e,t){var a="".concat(S).concat(N.server.apis.post.base,"/").concat(e),n={title:t.title,creator:t.creator,message:t.message,tags:t.tags,likeCount:t.likeCount,selectedFile:t.selectedFile};return I.a.patch(a,n)},D=function(e){var t="".concat(S).concat(N.server.apis.post.base,"/").concat(e);return I.a.delete(t)},F=function(e){var t="".concat(S).concat(N.server.apis.post.base,"/").concat(e).concat(N.server.apis.post.likePost);return I.a.patch(t)},z=a(49),W=a(149),A=Object(W.a)((function(e){return Object(z.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}},e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})})),B=a(158),M=Object(W.a)((function(){return{media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}})),U=a(152),L=a(154),H=a(163),J=a(156),V=a(157),q=a(79),G=a.n(q),K=a(80),Q=a.n(K),X=a(78),Y=a.n(X),Z=a(77),$=a.n(Z),ee=a(5),te=function(e){var t=e.post,a=e.setCurrentId,n=M(),r=Object(s.b)();return Object(ee.jsxs)(U.a,{className:n.card,children:[Object(ee.jsx)(L.a,{className:n.media,component:"image",image:t.selectedFile,title:t.title}),Object(ee.jsxs)("div",{className:n.overlay,children:[Object(ee.jsx)(O.a,{variant:"h6",children:t.creator}),Object(ee.jsx)(O.a,{variant:"body2",children:$()(t.createdAt).fromNow()})]}),Object(ee.jsx)("div",{className:n.overlay2,children:Object(ee.jsx)(H.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)},children:Object(ee.jsx)(Y.a,{fontSize:"small"})})}),Object(ee.jsx)("div",{className:n.details,children:Object(ee.jsx)(O.a,{variant:"body2",color:"textSecondary",children:t.tags.map((function(e){return"#".concat(e," ")}))})}),Object(ee.jsxs)(J.a,{children:[Object(ee.jsx)(O.a,{className:n.title,variant:"h5",gutterBottom:!0,children:t.title}),Object(ee.jsx)(O.a,{className:n.title,variant:"body2",component:"p",color:"textSecondary",children:t.message})]}),Object(ee.jsxs)(V.a,{className:n.cardActions,children:[Object(ee.jsxs)(H.a,{size:"small",color:"primary",onClick:function(){var e;r((e=t._id,function(){var t=Object(R.a)(w.a.mark((function t(a){var n,r,c,s;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F(e);case 3:n=t.sent,"000"===(r=n.data).code?(c={type:p,payload:r&&r.data?r.data:{}},a(c)):(s={type:b,message:r&&r.message},a(s)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Error in likePost action. ERROR: ",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(ee.jsx)(G.a,{fontSize:"small"}),"\xa0",t.likeCount]}),Object(ee.jsxs)(H.a,{size:"small",color:"primary",onClick:function(){return r((e=t._id,function(){var t=Object(R.a)(w.a.mark((function t(a){var n,r,c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D(e);case 3:n=t.sent,"000"===(r=n.data).code?a({type:j,postId:e}):(c={type:b,message:r&&r.message},a(c)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Error in deletePost action. ERROR: ",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(ee.jsx)(Q.a,{fontSize:"small"}),"\xa0 Delete"]})]})]})},ae=Object(W.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),ne=function(e){var t=e.setCurrentId,a=ae(),n=Object(s.c)((function(e){return e.posts}));return n.length?Object(ee.jsx)(y.a,{className:a.mainContainer,container:!0,alignItems:"stretch",spacing:3,children:n.map((function(e){return Object(ee.jsx)(y.a,{item:!0,xs:12,sm:6,children:Object(ee.jsx)(te,{post:e,setCurrentId:t})},e._id)}))}):Object(ee.jsx)(B.a,{})},re=a(19),ce=Object(W.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),se=a(84),ie=a(162),oe=a(81),le=a.n(oe),ue=function(e){var t=e.currentId,a=e.setCurrentId,r=ce(),c=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:null}),i=Object(g.a)(c,2),o=i[0],l=i[1],u=Object(s.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),j=Object(s.b)();Object(n.useEffect)((function(){u&&l(u)}),[u]);var m=function(){a(null),l({creator:"",message:"",tags:"",title:"",selectedFile:null})};return Object(ee.jsx)(se.a,{className:r.paper,children:Object(ee.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(r.form," ").concat(r.root),onSubmit:function(e){var a;e.preventDefault(),j(t?function(e,t){return function(){var a=Object(R.a)(w.a.mark((function a(n){var r,c,s,i;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,T(e,t);case 3:r=a.sent,"000"===(c=r.data).code?(s={type:p,payload:c&&c.data?c.data:{}},n(s)):(i={type:b,message:c&&c.message},n(i)),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.error("Error in updatePost action. ERROR: ",a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(t,o):(a=o,function(){var e=Object(R.a)(w.a.mark((function e(t){var n,r,c,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(a);case 3:n=e.sent,"000"===(r=n.data).code?(c={type:d,payload:r&&r.data&&r.data.length?r.data:[]},t(c)):(s={type:b,message:r&&r.message},t(s)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error in addPost action. ERROR: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),m()},children:[Object(ee.jsxs)(O.a,{variant:"h6",children:[t?"Updating":"Creating"," a memory"]}),Object(ee.jsx)(ie.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:o.creator,onChange:function(e){l(Object(re.a)(Object(re.a)({},o),{},{creator:e.target.value}))}}),Object(ee.jsx)(ie.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:o.title,onChange:function(e){l(Object(re.a)(Object(re.a)({},o),{},{title:e.target.value}))}}),Object(ee.jsx)(ie.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:o.message,onChange:function(e){l(Object(re.a)(Object(re.a)({},o),{},{message:e.target.value}))}}),Object(ee.jsx)(ie.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:o.tags,onChange:function(e){l(Object(re.a)(Object(re.a)({},o),{},{tags:e.target.value.split(",")}))}}),Object(ee.jsx)("div",{className:r.fileInput,children:Object(ee.jsx)(le.a,{type:"file",multiple:!1,onDone:function(e){return l(Object(re.a)(Object(re.a)({},o),{},{selectedFile:e.base64}))}})}),Object(ee.jsxs)(H.a,{className:r.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:[t?"Update":"Add"," Memory"]}),Object(ee.jsx)(H.a,{variant:"contained",color:"secondary",size:"small",type:"button",fullWidth:!0,onClick:m,children:"Clear"})]})})},de=function(){var e=A(),t=Object(s.b)(),a=Object(n.useState)(null),r=Object(g.a)(a,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){t(function(){var e=Object(R.a)(w.a.mark((function e(t){var a,n,r,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P();case 3:a=e.sent,"000"===(n=a.data).code?(r={type:u,payload:n&&n.data&&n.data.length?n.data:[]},t(r)):(c={type:b,message:n&&n.message},t(c)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error in getPosts action. ERROR: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[t]),Object(ee.jsxs)(h.a,{maxWidth:"lg",children:[Object(ee.jsxs)(x.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(ee.jsx)(O.a,{className:e.heading,variant:"h2",align:"center",children:"Memories"}),Object(ee.jsx)("img",{className:e.image,src:C,alt:"memories",height:"60"})]}),Object(ee.jsx)(v.a,{in:!0,children:Object(ee.jsxs)(y.a,{container:!0,className:e.mainContainer,justifyContent:"space-between",alignItems:"stretch",spacing:3,children:[Object(ee.jsx)(y.a,{item:!0,xs:12,sm:7,children:Object(ee.jsx)(ne,{setCurrentId:i})}),Object(ee.jsx)(y.a,{item:!0,xs:12,sm:4,children:Object(ee.jsx)(ue,{currentId:c,setCurrentId:i})})]})})]})},pe=(a(119),Object(i.d)(f,Object(i.c)(Object(i.a)(o.a))));c.a.render(Object(ee.jsx)(s.a,{store:pe,children:Object(ee.jsx)(de,{})}),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.eca68733.chunk.js.map