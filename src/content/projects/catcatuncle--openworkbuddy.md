---
repo: "CatCatUncle/openworkbuddy"
name: "openworkbuddy"
description: "Local-first AI office agent that hands you files, not chat logs: swap any LLM (or use local Claude Code/Codex), keep data on your machine, add a skill with one Markdown file. 本机 AI 办公 agent：吐文件不吐聊天记录，不绑模型，数据自己留着。"
readmeQualityOk: true
url: "https://github.com/CatCatUncle/openworkbuddy"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
topics: ["agent", "ai-agent", "ai-agents", "automation", "copilot", "deepseek", "electron", "llm", "local-first", "mcp"]
stars: 68
forks: 21
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 3
recentReleases: 4
createdAt: "2026-08-10T08:18:25Z"
lastCommitAt: "2026-09-12T08:00:29Z"
lastReleaseAt: "2026-09-11T04:33:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 43
maintainers: ["CatCatUncle"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5c70d86e58bb577aeb02d4a194b353c4161873c5a537bd001101b83d9ca41ec/CatCatUncle/openworkbuddy"
---

</p>

<h1 align="center">OpenWorkBuddy</h1>

  <b>一个真吐文件的本机 AI 办公 agent。</b><br>
  说一句人话，它自己规划、动手、验收——交给你的是能直接打开的 PPT / Word / Excel / 网页，<b>不是一段聊天记录</b>。
</p>

  <sub>A local-first AI office agent that hands you files, not chat logs. → <a href="README.en.md"><b>English README</b></a></sub>
</p>

</p>

</p>

  <b>⭐ 觉得有用就点个 Star</b> —— 这个项目没有推广预算，能不能被搜到，基本取决于这个数字。<br>
  <sub>个人、学习、非营利用途<b>免费</b>；公司里用需要授权，<a href="#协议">一句话讲清 ↓</a></sub>
</p>

</p>

---

## 为什么是它

**交付的是文件，不是聊天记录。** PPT / Word / Excel / 网页都是真生成的，成果面板里点开就能验收。声称写了文件却不在磁盘上，会被当场拦下重做。

**不绑任何一家模型，东西都在你手里。** DeepSeek / 通义 / 智谱 / Kimi / OpenRouter / Ollama 本地模型界面点一下就切；本机装了 **Claude Code / Codex** 的，一键拿它当发动机，不再另买 token。自托管，会话、文件、Key 全在本机，默认只监听 `127.0.0.1`。

**加一个能力 = 丢一个 Markdown 文件。** 放进 `skills/`，存盘后下一条任务就生效——不改代码、不重启、不打包。往外接 MCP 连接器和 [Agent Plugins](https://agent-plugins.org) 开放标准，别人的插件粘个 GitHub 地址就装。

## 它替你做完的事

| 你说一句 | 它交给你 |
|---|---|
| 帮我出一份 Q3 复盘 PPT，数据用这个 Excel | 读表 → 算 → 一个能直接放的 `.pptx` |
| 调研国内 AI 陪伴产品，出一份报告 | 联网搜 → 逐个打开读 → Markdown / Word |
| 把这份材料做成手机上能看的网页 | 写 HTML → 起本机服务 → 扫码就能看（[成品长这样](https://hunan-travel.pages.dev/)） |
| 每天 9 点抓行业新闻，做成晨报发我飞书 | 定时任务 + IM 推送，错过了会补跑 |

> 还有多任务并行、Goal 目标验收、👍👎…
