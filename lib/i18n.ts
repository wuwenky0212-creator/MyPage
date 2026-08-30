import type { Locale } from "./language-context";
import { nowFeed, experience, portfolio, skills } from "./data";

const zh = {
  navProfile: "Profile", navNow: "Now", navExperience: "Experience", navPortfolio: "Work", navSkills: "Skills", navAgent: "Ask AI", navContact: "Contact", navHire: "Hire me →",
  profileBadge: "AI 产品经理 · 3 年产品经验", profileTaglinePart1: "AI 产品经理", profileTaglinePart2: "AI 应用层 / AI+金融",
  profileSubTagline: "把 AI 能力落地为<<coral>>可交付的业务系统<</coral>>，用 AI Coding 加速从<<warm>>需求定义、PRD 到 POC 验证<</warm>>的全链路。",
  profileCtaAgent: "和我的 AI 分身聊聊", profileCtaPortfolio: "查看项目案例", profileCtaResume: "⬇ PDF 简历",
  profileMetaLocation: "Location", profileMetaEmail: "Email", profileMetaWechat: "WeChat", profileMetaLinkedin: "LinkedIn", profileLocation: "杭州", profileNowReading: "在学", profileNowBuilding: "在做",
  nowEyebrow: "Now / Live Feed", nowTitle: "最近在做什么", nowDesc: "记录我如何把<<coral>>AI Coding、RAG 与产品方法<</coral>>用于真实工作，让页面呈现<<warm>>正在发生的实践<</warm>>。", nowTodo: "持续更新 AI 产品实践与项目复盘", nowFilterAll: "All",
  expEyebrow: "Experience", expTitle: "过往履历", expDesc: "<<warm>>金融科技底盘<</warm>> + <<coral>>AI 应用能力<</coral>> — 从 C 端增长、IT 咨询到银行资金系统，用 AI Coding、RAG 和标准化工作流提升<<grad>>产品交付效率<</grad>>。",
  portEyebrow: "Selected Work", portTitle: "核心作品集", portDesc: "重点展示<<coral>>可运行 Demo<</coral>>、<<warm>>0→1 系统建设<</warm>>与 AI+金融的实际交付。", portReadMore: "Read more",
  skillEyebrow: "Skill Stack", skillTitle: "技能图谱", skillDesc: "覆盖<<coral>>AI Coding、LLM / RAG / Agent / Prompt<</coral>>，同时保留需求分析、技术基础与金融业务能力。",
  agentEyebrow: "AI Agent · Killer Feature", agentTitle: "和我的数字分身聊聊", agentDesc: "网站本身就是一个 <<coral>>RAG 产品 Demo<</coral>>：知识库来自最新简历与项目材料，<<warm>>回答严格受事实边界约束<</warm>>。",
  agentTryAsking: "Try asking", agentDontKnow: "不知道问什么？", agentBehindScenes: "// Behind the scenes", agentTechDesc: "知识库 → 关键词检索 / Prompt → Mock 或真实模型。配置 .env 后可切换 Anthropic / OpenAI。",
  agentWelcome: "Hi 👋 我是欣桥的 AI 数字分身。你可以问我关于 AI Coding、RCS 后线工作台、PRD Skill、Dify RAG、中银香港项目或求职方向。", agentPlaceholder: "问点关于欣桥的事…（Enter 发送）", agentSend: "发送", agentError: "（数字分身连接失败，请稍后再试。）", agentDigitalTwin: "欣桥 · Digital Twin", agentPowered: "Resume-grounded RAG · v0.4", agentMockMode: "MOCK MODE",
  ctaEyebrow: "Let’s talk", ctaHeading1: "如果你正在找一个", ctaHeading2: "能用 AI 加速产品交付", ctaHeading3: "的 AI 产品经理 —",
  ctaBody: "我具备从<<warm>>需求定义、PRD 标准化<</warm>>到<<coral>>AI Coding Demo、RAG 知识库与 POC 验证<</coral>>的完整经验，并有银行资金系统、IT 咨询和 C 端增长背景。<<metric>>三天内<</metric>>回邮件，<<metric>>48h<</metric>>内可以约视频聊。",
  ctaDownload: "⬇ 下载标准版简历 (PDF)", ctaEmail: "✉ 直接发邮件", ctaWechatNote: "加好友请备注「岗位 + 公司」", ctaFooter: "Built with Next.js + Tailwind + AI Coding", ctaVersion: "v1.1 · Self-as-a-Service · Last updated",
};

const en: typeof zh = {
  ...zh,
  profileBadge: "AI Product Manager · 3 Years", profileTaglinePart1: "AI Product Manager", profileTaglinePart2: "Applied AI / AI + Finance",
  profileSubTagline: "Turning AI capabilities into <<coral>>deliverable business systems<</coral>>, using AI Coding to accelerate the path from <<warm>>requirements and PRDs to POC validation<</warm>>.",
  profileCtaAgent: "Chat with my AI twin", profileCtaPortfolio: "View projects", profileCtaResume: "⬇ PDF Resume", profileLocation: "Hangzhou, China", profileNowReading: "Learning", profileNowBuilding: "Building",
  nowTitle: "What I’m working on", nowDesc: "A living log of how I apply <<coral>>AI Coding, RAG, and product methods<</coral>> to real work.", nowTodo: "Continuously updating AI product practices and retrospectives",
  expTitle: "Career Journey", expDesc: "<<warm>>FinTech domain depth<</warm>> + <<coral>>applied AI capability<</coral>> — spanning consumer growth, IT consulting, and banking treasury products.",
  portTitle: "Selected Projects", portDesc: "Focused on <<coral>>working demos<</coral>>, <<warm>>0-to-1 systems<</warm>>, and real AI + Finance delivery.",
  skillTitle: "Skill Map", skillDesc: "<<coral>>AI Coding, LLM / RAG / Agent / Prompt<</coral>>, backed by product fundamentals, technical literacy, and finance expertise.",
  agentTitle: "Chat with my digital twin", agentDesc: "A <<coral>>resume-grounded RAG demo<</coral>> whose answers stay within verified experience.", agentDontKnow: "Not sure what to ask?", agentTechDesc: "Knowledge base → retrieval / prompt → Mock or live model. Configure .env for Anthropic / OpenAI.",
  agentWelcome: "Hi 👋 I’m Xinqiao’s AI twin. Ask me about AI Coding, the RCS operations workspace, PRD Skill, Dify RAG, banking projects, or career goals.", agentPlaceholder: "Ask something about Xinqiao...", agentSend: "Send", agentError: "Digital twin connection failed. Please try again.",
  ctaHeading1: "If you need", ctaHeading2: "an AI PM who accelerates delivery", ctaHeading3: " —", ctaBody: "I cover <<warm>>requirements and standardized PRDs<</warm>> through <<coral>>AI Coding demos, RAG knowledge bases, and POC validation<</coral>>, with experience in banking systems, IT consulting, and consumer growth.", ctaDownload: "⬇ Download Resume (PDF)", ctaEmail: "✉ Send an email", ctaWechatNote: "Please include your role + company", ctaFooter: "Built with Next.js + Tailwind + AI Coding",
};

const ja: typeof zh = {
  ...zh,
  navHire: "採用について →", profileBadge: "AIプロダクトマネージャー · 経験3年", profileTaglinePart1: "AI Product Manager", profileTaglinePart2: "応用AI / AI×金融",
  profileSubTagline: "AIの能力を<<coral>>納品可能な業務システム<</coral>>へ。AI Codingで<<warm>>要件定義・PRDからPOC検証<</warm>>までを加速します。",
  profileCtaAgent: "AIアシスタントと話す", profileCtaPortfolio: "プロジェクトを見る", profileCtaResume: "⬇ PDF履歴書", profileLocation: "中国・杭州", profileNowReading: "学習中", profileNowBuilding: "開発中",
  nowTitle: "最近取り組んでいること", nowDesc: "<<coral>>AI Coding・RAG・プロダクト手法<</coral>>を実務に活用する過程を記録しています。", nowTodo: "AIプロダクト実践と振り返りを継続更新",
  expTitle: "キャリア", expDesc: "<<warm>>FinTechの業務基盤<</warm>>と<<coral>>応用AIの実践力<</coral>> — C向けグロース、ITコンサル、銀行財資システムを経験。",
  portTitle: "主要プロジェクト", portDesc: "<<coral>>動くDemo<</coral>>、<<warm>>0→1のシステム構築<</warm>>、AI×金融の実務成果を紹介します。",
  skillTitle: "スキルマップ", skillDesc: "<<coral>>AI Coding、LLM / RAG / Agent / Prompt<</coral>>に加え、プロダクト基礎・技術理解・金融知識を保有。",
  agentTitle: "デジタルツインと話す", agentDesc: "最新履歴書を根拠に回答する<<coral>>RAGデモ<</coral>>です。", agentTryAsking: "質問例", agentDontKnow: "何を聞けばいい？", agentBehindScenes: "// 仕組み", agentTechDesc: "ナレッジベース → 検索 / Prompt → Mockまたは実モデル。", agentWelcome: "こんにちは👋 欣桥のAIアシスタントです。AI Coding、RCS後線ワークベンチ、PRD Skill、Dify RAG、銀行プロジェクトについて質問できます。", agentPlaceholder: "欣桥について質問…", agentSend: "送信", agentError: "接続に失敗しました。後でもう一度お試しください。",
  ctaEyebrow: "お話しましょう", ctaHeading1: "お探しなのが", ctaHeading2: "AIでプロダクト納品を加速できる", ctaHeading3: "AIプロダクトマネージャーなら —", ctaBody: "<<warm>>要件定義・PRD標準化<</warm>>から<<coral>>AI Coding Demo、RAGナレッジベース、POC検証<</coral>>まで対応します。", ctaDownload: "⬇ 履歴書をダウンロード", ctaEmail: "✉ メールを送る", ctaWechatNote: "役職 + 会社名をご記載ください", ctaFooter: "Built with Next.js + Tailwind + AI Coding",
};

const ui = { zh, en, ja };

const profileData = {
  zh: { nameDisplay: "吴欣桥", status: [{ label: "求职中 · AI 产品经理", tone: "lime" as const }, { label: "AI 应用层 · AI+金融", tone: "violet" as const }, { label: "杭州 · 期望 15-16K", tone: "cyan" as const }] },
  en: { nameDisplay: "Wu Xinqiao", status: [{ label: "Open to AI Product Roles", tone: "lime" as const }, { label: "Applied AI · AI + Finance", tone: "violet" as const }, { label: "Hangzhou · 15–16K", tone: "cyan" as const }] },
  ja: { nameDisplay: "呉 欣桥", status: [{ label: "AIプロダクト職を希望", tone: "lime" as const }, { label: "応用AI · AI×金融", tone: "violet" as const }, { label: "杭州 · 15–16K", tone: "cyan" as const }] },
};

const enNow = [
  { id: "n-006", date: "2026-08-03", tag: "Building", title: "Building an RCS Operations Workspace with AI Coding", body: "Independently delivered a working high-fidelity demo to validate workflows and product logic." },
  { id: "n-005", date: "2026-07-20", tag: "Building", title: "Creating a Company-wide PRD Skill", body: "Packaged requirements methods, document structure, and review checks into a reusable workflow." },
  { id: "n-004", date: "2026-07-05", tag: "Learning", title: "Building a Dify RAG Knowledge Base", body: "Structured 50–100 product documents into a searchable knowledge asset." },
  { id: "n-003", date: "2026-06-18", tag: "Building", title: "Validating Complex Requirements with Interactive Demos", body: "Prototyped P&L attribution and tax/accounting configuration before engineering investment." },
  { id: "n-002", date: "2026-05-28", tag: "Learning", title: "Learning LLM / RAG / Agent / Prompt", body: "Systematically building applied AI knowledge and preparing for Alibaba Cloud’s LLM ACP." },
  { id: "n-001", date: "2026-05-10", tag: "Thinking", title: "AI Product Value Starts with Deliverability", body: "AI becomes a product only when it enters a real workflow and can be demonstrated and validated." },
];
const jaNow = enNow.map((item, index) => ({ ...item, title: ["AI CodingでRCS後線ワークベンチを構築", "社内標準PRD Skillを構築", "DifyでRAGナレッジベースを構築", "対話Demoで複雑な要件を先行検証", "LLM / RAG / Agent / Promptを体系的に学習", "AIプロダクトの価値は納品可能性から"][index], body: ["動作する高精度Demoを独力で作成し、業務フローと要件を検証。", "要件分析、文書構造、レビュー観点を再利用可能なワークフローに整理。", "50〜100件の製品文書を検索可能な知識資産として整備。", "損益要因分析や税務・会計設定を開発前にDemoで検証。", "応用AIを学習し、Alibaba Cloud大規模モデルACPを準備中。", "実業務フローに入り、検証可能になって初めてAIはプロダクトになる。" ][index] }));

function localizeExperience(locale: Locale) {
  if (locale === "zh") return experience;
  const enRows = [
    ["BA / Product Manager", "Hangzhou Times YinTong Software Co., Ltd.", "Hangzhou", ["Created a company-wide PRD Skill to improve requirements output and review efficiency.", "Built interactive P&L attribution and tax/accounting demos with AI Coding; built a 50–100 document Dify RAG knowledge base.", "Managed treasury and risk products end-to-end and led BOC Hong Kong / Jakarta branch delivery."], ["AI Coding", "PRD Skill", "Dify", "RAG", "AI + Finance"]],
    ["IT Consultant", "Accenture China", "Shanghai", ["Led Japanese-language proposals and reviews, cutting requirements cycles by 20%.", "Translated ambiguous banking needs into precise rules and design documents.", "Participated in development and testing with zero launch defects; defined 20+ validation and compliance rules."], ["IT Consulting", "Business Design", "Rule Engine", "Japanese N1"]],
    ["Overseas User Growth Intern", "POIZON", "Shanghai", ["Optimized coupon logic through A/B testing, achieving an 8.3% 14-day recall rate.", "Ran Japan KOL/KOC and social campaigns; secured two YouTube creator partnerships averaging 40K+ views."], ["Growth", "A/B Testing", "Japan Market"]],
    ["M.A. · Modern Economics", "Osaka City University", "Osaka, Japan", ["Japanese N1 and TOEFL 90; able to collaborate across Chinese, Japanese, and English."], ["Economics", "Japanese N1", "TOEFL 90"]],
    ["B.A. · Finance", "Changchun University of Technology", "Changchun", ["Built a foundation in finance and economics."], ["Finance"]],
  ];
  return experience.map((row, i) => ({ ...row, role: locale === "en" ? enRows[i][0] as string : ["BA / プロダクトマネージャー", "ITコンサルタント", "海外ユーザーグロース（インターン）", "修士 · 現代経済学", "学士 · 金融学"][i], company: locale === "en" ? enRows[i][1] as string : ["杭州時代銀通ソフトウェア株式会社", "アクセンチュア中国", "得物（POIZON）", "大阪市立大学", "長春工業大学"][i], location: locale === "en" ? enRows[i][2] as string : ["杭州", "上海", "上海", "日本・大阪", "長春"][i], bullets: enRows[i][3] as string[], tags: enRows[i][4] as string[] }));
}

function localizePortfolio(locale: Locale) {
  if (locale === "zh") return portfolio;
  const titles = locale === "en" ? ["RCS Operations Workspace", "BOC Hong Kong Treasury System", "FX Risk Management System", "AI Product Workflow"] : ["RCS後線ワークベンチ", "中国銀行香港財資システム", "為替資金リスク管理システム", "AIプロダクトワークフロー"];
  const subtitles = locale === "en" ? ["AI Coding · Working Demo", "Head Office + Jakarta Branch", "0-to-1 Product Build", "PRD Skill + Dify RAG"] : ["AI Coding · 動作するDemo", "本店 + ジャカルタ支店", "0→1のプロダクト構築", "PRD Skill + Dify RAG"];
  return portfolio.map((row, i) => ({ ...row, title: titles[i], subtitle: subtitles[i] }));
}

const localizedSkills = {
  en: { "AI Capabilities": ["AI Coding", "LLM", "RAG", "Agent", "Prompt", "Dify", "Alibaba Cloud LLM ACP (preparing)"], "Product": ["Requirements", "PRD", "Business Design", "Flowcharts", "A/B Testing", "UAT", "POC"], "Technical": ["Java", "Python", "MySQL", "HTML", "CSS", "JavaScript"], "Finance": ["Treasury Trading", "Liquidity Risk", "FX", "Money Market", "Repo", "Compliance", "Clearing"], "Tools & Languages": ["Figma", "Axure", "Visio", "Japanese N1", "TOEFL 90"] },
  ja: { "AI能力": ["AI Coding", "LLM", "RAG", "Agent", "Prompt", "Dify", "Alibaba Cloud LLM ACP（準備中）"], "プロダクト": ["要件分析", "PRD", "業務設計", "フロー図", "A/Bテスト", "UAT", "POC"], "技術": ["Java", "Python", "MySQL", "HTML", "CSS", "JavaScript"], "金融": ["財資取引", "流動性リスク", "FX", "短期金融", "レポ", "コンプライアンス", "決済・会計"], "ツール・言語": ["Figma", "Axure", "Visio", "日本語N1", "TOEFL 90"] },
};

const suggestions = {
  zh: ["你用 AI Coding 做过哪些 Demo？", "PRD Skill 是怎么提升产品效率的？", "Dify RAG 知识库是怎么搭建的？", "中银香港项目里你负责什么？", "你的求职方向是什么？"],
  en: ["What demos have you built with AI Coding?", "How does the PRD Skill improve delivery?", "How did you build the Dify RAG knowledge base?", "What was your role in the BOC Hong Kong project?", "What role are you looking for?"],
  ja: ["AI CodingでどんなDemoを作りましたか？", "PRD Skillはどう効率を上げますか？", "Dify RAGはどう構築しましたか？", "中国銀行香港プロジェクトでの役割は？", "希望する職種は？"],
};

export function t(locale: Locale) { return ui[locale]; }
export function getProfile(locale: Locale) { return profileData[locale]; }
export function getNowFeed(locale: Locale) { return locale === "zh" ? nowFeed : locale === "en" ? enNow : jaNow; }
export function getExperience(locale: Locale) { return localizeExperience(locale); }
export function getPortfolio(locale: Locale) { return localizePortfolio(locale); }
export function getSkills(locale: Locale) { return locale === "zh" ? skills : localizedSkills[locale]; }
export function getAgentSuggestions(locale: Locale) { return suggestions[locale]; }
