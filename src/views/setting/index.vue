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
            v-model="data.searchValue"
            placeholder="请输入姓名或用户名"
            size="normal"
            clearable
          ></el-input>
          <el-button type="primary" size="small" @click="search()"
            >查询</el-button
          >
          <el-button type="primary" size="small" @click="addUser()"
            >新增用户</el-button
          >
        </div>
        <el-table :data="data.userDataList" border stripe>
          <el-table-column prop="date" label="序号" />
          <el-table-column prop="name" label="用户名" width="180" />
          <!-- <el-table-column prop="date" label="姓名" />
          <el-table-column prop="date" label="序号" />
          <el-table-column prop="date" label="权限" />
          <el-table-column prop="date" label="单位" /> -->
          <el-table-column prop="date" label="权限管理" width="200">
            <template #default>
              <el-button type="primary" size="small">权限管理</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </div>

    <div class="passwordManagement" v-else>
      <div>
        <h3>修改用户密码</h3>
      </div>
      <el-main>
        <el-form :model="form" ref="form" :rules="rules" :inline="false">
          <el-form-item label="">
            <span>旧密码</span>
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <span>新密码</span>
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="">
            <span>确认新密码</span>
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="" style="margin-top: 10px">
            <el-button type="primary">提交</el-button>
            <el-button type="primary">重置</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  setup() {
    let index = ref("1");

    const data = reactive({
      userDataList: [
        {
          date: "123",
          name: "asdads",
        },
      ],
      searchValue: "",
    });

    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
      index.value = key;
      console.log(index);
    };

    // 获取用户信息
    const getUser = () => {};

    // 查询用户
    const search = () => {};

    // 新增用户
    const addUser = () => {};

    return {
      // 菜单index
      index,
      data,
      // 菜单栏切换触发函数
      handleSelect,
      search,
      addUser,
      getUser,
    };
  },
});
</script>

<style lang="scss" scoped>
.settingPage {
  .powerManagement {
    .searchBox {
      margin: 10px 0px;
      .el-input {
        margin-bottom: 10px;
      }
    }
  }
  .passwordManagement {
    .el-form-item {
      margin: 0;
    }
  }
}
</style>
