<template>
  <div class="videoArray">
    <div class="list-title">
      <h3>动漫列表</h3>
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
          prop="comic_name"
          label="动漫名字"
          width="180">
        </el-table-column>
        <el-table-column
          prop="images_link"
          label="图片链接地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="comic_count"
          label="动漫集数"
          width="90">
        </el-table-column>
        <el-table-column
          prop="comic_date"
          label="首播日期"
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
  </div>
</template>
<script>
export default {
  name: 'videoArray',
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    handleEdit (index, row) {
      this.$router.push({path: '/admin/editVideoArray', query: { id: row.id }})
    },
    handleDelete (index, row) {
      this.$confirm('此操作将永久删除该动漫, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {

      })
    }
  }
}
</script>
<style lang="less" scoped>
.videoArray {
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
