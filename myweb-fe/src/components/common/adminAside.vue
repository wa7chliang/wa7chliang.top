<template>
  <div class="adminAside">
    <el-aside width="200px">
      <el-menu
        class="el-menu-vertical-demo"
        :router="true">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-service"></i>
            <span>用户信息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">用户列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span>文章管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/admin/writeArticle">写文章</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="/admin/postsList">文章列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-circle-check"></i>
            <span>友链管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/admin/addFriend">添加友链</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="/admin/friendList">友链列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-star-on"></i>
            <span>我的动漫</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/admin/videoArray">动漫列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="/admin/addVideoArray">添加动漫</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>
<script>
export default {
  name: 'adminAside'
}
</script>
<style lang="less" scoped>
.adminAside {
  display: inline-block;
  height: 100%;
  .el-aside {
    height: 100%;
    .el-menu {
      height: 100%;
    }
  }
}
</style>
