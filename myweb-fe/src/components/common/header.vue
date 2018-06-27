<template>
  <div class="header">
    <el-header height="40px">
      <el-row>
        <el-col :span="16" :offset="4">
          <ul class="nav-list">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/">所有文章</router-link></li>
            <li><router-link to="/">关于我</router-link></li>
          </ul>
        </el-col>
      </el-row>
    </el-header>
    <div class="banner"></div>
  </div>
</template>
<script>
export default {
  name: 'header'
}
</script>
<style lang="less" scoped>
.header {
  li {
    list-style: none;
  }
  .el-header {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    background: rgba(40, 42, 44, .6);
    .el-row {
      line-height: 40px;
    }
    .nav-list {
      display: flex;
      display: -webkit-flex;
      li {
        margin-right: 50px;
        a {
          color: #fff;
          text-decoration: none;
        }
        &:hover {
          a {
            text-decoration: underline;
          }
        }
      }
    }
  }
  .banner {
    position: relative;
    height: 650px;
    width: 100%;
    background-size: cover;
    background-position: center 50%;
    background-repeat: no-repeat;
    background-image: url('http://localhost:3000/public/images/banner1.jpg'); //上线改
  }
}
</style>
