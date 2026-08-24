---
repo: "SamSaffron/term-llm"
name: "term-llm"
description: "LLM Swiss Army Knife for your Terminal"
readmeQualityOk: true
url: "https://github.com/SamSaffron/term-llm"
language: "Go"
languages: ["Go"]
languagePcts: [84]
stars: 105
forks: 13
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2025-12-31T01:07:37Z"
lastCommitAt: "2026-08-24T04:21:31Z"
lastReleaseAt: "2026-01-06T06:36:28Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 33
maintainers: ["SamSaffron", "sam-saffron-jarvis"]
openGraphImageUrl: "https://opengraph.githubassets.com/16c8cb306360c90d13fd73b6e1f9a47e6578a61cd954895cf618b3a69c0d3963/SamSaffron/term-llm"
---

</p>

# term-llm

Terminal-first AI runtime for commands, chat, editing, tools, jobs, agents, and local workflows.

Docs hub: **https://term-llm.com**

## Why it exists

- turn natural language into executable shell commands
- run persistent chat with tools and MCP servers
- edit files with model assistance
- support agents, skills, sessions, jobs, and local automation
- work with hosted or local models

```bash
$ term-llm exec "find all go files modified today"

> find . -name "*.go" -mtime 0   Uses find with name pattern
  fd -e go --changed-within 1d   Uses fd (faster alternative)
  find . -name "*.go" -newermt "today"   Alternative find syntax
  something else...
```

## Install

```bash
curl -fsSL https://raw.githubusercontent.com/samsaffron/term-llm/main/install.sh | sh
```

For a source build, clone the repository and install from its root:

```bash
git clone https://github.com/samsaffron/term-llm.git
cd term-llm
go install .
```

`go install github.com/samsaffron/term-llm@latest` cannot build this repository: the application intentionally uses local `replace` directives for the owned Bubble Tea, Ultraviolet, and reflow modules, and dependency-local replacements are not…
