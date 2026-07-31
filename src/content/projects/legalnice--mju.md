---
repo: "LegalNice/mju"
name: "mju"
description: "Local-first agent workbench for legal work — case boards, global dates, and task-bound AI chat on top of your Obsidian vault"
readmeQualityOk: true
url: "https://github.com/LegalNice/mju"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["ai-agents", "legaltech", "local-first", "nextjs", "obsidian"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-07-21T02:11:52Z"
lastCommitAt: "2026-07-31T06:30:29Z"
lastReleaseAt: "2026-07-29T10:03:23Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 54
maintainers: ["LegalNice", "agegr"]
openGraphImageUrl: "https://opengraph.githubassets.com/19aa4bb8d88ebbf3ae4f6f4d393ff735b1684d0f81669428832fd0d283161481/LegalNice/mju"
---

# Mju Agents

[npm](https://www.npmjs.com/package/@tttangerine/mju) · [许可证：MIT](https://github.com/LegalNice/mju/blob/HEAD/LICENSE) · [路线图](https://github.com/LegalNice/mju/blob/HEAD/docs/roadmap.md)

> 你的严格但公正的法律助手：从一句话开始，把经过复核的工作落到正确案件里。

</p>

</p>

## 截图导览：从初始化到案件执行

下面这组截图对应一条完整的使用路径：先选择项目文件夹，再从一句话发起任务，让 Mju 识别案件归属，最后进入案件看板推进。

### 1. 初始化项目文件夹

首次进入 Mju 时，需要选择一个项目文件夹。这个文件夹可以是现有 Obsidian 文件库，也可以是一个空文件夹。

- 勾选「生成标准结构」后，Mju 会创建案件、任务、期限、日程等基础目录，便于后续按案件归档。
- 勾选「写入 Agent 指导文件」后，Mju 会在项目中写入 `AGENTS.md`，让 Agent 明确这个项目的案件结构和写作规则。
- 如果选择的是 Obsidian vault，Mju 会尽量识别既有 `ops/cases`、`ops/projects` 等目录，不要求你迁移到一个封闭数据库里。

### 2. 在进入页输入任务

初始化后会进入主输入页。这里不是普通聊天窗口，而是整个系统的入口。

- 在输入框里直接写要处理的事项，例如「这个案件需要做一个法律研究」。
- 右上角可以切换当前项目，也可以点击「新建案件」补建案卷。
- 输入框下方的 Models、Skills、Agents、Plugins、MinerU、Theme 是运行配置入口，用于切换模型、管理技能、配置子 Agent、配置插件和材料转换能力。
- 页面下方的「近期在办」用于聚合各案件即将跟进的事项。

### 3. 新建案件并选择类型

如果任务还没有对应案卷，可以在进入页直接新建案件。截图里的「abc vs def」是一个虚构案件名。

- 案件类型目前区分为争议解决、顾问、专项等，用来决定默认结构和后续工作流。
- 创建后，案件会进入当前项目的案件列表，后续任务可以直接归属到这个案件。
- 无法识别归属的任务会进入「通用任务」，避免任务丢失。

### 4. 识别案件归属并启动 Agent

当你输入任务时，Mju 会根据任务内容识别所属案件。截图中系统将任务识别到「abc vs def」。

- 如果识别正确，直接点击发送按钮即可启动。
- 如果识别错误，点击「更改」可以搜索并切换到正确案件。
- 启动后，Mju 会在该案件文件夹内开启 Agent…
