<template>
  <div class="all-list">
    <div class="top-title">
      <h3>所有文章</h3>
    </div>
    <div class="ul-list">
      <ul>
        <li v-for="item in list" :key="item.id">
          <router-link class="more-a" :to="{path: '/article/'+item.id }">
            <div class="title">
              <h3>{{item.title}}</h3>
            </div>
            <div class="content-span">
              <span class="moment">发表于:{{cutMoment(item.moment)}}</span>
              <span class="pv">浏览次数:{{item.pv}}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="pagination">
      <el-pagination
        background
        layout="total, prev, pager, next"
        :page-size="10"
        :current-page="page"
        @current-change="currentChange"
        :total="allCount">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import {get} from '@/assets/js/util'
import {api} from '@/assets/js/api'
export default {
  name: 'all-list',
  data () {
    return {
      list: [],
      page: 1
    }
  },
  methods: {
    cutMoment (moment) {
      return moment.slice(0, moment.indexOf(' '))
    },
    async getList (url, data) {
      const res = await get(url, data)
      if (res.state) {
        this.list = res.list
      }
    },
    currentChange (val) {
      if (val !== this.page) {
        this.page = val
        this.$router.push({name: 'allList', query: {page: this.page}})
      }
    }
  },
  mounted () {
    this.$route.query.page ? this.page = this.$route.query.page : this.page = 1
    this.getList(api.getList, {page: this.page})
  },
  computed: {
    ...mapGetters([
      'allCount'
    ])
  },
  watch: {
    $route () {
      if (!this.$route.query.page) {
        this.page = 1
      }
      this.getList(api.getList, {page: this.page})
    }
  }
}
</script>
<style lang="less" scoped>
.all-list {
  .top-title {
    padding: 20px;
  }
  .ul-list {
    ul {
      li {
        padding: 20px;
        background: #fff;
        border-radius: 30px;
        margin-bottom: 30px;
        .title {
          h3 {
            font-size: 24px;
            color: #333;
            font-weight: normal;
          }
        }
        .content-span {
          font-size: 14px;
          color: #888;
          span {
            margin-right: 20px;
          }
        }
      }
    }
  }
  .pagination {
    padding: 15px 0;
    background: #fff;
    border-radius: 5px;
    text-align: center;
  }
}
</style>
