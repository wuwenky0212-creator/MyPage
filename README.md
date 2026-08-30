# 欣桥 · AI Product Architect — Self-as-a-Service 个人主页

> 一个把简历做成 AI 原生 SaaS 产品的实验。
> Next.js 14 + Tailwind CSS + RAG（可挂 Claude / OpenAI）。

## ✨ 模块速览

| Module | 文件 | 说明 |
|---|---|---|
| 1. Profile | `components/Profile.tsx` | 头像、定位句、状态标签、快捷 CTA |
| 2. Now Feed | `components/NowFeed.tsx` | 类 Twitter 信息流，可按 Hackathon / Learning / Reading 等过滤 |
| 3. Experience | `components/Experience.tsx` | 垂直时间线，时代银通 → 埃森哲 → 券商 → 学历 |
| 4. Portfolio | `components/Portfolio.tsx` | 卡片化作品集，每卡含 3 个核心数据 + 外链 |
| 5. Skill Stack | `components/SkillStack.tsx` | 分组标签 + 跑马灯（双向滚动） |
| 6. AI Agent | `components/AIAgent.tsx` + `app/api/chat/route.ts` | 数字分身对话，Mock / Anthropic / OpenAI 三选一 |
| 7. CTA | `components/CallToAction.tsx` | PDF 简历下载 + 邮箱 / 微信 / LinkedIn / GitHub |

## 🚀 本地启动

```bash
# 1. 安装依赖
npm install

# 2. 复制环境变量
cp .env.example .env.local

# 3. 启动 dev server
npm run dev
# → http://localhost:3000
```

## 🤖 AI Agent 接入（可选）

默认走 Mock 实现（基于关键词检索 + 模板回复），打开页面即可对话演示。
要切换为真实模型，编辑 `.env.local`：

```bash
# 走 Anthropic Claude
AI_PROVIDER=anthropic
ANTHROPIC_API_KEY=sk-ant-xxxx

# 或走 OpenAI
AI_PROVIDER=openai
OPENAI_API_KEY=sk-xxxx
```

接入逻辑全部在 `app/api/chat/route.ts`，包含：
- System Prompt 自动从 `lib/data.ts` 拼装（让模型用第一人称回答）
- Edge Runtime 部署到 Vercel 几乎免费
- 失败自动 fallback 到 Mock，不会 404

### （进阶）真正的 RAG

当前版本是 “Prompt 内塞知识库” 的简化方案。要做完整 RAG：

1. 把 `lib/data.ts` 中的 `knowledgeChunks` 切到向量数据库（pgvector / Qdrant / Pinecone）
2. 在 `route.ts` 中先做 embedding 检索，再把 top-k 拼到 system prompt
3. 推荐用 Vercel AI SDK + `ai-sdk/anthropic`，几行代码搞定

## 🔁 自动化数据源（PRD 模块 2 进阶项）

PRD 提到 “通过 MCP 挂载 GitHub / Notion API 让 Now Feed 自动更新”。
建议方案：

- **GitHub**：`https://api.github.com/users/<你>/events/public` → 解析为 NowItem
- **Notion**：`@notionhq/client` 拉取一个名为 “Now” 的数据库
- 把同步脚本写成 `app/api/sync-now/route.ts`，配 Vercel Cron Job 每小时跑一次
- 同步结果写到 KV (Vercel KV / Upstash Redis)，前端直接 fetch

## 📦 部署到 Vercel

```bash
vercel deploy
```

记得在 Vercel 项目设置里同步 `.env.local` 中的环境变量。

## 📝 把数据替换成你自己的

所有内容都集中在 `lib/data.ts`，按以下顺序改即可：

1. `profile`：姓名、Tagline、邮箱、社交链接
2. `nowFeed`：删掉示例，按时间倒序加你最近的动态
3. `experience`：你的真实履历
4. `portfolio`：4 个核心项目，每个写 3 个亮眼数据
5. `skills`：分组技能
6. `knowledgeChunks`：用第一人称写 10–30 条 “知识切片”，AI Agent 直接吃这个

> 把头像图片放到 `public/avatar.png`，把 PDF 简历放到 `public/Xinqiao_Resume.pdf`。

## 🎨 设计 Token

| Token | 颜色 | 用途 |
|---|---|---|
| `accent.violet` | `#8b5cf6` | 主品牌色 |
| `accent.cyan` | `#22d3ee` | 副色 / 渐变终点 |
| `accent.lime` | `#a3e635` | 高亮 / 状态 |
| `ink.950 → 600` | 深色背景层级 | 玻璃拟态底 |

字体走 system fallback，中文优先 PingFang SC / 微软雅黑，不依赖外部字体加载。

## License

MIT — Fork 后改成你自己的吧。
