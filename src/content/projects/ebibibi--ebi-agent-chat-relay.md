---
repo: "ebibibi/ebi-agent-chat-relay"
name: "ebi-agent-chat-relay"
description: "Multi-frontend agent relay: run Claude Code, Codex, local, and AG-UI agents from Discord or Microsoft Teams"
readmeQualityOk: true
url: "https://github.com/ebibibi/ebi-agent-chat-relay"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ag-ui", "ai-agents", "claude-code", "discord", "microsoft-teams", "openai-codex"]
stars: 58
forks: 29
openIssues: 9
closedIssues: 150
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2026-02-18T04:19:13Z"
lastCommitAt: "2026-10-01T10:23:44Z"
lastReleaseAt: "2026-02-24T13:35:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 43
maintainers: ["ebibibi", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1160542692/567f0930-9575-4d7b-b003-4b7420efd86c"
discussionCount: 2
---

# Ebi Agent Chat Relay

*Formerly Claude Code Discord Bridge, then Claude & Codex Discord Bridge. Every existing
identifier still works: the package is `claude-code-discord-bridge` (kebab-case), the
command is `ccdb`, and `ccdb` remains the short name used throughout this document.*

**Run coding agents from Discord or Microsoft Teams. Choose Claude Code, OpenAI Codex,
a local model, or any compatible AG-UI agent behind the same conversation.**

Ebi Agent Chat Relay turns each Discord thread or Teams conversation into an isolated,
persistent agent session. Work on a feature in one conversation, review a PR in another, and run
a background task in a third — simultaneously. Discord can mix backends per thread; Teams uses the
configured/global backend in v4. The relay handles coordination so sessions do not clobber each
other.

**Why the name changed.** This started as a bridge between one AI and one chat app. It is now a
relay with two production frontends and five backend choices. Three of the four words in the old
name had stopped being true. See [ADR-0001](https://github.com/ebibibi/ebi-agent-chat-relay/blob/HEAD/docs/adr/0001-adopt-ebi-agent-chat-relay.md) for the
decision and…
