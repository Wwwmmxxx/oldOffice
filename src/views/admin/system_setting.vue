<template>
  <div class="form_container">
    <h2>邮件设定</h2>
    <el-form
      ref="settingForm"
      :model="settingData"
      :rules="rules"
      label-width="138px"
      class="form_box"
    >
      <el-form-item label="SMTP服务器地址" prop="server_address">
        <el-input maxLength="60" v-model.trim="settingData.server_address" />
      </el-form-item>

      <el-form-item label="认证账号" prop="user_name">
        <el-input maxLength="30" v-model.trim="settingData.user_name" />
      </el-form-item>

      <el-form-item label="认证密码" prop="user_pass">
        <el-input
          type="password"
          maxLength="30"
          v-model.trim="settingData.user_pass"
        />
      </el-form-item>

      <el-form-item label="端口号" prop="server_port">
        <el-input maxLength="5" v-model.trim="settingData.server_port" />
      </el-form-item>

      <el-form-item label="发件人" prop="mail_from">
        <el-input maxLength="60" v-model.trim="settingData.mail_from" />
      </el-form-item>

      <el-form-item class="form_button">
        <el-button type="info" @click="save_setting">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
const isPort = (rule, value, callback) => {
  let re = /^[0-9]*$/;
  if (!value || re.test(value)) {
    if (value < 1 || value > 65535) {
      callback(new Error("只能 1~65535 的数字！"));
    } else {
      callback();
    }
  }
  callback(new Error("只能输入正整数！"));
};

 /**
   * 只能包含字母数字
   */
  const isUserName  = (rule, value, callback) => {
    // let re = /^[a-z0-9A-Z.@_-]*$/;
    let re = /^[a-zA-Z0-9]*$/;
    if (!value || re.test(value)) { callback() }
    callback(new Error("只能输入英数字母!"))
  }

let chk_server_address = [
  { required: true, message: "此项目不能为空！", trigger: "blur" }
];
let chk_user_name = [
  { required: true, message: "此项目不能为空！", trigger: "blur" },
  { validator: isUserName, trigger: "blur" }
];
let chk_user_pass = [
  { required: true, message: "此项目不能为空！", trigger: "blur" },
  { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
];
let chk_server_port = [
  { required: true, message: "此项目不能为空！", trigger: "blur" },
  { validator: isPort, trigger: "blur" }
];
let chk_mail_from = [
  { required: true, message: "此项目不能为空！", trigger: "blur" },
  {
    type: "email",
    message: "请输入正确的邮箱地址",
    trigger: ["blur"]
  }
];

import { getSystemSettings, saveSystemSettings } from "../../http/axios";
export default {
  async created() {
    let settings = await getSystemSettings();
  },
  data() {
    return {
      settingData: {
        server_address: null,
        user_name: null,
        user_pass: null,
        server_port: null,
        mail_from: null
      },
      rules: {
        server_address: chk_server_address,
        user_name: chk_user_name,
        user_pass: chk_user_pass,
        server_port: chk_server_port,
        mail_from: chk_mail_from
      }
    };
  },
  methods: {
    save_setting() {
      this.$refs.settingForm.validate(valid => {
        if (valid) {
          this.execute_save_settings();
        }
      });
    },

    async execute_save_settings() {
      try {
        await saveSystemSettings(this.settingData);
        this.$message.success("设定成功！");
      } catch (e) {
        console.error(e);
        this.$message.error("设定失败！");
      }
    }
  }
};
</script>

<style>
.form_container {
  width: 480px;
  height: 480px;

  background: #bcc7df;

  text-align: center;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.form_box {
  position: absolute;
  bottom: 0px;
  width: 100%;

  padding: 0 20px;
  box-sizing: border-box;
}

.form_button {
  display: flex;
  justify-content: flex-end;
}
</style>
