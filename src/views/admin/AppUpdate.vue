<template>
  <process-form class="update-form" :table-title="tableTitle">
    <el-form
      label-position="left"
      :inline="true"
      label-width="150px"
      :label-position="right"
      :model="updateData"
    >
      <el-row>
        <el-col>
          <el-form-item label="回调地址(生产环境用)">
            <el-input style="width:500px" v-model="updateData.proAdd"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-form-item label="回调地址(开发环境用)">
            <el-input style="width:500px" v-model="updateData.devAdd"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-button type="success">确认修改</el-button>
        </el-col>
      </el-row>
    </el-form>
  </process-form>
</template>

<script>
import ProcessForm from "@/components/user/common/processForm/ProcessForm";

export default {
  name: "AppUpdate",
  components: {
    ProcessForm,
  },
  data() {
    return {
      tableTitle: "应用信息修改",
      updateData: {
        proAdd: null,
        devAdd: null,
      },
    };
  },
};
</script>

<style>
.update-form .el-form {
  margin: 90px 20px 0px 20px;
  text-align: center;
}

.update-form .el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-top: 75px;
}
</style>
