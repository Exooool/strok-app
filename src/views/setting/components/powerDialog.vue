<template>
  <!-- 权限管理对话框 -->
  <el-dialog title="权限管理" width="80%" top="30vh">
    <el-form>
      <el-form-item label="登录用户名">
        <el-input :value="userInfo?.username" disabled></el-input>
      </el-form-item>
      <el-form-item label="权限调整">
        <el-select v-model="data.power" placeholder="请选择用户权限">
          <el-option
            v-for="item in data.jurisdictionOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="sub()">确定调整</el-button>
        <el-button @click="close()">取消调整</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { ElMessage } from "element-plus";
import { defineComponent, reactive, watch } from "vue";
import axios from "@/utils/request.js";

export default defineComponent({
  props: {
    role: String,
    userInfo: Object,
  },
  methods: {
    // 提交修改申请
    sub() {
      try {
        // 获取access_token
        var access_token = window.localStorage
          .getItem("access_token")
          .toString();
        access_token = access_token.replace('"', "").replace('"', "");
        const token = "Bearer" + " " + access_token;
        // 传的参数
        var dataObj = {};
        dataObj.username = this.userInfo.username;
        dataObj.role = this.data.power * 1;
        dataObj.id = this.userInfo.id;
        const res = axios.post("/peng/User/ChangeRoles", dataObj, {
          headers: { Authorization: ` ${token}` },
        });
        if (res.status === 400) {
          ElMessage.error({
            dangerouslyUseHTMLString: true,
            message: "权限修改失败",
          });
        } else {
          ElMessage({
            message: "权限修改成功",
            type: "success",
          });
          this.$parent.closeDialog();
          this.$parent.GetUserList();
        }
      } catch (error) {
        ElMessage.error({
          dangerouslyUseHTMLString: true,
          message: "请求发送失败",
        });
      }
    },
    close() {
      this.$parent.closeDialog();
    },
  },
  setup(props) {
    watch(props.userInfo, (newValue, oldValue) => {
      console.log("sum ==> ", newValue, oldValue);
    });

    const data = reactive({
      // 权限
      jurisdictionOptions: [
        {
          value: "3",
          label: "定点医院录入员",
        },
        {
          value: "9",
          label: "定点医院管理员",
        },
        {
          value: "0",
          label: "关闭权限",
        },
      ],
      // 当前权限
      power: props.userInfo.role.toString(),
    });

    return {
      data,
    };
  },
});
</script>

<style lang="scss" scoped></style>
