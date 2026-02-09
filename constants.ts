import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  basicInfo: {
    name: "贺泽",
    age: "24岁",
    gender: "男",
    degree: "本科",
    jobTarget: "外贸业务员",
    salary: "5000-8000元",
    availability: "随时",
  },
  contactInfo: {
    phone: "19029861037",
    email: "810586779@qq.com",
    wechat: "gandalf626",
    location: "江苏",
  },
  education: [
    {
      school: "西安工商学院",
      major: "计算机科学与技术",
      degree: "本科",
      period: "2019.9 - 2023.6",
      achievements: [
        "CET-6（443分）",
        "外研社·国才杯全国英语演讲比赛 省级三等奖"
      ]
    }
  ],
  workExperience: [
    {
      role: "新媒体运营",
      company: "延安市云初影像摄影工作室",
      period: "2024.5 - 2026.1",
      description: [
        "负责抖音、小红书、美团多平台矩阵号运营，主攻SEO+长尾流量+私信引流获客。",
        "单平台月均引流70+组新客，单条爆款内容同城曝光50万+、单条引流到店100+人。",
        "协同销售完成客户转化，个人月均成交10-15单，团队整体转化率约35%。"
      ]
    },
    {
      role: "英语教师",
      company: "西安旭东教育",
      period: "2023.9 - 2024.2",
      description: [
        "担任初中英语同步课程教师，负责语法讲解、阅读训练及学生答疑。",
        "能够用英语进行清晰、系统的知识讲授，具备良好的英语表达和沟通能力。"
      ]
    }
  ],
  projectExperience: [
    {
      name: "印尼人造草坪市场调研项目（自主）",
      period: "2026.2",
      role: "独立执行",
      details: [
        "针对江苏易华人造草坪有限公司，独立完成印尼市场分析报告。",
        "报告涵盖：市场规模与增速、竞争格局、客户画像、准入门槛、进入策略建议。",
        "撰写针对印尼进口商的客户开发信Demo，总结开发信写作方法论。",
        "运用AI工具（Claude、Perplexity、DeepSeek）辅助信息搜集与数据整理。"
      ]
    }
  ],
  skills: [
    {
      category: "英语能力",
      items: ["CET-6，具备流利的英语书面表达能力", "可独立撰写外贸开发信、商务邮件"]
    },
    {
      category: "AI工具应用",
      items: ["熟练使用Claude、DeepSeek、Perplexity、Gemini等AI工具进行市场调研、文档写作、数据分析"]
    },
    {
      category: "技术能力",
      items: ["计算机科学专业背景", "熟练掌握Office办公软件", "具备编程基础、了解软件开发与服务器运维"]
    },
    {
      category: "新媒体运营",
      items: ["熟悉抖音、小红书、美团等平台运营逻辑", "擅长SEO优化、长尾流量获取、私域引流"]
    },
    {
      category: "其他",
      items: ["C1驾照"]
    }
  ],
  selfEvaluation: [
    "学习能力强：计算机专业出身，善于快速学习新领域知识，入职前已独立完成目标市场调研。",
    "英语能力扎实：CET-6+省级演讲比赛获奖，具备外贸岗位所需的英语沟通能力。",
    "有销售闭环经验：从线上获客到到店转化，理解完整销售流程，能适应外贸业务开发工作。",
    "善用工具提效：熟练运用AI工具辅助工作，能够高效完成客户调研、邮件撰写等任务。"
  ]
};