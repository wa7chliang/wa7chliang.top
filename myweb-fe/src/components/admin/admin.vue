<template>
  <div class="admin">
    <admin-header v-if="!isLogin"></admin-header>
    <admin-aside v-if="!isLogin" class="aside"></admin-aside>
    <router-view class="main"></router-view>
  </div>
</template>
<script>
import adminHeader from '@/components/common/adminHeader'
import adminAside from '@/components/common/adminAside'
export default {
  name: 'admin',
  data () {
    return {
      isLogin: false
    }
  },
  components: {
    adminHeader,
    adminAside
  },
  methods: {
    routerIsLogin () {
      this.$route.name === 'login' ? this.isLogin = true : this.isLogin = false
    }
  },
  created () {
    this.routerIsLogin()
  },
  watch: {
    $route (to) {
      to.name === 'login' ? this.isLogin = true : this.isLogin = false
    }
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
