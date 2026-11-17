---
repo: "calliopeai/calliope-cli"
name: "calliope-cli"
description: "multi backend CLI coding and general purpose agent"
readmeQualityOk: true
url: "https://github.com/calliopeai/calliope-cli"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 8
forks: 1
openIssues: 15
closedIssues: 288
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-09T01:48:48Z"
lastCommitAt: "2026-11-17T14:34:12Z"
lastReleaseAt: "2026-01-10T02:34:54Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 66
maintainers: ["ragelink", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c584aa5a87085b32a65392f0d63115ba9b66b6ec7c51daee798622dea33d3fe2/calliopeai/calliope-cli"
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
