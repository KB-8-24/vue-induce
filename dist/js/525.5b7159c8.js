"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[525],{4525:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"300px"}},[n("el-card",[n("div",[e._v("组件A")]),n("bus-a")],1),n("el-card",[n("div",[e._v("组件B")]),n("bus-b")],1)],1)},u=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.send}},[e._v("发送")])],1)},a=[],i={name:"busA",data(){return{}},methods:{send(){this.$bus.$emit("mes",(new Date).getTime())}}},l=i,c=n(3736),d=(0,c.Z)(l,r,a,!1,null,"778d988d",null),m=d.exports,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(e._s(e.text))])},v=[],b={name:"busB",data(){return{text:""}},created(){this.$bus.$on("mes",(e=>{this.text=e}))}},h=b,f=(0,c.Z)(h,o,v,!1,null,"4935e0ec",null),_=f.exports,p={name:"busIndex",components:{busA:m,busB:_},methods:{}},x=p,$=(0,c.Z)(x,s,u,!1,null,"77629ba2",null),k=$.exports}}]);
//# sourceMappingURL=525.5b7159c8.js.map