---
repo: "naledao/Web2Term"
name: "Web2Term"
description: "GPT Web to Codex Terminal is a desktop workspace that puts web-based conversations, persistent local/SSH terminals, and project files and various development tool information in the same Electron window. The model is responsible for understanding goals and generating commands, while the app executes commands on the selected machine and sends the results back to the current conversation."
originalDescription: "GPT Web to Codex Terminal 是一个桌面工作区：把网页端的对话、可持续的本机/SSH 终端，以及项目文件和各种开发工具信息放在同一个 Electron 窗口里。模型负责理解目标和生成命令，应用负责在选定的机器上执行命令并把结果回传到当前对话。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/naledao/Web2Term"
homepage: "https://web2term.kangnasi.xyz"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [46, 37]
stars: 9
forks: 0
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-09-22T05:10:39Z"
lastCommitAt: "2026-10-23T09:33:37Z"
lastReleaseAt: "2026-10-23T09:31:44Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 63
maintainers: ["naledao", "github-actions[bot]", "greatLiverheat605"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a87c52101ba3dea217120eb0e43d1f584d0e4178d72ebec4f1fff0936dcde85/naledao/Web2Term"
---

# Web2Term

[Chinese](#中文) · [English](#english) · [Download / Downloads](https://github.com/naledao/Web2Term/releases/latest)

## Chinese

Web2Term puts model web pages, project conversations, and local/remote terminals into the same desktop workspace. Using web accounts for ChatGPT, DeepSeek, Claude, or Gemini, you describe your goal. The model proposes commands, and the client executes them, returns the actual output, exit codes, and working directory, and then continues to the next step.

The repository includes two programs intended for users:

| Program | Purpose | Current release target |
| --- | --- | --- |
| Web2Term desktop client | Manage projects and conversations, embed model web pages, execute commands, use the toolbox, and connect to remote devices. | Windows x64 installer, macOS Apple Silicon DMG. |
| `web2term` utility | Keeps the backend connection alive on Linux devices so the desktop client can open remote terminals; the device does not need to run sshd. | Linux x86_64 (amd64) single-file program. |

The client uses the model websites directly and does not require configuring a model API key. Model accounts, available features, and attachment quotas are…
