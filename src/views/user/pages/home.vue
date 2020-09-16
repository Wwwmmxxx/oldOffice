<template>
  <div>
    <Navcon />
    <!-- <h1 class="main">主页面</h1> -->
      <div class="search-area">
      <search-area></search-area>
    </div>
    <div class="function-area" >
      <function-area :selectedRows="selectedRows"></function-area>
    </div>
    <div class="data-table" ref="dataTable">
      <data-table @onSelect="onSelect"></data-table>
    </div>
    <div class="pagination">
      <pagination></pagination>
    </div>
  </div>
</template>

<script>
import Navcon from "@/components/user/common/navcon";
import SearchArea from "@/components/user/common/searchArea/SearchArea";
import FunctionArea from "@/components/user/common/functionArea/FunctionArea";
import Pagination from "@/components/user/common/pagination/Pagination";

import SystemSetting from "@/views/admin/system_setting";
import DataTable from "@/components/user/common/dataTable/DataTable";
export default {
  components: {
    Navcon,
    SearchArea,
    SystemSetting,
    FunctionArea,
    DataTable,
    Pagination,
  },
  data(){
    return{
      selectedRows:[]
    }
  },
  methods:{
    onSelect(selectedRows){
      this.selectedRows = selectedRows;
    }
  }
};
</script>

<style scoped>
.main{
    margin-left: 50%;
    margin-top:400px;
}
.search-area {
  /* border: 1px solid #3e3e3e; */
  margin: 44px 20px 0px 20px;
  padding-top: 20px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 20%);
}

.function-area {
  margin: 30px 40px 30px 40px;
}

.data-table {
  margin: 0px 20px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 20%);
}

.pagination {
  margin: 20px 40px 0px 40px;
  text-align: right;
}
</style>