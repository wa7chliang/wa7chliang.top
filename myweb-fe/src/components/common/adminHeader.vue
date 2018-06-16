<template>
  <div class="adminHeader">
    <el-header>
      <el-row>
        <el-col :span="4"><div class="logo">admin</div></el-col>
        <el-col :offset="4" :span="12"><div class="vhidden">123</div></el-col>
        <el-col :span="4">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link users">
              你好！ {{users}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改密码</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
  </div>
</template>
<script>
export default {
  name: 'adminHeader',
  data () {
    return {
      users: 'admin'
    }
  }
}
</script>
<style lang="less" scoped>
.el-header {
  background: rgb(64, 158, 255);
  .logo {
    line-height: 60px;
    font-size: 20px;
    color: #333;
    font-weight: 600;
  }
  .vhidden {
    overflow: hidden;
    text-indent: -2000em;
  }
  .users {
    line-height: 60px;
    font-size: 18px;
    color: #353535;
    cursor: pointer;
  }
  .el-dropdown {
    float: right;
  }
}
</style>
