<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-row style="text-align;left:0px;">
          <el-col :span="6" style="margin-left: 2%">
            <div class="grid-content bg-purple-dark">
              <span class="ziti">检索条件</span>
            </div>
          </el-col>
        </el-row>
      </div>

      <div>
        <el-row :gutter="10">
          <el-col :span="50">
            <el-form
              class="demo-form-inline"
              label-width="100px"
              style="text-align: center"
            >
              <el-col :span="10">
                <el-form-item label="页面名称:">
                  <el-select
                    v-model="value1"
                    size="small"
                    placeholder="请选择页面名称"
                  >
                    <el-option
                      v-for="item in option"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="项目名称:">
                  <el-select
                    v-model="value2"
                    size="small"
                    placeholder="请选择页面名称"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-button
                  class="Login"
                  icon="el-icon-search"
                  type="primary"
                  size="small"
                  >搜索</el-button
                >
              </el-col>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <br />
    <br />
    <div>
      <template>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <el-row>
              <el-col style="margin-left: 2%" :span="23">
                <div>
                  <span class="ziti"
                    >分类信息
                    <el-button
                      icon="el-icon-plus"
                      type="primary"
                      plain
                      size="small"
                      style="float: right"
                      @click="sear()"
                      >新增</el-button
                    >
                  </span>
                </div>
              </el-col>
            </el-row>
          </div>
          <el-table
            :header-cell-style="{ background: '#F3F4F7' }"
            style="width: 100%"
          >
            <el-table-column align="center" fixed label="字段分类名id">
            </el-table-column>
            <el-table-column align="center" label="字段分类名">
            </el-table-column>
            <el-table-column align="center" label="字段名id"> </el-table-column>
            <el-table-column align="center" label="字段名"> </el-table-column>
            <el-table-column align="center" label="新建者"> </el-table-column>
            <el-table-column align="center" label="新建日期"> </el-table-column>
            <el-table-column align="center" label="修改者"> </el-table-column>
            <el-table-column align="center" label="修改日期"> </el-table-column>
            <el-table-column align="center" fixed="right" label="操作">
              <template>
                <el-button
                  size="mini"
                  type="primary"
                  icon="el-icon-edit"
                ></el-button>
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  size="mini"
                ></el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "classificationSetting",
  data() {
    return {
        value2: [],
        option: [
        {
          value: "选项1",
          label: "1",
        },
        {
          value: "选项2",
          label: "2",
        },
        {
          value: "选项3",
          label: "3",
        },
        {
          value: "选项4",
          label: "4",
        },
      ],
      options: [
        {
          value: "选项1",
          label: "项目状态",
        },
        {
          value: "选项2",
          label: "客户号码",
        },
        {
          value: "选项3",
          label: "所属Group",
        },
        {
          value: "选项4",
          label: "合同状态",
        },
      ],
      value1: [],
    };
  },
};
</script>
