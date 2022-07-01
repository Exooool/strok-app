<template>
  <div class="caseAddModelTwoPage">
    <div class="case-fill-form">
      <div class="content">
        <div class="transient-ischemic-attack">
          <div class="collapse">
            <div class="collapse-content">
              <el-form
                v-loading="submitLoading"
                element-loading-spinner="el-icon-loading"
                element-loading-text="正在保存"
                label-position="left"
                ref="hos_one_info"
                :inline="true"
                :rules="rules"
                label-width="160px"
                :model="hos_one_info"
              >
                <el-form-item
                  class="required"
                  prop="inpatient_number"
                  label="住院号"
                >
                  <el-input
                    clearable
                    v-model.trim="hos_one_info.inpatient_number"
                    maxlength="32"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item class="required" prop="name" label="姓名">
                  <el-input
                    clearable
                    v-model.trim="hos_one_info.name"
                    maxlength="32"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item class="required" prop="sex" label="性别">
                  <el-select
                    clearable
                    v-model="hos_one_info.sex"
                    placeholder="请选择"
                    value
                  >
                    <el-option
                      v-for="item in dropDownList.sex_choices"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item class="required" prop="age" label="年龄">
                  <el-input
                    clearable
                    placeholder="0-200"
                    v-model.trim.number="hos_one_info.age"
                    maxlength="32"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item
                  class="required"
                  prop="if_first_diagnosis"
                  label="是否本院首诊"
                >
                  <el-select
                    clearable
                    v-model="hos_one_info.if_first_diagnosis"
                    placeholder="请选择"
                    value
                  >
                    <el-option
                      v-for="item in dropDownList.bool_choices"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item class="required" prop="diagnosis" label="诊断">
                  <el-select
                    clearable
                    multiple
                    collapse-tags
                    :multiple-limit="1"
                    v-model="hos_one_info.diagnosis"
                    placeholder="请选择"
                    value
                  >
                    <el-option
                      v-for="item in dropDownList.diagnosis_choices"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item
                  class="required"
                  prop="basic_disease_history"
                  label="基础疾病史"
                >
                  <el-select
                    clearable
                    collapse-tags
                    multiple
                    v-model="hos_one_info.basic_disease_history"
                    placeholder="请选择"
                    value
                  >
                    <el-option
                      v-for="item in dropDownList.basic_disease_history_choices"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item
                  v-if="
                    hos_one_info.basic_disease_history &&
                    hos_one_info.basic_disease_history.indexOf(99) > -1
                  "
                  class="required"
                  prop="basic_disease_history_else"
                  label="其他基础病史"
                >
                  <el-input
                    clearable
                    v-model.trim="hos_one_info.basic_disease_history_else"
                    maxlength="32"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item
                  class="required"
                  prop="systolic_blood_pressure"
                  label="收缩压"
                >
                  <el-input
                    placeholder="20~300"
                    clearable
                    v-model.trim="hos_one_info.systolic_blood_pressure"
                    maxlength="32"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item
                  class="required"
                  prop="diastolic_blood_pressure"
                  label="舒张压"
                >
                  <el-input
                    placeholder="20~300"
                    clearable
                    v-model.trim="hos_one_info.diastolic_blood_pressure"
                    maxlength="32"
                  >
                  </el-input>
                </el-form-item>
              </el-form>
            </div>
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
  </div>
</template>

<script>
import { defineComponent } from "vue";
import dropDownList from "@/utils/dropDownList.js";
import validator from "@/utils/validatorOther.js";
import axios from "@/utils/request.js";
export default defineComponent({
  setup() {
    return {};
  },
  data() {
    return {
      dropDownList,
      // 病例类型
      index: parseInt(this.$route.params.type),
      // 提交Loading状态
      submitLoading: false,
      loadingTempStorage: false,
      rules: {
        name: [
          { required: true, message: "该字段不能为空", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
        ],
        sex: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
        diagnosis: [
          { required: true, message: "该字段不能为空", trigger: "blur" },
        ],
        age: [{ validator: validator.checkAge, trigger: "blur" }],
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      clearTemp: {
        // 在院信息一
        hos_one_info: {
          inpatient_number: "",
          name: "",
          age: null,
          sex: null,
          diagnosis: [],
          if_first_diagnosis: null,
          basic_disease_history: "",
          basic_disease_history_else: "",
          systolic_blood_pressure: null,
          diastolic_blood_pressure: null,
          users_id: null,
        },
      },
      // 在院信息一
      hos_one_info: {
        input_time: null,
        inpatient_number: "",
        name: "",
        age: null,
        sex: null,
        diagnosis: [],
        if_first_diagnosis: null,
        basic_disease_history: null,
        basic_disease_history_else: "",
        systolic_blood_pressure: null,
        diastolic_blood_pressure: null,
        users_id: null,
      },
    };
  },
  methods: {
    switchTitle(type) {
      switch (type) {
        case 1:
          return "病例新增(短暂性脑缺血发作)";
        case 2:
          return "病例新增(脑梗死)";
        case 3:
          return "病例新增(自发性脑出血)";
        case 4:
          return "病例新增(动脉瘤破裂(AnR))";
        case 5:
          return "病例新增(动静脉畸形破裂(AVMR))";
        case 6:
          return "病例新增(动脉瘤未破裂(An))";
        case 7:
          return "病例新增(动静脉畸形未破裂(AVM))";
        case 8:
          return "病例新增(颅外动脉狭窄(ECS))";
        case 9:
          return "病例新增(颅内动脉狭窄(ICS))";
        default:
      }
    },
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
        this.$refs["hos_one_info"].validate((valid) => {
          console.log("hos_one_info" + valid);
          if (valid) {
            resolve();
          } else {
            reject();
          }
        });
      });
      await Promise.all([p1])
        .then(async () => {
          let user_pk = localStorage.getItem("user_pk");
          if (user_pk) {
            this.hos_one_info.users_id = user_pk;
            this.hos_one_info.input_time = this.formatDate(new Date());
            this.hos_one_info.disease_type = parseInt(this.$route.params.type);
            this.hos_one_info.basic_disease_history = JSON.stringify(
              this.hos_one_info.basic_disease_history
            );
            this.hos_one_info.diagnosis = JSON.stringify(
              this.hos_one_info.diagnosis
            );
            this.submitLoading = true;
            try {
              let strurl = "";
              switch (this.hos_one_info.disease_type) {
                case 3:
                  strurl = "/peng/SichInfo/Add";
                  break;
                case 4:
                  strurl = "/peng/AnRInfo/Add";
                  break;
                case 5:
                  strurl = "/peng/AvmrInfo/Add";
                  break;
                case 6:
                  strurl = "/peng/AnInfo/Add";
                  break;
                case 7:
                  strurl = "/peng/AvmInfo/Add";
                  break;
                case 8:
                  strurl = "/peng/EcsInfo/Add";
                  break;
                case 9:
                  strurl = "/peng/IcsInfo/Add";
                  break;
                default:
                  break;
              }

              const result = await axios.post(strurl, this.hos_one_info);
              if (result.status === 200) {
                this.$message.success("添加成功!");
                this.submitLoading = false;
                this.resetForm();
                if (
                  result.data &&
                  result.data.data &&
                  result.data.data.StrokeId > 0
                ) {
                  this.$router.push(
                    `/case-list/${this.hos_one_info.disease_type}/${result.data.data.StrokeId}`
                  );
                }
              }
            } catch (e) {
              console.log(e);
              this.$message.error("添加失败!");
              this.submitLoading = false;
            }
          }
        })
        .catch(() => {
          this.$message.warning("请检查您输入的信息是否有误!");
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
  },
});
</script>

<style lang="scss" scoped>
.caseAddModelTwoPage {
}
</style>
