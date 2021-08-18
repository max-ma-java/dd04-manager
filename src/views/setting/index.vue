<template>
  <div class="container" style="width: 100%">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="项目可选值设置表" name="first">
        <item-setting />
      </el-tab-pane>
      <el-tab-pane label="常量设定表" name="second">
        <const-setting />
      </el-tab-pane>
      <el-tab-pane label="分类表" name="Third">
        <classification-setting />
      </el-tab-pane>
      <!-- <el-tab-pane label="项目可选值设置表" name="first">
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
                        >项目信息
                        <el-button
                          icon="el-icon-plus"
                          type="primary"
                          plain
                          size="small"
                          style="float: right"
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
                <el-table-column align="center" fixed label="序列号">
                </el-table-column>
                <el-table-column align="center" label="字段分类名id">
                </el-table-column>
                <el-table-column align="center" label="字段名id">
                </el-table-column>
                <el-table-column align="center" label="删除区分">
                </el-table-column>
                <el-table-column align="center" label="显示顺序">
                </el-table-column>
                <el-table-column align="center" label="字段可选值">
                </el-table-column>
                <el-table-column align="center" label="说明"> </el-table-column>
                <el-table-column align="center" label="新建者">
                </el-table-column>
                <el-table-column align="center" label="新建日期">
                </el-table-column>
                <el-table-column align="center" label="修改者">
                </el-table-column>
                <el-table-column align="center" label="修改日期">
                </el-table-column>
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
      </el-tab-pane>




      <el-tab-pane label="常量设定表" name="second">
        <div>
          <template>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <el-row>
                  <el-col style="margin-left: 2%" :span="23">
                    <div>
                      <span class="ziti"
                        >常量信息
                        <el-button
                        @click="addrow()"
                          icon="el-icon-plus"
                          type="primary"
                          plain
                          size="small"
                          style="float: right"
                          >新增</el-button
                        >
                      </span>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <el-table
                :data="tableDate"
                :header-cell-style="{ background: '#F3F4F7' }"
                style="width: 100%"
              >
                <el-table-column
                  align="center"
                  prop="const_key"
                  fixed
                  label="序列号"
                >
                </el-table-column>
                <el-table-column align="center" prop="const_key" label="常量id">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="const_name"
                  label="常量名"
                >
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="const_value"
                  label="常量值"
                >
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="barrioid"
                  fixed="right"
                  label="操作"
                >
                  <template slot-scope="scope">
                    <el-button
                      @click="adduser(scope.row, scope.$index)"
                      size="mini"
                      type="primary"
                      icon="el-icon-edit"
                    ></el-button>
                    <el-button
                      @click="deleteData(scope.row)" 
                      type="danger"
                      icon="el-icon-delete"
                      size="mini"
                    ></el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-card>
          </template>

          <template>
            <el-dialog title="编辑内容" :visible.sync="dialogFormVisible">
              <el-form
                :model="userForm"
                ref="userForm"
                :rules="rules"
                label-position="left">
                <el-form-item label="常量值" prop="const_value">
                  <el-input
                    v-model="userForm.const_value"
                    auto-complete="off">
                  </el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="cancel()">取 消</el-button>
                <el-button type="primary" @click="confirmAddUser(userForm)">确 定</el-button >
              </div>
            </el-dialog>
          </template>


          <template>
            <el-dialog title="添加" :visible.sync="dialogFormVisible1">
              <el-form
                :model="userForm1"
                ref="userForm1"
                :rules="rules"
                label-position="left">
                <el-form-item label="常量值" prop="const_value">
                  <el-input v-model="userForm1.const_value" auto-complete="off">
                  </el-input>
                </el-form-item>
                <el-form-item label="常量id" prop="const_key">
                  <el-input v-model="userForm1.const_key" auto-complete="off">
                  </el-input>
                </el-form-item>
                <el-form-item label="常量名" prop="const_name">
                  <el-input v-model="userForm1.const_name" auto-complete="off">
                  </el-input>
                </el-form-item>            
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="cancel()">取 消</el-button>
                <el-button type="primary" @click="confirmAddRow(userForm1)">确 定</el-button >
              </div>
            </el-dialog>
          </template>
        </div>
      </el-tab-pane> -->

      <!-- <el-tab-pane label="分类表" name="third">
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
                <el-table-column align="center" label="字段名id">
                </el-table-column>
                <el-table-column align="center" label="字段名">
                </el-table-column>
                <el-table-column align="center" label="新建者">
                </el-table-column>
                <el-table-column align="center" label="新建日期">
                </el-table-column>
                <el-table-column align="center" label="修改者">
                </el-table-column>
                <el-table-column align="center" label="修改日期">
                </el-table-column>
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
      </el-tab-pane> -->
    </el-tabs>
  </div>
</template>

<script>
import itemSetting from './itemSetting'
import classificationSetting from './classification'
import constSetting from './constSetting'
export default {
  data() {
    return {
      // // dialogFormVisible: false,
      // // dialogFormVisible1: false,
      // // option: [
      // //   {
      // //     value: "选项1",
      // //     label: "1",
      // //   },
      // //   {
      // //     value: "选项2",
      // //     label: "2",
      // //   },
      // //   {
      // //     value: "选项3",
      // //     label: "3",
      // //   },
      // //   {
      // //     value: "选项4",
      // //     label: "4",
      // //   },
      // // ],
      // // options: [
      // //   {
      // //     value: "选项1",
      // //     label: "项目状态",
      // //   },
      // //   {
      // //     value: "选项2",
      // //     label: "客户号码",
      // //   },
      // //   {
      // //     value: "选项3",
      // //     label: "所属Group",
      // //   },
      // //   {
      // //     value: "选项4",
      // //     label: "合同状态",
      // //   },
      // // ],
      // // value1: [],
      // // value2: [],
      // activeName: "first",
      // // tableDate: [],
      // // userForm: {
      // //   auto_increment_id:"",
      // //   const_key:"",
      // //   const_name:"",
      // //   const_value:"",
      // //   create_employee:"",
      // //   create_date:"",
      // //   update_employee:"",
      // //   update_date:"",
      // // },
      // // userForm1: {
      // //   auto_increment_id:"",
      // //   const_key:"",
      // //   const_name:"",
      // //   const_value:"",
      // //   create_employee:"",
      // // },
      // // rules: {
      // //   const_value: [
      // //     { required: true, message: "请输入常量", trigger: "blur" },
      // //   ],
      // //   const_key: [
      // //     { required: true, message: "请输入常量", trigger: "blur" },
      // //   ],
      // //   const_name: [
      // //     { required: true, message: "请输入常量", trigger: "blur" },
      // //   ],
      // // },
    };
  },
  components:{
    itemSetting,
    constSetting,
    classificationSetting
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },

    sear() {
      this.axios
        .get("dd04-manage/api/v1/tmcs/search", {
          params: {},
        })
        .then((res) => {
          console.log(res);
          let arr = [];
          let result = res.data.body.data.list;
          for (let i in result) {
            arr.push(result[i]);
          }
          this.tableDate = arr;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    adduser(row, _index) {
      this.listIndex = _index;
      this.userForm = row;
      this.data = {
        id: row.id,
        _id: row._id,
      };
      console.log(this.data);
      this.dialogFormVisible = true;
    },
    addrow() {
      this.data = {
        const_value:''
      };
      console.log(this.data);
      this.dialogFormVisible1 = true;
    },

    cancel() {
      this.dialogFormVisible = false;
      this.dialogFormVisible1 = false;
    },
    confirmAddUser() {
      this.$refs.userForm.validate((valid) => {
        if (valid) {
          this.axios
            .post("dd04-manage/api/v1/tmcs/update", {
                incrementId: this.$store.state.userInfo.incrementId,
                autoIncrementId:this.userForm.auto_increment_id,
                constKey:this.userForm.const_key,
                constName:this.userForm.const_name,
                constValue:this.userForm.const_value,
                createEmployee:this.userForm.create_employee,
                createDate:this.userForm.create_date,
                updateEmployee:this.userForm.update_employee,
                updateDate:this.userForm.update_date
            })
            .then((res) => {
              console.log(res)
              this.dialogFormVisible = false;
              if (res.data.body.code == "20000") {
                this.$message({
                  message: "编辑成功",
                  type: "success",
                });
                this.sear()
              } else {
                this.$message({
                  message: "编辑失败",
                });
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
        confirmAddRow() {
      this.$refs.userForm1.validate((valid) => {
        let params = {
                incrementId: this.$store.state.userInfo.incrementId,
                userId: this.$store.state.userInfo.incrementId,
                autoIncrementId:this.userForm1.auto_increment_id,
                constKey:this.userForm1.const_key,
                constName:this.userForm1.const_name,
                constValue:this.userForm1.const_value,
                createEmployee:this.userForm1.create_employee,
            }
        if (valid) {
          this.axios({
            url : 'dd04-manage/api/v1/tmcs/add' , 
            headers: {
                'Content-Type': '	application/json'
            },
            method : 'post',
            data : JSON.stringify(params)
          })
          // this.axios
          //   .post("dd04-manage/api/v1/tmcs/add", JSON.stringify(params))
            .then((res) => {
              console.log(res)
              this.dialogFormVisible1 = false;
              if (res.data.body.code == "20000") {
                this.$message({
                  message: "添加成功",
                  type: "success",
                });
                this.sear()
                 } else {
                this.$message({
                  message: "添加失败",
                });
                }
              this.sear()
           });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
        deleteData(row) {
      this.data={
        id: row.id,
        _id: row._id
      };
      this.$confirm('确定删除?', '提示', {
        type: 'warning',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        this.axios.delete("dd04-manage/api/v1/tmcs/delete", {
          params: {
            incrementId: this.$store.state.userInfo.incrementId
          }
        }).then((res) => {
        this.dialogFormVisible=false;
        if(res.data.body.code=="20000") {
          console.log(res)
            this.$message({
              message: '删除成功',
              type: 'success'
            });
        }
        else {
            this.$message({
              message: '删除失败'
            });
        }
        })
        this.sear()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  },
  mounted() {
    document.body.style.backgroundColor = "#F3F4F7";
  },
  created() {
    // this.sear();
  },
};
</script>

<style lang="scss" scoped>
.Login {
  height: 31px;
  float: right;
  margin-top: 5px;
  margin-left: 1px;
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 99%;
}
.table {
  border-radius: 4px;
  overflow: hidden;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.ziti {
  font-weight: bold;
}
</style>