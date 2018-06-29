<template>
  <div class="index">
    <vheader />
    <div class="content-box">
      <div class="left-box">
        <indexLeft :allCount="allCount" />
      </div>
      <div class="right-box">
        <router-view class="main"></router-view>
      </div>
    </div>
    <vfooter />
  </div>
</template>
<script>
import indexLeft from '@/components/common/indexLeft'
import vheader from '@/components/common/header'
import vfooter from '@/components/common/footer'
import {mapMutations, mapGetters} from 'vuex'
import {get} from '@/assets/js/util'
export default {
  name: 'index',
  methods: {
    async getCount (url) {
      const res = await get(url)
      if (res.state) {
        this.setAllCountState(res.count)
      }
    },
    ...mapMutations({
      setAllCountState: 'SET_ALLCOUNT_STATE'
    })
  },
  computed: {
    ...mapGetters([
      'allCount'
    ])
  },
  components: {
    vheader,
    indexLeft,
    vfooter
  },
  created () {
    this.getCount('/api/posts/getCount')
  }
}
</script>
<style lang="less" scoped>
.index {
  background: #efefef;
}
.content-box {
  width: 1200px;
  margin: 100px auto 0 auto;
  padding-bottom: 100px;
  overflow: hidden;
  .left-box {
    width: 320px;
    float: left;
  }
  .right-box {
    width: 800px;
    float: right;
  }
  &::after {
    content: '';
    display: block;
    clear: both;
  }
}
</style>
