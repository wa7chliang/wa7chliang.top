<template>
  <div class="friendList">
    <div class="list-title">
      <h3>友链列表</h3>
    </div>
    <div class="table-box">
      <el-table
      :data="tableData"
      style="width: 100%">
        <el-table-column
          prop="id"
          label="Id"
          width="180">
        </el-table-column>
        <el-table-column
          prop="friend_name"
          label="友链名字"
          width="180">
        </el-table-column>
        <el-table-column
          prop="images_link"
          label="图片链接地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="address_link"
          label="地址链接"
          width="300">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import {get} from '@/assets/js/util'
import {mapGetters} from 'vuex'
export default {
  name: 'friendList',
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    handleEdit (index, row) {
      if (this.isState) {
        this.$router.push({path: '/admin/editFriend', query: { id: row.id }})
      } else {
        this.$message.error('权限不足')
      }
    },
    handleDelete (index, row) {

    },
    async getList (url) {
      const resMsg = await get(url)
      if (resMsg.state) {
        this.tableData = resMsg.list
      }
    }
  },
  created () {
    this.getList('/api/friend/getFriendList')
  },
  computed: {
    ...mapGetters([
      'isState'
    ])
  }
}
</script>
<style lang="less" scoped>
.friendList {
  padding: 20px 40px;
  .list-title {
    h3 {
      font-size: 30px;
      color: #333;
      padding-bottom: 20px;
    }
  }
  .table-box {
    padding-bottom: 20px;
  }
}
</style>
