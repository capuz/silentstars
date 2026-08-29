---
repo: "osodevops/ms-teams-cli"
name: "ms-teams-cli"
description: "A fast, single-binary Microsoft Teams CLI built in Rust — agent-first design, structured JSON output, real-time webhooks, and full Graph API coverage"
readmeQualityOk: true
url: "https://github.com/osodevops/ms-teams-cli"
homepage: "http://msteamscli.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["agent-first", "automation", "chatops", "cli", "command-line-tool", "graph-api", "json", "microsoft-graph", "microsoft-teams", "rust"]
stars: 33
forks: 5
openIssues: 4
closedIssues: 20
watchers: 1
contributors: 5
recentReleases: 6
createdAt: "2026-03-12T06:47:47Z"
lastCommitAt: "2026-08-29T17:28:36Z"
lastReleaseAt: "2026-07-09T06:15:32Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 48
maintainers: ["sionsmith", "aberoham", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/27cea917ca270164688f2bb41ebb87bd0243732bc17c3ec91abc61e401819775/osodevops/ms-teams-cli"
---

# teams — Microsoft Teams CLI for AI Agents and Developers (Rust)

A fast, single-binary CLI that gives AI agents and automation full access to [Microsoft Teams](https://teams.microsoft.com) via the Microsoft Graph API.

Every command returns structured JSON with deterministic exit codes — designed from the ground up for autonomous agents (Claude, GPT, custom LLM agents), CI/CD pipelines, and developer scripts. Not a chatbot framework. A tool that agents wield.

Website: [msteamscli.com](http://msteamscli.com/)

## Why This Exists

AI agents need to operate in Microsoft Teams — reading messages, posting updates, managing channels, reacting to events — but there is no comprehensive CLI for Teams. Existing MCP servers cover only a fraction of the Graph API. Bot Framework SDKs assume a conversational UI inside Teams, not an external agent calling in.

**teams-cli** fills this gap: a complete, headless, machine-readable interface to Teams that any agent can call as a subprocess.

## Agent Integration Contract

Every command, when piped or called programmatically, returns a **JSON envelope**:

```json
{
  "success": true,
  "data": { "id": "...", "displayName": "Engineering", "..." :…
