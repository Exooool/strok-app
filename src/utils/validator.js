// 自定义校验器(结合Element的rules使用)

export default class validator {
  // 保留一位到五位小数位的数字
  static regExp4 = /^\d{0,15}([\b]*|\.|\.\d{0,5}|$)$/;

  static green_num = (rule, value, callback) => {
    callback();
  };
  static name = (rule, value, callback) => {
    callback();
  };
  static identity_num = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (
      !/(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/.test(
        value
      )
    ) {
      callback(new Error("身份证格式错误"));
    } else {
      callback();
    }
  };
  static age = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^[1-9]\d*$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 200 || value < 1) {
        callback(new Error("范围必须在1~200"));
      } else {
        callback();
      }
    }
  };
  static phone_num = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (
      /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(
        value
      )
    ) {
      callback();
    } else if (/^(0\d{2,3})?-?\d{7,8}$/.test(value)) {
      callback();
    } else {
      callback(new Error("非法输入,请重新输入!"));
    }
  };
  static vein_num = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d{0,3}|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static vein_weight = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 200 || value < 1) {
        callback(new Error("范围必须在1~200!"));
      } else {
        callback();
      }
    }
  };
  static temperature = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 41 || value < 25) {
        callback(new Error("范围必须在25.0℃~41.0℃"));
      } else {
        callback();
      }
    }
  };
  static pulse = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^[1-9]\d*$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static breath = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^[1-9]\d*$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static systolic_blood_pressure = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^[1-9]\d*$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 300 || value < 20) {
        callback(new Error("范围必须在20~300"));
      } else {
        callback();
      }
    }
  };
  static diastolic_blood_pressure = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^[1-9]\d*$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 300 || value < 20) {
        callback(new Error("范围必须在20~300"));
      } else {
        callback();
      }
    }
  };
  static height = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 250 || value < 20) {
        callback(new Error("范围必须在20.0~250.0"));
      } else {
        callback();
      }
    }
  };
  static fast_sugar = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 50 || value < 0) {
        callback(new Error("范围必须在0~50.0"));
      } else {
        callback();
      }
    }
  };
  static leukocyte = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d{0,2}|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 50 || value < 0) {
        callback(new Error("范围必须在0~50.00"));
      } else {
        callback();
      }
    }
  };
  static neutrophil = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d{0,2}|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 50 || value < 0) {
        callback(new Error("范围必须在0~50.00"));
      } else {
        callback();
      }
    }
  };
  static lymphocytes = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d{0,2}|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 50 || value < 0) {
        callback(new Error("范围必须在0~50.00"));
      } else {
        callback();
      }
    }
  };
  static hs_crp = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d{0,2}|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 300 || value < 0) {
        callback(new Error("范围必须在0~300.00"));
      } else {
        callback();
      }
    }
  };
  static inr = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d{0,2}|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 20 || value < 0) {
        callback(new Error("范围必须在0~20.00"));
      } else {
        callback();
      }
    }
  };
  static fibrinogen = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d{0,2}|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 20 || value < 0) {
        callback(new Error("范围必须在0~20.00"));
      } else {
        callback();
      }
    }
  };
  static d_dimer = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d{0,2}|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 20 || value < 0) {
        callback(new Error("范围必须在0~20.00"));
      } else {
        callback();
      }
    }
  };
  static fasting_blood_vessels = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d{0,2}|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 50 || value < 0) {
        callback(new Error("范围必须在0~50.00"));
      } else {
        callback();
      }
    }
  };
  static glycosylated_hemoglobin = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d{0,2}|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 20 || value < 0) {
        callback(new Error("范围必须在0~20.00"));
      } else {
        callback();
      }
    }
  };
  static alanine_amin = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d{0,2}|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 1000 || value < 0) {
        callback(new Error("范围必须在0~1000.00"));
      } else {
        callback();
      }
    }
  };
  static ldl_c = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d{0,2}|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 10 || value < 0) {
        callback(new Error("范围必须在0~10.00"));
      } else {
        callback();
      }
    }
  };
  static cycstatin_c = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d{0,2}|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 10 || value < 0) {
        callback(new Error("范围必须在0~10.00"));
      } else {
        callback();
      }
    }
  };
  static serum_uric_acid = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d{0,2}|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 1000 || value < 0) {
        callback(new Error("范围必须在0~1000.00"));
      } else {
        callback();
      }
    }
  };
  static serum_creatinine = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d{0,2}|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 2000 || value < 0) {
        callback(new Error("范围必须在0~2000.00"));
      } else {
        callback();
      }
    }
  };
  static urea_nitrogen = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d{0,2}|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 100 || value < 0) {
        callback(new Error("范围必须在0~100.00"));
      } else {
        callback();
      }
    }
  };
  static hcy = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d{0,2}|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 100 || value < 0) {
        callback(new Error("范围必须在0~100.00"));
      } else {
        callback();
      }
    }
  };

  // 表二
  static hosp_systolic_blood_pressure = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^[1-9]\d*$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 300 || value < 20) {
        callback(new Error("范围必须在20~300"));
      } else {
        callback();
      }
    }
  };
  static hosp_diastolic_blood_pressure = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^[1-9]\d*$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      if (value > 300 || value < 20) {
        callback(new Error("范围必须在20~300"));
      } else {
        callback();
      }
    }
  };
  static aspirin_dosage = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static clopidogrel_dosage = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static indobufen_dosage = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static ticagrelor_dosage = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static atorvastatin_dosage = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static rosuvastatin_dosage = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static simvastatin_dosage = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static pravastatin_dosage = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static fluvastatin_dosage = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static lovastatin_dosage = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static pitavastatin_dosage = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  // 表三
  static aspirin_dosage_onset = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static clopidogrel_dosage_onset = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static ticagrelor_dosage_onset = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static indobufen_dosage_onset = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static dipyridamole_dosage = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static cilostazol_dosage = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static atorvastatin_dosage_onset = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static rosuvastatin_dosage_onset = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static simvastatin_dosage_onset = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static lovastatin_dosage_onset = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static fluvastatin_dosage_onset = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static pitavastatin_dosage_onset = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
    } else if (!/^\d{0,5}([\b]*|\.|\.\d?|$)$/.test(value)) {
      callback(new Error("非法输入,请重新输入!"));
    } else {
      callback();
    }
  };
  static consciousness = (rule, value, callback) => {
    callback();
  };
  // 检查一位小数到五位小数
  static check0_10_to_fix5 = (rule, value, callback) => {
    if (!value) {
      callback();
      // callback(new Error('不能为空'))
    } else if (!validator.regExp4.test(value)) {
      callback(new Error("请保留一位到五位小数位的数字!"));
    } else {
      callback();
    }
  };
  static check0_20_to_fix5 = (rule, value, callback) => {
    if (!value) {
      callback();
      // callback(new Error('不能为空'))
    } else if (!validator.regExp4.test(value)) {
      callback(new Error("请保留一位到五位小数位的数字!"));
    } else {
      callback();
    }
  };
  static check0_100_to_fix5 = (rule, value, callback) => {
    if (!value) {
      callback();
      // callback(new Error('不能为空'))
    } else if (!validator.regExp4.test(value)) {
      callback(new Error("请保留一位到五位小数位的数字!"));
    } else {
      callback();
    }
  };
  static check0_1000_to_fix5 = (rule, value, callback) => {
    if (!value) {
      callback();
      // callback(new Error('不能为空'))
    } else if (!validator.regExp4.test(value)) {
      callback(new Error("请保留一位到五位小数位的数字!"));
    } else {
      callback();
    }
  };
  static check0_2000_to_fix5 = (rule, value, callback) => {
    if (!value) {
      callback();
      // callback(new Error('不能为空'))
    } else if (!validator.regExp4.test(value)) {
      callback(new Error("请保留一位到五位小数位的数字!"));
    } else {
      callback();
    }
  };
}
