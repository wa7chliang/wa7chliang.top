webpackJsonp([8],{"/ixV":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Xxa5"),i=r.n(n),s=r("exGp"),a=r.n(s),o=r("Dd8w"),d=r.n(o),u=r("LOkV"),f={name:"edit-friend",data:function(){return{form:{friend_name:"",images_link:"",address_link:""}}},methods:{onSubmit:function(){var e=d()({},this.form,{id:this.$route.query.id});this.submitEditFriend("/api/friend/editFriend",e)},ifEdit:function(){this.$route.query.id?this.getFriend("/api/friend/getFriendContent",{id:this.$route.query.id}):this.$router.push({path:"/admin"})},getFriend:function(e,t){var r=this;return a()(i.a.mark(function n(){var s;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.a)(e,t);case 2:(s=n.sent).state?r.form=s.cont:r.$router.push({path:"/admin"});case 4:case"end":return n.stop()}},n,r)}))()},submitEditFriend:function(e,t){var r=this;return a()(i.a.mark(function n(){var s;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.b)(e,t);case 2:(s=n.sent).state?(r.$message({message:"友链编辑成功",type:"success"}),r.$router.push({path:"/admin/friendList"})):r.$message.error(s.msg);case 4:case"end":return n.stop()}},n,r)}))()}},created:function(){this.ifEdit()}},m={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"edit-friend"},[e._m(0),e._v(" "),r("div",{staticClass:"form-box"},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"友链名字"}},[r("el-input",{model:{value:e.form.friend_name,callback:function(t){e.$set(e.form,"friend_name",t)},expression:"form.friend_name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"头像地址"}},[r("el-input",{model:{value:e.form.images_link,callback:function(t){e.$set(e.form,"images_link",t)},expression:"form.images_link"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"友链地址"}},[r("el-input",{model:{value:e.form.address_link,callback:function(t){e.$set(e.form,"address_link",t)},expression:"form.address_link"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即修改")])],1)],1)],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("h3",[this._v("修改友链")])])}]};var c=r("VU/8")(f,m,!1,function(e){r("Fb0A")},"data-v-88a49d02",null);t.default=c.exports},Fb0A:function(e,t){}});
//# sourceMappingURL=8.efa479261a5b7eb48c56.js.map