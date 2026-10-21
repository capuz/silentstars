---
repo: "using-system/otelyssey"
name: "otelyssey"
description: "OpenTelemetry plugins for every coding agent, in the Agent Plugins format — a marketplace that runs itself: open an issue, the repository validates, reviews, lists and follows your plugin."
readmeQualityOk: true
url: "https://github.com/using-system/otelyssey"
homepage: "https://github.com/using-system/otelyssey#plugins"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-plugins", "agent-skills", "ai-agents", "claude-code", "coding-agents", "copilot-cli", "developer-tools", "marketplace", "mcp", "observability"]
stars: 92
forks: 0
openIssues: 1
closedIssues: 77
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-19T11:22:20Z"
lastCommitAt: "2026-10-21T20:00:30Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 35
maintainers: ["otelyssey-bot[bot]", "using-system", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1377066211/f11e752c-75e5-4d64-8d51-5fd888518484"
discussionCount: 0
---

# otelyssey

A marketplace of OpenTelemetry agent plugins in the
[Agent Plugins](https://agent-plugins.org/) format, run by the repository
itself: submit a plugin once; the repository checks it, lists it and
follows its releases.

## Install

Add the marketplace to your client:

```text
claude plugin marketplace add using-system/otelyssey
copilot plugin marketplace add using-system/otelyssey
codex plugin marketplace add using-system/otelyssey
grok plugin marketplace add using-system/otelyssey
apm marketplace add using-system/otelyssey
hermes plugins pack install https://raw.githubusercontent.com/using-system/otelyssey/main/hermes-pack.yaml
```

Then pick a plugin below: its page has the install line — and the ones for
VS Code, Kiro, OpenClaw and Mistral Vibe.

## Submit a plugin

**[Open a plugin submission](https://github.com/using-system/otelyssey/issues/new?template=submit-plugin.yml)**
— one form, the repository does the rest.

Your plugin needs:

- a public GitHub repository;
- a `plugin.json` in the [Agent Plugins](https://agent-plugins.org/) format,
  at the repository's root or in a subdirectory: the form asks for its URL,
  everything else is read from it;
- OpenTelemetry…
