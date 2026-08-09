---
repo: "CaptainLand/AporiaX"
name: "AporiaX"
description: "AporiaX — a local-first desktop agent for code and Office work, with visible Route, reviewable Evidence, and reversible Anchor checkpoints."
readmeQualityOk: true
url: "https://github.com/CaptainLand/AporiaX"
homepage: "https://github.com/CaptainLand/AporiaX/releases/latest"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [71, 29]
topics: ["ai-agent", "deepseek", "desktop-app", "electron", "local-first", "react", "ai-coding-agent", "llm", "office", "openai-compatible"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-07-30T06:42:23Z"
lastCommitAt: "2026-08-09T04:46:09Z"
lastReleaseAt: "2026-08-08T07:04:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 35
maintainers: ["CaptainLand"]
openGraphImageUrl: "https://opengraph.githubassets.com/212e506d46e917f47d2ac45522ade861fc090f29fdf7ff1e826b1c32c1a342f1/CaptainLand/AporiaX"
discussionCount: 1
---

</p>

<h1 align="center">AporiaX</h1>

  <strong>简体中文</strong> · <a href="README_EN.md">English</a>
</p>

  <em>Every problem begins with an aporia.</em>
</p>

</p>

</p>

AporiaX 是一个 local-first 桌面 Agent，把模糊需求转化为可观察、可验证、可回退的
行动路径。它可以直接操作授权工作区、编辑代码、生成真实 Office 文件，并把每一步修改、
验证依据和最终产物留在界面中，而不是只给出一段聊天回复。

> [!IMPORTANT]
> AporiaX `v0.3.4` 仍处于 Preview 阶段，当前提供 Windows x64 构建。
> `run_command` 默认在本地临时工作区副本中自动执行，结束后通过冲突检查同步项目变更，
> 不需要逐条批准。Docker 完全可选；启用后会升级为默认断网、只读系统的 OS 级强隔离。
> 本地沙箱主要隔离工作区改动，仍使用当前用户的本机网络与进程权限。

- **Route**：展示每一次任务实际发生的步骤，而不是隐藏在聊天文字之后。
- **Evidence**：保留工具调用、文件修改、验证结果和失败原因。
- **Anchor**：为文件修改建立检查点，支持逐行审核和安全回退。

<table>
  <tr>
    <td width="50%"><img src="docs/assets/welcome.png" alt="AporiaX 粒子海欢迎页" /></td>
    <td width="50%"><img src="docs/assets/about.png" alt="AporiaX Route Evidence Anchor" /></td>
  </tr>
  <tr>
    <td align="center"><strong>从一个疑问开始</strong><br><sub>开屏与中英双语入口</sub></td>
    <td align="center"><strong>Route · Evidence · Anchor</strong><br><sub>看见路径，保留依据，随时安全回退</sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/assets/dialogue.png" alt="AporiaX Dialogue 对话与自检" /></td>
    <td width="50%"><img src="docs/assets/route.png" alt="AporiaX Route…
