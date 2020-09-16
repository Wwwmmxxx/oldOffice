<template>
  <process-form class="approve-form" :table-title="tableTitle">
    <el-form
      label-position="left"
      :inline="true"
      label-width="150px"
      :model="approveData"
      :label-position="right"
    >
      <el-row>
        <el-col :span="6" :offset="6">
          <el-form-item label="应用名称">
            <el-input style="width:300px" :disabled="true" v-model="approveData.appName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="申请时间">
            <el-date-picker style="width:300px" :disabled="true" v-model="approveData.applyTime"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :offset="6">
          <el-form-item label="功能介绍">
            <el-input
              style="width:765px"
              type="textarea"
              :disabled="true"
              v-model="approveData.desc"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :offset="6">
          <el-form-item label="本地重定向地址1">
            <el-input style="width:765px" :disabled="true" v-model="approveData.redirect1"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :offset="6">
          <el-form-item label="本地重定向地址2">
            <el-input style="width:765px" :disabled="true" v-model="approveData.redirect2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :offset="6" :span="6">
          <el-form-item label="联系人姓名">
            <el-input style="width:300px" :disabled="true" v-model="approveData.contactor"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="联系人邮箱">
            <el-input style="width:300px" :disabled="true" v-model="approveData.email"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :offset="6">
          <el-form-item label="联络人内部分机号">
            <el-input style="width:300px" :disabled="true" v-model="approveData.phone"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <el-row>
        <el-col :offset="6">
          <el-form-item label="回调地址(生产环境用)">
            <el-input style="width:765px" v-model="approveData.proAdd"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :offset="6">
          <el-form-item label="回调地址(开发环境用)">
            <el-input style="width:765px" v-model="approveData.devAdd"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :offset="6">
          <el-form-item label="驳回理由">
            <el-input type="textarea" style="width:765px" v-model="approveData.refuse"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row style="margin-top:30px">
        <el-col :span="4" :offset="9">
          <el-button type="success" icon="el-icon-check">审批通过</el-button>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-button type="danger" icon="el-icon-close">驳回</el-button>
        </el-col>
      </el-row>
    </el-form>
  </process-form>
</template>

<script>
import ProcessForm from "@/components/user/common/processForm/ProcessForm";

export default {
  name: "AppApproval",
  components: {
    ProcessForm,
  },
  data() {
    return {
      tableTitle: "应用申请审批",
      approveData: {
        appName: null,
        applyTime: null,
        desc: null,
        redirect1: null,
        redirect2: null,
        contactor: null,
        email: null,
        phone: null,
        proAdd: null,
        devAdd: null,
      },
    };
  },
};
</script>

<style>
</style>
