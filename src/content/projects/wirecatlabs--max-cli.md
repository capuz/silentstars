---
repo: "WireCatLabs/max-cli"
name: "max-cli"
description: "MAX CLI for people, bots and agents: personal account and MAX Bot API in the terminal, MCP and skills for Claude, Codex and Cursor"
originalDescription: "MAX CLI для людей, ботов и агентов: личный аккаунт и Bot API MAX в терминале, MCP и навыки для Claude, Codex и Cursor"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/WireCatLabs/max-cli"
homepage: "https://wirecat.dev/ru/docs/max"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["ai-agents", "bun", "claude-code", "cli", "max", "max-api", "max-messenger", "mcp", "mcp-server", "messenger"]
stars: 10
forks: 3
openIssues: 5
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-09-18T17:48:14Z"
lastCommitAt: "2026-10-30T11:02:41Z"
lastReleaseAt: "2026-09-25T18:42:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 50
maintainers: ["leemour", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1376233037/3d349720-e593-4641-9183-3bd833129b4f"
discussionCount: 1
---

# MAX CLI for people, bots and agents

Your account and your [MAX](https://max.ru) bots — in the terminal and in AI agents. Read, search and reply yourself, or delegate it to Claude, Codex and Cursor — on your terms.

[Документация](https://wirecat.dev/ru/docs/max) · [Примеры](https://github.com/WireCatLabs/max-cli/blob/main/docs/recipes.md) · [WireCat](https://wirecat.dev/ru)

Example conversation with an agent (people and chats are fictional):

```text
You:    What did I promise to whom over the last three days?
Agent:  (calls max personal review: 12 chats, 3 voice messages transcribed)
        I owe
        · Алисе Пример — send the invoice by Friday. Personal chat, 24.09
        Waiting on others
        · Борис Образцов — mockup by 25.09. Not yet in the "Дизайн" group
        Needs clarification
        · "Проект Альфа": who is bringing the samples — agreed to "decide later", 25.09
You:    Remind Борис about the mockup.
Agent:  Draft: "Борис, привет! Как там макет?" Send?
You:    Yes.
```

## Quick start

```sh
npm install -g @wirecat/max-cli
max skill install --for all         # skill for Claude Code, Codex and Gemini CLI
max personal setup                  # sign in with QR…
