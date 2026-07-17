---
repo: "weibaohui/ntd"
name: "ntd"
description: "AI-driven task engine"
originalDescription: "AI 驱动的任务引擎"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/weibaohui/ntd"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [65, 33]
stars: 10
forks: 2
openIssues: 0
closedIssues: 196
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-04-27T15:40:43Z"
lastCommitAt: "2026-07-17T05:58:26Z"
lastReleaseAt: "2026-05-02T06:30:56Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 61
maintainers: ["weibaohui", "claude", "coderabbitai[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/65be7c8996dbd1fde394c74bb5e4e850bc8bd32d5d1abc3416cd33307ad046e7/weibaohui/ntd"
---

# ntd — Now Task, Done

**ntd** (Now Task, Done) is an AI-driven task engine — you just create tasks, and the rest — assignment, execution, completion — is all handled by AI.

> Create and execute, execute and complete.

---

## What is ntd

ntd allows AI to perform **real tasks** for you: writing code, researching, analyzing data, generating reports — not a chatbot, but a CLI executor that can manipulate files, run commands, and call tools.

**Suitable scenarios:**

- Need AI to help you with code development, data analysis, content creation, and other practical work
- Want to centrally manage AI execution records for easy review and tracing
- Need to schedule AI tasks for automated workflows
- Trigger AI tasks and receive execution results through Feishu groups

---

## Quick Start

### Installation

You need to install [Node.js](https://nodejs.org/) 20+, then execute:

```bash
npm install -g @weibaohui/ntd
```

ntd will automatically pull the corresponding precompiled binary for your platform (macOS / Linux / Windows, x86_64 & ARM64).

### Start

```bash
ntd                      # Start the service (default port 8088)
open http://localhost:8088  # Open the browser
```

It's…
