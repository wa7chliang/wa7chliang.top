webpackJsonp([20],{"Lu+W":function(e,t){},vTeu:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"edit-video-array"},[e._m(0),e._v(" "),i("div",{staticClass:"form-box"},[i("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"动漫名字"}},[i("el-input",{model:{value:e.form.comic_name,callback:function(t){e.$set(e.form,"comic_name",t)},expression:"form.comic_name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"图片地址"}},[i("el-input",{model:{value:e.form.images_link,callback:function(t){e.$set(e.form,"images_link",t)},expression:"form.images_link"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"动漫集数"}},[i("el-input",{model:{value:e.form.comic_count,callback:function(t){e.$set(e.form,"comic_count",t)},expression:"form.comic_count"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"首播日期"}},[i("el-input",{model:{value:e.form.comic_date,callback:function(t){e.$set(e.form,"comic_date",t)},expression:"form.comic_date"}})],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即修改")])],1)],1)],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("h3",[this._v("编辑动漫")])])}]};var a=i("VU/8")({name:"editVideoArray",data:function(){return{form:{comic_name:"",images_link:"",comic_count:"",comic_date:""}}},methods:{onSubmit:function(){},ifEdit:function(){this.$route.query.id||this.$router.push({path:"/admin"})}},created:function(){this.ifEdit()}},o,!1,function(e){i("Lu+W")},"data-v-0addf02b",null);t.default=a.exports}});
//# sourceMappingURL=20.2b8c9801db047c08de29.js.map