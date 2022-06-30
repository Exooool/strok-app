<template>
  <div class="settingPage">
    <el-menu mode="horizontal" :default-active="index" @select="handleSelect">
      <el-menu-item index="1">用户权限管理</el-menu-item>
      <el-menu-item index="2">用户密码修改</el-menu-item>
    </el-menu>

    <div class="powerManagement" v-if="index === '1'">
      <div>
        <h3>权限管理</h3>
      </div>
      <el-main>
        <div class="searchBox">
          <el-input
            v-model="data.searchName"
            placeholder="请输入姓名或用户名"
            clearable
          ></el-input>
          <el-button type="primary" @click="GetUserList()">查询</el-button>
          <el-button type="primary" @click="addUser()">新增用户</el-button>
        </div>
        <el-table :data="data.tableData" border stripe>
          <el-table-column
            type="index"
            label="序号"
            :index="indexMethod"
            width="60"
          />
          <el-table-column prop="username" label="用户名"></el-table-column>
          <el-table-column prop="real_name" label="姓名"></el-table-column>
          <el-table-column label="权限" width="100">
            <template #default="scope">
              <span
                :style="{ color: data.roleColor[scope.row.role.toString()] }"
                >{{ data.jurisdiction[scope.row.role.toString()] }}</span
              >
            </template>
          </el-table-column>
          <el-table-column
            prop="work_unit"
            label="单位"
            width="200"
          ></el-table-column>
          <el-table-column label="权限管理" width="120">
            <template #default="scope">
              <el-button type="primary" @click="dialogShow(scope.row)"
                >权限管理</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </div>

    <PasswordManagement v-else />

    <PowerDialog :userInfo="data.userInfo" v-model="data.powerChangeDialog" />

    <AddUser v-model="data.addUserDialog" />
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, ref } from "vue";
import PowerDialog from "./components/powerDialog.vue";
import AddUser from "./components/addUser.vue";
import PasswordManagement from "./components/passwordManagement.vue";
const axios = require("axios");

export default defineComponent({
  components: {
    PowerDialog,
    PasswordManagement,
    AddUser,
  },
  setup() {
    // 用户修改密码规则
    {
      var oldValidatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入旧密码"));
        } else if (
          !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test(
            value
          )
        ) {
          callback(
            new Error("密码长度不能小于8位,必须包含字母、数组、特殊字符")
          );
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else if (
          !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test(
            value
          )
        ) {
          callback(
            new Error("密码长度不能小于8位,必须包含字母、数组、特殊字符")
          );
        } else {
          if (this.ruleForm.password2 !== "") {
            this.$refs.ruleForm.validateField("validatePass2");
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请再次输入密码"));
        } else if (value !== this.ruleForm.password) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      };
    }

    let index = ref("1");

    const data = reactive({
      tableData: [],
      searchName: "",
      searchWorkUnit: "",
      searchRole: -1,
      // 对话框
      powerChangeDialog: false,
      addUserDialog: false,
      userInfo: null,
      // 分页组件内容
      pageData: {
        page: 1,
        pageSize: 12,
        total: 0,
        ordering: "",
      },
      // 权限的显示
      jurisdiction: {
        0: "该用户权限已被关闭",
        99: "质控中心管理员",
        2: "质控中心课题成员",
        3: "定点医院录入员",
        9: "定点医院管理员",
      },

      // 不同身份人员显示的颜色
      roleColor: {
        0: "red",
      },
    });

    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
      index.value = key;
      console.log(index);
    };

    // 获取用户信息
    const GetUserList = () => {
      let obj = {
        Page: 1,
        Limit: 12,
        Where: {
          name: data.searchName,
          work_unit: data.searchWorkUnit,
          role: data.searchRole,
        },
      };
      obj.Page = data.pageData.page;
      console.log(obj);
      axios({
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        url: "/peng/User/Page",
        data: JSON.stringify(obj),
      })
        .then((res) => {
          console.log(res);
          // 循环剔除列表中权限非 3 或 9 的用户

          let arry = res.data.data.filter((element) => {
            return element.role === 3 || element.role === 9;
          });
          console.log(arry);
          data.tableData = arry;
          data.pageData.total = arry.length;
        })
        .catch(() => {
          this.$message.error("请求数据失败");
        });
    };

    // 表格序号
    const indexMethod = (index) => {
      return (data.pageData.page - 1) * data.pageData.pageSize + index + 1;
    };

    // 权限管理对话框控制
    const dialogShow = (e) => {
      data.powerChangeDialog = true;
      data.userInfo = e;
    };

    // 新增用户对话框控制
    const addUser = () => {
      data.addUserDialog = true;
    };

    const closeDialog = () => {
      data.powerChangeDialog = false;
      data.addUserDialog = false;
    };

    const rules = {
      old_password: [
        { validator: oldValidatePass, required: true, trigger: "blur" },
      ],
      password: [{ validator: validatePass, required: true, trigger: "blur" }],
      password2: [
        { validator: validatePass2, required: true, trigger: "blur" },
      ],
    };

    onMounted(() => {
      data.searchWorkUnit = localStorage.getItem("work_unit");
      GetUserList();
    });

    return {
      // 菜单index
      index,
      data,
      rules,
      // 菜单栏切换触发函数
      handleSelect,
      dialogShow,
      addUser,
      GetUserList,
      indexMethod,
      closeDialog,
    };
  },
});
</script>

<style lang="scss" scoped>
.settingPage {
  padding-bottom: 80px;
  .powerManagement {
    .searchBox {
      margin: 10px 0px;
      .el-input {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
