webpackJsonp([3],{GY88:function(e,t){},KWFI:function(e,t){},jAaT:function(e,t){},pMgH:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("mvHQ"),n=a.n(i),s={name:"adminHeader",props:["mydata"],methods:{handleCommand:function(e){"b"===e&&this.signout()},signout:function(){window.localStorage.removeItem("mydata"),this.$message({message:"退出成功",type:"success"}),this.$router.push({path:"/admin/index"})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"adminHeader"},[a("el-header",[a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"logo"},[e._v("admin")])]),e._v(" "),a("el-col",{attrs:{offset:4,span:12}},[a("div",{staticClass:"vhidden"},[e._v("123")])]),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-dropdown",{attrs:{trigger:"click"},on:{command:e.handleCommand}},[a("span",{staticClass:"el-dropdown-link users"},[e._v("\n            你好！ "+e._s(e.mydata.username||"")),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[e._v("修改密码")]),e._v(" "),e.mydata.username?a("el-dropdown-item",{attrs:{command:"b"}},[e._v("退出")]):e._e()],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"adminAside"},[a("el-aside",{attrs:{width:"200px"}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{router:!0}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-service"}),e._v(" "),a("span",[e._v("用户信息")])]),e._v(" "),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"1-1"}},[e._v("用户列表")])],1)],2),e._v(" "),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-tickets"}),e._v(" "),a("span",[e._v("文章管理")])]),e._v(" "),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"/admin/writeArticle"}},[e._v("写文章")])],1),e._v(" "),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"/admin/postsList"}},[e._v("文章列表")])],1)],2),e._v(" "),a("el-submenu",{attrs:{index:"3"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-circle-check"}),e._v(" "),a("span",[e._v("友链管理")])]),e._v(" "),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"/admin/addFriend"}},[e._v("添加友链")])],1),e._v(" "),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"/admin/friendList"}},[e._v("友链列表")])],1)],2),e._v(" "),a("el-submenu",{attrs:{index:"4"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-star-on"}),e._v(" "),a("span",[e._v("我的动漫")])]),e._v(" "),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"/admin/videoArray"}},[e._v("动漫列表")])],1),e._v(" "),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"/admin/addVideoArray"}},[e._v("添加动漫")])],1)],2)],1)],1)],1)},staticRenderFns:[]};var o={name:"admin",data:function(){return{isLogin:!1,mydata:{}}},components:{adminHeader:a("VU/8")(s,r,!1,function(e){a("KWFI")},"data-v-36195ced",null).exports,adminAside:a("VU/8")({name:"adminAside"},d,!1,function(e){a("GY88")},"data-v-01b11908",null).exports},methods:{getStorage:function(){var e=this.$route.name,t=window.localStorage,a=JSON.parse(t.getItem("mydata"));if(a)if(this.isLogin=!1,a.dataTime+18e5<(new Date).getTime())t.removeItem("mydata"),this.isLogin=!0,this.$router.push({path:"/admin/login"});else{a.dataTime=(new Date).getTime(),t.setItem("mydata",n()(a)),this.mydata=a;a.state}else{if(this.isLogin=!0,"login"===e||"register"===e)return;this.$router.push({path:"/admin/login"})}}},created:function(){this.getStorage()},watch:{$route:function(e,t){"login"!==e.name&&"register"!==e.name&&this.getStorage()}}},m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"admin"},[this.isLogin?this._e():t("admin-header",{attrs:{mydata:this.mydata}}),this._v(" "),t("div",{staticClass:"content"},[this.isLogin?this._e():t("admin-aside",{staticClass:"aside"}),this._v(" "),t("router-view",{staticClass:"main"})],1)],1)},staticRenderFns:[]};var l=a("VU/8")(o,m,!1,function(e){a("jAaT")},"data-v-aef5cf0e",null);t.default=l.exports}});
//# sourceMappingURL=3.f8ee002c3ba8d6aa0522.js.map