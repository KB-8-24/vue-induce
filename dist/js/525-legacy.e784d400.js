"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[525],{4525:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"300px"}},[n("el-card",[n("div",[e._v("组件A")]),n("bus-a")],1),n("el-card",[n("div",[e._v("组件B")]),n("bus-b")],1)],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.send}},[e._v("发送")])],1)},r=[],a={name:"busA",data:function(){return{}},methods:{send:function(){this.$bus.$emit("mes",(new Date).getTime())}}},c=a,l=n(3736),d=(0,l.Z)(c,i,r,!1,null,"778d988d",null),o=d.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(e._s(e.text))])},v=[],m={name:"busB",data:function(){return{text:""}},created:function(){var e=this;this.$bus.$on("mes",(function(t){e.text=t}))}},b=m,h=(0,l.Z)(b,f,v,!1,null,"4935e0ec",null),_=h.exports,p={name:"busIndex",components:{busA:o,busB:_},methods:{}},x=p,$=(0,l.Z)(x,u,s,!1,null,"77629ba2",null),k=$.exports}}]);
//# sourceMappingURL=525-legacy.e784d400.js.map