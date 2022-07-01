<template>
  <!-- 新增用户对话框 -->
  <el-dialog title="添加用户" width="90%" top="10vh">
    <!-- 表单 -->
    <el-form
      :model="data.ruleForm"
      status-icon
      :rules="data.rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      :inline="true"
    >
      <el-form-item label="登录用户名" prop="username">
        <el-input
          type="text"
          v-model.trim="data.ruleForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="权限" prop="role">
        <el-select
          v-model.trim="data.ruleForm.role"
          placeholder="请选择用户权限"
        >
          <el-option
            v-for="item in data.jurisdiction"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="登录密码" prop="password">
        <el-input
          type="password"
          v-model.trim="data.ruleForm.password"
          autocomplete="off"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="确定登录密码" prop="password2">
        <el-input
          type="password"
          v-model.trim="data.ruleForm.password2"
          autocomplete="off"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="real_name">
        <el-input
          type="text"
          v-model.trim="data.ruleForm.real_name"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-select
          v-model.trim="data.ruleForm.sex"
          placeholder="请选择用户性别"
        >
          <el-option
            v-for="item in data.Gender"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="身份证号码" prop="idcard">
        <el-input
          type="text"
          v-model.trim="data.ruleForm.idcard"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="单位" prop="work_unit">
        <el-input
          type="text"
          v-model.trim="data.ruleForm.work_unit"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="统一社会信用代码" prop="credit_code">
        <el-input
          type="text"
          v-model.trim="data.ruleForm.credit_code"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="详细联系地址" prop="address">
        <el-input
          type="text"
          v-model.trim="data.ruleForm.address"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="角色" prop="work_role">
        <el-select
          v-model.trim="data.ruleForm.work_role"
          placeholder="请选择用户角色"
        >
          <el-option
            v-for="item in data.roles"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone_num">
        <el-input
          type="text"
          v-model.trim="data.ruleForm.phone_num"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="电子邮箱" prop="email">
        <el-input
          type="text"
          v-model.trim="data.ruleForm.email"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item class="sub">
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { ElMessage } from "element-plus";
import { defineComponent, reactive, ref } from "vue";
import axios from "@/utils/request.js";

export default defineComponent({
  methods: {
    // 提交新增用户申请
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            this.data.ruleForm.date_joined = new Date().toLocaleString();
            axios.post("/peng/User/Add", this.data.ruleForm).then((res) => {
              // console.log(res)
              if (res.data.code !== 0) {
                var errMessage = "[" + res.data.code + "]" + res.data.msg;
                ElMessage.error({
                  dangerouslyUseHTMLString: true,
                  message: errMessage,
                });
              } else {
                ElMessage({
                  message: "新增用户成功",
                  type: "success",
                });
                this.$parent.GetUserList();
                this.$parent.closeDialog();
              }
            });
          } catch (error) {
            ElMessage.error({
              dangerouslyUseHTMLString: true,
              message: "请求发送失败",
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  setup() {
    const ruleForm = ref(null);
    // 新增用户规则
    {
      // 用户名
      var username = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入用户名"));
        } else if (!/^.{4,20}$/.test(value)) {
          callback(new Error("用户名长度不能小于4且不能大于20"));
        } else {
          callback();
        }
      };
      // 权限
      var role = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请选择权限"));
        } else {
          callback();
        }
      };
      // 密码
      var password = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else if (
          !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test(
            value
          )
        ) {
          callback(new Error("长度不能小于8位且包含字母、数字、特殊字符"));
        } else {
          if (data.ruleForm.password2 !== "") {
            ruleForm.value.validateField("password2");
          }
          callback();
        }
      };
      // 确认密码
      var password2 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请再次输入密码"));
        } else if (value !== data.ruleForm.password) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      };
      // 姓名
      var real_name = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入姓名"));
        } else {
          callback();
        }
      };
      // 性别
      var sex = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请选择性别"));
        } else {
          callback();
        }
      };
      // 身份证号码
      var idcard = (rule, value, callback) => {
        if (value === "") {
          callback();
        } else if (
          !/(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/.test(
            value
          )
        ) {
          callback(new Error("身份证格式错误"));
        } else {
          callback();
        }
      };
      // 单位
      var work_unit = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入单位"));
        } else {
          callback();
        }
      };
      // 手机号码
      var phone_num = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入手机号码"));
        } else if (
          !/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value)
        ) {
          callback(new Error("手机号码格式错误"));
        } else {
          callback();
        }
      };
      // 电子邮箱
      var email = (rule, value, callback) => {
        if (value === "") {
          callback();
        }
        if (!/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(value)) {
          callback(new Error("电子邮箱格式错误"));
        } else {
          callback();
        }
      };
    }
    const data = reactive({
      // 权限
      jurisdiction: [
        {
          value: "3",
          label: "定点医院录入员",
        },
        {
          value: "9",
          label: "定点医院管理员",
        },
      ],
      // 性别
      Gender: [
        {
          value: "1",
          label: "男",
        },
        {
          value: "2",
          label: "女",
        },
      ],
      // 角色
      roles: [
        {
          value: "数据录入员",
          label: "数据录入员",
        },
        {
          value: "定点医院管理员",
          label: "定点医院管理员",
        },
      ],
      // 用户输入
      ruleForm: {
        username: "",
        role: "",
        password: "",
        password2: "",
        real_name: "",
        sex: "",
        idcard: "",
        work_unit: "",
        credit_code: "",
        address: "",
        work_role: "",
        phone_num: "",
        email: "",
        captcha: "",
        // 数据库其他需填写的默认字段
        is_staff: 0,
        is_active: 1,
        date_joined: "",
      },
      // 用户输入对应字典
      userMessage: {
        username: "用户名",
        role: "权限",
        password: "登录密码",
        password2: "第二次输入登录密码",
        real_name: "姓名",
        sex: "性别",
        idcard: "身份证号码",
        work_unit: "单位",
        credit_code: "统一社会信用代码",
        address: "详细联系地址",
        work_role: "角色",
        phone_num: "手机号码",
        email: "电子邮箱",
      },
      rules: {
        username: [{ validator: username, required: true, trigger: "blur" }],
        role: [{ validator: role, required: true, trigger: "change" }],
        password: [{ validator: password, required: true, trigger: "blur" }],
        password2: [{ validator: password2, required: true, trigger: "blur" }],
        real_name: [{ validator: real_name, required: true, trigger: "blur" }],
        sex: [{ validator: sex, required: true, trigger: "change" }],
        idcard: [{ validator: idcard, required: false, trigger: "blur" }],
        work_unit: [{ validator: work_unit, required: true, trigger: "blur" }],
        phone_num: [{ validator: phone_num, required: true, trigger: "blur" }],
        email: [{ validator: email, required: false, trigger: "blur" }],
      },
    });
    const resetForm = () => {
      ruleForm.value.resetFields();
    };

    return {
      data,
      ruleForm,
      resetForm,
    };
  },
});
</script>

<style lang="scss" scoped></style>
