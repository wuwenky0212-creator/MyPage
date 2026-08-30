import { NextRequest, NextResponse } from "next/server";
import { knowledgeChunks, profile } from "@/lib/data";

type Msg = { role: "user" | "assistant"; content: string };
export const runtime = "edge";

export async function POST(req: NextRequest) {
  const { messages } = (await req.json()) as { messages: Msg[] };
  const last = messages[messages.length - 1]?.content?.trim() || "";
  const provider = process.env.AI_PROVIDER || "mock";
  try {
    const reply = provider === "anthropic" && process.env.ANTHROPIC_API_KEY
      ? await callAnthropic(messages)
      : provider === "openai" && process.env.OPENAI_API_KEY
        ? await callOpenAI(messages)
        : mockReply(last);
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("[/api/chat] error:", err);
    return NextResponse.json({ reply: `（AI 服务临时不可用，已切换到本地回答）\n\n${mockReply(last)}` });
  }
}

function mockReply(q: string): string {
  if (!q) return "你想了解我哪方面？AI Coding / RAG / 项目经历 / 技术能力 / 求职方向？";
  const lower = q.toLowerCase();
  const rules: { keys: string[]; reply: string }[] = [
    { keys: ["ai coding", "demo", "rcs", "后线工作台"], reply: "我能用 AI Coding 独立完成可运行的高保真产品 Demo，代表案例是 RCS 后线工作台。在中银香港项目的前期沟通中，我也快速搭建过损益归因分析、税费账务配置等交互 Demo，让业务和研发在正式投入前验证流程与规则。" },
    { keys: ["prd", "skill", "文档", "效率"], reply: "我创建过公司级标准 PRD Skill，把需求分析方法、文档结构和评审要点沉淀成可复用工作流，再结合 AI 工具提升需求文档产出与评审效率。对我来说，AI 不是代写工具，而是产品流程标准化后的效率放大器。" },
    { keys: ["rag", "dify", "知识库"], reply: "我基于 Dify 搭建过 RAG 产品知识库，沉淀了约 50–100 份产品文档。核心目标是把分散的业务资产变成可检索、可问答的知识入口。我正在继续系统学习 LLM、RAG、Agent 和 Prompt，并备考阿里云大模型 ACP。" },
    { keys: ["中银", "雅加达", "财资", "跨境"], reply: "在中银香港财资系统项目中，我是前中台及账务模块需求负责人，覆盖总行和雅加达分行。我统筹多地监管差异，以英语开展跨境需求沟通，主导 UAT，并用 AI Coding Demo 验证损益归因与税费账务逻辑。项目最终零延期投产。" },
    { keys: ["外汇", "寻汇", "风险敞口", "平盘"], reply: "我从 0 到 1 主导过上海寻汇科技的外汇资金风险管理系统：定义多币种风险敞口计算模型，明确头寸归集口径，并对接企业内平盘系统，打通‘风险识别 → 平盘对冲’链路，把手工台账升级为统一、实时、可视化的平台。" },
    { keys: ["埃森哲", "accenture", "日语", "规则引擎"], reply: "在埃森哲，我以日语主导技术团队与日方业务部门的需求提案和评审，需求确认迭代周期缩短 20%。我也参与需求评估、开发和单元测试，负责版本上线缺陷率为 0；还定义了 20+ 项数据校验与合规逻辑，实现个人信息审核自动化。" },
    { keys: ["得物", "增长", "a/b", "召回"], reply: "在得物做海外用户增长时，我通过 A/B 测试优化优惠券发放逻辑，14 天用户召回率达到 8.3%；同时负责日本 KOL/KOC 和海外社媒运营，促成 2 位 YouTube 红人合作，平均播放量 4w+。" },
    { keys: ["技术", "代码", "stack", "java", "python"], reply: "我的技术基础包括 Java、Python、MySQL、HTML、CSS 和 JavaScript。我不会把自己包装成算法工程师，但可以直接理解实现约束、用 AI Coding 做出可运行 Demo，并和算法及工程团队高效协作。" },
    { keys: ["求职", "意向", "薪资", "杭州", "岗位"], reply: "我目前求职方向是 AI 产品经理，聚焦 AI 应用层和 AI+金融，期望城市杭州，期望薪资 15–16K。希望继续做能进入真实业务流程、最终形成可交付系统的 AI 产品。" },
    { keys: ["你是谁", "介绍", "自我介绍", "who"], reply: `我是${profile.fullName}，${profile.tagline}。我有3年产品经验，横跨金融科技、IT咨询和C端增长，能够从需求定义、PRD标准化一路做到AI Coding Demo、RAG知识库和POC验证。` },
  ];
  for (const rule of rules) {
    if (rule.keys.some((key) => lower.includes(key.toLowerCase()))) return rule.reply;
  }
  const chunk = knowledgeChunks[Math.floor(Math.random() * knowledgeChunks.length)];
  return `这个问题暂时没有命中本地关键词库，先给你一段相关背景：\n\n${chunk}\n\n你也可以问我“AI Coding / PRD Skill / Dify RAG / 中银香港 / 外汇风险 / 求职方向”。`;
}

async function callAnthropic(messages: Msg[]): Promise<string> {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "x-api-key": process.env.ANTHROPIC_API_KEY!, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 600, system: buildSystemPrompt(), messages }),
  });
  if (!response.ok) throw new Error(`anthropic ${response.status}`);
  const data = await response.json();
  return data.content?.[0]?.text || "（空响应）";
}

async function callOpenAI(messages: Msg[]): Promise<string> {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "content-type": "application/json" },
    body: JSON.stringify({ model: "gpt-4o-mini", messages: [{ role: "system", content: buildSystemPrompt() }, ...messages], max_tokens: 600 }),
  });
  if (!response.ok) throw new Error(`openai ${response.status}`);
  const data = await response.json();
  return data.choices?.[0]?.message?.content || "（空响应）";
}

function buildSystemPrompt(): string {
  return `你是${profile.fullName}的数字分身，使用第一人称回答。回答直接、克制、有数据感。只能使用下面的知识库，不要编造；超出范围时建议对方直接联系本人。\n\n【知识库】\n${knowledgeChunks.map((chunk, index) => `[${index + 1}] ${chunk}`).join("\n")}\n\n【联系方式】\n邮箱 ${profile.email} / 微信 ${profile.wechat}`;
}
