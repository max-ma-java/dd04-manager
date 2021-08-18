<template>
  <div>
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
        <el-table-column align="center" prop="const_key" fixed label="序列号">
        </el-table-column>
        <el-table-column align="center" prop="const_key" label="常量id">
        </el-table-column>
        <el-table-column align="center" prop="const_name" label="常量名">
        </el-table-column>
        <el-table-column align="center" prop="const_value" label="常量值">
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

    <el-dialog title="编辑内容" :visible.sync="dialogFormVisible">
      <el-form
        :model="userForm"
        ref="userForm"
        :rules="rules"
        label-position="left"
      >
        <el-form-item label="常量值" prop="const_value">
          <el-input v-model="userForm.const_value" auto-complete="off">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="confirmAddUser(userForm)"
          >确 定</el-button
        >
      </div>
    </el-dialog>

    <el-dialog title="添加" :visible.sync="dialogFormVisible1">
      <el-form
        :model="userForm1"
        ref="userForm1"
        :rules="rules"
        label-position="left"
      >
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
        <el-button type="primary" @click="confirmAddRow(userForm1)"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "constSetting",
  data() {
    return {
      tableDate: [],
      userForm: {
        auto_increment_id:"",
        const_key:"",
        const_name:"",
        const_value:"",
        create_employee:"",
        create_date:"",
        update_employee:"",
        update_date:"",
      },
      userForm1: {
        auto_increment_id: "",
        const_key: "",
        const_name: "",
        const_value: "",
        create_employee: "",
      },
      dialogFormVisible: false,
      dialogFormVisible1: false,
      rules: {
        const_value: [
          { required: true, message: "请输入常量", trigger: "blur" },
        ],
        const_key: [{ required: true, message: "请输入常量", trigger: "blur" }],
        const_name: [
          { required: true, message: "请输入常量", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.sear();
  },
  methods: {
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
    addrow() {
      this.data = {
        const_value: "",
      };
      console.log(this.data);
      this.dialogFormVisible1 = true;
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
    deleteData(row) {
      this.data = {
        id: row.id,
        _id: row._id,
      };
      this.$confirm("确定删除?", "提示", {
        type: "warning",
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          this.axios
            .delete("dd04-manage/api/v1/tmcs/delete", {
              params: {
                incrementId: this.$store.state.userInfo.incrementId,
              },
            })
            .then((res) => {
              this.dialogFormVisible = false;
              if (res.data.body.code == "20000") {
                console.log(res);
                this.$message({
                  message: "删除成功",
                  type: "success",
                });
              } else {
                this.$message({
                  message: "删除失败",
                });
              }
            });
          this.sear();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
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
              autoIncrementId: this.userForm.auto_increment_id,
              constKey: this.userForm.const_key,
              constName: this.userForm.const_name,
              constValue: this.userForm.const_value,
              createEmployee: this.userForm.create_employee,
              createDate: this.userForm.create_date,
              updateEmployee: this.userForm.update_employee,
              updateDate: this.userForm.update_date,
            })
            .then((res) => {
              console.log(res);
              this.dialogFormVisible = false;
              if (res.data.body.code == "20000") {
                this.$message({
                  message: "编辑成功",
                  type: "success",
                });
                this.sear();
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
          autoIncrementId: this.userForm1.auto_increment_id,
          constKey: this.userForm1.const_key,
          constName: this.userForm1.const_name,
          constValue: this.userForm1.const_value,
          createEmployee: this.userForm1.create_employee,
        };
        if (valid) {
          this.axios({
            url: "dd04-manage/api/v1/tmcs/add",
            headers: {
              "Content-Type": "	application/json",
            },
            method: "post",
            data: JSON.stringify(params),
          })
            // this.axios
            //   .post("dd04-manage/api/v1/tmcs/add", JSON.stringify(params))
            .then((res) => {
              console.log(res);
              this.dialogFormVisible1 = false;
              if (res.data.body.code == "20000") {
                this.$message({
                  message: "添加成功",
                  type: "success",
                });
                this.sear();
              } else {
                this.$message({
                  message: "添加失败",
                });
              }
              this.sear();
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
