<template>
  <div class="indexLeft">
    <div class="me-img">
      <img src="https://avatars3.githubusercontent.com/u/26890547?s=460&v=4" alt="我的头像">
    </div>
    <div class="me">
      <p>wa7chliang</p>
    </div>
    <div class="me-msg">
      <a href="https://github.com/wa7chliang" class="me-icon">
        <el-tooltip class="item" effect="dark" content="github" placement="top">
          <svg height="24" class="github-svg" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        </el-tooltip>
      </a>
    </div>
    <ul class="nav-list">
      <li><router-link to="/">杂谈：<span>{{ allCount }}</span></router-link></li>
      <li><router-link to="/">类型：<span>2</span></router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'index-left',
  props: ['allCount']
}
</script>
<style lang="less" scoped>
.indexLeft {
  padding: 20px 30px;
  background: #fff;
  border-radius: 5px;
  .me {
    padding: 10px 0;
    p {
      font-size: 20px;
      color: #333;
      text-align: center;
    }
  }
  .me-img {
    width: 100%;
    img {
      display: block;
      width: 100%;
    }
  }
  .me-msg {
    padding: 10px 0;
    text-align: center;
    a {
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 80%;
      background: #efefef;
      .github-svg {
        margin-top: 8px;
      }
    }
  }
  .nav-list {
    padding: 10px 0;
    line-height: 30px;
    font-size: 16px;
    a {
      color: #666;
      span {
        color: #00a7e0;
      }
    }
  }
}
</style>
