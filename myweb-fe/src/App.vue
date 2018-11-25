<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
