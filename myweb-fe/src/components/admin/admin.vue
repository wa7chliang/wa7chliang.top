<template>
  <div class="admin">
    <admin-header></admin-header>
    <admin-aside class="aside"></admin-aside>
    <router-view class="main"></router-view>
  </div>
</template>
<script>
import adminHeader from '@/components/common/adminHeader'
import adminAside from '@/components/common/adminAside'
export default {
  name: 'admin',
  components: {
    adminHeader,
    adminAside
  }
}
</script>
<style lang="less" scoped>
.admin {
  height: 100vh;
  min-width: 1200px;
  .aside {
    float: left;
  }
  .main {
    float: left;
    min-width: 1000px;
  }
}
</style>
