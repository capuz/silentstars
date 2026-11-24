---
repo: "jon890/dooray-cli"
name: "dooray-cli"
description: "A CLI tool wrapping the NHN Dooray REST API. Manage Dooray tasks from your terminal or AI agent workflows."
originalDescription: "A CLI tool wrapping the NHN Dooray REST API. Manage Dooray tasks from your terminal or AI agent workflows."
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/jon890/dooray-cli"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 10
forks: 8
openIssues: 1
closedIssues: 81
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-04-02T23:07:37Z"
lastCommitAt: "2026-11-24T01:57:52Z"
lastReleaseAt: "2026-05-09T14:28:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 67
maintainers: ["jon890"]
openGraphImageUrl: "https://opengraph.githubassets.com/31a444efef175cdc62f3325ac45bd983512bc8b420712e835cd472b017514de6/jon890/dooray-cli"
---

# dooray-cli

[NHN Dooray](https://dooray.com) is a CLI that lets you use Dooray from the terminal and AI agents.

Handle tasks, comments, wiki, mail, messenger, and calendar with single command lines.
Install it as a skill in Claude Code and Codex, and it understands requests like "create a task" and handles them.

```
"Create a task '로그인 실패 로그 확인' in the 백엔드 project and assign it to 김철수"
"Add a comment '80% 완료' to task 42"
"Show me unread mail"
"Notify the 개발팀 chat room that the deployment is complete"
```

## This is for you if

- You want to check and organize Dooray tasks in the terminal without opening the Dooray web app
- You want to have an AI agent handle task creation, comments, and wiki organization
- You want to automate repetitive Dooray work, such as deployment alerts or regular reports, with scripts

## Quick start

Node.js 20 or later is required.

### 1. Install

```bash
npm install -g @bifos/dooray-cli
```

In a repository that pins Node.js with mise, install with `mise use -g npm:@bifos/dooray-cli`.
The `dooray` shim installed with `npm install -g` fails in that repository with `No version is set for shim: dooray`.
