import validators from "./validator.js";
const rules = {
  inter_after_nihss_faction: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  inter_front_nihss_faction: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  green_num: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  name: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  age: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.age, trigger: "blur" },
  ],
  sex: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  birth_date: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  current_address: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  live_state: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  live_style: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  protect_sty: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  cultural_level: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  identity_num: [{ validator: validators.identity_num, trigger: "blur" }],
  phone_num: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.phone_num, trigger: "blur" },
  ],
  wake_up_stroke: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  first_state: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  first_place_his: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  first_his_level: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  front_nihss_faction: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  arrival_method: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  call_120_time: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  if_transfer_hosp: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  sea_his_level: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  arrival_time: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  if_throm: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  throm_doc_time: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  throm_doc: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  throm_know_choice: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  throm_sign_time: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  throm_speak_time: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  if_throm_bad_event: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  throm_abnormal_time: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  throm_abnormal_sty: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  fast_sugar: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.fast_sugar, trigger: "blur" },
  ],
  fast_sugar_time: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  first_come: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  change_condition_hosp: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  if_consultation_by_stroke_team: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  class_see_time: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  pos_mrs_faction: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  temperature: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.temperature, trigger: "blur" },
  ],
  pulse: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.pulse, trigger: "blur" },
  ],
  breath: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.breath, trigger: "blur" },
  ],
  systolic_blood_pressure: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.systolic_blood_pressure, trigger: "blur" },
  ],
  diastolic_blood_pressure: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.diastolic_blood_pressure, trigger: "blur" },
  ],
  consciousness2: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  first_diagnosis_result: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  is_vessel_occlusion_hos: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  history_main: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  medical_history: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  first_handle: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  is_inter: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  inter_doc_time: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  inter_know_choice: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  inter_sign_time: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  artery_puncture_time: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  // before_tici_grade: [
  //   { required: true, message: "该字段不能为空", trigger: "blur" },
  // ],
  first_again_tici: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  first_again_tici_time: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  stent_therapy: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  if_inter_bad_event: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  inter_bad: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  inter_bad_time: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  first_handle_other: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  first_gcs_faction: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  qculomoto_reaction: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  lang_reaction: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  sport_reaction: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  front_med_other: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  isExam: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  ct_flat_time: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  isleukocyte: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  isneutrophil: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  islymphocytes: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  ishs_crp: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  isINR: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  isfibrinogen: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  isd_dimer: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  isfasting_blood_vessels: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  isglycosylated_hemoglobin: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  isalanine_amin: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  isldl_c: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  iscycstatin_c: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  isserum_uric_acid: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  isserum_creatinine: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  isurea_nitrogen: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  ishcy: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  ishis_cranial_imagingcy: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  leukocyte_time: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  inr_time: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  alanine_amin_time: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  serum_creatinine_time: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  vein_med_time: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
  ],
  vein_sty: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  dpt_time: [{ required: true, message: "该字段不能为空", trigger: "blur" }],
  vein_num: [{ validator: validators.vein_num, trigger: "blur" }],
  weight: [{ validator: validators.vein_weight, trigger: "blur" }],
  vein_weight: [{ validator: validators.vein_weight, trigger: "blur" }],
  height: [{ validator: validators.height, trigger: "blur" }],
  leukocyte: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.leukocyte, trigger: "blur" },
  ],
  neutrophil: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.neutrophil, trigger: "blur" },
  ],
  lymphocytes: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.lymphocytes, trigger: "blur" },
  ],
  hs_crp: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.hs_crp, trigger: "blur" },
  ],
  inr: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.inr, trigger: "blur" },
  ],
  fibrinogen: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.fibrinogen, trigger: "blur" },
  ],
  d_dimer: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.check0_20_to_fix5, trigger: "blur" },
  ],
  fasting_blood_vessels: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.fasting_blood_vessels, trigger: "blur" },
  ],
  glycosylated_hemoglobin: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.glycosylated_hemoglobin, trigger: "blur" },
  ],
  alanine_amin: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.alanine_amin, trigger: "blur" },
  ],
  ldl_c: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.check0_10_to_fix5, trigger: "blur" },
  ],
  cycstatin_c: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.cycstatin_c, trigger: "blur" },
  ],
  serum_uric_acid: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.check0_1000_to_fix5, trigger: "blur" },
  ],
  urea_nitrogen: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.check0_100_to_fix5, trigger: "blur" },
  ],
  hcy: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.hcy, trigger: "blur" },
  ],
  serum_creatinine: [
    { required: true, message: "该字段不能为空", trigger: "blur" },
    { validator: validators.check0_2000_to_fix5, trigger: "blur" },
  ],
};

export default rules;
