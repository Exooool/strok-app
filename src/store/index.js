import { createStore } from "vuex";

export default createStore({
  // 公共状态
  state: {
    // 到院时间
    toHospital: null,
    commonDropDownOptions: {
      sex_choices: [
        {
          value: 1,
          // 选项文本
          label: "男",
        },
        {
          value: 2,
          label: "女",
        },
      ],
      bool_choices: [
        {
          value: 1,
          label: "是",
        },
        {
          value: 2,
          label: "否",
        },
      ],
      bool_choices3: [
        {
          value: 1,
          label: "有",
        },
        {
          value: 2,
          label: "无",
        },
      ],
      bool_choices4: [
        {
          value: 1,
          label: "已评",
        },
        {
          value: 2,
          label: "未评",
        },
      ],
      nationList: [
        "汉族",
        "壮族",
        "满族",
        "回族",
        "苗族",
        "维吾尔族",
        "土家族",
        "彝族",
        "蒙古族",
        "藏族",
        "布依族",
        "侗族",
        "瑶族",
        "朝鲜族",
        "白族",
        "哈尼族",
        "哈萨克族",
        "黎族",
        "傣族",
        "畲族",
        "傈僳族",
        "仡佬族",
        "东乡族",
        "高山族",
        "拉祜族",
        "水族",
        "佤族",
        "纳西族",
        "羌族",
        "土族",
        "仫佬族",
        "锡伯族",
        "柯尔克孜族",
        "达斡尔族",
        "景颇族",
        "毛南族",
        "撒拉族",
        "布朗族",
        "塔吉克族",
        "阿昌族",
        "普米族",
        "鄂温克族",
        "怒族",
        "京族",
        "基诺族",
        "德昂族",
        "保安族",
        "俄罗斯族",
        "裕固族",
        "乌孜别克族",
        "门巴族",
        "鄂伦春族",
        "独龙族",
        "塔塔尔族",
        "赫哲族",
        "珞巴族",
      ],
      bool_choices5: [
        {
          value: 1,
          label: "是",
        },
        {
          value: 2,
          label: "否",
        },
        {
          value: 3,
          label: "不详",
        },
      ],
      bool_choices6: [
        {
          value: 1,
          label: "同意",
        },
        {
          value: 2,
          label: "拒绝",
        },
      ],
      abcd2_faction_choices: [
        {
          label: "年龄",
          choices: [
            {
              id: 1,
              score: 1,
              label: "≥60岁(1分)",
            },
            {
              id: 99,
              score: 0,
              label: "其他(0分)",
            },
          ],
        },
        {
          label: "血压",
          choices: [
            {
              id: 1,
              score: 1,
              label: "≥140/90mmHg(1分)",
            },
            {
              id: 99,
              score: 0,
              label: "其他(0分)",
            },
          ],
        },
        {
          label: "临床表现",
          choices: [
            {
              id: 1,
              score: 2,
              label: "≥单侧肢体无力(2分)",
            },
            {
              id: 2,
              score: 1,
              label: "有言语障碍而无肢体无力(1分)",
            },
            {
              id: 99,
              score: 0,
              label: "其他(0分)",
            },
          ],
        },
        {
          label: "症状持续时间",
          choices: [
            {
              id: 1,
              score: 2,
              label: "≥60分钟(2分)",
            },
            {
              id: 2,
              score: 1,
              label: "10-59分钟(1分)",
            },
            {
              id: 99,
              score: 0,
              label: "其他(0分)",
            },
          ],
        },
        {
          label: "糖尿病",
          choices: [
            {
              id: 1,
              score: 1,
              label: "口服降糖药或应用胰岛素治疗(1分)",
            },
            {
              id: 99,
              score: 0,
              label: "其他(0分)",
            },
          ],
        },
      ],
    },
    hos_one_select_opts: {
      sex_choices: [
        {
          value: 1,
          label: "男",
        },
        {
          value: 2,
          label: "女",
        },
      ],
      dead_artery_choices: [
        {
          value: 1,
          label: "前循环",
        },
        {
          value: 2,
          label: "后循环",
        },
      ],
      live_state_choices: [
        {
          value: 1,
          label: "单独居住",
        },
        {
          value: 2,
          label: "与他人同住",
        },
      ],
      live_style_choices: [
        {
          value: 1,
          label: "城市",
        },
        {
          value: 2,
          label: "农村",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      protect_sty_choices: [
        {
          value: 1,
          label: "城镇职工、居民医保或公费医保",
        },
        {
          value: 2,
          label: "农村合作医疗",
        },
        {
          value: 3,
          label: "商业保险",
        },
        {
          value: 4,
          label: "自费",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      cultural_level_choices: [
        {
          value: 1,
          label: "大学或以上",
        },
        {
          value: 2,
          label: "高中或大专",
        },
        {
          value: 3,
          label: "小学或初中",
        },
        {
          value: 4,
          label: "文盲",
        },
      ],
      first_state_choices: [
        {
          value: 1,
          label: "呕吐",
        },
        {
          value: 2,
          label: "意识障碍",
        },
        {
          value: 3,
          label: "肢体无力",
        },
        {
          value: 4,
          label: "复视",
        },
        {
          value: 5,
          label: "失语",
        },
        {
          value: 6,
          label: "构音障碍",
        },
        {
          value: 7,
          label: "口角歪斜",
        },
        {
          value: 8,
          label: "头痛",
        },
        {
          value: 9,
          label: "感觉异常",
        },
        {
          value: 10,
          label: "眩晕",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      first_place_his_choices: [
        {
          value: 1,
          label: "大于20公里",
        },
        {
          value: 2,
          label: "小于20公里",
        },
      ],
      arrival_method_choices: [
        {
          value: 1,
          label: "自行到达医院",
        },
        {
          value: 2,
          label: "呼叫 120 由救护车送院",
        },
        {
          value: 3,
          label: "卒中移动单元（溶栓车）",
        },
        {
          value: 4,
          label: "院内发病",
        },
        {
          value: 5,
          label: "转院",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      his_level_choices: [
        {
          value: 1,
          label: "三甲",
        },
        {
          value: 2,
          label: "三乙",
        },
        {
          value: 3,
          label: "二甲",
        },
        {
          value: 4,
          label: "一甲",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      first_come_choices: [
        {
          value: 1,
          label: "神经科急诊",
        },
        {
          value: 2,
          label: "普通急诊科",
        },
        {
          value: 3,
          label: "神经内科门诊",
        },
        {
          value: 4,
          label: "神经外科门诊",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      change_choices: [
        {
          value: 1,
          label: "加重",
        },
        {
          value: 2,
          label: "完全缓解",
        },
        {
          value: 3,
          label: "部分缓解",
        },
        {
          value: 4,
          label: "无变化",
        },
      ],
      consciousness_choices: [
        {
          value: 1,
          label: "清醒",
        },
        {
          value: 2,
          label: "模糊",
        },
        {
          value: 3,
          label: "谵妄",
        },
        {
          value: 4,
          label: "嗜睡",
        },
        {
          value: 5,
          label: "昏睡",
        },
        {
          value: 6,
          label: "浅昏迷",
        },
        {
          value: 7,
          label: "中昏迷",
        },
        {
          value: 8,
          label: "深昏迷",
        },
      ],
      illness_level_choices: [
        {
          value: 1,
          label: "濒危病人",
        },
        {
          value: 2,
          label: "危重病人",
        },
        {
          value: 3,
          label: "急症病人",
        },
        {
          value: 4,
          label: "非急症病人",
        },
      ],
      first_diagnosis_result_choices: [
        {
          value: 1,
          label: "缺血性卒中",
        },
        {
          value: 2,
          label: "出血性卒中",
        },
        {
          value: 3,
          label: "未分类卒中",
        },
        {
          value: 4,
          label: "非卒中",
        },
      ],
      first_handle_choices: [
        {
          value: 1,
          label: "溶栓",
        },
        {
          value: 2,
          label: "介入",
        },
        {
          value: 3,
          label: "手术",
        },
        {
          value: 4,
          label: "常规",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      medical_history_choices: [
        {
          value: 1,
          label: "脑梗死",
        },
        {
          value: 2,
          label: "脑出血",
        },
        {
          value: 3,
          label: "蛛网膜下腔出血",
        },
        {
          value: 4,
          label: "其他未分类卒中",
        },
        {
          value: 5,
          label: "短暂性脑缺血发作",
        },
        {
          value: 6,
          label: "高血压",
        },
        {
          value: 7,
          label: "糖尿病",
        },
        {
          value: 8,
          label: "血脂异常",
        },
        {
          value: 9,
          label: "慢性阻塞性肺疾病",
        },
        {
          value: 10,
          label: "房颤",
        },
        {
          value: 11,
          label: "房扑",
        },
        {
          value: 12,
          label: "冠心病",
        },
        {
          value: 13,
          label: "心肌梗死",
        },
        {
          value: 14,
          label: "先天性心脏病",
        },
        {
          value: 15,
          label: "瓣膜性心脏病",
        },
        {
          value: 16,
          label: "其他类型心脏疾病",
        },
        {
          value: 17,
          label: "外周动脉疾病",
        },
        {
          value: 18,
          label: "大手术",
        },
        {
          value: 19,
          label: "头颅外伤",
        },
        {
          value: 20,
          label: "肿瘤病史",
        },
        {
          value: 99,
          label: "其他",
        },
        {
          value: 97,
          label: "无",
        },
      ],
      front_med_choices: [
        {
          value: 1,
          label: "抗血小板",
        },
        {
          value: 2,
          label: "抗凝药",
        },
        {
          value: 3,
          label: "降压药",
        },
        {
          value: 4,
          label: "降糖药",
        },
        {
          value: 5,
          label: "调脂药",
        },
        {
          value: 6,
          label: "其他（其他用药史）",
        },
      ],
      vein_sty_choices: [
        {
          value: 1,
          label: "rt-PA",
        },
        {
          value: 2,
          label: "尿激酶",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      vein_with_med_choices: [
        {
          value: 1,
          label: "非严重并发症",
        },
        {
          value: 2,
          label: "严重并发症,36小时内发生症状性颅内出血",
        },
        {
          value: 3,
          label: "威胁生命,36小时内发生严重的全身出血",
        },
        {
          value: 4,
          label: "其他严重的并发症",
        },
        {
          value: 98,
          label: "不详",
        },
      ],
      no_throm_reason_choices: [
        {
          value: 1,
          label: "超过rt-PA静脉溶栓时间窗(4.5 小时) ",
        },
        {
          value: 2,
          label: "存在时间窗内静脉溶栓的禁忌症",
        },
        {
          value: 3,
          label: "医院相关或其他原因",
        },
        {
          value: 4,
          label: "经济原因",
        },
        {
          value: 5,
          label: "患者及家属拒绝",
        },
        {
          value: 98,
          label: "不详",
        },
      ],
      throm_abnormal_sty_choices: [
        {
          value: 1,
          label: "颅内出血",
        },
        {
          value: 2,
          label: "其他不良事件",
        },
      ],
      tici_grade_choices: [
        {
          value: 1,
          label: "0级",
        },
        {
          value: 2,
          label: "1级",
        },
        {
          value: 3,
          label: "2a级",
        },
        {
          value: 4,
          label: "2b级",
        },
        {
          value: 5,
          label: "3级",
        },
      ],
      activation_strategy_choices: [
        {
          value: 1,
          label: "动脉溶栓",
        },
        {
          value: 2,
          label: "支架取栓",
        },
        {
          value: 3,
          label: "中间导管抽栓",
        },
        {
          value: 4,
          label: "球囊扩张成形",
        },
        {
          value: 5,
          label: "支架置入成形",
        },
        {
          value: 6,
          label: "仅造影评估",
        },
        {
          value: 7,
          label: "机械碎栓",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      no_inter_reason_choices: [
        {
          value: 1,
          label: "存在介入治疗禁忌症",
        },
        {
          value: 2,
          label: "评估非大血管病变",
        },
        {
          value: 3,
          label: "医院相关或其他原因",
        },
        {
          value: 4,
          label: "经济原因",
        },
        {
          value: 5,
          label: "患者/家属拒绝",
        },
        {
          value: 99,
          label: "其他",
        },
        {
          value: 98,
          label: "不详",
        },
      ],
      ele_exception_type_choices: [
        {
          value: 1,
          label: "房颤",
        },
        {
          value: 2,
          label: "房扑",
        },
        {
          value: 3,
          label: "左室肥厚",
        },
        {
          value: 4,
          label: "病理性Q波",
        },
        {
          value: 5,
          label: "心肌缺血改变",
        },
        {
          value: 6,
          label: "急性心肌梗死",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      inter_bad_choices: [
        {
          value: 1,
          label: "颅内症状性出血",
        },
        {
          value: 2,
          label: "术中出现新发部位栓塞",
        },
        {
          value: 3,
          label: "血栓向远端移动,引起新的血管闭塞",
        },
        {
          value: 4,
          label: "血栓向近端增长/ 移动,引起新的血管闭塞",
        },
        {
          value: 5,
          label: "血管痉挛",
        },
        {
          value: 6,
          label: "血管夹层",
        },
        {
          value: 7,
          label: "支架内血栓形成",
        },
        {
          value: 8,
          label: "动脉瘤形成",
        },
        {
          value: 9,
          label: "血管穿孔引起脑出血",
        },
        {
          value: 10,
          label: "血管穿孔引起蛛网膜下腔出血",
        },
        {
          value: 11,
          label: "再灌注损伤引起颅内出血",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      mrs_faction_choices: [
        {
          value: 0,
          label: "完全没有症状",
        },
        {
          value: 1,
          label: "尽管有症状；但未见明显障碍；能完成所有经常从事的职责和活动",
        },
        {
          value: 2,
          label:
            "轻度残障；不能完成所有以前从事的活动，但能处理个人事物而不需帮助",
        },
        {
          value: 3,
          label: "中度残障；需要一些协助，但行动不需要协助",
        },
        {
          value: 4,
          label: "重度残障；离开他人协助不能行走，以及不能照顾自己的身体需要",
        },
        {
          value: 5,
          label: "严重残障；卧床不起、大小便失禁，须持续护理和照顾",
        },
        {
          value: 6,
          label: "死亡",
        },
      ],
      embolism_complication_choices: [
        {
          value: 1,
          label: "血栓向远端移动,引起新的血管闭塞",
        },
        {
          value: 2,
          label: "血栓向近端增长/移动,引起新的血管闭塞",
        },
        {
          value: 3,
          label: "血管痉挛",
        },
        {
          value: 4,
          label: "血管夹层",
        },
        {
          value: 5,
          label: "支架内血栓形成",
        },
        {
          value: 6,
          label: "动脉瘤形成",
        },
        {
          value: 7,
          label: "血管穿孔引起脑出血",
        },
        {
          value: 8,
          label: "血管穿孔引起蛛网膜下腔出血",
        },
        {
          value: 9,
          label: "再灌注损伤引起颅内出血",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      relationship_choices: [
        {
          value: 1,
          label: "直系亲属",
        },
        {
          value: 2,
          label: "家属",
        },
        {
          value: 3,
          label: "朋友",
        },
        {
          value: 4,
          label: "同事",
        },
        {
          value: 5,
          label: "其他",
        },
      ],
      gcs_faction_choices: [
        {
          label: "动眼反应",
          choices: [
            {
              value: 1,
              label: "无睁眼(1分)",
            },
            {
              value: 2,
              label: "疼痛刺激眼睛(2分)",
            },
            {
              value: 3,
              label: "语言命令睁眼(3分)",
            },
            {
              value: 4,
              label: "自然睁眼(4分)",
            },
          ],
        },
        {
          label: "语言反应",
          choices: [
            {
              value: 1,
              label: "无语言反应(1分)",
            },
            {
              value: 2,
              label: "有音无语(2分)",
            },
            {
              value: 3,
              label: "言语错乱(3分)",
            },
            {
              value: 4,
              label: "语言含糊/不当(4分)",
            },
            {
              value: 5,
              label: "定向力好(5分)",
            },
          ],
        },
        {
          label: "运动反应",
          choices: [
            {
              value: 1,
              label: "无运动反应(1分)",
            },
            {
              value: 2,
              label: "疼痛刺激伸直(2分)",
            },
            {
              value: 3,
              label: "疼痛刺激屈取(3分)",
            },
            {
              value: 4,
              label: "逃避疼痛(4分)",
            },
            {
              value: 5,
              label: "疼痛定位(5分)",
            },
            {
              value: 6,
              label: "遵嘱运动(6分)",
            },
          ],
        },
      ],
      nihss_faction_choices: [
        {
          label: "意识水平",
          choices: [
            {
              value: 0,
              label: "清醒，反应敏锐(0分)",
            },
            {
              value: 1,
              label: "嗜睡。最小刺激能唤醒病人完成指令、回答问题有反应(1分)",
            },
            {
              value: 2,
              label:
                "昏睡或反应迟钝，需要强烈反复刺激或疼痛刺激才能有非固定模式的反应(2分)",
            },
            {
              value: 3,
              label: "仅有反射活动或自发反应，或完全没反应、软瘫、无反应(3分)",
            },
          ],
        },
        {
          label: "意识水平提问",
          choices: [
            {
              value: 0,
              label: "都正确(0分)",
            },
            {
              value: 1,
              label: "正确回答一个(1分)",
            },
            {
              value: 2,
              label: "两个都不正确或不能说(2分)",
            },
          ],
        },
        {
          label: "意识水平指令",
          choices: [
            {
              value: 0,
              label: "都正确(0分)",
            },
            {
              value: 1,
              label: "正确完成一个(1分)",
            },
            {
              value: 2,
              label: "都不正确(2分)",
            },
          ],
        },
        {
          label: "凝视",
          choices: [
            {
              value: 0,
              label: "正常(0分)",
            },
            {
              value: 1,
              label:
                "部分凝视麻痹（单眼或者双眼凝视异常，但无被动凝视或完全凝视麻痹(1分)",
            },
            {
              value: 2,
              label: "被动凝视或完全凝视麻痹（不能被眼头动作克服）(2分)",
            },
          ],
        },
        {
          label: "视野",
          choices: [
            {
              value: 0,
              label: "无视野缺失(0分)",
            },
            {
              value: 1,
              label: "部分偏盲(1分)",
            },
            {
              value: 2,
              label: "完全偏盲(2分)",
            },
            {
              value: 3,
              label: "双侧偏盲（全盲，包括皮质盲）(3分)",
            },
          ],
        },
        {
          label: "面瘫",
          choices: [
            {
              value: 0,
              label: "正常(0分)",
            },
            {
              value: 1,
              label: "最小（鼻唇够变平、微笑时不对称）(1分)",
            },
            {
              value: 2,
              label: "部分（下面部双侧瘫痪，上下面部缺乏运动，周围性瘫）(2分)",
            },
            {
              value: 3,
              label: "完全（单或者双侧瘫痪，上下面部缺乏运动，周围性瘫）(3分)",
            },
          ],
        },
        {
          label: "上肢运动左侧",
          choices: [
            {
              value: 0,
              label: "上肢于要求位置坚持10秒，无下落(0分)",
            },
            {
              value: 1,
              label:
                "上肢能抬起，但不能维持10秒，下落时不撞击床或其他支持物(1分)",
            },
            {
              value: 2,
              label:
                "能对抗一些重力，但上肢不能达到或维持坐位90度或卧位45度，较快下落到床上(2分)",
            },
            {
              value: 3,
              label: "不能抗重力，上肢快速下落(3分)",
            },
            {
              value: 4,
              label: "无运动(4分)",
            },
            {
              value: 9,
              label: "截肢或关节融合(9分)",
            },
          ],
        },
        {
          label: "上肢运动右侧",
          choices: [
            {
              value: 0,
              label: "上肢于要求位置坚持10秒，无下落(0分)",
            },
            {
              value: 1,
              label:
                "上肢能抬起，但不能维持10秒，下落时不撞击床或其他支持物(1分)",
            },
            {
              value: 2,
              label:
                "能对抗一些重力，但上肢不能达到或维持坐位90度或卧位45度，较快下落到床上(2分)",
            },
            {
              value: 3,
              label: "不能抗重力，上肢快速下落(3分)",
            },
            {
              value: 4,
              label: "无运动(4分)",
            },
            {
              value: 9,
              label: "截肢或关节融合(9分)",
            },
          ],
        },
        {
          label: "下肢运动左侧",
          choices: [
            {
              value: 0,
              label: "于要求位置坚持5秒，不下落(0分)",
            },
            {
              value: 1,
              label: "在5秒未下落，不撞击床(1分)",
            },
            {
              value: 2,
              label: "5秒内较快下落到床上，但可抗重力(2分)",
            },
            {
              value: 3,
              label: "快速落下，不能抗重力(3分)",
            },
            {
              value: 4,
              label: "无运动(4分)",
            },
            {
              value: 9,
              label: "截肢或关节融合(9分)",
            },
          ],
        },
        {
          label: "下肢运动右侧",
          choices: [
            {
              value: 0,
              label: "于要求位置坚持5秒，不下落(0分)",
            },
            {
              value: 1,
              label: "在5秒未下落，不撞击床(1分)",
            },
            {
              value: 2,
              label: "5秒内较快下落到床上，但可抗重力(2分)",
            },
            {
              value: 3,
              label: "快速落下，不能抗重力(3分)",
            },
            {
              value: 4,
              label: "无运动(4分)",
            },
            {
              value: 9,
              label: "截肢或关节融合(9分)",
            },
          ],
        },
        {
          label: "共济失调",
          choices: [
            {
              value: 0,
              label: "没有共济失调(0分)",
            },
            {
              value: 1,
              label: "一个肢体有(1分)",
            },
            {
              value: 2,
              label: "两个肢体均有(2分)",
            },
            {
              value: 9,
              label: "截肢或关节融合(9分)",
            },
          ],
        },
        {
          label: "感觉",
          choices: [
            {
              value: 0,
              label: "正常，没有感觉缺失(0分)",
            },
            {
              value: 1,
              label: "轻到中度，患侧针刺感不明显或为钝性或仅有触觉(1分)",
            },
            {
              value: 2,
              label: "严重到完全感觉缺失，面、上肢、下肢无触觉(2分)",
            },
          ],
        },
        {
          label: "语言",
          choices: [
            {
              value: 0,
              label: "正常，无失语(0分)",
            },
            {
              value: 1,
              label:
                "轻到中度: 流利程度和理解能力有一些缺失，但表达无明显受限(1分)",
            },
            {
              value: 2,
              label:
                "严重失语，交流是通过病人破碎的语言表达，听者须推理、询问、猜测，能交换的信息范围有限，检查者感交流困难(2分)",
            },
            {
              value: 3,
              label: "哑或完全失语，不能讲或不能理解(3分)",
            },
          ],
        },
        {
          label: "构音障碍",
          choices: [
            {
              value: 0,
              label: "正常(0分)",
            },
            {
              value: 1,
              label: "轻到中度，至少有一些发音不清，虽有困难但能理解(1分)",
            },
            {
              value: 2,
              label: "言语不清，不能理解(2分)",
            },
            {
              value: 9,
              label: "气管插管或其他物理障碍(9分)",
            },
          ],
        },
        {
          label: "忽视症",
          choices: [
            {
              value: 0,
              label: "没有忽视症(0分)",
            },
            {
              value: 1,
              label:
                "视、触、听、空间觉或个人忽视；或对任何一种感觉的双侧同时刺激消失(1分)",
            },
            {
              value: 2,
              label:
                "严重的偏身忽视；超过一种形式的偏身忽视，不认识自己的手，只对一侧空间定位(2分)",
            },
          ],
        },
      ],
      fast_ed_faction_choices: [
        {
          label: "面瘫",
          choices: [
            {
              value: 0,
              label: "正常或轻微面瘫(0分)",
            },
            {
              value: 1,
              label: "部分或完全面瘫(1分)",
            },
          ],
        },
        {
          label: "上肢无力",
          choices: [
            {
              value: 0,
              label: "无瘫痪(0分)",
            },
            {
              value: 1,
              label: "有瘫痪/抗部分重力(1分)",
            },
            {
              value: 2,
              label: "不能抗重力/无活动(2分)",
            },
          ],
        },
        {
          label: "言语障碍",
          choices: [
            {
              value: 0,
              label: "无语言障碍(0分)",
            },
            {
              value: 1,
              label: "轻-中度(1分)",
            },
            {
              value: 2,
              label: "严重，全面失语，缄默(2分)",
            },
          ],
        },
        {
          label: "眼球凝视",
          choices: [
            {
              value: 0,
              label: "无(0分)",
            },
            {
              value: 1,
              label: "部分(1分)",
            },
            {
              value: 2,
              label: "强迫凝视(2分)",
            },
          ],
        },
        {
          label: "失认/忽视",
          choices: [
            {
              value: 0,
              label: "无(0分)",
            },
            {
              value: 1,
              label: "不能感知双侧同时的中感觉刺激(1分)",
            },
            {
              value: 2,
              label: "不能识别自己的手或仅能感知一侧肢体(2分)",
            },
          ],
        },
      ],
      aspects_ct_choices_new: [
        {
          id: 1,
          value: 1,
          label: "尾状核（C）(1分)",
        },
        {
          id: 2,
          value: 1,
          label: "豆状核（L）(1分)",
        },
        {
          id: 3,
          value: 1,
          label: "内囊（IC）(1分)",
        },
        {
          id: 4,
          value: 1,
          label: "大脑中动脉前皮质区（M1）(1分)",
        },
        {
          id: 5,
          value: 1,
          label: "岛叶皮质（I）(1分)",
        },
        {
          id: 6,
          value: 1,
          label: "大脑中动脉岛叶外侧皮质区（M2）(1分)",
        },
        {
          id: 7,
          value: 1,
          label: "大脑中动脉后皮层区（M3）(1分)",
        },
        {
          id: 8,
          value: 1,
          label: "M1上方的大脑中动脉皮层（M4）(1分)",
        },
        {
          id: 9,
          value: 1,
          label: "M2上方的大脑中动脉皮层（M5）(1分)",
        },
        {
          id: 10,
          value: 1,
          label: "M3上方的大脑中动脉皮层（M6）(1分)",
        },
        {
          id: 11,
          value: 0,
          label: "以上区域均无异常(0分)",
        },
      ],
      aspects_back_forward_choices_new: [
        {
          id: 1,
          score: 2,
          label: "脑桥任何部位(2分)",
        },
        {
          id: 2,
          score: 2,
          label: "中脑任何部位(2分)",
        },
        {
          id: 3,
          score: 1,
          label: "左侧小脑(1分)",
        },
        {
          id: 4,
          score: 1,
          label: "右侧小脑(1分)",
        },
        {
          id: 5,
          score: 1,
          label: "左侧丘脑(1分)",
        },
        {
          id: 6,
          score: 1,
          label: "右侧丘脑(1分)",
        },
        {
          id: 7,
          score: 1,
          label: "左侧大脑后动脉供血区(1分)",
        },
        {
          id: 8,
          score: 1,
          label: "右侧大脑后动脉供血区(1分)",
        },
        {
          id: 9,
          score: 0,
          label: "以上区域均无异常(0分)",
        },
      ],
    },
    hos_two_select_opts: {
      in_room_choices: [
        {
          value: 1,
          label: "卒中单元",
        },
        {
          value: 2,
          label: "普通神经内科病房",
        },
        {
          value: 3,
          label: "神经外科",
        },
        {
          value: 4,
          label: "神经介入",
        },
        {
          value: 5,
          label: "NICU",
        },
        {
          value: 6,
          label: "ICU",
        },
        {
          value: 7,
          label: "内科",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      front_abs_contrian_choices: [
        {
          value: 1,
          label: "收缩压>185或舒张压>110mmHg(尽管降压治疗)",
        },
        {
          value: 2,
          label: "卒中发作时出现痫性发作",
        },
        {
          value: 3,
          label: "近期手术/外伤(<15天)",
        },
        {
          value: 4,
          label: "近日颅内或脊髓手术,头部外伤,或卒中(<3月)",
        },
        {
          value: 5,
          label: "既往有颅内出血或动脉瘤或血管畸形或脑肿瘤病史",
        },
        {
          value: 6,
          label: "活动性内脏出血",
        },
        {
          value: 7,
          label:
            "血小板<100,000, PTT>40秒使用肝素后,且PT>15或INR>1.7,或已知出血性体质",
        },
        {
          value: 8,
          label: "怀疑蛛网膜下腔出血",
        },
        {
          value: 9,
          label: "CT发现(ICH,SAH,或大面积梗死征象)",
        },
        {
          value: 10,
          label: "血糖<50(2.8mmol/L)or>400mg/dl(22.22mmol/L)",
        },
      ],
      front_rel_contrian_choices: [
        {
          value: 1,
          label: "严重卒中(如NIHSS>22)",
        },
        {
          value: 2,
          label: "左心附壁血栓",
        },
        {
          value: 3,
          label: "由于合并症增加出血风险",
        },
        {
          value: 4,
          label: "妊娠",
        },
        {
          value: 5,
          label: "年龄>80岁",
        },
        {
          value: 6,
          label: "预期寿命<1年或者严重的合并症",
        },
        {
          value: 7,
          label: "患者/家属拒绝",
        },
        {
          value: 8,
          label: "卒中小组不能确定患者是否符合溶栓条件",
        },
        {
          value: 9,
          label: "在院外静脉或动脉给予溶栓药物",
        },
        {
          value: 10,
          label: "症状过于轻微",
        },
        {
          value: 11,
          label: "症状迅速改善",
        },
        {
          value: 12,
          label: "使用违禁药物",
        },
        {
          value: 13,
          label: "少量脑内微出血（1-10个）",
        },
      ],
      back_abs_contrian_choices: [
        {
          value: 1,
          label: "收缩压>185或舒张压>110mmHg(尽管降压治疗)",
        },
        {
          value: 2,
          label: "卒中发作时出现痫性发作",
        },
        {
          value: 3,
          label: "近期手术/外伤(<15天)",
        },
        {
          value: 4,
          label: "近日颅内或脊髓手术,头部外伤,或卒中(<3月)",
        },
        {
          value: 5,
          label: "既往有颅内出血或动脉瘤或血管畸形或脑肿瘤病史",
        },
        {
          value: 6,
          label: "活动性内脏出血",
        },
        {
          value: 7,
          label:
            "血小板<100,000, PTT>40秒使用肝素后,且PT>15或INR>1.7,或已知出血性体质",
        },
        {
          value: 8,
          label: "怀疑蛛网膜下腔出血",
        },
        {
          value: 9,
          label: "CT发现(ICH,SAH,或大面积梗死征象)",
        },
        {
          value: 10,
          label: "血糖<50(2.8mmol/L)or>400mg/dl(22.22mmol/L)",
        },
      ],
      back_rel_contrian_choices: [
        {
          value: 1,
          label: "严重卒中(如NIHSS>22)",
        },
        {
          value: 2,
          label: "左心附壁血栓",
        },
        {
          value: 3,
          label: "由于合并症增加出血风险",
        },
        {
          value: 4,
          label: "妊娠",
        },
        {
          value: 5,
          label: "年龄>80岁",
        },
        {
          value: 6,
          label: "预期寿命<1年或者严重的合并症",
        },
        {
          value: 7,
          label: "患者/家属拒绝",
        },
        {
          value: 8,
          label: "卒中小组不能确定患者是否符合溶栓条件",
        },
        {
          value: 9,
          label: "在院外静脉或动脉给予溶栓药物",
        },
        {
          value: 10,
          label: "症状过于轻微",
        },
        {
          value: 11,
          label: "症状迅速改善",
        },
        {
          value: 12,
          label: "使用违禁药物",
        },
        {
          value: 13,
          label: "少量脑内微出血（1-10个）",
        },
      ],
      other_rel_contrain_choices: [
        {
          value: 1,
          label: "既往卒中和糖尿病",
        },
        {
          value: 2,
          label: "就诊前使用抗凝药物 (即使 INR < 1.7)",
        },
        {
          value: 3,
          label: "NIHSS>25",
        },
        {
          value: 4,
          label: "CT提示梗死面积>1/3MCA供血区",
        },
      ],
      hosp_other_reason_choices: [
        {
          value: 1,
          label: "院前转运时间过长",
        },
        {
          value: 2,
          label: "卒中诊断延迟",
        },
        {
          value: 3,
          label: "在院检查时间延迟",
        },
        {
          value: 4,
          label: "无法建立静脉通路",
        },
      ],
      embolism_complication_choices: [
        {
          value: 1,
          label: "血栓向远端移动,引起新的血管闭塞",
        },
        {
          value: 2,
          label: "血栓向近端增长/移动,引起新的血管闭塞",
        },
        {
          value: 3,
          label: "血管痉挛",
        },
        {
          value: 4,
          label: "血管夹层",
        },
        {
          value: 5,
          label: "支架内血栓形成",
        },
        {
          value: 6,
          label: "动脉瘤形成",
        },
        {
          value: 7,
          label: "血管穿孔引起脑出血",
        },
        {
          value: 8,
          label: "血管穿孔引起蛛网膜下腔出血",
        },
        {
          value: 9,
          label: "再灌注损伤引起颅内出血",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      smoke_history_choices: [
        {
          value: 1,
          label: "现在吸烟",
        },
        {
          value: 2,
          label: "曾经吸烟",
        },
        {
          value: 3,
          label: "从未吸烟",
        },
      ],
      drunk_history_choices: [
        {
          value: 1,
          label: "现在饮酒",
        },
        {
          value: 2,
          label: "曾经饮酒",
        },
        {
          value: 3,
          label: "从不饮酒",
        },
        {
          value: 98,
          label: "不详",
        },
      ],
      antiplatelet_drugs_type_choices: [
        {
          value: 1,
          label: "阿司匹林",
        },
        {
          value: 2,
          label: "氯吡格雷",
        },
        {
          value: 3,
          label: "吲哚布芬",
        },
        {
          value: 4,
          label: "替格瑞洛",
        },
        {
          value: 5,
          label: "双嘧达莫",
        },
        {
          value: 6,
          label: "西洛他唑",
        },
        {
          value: 7,
          label: "奥扎格雷(静脉)",
        },
        {
          value: 8,
          label: "替洛非班",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      anticoagulant_type_choices: [
        {
          value: 1,
          label: "华法令",
        },
        {
          value: 2,
          label: "低分子肝素",
        },
        {
          value: 3,
          label: "普通肝素",
        },
        {
          value: 4,
          label: "利伐沙班",
        },
        {
          value: 5,
          label: "达比加群",
        },
        {
          value: 6,
          label: "阿哌沙班",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      adjust_blood_type_hos_choices: [
        {
          value: 1,
          label: "他汀类(阿托伐他汀钙等)",
        },
        {
          value: 2,
          label: "贝特类(非诺贝特、吉非贝齐等)",
        },
        {
          value: 3,
          label: "胆酸螯合树脂类(考来烯胺等)",
        },
        {
          value: 4,
          label: "烟酸及其衍生物(阿西莫司等)",
        },
        {
          value: 5,
          label: "脂必妥",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      hypogly_drugs_be_hos_choices: [
        {
          value: 1,
          label: "胰岛素（静脉或皮下）",
        },
        {
          value: 2,
          label: "磺酰脲类",
        },
        {
          value: 3,
          label: "双胍类",
        },
        {
          value: 4,
          label: "α糖苷酶抑制剂",
        },
        {
          value: 5,
          label: "胰岛素增敏剂",
        },
        {
          value: 6,
          label: "非磺酰脲类胰岛素分泌剂",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      anti_drugs_be_hos_choices: [
        {
          value: 1,
          label: "钙离子拮抗剂",
        },
        {
          value: 2,
          label: "血管紧张素转换酶抑制剂(ACEI)",
        },
        {
          value: 3,
          label: "血管紧张素II受体拮抗剂(ARB)",
        },
        {
          value: 4,
          label: "利尿剂",
        },
        {
          value: 5,
          label: "β受体阻滞剂",
        },
        {
          value: 6,
          label: "α受体阻滞剂",
        },
        {
          value: 7,
          label: "α、β受体阻滞剂",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      anti_infection_be_hos_choices: [
        {
          value: 1,
          label: "内酰胺类",
        },
        {
          value: 2,
          label: "氨基糖甙类",
        },
        {
          value: 3,
          label: "大环内酯类",
        },
        {
          value: 4,
          label: "喹诺酮类",
        },
        {
          value: 5,
          label: "抗病毒药",
        },
        {
          value: 6,
          label: "抗真菌药",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      chinese_medicine_sty_choices: [
        {
          value: 1,
          label: "静脉制剂",
        },
        {
          value: 2,
          label: "口服制剂",
        },
      ],
      precaution_type_choices: [
        {
          value: 1,
          label: "普通肝素",
        },
        {
          value: 2,
          label: "低分子肝素",
        },
        {
          value: 3,
          label: "华法林",
        },
        {
          value: 4,
          label: "血栓泵/气压治疗",
        },
        {
          value: 5,
          label: "弹力袜",
        },
        {
          value: 6,
          label: "早期活动",
        },
      ],
      dvt_people_choices: [
        {
          value: 1,
          label: "护士",
        },
        {
          value: 2,
          label: "医生",
        },
        {
          value: 3,
          label: "康复师",
        },
        {
          value: 4,
          label: "家属",
        },
      ],
      no_swallow_reason_choices: [
        {
          value: 1,
          label: "医院没有配备相关与业人员",
        },
        {
          value: 2,
          label: "患者或家属拒绝",
        },
        {
          value: 3,
          label: "患者症状缓解",
        },
        {
          value: 4,
          label: "患者病情不允许",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      swallow_result_choices: [
        {
          value: 1,
          label: "良好",
        },
        {
          value: 2,
          label: "困难",
        },
      ],
      swallow_type_choices: [
        {
          value: 1,
          label: "主动运动练习(缓慢延展运动)",
        },
        {
          value: 2,
          label: "被动运动练习(缓慢延展运动、深层按摩)",
        },
        {
          value: 3,
          label: "物理疗法(如冷觉、热觉、震劢、电流刺激法等)",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      swallow_people_choices: [
        {
          value: 1,
          label: "护士",
        },
        {
          value: 2,
          label: "医生",
        },
        {
          value: 3,
          label: "康复师",
        },
        {
          value: 4,
          label: "家属",
        },
      ],
      no_body_reason_choices: [
        {
          value: 1,
          label: "医院没有配备相关与业人员",
        },
        {
          value: 2,
          label: "患者或家属拒绝",
        },
        {
          value: 3,
          label: "患者症状缓解",
        },
        {
          value: 4,
          label: "患者病情不允许",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      bodys_people_choices: [
        {
          value: 1,
          label: "护士",
        },
        {
          value: 2,
          label: "医生",
        },
        {
          value: 3,
          label: "康复师",
        },
        {
          value: 4,
          label: "家属",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      no_body_limbs_reason_choices: [
        {
          value: 1,
          label: "医院没有配备相关设备",
        },
        {
          value: 2,
          label: "医院没有配备相关与业人员",
        },
        {
          value: 3,
          label: "患者或家属不合作",
        },
        {
          value: 4,
          label: "患者症状缓解",
        },
        {
          value: 5,
          label: "患者预后不良",
        },
        {
          value: 6,
          label: "计划出院后再行康复训练",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      body_limbs_man_choices: [
        {
          value: 1,
          label: "康复师",
        },
        {
          value: 2,
          label: "护士",
        },
        {
          value: 3,
          label: "医生",
        },
        {
          value: 4,
          label: "家属",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      body_limbs_freq_choices: [
        {
          value: 1,
          label: "一个康复训练周期",
        },
        {
          value: 2,
          label: "进行康复评价后几乎每天进行康复训练",
        },
        {
          value: 3,
          label: "仅对患者/家属进行康复训练培训,未进行康复训练",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      drink_choices: [
        {
          label: "高度白酒(≥42度)",
          choices: [
            {
              id: 1,
              mg: 10,
              label: "0.5 两",
            },
            {
              id: 2,
              mg: 20,
              label: "1 两",
            },
            {
              id: 3,
              mg: 40,
              label: "2 两",
            },
            {
              id: 4,
              mg: 60,
              label: "3 两",
            },
          ],
        },
        {
          label: "低度白酒(<42度)",
          choices: [
            {
              id: 1,
              mg: 10,
              label: "0.7 两",
            },
            {
              id: 2,
              mg: 20,
              label: "1.4 两",
            },
            {
              id: 3,
              mg: 40,
              label: "2.8 两",
            },
            {
              id: 4,
              mg: 60,
              label: "4.2 两",
            },
          ],
        },
        {
          label: "啤酒(520ml)",
          choices: [
            {
              id: 1,
              mg: 10,
              label: "0.5 瓶",
            },
            {
              id: 2,
              mg: 20,
              label: "1 瓶",
            },
            {
              id: 3,
              mg: 40,
              label: "2 瓶",
            },
            {
              id: 4,
              mg: 60,
              label: "3 瓶",
            },
          ],
        },
        {
          label: "啤酒(355ml)",
          choices: [
            {
              id: 1,
              mg: 10,
              label: "1 瓶",
            },
            {
              id: 2,
              mg: 20,
              label: "2 瓶",
            },
            {
              id: 3,
              mg: 40,
              label: "4 瓶",
            },
            {
              id: 4,
              mg: 60,
              label: "6 瓶",
            },
          ],
        },
        {
          label: "葡萄酒",
          choices: [
            {
              id: 1,
              mg: 10,
              label: "3 两",
            },
            {
              id: 2,
              mg: 20,
              label: "6 两",
            },
            {
              id: 3,
              mg: 40,
              label: "1.2 斤",
            },
            {
              id: 4,
              mg: 60,
              label: "1.8 斤",
            },
          ],
        },
        {
          label: "黄酒",
          choices: [
            {
              id: 1,
              mg: 10,
              label: "1.5 两",
            },
            {
              id: 2,
              mg: 20,
              label: "3 两",
            },
            {
              id: 3,
              mg: 40,
              label: "6 两",
            },
            {
              id: 4,
              mg: 60,
              label: "9 两",
            },
          ],
        },
      ],
    },
    onset_select_opts: {
      out_state_choices: [
        {
          value: 1,
          label: "死亡",
        },
        {
          value: 2,
          label: "出院",
        },
        {
          value: 3,
          label: "转康复医学科",
        },
      ],
      discharge_diagnosis_choices: [
        {
          value: 1,
          label: "短暂性脑缺血发作",
        },
        {
          value: 2,
          label: "脑梗死",
        },
        {
          value: 3,
          label: "自发性脑出血",
        },
        {
          value: 4,
          label: "自发性蛛网膜下腔出血",
        },
        {
          value: 5,
          label: "动脉瘤（未破裂）",
        },
        {
          value: 6,
          label: "动静脉畸形（未破裂）",
        },
        {
          value: 7,
          label: "梗死后症状性脑出血",
        },
        {
          value: 8,
          label: "下肢静脉血栓形成",
        },
        {
          value: 9,
          label: "卒中相关肺炎",
        },
        {
          value: 10,
          label: "症状性颈动脉狭窄（≥50%）",
        },
        {
          value: 11,
          label: "颅内动脉狭窄（≥70%）",
        },
        {
          value: 12,
          label: "外周动脉疾病",
        },
        {
          value: 13,
          label: "高血压",
        },
        {
          value: 14,
          label: "脂代谢紊乱",
        },
        {
          value: 15,
          label: "糖尿病",
        },
        {
          value: 16,
          label: "慢性阻塞性肺疾病",
        },
        {
          value: 17,
          label: "冠心病",
        },
        {
          value: 18,
          label: "心肌梗死",
        },
        {
          value: 19,
          label: "心房颤动",
        },
        {
          value: 20,
          label: "房扑",
        },
        {
          value: 21,
          label: "瓣膜性心脏病",
        },
        {
          value: 22,
          label: "心力衰竭",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      toast_choices: [
        {
          value: 1,
          label: "大动脉粥样硬化型",
        },
        {
          value: 2,
          label: "小动脉闭塞型",
        },
        {
          value: 3,
          label: "心源性栓塞",
        },
        {
          value: 4,
          label: "其他原因",
        },
        {
          value: 5,
          label: "不明原因",
        },
      ],
      adjust_blood_type_onset_choices: [
        {
          value: 1,
          label: "他汀类(阿托伐他汀钙等)",
        },
        {
          value: 2,
          label: "贝特类(非诺贝特、吉非贝齐等)",
        },
        {
          value: 3,
          label: "胆酸螯合树脂类(考来烯胺等)",
        },
        {
          value: 4,
          label: "烟酸及其衍生物(阿西莫司等)",
        },
        {
          value: 5,
          label: "脂必妥",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      statins_type_choices: [
        {
          value: 1,
          label: "他汀类(阿托伐他汀钙等)",
        },
        {
          value: 2,
          label: "贝特类(非诺贝特、吉非贝齐等)",
        },
        {
          value: 3,
          label: "胆酸螯合树脂类(考来烯胺等)",
        },
        {
          value: 4,
          label: "烟酸及其衍生物(阿西莫司等)",
        },
        {
          value: 5,
          label: "脂必妥",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      anti_drugs_be_hos_onset_choices: [
        {
          value: 1,
          label: "钙离子拮抗剂",
        },
        {
          value: 2,
          label: "血管紧张素转换酶抑制剂(ACEI)",
        },
        {
          value: 3,
          label: "血管紧张素II受体拮抗剂(ARB)",
        },
        {
          value: 4,
          label: "利尿剂",
        },
        {
          value: 5,
          label: "β受体阻滞剂",
        },
        {
          value: 6,
          label: "α受体阻滞剂",
        },
        {
          value: 7,
          label: "α、β受体阻滞剂",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      hypogly_drugs_be_hos_onset_choices: [
        {
          value: 1,
          label: "胰岛素（静脉或皮下）",
        },
        {
          value: 2,
          label: "磺酰脲类",
        },
        {
          value: 3,
          label: "双胍类",
        },
        {
          value: 4,
          label: "α糖苷酶抑制剂",
        },
        {
          value: 5,
          label: "胰岛素增敏剂",
        },
        {
          value: 6,
          label: "非磺酰脲类胰岛素分泌剂",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      anticoagulant_type_onset_choices: [
        {
          value: 1,
          label: "华法令",
        },
        {
          value: 2,
          label: "低分子肝素",
        },
        {
          value: 3,
          label: "普通肝素",
        },
        {
          value: 4,
          label: "利伐沙班",
        },
        {
          value: 5,
          label: "达比加群",
        },
        {
          value: 6,
          label: "阿哌沙班",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      dis_antiplatelet_drugs_type_choices: [
        {
          value: 1,
          label: "阿司匹林",
        },
        {
          value: 2,
          label: "氯吡格雷",
        },
        {
          value: 3,
          label: "替格瑞洛",
        },
        {
          value: 4,
          label: "吲哚布芬",
        },
        {
          value: 5,
          label: "双嘧达莫",
        },
        {
          value: 6,
          label: "西洛他唑",
        },
        {
          value: 7,
          label: "奥扎格雷(静脉)",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
      occlusion_blood_vessel_choices: [
        {
          value: 1,
          label: "颈总动脉",
        },
        {
          value: 2,
          label: "颈内动脉",
        },
        {
          value: 3,
          label: "大脑中动脉M1",
        },
        {
          value: 4,
          label: "大脑前动脉A1",
        },
        {
          value: 5,
          label: "椎动脉",
        },
        {
          value: 6,
          label: "基底动脉",
        },
        {
          value: 7,
          label: "大脑后动脉PI",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
    },
    visit_select_opts: {
      visit_method_choices: [
        {
          value: 1,
          label: "门诊访视",
        },
        {
          value: 2,
          label: "住院访视",
        },
        {
          value: 3,
          label: "电话访视",
        },
        {
          value: 4,
          label: "未完成访视,若完成访视,则继续完成以下问卷",
        },
      ],
      medication_choices: [
        {
          value: 1,
          label: "抗血小板药物",
        },
        {
          value: 2,
          label: "抗凝药物",
        },
        {
          value: 3,
          label: "他汀类药物",
        },
        {
          value: 4,
          label: "降压药",
        },
        {
          value: 5,
          label: "降糖药",
        },
        {
          value: 6,
          label: "其他相关药物",
        },
      ],
      stroke_recurrence_type_choices: [
        {
          value: 1,
          label: "脑梗死",
        },
        {
          value: 2,
          label: "短暂性脑缺血发作",
        },
        {
          value: 3,
          label: "自发性脑出血",
        },
        {
          value: 4,
          label: "自发性蛛网膜下腔出血",
        },
        {
          value: 99,
          label: "其他",
        },
      ],
    },
    // 外科变量
    // 出血部位下拉分组
    surgical_variables: {
      bleedingSiteGroup: [
        {
          // 组标题
          label: "左侧",
          // 组标题的子选项
          optionsItems: [
            {
              //存进数据库的值（数字或字符串)
              value: 1,
              label: "额叶",
            },
            {
              value: 2,
              label: "颞叶",
            },
            {
              value: 3,
              label: "基底节区",
            },
            {
              value: 4,
              label: "枕叶",
            },
            {
              value: 5,
              label: "顶叶",
            },
            {
              value: 6,
              label: "小脑",
            },
          ],
        },
        {
          label: "右侧",
          optionsItems: [
            {
              value: 7,
              label: "额叶",
            },
            {
              value: 8,
              label: "颞叶",
            },
            {
              value: 9,
              label: "基底节区",
            },
            {
              value: 10,
              label: "枕叶",
            },
            {
              value: 11,
              label: "顶叶",
            },
            {
              value: 12,
              label: "小脑",
            },
          ],
        },
        {
          label: "脑室",
          optionsItems: [
            {
              value: 13,
              label: "单侧脑室",
            },
            {
              value: 14,
              label: "双侧脑室",
            },
            {
              value: 15,
              label: "其他",
            },
          ],
        },
        {
          label: "脑干",
          optionsItems: [
            {
              value: 16,
              label: "中脑",
            },
            {
              value: 17,
              label: "脑桥",
            },
            {
              value: 18,
              label: "延髓",
            },
          ],
        },
      ],
    },
  },
  mutations: {
    // 修改到院时间
    changeToHospital(state, value) {
      state.toHospital = value;
    },
  },
  actions: {},
  modules: {},
  // plugins: [vuexLocal.plugin]
});
