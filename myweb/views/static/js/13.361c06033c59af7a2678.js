webpackJsonp([13],{crHX:function(e,t){},s3nr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Xxa5"),s=r.n(a),o=r("mvHQ"),n=r.n(o),i=r("woOf"),c=r.n(i),l=r("exGp"),m=r.n(l),u=r("LOkV"),f={name:"login",data:function(){return{myItem:{},form:{username:"",pass:"",code:""},rules:{username:[{validator:function(e,t,r){""===t?r(new Error("请输入用户名")):r()},trigger:"blur"}],pass:[{validator:function(e,t,r){""===t?r(new Error("请输入密码")):r()},trigger:"blur"}],code:[{validator:function(e,t,r){""===t?r(new Error("请输入验证码")):r()},trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(e){var r={username:t.form.username,password:t.form.pass,code:t.form.code};t.login("/api/users/signin",r)}})},resetForm:function(e){this.$refs[e].resetFields()},login:function(e,t){var r=this;return m()(s.a.mark(function a(){var o,i,l;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(u.b)(e,t);case 2:(o=a.sent).state?(i=window.localStorage,l=c()({},o.cont,{dataTime:(new Date).getTime()},{token:o.token}),i.setItem("mydata",n()(l)),r.$message({message:"登陆成功",type:"success"}),r.$router.push({path:"/admin"})):r.$message.error(o.msg);case 4:case"end":return a.stop()}},a,r)}))()}}},p={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("el-card",{staticClass:"register-box"},[r("p",{staticClass:"title"},[r("span",[e._v("登陆")]),e._v(" "),r("router-link",{staticClass:"back",attrs:{to:"/admin/register"}},[e._v("去注册")])],1),e._v(" "),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"用户名:",prop:"username"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"pass"}},[r("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.form.pass,callback:function(t){e.$set(e.form,"pass",t)},expression:"form.pass"}})],1),e._v(" "),r("el-form-item",{staticClass:"dib",attrs:{label:"验证码",prop:"code"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}}),e._v(" "),r("img",{attrs:{src:"/api/captcha",onclick:"javascript: this.src='/api/captcha?code='+ Math.random()"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("form")}}},[e._v("登陆")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetForm("form")}}},[e._v("重置")])],1)],1)],1)],1)},staticRenderFns:[]};var d=r("VU/8")(f,p,!1,function(e){r("crHX")},"data-v-45f2f945",null);t.default=d.exports}});
//# sourceMappingURL=13.361c06033c59af7a2678.js.map