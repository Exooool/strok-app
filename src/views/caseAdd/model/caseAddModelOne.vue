<template>
  <div class="casAddModelOnePage">
    <div class="content">
      <div class="transient-ischemic-attack">
        <div class="collapse-content">
          <el-form
            v-loading="submitLoading"
            element-loading-spinner="el-icon-loading"
            element-loading-text="正在保存"
            label-position="right"
            ref="ruleForm"
            label-width="120px"
            :inline="true"
            :rules="rules"
            :model="hos_one_info"
          >
            <el-row>
              <el-form-item prop="green_num" label="(绿通号)门诊号">
                <el-input
                  clearable
                  maxlength="32"
                  v-model.trim="hos_one_info.green_num"
                >
                </el-input>
              </el-form-item>
              <el-form-item prop="identity_num" label="身份证号码">
                <el-input
                  clearable
                  maxlength="32"
                  @change="
                    (val) =>
                      val === '' ? (hos_one_info.birth_date = null) : ''
                  "
                  @blur="getBirthByIdentifyId(hos_one_info.identity_num)"
                  v-model.trim="hos_one_info.identity_num"
                >
                </el-input>
              </el-form-item>
            </el-row>
            <el-row>
              <el-form-item prop="name" label="姓名">
                <el-input
                  clearable
                  maxlength="32"
                  v-model.trim="hos_one_info.name"
                >
                </el-input>
              </el-form-item>
              <el-form-item prop="sex" label="性别">
                <el-radio-group v-model="hos_one_info.sex">
                  <el-radio
                    v-for="item in commonDropDownOptions.sex_choices"
                    :key="item.value"
                    :label="item.value"
                    >{{ item.label }}
                  </el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item prop="age" label="年龄">
                <el-input
                  clearable
                  maxlength="32"
                  v-model.trim.number="hos_one_info.age"
                ></el-input>
              </el-form-item>
            </el-row>
          </el-form>
        </div>
        <div class="footer">
          <div>
            <el-button
              :loading="submitLoading"
              type="primary"
              @click="submitFormData"
            >
              <span v-if="submitLoading">正在提交</span>
              <span v-else>提 交</span>
            </el-button>
            <el-button @click="resetForm">清 空 </el-button>
            <el-button @click="back">返 回</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import dropDown from "@/utils/dropDown.js";
import validator from "@/utils/validatorOther.js";
import { ElMessage } from "element-plus";
import axios from "@/utils/request.js";

export default defineComponent({
  computed: {
    // 公共下拉选项
    commonDropDownOptions() {
      return this.$store.state.commonDropDownOptions;
    },
    hos_one_select_opts() {
      return this.$store.state.hos_one_select_opts;
    },
  },
  methods: {
    formatDate(_date) {
      if (_date !== null) {
        let year = _date.getFullYear();
        let month = _date.getMonth();
        let date = _date.getDate();
        let hour = _date.getHours();
        let minutes = _date.getMinutes();
        month = month + 1;
        if (month < 10) month = "0" + month;
        if (date < 10) date = "0" + date;
        if (hour < 10) hour = "0" + hour;
        if (minutes < 10) minutes = "0" + minutes;
        return year + "-" + month + "-" + date + " " + hour + ":" + minutes;
      }
    },
    // -------------在院信息一-------------
    /**
     * 将所有数组转成JSON字符串数组
     */
    convertAllArrayToStr() {
      for (let i = 0; i < this.inHospitalInfo1MultipleKeys.length; i++) {
        this.hos_one_info[this.inHospitalInfo1MultipleKeys[i]] = JSON.stringify(
          this.hos_one_info[this.inHospitalInfo1MultipleKeys[i]]
        );
      }
    },
    /**
     * 将所有JSON字符串转成数组
     */
    convertAllStrToArray() {
      for (let i = 0; i < this.inHospitalInfo1MultipleKeys.length; i++) {
        let val = this.hos_one_info[this.inHospitalInfo1MultipleKeys[i]];
        if (val !== "") {
          this.hos_one_info[this.inHospitalInfo1MultipleKeys[i]] = eval(
            this.hos_one_info[this.inHospitalInfo1MultipleKeys[i]]
          );
        }
      }
    },
    // 重置表单
    resetForm() {
      for (const k in this.clearTemp.hos_one_info) {
        this.hos_one_info[k] = this.clearTemp.hos_one_info[k];
      }
    },
    /**
     * 提交
     * @returns {Promise<void>}
     */
    async submitFormData() {
      const p1 = new Promise((resolve, reject) => {
        this.$refs["ruleForm"].validate((valid) => {
          console.log("ruleForm" + valid);
          if (valid) {
            resolve();
          } else {
            reject();
          }
        });
      });
      await Promise.all([p1])
        .then(async () => {
          this.convertAllArrayToStr();
          let user_pk = localStorage.getItem("user_pk");
          if (user_pk) {
            this.hos_one_info.users_id = user_pk;
            this.hos_one_info.input_time = this.formatDate(new Date());
            this.hos_one_info.disease_type = parseInt(this.$route.params.type);
            this.submitLoading = true;
            try {
              const result = await axios.post(
                "/peng/StrokeMapInfo/Add",
                this.hos_one_info
              );
              if (result.status === 200) {
                ElMessage.success("添加成功!");
                this.submitLoading = false;
                this.resetForm();
                if (
                  result.data &&
                  result.data.data &&
                  result.data.data.StrokeId > 0
                ) {
                  this.$router.push(
                    `/caseList/100/${result.data.data.StrokeId}`
                  );
                }
                //
              }
            } catch (e) {
              console.log(e);
              ElMessage.error("添加失败!");
              this.submitLoading = false;
              this.if_convert = false;
            }
          }
          this.convertAllStrToArray();
        })
        .catch(() => {
          ElMessage.warning("请检查您输入的信息是否有误!");
          setTimeout(() => {
            let isError = document.getElementsByClassName("is-error");
            if (isError.length > 0) {
              isError[0].querySelector("input").focus();
            }
          }, 100);
        });
    },
    back() {
      this.$router.go(-1);
    },
    // 通过身份证号识别出生日期、年龄、性别
    getBirthByIdentifyId(_identifyId) {
      if (_identifyId !== null) {
        let birth_date = "";
        let myDate = new Date();
        let month = myDate.getMonth() + 1;
        let day = myDate.getDate();
        let age = myDate.getFullYear() - _identifyId.substring(6, 10) - 1;
        if (
          _identifyId.substring(10, 12) < month ||
          (_identifyId.substring(10, 12) === month &&
            _identifyId.substring(12, 14) <= day)
        ) {
          age++;
        }
        let sex = "";
        if (_identifyId !== "" && _identifyId.length === 18) {
          birth_date = _identifyId.substr(6, 8);
          this.hos_one_info.birth_date = birth_date.replace(
            /(.{4})(.{2})/,
            "$1-$2-"
          );
          if (parseInt(_identifyId.substr(16, 1)) % 2 === 1) {
            //男
            sex = 1;
            this.hos_one_info.sex = sex;
          } else {
            //女
            sex = 2;
            this.hos_one_info.sex = sex;
          }
          this.hos_one_info.age = age;
        }
      }
    },
  },
  setup() {
    const data = reactive({
      nihssPopup: false, //nihss评分弹框控制显示与隐藏
      // 临时nihss存储
      nihss_temporary_key: [
        "cons_level",
        "cons_level_ask",
        "cons_level_instruction",
        "gaze",
        "view",
        "facial_paralysis",
        "left_side_upper_limb_movement",
        "right_side_upper_limb_movement",
        "left_side_lower_limb_movement",
        "right_side_lower_limb_movement",
        "ataxia",
        "feel",
        "language",
        "dysarthria",
        "neglect",
      ],
      nihss_temporary: {
        cons_level: null,
        cons_level_ask: null,
        cons_level_instruction: null,
        gaze: null,
        view: null,
        facial_paralysis: null,
        left_side_upper_limb_movement: null,
        right_side_upper_limb_movement: null,
        left_side_lower_limb_movement: null,
        right_side_lower_limb_movement: null,
        ataxia: null,
        feel: null,
        language: null,
        dysarthria: null,
        neglect: null,
      },
      // 首次NIHSS评分选中的内容 (全为Integer类型,缺省值为null)
      first_nihss: [
        // 意识水平
        "first_nihss_cons_level",
        // 意识水平提问
        "first_nihss_cons_level_ask",
        // 意识水平指令
        "first_nihss_cons_level_instruction",
        // 凝视
        "first_nihss_gaze",
        // 视野
        "first_nihss_view",
        // 面瘫
        "first_nihss_facial_paralysis",
        // 上肢运动左侧
        "first_nihss_left_side_upper_limb_movement",
        // 上肢运动右侧
        "first_nihss_right_side_upper_limb_movement",
        // 下肢运动左侧
        "first_nihss_left_side_lower_limb_movement",
        // 下肢运动右侧
        "first_nihss_right_side_lower_limb_movement",
        // 共济失调
        "first_nihss_ataxia",
        // 感觉
        "first_nihss_feel",
        // 语言
        "first_nihss_language",
        // 构音障碍
        "first_nihss_dysarthria",
        // 忽视症
        "first_nihss_neglect",
      ],
      // 此处为下拉选项数据
      dropDown: dropDown.dropDown1,
      // 提交Loading状态
      submitLoading: false,
      loadingTempStorage: false,
      rules: {
        name: [
          { required: true, message: "该字段不能为空", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
        ],
        sex: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
        // arrival_time: [
        //   { required: true, message: "该字段不能为空", trigger: "blur" },
        // ],
        phone_num: [{ validator: validator.checkPhone3, trigger: "blur" }],
        age: [
          {
            validator: validator.checkAge,
            required: true,
            trigger: "blur",
          },
        ],
        identity_num: [
          { required: false, message: "该字段不能为空", trigger: "blur" },
          {
            pattern:
              /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
            message: "请输入正确的身份证号",
            trigger: "blur",
          },
        ],
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      clearTemp: {
        // 在院信息一
        hos_one_info: {
          green_num: "",
          name: "",
          age: null,
          sex: null,
          identity_num: "",
          birth_date: null,
          current_address: "",
          relationship: null,
          emergency_contact: "",
          phone_num: "",
          exact_onset_time: null,
          estimated_onset_time: null,
          wake_up_stroke: null,
          first_state: [],
          first_place_his: null,
          arrival_method: null,
          users_id: null,
        },
      },
      // 在院信息一
      hos_one_info: {
        input_time: null,
        green_num: "",
        identity_num: "",
        name: "",
        age: null,
        sex: null,
        wake_up_stroke: null,
        arrival_time: null,
        onset_to_door: null,
        if_issue_head_ct: null,
        head_ct_time: null,
        ct_flat_time: null,
        first_diagnosis_result: null,
        is_vessel_occlusion_hos: null,
        dead_artery: null,
        front_nihss_faction: null,
        front_nihss_time: null,
        first_nihss_cons_level: null,
        first_nihss_cons_level_ask: null,
        first_nihss_cons_level_instruction: null,
        first_nihss_gaze: null,
        first_nihss_view: null,
        first_nihss_facial_paralysis: null,
        first_nihss_ataxia: null,
        first_nihss_left_side_upper_limb_movement: null,
        first_nihss_right_side_upper_limb_movement: null,
        first_nihss_left_side_lower_limb_movement: null,
        first_nihss_right_side_lower_limb_movement: null,
        first_nihss_feel: null,
        first_nihss_language: null,
        first_nihss_dysarthria: null,
        first_nihss_neglect: null,
        arrival_method: null,
        call_120_time: null,
        is_notify_hosp: null,
        if_throm: null,
        throm_sign_time: null,
        vein_med_time: null,
        vein_sty: null,
        first_handle: null,
        is_inter: null,
        inter_sign_time: null,
        artery_puncture_time: null,
        exact_onset_time: null,
        estimated_onset_time: null,
        users_id: null,
      },
      // 多选key
      inHospitalInfo1MultipleKeys: ["first_state", "first_handle"],
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped>
.casAddModelOnePage {
  position: relative;
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  .transient-ischemic-attack {
    .required {
      color: #f56c6c;
    }

    .footer {
      width: 100%;
      display: flex;
      margin: 10px 0 18px 0;

      div {
        width: 100%;
        text-align: center;
      }
    }

    .el-select {
      width: 220px;
    }
  }
}
</style>
