// Resume knowledge base — source: 吴欣桥-AI产品经理简历-v3.docx
export const profile = {
  nameZh: "欣桥", nameEn: "Xinqiao", fullName: "吴欣桥 / Wu Xinqiao",
  tagline: "AI 产品经理 · AI 应用层 / AI+金融",
  subTagline: "专注把 AI 能力落地为可交付的业务系统，用 AI Coding 加速从需求定义到 POC 验证。",
  avatar: "/avatar.png", email: "wuwenky@126.com", phone: "17543755601",
  wechat: "wuwenky", linkedin: "https://www.linkedin.com/in/xinqiao",
  github: "https://github.com/wuwenky", location: "杭州",
  status: [
    { label: "求职中 · AI 产品经理", tone: "lime" },
    { label: "AI 应用层 · AI+金融", tone: "violet" },
    { label: "期望杭州 · 15-16K", tone: "cyan" },
  ] as const,
};

export const nowFeed = [
  { id: "n-006", date: "2026-08-03", tag: "Building", title: "用 AI Coding 构建 RCS 后线工作台", body: "独立完成可运行的高保真产品 Demo，用真实交互验证业务流程、信息架构与需求逻辑。" },
  { id: "n-005", date: "2026-07-20", tag: "Building", title: "沉淀公司级标准 PRD Skill", body: "将需求分析、文档结构和评审要点封装为可复用工作流，提升 PRD 产出与评审效率。" },
  { id: "n-004", date: "2026-07-05", tag: "Learning", title: "基于 Dify 搭建 RAG 产品知识库", body: "围绕 50-100 份产品文档完成知识库搭建，探索业务资产沉淀、检索与问答的产品化路径。" },
  { id: "n-003", date: "2026-06-18", tag: "Building", title: "用交互 Demo 前置验证复杂需求", body: "针对损益归因分析、税费账务配置等场景快速搭建 Demo，让抽象规则在研发投入前被验证。" },
  { id: "n-002", date: "2026-05-28", tag: "Learning", title: "系统学习 LLM / RAG / Agent / Prompt", body: "持续补齐大模型应用层知识，并备考阿里云大模型 ACP 认证。" },
  { id: "n-001", date: "2026-05-10", tag: "Thinking", title: "AI 产品的价值从可交付开始", body: "模型能力只有进入真实业务流程，形成可运行 Demo、明确规则与验证闭环，才真正成为产品。" },
];

export const experience = [
  { id: "e-01", period: "2024.08 — 至今", role: "BA / 产品经理", company: "杭州时代银通软件股份有限公司", location: "杭州",
    bullets: ["创建公司级标准 PRD Skill，结合 AI 工具提升需求文档产出与评审效率。", "运用 AI Coding 搭建损益归因、税费账务等可交互 Demo；基于 Dify 搭建 50-100 份文档规模的 RAG 产品知识库。", "负责资金交易与风险管理系统全生命周期管理，主导中银香港及雅加达分行项目交付。"],
    tags: ["AI Coding", "PRD Skill", "Dify", "RAG", "AI+金融"] },
  { id: "e-02", period: "2023.05 — 2024.07", role: "IT 咨询", company: "埃森哲（中国）有限公司", location: "上海",
    bullets: ["以日语主导技术团队与日方业务部门的需求提案和评审，需求确认迭代周期缩短 20%。", "拆解银行业务变更需求并输出业务设计文档，用逻辑流程图将模糊需求转化为精确系统规则。", "参与需求评估、代码开发与单元测试，上线版本缺陷率为 0；定义 20+ 项数据校验及合规逻辑，实现个人信息审核自动化。"],
    tags: ["IT咨询", "业务设计", "规则引擎", "日语N1", "质量保障"] },
  { id: "e-03", period: "2022.11 — 2023.03", role: "海外用户增长（实习）", company: "得物 · 上海识装信息科技有限公司", location: "上海",
    bullets: ["通过 A/B 测试优化优惠券发放逻辑，14 天用户召回率达到 8.3%。", "对接日本 KOL/KOC 并运营海外社媒，促成 2 位 YouTube 红人合作，平均播放量 4w+。"],
    tags: ["用户增长", "A/B测试", "日本市场", "数据驱动"] },
  { id: "e-04", period: "2021 — 2023", role: "硕士 · 现代经济学", company: "大阪市立大学", location: "日本·大阪", bullets: ["日语 N1，英语 TOEFL 90，具备中日英多语跨文化协作能力。"], tags: ["现代经济学", "日语N1", "TOEFL 90"] },
  { id: "e-05", period: "2015 — 2019", role: "本科 · 金融学", company: "长春工业大学", location: "长春", bullets: ["金融学本科，建立金融业务与经济学基础。"], tags: ["金融学", "本科"] },
];

export const portfolio = [
  { id: "p-01", title: "RCS 后线工作台", subtitle: "AI Coding · 独立交付可运行 Demo", description: "运用 AI Coding 独立完成高保真、可交互产品 Demo，将业务流程与产品设想转化为可直接验证的界面和交互。", metrics: [{ k: "建设方式", v: "AI Coding" }, { k: "交付形态", v: "可运行 Demo" }, { k: "角色", v: "独立完成" }], tags: ["AI Coding", "Product Demo", "RCS", "0→1"], href: "#portfolio", cover: "violet" },
  { id: "p-02", title: "中银香港财资系统", subtitle: "总行及雅加达分行 · 前中台与账务模块", description: "统筹财资系统前中台及账务需求，以英语开展跨境协作，并用 AI Coding 搭建损益归因和税费账务 Demo 验证复杂规则。", metrics: [{ k: "项目结果", v: "零延期投产" }, { k: "覆盖范围", v: "总行+雅加达" }, { k: "职责", v: "需求负责人" }], tags: ["AI+金融", "跨境协作", "UAT", "财资系统"], href: "#portfolio", cover: "cyan" },
  { id: "p-03", title: "外汇资金风险管理系统", subtitle: "上海寻汇科技 · 0→1 主导", description: "定义多币种风险敞口计算模型并对接企业内平盘系统，将风险管理从手工台账升级为实时归集、可视化与自动对冲链路。", metrics: [{ k: "建设模式", v: "0→1" }, { k: "管理方式", v: "实时归集" }, { k: "业务闭环", v: "识别→对冲" }], tags: ["外汇风险", "风险敞口", "系统对接", "产品建设"], href: "#portfolio", cover: "lime" },
  { id: "p-04", title: "AI 产品工作流", subtitle: "PRD Skill + Dify RAG 知识库", description: "沉淀公司级标准 PRD Skill，并基于 Dify 搭建 50-100 份文档规模的 RAG 产品知识库，让 AI 进入需求生产与业务资产沉淀流程。", metrics: [{ k: "知识规模", v: "50-100份" }, { k: "平台", v: "Dify RAG" }, { k: "资产", v: "PRD Skill" }], tags: ["Dify", "RAG", "Prompt", "Workflow"], href: "#portfolio", cover: "rose" },
];

export const skills = {
  "AI 能力": ["AI Coding", "LLM", "RAG", "Agent", "Prompt", "Dify", "阿里云大模型 ACP（备考）"],
  "产品能力": ["需求分析", "PRD", "业务设计文档", "逻辑流程图", "A/B 测试", "UAT", "POC"],
  "技术基础": ["Java", "Python", "MySQL", "HTML", "CSS", "JavaScript"],
  "金融领域": ["银行资金交易", "流动性风险", "外汇", "拆借", "回购", "监管合规", "清算账务"],
  "工具 & 语言": ["Figma", "Axure", "墨刀", "Visio", "日语 N1", "英语 TOEFL 90"],
};

export const knowledgeChunks = [
  "我叫吴欣桥，求职方向是AI产品经理，聚焦AI应用层和AI+金融，期望城市杭州，期望薪资15-16K。",
  "我有3年产品经验，横跨金融科技、IT咨询和C端互联网增长。",
  "我能运用AI Coding独立完成可运行的高保真产品Demo，代表案例是RCS后线工作台。",
  "我创建过公司级标准PRD Skill，将需求分析、文档结构和评审要点沉淀为可复用工作流。",
  "我基于Dify搭建过RAG产品知识库，知识规模约50到100份产品文档。",
  "在中银香港财资系统项目中，我负责总行及雅加达分行前中台与账务模块需求，主导UAT并用英语进行跨境协作，项目零延期投产。",
  "我用AI Coding为损益归因分析、税费账务配置等复杂场景快速搭建交互Demo。",
  "我从0到1主导过上海寻汇科技的外汇资金风险管理系统，定义多币种风险敞口计算模型，并打通风险识别到平盘对冲的自动化链路。",
  "在埃森哲期间，我以日语主导需求提案与评审，需求确认周期缩短20%；参与开发与测试，负责版本上线缺陷率为0。",
  "我曾定义20多项数据校验及合规逻辑，实现个人信息审核自动化。",
  "在得物实习期间，我通过A/B测试优化用户召回，14天召回率达到8.3%。",
  "我的技术基础包括Java、Python、MySQL、HTML、CSS和JavaScript。",
  "我的语言能力是日语N1、英语TOEFL 90。",
  "我正在系统学习LLM、RAG、Agent和Prompt，并备考阿里云大模型ACP认证。",
];

export type Profile = typeof profile;
export type NowItem = (typeof nowFeed)[number];
export type ExpItem = (typeof experience)[number];
export type PortfolioItem = (typeof portfolio)[number];
