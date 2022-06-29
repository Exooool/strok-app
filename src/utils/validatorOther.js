// 自定义校验器(结合Element的rules使用)

export default class validator {
  // 请保留一位小数位的数字
  static regExp = /^\d{0,10}([\b]*|\.|\.\d?|$)$/;
  // 保留一位或两位小数位的数字
  static regExp2 = /^\d{0,10}([\b]*|\.|\.\d{0,2}|$)$/;
  // 整数
  static regExp3 = /^([1-9]\d*|[0])$/;
  // 保留一位到五位小数位的数字
  static regExp4 = /^\d{0,15}([\b]*|\.|\.\d{0,5}|$)$/;
  // 手机或固定电话正则
  static phoneRegExp = /^((0\d{2,3}-\d{7,8})|(1[3584679]\d{9}))$/;

  static phoneRegExp2 =
    /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
  static phoneRegExp3 = /^(0\d{2,3})?-?\d{7,8}$/;

  // 校验年龄
  static checkAge = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
      // return callback(new Error('该字段不能为空'));
    } else if (!validator.regExp3.test(value)) {
      callback(new Error("请输入正整数!"));
    } else {
      if (value > 200 || value < 0) {
        callback(new Error("范围必须在0~200"));
      } else {
        callback();
      }
    }
  };
  static checkHypertensionYears = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
      // return callback(new Error('该字段不能为空'));
    } else if (!validator.regExp3.test(value)) {
      callback(new Error("请输入正整数!"));
    } else {
      if (value > 200 || value < 0) {
        callback(new Error("范围必须在0~200"));
      } else {
        callback();
      }
    }
  };
  // static checkPhone = (rule, value, callback) => {
  //     if (value === '' || value === null) {
  //         callback()
  //         // callback(new Error('不能为空'));
  //     } else if (!validator.phoneRegExp.test(value)) {
  //         callback(new Error('请输入正确的电话号码!'))
  //     } else {
  //         callback()
  //     }
  // }
  // static checkPhone2 = (rule, value, callback) => {
  //     if (value === '' || value === null) {
  //         callback()
  //     } else if (!validator.phoneRegExp2.test(value)) {
  //         callback(new Error('非法输入,请重新输入!'))
  //     } else if (!validator.phoneRegExp3.test(value)) {
  //         callback(new Error('非法输入!'))
  //     } else {
  //         callback()
  //     }
  // }

  static checkPhone3 = (rule, value, callback) => {
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
      callback(new Error("请输入正确的电话号码!"));
    }
  };
  // 无范围限制保留一位小数位的小数
  static checkUnLimit = (rule, value, callback) => {
    if (!value) {
      callback();
      // callback(new Error('该字段不能为空'))
    } else if (!validator.regExp.test(value)) {
      callback(new Error("请保留一位小数位的数字!"));
    } else {
      callback();
    }
  };
  static checkUnLimitInteger = (rule, value, callback) => {
    if (!value) {
      callback();
      // callback(new Error('该字段不能为空'))
    } else if (!validator.regExp3.test(value)) {
      callback(new Error("请输入正整数!"));
    } else {
      callback();
    }
  };
  static checkTemperature = (rule, value, callback) => {
    if (!value) {
      callback();
      // callback(new Error('该字段不能为空'))
    } else if (!validator.regExp.test(value)) {
      callback(new Error("请保留一位小数位的数字!"));
    } else {
      if (value > 41 || value < 25) {
        callback(new Error("范围必须在25.0℃~41.0℃"));
      } else {
        callback();
      }
    }
  };
  static checkPulse = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
      // return callback(new Error('该字段不能为空'));
    } else if (!validator.regExp3.test(value)) {
      callback(new Error("请输入正整数!"));
    } else {
      callback();
    }
  };
  static checkBreath = (rule, value, callback) => {
    if (value === "" || value === null) {
      callback();
      // return callback(new Error('该字段不能为空'));
    } else if (!validator.regExp3.test(value)) {
      callback(new Error("请输入正整数!"));
    } else {
      callback();
    }
  };
  // 收缩压、舒张压
  static checkSystolicBloodPressure = (rule, value, callback) => {
    if (!value) {
      callback();
      // callback(new Error('该字段不能为空'))
    } else if (!validator.regExp3.test(value)) {
      callback(new Error("请输入正整数!"));
    } else {
      if (value > 300 || value < 20) {
        callback(new Error("范围必须在20~300"));
      } else {
        callback();
      }
    }
  };
  // 身高
  static checkHeight = (rule, value, callback) => {
    if (!value) {
      callback();
      // callback(new Error('身高不能为空'))
    } else if (!validator.regExp.test(value)) {
      callback(new Error("请保留一位小数位的数字!"));
    } else {
      if (value > 250 || value < 20) {
        callback(new Error("范围必须在20~250"));
      } else {
        callback();
      }
    }
  };
  // 体重
  static checkWeight = (rule, value, callback) => {
    if (!value) {
      callback();
      // callback(new Error('体重不能为空'))
    } else if (!validator.regExp.test(value)) {
      callback(new Error("请保留一位小数位的数字!"));
    } else {
      if (value > 200 || value < 20) {
        callback(new Error("范围必须在20~200"));
      } else {
        callback();
      }
    }
  };
  // 快速血糖
  static checkFastSugar = (rule, value, callback) => {
    if (!value) {
      callback();
      // callback(new Error('快速血糖不能为空'))
    } else if (!validator.regExp.test(value)) {
      callback(new Error("请保留一位小数位的数字!"));
    } else {
      if (value > 50 || value < 0) {
        callback(new Error("范围必须在0~50"));
      } else {
        callback();
      }
    }
  };
  // 实验室检查
  static check0_10 = (rule, value, callback) => {
    if (!value) {
      callback();
      // callback(new Error('不能为空'))
    } else if (!validator.regExp2.test(value)) {
      callback(new Error("请保留一位或两位小数位的数字!"));
    } else {
      if (value > 10 || value < 0) {
        callback(new Error("范围必须在0~10"));
      } else {
        callback();
      }
    }
  };
  static check0_20 = (rule, value, callback) => {
    if (!value) {
      callback();
      // callback(new Error('不能为空'))
    } else if (!validator.regExp2.test(value)) {
      callback(new Error("请保留一位或两位小数位的数字!"));
    } else {
      if (value > 20 || value < 0) {
        callback(new Error("范围必须在0~20"));
      } else {
        callback();
      }
    }
  };
  static check0_50 = (rule, value, callback) => {
    if (!value) {
      callback();
      // callback(new Error('不能为空'))
    } else if (!validator.regExp2.test(value)) {
      callback(new Error("请保留一位或两位小数位的数字!"));
    } else {
      if (value > 50 || value < 0) {
        callback(new Error("范围必须在0~50"));
      } else {
        callback();
      }
    }
  };
  static check0_100 = (rule, value, callback) => {
    if (!value) {
      callback();
      // callback(new Error('不能为空'))
    } else if (!validator.regExp2.test(value)) {
      callback(new Error("请保留一位或两位小数位的数字!"));
    } else {
      if (value > 100 || value < 0) {
        callback(new Error("范围必须在0~100"));
      } else {
        callback();
      }
    }
  };
  static check0_300 = (rule, value, callback) => {
    if (!value) {
      callback();
      // callback(new Error('不能为空'))
    } else if (!validator.regExp2.test(value)) {
      callback(new Error("请保留一位或两位小数位的数字!"));
    } else {
      if (value > 300 || value < 0) {
        callback(new Error("范围必须在0~300"));
      } else {
        callback();
      }
    }
  };
  static check0_1000 = (rule, value, callback) => {
    if (!value) {
      callback();
      // callback(new Error('不能为空'))
    } else if (!validator.regExp2.test(value)) {
      callback(new Error("请保留一位或两位小数位的数字!"));
    } else {
      if (value > 1000 || value < 0) {
        callback(new Error("范围必须在0~1000"));
      } else {
        callback();
      }
    }
  };
  static check0_2000 = (rule, value, callback) => {
    if (!value) {
      callback();
      // callback(new Error('不能为空'))
    } else if (!validator.regExp2.test(value)) {
      callback(new Error("请保留一位或两位小数位的数字!"));
    } else {
      if (value > 2000 || value < 0) {
        callback(new Error("范围必须在0~2000"));
      } else {
        callback();
      }
    }
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
