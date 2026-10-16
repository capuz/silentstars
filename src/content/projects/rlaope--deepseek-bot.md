---
repo: "rlaope/deepseek-bot"
name: "deepseek-bot"
description: "DeepSeek Harness gonna be your personal agent, a self-hosted AI teammate that remembers you, ultrafast model and TUI"
readmeQualityOk: true
url: "https://github.com/rlaope/deepseek-bot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agent", "deepseek", "deepseek-harness", "dsh", "llm", "slack", "socket-mode", "cordis", "discord-bot", "slack-bot"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-06T08:44:20Z"
lastCommitAt: "2026-10-16T08:22:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 36
maintainers: ["rlaope", "dbk216"]
openGraphImageUrl: "https://opengraph.githubassets.com/710b170d88ae00e81be8aba7c20008e0a0464a69375c1800999836311a56e8b9/rlaope/deepseek-bot"
---

It remembers your threads, reads what you send it, drafts documents,<br>
  and asks before it deletes anything.

> **Sponsors**
> These are our sponsors. They help keep deepseek-bot going as a personal side project.
> | [<img alt="OpenGateway" src="docs/opengateway-logo.svg" width="156px" />](https://opengateway.ai/) | **[OpenGateway](https://opengateway.ai/)** sponsors deepseek-bot. An OpenAI-compatible gateway that puts many model providers behind one API. Thank you for backing open source. |
> | :-----| :----- |

## Install

```bash
curl -fsSL https://raw.githubusercontent.com/rlaope/deepseek-bot/master/install.sh | bash
dsh                    # talk to it in the terminal
dsh gateway setup      # connect Slack, Telegram or Discord: ↑↓ and Enter
```

The first line installs it, and running it again updates. It needs macOS with Node.js 22+, the
DeepSeek Harness app and a DeepSeek API key — none asked for if the harness already has one. DeepSeek's
own API is the default and needs nothing else; OpenGateway or another OpenAI-compatible endpoint is an
option the installer offers. The bot starts with the terminal, `dsh`.

`dsh gateway setup` connects a messenger: pick one with ↑↓ and…
