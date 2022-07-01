<template>
  <!-- 密码修改 -->
  <div class="passwordManagement">
    <div>
      <h3>修改用户密码</h3>
    </div>
    <el-main>
      <el-form
        :model="data.ruleForm"
        ref="ruleForm"
        :rules="data.rules"
        :inline="false"
      >
        <el-form-item label="旧密码" prop="old_password">
          <el-input
            required
            type="password"
            v-model="data.ruleForm.old_password"
            autocomplete="off"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="password">
          <el-input
            type="password"
            v-model="data.ruleForm.password"
            autocomplete="off"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="password2">
          <el-input
            type="password"
            v-model="data.ruleForm.password2"
            autocomplete="off"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">提交</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
import { defineComponent, reactive, ref } from "vue";
import axios from "@/utils/request.js";

export default defineComponent({
  setup() {
    // 获取表单dom元素
    const ruleForm = ref(null);
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
          if (data.ruleForm.password2 !== "") {
            ruleForm.value.validateField("validatePass2");
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请再次输入密码"));
        } else if (value !== data.ruleForm.password) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      };
    }

    // 密码修改
    const submitForm = () => {
      ruleForm.value.validate(async (valid) => {
        if (valid) {
          try {
            var access_token = window.localStorage
              .getItem("access_token")
              .toString();
            access_token = access_token.replace('"', "").replace('"', "");
            const token = "Bearer" + " " + access_token;
            const user_pk = window.localStorage.getItem("user_pk");
            const username = window.localStorage.getItem("username");
            const objdata = {
              id: user_pk,
              username,
              password_old: data.ruleForm.old_password,
              password_new: data.ruleForm.password,
            };
            // console.log(objdata)
            axios
              .post("/peng/User/ChangePassword", objdata, {
                headers: { Authorization: ` ${token}` },
              })
              .then((res) => {
                // 1005密码错误
                if (res.data.code === 1005) {
                  var errMessage = "[" + res.data.code + "]" + res.data.msg;
                  ElMessage.error({
                    dangerouslyUseHTMLString: true,
                    message: errMessage,
                  });
                } else {
                  ElMessage({
                    message: "密码修改成功",
                    type: "success",
                  });
                  // 修改成功后清除输入框
                  resetForm();
                }
              });
          } catch (error) {
            ElMessage.error({
              dangerouslyUseHTMLString: true,
              message: "请求发送失败",
            });
          }
        } else {
          return false;
        }
      });
    };
    // 重置修改密码输入框
    const resetForm = () => {
      console.log(ruleForm.value);
      ruleForm.value.resetFields();
    };

    const data = reactive({
      // 修改密码
      ruleForm: {
        old_password: "",
        password: "",
        password2: "",
      },
      rules: {
        old_password: [
          { validator: oldValidatePass, required: true, trigger: "blur" },
        ],
        password: [
          { validator: validatePass, required: true, trigger: "blur" },
        ],
        password2: [
          { validator: validatePass2, required: true, trigger: "blur" },
        ],
      },
    });
    return {
      data,
      ruleForm,
      submitForm,
      resetForm,
    };
  },
});
</script>

<style lang="scss" scoped>
.passwordManagement {
}
</style>
