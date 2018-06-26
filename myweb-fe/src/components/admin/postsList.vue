<template>
  <div class="postsList">
    <div class="list-title">
      <h3>文章列表</h3>
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
          prop="title"
          label="标题"
          width="180">
        </el-table-column>
        <el-table-column
          prop="moment"
          label="创建时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="pv"
          label="浏览次数"
          width="180">
        </el-table-column>
        <el-table-column
          prop="types"
          label="文章类型"
          width="180">
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
    <div class="page-box">
      <el-pagination
        :page-size="size"
        @current-change="currentChange"
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import {get, post} from '@/assets/js/util'
import {mapGetters} from 'vuex'
export default {
  name: 'postsList',
  data () {
    return {
      tableData: [],
      page: 1,
      size: 10,
      total: 0
    }
  },
  methods: {
    handleEdit (index, row) {
      if (this.isState) {
        this.$router.push({path: '/admin/editArticle', query: { id: row.id }})
      } else {
        this.$message.error('权限不足')
      }
    },
    handleDelete (index, row) {
      if (this.isState) {
        this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteArticle('/api/posts/deleteArticle', {id: row.id})
        })
      } else {
        this.$message.error('权限不足')
      }
    },
    async deleteArticle (url, data) {
      const resMsg = await post(url, data)
      if (resMsg.state) {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.getList()
      } else {
        this.$message.error(resMsg.msg)
      }
    },
    getList () {
      this.getListDate('/api/posts/getList', {page: this.page, size: this.size})
    },
    async getListDate (url, data) {
      const resContent = await get(url, data)
      if (resContent.state) {
        this.tableData = resContent.list
        this.total = resContent.count
      } else {
        this.tableData = []
      }
    },
    currentChange (val) {
      if (val !== this.page) {
        this.page = val
        this.getList()
      }
    }
  },
  created () {
    this.getList()
  },
  computed: {
    ...mapGetters([
      'isState'
    ])
  }
}
</script>
<style lang="less" scoped>
.postsList {
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
