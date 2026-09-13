---
repo: "zhzshuai-create/TradingAgents-Astock"
name: "TradingAgents-Astock"
description: "A股多智能体投研系统 + 实时数据看板，估值"
readmeQualityOk: true
url: "https://github.com/zhzshuai-create/TradingAgents-Astock"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-22T03:42:44Z"
lastCommitAt: "2026-09-13T08:28:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 57
maintainers: ["zhzshuai-create"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b611905816ceea911c1eebd9133de337a21fdc93ea02511cf7819b9ac34991e/zhzshuai-create/TradingAgents-Astock"
---

# TradingAgents-Astock

</p>

AI 多智能体 A 股投资研究平台，集成实时数据看板。基于 [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)（65K+ Stars）的深度定制版。

> ⚠️ 仅供学习研究，不构成投资建议。

---

## 📸 界面预览

### AI 分析报告模式

7 个 AI 分析师（可开启并行加速）→ 多空辩论 → 风控评估 → 最终投资决策。

</p>

### 实时数据报告看板

K 线（分时/5日/30日/全部）· 实时估值指标 · 概念板块 · 强势股列表。

</p>

### AI分析报告界面

同一看板在亮色主题下的展示效果。

</p>

### 分析进度

12 阶段 pipeline 实时进度，7 分析师报告可展开查看，支持暂停/继续/停止。

</p>

### 完整报告导出

信号卡片（Buy/Hold/Sell）+ 7 份分析师报告 + 多空辩论 + 风控评估，支持 PDF / Markdown 下载。

</p>

### K 线周期对比

同一股票不同时间周期（分时/5日/30日/全部）的 K 线切换对比。

</p>

---

## 功能特性

| 功能 | 说明 |
|------|------|
| 🧠 **AI 分析报告** | 7 个 AI 分析师 → Bull/Bear 辩论 → 三方风控 → 最终决策，全自动中文研报 |
| 📈 **实时数据看板** | 交互式 K 线图 · 腾讯实时行情 · 北向资金 · 概念板块归因 · 行业对比 |
| 🌓 **即时主题切换** | 亮色 / 暗色一键切换，纯 JS + CSS 零延迟，localStorage 持久化记忆 |
| 📂 **可展开侧边栏** | 顶部 ☰ 按钮控制，内含股票代码输入、LLM 模型配置、历史记录 |
| 🔥 **强势股归因** | 同花顺当日强势股 + 题材标签（AI 算力 / 低空经济 / MLCC…） |
| ⏸️ **分析过程可控** | 随时暂停 / 继续 / 停止，卡死自动检测告警 |
| 📥 **双格式导出** | Markdown（零依赖）和 PDF 中文完整报告，跨平台字体适配 |
| 📝 **历史记录** | 自动保存所有分析，支持代码/日期搜索，一键回溯查看 |
| ⚡ **分析师并行（可选）** | 设 `TA_PARALLEL_ANALYSTS=1` 后 7 个分析师 fan-out 并发执行，墙钟时间约等于最慢的一个 |
| 💾 **断点续跑** | 开启 checkpoint 后分析中途崩溃可从最后完成的节点恢复，配合暂停/停止 |…
