<template>
  <div class="admin">
    <admin-header v-if="!isLogin" :mydata='mydata'></admin-header>
    <div class="content">
      <admin-aside v-if="!isLogin" class="aside"></admin-aside>
      <router-view class="main"></router-view>
    </div>
  </div>
</template>
<script>
import adminHeader from '@/components/common/adminHeader'
import adminAside from '@/components/common/adminAside'
export default {
  name: 'admin',
  data () {
    return {
      isLogin: false,
      mydata: {}
    }
  },
  components: {
    adminHeader,
    adminAside
  },
  methods: {
    getStorage () {
      var name = this.$route.name
      let storage = window.localStorage
      let storageData = JSON.parse(storage.getItem('mydata'))
      if (!storageData) {
        this.isLogin = true
        if (name === 'login' || name === 'register') {
          return
        }
        this.$router.push({path: '/admin/login'})
      } else {
        this.isLogin = false
        if (storageData.dataTime + 1800000 < new Date().getTime()) {
          storage.removeItem('mydata')
          this.isLogin = true
          this.$router.push({path: '/admin/login'})
        } else {
          storageData.dataTime = new Date().getTime()
          storage.setItem('mydata', JSON.stringify(storageData))
          this.mydata = storageData
          let state = storageData.state || 0
        }
      }
    }
  },
  created () {
    this.getStorage()
  },
  watch: {
    '$route' (to, from) {
      if (to.name !== 'login' && to.name !== 'register') {
        this.getStorage()
      }
    }
  }
}
</script>
<style lang="less" scoped>
.admin {
  height: 100vh;
  min-width: 1200px;
  overflow: hidden;
  .content {
    overflow: hidden;
    height: 100%;
    display: flex;
    display: -webkit-flex;
  }
  .main {
    width: 100%;
    position: relative;
  }
}
</style>
