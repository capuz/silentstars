---
repo: "russeell/jobfindsme"
name: "jobfindsme"
description: "本地优先的 AI 求职 MCP Server：一句话搜索 BOSS直聘、猎聘、智联、前程无忧，按简历排序并追踪新增与已投岗位。"
readmeQualityOk: true
url: "https://github.com/russeell/jobfindsme"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["ai-agent", "china-jobs", "job-search", "mcp-server", "job-tracker", "local-first", "python", "resume", "job-matching", "sqlite"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-07-28T02:41:47Z"
lastCommitAt: "2026-08-14T05:17:03Z"
lastReleaseAt: "2026-08-09T18:38:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 54
maintainers: ["russeell"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba68b99070aed84fdd643b10f3c501d5a241c983b3ae60977971ad928edd5c0b/russeell/jobfindsme"
discussionCount: 0
---

# jobfindsme · AI 求职雷达

**一句话聚合 BOSS直聘、猎聘、智联招聘和前程无忧，按简历筛选并持续追踪岗位。**

<p>
</p>

[快速开始](#-快速开始) · [怎么用](#-怎么用) · [返回结果](#-返回结果) · [岗位来源](#-岗位来源) · [FAQ](#-faq) · [English](https://github.com/russeell/jobfindsme/blob/HEAD/README.en.md)

</div>

---

> 给 Claude Code、Codex、Cursor、ZCode 等 Agent 装一个本地求职 MCP Server。
> 它负责搜岗位、去重、排序和记住状态；Agent 负责和你聊天。

---

## 解决什么问题

每天找工作最烦的不是“不会搜索”，而是这些重复劳动：

| 问题 | jobfindsme 的做法 |
|---|---|
| 多个平台来回切 | 统一检索四个来源；单源失败会明确提示并返回其他来源 |
| 推荐一堆不相关岗位 | 先硬过滤角色、城市、薪资、社招/校招、正式/实习，再排序 |
| 反复看到同一个岗位 | 本地记录已看、已投、已忽略，只汇报变化 |
| 不知道为什么推荐 | 每个岗位固定给出匹配度、证据、风险和投递链接 |
| 不想配置模型 API | 核心功能不依赖 API Key，数据存在本地 SQLite |

一句话开始：

```text
用 jobfindsme，根据本地简历（路径：~/Documents/resume.pdf），
找上海和深圳的 AI 应用工程师，20K以上，社招，正式。
```

---

## 🚀 快速开始

### 方式一：直接和 Agent 说（推荐）

在 Claude Code、Codex、Cursor、ZCode 里直接说（复制整段）：

```text
按 https://github.com/russeell/jobfindsme 的 README 安装 jobfindsme
```

Agent 会读取仓库 README 完成：安装本地运行时（
`curl -fsSL https://cdn.jsdelivr.net/gh/russeell/jobfindsme@main/scripts/install.sh | bash`）
→ 写入 MCP 配置（`jobfindsme connect <当前Agent>`）→ 提示重启。
首次安装需要几分钟；如果 Agent 无法访问网络，改用下面的手动方式。

装好后，直接说需求即可：

```text
根据本地简历 ~/Documents/resume.pdf 找上海和杭州的 AI 应用工程师岗位，20K 以上，社招。
```

###…
