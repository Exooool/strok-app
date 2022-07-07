<template>
  <div class="cassAddPage">
    <el-main>
      <div class="content">
        <!-- <div class="case-type">
          <el-divider content-position="center">
            <h3>请选择病例类型</h3>
          </el-divider>
        </div> -->
        <ul>
          <li v-for="item in data.caseTypeList" :key="item.id">
            <div
              @mouseenter="data.hoverIndex = item.id"
              @mouseleave="data.hoverIndex = -1"
              :class="
                data.currentIndex === item.id ? 'box-active' : 'box-inactive'
              "
              @click="nextStep(item.id)"
            >
              <!--判断处于激活状态，是则用激活的样式图片，否则判断是否是鼠标划入，划入显示激活的图片，否则显示未激活的样式-->
              <img
                :src="
                  data.currentIndex === item.id
                    ? item.activeImgSrc
                    : data.hoverIndex === item.id
                    ? item.activeImgSrc
                    : item.inactiveImgSrc
                "
                alt=""
              />
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </el-main>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const router = useRouter();

    const data = reactive({
      // 鼠标划入index
      hoverIndex: "",
      // 当前已点击的病例
      currentIndex: "",
      openTypeList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      // 暂未开放
      unOpenTypeList: [],
      // openTypeList: [
      //   1, 2,
      // ],
      // // 暂未开放
      // unOpenTypeList: [
      //   3, 4, 5, 6, 7, 8, 9
      // ],
      caseTypeList: [
        {
          id: 1,
          title: "短暂性脑缺血发作",
          activeImgSrc: require("@/assets/brain-active.png"),
          inactiveImgSrc: require("@/assets/brain-inactive.png"),
          description: "发病7天内到院的短暂性脑缺血发作",
        },
        {
          id: 2,
          title: "脑梗死",
          activeImgSrc: require("@/assets/brain-active.png"),
          inactiveImgSrc: require("@/assets/brain-inactive.png"),
          description: "发病7天内到院的脑梗死",
        },
        {
          id: 3,
          title: "自发性脑出血",
          activeImgSrc: require("@/assets/brain-active.png"),
          inactiveImgSrc: require("@/assets/brain-inactive.png"),
          description: "",
        },
        {
          id: 4,
          title: "动脉瘤破裂（AnR）",
          activeImgSrc: require("@/assets/brain-active.png"),
          inactiveImgSrc: require("@/assets/brain-inactive.png"),
          description: "",
        },
        {
          id: 5,
          title: "动静脉畸形破裂（AVMR）",
          activeImgSrc: require("@/assets/brain-active.png"),
          inactiveImgSrc: require("@/assets/brain-inactive.png"),
          description: "",
        },
        {
          id: 6,
          title: "动脉瘤未破裂（An）",
          activeImgSrc: require("@/assets/brain-active.png"),
          inactiveImgSrc: require("@/assets/brain-inactive.png"),
          description: "",
        },
        {
          id: 7,
          title: "动静脉畸形未破裂（AVM）",
          activeImgSrc: require("@/assets/brain-active.png"),
          inactiveImgSrc: require("@/assets/brain-inactive.png"),
          description: "",
        },
        {
          id: 8,
          title: "颅外动脉狭窄（ECS）",
          activeImgSrc: require("@/assets/brain-active.png"),
          inactiveImgSrc: require("@/assets/brain-inactive.png"),
          description: "",
        },
        {
          id: 9,
          title: "颅内动脉狭窄（ICS）",
          activeImgSrc: require("@/assets//brain-active.png"),
          inactiveImgSrc: require("@/assets/brain-inactive.png"),
          description: "",
        },
      ],
    });

    const nextStep = (_id) => {
      data.currentIndex = _id;
      if (data.openTypeList.indexOf(data.currentIndex) > -1) {
        // this.$router.push('/case-increase/' + this.selectedType)
        if (data.currentIndex <= 2) router.push("/caseAddModelOne/" + _id);
        else {
          router.push("/caseAddModelTwo/" + _id);
        }
      } else if (data.unOpenTypeList.indexOf(data.currentIndex) > -1) {
        ElMessage.warning("暂未开放 ！");
      } else {
        ElMessage.warning("请先选择病例类型 ！");
      }
    };

    return {
      data,
      nextStep,
    };
  },
});
</script>

<style lang="scss">
.cassAddPage {
  position: relative;
  height: 100%;
  .el-main {
    height: 100%;
  }
  .content {
    background: #fff;
    box-shadow: -1px 1px 20px 0 rgba(59, 55, 85, 0.03);
    border-radius: 8px;

    .case-type {
      width: 100%;
      margin: 0 auto;

      h3 {
        display: inline-block;
        width: 100%;
        color: #666;
        font: bold 24px/28px "PingFang SC";
      }
    }

    ul {
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      li {
        // flex: 1;
        list-style: none;
        width: 30%;
        margin: 10px auto;
        z-index: 100;

        .box-inactive {
          box-sizing: border-box;
          background: #f5f5f5;
          border-radius: 12px;
          text-align: center;
          height: 150px;
          padding: 5px;

          h3 {
            font: bold 16px/1 "PingFang SC";
            color: #333;
          }

          p {
            overflow: hidden; //超出的文本隐藏
            text-overflow: ellipsis; //溢出用省略号显示
            white-space: nowrap; //溢出不换行
            font: 400 12px/1 "Microsoft YaHei";
            color: #999;
          }
        }

        .box-active {
          color: #fff;
          cursor: pointer;
          background: #426bba;
          box-sizing: border-box;
          border-radius: 12px;
          height: 150px;
          padding: 5px;
          text-align: center;

          h3 {
            font: bold 16px/1 "PingFang SC";
            color: #fff;
          }

          p {
            font: 400 12px/1 "Microsoft YaHei";
            color: #fff;
            overflow: hidden; //超出的文本隐藏
            text-overflow: ellipsis; //溢出用省略号显示
            white-space: nowrap; //溢出不换行
          }
        }

        .box-inactive:hover {
          color: #fff;
          // height: 286px;
          opacity: 0.9;
          cursor: pointer;
          background: #426bba;

          h3 {
            color: #fff;
          }

          p {
            color: #fff;
            line-height: 28px;
            height: auto;
            word-break: break-all;
            white-space: pre-wrap;
            text-decoration: none;
          }
        }
      }
    }

    .next {
      width: 100%;
      margin: 60px 0 128px 0;
      text-align: center;
    }
  }

  .el-divider__text {
    padding: 0px;
    width: 180px;
    text-align: center;
  }

  .el-divider--horizontal {
    color: #999;
    background: 0 0;
    border-top: 4px dashed #e8eaec;
  }
}
</style>
