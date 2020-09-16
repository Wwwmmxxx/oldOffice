<template>
  <el-table :data="tableData" stripe @select="onSelect">
    <el-table-column type="selection"></el-table-column>
    <el-table-column label="id" prop="id" v-if="false"></el-table-column>
    <el-table-column label="应用名称" prop="applicationName"></el-table-column>
    <el-table-column label="描述" prop="introduction"></el-table-column>
    <el-table-column label="表单状态" prop="status" width="100px">
      <template slot-scope="scope">{{scope.row.status | statusShow}}</template>
    </el-table-column>
    <el-table-column label="期望纳期" prop="deadline" width="150px"></el-table-column>
    <el-table-column label="回调地址(生产环境用)" prop="redirectAddress1"></el-table-column>
    <el-table-column label="回调地址(开发环境用)" prop="redirectAddress2"></el-table-column>
    <el-table-column label="操作" width="200px">
      <template slot-scope="scope">
        <el-link>
          <i class="el-icon-edit"></i>编辑
        </el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link @click="toDetail(scope.row)">
          <i class="el-icon-view"></i>查看
        </el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link>
          <i class="el-icon-delete"></i>删除
        </el-link>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {adminGetAllData} from "@/http/adminAxios"

export default {
  name: "DataTable",
  data() {
    return {
      tableData: [],
      selectedRows:[]
    };
  },
  methods:{
    onSelect(selection,row){
      let selected = selection.length && selection.indexOf(row) !== -1;
      if(selected){
        this.selectedRows.push(row.id);
      }else{
        let index = this.selectedRows.indexOf(row.id);
        if(index > -1){
          this.selectedRows.splice(index,1);
        }
      }
      this.$emit('onSelect',this.selectedRows);
    },
    toDetail(rowData){
      const id = rowData.id;
      this.$router.push({name: '应用详细信息', params: {id}});
    }
  },
  created(){
    // 1. 请求所有的数据
    adminGetAllData().then(res=>{
      let data = res.data;
      this.tableData.push(data.data);
    })
  },
  filters:{
    statusShow:function(value){
      switch(value){
        case 0: return '已停用';
        case 1: return '作成中';
        case 2: return '审批中';
        case 3: return '以接入';
        case 4: return '已驳回';
      }
    }
  }
};
</script>

<style>
</style>
