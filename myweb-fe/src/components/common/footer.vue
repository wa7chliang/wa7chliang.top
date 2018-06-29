<template>
  <div class="vFooter">
    <div class="box">
      <p>本博客已经运行{{day}}天</p>
      <p>@2018<span>粤ICP备18069281号</span></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index-footer',
  computed: {
    day () {
      let birTime = new Date('2018-6-29').getTime()
      let nowTime = new Date().getTime()
      return Math.ceil((nowTime - birTime) / 1000 / 60 / 60 / 24)
    }
  }
}
</script>
<style lang="less" scoped>
.vFooter {
  width: 100%;
  background: #232323;
  padding: 15px 0;
  .box {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    p {
      color: #888;
      font-size: 12px;
      line-height: 24px;
      span {
        margin-left: 10px;
      }
    }
  }
}
</style>
