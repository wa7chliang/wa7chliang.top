<template>
  <div class="about-me">
    <div class="content">
      <h3>关于我</h3>
      <img src="https://avatars3.githubusercontent.com/u/26890547?s=460&v=4" alt="我的头像" class="my-img">
      <div class="my-msg">
        <p>关于我：喜欢动漫、二次元、switch游戏、敲代码</p>
        <p>github: <a href="https://github.com/wa7chliang">wa7chliang</a></p>
        <p>微博：<a href="https://weibo.com/1592017851/">进入微博</a></p>
        <p>知乎：<a href="https://www.zhihu.com/people/wa7ch/activities">进入知乎</a></p>
        <p>邮箱：wa7chliang@163.com</p>
      </div>
      <div class="tips">
        <p>微博与知乎很少发布内容</p>
        <p>本博客新建于2018年6月29日(一直在维护中)</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'about-me'
}
</script>
<style lang="less" scoped>
.about-me {
  .content {
    padding: 40px;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 40px;
    h3 {
      font-size: 26px;
      color: #333;
      text-align: center;
      padding-bottom: 30px;
    }
    .my-img {
      display: block;
      margin: 0 auto;
    }
    .my-msg {
      padding: 30px 60px;
      p {
        line-height: 42px;
        font-size: 14px;
        color: #666;
        a {
          color: #795548;
        }
      }
    }
    .tips {
      padding-left: 60px;
      p {
        line-height: 42px;
        color: #999;
        font-size: 14px;
      }
    }
  }
}
</style>
