---
repo: "miaoziguan/obsidian-chinese-plugin-market"
name: "obsidian-chinese-plugin-market"
description: "面向中文用户的 Obsidian 社区插件搜索工具：输入关键词即可检索并展示翻译后的插件卡片，支持 AI 语义 / 名称 / 作者搜索。"
readmeQualityOk: true
url: "https://github.com/miaoziguan/obsidian-chinese-plugin-market"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
stars: 14
forks: 2
openIssues: 0
closedIssues: 36
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-05T11:26:48Z"
lastCommitAt: "2026-08-31T09:59:32Z"
lastReleaseAt: "2026-08-05T13:45:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 56
maintainers: ["miaoziguan", "frank6com"]
openGraphImageUrl: "https://opengraph.githubassets.com/48eb28ab0a0fd57fd5ee5219dba3cb7d357e1bbdfd29cd1d3c8668fb73678a7e/miaoziguan/obsidian-chinese-plugin-market"
---

# 🀄 Chinese Market —— 让中文用户真正「用得上」的 Obsidian 插件市场

> 不再被满屏英文插件名劝退。输入一句话，中文区优质插件即刻浮现眼前。

---

## 🔥 为什么需要它？

你打开 Obsidian 社区插件市场，面对的是 **五千多个**英文命名的插件——`dataview`、`templater-obsidian`、`obsidian-linter`…… 名字看不懂，描述看不完，中文用户想找个「思维导图」插件要翻半小时。

**这不合理。**

Chinese Market 把这件事彻底翻过来：**用中文搜、看中文、装得顺**。它是专为中文区用户打造的 Obsidian 社区插件搜索与翻译工具——不是又一个英文市场的壳，而是真正把「语言门槛」砸碎的利器。

---

## ✨ 它能做什么？

- **🔍 中文搜索，一步到位**
  输入「思维导图」「日历」「同步」「日程」，立刻检索并展示翻译后的插件卡片。支持三种搜索模式自由切换：
  - **关键词**：搜中文名、原名、作者，支持高级语法
  - **本地语义**：本地向量召回，离线、免 API、按相关度排序
  - **AI 语义**：用自然语言描述需求（"做思维导图的插件"），AI 召回并排序

- **🌐 全卡片翻译**
  插件名、描述、功能说明，统统翻译成中文。看不懂？不存在的。

- **🌐 多层翻译通道，零配置可用**
  卡片名/描述/README 翻译由多层免费通道自动兜底：腾讯翻译（免费）→ Google → MyMemory → 腾讯云（需自填密钥）。其中**腾讯翻译（免费）为零配置、无密钥的免费通道**，默认开启，位于翻译链最前。注意：该通道为非官方逆向接口（transmart.qq.com，依赖腾讯 Transmart 扩展同源实现），可能随时变更或失效；失效时自动降级到后续通道，不影响使用。可在设置中关闭。

- **🎛️ 智能筛选，所见即所得**
  按来源、分类、作者、安装状态多维过滤。筛选条件常驻显示，随手 ✕ 即清，再也不怕「列表莫名变少却不知为何」。

- **⚖️ 对比模式**
  多个功能相近的插件并排对比，AI 帮你做深度分析，决策不再靠猜。

- **🍎 macOS 系统翻译**
  （仅 macOS 桌面端）一键调用系统翻译，把插件 README 整篇译成中文——深度了解一个插件，从未如此轻松。

- **📌 收藏与推荐**
  收藏常用插件，发现官方精选，构建你自己的中文插件工具箱。

---

## 📦 安装

### 方式一：社区插件市场（推荐）
1. 打开 Obsidian → 设置 → 第三方插件 → 社区插件市场
2. 搜索 **「Chinese Market」**
3.…
