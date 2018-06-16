<template>
  <div class="adminAside">
    <el-aside width="200px">
      <el-menu
        class="el-menu-vertical-demo">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-service"></i>
            <span>用户信息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">用户列表</el-menu-item>
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
