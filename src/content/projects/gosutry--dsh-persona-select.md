---
repo: "gosutry/dsh-persona-select"
name: "dsh-persona-select"
description: "DSH plugin that injects system prompts and settings into context. Includes a built-in roleplay persona: a blue, plump, rice-freeloading fish-like whale girl maid! Has a “one-click pure chat” feature that blocks all DSH host-side input, and presets can be saved to quickly switch system prompts from the session page."
originalDescription: "DSH注入系统提示词和设置注入上下文插件。内置吃白饭的蓝色大肥鱼拟人鲸鱼娘女仆角色扮演设定！带“一键为纯聊天”功能屏蔽DSH宿主侧全部输入，通过预设保存可在会话页快速切换系统提示词。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/gosutry/dsh-persona-select"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["ai-persona", "context-injection", "cordis", "deepseek", "deepseek-harness", "dsh", "dsh-plugin", "llm", "nodejs", "persona"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-12T18:43:28Z"
lastCommitAt: "2026-11-26T13:01:03Z"
lastReleaseAt: "2026-11-13T15:09:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 55
maintainers: ["gosutry"]
openGraphImageUrl: "https://opengraph.githubassets.com/10fcf82632d0786397aba198aa0bf0798af643d4b40d2e04dd520e4551152095/gosutry/dsh-persona-select"
---

# dsh-persona-select · Persona Management and Persona Injection

> DSH plugin: injects persona text into the **system prompt** and conversation history into the **context**. The persona management section on the settings page handles saving and editing, and you can switch personas at any time from the row below the conversation mode selector.
>
> Bilingual README. [中文](#中文) · [English](#english)

---

---

## 中文

### 这个插件做什么

它负责两件事：把一段文字送进**系统提示词**，把一段对话送进**上下文**。为了说清楚，本文与插件设置界面统一使用两个叫法：

| 叫法 | 指的是 |
| --- | --- |
| **人设正文** | 注入系统提示词的那段内容 |
| **历史对话** | 作为上下文注入的一段“已经发生过”的对话 |

两者按**人设**成对保存：在设置页把人设正文和历史对话写好、存成一条预设“人设”，之后在对话里选中这条人设，两者按各自的规则进入这一次请求。

### 注入的规则

**人设正文**进入系统提示词的**人设段**，**注入位置可自行编辑**：“段序权重”决定这一段排在系统提示词的哪个位置。

- **数值**：按权重大小排序，**数字越小越靠前**（默认 `-1`，排在预设里那句 "You are a coding agent…" 之前）。
- **追随**：点“追随”后，人设段被放到**所有系统提示词段之后**。
- 权重只影响排序，**永远不会混进人设正文**；每条人设各自保存自己的权重，编辑框跟着当前选中的那条人设走。
- 必须填整数（`-1000000000` ~ `1000000000`）：小数、指数、带单位都会被拒绝保存。

**历史对话**在**新对话的第一步**作为 user 侧上下文注入一次，并按仿照 DSH 自身注入的格式包裹：
