---
repo: "Lixiaoyiao/deepseek-harness-action"
name: "deepseek-harness-action"
description: "Community GitHub Action for DeepSeek Harness — AI Code Review · CI Diagnosis · Auto Fix · Issue → PR"
readmeQualityOk: true
url: "https://github.com/Lixiaoyiao/deepseek-harness-action"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["ai-agent", "ci-cd", "code-review", "coding-agent", "deepseek", "deepseek-harness", "developer-tools", "dsh", "dsh-plugin", "github-actions"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 59
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-14T00:04:51Z"
lastCommitAt: "2026-08-25T04:09:43Z"
lastReleaseAt: "2026-08-24T04:21:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 54
maintainers: ["Lixiaoyiao"]
openGraphImageUrl: "https://opengraph.githubassets.com/58758a4317929f4ddb17b44c1992f44af62c9988931758e82469f4e81dc76e7e/Lixiaoyiao/deepseek-harness-action"
discussionCount: 1
---

# DeepSeek Harness for GitHub

[中文](https://github.com/Lixiaoyiao/deepseek-harness-action/blob/HEAD/README.zh-CN.md)

Run DeepSeek Harness directly from GitHub pull requests, issues, failed CI jobs, and maintainer-authored automations.

```text
GitHub PR / Issue / CI  →  DeepSeek Harness  →  Review / Diagnose / Fix / Issue → PR
```

The Action starts a credential-isolated DSH worker, validates its structured result, and lets a trusted Controller publish comments or validated changes. This is a community project, not an official DeepSeek or GitHub product. It is maintained by [@Lixiaoyiao](https://github.com/Lixiaoyiao).

## Core capabilities

| Capability              | What it does                                                                                          |
| ----------------------- | ----------------------------------------------------------------------------------------------------- |
| Pull request review     | Reviews new commits, publishes one summary, and adds high-confidence inline findings                  |
| General tasks           | Answers repository questions or performs an explicitly authorized coding task                         |
| CI diagnosis and…
