import { knowledgeChunks, profile } from "./data";

export function mockReply(question: string): string {
  const q = question.trim().toLowerCase();
  const rules: { keys: string[]; reply: string }[] = [
    { keys: ["ai coding", "demo", "rcs", "后线工作台"], reply: "我能用 AI Coding 独立完成可运行的高保真产品 Demo，代表案例是 RCS 后线工作台。在中银香港项目中，我也搭建过损益归因分析、税费账务配置等交互 Demo，用于前置验证流程与规则。" },
    { keys: ["prd", "skill", "文档", "效率"], reply: "我创建过公司级标准 PRD Skill，把需求分析方法、文档结构和评审要点沉淀为可复用工作流，并结合 AI 工具提升文档产出与评审效率。" },
    { keys: ["rag", "dify", "知识库"], reply: "我基于 Dify 搭建过 RAG 产品知识库，沉淀约 50–100 份产品文档。我也在持续学习 LLM、RAG、Agent 和 Prompt，并备考阿里云大模型 ACP。" },
    { keys: ["中银", "雅加达", "财资", "跨境"], reply: "在中银香港财资系统项目中，我负责总行及雅加达分行的前中台与账务模块需求，以英语开展跨境沟通，主导 UAT，并用 AI Coding Demo 验证复杂业务规则。项目最终零延期投产。" },
    { keys: ["外汇", "寻汇", "风险敞口", "平盘"], reply: "我从 0 到 1 主导过上海寻汇科技的外汇资金风险管理系统，定义多币种风险敞口计算模型，并对接企业内平盘系统，打通“风险识别 → 平盘对冲”链路。" },
    { keys: ["埃森哲", "accenture", "日语", "规则引擎"], reply: "在埃森哲，我以日语主导需求提案与评审，需求确认周期缩短 20%；参与需求评估、开发和测试，负责版本上线缺陷率为 0，并定义了 20+ 项数据校验与合规逻辑。" },
    { keys: ["技术", "代码", "stack", "java", "python"], reply: "我的技术基础包括 Java、Python、MySQL、HTML、CSS 和 JavaScript，可以理解实现约束、用 AI Coding 做出可运行 Demo，并与算法及工程团队高效协作。" },
    { keys: ["求职", "意向", "薪资", "杭州", "岗位"], reply: "我目前求职方向是 AI 产品经理，聚焦 AI 应用层和 AI+金融，期望城市杭州，期望薪资 15–16K。" },
    { keys: ["你是谁", "介绍", "自我介绍", "who"], reply: `我是${profile.fullName}，${profile.tagline}。我有3年产品经验，能够从需求定义、PRD标准化一路做到AI Coding Demo、RAG知识库和POC验证。` },
  ];
  for (const rule of rules) if (rule.keys.some((key) => q.includes(key))) return rule.reply;
  const index = [...question].reduce((sum, char) => sum + char.charCodeAt(0), 0) % knowledgeChunks.length;
  return `这个问题暂时没有命中关键词库，先给你一段相关背景：\n\n${knowledgeChunks[index]}\n\n你也可以问我“AI Coding / PRD Skill / Dify RAG / 中银香港 / 外汇风险 / 求职方向”。`;
}
