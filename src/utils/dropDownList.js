/**
 * Created by Lv Cheng on 2022/2/8
 * Notes
 */

const dropDownList = {
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
          label: "上肢能抬起，但不能维持10秒，下落时不撞击床或其他支持物(1分)",
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
          label: "上肢能抬起，但不能维持10秒，下落时不撞击床或其他支持物(1分)",
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
      label: "轻度残障；不能完成所有以前从事的活动，但能处理个人事物而不需帮助",
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
  bool_choices2: [
    {
      value: 1,
      label: "有",
    },
    {
      value: 2,
      label: "无",
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
  basic_disease_history_choices: [
    {
      value: 1,
      label: "高血压",
    },
    {
      value: 2,
      label: "糖尿病",
    },
    {
      value: 3,
      label: "脑梗死",
    },
    {
      value: 4,
      label: "脑出血",
    },
    {
      value: 5,
      label: "动脉瘤",
    },
    {
      value: 6,
      label: "心脏病",
    },
    {
      value: 7,
      label: "癫痫",
    },
    {
      value: 8,
      label: "血液病",
    },
    {
      value: 9,
      label: "不详",
    },
    {
      value: 10,
      label: "无",
    },
    {
      value: 99,
      label: "其他",
    },
  ],
  diagnosis_choices: [
    {
      value: 1,
      label: "自发性脑出血",
    },
    {
      value: 2,
      label: "自发性蛛网膜下腔出血",
    },
    {
      value: 3,
      label: "动静脉畸形破裂",
    },
    {
      value: 4,
      label: "动脉瘤未破裂",
    },
    {
      value: 5,
      label: "动静脉畸形未破裂",
    },
    {
      value: 6,
      label: "颅外动脉狭窄",
    },
    {
      value: 7,
      label: "颅内动脉狭窄",
    },
  ],
  vascular_check_choices: [
    {
      value: 1,
      label: "CTA",
    },
    {
      value: 2,
      label: "DSA",
    },
    {
      value: 3,
      label: "MRA",
    },
    {
      value: 4,
      label: "未进行",
    },
  ],
  vascular_check_result_choices: [
    {
      value: 1,
      label: "动脉瘤",
    },
    {
      value: 2,
      label: "动静脉畸形",
    },
    {
      value: 3,
      label: "烟雾病",
    },
    {
      value: 4,
      label: "未见异常",
    },
    {
      value: 5,
      label: "其他",
    },
  ],
  operation_concurrent_choices: [
    {
      value: 1,
      label: "再出血",
    },
    {
      value: 2,
      label: "脑梗死",
    },
    {
      value: 3,
      label: "颅内感染",
    },
  ],
  during_concurrent_choices: [
    {
      value: 1,
      label: "脑积水",
    },
    {
      value: 2,
      label: "脑梗死",
    },
    {
      value: 3,
      label: "消化道出血",
    },
    {
      value: 4,
      label: "肺部感染",
    },
    {
      value: 5,
      label: "深静脉血栓",
    },
    {
      value: 6,
      label: "褥疮",
    },
  ],
  discharge_destination_choices: [
    {
      value: 1,
      label: "回家",
    },
    {
      value: 2,
      label: "下转",
    },
    {
      value: 3,
      label: "本院康复",
    },
    {
      value: 4,
      label: "死亡",
    },
  ],
  ct_choices: [
    {
      value: 1,
      label: "本院",
    },
    {
      value: 2,
      label: "外院",
    },
  ],
  abnormal_site_choices: [
    {
      value: 1,
      label: "左侧",
    },
    {
      value: 2,
      label: "右侧",
    },
    {
      value: 3,
      label: "脑干",
    },
  ],
  avm_size_choices: [
    {
      value: 1,
      label: "小（＜3cm）（1分）",
    },
    {
      value: 2,
      label: "中（3-6cm）（2分）",
    },
    {
      value: 3,
      label: "（＞6cm）（3分）",
    },
  ],
  important_brain_areas_choices: [
    {
      value: 0,
      label: "否（0分）",
    },
    {
      value: 1,
      label: "是（1分）",
    },
  ],
  venous_reflux_type_choices: [
    {
      value: 0,
      label: "仅脑表浅静脉（0分）",
    },
    {
      value: 1,
      label: "脑深部静脉（1分）",
    },
  ],
  // 自发性脑出血
  pre_bleeding_site_choices: [
    {
      value: 1,
      label: "左侧",
    },
    {
      value: 2,
      label: "右侧",
    },
    {
      value: 3,
      label: "双侧",
    },
  ],
  bleeding_site_choices: [
    {
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
    {
      value: 7,
      label: "脑室",
    },
    {
      value: 8,
      label: "脑干",
    },
    {
      value: 9,
      label: "中脑",
    },
    {
      value: 10,
      label: "桥脑",
    },
    {
      value: 11,
      label: "延髓",
    },
  ],
  operation_way_choices: [
    {
      value: 1,
      label: "开颅血肿清除（去骨瓣）",
    },
    {
      value: 2,
      label: "开颅血肿清除（未去骨瓣）",
    },
    {
      value: 3,
      label: "血肿钻孔引流",
    },
    {
      value: 4,
      label: "保守治疗",
    },
    {
      value: 99,
      label: "其他",
    },
  ],
  sih_operation_concurrent_choices: [
    {
      value: 1,
      label: "再出血",
    },
    {
      value: 2,
      label: "颅内感染",
    },
  ],
  sih_during_concurrent_choices: [
    {
      value: 1,
      label: "消化道出血",
    },
    {
      value: 2,
      label: "肺部感染",
    },
    {
      value: 3,
      label: "深静脉血栓",
    },
    {
      value: 4,
      label: "褥疮",
    },
  ],
  // Anr
  hunt_hess_level_choices: [
    {
      value: 1,
      label: "未破裂动脉瘤",
    },
    {
      value: 2,
      label: "无症状或轻微头痛",
    },
    {
      value: 3,
      label: "中至重度头痛、脑膜刺激征、脑神经麻痹",
    },
    {
      value: 4,
      label: "嗜睡、意识混浊、轻度局灶神经体征",
    },
    {
      value: 5,
      label: "昏迷、中或重度偏瘫、有早期去脑强直或自主神经功能紊乱",
    },
    {
      value: 6,
      label: "深昏迷、去大脑强直、濒死状态",
    },
  ],
  aneurysm_site_choices: [
    {
      value: 1,
      label: "左侧",
    },
    {
      value: 2,
      label: "右侧",
    },
    {
      value: 99,
      label: "无需分辨",
    },
  ],
  inter_embolism_choices: [
    {
      value: 1,
      label: "弹簧圈栓塞",
    },
    {
      value: 2,
      label: "支架辅助栓塞",
    },
    {
      value: 3,
      label: "覆膜支架",
    },
    {
      value: 4,
      label: "其他",
    },
  ],
  external_drainage_choices: [
    {
      value: 1,
      label: "左侧",
    },
    {
      value: 2,
      label: "右侧",
    },
    {
      value: 3,
      label: "双侧",
    },
  ],
  anr_treatment_method_choices: [
    {
      value: 1,
      label: "开颅夹闭",
    },
    {
      value: 2,
      label: "介入栓塞",
    },
    {
      value: 3,
      label: "保守治疗",
    },
    {
      value: 99,
      label: "其他",
    },
  ],
  anr_operation_concurrent_choices: [
    {
      value: 1,
      label: "再出血",
    },
    {
      value: 2,
      label: "脑梗死",
    },
    {
      value: 3,
      label: "颅内感染",
    },
  ],
  anr_during_concurrent_choices: [
    {
      value: 1,
      label: "脑积水",
    },
    {
      value: 2,
      label: "脑梗死",
    },
    {
      value: 3,
      label: "消化道出血",
    },
    {
      value: 4,
      label: "肺部感染",
    },
    {
      value: 5,
      label: "深静脉血栓",
    },
    {
      value: 6,
      label: "褥疮",
    },
  ],
  // AVMR
  abnormal_left_site_choices: [
    {
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
  abnormal_right_site_choices: [
    {
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
  abnormal_brainstem_site_choices: [
    {
      value: 1,
      label: "中脑",
    },
    {
      value: 2,
      label: "桥脑",
    },
    {
      value: 3,
      label: "延髓",
    },
  ],
  avmr_treatment_method_choices: [
    {
      value: 1,
      label: "开颅血肿清除",
    },
    {
      value: 2,
      label: "动静脉畸形切除",
    },
    {
      value: 3,
      label: "介入栓塞",
    },
    {
      value: 4,
      label: "放射治疗",
    },
    {
      value: 5,
      label: "保守治疗",
    },
    {
      value: 99,
      label: "其他",
    },
  ],
  avmr_operation_concurrent_choices: [
    {
      value: 1,
      label: "再出血",
    },
    {
      value: 2,
      label: "脑梗死",
    },
    {
      value: 3,
      label: "颅内感染",
    },
  ],
  avmr_during_concurrent_choices: [
    {
      value: 1,
      label: "脑积水",
    },
    {
      value: 2,
      label: "脑梗死",
    },
    {
      value: 3,
      label: "消化道出血",
    },
    {
      value: 4,
      label: "肺部感染",
    },
    {
      value: 5,
      label: "深静脉血栓",
    },
    {
      value: 6,
      label: "褥疮",
    },
  ],
  // An
  cta_or_mra_choices: [
    {
      value: 1,
      label: "本院",
    },
    {
      value: 2,
      label: "外院",
    },
  ],
  an_aneurysm_site_choices: [
    {
      value: 1,
      label: "颈内动脉海绵窦段",
    },
    {
      value: 2,
      label: "颈内动脉眼段",
    },
    {
      value: 3,
      label: "颈内动脉交通段",
    },
    {
      value: 4,
      label: "前交通动脉",
    },
    {
      value: 5,
      label: "大脑中动脉",
    },
    {
      value: 6,
      label: "椎动脉",
    },
    {
      value: 7,
      label: "基底动脉",
    },
    {
      value: 8,
      label: "其他",
    },
  ],
  an_operation_concurrent_choices: [
    {
      value: 1,
      label: "再出血",
    },
    {
      value: 2,
      label: "脑梗死",
    },
    {
      value: 3,
      label: "颅内感染",
    },
  ],
  an_during_concurrent_choices: [
    {
      value: 1,
      label: "脑积水",
    },
    {
      value: 2,
      label: "脑梗死",
    },
    {
      value: 3,
      label: "消化道出血",
    },
    {
      value: 4,
      label: "肺部感染",
    },
    {
      value: 5,
      label: "深静脉血栓",
    },
    {
      value: 6,
      label: "褥疮",
    },
  ],
  // AVM
  ct_or_mr_choices: [
    {
      value: 1,
      label: "本院",
    },
    {
      value: 2,
      label: "外院",
    },
  ],
  avm_treatment_method_choices: [
    {
      value: 1,
      label: "开颅动静脉畸形切除",
    },
    {
      value: 2,
      label: "介入栓塞",
    },
    {
      value: 3,
      label: "放射治疗",
    },
    {
      value: 4,
      label: "保守治疗",
    },
    {
      value: 99,
      label: "其他",
    },
  ],
  avm_operation_concurrent_choices: [
    {
      value: 1,
      label: "再出血",
    },
    {
      value: 2,
      label: "脑梗死",
    },
    {
      value: 3,
      label: "颅内感染",
    },
  ],
  avm_during_concurrent_choices: [
    {
      value: 1,
      label: "脑积水",
    },
    {
      value: 2,
      label: "脑梗死",
    },
    {
      value: 3,
      label: "消化道出血",
    },
    {
      value: 4,
      label: "肺部感染",
    },
    {
      value: 5,
      label: "深静脉血栓",
    },
    {
      value: 6,
      label: "褥疮",
    },
  ],
  // ECS
  ecs_medical_history_choices: [
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
      label: "血脂异常",
    },
    {
      value: 7,
      label: "慢性阻塞性肺疾病",
    },
    {
      value: 8,
      label: "房颤",
    },
    {
      value: 9,
      label: "房扑",
    },
    {
      value: 10,
      label: "冠心病",
    },
    {
      value: 11,
      label: "心肌梗死",
    },
    {
      value: 12,
      label: "先天性心脏病",
    },
    {
      value: 13,
      label: "瓣膜性心脏病",
    },
    {
      value: 14,
      label: "其他类型心脏疾病",
    },
    {
      value: 15,
      label: "外周动脉疾病",
    },
    {
      value: 16,
      label: "大手术",
    },
    {
      value: 17,
      label: "头颅外伤",
    },
    {
      value: 18,
      label: "肿瘤病史",
    },
    {
      value: 19,
      label: "其他",
    },
    {
      value: 20,
      label: "无",
    },
  ],
  ecs_pre_narrow_site_choices: [
    {
      value: 1,
      label: "左侧",
    },
    {
      value: 2,
      label: "右侧",
    },
    {
      value: 3,
      label: "无需分辨",
    },
  ],
  ecs_narrow_site_choices: [
    {
      value: 1,
      label: "颈总动脉",
    },
    {
      value: 2,
      label: "颈动脉分叉",
    },
    {
      value: 3,
      label: "颈内动脉",
    },
    {
      value: 4,
      label: "椎动脉",
    },
  ],
  ecs_narrow_degree_choices: [
    {
      value: 1,
      label: "＜50%",
    },
    {
      value: 2,
      label: "50-75%",
    },
    {
      value: 3,
      label: "＞75%",
    },
  ],
  ecs_pre_hospital_antiplatelet_therapy_choices: [
    {
      value: 1,
      label: "单抗",
    },
    {
      value: 2,
      label: "双抗",
    },
    {
      value: 3,
      label: "无",
    },
  ],
  ecs_post_operative_anti_plate_therapy_choices: [
    {
      value: 1,
      label: "单抗",
    },
    {
      value: 2,
      label: "双抗",
    },
    {
      value: 3,
      label: "无",
    },
  ],
  ecs_treatment_method_choices: [
    {
      value: 1,
      label: "颈动脉内膜切除",
    },
    {
      value: 2,
      label: "椎动脉内膜切除",
    },
    {
      value: 3,
      label: "颈动脉球囊成形",
    },
    {
      value: 4,
      label: "颈动脉支架",
    },
    {
      value: 5,
      label: "椎动脉球囊成形",
    },
    {
      value: 6,
      label: "椎动脉支架",
    },
    {
      value: 7,
      label: "保守治疗",
    },
    {
      value: 99,
      label: "其他",
    },
  ],
  ecs_operation_concurrent_choices: [
    {
      value: 1,
      label: "颅内出血",
    },
    {
      value: 2,
      label: "脑梗死",
    },
    {
      value: 3,
      label: "颅内感染",
    },
    {
      value: 4,
      label: "切口感染",
    },
  ],
  ecs_during_concurrent_choices: [
    {
      value: 1,
      label: "脑积水",
    },
    {
      value: 2,
      label: "脑梗死",
    },
    {
      value: 3,
      label: "消化道出血",
    },
    {
      value: 4,
      label: "肺部感染",
    },
    {
      value: 5,
      label: "深静脉血栓",
    },
    {
      value: 6,
      label: "褥疮",
    },
  ],
  // ICS
  ics_medical_history_choices: [
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
      label: "血脂异常",
    },
    {
      value: 7,
      label: "慢性阻塞性肺疾病",
    },
    {
      value: 8,
      label: "房颤",
    },
    {
      value: 9,
      label: "房扑",
    },
    {
      value: 10,
      label: "冠心病",
    },
    {
      value: 11,
      label: "心肌梗死",
    },
    {
      value: 12,
      label: "先天性心脏病",
    },
    {
      value: 13,
      label: "瓣膜性心脏病",
    },
    {
      value: 14,
      label: "其他类型心脏疾病",
    },
    {
      value: 15,
      label: "外周动脉疾病",
    },
    {
      value: 16,
      label: "大手术",
    },
    {
      value: 17,
      label: "头颅外伤",
    },
    {
      value: 18,
      label: "肿瘤病史",
    },
    {
      value: 19,
      label: "其他",
    },
    {
      value: 20,
      label: "无",
    },
  ],
  ics_pre_narrow_site_choices: [
    {
      value: 1,
      label: "左侧",
    },
    {
      value: 2,
      label: "右侧",
    },
    {
      value: 3,
      label: "无需分辨",
    },
  ],
  ics_narrow_site_choices: [
    {
      value: 1,
      label: "颈动脉颅内段",
    },
    {
      value: 2,
      label: "大脑中动脉",
    },
    {
      value: 3,
      label: "大脑前动脉",
    },
    {
      value: 4,
      label: "椎动脉颅内段",
    },
    {
      value: 5,
      label: "基底动脉",
    },
  ],
  ics_narrow_degree_choices: [
    {
      value: 1,
      label: "＜50%",
    },
    {
      value: 2,
      label: "50-75%",
    },
    {
      value: 3,
      label: "＞75%",
    },
  ],
  ics_pre_hospital_antiplatelet_therapy_choices: [
    {
      value: 1,
      label: "单抗",
    },
    {
      value: 2,
      label: "双抗",
    },
    {
      value: 3,
      label: "无",
    },
  ],
  ics_post_operative_anti_plate_therapy_choices: [
    {
      value: 1,
      label: "单抗",
    },
    {
      value: 2,
      label: "双抗",
    },
    {
      value: 3,
      label: "无",
    },
  ],
  ics_treatment_method_choices: [
    {
      value: 1,
      label: "颅内外搭桥",
    },
    {
      value: 2,
      label: "球囊成形",
    },
    {
      value: 3,
      label: "球囊成形+支架植入",
    },
    {
      value: 4,
      label: "保守治疗",
    },
    {
      value: 99,
      label: "其他",
    },
  ],
  ics_operation_concurrent_choices: [
    {
      value: 1,
      label: "再出血",
    },
    {
      value: 2,
      label: "脑梗死",
    },
    {
      value: 3,
      label: "颅内感染",
    },
  ],
  ics_during_concurrent_choices: [
    {
      value: 1,
      label: "脑积水",
    },
    {
      value: 2,
      label: "脑梗死",
    },
    {
      value: 3,
      label: "消化道出血",
    },
    {
      value: 4,
      label: "肺部感染",
    },
    {
      value: 5,
      label: "深静脉血栓",
    },
    {
      value: 6,
      label: "褥疮",
    },
  ],
};
export default dropDownList;
