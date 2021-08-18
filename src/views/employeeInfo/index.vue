<template>
  <div>
    <!-- 检索条件 -->
    <el-card class="card">
      <div slot="header" class="clearfix">
        <span>检索条件</span>
      </div>
      <el-form class="from">
        <span style="padding: 8px 0px">姓名：</span>
        <el-form-item>
          <el-input
            v-model="formInline.employreeName"
            placeholder="请输入姓名"
            style="width: 144px; height: 42px"
          ></el-input>
        </el-form-item>
        <el-form-item class="items">
          <span style="padding: 8px 0px">学历：</span>
          <el-select
            v-model="formInline.qualifications"
            placeholder="请选择学历"
            style="width: 144px; height: 42px; margin-left: 1px"
          >
            <el-option
              :label="item.label"
              :value="item.value"
              v-for="item in chanelList"
              :key="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="items">
          <span style="padding: 8px 10px">组别：</span>
          <el-select
            v-model="formInline.groupName"
            placeholder="请选择组别"
            style="width: 144px; height: 42px; margin-left: 1px"
          >
            <el-option
              :label="item.label"
              :value="item.value"
              v-for="item in groupNamelist"
              :key="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="items">
          <span style="padding: 8px 10px">岗位：</span>
          <el-select
            v-model="formInline.workType"
            placeholder="请选择岗位"
            style="width: 144px; height: 42px; margin-left: 1px"
          >
            <el-option
              :label="item.label"
              :value="item.value"
              v-for="item in workTypelist"
              :key="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="items">
          <span style="padding: 8px 10px">人事关系：</span>
          <el-select
            v-model="formInline.ownerCompany"
            placeholder="请选择人事关系"
            style="width: 144px; height: 42px; margin-left: 1px"
          >
            <el-option
              :label="item.label"
              :value="item.value"
              v-for="item in ownerCompanylist"
              :key="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-button type="primary" class="btnsc" @click="search()">
        <i class="el-icon-search" style="padding-right: 6px"></i>
        搜索</el-button
      >
    </el-card>
    <!-- 表格 -->
    <el-card class="cardtable">
      <div class="message">
        <p class="title">员工信息</p>
        <div class="righttitle">
          <div class="Bnt">
            <el-button
              @click="Useradd"
              class="btnadd"
              style="
                width: 104px;
                height: 32px;
                padding: 9px 2px;
                border-color: #435fbc;
                color: #435fbc;
              "
            >
              <i class="el-icon-plus" style="padding-right: 6px"></i>
              新增人员
            </el-button>
          </div>
          <el-col :span="10">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link" style="cursor: pointer">
                <i class="el-icon-arrow-down el-icon--right"></i>
                条件选择
              </span>
              <!-- <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu> -->
               <el-dropdown-menu slot="dropdown" style="width:200px;">
               <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" >全选</el-checkbox>
  <div style="margin: 15px 0;"></div>
              <!-- <div style="margin: 10px 10"></div> -->
              <el-checkbox-group
              class="group"
                v-model="checkedCities"
                @change="handleCheckedCitiesChange"
              >
                 
                <el-checkbox v-for="city in cities" :label="city" :key="city" style="marrgin:25px">{{
                  city
                }}</el-checkbox>
              </el-checkbox-group>
               </el-dropdown-menu> 

            </el-dropdown>
          </el-col>
        </div>
      </div>

      <!-- 表格数据 -->
      <el-table
        :header-cell-style="{ background: '#F3F4F7' }"
        class="tableitem"
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column
          type="index"
          align="center"
          prop="accessCardId"
          label="序列号"
          width="80"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="deleteFlg"
          label="状态"
          width="80"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="employeeAddress"
          label="住址"
          width="160"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="ownerCompany"
          label="人事关系"
          width="120"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="companyAffiliation"
          label="人事关系区分"
          width="90"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="nativePlace"
          label="籍贯"
          width="90"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="employeeName"
          label="姓名"
          width="90"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="employeeNumber"
          label="工号"
          width="90"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="groupName"
          label="组别"
          width="90"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="employeeLevel"
          label="级别"
          width="90"
        >
        </el-table-column>
        <el-table-column align="center" prop="workType" label="岗位" width="90">
        </el-table-column>
        <el-table-column
          align="center"
          prop="employeeBirthday"
          label="出生年月"
          width="150"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="employeePhoneNumber"
          label="联系电话"
          width="120"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="idNumber"
          label="身份证号"
          width="180"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="employeeSex"
          label="性别"
          width="90"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="qualifications"
          label="学历"
          width="90"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="deleteFlg"
          label="删除区分"
          width="90"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="statusOnJob"
          label="在职状态"
          width="90"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="shanghaiFlg"
          label="户籍状态"
          width="90"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="maritalStatus"
          label="婚姻状况"
          width="90"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="childrenStatus"
          label="子女状况"
          width="90"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="employeeAddress"
          label="住址"
          width="90"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="graduationDate"
          label="毕业日期"
          width="90"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="graduationCollege"
          label="毕业学校"
          width="90"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="graduationSpeciality"
          label="专业"
          width="90"
        >
        </el-table-column>
        <el-table-column align="center" prop="degree" label="学位" width="90">
        </el-table-column>
        <el-table-column
          align="center"
          prop="workBeginDate"
          label="开始工作日期"
          width="120"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="hyronBeginDate"
          label="入职海隆日期"
          width="120"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="hyronEndDate"
          label="离职海隆日期"
          width="120"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="dd04BeginDate"
          label="入职部门日期"
          width="120"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="dd04EndDate"
          label="离职部门日期"
          width="120"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="loginUser"
          label="登录用户名"
          width="120"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="loginPassword"
          label="登录密码"
          width="120"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="updateRemarks"
          label="修改说明"
          width="120"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="updateEmployee"
          label="修改者"
          width="120"
        >
        </el-table-column>
        <el-table-column
          align="center"
          prop="updateDate"
          label="修改日期"
          width="120"
        >
        </el-table-column>
        <el-table-column align="center" fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <div
              @click="edit(scope.row)"
              class="el-icon-edit"
              style="padding: 0px 10px; cursor: pointer"
            ></div>
            <div
              @click="deletelistid(scope.row.incrementId)"
              class="el-icon-delete"
              style="padding: 0px 10px; cursor: pointer"
            ></div>
          </template>
        </el-table-column>
      </el-table>

      <!-- 新增员工dialog对话框 -->
      <el-dialog title="添加员工" :visible.sync="dialogFormVisibleadd">
        <el-form :model="form">
          <div class="add">
            <el-form-item label="员工序列号：" :label-width="formLabelWidth">
              <el-input
                v-model="form.incrementId"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item
              label="修改历史序列号："
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="form.historyIncrementId"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="删除区分：" :label-width="formLabelWidth">
              <el-input v-model="form.deleteFlg" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="在职状态：" :label-width="formLabelWidth">
              <!-- <el-input
                v-model="form.statusOnJob"
                autocomplete="off"
              ></el-input> -->
              <el-select v-model="form.statusOnJob" placeholder="请选择活动区域">
      <el-option label="在职" value=""></el-option>
      <el-option label="离职" value=""></el-option>
    </el-select>
            </el-form-item>

            <el-form-item label="人事关系区分：" :label-width="formLabelWidth">
              <el-input
                v-model="form.companyAffiliation"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="人事关系：" :label-width="formLabelWidth">
              <el-input
                v-model="form.ownerCompany"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="姓名：" :label-width="formLabelWidth">
              <el-input
                v-model="form.employeeName"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="工号：" :label-width="formLabelWidth">
              <el-input
                v-model="form.employeeNumber"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="级别：" :label-width="formLabelWidth">
              <el-input
                v-model="form.employeeLevel"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="岗位：" :label-width="formLabelWidth">
              <el-input v-model="form.workType" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="性别：" :label-width="formLabelWidth">
              <el-input
                v-model="form.employeeSex"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="出生日期：" :label-width="formLabelWidth">
              <el-input
                v-model="form.employeeBirthday"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="联系电话：" :label-width="formLabelWidth">
              <el-input
                v-model="form.employeePhoneNumber"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="身份证号：" :label-width="formLabelWidth">
              <el-input v-model="form.idNumber" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="籍贯：" :label-width="formLabelWidth">
              <el-input
                v-model="form.nativePlace"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="婚姻状况：" :label-width="formLabelWidth">
              <el-input
                v-model="form.maritalStatus"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="户籍状态：" :label-width="formLabelWidth">
              <el-input
                v-model="form.shanghaiFlg"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="子女状况：" :label-width="formLabelWidth">
              <el-input
                v-model="form.childrenStatus"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="住址：" :label-width="formLabelWidth">
              <el-input
                v-model="form.employeeAddress"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="毕业日期：" :label-width="formLabelWidth">
              <el-input
                v-model="form.graduationDate"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="毕业学校：" :label-width="formLabelWidth">
              <el-input
                v-model="form.graduationCollege"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="专业：" :label-width="formLabelWidth">
              <el-input
                v-model="form.graduationSpeciality"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="学历：" :label-width="formLabelWidth">
              <el-input
                v-model="form.qualifications"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="学位：" :label-width="formLabelWidth">
              <el-input v-model="form.degree" autocomplete="off"></el-input>
            </el-form-item>
            <!-- <el-form-item label="开始工作日期：" :label-width="formLabelWidth">
              <el-input
                v-model="form.workBeginDate"
                autocomplete="off"
              ></el-input>
            </el-form-item> -->

            <el-form-item label="门禁卡编号：" :label-width="formLabelWidth">
              <el-input
                v-model="form.accessCardId"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="登录用户名：" :label-width="formLabelWidth">
              <el-input v-model="form.loginUser" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="登录密码：" :label-width="formLabelWidth">
              <el-input
                v-model="form.loginPassword"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="修改说明：" :label-width="formLabelWidth">
              <el-input
                v-model="form.updateRemarks"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisibleadd = false">取 消</el-button>
          <el-button type="primary" @click="add()">确 定</el-button>
        </div>
      </el-dialog>

      <!-- 编辑员工dialog对话框 -->
      <el-dialog title="编辑员工" :visible.sync="dialogFormVisibleedit">
        <el-form :model="editform">
          <div class="add">
            <el-form-item label="员工序列号：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.incrementId"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item
              label="修改历史序列号："
              :label-width="formLabelWidth"
            >
              <el-input
                v-model="editform.historyIncrementId"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="删除区分：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.deleteFlg"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="在职状态：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.statusOnJob"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="人事关系区分：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.companyAffiliation"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="人事关系：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.ownerCompany"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="姓名：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.employeeName"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="工号：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.employeeNumber"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="级别：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.employeeLevel"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="岗位：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.workType"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="性别：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.employeeSex"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="出生日期：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.employeeBirthday"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="联系电话：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.employeePhoneNumber"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="身份证号：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.idNumber"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="籍贯：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.nativePlace"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="婚姻状况：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.maritalStatus"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="户籍状态：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.shanghaiFlg"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="子女状况：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.childrenStatus"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="住址：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.employeeAddress"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="毕业日期：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.graduationDate"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="毕业学校：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.graduationCollege"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="专业：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.graduationSpeciality"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="学历：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.qualifications"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="学位：" :label-width="formLabelWidth">
              <el-input v-model="editform.degree" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="门禁卡编号：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.accessCardId"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="登录用户名：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.loginUser"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="登录密码：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.loginPassword"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="修改说明：" :label-width="formLabelWidth">
              <el-input
                v-model="editform.updateRemarks"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisibleedit = false">取 消</el-button>
          <el-button type="primary" @click="editusers(editform)"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import { search1, Adduser, deleteUser, editUser } from "@/api/search";
const cityOptions = ['ID', '状态', '工作地', '人事关系','人事关系区分','姓名'];
export default {
  data() {
    return {
      // 条件筛选
       checkedCities: ['上海', '北京'],
      checkAll: false,
       cities: cityOptions,
        isIndeterminate: true,
      // 自定义筛选内容
      chanelList: [
        {
          value: '0',
          label: "大专",
        },
        {
          value: '1',
          label: "本科",
        },
        {
          value: '2',
          label: "研究生",
        },
      ],
      groupNamelist: [
        {
          value: 0,
          label: "C0",
        },
        {
          value: 1,
          label: "C1",
        },
        {
          value: 2,
          label: "C2",
        },
      ],
      workTypelist: [
        {
          value: 0,
          label: "董事长",
        },
        {
          value: 1,
          label: "实习生",
        },
        {
          value: 2,
          label: "员工",
        },
      ],
      ownerCompany: [
        {
          value: 0,
          label: "董事长",
        },
        {
          value: 1,
          label: "实习生",
        },
        {
          value: 2,
          label: "员工",
        },
      ],
      ownerCompanylist: [
        {
          value: 0,
          label: "董事长",
        },
        {
          value: 1,
          label: "实习生",
        },
        {
          value: 2,
          label: "员工",
        },
      ],

      // 员工筛选
      formInline: {
        employreeName: null,
        // qualifications: null,
        // groupName: null,
        // workType: null,
        // ownerCompany: null,
      },
      value:{},
      value1:{},
      value2:{},
      value3:{},
      // 添加员工
      form: {
        incrementId: "",
        historyIncrementId: "",
        deleteFlg: "",
        statusOnJob: "",
        companyAffiliation: "",
        ownerCompany: "",
        employeeName: "",
        employeeNumber: "",
        groupName: "",
        employeeLevel: "",
        workType: "",
        employeeSex: "",
        employeeBirthday: "",
        employeePhoneNumber: "",
        idNumber: "",
        nativePlace: "",
        shanghaiFlg: "",
        maritalStatus: "",
        childrenStatus: "",
        employeeAddress: "",
        graduationDate: "",
        graduationCollege: "",
        graduationSpeciality: "",
        qualifications: "",
        degree: "",
        accessCardId: "",
        loginUser: "",
        loginPassword: "",
        updateRemarks: "",
      },

      // 修改员工
      editform: {
        incrementId: "",
        historyIncrementId: "",
        deleteFlg: "",
        statusOnJob: "",
        companyAffiliation: "",
        ownerCompany: "",
        employeeName: "",
        employeeNumber: "",
        groupName: "",
        employeeLevel: "",
        workType: "",
        employeeSex: "",
        employeeBirthday: "",
        employeePhoneNumber: "",
        idNumber: "",
        nativePlace: "",
        shanghaiFlg: "",
        maritalStatus: "",
        childrenStatus: "",
        employeeAddress: "",
        graduationDate: "",
        graduationCollege: "",
        graduationSpeciality: "",
        qualifications: "",
        degree: "",
        accessCardId: "",
        loginUser: "",
        loginPassword: "",
        updateRemarks: "",
      },

      formLabelWidth: "150px",
      dialogFormVisibleadd: false,
      dialogFormVisibleedit: false,
      //表格所有数据
      tableData: [],
    };
  },
  created() {
    this.search();
  },
  methods: {
    // 条件筛选2
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;

      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
    // 请求表格内容
    search() {
      search1({
        employreeName: this.formInline.employreeName,
        // qualifications: this.value,
        // groupName: this.value1,
        // workType: this.value2,
        // ownerCompany: this.value3,
        qualifications: this.formInline.qualifications,
        groupName: this.formInline.groupName,
        workType: this.formInline.workType,
        ownerCompany: this.formInline.ownerCompany,
      }).then((res) => {
        // eslint-disable-line no-unused-vars
        console.log(res);
        this.tableData = res.body.data.list;
      });
      this.formInline = {};
    },

    // 点击新增跳出新弹窗
    Useradd() {
      this.dialogFormVisibleadd = true;
      this.form = {};
    },
    // 添加员工
    add() {
      let data = {
        incrementId: this.form.incrementId,
        historyIncrementId: this.form.historyIncrementId,
        deleteFlg: this.form.deleteFlg,
        statusOnJob: this.form.statusOnJob,
        companyAffiliation: this.form.companyAffiliation,
        ownerCompany: this.form.ownerCompany,
        employeeName: this.form.employeeName,
        employeeNumber: this.form.employeeNumber,
        groupName: this.form.groupName,
        employeeLevel: this.form.employeeLevel,
        workType: this.form.workType,
        employeeSex: this.form.employeeSex,
        employeeBirthday: this.form.employeeBirthday,
        employeePhoneNumber: this.form.employeePhoneNumber,
        idNumber: this.form.idNumber,
        nativePlace: this.form.nativePlace,
        shanghaiFlg: this.form.shanghaiFlg,
        maritalStatus: this.form.maritalStatus,
        childrenStatus: this.form.childrenStatus,
        employeeAddress: this.form.employeeAddress,
        graduationDate: this.form.graduationDate,
        graduationCollege: this.form.graduationCollege,
        graduationSpeciality: this.form.graduationSpeciality,
        qualifications: this.form.qualifications,
        degree: this.form.degree,
        accessCardId: this.form.accessCardId,
        loginUser: this.form.loginUser,
        loginPassword: this.form.loginPassword,
        updateRemarks: this.form.updateRemarks,
      };
      Adduser(data).then((res) => {
        console.log(res);
        this.form = {};
      });
      this.dialogFormVisibleadd = false;
      this.search();
    },

    // 点击编辑按钮
    edit(item) {
      console.log(item);
      this.editform = { ...item };
      this.dialogFormVisibleedit = true;
    },

    // 点击确定
    editusers() {
      // console.log(this.editform);
      let data = {
        //  ...this.editform,
        incrementId: this.editform.incrementId,
        historyIncrementId: this.editform.historyIncrementId,
        deleteFlg: this.editform.deleteFlg,
        statusOnJob: this.editform.statusOnJob,
        companyAffiliation: this.editform.companyAffiliation,
        ownerCompany: this.editform.ownerCompany,
        employeeName: this.editform.employeeName,
        employeeNumber: this.editform.employeeNumber,
        groupName: this.editform.groupName,
        employeeLevel: this.editform.employeeLevel,
        workType: this.editform.workType,
        employeeSex: this.editform.employeeSex,
        employeeBirthday: this.editform.employeeBirthday,
        employeePhoneNumber: this.editform.employeePhoneNumber,
        idNumber: this.editform.idNumber,
        nativePlace: this.editform.nativePlace,
        shanghaiFlg: this.editform.shanghaiFlg,
        maritalStatus: this.editform.maritalStatus,
        childrenStatus: this.editform.childrenStatus,
        employeeAddress: this.editform.employeeAddress,
        graduationDate: this.editform.graduationDate,
        graduationCollege: this.editform.graduationCollege,
        graduationSpeciality: this.editform.graduationSpeciality,
        qualifications: this.editform.qualifications,
        degree: this.editform.degree,
        accessCardId: this.editform.accessCardId,
        loginUser: this.editform.loginUser,
        loginPassword: this.editform.loginPassword,
        updateRemarks: this.editform.updateRemarks,
      };
      editUser(data).then((res) => {
        console.log(res);
        // if(res.data.body.code === 200){
        //    this.$message.success("更新成功");
        // }else{
        //   this.$message.error("更新失败");
        // }
        // if (res.data.body.code == "20000") {
        //         this.$message({
        //           message: "编辑成功",
        //           type: "success",
        //         });
        //         this.search()
        //       } else {
        //         this.$message({
        //           message: "编辑失败",
        //         });
        //       }
        this.dialogFormVisibleedit = false;
        this.search();
      });
      //  this.editform={}
    },

    // 删除员工
    deletelistid(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        let data = {
          incrementId: id,
        };
        deleteUser(data).then((res) => {
          console.log(res);
          this.search();
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 259px;
  position: relative;
}
.clearfix {
  color: #333333;
  font-size: 20px;
}
.clearfix span {
  font-weight: 600;
}
.from {
  display: flex;
  margin-top: 25px;
  margin-left: 32px;
}
.items {
  margin-left: 62.6px;
  span {
    font-size: 16px;
    color: #333;
  }
}
.btnsc {
  position: absolute;
  right: 25px;
  bottom: 25px;
  background-color: #435fbc;
  width: 122px;
  height: 42px;
}
.cardtable {
  margin-top: 20px;
}
.righttitle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  height: 100%;
  /* background-color: lawngreen; */
}
.Bnt {
  width: 104px;
  height: 32px;
  background-color: lightblue;
}
.tableitem {
  margin-top: 20px;
}
.message {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
}
.title {
  padding: 2px 25px;
  font-size: 18px;
  font-weight: 600;
}
.el-icon-plus {
  color: #435fbc;
  font-weight: 700;
}
.tiaojian {
  padding-right: 20px;
  font-size: 14px;
}
.add {
  display: flex;
  width: 800px;
  // background-color: #435fbc;
  margin: auto;
  flex-flow: wrap;
  justify-content: space-around;
}
.group{
  display: flex;
  flex-flow: wrap;
  width: 124px;
  margin: 0 20px;
}
</style>