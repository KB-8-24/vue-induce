"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[105],{105:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("mixins-a"),t("el-divider"),t("mixins-b")],1)},u=[],a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("section",[n._v(" A组件中value值 "+n._s(n.value)+" "),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:n.change}},[n._v("触发mixins方法")])],1)])},c=[],s={components:{},data:function(){return{name:"mixins",value:0}},created:function(){console.log("调用了myMixins created()")},mounted:function(){},computed:{},methods:{change:function(){this.value++}}},o={name:"VueMixinsA",mixins:[s],data:function(){return{a:"我是A组件data",value:8}},created:function(){console.log("调用了mixinsA created()")},methods:{}},l=o,r=t(3736),m=(0,r.Z)(l,a,c,!1,null,"6cd20da0",null),d=m.exports,v=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("section",[n._v(" B组件中value值 "+n._s(n.value)+" "),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:n.change}},[n._v("触发mixins方法")])],1)])},f=[],x={name:"VueMixinsB",mixins:[s],data:function(){return{b:"我是B组件data",value:24}},created:function(){console.log("调用了mixinsB created()")},methods:{change:function(){this.value+=100}}},h=x,p=(0,r.Z)(h,v,f,!1,null,"932a60b6",null),_=p.exports,b={name:"VueInduceMixins",components:{mixinsA:d,mixinsB:_},data:function(){return{}},mounted:function(){},methods:{}},g=b,k=(0,r.Z)(g,i,u,!1,null,"40dce356",null),y=k.exports}}]);
//# sourceMappingURL=105-legacy.29a1fc3f.js.map