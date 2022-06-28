<template>
  <div class="loginPage">
    <el-header>登录</el-header>
    <el-main>
      <div class="logo">
        <img src="" alt="" />
      </div>
      <el-form :model="loginForm" ref="ruleFormRef" :rules="rules">
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入账号/用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="请输入密码"
            :type="passwordShow ? 'text' : 'password'"
            ><template v-slot:suffix>
              <el-icon @click="passwordShow = !passwordShow"
                ><More v-if="passwordShow" />
                <View v-else /> </el-icon></template
          ></el-input>
        </el-form-item>
        <el-form-item class="verifyCodeBox" prop="captcha">
          <el-input
            v-model="loginForm.captcha"
            placeholder="请输入验证码"
            :maxlength="4"
          ></el-input>
          <img
            ref="img"
            @click="getValidCode()"
            class="verifyCode"
            src=""
            alt=""
          />
        </el-form-item>
        <el-form-item>
          <el-button class="loginBtn" @click="submit">立即登录</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </div>
</template>

<script>
import { defineComponent, reactive, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import "element-plus/es/components/message/style/css";
const axios = require("axios");

export default defineComponent({
  setup() {
    // 通过ref获取dom元素
    const img = ref(null);
    const ruleFormRef = ref(null);
    const router = useRouter();
    const passwordShow = ref(false);

    // 表单
    const loginForm = reactive({
      username: "",
      password: "",
      imgcode_id: "",
      captcha: "",
      isEncode: false,
    });

    const rules = {
      username: [
        { required: true, message: "请输入账号/用户名", trigger: "blur" },
      ],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      captcha: [
        { required: true, message: "请输入验证码", trigger: "blur" },
        {},
      ],
    };

    onMounted(() => {
      getValidCode();
    });

    // 获取验证码
    const getValidCode = () => {
      axios
        .post("/peng/User/Captcha")
        .then((res) => {
          // console.log(res);
          loginForm.imgcode_id = res.data.id;
          img.value.src = res.data.image_base;
        })
        .catch(() => {
          ElMessage({
            type: "error",
            message: "获取验证码失败",
          });
        });
    };

    // 验证表单完整性后提交 表单提交
    const submit = async () => {
      if (!ruleFormRef.value) return;
      await ruleFormRef.value.validate((valid, fields) => {
        if (valid) {
          axios
            .post("/peng/user/Login/", loginForm)
            .then((res) => {
              console.log(res);
              if (res.data.code === 0) {
                console.log(res);
                res = res.data;
                localStorage.setItem("access_token", res.data.access);
                localStorage.setItem("user_pk", res.data.user_pk);
                localStorage.setItem("username", loginForm.username);
                localStorage.setItem("work_unit", res.data.work_unit);
                localStorage.setItem("user_role", res.data.user_role);
                console.info("登入成功");
                router.push("/home");
                ElMessage({
                  type: "success",
                  message: "登录成功",
                });
              } else {
                ElMessage({
                  type: "error",
                  message: "登录失败！请检查用户名或密码或验证码是否正确",
                });
              }
            })
            .catch((e) => {
              console.log(e);
              ElMessage({
                type: "error",
                message: "登录失败！请检查用户名或密码或验证码是否正确",
              });
            });
        } else {
          console.log("error submit!", fields);
          ElMessage({ type: "error", message: "请填写完整表单" });
        }
      });
    };

    return {
      loginForm,
      passwordShow,
      img,
      ruleFormRef,
      rules,
      submit,
      getValidCode,
    };
  },
});
</script>

<style lang="scss" scoped>
.loginPage {
  height: 100vh;
  .el-header {
    font-size: 18px;
    // color: white;
    line-height: 60px;
    padding-left: 40px;
  }
  // logo图标占位
  .logo {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 18px;

    img {
      height: 200px;
      width: 200px;
      object-fit: cover;
    }
  }
  .el-main {
    padding: 20px 50px;
  }
  .el-input {
    height: 45px;
    font-size: 16px;
  }
  // 验证码
  .verifyCodeBox {
    display: flex;
    .el-input {
      width: calc(100% - 80px);
      .el-input__wrapper {
        border-radius: 0px;
      }
    }

    .verifyCode {
      height: 45px;
      width: 80px;
    }
  }

  .loginBtn {
    height: 50px;
    width: 100%;
  }
}
</style>
