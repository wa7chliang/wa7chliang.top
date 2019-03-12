<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {ua} from '@/assets/js/util'
export default {
  name: 'App',
  created () {
    if (ua.isIOS || ua.isAndroid) {
      window.location.replace('http://wa7chliang.top/mobile')
    }
  }
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: -apple-system,"Microsoft Yahei","Helvetica Neue",Helvetica,Arial,"PingFang SC","Hiragino Sans GB","WenQuanYi Micro Hei",sans-serif;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
#content {
  p {
    font-size: 16px;
    line-height: 24px;
    color: #333;
  }
}
</style>
