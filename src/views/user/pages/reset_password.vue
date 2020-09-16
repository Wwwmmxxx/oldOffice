<template>

  <div class="form_container">
      <h2>修改密码</h2>
      <el-form ref="chgForm" :model="chgPasswordData" :rules="rules" label-width="100px" class="form_box">

        <el-form-item label="当前密码" prop="old_password"> 
          <el-input type="password" maxLength="30" v-model.trim="chgPasswordData.old_password"/>
        </el-form-item>

        <el-form-item label="重置密码" prop="new_password">
          <el-input type="password" maxLength="30" v-model.trim="chgPasswordData.new_password"/>
        </el-form-item>

        <el-form-item label="确认密码" prop="confirm_password">
          <el-input type="password" maxLength="30" v-model.trim="chgPasswordData.confirm_password"/>
        </el-form-item>

        <el-form-item class="form_button">
          <el-button type="primary" @click="back_page">返回</el-button>
          <el-button type="info" @click="change_password">确认</el-button>
        </el-form-item>

      </el-form>
  </div>
</template>

<script>
  /**
   * 只能包含字母数字
   */
  const validatePass  = (rule, value, callback) => {
    // let re = /^[a-z0-9A-Z.@_-]*$/;
    let re = /^[a-zA-Z0-9]*$/;
    if (!value || re.test(value)) { callback() }
    callback(new Error("只能输入英数字母!"))
  }

let chkRules = [
    { required: true, message: '此项目不能为空！', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
    { validator: validatePass, trigger: 'blur' }
  ]
import {changePassword} from '../../../http/axios'
import md5 from 'js-md5';
export default {

  data() {
    return {
      chgPasswordData: {
          old_password:null,
          new_password:null,
          confirm_password:null,
      },
      rules: {
          old_password:chkRules,
          new_password:chkRules,
          confirm_password:chkRules,
      }
    };
  },
  methods: {
    change_password() {
      this.$refs.chgForm.validate(valid=>{
          if(valid){
              if(this.invalidateNewPassword()){
                  return;
              }else{
                  this.execute_change_password();
              }
          }
      })
    },

    async execute_change_password(){
        try{
            let userid = 1;//TODO WangLi 修改成对应的ID
            let password_infos = {};
            password_infos.old = md5(this.chgPasswordData.old_password);
            password_infos.new1 = md5(this.chgPasswordData.new_password);
            password_infos.new2 = md5(this.chgPasswordData.confirm_password);
            await changePassword(userid, password_infos);
            this.$message.success('密码修改成功！');
        }catch(e){
            console.error(e);
            this.$message.error('密码修改失败！');
        }
    },

    invalidateNewPassword(){
        if(this.chgPasswordData.new_password !== this.chgPasswordData.confirm_password){
            this.$message.error('新密码2次输入不一致！');
            return true
        }else{
            return false
        } 
    },

    back_page() {
        this.$refs.chgForm.resetFields();
    }
  }
};
</script>

<style>
.form_container {
  width: 450px;
  height: 320px;
  
  background: #bcc7df;

  text-align:center;

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
