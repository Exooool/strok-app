<template>
  <div class="loginPage">
    <el-header>登录</el-header>
    <el-main>
      <div class="logo">
        <img src="" alt="" />
      </div>
      <el-form :model="loginForm">
        <el-form-item>
          <el-input
            v-model="loginForm.account"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="loginForm.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="verifyCodeBox">
          <el-input
            v-model="loginForm.verifyCode"
            placeholder="请输入验证码"
          ></el-input>
          <img
            class="verifyCode"
            src="https://images.unsplash.com/photo-1638913972776-873fc7af3fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
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
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const loginForm = reactive({
      account: "",
      password: "",
      verifyCode: "",
    });

    const submit = () => {
      console.log(loginForm);
    };
    return {
      loginForm,
      submit,
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
