<template>
  <el-form ref="searchForm" :model="searchData" :inline="true" label-width="100px">
    <el-row>
      <el-form-item label="表单状态">
        <el-select v-model="searchData.status" clearable>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="应用名称">
        <el-input v-model="searchData.name"></el-input>
      </el-form-item>

      <el-form-item label="应用联系人">
        <el-input v-model="searchData.contactor"></el-input>
      </el-form-item>
    </el-row>

    <el-row>
      <el-form-item label="申请日期">
        <el-date-picker
          type="daterange"
          v-model="searchData.range"
          range-separator="至"
          start-placeholde="开始日期"
          end-placeholde="结束日期"
        ></el-date-picker>
      </el-form-item>

      <el-button icon="el-icon-search" @click="executeSearch" ref="searchButton" circle></el-button>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: "SearchArea",
  data() {
    return {
      searchData: {
        status: null,
        name: null,
        contactor: null,
        range: null,
      },
      options: [
        {
          label: "申请中",
          value: "apply",
        },
        {
          label: "已禁止",
          value: "forbidden",
        },
      ],
    };
  },
  methods: {
    executeSearch() {},
  },
};
</script>

<style>
</style>
