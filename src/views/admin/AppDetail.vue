<template>
  <div>123</div>
</template>

<script>
import { adminGetOneData } from "@/http/adminAxios";

export default {
  name: "AppDetail",
  data() {
    return {
      app:{}
    };
  },
  created() {
    this.getDetailData();
  },
  methods: {
    getDetailData() {
      const id = this.$route.params.id;
      adminGetOneData(id).then(res=>{
        console.log(res.data)
      })
      
    },
  },
};
</script>


<style scoped>
</style>
