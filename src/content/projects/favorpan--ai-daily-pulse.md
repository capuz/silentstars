---
repo: "FavorPan/ai-daily-pulse"
name: "ai-daily-pulse"
description: "AI Daily Pulse — 每日自动聚合 44 RSS 源，LLM 智能评分去重，输出 Obsidian 格式中文日报。聚焦 AI 赚钱案例、电商、工具流、新模型、融资动态。"
url: "https://github.com/FavorPan/ai-daily-pulse"
homepage: "https://ai-daily-pulse.top"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [49, 41]
topics: ["ai-agent", "ai-tools", "awesome-ai-agents"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-18T06:42:39Z"
lastCommitAt: "2026-06-25T01:37:17Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 50
maintainers: ["FavorPan", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/80e6275b1045ce1ecd1917e9537dd4d7a408288d1493e452cc6985df0dc8a500/FavorPan/ai-daily-pulse"
---

# AI Daily Pulse

[📖 Read this in English](README-en.md)

> 🌐 **[ai-daily-pulse.top](https://ai-daily-pulse.top)** — 47 个信息源自动抓取 → 规则预筛选 → AI 智能评分 → 语义去重 → 趋势检测 → last30days 构建方向提炼 → 中英双语日报，每天早上打开就能看。

---

## 这是什么？

每天有大量 AI 资讯发布在各种平台上，手动刷太累、容易漏。

**AI Daily Pulse** 帮你自动完成这件事：

1. 从 47 个 RSS 信息源（英文 + 中文）抓取最新文章
2. **规则预筛选**：过滤标题过短、内容过少的低质量文章（节省 AI 调用成本）
3. 用 AI 给每篇文章打分（0-10），只留高质量内容
4. **Jaccard 标题去重**：先用词级相似度粗筛，疑似重复才送 AI 精确判断
5. **中英双语摘要**：每篇入选文章自动生成中文 + 英文摘要
6. **趋势检测**：基于 LLM 标签的跨源聚类，识别持续出现的主题
7. **构建方向提炼**：基于 last30days 社区讨论热度，自动生成可做的 AI 项目建议（含难度、MVP 天数、变现模式）
8. **社媒文案生成**：自动生成 X/Twitter 发帖文案 + Thread

整个过程全自动，你只需要**每天打开看一眼**。

### 关注方向

- OPC / 一人公司 / AI 赚钱案例（含收入数字、获客路径、冷启动方法）
- AI + 电商（选品、广告、独立站、工作流）
- AI 工具实操 / Agent 工作流（可复用的 prompt、操作步骤、开源项目）
- AI 新技术 / 新模型（benchmark 数据、API 定价、开源状态）
- 投融资动态（融资金额、估值、投资方）

---

## 效果长什么样？

每天生成一份 `output/AI Daily - YYYY-MM-DD.md`，打开后是这样的：

```markdown
## OPC/AI赚钱案例

### [40 installs per day to 130. 34 USD per day to 130.](https://reddit.com/...)
- **来源**：Reddit r/SideProject
- **评分**：8/10
- **标签**：`#ASO实战` `#一人公司` `#增长黑客`
- **AI 评语**：💡 ASO 优化是当前移动端增长最被低估的杠杆，本周多个独立开发者分享类似经验
- **摘要**：开发者通过5个ASO优化调整，将应用从每天40次自然安装、34美元收入提升至…
