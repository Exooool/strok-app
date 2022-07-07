<template>
  <div class="casAddModelOnePage">
    <div class="content">
      <div class="transient-ischemic-attack">
        <div class="collapse">
          <div class="collapse-content">
            <el-form
              v-loading="submitLoading"
              ref="ruleForm"
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
              <el-row>
                <el-form-item
                  prop="exact_onset_time"
                  label="发病时间(确切时间) "
                >
                  <el-date-picker
                    :picker-options="pickerOptions"
                    value-format="YYYY-MM-DD hh:mm"
                    format="YYYY-MM-DD hh:mm"
                    v-model="hos_one_info.exact_onset_time"
                    type="datetime"
                    placeholder="请选择日期时间"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item prop="estimated_onset_time">
                  <label
                    title="（24小时计时制；如不能明确发病时间，请填写最后正常时间）"
                  >
                    发病时间(估计时间)
                  </label>
                  <el-date-picker
                    :picker-options="pickerOptions"
                    value-format="YYYY-MM-DD hh:mm"
                    format="YYYY-MM-DD hh:mm"
                    v-model="hos_one_info.estimated_onset_time"
                    type="datetime"
                    placeholder="请选择日期时间"
                    title="（24小时计时制；如不能明确发病时间，请填写最后正常时间）"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item prop="wake_up_stroke" label="是否为醒后卒中">
                  <el-select
                    clearable
                    v-model="hos_one_info.wake_up_stroke"
                    placeholder="请选择"
                    value
                  >
                    <el-option
                      v-for="item in commonDropDownOptions.bool_choices"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-row>
              <el-form-item
                class="required"
                label="到院时间"
                prop="arrival_time"
              >
                <el-date-picker
                  @change="
                    computeOdtTime(
                      hos_one_info.exact_onset_time,
                      hos_one_info.estimated_onset_time,
                      hos_one_info.arrival_time
                    )
                  "
                  v-model="hos_one_info.arrival_time"
                  type="datetime"
                  value-format="YYYY-MM-DD hh:mm"
                  format="YYYY-MM-DD hh:mm"
                  placeholder="请选择日期时间"
                >
                </el-date-picker>
              </el-form-item>
              <el-form-item label="发病-到院(ODT)时间" prop="onset_to_door">
                <el-input
                  clearable
                  readonly
                  v-model.trim="hos_one_info.onset_to_door"
                  ><template #suffix>
                    <span>分钟&nbsp;&nbsp;</span>
                  </template>
                </el-input>
              </el-form-item>
              <div class="derived">
                <el-form-item label="是否头颅CT检查" prop="if_issue_head_ct">
                  <el-select
                    clearable
                    v-model="hos_one_info.if_issue_head_ct"
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
                <el-form-item
                  label="头颅CT检查时间"
                  prop="head_ct_time"
                  v-if="hos_one_info.if_issue_head_ct === 1"
                >
                  <el-date-picker
                    v-model="hos_one_info.head_ct_time"
                    type="datetime"
                    format="YYYY-MM-DD hh:mm"
                    value-format="YYYY-MM-DD hh:mm"
                    placeholder="请选择日期时间"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item
                  class="required"
                  label="头颅CT检查完成时间"
                  prop="ct_flat_time"
                  v-if="hos_one_info.if_issue_head_ct === 1"
                >
                  <el-date-picker
                    v-model="hos_one_info.ct_flat_time"
                    type="datetime"
                    format="YYYY-MM-DD hh:mm"
                    value-format="YYYY-MM-DD hh:mm"
                    placeholder="请选择日期时间"
                  >
                  </el-date-picker>
                </el-form-item>
              </div>
              <div class="derived">
                <el-form-item
                  class="required"
                  label="初步诊断"
                  prop="first_diagnosis_result"
                >
                  <el-select
                    clearable
                    v-model="hos_one_info.first_diagnosis_result"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in dropDown.xl_first_diagnosis_result_choices"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item
                  class="required"
                  label="是否大血管闭塞"
                  prop="is_vessel_occlusion_hos"
                  v-if="hos_one_info.first_diagnosis_result === 1"
                >
                  <el-select
                    clearable
                    v-model="hos_one_info.is_vessel_occlusion_hos"
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
                <el-form-item
                  label="闭塞类型"
                  prop="dead_artery"
                  v-if="
                    hos_one_info.first_diagnosis_result === 1 &&
                    hos_one_info.is_vessel_occlusion_hos === 1
                  "
                >
                  <el-select
                    clearable
                    v-model="hos_one_info.dead_artery"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in dropDown.xl_dead_artery"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <el-form-item
                class="required"
                label="发病后首次NIHSS评分"
                prop="front_nihss_faction"
              >
                <div class="scord">
                  <el-tag
                    type="success"
                    v-if="
                      hos_one_info.front_nihss_faction !== null &&
                      hos_one_info.front_nihss_faction !== ''
                    "
                    >已评
                  </el-tag>
                  <span
                    style="color: #4ecd00"
                    v-if="
                      hos_one_info.front_nihss_faction !== null &&
                      hos_one_info.front_nihss_faction !== ''
                    "
                    >&nbsp;&nbsp;{{
                      hos_one_info.front_nihss_faction
                    }}分&nbsp;&nbsp;&nbsp;&nbsp;</span
                  >
                  <el-tag
                    type="danger"
                    v-if="
                      hos_one_info.front_nihss_faction === null ||
                      hos_one_info.front_nihss_faction === ''
                    "
                    >未评
                  </el-tag>
                  <span
                    v-if="
                      hos_one_info.front_nihss_faction === null ||
                      hos_one_info.front_nihss_faction === ''
                    "
                    >&nbsp;&nbsp;&nbsp;&nbsp;</span
                  >
                  <el-tag
                    style="cursor: pointer"
                    @click="nihssToScore(first_nihss, 'nihssPopup')"
                  >
                    {{
                      hos_one_info.front_nihss_faction !== null &&
                      hos_one_info.front_nihss_faction !== ""
                        ? "修改评分"
                        : "评分"
                    }}
                  </el-tag>
                </div>
              </el-form-item>

              <!-- 首次发病后nihss弹出框 -->
              <div class="nihss-popup" v-if="nihssPopup">
                <div class="content">
                  <div class="title">发病后首次NIHSS评分</div>
                  <el-form-item
                    prop="front_nihss_time"
                    label="评分时间"
                    label-width="130px"
                  >
                    <el-date-picker
                      style="width: 200px; height: 30px"
                      format="YYYY-MM-DD hh:mm"
                      value-format="YYYY-MM-DD hh:mm"
                      v-model="hos_one_info.front_nihss_time"
                      type="datetime"
                      placeholder="请选择日期时间"
                    >
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item label-width="130px" label="意识水平">
                    <el-select
                      clearable
                      v-model="hos_one_info.first_nihss_cons_level"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in dropDown.nihss.nihssScoreYssp"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label-width="130px" label="意识水平提问">
                    <el-select
                      clearable
                      v-model="hos_one_info.first_nihss_cons_level_ask"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in dropDown.nihss.choices"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label-width="130px" label="意识水平指令">
                    <el-select
                      clearable
                      v-model="hos_one_info.first_nihss_cons_level_instruction"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in dropDown.nihss.ysspzl"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label-width="130px" label="凝视">
                    <el-select
                      clearable
                      v-model="hos_one_info.first_nihss_gaze"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in dropDown.nihss.ns"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label-width="130px" label="视野">
                    <el-select
                      clearable
                      v-model="hos_one_info.first_nihss_view"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in dropDown.nihss.sy"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label-width="130px" label="面瘫">
                    <el-select
                      clearable
                      v-model="hos_one_info.first_nihss_facial_paralysis"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in dropDown.nihss.mt"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label-width="130px" label="共济失调">
                    <el-select
                      clearable
                      v-model="hos_one_info.first_nihss_ataxia"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in dropDown.nihss.gjst"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label-width="130px" label="上肢运动左侧">
                    <el-select
                      clearable
                      v-model="
                        hos_one_info.first_nihss_left_side_upper_limb_movement
                      "
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in dropDown.nihss.szydzc"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label-width="130px" label="上肢运动右侧">
                    <el-select
                      clearable
                      v-model="
                        hos_one_info.first_nihss_right_side_upper_limb_movement
                      "
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in dropDown.nihss.szydyc"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label-width="130px" label="下肢运动左侧">
                    <el-select
                      clearable
                      v-model="
                        hos_one_info.first_nihss_left_side_lower_limb_movement
                      "
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in dropDown.nihss.xzydzc"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label-width="130px" label="下肢运动右侧">
                    <el-select
                      clearable
                      v-model="
                        hos_one_info.first_nihss_right_side_lower_limb_movement
                      "
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in dropDown.nihss.xzydyc"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label-width="130px" label="感觉">
                    <el-select
                      clearable
                      v-model="hos_one_info.first_nihss_feel"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in dropDown.nihss.gj"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label-width="130px" label="语言">
                    <el-select
                      clearable
                      v-model="hos_one_info.first_nihss_language"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in dropDown.nihss.yy"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label-width="130px" label="构音障碍">
                    <el-select
                      clearable
                      v-model="hos_one_info.first_nihss_dysarthria"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in dropDown.nihss.gyza"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label-width="130px" label="忽视症">
                    <el-select
                      clearable
                      v-model="hos_one_info.first_nihss_neglect"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in dropDown.nihss.hsz"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <!-- 保存 取消按钮 -->
                  <div class="button">
                    <el-button
                      type="primary"
                      @click="
                        nihssSave(
                          first_nihss,
                          'nihssPopup',
                          'front_nihss_faction',
                          'front_nihss_time'
                        )
                      "
                      >保存
                    </el-button>
                    <el-button
                      type="info"
                      plain
                      @click="nihssCancel(first_nihss, 'nihssPopup')"
                      >取消</el-button
                    >
                  </div>
                  <!-- 右上角关闭 -->
                  <div
                    class="out"
                    @click="nihssCancel(first_nihss, 'nihssPopup')"
                  >
                    <img src="@/assets/guanbi.png" title="关闭" />
                  </div>
                </div>
              </div>

              <div class="derived">
                <el-form-item
                  class="required"
                  label="来院方式"
                  prop="arrival_method"
                >
                  <el-select
                    clearable
                    v-model="hos_one_info.arrival_method"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in dropDown.xl_arrival_method_choices"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item
                  class="required"
                  label="120呼叫时间"
                  prop="call_120_time"
                  v-if="hos_one_info.arrival_method === 2"
                >
                  <el-date-picker
                    v-model="hos_one_info.call_120_time"
                    type="datetime"
                    format="YYYY-MM-DD hh:mm"
                    value-format="YYYY-MM-DD hh:mm"
                    placeholder="请选择日期时间"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item
                  prop="arrival_method"
                  v-if="hos_one_info.arrival_method === 2"
                >
                  <label class="huanhang">救护车转运是否提前通知医院</label>
                  <el-select
                    clearable
                    v-model="hos_one_info.is_notify_hosp"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in dropDown.xl_is_notify_hosp"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div
                class="derived"
                v-if="
                  hos_one_info.onset_to_door !== null &&
                  hos_one_info.onset_to_door <= 360 &&
                  hos_one_info.first_diagnosis_result == 1
                "
              >
                <el-form-item
                  class="required"
                  label="是否在本院行静脉溶栓"
                  prop="if_throm"
                >
                  <el-select
                    clearable
                    v-model="hos_one_info.if_throm"
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
                <div class="mini-derived" v-if="hos_one_info.if_throm === 1">
                  <el-form-item
                    class="required"
                    label="家属签字时间"
                    prop="throm_sign_time"
                  >
                    <el-date-picker
                      v-model="hos_one_info.throm_sign_time"
                      type="datetime"
                      format="YYYY-MM-DD hh:mm"
                      value-format="YYYY-MM-DD hh:mm"
                      placeholder="请选择日期时间"
                    >
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item
                    class="required"
                    label="给药时间"
                    prop="vein_med_time"
                  >
                    <el-date-picker
                      v-model="hos_one_info.vein_med_time"
                      type="datetime"
                      format="YYYY-MM-DD hh:mm"
                      value-format="YYYY-MM-DD hh:mm"
                      placeholder="请选择日期时间"
                    >
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item
                    class="required"
                    label="所给药物"
                    prop="vein_sty"
                  >
                    <el-select
                      clearable
                      v-model="hos_one_info.vein_sty"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in dropDown.jmrs.sgyw"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </div>
              <el-form-item
                class="required"
                label="初步处理"
                prop="first_handle"
              >
                <el-select
                  clearable
                  v-model="hos_one_info.first_handle"
                  placeholder="请选择"
                  multiple
                  collapse-tags
                >
                  <el-option
                    v-for="item in dropDown.xl_first_handle_choices"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <div
                v-if="
                  hos_one_info.first_handle &&
                  hos_one_info.first_handle.includes(2)
                "
              >
                <el-form-item
                  class="required"
                  label="是否介入治疗"
                  prop="is_inter"
                >
                  <el-select
                    clearable
                    v-model="hos_one_info.is_inter"
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
                <div v-if="hos_one_info.is_inter === 1">
                  <el-form-item
                    class="required"
                    label="家属签字时间"
                    prop="inter_sign_time"
                  >
                    <el-date-picker
                      v-model="hos_one_info.inter_sign_time"
                      type="datetime"
                      format="YYYY-MM-DD hh:mm"
                      value-format="YYYY-MM-DD hh:mm"
                      placeholder="请选择日期时间"
                    >
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item
                    class="required"
                    label="完成动脉穿刺时间"
                    prop="artery_puncture_time"
                  >
                    <el-date-picker
                      v-model="hos_one_info.artery_puncture_time"
                      type="datetime"
                      format="YYYY-MM-DD hh:mm"
                      value-format="YYYY-MM-DD hh:mm"
                      placeholder="请选择日期时间"
                    >
                    </el-date-picker>
                  </el-form-item>
                </div>
              </div>
            </el-form>
          </div>
        </div>
        <div class="footer">
          <div>
            <el-button
              :loading="submitLoading"
              type="primary"
              style="width: 100px; height: 40px"
              @click="submitFormData"
            >
              <span v-if="submitLoading">正在保存</span>
              <span v-else>保存</span>
            </el-button>
            <el-button @click="back" style="width: 100px; height: 40px"
              >返 回</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
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
  mounted() {
    this.getCaseDetails();
  },
  methods: {
    // 计算发病-到院时间
    computeOdtTime(onsetExactTime, onsetReckonTime, toTheHospitalTime) {
      if (
        (onsetExactTime === null && onsetReckonTime === null) ||
        toTheHospitalTime == null
      ) {
        this.$message.warning("请先选择发病时间和到院时间");
      } else if (onsetExactTime !== null && toTheHospitalTime !== null) {
        let onsetExactTimeStamp = new Date(onsetExactTime).getTime();
        let toTheHospitalTimeStamp = new Date(toTheHospitalTime).getTime();
        let minute = toTheHospitalTimeStamp - onsetExactTimeStamp;
        if (minute < 0) {
          this.$message.warning("请选择发病确切之后的时间");
          this.hos_one_info.onset_to_door = null;
        } else if (minute > 10080 * 1000 * 60) {
          this.$message.warning("发病-到院时间必须在7天之内");
          this.hos_one_info.onset_to_door = null;
        } else {
          this.hos_one_info.onset_to_door = Math.floor(minute / 1000 / 60);
        }
      } else if (onsetReckonTime !== null && toTheHospitalTime !== null) {
        let onsetReckonTimeStamp = new Date(onsetReckonTime).getTime();
        let toTheHospitalTimeStamp = new Date(toTheHospitalTime).getTime();
        let minute = toTheHospitalTimeStamp - onsetReckonTimeStamp;
        if (minute < 0) {
          this.$message.warning("请选择发病估计之后的时间");
          this.hos_one_info.onset_to_door = null;
        } else if (minute > 10080 * 1000 * 60) {
          this.$message.warning("发病-到院时间必须在7天之内");
          this.hos_one_info.onset_to_door = null;
        } else {
          this.hos_one_info.onset_to_door = Math.floor(minute / 1000 / 60);
        }
      }
    },
    // 评分按钮
    nihssToScore(key, popup) {
      this[popup] = true;
      for (let i in key) {
        this.nihss_temporary[this.nihss_temporary_key[i]] =
          this.hos_one_info[key[i]];
      }
    },
    // 弹框保存按钮 key: 改弹框评分的key  popup:改弹框控制显示与隐藏的值 scord: 该弹框评分后的分数的key  time: 该弹框的评分时间
    nihssSave(key, popup, scord) {
      let sum = 0;
      for (let i in key) {
        if (
          this.hos_one_info[key[i]] !== null &&
          this.hos_one_info[key[i]] !== ""
        ) {
          sum += this.hos_one_info[key[i]];
        } else {
          ElMessage.warning("您还有评分选项为评!");
          return;
        }
      }
      this.hos_one_info[scord] = sum;
      this[popup] = false;
      ElMessage.success("评分成功!");
    },
    // 弹框取消按钮
    nihssCancel(key, popup) {
      for (let i in key) {
        this.hos_one_info[key[i]] =
          this.nihss_temporary[this.nihss_temporary_key[i]];
      }
      this[popup] = false;
    },
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
      for (let i = 0; i < this.isArr.arr1.length; i++) {
        let val = this.hos_one_info[this.isArr.arr1[i]];
        if (val != null && val != undefined && val !== "") {
          this.hos_one_info[this.isArr.arr1[i]] = eval(
            this.hos_one_info[this.isArr.arr1[i]]
          );
        }
      }
    },
    // 设置默认值
    setDefaultValue(value) {
      for (let i = 0; i < this.setDefaultValue1.length; i++) {
        let val = this.hos_one_info[this.setDefaultValue1[i]];
        if (val == null || val == undefined || val == "") {
          this.hos_one_info[this.setDefaultValue1[i]] = value;
        }
      }
    },
    // 将一些字符串本来应该是null的,却得到'',转成null
    strToNull() {
      for (let i in this.convertEmptyStrNullKeys1) {
        if (this.hos_one_info[this.convertEmptyStrNullKeys1[i]] === "") {
          this.hos_one_info[this.convertEmptyStrNullKeys1[i]] = null;
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
      console.log(this.hos_one_info);
      this.convertAllArrayToStr();
      this.strToNull();
      this.hos_one_info.id = this.$route.params.id;
      console.log(this.hos_one_info);
      const res = await axios.post(
        `/peng/StrokeMapInfo/Update`,
        this.hos_one_info
      );
      if (res.status === 200) {
        this.$message.success("修改成功!");
        this.if_convert = false;
      } else {
        this.$message.error("更新失败!");
      }
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
    async getCaseDetails() {
      let param = { id: this.$route.params.id };
      await axios.post("/peng/StrokeMapInfo/Get", param).then((res) => {
        console.log(res);
        Object.keys(this.hos_one_info).forEach((key) => {
          if (key == "first_diagnosis_result" && !res.data.data[key]) {
            this.hos_one_info[key] = 1;
          } else if (key == "inter_know_choice" && !res.data.data[key]) {
            this.hos_one_info[key] = 1;
          } else if (key == "throm_know_choice" && !res.data.data[key]) {
            this.hos_one_info[key] = 1;
          } else {
            this.hos_one_info[key] = res.data.data[key];
          }
        });
        this.setDefaultValue("2");
        // this.timeChange();
        this.convertAllStrToArray();
        // this.$store.commit("changeToHospital", this.hos_one_info.arrival_time);
        // this.dataDetails = true;
        this.submitLoading = false;
      });
    },
  },
  data() {
    return {
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
      submitLoading: true,
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
      // 应该是数组的key
      isArr: {
        arr1: [
          "first_handle",
          "first_state",
          "ele_exception_type",
          "medical_history",
          "front_med",
          "aspects_ct_forward_choices",
          "aspects_ct_back_choices",
          "aspects_mri_forward_choices",
          "aspects_mri_back_choices",
          "inter_bad",
          "hosp_other_reason",
          "front_abs_contrian",
          "front_rel_contrian",
          "back_abs_contrian",
          "back_rel_contrian",
          "other_rel_contrain",
          "activation_strategy",
        ],
      },
      // 设置默认值 2
      setDefaultValue1: [
        "isast_sugar",
        "isExam",
        "isleukocyte",
        "isINR",
        "isalanine_amin",
        "isserum_creatinine",
        "isneutrophil",
        "islymphocytes",
        "ishs_crp",
        "isfibrinogen",
        "isd_dimer",
        "isfasting_blood_vessels",
        "isglycosylated_hemoglobin",
        "isldl_c",
        "iscycstatin_c",
        "isserum_uric_acid",
        "isurea_nitrogen",
        "ishcy",
      ],
      // 空字符串转成null的key
      convertEmptyStrNullKeys1: [
        "age",
        "temperature",
        "pulse",
        "throm_front_nihss_faction",
        "throm_after_nihss_faction",
        "throm_abnormal_sty",
        "is_inter",
        "is_inter_know",
        "before_tici_grade",
        "first_again_tici",
        "inter_know_choice",
        "systolic_blood_pressure",
        "diastolic_blood_pressure",
        "height",
        "vein_weight",
        "fast_sugar",
        "leukocyte",
        "neutrophil",
        "lymphocytes",
        "hs_crp",
        "inr",
        "fibrinogen",
        "d_dimer",
        "fasting_blood_vessels",
        "glycosylated_hemoglobin",
        "alanine_amin",
        "ldl_c",
        "cycstatin_c",
        "serum_uric_acid",
        "serum_creatinine",
        "urea_nitrogen",
        "hcy",
        "vein_num",
        "weight",
        "live_state",
        "live_style",
        "protect_sty",
        "cultural_level",
        "relationship",
        "is_know_vein_throm",
        "wake_up_stroke",
        "first_place_his",
        "arrival_method",
        "is_notify_hosp",
        "first_his_level",
        "if_transfer_hosp",
        "sea_his_level",
        "no_inter_reason",
        "stent_therapy",
        "inter_after_nihss_faction",
        "inter_front_nihss_faction",
        "first_come",
        "change_condition_hosp",
        "if_consultation_by_stroke_team",
        "illness_level",
        "pos_mrs_faction",
        "consciousness2",
        "if_throm",
        "if_throm_concurrent",
        "if_throm_bad_event",
        "if_inter_bad_event",
        "no_inter_reason_other",
        "ele_result",
        "if_open_venous_channel",
        "first_diagnosis_result",
        "is_vessel_occlusion_hos",
        "dead_artery",
        "finally_again_tici",
        "if_issue_head_ct",
        "is_cranial_imaging",
        "if_mechanical_throm",
        "first_nihss_cons_level",
        "first_nihss_cons_level_ask",
        "first_nihss_cons_level_instruction",
        "first_nihss_gaze",
        "first_nihss_view",
        "first_nihss_facial_paralysis",
        "first_nihss_left_side_upper_limb_movement",
        "first_nihss_right_side_upper_limb_movement",
        "first_nihss_left_side_lower_limb_movement",
        "first_nihss_right_side_lower_limb_movement",
        "first_nihss_ataxia",
        "first_nihss_feel",
        "first_nihss_language",
        "first_nihss_dysarthria",
        "first_nihss_neglect",
        "facial_paralysis",
        "upperLimb_weakness",
        "speech_disorder",
        "eyeball_gaze",
        "disowned",
        "qculomoto_reaction",
        "lang_reaction",
        "sport_reaction",
        "aspects_ct_forward_choices",
        "before_throm_nihss_cons_level",
        "before_throm_nihss_cons_level_ask",
        "before_throm_nihss_cons_level_instruction",
        "before_throm_nihss_gaze",
        "before_throm_nihss_view",
        "before_throm_nihss_facial_paralysis",
        "before_throm_nihss_left_side_upper_limb_movement",
        "before_throm_nihss_right_side_upper_limb_movement",
        "before_throm_nihss_left_side_lower_limb_movement",
        "before_throm_nihss_right_side_lower_limb_movement",
        "before_throm_nihss_ataxia",
        "before_throm_nihss_feel",
        "before_throm_nihss_language",
        "before_throm_nihss_dysarthria",
        "before_throm_nihss_neglect",
        "after_throm_nihss_cons_level",
        "after_throm_nihss_cons_level_ask",
        "after_throm_nihss_cons_level_instruction",
        "after_throm_nihss_gaze",
        "after_throm_nihss_view",
        "after_throm_nihss_facial_paralysis",
        "after_throm_nihss_left_side_upper_limb_movement",
        "after_throm_nihss_right_side_upper_limb_movement",
        "after_throm_nihss_left_side_lower_limb_movement",
        "after_throm_nihss_right_side_lower_limb_movement",
        "after_throm_nihss_ataxia",
        "after_throm_nihss_feel",
        "after_throm_nihss_language",
        "after_throm_nihss_dysarthria",
        "after_throm_nihss_neglect",
        "before_inter_nihss_cons_level",
        "before_inter_nihss_cons_level_ask",
        "before_inter_nihss_cons_level_instruction",
        "before_inter_nihss_gaze",
        "before_inter_nihss_view",
        "before_inter_nihss_facial_paralysis",
        "before_inter_nihss_left_side_upper_limb_movement",
        "before_inter_nihss_right_side_upper_limb_movement",
        "before_inter_nihss_left_side_lower_limb_movement",
        "before_inter_nihss_right_side_lower_limb_movement",
        "before_inter_nihss_ataxia",
        "before_inter_nihss_feel",
        "before_inter_nihss_language",
        "before_inter_nihss_dysarthria",
        "before_inter_nihss_neglect",
        "after_inter_nihss_cons_level",
        "after_inter_nihss_cons_level_ask",
        "after_inter_nihss_cons_level_instruction",
        "after_inter_nihss_gaze",
        "after_inter_nihss_view",
        "after_inter_nihss_facial_paralysis",
        "after_inter_nihss_left_side_upper_limb_movement",
        "after_inter_nihss_right_side_upper_limb_movement",
        "after_inter_nihss_left_side_lower_limb_movement",
        "after_inter_nihss_right_side_lower_limb_movement",
        "after_inter_nihss_ataxia",
        "after_inter_nihss_feel",
        "after_inter_nihss_language",
        "after_inter_nihss_dysarthria",
        "after_inter_nihss_neglect",
        "diabetes_years",
        "hypertension_years",
      ],
      // 多选key
      inHospitalInfo1MultipleKeys: ["first_state", "first_handle"],
    };
  },
  setup() {
    const data = reactive({});

    return {
      data,
    };
  },
});
</script>

<style lang="scss" scoped>
.casAddModelOnePage {
  .transient-ischemic-attack {
    .required {
      color: #f56c6c;
    }

    .footer {
      width: 100%;
      display: flex;
      margin: 60px 0 18px 0;

      div {
        width: 100%;
        text-align: center;
      }
    }
    .huanhang {
      display: flex;
      align-items: center;
      line-height: 20px;
    }
    .el-select {
      width: 220px;
    }

    // /deep/ .el-select {
    //   width: 200px !important;
    //   .el-input__inner {
    //     height: 40px;
    //     overflow: hidden; //超出的文本隐藏
    //     text-overflow: ellipsis; //溢出用省略号显示
    //     white-space: nowrap; //溢出不换行
    //   }
    // }
    .el-input {
      width: 230px !important;
    }
    // 隐藏默认日期icon
    .el-date-editor {
      position: relative;

      .el-input__prefix {
        display: none;
      }
    }
  }
  // 弹框样式
  .nihss-popup {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    .getNihss {
      position: absolute;
      top: 29px;
      right: 68px;
    }
    .content {
      box-sizing: border-box;
      position: absolute;
      overflow-y: auto;
      overflow-x: hidden;
      // top: calc((100% - 650px)/2);
      // left: calc((100% - 900px)/2);
      max-width: 900px;
      width: 90%;
      height: 80%;
      background: #fff;
      padding-top: 40px;
      border-radius: 8px;
      margin: auto;
      text-align: center;
      .out {
        position: absolute;
        top: 10px;
        right: 10px;
      }
      .title {
        width: 100%;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
      }

      .button {
        display: flex;
        justify-content: space-between;
        padding: 10px 40%;
      }
    }
  }
}
</style>
