---
repo: "calliopeai/calliope-cli"
name: "calliope-cli"
description: "multi backend CLI coding and general purpose agent"
readmeQualityOk: true
url: "https://github.com/calliopeai/calliope-cli"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 8
forks: 0
openIssues: 7
closedIssues: 230
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-09T01:48:48Z"
lastCommitAt: "2026-09-19T01:18:01Z"
lastReleaseAt: "2026-01-10T02:34:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 58
maintainers: ["ragelink", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1620448ec89baf2b9dfd7f89f7d72f1502c45cf9415ea09b998489beb2b0db54/calliopeai/calliope-cli"
---

# Calliope CLI

**The private-AI agent CLI.** One terminal agent for any model backend — including the ones you run yourself. MIT-licensed, small core, no lock-in.

```bash
npm install -g @calliopelabs/cli
calliope
```

Single-binary installs are available through Homebrew and a `curl` installer,
with no Node.js required — see
[Install as a single binary](https://github.com/calliopeai/calliope-cli/blob/HEAD/docs/getting-started.md#install-as-a-single-binary).

## Why Calliope

- **Any backend, live-discovered.** Hosted providers, local runtimes, and OpenAI-compatible servers share the same workflow. Models and capabilities are discovered from provider APIs; unsupported or unknown behavior stays explicit. See the [provider matrix and real-wire evidence](https://github.com/calliopeai/calliope-cli/blob/HEAD/docs/provider-conformance.md).
- **Built for models you run yourself.** Ollama and self-hosted OpenAI-compatible servers are first-class targets, not checkboxes. Run fully air-gapped.
- **Sandbox-first execution.** Shell and code tools run inside macOS Seatbelt or Docker sandboxes (`auto`/`native`/`docker`/`off`). Blocklists are advisory; the sandbox is the boundary.
- **Safety…
