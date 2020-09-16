<template>
  <div class="process-table">
    <div class="back-icon" @click="goBack">
      <i class="el-icon-back"></i>
    </div>
    <h2>{{tableTitle}}</h2>

    <div class="process-form">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProcessForm",
  props: {
    tableTitle: {
      type: String,
      default: "Error",
    },
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  }
};
</script>

<style>
.back-icon {
  margin: 44px 20px 0px 20px;
}

.back-icon :hover{
  cursor: pointer;
}

.back-icon i {
  font-size: 200%;
}

.process-table h2 {
  text-align: center;
  margin: 30px 20px;
}
</style>
