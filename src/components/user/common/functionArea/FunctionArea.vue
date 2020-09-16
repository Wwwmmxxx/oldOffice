<template>
  <div id="functionArea">
    <el-row :gutter="20">
      <el-col :span="2">
        <el-button icon="el-icon-success" @click="approval">应用审批</el-button>
      </el-col>

      <el-col :span="2">
        <el-button icon="el-icon-error">应用禁止</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "FunctionArea",
  props:{
    selectedRows:{
      type:Array
    }
  },
  methods: {
    approval(){
      if(this.selectedRows.length !== 1){
        this.$message.error('无法进行审批，请选择单个案件进行审批');
      }
    }
  },
};
</script>

<style>
</style>
