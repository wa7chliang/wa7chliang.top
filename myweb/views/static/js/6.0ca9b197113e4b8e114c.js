webpackJsonp([6],{"ql+m":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Xxa5"),i=a.n(n),s=a("exGp"),r=a.n(s),l=a("LOkV"),c={name:"postsList",data:function(){return{tableData:[],page:1,size:10,total:0}},methods:{handleEdit:function(t,e){this.$router.push({path:"/admin/editArticle",query:{id:e.id}})},handleDelete:function(t,e){var a=this;this.$confirm("此操作将永久删除该文章, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.deleteArticle("/api/posts/deleteArticle",{id:e.id})})},deleteArticle:function(t,e){var a=this;return r()(i.a.mark(function n(){var s,r;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return s=JSON.parse(window.localStorage.getItem("mydata")),n.next=3,Object(l.b)(t,e,s.token);case 3:(r=n.sent).state?(a.$message({type:"success",message:"删除成功!"}),a.getList()):a.$message.error(r.msg);case 5:case"end":return n.stop()}},n,a)}))()},getList:function(){this.getListDate("/api/posts/getList",{page:this.page,size:this.size})},getListDate:function(t,e){var a=this;return r()(i.a.mark(function n(){var s;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(l.a)(t,e);case 2:(s=n.sent).state?(a.tableData=s.list,a.total=s.count):a.tableData=[];case 4:case"end":return n.stop()}},n,a)}))()},currentChange:function(t){t!==this.page&&(this.page=t,this.getList())}},created:function(){this.getList()}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"postsList"},[t._m(0),t._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"id",label:"Id",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"title",label:"标题",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"moment",label:"创建时间",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"浏览次数",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"types",label:"文章类型",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"page-box"},[a("el-pagination",{attrs:{"page-size":t.size,layout:"prev, pager, next",total:t.total},on:{"current-change":t.currentChange}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list-title"},[e("h3",[this._v("文章列表")])])}]};var u=a("VU/8")(c,o,!1,function(t){a("x0//")},"data-v-aa582a5a",null);e.default=u.exports},"x0//":function(t,e){}});
//# sourceMappingURL=6.0ca9b197113e4b8e114c.js.map