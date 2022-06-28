<template>
  <el-form :model="form" :rules="rules" :inline="false">
    <!-- 患者基本信息 -->
    <span class="title"> 患者基本信息 : </span>
    <el-divider direction="horizontal" content-position="left"></el-divider>
    <el-form-item class="required" label="(绿通号)门诊号" prop="green_num">
      <el-input clearable v-model.trim="form.green_num"></el-input>
    </el-form-item>
    <el-form-item class="required" label="姓名" prop="name">
      <el-input clearable v-model.trim="form.name"></el-input>
    </el-form-item>
    <el-form-item label="民族" prop="nation">
      <el-select
        clearable
        v-model="form.nation"
        filterable
        placeholder="请选择"
      >
        <el-option
          v-for="item in dropDown.xl_nationList"
          :key="item"
          :label="item"
          :value="item"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="身份证号码" prop="identity_num">
      <el-input
        clearable
        v-model.trim="form.identity_num"
        @blur="getBirthByIdentifyId(form.identity_num)"
      ></el-input>
    </el-form-item>
    <el-form-item class="required" label="年龄" prop="age">
      <el-input clearable v-model.trim="form.age"></el-input>
    </el-form-item>
    <el-form-item class="required" label="性别" prop="sex">
      <el-select clearable v-model="form.sex" placeholder="请选择">
        <el-option
          v-for="item in dropDown.xl_sex"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="required" label="出生日期" prop="birth_date">
      <el-date-picker
        v-model="form.birth_date"
        type="date"
        placeholder="请选择日期时间"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item label="原籍地址" prop="domicile_of_origin">
      <el-input clearable v-model.trim="form.domicile_of_origin"></el-input>
    </el-form-item>
    <el-form-item label="常住地址" prop="usual_address">
      <el-input clearable v-model.trim="form.usual_address"></el-input>
    </el-form-item>
    <el-form-item class="required" label="现住址" prop="current_address">
      <el-input clearable v-model.trim="form.current_address"></el-input>
    </el-form-item>
    <el-form-item class="required" label="发病前居住状况" prop="live_state">
      <el-select clearable v-model="form.live_state" placeholder="请选择">
        <el-option
          v-for="item in dropDown.xl_live_state_choices"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="required" label="患者现居住地类型" prop="live_style">
      <el-select clearable v-model="form.live_style" placeholder="请选择">
        <el-option
          v-for="item in dropDown.xl_live_style_choices"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="required" label="医保类型" prop="protect_sty">
      <el-select clearable v-model="form.protect_sty" placeholder="请选择">
        <el-option
          v-for="item in dropDown.xl_protect_sty_choices"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="required" label="患者文化程度" prop="cultural_level">
      <el-select clearable v-model="form.cultural_level" placeholder="请选择">
        <el-option
          v-for="item in dropDown.xl_cultural_level_choices"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="紧急联系人" prop="emergency_contact">
      <el-input clearable v-model.trim="form.emergency_contact"></el-input>
    </el-form-item>
    <el-form-item label="紧急联系人与患者的关系" prop="relationship">
      <el-select clearable v-model="form.relationship" placeholder="请选择">
        <el-option
          v-for="item in dropDown.xl_relationship_choices"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="required" label="联系电话" prop="phone_num">
      <el-input clearable v-model.trim="form.phone_num"></el-input>
    </el-form-item>
    <el-form-item prop="is_know_vein_throm">
      <label
        ><span style="color: red; margin-top: -21px">*</span
        >患者或家人对静脉溶栓治疗是否知晓</label
      >
      <el-select
        clearable
        v-model="form.is_know_vein_throm"
        placeholder="请选择"
      >
        <el-option
          v-for="item in dropDown.xl_isOrNo"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>

    <!-- 发病时间 -->
    <span class="title"> 发病时间(确切时间和估计时间至少选一项) : </span>
    <el-form-item label="发病时间(确切时间)" prop="exact_onset_time">
      <el-date-picker
        v-model="form.exact_onset_time"
        @change="
          computeTimeOdt(
            form.exact_onset_time,
            form.estimated_onset_time,
            form.arrival_time
          )
        "
        type="datetime"
        format="yyyy-MM-dd HH:mm"
        value-format="yyyy-MM-dd HH:mm"
        placeholder="请选择日期时间"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item label="发病时间(估计时间)" prop="estimated_onset_time">
      <el-date-picker
        v-model="form.estimated_onset_time"
        @change="
          computeTimeOdt(
            form.exact_onset_time,
            form.estimated_onset_time,
            form.arrival_time
          )
        "
        type="datetime"
        format="yyyy-MM-dd HH:mm"
        value-format="yyyy-MM-dd HH:mm"
        placeholder="请选择日期时间"
      >
      </el-date-picker>
      <span style="color: #426bba; font-weight: bold; margin-left: 10px">
        (24小时计时制；如为醒后卒中等不能明确发病时间，请填写最后正常时间)
      </span>
    </el-form-item>
    <el-form-item class="required" label="是否为醒后卒中" prop="wake_up_stroke">
      <el-select clearable v-model="form.wake_up_stroke" placeholder="请选择">
        <el-option
          v-for="item in dropDown.xl_isOrNo"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="required" label="首发症状" prop="first_state">
      <el-select
        clearable
        v-model="form.first_state"
        multiple
        collapse-tags
        placeholder="请选择"
      >
        <el-option
          v-for="item in dropDown.xl_first_state_choices"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item
      class="required"
      label="发病地点距离首诊医院"
      prop="first_place_his"
    >
      <el-select clearable v-model="form.first_place_his" placeholder="请选择">
        <el-option
          v-for="item in dropDown.xl_first_place_his_choices"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="required" label="首诊医院级别" prop="first_his_level">
      <el-select clearable v-model="form.first_his_level" placeholder="请选择">
        <el-option
          v-for="item in dropDown.xl_his_level_choices"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="required" label="到院时间" prop="arrival_time">
      <el-date-picker
        @change="
          computeOdtTime(
            form.exact_onset_time,
            form.estimated_onset_time,
            form.arrival_time
          )
        "
        v-model="form.arrival_time"
        type="datetime"
        format="yyyy-MM-dd HH:mm"
        value-format="yyyy-MM-dd HH:mm"
        placeholder="请选择日期时间"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item label="发病-到院(ODT)时间" prop="onset_to_door">
      <el-input clearable readonly v-model.trim="form.onset_to_door"
        ><template v-slot:suffix> 分钟&nbsp;&nbsp; </template>
      </el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import { defineComponent, reactive } from "vue";
import dropDown from "@/utils/dropDown.js";
import rules from "@/utils/rules.js";

export default defineComponent({
  setup() {
    let form = reactive({});

    // methods
    function setRecord(val) {
      this.isRecord = val;
    }
    // 发病到到院时间ODT
    function computeTimeOdt(time1, time2, time3) {
      console.log(time1, time2, time3);
      console.log(new Date(time1).getTime());
      if (time1 === null) {
        if (time2 === null) {
          this.hos_one_info.arrival_time = null;
          this.hos_one_info.onset_to_door = null;
        } else {
          if (time3 === null) {
            return;
          }
          if (
            new Date(time3).getTime() - new Date(time2).getTime() >
              10080 * 1000 * 60 ||
            new Date(time3).getTime() - new Date(time2).getTime() < 0
          ) {
            this.hos_one_info.arrival_time = null;
            this.hos_one_info.onset_to_door = null;
          } else {
            this.hos_one_info.onset_to_door = Math.floor(
              (new Date(time3).getTime() - new Date(time2).getTime()) /
                1000 /
                60
            );
          }
        }
      } else {
        if (time3 === null) {
          return;
        }
        if (
          new Date(time3).getTime() - new Date(time1).getTime() >
            10080 * 1000 * 60 ||
          new Date(time3).getTime() - new Date(time1).getTime() < 0
        ) {
          this.hos_one_info.arrival_time = null;
          this.hos_one_info.onset_to_door = null;
        } else {
          this.hos_one_info.onset_to_door = Math.floor(
            (new Date(time3).getTime() - new Date(time1).getTime()) / 1000 / 60
          );
        }
      }
    }
    // 获取首次nihss评分
    function getNihss(arr) {
      if (null === this.hos_one_info.front_nihss_faction) {
        this.$message.warning("首次NIHSS未完成");
        return;
      }
      this.first_nihss.forEach((i, item) => {
        this.hos_one_info[arr[item]] = this.hos_one_info[i];
      });
    }
    // 提交来访信息一
    function submitForm(formName) {
      var submit = true;
      this.isRecord = false;
      // this.$nextTick(
      //   ()=>{
      this.$refs[formName].clearValidate();
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //
        } else {
          console.log("error submit!!");
          // submit = false
        }
      });
      //   }
      // )
      return submit;
    }
    function submitRecord(formName) {
      var submit = true;
      this.isRecord = true;
      var retobj = {
        bret: true,
        failureNum: 0,
        finish_rate: 0,
      };
      var ruleLength = Object.keys(this.rules2).length;
      // this.$nextTick(
      //   ()=>{
      this.$refs[formName].validate((valid, elements) => {
        if (valid) {
          //两个发病时间必须填一个
          if (
            !this.hos_one_info.exact_onset_time &&
            !this.hos_one_info.estimated_onset_time
          ) {
            submit = false;
          }
          if (submit) {
            retobj.finish_rate = 100;
          } else {
            retobj.finish_rate = Math.ceil((1 / ruleLength) * 10000) / 100;
            retobj.failureNum = 1;
          }
          retobj.bret = submit;
        } else {
          submit = false;
          retobj.finish_rate =
            Math.ceil(
              ((ruleLength - Object.keys(elements).length) / ruleLength) * 10000
            ) / 100;
          retobj.failureNum = Object.keys(elements).length;
          retobj.bret = submit;
          console.log(
            "验证失败的元素：",
            elements,
            Object.keys(elements).length
          );
        }
      });
      console.info(retobj);
      //   }
      // )
      return retobj;
      // return submit|bonsettime
    }
    // 清空来访信息一
    function resetForm(formName) {
      this.$refs[formName].resetFields();
    }

    // 计算发病-到院时间
    function computeOdtTime(
      onsetExactTime,
      onsetReckonTime,
      toTheHospitalTime
    ) {
      if (onsetExactTime === null && onsetReckonTime === null) {
        this.$message.warning("请先选择发病确切时间或发病估计时间");
        this.hos_one_info.arrival_time = null;
        this.hos_one_info.onset_to_door = null;
      } else if (onsetExactTime !== null) {
        let onsetExactTimeStamp = new Date(onsetExactTime).getTime();
        let toTheHospitalTimeStamp = new Date(toTheHospitalTime).getTime();
        let minute = toTheHospitalTimeStamp - onsetExactTimeStamp;
        if (minute < 0) {
          this.$message.warning("请选择发病确切之后的时间");
          this.hos_one_info.arrival_time = null;
          this.hos_one_info.onset_to_door = null;
        } else if (minute > 10080 * 1000 * 60) {
          this.$message.warning("发病-到院时间必须在7天之内");
          this.hos_one_info.arrival_time = null;
          this.hos_one_info.onset_to_door = null;
        } else {
          this.hos_one_info.onset_to_door = Math.floor(minute / 1000 / 60);
        }
      } else {
        let onsetReckonTimeStamp = new Date(onsetReckonTime).getTime();
        let toTheHospitalTimeStamp = new Date(toTheHospitalTime).getTime();
        let minute = toTheHospitalTimeStamp - onsetReckonTimeStamp;
        if (minute < 0) {
          this.$message.warning("请选择发病估计之后的时间");
          this.hos_one_info.arrival_time = null;
          this.hos_one_info.onset_to_door = null;
        } else if (minute > 10080 * 1000 * 60) {
          this.$message.warning("发病-到院时间必须在7天之内");
          this.hos_one_info.arrival_time = null;
          this.hos_one_info.onset_to_door = null;
        } else {
          this.hos_one_info.onset_to_door = Math.floor(minute / 1000 / 60);
        }
      }
      this.$store.commit("changeToHospital", this.hos_one_info.arrival_time);
      this.topAutoComputeTime("arrival_time", "vein_med_time", "vein_dnt_time");
    }

    // 计算到院-DPT时间
    function computeDptTime(dptTime, toTheHospitalTime) {
      if (dptTime !== null && toTheHospitalTime !== null) {
        let dptTimeStamp = new Date(dptTime).getTime();
        let toTheHospitalTimeStamp = new Date(toTheHospitalTime).getTime();
        let minute = dptTimeStamp - toTheHospitalTimeStamp;
        if (minute >= 0) {
          this.hos_one_info.dpt_time = Math.floor(minute / 1000 / 60);
        }
      }
    }

    // 统一计算要求到院时间之后的时间
    function commonComputeAfterToHospitalTime(
      _time,
      toTheHospitalTime,
      clearField
    ) {
      if (toTheHospitalTime === null || toTheHospitalTime === "") {
        this.$message.warning("请先选择到院时间!");
        this.hos_one_info[clearField] = null;
      } else if (_time !== null) {
        let _TimeStamp = new Date(_time).getTime();
        let toTheHospitalTimeStamp = new Date(toTheHospitalTime).getTime();
        let minute = _TimeStamp - toTheHospitalTimeStamp;
        if (minute < 0) {
          this.$message.warning("请选择到院之后的时间!");
          this.hos_one_info[clearField] = null;
        }
      }
    }

    // 拨打120时间的校验
    function call120TimeChangeHandler(
      onsetExactTime,
      onsetReckonTime,
      call120Time
    ) {
      if (onsetExactTime === null && onsetReckonTime === null) {
        this.$message.warning("请先选择发病确切时间或发病估计时间");
        this.hos_one_info.call_120_time = null;
      } else if (onsetExactTime !== null) {
        let onsetExactTimeStamp = new Date(onsetExactTime).getTime();
        let call120TimeStamp = new Date(call120Time).getTime();
        if (call120TimeStamp - onsetExactTimeStamp < 0) {
          this.$message.warning("请选择发病确切之后的时间");
          this.hos_one_info.call_120_time = null;
        }
      } else if (onsetReckonTime !== null) {
        let onsetReckonTimeStamp = new Date(onsetReckonTime).getTime();
        let call120TimeStamp = new Date(call120Time).getTime();
        if (call120TimeStamp - onsetReckonTimeStamp < 0) {
          this.$message.warning("请选择发病估计之后的时间");
          this.hos_one_info.call_120_time = null;
        }
      }
    }
    // 耗时自动计算(改结束时间) :( 溶栓谈话耗时 到院-治疗时间  介入谈话耗时)   time1: 开始   time2: 结束  time: 耗时  timeText1:开始文字  timeText2:结束文字
    function autoComputeTime(time1, time2, time, textTime1, textTime2) {
      if (
        this.hos_one_info[time1] !== null &&
        this.hos_one_info[time2] !== null
      ) {
        let time1Stamp = new Date(this.hos_one_info[time1]).getTime();
        let time2Stamp = new Date(this.hos_one_info[time2]).getTime();
        let minute = time2Stamp - time1Stamp;
        if (minute < 0) {
          this.$message.warning(textTime2 + "必须在" + textTime1 + "之后!");
          this.hos_one_info[time2] = null;
          this.hos_one_info[time] = null;
        } else {
          this.hos_one_info[time] = Math.floor(minute / 1000 / 60);
        }
      } else if (time1 !== null) {
        this.hos_one_info[time] = null;
        return;
      } else {
        this.$message.warning("请选择" + textTime1 + "!");
        this.hos_one_info[time2] = null;
        this.hos_one_info[time] = null;
      }
    }
    // 耗时自动计算(改开始时间) :( 溶栓谈话耗时 到院-治疗时间  介入谈话耗时)   time1: 开始   time2: 结束  time: 耗时
    function topAutoComputeTime(time1, time2, time) {
      this.commonComputeAfterToHospitalTime(
        this.hos_one_info[time1],
        this.hos_one_info.arrival_time,
        time1
      );
      if (this.hos_one_info[time1] === null) {
        console.log(1);
        this.hos_one_info[time2] = null;
        this.hos_one_info[time] = null;
      } else {
        console.log(2);
        if (this.hos_one_info[time2] === null) {
          return;
        } else {
          let time1Stamp = new Date(this.hos_one_info[time1]).getTime();
          let time2Stamp = new Date(this.hos_one_info[time2]).getTime();
          let minute = time2Stamp - time1Stamp;
          if (minute < 0) {
            this.hos_one_info[time2] = null;
            this.hos_one_info[time] = null;
          } else {
            this.hos_one_info[time] = Math.floor(minute / 1000 / 60);
          }
        }
      }
    }
    // 溶栓谈话耗时
    function computeThromSpeakTime(time1, time2) {
      if (time1 !== null && time2 !== null) {
        let time1Stamp = new Date(time1).getTime();
        let time2Stamp = new Date(time2).getTime();
        let minute = time2Stamp - time1Stamp;
        if (minute < 0) {
          this.$message.warning("溶栓签字时间必须在溶栓开始谈话时间之后！");
          this.hos_one_info.throm_sign_time = null;
          this.hos_one_info.throm_speak_time = null;
        } else {
          this.hos_one_info.throm_speak_time = Math.floor(minute / 1000 / 60);
        }
      } else if (time1 !== null) {
        this.hos_one_info.throm_speak_time = null;
        return;
      } else {
        this.$message.warning("请选择溶栓开始谈话时间！");
        this.hos_one_info.throm_sign_time = null;
        this.hos_one_info.throm_speak_time = null;
        // this.commonComputeAfterToHospitalTime(this.hos_one_info.throm_sign_time, this.hos_one_info.arrival_time, 'throm_sign_time')
      }
    }

    // 介入谈话耗时
    function computeInterSpeakTime(time1, time2) {
      if (time1 !== null && time2 !== null) {
        let time1Stamp = new Date(time1).getTime();
        let time2Stamp = new Date(time2).getTime();
        let minute = time2Stamp - time1Stamp;
        if (minute < 0) {
          this.$message.warning("介入签字时间必须在溶栓介入谈话时间之后！");
          this.hos_one_info.inter_sign_time = null;
          this.hos_one_info.inter_speak_time = null;
        } else {
          this.hos_one_info.inter_speak_time = Math.floor(minute / 1000 / 60);
        }
      } else if (time1 !== null) {
        this.hos_one_info.inter_speak_time = null;
        return;
      } else {
        this.$message.warning("请选择介入开始谈话时间！");
        this.hos_one_info.inter_sign_time = null;
        this.hos_one_info.inter_speak_time = null;
      }
      // this.commonComputeAfterToHospitalTime(this.hos_one_info.inter_sign_time, this.hos_one_info.arrival_time, 'inter_sign_time')
    }

    // 静脉溶栓 到院-治疗时间
    function veinMedTimeBlur(time1, time2) {
      if (time2 === null || time2 === "") {
        this.$message.warning("请先选择到院时间!");
        this.hos_one_info.vein_dnt_time = null;
      } else if (time1 !== null && time2 !== null) {
        let timeStamp = new Date(time1).getTime() - new Date(time2).getTime();
        if (timeStamp >= 0) {
          this.hos_one_info.vein_dnt_time = Math.floor(timeStamp / 1000 / 60);
        } else {
          this.$message.warning("请选择到院之后的时间");
          this.hos_one_info.vein_dnt_time = null;
        }
      }
    }

    // 通过身份证号识别出生日期、年龄、性别
    function getBirthByIdentifyId(_identifyId) {
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
    }

    // 前循环分数求和
    function aspects_ct_forward_choices_fun(xh_arr, key_select, key_scord) {
      if (xh_arr !== "" && xh_arr.length !== 0) {
        if (xh_arr.indexOf(11) > -1) {
          // 目前选中的值包含 11 代表前循环ASPECTS-MRI评分为无异常
          this.hos_one_info[key_scord] = 0;
          this.hos_one_info[key_select] = [11];
        } else {
          var sum = 0;
          for (let i = 0, length = xh_arr.length; i < length; i++) {
            sum += this.dropDown.xl_aspects_ct_forward_choices[i].score;
          }
          this.hos_one_info[key_scord] = sum;
        }
      } else {
        this.hos_one_info[key_scord] = null;
      }
    }

    // 后循环分数求和
    function aspects_mri_back_choices_fun(xh_arr, key_select, key_scord) {
      if (xh_arr !== "" && xh_arr.length !== 0) {
        if (xh_arr.indexOf(9) > -1) {
          // 目前选中的值包含 9 代表后循环ASPECTS-MRI评分为无异常
          this.hos_one_info[key_scord] = 0;
          this.hos_one_info[key_select] = [9];
        } else {
          var sum = 0;
          for (let i = 0, length = xh_arr.length; i < length; i++) {
            sum += this.dropDown.xl_aspects_mri_back_choices[i].score;
          }
          this.hos_one_info[key_scord] = sum;
        }
      } else {
        this.hos_one_info[key_scord] = null;
      }
    }
    // 开通策略下来选项改变
    function activationStrategy() {
      if (
        this.hos_one_info.activation_strategy &&
        this.hos_one_info.activation_strategy.indexOf(6) > -1
      ) {
        this.hos_one_info.activation_strategy = [6];
      }
    }
    // 评分按钮
    function nihssToScore(key, popup) {
      this[popup] = true;
      for (let i in key) {
        this.nihss_temporary[this.nihss_temporary_key[i]] =
          this.hos_one_info[key[i]];
      }
    }
    // 弹框保存按钮 key: 改弹框评分的key  popup:改弹框控制显示与隐藏的值 scord: 该弹框评分后的分数的key  time: 该弹框的评分时间
    function nihssSave(key, popup, scord) {
      let sum = 0;
      for (let i in key) {
        if (
          this.hos_one_info[key[i]] !== null &&
          this.hos_one_info[key[i]] !== ""
        ) {
          sum += this.hos_one_info[key[i]];
        } else {
          this.$message.warning("您还有评分选项为评!");
          return;
        }
      }
      this.hos_one_info[scord] = sum;
      this[popup] = false;
      this.$message.success("评分成功!");
    }

    // 弹框取消按钮
    function nihssCancel(key, popup) {
      for (let i in key) {
        this.hos_one_info[key[i]] =
          this.nihss_temporary[this.nihss_temporary_key[i]];
      }
      this[popup] = false;
    }
    return {
      // 变量
      form,
      rules,
      dropDown: dropDown.dropDown1,
      // 方法
      setRecord,
      computeTimeOdt,
      getNihss,
      submitForm,
      submitRecord,
      resetForm,
      computeOdtTime,
      computeDptTime,
      commonComputeAfterToHospitalTime,
      call120TimeChangeHandler,
      autoComputeTime,
      topAutoComputeTime,
      computeThromSpeakTime,
      computeInterSpeakTime,
      veinMedTimeBlur,
      getBirthByIdentifyId,
      aspects_ct_forward_choices_fun,
      aspects_mri_back_choices_fun,
      activationStrategy,
      nihssToScore,
      nihssSave,
      nihssCancel,
    };
  },
});
</script>

<style lang="scss" scoped>
// 每部分资料内容标题
.title {
  color: #426bba;
  padding-left: 15px;
  font-weight: 600;
}
.el-form {
  border-radius: 5px;
  box-shadow: 0px 2px 7px 1px #0000001a;
  padding: 10px 0px;
  .el-divider--horizontal {
    margin: 5px 0px;
  }
  .el-form-item {
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;
  }
}
</style>
